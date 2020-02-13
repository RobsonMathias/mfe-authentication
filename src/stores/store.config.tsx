import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {loginReducer} from './login/LoginReducer';

const rootReducer = combineReducers({
    login: loginReducer,
});

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware
    )
);
