import React from 'react';

import styled from 'styled-components';

const StyledPreviewSidebar = styled.aside`
  grid-area: rightsidebar;

  display: flex;
  flex-direction: column;

  padding: 20px;
`;

const StyledLogOutWrapper = styled.header`
  flex: 0 1 10%;
  margin-bottom: auto;
`;
const StyledInfoBoxWrapper = styled.main`
  flex: 0 1 85%;
`;

function Header() {
  return (
    <StyledPreviewSidebar>
      <StyledLogOutWrapper>
        <div>Logout</div>
      </StyledLogOutWrapper>
      <StyledInfoBoxWrapper>
        <div>Main Info</div>
      </StyledInfoBoxWrapper>
    </StyledPreviewSidebar>
  );
}

export default Header;
