import styled from 'styled-components';

export const Card = styled('div')`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 20%;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100px;
  border-radius: 6px;
  padding: 1rem;
  margin: 1rem;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;
`;

export const CardBody = styled('div')`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageIcon = styled('img')`
  width: 55px;
  height: 55px;
  margin-bottom: 0.5em;
`;
