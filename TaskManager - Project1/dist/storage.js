"use strict";
/**
 * Storage Service for Task Manager
 *
 * This module handles reading and writing tasks to a JSON file.
 * It provides persistence for our task manager application.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskStorage = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
/**
 * TaskStorage class handles the persistence of tasks to the file system
 */
class TaskStorage {
    /**
     * Creates a new TaskStorage instance
     * @param fileName - The name of the file to store tasks in (default: 'tasks.json')
     */
    constructor(fileName = 'tasks.json') {
        // Store the tasks in the current working directory
        this.filePath = path.join(process.cwd(), fileName);
    }
    /**
     * Loads tasks from the JSON file
     * @returns An array of Task objects
     */
    loadTasks() {
        try {
            // Check if the file exists before trying to read it
            if (fs.existsSync(this.filePath)) {
                // Read the file and parse the JSON
                const data = fs.readFileSync(this.filePath, 'utf8');
                const taskStore = JSON.parse(data);
                // Convert string dates back to Date objects
                // This is necessary because JSON.stringify converts Dates to strings
                return taskStore.tasks.map(task => ({
                    ...task,
                    createdAt: new Date(task.createdAt),
                    completedAt: task.completedAt ? new Date(task.completedAt) : undefined
                }));
            }
        }
        catch (error) {
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
    saveTasks(tasks) {
        try {
            // Create a TaskStore object and stringify it to JSON
            const taskStore = { tasks };
            // Write the JSON to the file
            // The null, 2 parameters make the JSON pretty-printed with 2-space indentation
            fs.writeFileSync(this.filePath, JSON.stringify(taskStore, null, 2), 'utf8');
            return true;
        }
        catch (error) {
            console.error('Error saving tasks:', error);
            return false;
        }
    }
}
exports.TaskStorage = TaskStorage;
