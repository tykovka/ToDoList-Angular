import { Component, OnInit } from '@angular/core';
import { Task, TaskStatus } from '../task';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-container',
  template: `<app-task [task] = "task"></app-task>`
})
export class TaskContainerComponent implements OnInit {
  private task: Task = {
    id: '1',
    title: 'Покормить кота',
    status: TaskStatus.Uncompleted
  }

  constructor(private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params);
    });
  }

}
