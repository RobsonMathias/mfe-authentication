export interface Login {
    requested: boolean,
    success: LoginSuccessPayload,
    error: LoginFailurePayload
}

export interface LoginPayload {
    email: string
    password: string
}

export interface LoginSuccessPayload {
    token: string
}

export interface LoginFailurePayload {
    message: string
}

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

interface LoginPayloadAction {
    type: typeof LOGIN_REQUEST
    payload: LoginPayload
}

interface LoginSuccessPayloadAction {
    type: typeof LOGIN_SUCCESS
    payload: LoginSuccessPayload
}

interface LoginFailurePayloadAction {
    type: typeof LOGIN_FAILURE
    payload: LoginFailurePayload
}

export type LoginActionTypes = LoginPayloadAction | LoginSuccessPayloadAction | LoginFailurePayloadAction;
