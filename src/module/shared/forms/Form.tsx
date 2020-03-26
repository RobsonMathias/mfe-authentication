import {FormBuilder as fb} from 'react-reactive-form';
import {FormPreventEvents} from './FormEvents';

const handler = (control) => (e) => ({
  ...e.handler(),
  error: (e.invalid && (e.touched || control.submitted)).toString()
});

const submit = (control) => (e = null) => {
  control.markAsSubmitted();
  FormPreventEvents(e);
  return control.valid;
};

const FormControl = (fields) => {
  let control = fb.group(fields);
  return {
    reset: (state) => control.reset(state),
    fold: () => control
  }
};

const Form = (fields = {}) => {
  const control = FormControl(fields);
  const folded = control.fold();
  const initialState = folded.value;
  return {
    map: fun => fun(Form(fields)),
    addField: f => Form({...fields, ...f}),
    reset: (state) => control.reset(state || initialState),
    fields: () => folded,
    getValue: () => folded.value,
    handler: handler(folded),
    submit: submit(folded)
  }
};

export default Form;
