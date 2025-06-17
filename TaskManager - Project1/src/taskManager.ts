/**
 * Task Manager Service
 * 
 * This module provides the core functionality for managing tasks.
 * It implements CRUD operations (Create, Read, Update, Delete) for tasks.
 */

import { v4 as uuidv4 } from 'uuid';
import { Task, TaskPriority, TaskStatus } from './types';
import { TaskStorage } from './storage';

/**
 * TaskManager class handles all task operations
 */
export class TaskManager {
  private tasks: Task[];
  private storage: TaskStorage;

  /**
   * Creates a new TaskManager instance
   * Loads existing tasks from storage
   */
  constructor() {
    this.storage = new TaskStorage();
    this.tasks = this.storage.loadTasks();
  }

  /**
   * Adds a new task
   * @param title - Task title
   * @param description - Optional task description
   * @param priority - Task priority (default: Medium)
   * @returns The newly created task
   */
  addTask(title: string, description: string = '', priority: TaskPriority = TaskPriority.Medium): Task {
    const newTask: Task = {
      id: uuidv4(),
      title,
      description,
      priority,
      status: TaskStatus.Pending,
      createdAt: new Date()
    };

    this.tasks.push(newTask);
    this.storage.saveTasks(this.tasks);
    return newTask;
  }

  /**
   * Gets all tasks
   * @returns Array of all tasks
   */
  getAllTasks(): Task[] {
    return this.tasks;
  }

  /**
   * Gets tasks filtered by status
   * @param status - Status to filter by
   * @returns Array of tasks with the specified status
   */
  getTasksByStatus(status: TaskStatus): Task[] {
    return this.tasks.filter(task => task.status === status);
  }

  /**
   * Gets tasks filtered by priority
   * @param priority - Priority to filter by
   * @returns Array of tasks with the specified priority
   */
  getTasksByPriority(priority: TaskPriority): Task[] {
    return this.tasks.filter(task => task.priority === priority);
  }

  /**
   * Updates the status of a task
   * @param id - ID of the task to update
   * @param status - New status
   * @returns The updated task or undefined if not found
   */
  updateTaskStatus(id: string, status: TaskStatus): Task | undefined {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.status = status;
      
      // If the task is completed, set the completedAt date
      // Otherwise, clear the completedAt date
      if (status === TaskStatus.Completed) {
        task.completedAt = new Date();
      } else {
        task.completedAt = undefined;
      }
      
      this.storage.saveTasks(this.tasks);
      return task;
    }
    return undefined;
  }

  /**
   * Updates the priority of a task
   * @param id - ID of the task to update
   * @param priority - New priority
   * @returns The updated task or undefined if not found
   */
  updateTaskPriority(id: string, priority: TaskPriority): Task | undefined {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.priority = priority;
      this.storage.saveTasks(this.tasks);
      return task;
    }
    return undefined;
  }

  /**
   * Deletes a task
   * @param id - ID of the task to delete
   * @returns True if the task was deleted, false otherwise
   */
  deleteTask(id: string): boolean {
    const initialLength = this.tasks.length;
    this.tasks = this.tasks.filter(task => task.id !== id);
    
    if (this.tasks.length !== initialLength) {
      this.storage.saveTasks(this.tasks);
      return true;
    }
    return false;
  }

  /**
   * Gets a task by ID
   * @param id - ID of the task to get
   * @returns The task or undefined if not found
   */
  getTaskById(id: string): Task | undefined {
    return this.tasks.find(task => task.id === id);
  }
}
