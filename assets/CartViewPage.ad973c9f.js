import{Q as l}from"./QTd.ee854fd6.js";import{I as C,H as q,c as u,aq as v,m as Q,q as B,s as o,d as n,J as s,P as V,N as p,Q as r,ax as N,ao as m}from"./index.8a199ccd.js";import{Q as $}from"./QTable.2e72063c.js";import{u as P}from"./use-quasar.8de75599.js";import"./use-dark.85457df5.js";import"./use-prevent-scroll.5cfcd672.js";import"./use-key-composition.8a0b373b.js";import"./QChip.a0408e55.js";import"./selection.67b24322.js";import"./QDialog.8fe9b6df.js";import"./format.3e32b8d9.js";import"./QCheckbox.fee21a64.js";const T={id:"cartView"},I={class:"row"},S={class:"col-12"},A=["src"],D={class:"col-12 text-center"},W={__name:"CartViewPage",setup(E){const _=N(),f=P(),h=C(),{editCart:g,checkout:b}=h,y=[{name:"image",label:"",align:"center"},{namer:"exhibitions",label:"\u5C55\u89BD\u540D\u7A31",field:t=>t.p_id.title,align:"center"},{namer:"price",label:"\u9580\u7968\u50F9\u683C",field:t=>t.p_id.price,align:"center"},{name:"minus",label:"",align:"center"},{namer:"number",label:"\u6578\u91CF",field:"quantity",align:"center"},{name:"plus",label:"",align:"center"},{namer:"total",label:"\u5C0F\u8A08",field:t=>t.quantity*t.p_id.price,align:"center"},{name:"edit",label:"",align:"center"}],a=q([]),d=async(t,i)=>{const e=a.findIndex(c=>c.p_id._id===t.p_id._id);await g({_id:a[e].p_id._id,quantity:i}),a[e].quantity+=i,a[e].quantity<=0&&a.splice(e,1)},k=async()=>{await b(),_.push("/orders")},w=u(()=>a.reduce((t,i)=>t+i.p_id.price*i.quantity,0)),x=u(()=>a.length>0&&!a.some(t=>!t.p_id.sell));return(async()=>{var t,i;try{const{data:e}=await v.get("/users/cart");a.push(...e.result)}catch(e){f.notify({message:"\u53D6\u5F97\u5931\u6557",caption:((i=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:i.message)||"\u767C\u751F\u932F\u8AA4",color:"pink"})}})(),(t,i)=>(Q(),B("div",T,[o("div",I,[o("div",S,[n($,{class:"item-center",rows:a,columns:y,"row-key":"_id"},{"body-cell-image":s(e=>[n(l,{class:"text-center"},{default:s(()=>[o("img",{src:e.row.p_id.image,style:{height:"100px"}},null,8,A)]),_:2},1024)]),"body-cell-minus":s(e=>[n(l,{class:"text-center"},{default:s(()=>[n(r,{onClick:c=>d(e.row,-1),icon:"fa-solid fa-minus",push:"",round:""},null,8,["onClick"])]),_:2},1024)]),"body-cell-plus":s(e=>[n(l,{class:"text-center"},{default:s(()=>[n(r,{onClick:c=>d(e.row,1),icon:"fa-solid fa-plus",push:"",round:"",color:"pink"},null,8,["onClick"])]),_:2},1024)]),"body-cell-edit":s(e=>[n(l,{class:"text-center"},{default:s(()=>[n(r,{color:"red",onClick:c=>d(e.row,e.row.quantity*-1),push:""},{default:s(()=>[m("\u522A\u9664")]),_:2},1032,["onClick"])]),_:2},1024)]),_:1},8,["rows"])]),o("div",D,[o("p",null,"\u7E3D\u91D1\u984D "+V(p(w)),1),n(r,{color:"blue",disabled:!p(x),onClick:k,push:""},{default:s(()=>[m("\u7D50\u5E33")]),_:1},8,["disabled"])])])]))}};export{W as default};
