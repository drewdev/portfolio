import styled, { keyframes } from 'styled-components';

interface ProgressFillProps {
  level: number; // El nivel de la barra en porcentaje
  color: string; // El color de la barra
}

// Animación personalizada para que la barra se llene solo hasta el nivel correspondiente
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
    background-color: #121212;
    color: white;
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
    color: #fff; // Mantener el nombre de la skill en blanco
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
    background-color: ${({ color }) => color}; // Color dinámico basado en la habilidad
    border-radius: 20px;
    box-shadow: 0px 0px 20px ${({ color }) => color}, 0px 0px 40px ${({ color }) => color};
    animation: ${({ level }) => fillAnimation(level)} 2s ease-in-out forwards; // La animación llega solo hasta el porcentaje correcto
    width: ${({ level }) => `${level}%`}; // Establece el nivel al final de la animación
  `,

  SkillPercentage: styled.span`
    font-weight: bold;
    font-size: 1rem;
    color: #cccccc;
  `,
};

export default Styled;
