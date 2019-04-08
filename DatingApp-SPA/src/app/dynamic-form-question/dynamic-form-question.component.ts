import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl, FormControl, ValidationErrors } from '@angular/forms';
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
  valErrors: ValidationError;
  validErrors: string[];
  get isValid() { return this.form.controls[this.question.key].valid; }

  validate(ctrl: string): void {
    if (this.form.controls[ctrl]) {
      this.resetErrorMessageObj();
      if (this.form.controls[ctrl].errors) {
        this.validErrors = Object.keys(this.form.controls[ctrl].errors);
      }

      /*
      if (this.form.controls[ctrl]) {
        this.resetErrorMessageObj();

        if (this.form.controls[ctrl].invalid) {
          this.valErrors.Question = ctrl;
          this.valErrors.Valid = false;
          // tslint:disable-next-line: forin
          for (const err in this.form.controls[ctrl].errors) {
              this.valErrors.ErrorMessages.push(err);
          }
        }*/
    }
  }

  keys(obj: any) {
    if (obj !== null && obj !== undefined) {
      return Object.keys(obj);
    } else {
      return [];
    }
  }
  isEmpty(obj: any) {
    return obj.length === 0;
  }
  invalid(obj: any) {
    if (obj.length > 0) {
      return true;
    } else {
      return false;
    }
  }
  resetErrorMessageObj() {
    this.valErrors = {
      Question: '',
      Valid: true,
      ErrorMessages: []
    };
    this.validErrors = null;
  }

  constructor() {
    this.resetErrorMessageObj();
  }

  ngOnInit() {
  }
}
