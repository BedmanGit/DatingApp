import {Component, Input, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ngbd-datepicker-popup',
  template: `<div class="form-group" [formGroup]="formgp" >
  <input type="text"
        placeholder="Datepicker" [formControlName]="key"
        class="form-control ml-4 W-100" name="key"
        bsDatepicker>
</div>`
})

export class NgbdDatepickerPopupComponent {
  @Input() key: string;
  @Input() formgp: FormGroup;

}
