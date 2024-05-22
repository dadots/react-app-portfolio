import './App.css'
import React, { Suspense, useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './utils/Themes.js';
import { motion } from 'framer-motion';

// Lazy-loaded components
const Navbar = React.lazy(() => import('./components/Navbar/index'));
const Hero = React.lazy(() => import('./components/HeroSection/index'));
const Projects = React.lazy(() => import('./components/Projects/index'));
const Experience = React.lazy(() => import('./components/Experience/index'));
const Skills = React.lazy(() => import('./components/Skills/index'));
const Footer = React.lazy(() => import('./components/Footer/index'));
const ScrollTop = React.lazy(() => import('./components/ScrollTop/index'));
const Loader = React.lazy(() => import('./components/Loader/index'));
import ProjectDetails from './components/Projects/ProjectDetails/index'

const Body = styled.div`
    background-color: ${({ theme }) => theme.bg};
    width: 100%;
    height: 100%;
    overflow-x: hidden;
`;

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
`;

const App = () => {
    const [loading, setLoading] = useState(true);
    const [mode, setMode] = useState(true);
    const [openModal, setOpenModal] = useState({ state: false, project: null });
    const progressRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (progressRef.current) {
                const scrollTop = document.documentElement.scrollTop;
                const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrollProgress = (scrollTop / windowHeight) * 100;
                progressRef.current.style.width = `${scrollProgress}%`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const switchMode = (mode) => {
        setMode(mode === "dark");
    };

    const handleOpenModal = (project) => {
        setOpenModal({ state: true, project });
    };

    const handleCloseModal = (e) => {
        e.preventDefault()
        setOpenModal({ state: false, project: null });
    };

    return (
        <div className="App">
                <ThemeProvider theme={mode ? darkTheme : lightTheme}>
                    <Router>
                        {loading ? ( 
                            <Loader />
                        ) : (
                            <>
                            <Navbar switchMode={switchMode} mode={mode} />
                            <motion.div ref={progressRef} className="progress-bar" style={{ width: '0%' }} />
                            <Body>
                                <Hero />
                                <Wrapper>
                                    <Skills />
                                    <Experience />
                                </Wrapper>
                                <Projects openModal={openModal} setOpenModal={handleOpenModal} />
                                <Footer />
                                {openModal.state && <ProjectDetails openModal={openModal} setOpenModal={handleCloseModal} />}
                            </Body>
                            <ScrollTop />
                            </>
                        )}
                    </Router>
                </ThemeProvider>
        </div>
    );
};

export default App;






