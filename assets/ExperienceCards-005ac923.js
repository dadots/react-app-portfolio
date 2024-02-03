import{s as t,j as i}from"./index-8c984e2e.js";const d=t.img`
  display: none;
  height: 70px;
  width: fit-content;
  background-color: #000;
  border-radius: 10px;
  &:hover{
    cursor: pointer;
    opacity: 0.8;
  }
`,r=t.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({theme:o})=>o.text_primary+99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px){
    font-size: 12px;
  }
`,l=t.span`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`,x=t.div`
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

  &:hover ${d}{
    display: flex;
  }

  &:hover ${l}{
    overflow: visible;
    -webkit-line-clamp: unset;
  }

  border: 0.1px solid rgb(1, 106, 112);
  box-shadow: rgba(23, 92, 230, 0.15) 0 4px 24px;
`,p=t.div`
  width: 100%;
  display: flex;
  gap: 12px
`,e=t.img`
  height: 50px;
  width: 50px;
  background-color: #000;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px){
    height: 40px;
  }
`,c=t.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`,h=t.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({theme:o})=>o.text_primary+99};
  @media only screen and (max-width: 768px){
    font-size: 14px;
  }
`,m=t.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:o})=>o.text_secondary+99};
  @media only screen and (max-width: 768px){
    font-size: 12px;
  }
`,f=t.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({theme:o})=>o.text_secondary+80};
  @media only screen and (max-width: 768px){
    font-size: 10px;
  }
`,w=t.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: 10px;
`,g=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,y=t.div`
    font-size: 15px;
    font-weight: 400;
    color: ${({theme:o})=>o.text_primary+99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`,v=({experience:o})=>{var s;return i.jsxs(x,{children:[i.jsxs(p,{children:[i.jsx(e,{alt:o.img,src:o.img}),i.jsxs(c,{children:[i.jsx(h,{children:o.role}),i.jsx(m,{children:o.company}),i.jsx(f,{children:o.date})]})]}),i.jsxs(r,{children:[o.desc,(o==null?void 0:o.skills)&&i.jsx(i.Fragment,{children:i.jsxs(w,{children:[i.jsx("b",{children:"Skills: "}),i.jsx(g,{children:(s=o==null?void 0:o.skills)==null?void 0:s.map((n,a)=>i.jsxs(y,{children:["• ",n]},a))})]})})]}),o.doc&&i.jsx("a",{href:o.doc,"aria-label":"certificates",rel:"noopener",target:"new",children:i.jsx(d,{src:o.doc})})]})};export{v as default};
