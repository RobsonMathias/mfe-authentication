import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignInPage from "../sign-in";


class App extends React.Component {
    componentDidMount() {}

    render() {
        return (
            <Router>
                <Route path="/" exact component={SignInPage} />
            </Router>
        );
    }
}

export default App;
