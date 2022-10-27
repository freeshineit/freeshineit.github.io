(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[273],{3265:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/golang/goroutine_sync",function(){return t(2157)}])},8424:function(n,e,t){"use strict";t.d(e,{Z:function(){return m}});var r=t(5893),a=t(7294),o=t(9008),c=t.n(o),i=function(n){var e=n.meta;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(c(),{children:[(0,r.jsx)("title",{children:"".concat(e.title," (ShineShao)")}),(0,r.jsx)("meta",{name:"description",content:"".concat(e.description," ShineShao \u535a\u5ba2")}),(0,r.jsx)("meta",{name:"keywords",content:"ShineShao freeshineit Next.js Blog "})]})})},s=t(9125),l=t(1836),u=t(2230),h=t.n(u);function d(n){var e=n.meta,t=e.date.split("-"),o=(0,a.useMemo)((function(){try{return s.vc[+t[1]-1]}catch(n){}}),[]);return(0,r.jsxs)("div",{className:h().top,children:[(0,r.jsxs)("div",{className:h().coverWrapper,children:[(0,r.jsx)("div",{className:h().cover,style:{backgroundImage:"url(".concat(e.cover,")")}}),(0,r.jsx)("div",{className:h().coverBg}),(0,r.jsxs)("div",{className:h().dateWrapper,children:[(0,r.jsxs)("span",{className:h().date,children:[(0,r.jsx)("span",{className:h().dateDay,children:t[2]||""}),(0,r.jsx)("span",{className:h().dateMonth,children:o}),(new Date).getFullYear()>+t[0]?(0,r.jsx)("span",{className:h().dateMonth,children:t[0]}):null]}),(0,r.jsx)("h1",{className:h().title,children:e.title})]})]}),(0,r.jsx)(l.Z,{cover:e.cover})]})}var p=t(55),g=t.n(p);var m=function(n){var e=n.children,t=n.meta;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{meta:t}),(0,r.jsx)(d,{meta:t}),(0,r.jsx)("div",{className:g().content,children:(0,r.jsx)("article",{children:e})})]})}},1836:function(n,e,t){"use strict";t.d(e,{Z:function(){return i}});var r=t(5893),a=t(9125),o=t(5246),c=t.n(o);function i(n){var e=n.cover;return(0,r.jsx)(r.Fragment,{children:a.Pu.indexOf(e)>-1?(0,r.jsxs)("div",{className:c().photographer,children:[(0,r.jsx)("svg",{viewBox:"0 0 1024 1024",version:"1.1",width:"1em",height:"1em",fill:"currentColor",children:(0,r.jsx)("path",{d:"M860.414581 207.449017 509.333781 207.449017c0-52.808332-43.003528-95.81186-95.81186-95.81186l-63.817235 0c-52.808332 0-95.81186 43.003528-95.81186 95.81186L158.424996 207.449017c-52.808332 0-95.81186 43.003528-95.81186 95.81186l0 510.53788c0 52.808332 43.003528 95.81186 95.81186 95.81186l701.989585 0c52.808332 0 95.81186-43.003528 95.81186-95.81186L956.22644 303.260877C956.054426 250.452545 913.050899 207.449017 860.414581 207.449017zM509.333781 749.981522c-105.616664 0-191.451705-85.835041-191.451705-191.451705s85.835041-191.451705 191.451705-191.451705 191.451705 85.835041 191.451705 191.451705S614.950445 749.981522 509.333781 749.981522zM812.422644 430.895347c-26.490173 0-47.819923-21.501764-47.819923-47.819923s21.501764-47.819923 47.819923-47.819923c26.490173 0 47.819923 21.501764 47.819923 47.819923S838.912817 430.895347 812.422644 430.895347z"})}),"\xa0",a.ZP.author]}):null})}},2157:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return l},meta:function(){return c}});var r=t(9534),a=(t(7294),t(3905)),o=t(8424),c={title:"goroutine \u540c\u6b65\u64cd\u4f5c",description:"goroutine \u540c\u6b65\u64cd\u4f5c sync.WaitGroup/Channels",date:"2021-03-13",cover:t(9125).Pu[1]},i={meta:c},s=function(n){var e=n.children;return(0,a.kt)(o.Z,{meta:c},e)};function l(n){var e=n.components,t=(0,r.Z)(n,["components"]);return(0,a.kt)(s,Object.assign({},i,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",Object.assign({},{id:"golang-goroutine-\u540c\u6b65\u64cd\u4f5c"}),"golang goroutine \u540c\u6b65\u64cd\u4f5c"),(0,a.kt)("h3",Object.assign({},{id:"syncwaitgroup"}),(0,a.kt)("a",Object.assign({parentName:"h3"},{href:"https://golang.org/pkg/sync/#WaitGroup"}),"sync.WaitGroup")),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "fmt"\n    "sync"\n    "time"\n)\n\nfunc worker(i int, wg *sync.WaitGroup) {\n    fmt.Printf("sync worker %d starting\\n", i)\n    time.Sleep(time.Second)\n    fmt.Printf("sync worker %d done\\n", i)\n    defer wg.Done()\n}\n\n// sync.WaitGroup\nfunc SyncWaitGroup() {\n    var wg sync.WaitGroup\n    fmt.Println("this is SyncWaitGroup func")\n    for i := 1; i <= 10; i++ {\n        // \u521b\u5efa10\u4e2a goroutine\n        wg.Add(1)\n        go worker(i, &wg)\n    }\n    wg.Wait()\n}\n\n')),(0,a.kt)("h3",Object.assign({},{id:"channels"}),(0,a.kt)("a",Object.assign({parentName:"h3"},{href:"https://blog.golang.org/pipelines"}),"Channels")),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "fmt"\n    "time"\n)\n\nfunc chanWorker(i int, done chan int) {\n    fmt.Printf("chan worker %d starting\\n", i)\n    time.Sleep(time.Second)\n    fmt.Printf("chan worker %d done\\n", i)\n    done <- i\n}\n\n// chan\nfunc Channel() {\n    c := make(chan int)\n    fmt.Println("this is Channel func")\n    for i := 1; i <= 10; i++ {\n        // \u521b\u5efa10\u4e2a goroutine\n        go chanWorker(i, c)\n    }\n    <-c\n}\n\n')))}l.isMDXComponent=!0},2230:function(n){n.exports={top:"Cover_top__3shUC",coverWrapper:"Cover_coverWrapper__EHcKj",cover:"Cover_cover__anmEM",coverBg:"Cover_coverBg__vB_Og",dateWrapper:"Cover_dateWrapper__cx6Xo",date:"Cover_date__Q1mZh",dateDay:"Cover_dateDay__RyIzT",dateMonth:"Cover_dateMonth__hW3W0"}},55:function(n){n.exports={content:"Content_content__KEvUj","toc-anchors":"Content_toc-anchors__XVQLZ"}},5246:function(n){n.exports={photographer:"Photographer_photographer__tesd0"}}},function(n){n.O(0,[774,888,179],(function(){return e=3265,n(n.s=e);var e}));var e=n.O();_N_E=e}]);