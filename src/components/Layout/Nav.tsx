import React from 'react';
import Link from 'next/link';
import { observer, inject } from 'mobx-react';
import NavStyles from '../styles/NavStyles';
function Nav(props: any) {
  return (
    <NavStyles>
      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/secure">
        <a>
          {props.userStore.user && props.userStore.user.email
            ? props.userStore.user.email
            : 'Secure'}
        </a>
      </Link>
    </NavStyles>
  );
}

export default inject('userStore')(observer(Nav));
