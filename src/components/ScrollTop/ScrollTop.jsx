import {useState, useEffect} from 'react'
import styled from "styled-components";

const ScrollButton = styled.button`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  border-radius: 50%;
  background: hsla(183, 98%, 22%, 1);
  background: linear-gradient(225deg, hsla(183, 98%, 22%, 1) 0%, hsla(164, 100%, 44%, 1) 100%);
  background: -moz-linear-gradient(225deg, hsla(183, 98%, 22%, 1) 0%, hsla(164, 100%, 44%, 1) 100%);
  background: -webkit-linear-gradient(225deg, hsla(183, 98%, 22%, 1) 0%, hsla(164, 100%, 44%, 1) 100%);
  border-style: solid;
  border-color: hsla(183, 98%, 22%, 1);
  border-width: thin;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  position: fixed;
  z-index: 1;
  bottom: 50px;
  right: 50px;
  height: 50px;
  width: 50px;
  font-size: 50px;
  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    filter: brightness(1.5);
  }
`;
const ScrollTop = () => {
  const [scrollTop, setScrollTop] = useState(false)
  useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 250) {
                setScrollTop(true)
            } else {
                setScrollTop(false)
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
    <div>
        {
            scrollTop && (
                <ScrollButton
                    onClick={scrollUp}>
                    <svg style={{display: "flex", margin: "8px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"/>
                    </svg>
                </ScrollButton>
            )
        }
    </div>
  )
}

export default ScrollTop