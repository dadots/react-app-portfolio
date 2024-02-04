import{R as t,_ as n,s as r,j as e}from"./index-8b83d730.js";import{e as s}from"./constants-88a1616a.js";import"./createSvgIcon-b4238b6c.js";const a=t.lazy(()=>n(()=>import("./ExperienceCards-26d98297.js"),["assets/ExperienceCards-26d98297.js","assets/index-8b83d730.js","assets/index-32cbfe11.css"])),c=t.lazy(()=>n(()=>import("./index-a240cbb5.js"),["assets/index-a240cbb5.js","assets/createSvgIcon-b4238b6c.js","assets/index-8b83d730.js","assets/index-32cbfe11.css","assets/convertTimelinePositionToClass-1f050101.js"])),x=t.lazy(()=>n(()=>import("./index-282f3668.js"),["assets/index-282f3668.js","assets/createSvgIcon-b4238b6c.js","assets/index-8b83d730.js","assets/index-32cbfe11.css","assets/convertTimelinePositionToClass-1f050101.js","assets/timelineContentClasses-10872fe1.js","assets/constants-88a1616a.js"])),l=t.lazy(()=>n(()=>import("./index-287b668c.js"),["assets/index-287b668c.js","assets/createSvgIcon-b4238b6c.js","assets/index-8b83d730.js","assets/index-32cbfe11.css"])),p=t.lazy(()=>n(()=>import("./index-c0281b28.js"),["assets/index-c0281b28.js","assets/createSvgIcon-b4238b6c.js","assets/index-8b83d730.js","assets/index-32cbfe11.css"])),d=t.lazy(()=>n(()=>import("./index-de98f4b0.js"),["assets/index-de98f4b0.js","assets/createSvgIcon-b4238b6c.js","assets/index-8b83d730.js","assets/index-32cbfe11.css","assets/convertTimelinePositionToClass-1f050101.js","assets/timelineContentClasses-10872fe1.js"])),m=t.lazy(()=>n(()=>import("./index-9e9d8a5f.js"),["assets/index-9e9d8a5f.js","assets/createSvgIcon-b4238b6c.js","assets/index-8b83d730.js","assets/index-32cbfe11.css"])),_=r.div`
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
`,v=()=>e.jsx(_,{id:"experience",children:e.jsxs(u,{children:[e.jsx(h,{children:"Experience"}),e.jsx(g,{children:"Below are some of my experiences base on my resume."}),e.jsx(f,{children:e.jsx(c,{children:s.map((i,o)=>e.jsxs(x,{children:[e.jsxs(l,{children:[e.jsx(m,{variant:"outlined",sx:{borderColor:"#00DFA2"}}),o!==s.length-1&&e.jsx(p,{sx:{background:"-webkit-linear-gradient(225deg, rgb(0, 223, 162) 0%, rgb(1, 106, 112) 100%)"}})]}),e.jsx(d,{sx:{py:"12px",px:2},children:e.jsx(a,{experience:i})})]},o))})})]})});export{h as Title,v as default};
