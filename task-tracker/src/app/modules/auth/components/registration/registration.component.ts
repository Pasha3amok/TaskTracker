import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import {formFieldTypes} from '../../types';
import { UserRegisterData } from '../../interfaces';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public form:FormGroup;

  constructor(private matSnackBar:MatSnackBar) {
    this.initForm();
   }

   public submit():void{
    const login:string = this.form.value.login;
    const userData: UserRegisterData = {
      email: this.form.value.email,
      password: this.form.value.password,
      login,
    }

    window.localStorage.setItem(login, JSON.stringify(userData))
    this.matSnackBar.open('Succes', 'Ok');
   }

   public getErrorMessage(fieldName: formFieldTypes):string{

     const field: AbstractControl = this.form.controls[fieldName];
     const isRequired: boolean = field?.errors?.["required"];
    return isRequired ? "Field is required" : `${fieldName} is not valid`;
   }

  private initForm():void{
    this.form = new FormGroup<any>({
      email: new FormControl(null,[Validators.required, Validators.email]),
      password: new FormControl(null,[Validators.required]),
      login: new FormControl(null,[Validators.required, Validators.minLength(5)]),
    }
    );
  }

  ngOnInit() {
  }

}

