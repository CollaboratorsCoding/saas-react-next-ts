import React from 'react';

import DashboardLayout from '@components/layout/DashboardLayout';
import HomeLayout from '@components/layout/HomeLayout';
import GlobalReset from '@styles/GlobalReset.styles';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import { getRootRoute } from '@utils/routeUtils';

const theme: DefaultTheme = {
  colors: {
    blue: '#5e81f4',
    darkblue: '#4d4cac',
    lightpurple: '#9698d6',
    purple: '#6c63ff',
    white: '#FFF',
    lightergray: '#f5f5f7',
    lightgray: '#f5f5fb',
    textgray: '#c7c7da',
    black: '#2f2f3a',
    lightblack: '#3A3A3A',
    red: '#ff6471',
    rose: '#f7e5e9',
    green: '#2ecc71',
    yellow: '#f39c12',
  },
  maxWidth: '1000px',
  bs: '0px 1px 2px 0px rgba(204, 204, 204, 0.3);',
  bsHover: '0px 2px 4px 2px rgba(204, 204, 204, 0.4);',
};

type PageProps = { children: React.ReactNode; currentRoute: string };

const Layout = ({ children, currentRoute }: PageProps) => {
  let Layout = HomeLayout;
  const rootRoute = getRootRoute(currentRoute);
  if (rootRoute === 'dashboard') {
    Layout = DashboardLayout;
  }
  // EXAMPLE
  // if (rootRoute === 'signup') {
  //   Layout = AuthLayout;
  // }
  return (
    <ThemeProvider theme={theme}>
      <GlobalReset />
      <Layout>{children}</Layout>
    </ThemeProvider>
  );
};

export default Layout;
