import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  task: any;
  tasks: any[];

  constructor(private router: Router) {
    this.task = { title: '', desc: '' };
    this.tasks = [];
  }

  ngOnInit(): void {}

  addTask(task: any) {
    // console.log(this.task);
    this.tasks.push(task);
    this.task = { title: '', desc: '' };

    this.addTaskToLocal();
    // this.tasks = JSON.parse(localStorage.getItem('todos') || '');
  }

  removeTask(task: any) {
    let taskId = this.tasks.indexOf(task);
    // console.log(this.tasks);
    // At position taskId, remove 1 item
    this.tasks.splice(taskId, 1);
    // console.log(this.tasks);

    // update tasks in local
    localStorage.setItem('todos', JSON.stringify(this.tasks));
    // console.log(this.tasks);
  }

  editTask(task: any) {
    console.log(task);
  }

  addTaskToLocal() {
    localStorage.setItem('todos', JSON.stringify(this.tasks));
    // console.log('addTaskToLocal');
    // console.log(this.tasks);
  }

  getTasksFromLocal() {
    localStorage.getItem('todos');
  }

  onSelectTask(task: any) {
    this.router.navigate(['/taskdetail', this.tasks.indexOf(task)]);
  }
}
