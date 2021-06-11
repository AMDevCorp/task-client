import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  task: FormGroup = this.fb.group({
    title: ['', [Validators.required]],
    due_date: [''],
    creation_date: [''],
    numeric_reference: [''],
    observation: ['', [Validators.required]],
    id: [''],
    user_id: ['']
  });

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
  }

}
