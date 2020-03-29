import React from 'react';
import NextApp from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import Page from '@components/Layout/Page';
import withApollo from '@services/apollo/withApollo';
import fetch from 'isomorphic-unfetch';
import withMobx from '../mobx/withMobx';
import { Provider } from 'mobx-react';
class MyApp extends NextApp {
  render() {
    const { Component, pageProps, apollo, router, mobxStore } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <Provider store={mobxStore}>
          <Page>
            <Component {...pageProps} key={router.route} />
          </Page>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default withApollo(withMobx(MyApp));
