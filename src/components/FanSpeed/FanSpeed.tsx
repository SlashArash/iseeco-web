import React from 'react';

import messages from 'lib/Messages';

import {
  Wrapper,
  Icon,
  TopLeft,
  TopRight,
  BottomLeft,
  BottomRight,
  Image,
  FillCircle,
  SpeedWrapper,
} from './styles';
import fan from 'assets/images/icons/fan-dark.png';

interface IComponentProps {
  speed: number;
  onChange: (spedd: number) => void;
}

class FanSpeed extends React.PureComponent<IComponentProps> {
  handleChange = () => {
    let speed = this.props.speed + 1;
    if (this.props.speed === 4) {
      speed = 0;
    }
    this.props.onChange(speed);
  };

  render() {
    const { speed } = this.props;
    return (
      <Wrapper>
        <Icon onClick={this.handleChange}>
          <SpeedWrapper>
            <TopLeft active={speed >= 4} />
            <TopRight active={speed >= 1} />
            <BottomLeft active={speed >= 3} />
            <BottomRight active={speed >= 2} />
          </SpeedWrapper>
          <FillCircle />
          <Image src={fan} />
        </Icon>
        <p>{messages.speed}</p>
      </Wrapper>
    );
  }
}

export default FanSpeed;
