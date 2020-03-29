import React from 'react';
import { initializeStore } from './store';
import fetch from 'isomorphic-unfetch';
const isServer = typeof window === 'undefined';
const __NEXT_MOBX_STORE__ = '__NEXT_MOBX_STORE__';

async function getOrCreateStore(initialState, ctx) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer && ctx) {
    const res = await fetch('http://localhost:3000/auth/me', {
      credentials: 'include',
      headers: ctx.req ? { cookie: ctx.req.headers.cookie } : undefined,
    });
    const user = await res.json();
    return initializeStore(isServer, user.data);
  }

  // Create store if unavailable on the client and set it on the window object

  if (!window[__NEXT_MOBX_STORE__]) {
    window[__NEXT_MOBX_STORE__] = initializeStore(initialState);
  }
  return window[__NEXT_MOBX_STORE__];
}

export default (App) => {
  return class AppWithMobx extends React.Component {
    static async getInitialProps(appContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const mobxStore = await getOrCreateStore({}, appContext.ctx);
      // Provide the store to getInitialProps of pages
      appContext.ctx.mobxStore = mobxStore;

      let appProps = {};
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps.call(App, appContext);
      }

      return {
        ...appProps,
        initialMobxState: mobxStore,
      };
    }

    constructor(props) {
      super(props);

      this.mobxStore = initializeStore(isServer, props.initialMobxState.user);
    }

    render() {
      return <App {...this.props} mobxStore={this.mobxStore} />;
    }
  };
};
