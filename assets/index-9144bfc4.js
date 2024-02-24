import{s as r,j as i,C as d,W as x,T as l,D as p,a as c}from"./index-1710d65c.js";import{p as h}from"./constants-6b519b32.js";const g=r.button`
    display: none;
    width: 100%;
    padding: 10px;
    background-color: ${({theme:e})=>e.white};
    color: ${({theme:e})=>e.text_primary};
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.8s ease-in-out;
`,b=r.div`
    width: 330px;
    height: 490px;
    background-color: ${({theme:e})=>e.card};
    cursor: pointer;
    border-radius: 10px;
    border: 0.1px solid rgb(1, 106, 112);
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
        filter: brightness(1.1);
        border: 1px solid #4FD3C4;
    }
    &:hover ${g} {
        display: block;
    }
`,m=r.img`
    width: 100%;
    height: 180px;
    background-color: ${({theme:e})=>e.white};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`,w=r.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`,f=r.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({theme:e})=>e.primary};
    background-color: ${({theme:e})=>e.primary+15};
    padding: 2px 8px;
    border-radius: 10px;
`,u=r.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`,v=r.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({theme:e})=>e.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`,j=r.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({theme:e})=>e.text_secondary+80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`,y=r.div`
    font-weight: 400;
    color: ${({theme:e})=>e.text_secondary+99};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`,k=r.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`,$=r.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${({theme:e})=>e.white};
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    border: 3px solid ${({theme:e})=>e.card};
`,C=({project:e,setOpenModal:a})=>{var o,t;return i.jsxs(b,{onClick:()=>a({state:!0,project:e}),children:[i.jsx(m,{alt:e.image,src:e.image}),i.jsx(w,{children:(o=e.tags)==null?void 0:o.map((s,n)=>i.jsx(f,{children:s},n))}),i.jsxs(u,{children:[i.jsx(v,{children:e.title}),i.jsx(j,{children:e.date}),i.jsx(y,{children:e.description})]}),i.jsx(k,{children:(t=e.member)==null?void 0:t.map((s,n)=>i.jsx($,{alt:s.img,src:s.img},n))})]})},T=({openModal:e,setOpenModal:a})=>i.jsx(d,{id:"projects",children:i.jsxs(x,{children:[i.jsx(l,{children:"Projects"}),i.jsx(p,{children:"Here are some of my projects."}),i.jsx(c,{children:h.map((o,t)=>i.jsx(C,{project:o,openModal:e,setOpenModal:a},t))})]})});export{T as default};
