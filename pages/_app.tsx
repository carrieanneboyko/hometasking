import App from "next/app";
import Head from "next/head";
import React from "react";
import { Auth0Provider } from "../components/Auth0HOC/Auth0Provider";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    console.log({ pageProps });

    return { pageProps };
  }

  render() {
    const { Component, pageProps, router } = this.props;
    const onRedirectCallback = appState => {
      console.log("appState", appState);
      router.push(appState && appState.targetUrl ? appState.targetUrl : "/");
    };
    return (
      <>
        <Head>
          <title>Hometasking</title>
        </Head>
        <Auth0Provider
          domain={process.env.AUTH0_DOMAIN}
          clientId={process.env.AUTH0_CLIENT_ID}
          redirectUri={process.env.AUTH0_REDIRECT_URI}
          onRedirectCallback={onRedirectCallback}
        >
          <Component {...pageProps} router={router} />
        </Auth0Provider>
      </>
    );
  }
}
