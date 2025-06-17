/**
 * Command-Line Task Manager
 * 
 * This is the entry point for our task manager application.
 * It handles command-line arguments and interacts with the task manager.
 */

import { TaskManager } from './taskManager';
import { TaskPriority, TaskStatus } from './types';

// Create a new instance of our task manager
const taskManager = new TaskManager();

// ANSI color codes for console output
const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m"
};

/**
 * Displays help information
 */
function showHelp(): void {
  console.log(`${colors.cyan}Task Manager - Command Line Interface${colors.reset}`);
  console.log('Usage: npm start -- <command> [arguments]\n');
  console.log('Commands:');
  console.log('  add <title> [priority]         Add a new task (priority: low, medium, high)');
  console.log('  list [all|pending|completed]   List tasks (default: all)');
  console.log('  view <id>                      View task details');
  console.log('  done <id>                      Mark a task as completed');
  console.log('  start <id>                     Mark a task as in-progress');
  console.log('  priority <id> <priority>       Update task priority');
  console.log('  delete <id>                    Delete a task');
  console.log('  help                           Show this help information');
}

/**
 * Handles the 'add' command to create a new task
 */
function handleAddTask(args: string[]): void {
  if (args.length === 0) {
    console.log(`${colors.red}Error: Task title is required${colors.reset}`);
    return;
  }

  const title = args[0];
  let priority = TaskPriority.Medium;

  // Check if priority was provided
  if (args.length > 1) {
    const priorityArg = args[1].toLowerCase();
    switch (priorityArg) {
      case 'low':
        priority = TaskPriority.Low;
        break;
      case 'medium':
        priority = TaskPriority.Medium;
        break;
      case 'high':
        priority = TaskPriority.High;
        break;
      default:
        console.log(`${colors.yellow}Warning: Invalid priority '${priorityArg}', using 'medium'${colors.reset}`);
    }
  }

  // Get optional description (all remaining arguments)
  const description = args.slice(2).join(' ');

  const task = taskManager.addTask(title, description, priority);
  console.log(`${colors.green}Task added:${colors.reset} ${task.title} [${task.priority}]`);
}

/**
 * Formats a single task for display
 */
function formatTask(task: { id: string; title: string; status: TaskStatus; priority: TaskPriority }): string {
  let statusColor = colors.yellow;
  let statusSymbol = '◌';
  
  switch (task.status) {
    case TaskStatus.Completed:
      statusColor = colors.green;
      statusSymbol = '✓';
      break;
    case TaskStatus.InProgress:
      statusColor = colors.blue;
      statusSymbol = '►';
      break;
    case TaskStatus.Pending:
      statusColor = colors.yellow;
      statusSymbol = '◌';
      break;
  }

  let priorityColor = colors.reset;
  switch (task.priority) {
    case TaskPriority.High:
      priorityColor = colors.red;
      break;
    case TaskPriority.Medium:
      priorityColor = colors.yellow;
      break;
    case TaskPriority.Low:
      priorityColor = colors.green;
      break;
  }

  return `${statusColor}${statusSymbol}${colors.reset} ${task.id.substring(0, 8)} ${task.title} ${priorityColor}[${task.priority}]${colors.reset}`;
}

/**
 * Handles the 'list' command to display tasks
 */
function handleListTasks(args: string[]): void {
  let tasks;
  const filter = args[0]?.toLowerCase();

  switch (filter) {
    case 'pending':
      tasks = taskManager.getTasksByStatus(TaskStatus.Pending);
      console.log(`${colors.cyan}Pending Tasks:${colors.reset}`);
      break;
    case 'completed':
      tasks = taskManager.getTasksByStatus(TaskStatus.Completed);
      console.log(`${colors.cyan}Completed Tasks:${colors.reset}`);
      break;
    case 'in-progress':
    case 'progress':
      tasks = taskManager.getTasksByStatus(TaskStatus.InProgress);
      console.log(`${colors.cyan}In-Progress Tasks:${colors.reset}`);
      break;
    default:
      tasks = taskManager.getAllTasks();
      console.log(`${colors.cyan}All Tasks:${colors.reset}`);
  }

  if (tasks.length === 0) {
    console.log('No tasks found.');
    return;
  }

  tasks.forEach(task => {
    console.log(formatTask(task));
  });
}

/**
 * Handles the 'view' command to show task details
 */
