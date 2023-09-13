import styled from "styled-components";
import {projects} from "../../data/constants.js";
import ProjectCard from "../Cards/ProjectCard.jsx";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding-bottom: 20px;
`

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1100px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`

const Title = styled.h1`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 5.5rem;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
          margin-top: 5.5rem;
          font-size: 32px;
    }
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

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
`;

// eslint-disable-next-line react/prop-types
const Projects = ({openModal, setOpenModal}) => {
    return (
        <Container id="projects">
            <Wrapper>
                <Title>Projects</Title>
                <Desc>
                    I have worked on a wide range of projects. Here are some of my projects.
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