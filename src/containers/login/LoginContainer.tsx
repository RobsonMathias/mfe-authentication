import React from 'react';
import InputFieldComponent from '../../components/input-field';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginService} from '../../stores/login/LoginService';

interface LoginContainerProps {
    login: typeof loginService
}

class LoginContainer extends React.Component<LoginContainerProps> {

    submit() {
        console.log(this.props.login);
    }

    render() {
        return (
            <form>
                <InputFieldComponent/>
                <InputFieldComponent/>
                <button type={'submit'}>Access my account</button>
                <Link to="/forgot-password">Forgot your password?</Link>
            </form>
        );
    }
}

const mapStateToProps = (state: LoginContainerProps) => ({
    login: state.login
});


export default connect(mapStateToProps, {login: loginService})(LoginContainer);
