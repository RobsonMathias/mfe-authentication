import React from 'react';
import {Link} from 'react-router-dom';

class ForgotPasswordContainer extends React.Component {
    render() {
        return (
            <form>
                <label>
                    E-mail
                    <input/>
                </label>
                <button type={'submit'}>Send recovery link</button>
                <Link to="/">Go back to sign in page</Link>
            </form>
        );
    }
}

export default ForgotPasswordContainer;
