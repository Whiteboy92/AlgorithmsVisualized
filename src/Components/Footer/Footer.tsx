import React from 'react';
import { FooterContainer } from './Footer.styled';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <div>This is the footer content.</div>
      <div>Copyright © {currentYear} Your Company</div>
    </FooterContainer>
  );
};

export default Footer;
