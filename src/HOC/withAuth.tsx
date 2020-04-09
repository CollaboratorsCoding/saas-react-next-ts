import React, { Component } from 'react';
import { NextPage } from 'next';

import { redirectToLogin } from '@services/redirect.service';
import { IContextWithMobx } from '@interfaces/next';

export function withAuth(WrappedComponent: NextPage) {
  class InnerComp extends Component {
    static async getInitialProps(ctx: IContextWithMobx) {
      const user = ctx.mobxStore && ctx.mobxStore.userStore.me;

      if (!user) {
        redirectToLogin(ctx.res);
      }

      if (WrappedComponent.getInitialProps) {
        const pageProps = await WrappedComponent.getInitialProps(ctx);

        return { ...pageProps };
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
