import{k,a6 as C,W as I,X as K,g as $,w as W,a7 as R,o as G,n as X,a8 as J,a9 as Y,a3 as p,U as d,aa as Q,ab as Z}from"./index.1e5a2f74.js";function re(e,o,t){let l;function n(){l!==void 0&&(C.remove(l),l=void 0)}return k(()=>{e.value===!0&&n()}),{removeFromHistory:n,addToHistory(){l={condition:()=>t.value===!0,handler:o},C.add(l)}}}function se(){let e=null;const o=$();function t(){e!==null&&(clearTimeout(e),e=null)}return I(t),k(t),{removeTimeout:t,registerTimeout(l,n){t(),K(o)===!1&&(e=setTimeout(l,n))}}}const ue={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},ce=["beforeShow","show","beforeHide","hide"];function ae({showing:e,canShow:o,hideOnRouteChange:t,handleShow:l,handleHide:n,processOnMount:u}){const r=$(),{props:s,emit:c,proxy:V}=r;let a;function j(i){e.value===!0?g(i):H(i)}function H(i){if(s.disable===!0||i!==void 0&&i.qAnchorHandled===!0||o!==void 0&&o(i)!==!0)return;const m=s["onUpdate:modelValue"]!==void 0;m===!0&&(c("update:modelValue",!0),a=i,X(()=>{a===i&&(a=void 0)})),(s.modelValue===null||m===!1)&&P(i)}function P(i){e.value!==!0&&(e.value=!0,c("beforeShow",i),l!==void 0?l(i):c("show",i))}function g(i){if(s.disable===!0)return;const m=s["onUpdate:modelValue"]!==void 0;m===!0&&(c("update:modelValue",!1),a=i,X(()=>{a===i&&(a=void 0)})),(s.modelValue===null||m===!1)&&x(i)}function x(i){e.value!==!1&&(e.value=!1,c("beforeHide",i),n!==void 0?n(i):c("hide",i))}function q(i){s.disable===!0&&i===!0?s["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):i===!0!==e.value&&(i===!0?P:x)(a)}W(()=>s.modelValue,q),t!==void 0&&R(r)===!0&&W(()=>V.$route.fullPath,()=>{t.value===!0&&e.value===!0&&g()}),u===!0&&G(()=>{q(s.modelValue)});const M={show:H,hide:g,toggle:j};return Object.assign(V,M),M}const ee=[null,document,document.body,document.scrollingElement,document.documentElement];function de(e,o){let t=J(o);if(t===void 0){if(e==null)return window;t=e.closest(".scroll,.scroll-y,.overflow-auto")}return ee.includes(t)?window:t}function B(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function D(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}function N(e,o,t=0){const l=arguments[3]===void 0?performance.now():arguments[3],n=B(e);if(t<=0){n!==o&&E(e,o);return}requestAnimationFrame(u=>{const r=u-l,s=n+(o-n)/Math.max(r,t)*r;E(e,s),s!==o&&N(e,o,t-r,u)})}function _(e,o,t=0){const l=arguments[3]===void 0?performance.now():arguments[3],n=D(e);if(t<=0){n!==o&&S(e,o);return}requestAnimationFrame(u=>{const r=u-l,s=n+(o-n)/Math.max(r,t)*r;S(e,s),s!==o&&_(e,o,t-r,u)})}function E(e,o){if(e===window){window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,o);return}e.scrollTop=o}function S(e,o){if(e===window){window.scrollTo(o,window.pageYOffset||window.scrollY||document.body.scrollTop||0);return}e.scrollLeft=o}function fe(e,o,t){if(t){N(e,o,t);return}E(e,o)}function me(e,o,t){if(t){_(e,o,t);return}S(e,o)}let h;function pe(){if(h!==void 0)return h;const e=document.createElement("p"),o=document.createElement("div");Y(e,{width:"100%",height:"200px"}),Y(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const t=e.offsetWidth;o.style.overflow="scroll";let l=e.offsetWidth;return t===l&&(l=o.clientWidth),o.remove(),h=t-l,h}function oe(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let w=0,b,T,v,L=!1,z,A,U,f=null;function te(e){le(e)&&Q(e)}function le(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=Z(e),t=e.shiftKey&&!e.deltaX,l=!t&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),n=t||l?e.deltaY:e.deltaX;for(let u=0;u<o.length;u++){const r=o[u];if(oe(r,l))return l?n<0&&r.scrollTop===0?!0:n>0&&r.scrollTop+r.clientHeight===r.scrollHeight:n<0&&r.scrollLeft===0?!0:n>0&&r.scrollLeft+r.clientWidth===r.scrollWidth}return!0}function O(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function y(e){L!==!0&&(L=!0,requestAnimationFrame(()=>{L=!1;const{height:o}=e.target,{clientHeight:t,scrollTop:l}=document.scrollingElement;(v===void 0||o!==window.innerHeight)&&(v=t-o,document.scrollingElement.scrollTop=l),l>v&&(document.scrollingElement.scrollTop-=Math.ceil((l-v)/8))}))}function F(e){const o=document.body,t=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:n}=window.getComputedStyle(o);b=D(window),T=B(window),z=o.style.left,A=o.style.top,U=window.location.href,o.style.left=`-${b}px`,o.style.top=`-${T}px`,n!=="hidden"&&(n==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,p.is.ios===!0&&(t===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",y,d.passiveCapture),window.visualViewport.addEventListener("scroll",y,d.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",O,d.passiveCapture))}p.is.desktop===!0&&p.is.mac===!0&&window[`${e}EventListener`]("wheel",te,d.notPassive),e==="remove"&&(p.is.ios===!0&&(t===!0?(window.visualViewport.removeEventListener("resize",y,d.passiveCapture),window.visualViewport.removeEventListener("scroll",y,d.passiveCapture)):window.removeEventListener("scroll",O,d.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=z,o.style.top=A,window.location.href===U&&window.scrollTo(b,T),v=void 0)}function ie(e){let o="add";if(e===!0){if(w++,f!==null){clearTimeout(f),f=null;return}if(w>1)return}else{if(w===0||(w--,w>0))return;if(o="remove",p.is.ios===!0&&p.is.nativeMobile===!0){f!==null&&clearTimeout(f),f=setTimeout(()=>{F(o),f=null},100);return}}F(o)}function we(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,ie(o))}}}export{B as a,D as b,pe as c,ce as d,se as e,ae as f,de as g,re as h,we as i,me as j,fe as s,ue as u};
