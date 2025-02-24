import{s as e,r as o,j as r}from"./index-bce7f662.js";const n=e.button`
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
`,t=()=>{const[e,t]=o.useState(!1);o.useEffect((()=>{window.addEventListener("scroll",(()=>{window.scrollY>560?t(!0):t(!1)}))}),[]);return r.jsx("div",{children:e&&r.jsx(n,{onClick:e=>{e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})},children:r.jsx("svg",{style:{display:"flex",margin:"8px"},xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"})})})})};export{t as default};
