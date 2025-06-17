# Step 2: Type Definitions

In this step, we'll define the TypeScript types and interfaces for our task manager. This is a crucial part of TypeScript development as it establishes the structure of our data and helps catch errors at compile time.

## 2.1 Understanding TypeScript Types

TypeScript's type system is one of its main features. Types allow us to:
- Define the shape of objects
- Catch errors at compile time rather than runtime
- Provide better code documentation and IDE support
- Enable safer refactoring

## 2.2 Enums in TypeScript

We'll use enums to define fixed sets of values for task priorities and statuses.

**What are Enums?**
Enums (enumerations) allow us to define a set of named constants. They make the code more readable and help prevent invalid values from being used.

```typescript
enum TaskPriority {
  Low = "low",
  Medium = "medium",
  High = "high"
}
```

In this example:
- We're using string enums (as opposed to numeric enums)
- Each enum value has a string representation that we can use for storage and display

## 2.3 Interfaces in TypeScript

Interfaces define the structure of objects. They're a powerful way to enforce contracts within your code.

**What are Interfaces?**
An interface is a TypeScript type that defines the shape of an object. It specifies which properties and methods an object should have.

```typescript
interface Task {
  id: string;
  title: string;
  description?: string; // The ? makes this property optional
  priority: TaskPriority;
  status: TaskStatus;
  createdAt: Date;
  completedAt?: Date;
}
```

**Key Interface Features:**
- Properties can be marked as optional with `?`
- Properties can have specific types, including other interfaces or enums
- Interfaces can extend other interfaces
- Interfaces are only used at compile time and don't generate any JavaScript code

## 2.4 Creating Our Type Definitions

We'll create a `types.ts` file that will contain all our type definitions:
- Task priority enum
- Task status enum
- Task interface
- TaskStore interface (for data persistence)

These types will be used throughout our application to ensure type safety and provide better developer experience.

## 2.5 Type Exports

We'll export all our types so they can be imported and used in other files:

```typescript
export enum TaskPriority { /* ... */ }
export enum TaskStatus { /* ... */ }
export interface Task { /* ... */ }
export interface TaskStore { /* ... */ }
```

This allows us to maintain our types in a central location while using them throughout the application.

In the next step, we'll implement the storage service that will handle reading and writing tasks to a JSON file.
