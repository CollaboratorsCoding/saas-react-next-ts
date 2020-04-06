import React from 'react';
import Nav from './Nav';
import Link from 'next/link';

import styled from 'styled-components';

const StyledHeader = styled.header`
  grid-area: head;
  background: ${(props) => props.theme.colors.lightgray};

  padding: 20px;
`;

const StyledLogo = styled.div`
  grid-column: 1;
  display: flex;

  img {
    width: 100px;
  }
`;

const StyledContainer = styled.div`
  width: 1140px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 0 auto;
  @media (max-width: 1200px) {
    width: 960px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledLogo>
          <Link href="/">
            <a>
              <img src="/logo.svg" alt="Logo" />
            </a>
          </Link>
        </StyledLogo>
        <Nav />
      </StyledContainer>
    </StyledHeader>
  );
}

export default Header;
