import React, { useState } from 'react';
import Styled from './home.styled';
import ProjectsSection from '../project-section/project';
import SkillsSection from '../skills-section/skillsSection';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [buttonText, setButtonText] = useState('Scroll to view my work');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

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

  const smoothScrollDown = (pixels: number, duration: number) => {
    const increment = pixels / (duration / 15);
    let scrolled = 0;

    const interval = setInterval(() => {
      window.scrollBy(0, increment);
      scrolled += increment;

      if (scrolled >= pixels) {
        clearInterval(interval);
        setIsButtonDisabled(false);
      }
    }, 15);
  };

  const handleOnClick = () => {
    setButtonText("Need a hand? Scroll down, I've got you covered!");
    setIsButtonDisabled(true);

    setTimeout(() => {
      smoothScrollDown(600, 1000);
    }, 1500);
  };

  return (
    <Styled.Container>
      <Styled.BackgroundOverlay />
      <Styled.Content>
        <Styled.Title>Pedro Sebastian Cajas Maureira</Styled.Title>
        <Styled.Subtitle>Full-stack Software Engineer</Styled.Subtitle>
        <Styled.Description>
        I craft modern, responsive websites and applications with a strong emphasis on quality and user experience. I'm passionate about frontend development, proficient in both React and Angular. I can easily adapt to and contribute with any framework and multidisciplinary team, and I'm always excited to learn something new. With over 5 years of experience, I bring a wealth of knowledge to the projects I work on.
        </Styled.Description>
        <SkillsSection />
        <Styled.Button 
          onClick={handleOnClick} 
          disabled={isButtonDisabled}
        >
          {buttonText}
        </Styled.Button>
        <ProjectsSection />
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
        <Styled.Link href="https://github.com/drewdev/portfolio" target="_blank" rel="noopener noreferrer" className="link">
          You can view the code for this project here.
        </Styled.Link>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Home;
