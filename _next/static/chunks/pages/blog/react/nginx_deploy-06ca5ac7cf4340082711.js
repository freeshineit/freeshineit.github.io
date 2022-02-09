(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[64],{2643:function(n,e,t){"use strict";t.d(e,{Z:function(){return i}});var r=t(5893),a=(t(7294),t(9008)),o=function(n){var e=n.meta;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:"".concat(e.title," (ShineShao)")}),(0,r.jsx)("meta",{name:"description",content:e.description||"ShineShao \u535a\u5ba2"}),(0,r.jsx)("meta",{name:"keywords",content:"ShineShao freeshineit Next.js Blog "})]})})};var i=function(n){var e=n.children,t=n.meta;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o,{meta:t}),(0,r.jsx)("article",{children:e})]})}},1497:function(n,e,t){"use strict";t.r(e),t.d(e,{meta:function(){return s},default:function(){return u}});var r=t(4942),a=t(5727),o=(t(7294),t(3905)),i=t(2643);function c(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var s={title:"docker nginx \u90e8\u7f72React\u9879\u76ee",description:"\u4f7f\u7528docker nginx \u5bb9\u5668\u90e8\u7f72create-react-app \u521b\u5efa\u7684React\u9879\u76ee\u548c\u4ee3\u7406\u63a5\u53e3",date:"2021-12-11"},p={meta:s},d=function(n){var e=n.children;return(0,o.kt)(i.Z,{meta:s},e)};function u(n){var e=n.components,t=(0,a.Z)(n,["components"]);return(0,o.kt)(d,l(l(l({},p),t),{},{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",l({},{id:"docker-nginx"}),(0,o.kt)("a",l({parentName:"h2"},{"aria-hidden":"true",tabIndex:-1,href:"#docker-nginx"}),(0,o.kt)("span",l({parentName:"a"},{className:"icon icon-link"}))),"docker nginx"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u65b0\u5efa ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose.yml"),"\u6587\u4ef6")),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-yml"}),'version: "2"\nservices:\n  # \u670d\u52a1\u540d\u79f0\n  nginx:\n    # \u955c\u50cf:\u7248\u672c\n    image: nginx:latest\n    # \u6620\u5c04\u5bb9\u566880\u7aef\u53e3\u5230\u672c\u573080\u7aef\u53e3\n    ports:\n      - "80:80"\n    # \u6570\u636e\u5377 \u6620\u5c04\u672c\u5730\u6587\u4ef6\u5230\u5bb9\u5668\n    # \u8fd9\u4e2a\u66f4\u65b0\u8d77\u6765\u7279\u522b\u9999\n    volumes:\n      # \u6620\u5c04nginx.conf\u6587\u4ef6\u5230\u5bb9\u5668\u7684/etc/nginx/conf.d\u76ee\u5f55\u5e76\u8986\u76d6default.conf\u6587\u4ef6\n      - ./nginx.conf:/etc/nginx/conf.d/default.conf\n      # \u6620\u5c04build\u6587\u4ef6\u5939\u5230\u5bb9\u5668\u7684/usr/share/nginx/html\u6587\u4ef6\u5939\n      - ./build:/usr/share/nginx/html\n    # \u8986\u76d6\u5bb9\u5668\u542f\u52a8\u540e\u9ed8\u8ba4\u6267\u884c\u7684\u547d\u4ee4\u3002\n    command: /bin/bash -c "nginx -g \'daemon off;\'"\n')),(0,o.kt)("p",null,"\u6302\u8f7d nginx \u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"    location / {\n        root   /usr/share/nginx/html;\n        index  index.html index.htm;\n        # \u5176\u4f5c\u7528\u662f\u6309\u987a\u5e8f\u68c0\u67e5\u6587\u4ef6\u662f\u5426\u5b58\u5728\uff0c\u8fd4\u56de\u7b2c\u4e00\u4e2a\u627e\u5230\u7684\u6587\u4ef6\u6216\u6587\u4ef6\u5939\uff08\u7ed3\u5c3e\u52a0\u659c\u7ebf\u8868\u793a\u4e3a\u6587\u4ef6\u5939\uff09\uff0c\u5982\u679c\u6240\u6709\u7684\u6587\u4ef6\u6216\u6587\u4ef6\u5939\u90fd\u627e\u4e0d\u5230\uff0c\u4f1a\u8fdb\u884c\u4e00\u4e2a\u5185\u90e8\u91cd\u5b9a\u5411\u5230\u6700\u540e\u4e00\u4e2a\u53c2\u6570\u3002\n        try_files $uri /index.html;\n    }\n\n    # \u63a5\u53e3\u4ee3\u7406\n    location ^~ /api/ {\n        # proxy_set_header X-Forwarded-Host $host;\n        # proxy_set_header X-Forwarded-Server $host;\n        # proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_pass http://xxx.xxxxx.xxxx;\n    }\n")),(0,o.kt)("ol",l({},{start:2}),(0,o.kt)("li",{parentName:"ol"},"\u7f16\u8bd1 react \u9879\u76ee")),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"yarn run build\n")),(0,o.kt)("ol",l({},{start:3}),(0,o.kt)("li",{parentName:"ol"},"\u751f\u6210\u5bb9\u5668\u5e76\u90e8\u7f72")),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"docker-compose up -d\n")),(0,o.kt)("ol",l({},{start:4}),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u672c\u5730\u8bbf\u95ee ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost/"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u505c\u6b62\u5e76\u5220\u9664\u5bb9\u5668 ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose down")))))}u.isMDXComponent=!0},7311:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/react/nginx_deploy",function(){return t(1497)}])}},function(n){n.O(0,[774,888,179],(function(){return e=7311,n(n.s=e);var e}));var e=n.O();_N_E=e}]);