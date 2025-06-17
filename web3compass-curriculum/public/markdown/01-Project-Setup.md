# Step 1: Project Setup

In this step, we'll set up our TypeScript project environment. This includes initializing the project, installing dependencies, and configuring TypeScript.

## 1.1 Initialize the Project

First, we need to create a `package.json` file which will manage our project dependencies and scripts. We'll use npm (Node Package Manager) for this.

```bash
npm init -y
```

The `-y` flag creates a package.json with default values, which we can modify later.

## 1.2 Install TypeScript and Node.js Type Definitions

Next, we'll install TypeScript and the type definitions for Node.js as development dependencies:

```bash
npm install typescript @types/node --save-dev
```

**What are these packages?**
- `typescript`: The TypeScript compiler that transforms our TypeScript code into JavaScript
- `@types/node`: Type definitions for Node.js, which provide TypeScript with information about Node.js APIs

## 1.3 Configure TypeScript

Now we'll create a `tsconfig.json` file to configure the TypeScript compiler:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

**Key Configuration Options Explained:**
- `target`: Specifies which ECMAScript version to compile to (ES2020 is modern but widely supported)
- `module`: Defines the module system (commonjs is standard for Node.js)
- `outDir`: Where compiled JavaScript files will be placed
- `rootDir`: Where your TypeScript source files are located
- `strict`: Enables all strict type checking options
- `esModuleInterop`: Enables interoperability between CommonJS and ES Modules
- `resolveJsonModule`: Allows importing JSON files as modules
- `include`: Specifies which files to include in compilation
- `exclude`: Specifies which files to exclude from compilation

## 1.4 Add Useful npm Scripts

Let's modify our package.json to add some useful scripts:

```json
"scripts": {
  "build": "tsc",
  "start": "node dist/index.js",
  "dev": "tsc --watch & nodemon dist/index.js"
}
```

**What these scripts do:**
- `build`: Compiles TypeScript to JavaScript
- `start`: Runs the compiled JavaScript
- `dev`: Watches for changes and automatically recompiles and restarts the application

## 1.5 Create Basic Project Structure

Finally, let's create our initial project structure:

```
src/
  ├── index.ts    # Entry point
  ├── types.ts    # Type definitions
```

In the next step, we'll define our types and interfaces for the task manager.
