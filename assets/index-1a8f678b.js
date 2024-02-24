import{s as n,R as x,_ as m,r,j as t}from"./index-d3624f09.js";import{m as c}from"./constants-00fcb92c.js";import"./createSvgIcon-677a302a.js";const f=n.div`
  background-color: ${({theme:e})=>e.card_light};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  @media (max-width: 960px) {
    transition: 0.8s all ease;
  }
`,h=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`,u=n.div`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0;
  }
`,w=n.a`
  font-weight: 500;
  cursor: pointer;
  font-size: 14px;
  text-transform: uppercase;
  text-decoration: none;
  color: ${({theme:e})=>e.text_primary};
  padding: 20px 0;
  margin: 0 20px;
  display: flex;
  justify-content: center;
  //align-items: center;
  position: relative;
  gap: 8px;
  width: 100%;
  
  &::before {
    content: "";
    position: absolute;
    bottom: -1.5px;
    height: 4px;
    width: 100%;
    background: -webkit-linear-gradient(225deg, rgb(1, 106, 112) 0%, rgb(0, 223, 162) 100%);
    border-radius: 50px;
    transform: scaleX(0);
    transition: all 0.2s linear;
    left: 1%;
  }

  &:hover::before {
    transform: scaleX(1);
    opacity: 1;
  }

  &:hover {
    color: ${({theme:e})=>e.primary};
    transition: all 0.2s ease-in-out;
  }
  
  &.active {
    color: ${({theme:e})=>e.primary};
  }
`,y=n.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content:center;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`,v=n.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`,j=n.div`
  color: ${({theme:e})=>e.primary};
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`,b=n.div`
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 50%);
      font-size: 1.5rem;
      cursor: pointer;
      color: ${({theme:e})=>e.text_primary};
    }
`,_=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({theme:e})=>e.card_mobile};
  transition: all 0.6s ease-in-out;
  transform: ${({isOpen:e})=>e?"translateY(0)":"translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({isOpen:e})=>e?"100%":"0"};
  z-index: ${({isOpen:e})=>e?"1000":"-1000"};
  @media screen and (min-width: 775px) {
    display: none;
  }
`,$=n.a`
  color: ${({theme:e})=>e.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  display: flex;
  justify-content: flex-start;
  align-items: start;
  gap: 10px;
  &:hover, &.active {
    color: ${({theme:e})=>e.primary};
  }
`,k=x.lazy(()=>m(()=>import("./index-49058225.js"),["assets/index-49058225.js","assets/index-d3624f09.js","assets/index-29a84fde.css"])),p=x.lazy(()=>m(()=>import("./CustomToggleSwitch-fc11cff8.js"),["assets/CustomToggleSwitch-fc11cff8.js","assets/index-d3624f09.js","assets/index-29a84fde.css","assets/createSvgIcon-677a302a.js","assets/TransitionGroupContext-dc5f85c2.js","assets/constants-00fcb92c.js"])),E=({switchMode:e,mode:l})=>{const[a,g]=r.useState(!1),[d,o]=r.useState("#home");return r.useEffect(()=>{window.addEventListener("scroll",()=>{window.scrollY>=0&&window.scrollY<660?o("#home"):window.scrollY>=660&&window.scrollY<1700?o("#skills"):window.scrollY>=1700&&window.scrollY<3e3?o("#experience"):window.scrollY>=3e3&&o("#projects")})},[]),t.jsx(f,{children:t.jsxs(h,{children:[t.jsx(u,{children:t.jsx(j,{children:"DADOTS"})}),t.jsx(b,{children:t.jsx(k,{"aria-label":"toggle",toggled:a,toggle:g,size:20})}),t.jsx(y,{children:c.map((i,s)=>t.jsxs(w,{href:`#${i.link}`,onClick:()=>o(`#${i.link}`),className:d===`#${i.link}`?"active":"","aria-label":i.link,children:[i.icon," ",i.name]},s))}),t.jsx(v,{children:t.jsx(p,{"aria-label":e,switchMode:e,mode:l})}),a&&t.jsxs(_,{isOpen:a,children:[c.map((i,s)=>t.jsxs($,{className:d===`#${i.link}`?i.isActive:"",href:`#${i.link}`,onClick:()=>{o(`#${i.link}`)},children:[i.icon," ",i.name]},s)),t.jsx(p,{"aria-label":e,switchMode:e,mode:l})]})]})})};export{E as default};
