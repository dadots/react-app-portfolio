import React from 'react';
import styled from 'styled-components'
const ExperienceCards = React.lazy(() => import('../Cards/ExperienceCards.jsx'));
const Timeline = React.lazy(() => import('@mui/lab/Timeline'));
const TimelineItem = React.lazy(() => import('@mui/lab/TimelineItem'));
const TimelineSeparator = React.lazy(() => import('@mui/lab/TimelineSeparator'));
const TimelineConnector = React.lazy(() => import('@mui/lab/TimelineConnector'));
const TimelineContent = React.lazy(() => import('@mui/lab/TimelineContent'));
const TimelineDot = React.lazy(() => import('@mui/lab/TimelineDot'));
import { experiences } from "../../data/constants.jsx";
import { Title, Desc, Wrapper } from "../../utils/Themes.js"
import { Container, TimelineSection } from "../../utils/Experience/Experience.js"

const Experience = () => {
    return (
        <Container id="experience">
            <Wrapper>
                <Title>Experience</Title>
                <Desc>Below are some of my experiences base on my resume.</Desc>
                <TimelineSection>
                    <Timeline>
                        {
                            experiences.map((experience,index) => (
                                <TimelineItem key={index}>
                                    <TimelineSeparator>
                                        <TimelineDot variant="outlined" sx={{borderColor: '#00DFA2'}}/>
                                        {index !== experiences.length - 1 && <TimelineConnector sx={{ background: '-webkit-linear-gradient(225deg, rgb(0, 223, 162) 0%, rgb(1, 106, 112) 100%)' }} />}
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                                        <ExperienceCards experience={experience} />
                                    </TimelineContent>
                                </TimelineItem>
                            ))
                        }
                    </Timeline>
                </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default Experience