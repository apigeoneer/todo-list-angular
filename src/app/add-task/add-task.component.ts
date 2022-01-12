import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  // This component expects that the parent will supply an item.
  @Input() item: any;

  @Input() formButtonConfig: any;

  // Add task
  @Output() itemAddChange: EventEmitter<any> = new EventEmitter<any>();

  // Edit task
  @Output() itemEditChange: EventEmitter<any> = new EventEmitter<any>();

  public errorMessage = '';

  constructor() {}

  ngOnInit(): void {}

  onFormSubmit() {
    // Whenever the user updates item, we raise the event itemChange
    // & pass the updated item as the argument to it.
    debugger;

    // add enetered task
    this.itemAddChange.emit(this.item);

    // submit updated task
    this.itemEditChange.emit(this.item);
  }
}
