import styled from 'styled-components';

const Styled = {
  
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: normal;
    margin-top: 2em;
    height: 100vh;
    background: #0f0f0f;
    color: white;
    position: relative;
    overflow: hidden;
  `,

  BackgroundOverlay: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #1f1f1f, #232323);
    opacity: 0.8;
    z-index: -1;
  `,

  Content: styled.div`
    text-align: center;
    max-width: 800px;
    padding: 20px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  `,

  Title: styled.h1`
    font-size: 2.5em;
    letter-spacing: 0.1em;
    font-weight: bold;
    color: #00f6ff;
    margin-bottom: 10px;
    text-shadow: 0px 0px 15px rgba(0, 246, 255, 0.8);
  `,

  Subtitle: styled.h2`
    font-size: 2rem;
    letter-spacing: 0.05em;
    font-weight: 300;
    color: #fff;
    margin-bottom: 20px;
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.6);
  `,

  Description: styled.p`
    font-size: 1.2rem;
    line-height: 1.5;
    margin-bottom: 30px;
    color: #cccccc;
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.4);
  `,

  Button: styled.button`
    padding: 15px 40px;
    font-size: 1.1rem;
    background-color: #00f6ff;
    border: none;
    color: #0f0f0f;
    border-radius: 30px;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    box-shadow: 0px 0px 20px rgba(0, 246, 255, 0.6);
    transition: background-color 0.3s ease, transform 0.2s ease;
    outline: none;
    &:hover {
      background-color: #00b8d4;
      transform: translateY(-5px);
    }
  `,
};

export default Styled;
