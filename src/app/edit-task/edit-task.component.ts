import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksserviceService } from '../tasksservice.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
})
export class EditTaskComponent implements OnInit {
  public selectedTask = { title: '', desc: '' };
  public selectedId = -1;

  constructor(
    private route: ActivatedRoute,
    private tasksService: TasksserviceService
  ) {}

  ngOnInit(): void {
    debugger;

    let id = parseInt(this.route.snapshot.paramMap.get('id') || '');
    this.selectedId = id;
    // console.log(this.selectedId);

    let tasks = this.tasksService.getTasksFromLocal();

    this.selectedTask = tasks[id];
  }

  editTask(task: any) {
    console.log(task);
  }
}
