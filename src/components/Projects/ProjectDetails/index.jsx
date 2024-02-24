import { CloseRounded } from '@mui/icons-material';
import { Modal } from '@mui/material';

import {
    Container,
    Wrapper,
    CloseButton,
    Image,
    Title,
    Button,
    Tags,
    Tag,
    Date,
    Desc,
    ButtonGroup
} from "../../../utils/Project/Project.js"

const ProjectDetails = ({ openModal, setOpenModal }) => {
    const project = openModal?.project.project;

    return (
        <Modal open={true} >
            <Container>
                <Wrapper>
                    <CloseButton>
                        <CloseRounded onClick={setOpenModal} />
                    </CloseButton>
                    <Image src={project?.image} alt={project?.title} />
                    <Title>{project?.title}</Title>
                    <Date>{project.date}</Date>
                    <Tags>
                        {project?.tags.map((tag, key) => (
                            <Tag key={key}>{tag}</Tag>
                        ))}
                    </Tags>
                    <Desc>{project?.description}</Desc>
                    <ButtonGroup>
                        {
                            project.github !== "" && (
                                <Button dull href={project?.github} target='new'>View Code</Button>
                            )
                        }

                        {
                            project?.webapp !== "" && (
                                <Button dull href={project?.webapp} target='new'>View Live App</Button>
                            )
                        }
                    </ButtonGroup>
                </Wrapper>
            </Container>
        </Modal>
    );
};

export default ProjectDetails;
