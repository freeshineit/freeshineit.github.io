import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { NextComponentType } from "next";
import { AppContext, AppProps } from "next/app";
import Layout from "../components/Layout";
import components from "@components/MDXComponent/index";

import "../styles/app.scss";

export interface ModifiedAppInitialProps<A = { [key in string]: string }> {
  appProps: A;
}

export interface ExtendedAppProps<
  P = { [key in string]: string },
  A = { [key in string]: string }
> extends AppProps<P>,
    ModifiedAppInitialProps<A> {}

const AppCom: NextComponentType<
  AppContext,
  ModifiedAppInitialProps,
  ExtendedAppProps
> = ({ Component, pageProps }) => {
  let style: React.CSSProperties = {
    width: 800,
    margin: "0 auto"
  };

  let Com = () => (
    <MDXProvider components={components}>
      <div style={{ maxWidth: 800, fontSize: 14 }} className="mdx-box">
        <Component {...pageProps} />
      </div>
    </MDXProvider>
  );

  // 用来区分 文件类型
  if (Component.displayName === "tsx") {
    Com = () => <Component {...pageProps} />;
    style = {};
  }

  return (
    <Layout style={style}>
      <Com />
    </Layout>
  );
};

export default AppCom;
