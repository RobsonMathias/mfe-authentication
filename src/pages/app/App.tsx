import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import {Provider} from 'react-redux';
import {store} from '../../stores/store.config';
import LoginPage from '../login';
import ForgotPasswordPage from '../forgot-password';


class App extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="AuthenticationApp">
                <Provider store={store}>
                        <Router>
                            <Route path="/" exact component={LoginPage}/>
                            <Route path="/forgot-password" exact component={ForgotPasswordPage}/>
                        </Router>
                </Provider>
            </div>
        );
    }
}

export default App;
