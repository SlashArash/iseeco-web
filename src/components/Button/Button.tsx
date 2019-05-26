import * as React from 'react';

import { A, ButtonChild, ButtonEle, Spinner, ButtonWrapper } from './styles';

const preventClick = (e: React.MouseEvent) => {
  e.preventDefault();
};

export interface IButtonProps {
  children: React.ReactNode | string;
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  href?: string;
  loading?: boolean;
  color?: string;
  size?: 'large' | 'medium' | 'small';
  type?: 'button' | 'reset' | 'submit';
  style?: React.CSSProperties;
}

export const Button: React.StatelessComponent<IButtonProps> = ({
  children,
  color,
  href,
  loading,
  onClick,
  disabled,
  ...props
}) => {
  return href ? (
    <A
      href={href}
      color={color}
      onClick={loading || disabled ? preventClick : onClick}
      {...props}
    >
      {loading && (
        <ButtonWrapper>
          <Spinner color={color} viewBox="0 0 128 128">
            <path
              className="path"
              d="M75.4 126.6a11.4 11.4 0 0 1-2.1-22.6 40.9 40.9 0 0 0 30.5-30.6 11.4 11.4 0 1 1 22.3 4.9h0a63.8 63.8 0 0 1-47.8 48.1v0a11.4 11.4 0 0 1-2.9z"
            />
          </Spinner>
        </ButtonWrapper>
      )}
      <ButtonChild loading={loading}>{children}</ButtonChild>
    </A>
  ) : (
    <ButtonEle
      color={color}
      onClick={loading ? preventClick : onClick}
      disabled={disabled}
      {...props}
    >
      {loading && (
        <ButtonWrapper>
          <Spinner color={color} viewBox="0 0 128 128">
            <path
              className="path"
              d="M75.4 126.6a11.4 11.4 0 0 1-2.1-22.6 40.9 40.9 0 0 0 30.5-30.6 11.4 11.4 0 1 1 22.3 4.9h0a63.8 63.8 0 0 1-47.8 48.1v0a11.4 11.4 0 0 1-2.9z"
            />
          </Spinner>
        </ButtonWrapper>
      )}
      <ButtonChild loading={loading}>{children}</ButtonChild>
    </ButtonEle>
  );
};

Button.defaultProps = {
  color: 'purple',
  size: 'medium',
  type: 'button',
};
