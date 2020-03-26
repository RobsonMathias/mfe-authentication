import {LoginPayload} from './LoginType';
import {loginApi} from '../../shared/request/AuthenticationApi';

const loginService = (
    payload: LoginPayload
) => {
    return loginApi(payload);
};

export {loginService};
