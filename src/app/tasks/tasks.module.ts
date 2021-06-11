import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewTaskComponent} from './new-task/new-task.component';
import {TaskListComponent} from './task-list/task-list.component';
import {TaskComponent} from './task/task.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {TaskDetailComponent} from './task-detail/task-detail.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatTooltipModule} from "@angular/material/tooltip";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    NewTaskComponent,
    TaskListComponent,
    TaskComponent,
    TaskDetailComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    MatDialogModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TasksModule {
}
