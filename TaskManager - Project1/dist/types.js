"use strict";
/**
 * Type definitions for the Task Manager application
 *
 * This file contains all the TypeScript types, interfaces, and enums
 * that define the structure of our task manager data.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskStatus = exports.TaskPriority = void 0;
/**
 * TaskPriority enum defines the possible priority levels for a task
 * Using string enums makes the stored values more readable in JSON
 */
var TaskPriority;
(function (TaskPriority) {
    TaskPriority["Low"] = "low";
    TaskPriority["Medium"] = "medium";
    TaskPriority["High"] = "high";
})(TaskPriority || (exports.TaskPriority = TaskPriority = {}));
/**
 * TaskStatus enum defines the possible states of a task
 */
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["Pending"] = "pending";
    TaskStatus["InProgress"] = "in-progress";
    TaskStatus["Completed"] = "completed";
})(TaskStatus || (exports.TaskStatus = TaskStatus = {}));
