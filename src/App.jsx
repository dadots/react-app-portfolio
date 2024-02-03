import './App.css'
import React, {Suspense, Lazy} from 'react';
import { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './utils/Themes.js'
import ProjectDetails from './components/Projects/ProjectDetails/index'

const Navbar = React.lazy(() => import('./components/Navbar/index'));
const Hero = React.lazy(() => import('./components/HeroSection/index'));
const Projects = React.lazy(() => import('./components/Projects/index'));
const Experience = React.lazy(() => import('./components/Experience/index'));
const Skills = React.lazy(() => import('./components/Skills/index'));
const Footer = React.lazy(() => import('./components/Footer/index'));
const ScrollTop = React.lazy(() => import('./components/ScrollTop/index'));
const Loader = React.lazy(() => import('./components/Loader/index'));

import { motion, useScroll, useSpring } from "framer-motion";

const Body = styled.div`
    background-color: ${({ theme }) => theme.bg};
    width: 100%;
    height: 100%;
    overflow-x: hidden;
`

const Wrapper = styled.div`
    background: linear-gradient(
                38.73deg, rgba(204, 0, 187, 0.15) 0%, 
                rgba(201, 32, 184, 0) 50%
                ), 
                linear-gradient(
                    141.27deg, rgba(0, 70, 209, 0) 50%, 
                    rgba(0, 70, 209, 0.15) 100%
                );
    width: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

const App = () => {
    const switchMode = (mode) => {
        let mood = mode === "dark";
        setMode(mood);
    }

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [mode, setMode] = useState(true);
    const [openModal, setOpenModal] = useState({ state: false, project: null });

    return (
        <div className="App">
            {/* <Suspense
                fallback={
                    <Loader />
                }
            > */}
                <ThemeProvider theme={mode ? darkTheme : lightTheme}>
                    <Router>
                        <Navbar
                            switchMode={switchMode}
                            mode={mode}
                        />
                        <motion.div className="progress-bar" style={{ scaleX }} />
                        <Body>
                            <Hero />
                            <Wrapper >
                                <Skills />
                                <Experience />
                            </Wrapper>

                            <Projects openModal={openModal} setOpenModal={setOpenModal} />

                            <Footer />
                            {openModal.state &&
                                <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
                            }
                        </Body>
                    </Router>
                </ThemeProvider>
                <ScrollTop />
            {/* </Suspense> */}
        </div>
    )
}

export default App
