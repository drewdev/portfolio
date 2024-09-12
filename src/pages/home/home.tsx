import React from 'react';
import Styled from './home.styled'
interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
    return (
        <Styled.Container>
            <Styled.BackgroundOverlay />
            <Styled.Content>
                <Styled.Title>Pedro Sebastian Cajas Maureira</Styled.Title>
                <Styled.Subtitle>Frontend Software Engineer</Styled.Subtitle>
                <Styled.Description>
                  I craft modern, responsive websites and applications with a strong emphasis on quality and user experience. I'm passionate about frontend development, proficient in both React and Angular. I can easily adapt to and contribute with any framework, and I'm always excited to learn something new.
                </Styled.Description>
                <Styled.Button>View My Work</Styled.Button>
            </Styled.Content>
        </Styled.Container>
    );
};

export default Home;
