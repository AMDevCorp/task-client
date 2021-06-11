import {Component, Input, OnInit} from '@angular/core';
import {Task} from "../../models/Task";
import {MatDialog} from "@angular/material/dialog";
import {TaskDetailComponent} from "../task-detail/task-detail.component";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task!: Task;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openTask(task: Task) {
    this.dialog.open(TaskDetailComponent, {
      width: '95%',
      maxWidth: '500px',
      height: 'auto',
      maxHeight: 'auto',
      data: {task: task},
      autoFocus: false
    }).afterClosed().subscribe(() =>{
    })
  }


}
