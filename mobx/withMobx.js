import React from 'react';
import initializeStore from './store';
const isServer = typeof window === 'undefined';
const __NEXT_MOBX_STORE__ = '__NEXT_MOBX_STORE__';

function getOrCreateStore(initialState) {
  if (isServer) {
    return initializeStore(initialState);
  }

  if (!window[__NEXT_MOBX_STORE__]) {
    window[__NEXT_MOBX_STORE__] = initializeStore(initialState);
  }
  return window[__NEXT_MOBX_STORE__];
}

export default (App) => {
  return class AppWithMobx extends React.Component {
    static async getInitialProps(appContext) {
      const mobxStore = getOrCreateStore();
      appContext.ctx.mobxStore = mobxStore;

      let appProps = {};
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext);
      }

      console.log(appContext.ctx.mobxStore);

      return {
        ...appProps,
        initialMobxState: appContext.ctx.mobxStore,
      };
    }

    constructor(props) {
      super(props);
      this.mobxStore = getOrCreateStore(props.initialMobxState);
    }

    render() {
      return <App {...this.props} mobxStore={this.mobxStore} />;
    }
  };
};
