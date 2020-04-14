import React from 'react';
import { Button } from '@styles/Buttons.styles';
import Ellipsis from '@components/Ellipsis';

type NameType = 'danger' | 'success' | 'warning';

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  loading?: boolean;
  children: React.ReactNode;
  name?: NameType;
}

function MyButton({ loading = false, children, ...rest }: Props) {
  return (
    <Button {...rest}>
      {loading ? <Ellipsis color="#f5f5fb" /> : children}
    </Button>
  );
}

export default MyButton;
