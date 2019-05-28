import React, { PureComponent } from 'react';
import { Formik, Form, FormikActions } from 'formik';
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import { login } from 'store/app/actions';
import messages from 'lib/Messages';
import { xmpp } from 'lib/XMPP';

import { Button } from 'components/Button';
import {
  Title,
  Header,
  LoginCard,
  ShadowInput,
  LoginWrapper,
  ButtonsWrapper,
} from './styles';
import { Redirect, RouteProps } from 'react-router';
import IStore from 'types/IStore';

interface IOwnProps {
  dispatch: Dispatch;
}

interface IStateToProps {
  authorized: boolean;
}

interface IDispatchToProps {
  login: (
    password: string | null,
    serverName: string | null,
    userName: string | null
  ) => any;
}

type IComponentProps = IOwnProps &
  IStateToProps &
  IDispatchToProps &
  RouteProps;

interface ILoginValues {
  serverName: string;
  userName: string;
  password: string;
}

const initialValues: ILoginValues = {
  serverName: '',
  userName: '',
  password: '',
};

class Login extends PureComponent<IComponentProps> {
  handleLogin = (
    values: ILoginValues,
    formikActions: FormikActions<ILoginValues>
  ) => {
    const { userName, password, serverName } = values;
    if (userName.trim() !== '' && password.trim() !== '') {
      xmpp
        .login(
          this.props.dispatch,
          password,
          serverName.toLowerCase(),
          userName.toLowerCase()
        )
        .then(() => {
          this.props.login(
            password,
            serverName.toLowerCase(),
            userName.toLowerCase()
          );
        })
        .catch((message: string) => {
          if (message) {
            alert(message);
          }
          this.setState({ loading: false });
        });
    } else {
      alert('Please enter valid credential');
      this.setState({ loading: false });
    }
  };

  render() {
    const { from } = this.props.location!!.state || { from: { pathname: '/' } };

    if (this.props.authorized) {
      return <Redirect to={from} />;
    }
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

const mapStateToProps: MapStateToProps<IStateToProps, IOwnProps, IStore> = (
  state
) => {
  const authorized = !!state.app.userName && !!state.app.password;
  return { authorized };
};

const mapDispatchToProps: MapDispatchToProps<IDispatchToProps, IOwnProps> = (
  dispatch
) => {
  return bindActionCreators({ login }, dispatch);
};

export const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
