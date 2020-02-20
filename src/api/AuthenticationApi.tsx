import {LOGIN_REQUEST, LoginPayload} from '../stores/login/LoginType';
import {http} from '../utils';

const loginApi = (
    payload: LoginPayload
): Promise<any> => {
    return http.request.get(LOGIN_REQUEST, payload)
};

export {loginApi};
