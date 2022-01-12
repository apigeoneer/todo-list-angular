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
  nextId: number = -1;
  titleInput = '';

  addTaskButtonConfig = {
    styles: {
      backgroundColor: 'yellow',
    },
    text: 'Add',
  };

  constructor(
    private router: Router,
    private tasksService: TasksserviceService
  ) {
    this.task = { id: -1, title: '', desc: '' };
    this.tasks = [];
  }

  ngOnInit(): void {
    // this.tasksService.getTasksFromLocal();
    this.getItems();
  }

  addTask(task: any) {
    debugger;
    // console.log(this.task);
    if (this.tasks.length == 0) {
      this.nextId = 0;
    } else {
      let maxId = this.tasks[this.tasks.length - 1].id;
      this.nextId = maxId + 1;
    }

    task.id = this.nextId;
    this.tasks.push(task);
    console.log(this.tasks);
    this.task = { id: -1, title: '', desc: '' };

    this.saveitems();
    // this.tasks = JSON.parse(localStorage.getItem('todos') || '');
  }

  removeTask(task: any) {
    // At position taskId, remove 1 item
    this.tasks.splice(task.id, 1);
    // console.log(this.tasks);

    // update tasks in local
    this.saveitems();
    // console.log(this.tasks);
  }

  editTask(task: any) {
    this.router.navigate(['/taskupdate', task.id]);
  }

  onSelectTask(task: any) {
    this.router.navigate(['/taskdetail', task.id]);
  }

  getItems() {
    this.tasks = this.tasksService.getTasksFromLocal();
  }

  saveitems() {
    this.tasksService.setTasksToLocal(this.tasks);
  }
}
