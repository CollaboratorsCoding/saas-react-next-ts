import React from 'react';
import styled from 'styled-components';
import { withAuth } from '@HOC/withAuth';
const Hero = styled.section`
  display: flex;
  flex-direction: column;
  width: 1140px;
  justify-content: center;
  height: 100%;
  align-items: center;
  padding-top: 40px;
`;

const Image = styled.img`
  width: 70%;
`;
class SettingsPage extends React.Component<{}> {
  render() {
    return (
      <Hero>
        <Image src="/features.svg" alt="Logo" />
      </Hero>
    );
  }
}

export default withAuth(SettingsPage);
