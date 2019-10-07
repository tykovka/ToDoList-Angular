import { Component, OnInit } from '@angular/core';
import { Task, TaskStatus, TaskPriority } from '../task';

@Component({
  selector: 'app-tasks-container',
  template: `<app-tasks-list [tasks] = "tasks"></app-tasks-list>`
})
export class TasksContainerComponent implements OnInit {
  private tasks: Task[] = [
    { id: '2',
      title: 'Бег 10км',
      status: TaskStatus.Uncompleted,
      priority: TaskPriority.Important

    },
    { id: '3',
      title: 'ToDoList Angular',
      status: TaskStatus.Uncompleted,
      priority: TaskPriority.Important

    },
    { id: '4',
      title: 'Посмотреть "Звездные войны"',
      status: TaskStatus.Completed,
      priority: TaskPriority.Idea
    },
    { id: '5',
      title: 'Посмотреть "Звездные войны"',
      status: TaskStatus.Completed,
      priority: TaskPriority.Idea
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
