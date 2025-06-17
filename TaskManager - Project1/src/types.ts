/**
 * Type definitions for the Task Manager application
 * 
 * This file contains all the TypeScript types, interfaces, and enums
 * that define the structure of our task manager data.
 */

/**
 * TaskPriority enum defines the possible priority levels for a task
 * Using string enums makes the stored values more readable in JSON
 */
export enum TaskPriority {
  Low = "low",
  Medium = "medium",
  High = "high"
}

/**
 * TaskStatus enum defines the possible states of a task
 */
export enum TaskStatus {
  Pending = "pending",
  InProgress = "in-progress",
  Completed = "completed"
}

/**
 * Task interface defines the structure of a task object
 * 
 * Properties:
 * - id: Unique identifier for the task
 * - title: Short description of the task
 * - description: Optional detailed description
 * - priority: Task importance level (from TaskPriority enum)
 * - status: Current state of the task (from TaskStatus enum)
 * - createdAt: When the task was created
 * - completedAt: When the task was completed (if applicable)
 */
export interface Task {
  id: string;
  title: string;
  description?: string; // Optional property (note the ?)
  priority: TaskPriority;
  status: TaskStatus;
  createdAt: Date;
  completedAt?: Date; // Optional property
}

/**
 * TaskStore interface defines the structure of our data storage
 * 
 * This will be used when saving/loading tasks to/from a JSON file
 */
export interface TaskStore {
  tasks: Task[];
}
