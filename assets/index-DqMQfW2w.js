import{o as m,c as h,u as y,R as _,a as g,b as v,d as E,e as P}from"./vendor-BhptFieL.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const L={__name:"App",setup(l){return(o,n)=>(m(),h(y(_)))}},w="modulepreload",R=function(l,o){return new URL(l,o).href},d={},O=function(o,n,i){let e=Promise.resolve();if(n&&n.length>0){const t=document.getElementsByTagName("link");e=Promise.all(n.map(r=>{if(r=R(r,i),r in d)return;d[r]=!0;const c=r.endsWith(".css"),p=c?'[rel="stylesheet"]':"";if(!!i)for(let a=t.length-1;a>=0;a--){const u=t[a];if(u.href===r&&(!c||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${p}`))return;const s=document.createElement("link");if(s.rel=c?"stylesheet":w,c||(s.as="script",s.crossOrigin=""),s.href=r,document.head.appendChild(s),c)return new Promise((a,u)=>{s.addEventListener("load",a),s.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})}))}return e.then(()=>o()).catch(t=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=t,window.dispatchEvent(r),!r.defaultPrevented)throw t})},b=g({history:v("./"),routes:[{path:"/exper/three",name:"jspsych_three",component:()=>O(()=>import("./three-DsJ1fM9a.js"),__vite__mapDeps([0,1,2]),import.meta.url),alias:"/"}]}),B=E(),f=P(L);f.use(B);f.use(b);f.mount("#app");
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./three-DsJ1fM9a.js","./vendor-BhptFieL.js","./three-BvpIHwuZ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}