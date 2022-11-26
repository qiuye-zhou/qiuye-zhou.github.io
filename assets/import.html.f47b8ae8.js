import{_ as p,r as o,o as d,c as u,d as a,e as s,a as n,w as e,b as i}from"./app.4c0b9491.js";const r={},h=a("h1",{id:"导入",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#导入","aria-hidden":"true"},"#"),s(" 导入")],-1),_=a("p",null,"有几种方法能将 use-aid 引入你的项目。",-1),k=a("h2",{id:"esm",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#esm","aria-hidden":"true"},"#"),s(" ESM")],-1),g={href:"https://vitejs.dev",target:"_blank",rel:"noopener noreferrer"},f={href:"https://webpack.js.org",target:"_blank",rel:"noopener noreferrer"},m=a("div",{class:"language-bash","data-ext":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"pnpm"),s(),a("span",{class:"token function"},"add"),s(` use-aid
`)])])],-1),b=a("div",{class:"language-bash","data-ext":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"yarn"),s(),a("span",{class:"token function"},"add"),s(` use-aid
`)])])],-1),v=a("div",{class:"language-bash","data-ext":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"npm"),s(),a("span",{class:"token function"},"install"),s(` use-aid
`)])])],-1),x=i(`<p>然后使用下面的代码来导入 use-aid中需要使用的方法：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useMedia <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;use-aid&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="iife" tabindex="-1"><a class="header-anchor" href="#iife" aria-hidden="true">#</a> IIFE</h2><p>只需要在 HTML 里添加如下标签。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./dist/useiife.iife<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="cjs" tabindex="-1"><a class="header-anchor" href="#cjs" aria-hidden="true">#</a> CJS</h2><p>首先，先用包管理器下载 use-aid：</p>`,7),y=a("div",{class:"language-bash","data-ext":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"pnpm"),s(),a("span",{class:"token function"},"add"),s(` use-aid
`)])])],-1),N=a("div",{class:"language-bash","data-ext":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"yarn"),s(),a("span",{class:"token function"},"add"),s(` use-aid
`)])])],-1),M=a("div",{class:"language-bash","data-ext":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"npm"),s(),a("span",{class:"token function"},"install"),s(` use-aid
`)])])],-1),w=i(`<p>然后，把 use-aid 作为 commonjs 模块导入：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> useMedia <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;use-aid&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2);function C(I,P){const c=o("ExternalLinkIcon"),t=o("CodeGroupItem"),l=o("CodeGroup");return d(),u("div",null,[h,_,k,a("p",null,[s("如果你使用 "),a("a",g,[s("Vite"),n(c)]),s(" 或 "),a("a",f,[s("Webpack"),n(c)]),s(" 等打包器，你可以使用包管理器来管理 use-aid：")]),n(l,null,{default:e(()=>[n(t,{title:"PNPM"},{default:e(()=>[m]),_:1}),n(t,{title:"YARN"},{default:e(()=>[b]),_:1}),n(t,{title:"NPM"},{default:e(()=>[v]),_:1})]),_:1}),x,n(l,null,{default:e(()=>[n(t,{title:"PNPM"},{default:e(()=>[y]),_:1}),n(t,{title:"YARN"},{default:e(()=>[N]),_:1}),n(t,{title:"NPM"},{default:e(()=>[M]),_:1})]),_:1}),w])}const E=p(r,[["render",C],["__file","import.html.vue"]]);export{E as default};
