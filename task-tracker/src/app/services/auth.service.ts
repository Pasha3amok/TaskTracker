import { Inject } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { UserRegisterData } from "../interfaces";

@Inject({providedIn: 'root'})
export class AuthService{

  public isAuth$:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  /**
   *
   */
  constructor() {
    this.checkIsAuth();

  }

  private checkIsAuth(): void {
    const users: UserRegisterData[] = !!window.localStorage.getItem('users')
    ? JSON.parse(window.localStorage.getItem('users') || '')
    : [];
    this.isAuth$.next( users.length ? !!users.find((user: UserRegisterData) => user.isAuth)
    : false);
  }
}
