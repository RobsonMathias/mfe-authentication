import {LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, Login, LoginActionTypes} from './LoginType';

const initialState: Login = {
    requested: false,
    success: {
        token: ''
    },
    error: {
        message: ''
    }
};

export function loginReducer(
    state = initialState,
    action: LoginActionTypes
): Login {
    switch (action.type) {
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                requested: true
            });
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                success: action.payload
            });
        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                error: action.payload
            });
        default:
            return state;
    }
}
