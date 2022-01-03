import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

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

  itemTitle: string = '';

  constructor(private router: Router) {
    this.item = { title: '', desc: '' };
  }

  ngOnInit(): void {}

  onRemoveTask() {
    // console.log(this.item);
    this.itemRemove.emit(this.item);
  }

  onEditTask() {
    debugger;
    let tasks = JSON.parse(localStorage.getItem('todos') || '');
    let id = tasks.indexOf(this.item);
    console.log(tasks);
    console.log(this.item);
    console.log(tasks.indexOf(this.item));
    this.router.navigate(['/taskupdate', tasks.indexOf(this.item)]);
  }
}
