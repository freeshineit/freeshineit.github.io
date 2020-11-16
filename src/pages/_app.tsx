import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { NextComponentType } from "next";
import { AppContext, AppProps } from "next/app";
import Layout from "../components/Layout";
import components from "@components/MDXComponent/index";

import "../styles/app.scss";
import "../styles/MarkDown.scss";
import "../styles/prism.css";

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
  let style: React.CSSProperties = {};

  let Com = () => <Component {...pageProps} />;

  // 用来区分 文件类型
  // @ts-ignore
  if (Component.isMDXComponent) {
    Com = () => (
      <MDXProvider components={components}>
        <div style={{ maxWidth: 800, fontSize: 14 }} className="mdx-box">
          <Component {...pageProps} />
        </div>
      </MDXProvider>
    );
    style = {
      width: 800,
      margin: "0 auto"
    };
  }

  return (
    <Layout style={style}>
      <Com />
    </Layout>
  );
};

export default AppCom;
