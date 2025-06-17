# Step 3: Storage Service

In this step, we'll create a storage service that handles reading and writing tasks to a JSON file. This will allow our task manager to persist data between application runs.

## 3.1 Working with the File System in TypeScript

Node.js provides the `fs` (file system) module for working with files. When using TypeScript with Node.js, we need to use the type definitions provided by `@types/node` (which we installed in Step 1).

```typescript
import * as fs from 'fs';
import * as path from 'path';
```

The `fs` module provides functions for:
- Reading files (`readFileSync`, `readFile`)
- Writing files (`writeFileSync`, `writeFile`)
- Checking if files exist (`existsSync`)
- And many more file operations

## 3.2 Classes in TypeScript

We'll use a class to encapsulate our storage logic. Classes in TypeScript provide a way to define objects that have:
- Properties (data)
- Methods (functions)
- Access modifiers (public, private, protected)

```typescript
export class TaskStorage {
  private filePath: string;
  
  constructor(fileName: string = 'tasks.json') {
    this.filePath = path.join(process.cwd(), fileName);
  }
  
  // Methods will go here
}
```

**Key TypeScript Class Features:**
- `private` keyword restricts access to class members
- Constructor parameters can have default values
- Type annotations ensure type safety

## 3.3 Error Handling in TypeScript

When working with files, errors can occur (e.g., file not found, permission denied). TypeScript allows us to handle these errors in a type-safe way using try-catch blocks:

```typescript
try {
  // Code that might throw an error
} catch (error) {
  // Handle the error
  console.error('Error message:', error);
}
```

## 3.4 Type Conversion and Type Guards

When loading data from a JSON file, we need to convert some values back to their proper types. For example, dates stored in JSON are strings that need to be converted back to Date objects:

```typescript
// Convert string dates back to Date objects
return taskStore.tasks.map(task => ({
  ...task,
  createdAt: new Date(task.createdAt),
  completedAt: task.completedAt ? new Date(task.completedAt) : undefined
}));
```

## 3.5 Implementing the Storage Service

Our storage service will have two main methods:
1. `loadTasks()`: Reads tasks from the JSON file and returns them as Task objects
2. `saveTasks(tasks: Task[])`: Writes the tasks to the JSON file

The service will handle:
- File existence checks
- JSON parsing and serialization
- Error handling
- Type conversions

In the next step, we'll implement the task manager service that will use our storage service and provide the core functionality for managing tasks.
