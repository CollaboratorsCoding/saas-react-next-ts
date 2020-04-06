import React from 'react';
import NextApp from 'next/app';
import withMobx from '../mobx/withMobx';
import { Provider } from 'mobx-react';
import axios from '@services/axios';
import NProgress from 'nprogress';
import Layout from '@components/layout/Layout';
import Router from 'next/router';
import { withAuth } from '@HOC/withAuth';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const routes = {
  '/': {},
  '/features': {},
  '/pricing': {},
  '/signup': {},
  '/dashboard': {
    auth: true,
  },
  '/dashboard/settings': {
    auth: true,
  },
};

class MyApp extends NextApp {
  static async getInitialProps({ Component, ctx }) {
    if (ctx && ctx.req) {
      axios.service.defaults.headers.common['cookie'] = ctx.req.headers.cookie
        ? ctx.req.headers.cookie
        : {};
    }
    if (!ctx.mobxStore.userStore.user && !ctx.mobxStore.userStore.checkedAuth) {
      await ctx.mobxStore.userStore.getMe();
    }

    let appProps = {};

    const currentRoute = ctx.pathname;
    const Page =
      routes[currentRoute] && routes[currentRoute].auth
        ? withAuth(Component)
        : Component;
    if (typeof Page.getInitialProps === 'function') {
      appProps = await Page.getInitialProps.call(Page, ctx);
    }

    return { ...appProps };
  }

  render() {
    const { Component, pageProps, router, mobxStore } = this.props;
    return (
      <Provider {...mobxStore}>
        <Layout currentRoute={router.route}>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </Provider>
    );
  }
}

export default withMobx(MyApp);
