import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TaskTrackerComponent } from './components';

const routes: Routes = [{
	path: '',
	component: TaskTrackerComponent
}];

@NgModule({
  declarations: [TaskTrackerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TaskTrackerModule { }
