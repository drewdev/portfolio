import React from 'react';
import Styled from './skillsSection.styled';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const skills: Skill[] = [
  { name: 'Angular', level: 89, color: '#dd0031' },
  { name: 'React', level: 78, color: '#61dafb' },
  { name: 'TypeScript', level: 83, color: '#007acc' },
  { name: 'JavaScript', level: 85, color: '#f7df1e' },
  { name: 'HTML & CSS', level: 90, color: '#e34c26' },
  { name: 'NestJS', level: 60, color: '#e0234e' },
  { name: 'Express', level: 50, color: '#000000' }
];

const SkillsSection: React.FC = () => {
  return (
    <Styled.Section>
      <h2>My Skills</h2>
      <Styled.SkillsContainer>
        {skills.map((skill, index) => (
          <Styled.SkillBar key={index}>
            <Styled.SkillName>{skill.name}</Styled.SkillName>
            <Styled.SkillProgress>
              <Styled.ProgressFill level={skill.level} color={skill.color} />
            </Styled.SkillProgress>
          </Styled.SkillBar>
        ))}
      </Styled.SkillsContainer>
    </Styled.Section>
  );
};

export default SkillsSection;
