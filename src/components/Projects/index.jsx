import React from 'react';
import styled from "styled-components";
import { projects } from "../../data/constants.jsx";
import { Title, Desc, Container, Wrapper } from "../../utils/Themes.js"

// const ProjectCard = React.lazy(() => import('../Cards/ProjectCard.jsx'));
import ProjectCard from '../Cards/ProjectCard.jsx'

import { CardContainer } from "../../utils/Project/Project.js"

// eslint-disable-next-line react/prop-types
const Projects = ({openModal, setOpenModal}) => {
    return (
        <Container id="projects">
            <Wrapper>
                <Title>Projects</Title>
                <Desc>
                    Here are some of my projects.
                </Desc>

                <CardContainer>
                    {projects
                        .map((project, key) => (
                            <ProjectCard key={key} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
                        ))}

                </CardContainer>
            </Wrapper>
        </Container>
    )
}

export default Projects