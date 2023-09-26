import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit{
    
    task : Task = new Task();

    constructor(private taskService: TaskService, private router : Router){}

    ngOnInit(): void {
      
    }

    addTask(){
        this.taskService.createTask(this.task).subscribe( data =>{
        console.log(data);
        this.goToTaskList();
      },
      error => console.log(error));
    }

    goToTaskList(){
      this.router.navigate(['/tasks']);
    }

    onSubmit(){
        this.addTask();    
    }
}
