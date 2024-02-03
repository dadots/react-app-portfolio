import{R as s,_ as a,s as i,j as e}from"./index-8c984e2e.js";import{p as c}from"./constants-4146e127.js";const p=s.lazy(()=>a(()=>import("./ProjectCard-a8835c72.js"),["assets/ProjectCard-a8835c72.js","assets/index-8c984e2e.js","assets/index-e0d618c3.css"])),x=i.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding-bottom: 20px;
`,d=i.div`
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
`,l=i.h1`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 5.5rem;
    color: ${({theme:t})=>t.text_primary};
    text-transform: uppercase;
    @media (max-width: 768px) {
          margin-top: 5.5rem;
          font-size: 32px;
    }
`,m=i.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({theme:t})=>t.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`,f=i.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
`,g=({openModal:t,setOpenModal:n})=>e.jsx(x,{id:"projects",children:e.jsxs(d,{children:[e.jsx(l,{children:"Projects"}),e.jsx(m,{children:"Here are some of my projects."}),e.jsx(f,{children:c.map((r,o)=>e.jsx(p,{project:r,openModal:t,setOpenModal:n},o))})]})});export{g as default};
