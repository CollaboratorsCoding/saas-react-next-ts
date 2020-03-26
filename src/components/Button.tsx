import React from 'react';
import styled from 'styled-components';

type TestButtonProps = {
  name: string;
};

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const TestButton = ({ name }: TestButtonProps) => {
  return <Button>{name}</Button>;
};

export default TestButton;
