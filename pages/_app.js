import React from 'react';
import NextApp from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import { inject } from 'mobx-react';
import Page from '@components/Layout/Page';
import withApollo from '@services/apollo/withApollo';
import withMobx from '../mobx/withMobx';
import { Provider } from 'mobx-react';
class MyApp extends NextApp {
  static async getInitialProps({ Component, ctx }) {
    if (!ctx.mobxStore.userStore.user) {
      await ctx.mobxStore.userStore.fetchUser(
        ctx.req ? { cookie: ctx.req.headers.cookie } : undefined
      );
    }

    let appProps = {};
    if (typeof Component.getInitialProps === 'function') {
      appProps = await Component.getInitialProps.call(Component, ctx);
    }

    return { ...appProps };
  }

  render() {
    const { Component, pageProps, apollo, router, mobxStore } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Provider {...mobxStore}>
          <Page>
            <Component {...pageProps} key={router.route} />
          </Page>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default withApollo(withMobx(MyApp));
