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
    padding: 80px 20px;
    @media (max-width: 780px) {
      max-width: 40em;
    }
    @media (max-width: 460px) {
      max-width: 24em;
    }
    @media (max-width: 375px) {
      max-width: 19em;
    }
    .slick-slider {
      width: 100%;
      .slick-slide > div {
        display: flex;
        justify-content: center;
        div:nth-child(-n+2) {
          width: 100%;
          display: flex !important;
          justify-content: space-between;
        }
      }
    }
  `,

  ProjectContainer: styled.div<ProjectContainerProps>`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;
    opacity: 0;
    padding: 20px;
    box-sizing: border-box;

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

    @media (max-width: 460px) {
      flex-direction: column;
    }
  `,

  WebImage: styled.img`
    height: 19em;
    border-radius: 10px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
    @media (max-width: 768px) {
      height: 14.5em;
      max-width: 100%;
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
    max-width: 30%;
    @media (max-width: 768px) {
      height: 14.5em;
      margin-top: 2em;
      max-width: 100%;
    }
  `,

  DescriptionContainer: styled.div`
    width: 45%;
    color: white;
    padding-left: 20px;

    p {
      font-size: 1.2rem;
      color: #cccccc;
      line-height: 1.5;
    }

    @media (max-width: 768px) {
      text-align: center;
      padding-left: 0;
      width: 100%;
    }
  `,
};

export default Styled;
