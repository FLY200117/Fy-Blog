# 大文件上传

思路：

1. 首先需要对**大文件进行拆分**，即一个请求拆分多个请求，并且将每次拆分的索引随着请求传递到后端中，让后端根据索引来进行文件合并
2. 在所有切片上传完成之后，需要通知服务器做**合并切片**
3. 控制多个**请求的并发**，防止大数量的请求导致服务器拒绝访问，造成浏览器内存溢出网页卡死等，需要对请求进行并发数量的控制
4. **断点续传**，当多个请求中有请求发送失败的时候，或者是在传递的过程中发生网络异常等，需要对失败的请求做处理记录，让下一次的发送只发送未成功上传的切片文件
5. **文件秒传**，即资源服务器中已经有该文件了，其他人上传的时候直接返回其URL





## 实现代码（V3为模板）

```vue
<template>
  <input type="file" @change="change"/>
  <button @click="upload">上传</button>
</template>
```



首先获取input框中的文件

```js
let file
const change = async (e) => {
   const target = e.target
   if(target.files) {
     file = target.files[0]
   }
}
```

然后是设置上传按钮，在回调事件中进行文件上传

```js
	const upload = async () => {
      if(!file) return 

      let size = 1024 * 1024 * 10  // 切片大小
      let fileChunks = []  //切片集
      let index = 0  //切片序号

      // 开始切片
      for (let start = 0;start < file.size; start += size) {
        fileChunks.push({
          hash: index++,
          chunk: file.slice(start,start + size)
        })
      }

      // 并发控制和断点续传
      const uploadFileChunks = async (list) => {
        if(list.length === 0) {
          // 发送信息提醒服务器-所有切片发送完成
          await axios({
            method: 'get',
            url: '/merge',
            params: {
              filename: file.name
            }
          })
          return
        }

        // 并发上传数据
        let netpool = []  //请求并发池
        let maxNum = 3  //最大并发数
        let finish = 0  //完成的数量
        let failList = []  //失败列表
        for (let i = 0;i<list.length;i++){
          let item = list[i]
          let formData = new FormData()
          formData.append('filename', file.name)
          formData.append('hash',item.hash)
          formData.append('chunk',item.chunk)
          

          // 构建Promise
          let task = axios({
            method: 'post',
            url: '/upload',
            data: formData
          }).then((res) => {
            // 如果服务端存在当前文件，则返回秒传效果
            if(res.isExistFile){
              return
            }
            // 每完成一次就将该次任务在并发池中删除
            let index = netpool.findIndex(t=> t===task)
            netpool.splice(index)
          }).catch(() => {
            // 将失败上传的切片记录到失败列表中
            failList.push(item)
          }).finally(() => {
            finish++
            if(finish === list.length && failList !==0 ){
              uploadFileChunks(failList)
            }
          })

          // 将任务加入并发池中
          netpool.push(task)
          // 当并发池满了，就开始用race发送，注意，请求发送是在这里，但是发送不是在for循环中
          if(netpool.length === maxNum){
            await Promise.race(netpool)
          }
        }
      }

      uploadFileChunks(fileChunks)

    }
```





## 总结

大致的流程如下：

1. 获取需要上传的文件
2. 文件切片后存入数组中
3. 遍历切片数组来生成对应文件的hash（非必须）
4. 根据文件切片列表和对应的hash生成请求列表
5. 并发限制处理请求
6. 待所有请求完成后发送合并请求



需要注意的是，在上传的过程中也可以通过md5加密切片来确保安全性。

其次，常说的断点上传实际上就是暂停上传和恢复上传，**暂停上传**就是将完成发送请求的切片从数组中去除，这样数组中就只保留了上传中的文件，在中断请求中可以使用`axios`中的`AbortController`

**恢复上传**就是在上传切片之前，先向后端请求下已上传的切片列表，拿到后对要上传的切片列表进行过滤，只上传未上传的切片

**秒传**实际上就是在前端发送完请求后后端优先判断hash，根据hash判断是否有该文件，如果有则返回消息提醒前端秒传成功

