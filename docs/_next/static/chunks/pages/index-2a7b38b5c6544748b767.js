_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/EDR":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("QeBL")}])},"29yi":function(e,n,t){e.exports={ShineShao:"ShineShao_ShineShao__3y7j0"}},QeBL:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),o=t.n(a),r=t("YFqc"),c=t.n(r),i=t("Wp5m"),s=t.n(i),u=t("nbff"),l=t("k/Of"),f=o.a.createElement,d=[1,2,3],h=function(){var e=Object(a.useState)(d[0]),n=e[0],t=e[1];return Object(a.useEffect)((function(){var e=setInterval((function(){var e=~~(3*Math.random());t(d[e])}),5e3);return function(){clearInterval(e)}}),[]),f("div",{className:s.a.container,style:{backgroundImage:"url(/static/images/bg/".concat(n,".jpeg)")}},f("div",{className:s.a.cover}),f("div",{className:s.a.content},f("div",{className:s.a.me},f(u.a,{className:s.a.face}),f("h3",null," I'm ShineShao\uff0c FE Developer"),f("div",{className:s.a.links},f(c.a,{href:"/blog"},f("a",null,"BLOG")),f("a",{target:"_block",href:l.a.github},"GITHUB")))))};h.displayName="tsx",n.default=h},Wp5m:function(e,n,t){e.exports={container:"Index_container__35kAj",cover:"Index_cover__2s3ji",content:"Index_content__2vMnd",me:"Index_me__38si9",face:"Index_face__22B8A",links:"Index_links__1xkvq"}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var a=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var r,c=o(t("q1tI")),i=t("elyg"),s=t("nOHt"),u=new Map,l=window.IntersectionObserver,f={};var d=function(e,n){var t=r||(l?r=new l((function(e){e.forEach((function(e){if(u.has(e.target)){var n=u.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),u.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0);return t?(t.observe(e),u.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}u.delete(e)}):function(){}};function h(e,n,t,a){(0,i.isLocalURL)(n)&&(e.prefetch(n,t,a).catch((function(e){0})),f[n+"%"+t]=!0)}var p=function(e){var n=!1!==e.prefetch,t=(0,s.useRouter)(),o=t&&t.pathname||"/",r=c.default.useMemo((function(){var n=(0,i.resolveHref)(o,e.href,!0),t=a(n,2),r=t[0],c=t[1];return{href:r,as:e.as?(0,i.resolveHref)(o,e.as):c||r}}),[o,e.href,e.as]),u=r.href,p=r.as,v=e.children,_=e.replace,m=e.shallow,g=e.scroll,y=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var b=c.Children.only(v),w=b&&"object"===typeof b&&b.ref,E=c.default.useRef(),k={ref:c.default.useCallback((function(e){(E.current&&(E.current(),E.current=void 0),n&&l&&e&&e.tagName&&(0,i.isLocalURL)(u))&&(f[u+"%"+p]||(E.current=d(e,(function(){h(t,u,p,{locale:"undefined"!==typeof y?y:t&&t.locale})}))));w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[n,w,u,p,t,y]),onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,n,t,a,o,r,c,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(t))&&(e.preventDefault(),null==c&&(c=a.indexOf("#")<0),n[o?"replace":"push"](t,a,{shallow:r,locale:s}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,t,u,p,_,m,g,y)}};return n&&(k.onMouseEnter=function(e){(0,i.isLocalURL)(u)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),h(t,u,p,{priority:!0}))}),(e.passHref||"a"===b.type&&!("href"in b.props))&&(k.href=(0,i.addBasePath)((0,i.addLocale)(p,"undefined"!==typeof y?y:t&&t.locale,t&&t.defaultLocale))),c.default.cloneElement(b,k)};n.default=p},"k/Of":function(e,n,t){"use strict";n.a={github:"https://github.com/freeshineit"}},nbff:function(e,n,t){"use strict";var a=t("q1tI"),o=t.n(a),r=t("k/Of"),c=t("29yi"),i=t.n(c),s=o.a.createElement,u=function(e){var n=e.src,t=void 0===n?"/static/images/ShineShao.jpg":n,a=e.className,o=e.style,c=a?"".concat(i.a.ShineShao," ").concat(a):i.a.ShineShao;return s("a",{href:r.a.github,target:"_block"},s("img",{src:t,alt:"ShineShao",className:c,style:o}))};n.a=o.a.memo(u)}},[["/EDR",0,1,2]]]);