import React from 'react';

import styled from 'styled-components';

const StyledPreviewSidebar = styled.aside`
  grid-area: rightsidebar;

  display: flex;
  flex-direction: column;

  padding: 20px;
`;

const LogOutWrapper = styled.header`
  flex: 0 1 10%;
  margin-bottom: auto;
`;
const InfoBoxWrapper = styled.main`
  flex: 0 1 85%;
`;

function Header() {
  return (
    <StyledPreviewSidebar>
      <LogOutWrapper>
        <div>Logout</div>
      </LogOutWrapper>
      <InfoBoxWrapper>
        <div>Main Info</div>
      </InfoBoxWrapper>
    </StyledPreviewSidebar>
  );
}

export default Header;
