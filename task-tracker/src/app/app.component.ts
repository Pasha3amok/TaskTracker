import { AuthService } from './services/auth.service';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { UserRegisterData } from './interfaces';
import { Observable } from 'rxjs';
import { NgIf, CommonModule } from '@angular/common';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule,RouterOutlet, MatButton, RouterLink,NgIf],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
	title = 'task-tracker';
  login: any;

  public isAuth$: Observable<boolean>;

  /**
   *
   */
  constructor( private router:Router,
    public authService: AuthService
  ) {
    this.isAuth$;

  }

  public logout(){
    const users: UserRegisterData[] = this.authService.getUsers();
    users.map((user:UserRegisterData):void =>{
      if (user.login == this.authService.activeUser.login) {
        user.isAuth = false;
      }
    });
    window.localStorage.setItem('users', JSON.stringify(users));

    this.router.navigateByUrl('auth/login');
    this.authService.isAuth$.next(false);
  }
}
