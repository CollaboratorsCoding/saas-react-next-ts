import { useStaticRendering } from 'mobx-react';
import UserStore from './stores/userStore';

const isServer = typeof window === 'undefined';

// eslint-disable-next-line react-hooks/rules-of-hooks
useStaticRendering(isServer);

let store: { userStore: any } | null = null;

export default function initializeStore(initialData: any) {
  if (isServer) {
    return {
      userStore: new UserStore(initialData && initialData.userStore),
    };
  }
  if (store === null) {
    store = {
      userStore: new UserStore(initialData && initialData.userStore),
    };
  }

  return store;
}
