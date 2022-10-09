// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file
// ./pages/_document.js
import Document, { Head, Main, NextScript, Html } from "next/document";

// 百度统计
// https://tongji.baidu.com/main/overview/10000498549/overview/index
const baidu = `var _hmt = _hmt || [];(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?50c47ad58047f480726591cca679297b";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();`;
export default class MyDocument extends Document {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="shortcut icon"
            href="https://www.nextjs.cn/static/favicon/favicon.ico"
          />
          <script dangerouslySetInnerHTML={{ __html: baidu }} />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
          <script src="/static/js/heading.js"></script>
        </body>
      </Html>
    );
  }
}
