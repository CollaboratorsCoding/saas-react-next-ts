import React from 'react';
import styled, { keyframes } from 'styled-components';

type Props = {
  width: number;
  height: number;
  color: string;
  sizeUnit: string;
};

const motion1 = () => keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const motion2 = () => keyframes`
   0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(19px, 0);
  }
`;
const motion3 = () => keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const EllipsisSpinner = styled.div`
  display: inline-block;
  position: relative;
  width: ${(p: Props) => `${p.width}${p.sizeUnit}`};
  height: ${(p: Props) => `${p.height}${p.sizeUnit}`};
  div {
    position: absolute;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: ${(p) => p.color};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  div:nth-child(1) {
    left: 6px;
    animation: ${(p: Props) => motion1()} 0.6s infinite;
  }
  div:nth-child(2) {
    left: 6px;
    animation: ${() => motion2()} 0.6s infinite;
  }
  div:nth-child(3) {
    left: 26px;
    animation: ${() => motion2()} 0.6s infinite;
  }
  div:nth-child(4) {
    left: 45px;
    animation: ${() => motion3()} 0.6s infinite;
  }
`;

const Ellipsis = ({ color, width, height, sizeUnit }: Props) => (
  <EllipsisSpinner
    color={color}
    width={width}
    height={height}
    sizeUnit={sizeUnit}>
    <div />
    <div />
    <div />
    <div />
  </EllipsisSpinner>
);

Ellipsis.defaultProps = {
  width: 60,
  height: 10,
  color: '#00bfff',
  sizeUnit: 'px',
};

export default Ellipsis;
