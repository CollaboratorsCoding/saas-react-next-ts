import { NextPageContext } from 'next';

import { AppContext, AppInitialProps } from 'next/app';

import { IStore } from './store';
export interface IContextWithMobx extends NextPageContext {
  mobxStore: IStore;
}
