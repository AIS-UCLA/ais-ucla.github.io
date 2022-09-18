import{r as c,j as u,a as t,F as G,R as q,c as K}from"./style.e611ce0d.js";var m={exports:{}},Q="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Y=Q,X=Y;function F(){}function j(){}j.resetWarningCache=F;var Z=function(){function e(a,n,o,s,l,f){if(f!==X){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}e.isRequired=e;function r(){return e}var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:j,resetWarningCache:F};return i.PropTypes=i,i};m.exports=Z();var ee=["color","size","title"];function re(e,r){if(e==null)return{};var i=te(e,r),a,n;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],!(r.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,a)||(i[a]=e[a]))}return i}function te(e,r){if(e==null)return{};var i={},a=Object.keys(e),n,o;for(o=0;o<a.length;o++)n=a[o],!(r.indexOf(n)>=0)&&(i[n]=e[n]);return i}var k=c.exports.forwardRef(function(e,r){var i=e.color,a=e.size,n=e.title,o=re(e,ee);return u("svg",{ref:r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:a,height:a,fill:i,...o,children:[n?t("title",{children:n}):null,t("path",{d:"M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"})]})});k.propTypes={color:m.exports.string,size:m.exports.oneOfType([m.exports.string,m.exports.number]),title:m.exports.string};k.defaultProps={color:"currentColor",size:"1em",title:null};const ne=k,C="/assets/logo.5122d258.png",P="/",ae="/projects",ie="/join",oe="/workshops",se=()=>t("header",{className:"pb-5",children:t("nav",{className:"navbar navbar-expand-lg py-3 fixed-top bg-white",children:u("div",{className:"container d-flex",children:[t("a",{href:P,children:t("img",{className:"pe-3",src:C,style:{maxHeight:"3.5rem"}})}),t("a",{className:"navbar-brand",href:P,children:t("h4",{children:t("b",{children:"AI Safety"})})}),t("button",{type:"button",className:"navbar-toggler","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:t(ne,{className:"text-body"})}),t("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:u("div",{className:"navbar-nav ms-auto",children:[t("a",{href:ae,className:"nav-item nav-link",children:t("strong",{children:"Projects"})}),t("a",{href:oe,className:"nav-item nav-link",children:t("strong",{children:"Workshops"})}),t("a",{href:ie,className:"nav-item nav-link",children:t("strong",{children:"Join"})})]})})]})})});function ce(){return u("footer",{className:"container-fluid my-3",children:[t("br",{}),t("p",{children:"\xA9 AI Safety Corporation at UCLA, MIT Licensed"})]})}const le=e=>u(G,{children:[t(se,{}),e.children,t(ce,{})]}),b=e=>u("section",{className:"mt-5",style:{overflow:"hidden",position:"relative"},children:[t("span",{id:e.id,style:{position:"absolute",top:"-100px",visibility:"hidden"}}),e.children]});function ue(e){return e.length===2}function p(e){return!(!Array.isArray(e)||e.length!==3||!Array.isArray(e[0])||!Array.isArray(e[1]))}function fe(e,r){return[[],e.split(""),r]}function I(e){var r=e[0],i=e[1];return r.length>0?!1:i.reduce(function(a,n){return p(n)&&p(e)&&a?I(n):a},!0)}function w(e){var r=e[1];return r.length===0}function E(e){var r=N(e);return w(r)?r:E(r)}function z(e){if(I(e))return e;var r=e[0],i=e[1],a=e[2],n=function(s){return p(s)?z(s):s};return[[],[].concat(r.map(n),i.map(n)),a]}function L(e){var r=e[0],i=e[1],a=i.reduce(function(o,s){return p(s)&&!I(s)?x(s):o},void 0);if(a)return a;var n=r[r.length-1];return n}function x(e){var r=L(e);return p(r)?x(r):r}function W(e){var r=e[0],i=e[1],a=r.map(function(s){if(p(s)){var l=s[2];return[W(s),l]}return s}),n=i[0];if(p(n)&&!I(n)){var o=n[2];return[].concat(a,[[W(n),o]])}return a}function U(e){var r=e[1],i=r[0];return p(i)?U(i):i}function N(e){if(w(e))return e;var r=e[0],i=e[1],a=e[2],n=i[0],o=i.slice(1);if(p(n)){var s=N(n);return w(s)?[[].concat(r,[s]),o,a]:[r,[s].concat(o),a]}return[[].concat(r,[n]),o,a]}function A(){return A=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},A.apply(this,arguments)}function _(e,r){switch(e){case"\u2014":case"\u2026":return 200;case".":case",":return 150;case"?":case"!":return r!=="!"&&r!=="?"?150:20;case"-":case" ":case`
`:return 0;default:return 20}}function D(e,r){if(!w(e)){var i=e[1],a=e[2],n=i[0];return n&&p(n)?D(n,a.pace||r):a.pace||r}}function T(e){var r=e[1],i=e[2],a=L(e),n=r[0],o=[];return a&&p(a)&&o.push.apply(o,T(a)),n&&p(n)&&!I(n)&&o.push.apply(o,T(n)),i.onChar&&o.push(i.onChar),o}function M(e){return{windup:e,didFinishOnce:!1}}function de(e,r){switch(r.type){case"replace":return M(r.windup);case"next":return A({},e,{windup:N(e.windup)});case"rewind":return{windup:z(e.windup),didFinishOnce:!1};case"fast-forward":return A({},e,{windup:E(e.windup)});case"finish":return A({},e,{didFinishOnce:!0});default:return e}}function pe(e,r){var i=c.exports.useReducer(de,e,M),a=i[0],n=a.windup,o=a.didFinishOnce,s=i[1],l=c.exports.useRef(null),f=w(n),h=c.exports.useRef(null),y=c.exports.useRef(null),v=c.exports.useRef(!1),H=c.exports.useCallback(function(){f||(l.current&&clearTimeout(l.current),s({type:"fast-forward"}))},[f]),B=c.exports.useCallback(function(){if(v.current!==!0&&(v.current=!0,l.current)){var d;clearTimeout(l.current),y.current=Math.max(0,((d=h.current)!=null?d:0)-Date.now())}},[]),J=c.exports.useCallback(function(){if(v.current===!0&&!f){var d;setTimeout(function(){v.current=!1,s({type:"next"})},(d=y.current)!=null?d:0)}},[f]),$=c.exports.useCallback(function(){l.current&&clearTimeout(l.current),s({type:"rewind"})},[]);return c.exports.useEffect(function(){s({type:"replace",windup:e})},[e]),c.exports.useEffect(function(){l.current&&clearTimeout(l.current),r.skipped&&s({type:"fast-forward"}),r.skipped===!1&&s({type:"rewind"})},[r.skipped]),c.exports.useEffect(function(){var d=T(n),g=x(n);d.length>0&&g&&d.forEach(function(S){S(g)})},[n]),c.exports.useEffect(function(){if(o===!1&&f){var d=setTimeout(function(){r.onFinished&&r.onFinished(),s({type:"finish"})},0);return function(){clearTimeout(d)}}},[o,f,r]),c.exports.useEffect(function(){if(!f){var d=D(n)||_,g=x(n),S=U(n),R=g?d(g,S):0;return h.current=Date.now()+R,v.current!==!0&&(l.current=setTimeout(function(){s({type:"next"})},R)),function(){l.current&&clearTimeout(l.current)}}},[n,f]),{windup:n,skip:H,pause:B,resume:J,rewind:$,isFinished:f}}function V(e){var r=ue(e)?e[0]:W(e),i=r.reduce(function(a,n){return typeof n=="string"?a+n:a+V(n)},"");return i}function he(e,r){r===void 0&&(r={});var i=c.exports.useMemo(function(){return fe(e,r)},[e]),a=pe(i,r),n=a.windup,o=a.skip,s=a.pause,l=a.resume,f=a.rewind,h=a.isFinished,y=V(n);return c.exports.useDebugValue(y),[y,{skip:o,pause:s,resume:l,rewind:f,isFinished:h}]}const O=[{prompt:"Write twenty slogans for our AI Safety club",quote:"Keep calm and AI safe."},{prompt:"Write twenty slogans for our AI Safety club",quote:"Don't be a fool, be AI safe!"},{prompt:"Write twenty slogans for our AI Safety club",quote:"AI safety is no joke!"},{prompt:"Write twenty slogans for our AI Safety club",quote:"Intelligent machines need intelligent regulation."},{prompt:"Write twenty slogans for our AI Safety club",quote:"Leaving AI safety to chance is reckless."},{prompt:"Write twenty slogans for our AI Safety club",quote:"Only a fool would take risks with AI safety."},{prompt:"Write twenty slogans for our AI Safety club",quote:"Be smart, be safe, be AI safe."},{prompt:"Write twenty slogans for our AI Safety club",quote:"When it comes to AI safety, an ounce of prevention is worth a pound of cure."},{prompt:"Write twenty slogans for our AI Safety club",quote:"If you can't be AI safe, be AI sorry."},{prompt:"Write twenty slogans for our AI Safety club",quote:"Play it safe, make it AI safe."},{prompt:"Write twenty slogans for our AI Safety club",quote:"The safest AI is a well-regulated AI."},{prompt:"Write twenty slogans for our AI Safety club",quote:"Better AI safe then AI sorry!"},{prompt:"Write twenty slogans for our AI Safety club",quote:"A safe AI is a happy AI."},{prompt:"Write twenty slogans for our AI Safety club",quote:"A well-regulated AI is a well-behaved AI."},{prompt:"Write twenty slogans for our AI Safety club",quote:"An AI in safety is an AI in control."},{prompt:"Write twenty slogans for our AI Safety club",quote:"Safety first when it comes to AI."},{prompt:"Write twenty slogans for our AI Safety club",quote:"Don't be reckless, be AI safe."},{prompt:"Write twenty slogans for our AI Safety club",quote:"Make AI safety your top priority."},{prompt:"Write twenty slogans for our AI Safety club",quote:"Put AI safety first and foremost."},{prompt:"Write twenty slogans for our AI Safety club",quote:"Always remember: when it comes to AI safety, better safe than sorry!"}];function me(e){const[r,i]=q.useState({index:0,paused:!1});c.exports.useEffect(()=>{if(r.paused){const n=setTimeout(()=>i(({index:o})=>({paused:!1,index:(o+1)%O.length})),5e3);return()=>clearTimeout(n)}else return},[r]);const[a]=he(O[r.index].quote,{pace:n=>2*_(n,void 0),onFinished:()=>i(({index:n,paused:o})=>({index:n,paused:!0}))});return t("span",{style:e.style,className:e.className,children:a===""?"...":a})}const ye=()=>t(le,{children:u("div",{id:"content",className:"container",children:[t(b,{id:"home",name:"",children:u("div",{className:"row",children:[t("div",{className:"col-xl-2 col-md-4",children:t("img",{className:"mx-auto",src:C,style:{maxHeight:"15rem"}})}),t("div",{className:"col-xl-5 col-md-8",children:t("div",{className:"d-inline-block mx-auto",children:u("div",{className:"d-flex flex-column justify-content-center",children:[t("div",{style:{fontWeight:"bold",fontSize:"5rem"},children:"AI Safety"}),t("div",{className:"text-secondary",style:{fontSize:"2rem",textAlign:"end"},children:"at UCLA"})]})})}),t("div",{className:"col-xl-5 fs-5 pt-5",children:u("div",{className:"d-flex flex-column",children:[t("div",{children:"AI Safety at UCLA researches the impact of increasingly powerful AI systems. We promote the development of fair, secure, and useful AI tools. Join us if you'd like to learn about AI Safety and research how we can use AI to build a better future."}),t("div",{className:"pt-5",style:{height:"13rem"},children:u("blockquote",{className:"border border-dark border-2 p-3",children:[t(me,{style:{backgroundColor:"lightgreen",fontSize:"1.5rem"}}),t("footer",{className:"fs-5 fw-bold ms-3",children:"- GPT 3"})]})})]})})]})}),t(b,{id:"fellowship",name:"",children:u("div",{children:[t("h2",{className:"py-2",children:"Intro to AI Safety Program"}),t("h4",{children:t("u",{children:"About"})}),t("h4",{children:t("u",{children:"Eligibility"})}),t("h4",{children:t("u",{children:"Apply"})})]})}),t(b,{id:"workshops",name:"",children:u("div",{children:[t("h2",{className:"py-2",children:"Workshops"}),t("h4",{children:t("u",{children:"About"})}),t("h4",{children:t("u",{children:"Event Timings"})}),t("h4",{children:t("u",{children:"RSVP"})})]})}),t(b,{id:"projects",name:"",children:u("div",{children:[t("h2",{className:"py-2",children:"Projects"}),t("h4",{children:t("u",{children:"About"})}),t("h4",{children:t("u",{children:"Eligibility"})}),t("h4",{children:t("u",{children:"Apply"})})]})}),t(b,{id:"join",name:"",children:t("div",{children:t("a",{href:"/forms/intro",children:t("h2",{className:"py-2",children:"Join"})})})})]})}),ve=K(document.getElementById("root"));ve.render(t(q.StrictMode,{children:t(ye,{})}));
