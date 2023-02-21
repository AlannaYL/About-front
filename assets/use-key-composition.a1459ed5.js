import{w as B,o as le,k as L,i as ie,g as U,ac as se,r as g,c as i,ad as de,Z as fe,l as ce,aa as ve,n as pe,W as me,ae as ge,R as be,h as a,af as A,ag as G,ah as he,C as I,a4 as ye,a3 as Ce}from"./index.051d81b0.js";import{u as qe,a as xe}from"./use-dark.91ee313c.js";let x=[],V=[];function re(e){V=V.filter(o=>o!==e)}function Te(e){re(e),V.push(e)}function De(e){re(e),V.length===0&&x.length>0&&(x[x.length-1](),x=[])}function _e(e){V.length===0?e():x.push(e)}function Se(e){x=x.filter(o=>o!==e)}function we({validate:e,resetValidation:o,requiresQForm:t}){const r=ie(se,!1);if(r!==!1){const{props:v,proxy:s}=U();Object.assign(s,{validate:e,resetValidation:o}),B(()=>v.disable,n=>{n===!0?(typeof o=="function"&&o(),r.unbindComponent(s)):r.bindComponent(s)}),le(()=>{v.disable!==!0&&r.bindComponent(s)}),L(()=>{v.disable!==!0&&r.unbindComponent(s)})}else t===!0&&console.error("Parent QForm not found on useFormChild()!")}const X=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,Y=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,ee=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,P=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,M=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,j={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>X.test(e),hexaColor:e=>Y.test(e),hexOrHexaColor:e=>ee.test(e),rgbColor:e=>P.test(e),rgbaColor:e=>M.test(e),rgbOrRgbaColor:e=>P.test(e)||M.test(e),hexOrRgbColor:e=>X.test(e)||P.test(e),hexaOrRgbaColor:e=>Y.test(e)||M.test(e),anyColor:e=>ee.test(e)||P.test(e)||M.test(e)},Fe=[!0,!1,"ondemand"],Re={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>Fe.includes(e)}};function Be(e,o){const{props:t,proxy:r}=U(),v=g(!1),s=g(null),n=g(null);we({validate:C,resetValidation:S});let c=0,y;const k=i(()=>t.rules!==void 0&&t.rules!==null&&t.rules.length>0),b=i(()=>t.disable!==!0&&k.value===!0),_=i(()=>t.error===!0||v.value===!0),T=i(()=>typeof t.errorMessage=="string"&&t.errorMessage.length>0?t.errorMessage:s.value);B(()=>t.modelValue,()=>{$()}),B(()=>t.reactiveRules,h=>{h===!0?y===void 0&&(y=B(()=>t.rules,()=>{$(!0)})):y!==void 0&&(y(),y=void 0)},{immediate:!0}),B(e,h=>{h===!0?n.value===null&&(n.value=!1):n.value===!1&&(n.value=!0,b.value===!0&&t.lazyRules!=="ondemand"&&o.value===!1&&w())});function S(){c++,o.value=!1,n.value=null,v.value=!1,s.value=null,w.cancel()}function C(h=t.modelValue){if(b.value!==!0)return!0;const F=++c,D=o.value!==!0?()=>{n.value=!0}:()=>{},q=(f,p)=>{f===!0&&D(),v.value=f,s.value=p||null,o.value=!1},R=[];for(let f=0;f<t.rules.length;f++){const p=t.rules[f];let m;if(typeof p=="function"?m=p(h,j):typeof p=="string"&&j[p]!==void 0&&(m=j[p](h)),m===!1||typeof m=="string")return q(!0,m),!1;m!==!0&&m!==void 0&&R.push(m)}return R.length===0?(q(!1),!0):(o.value=!0,Promise.all(R).then(f=>{if(f===void 0||Array.isArray(f)===!1||f.length===0)return F===c&&q(!1),!0;const p=f.find(m=>m===!1||typeof m=="string");return F===c&&q(p!==void 0,p),p===void 0},f=>(F===c&&(console.error(f),q(!0)),!1)))}function $(h){b.value===!0&&t.lazyRules!=="ondemand"&&(n.value===!0||t.lazyRules!==!0&&h!==!0)&&w()}const w=de(C,0);return L(()=>{y!==void 0&&y(),w.cancel()}),Object.assign(r,{resetValidation:S,validate:C}),fe(r,"hasError",()=>_.value),{isDirtyModel:n,hasRules:k,hasError:_,errorMessage:T,validate:C,resetValidation:S}}const oe=/^on[A-Z]/;function Ae(e,o){const t={listeners:g({}),attributes:g({})};function r(){const v={},s={};for(const n in e)n!=="class"&&n!=="style"&&oe.test(n)===!1&&(v[n]=e[n]);for(const n in o.props)oe.test(n)===!0&&(s[n]=o.props[n]);t.attributes.value=v,t.listeners.value=s}return ce(r),r(),t}let z,O=0;const d=new Array(256);for(let e=0;e<256;e++)d[e]=(e+256).toString(16).substring(1);const Ve=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return o=>{const t=new Uint8Array(o);return e.getRandomValues(t),t}}return o=>{const t=[];for(let r=o;r>0;r--)t.push(Math.floor(Math.random()*256));return t}})(),te=4096;function ke(){(z===void 0||O+16>te)&&(O=0,z=Ve(te));const e=Array.prototype.slice.call(z,O,O+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,d[e[0]]+d[e[1]]+d[e[2]]+d[e[3]]+"-"+d[e[4]]+d[e[5]]+"-"+d[e[6]]+d[e[7]]+"-"+d[e[8]]+d[e[9]]+"-"+d[e[10]]+d[e[11]]+d[e[12]]+d[e[13]]+d[e[14]]+d[e[15]]}function H(e){return e===void 0?`f_${ke()}`:e}function $e(e){return e!=null&&(""+e).length>0}const je={...qe,...Re,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},ze=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function He(){const{props:e,attrs:o,proxy:t,vnode:r}=U();return{isDark:xe(e,t.$q),editable:i(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:g(!1),focused:g(!1),hasPopupOpen:!1,splitAttrs:Ae(o,r),targetUid:g(H(e.for)),rootRef:g(null),targetRef:g(null),controlRef:g(null)}}function Le(e){const{props:o,emit:t,slots:r,attrs:v,proxy:s}=U(),{$q:n}=s;let c=null;e.hasValue===void 0&&(e.hasValue=i(()=>$e(o.modelValue))),e.emitValue===void 0&&(e.emitValue=l=>{t("update:modelValue",l)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:Z,onFocusout:N}),Object.assign(e,{clearValue:K,onControlFocusin:Z,onControlFocusout:N,focus:p}),e.computedCounter===void 0&&(e.computedCounter=i(()=>{if(o.counter!==!1){const l=typeof o.modelValue=="string"||typeof o.modelValue=="number"?(""+o.modelValue).length:Array.isArray(o.modelValue)===!0?o.modelValue.length:0,u=o.maxlength!==void 0?o.maxlength:o.maxValues;return l+(u!==void 0?" / "+u:"")}}));const{isDirtyModel:y,hasRules:k,hasError:b,errorMessage:_,resetValidation:T}=Be(e.focused,e.innerLoading),S=e.floatingLabel!==void 0?i(()=>o.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):i(()=>o.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),C=i(()=>o.bottomSlots===!0||o.hint!==void 0||k.value===!0||o.counter===!0||o.error!==null),$=i(()=>o.filled===!0?"filled":o.outlined===!0?"outlined":o.borderless===!0?"borderless":o.standout?"standout":"standard"),w=i(()=>`q-field row no-wrap items-start q-field--${$.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(o.rounded===!0?" q-field--rounded":"")+(o.square===!0?" q-field--square":"")+(S.value===!0?" q-field--float":"")+(F.value===!0?" q-field--labeled":"")+(o.dense===!0?" q-field--dense":"")+(o.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(b.value===!0?" q-field--error":"")+(b.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(o.hideBottomSpace!==!0&&C.value===!0?" q-field--with-bottom":"")+(o.disable===!0?" q-field--disabled":o.readonly===!0?" q-field--readonly":"")),h=i(()=>"q-field__control relative-position row no-wrap"+(o.bgColor!==void 0?` bg-${o.bgColor}`:"")+(b.value===!0?" text-negative":typeof o.standout=="string"&&o.standout.length>0&&e.focused.value===!0?` ${o.standout}`:o.color!==void 0?` text-${o.color}`:"")),F=i(()=>o.labelSlot===!0||o.label!==void 0),D=i(()=>"q-field__label no-pointer-events absolute ellipsis"+(o.labelColor!==void 0&&b.value!==!0?` text-${o.labelColor}`:"")),q=i(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:S.value,modelValue:o.modelValue,emitValue:e.emitValue})),R=i(()=>{const l={for:e.targetUid.value};return o.disable===!0?l["aria-disabled"]="true":o.readonly===!0&&(l["aria-readonly"]="true"),l});B(()=>o.for,l=>{e.targetUid.value=H(l)});function f(){const l=document.activeElement;let u=e.targetRef!==void 0&&e.targetRef.value;u&&(l===null||l.id!==e.targetUid.value)&&(u.hasAttribute("tabindex")===!0||(u=u.querySelector("[tabindex]")),u&&u!==l&&u.focus({preventScroll:!0}))}function p(){_e(f)}function m(){Se(f);const l=document.activeElement;l!==null&&e.rootRef.value.contains(l)&&l.blur()}function Z(l){c!==null&&(clearTimeout(c),c=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,t("focus",l))}function N(l,u){c!==null&&clearTimeout(c),c=setTimeout(()=>{c=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,t("blur",l)),u!==void 0&&u())})}function K(l){ve(l),n.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),o.type==="file"&&(e.inputRef.value.value=null),t("update:modelValue",null),t("clear",o.modelValue),pe(()=>{T(),n.platform.is.mobile!==!0&&(y.value=!1)})}function ne(){const l=[];return r.prepend!==void 0&&l.push(a("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:A},r.prepend())),l.push(a("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},ue())),b.value===!0&&o.noErrorIcon===!1&&l.push(E("error",[a(G,{name:n.iconSet.field.error,color:"negative"})])),o.loading===!0||e.innerLoading.value===!0?l.push(E("inner-loading-append",r.loading!==void 0?r.loading():[a(he,{color:o.color})])):o.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&l.push(E("inner-clearable-append",[a(G,{class:"q-field__focusable-action",tag:"button",name:o.clearIcon||n.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:K})])),r.append!==void 0&&l.push(a("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:A},r.append())),e.getInnerAppend!==void 0&&l.push(E("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&l.push(e.getControlChild()),l}function ue(){const l=[];return o.prefix!==void 0&&o.prefix!==null&&l.push(a("div",{class:"q-field__prefix no-pointer-events row items-center"},o.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&l.push(e.getShadowControl()),e.getControl!==void 0?l.push(e.getControl()):r.rawControl!==void 0?l.push(r.rawControl()):r.control!==void 0&&l.push(a("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0},r.control(q.value))),F.value===!0&&l.push(a("div",{class:D.value},I(r.label,o.label))),o.suffix!==void 0&&o.suffix!==null&&l.push(a("div",{class:"q-field__suffix no-pointer-events row items-center"},o.suffix)),l.concat(I(r.default))}function ae(){let l,u;b.value===!0?_.value!==null?(l=[a("div",{role:"alert"},_.value)],u=`q--slot-error-${_.value}`):(l=I(r.error),u="q--slot-error"):(o.hideHint!==!0||e.focused.value===!0)&&(o.hint!==void 0?(l=[a("div",o.hint)],u=`q--slot-hint-${o.hint}`):(l=I(r.hint),u="q--slot-hint"));const W=o.counter===!0||r.counter!==void 0;if(o.hideBottomSpace===!0&&W===!1&&l===void 0)return;const J=a("div",{key:u,class:"q-field__messages col"},l);return a("div",{class:"q-field__bottom row items-start q-field__bottom--"+(o.hideBottomSpace!==!0?"animated":"stale"),onClick:A},[o.hideBottomSpace===!0?J:a(ye,{name:"q-transition--field-message"},()=>J),W===!0?a("div",{class:"q-field__counter"},r.counter!==void 0?r.counter():e.computedCounter.value):null])}function E(l,u){return u===null?null:a("div",{key:l,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},u)}let Q=!1;return me(()=>{Q=!0}),ge(()=>{Q===!0&&o.autofocus===!0&&s.focus()}),le(()=>{be.value===!0&&o.for===void 0&&(e.targetUid.value=H()),o.autofocus===!0&&s.focus()}),L(()=>{c!==null&&clearTimeout(c)}),Object.assign(s,{focus:p,blur:m}),function(){const u=e.getControl===void 0&&r.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0,...R.value}:R.value;return a("label",{ref:e.rootRef,class:[w.value,v.class],style:v.style,...u},[r.before!==void 0?a("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:A},r.before()):null,a("div",{class:"q-field__inner relative-position col self-stretch"},[a("div",{ref:e.controlRef,class:h.value,tabindex:-1,...e.controlEvents},ne()),C.value===!0?ae():null]),r.after!==void 0?a("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:A},r.after()):null])}}const Ze={name:String};function Ne(e){return i(()=>({type:"hidden",name:e.name,value:e.modelValue}))}function Ke(e={}){return(o,t,r)=>{o[t](a("input",{class:"hidden"+(r||""),...e.value}))}}function Qe(e){return i(()=>e.name||e.for)}const Ee=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,Ie=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,Pe=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,Me=/[a-z0-9_ -]$/i;function We(e){return function(t){if(t.type==="compositionend"||t.type==="change"){if(t.target.qComposing!==!0)return;t.target.qComposing=!1,e(t)}else t.type==="compositionupdate"&&t.target.qComposing!==!0&&typeof t.data=="string"&&(Ce.is.firefox===!0?Me.test(t.data)===!1:Ee.test(t.data)===!0||Ie.test(t.data)===!0||Pe.test(t.data)===!0)===!0&&(t.target.qComposing=!0)}}export{Te as a,_e as b,Ze as c,ze as d,Qe as e,He as f,Le as g,$e as h,We as i,Ke as j,Ne as k,De as r,je as u};
