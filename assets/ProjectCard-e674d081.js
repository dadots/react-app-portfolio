import{s as e,j as o}from"./index-f9c6912d.js";const s=e.button`
    display: none;
    width: 100%;
    padding: 10px;
    background-color: ${({theme:i})=>i.white};
    color: ${({theme:i})=>i.text_primary};
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.8s ease-in-out;
`,x=e.div`
    width: 330px;
    height: 490px;
    background-color: ${({theme:i})=>i.card};
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
    &:hover ${s} {
        display: block;
    }
`,l=e.img`
    width: 100%;
    height: 180px;
    background-color: ${({theme:i})=>i.white};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`,p=e.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`,c=e.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({theme:i})=>i.primary};
    background-color: ${({theme:i})=>i.primary+15};
    padding: 2px 8px;
    border-radius: 10px;
`,g=e.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`,h=e.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({theme:i})=>i.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`,b=e.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({theme:i})=>i.text_secondary+80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`,w=e.div`
    font-weight: 400;
    color: ${({theme:i})=>i.text_secondary+99};
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
`,f=e.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${({theme:i})=>i.white};
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    border: 3px solid ${({theme:i})=>i.card};
`,v=({project:i,setOpenModal:n})=>{var a,d;return o.jsxs(x,{onClick:()=>n({state:!0,project:i}),children:[o.jsx(l,{alt:i.image,src:i.image}),o.jsx(p,{children:(a=i.tags)==null?void 0:a.map((t,r)=>o.jsx(c,{children:t},r))}),o.jsxs(g,{children:[o.jsx(h,{children:i.title}),o.jsx(b,{children:i.date}),o.jsx(w,{children:i.description})]}),o.jsx(m,{children:(d=i.member)==null?void 0:d.map((t,r)=>o.jsx(f,{alt:t.img,src:t.img},r))})]})};export{v as default};
