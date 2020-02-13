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
            <Provider store={store}>
                <div className="AuthenticationApp">
                    <Router>
                        <Route path="/" exact component={LoginPage}/>
                        <Route path="/forgot-password" exact component={ForgotPasswordPage}/>
                    </Router>
                </div>
            </Provider>
        );
    }
}

export default App;
