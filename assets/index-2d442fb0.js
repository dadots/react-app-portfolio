import{R as t,_ as n,s as r,j as e}from"./index-16b227ac.js";import{experiences as s}from"./constants-089c9f41.js";import"./createSvgIcon-f97821c5.js";import"./createSvgIcon-4d8038f9.js";const a=t.lazy(()=>n(()=>import("./ExperienceCards-ac0dbe93.js"),["assets/ExperienceCards-ac0dbe93.js","assets/index-16b227ac.js","assets/index-e0d618c3.css"])),c=t.lazy(()=>n(()=>import("./index-920fce23.js"),["assets/index-920fce23.js","assets/createSvgIcon-4d8038f9.js","assets/index-16b227ac.js","assets/index-e0d618c3.css","assets/convertTimelinePositionToClass-3d4caa54.js"])),x=t.lazy(()=>n(()=>import("./index-31f48895.js"),["assets/index-31f48895.js","assets/createSvgIcon-4d8038f9.js","assets/index-16b227ac.js","assets/index-e0d618c3.css","assets/convertTimelinePositionToClass-3d4caa54.js","assets/timelineContentClasses-76a0e92d.js","assets/createSvgIcon-f97821c5.js"])),l=t.lazy(()=>n(()=>import("./index-c32e157e.js"),["assets/index-c32e157e.js","assets/createSvgIcon-4d8038f9.js","assets/index-16b227ac.js","assets/index-e0d618c3.css"])),p=t.lazy(()=>n(()=>import("./index-f75ac6bf.js"),["assets/index-f75ac6bf.js","assets/createSvgIcon-4d8038f9.js","assets/index-16b227ac.js","assets/index-e0d618c3.css"])),d=t.lazy(()=>n(()=>import("./index-9ebcd76a.js"),["assets/index-9ebcd76a.js","assets/createSvgIcon-4d8038f9.js","assets/index-16b227ac.js","assets/index-e0d618c3.css","assets/convertTimelinePositionToClass-3d4caa54.js","assets/timelineContentClasses-76a0e92d.js"])),m=t.lazy(()=>n(()=>import("./index-41418fc4.js"),["assets/index-41418fc4.js","assets/createSvgIcon-4d8038f9.js","assets/index-16b227ac.js","assets/index-e0d618c3.css"])),_=r.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding-bottom: 50px;
    background-color: ${({theme:i})=>i.card_light};
`,u=r.div`
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
`,h=r.h1`
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
`,f=r.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`,g=r.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({theme:i})=>i.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`,T=()=>e.jsx(_,{id:"experience",children:e.jsxs(u,{children:[e.jsx(h,{children:"Experience"}),e.jsx(g,{children:"Below are some of my experiences base on my resume."}),e.jsx(f,{children:e.jsx(c,{children:s.map((i,o)=>e.jsxs(x,{children:[e.jsxs(l,{children:[e.jsx(m,{variant:"outlined",sx:{borderColor:"#00DFA2"}}),o!==s.length-1&&e.jsx(p,{sx:{background:"-webkit-linear-gradient(225deg, rgb(0, 223, 162) 0%, rgb(1, 106, 112) 100%)"}})]}),e.jsx(d,{sx:{py:"12px",px:2},children:e.jsx(a,{experience:i})})]},o))})})]})});export{h as Title,T as default};
