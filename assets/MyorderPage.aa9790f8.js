import{Q as _}from"./QTd.9510121e.js";import{Q as f}from"./QTable.a75a2cf1.js";import{H as g,ar as y,m as r,q as o,s as c,d as l,J as m,F as h,al as b,P as w}from"./index.ce5bf077.js";import{u as Q}from"./use-quasar.b9a44da6.js";import"./use-dark.b05c8d3d.js";import"./use-prevent-scroll.f1498f0f.js";import"./use-key-composition.b7664e18.js";import"./QChip.67d223a0.js";import"./selection.adec9789.js";import"./QDialog.39dc39e9.js";import"./format.3e32b8d9.js";import"./QCheckbox.f681b1aa.js";const k={id:"myOrder"},q={class:"row"},v={class:"col-12"},J={__name:"MyorderPage",setup(x){const p=Q(),d=[{name:"ID",label:"\u8A02\u55AE\u7DE8\u865F",field:e=>e._id,align:"center"},{name:"number",label:"\u6578\u91CF",align:"center"},{name:"total",label:"\u5C0F\u8A08",field:e=>e.totalPrice,align:"center"}],i=g([]);return(async()=>{var e,s;try{const{data:t}=await y.get("/orders");i.push(...t.result.map(a=>(a.totalPrice=a.products.reduce((u,n)=>u+n.p_id.price*n.quantity,0),a))),console.log(t)}catch(t){p.notify({message:"\u53D6\u5F97\u5931\u6557",caption:((s=(e=t==null?void 0:t.response)==null?void 0:e.data)==null?void 0:s.message)||"\u767C\u751F\u932F\u8AA4",color:"pink"})}})(),(e,s)=>(r(),o("div",k,[c("div",q,[c("div",v,[l(f,{class:"item-center",rows:i,columns:d,"row-key":"_id"},{"body-cell-number":m(t=>[l(_,{class:"text-center"},{default:m(()=>[(r(!0),o(h,null,b(t.row.products,a=>(r(),o("p",null,w(a.quantity+"\u5F35"+a.p_id.title),1))),256))]),_:2},1024)]),_:1},8,["rows"])])])]))}};export{J as default};
