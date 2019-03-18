import { Injectable } from '@angular/core';
import { QuestionBase } from '../_models/QuestionBase';
import { DropdownQuestion } from '../_models/DropdownQuestion';
import { TextboxQuestion } from '../_models/TextboxQuestion';
import { DatePicker } from '../_models/DatePicker';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions() {

    const questions: QuestionBase<any>[] = [

      new DropdownQuestion({
        key: 'site',
        label: 'Site Number',
        options: [
          {key: '001',  value: 'Brooklyn'},
          {key: '002',  value: 'Queens'},
          {key: '003',   value: 'Staten Island'},
          {key: '004', value: 'Browns'}
        ],
        order: 1
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'James',
        required: true,
        order: 2,
        dependencies: 'test'
      }),

      new TextboxQuestion({
        key: 'lastName',
        label: 'Last name',
        value: 'Chen',
        required: true,
        order: 3,
        dependencies: 'test'
      }),
      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 4
      }),
      new DatePicker({
        key: 'dob',
        label: 'Birthday',
        order: 5
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
