# Express

Express是一个基于node.js的极简、灵活的web应用开发框架。Express可以快速搭建一个完整功能的网站。

Express的作用于node.js中的内置的http模块类似，都是用来创建web服务的。但是http模块使用起来比较繁琐。开发效率低，Express是基于http模块封装出来的，能够极大的提高开发效率。	





## 创建Express应用

```js
// 创建demo文件
mkdir demo(文件名)

// 进入demo文件
cd demo

// 通过初始化创建打包文件
npm init

package name: 打包的当前文件名
version：版本号
description：依赖
entry point:项目入口文件（一般设置为app.js）（必填）
test command：一些测试命令
git repository：git库
keywords：git仓库的密码
author：作者
license：许可证

// 创建完会出现下面图片所示

// 下载express依赖
npm install express --s

// 配置完项目入口文件后启动项目
node app.js(项目入口文件)
```



## app.js配置信息

```javascript
// 导入express模块
const express = require('express')
// 创建一个express实例
const app = express()
// 端口号设置为3000
const port = 3000

// 设置express的路由，req是request请求，res是result响应数据
// 当通过get请求到当前路由时，会发送响应数据，result.send发送要响应的数据
// 注意，当前的打印是显示在服务端上的，并不会发送到响应数据
app.get('/', (req, res) => {
  console.log(req.url) // 请求地址
  console.log(req.method) // 请求方法
  console.log(req.headers) // 请求头
  console.log('请求参数',req.query) 

//   // 设置响应状态码
//   res.statusCode = 201

//   // 结束响应
//   res.end
  
//   res.send('Hello World!')


// 可以通过write来持续发送响应数据
// end不仅可以结束响应，也可以在结束响应前发送数据
    // res.write('a')
    // res.write('b')
    // res.write('c')
    // res.end('hello world')

    // res.send({
    //     foo: 'bar'
    // })

    // resqonse所有的设置都需要在发送前完成
    res.cookie('foo','bar')
    res.cookie('a',123)
    res.status(201).send('OK')
})

// express上也有post请求实例
// 注意当前的路由设置完成后需要重启服务才能更新
app.post('/',(req,res) => {
    res.send('post request')
})

app.put('/user',(req,res) => {
    res.send('put user')
})

app.delete('/user',(req,res) => {
    res.send('delete user')
})

// 监听express实例的服务，第二个参数是一个回调函数，里面是日志提示，当服务开启之后会执行该回调函数
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```



## CRUD增删查改接口demo

- express可以利用路由去配置一些响应数据，并对数据库数据进行修改

- 当前demo主要是通过postman来发送请求，同时这里的数据库是db.json文件，封装一个db.js文件来专门存放对数据库db.json的操作

- db.json文件

  - ```json
    {
      "todos": [
        {
          "id": 1,
          "title": "吃饭"
        },
        {
          "id": 2,
          "title": "睡觉"
        },
        {
          "id": 3,
          "title": "写代码"
        },
        {
          "id": 4,
          "title": "xxx"
        }
      ],
      "users": []
    }
    ```

- db.js文件

  - ```js
    // 导入操作文件fs模块
    const fs = require('fs')
    // 导入path路径path模块
    const path = require('path')
    // 导入util中的promisify方法
    // promisify方法能使得fs中的异步方法变成和promise一样的伪同步代码
    const { promisify } = require('util')
    // 将fs中的readFile和writeFile使用promisify方法处理
    const readFile = promisify(fs.readFile)
    const writeFile = promisify(fs.writeFile)
    
    // 获取db.json文件的路径
    const dbPath = path.join(__dirname,'./db.json')
    
    // 封装getDb函数，用来获取数据库db.json文件
    exports.getDb = async () => {
        const data = await readFile(dbPath,'utf-8')
        return JSON.parse(data)
    }
    
    // 封装saveDb文件，用来存储db.json文件中改变后的数据
    exports.saveDb = async db => {
        // 做数据存储化的时候JSON格式中的参数第三个是代码格式缩进，一般是两个空格
        const data = JSON.stringify(db,null,'  ')
        await writeFile(dbPath,data)
    }
    ```

