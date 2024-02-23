import React from 'react'
import {
    Button,
    Card,
    Image,
    Tags,
    Tag,
    Details,
    Title,
    Date,
    Description,
    Members,
    Avatar
} from "../../utils/Project/Card.js"

const ProjectCards = ({project,setOpenModal}) => {
    return (
        <Card onClick={() => setOpenModal({state: true, project: project})}>
            <Image alt={project.image} src={project.image}/>
            <Tags>
                {project.tags?.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>
            <Members>
                {project.member?.map((member, key) => (
                    <Avatar key={key} alt={member.img} src={member.img}/>
                ))}
            </Members>
        </Card>
    )
}

export default ProjectCards