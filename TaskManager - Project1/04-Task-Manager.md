# Step 4: Task Manager Service

In this step, we'll create the core task management functionality. The Task Manager will provide methods to create, read, update, and delete tasks (CRUD operations).

## 4.1 Implementing CRUD Operations in TypeScript

CRUD (Create, Read, Update, Delete) operations are fundamental to many applications. In our task manager, we'll implement:

- **Create**: Add new tasks
- **Read**: Retrieve tasks (all, by status, by priority, by ID)
- **Update**: Modify task properties (status, priority)
- **Delete**: Remove tasks

Each operation will be implemented with type safety using our previously defined types.

## 4.2 Generating Unique IDs

For each task, we need a unique identifier. We'll use the `uuid` package to generate these IDs:

```typescript
import { v4 as uuidv4 } from 'uuid';

// Generate a new unique ID
const id = uuidv4();
```

**Note:** We'll need to install this package:
```bash
npm install uuid
npm install --save-dev @types/uuid
```

## 4.3 Working with Arrays in TypeScript

Our task manager will store tasks in an array and perform various operations on it:

- **Filter**: Get tasks that match certain criteria
  ```typescript
  const pendingTasks = this.tasks.filter(task => task.status === TaskStatus.Pending);
  ```

- **Find**: Get a specific task by ID
  ```typescript
  const task = this.tasks.find(task => task.id === id);
  ```

- **Map**: Transform tasks
  ```typescript
  const taskTitles = this.tasks.map(task => task.title);
  ```

TypeScript provides type safety for these array operations, ensuring that we're working with the correct data types.

## 4.4 Optional Properties and Undefined Checks

When working with optional properties (marked with `?` in interfaces), we need to handle cases where they might be undefined:

```typescript
if (task.completedAt) {
  // Do something with completedAt
}
```

TypeScript helps us by requiring these checks before accessing optional properties.

## 4.5 Implementing the Task Manager Class

Our TaskManager class will:
1. Use the TaskStorage service to load and save tasks
2. Provide methods for all CRUD operations
3. Maintain the current state of tasks in memory
4. Ensure type safety throughout

In the next step, we'll create a command-line interface that allows users to interact with our task manager.
