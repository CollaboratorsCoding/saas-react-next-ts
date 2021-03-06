import styled, { DefaultTheme } from 'styled-components';
import { darken } from 'polished';

const getColor = ({
  theme,
  color,
  name,
}: {
  theme: DefaultTheme;
  color?: string;
  name?: string;
}) => {
  if (color) return color;
  switch (name) {
    case 'danger':
      return theme.colors.red;
    case 'success':
      return theme.colors.green;
    case 'warning':
      return theme.colors.yellow;
    default:
      return theme.colors.purple;
  }
};

export const Button = styled.button`
  background: ${({ color, theme, name }) => {
    return getColor({ color, theme, name });
  }};
  color: white;
  font-weight: 600;
  border: 0;
  border-radius: 0;
  text-transform: uppercase;
  font-size: 1rem;
  padding: 0.8rem 1.5rem;
  display: inline-block;
  transition: all 0.5s;
  &[disabled] {
    opacity: 0.5;
  }
  border-radius: 8px;

  &:hover {
    cursor: pointer;
    background: ${({ color, theme, name }) => {
      return darken(0.06, getColor({ color, theme, name }));
    }};
  }
  &:active,
  &:focus {
    outline: none;
  }
`;
