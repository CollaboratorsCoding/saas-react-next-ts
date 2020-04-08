import { useStaticRendering } from 'mobx-react';
import { IStore, IStoreInitialData } from '@interfaces/store';
import UserStore from './stores/userStore';

const isServer = typeof window === 'undefined';

// eslint-disable-next-line react-hooks/rules-of-hooks
useStaticRendering(isServer);

let store: IStore | null = null;

export default function initializeStore(initialData: IStoreInitialData | undefined) {
  if (isServer) {
    return {
      userStore: new UserStore(initialData?.userStore),
    };
  }
  if (store === null) {
    store = {
      userStore: new UserStore(initialData?.userStore),
    };
  }

  return store;
}
