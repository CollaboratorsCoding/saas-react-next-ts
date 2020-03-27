import { NextPageContext } from 'next';
import React, { Component } from 'react';
import nextCookie from 'next-cookies';
import { redirectToLogin } from '@services/redirectService';

export function withAuth(WrappedComponent: any) {
  return class extends Component {
    static async getInitialProps(ctx: NextPageContext, user: any) {
      console.log('initialprops in withAuth');
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
      const { ...pageProps } = this.props;

      return <WrappedComponent {...pageProps} />;
    }
  };
}
