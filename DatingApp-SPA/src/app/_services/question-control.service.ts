import { Injectable } from '@angular/core';
import { QuestionBase } from '../_models/QuestionBase';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { customerValidations, customerValidations2 } from '../_helpers/custom-validation';

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {

  constructor() { }

  toFormGroup(questions: QuestionBase<any>[] ) {
  const group: any = {};

    questions.forEach(question => {
      // tslint:disable-next-line:max-line-length
      group[question.key] = question.validations !== null && question.validations !== '' ?
       // tslint:disable-next-line:max-line-length
       new FormControl(question.value || '',
       [
        customerValidations2(question.validations),
        question.maxLength !== null ?  Validators.maxLength(question.maxLength) : Validators.maxLength(5000)
       ]) : new FormControl(question.value || '');

      // new FormControl(question.value || '') : new FormControl(question.value || '');
    });
    console.log('toFormGroup called');
    // return new FormGroup(group, customerValidations(questions));
    return new FormGroup(group);
  }
}
