import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-tracker',
  templateUrl: './task-tracker.component.html',
  styleUrl: './task-tracker.component.scss'
})
export class TaskTrackerComponent {
  public form: FormGroup;

  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  /**
   *
   */
  constructor() {
    this.initForm();
  }

  public submit(): void{
    console.log(this.form.value);

  }

  private initForm(): void{
    this.form = new FormGroup<any>({
      task: new FormControl(null),
      executor: new FormControl(null),

    });
  }
}
