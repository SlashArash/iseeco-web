import styled from 'styled-components';

import { colors } from 'utils/theme/colors';

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Circle = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  padding: 2em;
  border: 1px solid ${colors.smoke};
  border-radius: 50%;
  color: ${colors.black};
`;

export const Label = styled('p')`
  font-size: 14px;
`;
