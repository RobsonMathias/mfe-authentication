export interface SignIn {
    submitted: boolean,
    success: SignInSuccess,
    error: SignInError
}

export interface SignInSubmit {
    email: string
    password: string
}

export interface SignInSuccess {
    token: string
}

export interface SignInError {
    message: string
}

export const SIGN_IN_SUBMIT = 'SIGN_IN_SUBMIT';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR';

interface SignInSubmitAction {
    type: typeof SIGN_IN_SUBMIT
    payload: SignInSubmit
}

interface SignInSuccessAction {
    type: typeof SIGN_IN_SUCCESS
    payload: SignInSuccess
}

interface SignInErrorAction {
    type: typeof SIGN_IN_ERROR
    payload: SignInError
}

export type SignInActionTypes = SignInSubmitAction | SignInSuccessAction | SignInErrorAction;
