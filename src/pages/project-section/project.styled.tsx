import styled, { css, keyframes } from 'styled-components';

interface ProjectContainerProps {
  visible: string;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Styled = {
  Section: styled.section`
    padding: 100px 20px;
  `,

  ProjectContainer: styled.div<ProjectContainerProps>`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: initial;
    margin-bottom: 60px;
    opacity: 0; /* Opacidad inicial */
    h2 {
      font-size: 2rem;
      color: #00f6ff;
      margin-bottom: 10px;
    }
    ${({ visible }) =>
      visible === 'true' &&
      css`
        opacity: 1;
        animation: ${fadeIn} 1s ease-in-out;
      `}

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  `,

  ImageContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  `,

  WebImage: styled.img`
    height: 19em;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
    @media (max-width: 768px) {
      height: 14.5em;
    }
    @media (max-width: 375px) {
      height: 11.5em;
    }
  `,

  MobileImage: styled.img`
    height: 18em;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
    @media (max-width: 768px) {
      height: 14.5em;
      margin-top: 2em;
    }
  `,

  DescriptionContainer: styled.div`
    width: 45%;
    color: white;
    text-align: left;

    p {
      font-size: 1.2rem;
      color: #cccccc;
      line-height: 1.5;
    }

    @media (max-width: 768px) {
      text-align: center;
      margin-top: 20px;
    }
  `,
};

export default Styled;
