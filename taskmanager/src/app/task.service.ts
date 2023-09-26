import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseUrl = "http://localhost:8080/api/tasks"
  
  constructor(private httpClient : HttpClient) {}
  
  getTasksList(): Observable<Task[]>{
          return this.httpClient.get<Task[]>(`${this.baseUrl}`);
        }
  
  createTask(task: Task): Observable<Object>{
          return this.httpClient.post(`${this.baseUrl}`, task);
  }

  getTaskById(id : number): Observable<Task>{
    return this.httpClient.get<Task>(`${this.baseUrl}/${id}`);
  }

  updateTask(task : Task): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${task.id}`, task);
  }

  deleteTask(id : number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}

