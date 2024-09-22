import styled, { keyframes } from 'styled-components';

interface ProgressFillProps {
  level: number;
  color: string;
}

const fillAnimation = (level: number) => keyframes`
  from {
    width: 0;
  }
  to {
    width: ${level}%;
  }
`;

const Styled = {
  Section: styled.section`
    padding: .1em 2em 2.5em;
    margin-bottom: 2.5em;
    background-color: rgba(18, 18, 18, 0.8);
    color: white;
    border-radius: 8px;
    h2 {
      font-size: 2rem;
      letter-spacing: 0.05em;
      font-weight: 300;
      color: #fff;
      margin-bottom: 20px;
      text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.6);
    }
  `,

  SkillsContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,

  SkillBar: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #1f1f1f;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  `,

  SkillName: styled.span`
    flex: 1;
    font-weight: bold;
    font-size: 1rem;
    color: #fff;
  `,

  SkillProgress: styled.div`
    flex: 3;
    height: 10px;
    background-color: #333;
    border-radius: 20px;
    overflow: hidden;
    margin: 0 15px;
  `,

  ProgressFill: styled.div<ProgressFillProps>`
    height: 100%;
    background-color: ${({ color }) => color};
    box-shadow: 0px 0px 20px ${({ color }) => color}, 0px 0px 40px ${({ color }) => color};
    animation: ${({ level }) => fillAnimation(level)} 2s ease-in-out forwards;
    width: ${({ level }) => `${level}%`};
  `,

  SkillPercentage: styled.span`
    font-weight: bold;
    font-size: 1rem;
    color: #cccccc;
  `,
};

export default Styled;
