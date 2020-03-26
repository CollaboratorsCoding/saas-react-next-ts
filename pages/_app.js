import React from 'react';
import NextApp from 'next/app';
import Router from 'next/router';
import nextCookie from 'next-cookies';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';

// import Head from '@components/Head';
import Page from '@components/Page/Page';
import withApollo from '@services/apollo/withApollo';

const TIMEOUT = 400;

const theme = {
  colors: {
    primary: '#823eb7',
    lightGrey: '#f3f3f3',
  },
};

class MyApp extends NextApp {
  static async getInitialProps({ Component, ctx }) {
    const isServer = !!ctx.req || !!ctx.res;
    const cookie = nextCookie(ctx);
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps, apollo, router } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Page>
          <Component {...pageProps} key={router.route} />
        </Page>
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);
