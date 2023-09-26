import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from './../task.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.scss']
})
export class UpdateTaskComponent implements OnInit{

      id !:number;
      task : Task = new Task();

      constructor(private taskService : TaskService,
        private route : ActivatedRoute,
        private router : Router){ }

      ngOnInit(): void {
        this.id = this.route.snapshot.params['id'];
        this.taskService.getTaskById(this.id).subscribe(data => {
          this.task = data;
        },
        error => console.log(error));
      }

      updateTask(){
        this.taskService.updateTask(this.task).subscribe( data =>{
        console.log(data);
        this.goToTaskList();
      },
      error => console.log(error));
    }

      goToTaskList(){
        this.router.navigate(['/tasks']);
      }

      onSubmit(){
          this.updateTask();    
      }
}
