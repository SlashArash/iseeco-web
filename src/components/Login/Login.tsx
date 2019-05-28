import React, { PureComponent } from 'react';
import { Formik, Form, FormikActions } from 'formik';

import messages from 'lib/Messages';
import { Button } from 'components/Button';
import {
  Title,
  Header,
  LoginCard,
  ShadowInput,
  LoginWrapper,
  ButtonsWrapper,
} from './styles';

interface ILoginValues {
  serverName: string;
  userName: string;
  password: string;
  localIp: string;
}

const initialValues: ILoginValues = {
  serverName: '',
  userName: '',
  password: '',
  localIp: '',
};

export class Login extends PureComponent {
  handleLogin = (
    values: ILoginValues,
    formikActions: FormikActions<ILoginValues>
  ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      formikActions.setSubmitting(false);
    }, 400);
  };

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
                <Formik
                  initialValues={initialValues}
                  onSubmit={this.handleLogin}
                >
                  {({ values, handleChange, handleBlur, isSubmitting }) => (
                    <Form>
                      <ShadowInput
                        id="serverName"
                        name="serverName"
                        type="text"
                        required={true}
                        placeholder={messages.server}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.serverName}
                      />
                      <ShadowInput
                        id="userName"
                        name="userName"
                        type="text"
                        required={true}
                        placeholder={messages.userName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.userName}
                      />
                      <ShadowInput
                        id="password"
                        name="password"
                        type="password"
                        required={true}
                        placeholder={messages.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      <ShadowInput
                        id="localIp"
                        name="localIp"
                        type="text"
                        placeholder={messages.localIp}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.localIp}
                      />
                      <ButtonsWrapper>
                        <Button
                          type="submit"
                          color="blue"
                          children={messages.enter}
                          loading={isSubmitting}
                        />
                      </ButtonsWrapper>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </LoginCard>
      </LoginWrapper>
    );
  }
}
