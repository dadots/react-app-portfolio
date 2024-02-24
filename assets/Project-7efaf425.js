import{s as t}from"./index-d3624f09.js";const n=t.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
`,e=t.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
`,p=t.div`
    max-width: 800px;
    width: 100%;
    border-radius: 16px;
    background-color: ${({theme:o})=>o.card};
    color: ${({theme:o})=>o.text_primary};
    padding: 20px;
    display: flex;
    flex-direction: column;
    position: relative;
`,x=t.div`
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
`,s=t.img`
    width: 60%;
    height: auto;
    display: block;
    margin: 0 auto;
    max-height: 300px;
    margin-bottom: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;
`,d=t.div`
    font-size: 28px;
    font-weight: 600;
    color: ${({theme:o})=>o.text_primary};
    margin-bottom: 10px;
`,c=t.a`
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: ${({theme:o})=>o.text_primary};
    padding: 12px 16px;
    border-radius: 8px;
    background-color: ${({theme:o})=>o.primary};
    ${({dull:o,theme:i})=>o&&`
        background-color: ${i.bgLight};
        color: ${i.text_secondary};
        &:hover {
            background-color: ${({theme:r})=>r.bg+99};
        }
    `}
    cursor: pointer;
    text-decoration: none;
    transition: all 0.5s ease;
    &:hover {
        background-color: ${({theme:o})=>o.primary+99};
        border: none;
    }
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`,l=t.div`
    display: flex;
    flex-wrap: wrap;
    margin: 8px 0px;
    @media only screen and (max-width: 600px) {
        margin: 4px 0px;
    }
`,g=t.div`
    font-size: 14px;
    font-weight: 400;
    color: ${({theme:o})=>o.primary};
    margin: 4px;
    padding: 4px 8px;
    border-radius: 8px;
    background-color: ${({theme:o})=>o.primary+20};
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`,m=t.div`
    font-size: 16px;
    margin: 2px 6px;
    font-weight: 400;
    color: ${({theme:o})=>o.text_secondary};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`,f=t.div`
    font-size: 16px;
    font-weight: 400;
    color: ${({theme:o})=>o.text_primary};
    margin: 8px 6px;
    @media only screen and (max-width: 600px) {
        font-size: 14px;
        margin: 6px 6px;
    }
`,h=t.div`
    display: flex;
    justify-content: flex-end;
    margin: 12px 0px;
    gap: 12px;
`;export{h as B,n as C,m as D,s as I,d as T,p as W,e as a,x as b,l as c,g as d,f as e,c as f};
