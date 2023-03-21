import{_ as t,r as p,o,c,b as n,d as s,a as i,e as a}from"./app.bb973a4f.js";const l={},r=a(`<h1 id="redux\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#redux\u57FA\u7840" aria-hidden="true">#</a> Redux\u57FA\u7840</h1><h2 id="\u7EAF\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u7EAF\u51FD\u6570" aria-hidden="true">#</a> \u7EAF\u51FD\u6570</h2><ul><li>\u5728\u51FD\u6570\u5F0F\u7F16\u7A0B\u4E2D\u6709\u4E00\u4E2A\u6982\u5FF5\u53EB\u505A\u7EAF\u51FD\u6570\uFF0C\u6307\u6B64\u51FD\u6570\u5728\u76F8\u540C\u7684\u8F93\u5165\u503C\u65F6\uFF0C\u9700\u4EA7\u751F\u76F8\u540C\u7684\u8F93\u51FA\u3002\u51FD\u6570\u7684\u8F93\u51FA\u548C\u8F93\u5165\u503C\u4EE5\u5916\u7684\u5176\u4ED6\u9690\u85CF\u4FE1\u606F\u6216\u72B6\u6001\u65E0\u5173\uFF0C\u4E5F\u548C\u7531I/O\u8BBE\u5907\u4EA7\u751F\u7684\u5916\u90E8\u8F93\u51FA\u65E0\u5173\u3002</li><li>\u5177\u4F53\u7684\u7EAF\u51FD\u6570\u4ECB\u7ECD\u53EF\u4EE5\u770B<strong>\u9AD8\u7EA7JS</strong></li><li>\u7EAF\u51FD\u6570\u5728\u51FD\u6570\u5F0F\u7F16\u7A0B\u4E2D\u662F\u5341\u5206\u91CD\u8981\u7684\uFF0C\u6211\u4EEC\u5728\u4F7F\u7528\u7EAF\u51FD\u6570\u7684\u65F6\u5019\u5C31\u4E0D\u9700\u8981\u8003\u8651\u526F\u4F5C\u7528\u7B49\u5F71\u54CD\uFF0CReact\u4E2D\u8981\u6C42\u65E0\u8BBA\u662F\u7EAF\u51FD\u6570\u8FD8\u662Fclass\u58F0\u660E\u7EC4\u4EF6\uFF0C\u8FD9\u4E2A\u7EC4\u4EF6\u90FD\u9700\u8981\u50CF\u7EAF\u51FD\u6570\u4E00\u6837\uFF0C\u4FDD\u62A4\u4ED6\u4EEC\u7684props\u4E0D\u88AB\u968F\u610F\u4FEE\u6539\uFF0C\u800CRedux\u4E2D\u4E5F\u662F\u5982\u6B64</li></ul><h2 id="store" tabindex="-1"><a class="header-anchor" href="#store" aria-hidden="true">#</a> Store</h2><ul><li>\u5F53\u6211\u4EEC\u7F16\u5199\u7EC4\u4EF6\u7684\u65F6\u5019\uFF0C\u65E0\u8BBA\u662F\u590D\u7528\u6570\u636E\u8FD8\u662F\u5185\u90E8\u6570\u636E\uFF0C\u5F53\u9700\u8981\u7BA1\u7406\u7684\u72B6\u6001\u8D8A\u6765\u8D8A\u591A\u7684\u65F6\u5019\uFF0C\u4E00\u4E2A\u7EC4\u4EF6\u5185\u90E8\u7684\u4EE3\u7801\u5757\u4F1A\u53D8\u5F97\u975E\u5E38\u81C3\u80BF\uFF0C\u5305\u62EC\u8BF7\u6C42\u6570\u636E\uFF0C\u7F13\u5B58\u7B49\u7B49\uFF0C\u7BA1\u7406\u4E0D\u65AD\u53D8\u5316\u7684state\u662F\u975E\u5E38\u56F0\u96BE\u7684\uFF0C\u56E0\u4E3A\u72B6\u6001\u4E4B\u95F4\u53EF\u80FD\u5B58\u5728\u76F8\u4E92\u4F9D\u8D56\uFF0C\u5F53\u53D8\u5F97\u590D\u6742\u7684\u65F6\u5019\u662F\u5F88\u96BE\u5BF9state\u8FDB\u884C\u8DDF\u8E2A\u548C\u63A7\u5236\u7684</li><li>React\u4E2D\u4E3B\u8981\u662F\u8D1F\u8D23\u5E2E\u52A9\u7BA1\u7406\u89C6\u56FE\uFF0C\u800C\u4E0D\u662F\u53BB\u7EF4\u62A4state\uFF0C\u6240\u4EE5Redux\u7684\u6982\u5FF5\u5C31\u51FA\u73B0\u4E86\uFF0CRedux\u5C31\u662F\u4E00\u4E2A\u5E2E\u52A9\u6211\u4EEC\u7BA1\u7406State\u7684\u5BB9\u5668\uFF0C\u63D0\u4F9B\u4E86\u53EF\u9884\u6D4B\u7684\u72B6\u6001\u7BA1\u7406</li><li>Redux\u63D0\u4F9B\u7684\u6838\u5FC3\u7406\u5FF5Store\u5C31\u5F88\u597D\u5730\u5E2E\u6211\u4EEC\u5BF9\u6570\u636E\u8FDB\u884C\u4E86\u4E00\u4E2A\u7EDF\u4E00\u7684\u7BA1\u7406</li><li>\u5F53\u7136\uFF0CStore\u7684\u8BBE\u7F6E\u53EF\u4EE5\u662F\u5168\u5C40\u7684\uFF0C\u4E5F\u53EF\u4EE5\u662F\u67D0\u4E2A\u9875\u9762\u72EC\u7ACB\u7684Store</li></ul><h2 id="action" tabindex="-1"><a class="header-anchor" href="#action" aria-hidden="true">#</a> Action</h2><ul><li>Redux\u8981\u6C42\u901A\u8FC7action\u6765\u66F4\u65B0\u6570\u636E\uFF0C\u6240\u6709\u6570\u636E\u7684\u53D8\u5316\uFF0C\u5FC5\u987B\u901A\u8FC7\u6D3E\u53D1\uFF08dispatch\uFF09action\u6765\u66F4\u65B0</li><li>action\u662F\u4E00\u4E2A\u666E\u901A\u7684JavaScript\u5BF9\u8C61\uFF0C\u7528\u6765\u63CF\u8FF0\u8FD9\u6B21\u66F4\u65B0\u7684type\u548Ccontent</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">changeNewRankingAction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> actionTypes<span class="token punctuation">.</span><span class="token constant">CHANGE_NEW_RANKING</span><span class="token punctuation">,</span>
    <span class="token literal-property property">newRanking</span><span class="token operator">:</span>  res<span class="token punctuation">.</span>playlist
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">changeOriginRankingAction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> actionTypes<span class="token punctuation">.</span><span class="token constant">CHANGE_ORIGIN_RANKING</span><span class="token punctuation">,</span>
    <span class="token literal-property property">originRanking</span><span class="token operator">:</span>  res<span class="token punctuation">.</span>playlist
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getNewAlbumsAction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">limit</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token parameter">dispatch</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">getNewAlbums</span><span class="token punctuation">(</span>limit<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">changeNewAlbumAction</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getTopListAction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token parameter">dispatch</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">getPlaylist</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">switch</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">case</span> <span class="token constant">RECOMMEND_RANKING</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">:</span>
                    <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">changeUpRankingAction</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span>
                <span class="token keyword">case</span> <span class="token constant">RECOMMEND_RANKING</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">:</span>
                    <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">changeNewRankingAction</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span>
                <span class="token keyword">case</span> <span class="token constant">RECOMMEND_RANKING</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">:</span>
                    <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">changeOriginRankingAction</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span>
                <span class="token keyword">default</span><span class="token operator">:</span>    
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reducer" tabindex="-1"><a class="header-anchor" href="#reducer" aria-hidden="true">#</a> reducer</h2><ul><li>state\u548Caction\u8054\u7CFB\u8D77\u6765\uFF0C\u5C31\u9700\u8981\u901A\u8FC7reducer</li><li>reducer\u662F\u4E00\u4E2A\u7EAF\u51FD\u6570\uFF0Creducer\u5B9E\u9645\u4E0A\u5C31\u662F\u5C06\u4F20\u5165\u7684state\u548Caction\u7ED3\u5408\u8D77\u6765\u751F\u6210\u4E00\u4E2A\u65B0\u7684state</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> defaultState <span class="token operator">=</span> <span class="token function">Map</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">topBanners</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hotRecommends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">newAlbums</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">upRanking</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">newRanking</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">originRanking</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">reducer</span><span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> defaultState<span class="token punctuation">,</span>action</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">switch</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">case</span> actionTypes<span class="token punctuation">.</span><span class="token constant">CHANGE_TOP_BANNERS</span><span class="token operator">:</span>
            <span class="token keyword">return</span> state<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;topBanners&quot;</span><span class="token punctuation">,</span>action<span class="token punctuation">.</span>topBanners<span class="token punctuation">)</span>
        <span class="token keyword">case</span> actionTypes<span class="token punctuation">.</span><span class="token constant">CHANGE_HOT_RECOMMEND</span><span class="token operator">:</span>
            <span class="token keyword">return</span> state<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;hotRecommends&quot;</span><span class="token punctuation">,</span>action<span class="token punctuation">.</span>hotRecommends<span class="token punctuation">)</span>
        <span class="token keyword">case</span> actionTypes<span class="token punctuation">.</span><span class="token constant">CHANGE_NEW_ALBUM</span><span class="token operator">:</span>
            <span class="token keyword">return</span> state<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;newAlbums&quot;</span><span class="token punctuation">,</span>action<span class="token punctuation">.</span>newAlbums<span class="token punctuation">)</span>
        <span class="token keyword">case</span> actionTypes<span class="token punctuation">.</span><span class="token constant">CHANGE_UP_RANKING</span><span class="token operator">:</span>
            <span class="token keyword">return</span> state<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;upRanking&quot;</span><span class="token punctuation">,</span>action<span class="token punctuation">.</span>upRanking<span class="token punctuation">)</span>
        <span class="token keyword">case</span> actionTypes<span class="token punctuation">.</span><span class="token constant">CHANGE_NEW_RANKING</span><span class="token operator">:</span>
            <span class="token keyword">return</span> state<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;newRanking&quot;</span><span class="token punctuation">,</span>action<span class="token punctuation">.</span>newRanking<span class="token punctuation">)</span>
        <span class="token keyword">case</span> actionTypes<span class="token punctuation">.</span><span class="token constant">CHANGE_ORIGIN_RANKING</span><span class="token operator">:</span>
            <span class="token keyword">return</span> state<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;originRanking&quot;</span><span class="token punctuation">,</span>action<span class="token punctuation">.</span>originRanking<span class="token punctuation">)</span>
        <span class="token keyword">default</span><span class="token operator">:</span>
            <span class="token keyword">return</span> state<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> reducer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redux\u4E09\u5927\u539F\u5219" tabindex="-1"><a class="header-anchor" href="#redux\u4E09\u5927\u539F\u5219" aria-hidden="true">#</a> Redux\u4E09\u5927\u539F\u5219</h2><h3 id="\u5355\u4E00\u6570\u636E\u6E90" tabindex="-1"><a class="header-anchor" href="#\u5355\u4E00\u6570\u636E\u6E90" aria-hidden="true">#</a> \u5355\u4E00\u6570\u636E\u6E90</h3><ul><li>\u6574\u4E2A\u5E94\u7528\u7A0B\u5E8F\u7684state\u88AB\u5B58\u50A8\u5728\u4E00\u9897object tree\u4E2D\uFF0C\u5E76\u4E14\u8FD9\u4E2Aobject tree\u53EA\u5B58\u50A8\u5728\u4E00\u4E2A store \u4E2D</li><li>Redux\u5E76\u6CA1\u6709\u5F3A\u5236\u8BA9\u6211\u4EEC\u4E0D\u80FD\u521B\u5EFA\u591A\u4E2AStore\uFF0C\u4F46\u662F\u90A3\u6837\u505A\u5E76\u4E0D\u5229\u4E8E\u6570\u636E\u7684\u7EF4\u62A4</li><li>\u5355\u4E00\u7684\u6570\u636E\u6E90\u53EF\u4EE5\u8BA9\u6574\u4E2A\u5E94\u7528\u7A0B\u5E8F\u7684state\u53D8\u5F97\u65B9\u4FBF\u7EF4\u62A4\u3001\u8FFD\u8E2A\u3001\u4FEE\u6539</li></ul><h3 id="state\u53EA\u8BFB" tabindex="-1"><a class="header-anchor" href="#state\u53EA\u8BFB" aria-hidden="true">#</a> State\u53EA\u8BFB</h3><ul><li>\u552F\u4E00\u4FEE\u6539State\u7684\u65B9\u6CD5\u4E00\u5B9A\u662F\u89E6\u53D1action\uFF0C\u4E0D\u8981\u8BD5\u56FE\u5728\u5176\u4ED6\u5730\u65B9\u901A\u8FC7\u4EFB\u4F55\u7684\u65B9\u5F0F\u6765\u4FEE\u6539State</li><li>\u8FD9\u6837\u5C31\u786E\u4FDD\u4E86View\u6216\u7F51\u7EDC\u8BF7\u6C42\u90FD\u4E0D\u80FD\u76F4\u63A5\u4FEE\u6539state\uFF0C\u5B83\u4EEC\u53EA\u80FD\u901A\u8FC7action\u6765\u63CF\u8FF0\u81EA\u5DF1\u60F3\u8981\u5982\u4F55\u4FEE\u6539state</li><li>\u8FD9\u6837\u53EF\u4EE5\u4FDD\u8BC1\u6240\u6709\u7684\u4FEE\u6539\u90FD\u88AB\u96C6\u4E2D\u5316\u5904\u7406\uFF0C\u5E76\u4E14\u6309\u7167\u4E25\u683C\u7684\u987A\u5E8F\u6765\u6267\u884C\uFF0C\u6240\u4EE5\u4E0D\u9700\u8981\u62C5\u5FC3race condition\uFF08\u7ADF\u6001\uFF09\u7684\u95EE\u9898</li></ul><h3 id="\u4F7F\u7528\u7EAF\u51FD\u6570\u6765\u6267\u884C\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u7EAF\u51FD\u6570\u6765\u6267\u884C\u4FEE\u6539" aria-hidden="true">#</a> \u4F7F\u7528\u7EAF\u51FD\u6570\u6765\u6267\u884C\u4FEE\u6539</h3><ul><li>\u901A\u8FC7reducer\u5C06 \u65E7state\u548C actions\u8054\u7CFB\u5728\u4E00\u8D77\uFF0C\u5E76\u4E14\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684State</li><li>\u968F\u7740\u5E94\u7528\u7A0B\u5E8F\u7684\u590D\u6742\u5EA6\u589E\u52A0\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06reducer\u62C6\u5206\u6210\u591A\u4E2A\u5C0F\u7684reducers\uFF0C\u5206\u522B\u64CD\u4F5C\u4E0D\u540Cstate tree\u7684\u4E00\u90E8\u5206</li><li>\u6240\u6709\u7684reducer\u90FD\u5E94\u8BE5\u662F\u7EAF\u51FD\u6570\uFF0C\u4E0D\u80FD\u4EA7\u751F\u4EFB\u4F55\u7684\u526F\u4F5C\u7528</li></ul><h2 id="\u5408\u5E76reducer" tabindex="-1"><a class="header-anchor" href="#\u5408\u5E76reducer" aria-hidden="true">#</a> \u5408\u5E76reducer</h2><ul><li>\u5F53\u6211\u4EEC\u7ED9\u591A\u4E2A\u9875\u9762\u8BBE\u7F6E\u4E86\u5355\u72EC\u7684store\u65F6\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5C31\u9700\u8981\u5C06\u4E0D\u540C\u9875\u9762\u4E2D\u7684reducer\u5408\u5E76\uFF0C\u8BA9\u6570\u636E\u6210\u4E3A\u4E00\u68F5\u6811\u7ED3\u6784\uFF0C\u8FD9\u6837\u6709\u5229\u4E8E\u6211\u4EEC\u7EF4\u62A4\u4EE5\u53CA\u8FFD\u8E2A\u6570\u636E</li><li>redux\u6709\u63D0\u4F9BcombineReducersAPI\u6765\u5408\u5E76reducers</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> combineReducers <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux-immutable&#39;</span> 

<span class="token keyword">import</span> <span class="token punctuation">{</span> reducer <span class="token keyword">as</span> recommendReducer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../pages/discover/child-pages/recommend/store&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> reducer <span class="token keyword">as</span> playerReducer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../pages/player/store/&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> TotalReducer <span class="token operator">=</span> <span class="token function">combineReducers</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">recommend</span><span class="token operator">:</span> recommendReducer<span class="token punctuation">,</span>
    <span class="token literal-property property">player</span><span class="token operator">:</span> playerReducer<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> TotalReducer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E2D\u95F4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a> \u4E2D\u95F4\u4EF6</h2><ul><li>\u5F53\u6211\u4EEC\u5C01\u88C5\u597D\u4E86reducer\uFF0C\u4F1A\u53D1\u73B0\u6709\u4E00\u4E2A\u81F4\u547D\u7684\u7F3A\u70B9\uFF0C\u6211\u4EEC\u5FC5\u987B\u5C06\u7F51\u7EDC\u8BF7\u6C42\u7684\u5F02\u6B65\u4EE3\u7801\u653E\u5230\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F\u4E2D\u5B8C\u6210\uFF0C\u4F46\u662F\u5B9E\u9645\u4E0A\u7F51\u7EDC\u8BF7\u6C42\u5230\u7684\u6570\u636E\u4E5F\u5C5E\u4E8E\u72B6\u6001\u7BA1\u7406\u7684\u4E00\u90E8\u5206\uFF0C\u6700\u597D\u7684\u65B9\u6CD5\u5C31\u662F\u5C06\u5176\u4EA4\u7ED9redux\u6765\u7BA1\u7406\uFF0C\u4F46redux\u662F\u5982\u4F55\u5904\u7406\u5F02\u6B65\u4EE3\u7801\u7684\u5462\uFF1F</li><li>redux\u5141\u8BB8\u4F7F\u7528\u4E2D\u95F4\u4EF6<strong>Middleware</strong>\u6765\u8FDB\u884C\u5F02\u6B65\u64CD\u4F5C</li><li>Middleware\u53EF\u4EE5\u5728\u8BF7\u6C42\u548C\u54CD\u5E94\u4E4B\u95F4\u5D4C\u5165\u4E00\u4E9B\u64CD\u4F5C\u7684\u4EE3\u7801\uFF0C\u6BD4\u5982cookie\u89E3\u6790\u3001\u65E5\u5FD7\u8BB0\u5F55\u3001\u6587\u4EF6\u538B\u7F29\u7B49\u64CD\u4F5C</li><li>\u4E2D\u95F4\u4EF6\u7684\u76EE\u7684\u662F\u5728dispatch\u7684action\u548C\u6700\u7EC8\u8FBE\u5230\u7684reducer\u4E4B\u95F4\uFF0C\u6269\u5C55\u4E00\u4E9B\u72EC\u7ACB\u7684\u4EE3\u7801</li><li>\u5B98\u65B9\u63A8\u8350\u7684\u4E2D\u95F4\u4EF6\u662F\u4F7F\u7528redux-thunk\uFF0C\u5F53\u7136redux-saga\u4E2D\u95F4\u95F4\u4E5F\u662F\u4E00\u4E2A\u6BD4\u8F83\u5728redux\u4E2D\u5E38\u7528\u7684\u4E2D\u95F4\u4EF6</li><li>redux-thunk\u53EF\u4EE5\u8BA9dispatch(action\u51FD\u6570)\uFF0Caction\u53EF\u4EE5\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u4F1A\u88AB\u8C03\u7528\uFF0C\u5E76\u4E14\u4F1A\u4F20\u7ED9\u8FD9\u4E2A\u51FD\u6570\u4E00\u4E2Adispatch\u51FD\u6570\u548CgetState\u51FD\u6570</li><li>\u5F53\u6211\u4EEC\u83B7\u53D6\u5230dispatch\u548CgetState\u51FD\u6570\u7684\u65F6\u5019\uFF0C\u5C31\u53EF\u4EE5\u6D3E\u53D1action\u548C\u83B7\u53D6\u539F\u6765\u7684\u72B6\u6001</li><li></li></ul><h2 id="\u5408\u5E76\u4E2D\u95F4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5408\u5E76\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a> \u5408\u5E76\u4E2D\u95F4\u4EF6</h2>`,24),u=a("<li>redux\u6709\u63D0\u4F9B<strong>applyMiddleware</strong>API\u6765\u5E2E\u52A9\u6211\u4EEC\u5408\u5E76\u4E2D\u95F4\u4EF6</li><li>\u8FD9\u6837\u6211\u4EEC\u53EA\u9700\u8981\u5C06\u5408\u5E76\u7684\u603Breducers\u4F20\u8FDB\u53BB\uFF0C\u518D\u5408\u5E76\u4E2D\u95F4\u4EF6</li><li><code>compose</code>\u51FD\u6570\u662FRedux\u66B4\u9732\u51FA\u6765\u552F\u4E00\u4E00\u4E2A\u80FD\u5355\u72EC\u4F7F\u7528\u7684API\uFF0C\u672C\u8D28\u662F\u51FD\u6570\u5F0F\u7F16\u7A0B\u7684\u7EC4\u5408\u51FD\u6570</li><li><code>compose</code> \u51FD\u6570\u505A\u7684\u4E8B\u5C31\u662F\u628A <code>var a = fn1(fn2(fn3(fn4(x))))</code> \u8FD9\u79CD\u5D4C\u5957\u7684\u8C03\u7528\u65B9\u5F0F\u6539\u6210 <code>var a = compose(fn1,fn2,fn3,fn4)(x)</code> \u7684\u65B9\u5F0F\u8C03\u7528\u3002</li>",4),d=n("code",null,"reduce",-1),k={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce",target:"_blank",rel:"noopener noreferrer"},v=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore<span class="token punctuation">,</span>applyMiddleware<span class="token punctuation">,</span>compose <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> thunk <span class="token keyword">from</span> <span class="token string">&#39;redux-thunk&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> reducers <span class="token keyword">from</span> <span class="token string">&#39;./reducer&#39;</span>

<span class="token keyword">const</span> composeEnhancers <span class="token operator">=</span> window<span class="token punctuation">.</span>__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ <span class="token operator">||</span> compose<span class="token punctuation">;</span>


<span class="token comment">// configureStore\u4EE3\u66FF\u4E86createStore</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>reducers<span class="token punctuation">,</span><span class="token function">composeEnhancers</span><span class="token punctuation">(</span>
    <span class="token function">applyMiddleware</span><span class="token punctuation">(</span>thunk<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> store
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hooks\u4E2Dapi\u5B9E\u73B0\u83B7\u53D6reducer\u4E2D\u7684\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#hooks\u4E2Dapi\u5B9E\u73B0\u83B7\u53D6reducer\u4E2D\u7684\u6570\u636E" aria-hidden="true">#</a> Hooks\u4E2DAPI\u5B9E\u73B0\u83B7\u53D6reducer\u4E2D\u7684\u6570\u636E</h2><ul><li>redux\u4E2D\u63D0\u4F9B\u4E86\u5BF9\u5E94Hooks\u4E2D\u7684useSelectorAPI\u6765\u5728\u7EC4\u4EF6\u5185\u90E8\u83B7\u53D6reducer\u4E2D\u7684\u6570\u636E\uFF0C\u901A\u8FC7\u89E3\u6784\u53EF\u4EE5\u83B7\u53D6reducer\u4E2D\u7684state</li><li>shallowEqual\u4E3B\u8981\u662FHooks\u5BF9State\u63D0\u4F9B\u7684\u6027\u80FD\u4F18\u5316API\uFF0C\u901A\u5E38\u7ED9useSelector\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570</li></ul><div class="language-react ext-react line-numbers-mode"><pre class="language-react"><code>const { hotRecommends } = useSelector(state =&gt; ({
        hotRecommends: state.getIn([&quot;recommend&quot;,&quot;hotRecommends&quot;])
    }),shallowEqual)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hooks\u4E2Dapi\u5B9E\u73B0dispatch" tabindex="-1"><a class="header-anchor" href="#hooks\u4E2Dapi\u5B9E\u73B0dispatch" aria-hidden="true">#</a> Hooks\u4E2DAPI\u5B9E\u73B0Dispatch</h2><ul><li>redux\u4E2D\u63D0\u4F9B\u4E86\u5BF9\u5E94Hooks\u4E2D\u7684useDispatchAPI\u6765\u5E2E\u6211\u4EEC\u5B8C\u6210dispatch\u7684\u521B\u5EFA\uFF0C\u8FD9\u6837\u53EA\u9700\u8981\u5728uesEffect\u4E2D\u6D3E\u53D1\u4E8B\u4EF6\u5373\u53EF</li><li>\u6CE8\u610F\uFF0CuseEffect\u4E2D\u7684\u4F9D\u8D56\u9879\u5E94\u8BE5\u65F6dispatch\u5BF9\u8C61</li></ul><div class="language-react ext-react line-numbers-mode"><pre class="language-react"><code>const dispatch = useDispatch();

    useEffect(() =&gt; {
        dispatch(getHotRecommendsAction(HOT_RECOMMEND_LIMIT))
    },[dispatch])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="immutable" tabindex="-1"><a class="header-anchor" href="#immutable" aria-hidden="true">#</a> Immutable</h2><ul><li>\u5728React\u5F00\u53D1\u4E2D\uFF0CReact\u5F3A\u8C03\u6570\u636E\u7684\u4E0D\u53EF\u53D8\u6027\uFF0C\u5F53\u6570\u636E\u9700\u8981\u53D1\u751F\u6539\u53D8\u7684\u65F6\u5019\uFF0C\u4E0D\u5E94\u8BE5\u4F7F\u7528\u539F\u6765\u7684\u6570\u636E\u8FDB\u884C\u64CD\u4F5C\uFF0C\u800C\u662F\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684<strong>\u4E34\u65F6\u6570\u636E</strong>\u8986\u76D6\u539F\u6765\u7684\u6570\u636E</li><li>\u6D45\u62F7\u8D1D\uFF08object.assign\uFF09\u53EF\u4EE5\u89E3\u51B3\u4E0A\u8FF0\u7684\u95EE\u9898\uFF0C\u4F46\u662F\u6D45\u62F7\u8D1D\u5728\u9762\u5BF9\u5E9E\u5927\u7684\u6570\u636E\u65F6\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u4F1A\u9020\u6210\u6027\u80FD\u95EE\u9898\u548C\u5185\u5B58\u6D6A\u8D39</li><li>\u4E3A\u4E86\u89E3\u51B3\u4E0A\u8FF0\u6982\u5FF5\uFF0C\u63D0\u51FA\u4E86\u65B0\u7684\u7B97\u6CD5Persistent Data Structure\uFF08\u6301\u4E45\u5316\u6570\u636E\u7ED3\u6784\u6216\u4E00\u81F4\u6027\u6570\u636E\u7ED3\u6784\uFF09</li><li>ImmutableJS\u7B2C\u4E09\u65B9\u5E93\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u5FEB\u901F\u5B9E\u73B0\u4E0A\u8FF0\u7B97\u6CD5\uFF0C\u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217API\u7528\u6765\u8F6C\u6362\u6570\u636E</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5408\u5E76reducer\u6587\u4EF6\u4E2D</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> combineReducers <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux-immutable&#39;</span> 

