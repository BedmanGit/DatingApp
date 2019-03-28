import { ValidatorFn, ValidationErrors, FormControl } from '@angular/forms';

export const customerValidations: ValidatorFn = (control: FormControl):
ValidationErrors | null => {
  const validations = control.get('requiredQuestions');

return null;
};
