import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  padding: 40px 0 0;
  margin: 0 auto;

  P {
    margin: 0 10px;
    flex-grow: 1;
    text-align: right;
    color: #424141d9;
    font-weight: 600;
  }
  a {
    color: #4f3cc9;
  }
  @media (min-width: 960px) {
    margin: 0;
    flex-grow: 0;
    padding: 30px 30px 0;
    justify-content: flex-end;
  }
`;

type Props = { message: string; title: string; link: string };

function Nav({ message = '', title = '', link = '/' }: Props) {
  return (
    <StyledNav>
      <p>{message}</p>
      <Link href={link}>
        <a>{title}</a>
      </Link>
    </StyledNav>
  );
}

export default Nav;
