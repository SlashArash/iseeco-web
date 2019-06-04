import styled, { css } from 'styled-components';

import { colors } from 'utils/theme/colors';
import { scaleUp, fadeIn, fadeOut } from 'utils/theme/animations';

const transitionName = 'modal';

const scaleUpAnimation = css`
  ${scaleUp} 0.3s ease;
`;

const fadeInAnimation = css`
  ${fadeIn} 0.3s ease;
`;

const fadeOutAnimation = css`
  ${fadeOut} 0.3s ease;
`;

interface IModalMain {
  width: string;
}

interface IModalHeader {
  hasTab: boolean;
}

interface ITabItem {
  active: boolean;
}

export const ModalContainer = styled('section')`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 1003;
  transform: translateZ(0);
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  &.${transitionName}-enter {
    animation: ${fadeInAnimation};
  }
  &.${transitionName}-exit {
    animation: ${fadeOutAnimation};
  }
`;

export const ModalMain = styled('div')<IModalMain>`
  width: auto;
  margin: 0;
  display: flex;
  padding: 0;
  overflow-y: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  flex-direction: column;
  background-color: #fff;
  animation: ${scaleUpAnimation};
  @media screen and (min-width: 500px) {
    width: ${(props) => props.width};
    height: auto;
    margin: 5% auto;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    height: 90%;
    margin: auto;
  }
`;

export const ModalHeader = styled('header')<IModalHeader>`
  color: ${colors.black};
  padding: 0.5em 1em;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: ${(props) => (props.hasTab ? 0 : '0.5em')};
`;

export const ModalHeaderInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TabsList = styled.div`
  display: flex;
  margin-top: 1em;
`;

export const TabItem = styled('span')<ITabItem>`
  margin: 0 0.5em;
  transition: all 0.2s;
  padding-bottom: 0.5em;
  color: ${(props) => (props.active ? colors.green : '#b7bfc6')};
  cursor: ${(props) => (props.active ? 'default' : 'pointer')};
  box-shadow: ${(props) =>
    props.active ? `inset 0 -3px ${colors.green}` : ''};
  &:hover {
    box-shadow: ${(props) => (!props.active ? 'inset 0 -3px #b7bfc6' : '')};
    color: ${(props) => (!props.active ? colors.black : '')};
  }
`;

export const ModalBody = styled.main`
  flex: 1;
  display: flex;
  padding: 1.5em 1em;
  overflow: auto;
  min-height: 5em;
  flex-direction: column;
`;

export const CloseSpan = styled('span')`
  color: ${colors.red};
  cursor: pointer;
  display: inline-flex;
  padding: 2px;
  position: relative;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  font-weight: 500;
  border-radius: 18px;
  &:hover {
    color: #ffffff;
    background-color: ${colors.red};
  }
  & > i {
    font-size: 20px;
    margin-right: 0;
  }
`;
