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
        questionId: 1,
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
        questionId: 2,
        key: 'firstName',
        label: 'First name',
        value: 'James',
        required: true,
        order: 2
      }),

      new TextboxQuestion({
        questionId: 3,
        key: 'lastName',
        label: 'Last name',
        value: 'Chen',
      //  required: true,
        order: 3,
        showIf: '{"showIfQuestions":[{"1":"1","2":"James"}]}',
        // tslint:disable-next-line:max-line-length
        validations: '{"requiredQuestions":[{"1":"1","2":"James"}],"required":"true","email":"false","maxLength":"2"}'
      }),
      new TextboxQuestion({
        questionId: 4,
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 4
      }),
      new DatePicker({
        questionId: 5,
        key: 'dob',
        label: 'Birthday',
        order: 5
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
