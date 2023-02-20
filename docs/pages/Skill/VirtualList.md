# 虚拟列表

在一般的商品展示栏中，往往会有成千上万条数据商品需要展示，而如果都一一渲染这些数据无疑会给浏览器带来很大的性能缺陷，**即使这些数据用户一开始是看不见的**，一般大数据都可以用分页展示，但是对于商品信息，我们更希望能直接自动展示而不需要进行分页操作，这个时候就可以使用虚拟列表来完成需求，**虚拟列表就是可视区域中的数据列表，并且可以监听用户的滚动事件来动态的渲染可视区域的数据**





首先设置可视区域的高度，然后根据单个数据的高度去计算可视区域中的可视数据数量`showCount`，然后根据`showCount`设置`reallyShowCountList`里面的数据，通过slice（0，showCount）的方式去过滤数据

其次，监听用户在可视区域内的滚动事件，event中有个deltaY属性能表示出用户滚动的方向于力度，正数为向下滑动，负数为向上滑动，且滚动力度越大数值越大

```js
scrollHandler(e){
  e.preventDefault();
  // 获取列表容器的高度
  const contentBoxHeight = $('#contactContent').height();
  // 计算出一页展示的数量
  const showCount = Math.ceil(contentBoxHeight/30);
  // 滚动高度
  this.wheelHeight += e.deltaY;
  if (this.wheelHeight < 0 || !this.reallyShowContactList.length){
       this.wheelHeight = 0;
       return;
  }
  let start = Math.floor(this.wheelHeight/30);
  start = start < 0 ? 0 : start;
  this.reallyShowContactList = this.contactList.slice(start, start + showCount);
}
```

