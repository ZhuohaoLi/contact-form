import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { FormService } from '../form.service';



@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  profileForm: FormGroup;
  inputvalues=[];
  mindate=moment().subtract(101,'years');
  maxdate=moment();
  greetings="";
  
  constructor(private _formservice:FormService) {
    
  }

  ngOnInit() {
    this.profileForm=this._formservice.getForm();
    /*this.profileForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100),Validators.pattern('[a-zA-Z ]*')]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(2),Validators.maxLength(9)]],
      email: ['', [Validators.required, Validators.email]],
      birthday: ['', [Validators.required,this.validDate]],
      message: ['', Validators.required],
    });*/
  }
  /*validDate(control:FormControl){
    let date=moment(control.value);
    let valid=moment().subtract(100,'years');
    if(date.isAfter(moment()) || date.isBefore(valid)){
      return{
        isError:true 
      };
    }
    return null;

   }*/
  

  onSubmit() {
    if(this.profileForm.status.localeCompare("VALID")==0){
        console.log(this.profileForm);
        console.log(this.profileForm.value.birthday);
        this.inputvalues=[this.profileForm.value.name,this.profileForm.value.phone,this.profileForm.value.email,this.profileForm.value.birthday,this.profileForm.value.message]
        console.log(this.inputvalues);
        document.getElementById('displayName').innerHTML = this.profileForm.value.name;
        document.getElementById('displayPhonenumber').innerHTML = this.profileForm.value.phone;
        document.getElementById('displayEmailaddress').innerHTML = this.profileForm.value.email;
        document.getElementById('displayDateofbirth').innerHTML= this.profileForm.value.birthday;
        document.getElementById('displayMessage').innerHTML = this.profileForm.value.message;
        
     }
    
    /*console.log(this.profileForm);
    let nameInput=this.profileForm.value.name;
    let phoneInput=this.profileForm.value.phone;
    let emailInput=this.profileForm.value.email;
    let birthdayInput=this.profileForm.value.birthday;
    let messageInput=this.profileForm.value.message;
    let str: string[]=[nameInput,phoneInput,emailInput,birthdayInput,messageInput];*/

  }
  get name(){return this.profileForm.get('name');}
  get phone(){return this.profileForm.get('phone');}
  get email(){return this.profileForm.get('email');}
  get birthday(){return this.profileForm.get('birthday');}
  get message(){return this.profileForm.get('message');}

}
