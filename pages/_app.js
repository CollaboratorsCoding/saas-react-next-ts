import React from 'react';
import NextApp from 'next/app';
import NProgress from 'nprogress';
import Layout from '@components/Layout/Layout';
import Router from 'next/router';
import withMobx from '../mobx/withMobx';
import { Provider } from 'mobx-react';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};
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
    const { Component, pageProps, router, mobxStore } = this.props;
    return (
      <Provider {...mobxStore}>
        <Layout isDashboard={router.route === '/dashboard'}>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </Provider>
    );
  }
}

export default withMobx(MyApp);
