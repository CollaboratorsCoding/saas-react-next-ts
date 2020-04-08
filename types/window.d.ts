import {IStore} from '@interfaces/store'
export declare global {
  interface Window {
    // add you custom properties and methods
    __NEXT_MOBX_STORE__: IStore | undefiend
  }
}