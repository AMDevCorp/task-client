import { Component, OnInit } from '@angular/core';
import {Task} from "../../models/Task";
import {TaskDetailComponent} from "../../tasks/task-detail/task-detail.component";
import {MatDialog} from "@angular/material/dialog";
import {NewTaskComponent} from "../../tasks/new-task/new-task.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  newTask() {
    this.dialog.open(NewTaskComponent, {
      width: '95%',
      maxWidth: '500px',
      height: 'auto',
      maxHeight: 'auto',
      autoFocus: false
    }).afterClosed().subscribe(() =>{
    })
  }

}
