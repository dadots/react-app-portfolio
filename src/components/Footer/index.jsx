import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import { Bio } from '../../data/constants.jsx';

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  background-color: ${({theme}) => theme.card_light};
`;


const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

function Footer() {
    return (
        <FooterContainer>
            <FooterWrapper>
                <Logo>DADOTS</Logo>
                <Desc>You may visit on my social accounts.</Desc>
                <SocialMediaIcons>
                    <SocialMediaIcon href={Bio.facebook} aria-label="Facebook" rel="noopener" target="display"><FacebookIcon /></SocialMediaIcon>
                    <SocialMediaIcon href={Bio.github} aria-label="Github" rel="noopener" target="display"><GithubIcon /></SocialMediaIcon>
                    <SocialMediaIcon href={Bio.linkedin} aria-label="Linkin" rel="noopener" target="display" ><LinkedInIcon /></SocialMediaIcon>
                </SocialMediaIcons>
                <Copyright>
                    &copy; 2023 Darius Paul Bacate. All rights reserved.
                </Copyright>
            </FooterWrapper>
        </FooterContainer>
    );
}

export default Footer;