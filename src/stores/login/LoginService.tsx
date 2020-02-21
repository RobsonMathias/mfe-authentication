import {LoginPayload} from './LoginType';
import {loginApi} from '../../api/AuthenticationApi';

const loginService = (
    payload: LoginPayload
) => {
    return loginApi(payload);
};

export {loginService};
