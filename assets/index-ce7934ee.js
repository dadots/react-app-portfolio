import{s,R as i,_ as t,j as e,W as l,T as a,D as c}from"./index-1710d65c.js";import{e as o}from"./constants-6b519b32.js";const _=s.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding-bottom: 50px;
    background-color: ${({theme:r})=>r.card_light};
`,d=s.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`,x=i.lazy(()=>t(()=>import("./ExperienceCards-1748f9dc.js"),["assets/ExperienceCards-1748f9dc.js","assets/index-1710d65c.js","assets/index-29a84fde.css"])),p=i.lazy(()=>t(()=>import("./index-c76cae1c.js"),["assets/index-c76cae1c.js","assets/index-1710d65c.js","assets/index-29a84fde.css","assets/convertTimelinePositionToClass-6735c573.js"])),m=i.lazy(()=>t(()=>import("./index-4eae4b99.js"),["assets/index-4eae4b99.js","assets/index-1710d65c.js","assets/index-29a84fde.css","assets/convertTimelinePositionToClass-6735c573.js","assets/timelineContentClasses-110250dd.js","assets/constants-6b519b32.js"])),u=i.lazy(()=>t(()=>import("./index-36d31e86.js"),["assets/index-36d31e86.js","assets/index-1710d65c.js","assets/index-29a84fde.css"])),E=i.lazy(()=>t(()=>import("./index-f8a97f63.js"),["assets/index-f8a97f63.js","assets/index-1710d65c.js","assets/index-29a84fde.css"])),j=i.lazy(()=>t(()=>import("./index-37c68f19.js"),["assets/index-37c68f19.js","assets/index-1710d65c.js","assets/index-29a84fde.css","assets/convertTimelinePositionToClass-6735c573.js","assets/timelineContentClasses-110250dd.js"])),T=i.lazy(()=>t(()=>import("./index-0c49712c.js"),["assets/index-0c49712c.js","assets/index-1710d65c.js","assets/index-29a84fde.css"])),h=()=>e.jsx(_,{id:"experience",children:e.jsxs(l,{children:[e.jsx(a,{children:"Experience"}),e.jsx(c,{children:"Below are some of my experiences base on my resume."}),e.jsx(d,{children:e.jsx(p,{children:o.map((r,n)=>e.jsxs(m,{children:[e.jsxs(u,{children:[e.jsx(T,{variant:"outlined",sx:{borderColor:"#00DFA2"}}),n!==o.length-1&&e.jsx(E,{sx:{background:"-webkit-linear-gradient(225deg, rgb(0, 223, 162) 0%, rgb(1, 106, 112) 100%)"}})]}),e.jsx(j,{sx:{py:"12px",px:2},children:e.jsx(x,{experience:r})})]},n))})})]})});export{h as default};
