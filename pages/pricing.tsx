import React from 'react';
import styled from 'styled-components';
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
class PricingPage extends React.Component<{}> {
  render() {
    return (
      <Hero>
        <Image src="/card.svg" alt="Logo" />
      </Hero>
    );
  }
}

export default PricingPage;
