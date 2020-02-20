import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginAction} from '../../stores/login/LoginAction';

interface LoginContainerProps {
    login: typeof loginAction
}

interface LoginContainerStates {
    email: string,
    password: string
}

class LoginContainer extends React.Component<LoginContainerProps, LoginContainerStates> {

    constructor(props: LoginContainerProps) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event: any) {
        const {target} = event;
        this.setState({[target.name]: event.target.value} as any);
    }

    handleSubmit(event: any) {
        const payload = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.login(payload);
        event.preventDefault();
    }



    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    E-mail
                    <input type='email' name='email' value={this.state.email} onChange={this.handleChange} />
                </label>
                <label>
                    Password
                    <input type='password' name='password' value={this.state.password} onChange={this.handleChange} />
                </label>
                <button type={'submit'}>Access my account</button>
                <Link to="/forgot-password">Forgot your password?</Link>
            </form>
        );
    }
}

const mapStateToProps = (state: LoginContainerProps) => ({
    login: state.login
});
const actionCreators = {
    login: loginAction,
};

export default connect(mapStateToProps, actionCreators)(LoginContainer);
