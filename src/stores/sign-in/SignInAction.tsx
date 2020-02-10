import {
    SIGN_IN_ERROR,
    SIGN_IN_SUBMIT,
    SIGN_IN_SUCCESS,
    SignInError,
    SignInSubmit,
    SignInSuccess
} from './SignInType';

export function signIn(payload: SignInSubmit) {
    return {
        type: SIGN_IN_SUBMIT,
        payload
    };
}

export function signInSuccess(payload: SignInSuccess) {
    return {
        type: SIGN_IN_SUCCESS,
        payload
    };
}

export function signInError(payload: SignInError) {
    return {
        type: SIGN_IN_ERROR,
        payload
    };
}
