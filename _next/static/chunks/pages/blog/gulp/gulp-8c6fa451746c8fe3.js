(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[556],{6484:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/gulp/gulp",function(){return e(9591)}])},8424:function(n,t,e){"use strict";e.d(t,{Z:function(){return m}});var s=e(5893),r=e(7294),i=e(9008),a=e.n(i),o=function(n){var t=n.meta;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(a(),{children:[(0,s.jsx)("title",{children:"".concat(t.title," (ShineShao)")}),(0,s.jsx)("meta",{name:"description",content:"".concat(t.description," ShineShao \u535a\u5ba2")}),(0,s.jsx)("meta",{name:"keywords",content:"ShineShao freeshineit Next.js Blog "})]})})},c=e(9125),l=e(1836),p=e(2230),h=e.n(p);function u(n){var t=n.meta,e=t.date.split("-"),i=(0,r.useMemo)((function(){try{return c.vc[+e[1]-1]}catch(n){}}),[]);return(0,s.jsxs)("div",{className:h().top,children:[(0,s.jsxs)("div",{className:h().coverWrapper,children:[(0,s.jsx)("div",{className:h().cover,style:{backgroundImage:"url(".concat(t.cover,")")}}),(0,s.jsx)("div",{className:h().coverBg}),(0,s.jsxs)("div",{className:h().dateWrapper,children:[(0,s.jsxs)("span",{className:h().date,children:[(0,s.jsx)("span",{className:h().dateDay,children:e[2]||""}),(0,s.jsx)("span",{className:h().dateMonth,children:i}),(new Date).getFullYear()>+e[0]?(0,s.jsx)("span",{className:h().dateMonth,children:e[0]}):null]}),(0,s.jsx)("h1",{className:h().title,children:t.title})]})]}),(0,s.jsx)(l.Z,{cover:t.cover})]})}var d=e(55),v=e.n(d);var m=function(n){var t=n.children,e=n.meta;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o,{meta:e}),(0,s.jsx)(u,{meta:e}),(0,s.jsx)("div",{className:v().content,children:(0,s.jsx)("article",{children:t})})]})}},1836:function(n,t,e){"use strict";e.d(t,{Z:function(){return o}});var s=e(5893),r=e(9125),i=e(5246),a=e.n(i);function o(n){var t=n.cover;return(0,s.jsx)(s.Fragment,{children:r.Pu.indexOf(t)>-1?(0,s.jsxs)("div",{className:a().photographer,children:[(0,s.jsx)("svg",{viewBox:"0 0 1024 1024",version:"1.1",width:"1em",height:"1em",fill:"currentColor",children:(0,s.jsx)("path",{d:"M860.414581 207.449017 509.333781 207.449017c0-52.808332-43.003528-95.81186-95.81186-95.81186l-63.817235 0c-52.808332 0-95.81186 43.003528-95.81186 95.81186L158.424996 207.449017c-52.808332 0-95.81186 43.003528-95.81186 95.81186l0 510.53788c0 52.808332 43.003528 95.81186 95.81186 95.81186l701.989585 0c52.808332 0 95.81186-43.003528 95.81186-95.81186L956.22644 303.260877C956.054426 250.452545 913.050899 207.449017 860.414581 207.449017zM509.333781 749.981522c-105.616664 0-191.451705-85.835041-191.451705-191.451705s85.835041-191.451705 191.451705-191.451705 191.451705 85.835041 191.451705 191.451705S614.950445 749.981522 509.333781 749.981522zM812.422644 430.895347c-26.490173 0-47.819923-21.501764-47.819923-47.819923s21.501764-47.819923 47.819923-47.819923c26.490173 0 47.819923 21.501764 47.819923 47.819923S838.912817 430.895347 812.422644 430.895347z"})}),"\xa0",r.ZP.author]}):null})}},9591:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return l},meta:function(){return a}});var s=e(9534),r=(e(7294),e(3905)),i=e(8424),a=(e(9125),{title:"Gulp \u6e90\u7801\u5206\u6790",description:"",date:"2022-11-28",cover:"/static/images/gulp.png"}),o={meta:a},c=function(n){var t=n.children;return(0,r.kt)(i.Z,{meta:a},t)};function l(n){var t=n.components,e=(0,s.Z)(n,["components"]);return(0,r.kt)(c,Object.assign({},o,e,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",Object.assign({},{id:"gulp"}),"Gulp"),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'"use strict";\n\nvar util = require("util");\n// https://www.npmjs.com/package/undertaker\n// undertaker\u7c7b\u63d0\u4f9b\u4e86task\uff0cseries\uff0cparallel\uff0cget\uff0cset\uff0ctree\u548cregistry\u65b9\u6cd5\n// undertaker\u7c7b\u7ee7\u627f\u4e8enode\u6838\u5fc3\u7c7beventemitter\nvar Undertaker = require("undertaker");\n// https://www.npmjs.com/package/vinyl-fs\n// vinyl\u662fvitual file formate\u865a\u62df\u6587\u4ef6\u683c\u5f0f\uff0c\u7528\u4e8e\u63cf\u8ff0\u4e00\u4e2a\u6587\u4ef6\u3002\u5b83\u6709\u4e24\u4e2a\u4e3b\u8981\u7684\u5c5e\u6027\uff0cpath\u5c5e\u6027\u548ccontents\u5c5e\u6027\u3002\u6bcf\u4e00\u4e2aVinyl\u5b9e\u4f8b\u4ee3\u8868\u4e00\u4e2a\u72ec\u7acb\u7684\u6587\u4ef6\u3001\u76ee\u5f55\u6216\u8005symlink\u7b26\u53f7\u8fde\u63a5\u3002\nvar vfs = require("vinyl-fs");\n// https://www.npmjs.com/package/glob-watcher\n// \u89c2\u5bdfglobs\u5e76\u5728\u66f4\u6539\u65f6\u6267\u884c\u4e00\u4e2a\u51fd\u6570\uff0c\u5e76\u4f7f\u7528\u667a\u80fd\u9ed8\u8ba4\u503c\u53d6\u6d88\u7ed1\u5b9a\u548c\u6392\u961f\u3002\nvar watch = require("glob-watcher");\n\nfunction Gulp() {\n  // \u6539\u53d8Undertaker\u7684this \u6307\u5411\uff0c\u6307\u5411Gulp\n  Undertaker.call(this);\n\n  // Bind the functions for destructuring\n  this.watch = this.watch.bind(this);\n  // \u4efb\u52a1\u3002 \u7531undertaker\u7c7b\u63d0\u4f9b\n  this.task = this.task.bind(this);\n  // \u4efb\u52a1\u987a\u5e8f\u4f9d\u6b21\u6267\u884c\u3002 \u7531undertaker\u7c7b\u63d0\u4f9b\n  this.series = this.series.bind(this);\n  // \u5c06\u4efb\u52a1\u529f\u80fd\u6216\u7ec4\u5408\u64cd\u4f5c\u7ec4\u5408\u6210\u5e76\u884c\u6267\u884c\u7684\u8f83\u5927\u64cd\u4f5c\u3002 \u7531undertaker\u7c7b\u63d0\u4f9b\n  this.parallel = this.parallel.bind(this);\n  // https://www.gulpjs.com.cn/docs/api/registry/\n  // \u5141\u8bb8\u5c06\u81ea\u5b9a\u4e49\u7684\u6ce8\u518c\u8868\u63d2\u5165\u5230\u4efb\u52a1\u7cfb\u7edf\u4e2d\uff0c\u4ee5\u671f\u63d0\u4f9b\u5171\u4eab\u4efb\u52a1\u6216\u589e\u5f3a\u529f\u80fd\u3002\n  // \u7531undertaker\u7c7b\u63d0\u4f9b\n  this.registry = this.registry.bind(this);\n  // \u83b7\u53d6\u5f53\u524d\u4efb\u52a1\u4f9d\u8d56\u5173\u7cfb\u6811\u3002 \u7531undertaker\u7c7b\u63d0\u4f9b\n  this.tree = this.tree.bind(this);\n  // \u7531undertaker\u7c7b\u63d0\u4f9b\n  this.lastRun = this.lastRun.bind(this);\n  // \u521b\u5efa\u4e00\u4e2a\u6d41\uff0c\u7528\u4e8e\u4ece\u6587\u4ef6\u7cfb\u7edf\u8bfb\u53d6 Vinyl \u5bf9\u8c61\u3002\u7531 vinyl-fs \u63d0\u4f9b\n  this.src = this.src.bind(this);\n  // \u521b\u5efa\u4e00\u4e2a\u7528\u4e8e\u5c06 Vinyl \u5bf9\u8c61\u5199\u5165\u5230\u6587\u4ef6\u7cfb\u7edf\u7684\u6d41\u3002\u7531 vinyl-fs \u63d0\u4f9b\n  this.dest = this.dest.bind(this);\n  // \u7b26\u53f7\u94fe\u63a5\u3002 \u7531 vinyl-fs \u63d0\u4f9b\n  this.symlink = this.symlink.bind(this);\n}\n\n// https://nodejs.org/docs/latest/api/util.html#utilinheritsconstructor-superconstructor\n// \u7ee7\u627f\n// \u5df2\u7ecf\u4e0d\u5efa\u8bae\u4f7f\u7528\u4e86\uff0c \u6700\u597d\u4f7f\u7528es6\u7684\u7ee7\u627f\u65b9\u5f0f  extends\nutil.inherits(Gulp, Undertaker);\n\n// https://www.npmjs.com/package/vinyl-fs#options\n// vfs.src(globs[, options])\nGulp.prototype.src = vfs.src;\n// https://www.npmjs.com/package/vinyl-fs#destfolder-options\n// vfs.dest(folder[, options])\n// \u5c06\u6587\u4ef6\u5939\u8def\u5f84\u5b57\u7b26\u4e32\u6216\u51fd\u6570\u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\uff0c\u5c06\u9009\u9879\u5bf9\u8c61\u4f5c\u4e3a\u7b2c\u4e8c\u4e2a\u53c2\u6570\u3002\n// \u5982\u679c\u7ed9\u5b9a\u4e00\u4e2a\u51fd\u6570\uff0c\u5b83\u5c06\u4e0e\u6bcf\u4e2avinyl File\u5bf9\u8c61\u4e00\u8d77\u8c03\u7528\uff0c\u5e76\u4e14\u5fc5\u987b\u8fd4\u56de\u6587\u4ef6\u5939\u8def\u5f84\u3002\n// \u8fd4\u56de\u4e00\u4e2a\u6d41\uff0c\u8be5\u6d41\u63a5\u53d7vinyl File\u5bf9\u8c61\uff0c\u5c06\u5b83\u4eec\u5199\u5165\u6307\u5b9a\u6587\u4ef6\u5939/cwd\u4e2d\u7684\u78c1\u76d8\uff0c\u5e76\u5c06\u5b83\u4eec\u4f20\u9012\u5230\u4e0b\u6e38\uff0c\u8fd9\u6837\u60a8\u5c31\u53ef\u4ee5\u7ee7\u7eed\u4f7f\u7528\u7ba1\u9053\u3002\n// \u4e00\u65e6\u6587\u4ef6\u5199\u5165\u78c1\u76d8\u540e\uff0c\u5c06\u5c1d\u8bd5\u786e\u5b9avinyl File\u5bf9\u8c61\u7684`stat.mode`\u3001`stat.mtime`\u548c`stat.atime`\u662f\u5426\u4e0e\u6587\u4ef6\u7cfb\u7edf\u4e0a\u7684\u6587\u4ef6\u4e0d\u540c\u3002\n// \u5982\u679c\u5b83\u4eec\u4e0d\u540c\uff0c\u5e76\u4e14\u6b63\u5728\u8fd0\u884c\u7684\u8fdb\u7a0b\u62e5\u6709\u8be5\u6587\u4ef6\uff0c\u5219\u4f1a\u66f4\u65b0\u76f8\u5e94\u7684\u6587\u4ef6\u7cfb\u7edf\u5143\u6570\u636e\u3002\n// \u5982\u679c\u5b83\u4eec\u6ca1\u6709\u5dee\u5f02\u6216\u8fdb\u7a0b\u4e0d\u62e5\u6709\u6587\u4ef6\uff0c\u5219\u4f1a\u81ea\u52a8\u8df3\u8fc7\u5c1d\u8bd5\u3002\n// \u5982\u679c\u6587\u4ef6\u5177\u6709\u6307\u5b9a\u76ee\u6807\u8def\u5f84\u7684`symlink`\u5c5e\u6027\uff0c\u5219\u5c06\u521b\u5efa`symlink`\u3002\nGulp.prototype.dest = vfs.dest;\n\n// https://www.npmjs.com/package/vinyl-fs#symlinkfolder-options\n// vfs.symlink(folder[, options])\n// \u5c06\u6587\u4ef6\u5939\u8def\u5f84\u5b57\u7b26\u4e32\u6216\u51fd\u6570\u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\uff0c\u5c06\u9009\u9879\u5bf9\u8c61\u4f5c\u4e3a\u7b2c\u4e8c\u4e2a\u53c2\u6570\u3002\n// \u5982\u679c\u7ed9\u5b9a\u4e00\u4e2a\u51fd\u6570\uff0c\u5b83\u5c06\u4e0e\u6bcf\u4e2avinyl File\u5bf9\u8c61\u4e00\u8d77\u8c03\u7528\uff0c\u5e76\u4e14\u5fc5\u987b\u8fd4\u56de\u6587\u4ef6\u5939\u8def\u5f84\u3002\n// \u8fd4\u56de\u4e00\u4e2a\u6d41\uff0c\u8be5\u6d41\u63a5\u53d7vinyl File\u5bf9\u8c61\uff0c\u5728\u6307\u5b9a\u7684\u6587\u4ef6\u5939/cwd\u5904\u521b\u5efa\u4e00\u4e2a`symlink`\uff0c\u5e76\u5c06\u5176\u4f20\u9012\u5230\u4e0b\u6e38\uff0c\u8fd9\u6837\u60a8\u5c31\u53ef\u4ee5\u7ee7\u7eed\u4f7f\u7528\u7ba1\u9053\u4f20\u9012\u8fd9\u4e9b\u5bf9\u8c61\u3002\nGulp.prototype.symlink = vfs.symlink;\n// \u5728 `glob-watcher` \u524d\u505a\u6821\u9a8c\u548c\u517c\u5bb9\n//\nGulp.prototype.watch = function (glob, opt, task) {\n  if (\n    typeof opt === "string" ||\n    typeof task === "string" ||\n    Array.isArray(opt) ||\n    Array.isArray(task)\n  ) {\n    throw new Error(\n      "watching " +\n        glob +\n        ": watch task has to be " +\n        "a function (optionally generated by using gulp.parallel " +\n        "or gulp.series)"\n    );\n  }\n\n  if (typeof opt === "function") {\n    task = opt;\n    opt = {};\n  }\n\n  opt = opt || {};\n\n  var fn;\n  if (typeof task === "function") {\n    fn = this.parallel(task);\n  }\n\n  // watch() \u65b9\u6cd5\u65f6\u901a\u8fc7 `events` \u53c2\u6570\u8fdb\u884c\u6307\u5b9a\u3002\n  // \u53ef\u7528\u7684\u4e8b\u4ef6\u6709 \'add\'\u3001\'addDir\'\u3001\'change\'\u3001\'unlink\'\u3001\'unlinkDir\'\u3001\'ready\'\u3001\'error\'\u3002\u6b64\u5916\uff0c\u8fd8\u6709\u4e00\u4e2a \'all\' \u4e8b\u4ef6\uff0c\u5b83\u8868\u793a\u9664 \'ready\' \u548c \'error\' \u4e4b\u5916\u7684\u6240\u6709\u4e8b\u4ef6\u3002\n  return watch(glob, opt, fn);\n};\n\n// Let people use this class from our instance\nGulp.prototype.Gulp = Gulp;\n// Gulp \u5b9e\u4f8b\nvar inst = new Gulp();\nmodule.exports = inst;\n')))}l.isMDXComponent=!0},2230:function(n){n.exports={top:"Cover_top__3shUC",coverWrapper:"Cover_coverWrapper__EHcKj",cover:"Cover_cover__anmEM",coverBg:"Cover_coverBg__vB_Og",dateWrapper:"Cover_dateWrapper__cx6Xo",date:"Cover_date__Q1mZh",dateDay:"Cover_dateDay__RyIzT",dateMonth:"Cover_dateMonth__hW3W0"}},55:function(n){n.exports={content:"Content_content__KEvUj","toc-anchors":"Content_toc-anchors__XVQLZ"}},5246:function(n){n.exports={photographer:"Photographer_photographer__tesd0"}}},function(n){n.O(0,[774,888,179],(function(){return t=6484,n(n.s=t);var t}));var t=n.O();_N_E=t}]);