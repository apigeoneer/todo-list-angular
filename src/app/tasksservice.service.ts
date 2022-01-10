import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TasksserviceService {
  constructor() {}

  setTasksToLocal(tasks: any) {
    localStorage.setItem('todos', JSON.stringify(tasks));
    // console.log('addTaskToLocal');
    // console.log(this.tasks);
  }

  getTasksFromLocal(): any[] {
    return JSON.parse(localStorage.getItem('todos') || '');
  }
}
