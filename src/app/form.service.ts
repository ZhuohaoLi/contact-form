import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private fb: FormBuilder) { }
  getForm(){
    
    return this.fb.group( {
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100),Validators.pattern('[a-zA-Z ]*')]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(2),Validators.maxLength(9)]],
      email: ['', [Validators.required, Validators.email]],
      birthday: ['', [Validators.required,this.validDate]],
      message: ['', Validators.required],
    });

  }
  validDate(control:FormControl){
    let date=moment(control.value);
    let valid=moment().subtract(100,'years');
    if(date.isAfter(moment()) || date.isBefore(valid)){
      return{
        isError:true 
      };
    }
    return null;

   }
  
}
