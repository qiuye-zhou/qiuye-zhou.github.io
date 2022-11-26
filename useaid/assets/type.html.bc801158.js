import{_ as n,o as s,c as a,b as e}from"./app.dd1b6c93.js";const t={},p=e(`<h1 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> Type</h1><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Media query to determine whether the browser is in the current condition
 * <span class="token keyword">@param</span> <span class="token parameter">value</span> Must be of type number
 * <span class="token keyword">@param</span> <span class="token parameter">type</span> Must be &#39;max&#39; or &#39;min&#39;
 * <span class="token keyword">@returns</span> Whether it is in the judging state( true || false )
 */</span>
<span class="token keyword">declare</span> <span class="token keyword">const</span> <span class="token function-variable function">useMedia</span><span class="token operator">:</span> <span class="token punctuation">(</span>value<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> type<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> vue<span class="token punctuation">.</span>Ref<span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> useMedia <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function c(r,i){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","type.html.vue"]]);export{d as default};
