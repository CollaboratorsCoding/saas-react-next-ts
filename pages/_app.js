import React from 'react';
import NextApp from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import Page from '@components/Layout/Page';
import withApollo from '@services/apollo/withApollo';
import fetch from 'isomorphic-unfetch';

class MyApp extends NextApp {
  static async getInitialProps({ Component, ctx, router }) {
    const isServer = !!ctx.req || !!ctx.res;

    // if (!cookie.Authorization && router.route === '/secure' && isServer) {
    //   ctx.res.redirect('/');
    let user;
    if (isServer) {
      const res = await fetch('http://localhost:3000/auth/me', {
        credentials: 'include',
        headers: ctx.req ? { cookie: ctx.req.headers.cookie } : undefined,
      });
      user = await res.json();

      // console.log(data);
    }

    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx, user)
      : {};

    return { pageProps, user };
  }
  componentDidMount() {
    // console.log(this.props.user);
  }

  render() {
    const { Component, pageProps, apollo, router } = this.props;
    console.log('render in app');
    return (
      <ApolloProvider client={apollo}>
        <Page>
          <Component {...pageProps} key={router.route} />
        </Page>
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);
