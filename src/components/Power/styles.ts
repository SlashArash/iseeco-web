import styled from 'styled-components';

import { colors } from 'utils/theme/colors';

interface IIconProps {
  active: boolean;
}

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled('div')<IIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 1px solid ${(props) => (props.active ? colors.blue : colors.smoke)};
  background-color: ${(props) => (props.active ? colors.blue : '#ffffff')};
  padding: 1em;
`;

export const Image = styled('img')`
  width: 60px;
  height: 60px;
`;

export const LegendText = styled('div')`
  color: ${colors.black};
  font-size: 18px;
`;

export const Text = styled('div')`
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
`;
