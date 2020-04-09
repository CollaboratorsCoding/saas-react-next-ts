export const getRootRoute = (route: string): string | void => {
  const splitRoute = route.split('/');
  if (splitRoute && splitRoute.length) {
    return splitRoute[1] || '/';
  }
};

export const isServer = typeof window === 'undefined';
