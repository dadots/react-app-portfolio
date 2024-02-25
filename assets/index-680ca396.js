import{s as e,j as i,C as p,W as t,T as a,D as x}from"./index-1986924d.js";import{s as r}from"./constants-0453fb7f.js";const d=e.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`,n=e.div`
  width: 100%;
  max-width: 500px;
  background: ${({theme:e})=>e.card};
  border: 0.1px solid rgb(1, 106, 112);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  transition: all 0.3s ease-in-out;
  &:hover{
    box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
    transform: translateY(-5px);
    border: 1px solid #4FD3C4;
  }
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`,o=e.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({theme:e})=>e.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`,s=e.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`,l=e.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({theme:e})=>e.text_primary+80};
  border: 1px solid ${({theme:e})=>e.text_primary+80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  &:hover{
    border: 1px solid ${({theme:e})=>e.primary};
    transition: 0.8s all ease;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`,h=e.img`
  width: 24px;
  height: 24px;
`,m=()=>i.jsx(p,{id:"skills",children:i.jsxs(t,{children:[i.jsx(a,{children:"Skills"}),i.jsx(x,{children:"Here are some of my skills on which I have been working on for the past 5 years."}),i.jsx(d,{children:r.map(((e,p)=>i.jsxs(n,{children:[i.jsx(o,{children:e.title}),i.jsx(s,{children:e.skills.map(((e,p)=>i.jsxs(l,{children:[i.jsx(h,{alt:e.image,src:e.image}),e.name]},p)))},p)]},e.title)))})]})});export{m as default};
