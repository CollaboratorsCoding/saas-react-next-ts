import { NextPageContext } from 'next';
import React, { Component } from 'react';
import nextCookie from 'next-cookies';
import { redirectToLogin } from '@services/redirectService';
import { observer, inject } from 'mobx-react';

export function withAuth(WrappedComponent: any) {
  class InnerComp extends Component<any> {
    static async getInitialProps(ctx: any) {
      const user = ctx.mobxStore && ctx.mobxStore.userStore.me;
      if (!user) {
        redirectToLogin(ctx.res);
      }

      if (WrappedComponent.getInitialProps) {
        const wrappedProps = await WrappedComponent.getInitialProps();

        return { ...wrappedProps };
      }
      return {};
    }

    render() {
      const { userStore, ...pageProps } = this.props;
      return <WrappedComponent {...pageProps} />;
    }
  }
  return InnerComp;
}
