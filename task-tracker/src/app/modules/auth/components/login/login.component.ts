import { MatSnackBar } from '@angular/material/snack-bar';
import { UserRegisterData } from './../../../../interfaces/user-register-data.interface';
import { AuthService } from './../../../../services/auth.service';
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

  constructor(
    private authService: AuthService,
    private matSnackBar: MatSnackBar) {
    this.initForm();
   }

   public submit():void{
    const users: UserRegisterData[] = this.authService.getUsers();
    const user: UserRegisterData | undefined = users.find((userData: UserRegisterData) => userData.email === this.form.value.email)

    if (!user) {
      this.matSnackBar.open('User not found', 'OK')
      return;
    }

    if (this.form.value.password !== user?.password) {
      this.matSnackBar.open('Check your password','OK');
      return;
    }

    users.map((userRegisterData: UserRegisterData) => {
      if (userRegisterData.login === user?.login) {
        userRegisterData.isAuth = true;
      }
    })
    window.localStorage.setItem('users', JSON.stringify(users));

    this.matSnackBar.open('Success');
    this.router.navigateByUrl('task-tracker');
    this.authService.isAuth$.next(true);
    this.authService.activeUser = user;
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
