import {Validators} from 'react-reactive-form';

export const FieldRequiredValidator = (initialState = '') => [initialState, Validators.required];
