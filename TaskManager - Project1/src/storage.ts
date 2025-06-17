/**
 * Storage Service for Task Manager
 * 
 * This module handles reading and writing tasks to a JSON file.
 * It provides persistence for our task manager application.
 */

import * as fs from 'fs';
import * as path from 'path';
import { Task, TaskStore } from './types';

/**
 * TaskStorage class handles the persistence of tasks to the file system
 */
export class TaskStorage {
  private filePath: string;
  
  /**
   * Creates a new TaskStorage instance
   * @param fileName - The name of the file to store tasks in (default: 'tasks.json')
   */
  constructor(fileName: string = 'tasks.json') {
    // Store the tasks in the current working directory
    this.filePath = path.join(process.cwd(), fileName);
  }

  /**
   * Loads tasks from the JSON file
   * @returns An array of Task objects
   */
  loadTasks(): Task[] {
    try {
      // Check if the file exists before trying to read it
      if (fs.existsSync(this.filePath)) {
        // Read the file and parse the JSON
        const data = fs.readFileSync(this.filePath, 'utf8');
        const taskStore: TaskStore = JSON.parse(data);
        
        // Convert string dates back to Date objects
        // This is necessary because JSON.stringify converts Dates to strings
        return taskStore.tasks.map(task => ({
          ...task,
          createdAt: new Date(task.createdAt),
          completedAt: task.completedAt ? new Date(task.completedAt) : undefined
        }));
      }
    } catch (error) {
      // Log the error but don't crash the application
      console.error('Error loading tasks:', error);
    }
    
    // Return an empty array if the file doesn't exist or there's an error
    return [];
  }

  /**
   * Saves tasks to the JSON file
   * @param tasks - Array of Task objects to save
   * @returns boolean indicating success or failure
   */
  saveTasks(tasks: Task[]): boolean {
    try {
      // Create a TaskStore object and stringify it to JSON
      const taskStore: TaskStore = { tasks };
      
      // Write the JSON to the file
      // The null, 2 parameters make the JSON pretty-printed with 2-space indentation
      fs.writeFileSync(this.filePath, JSON.stringify(taskStore, null, 2), 'utf8');
      return true;
    } catch (error) {
      console.error('Error saving tasks:', error);
      return false;
    }
  }
}