function handleViewTask(args: string[]): void {
  if (args.length === 0) {
    console.log(`${colors.red}Error: Task ID is required${colors.reset}`);
    return;
  }

  const id = args[0];
  const task = taskManager.getTaskById(id);

  if (!task) {
    console.log(`${colors.red}Error: Task not found with ID ${id}${colors.reset}`);
    return;
  }

  console.log(`${colors.cyan}Task Details:${colors.reset}`);
  console.log(`ID: ${task.id}`);
  console.log(`Title: ${task.title}`);
  console.log(`Description: ${task.description || '(No description)'}`);
  console.log(`Priority: ${task.priority}`);
  console.log(`Status: ${task.status}`);
  console.log(`Created: ${task.createdAt.toLocaleString()}`);
  if (task.completedAt) {
    console.log(`Completed: ${task.completedAt.toLocaleString()}`);
  }
}

/**
 * Handles the 'done' command to mark a task as completed
 */
function handleCompleteTask(args: string[]): void {
  if (args.length === 0) {
    console.log(`${colors.red}Error: Task ID is required${colors.reset}`);
    return;
  }

  const id = args[0];
  const task = taskManager.updateTaskStatus(id, TaskStatus.Completed);

  if (task) {
    console.log(`${colors.green}Task marked as completed:${colors.reset} ${task.title}`);
  } else {
    console.log(`${colors.red}Error: Task not found with ID ${id}${colors.reset}`);
  }
}

/**
 * Handles the 'start' command to mark a task as in-progress
 */
function handleStartTask(args: string[]): void {
  if (args.length === 0) {
    console.log(`${colors.red}Error: Task ID is required${colors.reset}`);
    return;
  }

  const id = args[0];
  const task = taskManager.updateTaskStatus(id, TaskStatus.InProgress);

  if (task) {
    console.log(`${colors.blue}Task marked as in-progress:${colors.reset} ${task.title}`);
  } else {
    console.log(`${colors.red}Error: Task not found with ID ${id}${colors.reset}`);
  }
}

/**
 * Handles the 'priority' command to update task priority
 */
function handleUpdatePriority(args: string[]): void {
  if (args.length < 2) {
    console.log(`${colors.red}Error: Task ID and priority are required${colors.reset}`);
    return;
  }

  const id = args[0];
  const priorityArg = args[1].toLowerCase();
  let priority: TaskPriority;

  switch (priorityArg) {
    case 'low':
      priority = TaskPriority.Low;
      break;
    case 'medium':
      priority = TaskPriority.Medium;
      break;
    case 'high':
      priority = TaskPriority.High;
      break;
    default:
      console.log(`${colors.red}Error: Invalid priority '${priorityArg}'. Use low, medium, or high.${colors.reset}`);
      return;
  }

  const task = taskManager.updateTaskPriority(id, priority);

  if (task) {
    console.log(`${colors.green}Task priority updated:${colors.reset} ${task.title} [${task.priority}]`);
  } else {
    console.log(`${colors.red}Error: Task not found with ID ${id}${colors.reset}`);
  }
}

/**
 * Handles the 'delete' command to remove a task
 */
function handleDeleteTask(args: string[]): void {
  if (args.length === 0) {
    console.log(`${colors.red}Error: Task ID is required${colors.reset}`);
    return;
  }

  const id = args[0];
  const success = taskManager.deleteTask(id);

  if (success) {
    console.log(`${colors.green}Task deleted successfully${colors.reset}`);
  } else {
    console.log(`${colors.red}Error: Task not found with ID ${id}${colors.reset}`);
  }
}

// Main command processing
try {
  // Get the command and arguments
  // process.argv[0] is the path to node
  // process.argv[1] is the path to the script
  // process.argv[2] is the command
  // process.argv[3+] are the arguments
  const [,, command, ...args] = process.argv;

  // Define command handlers
  type CommandHandler = (args: string[]) => void;
  const commandHandlers: Record<string, CommandHandler> = {
    add: handleAddTask,
    list: handleListTasks,
    view: handleViewTask,
    done: handleCompleteTask,
    start: handleStartTask,
    priority: handleUpdatePriority,
    delete: handleDeleteTask,
    help: showHelp
  };

  // Execute the command or show help
  if (!command || command === 'help') {
    showHelp();
  } else {
    const handler = commandHandlers[command];
    if (handler) {
      handler(args);
    } else {
      console.log(`${colors.red}Unknown command: ${command}${colors.reset}`);
      showHelp();
    }
  }
} catch (error) {
  console.error(`${colors.red}Error: ${(error as Error).message}${colors.reset}`);
  showHelp();
}
