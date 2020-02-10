import React from 'react';
import { withRouter } from 'react-router-dom';
import SignInContainer from "../../containers/sign-in";

class SignInPage extends React.Component {

  componentDidMount() {}

  render() {
    return (
        <section>
          <h1>Sign In</h1>
          <p>Welcome to Micro frontend Example</p>
          <SignInContainer/>
        </section>
    );
  }
}

export default withRouter<any, any>(SignInPage);
