import React from 'react';
import InputFieldComponent from '../../components/input-field';
import {Link} from 'react-router-dom';

class SignInContainer extends React.Component {
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

export default SignInContainer;
