import styled from 'styled-components';

export const Card = styled('div')`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 40%;
  align-items: center;
  height: 100px;
  width: 100px;
  border-radius: 6px;
  padding: 1rem;
  margin: 1rem;
  background-color: '#ffffff';
`;

export const CardBody = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ImageIcon = styled('img')`
  width: 40px;
  height: 40px;
  margin-bottom: 1rem;
`;
