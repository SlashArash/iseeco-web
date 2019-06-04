import styled from 'styled-components';

import { colors } from 'utils/theme/colors';

interface IQuarterProps {
  active: boolean;
}

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Icon = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid ${colors.smoke};
  padding: 1em;
`;

export const Image = styled('src')`
  width: 35px;
  height: 35px;
  z-index: 6;
`;

export const SpeedWrapper = styled('div')`
  position: absolute;
  width: 60px;
  height: 60px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Quarter = styled('div')<IQuarterProps>`
  width: 28px;
  height: 28px;
  z-index: 4;
  margin: 1px;
  background-color: ${(props) => (props.active ? colors.blue : '#ffffff')};
`;

export const TopLeft = styled(Quarter)`
  border-top-left-radius: 60px;
`;

export const TopRight = styled(Quarter)`
  border-top-right-radius: 60px;
`;

export const BottomLeft = styled(Quarter)`
  border-bottom-left-radius: 60px;
`;

export const BottomRight = styled(Quarter)`
  border-bottom-right-radius: 60px;
`;

export const FillCircle = styled('div')`
  background-color: #ffffff;
  position: absolute;
  width: 53px;
  height: 53px;
  border-radius: 27px;
  z-index: 5;
`;
