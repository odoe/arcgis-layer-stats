import{bD as z,t as f,j as w,F as r,H as n,I as O,fQ as B,bj as W,g1 as X,g as _,fL as H,ew as E,ex as R,eF as K,bB as j,b8 as G,e_ as Q,eX as V,eZ as I,g2 as Z,bt as q,bu as U,bv as Y,k as S,a7 as ee,y as J,A as C,r as N,s as te,V as re,a0 as ie,eK as D,by as m,bm as oe}from"./index.a113d2e4.js";import{A as ae,e as ne,t as le,r as se}from"./projection.eaf00ec0.js";import{L as ye}from"./normalizeUtils.0f2a534b.js";import{n as pe}from"./objectIdUtils.83ac3f67.js";let L=class extends z(w){constructor(e){super(e),this.handles.add([this.on("before-add",t=>{f(t.item)&&t.preventDefault()}),this.on("after-add",t=>this._own(t.item)),this.on("after-remove",t=>this._release(t.item))])}get owner(){return this._get("owner")}set owner(e){e!==this._get("owner")&&(this._releaseAll(),this._set("owner",e),this._ownAll())}_ownAll(){for(const e of this.items)this._own(e)}_releaseAll(){for(const e of this.items)this._release(e)}_createNewInstance(e){return this.itemType?new(w.ofType(this.itemType.Type))(e):new w(e)}};function ue(e,t){return{type:e,cast:B,set(o){const i=W(o,this._get(t),e);i.owner=this,this._set(t,i)}}}r([n()],L.prototype,"owner",null),L=r([O("esri.core.support.OwningCollection")],L);let v=class extends L{_own(e){e.layer&&"remove"in e.layer&&e.layer!==this.owner&&e.layer.remove(e),e.layer=this.owner}_release(e){e.layer===this.owner&&(e.layer=null)}};r([X({Type:_,ensureType:H(_)})],v.prototype,"itemType",void 0),v=r([O("esri.support.GraphicsCollection")],v);let c=class extends E(R(j)){constructor(e){super(e),this.elevationInfo=null,this.graphics=new v,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,t){return super.on(e,t)}graphicChanged(e){this.emit("graphic-update",e)}};r([n({type:K})],c.prototype,"elevationInfo",void 0),r([n(ue(v,"graphics"))],c.prototype,"graphics",void 0),r([n({type:["show","hide"]})],c.prototype,"listMode",void 0),r([n()],c.prototype,"screenSizePerspectiveEnabled",void 0),r([n({readOnly:!0})],c.prototype,"type",void 0),r([n({constructOnly:!0})],c.prototype,"internal",void 0),c=r([O("esri.layers.GraphicsLayer")],c);const de=c;function T(e){return e.featureCollectionType==="markup"||e.layers.some(t=>t.layerDefinition.visibilityField!=null||!P(t))}function P({layerDefinition:e,featureSet:t}){var i;const o=(i=e.geometryType)!=null?i:t.geometryType;return M.find(l=>{var s,y,p;return o===l.geometryTypeJSON&&((p=(y=(s=e.drawingInfo)==null?void 0:s.renderer)==null?void 0:y.symbol)==null?void 0:p.type)===l.identifyingSymbol.type})}const $=new G({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),ce=new G({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let h=class extends de{constructor(e){super(e),this.visibilityMode="inherited"}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",e=>{e.item.sourceLayer=this.layer}),this.graphics.on("after-remove",e=>{e.item.sourceLayer=null})}get sublayers(){return this.graphics}};r([n({readOnly:!0})],h.prototype,"sublayers",null),r([n()],h.prototype,"layer",void 0),r([n()],h.prototype,"layerId",void 0),r([n({readOnly:!0})],h.prototype,"visibilityMode",void 0),h=r([O("esri.layers.MapNotesLayer.MapNotesSublayer")],h);const M=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:new Q().toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:new V().toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:new I().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:new I().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:new Z().toJSON()}];let a=class extends E(R(q(U(Y(j))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.listMode="hide-children",this.minScale=0,this.maxScale=0,this.spatialReference=S.WGS84,this.sublayers=new w(M.map(t=>new h({id:t.id,layerId:t.layerId,title:t.title,layer:this}))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(e,t,o){return{operations:{supportsMapNotesEditing:!T(t)&&(o==null?void 0:o.origin)!=="portal-item"}}}readFeatureCollections(e,t,o){if(!T(t))return null;const i=t.layers.map(l=>{const s=new ee;return s.read(l,o),s});return new w({items:i})}readLegacyfeatureCollectionJSON(e,t){return T(t)?J(t.featureCollection):null}readFullExtent(e,t){if(!t.layers.length||t.layers.every(i=>!i.layerDefinition.extent))return new C({xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:S.WGS84});const o=S.fromJSON(t.layers[0].layerDefinition.spatialReference);return t.layers.reduce((i,l)=>{const s=l.layerDefinition.extent;return s?C.fromJSON(s).union(i):i},new C({spatialReference:o}))}readMinScale(e,t){for(const o of t.layers)if(o.layerDefinition.minScale!=null)return o.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const o of t.layers)if(o.layerDefinition.maxScale!=null)return o.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?S.fromJSON(t.layers[0].layerDefinition.spatialReference):S.WGS84}readSublayers(e,t,o){var s;if(T(t))return null;const i=[];let l=t.layers.reduce((y,p)=>{var u;return Math.max(y,(u=p.layerDefinition.id)!=null?u:-1)},-1)+1;for(const y of t.layers){const{layerDefinition:p,featureSet:u}=y,g=(s=p.id)!=null?s:l++,d=P(y);if(N(d)){const b=new h({id:d.id,title:p.name,layerId:g,layer:this,graphics:u.features.map(({geometry:x,symbol:F,attributes:A,popupInfo:k})=>_.fromJSON({attributes:A,geometry:x,symbol:F,popupTemplate:k}))});i.push(b)}}return new w(i)}writeSublayers(e,t,o,i){var g;const{minScale:l,maxScale:s}=this;if(f(e))return;const y=e.some(d=>d.graphics.length>0);if(!this.capabilities.operations.supportsMapNotesEditing)return void(y&&((g=i==null?void 0:i.messages)==null?void 0:g.push(new te("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"))));const p=[];let u=this.spatialReference.toJSON();e:for(const d of e)for(const b of d.graphics)if(N(b.geometry)){u=b.geometry.spatialReference.toJSON();break e}for(const d of M){const b=e.find(x=>d.id===x.id);this._writeMapNoteSublayer(p,b,d,l,s,u,i)}re("featureCollection.layers",p,t)}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,t){"featureCollection"in e&&(e=J(e),Object.assign(e,e.featureCollection)),super.read(e,t)}async beforeSave(){if(f(this.sublayers))return;let e=null;const t=[];for(const i of this.sublayers)for(const l of i.graphics)if(N(l.geometry)){const s=l.geometry;e?ie(s.spatialReference,e)||(ae(s.spatialReference,e)||ne()||await le(),l.geometry=se(s,e)):e=s.spatialReference,t.push(l)}const o=await ye(t.map(i=>i.geometry));t.forEach((i,l)=>i.geometry=o[l])}_findSublayer(e){var t,o;return f(this.sublayers)?null:(o=(t=this.sublayers)==null?void 0:t.find(i=>i.id===e))!=null?o:null}_writeMapNoteSublayer(e,t,o,i,l,s,y){const p=[];if(!f(t)){for(const u of t.graphics)this._writeMapNote(p,u,o.geometryType,y);this._normalizeObjectIds(p,$),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:J(o.identifyingSymbol)}},id:t.layerId,geometryType:o.geometryTypeJSON,minScale:i,maxScale:l,objectIdField:"OBJECTID",fields:[$.toJSON(),ce.toJSON()],spatialReference:s},featureSet:{features:p,geometryType:o.geometryTypeJSON}})}}_writeMapNote(e,t,o,i){var u,g;if(f(t))return;const{geometry:l,symbol:s,popupTemplate:y}=t;if(f(l))return;if(l.type!==o)return void((u=i==null?void 0:i.messages)==null?void 0:u.push(new D("map-notes-layer:invalid-geometry-type",`Geometry "${l.type}" cannot be saved in "${o}" layer`,{graphic:t})));if(f(s))return void((g=i==null?void 0:i.messages)==null?void 0:g.push(new D("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t})));const p={attributes:{...t.attributes},geometry:l.toJSON(),symbol:s.toJSON()};N(y)&&(p.popupInfo=y.toJSON()),e.push(p)}_normalizeObjectIds(e,t){const o=t.name;let i=pe(o,e)+1;const l=new Set;for(const s of e){s.attributes||(s.attributes={});const{attributes:y}=s;(y[o]==null||l.has(y[o]))&&(y[o]=i++),l.add(y[o])}}};r([n({readOnly:!0})],a.prototype,"capabilities",void 0),r([m(["portal-item","web-map"],"capabilities",["layers"])],a.prototype,"readCapabilities",null),r([n({readOnly:!0})],a.prototype,"featureCollections",void 0),r([m(["web-map","portal-item"],"featureCollections",["layers"])],a.prototype,"readFeatureCollections",null),r([n({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],a.prototype,"featureCollectionJSON",void 0),r([m(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],a.prototype,"readLegacyfeatureCollectionJSON",null),r([n({readOnly:!0,json:{read:!0,write:{enabled:!0,ignoreOrigin:!0}}})],a.prototype,"featureCollectionType",void 0),r([n({json:{write:!1}})],a.prototype,"fullExtent",void 0),r([m(["web-map","portal-item"],"fullExtent",["layers"])],a.prototype,"readFullExtent",null),r([n({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:this.featureCollectionJSON!=null}}}}}}})],a.prototype,"legendEnabled",void 0),r([n({type:["show","hide","hide-children"]})],a.prototype,"listMode",void 0),r([n({type:Number,nonNullable:!0,json:{write:!1}})],a.prototype,"minScale",void 0),r([m(["web-map","portal-item"],"minScale",["layers"])],a.prototype,"readMinScale",null),r([n({type:Number,nonNullable:!0,json:{write:!1}})],a.prototype,"maxScale",void 0),r([m(["web-map","portal-item"],"maxScale",["layers"])],a.prototype,"readMaxScale",null),r([n({readOnly:!0})],a.prototype,"multipointLayer",null),r([n({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],a.prototype,"operationalLayerType",void 0),r([n({readOnly:!0})],a.prototype,"pointLayer",null),r([n({readOnly:!0})],a.prototype,"polygonLayer",null),r([n({readOnly:!0})],a.prototype,"polylineLayer",null),r([n({type:S})],a.prototype,"spatialReference",void 0),r([m(["web-map","portal-item"],"spatialReference",["layers"])],a.prototype,"readSpatialReference",null),r([n({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],a.prototype,"sublayers",void 0),r([m("web-map","sublayers",["layers"])],a.prototype,"readSublayers",null),r([oe("web-map","sublayers")],a.prototype,"writeSublayers",null),r([n({readOnly:!0})],a.prototype,"textLayer",null),r([n()],a.prototype,"title",void 0),r([n({readOnly:!0,json:{read:!1}})],a.prototype,"type",void 0),a=r([O("esri.layers.MapNotesLayer")],a);const be=a;export{be as default};