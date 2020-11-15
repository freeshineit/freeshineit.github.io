import { NextComponentType } from "next";
import { AppContext, AppProps } from "next/app";
// import "../styles/bootstrap.min.css";
// import "../styles/app.scss";

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
> = ({ Component, pageProps, appProps }) => {
  return <Component {...appProps} {...pageProps} />;
};

export default AppCom;
