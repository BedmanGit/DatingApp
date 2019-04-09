import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from '../_models/QuestionBase';
import { FormGroup, FormControl } from '@angular/forms';
import { QuestionControlService } from '../_services/question-control.service';
import { QuestionService } from '../_services/question.service';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  questions: QuestionBase<any>[] = [];
  form: FormGroup;

  payLoad = '';

  constructor(private qs: QuestionService, private qcs: QuestionControlService) {
    this.questions = qs.getQuestions();
    qs.GetHiddenQuestions(this.questions).subscribe(
      next => {

    });
  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit(): void {
    Object.keys(this.form.controls).forEach((ctrl: string) => {
      if (this.form.controls[ctrl].dirty) {
        this.form.controls[ctrl].updateValueAndValidity();
      }
    });
    this.payLoad = JSON.stringify(this.form.value);
  }

}
