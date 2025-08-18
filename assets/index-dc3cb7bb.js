import{s as e,R as t,_ as i,r as n,j as o}from"./index-5578ac6b.js";import{m as a}from"./constants-be07ce07.js";const s=e.div`
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
`,r=e.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`,d=e.div`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0;
  }
`,l=e.a`
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
`,p=e.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content:center;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`,c=e.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`,x=e.div`
  color: ${({theme:e})=>e.primary};
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`,h=e.div`
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
`,m=e.div`
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
`,g=e.a`
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
`,w=t.lazy((()=>i((()=>import("./index-8c60e2c3.js")),["assets/index-8c60e2c3.js","assets/index-5578ac6b.js","assets/index-29a84fde.css"]))),f=t.lazy((()=>i((()=>import("./CustomToggleSwitch-7e784bad.js")),["assets/CustomToggleSwitch-7e784bad.js","assets/index-5578ac6b.js","assets/index-29a84fde.css","assets/constants-be07ce07.js"]))),u=({switchMode:e,mode:t})=>{const[i,u]=n.useState(!1),[b,y]=n.useState("#home");return n.useEffect((()=>{window.addEventListener("scroll",(()=>{window.scrollY>=0&&window.scrollY<650?y("#home"):window.scrollY>=650&&window.scrollY<1600?y("#skills"):window.scrollY>=1600&&window.scrollY<2900?y("#experience"):window.scrollY>=2900&&y("#projects")}))}),[]),o.jsx(s,{children:o.jsxs(r,{children:[o.jsx(d,{children:o.jsx(x,{children:"DADOTS"})}),o.jsx(h,{children:o.jsx(w,{"aria-label":"toggle",toggled:i,toggle:u,size:20})}),o.jsx(p,{children:a.map(((e,t)=>o.jsxs(l,{href:`#${e.link}`,onClick:()=>y(`#${e.link}`),className:b===`#${e.link}`?"active":"","aria-label":e.link,children:[e.icon," ",e.name]},t)))}),o.jsx(c,{children:o.jsx(f,{"aria-label":e,switchMode:e,mode:t})}),i&&o.jsxs(m,{isOpen:i,children:[a.map(((e,t)=>o.jsxs(g,{className:b===`#${e.link}`?e.isActive:"",href:`#${e.link}`,onClick:()=>{y(`#${e.link}`)},children:[e.icon," ",e.name]},t))),o.jsx(f,{"aria-label":e,switchMode:e,mode:t})]})]})})};export{u as default};
