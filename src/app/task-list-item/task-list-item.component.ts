import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TasksserviceService } from '../tasksservice.service';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css'],
})
export class TaskListItemComponent implements OnInit {
  // This component expects that the parent component will supply an item value.
  @Input() item: any;

  @Output() itemRemove: EventEmitter<any> = new EventEmitter<any>();
  @Output() itemEdit: EventEmitter<any> = new EventEmitter<any>();

  @Output('getTasksFromLocal') getItems: EventEmitter<any[]> =
    new EventEmitter();

  tasks: any[] = [];

  constructor(
    private router: Router,
    private tasksService: TasksserviceService
  ) {}

  ngOnInit(): void {
    this.tasks = this.tasksService.getTasksFromLocal();
  }

  onRemoveTask() {
    // console.log(this.item);
    this.itemRemove.emit(this.item);
  }

  onEditTask() {
    this.itemEdit.emit(this.item);
  }
}
