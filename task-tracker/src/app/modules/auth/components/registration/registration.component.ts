import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public form:FormGroup;

  constructor() {
    this.initForm();
   }

   public submit():void{
    console.log(this.form.controls)
   }

   public getErrorMessage(fieldName: "eMail" | "password" | "login"):string{

     const field: AbstractControl = this.form.controls[fieldName];
     const isRequired: boolean = field?.errors?.["required"];
    return isRequired ? "Field is required" : `${fieldName} is not valid`;
   }

  private initForm():void{
    this.form = new FormGroup<any>({
      eMail: new FormControl(null,[Validators.required, Validators.email]),
      password: new FormControl(null,[Validators.required]),
      login: new FormControl(null,[Validators.required, Validators.minLength(5)]),
    }
    );
  }

  ngOnInit() {
  }

}

