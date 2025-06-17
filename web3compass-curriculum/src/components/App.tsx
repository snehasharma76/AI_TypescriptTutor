import React from 'react';
import { curriculumData } from '../data';
import ProjectCard from './ProjectCard';

const App: React.FC = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>{curriculumData.title}</h1>
        <p>{curriculumData.description}</p>
      </header>
      
      <div className="projects-container">
        {curriculumData.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      <footer className="footer">
        <p>
          Created by <a href="https://twitter.com/audaciousSneha" target="_blank" rel="noopener noreferrer">@audaciousSneha</a> | 
          <a href="https://web3compass.xyz" target="_blank" rel="noopener noreferrer"> Web3Compass</a>
        </p>
      </footer>
    </div>
  );
};

export default App;
