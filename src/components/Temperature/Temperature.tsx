import React from 'react';

import { ArrowNumbers, MainNumber, Wrapper } from './styles';

interface IComponentProps {
  currentTemperature: number;
  toTemperature: number;
  onChange: (temperature: number) => void;
}

class Temperature extends React.PureComponent<IComponentProps> {
  handleChangeValue = (type: 'decrease' | 'increase') => () => {
    const { toTemperature } = this.props;
    if (type === 'decrease') {
      this.props.onChange(toTemperature - 1);
    } else if (type === 'increase') {
      this.props.onChange(toTemperature + 1);
    }
  };

  render() {
    const { toTemperature } = this.props;
    return (
      <Wrapper>
        <div onClick={this.handleChangeValue('decrease')}>
          <ArrowNumbers>{toTemperature - 1}</ArrowNumbers>
        </div>
        <MainNumber>{toTemperature}</MainNumber>
        <div onClick={this.handleChangeValue('increase')}>
          <ArrowNumbers>{toTemperature + 1}</ArrowNumbers>
        </div>
      </Wrapper>
    );
  }
}

export default Temperature;
