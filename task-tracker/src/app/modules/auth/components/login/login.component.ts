import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import {formFieldTypes} from '../../types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form:FormGroup;

  constructor() {
    this.initForm();
   }

   public submit():void{
    console.log(this.form.controls)
   }

   public getErrorMessage(fieldName: formFieldTypes):string{

     const field: AbstractControl = this.form.controls[fieldName];
     const isRequired: boolean = field?.errors?.["required"];
    return isRequired ? "Field is required" : `${fieldName} is not valid`;
   }

  private initForm():void{
    this.form = new FormGroup<any>({
      email: new FormControl(null,[Validators.required, Validators.email]),
      password: new FormControl(null,[Validators.required, Validators.minLength(5)]),
    }
    );
  }

  ngOnInit() {
  }

}
