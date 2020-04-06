import React, { ReactElement } from 'react';

import styled from 'styled-components';
import Meta from './Meta';
import MenuSidebar from './MenuSidebar';
import PreviewSidebar from './PreviewSidebar';

type Props = { children: React.ReactNode };

const StyledContent = styled.section`
  grid-area: main;
  padding: 20px;
  background: ${({ theme }) => theme.colors.lightgray};
  display: flex;
`;

const StyledWrapper = styled.div`
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
function DashboardLayout({ children }: Props): ReactElement {
  return (
    <>
      <Meta></Meta>
      <StyledWrapper>
        <MenuSidebar />
        <StyledContent>{children}</StyledContent>
        <PreviewSidebar />
      </StyledWrapper>
    </>
  );
}

export default DashboardLayout;
