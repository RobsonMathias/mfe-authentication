import React from 'react';
import InputFieldComponent from '../../components/input-field';
import {Link} from 'react-router-dom';

class ForgotPasswordContainer extends React.Component {
    render() {
        return (
            <form>
                <InputFieldComponent/>
                <button type={'submit'}>Send recovery link</button>
                <Link to="/">Go back to sign in page</Link>
            </form>
        );
    }
}

export default ForgotPasswordContainer;
