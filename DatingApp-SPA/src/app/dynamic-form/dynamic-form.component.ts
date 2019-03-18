import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from '../_models/QuestionBase';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from '../_services/question-control.service';
import { QuestionService } from '../_services/question.service';

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
   }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
