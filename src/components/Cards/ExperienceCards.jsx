import {
    Card,
    Top,
    Logo,
    Body,
    Role,
    Company,
    Duration,
    Description,
    Skills,
    ItemWrapper,
    Skill,
    Document
} from "../../utils/Experience/Card.js"

const ExperienceCards = ({experience}) => {
    return (
      <Card>
          <Top>
              <Logo alt={experience.img} src={experience.img}  />
              <Body>
                  <Role>{experience.role}</Role>
                  <Company>{experience.company}</Company>
                  <Duration>{experience.date}</Duration>
              </Body>
          </Top>
            <Description>{experience.desc}
                {
                    experience?.skills &&
                    <>
                        <Skills>
                            <b>Skills: </b>
                            <ItemWrapper>
                                {
                                    experience?.skills?.map((skill, index) => (
                                        <Skill key={index}>• {skill}</Skill>
                                    ))
                                }
                            </ItemWrapper>
                        </Skills>
                    </>
                }
            </Description>
          {
              experience.doc &&
              <a href={experience.doc} aria-label="certificates" rel="noopener" target="new">
                  <Document src={experience.doc} />
              </a>
          }
      </Card>
    )
}

export default ExperienceCards
