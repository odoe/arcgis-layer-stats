import{s as n,r as c,L as p,gU as h,gV as d,_ as b,cy as w,gW as v}from"./index.a113d2e4.js";import{e as z}from"./ItemCache.cebc0123.js";let i=a();function a(){return new z(50)}function x(){i=a()}function I(e,r){if(e.type==="icon")return y(e,r);if(e.type==="object")return l(e,r);throw new n("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function P(e,r){if(e.type==="icon")return g(e,r);if(e.type==="object")return _(e,r);throw new n("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function y(e,r){if(e.resource.href)return L(e.resource.href).then(t=>[t.width,t.height]);if(e.resource.primitive)return c(r)?[r,r]:[256,256];throw new n("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function g(e,r){return y(e,r).then(t=>{if(e.size==null)return t;const o=t[0]/t[1];return o>1?[e.size,e.size/o]:[e.size*o,e.size]})}function L(e){return p(e,{responseType:"image"}).then(r=>r.data)}function l(e,r){return j(e,r).then(t=>h(t))}async function _(e,r){const t=await l(e,r);return d(t,e)}async function j(e,r){if(!e.isPrimitive){const o=e.resource.href,s=i.get(o);if(s!==void 0)return s;const f=await b(()=>import("./objectResourceUtils.557f6cee.js").then(m=>m.o),["assets/objectResourceUtils.557f6cee.js","assets/devEnvironmentUtils.d8d0484c.js","assets/index.a113d2e4.js","assets/index.6fd87b6d.css","assets/mat3.36c7bc3d.js","assets/quatf64.74f3afdd.js","assets/mat4f64.ff2a477c.js","assets/BufferView.3064c120.js","assets/vec2.380a73f2.js","assets/vec33.f620da8e.js","assets/DefaultMaterial_COLOR_GAMMA.34eeb610.js","assets/types.44c7402c.js","assets/enums.23a7fab5.js","assets/Version.e1beddfd.js","assets/quat.4e314757.js","assets/vectorStacks.2a75747f.js","assets/byteSizeEstimations.0938bf46.js","assets/lineSegment.771986b7.js","assets/vec2f32.447fc8c4.js","assets/Util.971bd62b.js","assets/VertexAttribute.42396f25.js","assets/Texture.a0e7147f.js","assets/context-util.7c4cd7f8.js","assets/VertexElementDescriptor.1fdca6da.js","assets/symbolColorUtils.fdaaa398.js","assets/InterleavedLayout.fa84b36d.js","assets/vec3f32.1121a836.js","assets/sphere.6ddaae55.js"]),u=await f.fetch(o,{disableTextures:!0});return i.put(o,u.referenceBoundingBox),u.referenceBoundingBox}let t=null;if(e.resource&&e.resource.primitive&&(t=w(v(e.resource.primitive)),c(r)))for(let o=0;o<t.length;o++)t[o]*=r;return t?Promise.resolve(t):Promise.reject(new n("symbol:invalid-resource","The symbol does not have a valid resource"))}export{x as clearBoundingBoxCache,y as computeIconLayerResourceSize,I as computeLayerResourceSize,P as computeLayerSize,l as computeObjectLayerResourceSize};