import React from 'react';
import Link from 'next/link';
import NavStyles from '../styles/NavStyles';
function Nav() {
  return (
    <NavStyles>
      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/secure">
        <a>Secure</a>
      </Link>
    </NavStyles>
  );
}

export default Nav;
