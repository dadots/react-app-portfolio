import{s as t,j as e,C as x,W as p,T as n,D as d}from"./index-d3624f09.js";import{s as o}from"./constants-00fcb92c.js";import"./createSvgIcon-677a302a.js";const l=t.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`,m=t.div`
  width: 100%;
  max-width: 500px;
  background: ${({theme:i})=>i.card};
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
`,c=t.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({theme:i})=>i.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`,h=t.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`,g=t.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({theme:i})=>i.text_primary+80};
  border: 1px solid ${({theme:i})=>i.text_primary+80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  &:hover{
    border: 1px solid ${({theme:i})=>i.primary};
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
`,f=t.img`
  width: 24px;
  height: 24px;
`,y=()=>e.jsx(x,{id:"skills",children:e.jsxs(p,{children:[e.jsx(n,{children:"Skills"}),e.jsx(d,{children:"Here are some of my skills on which I have been working on for the past 5 years."}),e.jsx(l,{children:o.map((i,s)=>e.jsxs(m,{children:[e.jsx(c,{children:i.title}),e.jsx(h,{children:i.skills.map((a,r)=>e.jsxs(g,{children:[e.jsx(f,{alt:a.image,src:a.image}),a.name]},r))},s)]},i.title))})]})});export{y as default};
