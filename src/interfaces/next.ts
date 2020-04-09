import { NextPageContext } from 'next';

import { IStore } from './store';
export interface IContextWithMobx extends NextPageContext {
  mobxStore: IStore;
}
