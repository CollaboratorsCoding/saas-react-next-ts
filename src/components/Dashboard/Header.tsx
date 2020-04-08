import React from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { IUserMe } from '@interfaces/store/user/';
const StyledHeader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledWelcome = styled.div`
  background: ${({ theme }) => theme.colors.rose};
  padding: 60px 20px;
  border-radius: 8px;
  position: relative;

  .welcome-header {
    color: ${({ theme }) => theme.colors.red};
    font-size: 1.5rem;
    font-weight: 600;
  }
  .welcome-content {
    color: ${({ theme }) => theme.colors.lightblack};
  }
  img {
    position: absolute;

    height: 110%;
    right: 0;
    bottom: 0;
  }
`;
const StyledTopHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  .header-label {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.black};
  }
  .right-section {
    margin-left: auto;
    display: flex;
    align-items: center;
    .date {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.textgray};
    }
    .search {
      margin-left: 30px;
      background: ${({ theme }) => theme.colors.purple};
      display: flex;
      padding: 5px;
      border-radius: 8px;
      svg {
        color: ${({ theme }) => theme.colors.white};
        font-size: 1.5rem;
        margin: auto;
      }
    }
  }
`;

type Props = { me: IUserMe };

function Header({ me }: Props) {
  return (
    <StyledHeader>
      <StyledTopHeader>
        <div className="header-label">Dashboard</div>
        <div className="right-section">
          <span className="date">{new Date().toISOString().slice(0, 10)}</span>
          <div className="search">
            <MdSearch />
          </div>
        </div>
      </StyledTopHeader>
      <StyledWelcome>
        <div className="welcome-header">Welcome back, {me.email}</div>
        <div className="welcome-content">
          Since your last visit your app quick stats:
        </div>
        <img src="/nature.svg" alt="" />
      </StyledWelcome>
    </StyledHeader>
  );
}

export default Header;
