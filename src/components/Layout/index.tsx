import React, { FC } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

import styles from "./Layout.module.scss";
import { ComponentCommProps } from "src/@types";

interface ILayoutProps extends ComponentCommProps {
  title?: string;
}

const Layout: FC<ILayoutProps> = ({ className, style, children }) => {
  const classNames = className
    ? `${styles.layout} ${className}`
    : styles.layout;

  return (
    <div className={classNames} style={{ width: "100%" }}>
      <Head>
        <title>ShineShao Bolg</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no, minimal-ui"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="format-detection" content="telephone=no, email=no" />
      </Head>
      <Header className={styles.header} />
      <div className={styles.main} style={style}>
        {children}
      </div>
      <Footer className={styles.footer} />
    </div>
  );
};

export default Layout;
