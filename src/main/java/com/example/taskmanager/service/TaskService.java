package com.example.taskmanager.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.taskmanager.model.Task;
import com.example.taskmanager.repository.TaskRepository;

import lombok.Data;

@Data
@Service
public class TaskService {
	
	@Autowired
	private TaskRepository taskRepository;
	
	public Optional<Task> getTask(final Long id){
		return taskRepository.findById(id);
	}
	
	public Iterable<Task> getTasks(){
		return taskRepository.findAll();
	}
	
	public void deleteTask(final Long id) {
		taskRepository.deleteById(id);
	}
	
	public Task saveTask(Task task) {
		return taskRepository.save(task);
	}
}
