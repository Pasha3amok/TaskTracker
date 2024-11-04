import { routes } from './../../../../app.routes';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import {formFieldTypes} from '../../types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  public form:FormGroup;
  router = inject(Router);

  constructor() {
    this.initForm();
   }

   public submit():void{
    const login:string = this.form.value.login;
    const isLocalData = window.localStorage.getItem(login);
    if (isLocalData != null) {
      const users = JSON.parse(isLocalData);

      const isUserFound = users.find((m:any) => m.email == this.form.value.email && m.password == this.form.value.password)
      if (isUserFound != undefined) {
        this.router.navigate(['./task-tracker']);
      } else{
        alert("User name or password is wrong");
      }
    } else {
      alert("No user found");
    }
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
