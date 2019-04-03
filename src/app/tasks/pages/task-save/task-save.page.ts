import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-task-save',
  templateUrl: './task-save.page.html',
  styleUrls: ['./task-save.page.scss']
})
export class TaskSavePage implements OnInit {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private tasksService: TasksService) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      done: [false]
    });
  }

  async onSubmit(): Promise<void> {
    try {
      const task = await this.tasksService.create(this.taskForm.value);
      console.log('Task created! ', task);
    } catch (error) {
      console.log('Error saving Task: ', error);
    }
  }
}
