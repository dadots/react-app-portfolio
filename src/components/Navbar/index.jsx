import styled from 'styled-components'
import {FaBars} from "react-icons/fa";
import {useEffect, useState} from "react";
import {Switch} from "@mui/material";
import {menu} from "../../data/constants.js";

const Nav = styled.div`
  background-color: ${({theme}) => theme.card_light};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;
const NavLogo = styled.a`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0;
  }
`;
const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
    border-bottom: 1.5px solid ${({ theme }) => theme.primary};
    line-height: 2.5;
  }
  
  &.active {
    color: ${({ theme }) => theme.primary};
    border-bottom: 1.5px solid ${({ theme }) => theme.primary};
    line-height: 2.5;
  }
`;
const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content:center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Span = styled.div`
  color: ${({ theme }) => theme.primary};
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`;

const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 50%);
      font-size: 1.5rem;
      cursor: pointer;
      color: ${({theme}) => theme.text_primary};
    }
`;
const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_mobile};
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};
  @media screen and (min-width: 775px) {
    display: none;
  }
`;
const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover, &.active {
    color: ${({ theme }) => theme.primary};
  }
`;

// eslint-disable-next-line react/prop-types
const Navbar = ({switchMode, mode}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeNav, setActiveNav] = useState('#about')

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 0 && window.scrollY < 660) {
                setActiveNav('#about');
            } else if (window.scrollY >= 660 && window.scrollY < 1700) {
                setActiveNav('#skills');
            } else if (window.scrollY >= 1700 && window.scrollY < 3000) {
                setActiveNav('#experience');
            } else if (window.scrollY >= 3000) {
                setActiveNav('#projects');
            }
        })
    }, [])

    const scrollUp = (e) => {
        e.preventDefault()
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <Nav>
            <NavContainer>
                <NavLogo href='#about'>
                        <Span>DADOTS</Span>
                </NavLogo>
                <MobileIcon>
                    <FaBars onClick={() => {
                        setIsOpen(!isOpen)
                    }} />
                </MobileIcon>
                <NavItems>
                    <NavLink
                        href={`#about`}
                        onClick={scrollUp}
                        className={activeNav === `#about` ? 'active' : ''}
                    >
                        About
                    </NavLink>
                    {
                        menu.map((tab, index) => (
                            <NavLink key={index}
                                     href={`#${tab.link}`}
                                     onClick={() => setActiveNav(`#${tab.link}`)}
                                     className={activeNav === `#${tab.link}` ? 'active' : ''}
                            >
                                {tab.name}
                            </NavLink>
                        ))
                    }
                </NavItems>
                <ButtonContainer>
                    <Switch
                        color="success"
                        defaultChecked
                        onChange={() => switchMode(mode === false ? "dark" : "light")}
                        sx={{
                            "&.MuiSwitch-root .MuiSwitch-switchBase": {
                                color: '#FFFFFF',
                                borderStyle: 'solid'
                            },

                            "&.MuiSwitch-root .Mui-checked": {
                                color: 'rgb(0, 223, 162)',
                                borderStyle: 'solid'
                            }
                        }}
                    />
                </ButtonContainer>
                {
                    isOpen &&
                    <MobileMenu isOpen={isOpen}>
                        <MobileLink
                            href={`#about`}
                            onClick={scrollUp}
                            className={activeNav === `#about` ? 'active' : ''}
                        >
                            About
                        </MobileLink>
                        {
                            menu.map((tab, index) => (
                                <MobileLink
                                    key={index}
                                    className={activeNav === `#${tab.link}` ? tab.isActive : ''}
                                    href={`#${tab.link}`}
                                    onClick={() => {
                                        setActiveNav(`#${tab.link}`)
                                        setIsOpen(!isOpen)

                                }}>{tab.name}</MobileLink>
                            ))
                        }

                        <Switch
                            sx={{
                                "&.MuiSwitch-root .MuiSwitch-switchBase": {
                                    color: '#FFFFFF'
                                },

                                "&.MuiSwitch-root .Mui-checked": {
                                    color: 'rgb(0, 223, 162)'
                                }
                            }}
                            defaultChecked
                            onChange={() => switchMode(mode === false ? "dark" : "light")}
                        />
                    </MobileMenu>
                }
            </NavContainer>
        </Nav>
    )
}
export default Navbar