import { NextPageContext } from 'next';
import React, { Component } from 'react';
import nextCookie from 'next-cookies';
import { redirectToLogin } from '@services/redirectService';
import { observer, inject } from 'mobx-react';

export function withAuth(WrappedComponent: any) {
  @inject('userStore')
  @observer
  class InnerComp extends Component<any> {
    static async getInitialProps(ctx: any) {
      console.log(ctx.mobxStore.userStore.user);
      const user =
        ctx.mobxStore &&
        !!ctx.mobxStore.userStore.user &&
        !!ctx.mobxStore.userStore.user.email;
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
