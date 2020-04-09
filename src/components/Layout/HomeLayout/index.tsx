import React, { ReactElement } from 'react';
import styled from 'styled-components';

import Header from './Header';
import Meta from './Meta';

type Props = { children: React.ReactNode };

const StyledContent = styled.section`
  grid-area: main;
  margin: 0 auto;
`;

const StyledWrapper = styled.div`
  background: ${(props) => props.theme.colors.lightgray};
  display: grid;
  min-height: 100vh;

  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-items: stretch;
  align-items: stretch;
  grid-template-areas:
    'head head head'
    'main main main';
`;
function HomeLayout({ children }: Props): ReactElement {
  return (
    <>
      <Meta></Meta>
      <StyledWrapper>
        <Header></Header>
        <StyledContent>{children}</StyledContent>
      </StyledWrapper>
    </>
  );
}

export default HomeLayout;
