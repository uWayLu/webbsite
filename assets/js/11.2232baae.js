(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{455:function(t,e,r){t.exports=r.p+"assets/img/2021-04-18-hello-notion-blog-bookmark-not-supported.5c46ccaf.png"},491:function(t,e,r){"use strict";r.r(e);var o=r(8),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h2",{attrs:{id:"notion-blog-是什麼"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#notion-blog-是什麼"}},[t._v("#")]),t._v(" Notion Blog 是什麼？")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/ijjk/notion-blog",target:"_blank",rel:"noopener noreferrer"}},[t._v("ijjk/notion-blog"),o("OutboundLink")],1)]),t._v(" "),o("blockquote",[o("p",[t._v("A Next.js site using new SSG support with a Notion backed blog")])]),t._v(" "),o("p",[t._v("將你的 Notion 做為文章管理的資料庫，\nnotion-blog 透過 notion API (private, authed) 取得文章資料，\n預渲染成靜態頁面，並部署到 Vercel (Optional)")]),t._v(" "),o("h3",{attrs:{id:"按下-deploy-後"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#按下-deploy-後"}},[t._v("#")]),t._v(" 按下 Deploy 後")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("記得填 "),o("code",[t._v("NOTION_TOKEN")]),t._v(" 和 "),o("code",[t._v("BLOG_INDEX_ID")]),t._v(" ，或者 deploy fail")])]),t._v(" "),o("li",[o("p",[t._v("手動建立文章列表吧， "),o("code",[t._v("node scripts/create-table.js")]),t._v(" 無法正常工作")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/ijjk/notion-blog/issues?q=is:issue+is:open+create-table",target:"_blank",rel:"noopener noreferrer"}},[t._v("notion-blog Issues"),o("OutboundLink")],1)])])]),t._v(" "),o("h3",{attrs:{id:"本地部署"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#本地部署"}},[t._v("#")]),t._v(" 本地部署")]),t._v(" "),o("p",[t._v("本地用的 ENV 可以 "),o("code",[t._v("touch .env.local")]),t._v(" ，不進版控")]),t._v(" "),o("h2",{attrs:{id:"部署-notion-blog-你或許想知道"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#部署-notion-blog-你或許想知道"}},[t._v("#")]),t._v(" 部署 Notion Blog 你或許想知道……")]),t._v(" "),o("h3",{attrs:{id:"vercel-vercel-inc-next-js"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#vercel-vercel-inc-next-js"}},[t._v("#")]),t._v(" Vercel / Vercel Inc. / Next.js")]),t._v(" "),o("p",[t._v("開發了 Next.js；最好用的網站託管，甚至可以部署動態網站\n"),o("s",[t._v("修仙")]),t._v("神仙網站")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Next.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Next.js - 维基百科，自由的百科全书"),o("OutboundLink")],1),t._v(" "),o("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/347990778",target:"_blank",rel:"noopener noreferrer"}},[t._v("vercel是什么神仙网站？"),o("OutboundLink")],1)]),t._v(" "),o("h3",{attrs:{id:"seo-ssr-ssg"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#seo-ssr-ssg"}},[t._v("#")]),t._v(" SEO / SSR / SSG")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://medium.com/starbugs/%E5%88%9D%E6%8E%A2-server-side-rendering-%E8%88%87-next-js-%E6%8E%A8%E5%9D%91%E8%A8%88%E7%95%AB-d7a9fb48a964",target:"_blank",rel:"noopener noreferrer"}},[t._v("初探 Server-Side-Rendering 與 Next.js 推坑計畫"),o("OutboundLink")],1)]),t._v(" "),o("blockquote",[o("p",[t._v("Next.js 是什麼？\nNext.js 是 React 的 SSR 框架，Vue 也有類似的 SSR 框架叫做 Nuxt，如果要一句話解釋它們為什麼存在，我會說：\n因為自己實作 SSR 真的太痛苦了！")])]),t._v(" "),o("h3",{attrs:{id:"notion-api-beta"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#notion-api-beta"}},[t._v("#")]),t._v(" Notion API (beta)")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://www.notion.so/api-beta",target:"_blank",rel:"noopener noreferrer"}},[t._v("Notion API - Private beta"),o("OutboundLink")],1)]),t._v(" "),o("h2",{attrs:{id:"小結"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#小結"}},[t._v("#")]),t._v(" 小結")]),t._v(" "),o("h3",{attrs:{id:"優點"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#優點"}},[t._v("#")]),t._v(" 優點")]),t._v(" "),o("p",[t._v("直接將 Notion 做為資料庫。")]),t._v(" "),o("h3",{attrs:{id:"缺點"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#缺點"}},[t._v("#")]),t._v(" 缺點")]),t._v(" "),o("p",[t._v("仍然稚嫩，需要愛，才能折騰。\n稚嫩是指沒有生態系，沒有標籤雲樣式等等，有需要？雙手自己來😳。\n此外 Notion API 目前仍是 Beta 狀態，仍有變數。")]),t._v(" "),o("p",[t._v("但還是值得期待，讓我們靜靜觀望與守候。")]),t._v(" "),o("ul",[o("li",[t._v("notion bookmark 不支援")])]),t._v(" "),o("p",[o("img",{attrs:{src:r(455),alt:"Bookmark not supported"}})]),t._v(" "),o("h2",{attrs:{id:"其他資料"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#其他資料"}},[t._v("#")]),t._v(" 其他資料")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/juicyfx/vercel-php",target:"_blank",rel:"noopener noreferrer"}},[t._v("juicyfx/vercel-php"),o("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);