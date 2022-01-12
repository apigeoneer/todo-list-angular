import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksserviceService } from '../tasksservice.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
})
export class EditTaskComponent implements OnInit {
  selectedTask = { id: -1, title: '', desc: '' };
  selectedId = -1;
  oldTask: any;

  updateTaskButtonConfig = {
    styles: {
      backgroundColor: 'green',
    },
    text: 'Update',
  };

  constructor(
    private route: ActivatedRoute,
    private tasksService: TasksserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id') || '');
    this.selectedId = id;
    // console.log(this.selectedId);

    let tasks = this.tasksService.getTasksFromLocal();

    this.selectedTask = tasks[id];
  }

  editTask(task: any) {
    debugger;
    let tasks = this.tasksService.getTasksFromLocal();
    let oldTask = tasks[this.selectedId];
    console.log('old old task', oldTask);
    console.log('updated task', task);

    oldTask.title = task.title;
    oldTask.desc = task.desc;
    this.tasksService.setTasksToLocal(tasks);

    this.router.navigate(['/']);
  }
}
