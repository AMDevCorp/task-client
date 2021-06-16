import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {TaskListComponent} from "./tasks/task-list/task-list.component";
import {TaskDetailComponent} from "./tasks/task-detail/task-detail.component";
import {NewTaskComponent} from "./tasks/new-task/new-task.component";

const routes: Routes = [
  {path: 'task', children: [{path: 'new', component: NewTaskComponent}, {path: ':id', component: TaskDetailComponent}]},
  {path: 'tasks/list/:type', component: TaskListComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
