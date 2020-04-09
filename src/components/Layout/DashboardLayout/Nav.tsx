import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { MdDashboard, MdShowChart, MdToday, MdSettings } from 'react-icons/md';

const StyledNav = styled.ul`
  display: flex;
  margin-left: auto;
  flex-direction: column;
  height: 100%;
  margin-top: 40px;
  align-items: center;

  a {
    display: flex;
    position: relative;
    width: 100%;

    margin: 20px 0;
    align-items: center;
    color: ${({ theme }) => theme.colors.textgray};
    font-weight: 600;

    svg {
      font-size: 2rem;
      transition: color 0.3s ease-out;
    }
    span {
      margin-left: 20px;
      transition: color 0.3s ease-out;
    }
    &:after {
      content: '';
      background: ${({ theme }) => theme.colors.purple};
      width: 0px;
      height: 0%;
      position: absolute;
      border-radius: 18px;
      right: -23px;
    }
    &:hover {
      :after {
        width: 3px;
        height: 100%;
      }
      svg {
        color: ${({ theme }) => theme.colors.purple};
      }
      span {
        color: ${({ theme }) => theme.colors.black};
      }
    }
  }
`;

function Nav(): ReactElement {
  return (
    <StyledNav>
      <Link href="/dashboard">
        <a>
          <MdDashboard />
          <span>Dashboard</span>
        </a>
      </Link>

      <Link href="/dashboard/calendar">
        <a>
          <MdToday />
          <span>Calendar</span>
        </a>
      </Link>

      <Link href="/dashboard/chart">
        <a>
          <MdShowChart />
          <span>Chart</span>
        </a>
      </Link>

      <Link href="/dashboard/settings">
        <a>
          <MdSettings />
          <span>Settings</span>
        </a>
      </Link>
    </StyledNav>
  );
}

export default Nav;
