import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todolist';

  task: any;
  tasks: any[];

  constructor() {
    this.task = { title: '', desc: '' };
    this.tasks = [];
  }

  addTask(task: any) {
    // console.log(this.task);
    this.tasks.push(task);
    this.task = { title: '', desc: '' };
  }

  removeTask(task: any) {
    let taskId = this.tasks.indexOf(task);
    // console.log(this.tasks);
    // At position taskId, remove 1 item
    this.tasks.splice(taskId, 1);
    // console.log(this.tasks);
  }

  editTask(task: any) {
    console.log(task);
  }
}
