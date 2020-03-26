import React from 'react';
import Nav from './Nav';
import Link from 'next/link';

import styled from 'styled-components';

const Logo = styled.h1`
  font-size: 4rem;
  margin: 0 2rem;
  position: relative;
  z-index: 2;

  a {
    padding: 0.5rem 1rem;
    background: ${(props) => props.theme.orange};
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }
`;

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: center;
  align-items: center;
  .menu {
    display: flex;
    margin: 0 auto;
    justify-content: center;
  }
  border-bottom: 1px solid #eee;
`;
function Header() {
  return (
    <StyledHeader>
      <Logo>
        <Link href="/">
          <a>Logo</a>
        </Link>
      </Logo>

      <div className="menu">
        <Nav></Nav>
      </div>
    </StyledHeader>
  );
}

export default Header;
