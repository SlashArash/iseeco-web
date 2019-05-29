import styled from 'styled-components';

import { colors } from 'utils/theme/colors';

interface IContainerProps {
  connected: boolean;
}

export const Container = styled('div')<IContainerProps>`
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${(props) =>
    props.connected ? colors.navyBlue : colors.red};
`;

export const Image = styled('img')`
  height: 50px;
  width: 100px;
  opacity: 0.8;
`;

export const TextContainer = styled('div')`
  flex-direction: row-reverse;
  justify-content: center;
`;

export const TextWrapper = styled('div')`
  justify-content: center;
`;

export const LightText = styled('p')`
  color: ${colors.light};
  font-size: 0.9rem;
`;

export const MainText = styled(LightText)`
  font-size: 1.2rem;
`;
