import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {

  task: FormGroup = this.fb.group({
    title: ['', [Validators.required]],
    due_date: [''],
    creation_date: [''],
    numeric_reference: [''],
    observation: ['', [Validators.required]],
    id: [''],
    user_id: ['']
  });

  disabled: boolean = true;

  constructor(private dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) {
    this.task.patchValue(data.task);
  }

  ngOnInit(): void {}



}
