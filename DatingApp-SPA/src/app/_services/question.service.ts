import { Injectable } from '@angular/core';
import { QuestionBase } from '../_models/QuestionBase';
import { DropdownQuestion } from '../_models/DropdownQuestion';
import { TextboxQuestion } from '../_models/TextboxQuestion';
import { DatePicker } from '../_models/DatePicker';
import { BehaviorSubject } from 'rxjs';

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
        value: '001',
        // tslint:disable-next-line:max-line-length
        customValidations: '{"requiredQuestions":[{"site":"001","firstName":"James"}], "requiredQuestionsMsg":"Required questions: site = 001, firstName = James"}',
        order: 1
      }),
      new TextboxQuestion({
        questionId: 2,
        key: 'firstName',
        label: 'First name',
        value: 'James',
        htmlValidations: {
          required: true,
          minLength: 4,
          maxLength: 6
        },
        // tslint:disable-next-line:max-line-length
        customValidations: '{"requiredQuestions":[{"site":"001","firstName":"James"}], "requiredQuestionsMsg":"Required questions: site = 001, firstName = James"}',
        order: 2
      }),
      new TextboxQuestion({
        questionId: 3,
        key: 'lastName',
        label: 'Last name',
        value: 'Chen',
      //  required: true,
        order: 3,
        htmlValidations: {
          required: true,
          minLength: 4,
          maxLength: 6
        },
        showIf: [{site: '001'}, {firstName: 'James'}],
        // tslint:disable-next-line:max-line-length
        customValidations: '{"requiredQuestions":[{"site":"001","firstName":"James"}], "requiredQuestionsMsg":"Required questions: site = 001, firstName = James"}',
      }),
      new TextboxQuestion({
        questionId: 4,
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        htmlValidations: {
          required: true,
          email: true
        },
        order: 4
      }),
      new DatePicker({
        questionId: 5,
        key: 'dob',
        label: 'Birthday',
        htmlValidations: {
          required: true
        },
        order: 5
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }

  GetHiddenQuestions(questions: QuestionBase<any>[]): BehaviorSubject<any> {
    const hideArray = [];
    questions.forEach(q => {
      if (q.showIf !== null && q.showIf.length > 0) {
        hideArray.push(q.key);
      }
    });
    const hiddenSubject = new BehaviorSubject<any>(hideArray);
    return hiddenSubject;
  }

}
