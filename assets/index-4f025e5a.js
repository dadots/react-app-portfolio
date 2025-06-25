import{s as e,j as o,C as r,W as i,T as t,D as d,a as l}from"./index-f4c148a3.js";import{p as n}from"./constants-b1984159.js";const a=e.button`
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
`,p=e.div`
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
    &:hover ${a} {
        display: block;
    }
`,s=e.img`
    width: 100%;
    height: 180px;
    background-color: ${({theme:e})=>e.white};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`,x=e.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`,h=e.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({theme:e})=>e.primary};
    background-color: ${({theme:e})=>e.primary+15};
    padding: 2px 8px;
    border-radius: 10px;
`,c=e.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`,b=e.div`
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
`,g=e.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({theme:e})=>e.text_secondary+80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`,f=e.div`
    font-weight: 400;
    color: ${({theme:e})=>e.text_secondary+99};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`,m=e.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`,w=e.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${({theme:e})=>e.white};
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    border: 3px solid ${({theme:e})=>e.card};
`,u=({project:e,setOpenModal:r})=>{var i,t;return o.jsxs(p,{onClick:()=>r({state:!0,project:e}),children:[o.jsx(s,{alt:e.image,src:e.image}),o.jsx(x,{children:null==(i=e.tags)?void 0:i.map(((e,r)=>o.jsx(h,{children:e},r)))}),o.jsxs(c,{children:[o.jsx(b,{children:e.title}),o.jsx(g,{children:e.date}),o.jsx(f,{children:e.description})]}),o.jsx(m,{children:null==(t=e.member)?void 0:t.map(((e,r)=>o.jsx(w,{alt:e.img,src:e.img},r)))})]})},k=({openModal:e,setOpenModal:a})=>o.jsx(r,{id:"projects",children:o.jsxs(i,{children:[o.jsx(t,{children:"Projects"}),o.jsx(d,{children:"Here are some of my projects."}),o.jsx(l,{children:n.map(((r,i)=>o.jsx(u,{project:r,openModal:e,setOpenModal:a},i)))})]})});export{k as default};
