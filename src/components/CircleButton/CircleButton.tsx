import React, { ReactNode } from 'react';

import { Wrapper, Circle, Label } from './styles';

interface IComponentProps {
  onPress: () => void;
  label?: string;
  children: ReactNode;
}

class CircleButton extends React.PureComponent<IComponentProps> {
  handlePress = () => {
    this.props.onPress();
  };
  render() {
    const { label } = this.props;
    return (
      <Wrapper>
        <Circle onClick={this.handlePress}>{this.props.children}</Circle>
        <Label>{label}</Label>
      </Wrapper>
    );
  }
}

export default CircleButton;
