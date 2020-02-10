import {signInReducer} from './sign-in/SignInReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    signIn: signInReducer,
});

export type RootState = ReturnType<typeof rootReducer>
