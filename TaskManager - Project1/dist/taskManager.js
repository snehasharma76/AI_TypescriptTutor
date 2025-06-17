"use strict";
/**
 * Task Manager Service
 *
 * This module provides the core functionality for managing tasks.
 * It implements CRUD operations (Create, Read, Update, Delete) for tasks.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = void 0;
const uuid_1 = require("uuid");
const types_1 = require("./types");
const storage_1 = require("./storage");
/**
 * TaskManager class handles all task operations
 */
class TaskManager {
    /**
     * Creates a new TaskManager instance
     * Loads existing tasks from storage
     */
    constructor() {
        this.storage = new storage_1.TaskStorage();
        this.tasks = this.storage.loadTasks();
    }
    /**
     * Adds a new task
     * @param title - Task title
     * @param description - Optional task description
     * @param priority - Task priority (default: Medium)
     * @returns The newly created task
     */
    addTask(title, description = '', priority = types_1.TaskPriority.Medium) {
        const newTask = {
            id: (0, uuid_1.v4)(),
            title,
            description,
            priority,
            status: types_1.TaskStatus.Pending,
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
    getAllTasks() {
        return this.tasks;
    }
    /**
     * Gets tasks filtered by status
     * @param status - Status to filter by
     * @returns Array of tasks with the specified status
     */
    getTasksByStatus(status) {
        return this.tasks.filter(task => task.status === status);
    }
    /**
     * Gets tasks filtered by priority
     * @param priority - Priority to filter by
     * @returns Array of tasks with the specified priority
     */
    getTasksByPriority(priority) {
        return this.tasks.filter(task => task.priority === priority);
    }
    /**
     * Updates the status of a task
     * @param id - ID of the task to update
     * @param status - New status
     * @returns The updated task or undefined if not found
     */
    updateTaskStatus(id, status) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.status = status;
            // If the task is completed, set the completedAt date
            // Otherwise, clear the completedAt date
            if (status === types_1.TaskStatus.Completed) {
                task.completedAt = new Date();
            }
            else {
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
    updateTaskPriority(id, priority) {
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
    deleteTask(id) {
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
    getTaskById(id) {
        return this.tasks.find(task => task.id === id);
    }
}
exports.TaskManager = TaskManager;
