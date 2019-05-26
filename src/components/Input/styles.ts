import styled, { css } from 'styled-components';

import { colors } from 'utils/theme/colors';
import { scaleUp, fadeIn } from 'utils/theme/animations';

interface IInputProps {
  color?: string;
  hasIcon?: boolean;
}

const scaleUpAnimation = css`
  ${scaleUp} 0.2s ease;
`;

const fadeInAnimation = css`
  ${fadeIn} 0.3s ease;
`;

export const InputWrapper = styled('div')`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
`;

export const InputTag = styled('input')<IInputProps>`
  padding: 0.5rem 0.7rem;
  font-size: 1rem;
  &::placeholder {
    font-weight: lighter !important;
  }
  &[type='text'],
  &[type='number'],
  &[type='email'],
  &[type='tel'],
  &[type='password'] {
    border: 1px solid #e2e2e2;
    border-radius: 0.35rem;
    position: relative;
    background-color: white;
    margin: 0.5rem 0;
    box-sizing: border-box;
  }
  &[type='text']:hover,
  &[type='number']:hover,
  &[type='email']:hover,
  &[type='tel']:hover,
  &[type='password']:hover {
    border-color: ${colors.blue};
  }
  &[type='text']:disabled,
  &[type='number']:disabled,
  &[type='email']:disabled,
  &[type='tel']:disabled,
  &[type='password']:disabled {
    //border: none;
    background: transparent;
  }
  &[type='checkbox'] {
    position: relative;
    display: none;
  }
  &[type='checkbox'] + label {
    color: ${(props) => (props.color ? props.color : '#888888')};
    position: relative;
    padding-left: 1rem;
    cursor: pointer;
    user-select: none;
  }
  &[type='checkbox'] + label:before {
    content: '';
    display: inline-block;
    vertical-align: text-top;
    width: 1.35rem;
    height: 1.35rem;
    background: white;
    border: 1px solid ${(props) => (props.color ? props.color : '#888888')};
    border-radius: 0.35rem;
    transition: 0.3s all ease;
  }
  &[type='text']:focus,
  &[type='number']:focus,
  &[type='email']:focus,
  &[type='tel']:focus,
  &[type='password']:focus {
    border-color: ${(props) => (props.color ? props.color : colors.blue)};
    box-shadow: 0 0 0 2px rgba(123, 168, 251, 0.3);
  }
  &[type='checkbox']:hover + label:before {
    border-color: ${(props) => (props.color ? props.color : colors.blue)};
    box-shadow: 0 0 0 2px rgba(123, 168, 251, 0.3);
  }
  &[type='checkbox']:focus + label:before {
    box-shadow: 0 2px 8px rgba(0, 202, 182, 0.4);
  }
  &[type='checkbox']:checked + label:before {
    transform-origin: center;
    animation: ${scaleUpAnimation};
    background: ${(props) => (props.color ? props.color : colors.blue)};
    border-color: ${(props) => (props.color ? props.color : colors.blue)};
  }
  &[type='checkbox']:checked + label:after {
    transform-origin: center;
    animation: ${fadeInAnimation};
    content: '';
    display: block;
    position: absolute;
    right: 0.5rem;
    top: 0.27rem;
    width: 0.4rem;
    height: 0.74rem;
    border: solid white;
    border-width: 0 0.13em 0.13em 0;
    transform: rotate(45deg);
  }
  &[type='checkbox']:disabled + label {
    color: #b8b8b8;
    cursor: auto;
  }
  &[type='checkbox']:disabled + label:before {
    background: silver;
    border-color: silver;
  }
  &::placeholder {
    font-weight: bolder;
  }
`;
