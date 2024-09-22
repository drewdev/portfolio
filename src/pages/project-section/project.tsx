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

interface ContributedProjects {
  website: string;
  title: string;
}
const contributedProjects: ContributedProjects[] = [
  {
    website: 'https://www.bancofalabella.cl/',
    title: 'Banco Falabella Chile'
  },
  {
    website: 'https://www.bancofalabella.pe/',
    title: 'Banco Falabella Perú'
  },
  {
    website: 'https://www.bancofalabella.com.co/',
    title: 'Banco Falabella Colombia'
  },
  {
    website: 'https://solicitudes.bancofalabella.cl/',
    title: 'Onboarding Banco Falabella Chile'
  },
  {
    website: 'https://solicitudes.bancofalabella.pe/',
    title: 'Onboarding Banco Falabella Perú'
  },
  {
    website: 'https://www.cmrpuntos.cl/',
    title: 'CMR Puntos Falabella Chile'
  },
  {
    website: 'https://www.cmrpuntos.pe/',
    title: 'CMR Puntos Falabella Perú'
  },
  {
    website: 'https://www.cmrpuntos.com.co/',
    title: 'CMR Puntos Falabella Perú'
  },
];

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
      <Styled.ContributionsSection>
        <h2>Projects I've Contributed To</h2>
        <p>
        In recent years, I have actively worked on various teams and projects for Banco Falabella across different countries. My role has ranged from frontend developer using Angular or React, to backend with Express or NestJS, and even test automation with TestCafe. I have also created monitoring dashboards in Kibana and Datadog, managed events and funnels in Google Analytics 4, and implemented SEO improvements to optimize visibility in search engines like Google.
        </p>
        <ul>
          {contributedProjects.map((project, index) => (
            <li key={index}>
              <a href={project.website} target="_blank" rel="noopener noreferrer" className="link">
                {project.title}
              </a>
            </li>
          ))}
        </ul>
      </Styled.ContributionsSection>
    </Styled.Section>
  );
};


export default ProjectsSection;
