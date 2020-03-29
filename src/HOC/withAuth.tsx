import { NextPageContext } from 'next';
import React, { Component } from 'react';
import nextCookie from 'next-cookies';
import { redirectToLogin } from '@services/redirectService';
import { observer, inject } from 'mobx-react';
const isServer = typeof window === 'undefined';
export function withAuth(WrappedComponent: any) {
  @inject('store')
  @observer
  class InnerComp extends Component<any> {
    static async getInitialProps(ctx: any) {
      if (isServer) {
        const user =
          ctx.mobxStore && !!ctx.mobxStore.user && !!ctx.mobxStore.user.email;
        if (!user) {
          redirectToLogin(ctx.res);
        }
      }
      if (WrappedComponent.getInitialProps) {
        const wrappedProps = await WrappedComponent.getInitialProps();

        return { ...wrappedProps };
      }
      return {};
    }

    render() {
      const { store, ...pageProps } = this.props;

      if ((!isServer && !store.user) || !store.user.email) redirectToLogin();
      return <WrappedComponent {...pageProps} />;
    }
  }
  return InnerComp;
}
