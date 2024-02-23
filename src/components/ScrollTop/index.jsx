import {useState, useEffect} from 'react'
import { ScrollButton } from "../../utils/ScrollTop.js"

const ScrollTop = () => {
  const [scrollTop, setScrollTop] = useState(false)
  useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 560) {
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
                    <svg style={{display: "flex", margin: "8px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                </ScrollButton>
            )
        }
    </div>
  )
}

export default ScrollTop