import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces';

@Component({
  selector: 'app-task-traker-list',
  templateUrl: './task-traker-list.component.html',
  styleUrls: ['./task-traker-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskTrakerListComponent implements OnInit {

  public tasks: Task[] = [];
  constructor() {
    this.initTasks()
   }

  private initTasks():void {
    const tasksLocalStorage: string = window.localStorage.getItem('tasks') || '';

    this.tasks = JSON.parse(tasksLocalStorage);
  }
  ngOnInit() {
  }

}
