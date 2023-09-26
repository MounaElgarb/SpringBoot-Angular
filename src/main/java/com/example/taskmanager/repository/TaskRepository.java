package com.example.taskmanager.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.taskmanager.model.Task;

@Repository
public interface TaskRepository extends CrudRepository<Task, Long>{

}
