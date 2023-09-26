import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title !: String;

  ngOnInit(): void {
    this.title = "Task Manager System" 
  }  
}
