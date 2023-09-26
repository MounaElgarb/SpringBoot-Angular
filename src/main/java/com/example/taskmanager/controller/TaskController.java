package com.example.taskmanager.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.taskmanager.model.Task;
import com.example.taskmanager.service.TaskService;

@RestController
public class TaskController {

	@Autowired
	private TaskService taskService;
	
	@GetMapping("/tasks")
	public Iterable<Task> getTasks(){
		return taskService.getTasks();
	}
}
