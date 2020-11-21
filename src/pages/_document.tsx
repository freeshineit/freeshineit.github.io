// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file
// ./pages/_document.js
import Document, { Head, Main, NextScript, Html } from "next/document";

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
