import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tasks', component: TasksListComponent },
  { path: ':id', component: TaskDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [TasksListComponent, TaskDetailComponent];
