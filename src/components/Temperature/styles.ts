import styled from 'styled-components';

import { colors } from 'utils/theme/colors';

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border: 1px solid ${colors.smoke};
  padding: 0.5em;
`;
export const MainNumber = styled('div')`
  color: ${colors.black};
  font-size: 45px;
`;
export const ArrowNumbers = styled('div')`
  color: ${colors.smoke};
  font-size: 28px;
`;
