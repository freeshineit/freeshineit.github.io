(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[662],{2643:function(n,e,t){"use strict";t.d(e,{Z:function(){return o}});t(7294);var r=t(9008),a=t(5893),i=function(n){var e=n.meta;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(r.default,{children:[(0,a.jsx)("title",{children:"".concat(e.title," (ShineShao)")}),(0,a.jsx)("meta",{name:"description",content:e.description||"ShineShao \u535a\u5ba2"}),(0,a.jsx)("meta",{name:"keywords",content:"ShineShao freeshineit Next.js Blog "})]})})};var o=function(n){var e=n.children,t=n.meta;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i,{meta:t}),(0,a.jsx)("article",{children:e})]})}},8442:function(n,e,t){"use strict";t.r(e),t.d(e,{meta:function(){return l},default:function(){return p}});var r=t(7462),a=t(4925),i=(t(7294),t(3905)),o=t(2643),c=["components"],l={title:"Clipboard \u64cd\u4f5c",description:"Clipboard \u64cd\u4f5c\u590d\u5236\u7c98\u8d34 ",date:"2021-07-03"},d={meta:l},s=function(n){var e=n.children;return(0,i.kt)(o.Z,{meta:l},e)};function p(n){var e=n.components,t=(0,a.Z)(n,c);return(0,i.kt)(s,(0,r.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"clipboard-copy-\u64cd\u4f5c"},(0,i.kt)("a",{parentName:"h2","aria-hidden":"true",tabIndex:-1,href:"#clipboard-copy-\u64cd\u4f5c"},(0,i.kt)("span",{parentName:"a",className:"icon icon-link"})),"clipboard copy \u64cd\u4f5c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <body id="body">\n    <div>\u590d\u5236\u5e76\u52ab\u6301\u590d\u5236\u5185\u5bb9</div>\n    <script type="text/javascript">\n      (function () {\n        const body = document.getElementById("body");\n        body.addEventListener("copy", e => {\n          let selectedText = window.getSelection().toString();\n          selectedText =\n            selectedText.replace(/\\u200B/g, "") +\n            "\\nhttps://freeshineit.github.io/";\n\n          if (navigator.clipboard) {\n            navigator.clipboard\n              .writeText(selectedText)\n              .then(() => {\n                console.log("Text copied to clipboard");\n              })\n              .catch(err => {\n                // This can happen if the user denies clipboard permissions:\n                console.error("Could not copy text: ", err);\n              });\n          } else {\n            // \u517c\u5bb9\n            clipboardData =\n              event.clipboardData ||\n              window.clipboardData ||\n              event.originalEvent.clipboardData;\n            clipboardData.setData("text/html", selectedText);\n          }\n          event.preventDefault(); // \u963b\u6b62\u9ed8\u8ba4\n        });\n      })();\n    <\/script>\n  </body>\n</html>\n')))}p.isMDXComponent=!0},6833:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/clipboard",function(){return t(8442)}])},7462:function(n,e,t){"use strict";function r(){return(r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}t.d(e,{Z:function(){return r}})}},function(n){n.O(0,[774,888,179],(function(){return e=6833,n(n.s=e);var e}));var e=n.O();_N_E=e}]);