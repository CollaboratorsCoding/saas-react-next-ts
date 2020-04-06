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

const LogoWrapper = styled.header`
  flex: 0 1 10%;

  img {
    width: 80%;
    margin: auto;
  }
`;
const NavWrapper = styled.nav`
  margin-top: 40px;
`;
const NotifWrapper = styled.footer`
  flex: 0 1 20%;
  margin-top: auto;
`;

function Header() {
  return (
    <StyledMenuSidebar>
      <LogoWrapper>
        <img src="/logo.svg" alt="Logo" />
      </LogoWrapper>
      <NavWrapper>
        <Nav />
      </NavWrapper>
      <NotifWrapper>
        <NotificationBox />
      </NotifWrapper>
    </StyledMenuSidebar>
  );
}

export default Header;
