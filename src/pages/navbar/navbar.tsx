import React from 'react';
import Styled from './navbar.styled';
const Navbar: React.FC = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        const feedback = text.includes('@') ? 'Email' : 'Phone number';
        alert(`${ feedback } copied to clipboard!`);
      },
      (err) => {
        console.error('Failed to copy to clipboard', err);
      }
    );
  };
  return (
    <Styled.NavContainer>
      <Styled.NavContent>
        <Styled.NavBrand onClick={() => copyToClipboard('pedro.c.maureira@gmail.com')}>pedro.c.maureira@gmail.com</Styled.NavBrand>
        <Styled.NavLinks>
          <Styled.NavLink onClick={() => copyToClipboard('+56912345678')}>
            <Styled.NavIcon src={require('../../assets/icons/phone.png')} alt="Phone Icon" />
          </Styled.NavLink>
          <Styled.NavLink href={require('../../assets/Pedro_Cajas_CV.pdf')} download="Pedro_Cajas_CV.pdf">
            <Styled.NavIcon src={require('../../assets/icons/cv.png')} alt="CV Icon" />
          </Styled.NavLink>
          <Styled.NavLink href="https://www.linkedin.com/in/pedro-sebastian-cajas-maureira-47b57b184/" target="_blank">
            <Styled.NavIcon src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="Linkedin Icon" />
          </Styled.NavLink>
        </Styled.NavLinks>
      </Styled.NavContent>
    </Styled.NavContainer>
  );
};

export default Navbar;
