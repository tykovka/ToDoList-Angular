import { Injectable } from '@angular/core';
import { ApiService, GenericService } from './api.service';
import { Task } from './task'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService implements GenericService<Task> {

  constructor(private api: ApiService<Task>) { }

  getAll(): Observable<Task[]> {
    return this.api.getAll('tasks');
  }

  create(task: Task): Observable<Task> {
    return this.api.create('tasks', task);
  }

  get(id: string): Observable<Task> {
    return this.api.get('tasks', id);
  }

  update(id: string, task: Partial<Task>): Observable<Task> {
    return this.api.update('tasks', id,task);
  }

  delete(id: string): Observable<Task> {
    return this.api.delete('tasks', id);
  }
}
