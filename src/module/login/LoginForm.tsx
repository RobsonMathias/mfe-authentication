import Form from '../shared/forms';
import {EmailRequiredValidator, FieldRequiredValidator} from '../shared/forms/Validators';

const loginForm = Form({
  email: EmailRequiredValidator(),
  password: FieldRequiredValidator()
});

export default loginForm;
