import{R as t,_ as n,s as r,j as e}from"./index-a97f7a39.js";import{e as s}from"./constants-c3ef8558.js";import"./createSvgIcon-ed5b3617.js";const a=t.lazy(()=>n(()=>import("./ExperienceCards-2b976b0b.js"),["assets/ExperienceCards-2b976b0b.js","assets/index-a97f7a39.js","assets/index-29a84fde.css"])),c=t.lazy(()=>n(()=>import("./index-43bb4723.js"),["assets/index-43bb4723.js","assets/createSvgIcon-ed5b3617.js","assets/index-a97f7a39.js","assets/index-29a84fde.css","assets/convertTimelinePositionToClass-0febca1b.js"])),x=t.lazy(()=>n(()=>import("./index-ed8a2e64.js"),["assets/index-ed8a2e64.js","assets/createSvgIcon-ed5b3617.js","assets/index-a97f7a39.js","assets/index-29a84fde.css","assets/convertTimelinePositionToClass-0febca1b.js","assets/timelineContentClasses-dbb4191d.js","assets/constants-c3ef8558.js"])),l=t.lazy(()=>n(()=>import("./index-6ba83e56.js"),["assets/index-6ba83e56.js","assets/createSvgIcon-ed5b3617.js","assets/index-a97f7a39.js","assets/index-29a84fde.css"])),p=t.lazy(()=>n(()=>import("./index-936d7bf3.js"),["assets/index-936d7bf3.js","assets/createSvgIcon-ed5b3617.js","assets/index-a97f7a39.js","assets/index-29a84fde.css"])),d=t.lazy(()=>n(()=>import("./index-053c6cff.js"),["assets/index-053c6cff.js","assets/createSvgIcon-ed5b3617.js","assets/index-a97f7a39.js","assets/index-29a84fde.css","assets/convertTimelinePositionToClass-0febca1b.js","assets/timelineContentClasses-dbb4191d.js"])),m=t.lazy(()=>n(()=>import("./index-865645f6.js"),["assets/index-865645f6.js","assets/createSvgIcon-ed5b3617.js","assets/index-a97f7a39.js","assets/index-29a84fde.css"])),_=r.div`
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
