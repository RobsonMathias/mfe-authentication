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

const loginRequest = (payload: LoginPayload)
  : ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    dispatch({
        type: LOGIN_REQUEST,
        payload
    });
};

const loginSuccess = (payload: LoginSuccessPayload)
  : ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    dispatch({
        type: LOGIN_SUCCESS,
        payload
    });
};

const loginFailure = (payload: LoginFailurePayload)
  : ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    dispatch({
        type: LOGIN_FAILURE,
        payload
    });
};


export {loginRequest, loginSuccess, loginFailure}
