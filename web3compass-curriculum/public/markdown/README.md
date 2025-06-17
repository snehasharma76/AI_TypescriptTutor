# Command-Line Task Manager (Project 1)

This project is a command-line task manager built with TypeScript. It's designed as the first project in a series to help learn TypeScript fundamentals.

## Learning Objectives

- Setting up a TypeScript project from scratch
- Understanding TypeScript types, interfaces, and enums
- Working with the Node.js file system in TypeScript
- Parsing command-line arguments
- Implementing CRUD operations with type safety
- Data persistence using JSON files

## Project Structure

```
TaskManager - Project1/
├── src/                  # Source code
│   ├── types.ts          # Type definitions
│   ├── storage.ts        # File storage operations
│   ├── taskManager.ts    # Task management logic
│   └── index.ts          # Entry point
├── dist/                 # Compiled JavaScript (generated)
├── tsconfig.json         # TypeScript configuration
├── package.json          # Project dependencies
└── README.md             # Project documentation
```

## Development Steps

We'll build this project in several steps:

1. **Project Setup**: Initialize the project and configure TypeScript
2. **Type Definitions**: Define interfaces and types for our task manager
3. **Storage Service**: Create a service to read/write tasks to a JSON file
4. **Task Manager**: Implement the core task management functionality
5. **Command-Line Interface**: Create a CLI to interact with the task manager
6. **Testing & Refinement**: Test the application and refine as needed

Each step will be documented with explanations of the TypeScript concepts used.
