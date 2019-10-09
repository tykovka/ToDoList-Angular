import { Component, OnInit } from '@angular/core';
import { Task, TaskStatus, TaskPriority } from '../task';
import { TaskService } from '../task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks-container',
  template: `<app-tasks-list [tasks] = " tasks | async " ></app-tasks-list>`
})
export class TasksContainerComponent implements OnInit {
  private tasks: Observable<Task[]>;
  constructor( private service: TaskService) { }

  ngOnInit() {
    this.tasks = this.service.tasks;
  }

}
