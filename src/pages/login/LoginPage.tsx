import React from 'react';
import { withRouter } from 'react-router-dom';
import LoginContainer from '../../module/login';

class LoginPage extends React.Component {

  componentDidMount() {}

  render() {
    return (
        <section>
          <h1>Sign In V2</h1>
          <p>Welcome to Micro frontend Example</p>
          <LoginContainer/>
        </section>
    );
  }
}

export default withRouter<any, any>(LoginPage);
