import {LoginFailurePayload, LoginSuccessPayload} from './LoginType';
import {loginFailure, loginRequest, loginSuccess} from './LoginAction';
import {loginApi} from '../../api/AuthenticationApi';

const loginService = (
    email: string,
    password: string
) => {
    const payload = {email, password};
    loginRequest(payload);
    // loginApi(email, password)
    //     .then((n: LoginSuccessPayload) => loginSuccess(n))
    //     .catch((e: LoginFailurePayload) => loginFailure(e));
};

export {loginService};
