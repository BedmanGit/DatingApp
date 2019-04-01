import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../_models/QuestionBase';
import { ValidationError } from '../_models/ValidationError';

@Component({
  selector: 'app-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.css']
})
export class DynamicFormQuestionComponent implements OnInit {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  validError: ValidationError;

  validate(key: string) {
    if (!this.form.controls[key].valid) {
      const errObj = {
        Question: key,
        Valid: this.form.controls[key].valid,
        ErrorMessages: []
      };
      // tslint:disable-next-line:forin
      for (const err in this.form.controls[key].errors) {
        errObj.ErrorMessages.push(err);
      }
      this.validError = errObj;
    }

  }

  constructor() { }

  ngOnInit() {}
}
