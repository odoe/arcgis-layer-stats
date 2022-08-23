import{_ as L,ab as O,t as h,s as P,b5 as T,r as m,b6 as g,a as C}from"./index.a113d2e4.js";import{a as c,r as F}from"./fetchService.60f584b2.js";import{a as N}from"./lazyLayerLoader.2408f35c.js";async function R(e){var s;const l=(s=e.properties)==null?void 0:s.customParameters,r=await _(e.url,l),a={...e.properties,url:e.url};if(!r.sublayerIds)return r.layerOrTableId!=null&&(a.layerId=r.layerOrTableId,a.sourceJSON=r.sourceJSON),new r.Constructor(a);const n=new(await L(()=>import("./GroupLayer.60a17cd7.js"),["assets/GroupLayer.60a17cd7.js","assets/index.a113d2e4.js","assets/index.6fd87b6d.css","assets/CollectionFlattener.0988f486.js","assets/loadAll.c39d6245.js","assets/lazyLayerLoader.2408f35c.js","assets/writeUtils.a7b7f9cb.js","assets/layerUtils.8c5cf1f0.js"])).default({title:r.parsedUrl.title});return U(n,r,a),n}function v(e,l){return e?e.find(r=>r.id===l):null}function U(e,l,r){function a(n,s){const o={...r,layerId:n,sublayerTitleMode:"service-name"};return m(s)&&(o.sourceJSON=s),new l.Constructor(o)}l.sublayerIds.forEach(n=>{const s=a(n,v(l.sublayerInfos,n));e.add(s)}),l.tableIds.forEach(n=>{const s=a(n,v(l.tableInfos,n));e.tables.add(s)})}async function _(e,l){var I,p;let r=O(e);if(h(r)&&(r=await J(e,l)),h(r))throw new P("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:a,sublayer:n}=r;let s;const o={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(a){case"MapServer":s=n!=null?"FeatureLayer":E(e,l).then(t=>t?"TileLayer":"MapImageLayer");break;case"ImageServer":s=c(e,{customParameters:l}).then(t=>{const y=t.tileInfo&&t.tileInfo.format;return t.tileInfo?(y==null?void 0:y.toUpperCase())!=="LERC"||t.cacheType&&t.cacheType.toLowerCase()!=="elevation"?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"});break;case"SceneServer":s=c(r.url.path,{customParameters:l}).then(t=>{var y;if(t){if((t==null?void 0:t.layerType)==="Voxel")return"VoxelLayer";if((t==null?void 0:t.layers)&&Array.isArray(t.layers)&&t.layers.length>0){const b={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},S=(y=t.layers[0])==null?void 0:y.layerType;if(b[S]!=null)return b[S]}}return"SceneLayer"});break;default:s=o[a]}const u={FeatureLayer:!0,SceneLayer:!0},d=a==="FeatureServer",i={parsedUrl:r,Constructor:null,layerOrTableId:d?n:null,sublayerIds:null,tableIds:null},f=await s;if(u[f]&&n==null){const t=await V(e,a,l);d&&(i.sublayerInfos=t.layerInfos,i.tableInfos=t.tableInfos),t.layerIds.length+t.tableIds.length!==1?(i.sublayerIds=t.layerIds,i.tableIds=t.tableIds):d&&(i.layerOrTableId=(I=t.layerIds[0])!=null?I:t.tableIds[0],i.sourceJSON=(p=t.layerInfos[0])!=null?p:t.tableInfos[0])}return i.Constructor=await x(f),i}async function J(e,l){var u;const r=await c(e,{customParameters:l});let a=null,n=null;const s=r.type;if(s==="Feature Layer"||s==="Table"?(a="FeatureServer",n=r.id):s==="indexedVector"?a="VectorTileServer":r.hasOwnProperty("mapName")?a="MapServer":r.hasOwnProperty("bandCount")&&r.hasOwnProperty("pixelSizeX")?a="ImageServer":r.hasOwnProperty("maxRecordCount")&&r.hasOwnProperty("allowGeometryUpdates")?a="FeatureServer":r.hasOwnProperty("streamUrls")?a="StreamServer":w(r)?(a="SceneServer",n=r.id):r.hasOwnProperty("layers")&&w((u=r.layers)==null?void 0:u[0])&&(a="SceneServer"),!a)return null;const o=n!=null?T(e):null;return{title:m(o)&&r.name||g(e),serverType:a,sublayer:n,url:{path:m(o)?o.serviceUrl:C(e).path}}}function w(e){return(e==null?void 0:e.hasOwnProperty("store"))&&e.hasOwnProperty("id")&&typeof e.id=="number"}async function V(e,l,r){let a,n=!1;if(l==="FeatureServer"){const u=await F(e,{customParameters:r});n=!!u.layersJSON,a=u.layersJSON||u.serviceJSON}else a=await c(e,{customParameters:r});const s=a==null?void 0:a.layers,o=a==null?void 0:a.tables;return{layerIds:(s==null?void 0:s.map(u=>u.id).reverse())||[],tableIds:(o==null?void 0:o.map(u=>u.id).reverse())||[],layerInfos:n?s:[],tableInfos:n?o:[]}}async function x(e){return(0,N[e])()}async function E(e,l){return(await c(e,{customParameters:l})).tileInfo}export{R as fromUrl};
