
import React from 'react';
import { Bio } from "../../data/constants.jsx";
import Typewriter from 'typewriter-effect'

const HeroBgAnimation = React.lazy(() => import('../HeroBgAnimation/index.jsx'));
import {
    HeroContainer,
    HeroBg,
    HeroInnerContainer,
    HeroLeftContainer,
    HeroRightContainer,
    Title,
    TextLoop,
    Span,
    SubTitle,
    ResumeButton,
    Image
} from "../../utils/Hero.js"

const Hero = () => {
    const {name, roles, description, resume, picture} = Bio
    return (
        <div id="home">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer id="left">
                        <Title>Hi, I am <br/>{name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>
                            {description}
                        </SubTitle>
                        <ResumeButton href={resume} target='display'>
                            Check Resume
                        </ResumeButton>
                    </HeroLeftContainer>
                    <HeroRightContainer id="right">
                        <Image
                            fetchpriority="high"
                            src={picture}
                            alt="Me"
                            srcSet={`
                                ${picture} 400w,
                                ${picture} 600w,
                                ${picture} 1024w
                              `}
                            sizes="(max-width: 400px) 400px, (max-width: 1024px) 600px, 1024px"
                        />
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    )
}
export default Hero