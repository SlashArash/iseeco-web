import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled('div')`
  background-color: #dedede;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const IconLink = styled(Link)`
  display: flex;
`;
