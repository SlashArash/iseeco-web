import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled('div')`
  background-color: #dedede;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const IconLink = styled(Link)`
  display: flex;
`;
