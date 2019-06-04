import styled from 'styled-components';

import { colors } from 'utils/theme/colors';

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export const Image = styled('img')`
  width: 35px;
  height: 35px;
`;
