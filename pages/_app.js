import React from 'react';
import NextApp from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import Page from '@components/Layout/Page';
import withApollo from '@services/apollo/withApollo';
import withMobx from '../mobx/withMobx';
import { Provider } from 'mobx-react';

import axios from '@services/axios';
class MyApp extends NextApp {
  static async getInitialProps({ Component, ctx }) {
    if (ctx && ctx.req) {
      axios.service.defaults.headers.common['cookie'] = ctx.req.headers.cookie
        ? ctx.req.headers.cookie
        : {};
    }
    if (!ctx.mobxStore.userStore.user && !ctx.mobxStore.userStore.checkedAuth) {
      await ctx.mobxStore.userStore.setUser();
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
