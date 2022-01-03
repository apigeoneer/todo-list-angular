import { ParsedProperty, ParsedVariable } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
})
export class TaskDetailComponent implements OnInit {
  public selectedTask = { title: '', desc: '' };
  public selectedId = -1;
  public selectedTitle = '';
  public selectedDesc = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    debugger;
    let id = parseInt(this.route.snapshot.paramMap.get('id') || '');
    this.selectedId = id;
    // console.log(this.selectedId);

    let tasks = JSON.parse(localStorage.getItem('todos') || '');

    this.selectedTask = tasks[id];

    this.selectedTitle = this.selectedTask.title;
    this.selectedDesc = this.selectedTask.desc;
    // console.log(this.selectedTitle);
    // console.log(this.selectedDesc);
  }
}
