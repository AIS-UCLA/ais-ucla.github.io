import{r as u,R as F,j as o,c as B,L as G,a as p,S as I,b as U}from"./style.012746c3.js";import{H as V}from"./HrefLink.bb75140e.js";function J(e){return e.length===2}function l(e){return!(!Array.isArray(e)||e.length!==3||!Array.isArray(e[0])||!Array.isArray(e[1]))}function $(e,r){return[[],e.split(""),r]}function A(e){var r=e[0],a=e[1];return r.length>0?!1:a.reduce(function(n,t){return l(t)&&l(e)&&n?A(t):n},!0)}function g(e){var r=e[1];return r.length===0}function T(e){var r=k(e);return g(r)?r:T(r)}function N(e){if(A(e))return e;var r=e[0],a=e[1],n=e[2],t=function(i){return l(i)?N(i):i};return[[],[].concat(r.map(t),a.map(t)),n]}function P(e){var r=e[0],a=e[1],n=a.reduce(function(s,i){return l(i)&&!A(i)?b(i):s},void 0);if(n)return n;var t=r[r.length-1];return t}function b(e){var r=P(e);return l(r)?b(r):r}function S(e){var r=e[0],a=e[1],n=r.map(function(i){if(l(i)){var c=i[2];return[S(i),c]}return i}),t=a[0];if(l(t)&&!A(t)){var s=t[2];return[].concat(n,[[S(t),s]])}return n}function j(e){var r=e[1],a=r[0];return l(a)?j(a):a}function k(e){if(g(e))return e;var r=e[0],a=e[1],n=e[2],t=a[0],s=a.slice(1);if(l(t)){var i=k(t);return g(i)?[[].concat(r,[i]),s,n]:[r,[i].concat(s),n]}return[[].concat(r,[t]),s,n]}function v(){return v=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},v.apply(this,arguments)}function C(e,r){switch(e){case"\u2014":case"\u2026":return 200;case".":case",":return 150;case"?":case"!":return r!=="!"&&r!=="?"?150:20;case"-":case" ":case`
`:return 0;default:return 20}}function E(e,r){if(!g(e)){var a=e[1],n=e[2],t=a[0];return t&&l(t)?E(t,n.pace||r):n.pace||r}}function W(e){var r=e[1],a=e[2],n=P(e),t=r[0],s=[];return n&&l(n)&&s.push.apply(s,W(n)),t&&l(t)&&!A(t)&&s.push.apply(s,W(t)),a.onChar&&s.push(a.onChar),s}function L(e){return{windup:e,didFinishOnce:!1}}function K(e,r){switch(r.type){case"replace":return L(r.windup);case"next":return v({},e,{windup:k(e.windup)});case"rewind":return{windup:N(e.windup),didFinishOnce:!1};case"fast-forward":return v({},e,{windup:T(e.windup)});case"finish":return v({},e,{didFinishOnce:!0});default:return e}}function Q(e,r){var a=u.exports.useReducer(K,e,L),n=a[0],t=n.windup,s=n.didFinishOnce,i=a[1],c=u.exports.useRef(null),d=g(t),w=u.exports.useRef(null),h=u.exports.useRef(null),m=u.exports.useRef(!1),O=u.exports.useCallback(function(){d||(c.current&&clearTimeout(c.current),i({type:"fast-forward"}))},[d]),D=u.exports.useCallback(function(){if(m.current!==!0&&(m.current=!0,c.current)){var f;clearTimeout(c.current),h.current=Math.max(0,((f=w.current)!=null?f:0)-Date.now())}},[]),H=u.exports.useCallback(function(){if(m.current===!0&&!d){var f;setTimeout(function(){m.current=!1,i({type:"next"})},(f=h.current)!=null?f:0)}},[d]),z=u.exports.useCallback(function(){c.current&&clearTimeout(c.current),i({type:"rewind"})},[]);return u.exports.useEffect(function(){i({type:"replace",windup:e})},[e]),u.exports.useEffect(function(){c.current&&clearTimeout(c.current),r.skipped&&i({type:"fast-forward"}),r.skipped===!1&&i({type:"rewind"})},[r.skipped]),u.exports.useEffect(function(){var f=W(t),y=b(t);f.length>0&&y&&f.forEach(function(x){x(y)})},[t]),u.exports.useEffect(function(){if(s===!1&&d){var f=setTimeout(function(){r.onFinished&&r.onFinished(),i({type:"finish"})},0);return function(){clearTimeout(f)}}},[s,d,r]),u.exports.useEffect(function(){if(!d){var f=E(t)||C,y=b(t),x=j(t),q=y?f(y,x):0;return w.current=Date.now()+q,m.current!==!0&&(c.current=setTimeout(function(){i({type:"next"})},q)),function(){c.current&&clearTimeout(c.current)}}},[t,d]),{windup:t,skip:O,pause:D,resume:H,rewind:z,isFinished:d}}function M(e){var r=J(e)?e[0]:S(e),a=r.reduce(function(n,t){return typeof t=="string"?n+t:n+M(t)},"");return a}function Y(e,r){r===void 0&&(r={});var a=u.exports.useMemo(function(){return $(e,r)},[e]),n=Q(a,r),t=n.windup,s=n.skip,i=n.pause,c=n.resume,d=n.rewind,w=n.isFinished,h=M(t);return u.exports.useDebugValue(h),[h,{skip:s,pause:i,resume:c,rewind:d,isFinished:w}]}const R=[{prompt:"Write twenty slogans for our AI Safety club",quote:"Keep calm and AI safe."},{prompt:"Write twenty slogans for our AI Safety club",quote:"Don't be a fool, be AI safe!"},{prompt:"Write twenty slogans for our AI Safety club",quote:"AI safety is no joke!"},{prompt:"Write twenty slogans for our AI Safety club",quote:"Intelligent machines need intelligent regulation."},{prompt:"Write twenty slogans for our AI Safety club",quote:"Leaving AI safety to chance is reckless."},{prompt:"Write twenty slogans for our AI Safety club",quote:"Only a fool would take risks with AI safety."},{prompt:"Write twenty slogans for our AI Safety club",quote:"Be smart, be safe, be AI safe."},{prompt:"Write twenty slogans for our AI Safety club",quote:"When it comes to AI safety, an ounce of prevention is worth a pound of cure."},{prompt:"Write twenty slogans for our AI Safety club",quote:"If you can't be AI safe, be AI sorry."},{prompt:"Write twenty slogans for our AI Safety club",quote:"Play it safe, make it AI safe."},{prompt:"Write twenty slogans for our AI Safety club",quote:"The safest AI is a well-regulated AI."},{prompt:"Write twenty slogans for our AI Safety club",quote:"Better AI safe then AI sorry!"},{prompt:"Write twenty slogans for our AI Safety club",quote:"A safe AI is a happy AI."},{prompt:"Write twenty slogans for our AI Safety club",quote:"A well-regulated AI is a well-behaved AI."},{prompt:"Write twenty slogans for our AI Safety club",quote:"An AI in safety is an AI in control."},{prompt:"Write twenty slogans for our AI Safety club",quote:"Safety first when it comes to AI."},{prompt:"Write twenty slogans for our AI Safety club",quote:"Don't be reckless, be AI safe."},{prompt:"Write twenty slogans for our AI Safety club",quote:"Make AI safety your top priority."},{prompt:"Write twenty slogans for our AI Safety club",quote:"Put AI safety first and foremost."},{prompt:"Write twenty slogans for our AI Safety club",quote:"Always remember: when it comes to AI safety, better safe than sorry!"}];function X(e){const[r,a]=F.useState({index:0,paused:!1});u.exports.useEffect(()=>{if(r.paused){const t=setTimeout(()=>a(({index:s})=>({paused:!1,index:(s+1)%R.length})),5e3);return()=>clearTimeout(t)}else return},[r]);const[n]=Y(R[r.index].quote,{pace:t=>2*C(t,void 0),onFinished:()=>a(({index:t,paused:s})=>({index:t,paused:!0}))});return o("span",{style:e.style,className:e.className,children:n===""?"...":n})}const Z=()=>o(G,{children:p("div",{id:"content",className:"container",children:[o(I,{id:"home",name:"",children:p("div",{className:"row",children:[o("div",{className:"col-xl-2 col-md-4",children:o("img",{className:"mx-auto",src:U,style:{maxHeight:"15rem"}})}),o("div",{className:"col-xl-5 col-md-8",children:o("div",{className:"d-inline-block mx-auto",children:p("div",{className:"d-flex flex-column justify-content-center",children:[o("div",{style:{fontWeight:"bold",fontSize:"5rem"},children:"AI Safety"}),o("div",{className:"text-secondary",style:{fontSize:"2rem",textAlign:"end"},children:"at UCLA"})]})})}),o("div",{className:"col-xl-5 fs-5 pt-5",children:p("div",{className:"d-flex flex-column",children:[o("div",{children:"AI Safety at UCLA works to ensure that the development of powerful AI systems is done safely. We are a research focused club which strives to provide students the tools and guidance to tackle the problems that interest them. Join us if you'd like to learn about AI safety and discover how we can use AI to build a better future."}),o("div",{className:"pt-5",style:{height:"13rem"},children:p("blockquote",{className:"border border-dark border-2 p-3",children:[o(X,{style:{backgroundColor:"#d2f4d3",fontSize:"1.5rem"}}),o("footer",{className:"fs-5 fw-bold",children:"- GPT 3"})]})})]})})]})}),p(I,{id:"join",name:"Join",children:[o("p",{children:"The Intro to AI Safety Program is a 7 week, quarter-long course which explores the impact of increasingly powerful AI systems on society, explains the problems which the AI safety field is currently working on, and goes over active areas of research."}),o("p",{children:o("b",{children:o("a",{href:"/join.html#intro",children:"Learn More"})})})]}),p(I,{id:"events",name:"Events",children:[o("p",{children:"We host events throughout the quarter. Meet with other talented people in the broader AI safety community and work on challenging problems!"}),o("p",{children:o("a",{href:"/events.html",children:o("b",{children:"Learn More"})})})]}),p(I,{id:"projects",name:"Projects",children:[o("p",{children:"If you have AI safety project ideas, we would love to hear them!"}),p("p",{children:[o("b",{children:"Project application"}),": ",o(V,{href:"https://airtable.com/shr9qTP5wgMevAY9e"})]})]})]})}),_=B(document.getElementById("root"));_.render(o(F.StrictMode,{children:o(Z,{})}));
