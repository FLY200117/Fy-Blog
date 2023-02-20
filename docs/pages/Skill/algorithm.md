# 算法

## LRU算法

**缓存**在计算机网络上随处可见，例如：当我们首次访问一个网页时，打开很慢，但当我们再次打开这个网页时，打开就很快。

这就涉及缓存在浏览器上的应用：**浏览器缓存**。当我们打开一个网页时，例如 `https://github.com/sisterAn/JavaScript-Algorithms` ，它会在发起真正的网络请求前，查询浏览器缓存，看是否有要请求的文件，如果有，浏览器将会拦截请求，返回缓存文件，并直接结束请求，不会再去服务器上下载。如果不存在，才会去服务器请求。

其实，浏览器中的缓存是一种在本地保存资源副本，它的大小是有限的，当我们请求数过多时，缓存空间会被用满，此时，继续进行网络请求就需要确定缓存中哪些数据被保留，哪些数据被移除，这就是**浏览器缓存淘汰策略**，最常见的淘汰策略有 FIFO（先进先出）、LFU（最少使用）、LRU（最近最少使用）

LRU （ `Least Recently Used` ：最近最少使用 ）缓存淘汰策略，故名思义，就是根据数据的历史访问记录来进行淘汰数据，其核心思想是 **如果数据最近被访问过，那么将来被访问的几率也更高** ，优先淘汰最近没有被访问到的数据



1. LRUCache(int capacity) 以`正整数`作为容量 capacity 初始化 LRU 缓存
2. int get(int key) `如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 `
3. void put(int key, int value) `如果关键字已经存在，则变更其数据值`；`如果关键字不存在，则插入该组「关键字-值」`。`当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值`，从而为新的数据值留出空间。



其实说白了，可以将缓存看成商店，而容量看成仓库，商店的排序是有讲究的，当产品有需求的时候就将该产品放到门口，依次排列。由于商店的空间是有限的，所以我需要把那些排在最后面的多余的商品放回仓库，此时，如果在商店中某一个后面的商品突然有了需求时，就需要把它重新挪到门口，也就是第一个位置	





解法一：

- 使用数组和对象结合的方式

```js
var LRUCache = function (capacity) {
    // 用数组记录读和写的顺序
    this.keys = []
    // 用对象来保存key value值
    this.cache = {}
    // 容量
    this.capacity = capacity
}

LRUCache.prototype.get = function (key) {
    // 如果存在
    if(typeof this.cache[key] !== 'undefined'){
        // 先删除原来的位置
        remove(this.keys,key)
        // 再移动最后一个，以保持最新访问
        this.keys.push(key)
        // 返回值
        return this.cache[key]
    }

    return -1
}

LRUCache.prototype.put = function (key,value) {
    if(typeof this.cache[key] !== 'undefined') {
        // 存在的时候先更新值
        this.cache[key] = value
        // 再更新位置到最后一个
        remove(this.keys,key)

        this.keys.push(key)
    } else {
        // 不存在的时候加入
        this.keys.push(key)
        this.cache[key] = value
        // 容量如果超过了最大值，则删除最久未使用的(也就是数组中的第一个key)
        if(this.keys.length > this.capacity) {
            removeCache(this.cache,this.keys,this.keys[0])
        }
    }
}


// 移出数组中的key
function remove(arr, key) {
    if (arr.length) {
      const index = arr.indexOf(key)
  
      if (index > -1) {
        return arr.splice(index, 1)
      }
    }
  }
  
// 移除缓存中 key
function removeCache(cache, keys, key) {
    cache[key] = null
    remove(keys, key)
}  



const lRUCache = new LRUCache(2)

console.log(lRUCache.put(1, 1)) // 缓存是 {1=1}
console.log(lRUCache.put(2, 2)) // 缓存是 {1=1, 2=2}
console.log(lRUCache.get(1))    // 返回 1
console.log(lRUCache.put(3, 3)) // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
console.log(lRUCache.get(2))    // 返回 -1 (未找到)
console.log(lRUCache.put(4, 4)) // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
console.log(lRUCache.get(1) )   // 返回 -1 (未找到)
console.log(lRUCache.get(3))    // 返回 3
console.log(lRUCache.get(4) )   // 返回 4
```





解法二：

- 使用map作为缓存

```js
var LRUCache = function (capacity) {
    this.cache = new Map()
    this.capacity = capacity
}

LRUCache.prototype.get = function(key) {
    if(this.cache.has(key)){
        const value = this.cache.get(key)
        // 更新位置
        this.cache.delete(key)
        this.cache.set(key,value)

        return value
    }

    return -1
}

LRUCache.prototype.put = function(key,value) {
    // 在已有的情况下，更新其位置到最新即可
    // 先删除后插入
    if(this.cache.has(key)){
        this.cache.delete(key)
    } else {
        // 插入数据前需要判断，size是否符合capacity
        // 如果已经大于等于capacity时，需要把最开始插入的数据删除掉
        // keys()方法得到一个可遍历对象，执行next()拿到一个形如{value: 'xxx', done: false}的对象
        if(this.cache.size >= this.capacity) {
            this.cache.delete(this.cache.keys().next().value)
        }
    }
    this.cache.set(key,value)
}

const lRUCache = new LRUCache(2)
console.log(lRUCache.put(1, 1)) // 缓存是 {1=1}
console.log(lRUCache.put(2, 2)) // 缓存是 {1=1, 2=2}
console.log(lRUCache.get(1))    // 返回 1
console.log(lRUCache.put(3, 3)) // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
console.log(lRUCache.get(2))    // 返回 -1 (未找到)
console.log(lRUCache.put(4, 4)) // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
console.log(lRUCache.get(1) )   // 返回 -1 (未找到)
console.log(lRUCache.get(3))    // 返回 3
console.log(lRUCache.get(4) )   // 返回 4
```





LRU算法与keep-alive之间的关系：

在 2.5.0 版本中，`keep-alive` 新增了 `max` 属性，用于最多可以缓存多少组件实例，一旦这个数字达到了，在新实例被创建之前，已缓存组件中最久没有被访问的实例会被销毁掉，**看，这里就应用了 LRU 算法**。即在 `keep-alive` 中缓存达到 `max`，新增缓存实例会优先淘汰最近没有被访问到的实例