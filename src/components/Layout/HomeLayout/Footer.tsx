import React from 'react';

import styled from 'styled-components';
// const Logo = styled.h1`
//   font-size: 4rem;
//   margin: 0 2rem;
//   position: relative;
//   z-index: 2;

//   a {
//     padding: 0.5rem 1rem;
//     background: ${(props) => props.theme.orange};
//     color: white;
//     text-transform: uppercase;
//     text-decoration: none;
//   }
// `;

const StyledFooter = styled.footer`
  grid-area: foot;
  border-bottom: 1px solid #eee;
  background: #eee;
`;
function Footer() {
  return (
    <StyledFooter>
      <div>Footer</div>
      {/* <Logo>
        <Link href="/">
          <a>Logo</a>
        </Link>
      </Logo>

      <div className="menu">
        <Nav></Nav>
      </div> */}
    </StyledFooter>
  );
}

export default Footer;
