import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { NextComponentType } from "next";
import { AppContext, AppProps } from "next/app";

import "../styles/app.scss";
import "../styles/MarkDown.scss";
import "../styles/prism.scss";

import Layout from "../components/Layout";
import components from "@components/MDXComponent/index";

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
  let mainClassName = "";

  // 用来区分 文件类型
  // @ts-ignore
  if (Component.isMDXComponent) {
    Com = () => (
      <MDXProvider components={components}>
        <div className="mdx-box">
          <Component {...pageProps} />
        </div>
      </MDXProvider>
    );
    style = {
      margin: "0 auto"
    };

    mainClassName = "main-mdx";
  }

  return (
    <Layout style={style} className={mainClassName}>
      <Com />
    </Layout>
  );
};

export default AppCom;