<span class="token keyword">import</span> <span class="token punctuation">{</span> reducer <span class="token keyword">as</span> recommendReducer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../pages/discover/child-pages/recommend/store&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> reducer <span class="token keyword">as</span> playerReducer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../pages/player/store/&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> TotalReducer <span class="token operator">=</span> <span class="token function">combineReducers</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">recommend</span><span class="token operator">:</span> recommendReducer<span class="token punctuation">,</span>
    <span class="token literal-property property">player</span><span class="token operator">:</span> playerReducer<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> TotalReducer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u67D0\u4E2Areducer\u6587\u4EF6\u4E2D</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Map <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;immutable&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> defaultState <span class="token operator">=</span> <span class="token function">Map</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">topBanners</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hotRecommends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">newAlbums</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">upRanking</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">newRanking</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">originRanking</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function m(b,h){const e=p("ExternalLinkIcon");return o(),c("div",null,[r,n("ul",null,[u,n("li",null,[s("\u5408\u5E76\u4E2D\u95F4\u4EF6\u5C31\u662F\u5229\u7528\u4E86compose\u51FD\u6570\u6765\u8FDB\u884C\u5408\u5E76\u7684\uFF0Credux\u5B9E\u9645\u4E0A\u662F\u7528\u7684\u6570\u7EC4\u4E2D\u7684"),d,s("\u65B9\u6CD5\uFF0C\u5177\u4F53\u53EF\u4EE5\u67E5\u770B"),n("a",k,[s("MDN"),i(e)])])]),v])}const g=t(l,[["render",m],["__file","Redux.html.vue"]]);export{g as default};
