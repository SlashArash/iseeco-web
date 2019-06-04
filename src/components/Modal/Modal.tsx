import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { X } from 'react-feather';

import {
  CloseSpan,
  ModalBody,
  ModalContainer,
  ModalHeader,
  ModalHeaderInfo,
  ModalMain,
  TabItem,
  TabsList,
} from './styles';

const transitionName = 'modal';

interface ITabProps {
  id: number | string;
  title: string;
}

interface IModalProps {
  isActive?: boolean;
  onClose: () => void;
  onSelectATab?: (tabId: number | string) => void;
  selectedTab?: number | string;
  tabs?: ITabProps[];
  title: string;
  width?: string;
}

class Modal extends React.PureComponent<IModalProps> {
  handleCloseModal = () => {
    this.props.onClose();
  };

  handleSelectATab = (tabId: number | string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (this.props.onSelectATab) {
      this.props.onSelectATab(tabId);
    }
  };

  onKeyDown = (event: React.KeyboardEvent) => {
    if (event.keyCode === 27) {
      this.props.onClose();
    }
  };

  render() {
    const { tabs, title, width, children, isActive, selectedTab } = this.props;
    return (
      <CSSTransition
        in={isActive}
        timeout={200}
        classNames={transitionName}
        unmountOnExit={true}
      >
        <ModalContainer onKeyDown={this.onKeyDown}>
          <ModalMain width={width || '60% '}>
            <ModalHeader hasTab={!!tabs}>
              <ModalHeaderInfo>
                <h5>{title}</h5>
                <CloseSpan>
                  <X onClick={this.handleCloseModal} />
                </CloseSpan>
              </ModalHeaderInfo>
              {tabs && (
                <TabsList>
                  {tabs.map((tab) => (
                    <TabItem
                      onClick={
                        tab.id !== selectedTab
                          ? this.handleSelectATab(tab.id)
                          : undefined
                      }
                      active={tab.id === selectedTab}
                      key={tab.id}
                    >
                      {tab.title}
                    </TabItem>
                  ))}
                </TabsList>
              )}
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
          </ModalMain>
        </ModalContainer>
      </CSSTransition>
    );
  }
}

export default Modal;
