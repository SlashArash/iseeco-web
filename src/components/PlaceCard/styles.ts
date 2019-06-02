import styled from 'styled-components';

export const Card = styled('div')`
  display: flex;
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
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;
`;

export const CardBody = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

export const ImageIcon = styled('img')`
  width: 70px;
  height: 70px;
`;
