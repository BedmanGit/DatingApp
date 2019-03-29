import { Injectable } from '@angular/core';
import { QuestionBase } from '../_models/QuestionBase';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { customerValidations } from '../_helpers/custom-validation';

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
      // new FormControl(question.value || '', {validators: customerValidations}) : new FormControl(question.value || '');
      new FormControl(question.value || '') : new FormControl(question.value || '');
    });
    return new FormGroup(group, customerValidations(questions));
  }
}
