# TypeScript Curriculum Component for Web3Compass

This is a standalone React component that displays the TypeScript learning curriculum for Web3Compass. It features an expandable UI that shows projects, topics, and detailed content in a user-friendly interface.

## Features

- Responsive design that works on desktop and mobile
- Expandable project cards with topic details
- "Coming soon" indicators for future projects
- Markdown rendering for content
- Difficulty level indicators
- GitHub repository links

## Project Structure

```
web3compass-curriculum/
├── src/
│   ├── components/        # React components
│   │   ├── App.tsx        # Main application component
│   │   └── ProjectCard.tsx # Individual project card component
│   ├── data.ts           # Curriculum content data
│   ├── types.ts          # TypeScript type definitions
│   ├── styles.css        # Component styles
│   ├── index.html        # HTML template
│   └── index.tsx         # Application entry point
├── dist/                 # Compiled output (generated)
├── package.json          # Project dependencies
├── tsconfig.json         # TypeScript configuration
└── webpack.config.js     # Webpack configuration
```

## Getting Started

### Development

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`

### Building for Production

1. Build the component:
   ```
   npm run build
   ```

2. The compiled files will be available in the `dist` directory

## Integration with Web3Compass

### Option 1: Embed as an iframe

You can embed this component into Web3Compass by hosting it and using an iframe:

```html
<iframe 
  src="https://your-hosting-url.com/typescript-curriculum" 
  width="100%" 
  height="800px" 
  frameborder="0">
</iframe>
```

### Option 2: Direct Integration

To integrate this component directly into the Web3Compass codebase:

1. Copy the `src` directory into your Web3Compass project
2. Import the main component:

```tsx
import TypeScriptCurriculum from './path/to/components/App';

// Then use it in your Web3Compass component
const YourComponent = () => {
  return (
    <div>
      <h1>Web3Compass Learning Paths</h1>
      <TypeScriptCurriculum />
    </div>
  );
};
```

### Option 3: Build as a Package

You can also build this as an npm package for easier integration:

1. Add the following to your package.json:
   ```json
   {
     "name": "web3compass-typescript-curriculum",
     "version": "1.0.0",
     "main": "dist/index.js",
     "types": "dist/index.d.ts"
   }
   ```

2. Create an index.ts file that exports the main component:
   ```ts
   export { default as TypeScriptCurriculum } from './components/App';
   ```

3. Publish to npm or use as a local package

## Customizing Content

To update or add new content to the curriculum:

1. Edit the `src/data.ts` file to modify projects, topics, or content
2. The content supports basic markdown formatting for rich text display

## License

This component is available under the same license as the main Web3Compass project.
