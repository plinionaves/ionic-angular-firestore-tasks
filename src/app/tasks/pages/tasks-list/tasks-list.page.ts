import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Task } from '../../models/task.model';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.page.html',
  styleUrls: ['./tasks-list.page.scss']
})
export class TasksListPage implements OnInit {
  tasks$: Observable<Task[]>;

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.tasks$ = this.tasksService.getAll();
  }
}
