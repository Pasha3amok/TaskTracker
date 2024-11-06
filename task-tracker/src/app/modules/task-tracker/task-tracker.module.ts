import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TaskTrackerComponent } from './components';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatGridListModule } from "@angular/material/grid-list";
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from "@angular/material/input";
import { MatButton } from '@angular/material/button';

const routes: Routes = [{
	path: '',
	component: TaskTrackerComponent
}];

@NgModule({
  declarations: [TaskTrackerComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatGridListModule ,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButton,
    RouterModule.forChild(routes)
  ]
})
export class TaskTrackerModule { }
