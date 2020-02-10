import {SIGN_IN_ERROR, SIGN_IN_SUBMIT, SIGN_IN_SUCCESS, SignIn, SignInActionTypes} from './SignInType';

const initialState: SignIn = {
    submitted: false,
    success: {
        token: ''
    },
    error: {
        message: ''
    }
};

export function signInReducer(
    state = initialState,
    action: SignInActionTypes
): SignIn {
    switch (action.type) {
        case SIGN_IN_SUBMIT:
            return Object.assign({}, state, {
                submitted: true
            });
        case SIGN_IN_SUCCESS:
            return Object.assign({}, state, {
                success: action.payload
            });
        case SIGN_IN_ERROR:
            return Object.assign({}, state, {
                error: action.payload
            });
        default:
            return state;
    }
}
