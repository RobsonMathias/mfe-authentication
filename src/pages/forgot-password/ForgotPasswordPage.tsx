import React from 'react';
import { withRouter } from 'react-router-dom';
import ForgotPasswordContainer from '../../module/forgot-password';

class ForgotPasswordPage extends React.Component {

  componentDidMount() {}

  render() {
    return (
        <section>
          <h1>Did you Forgot your?</h1>
          <p>Don't worry, type your e-mail and we'll send a link to recovery your access</p>
          <ForgotPasswordContainer/>
        </section>
    );
  }
}

export default withRouter<any, any>(ForgotPasswordPage);
