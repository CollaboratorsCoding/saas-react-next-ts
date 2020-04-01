import React from 'react';
import NextApp from 'next/app';
import withMobx from '../mobx/withMobx';
import { Provider } from 'mobx-react';
import axios from '@services/axios';
import NProgress from 'nprogress';
import Layout from '@components/Layout/Layout';
import Router from 'next/router';

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
    const { Component, pageProps, router, mobxStore } = this.props;

    const rootRoutePath = router.route.split('/')[1];

    return (
      <Provider {...mobxStore}>
        <Layout isDashboard={rootRoutePath === 'dashboard'}>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </Provider>
    );
  }
}

export default withMobx(MyApp);
