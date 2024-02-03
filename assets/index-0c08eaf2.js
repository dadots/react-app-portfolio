import{s as e,j as t}from"./index-8c984e2e.js";import{s as p}from"./constants-4146e127.js";const r=e.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding-bottom: 20px;
`,o=e.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1100px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`,s=e.h1`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 5.5rem;
    color: ${({theme:i})=>i.text_primary};
    text-transform: uppercase;
    @media (max-width: 768px) {
          margin-top: 5.5rem;
          font-size: 32px;
    }
`,d=e.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({theme:i})=>i.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`,l=e.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`,c=e.div`
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
`,m=e.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({theme:i})=>i.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`,h=e.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`,g=e.div`
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
`,f=e.img`
  width: 24px;
  height: 24px;
`,b=()=>t.jsx(r,{id:"skills",children:t.jsxs(o,{children:[t.jsx(s,{children:"Skills"}),t.jsx(d,{children:"Here are some of my skills on which I have been working on for the past 5 years."}),t.jsx(l,{children:p.map((i,n)=>t.jsxs(c,{children:[t.jsx(m,{children:i.title}),t.jsx(h,{children:i.skills.map((x,a)=>t.jsxs(g,{children:[t.jsx(f,{alt:x.image,src:x.image}),x.name]},a))},n)]},i.title))})]})});export{b as default};
