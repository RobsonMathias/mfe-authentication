import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LoginFailurePayload,
    LoginPayload,
    LoginSuccessPayload
} from './LoginType';
import {ThunkAction} from 'redux-thunk';
import {RootState} from '../store.config';
import {Action} from 'redux';
import {loginService} from './LoginService';

const request = (payload: LoginPayload) => {
    return {
        type: LOGIN_REQUEST,
        payload
    };
};

const success = (payload: LoginSuccessPayload) => {
    return {
        type: LOGIN_SUCCESS,
        payload
    };
};

const failure = (payload: LoginFailurePayload) => {
    return {
        type: LOGIN_FAILURE,
        payload
    };
};

const loginAction = (payload: LoginPayload)
    : ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    dispatch(request(payload));
    loginService(payload)
        .then((n: LoginSuccessPayload) => success(n))
        .catch((e: LoginFailurePayload) => failure(e));
};

export {loginAction}
