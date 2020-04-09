import React from 'react';
import styled from 'styled-components';

const StyledCenterContent = styled.div`
  display: flex;
  height: 80%;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 60%;
  }
`;

function Error() {
  return (
    <StyledCenterContent>
      <img src="/404.svg" alt="" />
    </StyledCenterContent>
  );
}

export default Error;
