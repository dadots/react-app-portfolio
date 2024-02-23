import styled from "styled-components";

export const darkTheme = {
    title: "#00DFA2",
    bg:"#1C1C27",
    bgLight: "#1C1E27",
    primary:"#00DFA2",
    text_primary:"#F2F3F4",
    text_secondary:"#b1b2b3",
    card:"#171721",
    card_light: '#191924',
    card_mobile: 'rgba(25, 25, 36, .9)',
    button:"#00DFA2",
    white:"#FFFFFF",
    black:"#000000",
}

export const lightTheme = {
    title: "#0f766e",
    bg:"#FFFFFF",
    bgLight: "#EAF6F6",
    primary:"#0f766e",
    card_mobile: 'rgba(234, 246, 246, .9)',
    text_primary:"#111111",
    text_secondary:"#48494a",
    card_light: '#EAF6F6',
    card:"#FFFFFF",
    button:"#5c5b5b",
    white:"#FFFFFF"
}

export const Title = styled.h1`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 5.5rem;
    color: ${({ theme }) => theme.title};
    text-transform: uppercase;
    @media (max-width: 768px) {
          margin-top: 5.5rem;
          font-size: 32px;
    }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding-bottom: 20px;
`

export const Wrapper = styled.div`
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