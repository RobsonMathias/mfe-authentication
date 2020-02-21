import React from 'react';
import { withRouter } from 'react-router-dom';
import LoginContainer from '../../containers/login';

class LoginPage extends React.Component {

  componentDidMount() {}

  render() {
    return (
        <section>
          <h1>Beta Version (UPDATED) Sign In</h1>
          <p>Welcome to Micro frontend Example</p>
          <LoginContainer/>
        </section>
    );
  }
}

export default withRouter<any, any>(LoginPage);