::: tip

一般的切片是根据文件名+切片下标作为切片的hash，这样一旦文件名发生改变就失去效果了，做法应该是根据文件内容生成hash，这里是使用MD5的加密生成hash

:::

```js
// /public/hash.js
self.importScripts("/spark-md5.min.js"); // 导入脚本

// 生成文件 hash
self.onmessage = e => {
  const { fileChunkList } = e.data;
  const spark = new self.SparkMD5.ArrayBuffer();
  let percentage = 0;
  let count = 0;
  const loadNext = index => {
    // 新建读取器
    const reader = new FileReader();
    // 设定读取数据格式并开始读取
    reader.readAsArrayBuffer(fileChunkList[index].file);
    // 监听读取完成
    reader.onload = e => {
      count++;
      // 获取读取结果并交给spark计算hash
      spark.append(e.target.result);
      if (count === fileChunkList.length) {
        self.postMessage({
          percentage: 100,
          // 获取最终hash
          hash: spark.end()
        });
        self.close();
      } else {
        percentage += 100 / fileChunkList.length;
        self.postMessage({
          percentage
        });
        // 递归计算下一个切片
        loadNext(count);
      }
    };
  };
  loadNext(0);
}
```



## 后端代码（Node）

```js
//文件分片上传
const koaRouter =require('koa-router')
const router =koaRouter({
    prefix:'/bxg'
})
const multer = require('koa-multer');
const upload = multer({ dest: 'upload/' });
const fs=require('fs')

//开启http长链接
router.use(async (ctx, next) => {
    ctx.response.set('X-Powered-By', 'xxx')
    ctx.response.set('connection', 'keep-alive')

    await next()
})

router.post('/upload_file',upload.single('file'),async (ctx,next)=>{
    // console.log(ctx.req.file.destination)

    var reg=/([\/])/gm

    var fileFragmentHashName=ctx.req.file.destination.replace(reg,'')+'\\'+ctx.req.body.fileHashName //片段文件hash名称

    fs.renameSync(ctx.req.file.path,fileFragmentHashName);//修改图片之前的名字

    if(ctx.req.body.isFinal==='true'){
        console.log(ctx.req.body.isFinal)
        await ParseMergeFiles(fileFragmentHashName,ctx.req.body.Hash,ctx.req.body.suffix,ctx.req.body.fileName)
        ctx.body={
            code:200,
            data:{
                msg:ctx.req.body.fileName+'上传成功'
            }
        }

    }else{
        ctx.body={
            code:200,
            data:{
                msg:ctx.req.body.fileName+'的文件分片上传成功'
            }
        }
    }



})

//准备合并大文件

//第一步拿到所有的文件片段对象进行循环 一个个写入一个新建的文件
async function ParseMergeFiles(fileFragmentHashName,Hash,suffix,fileName){
   return new Promise(async (resolve,reject)=>{

       var fileFragmentHashNameCount=0 //文件片段数量
       var reg=/\_([\d\D]+)\.([\d\D]+)$/
		
		//我这里将文件写入resource_upload目录下，自行根据需要进行调整
       const fileWriteStream = fs.createWriteStream('resource_upload'+'\\'+fileName); // 创建一个可写流
       fileFragmentHashNameCount=reg.exec(fileFragmentHashName)[1]


       for(let i=1;i<=fileFragmentHashNameCount;i++){

           var  newfileFragmentHashName=fileFragmentHashName.replace(reg,($1,$2,$3)=>{
               return `_${i}.${$3}`
           })

           const res= await  mergeFiles(fileWriteStream,fileName,newfileFragmentHashName)

       }
       fileWriteStream.end()
       resolve()
   })

}

//开始合并
function mergeFiles(fws,fileName,newfileFragmentHashName){

    return new Promise((resolve,reject) => {

        var rs = fs.createReadStream(newfileFragmentHashName);
        rs.on('data', function (data) {
            fws.write(data)
        });
        rs.on('end',function () {


            resolve('xx')
        })
    })

}

module.exports=router
```

