import React, { Component } from 'react';
import { redirectToLogin } from '@services/redirectService';
import { IContextWithMobx } from '@interfaces/next';
import { NextPage } from 'next';

export function withAuth(WrappedComponent: NextPage) {
  class InnerComp extends Component {
    static async getInitialProps(ctx: IContextWithMobx) {
      const user = ctx.mobxStore && ctx.mobxStore.userStore.me;
      if (!user) {
        redirectToLogin(ctx.res);
      }

      if (WrappedComponent.getInitialProps) {
        const wrappedProps = await WrappedComponent.getInitialProps(ctx);

        return { ...wrappedProps };
      }
      return {};
    }

    render() {
      const { ...pageProps } = this.props;
      return <WrappedComponent {...pageProps} />;
    }
  }
  return InnerComp;
}
