# Step 5: Command-Line Interface

In this step, we'll create a command-line interface (CLI) that allows users to interact with our task manager. We'll parse command-line arguments and call the appropriate methods on our TaskManager class.

## 5.1 Parsing Command-Line Arguments in TypeScript

Node.js provides access to command-line arguments through `process.argv`. This is an array where:
- `process.argv[0]` is the path to the Node.js executable
- `process.argv[1]` is the path to the JavaScript file being executed
- `process.argv[2]` and beyond are the actual command-line arguments

```typescript
// Get the command and arguments
const [,, command, ...args] = process.argv;
```

## 5.2 Command Pattern in TypeScript

We'll use a simple command pattern to organize our CLI. Each command will have its own handler function:

```typescript
type CommandHandler = (args: string[]) => void;

const commandHandlers: Record<string, CommandHandler> = {
  add: handleAddTask,
  list: handleListTasks,
  // more commands...
};

// Execute the command
const handler = commandHandlers[command];
if (handler) {
  handler(args);
} else {
  showHelp();
}
```

## 5.3 String Manipulation and Type Conversion

When working with command-line arguments, we often need to convert strings to other types:

```typescript
// Convert string to enum
const priority = args[1] as keyof typeof TaskPriority;
const taskPriority = TaskPriority[priority] || TaskPriority.Medium;

// Convert string to number
const taskId = parseInt(args[0], 10);
```

TypeScript helps ensure that these conversions are handled safely.

## 5.4 Formatting Console Output

To make our CLI user-friendly, we'll format the console output:

```typescript
// Color codes for console output
const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m"
};

// Format a task for display
function formatTask(task: Task): string {
  const statusColor = task.status === TaskStatus.Completed ? colors.green : colors.yellow;
  return `${task.id}: ${statusColor}${task.title}${colors.reset} [${task.priority}]`;
}
```

## 5.5 Implementing the CLI

Our CLI will support the following commands:
- `add <title> [priority]` - Add a new task
- `list [all|pending|completed]` - List tasks
- `done <id>` - Mark a task as completed
- `start <id>` - Mark a task as in-progress
- `priority <id> <priority>` - Update task priority
- `delete <id>` - Delete a task
- `help` - Show help information

Each command will be implemented as a separate function that uses our TaskManager class.

## 5.6 Error Handling in the CLI

We'll implement error handling to provide helpful messages when something goes wrong:

```typescript
try {
  // Command execution
} catch (error) {
  console.error(`${colors.red}Error: ${error.message}${colors.reset}`);
}
```

In the next step, we'll test our application and make any necessary refinements.
