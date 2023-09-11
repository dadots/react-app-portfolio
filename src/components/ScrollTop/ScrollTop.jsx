import {useState, useEffect} from 'react'
import styled from "styled-components";

const ScrollButton = styled.a`
  border-radius: "50%";
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  position: fixed;
  z-index: 1;
  bottom: "50px";
  right: "20px";
  height: "50px";
  width: "50px";
  font-size: "50px";
  &:hover {
    color: ${({ theme }) => theme.primary};
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

  const scrollUp = () => {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      })
  }

  return (
    <div>
        {
            scrollTop && (
                //<ScrollButton onClick={scrollUp}>^</ScrollButton>
                <button
                style={{
                    backgroundColor: '#4FD3C4',
                    borderColor: '1px solid #00DFA2',
                    borderRadius: "50%",
                    position: "fixed",
                    bottom: "50px",
                    right: "20px",
                    height: "50px",
                    width: "50px",
                    fontSize: "50px",
                    cursor: "pointer",
                    zIndex: 1,
                    boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
                    transition: "all 0.3s ease-in-out"
            }}
            onClick={scrollUp}>
                    <svg style={{display: "flex", margin: "8px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"/>
                    </svg>
                </button>
            )
        }
    </div>
  )
}

export default ScrollTop