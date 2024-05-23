import{s as e,j as i}from"./index-9f57e151.js";const o=e.img`
  display: none;
  height: 70px;
  width: fit-content;
  background-color: #000;
  border-radius: 10px;
  &:hover{
    cursor: pointer;
    opacity: 0.8;
  }
`,n=e.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({theme:e})=>e.text_primary+99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px){
    font-size: 12px;
  }
`,t=e.span`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`,r=e.div`
  width: 650px;
  border-radius: 10px;
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;
  &:hover{
    box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
    transform: translateY(-5px);
    border: 1px solid #4FD3C4;
  }
  @media only screen and (max-width: 768px){
    padding: 10px;
    gap: 8px;
    width: 300px;
  }

  &:hover ${o}{
    display: flex;
  }

  &:hover ${t}{
    overflow: visible;
    -webkit-line-clamp: unset;
  }

  border: 0.1px solid rgb(1, 106, 112);
  box-shadow: rgba(23, 92, 230, 0.15) 0 4px 24px;
`,d=e.div`
  width: 100%;
  display: flex;
  gap: 12px
`,l=e.img`
  height: 50px;
  width: 50px;
  background-color: #000;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px){
    height: 40px;
  }
`,a=e.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`,p=e.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({theme:e})=>e.text_primary+99};
  @media only screen and (max-width: 768px){
    font-size: 14px;
  }
`,x=e.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.text_secondary+99};
  @media only screen and (max-width: 768px){
    font-size: 12px;
  }
`,s=e.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({theme:e})=>e.text_secondary+80};
  @media only screen and (max-width: 768px){
    font-size: 10px;
  }
`,h=e.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: 10px;
`,c=e.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,f=e.div`
    font-size: 15px;
    font-weight: 400;
    color: ${({theme:e})=>e.text_primary+99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`,w=({experience:e})=>{var t;return i.jsxs(r,{children:[i.jsxs(d,{children:[i.jsx(l,{alt:e.img,src:e.img}),i.jsxs(a,{children:[i.jsx(p,{children:e.role}),i.jsx(x,{children:e.company}),i.jsx(s,{children:e.date})]})]}),i.jsxs(n,{children:[e.desc,(null==e?void 0:e.skills)&&i.jsx(i.Fragment,{children:i.jsxs(h,{children:[i.jsx("b",{children:"Skills: "}),i.jsx(c,{children:null==(t=null==e?void 0:e.skills)?void 0:t.map(((e,o)=>i.jsxs(f,{children:["• ",e]},o)))})]})})]}),e.doc&&i.jsx("a",{href:e.doc,"aria-label":"certificates",rel:"noopener",target:"new",children:i.jsx(o,{src:e.doc})})]})};export{w as default};
