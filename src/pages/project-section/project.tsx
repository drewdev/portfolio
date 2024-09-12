import React, { useEffect, useState } from 'react';
import Styled from './project.styled';

interface Project {
  title: string;
  description: string;
  webImage: string;
  mobileImage: string;
}

const projects: Project[] = [
  {
    title: 'Project 1',
    description: 'This is a description for project 1.',
    webImage: 'mac.png',
    mobileImage: 'iphone.png',
  },
  {
    title: 'Project 2',
    description: 'This is a description for project 2.',
    webImage: 'mac.png',
    mobileImage: 'iphone.png',
  },
  {
    title: 'Project 3',
    description: 'This is a description for project 1.',
    webImage: 'mac.png',
    mobileImage: 'iphone.png',
  },
];

const ProjectsSection: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>(new Array(projects.length).fill(false));

  useEffect(() => {
    const handleScroll = () => {
      projects.forEach((_, index) => {
        const projectElement = document.getElementById(`project-${index}`);
        if (projectElement) {
          const rect = projectElement.getBoundingClientRect();
          if (rect.top < window.innerHeight - 100) {
            setVisibleProjects((prevVisible) => {
              const newVisible = [...prevVisible];
              newVisible[index] = true;
              return newVisible;
            });
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Styled.Section id="projects-section">
      {projects.map((project, index) => (
        <Styled.ProjectContainer
          key={index}
          id={`project-${index}`}
          visible={visibleProjects[index].toString()}
        >
          <h2>{project.title}</h2>
          <Styled.ImageContainer>
            <Styled.WebImage
              src={require(`../../assets/${project.webImage}`)}
              alt={`${project.title} Web`}
            />
            <Styled.MobileImage
              src={require(`../../assets/${project.mobileImage}`)}
              alt={`${project.title} Mobile`}
            />
          </Styled.ImageContainer>
          <Styled.DescriptionContainer>
            <p>{project.description}</p>
          </Styled.DescriptionContainer>
        </Styled.ProjectContainer>
      ))}
    </Styled.Section>
  );
};

export default ProjectsSection;
