import React from 'react';
import {Link} from 'react-router-dom';
import {loginService} from '../../stores/login/LoginService';
import {connect} from 'react-redux';

interface LoginContainerProps {
    login: typeof loginService
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
        this.props.login(this.state.email, this.state.password);
        event.preventDefault();
    }



    render() {
        // @ts-ignore
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
                <button type={'button'} onClick={this.handleSubmit}>Access my account</button>
                <Link to="/forgot-password">Forgot your password?</Link>
            </form>
        );
    }
}

const mapStateToProps = (state: LoginContainerProps) => ({
    login: state.login
});


export default connect(mapStateToProps, {login: loginService})(LoginContainer);
