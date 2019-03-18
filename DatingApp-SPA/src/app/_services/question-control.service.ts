import { Injectable } from '@angular/core';
import { QuestionBase } from '../_models/QuestionBase';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { forbiddenSameNameValidator } from '../_helpers/custom-validation';

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {

  constructor() { }

  toFormGroup(questions: QuestionBase<any>[] ) {
  const group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '',
           Validators.required) // , forbiddenSameNameValidator()
                                              : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}
