import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  constructor() {
    this.item = { title: '', desc: '' };
  }

  ngOnInit(): void {}

  onRemoveTask() {
    // console.log(this.item);
    this.itemRemove.emit(this.item);
  }

  onEditTask() {
    // console.log(this.item);
    this.itemEdit.emit(this.item);
  }
}
