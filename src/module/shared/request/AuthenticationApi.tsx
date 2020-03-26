import {LOGIN_REQUEST, LoginPayload} from '../../login/stores/LoginType';
import {http} from './index';

const loginApi = (
    payload: LoginPayload
): Promise<any> => {
    return http.request.get(LOGIN_REQUEST, payload)
};

export {loginApi};
