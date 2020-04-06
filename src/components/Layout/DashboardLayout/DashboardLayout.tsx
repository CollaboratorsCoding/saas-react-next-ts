import React, { ReactElement } from 'react';

import styled from 'styled-components';
import Meta from './Meta';
import MenuSidebar from './MenuSidebar';
import PreviewSidebar from './PreviewSidebar';

type Props = { children: React.ReactNode };

const Content = styled.section`
  grid-area: main;
  padding: 20px;
  background: ${({ theme }) => theme.colors.lightgray};
  display: flex;
`;

const Wrapper = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-columns: minmax(auto, 225px) 1fr minmax(auto, 300px);
  grid-template-rows: 1fr;
  justify-items: stretch;
  align-items: stretch;
  grid-template-areas:
    'leftsidebar main rightsidebar'
    'leftsidebar main rightsidebar'
    'leftsidebar main rightsidebar';
`;
function HomeLayout({ children }: Props): ReactElement {
  return (
    <>
      <Meta></Meta>
      <Wrapper>
        <MenuSidebar />
        <Content>{children}</Content>
        <PreviewSidebar />
      </Wrapper>
    </>
  );
}

export default HomeLayout;
