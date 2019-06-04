import React from 'react';

import { Wrapper, Icon, Image, Text } from './styles';

import snow from 'assets/images/icons/power-dark.png';
import snowActive from 'assets/images/icons/power-active.png';

interface IComponentProps {
  active: 'on' | 'off';
  fanSpeed: number;
  onChange: (active: 'on' | 'off', fanSpeed: number) => void;
}

class Power extends React.PureComponent<IComponentProps> {
  handleChangePower = () => {
    let newActive: 'on' | 'off' = 'off';
    let newFanSpeed: number = 1;
    if (this.props.active === 'off' && this.props.fanSpeed > 0) {
      // on to active
      newActive = 'on';
      newFanSpeed = 1;
    } else if (this.props.active === 'off' && this.props.fanSpeed === 0) {
      // off to on
      newActive = 'off';
      newFanSpeed = 1;
    } else if (this.props.active === 'on') {
      // auto to off
      newActive = 'off';
      newFanSpeed = 0;
    }
    this.props.onChange(newActive, newFanSpeed);
  };

  render() {
    const { active, fanSpeed } = this.props;
    return (
      <Wrapper>
        <Icon active={active === 'on'} onClick={this.handleChangePower}>
          {active === 'on' && <Text>AUTO</Text>}
          {active === 'off' && fanSpeed > 0 && <Image src={snowActive} />}
          {active === 'off' && fanSpeed === 0 && <Image src={snow} />}
        </Icon>
      </Wrapper>
    );
  }
}

export default Power;
