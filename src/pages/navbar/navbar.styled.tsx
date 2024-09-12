import styled from 'styled-components';

const Styled = {
  NavContainer: styled.nav`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1f1f1f;
    position: fixed;
    top: 0;
    z-index: 1000;
    @media (max-width: 768px) {
      padding: 0 10px;
    }
  `,

  NavContent: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 800px;
    padding: 0 20px;
    @media (max-width: 768px) {
      align-items: center;
      padding: 10px 0;
      min-width: 0px;
    }
  `,

  NavBrand: styled.div`
    font-size: 15px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
    text-shadow: 0px 0px 10px rgba(0, 246, 255, 0.8);
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  `,

  NavLinks: styled.div`
    display: flex;
    gap: 20px;
    @media (max-width: 768px) {
      gap: 10px;
    }
  `,

  NavLink: styled.a`
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: color 0.3s ease, text-shadow 0.3s ease;
    &:hover {
      color: #00f6ff;
      text-shadow: 0px 0px 10px rgba(0, 246, 255, 0.8);
    }
    @media (max-width: 768px) {
      font-size: 0.9rem
    }
  `,

  NavIcon: styled.img`
    width: 30px;
    height: 30px;
    object-fit: contain;
    margin-left: 1em;
    cursor: pointer;
    @media (max-width: 768px) {
      width: 25px;
      height: 25px;
      margin-left: .2em;
    }
  `,
};

export default Styled;
