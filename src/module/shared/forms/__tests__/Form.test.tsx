import Form from '../Form';
import {FieldRequiredValidator, NoValidator} from '../Validators';

let mockForm: any;
let spyPrevent: any;

beforeEach(() => {
  mockForm = {
    preventDefault: () => {}
  };
  spyPrevent = spyOn(mockForm, 'preventDefault').and.callThrough();
});


test('should form create with required fields successfully', () => {
  let form = Form()
            .map((f: any) => f.addField({data: NoValidator()}));

  expect(form.fields().get('data').invalid).toBe(false);
  expect(form.fields().get('data').valid).toBe(true);
  expect(form.fields().get('data').errors).not.toEqual({required: true});
});

test('should form create with optional fields successfully', () => {
  let form = Form({
    data: ['', []]
  });
  expect(form.fields().get('data').invalid).toBe(false);
  expect(form.fields().get('data').valid).toBe(true);
  expect(form.fields().get('data').errors).not.toEqual({required: true});
});

test('should form create with initial state and reset after some changes', () => {
  let form = Form()
    .map((f: any) => f.addField({data: FieldRequiredValidator('123')}));
  form.fields().get('data').setValue('666');
  expect(form.getValue()).toEqual({data: '666'});
  form.reset();
  expect(form.getValue()).toEqual({data: '123'});
});

test('should not form been submitted with invalid invalid fields', () => {
  let form = Form({data: FieldRequiredValidator()});
  expect(form.submit()).toEqual(false);
  expect(spyPrevent).not.toHaveBeenCalled();
});

test('should form been submitted with invalid invalid fields', () => {
  let form = Form({data: FieldRequiredValidator()});
  form.fields().get('data').setValue(123);
  expect(form.submit(mockForm as any)).toEqual(true);
  expect(spyPrevent).toHaveBeenCalled();
});

test('should handler returned error when has field invalid and touched', () => {
  let form = Form({data: FieldRequiredValidator()});
  const control = form.fields().get('data');
  control.markAsTouched();
  const handler = form.handler(control);
  expect(handler.error).toEqual(true);
  expect(handler.disabled).toEqual(false);
  expect(handler.value).toEqual('');
});
