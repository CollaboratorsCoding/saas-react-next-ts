import React from 'react';
import Nav from './Nav';
import Link from 'next/link';

import styled from 'styled-components';

const StyledHeader = styled.header`
  grid-area: head;
  background: ${(props) => props.theme.lightgray};

  padding: 20px;
`;

const Logo = styled.div`
  grid-column: 1;
  display: flex;

  img {
    width: 100px;
  }
`;

const Container = styled.div`
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
      <Container>
        <Logo>
          <Link href="/">
            <a>
              <img src="/logo.svg" alt="Logo" />
            </a>
          </Link>
        </Logo>

        <Nav />
      </Container>
    </StyledHeader>
  );
}

export default Header;
