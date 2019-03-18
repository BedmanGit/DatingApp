import { ValidatorFn, AbstractControl } from '@angular/forms';

export function forbiddenSameNameValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
        const fname = control.get('firstName');
        const lname = control.get('lastName');
      const forbidden = fname.value === 'test';
      return forbidden ? {'forbiddenName': {value: control.value}} : null;
    };
  }
