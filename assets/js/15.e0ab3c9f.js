(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{466:function(t,n,s){"use strict";s.r(n);var e=s(8),a=Object(e.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("a",{attrs:{href:"https://medium.com/@enterprise.eric320/%E5%85%8D%E5%AD%B8%E7%A8%8B%E5%BC%8F%E7%A2%BC-%E6%95%99%E4%BD%A0%E8%BC%95%E9%AC%86%E5%9C%A8%E4%BB%A5%E5%A4%AA%E5%9D%8A%E6%B8%AC%E8%A9%A6%E9%8F%88%E7%99%BC%E5%B9%A3-16560053680",target:"_blank",rel:"noopener noreferrer"}},[t._v("Medium: 免學程式碼，教你輕鬆在以太坊測試鏈發幣"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("參考文章中的合約來源 404 了"),s("br"),t._v("\n替換用下面的程式碼來做發幣")])]),t._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pragma")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("solidity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token version number"}},[t._v("0.5.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://raw.githubusercontent.com/OpenZeppelin/openzeppelin-contracts/docs-v2.x/contracts/token/ERC20/ERC20.sol"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://raw.githubusercontent.com/OpenZeppelin/openzeppelin-contracts/docs-v2.x/contracts/token/ERC20/ERC20Detailed.sol"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Referenced from: https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/contracts/examples/SimpleToken.sol\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("contract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SimpleToken")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" ERC20"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ERC20Detailed "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constant")]),t._v(" INITIAL_SUPPLY "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1e7")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1e18")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ERC20Detailed")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"InZendToken"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"INT"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_mint")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sender"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" INITIAL_SUPPLY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[s("a",{attrs:{href:"https://ropsten.etherscan.io/tx/0xce7a9b863bb8c2a73fd45e1db15eb176dc1a12f918e4eaf32e76049769e6bd22",target:"_blank",rel:"noopener noreferrer"}},[t._v("發幣 Transaction"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://ropsten.etherscan.io/tx/0x14ccc05b2f73dcf0e7afdba5328737ac6fcb2906bab126dcf034c45c2f2ab888",target:"_blank",rel:"noopener noreferrer"}},[t._v("轉帳 Transaction"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"科普用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#科普用"}},[t._v("#")]),t._v(" 科普用")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.0x1.academy/wallet",target:"_blank",rel:"noopener noreferrer"}},[t._v("0x1.Academy"),s("OutboundLink")],1),t._v(" "),s("blockquote",[s("p",[t._v("翻了一下團隊成員背景，應該是不錯的科普書")])])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/81764010",target:"_blank",rel:"noopener noreferrer"}},[t._v("小科普：助记词和私钥到底是什么？"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.chainnews.com/zh-hant/articles/105249451911.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("區塊鏈錢包，不得不提的五個關鍵詞"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);n.default=a.exports}}]);