import{Q as B}from"./QImg.cf201d0c.js";import{I as S,L as I,H as f,aq as p,m as r,q as m,s as n,F as U,al as $,d as l,J as s,ao as _,P as b,Q as u}from"./index.1e5a2f74.js";import{Q as d}from"./QCardSection.d0ab9f32.js";import{Q as g}from"./QCard.c85a2f95.js";import{Q as F,a as h}from"./QForm.b686de16.js";import{Q as M}from"./QDialog.2430779b.js";import{u as N}from"./use-quasar.857f3918.js";import"./use-dark.e7eee397.js";import"./use-key-composition.5249d657.js";import"./use-prevent-scroll.1d176dda.js";const A={id:"AdminMember"},D=n("h4",{class:"text-center col-12"},"\u6703\u54E1\u7BA1\u7406",-1),L={class:"row q-px-xl"},P={class:"column"},T={class:"text-h5 col q-my-md"},z={class:"text-subtitle2"},E=n("div",{class:"text-h6"}," \u7DE8\u8F2F\u6703\u54E1",-1),ae={__name:"MemberPage",setup(H){const c=N(),x=S(),{account:y,email:Q}=I(x),i=f([]),v=()=>i.filter(o=>o.role!==!0),a=f({_id:"",account:y.value||"",email:Q.value||"",dialog:!1,idx:-1}),V=o=>{a._id=i[o]._id,a.account=i[o].account,a.email=i[o].email,a.idx=o,a.dialog=!0},k=()=>{a._id="",a.account="",a.email="",a.dialog=!1},q=async()=>{var o,t;a.loading=!0;try{const{data:e}=await p.patch("/users/edituser",a);i[a.idx]=e.result,console.log(e),c.notify({message:"\u7DE8\u8F2F\u6210\u529F",color:"pink"}),a.dialog=!1}catch(e){c.notify({message:"\u64CD\u4F5C\u5931\u6557",caption:((t=(o=e==null?void 0:e.response)==null?void 0:o.data)==null?void 0:t.message)||"\u767C\u751F\u932F\u8AA4",color:"pink"}),a.dialog=!1}a.loading=!1};return(async()=>{var o,t;try{const{data:e}=await p.get("/users/all");i.push(...e.result)}catch(e){c.notify({message:"\u53D6\u5F97\u5931\u6557",caption:((t=(o=e==null?void 0:e.response)==null?void 0:o.data)==null?void 0:t.message)||"\u767C\u751F\u932F\u8AA4",color:"pink"})}})(),(o,t)=>(r(),m("div",A,[D,n("div",L,[(r(!0),m(U,null,$(v(),(e,w)=>(r(),m("div",{class:"q-pa-md items-center col-md-4 col-xs-12",key:w},[l(g,null,{default:s(()=>[l(d,{horizontal:""},{default:s(()=>[l(B,{class:"q-ma-md",src:`https://source.boringavatars.com/beam/${e.account}?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`,width:"70px",height:"70px"},null,8,["src"]),n("div",P,[n("div",T,[_(b(e.account),1),n("div",z,[_(b(e.email),1),l(u,{class:"q-ma-md",icon:"edit",round:"",push:"",color:"blue",onClick:J=>V(i.findIndex(C=>C._id===e._id))},null,8,["onClick"])])])])]),_:2},1024)]),_:2},1024)]))),128))]),l(M,{modelValue:a.dialog,"onUpdate:modelValue":t[3]||(t[3]=e=>a.dialog=e)},{default:s(()=>[l(g,{style:{width:"90%"}},{default:s(()=>[l(F,{onSubmit:q},{default:s(()=>[l(d,{class:"row item-center"},{default:s(()=>[E]),_:1}),l(d,null,{default:s(()=>[l(h,{class:"col-12 q-pb-lg",modelValue:a.account,"onUpdate:modelValue":t[0]||(t[0]=e=>a.account=e),filled:"",label:"\u8ACB\u8F38\u5165\u6703\u54E1\u5E33\u865F",type:"text"},null,8,["modelValue"]),l(h,{class:"col-12 q-pb-lg",modelValue:a.email,"onUpdate:modelValue":t[1]||(t[1]=e=>a.email=e),filled:"",label:"\u8ACB\u8F38\u5165\u6703\u54E1\u4FE1\u7BB1",type:"email"},null,8,["modelValue"])]),_:1}),l(d,{class:"text-right"},{default:s(()=>[l(u,{disabled:a.loading,flat:"",label:"submit",type:"submit",color:"blue"},null,8,["disabled"]),l(u,{onClick:t[2]||(t[2]=e=>k()),flat:"",label:"cancel",color:"pink"})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};export{ae as default};
