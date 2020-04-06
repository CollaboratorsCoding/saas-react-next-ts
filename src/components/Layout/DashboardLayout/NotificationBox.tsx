import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Button } from '@styles/Buttons.styles';

const StyledBox = styled.div`
  background: ${({ theme }) => theme.colors.lightgray};
  border-radius: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
  position: relative;
  padding: 20px;
  text-align: center;
  line-height: 17px;

  img {
    width: 63%;
    position: absolute;
    top: -60%;
  }
  button {
    margin-top: 20px;
  }
  .upgrade-label {
    margin-top: auto;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textgray};
  }
`;

function NotificationBox(): ReactElement {
  return (
    <StyledBox>
      <img src="/upgrade.svg" alt="" />
      <div className="upgrade-label">Upgrade to Paid for more features</div>
      <Button>Upgrade</Button>
    </StyledBox>
  );
}

export default NotificationBox;
