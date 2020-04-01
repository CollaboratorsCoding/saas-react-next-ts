import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const NavStyles = styled.div`
  grid-column: 2 / 5;
  display: flex;

  ul {
    display: flex;
    margin-left: auto;
    a {
      padding: 8px;
      font-size: 1rem;
      margin: 0 10px;
      font-weight: 600;
      color: ${(props) => props.theme.black};
      transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
      &:hover {
        color: ${(props) => props.theme.textgray};
      }
      &.signup {
        padding: 8px 22px;
        background-color: #fff;
        border-radius: 8px;
        color: ${(props) => props.theme.purple};
        box-shadow: ${(props) => props.theme.bs};
        transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
        position: relative;
        &:after {
          content: '';
          border-radius: 5px;
          position: absolute;
          z-index: 1;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;

          box-shadow: ${(props) => props.theme.bsHover};
          opacity: 0;
          transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        &:hover {
          &:after {
            opacity: 1;
          }
        }
      }
    }
  }
`;

function Nav() {
  return (
    <NavStyles>
      <ul>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/features">
          <a>Features</a>
        </Link>
        <Link href="/pricing">
          <a>Pricing</a>
        </Link>
        <Link href="/dashboard">
          <a>Dashboard</a>
        </Link>
        <Link href="/signup">
          <a className="signup">Sign up</a>
        </Link>
      </ul>
    </NavStyles>
  );
}

export default Nav;
