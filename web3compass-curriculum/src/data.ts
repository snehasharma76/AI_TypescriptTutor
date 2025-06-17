import { CurriculumData, DifficultyLevel } from './types';

export const curriculumData: CurriculumData = {
  title: "TypeScript Learning Path",
  description: "A progressive series of projects to help you master TypeScript from beginner to advanced levels.",
  projects: [
    {
      id: "task-manager",
      title: "Command-Line Task Manager",
      description: "A command-line tool for managing tasks with features like adding, listing, updating, and deleting tasks with priorities and statuses.",
      difficulty: DifficultyLevel.BEGINNER,
      isAvailable: true,
      githubLink: "https://github.com/snehasharma76/AI_TypescriptTutor",
      topics: [
        {
          id: "project-setup",
          title: "Project Setup",
          markdownFile: "/markdown/01-Project-Setup.md",
          content: `
# Project Setup

In this section, we'll set up the foundation for our TypeScript Task Manager project.

## Initialize the Project

1. Create a new directory for your project
2. Initialize a new npm project
3. Install TypeScript and required dependencies
4. Configure TypeScript with tsconfig.json

## Key TypeScript Concepts

- TypeScript project initialization
- tsconfig.json configuration
- Node.js type definitions
- TypeScript compilation process
          `
        },
        {
          id: "type-definitions",
          title: "Type Definitions",
          markdownFile: "/markdown/02-Type-Definitions.md",
          content: `
# Type Definitions

In this section, we'll define the core types for our task manager application.

## Define Task Types

1. Create enums for task priority and status
2. Define interfaces for Task and TaskStore
3. Implement type safety for task operations

## Key TypeScript Concepts

- Enums for fixed sets of values
- Interfaces for object shapes
- Type aliases
- Optional properties
          `
        },
        {
          id: "storage-service",
          title: "Storage Service",
          markdownFile: "/markdown/03-Storage-Service.md",
          content: `
# Storage Service

In this section, we'll implement a service to persist tasks to the file system.

## Implement File System Storage

1. Create a storage service class
2. Implement methods to read and write tasks
3. Handle JSON serialization and deserialization
4. Implement error handling

## Key TypeScript Concepts

- Classes and access modifiers
- Async operations with TypeScript
- Error handling with types
- JSON serialization/deserialization
          `
        },
        {
          id: "task-manager",
          title: "Task Manager",
          markdownFile: "/markdown/04-Task-Manager.md",
          content: `
# Task Manager

In this section, we'll implement the core task management functionality.

## Implement Task Operations

1. Create a TaskManager class
2. Implement CRUD operations for tasks
3. Integrate with the storage service
4. Add validation and error handling

## Key TypeScript Concepts

- Class implementation
- Method signatures
- Type guards
- Array operations with TypeScript
          `
        },
        {
          id: "command-line-interface",
          title: "Command-Line Interface",
          markdownFile: "/markdown/05-Command-Line-Interface.md",
          content: `
# Command-Line Interface

In this section, we'll create a user-friendly command-line interface.

## Implement CLI Commands

1. Create command handlers for each operation
2. Parse command-line arguments
3. Implement help and error messages
4. Add colorful console output

## Key TypeScript Concepts

- Union types for commands
- String literal types
- Type narrowing
- Process argument handling
          `
        },
        {
          id: "testing-refinement",
          title: "Testing and Refinement",
          markdownFile: "/markdown/06-Testing-and-Refinement.md",
          content: `
# Testing and Refinement

In this section, we'll test our application and make refinements.

## Test and Refine

1. Test all commands and edge cases
2. Refine error handling
3. Improve user experience
4. Document usage instructions

## Key TypeScript Concepts

- TypeScript debugging
- Code organization
- Type refinement
- Project compilation
          `
        }
      ]
    },
    {
      id: "tic-tac-toe",
      title: "Tic-Tac-Toe Game",
      description: "A browser-based implementation of the classic game with features like game state management, win detection, and score tracking.",
      difficulty: DifficultyLevel.BEGINNER_INTERMEDIATE,
      isAvailable: false,
      topics: [
        {
          id: "game-setup",
          title: "Game Setup",
          content: "Coming soon..."
        },
        {
          id: "game-state",
          title: "Game State Management",
          content: "Coming soon..."
        },
        {
          id: "ui-implementation",
          title: "UI Implementation",
          content: "Coming soon..."
        },
        {
          id: "win-detection",
          title: "Win Detection",
          content: "Coming soon..."
        },
        {
          id: "score-tracking",
          title: "Score Tracking",
          content: "Coming soon..."
        }
      ]
    },
    {
      id: "snake-game",
      title: "Snake Game",
      description: "Canvas-based implementation of the classic Snake game with features like snake movement, food generation, and collision detection.",
      difficulty: DifficultyLevel.INTERMEDIATE,
      isAvailable: false,
      topics: [
        {
          id: "canvas-setup",
          title: "Canvas Setup",
          content: "Coming soon..."
        },
        {
          id: "game-loop",
          title: "Game Loop",
          content: "Coming soon..."
        },
        {
          id: "snake-movement",
          title: "Snake Movement",
          content: "Coming soon..."
        },
        {
          id: "collision-detection",
          title: "Collision Detection",
          content: "Coming soon..."
        },
        {
          id: "score-system",
          title: "Score System",
          content: "Coming soon..."
        }
      ]
    },
    {
      id: "adventure-game",
      title: "Text-Based Adventure Game Engine",
      description: "An engine for creating interactive text adventures with features like command parsing, room/location system, and inventory management.",
      difficulty: DifficultyLevel.INTERMEDIATE_ADVANCED,
      isAvailable: false,
      topics: [
        {
          id: "engine-architecture",
          title: "Engine Architecture",
          content: "Coming soon..."
        },
        {
          id: "command-parsing",
          title: "Command Parsing",
          content: "Coming soon..."
        },
        {
          id: "world-building",
          title: "World Building",
          content: "Coming soon..."
        },
        {
          id: "inventory-system",
          title: "Inventory System",
          content: "Coming soon..."
        },
        {
          id: "game-state-management",
          title: "Game State Management",
          content: "Coming soon..."
        }
      ]
    },
    {
      id: "finance-tracker",
      title: "Personal Finance Tracker",
      description: "A comprehensive tool for tracking personal finances with features like income/expense tracking, categorization, reporting, and data visualization.",
      difficulty: DifficultyLevel.ADVANCED,
      isAvailable: false,
      topics: [
        {
          id: "data-modeling",
          title: "Data Modeling",
          content: "Coming soon..."
        },
        {
          id: "transaction-management",
          title: "Transaction Management",
          content: "Coming soon..."
        },
        {
          id: "categorization-system",
          title: "Categorization System",
          content: "Coming soon..."
        },
        {
          id: "reporting",
          title: "Reporting",
          content: "Coming soon..."
        },
        {
          id: "data-visualization",
          title: "Data Visualization",
          content: "Coming soon..."
        }
      ]
    }
  ]
};
