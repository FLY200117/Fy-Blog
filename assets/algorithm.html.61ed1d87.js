import{_ as n,o as s,c as a,e as p}from"./app.bb973a4f.js";const t={},c=p(`<h1 id="\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7B97\u6CD5" aria-hidden="true">#</a> \u7B97\u6CD5</h1><h2 id="lru\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#lru\u7B97\u6CD5" aria-hidden="true">#</a> LRU\u7B97\u6CD5</h2><p><strong>\u7F13\u5B58</strong>\u5728\u8BA1\u7B97\u673A\u7F51\u7EDC\u4E0A\u968F\u5904\u53EF\u89C1\uFF0C\u4F8B\u5982\uFF1A\u5F53\u6211\u4EEC\u9996\u6B21\u8BBF\u95EE\u4E00\u4E2A\u7F51\u9875\u65F6\uFF0C\u6253\u5F00\u5F88\u6162\uFF0C\u4F46\u5F53\u6211\u4EEC\u518D\u6B21\u6253\u5F00\u8FD9\u4E2A\u7F51\u9875\u65F6\uFF0C\u6253\u5F00\u5C31\u5F88\u5FEB\u3002</p><p>\u8FD9\u5C31\u6D89\u53CA\u7F13\u5B58\u5728\u6D4F\u89C8\u5668\u4E0A\u7684\u5E94\u7528\uFF1A<strong>\u6D4F\u89C8\u5668\u7F13\u5B58</strong>\u3002\u5F53\u6211\u4EEC\u6253\u5F00\u4E00\u4E2A\u7F51\u9875\u65F6\uFF0C\u4F8B\u5982 <code>https://github.com/sisterAn/JavaScript-Algorithms</code> \uFF0C\u5B83\u4F1A\u5728\u53D1\u8D77\u771F\u6B63\u7684\u7F51\u7EDC\u8BF7\u6C42\u524D\uFF0C\u67E5\u8BE2\u6D4F\u89C8\u5668\u7F13\u5B58\uFF0C\u770B\u662F\u5426\u6709\u8981\u8BF7\u6C42\u7684\u6587\u4EF6\uFF0C\u5982\u679C\u6709\uFF0C\u6D4F\u89C8\u5668\u5C06\u4F1A\u62E6\u622A\u8BF7\u6C42\uFF0C\u8FD4\u56DE\u7F13\u5B58\u6587\u4EF6\uFF0C\u5E76\u76F4\u63A5\u7ED3\u675F\u8BF7\u6C42\uFF0C\u4E0D\u4F1A\u518D\u53BB\u670D\u52A1\u5668\u4E0A\u4E0B\u8F7D\u3002\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u624D\u4F1A\u53BB\u670D\u52A1\u5668\u8BF7\u6C42\u3002</p><p>\u5176\u5B9E\uFF0C\u6D4F\u89C8\u5668\u4E2D\u7684\u7F13\u5B58\u662F\u4E00\u79CD\u5728\u672C\u5730\u4FDD\u5B58\u8D44\u6E90\u526F\u672C\uFF0C\u5B83\u7684\u5927\u5C0F\u662F\u6709\u9650\u7684\uFF0C\u5F53\u6211\u4EEC\u8BF7\u6C42\u6570\u8FC7\u591A\u65F6\uFF0C\u7F13\u5B58\u7A7A\u95F4\u4F1A\u88AB\u7528\u6EE1\uFF0C\u6B64\u65F6\uFF0C\u7EE7\u7EED\u8FDB\u884C\u7F51\u7EDC\u8BF7\u6C42\u5C31\u9700\u8981\u786E\u5B9A\u7F13\u5B58\u4E2D\u54EA\u4E9B\u6570\u636E\u88AB\u4FDD\u7559\uFF0C\u54EA\u4E9B\u6570\u636E\u88AB\u79FB\u9664\uFF0C\u8FD9\u5C31\u662F<strong>\u6D4F\u89C8\u5668\u7F13\u5B58\u6DD8\u6C70\u7B56\u7565</strong>\uFF0C\u6700\u5E38\u89C1\u7684\u6DD8\u6C70\u7B56\u7565\u6709 FIFO\uFF08\u5148\u8FDB\u5148\u51FA\uFF09\u3001LFU\uFF08\u6700\u5C11\u4F7F\u7528\uFF09\u3001LRU\uFF08\u6700\u8FD1\u6700\u5C11\u4F7F\u7528\uFF09</p><p>LRU \uFF08 <code>Least Recently Used</code> \uFF1A\u6700\u8FD1\u6700\u5C11\u4F7F\u7528 \uFF09\u7F13\u5B58\u6DD8\u6C70\u7B56\u7565\uFF0C\u6545\u540D\u601D\u4E49\uFF0C\u5C31\u662F\u6839\u636E\u6570\u636E\u7684\u5386\u53F2\u8BBF\u95EE\u8BB0\u5F55\u6765\u8FDB\u884C\u6DD8\u6C70\u6570\u636E\uFF0C\u5176\u6838\u5FC3\u601D\u60F3\u662F <strong>\u5982\u679C\u6570\u636E\u6700\u8FD1\u88AB\u8BBF\u95EE\u8FC7\uFF0C\u90A3\u4E48\u5C06\u6765\u88AB\u8BBF\u95EE\u7684\u51E0\u7387\u4E5F\u66F4\u9AD8</strong> \uFF0C\u4F18\u5148\u6DD8\u6C70\u6700\u8FD1\u6CA1\u6709\u88AB\u8BBF\u95EE\u5230\u7684\u6570\u636E</p><ol><li>LRUCache(int capacity) \u4EE5<code>\u6B63\u6574\u6570</code>\u4F5C\u4E3A\u5BB9\u91CF capacity \u521D\u59CB\u5316 LRU \u7F13\u5B58</li><li>int get(int key) <code>\u5982\u679C\u5173\u952E\u5B57 key \u5B58\u5728\u4E8E\u7F13\u5B58\u4E2D\uFF0C\u5219\u8FD4\u56DE\u5173\u952E\u5B57\u7684\u503C\uFF0C\u5426\u5219\u8FD4\u56DE -1 </code></li><li>void put(int key, int value) <code>\u5982\u679C\u5173\u952E\u5B57\u5DF2\u7ECF\u5B58\u5728\uFF0C\u5219\u53D8\u66F4\u5176\u6570\u636E\u503C</code>\uFF1B<code>\u5982\u679C\u5173\u952E\u5B57\u4E0D\u5B58\u5728\uFF0C\u5219\u63D2\u5165\u8BE5\u7EC4\u300C\u5173\u952E\u5B57-\u503C\u300D</code>\u3002<code>\u5F53\u7F13\u5B58\u5BB9\u91CF\u8FBE\u5230\u4E0A\u9650\u65F6\uFF0C\u5B83\u5E94\u8BE5\u5728\u5199\u5165\u65B0\u6570\u636E\u4E4B\u524D\u5220\u9664\u6700\u4E45\u672A\u4F7F\u7528\u7684\u6570\u636E\u503C</code>\uFF0C\u4ECE\u800C\u4E3A\u65B0\u7684\u6570\u636E\u503C\u7559\u51FA\u7A7A\u95F4\u3002</li></ol><p>\u5176\u5B9E\u8BF4\u767D\u4E86\uFF0C\u53EF\u4EE5\u5C06\u7F13\u5B58\u770B\u6210\u5546\u5E97\uFF0C\u800C\u5BB9\u91CF\u770B\u6210\u4ED3\u5E93\uFF0C\u5546\u5E97\u7684\u6392\u5E8F\u662F\u6709\u8BB2\u7A76\u7684\uFF0C\u5F53\u4EA7\u54C1\u6709\u9700\u6C42\u7684\u65F6\u5019\u5C31\u5C06\u8BE5\u4EA7\u54C1\u653E\u5230\u95E8\u53E3\uFF0C\u4F9D\u6B21\u6392\u5217\u3002\u7531\u4E8E\u5546\u5E97\u7684\u7A7A\u95F4\u662F\u6709\u9650\u7684\uFF0C\u6240\u4EE5\u6211\u9700\u8981\u628A\u90A3\u4E9B\u6392\u5728\u6700\u540E\u9762\u7684\u591A\u4F59\u7684\u5546\u54C1\u653E\u56DE\u4ED3\u5E93\uFF0C\u6B64\u65F6\uFF0C\u5982\u679C\u5728\u5546\u5E97\u4E2D\u67D0\u4E00\u4E2A\u540E\u9762\u7684\u5546\u54C1\u7A81\u7136\u6709\u4E86\u9700\u6C42\u65F6\uFF0C\u5C31\u9700\u8981\u628A\u5B83\u91CD\u65B0\u632A\u5230\u95E8\u53E3\uFF0C\u4E5F\u5C31\u662F\u7B2C\u4E00\u4E2A\u4F4D\u7F6E</p><p>\u89E3\u6CD5\u4E00\uFF1A</p><ul><li>\u4F7F\u7528\u6570\u7EC4\u548C\u5BF9\u8C61\u7ED3\u5408\u7684\u65B9\u5F0F</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">LRUCache</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">capacity</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u7528\u6570\u7EC4\u8BB0\u5F55\u8BFB\u548C\u5199\u7684\u987A\u5E8F</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>keys <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token comment">// \u7528\u5BF9\u8C61\u6765\u4FDD\u5B58key value\u503C</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>cache <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">// \u5BB9\u91CF</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>capacity <span class="token operator">=</span> capacity
<span class="token punctuation">}</span>

<span class="token class-name">LRUCache</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">get</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5982\u679C\u5B58\u5728</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// \u5148\u5220\u9664\u539F\u6765\u7684\u4F4D\u7F6E</span>
        <span class="token function">remove</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>keys<span class="token punctuation">,</span>key<span class="token punctuation">)</span>
        <span class="token comment">// \u518D\u79FB\u52A8\u6700\u540E\u4E00\u4E2A\uFF0C\u4EE5\u4FDD\u6301\u6700\u65B0\u8BBF\u95EE</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>keys<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
        <span class="token comment">// \u8FD4\u56DE\u503C</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token class-name">LRUCache</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">put</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span>value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5B58\u5728\u7684\u65F6\u5019\u5148\u66F4\u65B0\u503C</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value
        <span class="token comment">// \u518D\u66F4\u65B0\u4F4D\u7F6E\u5230\u6700\u540E\u4E00\u4E2A</span>
        <span class="token function">remove</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>keys<span class="token punctuation">,</span>key<span class="token punctuation">)</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>keys<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u4E0D\u5B58\u5728\u7684\u65F6\u5019\u52A0\u5165</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>keys<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value
        <span class="token comment">// \u5BB9\u91CF\u5982\u679C\u8D85\u8FC7\u4E86\u6700\u5927\u503C\uFF0C\u5219\u5220\u9664\u6700\u4E45\u672A\u4F7F\u7528\u7684(\u4E5F\u5C31\u662F\u6570\u7EC4\u4E2D\u7684\u7B2C\u4E00\u4E2Akey)</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>keys<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>capacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">removeCache</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>keys<span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>keys<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// \u79FB\u51FA\u6570\u7EC4\u4E2D\u7684key</span>
<span class="token keyword">function</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> index <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
  
      <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
<span class="token comment">// \u79FB\u9664\u7F13\u5B58\u4E2D key</span>
<span class="token keyword">function</span> <span class="token function">removeCache</span><span class="token punctuation">(</span><span class="token parameter">cache<span class="token punctuation">,</span> keys<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token function">remove</span><span class="token punctuation">(</span>keys<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
<span class="token punctuation">}</span>  



<span class="token keyword">const</span> lRUCache <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LRUCache</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>lRUCache<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u7F13\u5B58\u662F {1=1}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>lRUCache<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u7F13\u5B58\u662F {1=1, 2=2}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>lRUCache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>    <span class="token comment">// \u8FD4\u56DE 1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>lRUCache<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u8BE5\u64CD\u4F5C\u4F1A\u4F7F\u5F97\u5173\u952E\u5B57 2 \u4F5C\u5E9F\uFF0C\u7F13\u5B58\u662F {1=1, 3=3}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>lRUCache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>    <span class="token comment">// \u8FD4\u56DE -1 (\u672A\u627E\u5230)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>lRUCache<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u8BE5\u64CD\u4F5C\u4F1A\u4F7F\u5F97\u5173\u952E\u5B57 1 \u4F5C\u5E9F\uFF0C\u7F13\u5B58\u662F {4=4, 3=3}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>lRUCache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>   <span class="token comment">// \u8FD4\u56DE -1 (\u672A\u627E\u5230)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>lRUCache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>    <span class="token comment">// \u8FD4\u56DE 3</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>lRUCache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>   <span class="token comment">// \u8FD4\u56DE 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u89E3\u6CD5\u4E8C\uFF1A</p><ul><li>\u4F7F\u7528map\u4F5C\u4E3A\u7F13\u5B58</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">LRUCache</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">capacity</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>cache <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>capacity <span class="token operator">=</span> capacity
<span class="token punctuation">}</span>

<span class="token class-name">LRUCache</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">get</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
        <span class="token comment">// \u66F4\u65B0\u4F4D\u7F6E</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span>value<span class="token punctuation">)</span>

        <span class="token keyword">return</span> value
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token class-name">LRUCache</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">put</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span>value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5728\u5DF2\u6709\u7684\u60C5\u51B5\u4E0B\uFF0C\u66F4\u65B0\u5176\u4F4D\u7F6E\u5230\u6700\u65B0\u5373\u53EF</span>
    <span class="token comment">// \u5148\u5220\u9664\u540E\u63D2\u5165</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u63D2\u5165\u6570\u636E\u524D\u9700\u8981\u5224\u65AD\uFF0Csize\u662F\u5426\u7B26\u5408capacity</span>
        <span class="token comment">// \u5982\u679C\u5DF2\u7ECF\u5927\u4E8E\u7B49\u4E8Ecapacity\u65F6\uFF0C\u9700\u8981\u628A\u6700\u5F00\u59CB\u63D2\u5165\u7684\u6570\u636E\u5220\u9664\u6389</span>
        <span class="token comment">// keys()\u65B9\u6CD5\u5F97\u5230\u4E00\u4E2A\u53EF\u904D\u5386\u5BF9\u8C61\uFF0C\u6267\u884Cnext()\u62FF\u5230\u4E00\u4E2A\u5F62\u5982{value: &#39;xxx&#39;, done: false}\u7684\u5BF9\u8C61</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">.</span>size <span class="token operator">&gt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>capacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> lRUCache <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LRUCache</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>lRUCache<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u7F13\u5B58\u662F {1=1}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>lRUCache<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u7F13\u5B58\u662F {1=1, 2=2}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>lRUCache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>    <span class="token comment">// \u8FD4\u56DE 1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>lRUCache<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u8BE5\u64CD\u4F5C\u4F1A\u4F7F\u5F97\u5173\u952E\u5B57 2 \u4F5C\u5E9F\uFF0C\u7F13\u5B58\u662F {1=1, 3=3}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>lRUCache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>    <span class="token comment">// \u8FD4\u56DE -1 (\u672A\u627E\u5230)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>lRUCache<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u8BE5\u64CD\u4F5C\u4F1A\u4F7F\u5F97\u5173\u952E\u5B57 1 \u4F5C\u5E9F\uFF0C\u7F13\u5B58\u662F {4=4, 3=3}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>lRUCache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>   <span class="token comment">// \u8FD4\u56DE -1 (\u672A\u627E\u5230)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>lRUCache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>    <span class="token comment">// \u8FD4\u56DE 3</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>lRUCache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>   <span class="token comment">// \u8FD4\u56DE 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>LRU\u7B97\u6CD5\u4E0Ekeep-alive\u4E4B\u95F4\u7684\u5173\u7CFB\uFF1A</p><p>\u5728 2.5.0 \u7248\u672C\u4E2D\uFF0C<code>keep-alive</code> \u65B0\u589E\u4E86 <code>max</code> \u5C5E\u6027\uFF0C\u7528\u4E8E\u6700\u591A\u53EF\u4EE5\u7F13\u5B58\u591A\u5C11\u7EC4\u4EF6\u5B9E\u4F8B\uFF0C\u4E00\u65E6\u8FD9\u4E2A\u6570\u5B57\u8FBE\u5230\u4E86\uFF0C\u5728\u65B0\u5B9E\u4F8B\u88AB\u521B\u5EFA\u4E4B\u524D\uFF0C\u5DF2\u7F13\u5B58\u7EC4\u4EF6\u4E2D\u6700\u4E45\u6CA1\u6709\u88AB\u8BBF\u95EE\u7684\u5B9E\u4F8B\u4F1A\u88AB\u9500\u6BC1\u6389\uFF0C<strong>\u770B\uFF0C\u8FD9\u91CC\u5C31\u5E94\u7528\u4E86 LRU \u7B97\u6CD5</strong>\u3002\u5373\u5728 <code>keep-alive</code> \u4E2D\u7F13\u5B58\u8FBE\u5230 <code>max</code>\uFF0C\u65B0\u589E\u7F13\u5B58\u5B9E\u4F8B\u4F1A\u4F18\u5148\u6DD8\u6C70\u6700\u8FD1\u6CA1\u6709\u88AB\u8BBF\u95EE\u5230\u7684\u5B9E\u4F8B</p>`,16),e=[c];function o(l,u){return s(),a("div",null,e)}const k=n(t,[["render",o],["__file","algorithm.html.vue"]]);export{k as default};
