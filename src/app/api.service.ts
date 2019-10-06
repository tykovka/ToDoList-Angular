import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface GenericService<T> {
  getAll(): Observable<T[]>;
  get(id: string): Observable<T>;
  create(item: T): Observable<T>;
  update( id: string, item: Partial<T>): Observable<T>;
  delete( id: string):  Observable<T>;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {
  static API_URL = 'http://localhost:3000';
  constructor( private http: HttpClient) { }

  getAll(path: string): Observable<T[]> { // здесь сы возвращаем список
    return this.http.get<T[]>(`${ApiService.API_URL}/${path}`);

  }

  get(path: string, id: string): Observable<T> {
    return this.http.get<T>(`${ApiService.API_URL}/${path}/${id}`);
  }

  create(path: string, item: T): Observable<T> {
    return this.http.post<T>(`${ApiService.API_URL}/${path}`, item);
  }

  update(path: string, id: string, item: Partial<T>): Observable<T> {
    return this.http.patch<T>(`${ApiService.API_URL}/${path}/${id}`, item);
  }

  delete(path: string, id: string): Observable<T> {
    return this.http.delete<T>(`${ApiService.API_URL}/${path}/${id}`);
  }
}
