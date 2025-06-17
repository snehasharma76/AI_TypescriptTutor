import React, { useState, useEffect } from 'react';
import { Project, Topic } from '../types';
import Modal from './Modal';
import { convertMarkdownToHtml, loadMarkdownFile } from '../utils/markdownLoader';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>('');
  const [modalContent, setModalContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Function to toggle topic preview
  const toggleTopic = (topicId: string) => {
    if (activeTopic === topicId) {
      setActiveTopic(null);
    } else {
      setActiveTopic(topicId);
    }
  };
  
  // Function to open modal with detailed content
  const openDetailedView = async (topic: Topic) => {
    setModalTitle(topic.title);
    setIsModalOpen(true);
    setIsLoading(true);
    
    try {
      // If we have a reference to a markdown file, try to load it
      if (topic.markdownFile) {
        try {
          // Try to load the markdown file using our utility
          const markdownContent = await loadMarkdownFile(topic.markdownFile);
          setModalContent(convertMarkdownToHtml(markdownContent));
        } catch (fileError) {
          console.error('Error loading markdown file:', fileError);
          // Fall back to the embedded content if we can't load the file
          setModalContent(convertMarkdownToHtml(topic.content));
        }
      } else {
        // If no markdown file is specified, use the embedded content
        setModalContent(convertMarkdownToHtml(topic.content));
      }
    } catch (error) {
      console.error('Error processing markdown content:', error);
      setModalContent(convertMarkdownToHtml(topic.content));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`project-card ${!project.isAvailable ? 'coming-soon' : ''}`}>
      <div className="project-header">
        <h2>{project.title}</h2>
        <span className="difficulty">{project.difficulty}</span>
        {!project.isAvailable && <span className="coming-soon-badge">Coming Soon</span>}
      </div>
      <div className="project-content">
        <p>{project.description}</p>
        
        <div className="topics-list">
          <h3>Topics</h3>
          {project.topics.map((topic) => (
            <div key={topic.id}>
              <div 
                className={`topic-item ${activeTopic === topic.id ? 'active' : ''}`}
                onClick={() => {
                  if (project.isAvailable) {
                    // Open the detailed view in a modal
                    openDetailedView(topic);
                  }
                }}
              >
                {topic.title}
              </div>

            </div>
          ))}
        </div>
        
        {project.githubLink && (
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="button">
            View on GitHub
          </a>
        )}
      </div>
      
      {/* Modal for detailed content */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={modalTitle}>
        {isLoading ? (
          <div className="loading">Loading detailed content...</div>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: modalContent }} />
        )}
      </Modal>
    </div>
  );
};



export default ProjectCard;
