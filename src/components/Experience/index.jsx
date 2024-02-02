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

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding-bottom: 50px;
    background-color: ${({theme}) => theme.card_light};
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
export const Title = styled.h1`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 5.5rem;
    color: ${({ theme }) => theme.text_primary};
    text-transform: uppercase;
    @media (max-width: 768px) {
          margin-top: 5.5rem;
          font-size: 32px;
    }
`;

const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
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