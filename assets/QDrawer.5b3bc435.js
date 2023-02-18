import{u as ke,a as Oe}from"./use-dark.c63c38f0.js";import{Q as be,d as Ve}from"./QLayout.8d097ace.js";import{aM as Xe,a3 as I,S as Ie,aN as Ne,aB as J,aO as oe,af as ye,aj as ie,aD as de,aC as ne,aa as Re,A as Te,r as z,c,ad as Ye,w,W as Ue,ae as Ke,k as Be,h as M,B as Ge,aP as fe,g as Pe,D as ue,o as Je,n as pe,au as ge,C as Ze,i as et,G as tt}from"./index.9298fdf5.js";import{b as E}from"./format.3e32b8d9.js";import{s as ze,j as se,u as at,d as lt,e as rt,f as ot,h as it,i as nt}from"./use-prevent-scroll.f42a33c4.js";import{c as ut}from"./selection.a3bdf0a3.js";const he={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},st=Object.keys(he);he.all=!0;function Se(t){const n={};for(const v of st)t[v]===!0&&(n[v]=!0);return Object.keys(n).length===0?he:(n.horizontal===!0?n.left=n.right=!0:n.left===!0&&n.right===!0&&(n.horizontal=!0),n.vertical===!0?n.up=n.down=!0:n.up===!0&&n.down===!0&&(n.vertical=!0),n.horizontal===!0&&n.vertical===!0&&(n.all=!0),n)}function we(t,n){return n.event===void 0&&t.target!==void 0&&t.target.draggable!==!0&&typeof n.handler=="function"&&t.target.nodeName.toUpperCase()!=="INPUT"&&(t.qClonedBy===void 0||t.qClonedBy.indexOf(n.uid)===-1)}function ce(t,n,v){const g=de(t);let e,r=g.left-n.event.x,u=g.top-n.event.y,a=Math.abs(r),m=Math.abs(u);const f=n.direction;f.horizontal===!0&&f.vertical!==!0?e=r<0?"left":"right":f.horizontal!==!0&&f.vertical===!0?e=u<0?"up":"down":f.up===!0&&u<0?(e="up",a>m&&(f.left===!0&&r<0?e="left":f.right===!0&&r>0&&(e="right"))):f.down===!0&&u>0?(e="down",a>m&&(f.left===!0&&r<0?e="left":f.right===!0&&r>0&&(e="right"))):f.left===!0&&r<0?(e="left",a<m&&(f.up===!0&&u<0?e="up":f.down===!0&&u>0&&(e="down"))):f.right===!0&&r>0&&(e="right",a<m&&(f.up===!0&&u<0?e="up":f.down===!0&&u>0&&(e="down")));let i=!1;if(e===void 0&&v===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};e=n.event.lastDir,i=!0,e==="left"||e==="right"?(g.left-=r,a=0,r=0):(g.top-=u,m=0,u=0)}return{synthetic:i,payload:{evt:t,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:g,direction:e,isFirst:n.event.isFirst,isFinal:v===!0,duration:Date.now()-n.event.time,distance:{x:a,y:m},offset:{x:r,y:u},delta:{x:g.left-n.event.lastX,y:g.top-n.event.lastY}}}}let ct=0;var N=Xe({name:"touch-pan",beforeMount(t,{value:n,modifiers:v}){if(v.mouse!==!0&&I.has.touch!==!0)return;function g(r,u){v.mouse===!0&&u===!0?Re(r):(v.stop===!0&&ie(r),v.prevent===!0&&ye(r))}const e={uid:"qvtp_"+ct++,handler:n,modifiers:v,direction:Se(v),noop:Ie,mouseStart(r){we(r,e)&&Ne(r)&&(J(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(r,!0))},touchStart(r){if(we(r,e)){const u=r.target;J(e,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","passiveCapture"],[u,"touchend","end","passiveCapture"]]),e.start(r)}},start(r,u){if(I.is.firefox===!0&&oe(t,!0),e.lastEvt=r,u===!0||v.stop===!0){if(e.direction.all!==!0&&(u!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const f=r.type.indexOf("mouse")>-1?new MouseEvent(r.type,r):new TouchEvent(r.type,r);r.defaultPrevented===!0&&ye(f),r.cancelBubble===!0&&ie(f),Object.assign(f,{qKeyEvent:r.qKeyEvent,qClickOutside:r.qClickOutside,qAnchorHandled:r.qAnchorHandled,qClonedBy:r.qClonedBy===void 0?[e.uid]:r.qClonedBy.concat(e.uid)}),e.initialEvent={target:r.target,event:f}}ie(r)}const{left:a,top:m}=de(r);e.event={x:a,y:m,time:Date.now(),mouse:u===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:a,lastY:m}},move(r){if(e.event===void 0)return;const u=de(r),a=u.left-e.event.x,m=u.top-e.event.y;if(a===0&&m===0)return;e.lastEvt=r;const f=e.event.mouse===!0,i=()=>{g(r,f);let S;v.preserveCursor!==!0&&v.preservecursor!==!0&&(S=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),f===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ut(),e.styleCleanup=b=>{if(e.styleCleanup=void 0,S!==void 0&&(document.documentElement.style.cursor=S),document.body.classList.remove("non-selectable"),f===!0){const P=()=>{document.body.classList.remove("no-pointer-events--children")};b!==void 0?setTimeout(()=>{P(),b()},50):P()}else b!==void 0&&b()}};if(e.event.detected===!0){e.event.isFirst!==!0&&g(r,e.event.mouse);const{payload:S,synthetic:b}=ce(r,e,!1);S!==void 0&&(e.handler(S)===!1?e.end(r):(e.styleCleanup===void 0&&e.event.isFirst===!0&&i(),e.event.lastX=S.position.left,e.event.lastY=S.position.top,e.event.lastDir=b===!0?void 0:S.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||f===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){i(),e.event.detected=!0,e.move(r);return}const C=Math.abs(a),p=Math.abs(m);C!==p&&(e.direction.horizontal===!0&&C>p||e.direction.vertical===!0&&C<p||e.direction.up===!0&&C<p&&m<0||e.direction.down===!0&&C<p&&m>0||e.direction.left===!0&&C>p&&a<0||e.direction.right===!0&&C>p&&a>0?(e.event.detected=!0,e.move(r)):e.end(r,!0))},end(r,u){if(e.event!==void 0){if(ne(e,"temp"),I.is.firefox===!0&&oe(t,!1),u===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(ce(r===void 0?e.lastEvt:r,e).payload);const{payload:a}=ce(r===void 0?e.lastEvt:r,e,!0),m=()=>{e.handler(a)};e.styleCleanup!==void 0?e.styleCleanup(m):m()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(t.__qtouchpan=e,v.mouse===!0){const r=v.mouseCapture===!0||v.mousecapture===!0?"Capture":"";J(e,"main",[[t,"mousedown","mouseStart",`passive${r}`]])}I.has.touch===!0&&J(e,"main",[[t,"touchstart","touchStart",`passive${v.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,n){const v=t.__qtouchpan;v!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&v.end(),v.handler=n.value),v.direction=Se(n.modifiers))},beforeUnmount(t){const n=t.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),ne(n,"main"),ne(n,"temp"),I.is.firefox===!0&&oe(t,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete t.__qtouchpan)}});const Ce=["vertical","horizontal"],ve={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},qe={prevent:!0,mouse:!0,mouseAllDir:!0},_e=t=>t>=250?50:Math.ceil(t/5);var pt=Te({name:"QScrollArea",props:{...ke,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(t,{slots:n,emit:v}){const g=z(!1),e=z(!1),r=z(!1),u={vertical:z(0),horizontal:z(0)},a={vertical:{ref:z(null),position:z(0),size:z(0)},horizontal:{ref:z(null),position:z(0),size:z(0)}},{proxy:m}=Pe(),f=Oe(t,m.$q);let i=null,C;const p=z(null),S=c(()=>"q-scrollarea"+(f.value===!0?" q-scrollarea--dark":""));a.vertical.percentage=c(()=>{const o=a.vertical.size.value-u.vertical.value;if(o<=0)return 0;const s=E(a.vertical.position.value/o,0,1);return Math.round(s*1e4)/1e4}),a.vertical.thumbHidden=c(()=>(t.visible===null?r.value:t.visible)!==!0&&g.value===!1&&e.value===!1||a.vertical.size.value<=u.vertical.value+1),a.vertical.thumbStart=c(()=>a.vertical.percentage.value*(u.vertical.value-a.vertical.thumbSize.value)),a.vertical.thumbSize=c(()=>Math.round(E(u.vertical.value*u.vertical.value/a.vertical.size.value,_e(u.vertical.value),u.vertical.value))),a.vertical.style=c(()=>({...t.thumbStyle,...t.verticalThumbStyle,top:`${a.vertical.thumbStart.value}px`,height:`${a.vertical.thumbSize.value}px`})),a.vertical.thumbClass=c(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.vertical.barClass=c(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),a.horizontal.percentage=c(()=>{const o=a.horizontal.size.value-u.horizontal.value;if(o<=0)return 0;const s=E(Math.abs(a.horizontal.position.value)/o,0,1);return Math.round(s*1e4)/1e4}),a.horizontal.thumbHidden=c(()=>(t.visible===null?r.value:t.visible)!==!0&&g.value===!1&&e.value===!1||a.horizontal.size.value<=u.horizontal.value+1),a.horizontal.thumbStart=c(()=>a.horizontal.percentage.value*(u.horizontal.value-a.horizontal.thumbSize.value)),a.horizontal.thumbSize=c(()=>Math.round(E(u.horizontal.value*u.horizontal.value/a.horizontal.size.value,_e(u.horizontal.value),u.horizontal.value))),a.horizontal.style=c(()=>({...t.thumbStyle,...t.horizontalThumbStyle,[m.$q.lang.rtl===!0?"right":"left"]:`${a.horizontal.thumbStart.value}px`,width:`${a.horizontal.thumbSize.value}px`})),a.horizontal.thumbClass=c(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.horizontal.barClass=c(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const b=c(()=>a.vertical.thumbHidden.value===!0&&a.horizontal.thumbHidden.value===!0?t.contentStyle:t.contentActiveStyle),P=[[N,o=>{Y(o,"vertical")},void 0,{vertical:!0,...qe}]],q=[[N,o=>{Y(o,"horizontal")},void 0,{horizontal:!0,...qe}]];function y(){const o={};return Ce.forEach(s=>{const h=a[s];o[s+"Position"]=h.position.value,o[s+"Percentage"]=h.percentage.value,o[s+"Size"]=h.size.value,o[s+"ContainerSize"]=u[s].value}),o}const F=Ye(()=>{const o=y();o.ref=m,v("scroll",o)},0);function W(o,s,h){if(Ce.includes(o)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(o==="vertical"?ze:se)(p.value,s,h)}function R({height:o,width:s}){let h=!1;u.vertical.value!==o&&(u.vertical.value=o,h=!0),u.horizontal.value!==s&&(u.horizontal.value=s,h=!0),h===!0&&B()}function Q({position:o}){let s=!1;a.vertical.position.value!==o.top&&(a.vertical.position.value=o.top,s=!0),a.horizontal.position.value!==o.left&&(a.horizontal.position.value=o.left,s=!0),s===!0&&B()}function x({height:o,width:s}){a.horizontal.size.value!==s&&(a.horizontal.size.value=s,B()),a.vertical.size.value!==o&&(a.vertical.size.value=o,B())}function Y(o,s){const h=a[s];if(o.isFirst===!0){if(h.thumbHidden.value===!0)return;C=h.position.value,e.value=!0}else if(e.value!==!0)return;o.isFinal===!0&&(e.value=!1);const k=ve[s],j=u[s].value,Z=(h.size.value-j)/(j-h.thumbSize.value),ee=o.distance[k.dist],K=C+(o.direction===k.dir?1:-1)*ee*Z;V(K,s)}function U(o,s){const h=a[s];if(h.thumbHidden.value!==!0){const k=o[ve[s].offset];if(k<h.thumbStart.value||k>h.thumbStart.value+h.thumbSize.value){const j=k-h.thumbSize.value/2;V(j/u[s].value*h.size.value,s)}h.ref.value!==null&&h.ref.value.dispatchEvent(new MouseEvent(o.type,o))}}function L(o){U(o,"vertical")}function T(o){U(o,"horizontal")}function B(){g.value=!0,i!==null&&clearTimeout(i),i=setTimeout(()=>{i=null,g.value=!1},t.delay),t.onScroll!==void 0&&F()}function V(o,s){p.value[ve[s].scroll]=o}function D(){r.value=!0}function X(){r.value=!1}let H=null;return w(()=>m.$q.lang.rtl,o=>{p.value!==null&&se(p.value,Math.abs(a.horizontal.position.value)*(o===!0?-1:1))}),Ue(()=>{H={top:a.vertical.position.value,left:a.horizontal.position.value}}),Ke(()=>{if(H===null)return;const o=p.value;o!==null&&(se(o,H.left),ze(o,H.top))}),Be(F.cancel),Object.assign(m,{getScrollTarget:()=>p.value,getScroll:y,getScrollPosition:()=>({top:a.vertical.position.value,left:a.horizontal.position.value}),getScrollPercentage:()=>({top:a.vertical.percentage.value,left:a.horizontal.percentage.value}),setScrollPosition:W,setScrollPercentage(o,s,h){W(o,s*(a[o].size.value-u[o].value)*(o==="horizontal"&&m.$q.lang.rtl===!0?-1:1),h)}}),()=>M("div",{class:S.value,onMouseenter:D,onMouseleave:X},[M("div",{ref:p,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:t.tabindex!==void 0?t.tabindex:void 0},[M("div",{class:"q-scrollarea__content absolute",style:b.value},Ge(n.default,[M(be,{debounce:0,onResize:x})])),M(Ve,{axis:"both",onScroll:Q})]),M(be,{debounce:0,onResize:R}),M("div",{class:a.vertical.barClass.value,style:[t.barStyle,t.verticalBarStyle],"aria-hidden":"true",onMousedown:L}),M("div",{class:a.horizontal.barClass.value,style:[t.barStyle,t.horizontalBarStyle],"aria-hidden":"true",onMousedown:T}),fe(M("div",{ref:a.vertical.ref,class:a.vertical.thumbClass.value,style:a.vertical.style.value,"aria-hidden":"true"}),P),fe(M("div",{ref:a.horizontal.ref,class:a.horizontal.thumbClass.value,style:a.horizontal.style.value,"aria-hidden":"true"}),q)])}});const Me=150;var gt=Te({name:"QDrawer",inheritAttrs:!1,props:{...at,...ke,side:{type:String,default:"left",validator:t=>["left","right"].includes(t)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:t=>["default","desktop","mobile"].includes(t),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...lt,"onLayout","miniState"],setup(t,{slots:n,emit:v,attrs:g}){const e=Pe(),{proxy:{$q:r}}=e,u=Oe(t,r),{preventBodyScroll:a}=nt(),{registerTimeout:m,removeTimeout:f}=rt(),i=et(tt,ue);if(i===ue)return console.error("QDrawer needs to be child of QLayout"),ue;let C,p=null,S;const b=z(t.behavior==="mobile"||t.behavior!=="desktop"&&i.totalWidth.value<=t.breakpoint),P=c(()=>t.mini===!0&&b.value!==!0),q=c(()=>P.value===!0?t.miniWidth:t.width),y=z(t.showIfAbove===!0&&b.value===!1?!0:t.modelValue===!0),F=c(()=>t.persistent!==!0&&(b.value===!0||j.value===!0));function W(l,d){if(Y(),l!==!1&&i.animate(),O(0),b.value===!0){const _=i.instances[o.value];_!==void 0&&_.belowBreakpoint===!0&&_.hide(!1),A(1),i.isContainer.value!==!0&&a(!0)}else A(0),l!==!1&&ae(!1);m(()=>{l!==!1&&ae(!0),d!==!0&&v("show",l)},Me)}function R(l,d){U(),l!==!1&&i.animate(),A(0),O(B.value*q.value),le(),d!==!0?m(()=>{v("hide",l)},Me):f()}const{show:Q,hide:x}=ot({showing:y,hideOnRouteChange:F,handleShow:W,handleHide:R}),{addToHistory:Y,removeFromHistory:U}=it(y,x,F),L={belowBreakpoint:b,hide:x},T=c(()=>t.side==="right"),B=c(()=>(r.lang.rtl===!0?-1:1)*(T.value===!0?1:-1)),V=z(0),D=z(!1),X=z(!1),H=z(q.value*B.value),o=c(()=>T.value===!0?"left":"right"),s=c(()=>y.value===!0&&b.value===!1&&t.overlay===!1?t.miniToOverlay===!0?t.miniWidth:q.value:0),h=c(()=>t.overlay===!0||t.miniToOverlay===!0||i.view.value.indexOf(T.value?"R":"L")>-1||r.platform.is.ios===!0&&i.isContainer.value===!0),k=c(()=>t.overlay===!1&&y.value===!0&&b.value===!1),j=c(()=>t.overlay===!0&&y.value===!0&&b.value===!1),Z=c(()=>"fullscreen q-drawer__backdrop"+(y.value===!1&&D.value===!1?" hidden":"")),ee=c(()=>({backgroundColor:`rgba(0,0,0,${V.value*.4})`})),K=c(()=>T.value===!0?i.rows.value.top[2]==="r":i.rows.value.top[0]==="l"),De=c(()=>T.value===!0?i.rows.value.bottom[2]==="r":i.rows.value.bottom[0]==="l"),Ae=c(()=>{const l={};return i.header.space===!0&&K.value===!1&&(h.value===!0?l.top=`${i.header.offset}px`:i.header.space===!0&&(l.top=`${i.header.size}px`)),i.footer.space===!0&&De.value===!1&&(h.value===!0?l.bottom=`${i.footer.offset}px`:i.footer.space===!0&&(l.bottom=`${i.footer.size}px`)),l}),$e=c(()=>{const l={width:`${q.value}px`,transform:`translateX(${H.value}px)`};return b.value===!0?l:Object.assign(l,Ae.value)}),Ee=c(()=>"q-drawer__content fit "+(i.isContainer.value!==!0?"scroll":"overflow-auto")),xe=c(()=>`q-drawer q-drawer--${t.side}`+(X.value===!0?" q-drawer--mini-animate":"")+(t.bordered===!0?" q-drawer--bordered":"")+(u.value===!0?" q-drawer--dark q-dark":"")+(D.value===!0?" no-transition":y.value===!0?"":" q-layout--prevent-focus")+(b.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${P.value===!0?"mini":"standard"}`+(h.value===!0||k.value!==!0?" fixed":"")+(t.overlay===!0||t.miniToOverlay===!0?" q-drawer--on-top":"")+(K.value===!0?" q-drawer--top-padding":""))),He=c(()=>{const l=r.lang.rtl===!0?t.side:o.value;return[[N,We,void 0,{[l]:!0,mouse:!0}]]}),Le=c(()=>{const l=r.lang.rtl===!0?o.value:t.side;return[[N,me,void 0,{[l]:!0,mouse:!0}]]}),je=c(()=>{const l=r.lang.rtl===!0?o.value:t.side;return[[N,me,void 0,{[l]:!0,mouse:!0,mouseAllDir:!0}]]});function te(){Qe(b,t.behavior==="mobile"||t.behavior!=="desktop"&&i.totalWidth.value<=t.breakpoint)}w(b,l=>{l===!0?(C=y.value,y.value===!0&&x(!1)):t.overlay===!1&&t.behavior!=="mobile"&&C!==!1&&(y.value===!0?(O(0),A(0),le()):Q(!1))}),w(()=>t.side,(l,d)=>{i.instances[d]===L&&(i.instances[d]=void 0,i[d].space=!1,i[d].offset=0),i.instances[l]=L,i[l].size=q.value,i[l].space=k.value,i[l].offset=s.value}),w(i.totalWidth,()=>{(i.isContainer.value===!0||document.qScrollPrevented!==!0)&&te()}),w(()=>t.behavior+t.breakpoint,te),w(i.isContainer,l=>{y.value===!0&&a(l!==!0),l===!0&&te()}),w(i.scrollbarWidth,()=>{O(y.value===!0?0:void 0)}),w(s,l=>{$("offset",l)}),w(k,l=>{v("onLayout",l),$("space",l)}),w(T,()=>{O()}),w(q,l=>{O(),re(t.miniToOverlay,l)}),w(()=>t.miniToOverlay,l=>{re(l,q.value)}),w(()=>r.lang.rtl,()=>{O()}),w(()=>t.mini,()=>{t.modelValue===!0&&(Fe(),i.animate())}),w(P,l=>{v("miniState",l)});function O(l){l===void 0?pe(()=>{l=y.value===!0?0:q.value,O(B.value*l)}):(i.isContainer.value===!0&&T.value===!0&&(b.value===!0||Math.abs(l)===q.value)&&(l+=B.value*i.scrollbarWidth.value),H.value=l)}function A(l){V.value=l}function ae(l){const d=l===!0?"remove":i.isContainer.value!==!0?"add":"";d!==""&&document.body.classList[d]("q-body--drawer-toggle")}function Fe(){p!==null&&clearTimeout(p),e.proxy&&e.proxy.$el&&e.proxy.$el.classList.add("q-drawer--mini-animate"),X.value=!0,p=setTimeout(()=>{p=null,X.value=!1,e&&e.proxy&&e.proxy.$el&&e.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function We(l){if(y.value!==!1)return;const d=q.value,_=E(l.distance.x,0,d);if(l.isFinal===!0){_>=Math.min(75,d)===!0?Q():(i.animate(),A(0),O(B.value*d)),D.value=!1;return}O((r.lang.rtl===!0?T.value!==!0:T.value)?Math.max(d-_,0):Math.min(0,_-d)),A(E(_/d,0,1)),l.isFirst===!0&&(D.value=!0)}function me(l){if(y.value!==!0)return;const d=q.value,_=l.direction===t.side,G=(r.lang.rtl===!0?_!==!0:_)?E(l.distance.x,0,d):0;if(l.isFinal===!0){Math.abs(G)<Math.min(75,d)===!0?(i.animate(),A(1),O(0)):x(),D.value=!1;return}O(B.value*G),A(E(1-G/d,0,1)),l.isFirst===!0&&(D.value=!0)}function le(){a(!1),ae(!0)}function $(l,d){i.update(t.side,l,d)}function Qe(l,d){l.value!==d&&(l.value=d)}function re(l,d){$("size",l===!0?t.miniWidth:d)}return i.instances[t.side]=L,re(t.miniToOverlay,q.value),$("space",k.value),$("offset",s.value),t.showIfAbove===!0&&t.modelValue!==!0&&y.value===!0&&t["onUpdate:modelValue"]!==void 0&&v("update:modelValue",!0),Je(()=>{v("onLayout",k.value),v("miniState",P.value),C=t.showIfAbove===!0;const l=()=>{(y.value===!0?W:R)(!1,!0)};if(i.totalWidth.value!==0){pe(l);return}S=w(i.totalWidth,()=>{S(),S=void 0,y.value===!1&&t.showIfAbove===!0&&b.value===!1?Q(!1):l()})}),Be(()=>{S!==void 0&&S(),p!==null&&(clearTimeout(p),p=null),y.value===!0&&le(),i.instances[t.side]===L&&(i.instances[t.side]=void 0,$("size",0),$("offset",0),$("space",!1))}),()=>{const l=[];b.value===!0&&(t.noSwipeOpen===!1&&l.push(fe(M("div",{key:"open",class:`q-drawer__opener fixed-${t.side}`,"aria-hidden":"true"}),He.value)),l.push(ge("div",{ref:"backdrop",class:Z.value,style:ee.value,"aria-hidden":"true",onClick:x},void 0,"backdrop",t.noSwipeBackdrop!==!0&&y.value===!0,()=>je.value)));const d=P.value===!0&&n.mini!==void 0,_=[M("div",{...g,key:""+d,class:[Ee.value,g.class]},d===!0?n.mini():Ze(n.default))];return t.elevated===!0&&y.value===!0&&_.push(M("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),l.push(ge("aside",{ref:"content",class:xe.value,style:$e.value},_,"contentclose",t.noSwipeClose!==!0&&b.value===!0,()=>Le.value)),M("div",{class:"q-drawer-container"},l)}}});export{gt as Q,pt as a};
