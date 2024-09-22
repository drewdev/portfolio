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
      .slick-next:before {
        color: #00f6ff;
      }
      .slick-prev:before {
        color: #00f6ff;
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
      font-size: 1.6em;
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
    width: 100%;
    color: white;
    padding-left: 20px;

    text-align: left;
    p {
      font-size: 1.2em;
      color: #cccccc;
      line-height: 1.5;
      white-space: pre-line;
    }

    a {
      color: #00f6ff;
      text-shadow: 0px 0px 15px rgba(0, 246, 255, 0.8);
      &.link {
        font-size: 1.6em;
      }
    }
    @media (max-width: 768px) {
      padding-left: 0;
      width: 100%;
    }
  `,
  ContributionsSection: styled.section`
  margin-top: 50px;
  padding: 20px;
  background-color: #121212;
  border-radius: 8px;

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
    color: white;
  }

  ul {
    padding: 0;
  }
  
  ul li {
    display: inline-block;
    white-space: nowrap;
  }

  li {
    margin: 10px;
  }

  a {
    text-decoration: none;
    color: #00f6ff;
    font-weight: bold;
    transition: color 0.2s ease-in;

    &:hover {
      text-shadow: 0px 0px 15px rgba(0, 246, 255, 0.8);
    }
  }
`,
};

export default Styled;
