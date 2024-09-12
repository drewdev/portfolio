import React from 'react';
import Styled from './home.styled'
import ProjectsSection from '../project-section/project';
import SkillsSection from '../skills-section/skillsSection';
interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [buttonText, setButtonText] = React.useState('Scroll to view my work');

  const easeInOutQuad = (t: number) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  const smoothScroll = (targetY: number, duration: number) => {
    const startY = window.scrollY;
    const distanceY = targetY - startY;
    let startTime: number | null = null;

    const scroll = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easeProgress = easeInOutQuad(progress);

      window.scrollTo(0, startY + distanceY * easeProgress);

      if (progress < 1) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  };

  const handleOnClick = () => {
    setButtonText('Need a hand? Scroll down, I\'ve got you covered! 😄');

    setTimeout(() => {
      const targetY = window.innerHeight;
      smoothScroll(targetY, 1500);
    }, 1500);
  };

  return (
    <Styled.Container>
      <Styled.BackgroundOverlay />
      <Styled.Content>
        <Styled.Title>Pedro Sebastian Cajas Maureira</Styled.Title>
        <Styled.Subtitle>Frontend Software Engineer</Styled.Subtitle>
        <Styled.Description>
          I craft modern, responsive websites and applications with a strong emphasis on quality and user experience. I'm passionate about frontend development, proficient in both React and Angular. I can easily adapt to and contribute with any framework, and I'm always excited to learn something new.
        </Styled.Description>
        <SkillsSection />
        <Styled.Button onClick={handleOnClick}>{buttonText}</Styled.Button>
        <ProjectsSection />
      </Styled.Content>
    </Styled.Container>
  );
};

export default Home;
