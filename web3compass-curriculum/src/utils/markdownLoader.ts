/**
 * Utility functions for loading and processing markdown content
 */

import { marked } from 'marked';

/**
 * Converts markdown text to HTML
 * This function is synchronous and always returns a string
 */
export const convertMarkdownToHtml = (markdown: string): string => {
  // Cast the result to string to satisfy TypeScript
  return String(marked.parse(markdown));
};

/**
 * Loads markdown content from a file
 * This function loads markdown files from the specified path
 */
export const loadMarkdownFile = async (filePath: string): Promise<string> => {
  try {
    console.log(`Attempting to load markdown file from: ${filePath}`);
    
    // Make sure the path starts with a slash
    const normalizedPath = filePath.startsWith('/') ? filePath : `/${filePath}`;
    
    // Fetch the markdown file from the specified path
    // The path should be relative to the public directory
    const response = await fetch(normalizedPath);
    
    if (!response.ok) {
      console.error(`HTTP error ${response.status}: ${response.statusText} for file ${normalizedPath}`);
      throw new Error(`Failed to load markdown file: ${normalizedPath} (Status: ${response.status})`);
    }
    
    const content = await response.text();
    console.log(`Successfully loaded markdown file: ${normalizedPath} (${content.length} bytes)`);
    return content;
  } catch (error) {
    console.error('Error loading markdown file:', error);
    throw error;
  }
};
