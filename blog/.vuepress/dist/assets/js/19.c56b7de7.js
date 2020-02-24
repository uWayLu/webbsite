(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{355:function(e,o,t){"use strict";t.r(o);var r=t(9),n=Object(r.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"composer-與-evenoter-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#composer-與-evenoter-api"}},[e._v("#")]),e._v(" Composer 與 Evenoter API")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://getcomposer.ycnets.com/doc/03-cli.md",title:"Composer 官方中文說明文檔",target:"_blank",rel:"noopener noreferrer"}},[e._v("Composer 官方中文說明文檔"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("p",[e._v("為了實行透過做自動 post 文章的想法，首先要學會使用 Evenote 的 API。"),t("br"),e._v("\nEvernote 有提供 SDK for PHP "),t("a",{attrs:{href:"https://github.com/evernote/evernote-cloud-sdk-php",title:"Evernote Cloud SDK for PHP",target:"_blank",rel:"noopener noreferrer"}},[e._v("evernote-cloud-sdk-php on Github"),t("OutboundLink")],1),e._v("，可以透過 composer 安裝，")]),e._v(" "),t("p",[e._v("那麼，問題來了，相依套件衝突時就無法安裝，除錯囉 QQ")]),e._v(" "),t("h2",{attrs:{id:"composer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#composer"}},[e._v("#")]),e._v(" Composer")]),e._v(" "),t("ol",[t("li",[t("p",[t("code",[e._v("composer require 套件名稱 版本")])])]),e._v(" "),t("li",[t("p",[e._v("透過 composer.json 可以管理相依套件，理所當然能做 laravel 降級")])]),e._v(" "),t("li",[t("p",[e._v("Laravel 5.4 和 5.3 有 defaultStringLength 的錯誤問題。")])]),e._v(" "),t("li",[t("p",[e._v("降級後框架報錯，"),t("code",[e._v("BadMethodCallException in Macroable.php line 74: Method prefix does not exist.")]),t("br"),e._v("\n打開對應文件後推測，應該是 v5.4 時使用 make:auth 產生的 Auth，相依於這個 Trait。"),t("br"),e._v(" "),t("s",[e._v("BUG 就不除了，估計直接 new 個 v5.3 的專案比較快。")]),t("br"),e._v("\n已透過 "),t("code",[e._v("git checkout . && git clean -xdf")]),e._v(" 還原為 5.4。")]),e._v(" "),t("blockquote",[t("p",[t("em",[t("strong",[e._v("Questions")])]),e._v(":")]),e._v(" "),t("ol",[t("li",[e._v("Composer 如何實現套件安裝後的管理？")]),e._v(" "),t("li",[e._v("如 1, Composer 與 autoload 的關係？或者是 iif？")])])])])]),e._v(" "),t("h2",{attrs:{id:"evernote-api-2-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#evernote-api-2-0"}},[e._v("#")]),e._v(" Evernote API 2.0")]),e._v(" "),t("ol",[t("li",[e._v("與 Laravel 5.4 的相依套件 nikic/php-parser 衝突")]),e._v(" "),t("li",[e._v("與 Laravel 5.4 的相依套件 css-to-inline-styles 版本不符合")]),e._v(" "),t("li",[e._v("計劃直接用 5.3 的框架搭配 "),t("a",{attrs:{href:"https://github.com/laravel-notification-channels/evernote",title:"Evernote notifications channel for Laravel 5.3",target:"_blank",rel:"noopener noreferrer"}},[e._v("laravel-notification-channels on Github"),t("OutboundLink")],1)])]),e._v(" "),t("blockquote",[t("p",[e._v("webhooks 的概念尚未研究，猜測應該是")]),e._v(" "),t("ol",[t("li",[e._v("APP 透過 API tokens 與 Evernote 綁定")]),e._v(" "),t("li",[e._v("當 Evenote 上該 tokens 所屬內容有異動時，會發送 notications 告知綁定的 APP")]),e._v(" "),t("li",[e._v("APP 透過 API 可取得異動後的內容。")])])])])}),[],!1,null,null,null);o.default=n.exports}}]);