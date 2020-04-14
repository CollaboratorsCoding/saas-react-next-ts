import React, { ReactElement } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledSidebar = styled.section`
  position: relative;
  background: ${({ theme }) => theme.colors.lightgray};

  @media (min-width: 960px) {
    width: 450px;
    background: #9698d659;
  }
  @media (min-width: 1100px) {
    width: 514px;
  }
`;

const StyledContent = styled.div`
  @media (min-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
`;

const StyledHeader = styled.header`
  max-width: 100%;
  padding: 40px 40px 30px;
  text-align: left;
  h1 {
    display: block;
    padding-right: 30px;
    color: #484848e0;
    font: bold 32px/38px 'Haas Grot Text R Web', 'Helvetica Neue', Helvetica,
      Arial, sans-serif;
  }
  @media (max-width: 960px) {
    width: 90%;
    max-width: 415px;
    padding: 48px 0px 0;
    margin: 0 auto;
    h1 {
      display: none;
    }
  }
  text-align: left;
`;

const StyledBottom = styled.div`
  @media (min-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
`;

const Image = styled.img`
  @media (min-width: 960px) {
    display: block;
  }
  display: none;
  width: 95%;
`;

const StyledLogo = styled.div`
  display: block;
  margin-bottom: 30px;
  img {
    width: 100px;
  }
`;

function AuthSidebar(): ReactElement {
  return (
    <StyledSidebar>
      <StyledContent>
        <StyledHeader>
          <StyledLogo>
            <Link href="/">
              <a>
                <img src="/logo.svg" alt="Logo" />
              </a>
            </Link>
          </StyledLogo>
          <h1>
            Change the way you control, register and analyse information about
            your life
          </h1>
        </StyledHeader>
        <StyledBottom>
          <Image src="/auth.svg"></Image>
        </StyledBottom>
      </StyledContent>
    </StyledSidebar>
  );
}

export default AuthSidebar;
