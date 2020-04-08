import { NextPageContext } from 'next';
import { ApolloClient } from 'apollo-client';

import { IStore } from './store';
export interface IContextWithMobx extends NextPageContext {
  mobxStore: IStore;
}

export interface IContextWithApollo extends NextPageContext {
  ApolloClient: ApolloClient<any>;
}