- app.js文件

  - 配置信息

    - ```js
      const express = require('express')
      const fs = require('fs')
      const { getDb,saveDb } = require('./db')
      const app = express()
      const port = 3000
      
      // 配置解析表单请求体:  application/json
      app.use(express.json() )
      
      // 解析表单请求体： application/x-www-form-urlencoded
      app.use(express.urlencoded())
      
      app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })
      ```

  - get（查）

    - ```js
      // 获取db中所有的todos并以json的格式返回
      app.get('/todos', async (req, res) => {
          try {
              const db = await getDb()
              res.status(200).json(db.todos)
          } catch(err){
              res.status(500).json({
                  error: err.message
              })
          }
      })
      
      // 获取db中todos中具体的某一个数据，以id为标识
      app.get('/todos/:id', async (req, res) => {
          try {
              const db = await getDb()
              // 查询db中的id，如果没有则返回404并结束，如果有则返回当前id下的todo
              const todo = db.todos.find(todo => todo.id == req.params.id)
              if(!todo){
                  return res.status(404).end()
              }
              res.status(200).json(todo)
          } catch(err) {
              res.status(500).json({
                  error: err.message
              })
          }
      })
      ```

  - post（增）

    - ```js
      // 此处的post请求主要是增加todos数据
      app.post('/todos', async (req, res) => {
          try{
              // 1.获取客户端请求体参数
              // console.log(req.body)
              const todo = req.body
      
              // 2.数据验证
              if(!todo.title) {
                  return res.status(422).json({
                      error: "The field title is required"
                  })
              }
              // 3.数据验证通过，把数据存储到db中
              const db = await getDb()
              // 获取当前todos中的最后一项，如果最后一项有则向todo中添加最后一个的id，如果没有数据则让todo成为第一个数据
              const lastTodo = db.todos[db.todos.length - 1]
              todo.id = lastTodo ? lastTodo.id + 1 : 1
              db.todos.push(todo)
              await saveDb(db)
              // 4.发送响应
              res.status(201).json(todo)
          } catch(err) {
              res.status(500).json({
                  error: err.message
              })
          }
      })
      ```

  - patch（改）

    - ```js
      // 获取db中todos的某一具体id项并更改其内容
      app.patch('/todos/:id', async (req, res) => {
          try {
              // 1.获取表单数据
              const todo = req.body
              // 2.查找到要修改的任务项
              const db = await getDb()
              const ret = db.todos.find(todo => todo.id === Number.parseInt(req.params.id))
      
              // 如果要修改的任务项不存在则返回404
              if(!ret) {
                  return res.status(404).end()
              }
              // 存在则将查找到的ret与todo表单数据进行合并，注意此处后者todo会覆盖前者ret中的相同内容
              Object.assign(ret,todo)
      
              await saveDb(db)
              res.status(200).json(ret)
          } catch(err) {
              res.status(500).json({
                  error: err.message
              })
          }
      })
      ```

  - delete（删）

    - ```js
      // 获取db中具体id的某一项并将其删除
      app.delete('/todos/:id', async (req, res) => {
          try {
              // 获取当前requset中请求的id
              const todoId = Number.parseInt(req.params.id)
              const db = await getDb()
              // 查找todos中是否存在当前id
              const index = db.todos.findIndex(todo => todo.id === todoId)
              // 如果当前id在todos中并不存在，则返回404
              if(index === -1) {
                  return res.status(404).end()
              }
              // 修改db中的todos，通过splice删除当前id对应的todo
              db.todos.splice(index,1)
              await saveDb(db)
              res.status(204).end()
          } catch(err) {
              res.status(500).json({
                  error: err.message
              })
          }
      })
      ```





## AOP

