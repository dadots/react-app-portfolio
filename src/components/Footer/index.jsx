import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import { Bio } from '../../data/constants.jsx';

import {
    FooterContainer,
    FooterWrapper,
    Logo,
    SocialMediaIcons,
    SocialMediaIcon,
    Copyright,
    Desc
} from "../../utils/Footer.js"

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