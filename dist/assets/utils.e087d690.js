import{a as s,y as u}from"./index.a113d2e4.js";function l(r,e){return e?{...e,query:{...r,...e.query}}:{query:r}}function a(r){return typeof r=="string"?s(r):u(r)}function c(r,e,f){const i={};for(const t in r){if(t==="declaredClass")continue;const n=r[t];if(n!=null&&typeof n!="function")if(Array.isArray(n)){i[t]=[];for(let o=0;o<n.length;o++)i[t][o]=c(n[o])}else if(typeof n=="object")if(n.toJSON){const o=n.toJSON(f&&f[t]);i[t]=e?o:JSON.stringify(o)}else i[t]=e?n:JSON.stringify(n);else i[t]=n}return i}export{l as e,a as n,c as o};
