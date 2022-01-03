import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
})
export class EditTaskComponent implements OnInit {
  public selectedTask: any = { title: '', desc: '' };
  public selectedTitle: string = '';
  public selectedDesc: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    debugger;

    let task: string = this.route.snapshot.paramMap.get('task') || '';
    if (task) {
      this.selectedTask = JSON.parse(task);
    }

    this.selectedTitle = this.selectedTask.title;
    this.selectedDesc = this.selectedTask.desc;
    console.log(this.selectedTitle);
    console.log(this.selectedDesc);
  }

  editTask(task: any) {}
}
