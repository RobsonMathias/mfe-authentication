import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignInPage from "../sign-in";
import ChangePasswordPage from '../forgot-password';
import './App.css';


class App extends React.Component {
    componentDidMount() {}

    render() {
        return (
            <div className="AuthenticationApp">
                <Router>
                    <Route path="/" exact component={SignInPage} />
                    <Route path="/forgot-password" exact component={ChangePasswordPage} />
                </Router>
            </div>
        );
    }
}

export default App;
