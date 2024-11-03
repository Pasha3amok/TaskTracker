import { Routes } from '@angular/router';

export const routes: Routes = [{
	path: '',
	redirectTo:'auth/login',
	pathMatch:'full',
},
{
	path: 'auth',
	loadChildren: () => import('./modules/auth/auth.module').then(mod => mod.AuthModule)
},
{
	path: 'task-tracker',
	loadChildren: () => import('./modules/task-tracker/task-tracker.module').then(mod => mod.TaskTrackerModule)
}];
