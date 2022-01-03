import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TasksserviceService {
  public tasks: any[] = [];

  constructor() {}

  setTasksToLocal() {
    localStorage.setItem('todos', JSON.stringify(this.tasks));
    // console.log('addTaskToLocal');
    // console.log(this.tasks);
  }

  getTasksFromLocal() {
    localStorage.getItem('todos');
  }
}
