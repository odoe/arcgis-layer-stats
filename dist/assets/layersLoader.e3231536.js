import{L as h,s as p,b7 as b,aa as I}from"./index.a113d2e4.js";import{e as g}from"./jsonContext.5a3a8a6e.js";async function y(e){const{data:n}=await h(e,{responseType:"json",query:{f:"json"}});return n}async function w(e,n){const t=e.instance.portalItem;if(t&&t.id)return await t.load(n),v(e),T(e,n)}function v(e){const n=e.instance.portalItem;if(!e.supportedTypes.includes(n.type))throw new p("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:n.type,expectedType:e.supportedTypes.join(", ")})}async function T(e,n){const t=e.instance,r=t.portalItem,{url:a,title:o}=r,l=g(r);if(t.type==="group")return t.read({title:o},l),L(t,e);a&&t.read({url:a},l);const c=await d(e,n);return c&&t.read(c,l),t.resourceReferences={portalItem:r,paths:l.readResourcePaths},t.read({title:o},l),b(t,l)}function L(e,n){let t;const r=e.portalItem.type,a=n.layerModuleTypeMap;switch(r){case"Feature Service":case"Feature Collection":t=a.FeatureLayer;break;case"Stream Service":t=a.StreamLayer;break;case"Scene Service":t=a.SceneLayer;break;default:throw new p("portal:unsupported-item-type-as-group",`The item type '${r}' is not supported as a 'IGroupLayer'`)}let o;return t().then(l=>(o=l,d(n))).then(async l=>r==="Feature Service"?(l=await f(l,e.portalItem.url),i(e,o,l)):s(l)>0?i(e,o,l):S(e,o))}function S(e,n){return e.portalItem.url?y(e.portalItem.url).then(t=>{var a,o;function r(l){return{id:l.id,name:l.name}}t&&i(e,n,{layers:(a=t.layers)==null?void 0:a.map(r),tables:(o=t.tables)==null?void 0:o.map(r)})}):Promise.resolve()}function i(e,n,t){let r=t.layers||[];const a=t.tables||[];e.portalItem.type==="Feature Collection"&&(r.forEach(o=>{var l;((l=o==null?void 0:o.layerDefinition)==null?void 0:l.type)==="Table"&&a.push(o)}),r=r.filter(o=>{var l;return((l=o==null?void 0:o.layerDefinition)==null?void 0:l.type)!=="Table"})),r.reverse().forEach(o=>{const l=u(e,n,t,o);e.add(l)}),a.reverse().forEach(o=>{const l=u(e,n,t,o);e.tables.add(l)})}function u(e,n,t,r){const a=new n({portalItem:e.portalItem.clone(),layerId:r.id,sublayerTitleMode:"service-name"});if(e.portalItem.type==="Feature Collection"){const o={origin:"portal-item",portal:e.portalItem.portal||I.getDefault()};a.read(r,o);const l=t.showLegend;l!=null&&a.read({showLegend:l},o)}return a}function d(e,n){if(e.supportsData===!1)return Promise.resolve(void 0);const t=e.instance;return t.portalItem.fetchData("json",n).catch(()=>null).then(async r=>{if(j(t)){let a,o=!0;return r&&s(r)>0&&(t.layerId==null&&(t.layerId=m(r)),a=F(r,t.layerId),a&&(s(r)===1&&(o=!1),r.showLegend!=null&&(a.showLegend=r.showLegend))),o&&t.sublayerTitleMode!=="service-name"&&(t.sublayerTitleMode="item-title-and-service-name"),a}return r})}async function f(e,n){if((e==null?void 0:e.layers)==null||(e==null?void 0:e.tables)==null){const t=await y(n);(e=e||{}).layers=e.layers||(t==null?void 0:t.layers),e.tables=e.tables||(t==null?void 0:t.tables)}return e}function m(e){const n=e.layers;if(n&&n.length)return n[0].id;const t=e.tables;return t&&t.length?t[0].id:null}function F(e,n){const t=e.layers;if(t){for(let a=0;a<t.length;a++)if(t[a].id===n)return t[a]}const r=e.tables;if(r){for(let a=0;a<r.length;a++)if(r[a].id===n)return r[a]}return null}function s(e){var n,t,r,a;return((t=(n=e==null?void 0:e.layers)==null?void 0:n.length)!=null?t:0)+((a=(r=e==null?void 0:e.tables)==null?void 0:r.length)!=null?a:0)}function j(e){return e.type!=="stream"&&"layerId"in e}const x=Object.freeze(Object.defineProperty({__proto__:null,getFirstLayerOrTableId:m,getNumLayersAndTables:s,load:w,preprocessFSItemData:f},Symbol.toStringTag,{value:"Module"}));export{f as d,m as f,s as h,x as l,y as n};
