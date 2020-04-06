import React from 'react';
import styled from 'styled-components';
import { SubHeader, ExtraLargeHeader } from '@styles/Typography.styles';
import { Button } from '@styles/Buttons.styles';
import Link from 'next/link';
const Hero = styled.section`
  display: flex;
  flex-direction: column;
  width: 1140px;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  padding-top: 40px;
`;

const Image = styled.img`
  width: 70%;
`;
const IndexPage = () => (
  <Hero>
    <ExtraLargeHeader>Next Dashboard SaaS Application</ExtraLargeHeader>
    <SubHeader>
      Change the way you control, register and analyse information about your
      life
    </SubHeader>
    <Link href="/signup">
      <a>
        <Button>Get Started</Button>
      </a>
    </Link>
    <Image src="/dash.svg" alt="Logo" />
  </Hero>
);

export default IndexPage;
