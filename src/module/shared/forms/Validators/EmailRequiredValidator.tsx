import {Validators} from 'react-reactive-form';

export const EmailRequiredValidator = (initialState = '') => [initialState, [Validators.required, Validators.email]];
