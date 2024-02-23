import styled from 'styled-components'

export const Div = styled.div`
    width:600px;
    height: 500px;
`

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 8rem 30px;
  @media screen and (max-width: 960px) {
    padding: 8rem 16px;
  }
  @media screen and (max-width: 640px) {
    padding: 6rem 16px;
  }
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  width: 82%;
  height: 100%;
  inset: 60% 0 0 52% !important;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media screen and (max-width: 1300px) {
    justify-content: center;
    padding: 0 0;
    inset: 65% 0 0 75% !important;
  }

  @media screen and (max-width: 1020px) {
    justify-content: center;
    padding: 0 0;
    inset: 65% 0 0 75% !important;
  }

  @media screen and (max-width: 960px) {
    justify-content: center;
    padding: 0 0;
    inset: 55% 0 0 50% !important;
  }

  @media screen and (max-width: 640px) {
    inset: 55% 0 0 50% !important;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media screen and (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media screen and (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;
  }

  @media screen and (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media screen and (max-width: 960px) {
    text-align: center;
  }
  @media screen and (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

export const SubTitle = styled.div`
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};
  text-align: justify;

  @media screen and (max-width: 960px) {
    text-align: justify;
    text-justify: inter-word;
    font-size: 14px;
  }

  @media screen and (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

export const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color:${({ theme }) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: hsla(183, 98%, 22%, 1);
    background: linear-gradient(225deg, hsla(183, 98%, 22%, 1) 0%, hsla(164, 100%, 44%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(183, 98%, 22%, 1) 0%, hsla(164, 100%, 44%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(183, 98%, 22%, 1) 0%, hsla(164, 100%, 44%, 1) 100%);
    &:hover {
        transform: scale(1.05);
        transition: all 0.4s ease-in-out;
        filter: brightness(1);
    }
  
    @media screen and (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 50%;
  max-height: 400px;
  max-width: 400px;
  object-fit: cover;
  object-position: center;
  border: 2px solid ${({ theme }) => theme.primary};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  
  @media screen and (max-width: 960px) {
    max-height: 350px;
    max-width: 350px;
    height: 350px;
    width: 350px;
  }

  @media screen and (max-width: 640px) {
    max-height: 250px;
    max-width: 250px;
    height: 250px;
    width: 250px;
  }
`