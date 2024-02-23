
import React from 'react';
import { Bio } from "../../data/constants.jsx";
import Typewriter from 'typewriter-effect';
import HeroImg from '../../images/me.webp'
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
    return (
        <div id="home">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer id="left">
                        <Title>Hi, I am <br/>{Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>
                            {Bio.description}
                        </SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>
                            Check Resume
                        </ResumeButton>
                    </HeroLeftContainer>
                    <HeroRightContainer id="right">
                        <Image
                            fetchpriority="high"
                            src={HeroImg}
                            alt="Me"
                            srcSet={`
                                ${HeroImg} 400w,
                                ${HeroImg} 600w,
                                ${HeroImg} 1024w
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