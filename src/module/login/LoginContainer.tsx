import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginAction} from './stores/LoginAction';
import {FieldControl, FieldGroup} from 'react-reactive-form';
import loginForm from './LoginForm';

const LoginContainer = () => {

  const submit = (e) => {
    loginForm.submit(e) && console.log('FORM HAS BEEN SUBMITTED!!!');
  };

  return (
    <>
    <FieldGroup
      control={loginForm.fields()}
      render={() => (
        <form onSubmit={submit}>
          <label>
            E-mail
            <FieldControl
              name='email'
              render={(e) => (
                <input
                  type='email'
                  name='email'
                  {...loginForm.handler(e)}
                />
              )} />
          </label>
          <label>
            Password
            <FieldControl
              name='password'
              render={(e) => (
                <input
                  type='password'
                  name='password'
                  {...loginForm.handler(e)}
                />
              )} />
          </label>
          <button type={'submit'}>Access my account</button>
        </form>
      )} />
      <Link to="/forgot-password">Forgot your password?</Link>
    </>
  );
};
const mapStateToProps = (state) => (state);
export default connect(mapStateToProps, {login: loginAction})(LoginContainer);
