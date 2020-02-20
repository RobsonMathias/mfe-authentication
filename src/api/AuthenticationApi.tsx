import {httpRequest} from '../utils';
import {LOGIN_REQUEST} from '../stores/login/LoginType';

const loginApi = (
    email: string,
    password: string
): Promise<any> => {
    const payload = {email, password};
    return httpRequest.get(LOGIN_REQUEST, payload)
};

export {loginApi};
