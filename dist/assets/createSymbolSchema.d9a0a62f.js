import{E as h,S}from"./Pipeline.12a1a044.js";import{f as u,_ as V,A as b}from"./SymbolProcessor.d242a35d.js";import"./index.a113d2e4.js";import"./TileInfo.619d7b87.js";import"./aaBoundingRect.afad7736.js";import"./featureConversionUtils.14a166d5.js";import"./OptimizedGeometry.fcc3a6dc.js";import"./OptimizedFeatureSet.0c30c73c.js";import"./QueryEngine.7ff5514c.js";import"./normalizeUtils.0f2a534b.js";import"./QueryEngineResult.fa1560d6.js";import"./utils.6cf6dcc2.js";import"./ClassBreaksDefinition.c5ebe0f7.js";import"./ItemCache.cebc0123.js";import"./WhereClause.bca47f15.js";import"./projection.eaf00ec0.js";import"./json.879c9adc.js";import"./QueryEngineCapabilities.e56964e9.js";import"./quickselect.3948ea39.js";import"./ogcFeatureUtils.aca389cc.js";import"./geojson.83f9752c.js";import"./clientSideDefaults.d9d0eca2.js";import"./query.68948bee.js";import"./pbfQueryUtils.49c3d5e8.js";import"./pbf.f9a21435.js";import"./createConnection.7024fa38.js";import"./enums.494fcfff.js";import"./enums.23a7fab5.js";import"./Texture.a0e7147f.js";import"./context-util.7c4cd7f8.js";import"./TileKey.d613e902.js";import"./TileClipper.ea9ac48e.js";import"./Geometry.d049a63c.js";import"./vec2.380a73f2.js";import"./tileUtils.88d0f26e.js";import"./vec2f32.447fc8c4.js";import"./earcut.afc1d357.js";import"./devEnvironmentUtils.d8d0484c.js";function y(e){var r;return e.type==="line-marker"?{type:"line-marker",color:(r=e.color)==null?void 0:r.toJSON(),placement:e.placement,style:e.style}:e.constructor.fromJSON(e.toJSON()).toJSON()}function f(e){return b(e)}function ne(e,r,t){if(!e)return null;switch(e.type){case"simple-fill":case"picture-fill":return x(e,r,t);case"simple-marker":case"picture-marker":return g(e,r,t);case"simple-line":return K(e,r,t);case"text":return z(e,r,t);case"label":return d(e,r,t);case"cim":return{type:"cim",rendererKey:r.vvFlags,data:e.data,maxVVSize:r.maxVVSize};case"CIMSymbolReference":return{type:"cim",rendererKey:r.vvFlags,data:e,maxVVSize:r.maxVVSize};case"web-style":return{...y(e),type:"web-style",hash:e.hash(),rendererKey:r.vvFlags,maxVVSize:r.maxVVSize};default:throw new Error(`symbol not supported ${e.type}`)}}function d(e,r,t){const o=e.toJSON(),i=u(h.LABEL,{...r,placement:o.labelPlacement});return{materialKey:t?f(i):i,hash:e.hash(),...o,labelPlacement:o.labelPlacement}}function x(e,r,t){const o=u(h.FILL,r),i=t?f(o):o,m=e.clone(),a=m.outline,n=V(r.symbologyType);n||(m.outline=null);const s={materialKey:i,hash:m.hash(),...y(m)};if(n)return s;const p=[];if(p.push(s),a){const l=u(h.LINE,{...r,isOutline:!0}),c={materialKey:t?f(l):l,hash:a.hash(),...y(a)};p.push(c)}return{type:"composite-symbol",layers:p,hash:p.reduce((l,c)=>c.hash+l,"")}}function K(e,r,t){var p;const o=V(r.symbologyType)?S.DEFAULT:r.symbologyType,i=u(h.LINE,{...r,symbologyType:o}),m=t?f(i):i,a=e.clone(),n=a.marker;a.marker=null;const s=[];if(s.push({materialKey:m,hash:a.hash(),...y(a)}),n){const l=u(h.MARKER,r),c=t?f(l):l;n.color=(p=n.color)!=null?p:a.color,s.push({materialKey:c,hash:n.hash(),lineWidth:a.width,...y(n)})}return{type:"composite-symbol",layers:s,hash:s.reduce((l,c)=>c.hash+l,"")}}function g(e,r,t){const o=u(h.MARKER,r),i=t?f(o):o,m=y(e);return{materialKey:i,hash:e.hash(),...m,angle:e.angle,maxVVSize:r.maxVVSize}}function z(e,r,t){const o=u(h.TEXT,r),i=t?f(o):o,m=y(e);return{materialKey:i,hash:e.hash(),...m,angle:e.angle,maxVVSize:r.maxVVSize}}export{ne as createSymbolSchema};
