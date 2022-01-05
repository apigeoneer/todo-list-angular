import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksserviceService } from '../tasksservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  task: any;
  tasks: any[];

  constructor(
    private router: Router,
    private tasksService: TasksserviceService
  ) {
    this.task = { title: '', desc: '' };
    this.tasks = [];
  }

  ngOnInit(): void {
    // this.tasksService.getTasksFromLocal();
    this.getItems();
  }

  addTask(task: any) {
    debugger;
    // console.log(this.task);
    this.tasks.push(task);
    this.task = { title: '', desc: '' };

    this.saveitems();
    // this.tasks = JSON.parse(localStorage.getItem('todos') || '');
  }

  removeTask(task: any) {
    let taskId = this.tasks.indexOf(task);
    // console.log(this.tasks);
    // At position taskId, remove 1 item
    this.tasks.splice(taskId, 1);
    // console.log(this.tasks);

    // update tasks in local
    this.saveitems();
    // console.log(this.tasks);
  }

  editTask(task: any) {
    console.log(task);
  }

  onSelectTask(task: any) {
    this.router.navigate(['/taskdetail', this.tasks.indexOf(task)]);
  }

  getItems() {
    this.tasks = this.tasksService.getTasksFromLocal();
  }

  saveitems() {
    this.tasksService.setTasksToLocal(this.tasks);
  }
}
