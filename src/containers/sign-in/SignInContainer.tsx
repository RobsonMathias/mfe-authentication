import React, {useEffect, useState} from 'react';
import InputFieldComponent from '../../components/input-field';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {signIn} from '../../stores/sign-in/SignInAction';
import validate from 'validate.js';

interface SignInContainerProps {
    signIn: typeof signIn
}

class SignInContainer extends React.Component<SignInContainerProps> {

    public formState: any;
    public setFormState: any;
    private schema = {
        email: {
            presence: { allowEmpty: false, message: 'is required' },
            email: true,
            length: {
                maximum: 64
            }
        },
        password: {
            presence: { allowEmpty: false, message: 'is required' },
            length: {
                maximum: 128
            }
        }
    };

    constructor(props: Readonly<SignInContainerProps>) {
        super(props);
        const [formState, setFormState] = useState({
            isValid: false,
            values: {},
            touched: {},
            errors: {}
        });
        this.formState = formState;
        this.setFormState = setFormState;

        useEffect(() => {
            const errors = validate(formState.values, this.schema);
            setFormState(formState => ({
                ...formState,
                isValid: !errors,
                errors: errors || {}
            }));
        }, [formState.values]);
    }

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
