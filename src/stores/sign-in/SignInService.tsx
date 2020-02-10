import { ThunkAction } from 'redux-thunk'
import {RootState} from '../index';
import {Action} from 'redux';
import {signIn, signInError, signInSuccess} from './SignInAction';
import {SignInError, SignInSuccess} from './SignInType';
import {httpRequest} from '../../utils';

export const SignInService = (
    email: string,
    password: string
): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {

    const payload = {email, password};

    dispatch(signIn(payload));

    httpRequest.get('/v2/auth/user/login', payload)
        .then(n => dispatch(signInSuccess(n as SignInSuccess)))
        .catch(e => dispatch(signInError(e as SignInError)));
};
