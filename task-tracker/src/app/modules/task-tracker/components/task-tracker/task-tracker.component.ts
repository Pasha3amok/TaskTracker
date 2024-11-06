import { AuthService } from './../../../../services/auth.service';
import { UserRegisterData } from './../../../../interfaces/user-register-data.interface';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from '../../interfaces';

@Component({
  selector: 'app-task-tracker',
  templateUrl: './task-tracker.component.html',
  styleUrl: './task-tracker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskTrackerComponent {
  public form: FormGroup;

  users: UserRegisterData[];

  /**
   *
   */
  constructor(
    private authService: AuthService,
  ) {
    this.initForm();
    this.users = this.authService.getUsers();
  }

  public submit(): void{
    const login:string = this.form.value.login;
    const task: Task = {
      task: this.form.value.task,
      executor: this.form.value.executor || this.authService.activeUser?.login,
      creator: this.authService.activeUser?.login || '',
    }
    const tasks: Task[] = !!window.localStorage.getItem('tasks')
    ? JSON.parse(window.localStorage.getItem('tasks') || '')
    : [];
    tasks.push(task);
    this.form.reset();

    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  private initForm(): void{
    this.form = new FormGroup<any>({
      task: new FormControl(null, Validators.required),
      executor: new FormControl(null,),

    });
  }
}
