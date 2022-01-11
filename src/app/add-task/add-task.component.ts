import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  // This component expects that the parent will supply an item.
  @Input() item: any;

  @Input() addButtonConfig: any;

  // Add task
  @Output() itemAddChange: EventEmitter<any> = new EventEmitter<any>();

  // Edit task
  @Output() itemEditChange: EventEmitter<any> = new EventEmitter<any>();

  public errorMessage = '';

  constructor() {}

  ngOnInit(): void {}

  onAddTask() {
    debugger;
    // Whenever the user updates item, we raise the event itemChange
    // & pass the updated item as the argument to it.
    this.itemAddChange.emit(this.item);
  }

  onSubmitUpdatedTask() {
    this.itemEditChange.emit(this.item);
  }

  validateForm(id: number, title: string, desc: string) {
    if (title == null) {
      this.errorMessage = "Task title can't be blank.";
      console.log(this.errorMessage);
    }
    if (desc == null) {
      this.errorMessage = "Task description can't be blank.";
      console.log(this.errorMessage);
    }
    if (title === desc) {
      this.errorMessage = 'Task description should not match the task title.';
      console.log(this.errorMessage);
    }
  }
}
