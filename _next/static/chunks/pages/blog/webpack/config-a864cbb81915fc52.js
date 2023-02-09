(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[234],{1428:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/webpack/config",function(){return t(4972)}])},4065:function(n,e,t){"use strict";t.d(e,{Z:function(){return m}});var o=t(5893),a=t(7294),r=t(9008),c=t.n(r),i=function(n){var e=n.meta;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(c(),{children:[(0,o.jsx)("title",{children:"".concat(e.title," (ShineShao)")}),(0,o.jsx)("meta",{name:"description",content:"".concat(e.description," ShineShao \u535a\u5ba2")}),(0,o.jsx)("meta",{name:"keywords",content:"ShineShao freeshineit Next.js Blog "})]})})},s=t(9125),p=t(9954),l=t(9167),u=t.n(l);function h(n){var e=n.meta,t=e.date.split("-"),r=(0,a.useMemo)((function(){try{return s.vc[+t[1]-1]}catch(n){}}),[]);return(0,o.jsxs)("div",{className:u().top,children:[(0,o.jsxs)("div",{className:u().coverWrapper,children:[(0,o.jsx)("div",{className:u().cover,style:{backgroundImage:"url(".concat(e.cover,")")}}),(0,o.jsx)("div",{className:u().coverBg}),(0,o.jsxs)("div",{className:u().dateWrapper,children:[(0,o.jsxs)("span",{className:u().date,children:[(0,o.jsx)("span",{className:u().dateDay,children:t[2]||""}),(0,o.jsx)("span",{className:u().dateMonth,children:r}),(new Date).getFullYear()>+t[0]?(0,o.jsx)("span",{className:u().dateMonth,children:t[0]}):null]}),(0,o.jsx)("h1",{className:u().title,children:e.title})]})]}),(0,o.jsx)(p.Z,{cover:e.cover})]})}var g=t(7366),d=t.n(g);var m=function(n){var e=n.children,t=n.meta;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i,{meta:t}),(0,o.jsx)(h,{meta:t}),(0,o.jsx)("div",{className:d().content,children:(0,o.jsx)("article",{children:e})})]})}},9954:function(n,e,t){"use strict";t.d(e,{Z:function(){return i}});var o=t(5893),a=t(9125),r=t(7385),c=t.n(r);function i(n){var e=n.cover;return(0,o.jsx)(o.Fragment,{children:a.Pu.indexOf(e)>-1?(0,o.jsxs)("div",{className:c().photographer,children:[(0,o.jsx)("svg",{viewBox:"0 0 1024 1024",version:"1.1",width:"1em",height:"1em",fill:"currentColor",children:(0,o.jsx)("path",{d:"M860.414581 207.449017 509.333781 207.449017c0-52.808332-43.003528-95.81186-95.81186-95.81186l-63.817235 0c-52.808332 0-95.81186 43.003528-95.81186 95.81186L158.424996 207.449017c-52.808332 0-95.81186 43.003528-95.81186 95.81186l0 510.53788c0 52.808332 43.003528 95.81186 95.81186 95.81186l701.989585 0c52.808332 0 95.81186-43.003528 95.81186-95.81186L956.22644 303.260877C956.054426 250.452545 913.050899 207.449017 860.414581 207.449017zM509.333781 749.981522c-105.616664 0-191.451705-85.835041-191.451705-191.451705s85.835041-191.451705 191.451705-191.451705 191.451705 85.835041 191.451705 191.451705S614.950445 749.981522 509.333781 749.981522zM812.422644 430.895347c-26.490173 0-47.819923-21.501764-47.819923-47.819923s21.501764-47.819923 47.819923-47.819923c26.490173 0 47.819923 21.501764 47.819923 47.819923S838.912817 430.895347 812.422644 430.895347z"})}),"\xa0",a.ZP.author]}):null})}},4972:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return p},meta:function(){return c}});var o=t(9534),a=(t(7294),t(3905)),r=t(4065),c=(t(9125),{title:"webpack config",description:"webpack config",date:"2022-11-13",cover:"/static/images/webpack.png"}),i={meta:c},s=function(n){var e=n.children;return(0,a.kt)(r.Z,{meta:c},e)};function p(n){var e=n.components,t=(0,o.Z)(n,["components"]);return(0,a.kt)(s,Object.assign({},i,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",Object.assign({},{id:"webpack-\u914d\u7f6e"}),"webpack \u914d\u7f6e"),(0,a.kt)("p",null,"webpack ",(0,a.kt)("a",Object.assign({parentName:"p"},{href:"https://sourcegraph.com/github.com/webpack/webpack@main/-/blob/declarations/WebpackOptions.d.ts"}),"WebpackOptions")),(0,a.kt)("p",null,(0,a.kt)("a",Object.assign({parentName:"p"},{href:"https://webpack.docschina.org/configuration/other-options"}),"https://webpack.docschina.org/configuration/other-options")),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"export interface WebpackOptions {\n  /**\n   * \u8bbe\u7f6e`require.amd`\u548c`define.amd`\u7684\u503c\u3002\u6216\u8005\u7981\u7528AMD\u652f\u6301\u3002\n   */\n  amd?: false | { [k: string]: any };\n  /**\n   * \u5728\u7b2c\u4e00\u4e2a\u9519\u8bef\u51fa\u73b0\u65f6\u629b\u51fa\u5931\u8d25\u7ed3\u679c\uff0c\u800c\u4e0d\u662f\u5bb9\u5fcd\u5b83;  true: \u5c06\u4f1a\u81f4\u4f7f webpack \u5728\u53d1\u73b0\u9519\u8bef\u65f6\u5c3d\u5feb\u9000\u51fa\u3002\n   */\n  bail?: boolean;\n  /**\n   * \u7f13\u5b58\u751f\u6210\u7684 modules \u548c chunks\uff0c\u4ee5\u63d0\u9ad8\u591a\u4e2a\u589e\u91cf\u6784\u5efa\u7684\u6027\u80fd\u3002\n   */\n  cache?: boolean | MemoryCacheOptions | FileCacheOptions;\n  /**\n   * \u57fa\u672c\u76ee\u5f55\uff08\u7edd\u5bf9\u8def\u5f84\uff01\uff09\u7528\u4e8e\u89e3\u6790`entry`\u9009\u9879\u3002\u5982\u679c\u8bbe\u7f6e\u4e86`output.pathinfo`\uff0c\u5219\u5305\u542b\u7684pathinfo\u5c06\u7f29\u77ed\u5230\u6b64\u76ee\u5f55\u3002\n   */\n  context?: string; // Context;\n  /**\n   * \u5bf9\u8981\u4f9d\u8d56\u7684\u5176\u4ed6\u914d\u7f6e\u7684\u5f15\u7528\u3002\n   */\n  dependencies?: string[]; // Dependencies;\n  /**\n   * https://webpack.js.org/configuration/dev-server/\n   * webpack-dev-server\u7684\u9009\u9879\n   */\n  devServer?: DevServer;\n  /**\n   * \u7528\u4e8e\u589e\u5f3a\u8c03\u8bd5\u7684\u5f00\u53d1\u5de5\u5177 (false | eval | [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map).\n   */\n  devtool?: DevTool;\n  /**\n   * \u7f16\u8bd1\u7684\u5165\u53e3\u70b9\n   */\n  entry?: Entry;\n  /**\n   * \u542f\u7528/\u7981\u7528\u5b9e\u9a8c\uff08\u5177\u6709relax-SemVer\u517c\u5bb9\u6027\u7684\u5b9e\u9a8c\u529f\u80fd\uff09\n   */\n  experiments?: Experiments;\n  /**\n   * \u6307\u5b9a\u4e0d\u5e94\u8be5\u7531webpack\u89e3\u6790\uff0c\u4f46\u5e94\u8be5\u6210\u4e3a\u7ed3\u679c\u5305\u7684\u4f9d\u8d56\u9879\u7684\u4f9d\u8d56\u9879\u3002\u4f9d\u8d56\u5173\u7cfb\u7684\u7c7b\u578b\u53d6\u51b3\u4e8e`output.libraryTarget`\u3002\n   */\n  externals?: Externals;\n  /**\n   * \u4e3a\u7279\u5b9a\u76ee\u6807\u542f\u7528\u5916\u90e8\u9884\u8bbe\n   */\n  externalsPresets?: ExternalsPresets;\n  /**\n   * \u6307\u5b9a\u5916\u90e8\u7684\u9ed8\u8ba4\u7c7b\u578b\uff08'amd*'\u3001'umd*'\uff0c'system'\u548c'jsonp'\u53d6\u51b3\u4e8e\u8bbe\u7f6e\u4e3a\u76f8\u540c\u503c\u7684output.libraryTarget\uff09\u3002\n   */\n  externalsType?: ExternalsType;\n  /**\n   * https://webpack.docschina.org/configuration/other-options/#ignorewarnings\n   * \u5ffd\u7565\u7279\u5b9a\u8b66\u544a\n   */\n  ignoreWarnings?: IgnoreWarnings;\n  /**\n   * https://webpack.docschina.org/configuration/other-options/#infrastructurelogging\n   * \u7528\u4e8e\u57fa\u7840\u8bbe\u65bd\u6c34\u5e73\u7684\u65e5\u5fd7\u9009\u9879\n   */\n  infrastructureLogging?: InfrastructureLogging;\n  /**\n   * https://webpack.docschina.org/configuration/other-options/#loader\n   * loader\u4e0a\u4e0b\u6587\u4e2d\u53ef\u7528\u7684\u81ea\u5b9a\u4e49\u503c\n   */\n  loader?: Loader;\n  /**\n   * \u542f\u7528\u751f\u4ea7\u4f18\u5316\u6216\u5f00\u53d1\u63d0\u793a\n   */\n  mode?: \"development\" | \"production\" | \"none\";\n  /**\n   * \u5f71\u54cd\u6b63\u5e38\u6a21\u5757\u7684\u9009\u9879\uff08`NormalModuleFactory`\uff09\n   */\n  module?: ModuleOptions;\n  /**\n   * https://webpack.docschina.org/configuration/other-options/#name\n   * \u914d\u7f6e\u7684\u540d\u79f0\u3002\u52a0\u8f7d\u591a\u4e2a\u914d\u7f6e\u65f6\u4f7f\u7528\u3002\n   */\n  name?: string; //Name;\n  /**\n   * \u5305\u62ec\u5404\u79cd\u8282\u70b9\u586b\u5145\u7684polyfill\u6216mock\n   */\n  node?: Node;\n  /**\n   * https://webpack.docschina.org/configuration/optimization/#root\n   * \u542f\u7528/\u7981\u7528\u96c6\u6210\u4f18\u5316\n   */\n  optimization?: Optimization;\n  /**\n   * Options affecting the output of the compilation. `output` options tell webpack how to write the compiled files to disk.\n   * \u5f71\u54cd\u7f16\u8bd1\u8f93\u51fa\u7684\u9009\u9879. `output`\u9009\u9879\u544a\u8bc9`webpack`\u5982\u4f55\u5c06\u7f16\u8bd1\u540e\u7684\u6587\u4ef6\u5199\u5165\u78c1\u76d8\u3002\n   */\n  output?: Output;\n  /**\n   * https://webpack.docschina.org/configuration/other-options/#parallelism\n   * \u7f16\u8bd1\u4e2d\u5e76\u884c\u5904\u7406\u7684\u6a21\u5757\u6570\n   * \u9ed8\u8ba4 100\n   */\n  parallelism?: number; //Parallelism;\n  /**\n   * https://webpack.docschina.org/configuration/performance/#root\n   * web\u6027\u80fd\u5efa\u8bae\u7684\u914d\u7f6e\n   */\n  performance?: Performance;\n  /**\n   * https://webpack.docschina.org/configuration/plugins/#plugins\n   * \u5411\u7f16\u8bd1\u5668\u6dfb\u52a0\u5176\u4ed6\u63d2\u4ef6.\n   *\n   * https://sourcegraph.com/github.com/webpack/webpack-cli/-/blob/packages/webpack-cli/src/plugins/CLIPlugin.ts?L11\n   * webpack-cli \u4f1a\u9ed8\u8ba4\u5728\u6570\u7ec4\u7684\u6700\u524d\u9762\u63d2\u5165 CLIPlugin \u7684\u5b9e\u4f8b  (why ??) \u4e3b\u8981\u662f\u5728\u63a7\u5236\u53f0\u8f93\u51fa\u5185\u5bb9\uff08\u6253\u5370\u65e5\u5fd7\uff09\n   */\n  plugins?: Plugins;\n  /**\n   * https://webpack.docschina.org/configuration/other-options/#profile\n   * \u6355\u83b7\u6bcf\u4e2a\u6a21\u5757\u7684\u8ba1\u65f6\u4fe1\u606f\n   */\n  profile?: Profile;\n  /**\n   * https://webpack.docschina.org/configuration/other-options/#recordsinputpath\n   * \u5c06\u7f16\u8bd1\u5668\u72b6\u6001\u5b58\u50a8\u5230json\u6587\u4ef6\u4e2d, \u6307\u5b9a\u8bfb\u53d6\u6700\u540e\u4e00\u6761\u8bb0\u5f55\u7684\u6587\u4ef6\u7684\u540d\u79f0\u3002\u8fd9\u53ef\u4ee5\u7528\u6765\u91cd\u547d\u540d\u4e00\u4e2a\u8bb0\u5f55\u6587\u4ef6\n   */\n  recordsInputPath?: string | false; // RecordsInputPath;\n  /**\n   * https://webpack.docschina.org/configuration/other-options/#recordsoutputpath\n   * \u4ecejson\u6587\u4ef6\u52a0\u8f7d\u7f16\u8bd1\u5668\u72b6\u6001\n   */\n  recordsOutputPath?: string | false; // RecordsOutputPath;\n  /**\n   * https://webpack.docschina.org/configuration/other-options/#recordspath\n   * \u5f00\u542f\u8fd9\u4e2a\u9009\u9879\u53ef\u4ee5\u751f\u6210\u4e00\u4e2a JSON \u6587\u4ef6\uff0c\u5176\u4e2d\u542b\u6709 webpack \u7684 \"records\" \u8bb0\u5f55 - \u5373\u300c\u7528\u4e8e\u5b58\u50a8\u8de8\u591a\u6b21\u6784\u5efa(across multiple builds)\u7684\u6a21\u5757\u6807\u8bc6\u7b26\u300d\u7684\u6570\u636e\u7247\u6bb5\u3002\u53ef\u4ee5\u4f7f\u7528\u6b64\u6587\u4ef6\u6765\u8ddf\u8e2a\u5728\u6bcf\u6b21\u6784\u5efa\u4e4b\u95f4\u7684\u6a21\u5757\u53d8\u5316\u3002\u53ea\u8981\u7b80\u5355\u7684\u8bbe\u7f6e\u4e00\u4e0b\u8def\u5f84,\u5c31\u53ef\u4ee5\u751f\u6210\u8fd9\u4e2a JSON \u6587\u4ef6\n   */\n  recordsPath?: RecordsPath;\n  /**\n   * \u89e3\u6790\u5668\u9009\u9879\n   */\n  resolve?: Resolve;\n  /**\n   * https://webpack.docschina.org/configuration/resolve/#resolveloader\n   * \u89e3\u6790loaders\u65f6\u89e3\u6790\u7a0b\u5e8f\u7684\u9009\u9879\n   */\n  resolveLoader?: ResolveLoader;\n  /**\n   * \u5f71\u54cd\u6587\u4ef6\u7cfb\u7edf\u5feb\u7167\u521b\u5efa\u548c\u9a8c\u8bc1\u65b9\u5f0f\u7684\u9009\n   */\n  snapshot?: SnapshotOptions;\n  /**\n   * \u7edf\u8ba1\u9009\u9879\u5bf9\u8c61\u6216\u9884\u8bbe\u540d\u79f0\n   * \u9ed8\u8ba4: {colors:false,preset:'normal'}\n   */\n  stats?: StatsValue;\n  /**\n   * \u8981\u6784\u5efa\u7684\u73af\u5883\u3002\u5c3d\u53ef\u80fd\u4e3a\u6240\u6709\u7528\u6237\u6784\u5efa\u4e00\u7cfb\u5217\u73af\u5883\n   */\n  target?: string | false | string[]; // Target;\n  /**\n   * https://webpack.docschina.org/configuration/watch#root\n   * \u542f\u7528 Watch \u6a21\u5f0f\uff0c\u8be5\u6a21\u5f0f\u5c06\u5728\u6587\u4ef6\u66f4\u6539\u65f6\u91cd\u5efa\n   * Compiler \u652f\u6301\u53ef\u4ee5\u76d1\u63a7\u6587\u4ef6\u7cfb\u7edf\u7684 \u76d1\u542c(watching) \u673a\u5236\uff0c\u5e76\u4e14\u5728\u6587\u4ef6\u4fee\u6539\u65f6\u91cd\u65b0\u7f16\u8bd1\u3002\n   * \u5f53\u5904\u4e8e\u76d1\u542c\u6a21\u5f0f(watch mode)\u65f6\uff0c compiler \u4f1a\u89e6\u53d1\u8bf8\u5982 watchRun, watchClose \u548c invalid \u7b49\u989d\u5916\u7684\u4e8b\u4ef6\n   *\n   */\n  watch?: boolean; // Watch;\n  /**\n   * https://webpack.docschina.org/configuration/watch#watchoptions\n   * \u4e00\u7ec4\u7528\u6765\u5b9a\u5236 watch \u6a21\u5f0f\u7684\u9009\u9879\n   */\n  watchOptions?: WatchOptions;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("img",Object.assign({parentName:"p"},{src:"/static/images/webpack.config.png",alt:"webpack config"}))),(0,a.kt)("h2",Object.assign({},{id:"loader"}),"loader"),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"/**\n * Custom values available in the loader context.\n */\nexport interface Loader {\n  [k: string]: any;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("a",Object.assign({parentName:"p"},{href:"/blog/webpack/loaders"}),"webpack loader")),(0,a.kt)("p",null,(0,a.kt)("a",Object.assign({parentName:"p"},{href:"/blog/webpack/options-Optimization"}),"webpack option.Optimization")),(0,a.kt)("h2",Object.assign({},{id:"plugin"}),"plugin"),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),'/**\n * \u5411\u7f16\u8bd1\u5668\u6dfb\u52a0\u5176\u4ed6\u63d2\u4ef6\n */\nexport type Plugins = (WebpackPluginInstance | WebpackPluginFunction)[];\n\n/**\n * \u63d2\u4ef6\u5b9e\u4f8b\n */\nexport interface WebpackPluginInstance {\n  /**\n   * The run point of the plugin, required method.\n   */\n  apply: (compiler: import("../lib/Compiler")) => void;\n  [k: string]: any;\n}\n\n/**\n * Function acting as plugin.\n */\nexport type WebpackPluginFunction = (\n  this: import("../lib/Compiler"),\n  compiler: import("../lib/Compiler")\n) => void;\n')),(0,a.kt)("p",null,(0,a.kt)("a",Object.assign({parentName:"p"},{href:"/blog/webpack/plugins"}),"webpack plugin")))}p.isMDXComponent=!0},9167:function(n){n.exports={top:"Cover_top__ZrW3_",coverWrapper:"Cover_coverWrapper__ORBLm",cover:"Cover_cover__946TB",coverBg:"Cover_coverBg__kRvQ4",dateWrapper:"Cover_dateWrapper__LkZQ2",date:"Cover_date__EoZZG",dateDay:"Cover_dateDay__h46lo",dateMonth:"Cover_dateMonth__ygp2w"}},7366:function(n){n.exports={content:"Content_content__JCitR","toc-anchors":"Content_toc-anchors__u_NLx"}},7385:function(n){n.exports={photographer:"Photographer_photographer__AVcTl"}}},function(n){n.O(0,[774,888,179],(function(){return e=1428,n(n.s=e);var e}));var e=n.O();_N_E=e}]);