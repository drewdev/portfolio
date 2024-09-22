import React, { useState } from 'react';
import Styled from './home.styled';
import ProjectsSection from '../project-section/project';
import SkillsSection from '../skills-section/skillsSection';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [buttonText, setButtonText] = useState('Scroll to view my work');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

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
        <Styled.Link href="https://github.com/drewdev/portfolio" target="_blank" rel="noopener noreferrer" className="link">
          You can view the code for this project here.
        </Styled.Link>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Home;
