import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';

const routes: Routes = [
  {path: 'tasks', component: TaskListComponent},
  {path: '', redirectTo:"tasks", pathMatch:"full"},
  {path:'addtask', component: AddTaskComponent},
  {path:'update-task/:id', component: UpdateTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
