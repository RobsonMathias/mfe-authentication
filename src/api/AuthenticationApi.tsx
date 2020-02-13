import {httpRequest} from '../utils';

const loginApi = (
    email: string,
    password: string
): Promise<any> => {
    const payload = {email, password};
    return httpRequest.get('/v2/auth/user/login', payload)
};

export {loginApi};
