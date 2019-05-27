import styled from 'styled-components';

import { colors } from 'utils/theme/colors';
import { Input } from 'components/Input';

export const LoginWrapper = styled.div`
  flex: 1;
  display: flex;
  background: #dde6ff;
  min-height: fit-content;
  flex-direction: column;
  justify-content: center;
`;

export const LoginCard = styled.div`
  width: 32rem;
  display: flex;
  padding: 4rem 3rem 4rem 3rem;
  align-self: center;
  background: #fff;
  box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  flex-direction: column;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin-top: 0.8rem;
    border-radius: 3rem;
    & > span {
      font-weight: bolder;
      justify-content: center;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 2em;
`;

export const Title = styled.span`
  color: ${colors.blue};
  font-size: 2rem;
  font-weight: 400;
`;

export const Form = styled('form')`
  display: flex;
  flex-direction: column;
`;

export const ShadowInput = styled(Input)`
  border-radius: 3rem !important;
  &:focus {
    outline: none;
  }
`;
