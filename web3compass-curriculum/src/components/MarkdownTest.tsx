import React, { useState, useEffect } from 'react';
import { loadMarkdownFile, convertMarkdownToHtml } from '../utils/markdownLoader';

const MarkdownTest: React.FC = () => {
  const [content, setContent] = useState<string>('Loading...');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const testMarkdownLoad = async () => {
      try {
        // Try to load the first markdown file
        const markdownPath = '/markdown/01-Project-Setup.md';
        console.log('Testing markdown loading from:', markdownPath);
        
        const markdownContent = await loadMarkdownFile(markdownPath);
        console.log('Markdown content loaded successfully:', markdownContent.substring(0, 100) + '...');
        
        setContent(convertMarkdownToHtml(markdownContent));
        setError(null);
      } catch (err) {
        console.error('Error in test component:', err);
        setError(`Failed to load markdown: ${err instanceof Error ? err.message : String(err)}`);
        setContent('');
      } finally {
        setIsLoading(false);
      }
    };

    testMarkdownLoad();
  }, []);

  return (
    <div className="markdown-test">
      <h2>Markdown Loading Test</h2>
      {isLoading ? (
        <div className="loading">Loading test markdown...</div>
      ) : error ? (
        <div className="error">
          <h3>Error Loading Markdown</h3>
          <pre>{error}</pre>
          <div>
            <h4>Troubleshooting:</h4>
            <ul>
              <li>Check that markdown files exist in the public/markdown directory</li>
              <li>Verify the file paths in data.ts are correct</li>
              <li>Check browser console for network errors</li>
              <li>Ensure the development server is serving static files correctly</li>
            </ul>
          </div>
        </div>
      ) : (
        <div>
          <h3>Markdown Loaded Successfully!</h3>
          <div className="markdown-content" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      )}
    </div>
  );
};

export default MarkdownTest;
