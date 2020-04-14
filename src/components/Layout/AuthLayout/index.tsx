import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Meta from './Meta';
import AuthSidebar from './AuthSidebar';

type Props = { children: React.ReactNode };

const StyledContent = styled.section`
  @media (min-width: 960px) {
    flex-direction: column;
    flex: 1;
    overflow: auto;
  }
  display: flex;
  width: 100%;
  flex-direction: column-reverse;
`;

const StyledWrapper = styled.div`
  background: ${({ theme }) => theme.colors.lightgray};
  min-height: 100vh;
  @media (min-width: 960px) {
    flex-direction: row;
    overflow: hidden;
    display: flex;
  }
`;

function AuthLayout({ children }: Props): ReactElement {
  return (
    <>
      <Meta />
      <StyledWrapper>
        <AuthSidebar />
        <StyledContent>{children}</StyledContent>
      </StyledWrapper>
    </>
  );
}

export default AuthLayout;
