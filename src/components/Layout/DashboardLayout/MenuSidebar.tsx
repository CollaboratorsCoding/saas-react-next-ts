import React from 'react';

import Nav from './Nav';
import NotificationBox from './NotificationBox';
import styled from 'styled-components';

const StyledMenuSidebar = styled.aside`
  grid-area: leftsidebar;
  background: ${({ theme }) => theme.colors.white};
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const StyledLogoWrapper = styled.header`
  flex: 0 1 10%;
  img {
    width: 80%;
    margin: auto;
  }
`;

const StyledNotifWrapper = styled.footer`
  flex: 0 1 20%;
  margin-top: auto;
`;

function Header() {
  return (
    <StyledMenuSidebar>
      <StyledLogoWrapper>
        <img src="/logo.svg" alt="Logo" />
      </StyledLogoWrapper>
      <Nav />
      <StyledNotifWrapper>
        <NotificationBox />
      </StyledNotifWrapper>
    </StyledMenuSidebar>
  );
}

export default Header;
