import { ValidatorFn, ValidationErrors, FormControl, FormGroup } from '@angular/forms';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { QuestionBase } from '../_models/QuestionBase';
import { JsonPipe } from '@angular/common';

export const customerValidations2: ValidatorFn = (control: FormControl):
ValidationErrors | null => {
  const validations = control.get('requiredQuestions');

return null;
};


export function customerValidations(questions: QuestionBase<any>[]): ValidatorFn {
  return (g: FormGroup) => {
    questions.forEach(question => {
    const rules = JSON.parse(question.validations);
      if (rules !== null) {
        g.controls[question.key]
      }
    });



    return null;
  };

}

