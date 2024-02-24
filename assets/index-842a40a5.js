import{s,R as i,_ as t,j as e,W as l,T as a,D as c}from"./index-d3624f09.js";import{e as o}from"./constants-00fcb92c.js";import"./createSvgIcon-677a302a.js";const _=s.div`
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
`,p=i.lazy(()=>t(()=>import("./ExperienceCards-d1240445.js"),["assets/ExperienceCards-d1240445.js","assets/index-d3624f09.js","assets/index-29a84fde.css"])),x=i.lazy(()=>t(()=>import("./index-998c0f56.js"),["assets/index-998c0f56.js","assets/createSvgIcon-677a302a.js","assets/index-d3624f09.js","assets/index-29a84fde.css","assets/convertTimelinePositionToClass-653fa493.js"])),m=i.lazy(()=>t(()=>import("./index-633a011d.js"),["assets/index-633a011d.js","assets/createSvgIcon-677a302a.js","assets/index-d3624f09.js","assets/index-29a84fde.css","assets/convertTimelinePositionToClass-653fa493.js","assets/timelineContentClasses-e9deea93.js","assets/constants-00fcb92c.js"])),u=i.lazy(()=>t(()=>import("./index-8f00ed1d.js"),["assets/index-8f00ed1d.js","assets/createSvgIcon-677a302a.js","assets/index-d3624f09.js","assets/index-29a84fde.css"])),E=i.lazy(()=>t(()=>import("./index-c78a863f.js"),["assets/index-c78a863f.js","assets/createSvgIcon-677a302a.js","assets/index-d3624f09.js","assets/index-29a84fde.css"])),j=i.lazy(()=>t(()=>import("./index-5f87a394.js"),["assets/index-5f87a394.js","assets/createSvgIcon-677a302a.js","assets/index-d3624f09.js","assets/index-29a84fde.css","assets/convertTimelinePositionToClass-653fa493.js","assets/timelineContentClasses-e9deea93.js"])),T=i.lazy(()=>t(()=>import("./index-1f85ea68.js"),["assets/index-1f85ea68.js","assets/createSvgIcon-677a302a.js","assets/index-d3624f09.js","assets/index-29a84fde.css"])),v=()=>e.jsx(_,{id:"experience",children:e.jsxs(l,{children:[e.jsx(a,{children:"Experience"}),e.jsx(c,{children:"Below are some of my experiences base on my resume."}),e.jsx(d,{children:e.jsx(x,{children:o.map((r,n)=>e.jsxs(m,{children:[e.jsxs(u,{children:[e.jsx(T,{variant:"outlined",sx:{borderColor:"#00DFA2"}}),n!==o.length-1&&e.jsx(E,{sx:{background:"-webkit-linear-gradient(225deg, rgb(0, 223, 162) 0%, rgb(1, 106, 112) 100%)"}})]}),e.jsx(j,{sx:{py:"12px",px:2},children:e.jsx(p,{experience:r})})]},n))})})]})});export{v as default};
