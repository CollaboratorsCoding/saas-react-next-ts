import React from 'react';
import Header from './Header';
import Meta from './Meta';
import GlobalReset from '../styles/GlobalReset';
import styled, { ThemeProvider } from 'styled-components';

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  orange: '#D9BDE6',
  lightViolet: '#5A77E8',
  backgroundColor: '#FFF',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0,0,0,0.09)',
};

const Content = styled.section`
  margin: 0 auto;
  padding: 2rem;
`;

const Wrapper = styled.div`
  background: #355c7d;
  background: -webkit-linear-gradient(to right, #c06c84, #6c5b7b, #355c7d);
  background: linear-gradient(to right, #c06c84, #6c5b7b, #355c7d);
  display: grid;
  min-height: 100vh;
  grid-template-columns: auto;
  grid-template-rows: 100px 1fr;
`;

type PageProps = { children: React.ReactNode };

const Page = ({ children }: PageProps) => (
  <ThemeProvider theme={theme}>
    <GlobalReset></GlobalReset>
    <Meta></Meta>
    <Wrapper>
      <Header></Header>
      <Content> {children}</Content>
    </Wrapper>
  </ThemeProvider>
);
export default Page;
