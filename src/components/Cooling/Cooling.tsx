import React from 'react';

import { Wrapper, Icon, Image } from './styles';
import messages from 'lib/Messages';

import snow from 'assets/images/icons/snow-dark.png';
import snowActive from 'assets/images/icons/snow-active.png';

interface IComponentProps {
  active: boolean;
  onChange: (value: boolean) => void;
}

class Cooling extends React.PureComponent<IComponentProps> {
  handleChangeCooling = () => {
    this.props.onChange(!this.props.active);
  };

  render() {
    const { active } = this.props;
    return (
      <Wrapper>
        <Icon onClick={this.handleChangeCooling}>
          {active ? <Image src={snowActive} /> : <Image src={snow} />}
        </Icon>
        <p>{messages.cooling}</p>
      </Wrapper>
    );
  }
}

export default Cooling;
