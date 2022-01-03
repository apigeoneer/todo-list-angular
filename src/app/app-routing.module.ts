import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { HomeComponent } from './home/home.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'tasks', component: TasksListComponent },
  { path: 'taskdetail/:id', component: TaskDetailComponent },
  { path: 'taskupdate/:id', component: EditTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [TaskDetailComponent, EditTaskComponent];
