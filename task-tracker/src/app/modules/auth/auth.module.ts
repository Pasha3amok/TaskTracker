import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent, RegistrationComponent } from './components';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
	path: 'login',
	component: LoginComponent
}];

@NgModule({
  imports: [
    CommonModule,
	RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent,RegistrationComponent]
})
export class AuthModule { }
