import { Routes } from '@angular/router';

export const routes: Routes = [{
	path: '',
	loadChildren: () => import('./modules/auth/auth.module').then(mod => mod.AuthModule)
}];
