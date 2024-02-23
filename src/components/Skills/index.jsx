import {skills} from "../../data/constants.jsx";
import { Title, Desc, Container, Wrapper } from "../../utils/Themes.js"
import {
    SkillsContainer,
    Skill,
    SkillTitle,
    SkillList,
    SkillItem,
    SkillImage
} from "../../utils/Skills.js"

const Skills = () => {
    return (
        <Container id="skills">
            <Wrapper>
                <Title>Skills</Title>
                <Desc>
                   Here are some of my skills on which I have been working on for the past 5 years.
                </Desc>
                <SkillsContainer>
                    {
                        skills.map((item, index) => (
                            <Skill key={item.title}>
                                <SkillTitle>{item.title}</SkillTitle>
                                <SkillList key={index}>
                                    {
                                        item.skills.map((skill, index) => (
                                                <SkillItem key={index}>
                                                    <SkillImage alt={skill.image} src={skill.image}/>
                                                    {skill.name}
                                                </SkillItem>
                                        ))
                                    }
                                </SkillList>
                            </Skill>
                        ))
                    }
                </SkillsContainer>
            </Wrapper>
        </Container>
    )
}
export default Skills