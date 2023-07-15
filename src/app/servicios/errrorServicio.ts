import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class errorServicio {
  constructor() { }
  validate(form: FormGroup, field: string): boolean | null {
    return form.controls[field].errors && form.controls[field].touched;}
}
