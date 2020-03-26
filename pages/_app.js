import React from 'react';
import NextApp from 'next/app';
import Router from 'next/router';
import nextCookie from 'next-cookies';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';
import { PageTransition } from 'next-page-transitions';

// import Head from '@components/Head';
// import Loader from '@components/Loader';
import withApollo from '@services/apollo/withApollo';

const TIMEOUT = 400;

const theme = {
  colors: {
    primary: '#823eb7',
    lightGrey: '#f3f3f3',
  },
};

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    font-size: 16px;
    letter-spacing: -0.003em;
    line-height: 1.58;
  }
  .page-transition-enter {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }
  .page-transition-enter-active {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
  }
  .page-transition-exit {
    opacity: 1;
  }
  .page-transition-exit-active {
    opacity: 0;
    transition: opacity ${TIMEOUT}ms;
  }
  .loading-indicator-appear,
  .loading-indicator-enter {
    opacity: 0;
  }
  .loading-indicator-appear-active,
  .loading-indicator-enter-active {
    opacity: 1;
    transition: opacity ${TIMEOUT}ms;
  }
  pre:not(.prism-code) {
    background-color: #2f1e2e !important;
    border-radius: 4px;
    border-left: 4px solid #823eb7;
  }
  code {
    white-space: pre-wrap !important;
  }
  .token-line {
    line-height: 1.15 !important;
  }
  .highlight-line {
    background-color: #4f424c;
    display: block;
    margin-right: -20px;
    margin-left: -20px;
    padding-right: 20px;
    padding-left: 20px;
  }
`;

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
      <ThemeProvider theme={theme}>
        <ApolloProvider client={apollo}>
          <GlobalStyle />

          <PageTransition
            timeout={TIMEOUT}
            classNames="page-transition"
            loadingClassNames="loading-indicator"
            loadingComponent={<div>Loading...</div>}
            loadingDelay={500}
            loadingTimeout={{
              enter: TIMEOUT,
              exit: 0,
            }}>
            <Component {...pageProps} key={router.route} />
          </PageTransition>
        </ApolloProvider>
      </ThemeProvider>
    );
  }
}

export default withApollo(MyApp);
