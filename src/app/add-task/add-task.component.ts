import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  // This component expects that the parent will supply an item.
  @Input() item: any;

  @Output() itemChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onAddTask() {
    // Whenever the user updates item, we raise the event itemChange
    // & pass the updated item as the argument to it.
    this.itemChange.emit(this.item);
  }
}
