import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Styled from './project.styled';

interface Project {
  title: string;
  description: any;
  webImage: string;
  mobileImage: string;
  githubLink: string;
  githubLinkBack?: string;
  demoLink: string
}

const projects: Project[] = [
  {
    title: 'Safe-n-Tasty: Vegan & Allergy-Friendly Food E-commerce',
    description: (
      <>
        <p><a href={'https://drewdev.github.io/safentasty/'} target="_blank">Safe-n-Tasty</a> is a modern, responsive e-commerce platform designed to offer delicious and healthy food options for people with dietary restrictions. Whether you're vegan, gluten-free, or have specific food allergies, Safe-n-Tasty ensures that everyone can enjoy high-quality meals tailored to their needs. Built with React, Tailwind CSS, and Framer Motion, the website features a smooth user experience with dynamic filters, a searchable product catalog, and a sleek shopping cart.</p>
        <br />
        <strong>The project showcases:</strong>
        <ul style={{ marginLeft: '20px' }}>
          <li>A clean and responsive design optimized for both desktop and mobile.</li>
          <li>Real-time filtering based on dietary preferences (gluten-free, vegan, dairy-free, etc.).</li>
          <li>Animated product listings and an interactive shopping cart.</li>
          <li>A carousel banner highlighting the brand's mission to provide healthy and worry-free meals.</li>
        </ul>
        <br />
      </>
    ),
    webImage: 'mac-safe.png',
    mobileImage: 'iphone-safe.png',
    githubLink: 'https://github.com/drewdev/safentasty',
    demoLink: 'https://drewdev.github.io/safentasty/',
  },
  {
    title: 'Catacomb Crawler: A Strategy-Based Dungeon Crawler',
    description: (
      <>
        <p>
          <a href={'https://drewdev.github.io/catacombcrawler/'} target="_blank">Catacomb Crawler</a> is a strategy-focused dungeon crawler game designed to challenge players' decision-making and resource management skills. Developed with a robust architecture using NestJS for the backend and Angular with NgRx for the frontend, this project demonstrates advanced state management, component-based architecture, and seamless interaction between the client and server.
        </p>
        <br />
        <strong>The project showcases:</strong>
        <ul style={{ marginLeft: '20px' }}>
          <li>Fully responsive design, ensuring an optimized experience on both desktop and mobile devices.</li>
          <li>Smooth animations and intuitive transitions enhance the overall user experience.</li>
          <li>Strategic gameplay mechanics that offer various decision-making paths and resource management challenges.</li>
          <li>Leaderboard page featuring player scores and rankings for players.</li>
        </ul>
      </>
    ),
    webImage: 'maccc.png',
    mobileImage: 'iphonecc.png',
    githubLink: 'https://github.com/drewdev/catacombcrawler',
    githubLinkBack: 'https://github.com/drewdev/catacombcrawler-nestjs',
    demoLink: 'https://drewdev.github.io/catacombcrawler/',
  },
];


const ProjectsSection: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>(new Array(projects.length).fill(false));
  
  const settings = {
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
    infinite: true,
    speed: 1000,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

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
  }, [projects]);

  return (
    <Styled.Section id="projects-section">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <Styled.ProjectContainer
            key={index}
            id={`project-${index}`}
            visible={visibleProjects[index]?.toString()}
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
              {project.description}
              <div style={{ marginTop: '15px' }}>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="link">
                  GitHub Repository / 
                </a>
                {project.githubLinkBack && (
                  <a href={project.githubLinkBack} target="_blank" rel="noopener noreferrer" className="link">
                    / GitHub Backend Repository / 
                  </a>
                )}
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="link">
                  / Live Demo
                </a>
              </div>
            </Styled.DescriptionContainer>
          </Styled.ProjectContainer>
        ))}
      </Slider>
      
    </Styled.Section>
  );
};


export default ProjectsSection;
