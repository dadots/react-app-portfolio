import styled from 'styled-components'
import React, {useEffect, useState} from "react";
import { menu } from "../../data/constants.jsx";
const Hamburger = React.lazy(() => import('hamburger-react'));
const CustomToggleSwitch = React.lazy(() => import('./CustomToggleSwitch.jsx'));
import {
    Nav,
    NavContainer,
    NavLogo,
    NavLink,
    NavItems,
    ButtonContainer,
    Span,
    MobileIcon,
    MobileMenu,
    MobileLink,
} from "../../utils/Navbar/Navbar.js"
// eslint-disable-next-line react/prop-types
const Navbar = ({switchMode, mode}) => {
    const [isOpen, setOpen] = useState(false);
    const [activeNav, setActiveNav] = useState('#home')

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 0 && window.scrollY < 650) {
                setActiveNav('#home');
            } else if (window.scrollY >= 650 && window.scrollY < 1600) {
                setActiveNav('#skills');
            } else if (window.scrollY >= 1600 && window.scrollY < 2900) {
                setActiveNav('#experience');
            } else if (window.scrollY >= 2900) {
                setActiveNav('#projects');
            }
        })
    }, [])

    return (
        <Nav>
            <NavContainer>
                <NavLogo>
                        <Span>DADOTS</Span>
                </NavLogo>
                <MobileIcon>
                    <Hamburger aria-label='toggle' toggled={isOpen} toggle={setOpen} size={20}/>
                </MobileIcon>
                <NavItems>
                    {
                        menu.map((tab, index) => (
                            <NavLink key={index}
                                     href={`#${tab.link}`}
                                     onClick={() => setActiveNav(`#${tab.link}`)}
                                     className={activeNav === `#${tab.link}` ? 'active' : ''}
                                     aria-label={tab.link}
                            >
                                {tab.icon} {tab.name}
                            </NavLink>
                        ))
                    }
                </NavItems>
                <ButtonContainer>
                    <CustomToggleSwitch aria-label={switchMode} switchMode={switchMode} mode={mode}  />
                </ButtonContainer>
                {
                    isOpen &&
                    <MobileMenu isOpen={isOpen}>
                        {
                            menu.map((tab, index) => (
                                <MobileLink
                                    key={index}
                                    className={activeNav === `#${tab.link}` ? tab.isActive : ''}
                                    href={`#${tab.link}`}
                                    onClick={() => {
                                        setActiveNav(`#${tab.link}`)

                                }}>
                                    {tab.icon} {tab.name}
                                </MobileLink>
                            ))
                        }
                        <CustomToggleSwitch aria-label={switchMode} switchMode={switchMode} mode={mode} />
                    </MobileMenu>
                }
            </NavContainer>
        </Nav>
    )
}
export default Navbar