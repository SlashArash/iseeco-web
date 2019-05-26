import styled, { css } from 'styled-components';

import { ripple, rotate } from 'utils/theme/animations';
import { colors, shadeColor } from 'utils/theme/colors';

const rippleAnimation = css`
  ${ripple} 1s ease-out;
`;

const rotateAnimation = css`
  ${rotate} 0.5s infinite linear;
`;

interface IButtonEleProps {
  size?: string;
  color?: string;
}

interface IButtonChildProps {
  loading?: boolean;
}

interface ISpinnerProps {
  color?: string;
}

export const ButtonWrapper = styled('div')`
  position: absolute;
`;

export const ButtonEle = styled('button')<IButtonEleProps>`
  flex: none;
  display: inline-flex;
  overflow: hidden;
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  text-align: center;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  align-items: center;
  border-style: solid;
  border-width: 1px;
  border-radius: 4px;
  letter-spacing: 0.5px;
  justify-content: center;
  cursor: pointer;
  color: ${(props) => {
    switch (props.color) {
      case 'purple-outline':
        return colors.purple;
      case 'red-outline':
        return colors.red;
      case 'blue-outline':
        return colors.blue;
      case 'red':
      case 'purple':
      case 'black':
      case 'blue':
        return '#fff';
      default:
        return colors.black;
    }
  }};
  padding: ${(props) => {
    switch (props.size) {
      case 'large':
        return '0.7rem 1.5rem';
      case 'small':
        return '0.4rem 0.8rem';
      default:
        return '0.5rem 1.2rem';
    }
  }};
  font-size: ${(props) => {
    switch (props.size) {
      case 'large':
        return '1.3rem';
      case 'small':
        return '0.8rem';
      default:
        return '1rem';
    }
  }};
  border-color: ${(props) => {
    switch (props.color) {
      case 'primary':
        return 'silver';
      case 'purple':
      case 'purple-outline':
        return colors.purple;
      case 'red':
      case 'red-outline':
        return colors.red;
      case 'blue':
      case 'blue-outline':
        return colors.blue;
      default:
        return colors.black;
    }
  }};
  background-color: ${(props) => {
    switch (props.color) {
      case 'black':
        return colors.black;
      case 'purple':
        return colors.purple;
      case 'red':
        return colors.red;
      case 'blue':
        return colors.blue;
      default:
        return '#fff';
    }
  }};

  &:after {
    content: '';
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    opacity: 0;
    position: absolute;
    transform: scale(1, 1) translate(-50%);
    background: rgba(255, 255, 255, 0.2);
    border-radius: 100%;
    transform-origin: 50% 50%;
  }
  &:focus:not(:active)::after {
    animation: ${rippleAnimation};
  }
  &:hover {
    color: ${(props) => {
      switch (props.color) {
        case 'primary':
          return colors.purple;
        default:
          return 'white';
      }
    }};
    background-color: ${(props) => {
      switch (props.color) {
        case 'black':
          return shadeColor(colors.black, -10);
        case 'purple':
          return shadeColor(colors.purple, -10);
        case 'red':
          return shadeColor(colors.red, -10);
        case 'blue':
          return shadeColor(colors.blue, -10);
        case 'red-outline':
          return colors.red;
        case 'purple-outline':
          return colors.purple;
        case 'blue-outline':
          return colors.blue;
        case 'black-outline':
          return colors.black;
        default:
          return 'whitesmoke';
      }
    }};
  }
  &:focus {
    color: ${(props) => {
      switch (props.color) {
        case 'purple-outline':
          return shadeColor(colors.purple, 10);
        case 'red-outline':
          return shadeColor(colors.red, 10);
        case 'blue-outline':
          return shadeColor(colors.blue, 10);
        case 'red':
        case 'purple':
        case 'black':
        case 'blue':
          return '#fff';
        default:
          return shadeColor(colors.black, 10);
      }
    }};
    background-color: ${(props) => {
      switch (props.color) {
        case 'black':
          return shadeColor(colors.black, 10);
        case 'purple':
          return shadeColor(colors.purple, 10);
        case 'red':
          return shadeColor(colors.red, 10);
        case 'blue':
          return shadeColor(colors.blue, 10);
        default:
          return '#fff';
      }
    }};
  }
  &[disabled] {
    color: silver;
    cursor: not-allowed;
    background: whitesmoke;
    border-color: silver;
  }
`;

export const A = ButtonEle.withComponent('a');

export const ButtonChild = styled('span')<IButtonChildProps>`
  display: flex;
  opacity: ${(props) => (props.loading ? 0 : 1)};
  transform: ${(props) => (props.loading ? 'scale(2.2)' : 'scale(1)')};
  transition: all 0.2s ease;
  align-items: center;
  justify-content: space-between;
`;

export const Spinner = styled('svg')<ISpinnerProps>`
  width: 18px;
  display: flex;
  position: relative;
  animation: ${rotateAnimation};
  & .path {
    fill: ${(props) => {
      switch (props.color) {
        case 'primary':
        case 'purple-outline':
          return colors.purple;
        case 'red-outline':
          return colors.red;
        case 'blue-outline':
          return colors.blue;
        case 'black-outline':
          return colors.black;
        default:
          return 'white';
      }
    }};
  }
`;
