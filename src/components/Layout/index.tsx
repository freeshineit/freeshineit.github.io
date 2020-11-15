import React, { FC } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

import styles from "./Layout.module.scss";

interface ILayoutProps extends CommponentCommProps {
  title?: string;
}

const Layout: FC<ILayoutProps> = ({
  className,
  style,
  title = "This is the default title",
  children
}) => {
  const classNames = className
    ? `${styles.layout} ${className}`
    : styles.layout;

  return (
    <div className={classNames}>
      <Head>
        <title>ShineShao Bolg</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
