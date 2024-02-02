import{R as x,_ as m,s as n,r as a,j as i}from"./index-f9c6912d.js";import{menu as c}from"./constants-5af6715d.js";import"./createSvgIcon-3a79c604.js";import"./createSvgIcon-d8d013bc.js";const f=x.lazy(()=>m(()=>import("./index-1945f9eb.js"),["assets/index-1945f9eb.js","assets/index-f9c6912d.js","assets/index-e0d618c3.css"])),p=x.lazy(()=>m(()=>import("./CustomToggleSwitch-607eb268.js"),["assets/CustomToggleSwitch-607eb268.js","assets/index-f9c6912d.js","assets/index-e0d618c3.css","assets/createSvgIcon-d8d013bc.js","assets/TransitionGroupContext-d4110b8f.js","assets/createSvgIcon-3a79c604.js"])),g=n.div`
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
`,u=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`,w=n.div`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0;
  }
`,y=n.a`
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
`,v=n.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content:center;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`,j=n.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`,_=n.div`
  color: ${({theme:e})=>e.primary};
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`,$=n.div`
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
`,b=n.div`
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
`,k=n.a`
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
`,L=({switchMode:e,mode:l})=>{const[s,h]=a.useState(!1),[d,o]=a.useState("#home");return a.useEffect(()=>{window.addEventListener("scroll",()=>{window.scrollY>=0&&window.scrollY<660?o("#home"):window.scrollY>=660&&window.scrollY<1700?o("#skills"):window.scrollY>=1700&&window.scrollY<3e3?o("#experience"):window.scrollY>=3e3&&o("#projects")})},[]),i.jsx(g,{children:i.jsxs(u,{children:[i.jsx(w,{children:i.jsx(_,{children:"DADOTS"})}),i.jsx($,{children:i.jsx(f,{toggled:s,toggle:h,size:20})}),i.jsx(v,{children:c.map((t,r)=>i.jsxs(y,{href:`#${t.link}`,onClick:()=>o(`#${t.link}`),className:d===`#${t.link}`?"active":"",children:[t.icon," ",t.name]},r))}),i.jsx(j,{children:i.jsx(p,{switchMode:e,mode:l})}),s&&i.jsxs(b,{isOpen:s,children:[c.map((t,r)=>i.jsxs(k,{className:d===`#${t.link}`?t.isActive:"",href:`#${t.link}`,onClick:()=>{o(`#${t.link}`)},children:[t.icon," ",t.name]},r)),i.jsx(p,{switchMode:e,mode:l})]})]})})};export{L as default};