- AOP为Aspect Oriented Programming的缩写，意为：[面向切面编程](https://baike.baidu.com/item/面向切面编程/6016335)，通过[预编译](https://baike.baidu.com/item/预编译/3191547)方式和运行期间动态代理实现程序功能的统一维护的一种技术。
- AOP是[OOP](https://baike.baidu.com/item/OOP)的延续，是软件开发中的一个热点，也是[Spring](https://baike.baidu.com/item/Spring)框架中的一个重要内容，是[函数式编程](https://baike.baidu.com/item/函数式编程/4035031)的一种衍生范型。
- 利用AOP可以对业务逻辑的各个部分进行隔离，从而使得业务逻辑各部分之间的[耦合度](https://baike.baidu.com/item/耦合度/2603938)降低，提高程序的可重用性，同时提高了开发的效率。
- 主要功能：
  - 日志记录
  - 性能统计
  - 安全控制
  - 事务处理
  - [异常处理](https://baike.baidu.com/item/异常处理)
- 主要意图：
  - 将日志记录，性能统计，安全控制，事务处理，[异常处理](https://baike.baidu.com/item/异常处理)等代码从业务逻辑代码中划分出来，通过对这些行为的分离，我们希望可以将它们独立到非指导业务逻辑的方法中，进而改变这些行为的时候不影响业务逻辑的代码。
- Express中的中间件就是运用了AOP的思想





## 中间件

当我们想要在请求之后打印请求日志，先想到的是在每次请求的过程中加上打印日志函数，但是如果请求一旦多的时候，往每个请求中添加打印函数是不太现实的

这个时候，Express提供了use中间件的方式来帮助我们完成想要在请求到响应数据之间完成的一些操作，例如常见的路由也是一种中间件的形式，但其有具体的规则限制，所以在**添加中间件的过程中注意，需要放在路由代码的上方**

中间件函数中的可执行操作如下：

+ 执行任何代码
+ 修改request或者response
+ 结束请求响应周期
+ 调用下一个中间件

![Express中间件](/images/express.png)

::: tip

如果当前的中间件功能没有结束请求-响应周期，则必须调用next（）将控制权传递给下一个中间件功能，否则当前请求将被挂起

:::





- 下面是一个请求日志函数封装，在每次请求的过程中对数据进行打印记录

```js
const myLogger = (req) => {
    console.log(req.method,req.url,Date.now())
}
```

- 如果要加载当前中间件函数，那么可以在中间件中调用该日志函数

```js
// 当前函数有3个参数
// 1.req 请求对象
// 2.res 响应对象
// 3.next 下一个中间件
app.use((req,res,next) => {
    
    console.log(req.method,req.url,Date.now())
    // 交出执行权，往后继续执行
    // next不限定请求规则，如果在get请求中添加next也是能触发下一个中间件的
    // 但是不能触发其他请求，因为有路由请求方法限制
    next()
})
```



- 限制路径的中间件 -- 只有当路径满足时，才会调用该中间件

```js
// 限定路径的中间件
app.use('/user/:id',function(req,res,next){
    console.log('Request Type:',req.method)
    next()
})
```



- 多个处理函数 --  可以在参数中传递多个想要执行的函数

```js
// 多个处理函数
// 当前的中间件实现了柯里化，多个处理函数都能应用到中间件中
app.use('/user/:id',function(req,res,next){
    console.log('Request originalUrl:',req.originalUrl)
    next()
},function(req,res,next) {
    console.log('Request Type:',req.method)
    next()
})
```



- 跳过下面的处理函数（中间件）-- next('route')

```js
// 想要跳过下面的中间件可以使用next('route')
app.use('/user/:id',function(req,res,next){
    if (req.params.id === '0') next('route')
    else next()
},function(req,res,next) {
    res.send('regular')
})
```





### 中间件重写CRUD

将路由方法全部转移到单独的router.js文件中进行管理

```js
const express = require('express')
const router = require('./router.js')
const app = express()
const port = 3000

// 配置解析表单请求体:  application/json
app.use(express.json())

// 解析表单请求体： application/x-www-form-urlencoded
app.use(express.urlencoded())

// 挂载路由
// app.use(router)

// 给路由限定访问前缀
app.use('/todos', router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```



- router.js

```js
// 路由模块
const express = require('express')
const fs = require('fs')
const { getDb,saveDb } = require('./db')
// 1.创建路由实例
// 路由实例其实就相当于一个mini Express 实例
const router = express.Router()

// 2.配置路由
// 获取db中所有的todos并以json的格式返回
router.get('/', async (req, res, next) => {
    try {
        const db = await getDb()
        res.status(200).json(db.todos)
    } catch(err){
        // next()参数有三种
        // 1.不传参，默认执行下一个中间件
        // 2.'route' 执行下一个中间件堆栈
        // 3.传入任何其他形式的数据 跳过所有剩余的无错误处理路由和中间件函数，进入错误处理中间件
        
        next(err)
        console.log("111")
        // res.status(500).json({
        //     error: err.message
        // })
    }
})

// 获取db中todos中具体的某一个数据，以id为标识
router.get('/:id', async (req, res, next) => {
    try {
        const db = await getDb()
        // 查询db中的id，如果没有则返回404并结束，如果有则返回当前id下的todo
        const todo = db.todos.find(todo => todo.id == req.params.id)
        if(!todo){
            return res.status(404).end()
        }
        res.status(200).json(todo)
    } catch(err) {
        console.log("err")
        res.status(500).json({
            error: err.message
        })
    }
})

// 此处的post请求主要是增加todos数据
router.post('/', async (req, res, next) => {
    try{
        // 1.获取客户端请求体参数
        // console.log(req.body)
        const todo = req.body

        // 2.数据验证
        if(!todo.title) {
            return res.status(422).json({
                error: "The field title is required"
            })
        }
        // 3.数据验证通过，把数据存储到db中
        const db = await getDb()
        // 获取当前todos中的最后一项，如果最后一项有则向todo中添加最后一个的id，如果没有数据则让todo成为第一个数据
        const lastTodo = db.todos[db.todos.length - 1]
        todo.id = lastTodo ? lastTodo.id + 1 : 1
        db.todos.push(todo)
        await saveDb(db)
        // 4.发送响应
        res.status(201).json(todo)
    } catch(err) {
        next(err)
    }
})

// 获取db中todos的某一具体id项并更改其内容
router.patch('/:id', async (req, res, next) => {
    try {
        // 1.获取表单数据
        const todo = req.body
        // 2.查找到要修改的任务项
        const db = await getDb()
        const ret = db.todos.find(todo => todo.id === Number.parseInt(req.params.id))

        // 如果要修改的任务项不存在则返回404
        if(!ret) {
            return res.status(404).end()
        }
        // 存在则将查找到的ret与todo表单数据进行合并，注意此处后者todo会覆盖前者ret中的相同内容
        Object.assign(ret,todo)

        await saveDb(db)
        res.status(200).json(ret)
    } catch(err) {
        next(err)
    }
})

// 获取db中具体id的某一项并将其删除
router.delete('/:id', async (req, res, next) => {
    try {
        // 获取当前requset中请求的id
        const todoId = Number.parseInt(req.params.id)
        const db = await getDb()
        // 查找todos中是否存在当前id
        const index = db.todos.findIndex(todo => todo.id === todoId)
        // 如果当前id在todos中并不存在，则返回404
        if(index === -1) {
            return res.status(404).end()
        }
        // 修改db中的todos，通过splice删除当前id对应的todo
        db.todos.splice(index,1)
        await saveDb(db)
        res.status(204).end()
    } catch (err) {
        next()
    }
})


// 3.导出路由实例
module.exports = router
```





### 异常处理中间件和404中间件

在对于catch错误处理中间件时，我们可以将其单独出来到一个中间件下进行管理，而404错误中间件也是同理，可以统一管理所有路由的404

```js
// 通常在配置路由之后来处理404的内容
// 请求进来从上到下依次匹配中间件
app.use((req,res,next) => {
    res.status(404).send('404 not find')
})

// 在所有的中间件后面挂载错误处理中间件
// 在异常处理中间件中需要4个参数，express才会将该中间件判定为异常处理中间件
app.use((err,req,res, next) => {
    console.log('错误',err)
    res.status(500).json({
        error: err.message
    })
})
```



### 第三方中间件

鉴于中间件的思想，我们也可以通过一些第三方中间件来完成一些业务需求来完成快速开发，而不是仅限于CRUD

Express提供了一些内置的中间件的使用，第三方中间件可以在github上查找，也可以看[官方文档]([Express middleware - Express 中文文档 | Express 中文网 (expressjs.com.cn)](https://www.expressjs.com.cn/resources/middleware.html))。使用第三方中间件的步骤： npm下载 --  require导入-- 在中间件中使用实例对象方法

```js
const { response } = require('express')
const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

// morgan是第三方中间件中的日志打印中间件
app.use(morgan(':method :url :status :res[content-length] -:response-time ms'))

app.get('/',(req,res) => {
    res.send('get request')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```





## 接口案例

### RESTful 接口设计规范

#### 协议

- API与用户的通信协议，尽量使用https协议



#### 域名

- 尽量将API部署在专用域名之下

```
https://api.example.com
```

- 如果确定API很简单，不会有进一步的扩展，可以考虑放在主域名下

```
https://example.org/api
```



#### 版本

- 将API的版本号放入URL

```
https://api.example.com/v1/
```

- 另一种做法是，将版本号放在http头信息中，但不如放在URL方便和直观，Github就是该方法



#### 路径

- 路径又称"终点"(endpoint),表示API的具体网址
- 在RESTful架构中，每个网址代表一种资源(resource),所以网址中不能有动
  词，只能有名词，而且所用的名词往往与数据库的表格名对应。一般来说，数据库
  中的表都是同种记录的"集合"(collection),所以API中的名词也应该使用复数。
- 举例来说，有一个AP提供动物园(zoo)的信息，还包括各种动物和雇员的信息，
  则它的路径应该设计成下面这样。
  - https://api.example.com/v1/zoos
  - https://api.example.com/v1/animals
  - https://api.example.com/v1/employees





#### HTTP动词

- 对于资源的具体操作类型，由HTTP动词表示。
- 常用的HTTP动词有下面五个(括号里是对应的SQL命令)。
  - GET（读取）：从服务器取出资源（一项或多项）
  - POST（创建）：在服务器新建一个资源。
  - PUT（完整更新）：在服务器更新资源（客户端提供改变后的完整资源）
  - PATCH（部分更新）：在服务器更新资源（客户端提供改变的属性）
  - DELETE（删除）：从服务器删除资源
- 还有两个不常用的HTTP动词。
  - HEAD:获取资源的元数据
  - OPTIONS:获取信息，关于资源的哪些属性是客户端可以改变的





#### 过滤信息

- 如果记录数量很多，服务器不可能都将它们返回给用户。API应该提供参数，过滤
  返回结果
- 下面是一些常见的参数
  - ?limit=10:指定返回记录的数量
  - ?offset=10:指定返回记录的开始位置
  - ?page=2&per_page=100:指定第几页，以及每页的记录数
  - ?sortby=name&order:=asc:指定返回结果按照哪个属性排序，以及排序顺序
  - ?animal_.type_id=1:指定筛选条件
- 参数的设计允许存在冗余，即允许API路径和URL参数偶尔有重复。比如，GET
  /zoo/八D/animals与GET/animals?zoo_id=lD的含义是相同的





#### 状态码

- 客户端的每一次请求，服务器都必须给出回应。回应包括HTTP状态码和数据两部
  分
- HTTP状态码就是一个三位数，分成五个类别
  - 1xx:相关信息
  - 2xx:操作成功
  - 3xx:重定向
  - 4xx:客户端错误
  - 5xx:服务器错误
- 这五大类总共包含100多种状态码，覆盖了绝大部分可能遇到的情况。每一种状态
  码都有标准的（或者约定的）解释，客户端只需查看状态码，就可以判断出发生了
  什么情况，所以服务器应该返回尽可能精确的状态码
- 常见的有以下一些(方括号中是该状态码对应的HTTP动词)
  - 200  OK-[GET]:服务器成功返回用户请求的数据，该操作是幂等的
    (Idempotent)
  - 201 CREATED-[POST/PUT/PATCH]:用户新建或修改数据成功
  - 202 Accepted-[*]:表示一个请求已经进入后台排队（异步任务）
  - 204 NO CONTENT-[DELETE]:用户删除数据成功
  - 400 INVALID REQUEST-[POST/PUT/PATCH:用户发出的请求有错误，服务器
    没有进行新建或修改数据的操作，该操作是幂等的
  - 401 Unauthorized-[*]:表示用户没有权限(令牌、用户名、密码错误)
  - 403 Forbidden-[*]表示用户得到授权(与401错误相对)，但是访问是被禁止
    的。
  - 404 NOT FOUND-[*]:用户发出的请求针对的是不存在的记录，服务器没有进
    行操作，该操作是幂等的
  - 406 Not Acceptable-[GET]:用户请求的格式不可得（比如用户请求JSON格
    式，但是只有XML格式）
  - 410Gone-[GET]:用户请求的资源被永久删除，且不会再得到的
  - 422 Unprocesable entity-[POST/PUT/PATCH当创建一个对象时，发生-一个验
    证错误
  - 500 INTERNAL SERVER ERROR-[*]:服务器发生错误，用户将无法判断发出的
    请求是否成功



#### 返回结果

- API返回的数据格式，不应该是纯文本，而应该是一个JSON对象，因为这样才能
  返回标准的结构化数据。所以，服务器回应的HTTP头的Content-Type属性要
  设为application/json
- 针对不同操作，服务器向用户返回的结果应该符合以下规范
  - GET/collection:返回资源对象的列表（数组）
  - GET/collection/resource:返回单个资源对象
  - POST/collection:返回新生成的资源对象
  - PUT/collection,/resource:返回完整的资源对象
  - PATCH/collection./resource:返回完整的资源对象



#### 错误处理

- 有一种不恰当的做法是，即使发生错误，也返回200状态码，把错误信息放在数据
  里面



#### 身份认证

- 基于JWT的接口权限认证：
  - 字段名：Authorization
  - 字段值：Bearer token数据





#### 跨域处理

- 可以在服务端设置CORS允许客户端跨域资源请求



### JWT

#### 跨域认证的问题

- 互联网服务离不开用户认证。一般流程是下面这样。\
  - 1、用户向服务器发送用户名和密码
  - 2、服务器验证通过后，在当前对话(session)里面保存相关数据，比如用户角
    色、登录时间等等
  - 3、服务器向用户返回一个session_id,写入用户的Cookie
  - 4、用户随后的每一次请求，都会通过Cookie,将session_id传回服务器
  - 5、服务器收到session_id,找到前期保存的数据，由此得知用户的身份。
- 这种模式的问题在于，扩展性(scaling)不好。单机当然没有问题，如果是服务器
  集群，或者是跨域的服务导向架构，就要求session数据共享，每台服务器都能够
  读取session.
- 举例来说，A网站和B网站是同一家公司的关联服务。现在要求，用户只要在其中
  一个网站登录，再访问另一个网站就会自动登录，请问怎么实现？
- 一种解决方案是session数据持久化，写入数据库或别的持久层。各种服务收到请
  求后，都向持久层请求数据。这种方案的优点是架构清晰，缺点是工程量比较大。
  另外，持久层万一挂了，就会单点失败。
- 另一种方案是服务器索性不保存session数据了，所有数据都保存在客户端，每次
  请求都发回服务器。WT就是这种方案的一个代表



#### JWT原理

- JWT的原理是，服务器认证以后，生成一个SON对象，发回给用户，就像下面这样

```
{
	“姓名”：“lyf”,
	“角色”：“管理员”，
	“到期时间”： “2022年7月4日”
}
```

- 以后，用户与服务端通信的时候，都要发回这个JSON对象。服务器完全只靠这个对象认定用户身份。为了防止用户篡改数据，服务器在生成这个对象的时候，会加上签名（详见后文）。
- 服务器就不保存任何session数据了，也就是说，服务器变成无状态了，从而比较容易实现扩展。



#### JWT的数据结构

- 实际的WT大概就像下面这样

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

- 它是一个很长的字符串，中间用点(（·)分隔成三个部分。注意，WT内部是没有换行的，这里只是为了便于展示，将它写成了几行。
- JWT的三个部分依次如下。
  - Header（头部）
  - Payload（负载）
  - Signature（签名）
- 写成一行，就是下面的样子

```
Header.Payload.Signature
```



#### Header

- Header部分是一个JSON对象，描述WT的元数据，通常是下面的样子

```
{
	“alg”：“HS256”，
	“typ”：“JWT”
}
```

- 上面代码中，`alg`属性表示签名的算法(algorithm),默认是HMAC SHA256(写成HS256)，`typ`属性表示这个令牌(token)的类型(type)，JWT令牌统一写为JWT。
- 最后，将上面的JSON对象使用Base64URL算法（详见后文）转成字符串



#### Payload

- Payload部分也是一个JSON对象，用来存放实际需要传递的数据。JWT规定了7个官方字段，供选用
  - iss (issuer)):签发人
  - exp (expiration time):过期时间
  - sub (subject):主题
  - aud (audience):受众
  - nbf (Not Before):生效时间
  - iat (Issued At):签发时间
  - jti (JWT ID): 编号
- 除了官方字段，也可以在这个部分定义私有字段，下面就是一个例子

```js
{
	“sub”： “123452315”，
	“name”： “Lyf”，
	“admin”： “true”
}
```

- 注意，JWT默认是不加密的，任何人都可以读到，所以不要把秘密信息放在这个部
  分。
- 这个JSON对象也要使用Base64URL算法转成字符串





#### Signature

- Signature部分是对前两部分的签名，防止数据篡改
- 首先，需要指定一个密钥(5 ecret)。这个密钥只有服务器才知道，不能泄露给用户。然后，使用Header里面指定的签名算法(默认是HMAC SHA256),按照下面的公式产生签名

```js
HMACSHA256(
base64UrlEncode(header)+"."+
base64Ur1Encode(payload),
secret)
```

- 算出签名以后，把Header、Payload、Signature三个部分拼成一个字符串，每个部分之间用"“点”(。)分隔，就可以返回给用户。
- **在JWT中，消息体是透明的，使用签名可以保证消息不被篡改。但不能实现数据加密功能。**



#### Base64URL

- 前面提到，Header和Payload串型化的算法是Base64URL。这个算法跟Base64算法基本类似，但有一些小的不同。
- JWT作为一个令牌(token),有些场合可能会放到URL(比如api.example..com/?token=xxx).Base64有三个字符+、/和=，在URL里面有特殊含义，所以要被替换掉：=被省略、+替换成-，/替换成_。这就是Base64URL算法。



#### JWT的使用方式

- 客户端收到服务器返回的WT,可以储存在Cookie里面，也可以储存在localStorage
- 此后，客户端每次与服务器通信，都要带上这个JWT。你可以把它放在Cookie里面自动发送，但是这样不能跨域，所以更好的做法是放在HTTP请求的头信息Authorization字段里面。

```
Authorization:Bearer <token>
```

- 另一种做法是，跨域的时候，WT就放在POST请求的数据体里面



#### JWT的几个特点

- (1) JWT默认是不加密，但也是可以加密的。生成原始Token以后，可以用密钥
  再加密一次。
- (2) JWT不加密的情况下，不能将秘密数据写入JWT.
- (3) JWT不仅可以用于认证，也可以用于交换信息。有效使用WT,可以降低服务器查询数据库的次数
- (4) JWT的最大缺点是，由于服务器不保存session状态，因此无法在使用过程中废止某个token,或者更改token的权限。也就是说，一旦WT签发了，在到期之前就会始终有效，除非服务器部署额外的逻辑。
- (5) JWT本身包含了认证信息，一旦泄露，任何人都可以获得该令牌的所有权限。为了减少盗用，WT的有效期应该设置得比较短。对于一些比较重要的权限使用时应该再次对用户进行认证。
- (6) 为了减少盗用，JWT不应该使用http协议明码传输，要使用https协议传输



#### JWT的解决方案

- [JSON Web Tokens - jwt.io](https://jwt.io/)





### 项目

#### 创建项目

```
mkdir realworld-api-express

cdd realworld-api-express

npm init

npm i express
```





#### 配置中间件

- 解析请求体
  - express.json()
  - express.urlencoded()
- 日志输出（第三方）
  - morgan()
- 为客户端提供跨域资源请求（第三方）
  - cors()
- 信息验证（第三方）
  - express-validator()





#### router路由设置

- 统一创建router文件夹对路由进行管理
- 在app.js文件中挂载路由并设置路由前缀api

```js
// 挂载路由
app.use('/api',router)
```

- 路由文件中只设置路由映射，不设置具体的业务逻辑
- 统一将业务逻辑封装到controller下进行管理



#### middleware错误处理中间件

- 此处的错误处理中间件通过挂载的形式独立出去到middlerware文件中
- 错误处理使用express中提供的uitl来帮助我们在开发过程中显示完整的错误信息

```js
const util = require('util')
module.exports = () => {
    return (err,req,res,next) => {
        res.status(500).json({
            error: util.format(err)
        })
    }
}


// app.js中挂载统一处理服务端错误中间件
app.use(errorHandler())
```



#### middleware校验token和验证id

- 一般校验token和验证id都通常做成中间件放在请求和业务逻辑层中间
- token使用JWT中提供的方法来生成，而在生成token的过程中jwtSecret可以使用[uuid](https://www.uuidgenerator.net/)来帮助生成Secret
- 在使用token验证的过程中使用Bearer标签头

```js
const { verify } = require('../util/jwt')
const { jwtSecret } = require('../config/config.default')
const { User } = require('../model')
module.exports = async(req,res,next) => {
    // 从请求头获取token数据
    let token = req.headers['authorization']
    token = token ? token.split('Bearer ')[1] : null

    if(!token) {
        console.log('token没有')
        return res.status(401).end()
    }
    // 验证token是否有效

    try {
        const decodedToken = await verify(token,jwtSecret)
        req.user = await User.findById(decodedToken.userId)
        next()
    } catch(err) {
        console.log('token验证没通过')
        return res.status(401).end()
    }
    // 无效 --> 响应401状态码
    // 有效 --> 把用户信息读取出来保存到req请求对象 继续往后执行
}
```

- 验证方法都是通过`express-validator`提供的validate来帮助验证
- 由于文章接口中有多个接口都需要使用id验证，所以使用`express-validator`提供的`buildCheckFunction`来帮助我们将公共代码进行提取
- id验证方法由`mongoose`提供的`isValidObjectId`方法来验证id

```js
const { validationResult,buildCheckFunction } = require('express-validator')
const { isValidObjectId } = require('mongoose')

// parallel processing
exports = module.exports = validations => {
  return async (req, res, next) => {
    await Promise.all(validations.map(validation => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(400).json({ errors: errors.array() });
  };
};

exports.isValidObjectId = (location,fields) => {
  return buildCheckFunction(location)(fields).custom(async value => 
  {
    if(!isValidObjectId(value)){
      return Promise.reject('ID不是一个有效的ObjectID')
    }
  })
}
```





#### Model连接Mongo数据库

- 在当前项目中创建model文件来对数据库进行统一管理
- 此处使用mongoose第三方插件来完成连接
- 连接完数据库之后需要对数据库进行操作，此时需要一个模型对象来完成数据库中表的设置

```js
const mongoose = require('mongoose');
const { dbUrl } = require('../config/config.default')

// 连接MongoDB 数据库
mongoose.connect(dbUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// 建立数据库连接
const db = mongoose.connection

// 当连接失败的时候
db.on('error', err => {
    console.log('连接失败')
})

// 当连接成功的时候
db.on('open', () => {
    console.log('MongoDB 数据库连接成功')
})

// 组织导出模型类
module.exports = {
    User: mongoose.model('User',require('./user'))
}
```

- 将模型独立出去一个文件进行配置

```js
const mongoose = require('mongoose')
const baseModel = require('./base-model')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        default: null
    },
    image: {
        type: String,
        default: null
    },
    ...baseModel
})

module.exports = userSchema
```

- 在数据库配置中可以通过...扩展运算符来完成公共代码的混入

```js
module.exports = {
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}
```



#### Controller业务逻辑	

- 创建的Controller文件用来管理项目中的业务逻辑，对数据的过滤以及响应的设置

- 用户注册功能

  - 1.获取请求体数据

    - 请求体的数据通过`req.body`来获取

  - 2.数据验证

    - 2.1 基本数据验证
    - 2.2 业务数据验证
    - 数据验证方面，项目使用了[express-validator](https://express-validator.github.io/)中间件来对数据进行统一处理
    - 验证规则使用了`body`中的方法来数据进行处理，注意，如果处理的过程中需要数据库中的数据，记得导入Model中的模型，此处导入的是User表

    ```js
    body('user.email')
        .notEmpty().withMessage('邮箱不能为空')
        .isEmail().withMessage('邮箱格式不正确')
        .bail()
        .custom(async email => {
            const user = await User.findOne({ email })
            if(user) {
                return Promise.reject('邮箱已存在')
            }
        })
    ```

    - 使用`validationResult`来对错误信息进行统一响应，该方法会将错误信息放入一个数组中，等响应完成后将数组中所有的错误信息进行统一响应
    - 数据验证可以单独出一个文件夹`validator`中进行管理，在使用的过程中可以在`router`路由中业务方法的前面以中间件的形式使用

    ```
    // 用户注册
    router.post('/users',userValidator.register,userCtrl.register)
    ```

  - 3.验证通过，数据库存储

    - 当前需要获取model中的数据库对象，然后将请求体中的数据存储到数据库中
    - 注意，此处的存储功能一定要用await设置，需要等待请求接受到才进行存储

    ```js
    // 3.验证通过
    const user = new User(req.body.user)
    // 保存到数据库
    await user.save()
    ```

  - 4.发送成功响应

    - 成功响应对应的状态码为201，一般返回json数据格式

    ```js
    // 4.发送成功响应
    res.status(201).json({
       user
    })
    ```

- 文章功能

  - Get：获取文章可以通过参数来对返回的内容进行过滤，同时也可以自己定义过滤规则来对数据进行处理

    ```js
    exports.GetArticles = async (req,res,next) => {
        try{
            const { 
                limit = 20,
                offset = 0,
                tag,
                author
            } = req.query 
    
            const filter = {}
            // 创建过滤器，如果请求参数中有tag，则会根据tag的值取tagList中查找包含tag值的数据
            if(tag) {
                filter.tagList = tag
            }
    
            if(author) {
                const user = await User.findOne({ 
                    username: author 
                })
                filter.author = user ? user._id : null
            }
            
            const articlesCount = await Article.countDocuments()
            // const articlesCount = articles.length
            const articles = await Article.find(filter)
            .skip(Number.parseInt(offset)) //跳过多少条offset
            .limit(Number.parseInt(limit)) //取多少条limit
            .sort({
                // -1 倒序 1 正序
                createdAt: -1
            })
            
            res.status(200).json({
                articles,
                articlesCount
            })
        } catch(err) {
            next(err)
        }
    }
    ```

  - Post：增加数据，在增加ObjectId数据的时候需要使用`mongoose`提供的`populate`方法来完成ObjectId数据类型的添加

    ```js
    exports.CreateArticle = async (req,res,next) => {
        try{
            const article = new Article(req.body.article)
            article.author = req.user._id
            article.populate('author')
            await article.save()
            res.status(201).json({
                article
            })
        } catch(err) {
            next(err)
        }
    }
    ```

  - delete：...  update：...

  - 在Controller层中注意，有些逻辑或者验证需要获取数据例如用户id的时候，可以在中间件验证中获取数据保存到req中，这样在Controller层中就不用单独再去获取数据





## 源码学习

express启动的时候，会去express文件下的package.json中找main调用路径，如果没有设置main，则会默认将index.js设置为文件入口，index.js中主要就是将lib中的模块进行导出，所以找到lib模块，其中的express.js就是源码入口



### express.js

在express.js中主要是负责导出app函数以及它内置的一些方法数据，而这些方法数据是通过mixin来进行混入的

在express中主要是对app上的路由以及res，req等进行一个设置，创建一个app函数的时候给它附上request和response来完成对app的初始化

```js
function createApplication() {
  var app = function(req, res, next) {
    app.handle(req, res, next);
  };

  mixin(app, EventEmitter.prototype, false);
  mixin(app, proto, false);

  // expose the prototype that will get set on requests
  app.request = Object.create(req, {
    app: { configurable: true, enumerable: true, writable: true, value: app }
  })

  // expose the prototype that will get set on responses
  app.response = Object.create(res, {
    app: { configurable: true, enumerable: true, writable: true, value: app }
  })

  app.init();
  return app;
}
```

​    

### application.js

在express.js中混入的方法，比如app.use，app.get此类的方法就是在该文件中编写的，该文件主要负责app中的成员方法



::: tip

在添加与路由相关的方法的时候，使用methods第三方库来帮助我们完成对app中的路由成员方法的添加

:::

```js
const http = require('http')
const Router = require('./router')
const methods = require('methods')

function App () {
    this._router = new Router()
    // this.routes = []
}

// console.log(methods)
methods.forEach(method => {
    App.prototype[method] = function (path,...handlers) {
        this._router[method](path,handlers)
    }
})

App.prototype.use = function (path,...handlers){
    this._router.use(path,handlers)
}

App.prototype.listen = function(...args) {
    const server = http.createServer((req,res) => {
        this._router.handle(req,res)   
    })
    server.listen(...args)
}    

module.exports = App
```

::: tip

在application中并不会直接去处理相关router的handlers函数，而是交给App下的隐藏属性`_router`，而我们只需要对`_router`它的原型方法`Router`进行相关handlers函数的处理

:::



### Router.js

Router中主要就是负责路由参数的处理以及对应handlers的处理，他们分别对应着`layer.js`和`route.js`，然后，在layer的属性上添加上route，再对其保存到stack记录栈中，最后，注意调用route方法

```js
methods.forEach(method => {
    Router.prototype[method] = function (path,handlers) {
        const route = new Route()
        const layer = new Layer(path,route.dispatch.bind(route))
        layer.route = route
        this.stack.push(layer)
        route[method](path,handlers)
    }
})
```



- Router中还有handle方法，该方法主要是用来完成next参数的递归

```js
Router.prototype.handle= function (req,res) {
    const { pathname } = url.parse(req.url)
    let index = 0
    const next = () => {
        if(index >= this.stack.length){
            return res.end(`Can not get ${pathname}`)
        }
        const layer = this.stack[index++]
        const match = layer.match(pathname)
        if(match) {
            req.params = req.params || {}
            Object.assign(req.params, layer.params)
        }
        // 顶层只判定请求路径，内层判定请求方法
        if(match){
            // 顶层这里调用的handler就是dispatch
            return layer.handler(req,res,next)
        }
        next()
    }
    next()
}
```



- Router中还有use方法，该方法主要是用来处理函数，也可以用来处理路由，多数处理函数中间件

```js
Router.prototype.use = function (path,handlers){
    if(typeof path === 'function'){
        handlers.unshift(path) // 处理函数
        path = '/'  // 任何路径都以他为开头
    }
    handlers.forEach(handler => {
        const layer = new Layer(path,handler)
        layer.isUserMiddleware = true
        this.stack.push(layer)
    })
}
```





#### Layer.js

- Layer函数主要是用来处理路由参数，而该函数的原型上的match方法就是用来验证路由函数

```js
function Layer (path,handler) {
    this.path = path
    this.handler = handler
    this.keys = []
    this.regexp = pathRegexp(path,this.keys,{})
    this.params = {}
}
```



- 常见的路由path以及参数params一般会保存到Layer中，以及他们对应的handler
- 有需要特殊处理的参数如正则，则是使用了`path-to-regexp`第三方库来完成对正则的匹配验证，**注意当前`path-to-regexp`的版本需要指定为0.1.7**
- 参数的校验是通过match循环获得path路径上的参数，然后将其赋值给Layer下的params属性
- 注意：校验的过程中也需要对use方法进行校验（use方法也能是路由），因此在use方法创建的过程中会在Layer上添加上标记`isUserMiddleware`，则在校验的时候只需要判断下`isUserMiddleware`即可标识use方法，再对其进行具体的判断

```js
Layer.prototype.match = function (pathname) {
    const match = this.regexp.exec(pathname)
    if(match) {
        this.keys.forEach((key,index) => {
            this.params[key.name] = match[index + 1]
        })
        return true
    }

    if(this.isUserMiddleware) {
        if(this.path === '/'){
            return true
        }
        if(pathname.startsWith(`${this.path}/`)){
            return true
        }
    }

    return false    
}
```



#### Route.js

- Route主要是用来调用路由对象中所有的处理函数，并且，Route本身也是有记录栈stack的
- 当前的记录栈是用来记录layer参数，在每个Route中的method中，Layer中保存不同的method来做区分

```js
methods.forEach(method => {
    Route.prototype[method] = function (path,handlers) {
        handlers.forEach(handler => {
            const layer = new Layer(path,handler)
            layer.method = method
            this.stack.push(layer)
        })
    }
})
```



- Route中dispatch用来执行当前路由所有的处理对象，需要注意的是当前路由对象上可能不止一个处理函数，所以这里的next实际意义是是out，即跳出当前函数，到下一个函数中执行，
- 这里的next执行主要是使用递归的方法，对当前记录栈中的layer挨个做匹配，如果method相同，即匹配正确则调用处理函数，然后out，去执行下一个函数，`递归的中止器是index`

```js
// 遍历执行当前路由对象中所有的处理函数
Route.prototype.dispatch = function (req,res,out) {
    // 遍历内层的stack
    let index = 0
    const method = req.method.toLowerCase()
    const next = () => {
        if(index >= this.stack.length) return out()
        const layer = this.stack[index++]
        if(layer.method === method){
            return layer.handler(req,res,next)
        }
        next()
    }
    next()
}
```