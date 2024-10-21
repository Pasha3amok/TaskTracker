import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent, RegistrationComponent } from './components';
import { RouterModule, Routes } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [{
	path: 'login',
	component: LoginComponent
},{
	path: 'registration',
	component: RegistrationComponent
}];

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatFormFieldModule,
    MatLabel,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
	RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent,RegistrationComponent]
})
export class AuthModule { }
