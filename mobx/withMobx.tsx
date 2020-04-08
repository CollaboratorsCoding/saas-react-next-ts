import React from 'react';
import initializeStore from './store';
import axios from '@services/axios';
import { withAuth } from '@HOC/withAuth';
import { IStore, IStoreInitialData } from '@interfaces/store';
const isServer = typeof window === 'undefined';
import {AppContext} from 'next/app';
import { NextPage } from 'next';

type Route ={ [key: string]: {authRequired?: boolean} };
const routes = {
  '/': {},
  '/features': {},
  '/pricing': {},
  '/signup': {},
  '/dashboard': {
    authRequired: true,
  },
  '/dashboard/settings': {
    authRequired: true,
  },
} as Route;

function getOrCreateStore(initialState?: IStoreInitialData|undefined): IStore {
  if (isServer) {
    return initializeStore(initialState);
  }

  
  if (!window.__NEXT_MOBX_STORE__) {
 
    window.__NEXT_MOBX_STORE__ = initializeStore(initialState);
  }
  return window.__NEXT_MOBX_STORE__;
}

export default (App: any) => {
  return class AppWithMobx extends React.Component {
    private mobxStore: IStore | undefined
    static async getInitialProps(appContext: AppContext) {
      const mobxStore = getOrCreateStore();

      const { req, pathname } = appContext.ctx;

      // FETCH CURRENT USER FROM SERVER
      if (req) {
        axios.service.defaults.headers.common['cookie'] = req.headers.cookie
          ? req.headers.cookie
          : {};
      }
      if (!mobxStore.userStore.currentUser && !mobxStore.userStore.checkedAuth) {
        await mobxStore.userStore.getMe();
      }

      let appProps = {};
      // CHECK IF THIS PAGE IS ONLY FOR AUTH
      const Page =
        routes[pathname] && routes[pathname].authRequired
          ? withAuth(appContext.Component)
          : appContext.Component;

      // FETCH PAGE INITIAL DATA FOR SSR
      if (typeof Page.getInitialProps === 'function') {
        const pageContext =  {...appContext.ctx, mobxStore};
      
        appProps = await Page.getInitialProps(pageContext);
      }

      return {
        ...appProps,
        initialMobxState: mobxStore,
      };
    }

    constructor(props:any) {
      super(props);
      this.mobxStore = getOrCreateStore(props.initialMobxState);
    }

    render() {
      return <App {...this.props} mobxStore={this.mobxStore} />;
    }
  };
};
