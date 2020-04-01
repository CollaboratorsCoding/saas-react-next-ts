import React, { ReactElement } from 'react';

import styled from 'styled-components';

type Props = { children: React.ReactNode };

const Content = styled.section`
  grid-area: main;
  margin: 0 auto;
  padding: 2rem;
`;

const Wrapper = styled.div`
  background: ${(props) => props.theme.lightergray};
  display: grid;
  min-height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr 100px;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-items: stretch;
  align-items: stretch;
  grid-template-areas:
    'head head head'
    'main main main'
    'foot foot foot';
`;
function HomeLayout({ children }: Props): ReactElement {
  return <>{children}</>;
}

export default HomeLayout;
