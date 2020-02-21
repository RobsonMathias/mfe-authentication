import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '../../stores/store.config';
import LoginPage from '../login';
import ForgotPasswordPage from '../forgot-password';
// @ts-ignore
import styles from './App.css';

class App extends React.Component {

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        styles.use();
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
