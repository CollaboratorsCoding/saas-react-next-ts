import React from 'react';
import { AppProps } from 'next/app';
import withMobx from '../mobx/withMobx';
import { Provider } from 'mobx-react';
import NProgress from 'nprogress';
import Layout from '@components/layout/Layout';
import Router from 'next/router';
import { IStore } from '@interfaces/store';

Router.events.on('onRouteChangeStart', () => {
  NProgress.start();
});
Router.events.on('onRouteChangeComplete', () => {
  NProgress.done();
});
Router.events.on('onRouteChangeError', () => {
  NProgress.done();
});

function MyApp({
  Component,
  pageProps,
  mobxStore,
  router,
}: AppProps & { mobxStore: IStore }) {
  return (
    <Provider {...mobxStore}>
      <Layout currentRoute={router.route}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </Provider>
  );
}

export default withMobx(MyApp);
