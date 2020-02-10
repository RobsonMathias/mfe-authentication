import React from 'react';
import InputFieldComponent from '../../components/input-field';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {signIn} from '../../stores/sign-in/SignInAction';

interface SignInContainerProps {
    signIn: typeof signIn
}

class SignInContainer extends React.Component<SignInContainerProps> {

    signIn() {
        // this.props.signIn
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

const mapStateToProps = (state: SignInContainerProps) => ({
    signIn: state.signIn
});


export default connect(mapStateToProps, {signIn})(SignInContainer);
