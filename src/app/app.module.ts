import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';

import { FormsModule } from '@angular/forms';
import { TaskListItemComponent } from './task-list-item/task-list-item.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { HomeComponent } from './home/home.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TasksserviceService } from './tasksservice.service';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TaskListItemComponent,
    routingComponents,
    TasksListComponent,
    HomeComponent,
    EditTaskComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [TasksserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
