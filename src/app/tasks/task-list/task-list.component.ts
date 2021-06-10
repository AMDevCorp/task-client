import { Component, OnInit } from '@angular/core';
import {Task} from "../../models/Task";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] =  [{
    id: '1',
    title: 'Igna el re gay',
    due_date: '2021-08-09T00:00:00.000Z',
    creation_date: new Date().toString(),
    observation: 'El igna es un re gay',
    numeric_reference: 20000,
    user_id: 'Agus el kpo'
  },{
    id: '2',
    title: 'Igna el re gay',
    due_date: '2021-08-09T00:00:00.000Z',
    creation_date: new Date().toString(),
    observation: 'El igna es un re gay',
    numeric_reference: 20000,
    user_id: 'Agus el kpo'
  },{
    id: '3',
    title: 'Igna el re gay',
    due_date: '2021-08-09T00:00:00.000Z',
    creation_date: new Date().toString(),
    observation: 'El igna es un re gay',
    numeric_reference: 20000,
    user_id: 'Agus el kpo'
  },{
    id: '4',
    title: 'Igna el re gay',
    due_date: '2021-08-09T00:00:00.000Z',
    creation_date: new Date().toString(),
    observation: 'El igna es un re gay',
    numeric_reference: 20000,
    user_id: 'Agus el kpo'
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
