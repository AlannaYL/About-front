import{I as f,L as u,c as m,m as r,q as i,d as t,J as e,aL as _,ap as p,M as x,s as n,F as h,al as w,Q as g,N as v,ao as Q,P as b}from"./index.8a199ccd.js";import{Q as A,a as L}from"./QDrawer.2dd3d576.js";import{a as B,b as N,c as P}from"./QLayout.0026eb9a.js";import"./use-dark.85457df5.js";import"./format.3e32b8d9.js";import"./use-prevent-scroll.5cfcd672.js";import"./selection.67b24322.js";const y={id:"AdminPage"},C={class:"row"},F={class:"col-12 q-pa-xxl text-center column"},J={__name:"AdminLayout",setup(R){const a=[{icon:"fa-solid fa-rotate-left",text:"\u8FD4\u56DE\u9996\u9801",to:"/"},{icon:"fa-solid fa-file-lines",text:"\u5C55\u89BD\u7BA1\u7406",to:"/Admin"},{icon:"fa-solid fa-users",text:"\u6703\u54E1\u7BA1\u7406",to:"/Adminmembers"},{icon:"fa-solid fa-list",text:"\u8A02\u55AE\u7BA1\u7406",to:"/orders"},{icon:"fa-regular fa-comment",text:"\u95DC\u65BC\u6211\u5011",to:"/Adminabout"}],c=f();u(c),m(()=>a.filter(s=>_.path!==s.to));const l=p();return(s,S)=>{const d=x("router-view");return r(),i("div",y,[t(B,{view:"hHh lpR fFf"},{default:e(()=>[t(A,{"show-if-above":"",width:240},{default:e(()=>[t(L,{class:"fit bg-color"},{default:e(()=>[n("div",C,[(r(),i(h,null,w(a,o=>n("div",F,[t(g,{disable:o.to===v(l).path,icon:o.icon,to:o.to,flat:"",rounded:"",color:"white"},{default:e(()=>[Q(b(o.text),1)]),_:2},1032,["disable","icon","to"])])),64))])]),_:1})]),_:1}),t(N,null,{default:e(()=>[t(P,{padding:""},{default:e(()=>[t(d)]),_:1})]),_:1})]),_:1})])}}};export{J as default};
