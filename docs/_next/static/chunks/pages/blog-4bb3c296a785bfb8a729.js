_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"1GPU":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n("q1tI"),r=n.n(a),i=n("YFqc"),c=n.n(i),s=n("Wgwc"),l=n.n(s);var o,u=(o=n("Z6/3")).keys().map((function(e){return{link:e.substr(1).replace(/(\.md|\.mdx)$/,""),module:o(e)}})).sort((function(e,t){return null==e.module.meta.date&&t.module.meta.date?-1:(console.log(e.module.meta.date,t.module.meta.date,l()(e.module.meta.date+"")<l()(t.module.meta.date+"")),l()(e.module.meta.date)>l()(t.module.meta.date)?-1:1)})),p=n("xp3R"),b=n.n(p),m=r.a.createElement;function d(){return m("div",{className:b.a.Blog},u.map((function(e){var t=e.link,n=e.module.meta;return m("div",{className:b.a.BlogItem,key:t},m("h2",{className:""},n.title),m("p",null,n.description),m("p",null,n.date," \ud83d\ude04"),m(c.a,{href:"/blog"+t},m("a",null,"Read more \u2192")))})))}},Wgwc:function(e,t,n){e.exports=function(){"use strict";var e="millisecond",t="second",n="minute",a="hour",r="day",i="week",c="month",s="quarter",l="year",o="date",u=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,p=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,b={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(e,t,n){var a=String(e);return!a||a.length>=t?e:""+Array(t+1-a.length).join(n)+e},d={s:m,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),a=Math.floor(n/60),r=n%60;return(t<=0?"+":"-")+m(a,2,"0")+":"+m(r,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var a=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(a,c),i=n-r<0,s=t.clone().add(a+(i?-1:1),c);return+(-(a+(n-r)/(i?r-s:s-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(u){return{M:c,y:l,w:i,d:r,D:o,h:a,m:n,s:t,ms:e,Q:s}[u]||String(u||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},g="en",f={};f[g]=b;var O=function(e){return e instanceof y},j=function(e,t,n){var a;if(!e)return g;if("string"==typeof e)f[e]&&(a=e),t&&(f[e]=t,a=e);else{var r=e.name;f[r]=e,a=r}return!n&&a&&(g=a),a||!n&&g},h=function(e,t){if(O(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new y(n)},N=d;N.l=j,N.i=O,N.w=function(e,t){return h(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var y=function(){function b(e){this.$L=j(e.locale,null,!0),this.parse(e)}var m=b.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(N.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var a=t.match(u);if(a){var r=a[2]-1||0,i=(a[7]||"0").substring(0,3);return n?new Date(Date.UTC(a[1],r,a[3]||1,a[4]||0,a[5]||0,a[6]||0,i)):new Date(a[1],r,a[3]||1,a[4]||0,a[5]||0,a[6]||0,i)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return N},m.isValid=function(){return!("Invalid Date"===this.$d.toString())},m.isSame=function(e,t){var n=h(e);return this.startOf(t)<=n&&n<=this.endOf(t)},m.isAfter=function(e,t){return h(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<h(e)},m.$g=function(e,t,n){return N.u(e)?this[t]:this.set(n,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,s){var u=this,p=!!N.u(s)||s,b=N.p(e),m=function(e,t){var n=N.w(u.$u?Date.UTC(u.$y,t,e):new Date(u.$y,t,e),u);return p?n:n.endOf(r)},d=function(e,t){return N.w(u.toDate()[e].apply(u.toDate("s"),(p?[0,0,0,0]:[23,59,59,999]).slice(t)),u)},g=this.$W,f=this.$M,O=this.$D,j="set"+(this.$u?"UTC":"");switch(b){case l:return p?m(1,0):m(31,11);case c:return p?m(1,f):m(0,f+1);case i:var h=this.$locale().weekStart||0,y=(g<h?g+7:g)-h;return m(p?O-y:O+(6-y),f);case r:case o:return d(j+"Hours",0);case a:return d(j+"Minutes",1);case n:return d(j+"Seconds",2);case t:return d(j+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(i,s){var u,p=N.p(i),b="set"+(this.$u?"UTC":""),m=(u={},u[r]=b+"Date",u[o]=b+"Date",u[c]=b+"Month",u[l]=b+"FullYear",u[a]=b+"Hours",u[n]=b+"Minutes",u[t]=b+"Seconds",u[e]=b+"Milliseconds",u)[p],d=p===r?this.$D+(s-this.$W):s;if(p===c||p===l){var g=this.clone().set(o,1);g.$d[m](d),g.init(),this.$d=g.set(o,Math.min(this.$D,g.daysInMonth())).$d}else m&&this.$d[m](d);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[N.p(e)]()},m.add=function(e,s){var o,u=this;e=Number(e);var p=N.p(s),b=function(t){var n=h(u);return N.w(n.date(n.date()+Math.round(t*e)),u)};if(p===c)return this.set(c,this.$M+e);if(p===l)return this.set(l,this.$y+e);if(p===r)return b(1);if(p===i)return b(7);var m=(o={},o[n]=6e4,o[a]=36e5,o[t]=1e3,o)[p]||1,d=this.$d.getTime()+e*m;return N.w(d,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this;if(!this.isValid())return"Invalid Date";var n=e||"YYYY-MM-DDTHH:mm:ssZ",a=N.z(this),r=this.$locale(),i=this.$H,c=this.$m,s=this.$M,l=r.weekdays,o=r.months,u=function(e,a,r,i){return e&&(e[a]||e(t,n))||r[a].substr(0,i)},b=function(e){return N.s(i%12||12,e,"0")},m=r.meridiem||function(e,t,n){var a=e<12?"AM":"PM";return n?a.toLowerCase():a},d={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:N.s(s+1,2,"0"),MMM:u(r.monthsShort,s,o,3),MMMM:u(o,s),D:this.$D,DD:N.s(this.$D,2,"0"),d:String(this.$W),dd:u(r.weekdaysMin,this.$W,l,2),ddd:u(r.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(i),HH:N.s(i,2,"0"),h:b(1),hh:b(2),a:m(i,c,!0),A:m(i,c,!1),m:String(c),mm:N.s(c,2,"0"),s:String(this.$s),ss:N.s(this.$s,2,"0"),SSS:N.s(this.$ms,3,"0"),Z:a};return n.replace(p,(function(e,t){return t||d[e]||a.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(e,o,u){var p,b=N.p(o),m=h(e),d=6e4*(m.utcOffset()-this.utcOffset()),g=this-m,f=N.m(this,m);return f=(p={},p[l]=f/12,p[c]=f,p[s]=f/3,p[i]=(g-d)/6048e5,p[r]=(g-d)/864e5,p[a]=g/36e5,p[n]=g/6e4,p[t]=g/1e3,p)[b]||g,u?f:N.a(f)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return f[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),a=j(e,t,!0);return a&&(n.$L=a),n},m.clone=function(){return N.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},b}(),v=y.prototype;return h.prototype=v,[["$ms",e],["$s",t],["$m",n],["$H",a],["$W",r],["$M",c],["$y",l],["$D",o]].forEach((function(e){v[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),h.extend=function(e,t){return e(t,y,h),h},h.locale=j,h.isDayjs=O,h.unix=function(e){return h(1e3*e)},h.en=f[g],h.Ls=f,h.p={},h}()},YFqc:function(e,t,n){e.exports=n("cTJO")},"Z6/3":function(e,t,n){var a={"./git/git_antic.mdx":"ct1b","./golang/goroutine_sync.mdx":"jcuw","./next.config.mdx":"1pcn","./typescript/type_operation.mdx":"sNc7"};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id="Z6/3"},cTJO:function(e,t,n){"use strict";var a=n("J4zp"),r=n("284h");t.__esModule=!0,t.default=void 0;var i,c=r(n("q1tI")),s=n("elyg"),l=n("nOHt"),o=new Map,u=window.IntersectionObserver,p={};var b=function(e,t){var n=i||(u?i=new u((function(e){e.forEach((function(e){if(o.has(e.target)){var t=o.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),o.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),o.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}o.delete(e)}):function(){}};function m(e,t,n,a){(0,s.isLocalURL)(t)&&(e.prefetch(t,n,a).catch((function(e){0})),p[t+"%"+n]=!0)}var d=function(e){var t=!1!==e.prefetch,n=(0,l.useRouter)(),r=n&&n.pathname||"/",i=c.default.useMemo((function(){var t=(0,s.resolveHref)(r,e.href,!0),n=a(t,2),i=n[0],c=n[1];return{href:i,as:e.as?(0,s.resolveHref)(r,e.as):c||i}}),[r,e.href,e.as]),o=i.href,d=i.as,g=e.children,f=e.replace,O=e.shallow,j=e.scroll,h=e.locale;"string"===typeof g&&(g=c.default.createElement("a",null,g));var N=c.Children.only(g),y=N&&"object"===typeof N&&N.ref,v=c.default.useRef(),P={ref:c.default.useCallback((function(e){(v.current&&(v.current(),v.current=void 0),t&&u&&e&&e.tagName&&(0,s.isLocalURL)(o))&&(p[o+"%"+d]||(v.current=b(e,(function(){m(n,o,d,{locale:"undefined"!==typeof h?h:n&&n.locale})}))));y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[t,y,o,d,n,h]),onClick:function(e){N.props&&"function"===typeof N.props.onClick&&N.props.onClick(e),e.defaultPrevented||function(e,t,n,a,r,i,c,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=a.indexOf("#")<0),t[r?"replace":"push"](n,a,{shallow:i,locale:l}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,o,d,f,O,j,h)}};return t&&(P.onMouseEnter=function(e){(0,s.isLocalURL)(o)&&(N.props&&"function"===typeof N.props.onMouseEnter&&N.props.onMouseEnter(e),m(n,o,d,{priority:!0}))}),(e.passHref||"a"===N.type&&!("href"in N.props))&&(P.href=(0,s.addBasePath)((0,s.addLocale)(d,"undefined"!==typeof h?h:n&&n.locale,n&&n.defaultLocale))),c.default.cloneElement(N,P)};t.default=d},ct1b:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return o})),n.d(t,"default",(function(){return b}));var a=n("wx14"),r=n("Ff2n"),i=n("q1tI"),c=n.n(i),s=n("7ljp"),l=n("Op8E"),o=(c.a.createElement,{title:"Git \u5c0f\u6280\u5de7",description:"Git ,git, git \u5c0f\u6280\u5de7, git aliases",date:"2020-12-02"}),u={meta:o},p=function(e){var t=e.children;return Object(s.b)(l.a,{meta:o},t)};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)(p,Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"git-\u5c0f\u6280\u5de7"},Object(s.b)("a",Object(a.a)({parentName:"h1"},{"aria-hidden":"true",tabIndex:-1,href:"#git-\u5c0f\u6280\u5de7"}),Object(s.b)("span",Object(a.a)({parentName:"a"},{className:"icon icon-link"}))),"git \u5c0f\u6280\u5de7"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"# discard \u4e22\u5f03\u7f13\u5b58\ngit reset HEAD\n\n# \u4e22\u5f03\u6307\u5b9a\u6587\u4ef6\u7f13\u5b58\ngit reset HEAD <file>\n\n# \u64a4\u9500\u6700\u65b0\u7684commit\ngit reset HEAD^\n\n# \u4fee\u6539\u6700\u65b0\u7684\u4e00\u6b21commit \u65e5\u5fd7\ngit commit --amend\n## \u6216\u8005\u4f7f\u7528\u522b\u540d\ngit ca\n\n")),Object(s.b)("h3",{id:"\u4f7f\u7528-\u6267\u884c\u591a\u6761\u547d\u4ee4"},Object(s.b)("a",Object(a.a)({parentName:"h3"},{"aria-hidden":"true",tabIndex:-1,href:"#\u4f7f\u7528-\u6267\u884c\u591a\u6761\u547d\u4ee4"}),Object(s.b)("span",Object(a.a)({parentName:"a"},{className:"icon icon-link"}))),"\u4f7f\u7528",Object(s.b)("inlineCode",{parentName:"h3"},";")," \u6267\u884c\u591a\u6761\u547d\u4ee4"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"git add .; git status\n")),Object(s.b)("h3",{id:"\u914d\u7f6e\u547d\u4ee4\u522b\u540d\uff08aliases\uff09"},Object(s.b)("a",Object(a.a)({parentName:"h3"},{"aria-hidden":"true",tabIndex:-1,href:"#\u914d\u7f6e\u547d\u4ee4\u522b\u540d\uff08aliases\uff09"}),Object(s.b)("span",Object(a.a)({parentName:"a"},{className:"icon icon-link"}))),"\u914d\u7f6e\u547d\u4ee4\u522b\u540d\uff08",Object(s.b)("a",Object(a.a)({parentName:"h3"},{href:"https://git-scm.com/book/zh-tw/v2/Git-%E5%9F%BA%E7%A4%8E-Git-Aliases"}),"Aliases"),"\uff09"),Object(s.b)("p",null,"git \u9ed8\u8ba4\u914d\u7f6e\u4e86\u90e8\u5206\u522b\u540d\uff0c\u53ef\u4ee5\u4f7f\u7528",Object(s.b)("inlineCode",{parentName:"p"},"git config --list")," \u67e5\u770b"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"# \u90e8\u5206\u9ed8\u8ba4\u522b\u540d\u4f7f\u7528\n# git commit -m\ngit cm\n\n# git log --stat --abbrev-commit\ngit ll\n\n# git diff\ngit d\n")),Object(s.b)("p",null,"\u914d\u7f6e\u522b\u540d\u547d\u4ee4"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"# \u914d\u7f6e\u522b\u540d\u547d\u4ee4\ngit config --global alias.st status\n\n# \u4f7f\u7528 git st \u76f8\u5f53\u4e8e git status\ngit st\n")))}b.isMDXComponent=!0},jcuw:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return o})),n.d(t,"default",(function(){return b}));var a=n("wx14"),r=n("Ff2n"),i=n("q1tI"),c=n.n(i),s=n("7ljp"),l=n("Op8E"),o=(c.a.createElement,{title:"goroutine \u540c\u6b65\u64cd\u4f5c",description:"goroutine \u540c\u6b65\u64cd\u4f5c sync.WaitGroup/Channels",date:"2021-03-13"}),u={meta:o},p=function(e){var t=e.children;return Object(s.b)(l.a,{meta:o},t)};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)(p,Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"golang-goroutine-\u540c\u6b65\u64cd\u4f5c"},Object(s.b)("a",Object(a.a)({parentName:"h2"},{"aria-hidden":"true",tabIndex:-1,href:"#golang-goroutine-\u540c\u6b65\u64cd\u4f5c"}),Object(s.b)("span",Object(a.a)({parentName:"a"},{className:"icon icon-link"}))),"golang goroutine \u540c\u6b65\u64cd\u4f5c"),Object(s.b)("h3",{id:"syncwaitgroup"},Object(s.b)("a",Object(a.a)({parentName:"h3"},{"aria-hidden":"true",tabIndex:-1,href:"#syncwaitgroup"}),Object(s.b)("span",Object(a.a)({parentName:"a"},{className:"icon icon-link"}))),Object(s.b)("a",Object(a.a)({parentName:"h3"},{href:"https://golang.org/pkg/sync/#WaitGroup"}),"sync.WaitGroup")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "fmt"\n    "sync"\n    "time"\n)\n\nfunc worker(i int, wg *sync.WaitGroup) {\n    fmt.Printf("sync worker %d starting\\n", i)\n    time.Sleep(time.Second)\n    fmt.Printf("sync worker %d done\\n", i)\n    defer wg.Done()\n}\n\n// sync.WaitGroup\nfunc SyncWaitGroup() {\n    var wg sync.WaitGroup\n    fmt.Println("this is SyncWaitGroup func")\n    for i := 1; i <= 10; i++ {\n        // \u521b\u5efa10\u4e2a goroutine\n        wg.Add(1)\n        go worker(i, &wg)\n    }\n    wg.Wait()\n}\n\n')),Object(s.b)("h3",{id:"channels"},Object(s.b)("a",Object(a.a)({parentName:"h3"},{"aria-hidden":"true",tabIndex:-1,href:"#channels"}),Object(s.b)("span",Object(a.a)({parentName:"a"},{className:"icon icon-link"}))),Object(s.b)("a",Object(a.a)({parentName:"h3"},{href:"https://blog.golang.org/pipelines"}),"Channels")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "fmt"\n    "time"\n)\n\nfunc chanWorker(i int, done chan int) {\n    fmt.Printf("chan worker %d starting\\n", i)\n    time.Sleep(time.Second)\n    fmt.Printf("chan worker %d done\\n", i)\n    done <- i\n}\n\n// chan\nfunc Channel() {\n    c := make(chan int)\n    fmt.Println("this is Channel func")\n    for i := 1; i <= 10; i++ {\n        // \u521b\u5efa10\u4e2a goroutine\n        go chanWorker(i, c)\n    }\n    <-c\n}\n\n')))}b.isMDXComponent=!0},sNc7:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return o})),n.d(t,"default",(function(){return b}));var a=n("wx14"),r=n("Ff2n"),i=n("q1tI"),c=n.n(i),s=n("7ljp"),l=n("Op8E"),o=(c.a.createElement,{title:"Typescript \u7c7b\u578b\u64cd\u4f5c",description:"Typescript \u7c7b\u578b\u64cd\u4f5c Type Interface Generics ",date:"2020-11-21"}),u={meta:o},p=function(e){var t=e.children;return Object(s.b)(l.a,{meta:o},t)};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)(p,Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"typescript-\u7c7b\u578b\u64cd\u4f5c"},Object(s.b)("a",Object(a.a)({parentName:"h2"},{"aria-hidden":"true",tabIndex:-1,href:"#typescript-\u7c7b\u578b\u64cd\u4f5c"}),Object(s.b)("span",Object(a.a)({parentName:"a"},{className:"icon icon-link"}))),"Typescript \u7c7b\u578b\u64cd\u4f5c"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Partial (\u90e8\u5206, \u628a\u6240\u6709\u5b57\u6bb5\u8f6c\u4e3a\u53ef\u9009\u5b57\u6bb5)")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"/**\n * Make all properties in T optional\n */\ntype Partial<T> = {\n  [P in keyof T]?: T[P];\n};\n")),Object(s.b)("p",null,"example\uff1a"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"type partial = {\n  name: string;\n  getName(): string;\n};\n\n/**\n * TPartial \u7ed3\u679c\n * {\n *   name?: string\n *   getName()?: string\n * }\n */\ntype TPartial = Partial<partial>;\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Required (\u9700\u8981, \u628a\u6240\u6709\u5b57\u6bb5\u8f6c\u4e3a\u5fc5\u9009\u5b57\u6bb5)")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"/**\n * Make all properties in T required\n */\ntype Required<T> = {\n  [P in keyof T]-?: T[P];\n};\n")),Object(s.b)("p",null,"example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"type required = {\n  name?: string;\n  getName(): string;\n};\n\n/**\n * TRequired \u7ed3\u679c\n * {\n *   name: string\n *   getName(): string\n * }\n */\ntype TRequired = Required<required>;\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Readonly (\u53ea\u8bfb\uff0c\u628a\u6240\u6709\u5b57\u6bb5\u8f6c\u4e3a\u53ea\u8bfb\u5b57\u6bb5)")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"/**\n * Make all properties in T readonly\n */\ntype Readonly<T> = {\n  readonly [P in keyof T]: T[P];\n};\n")),Object(s.b)("p",null,"example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"type Treadonly = {\n  name?: string;\n  getName(): string;\n};\n\n/**\n * TReadonly \u7ed3\u679c\n * {\n *   readonly name?: string\n *   readonly getName(): string\n * }\n */\ntype TReadonly = Readonly<Treadonly>;\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Pick (\u6311\u9009, \u6311\u9009\u6307\u5b9a\u7684\u5b57\u6bb5)")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"/**\n * From T, pick a set of properties whose keys are in the union K\n */\ntype Pick<T, K extends keyof T> = {\n  [P in K]: T[P];\n};\n")),Object(s.b)("p",null,"example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'type pick = {\n  name?: string;\n  age: number;\n  getName(): string;\n};\n\n/**\n * TPick \u7ed3\u679c\n * {\n *   name?: string\n *   age: number\n * }\n */\ntype TPick = Pick<pick, "name" | "age">;\n')),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Record(\u8bb0\u5f55,\u5c06 K \u4e2d\u6240\u6709\u7684\u5c5e\u6027\u7684\u503c\u8f6c\u5316\u4e3a T \u7c7b\u578b)")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"/**\n * Construct a type with a set of properties K of type T\n */\ntype Record<K extends keyof any, T> = {\n  [P in K]: T;\n};\n")),Object(s.b)("p",null,"example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'type record = {\n  name?: string;\n  age: number;\n  getName(): string;\n};\n\n/**\n * TRecord \u7ed3\u679c\n * {\n *   name: string\n *   age: string\n *   getName: string\n * }\n */\ntype TRecord = Record<keyof record, string>;\n\n/**\n * Ta \u7ed3\u679c\n * {\n *   a: number\n *   b: number\n *   c: number\n *   1: number\n * }\n */\ntype Ta = Record<"a" | "b" | "c" | 1, number>;\n')),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Exclude(\u6392\u9664,\u4ece T \u4e2d\u6392\u9664\u90a3\u4e9b\u53ef\u5206\u914d\u7ed9 U \u7684\u7c7b\u578b\uff0c)")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"/**\n * Exclude from T those types that are assignable to U\n */\ntype Exclude<T, U> = T extends U ? never : T;\n")),Object(s.b)("p",null,"example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"type T = Exclude<1 | 2, 1 | 3>; // -> 2\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Extract(\u63d0\u53d6,\u4ece T \u4e2d\u63d0\u53d6\u53ef\u5206\u914d\u7ed9 U \u7684\u7c7b\u578b\uff0c \u4ea4\u96c6)")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"/**\n * Extract from T those types that are assignable to U\n */\ntype Extract<T, U> = T extends U ? T : never;\n")),Object(s.b)("p",null,"example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"type T = Extract<1 | 2, 1 | 3>; // -> 1\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Omit (\u5220\u53bb, \u6784\u9020\u4e00\u4e2a\u9664 K \u7c7b\u578b\u5916\u5177\u6709 T \u5c5e\u6027\u7684\u7c7b\u578b\u3002)")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"/**\n * Construct a type with the properties of T except for those in type K.\n */\ntype Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;\n")),Object(s.b)("p",null,"example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'interface Person {\n  name: string;\n  age: number;\n  location: string;\n}\n\n/**\n * OmitPerson \u7ed3\u679c\n * {\n *   location: string\n * }\n */\ntype OmitPerson = Omit<Person, "name" | "age">;\n')),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"\u6570\u7ec4")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'/** arr1Example \u4e2d\u53ea\u53ef\u4ee5\u4f7f\u7528`string`\u7c7b\u578b\u586b\u5145 */\ntype arr1 = string[]; // \u5efa\u8bae\u4f7f\u7528[]\nconst arr1Example: arr1 = ["123", "23454"];\n\n/** arr2Example \u4e2d\u53ea\u53ef\u4ee5\u4f7f\u7528[`string`,`number`]\u7c7b\u578b\u586b\u5145\uff0c\u5fc5\u987b\u6309\u987a\u5e8f\u586b\u5145, \u4e2a\u6570\u4e5f\u6709\u9650\u5236 */\ntype arr2 = [string, number];\nconst arr2Example: arr2 = ["0", 1];\n\n/** arr3Example \u4e2d\u53ea\u53ef\u4ee5\u4f7f\u7528`string`\u6216`number`\u7c7b\u578b\u586b\u5145\uff0c\u6ca1\u6709\u987a\u5e8f\u8981\u6c42 */\ntype arr3 = (string | number)[];\nconst arr3Example: arr3 = [0, "1", "2", 3, 4];\n')),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"\u5bf9\u8c61")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"interface Persion<T> {\n  [key: T]: T;\n}\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"extends")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"keyof (\u5bf9\u4e8e\u4efb\u4f55\u7c7b\u578b ",Object(s.b)("inlineCode",{parentName:"p"},"T"),"\uff0c ",Object(s.b)("inlineCode",{parentName:"p"},"keyof T"),"\u7684\u7ed3\u679c\u4e3a ",Object(s.b)("inlineCode",{parentName:"p"},"T"),"\u4e0a\u5df2\u77e5\u7684\u516c\u5171\u5c5e\u6027\u540d\u7684\u8054\u5408)"))),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"interface Person {\n  name: string;\n  age: number;\n}\n\ntype p = keyof Person; // -> p = 'name' | 'age'\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"typeof")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"\u4ea4\u53c9\u7c7b\u578b (\u4ea4\u53c9\u7c7b\u578b\u662f\u5c06\u591a\u4e2a\u7c7b\u578b\u5408\u5e76\u4e3a\u4e00\u4e2a\u7c7b\u578b)")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"interface;\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"\u8054\u5408\u7c7b\u578b (\u8054\u5408\u7c7b\u578b\u8868\u793a\u4e00\u4e2a\u503c\u53ef\u4ee5\u662f\u51e0\u79cd\u7c7b\u578b\u4e4b\u4e00,\u7528\u7ad6\u7ebf",Object(s.b)("inlineCode",{parentName:"li"},"\uff5c"),"\u5206\u9694\u6bcf\u4e2a\u7c7b\u578b)")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"function getNum(num: number | string): number {\n  return +num;\n}\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"\u7d22\u5f15\u7c7b\u578b")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"\u6620\u5c04\u7c7b\u578b")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"@4.1")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"  // @4.1\ntype Getters<T> = {\n  //\n  [K in keyof T as `get${capitalize K}`]: () => T[K]\n}\n\ninterface Person {\n    name: string;\n    age: number;\n    location: string;\n}\n\n/**\n* LazyPerson \u7ed3\u679c\n* {\n*   name: string\n*   age: number\n*   location: string\n*   getName: () => string\n*   getAge: () => number\n*   getLocation: () => string\n* }\n*/\ntype LazyPerson = Getters<Person>;\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"React \u4e2d\u7684\u7c7b\u578b\u7ea6\u675f"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"FC (\u51fd\u6570\u7ec4\u4ef6\u7c7b\u578b)")),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"interface FunctionComponent<P = {}> {\n  (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;\n  propTypes?: WeakValidationMap<P>;\n  contextTypes?: ValidationMap<any>;\n  defaultProps?: Partial<P>;\n  displayName?: string;\n}\n\ntype FC<P = {}> = FunctionComponent<P>;\n\n// \u5177\u4f53\u4f7f\u7528\ninterface IProps {}\nconst App: FC<IProps> = props => <div>{props.children}</div>;\n")),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"useState"),Object(s.b)("p",{parentName:"li"},"React \u4e2d\u4f7f\u7528",Object(s.b)("inlineCode",{parentName:"p"},"useState"),"\u65b9\u6cd5\u53bb\u8bbe\u7f6e state"))),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"function useState<S>(\n  initialState: S | (() => S)\n): [S, Dispatch<SetStateAction<S>>];\n"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Next.js \u4e2d\u7684\u7c7b\u578b\u7ea6\u675f"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"NextPage (page \u7ec4\u4ef6\u7684\u7c7b\u578b)")),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"/**\n * `Page` type, use it as a guide to create `pages`.\n */\nexport type NextPage<P = {}, IP = P> = NextComponentType<\n  NextPageContext,\n  IP,\n  P\n>;\n\n// \u5177\u4f53\u4f7f\u7528\ninterface IHomePageProps {}\nconst homePage: NextPage<IHomePageProps> = () => <div>this is home page</div>;\n")),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"GetServerSideProps \uff08getServerSideProps \u51fd\u6570\u7684\u7c7b\u578b\uff09")),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"export type GetServerSideProps<\n  P extends { [key: string]: any } = { [key: string]: any },\n  Q extends ParsedUrlQuery = ParsedUrlQuery\n> = (\n  context: GetServerSidePropsContext<Q>\n) => Promise<GetServerSidePropsResult<P>>;\n")),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"GetServerSidePropsContext \uff08getServerSideProps \u51fd\u6570\u7684\u53c2\u6570\u7c7b\u578b\uff09")),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"export type GetServerSidePropsContext<\n  Q extends ParsedUrlQuery = ParsedUrlQuery\n> = {\n  req: IncomingMessage; // http.IncomingMessage\n  res: ServerResponse; // http.ServerResponse\n  params?: Q; // \u53c2\u6570\n  query: ParsedUrlQuery; // \u8bf7\u6c42search\u53c2\u6570\n  preview?: boolean;\n  previewData?: any;\n  resolvedUrl: string;\n  locale?: string;\n  locales?: string[];\n  defaultLocale?: string;\n};\n")),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"GetStaticProps \uff08getStaticProps \u51fd\u6570\u7684\u7c7b\u578b\uff09")),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"export type GetStaticProps<\n  P extends { [key: string]: any } = { [key: string]: any },\n  Q extends ParsedUrlQuery = ParsedUrlQuery\n> = (context: GetStaticPropsContext<Q>) => Promise<GetStaticPropsResult<P>>;\n")),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"GetStaticPropsContext \uff08getStaticProps \u51fd\u6570\u7684\u53c2\u6570\u7c7b\u578b\uff09")),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"export type GetStaticPropsContext<\n  Q extends ParsedUrlQuery = ParsedUrlQuery\n> = {\n  params?: Q;\n  preview?: boolean;\n  previewData?: any;\n  locale?: string;\n  locales?: string[];\n  defaultLocale?: string;\n};\n")))))}b.isMDXComponent=!0},vHou:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n("1GPU")}])},xp3R:function(e,t,n){e.exports={Blog:"Blog_Blog__20GZ0",BlogItem:"Blog_BlogItem__116WQ"}}},[["vHou",0,1,2,3,4]]]);