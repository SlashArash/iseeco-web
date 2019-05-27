import React, { PureComponent } from 'react';

import messages from 'lib/Messages';
import { Button } from 'components/Button';
import {
  Form,
  Title,
  Header,
  LoginCard,
  ShadowInput,
  LoginWrapper,
  ButtonsWrapper,
} from './styles';

export class Login extends PureComponent {
  render() {
    return (
      <LoginWrapper>
        <LoginCard>
          <Header>
            <Title children={messages.smartHomeSystem} />
          </Header>
          <div className="section">
            <div>
              <div id="login">
                <Form>
                  <ShadowInput
                    id="server"
                    type="text"
                    required={true}
                    placeholder={messages.server}
                  />
                  <ShadowInput
                    id="username"
                    type="text"
                    required={true}
                    placeholder={messages.userName}
                  />
                  <ShadowInput
                    id="password"
                    type="password"
                    required={true}
                    placeholder={messages.password}
                  />
                  <ShadowInput
                    id="localIp"
                    type="text"
                    required={true}
                    placeholder={messages.localIp}
                  />
                  <ButtonsWrapper>
                    <Button
                      type="submit"
                      color="blue"
                      children={messages.enter}
                    />
                  </ButtonsWrapper>
                </Form>
              </div>
            </div>
          </div>
        </LoginCard>
      </LoginWrapper>
    );
  }
}
