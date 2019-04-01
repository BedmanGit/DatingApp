import { ValidatorFn, ValidationErrors, FormControl, FormGroup, AbstractControl } from '@angular/forms';
import { QuestionBase } from '../_models/QuestionBase';
import { analyzeAndValidateNgModules } from '@angular/compiler';

export function customerValidations2(validations: string): ValidatorFn {
   let valid: boolean;
   let errMsg: string;
   errMsg = '';
  return (currentControl: FormControl): {[key: string]: boolean} | null => {
    if (validations !== undefined && validations !== '') {
      const rules = JSON.parse(validations);
      if (rules.requiredQuestions !== null) {
        rules.requiredQuestions.forEach(requiredQuestionsObj => {
         valid = true;
         if (currentControl.parent !== undefined) {
          for (const key in requiredQuestionsObj) {
            // tslint:disable-next-line:max-line-length
            if (currentControl.parent.controls[key].value !== requiredQuestionsObj[key] && currentControl.parent.controls[key].value !== '') {
              valid = false;
              break;
             }
          }
        }
        });
      }
      if (!valid && rules.requiredQuestionsMsg !== null) {
        errMsg = rules.requiredQuestionsMsg;
      }
    }
    if (errMsg !== '' && errMsg !== undefined) {
       const obj = JSON.parse('{"' + errMsg + '":' + 'true' + '}');
      return valid ? null : obj;
    } else {
      return valid ? null : {'Validation Failed' : true};
    }
  };
}

export function customerValidations(questions: QuestionBase<any>[]): ValidatorFn {
  let valid: boolean;
  return (g: FormGroup): {[key: string]: boolean} | null => {
    Object.keys(g.controls).forEach((name) => {
      console.log(name);
        const question = questions.filter(q => q.key === name)[0];
        if (question.validations !== undefined && question.validations !== '') {
          const rules = JSON.parse(question.validations);
          if (rules.requiredQuestions !== null) {
            rules.requiredQuestions.forEach(requiredQuestionsObj => {
              valid = true;
              for (const key in requiredQuestionsObj) {
                if (g.controls[key].value !== requiredQuestionsObj[key.toString()] && g.controls[key].value !== '') {
                  // console.log(g.controls[name].value);
                  valid = false;
                  break;
                }
              }
             // return {'requiredQuestions': true};
            });
          }
        }
    });
    return valid ? null : {'requiredQuestions': true};
/*  return (g: FormGroup) => {
    questions.forEach(question => {
        if (question.validations !== '') {
          const rules = JSON.parse(question.validations);
          if (rules.requiredQuestions !== null) {
            rules.requiredQuestions.forEach(function(obj) {
              for (const key in obj) {
                if (g.controls[key].value === obj[key.toString()]) {
                  console.log(g.controls[key].value);
                  return {error: {valid: false, msg: 'not valid'}};
                }
              }

            });
          }
        }
      });
      */
     };
  }
