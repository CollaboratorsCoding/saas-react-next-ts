import { ServerResponse } from 'http';
import Router from 'next/router';

export const redirectToLogin = (server?: ServerResponse) => {
  // add the redirected query param for debugging
  const login = '/?redirected=true';
  if (server) {
    server.writeHead(302, {
      Location: login,
    });
    server.end();
  } else {
    // only client side pages have access to next/router
    Router.push(login);
  }
};
