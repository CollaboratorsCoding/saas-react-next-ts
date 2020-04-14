import React from 'react';
import { getIn, useField, FormikProps } from 'formik';
import styled from 'styled-components';

interface Props extends React.ComponentPropsWithoutRef<'input'> {
  label?: string;
  name: string;
  formik?: FormikProps<any>;
}

type StyleProps = {
  isError: boolean;
};

const StyledField = styled.div`
  margin: 0 0 15px;
`;
const StyledLabel = styled.label`
  display: block;
  font: bold 15px/24px 'Haas Grot Text R Web', 'Helvetica Neue', Helvetica,
    Arial, sans-serif;
  margin: 0 0 4px;
  color: #0d0c22;
`;

const StyledInput = styled.input`
  width: 100%;
  margin-bottom: 3px;
  border: ${(props: StyleProps) =>
    props.isError ? '1px solid rgba(234,76,137, 0.2)' : '1px solid #0000000f'};
  font-family: 'Haas Grot Text R Web', 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  box-sizing: border-box;
  height: 40px;
  padding: 10px 16px;
  outline: none;
  border-radius: 8px;
  transition: background-color 200ms ease, outline 200ms ease, color 200ms ease,
    box-shadow 200ms ease;
  appearance: none;
  color: #0d0c22;
  background-color: #eae7e852;
  :hover,
  :focus {
    background-color: #fff;
    border-color: rgba(0, 0, 0, 0.1);
    box-shadow: ${(props: StyleProps) =>
      props.isError
        ? '0 0 0 4px rgba(234,76,137, 0.1)'
        : '0 0 0 4px rgba(94, 129, 244, 0.1)'};
  }
`;

const ErrorText = styled.span`
  color: ${({ theme }) => {
    return theme.colors.red;
  }};
`;

function Input({ label, ...props }: Props) {
  const [field, meta] = useField(props);
  const isError = meta.touched && meta.error;
  return (
    <StyledField>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledInput isError={!!isError} {...field} {...props} />
      {isError ? <ErrorText>{meta.error}</ErrorText> : null}
    </StyledField>
  );
}

export default Input;
