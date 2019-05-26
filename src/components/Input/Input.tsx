import React from 'react';

import { InputTag, InputWrapper } from './styles';

interface IInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  id: string;
  type: 'text' | 'checkbox' | 'radio' | 'email' | 'number' | 'password' | 'tel';
  label?: string;
  wrapperClassName?: string;
  forwardRef?:
    | ((instance: HTMLInputElement | null) => void)
    | React.RefObject<HTMLInputElement>
    | null;
}

export const Input: React.StatelessComponent<IInputProps> = ({
  id,
  type,
  label,
  wrapperClassName,
  forwardRef,
  ...restProps
}) => {
  if (type === 'checkbox') {
    return (
      <div className={wrapperClassName}>
        <InputTag id={id} type={type} ref={forwardRef as any} {...restProps} />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  } else if (
    type === 'text' ||
    type === 'number' ||
    type === 'email' ||
    type === 'password' ||
    type === 'tel'
  ) {
    return (
      <div className={wrapperClassName}>
        {label && <label htmlFor={id}>{label}</label>}
        <InputWrapper>
          <InputTag
            id={id}
            ref={forwardRef as any}
            type={type}
            {...restProps}
          />
        </InputWrapper>
      </div>
    );
  }
  return null;
};
