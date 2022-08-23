import{F as a,H as n,by as S,A as X,eQ as re,eH as ie,k as se,I as k,L as Z,a as ae,ao as le,bD as oe,bv as ne,eB as ye,s as E,fW as y,ab as pe,r as A,ca as de,fY as ue,bU as ce,f as L,fZ as R,fL as fe,j as J,aZ as he,ey as P,eE as be,w as W,_ as C,y as _,fU as ge,f_ as me,eo as U,b8 as Se,f$ as Ie,$ as M,f7 as ve,bm as w,eI as we,fa as Ee,eG as Le,K as G,es as K,bI as Oe,fd as xe,fD as V,P as De,t as z,aM as _e,dt as Te,g0 as Pe}from"./index.a113d2e4.js";import{r as Fe}from"./Version.e1beddfd.js";import{p as Ve}from"./CollectionFlattener.0988f486.js";const Ue=e=>{let t=class extends e{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=void 0}readCapabilities(r,i){var q,Q;const s=i.capabilities&&i.capabilities.split(",").map(te=>te.toLowerCase().trim());if(!s)return{operations:{supportsExportMap:!1,supportsExportTiles:!1,supportsIdentify:!1,supportsQuery:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};const o=this.type,p=s.includes("data"),u=s.includes("query"),c=s.includes("map"),I=!!i.exportTilesAllowed,b=s.includes("tilemap"),m=o!=="tile"&&!!i.supportsDynamicLayers,g=o!=="tile"&&(!i.tileInfo||m),O=o!=="tile"&&(!i.tileInfo||m),d=o!=="tile",f=i.cimVersion&&Fe.parse(i.cimVersion),x=(q=f==null?void 0:f.since(1,4))!=null?q:!1,D=(Q=f==null?void 0:f.since(2,0))!=null?Q:!1;return{operations:{supportsExportMap:c,supportsExportTiles:I,supportsIdentify:u,supportsQuery:p,supportsTileMap:b},exportMap:c?{supportsArcadeExpressionForLabeling:x,supportsSublayersChanges:d,supportsDynamicLayers:m,supportsSublayerVisibility:g,supportsSublayerDefinitionExpression:O,supportsCIMSymbols:D}:null,exportTiles:I?{maxExportTilesCount:+i.maxExportTilesCount}:null}}readVersion(r,i){let s=i.currentVersion;return s||(s=i.hasOwnProperty("capabilities")||i.hasOwnProperty("tables")?10:i.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),s}async fetchSublayerInfo(r,i){return await this.fetchAllLayersAndTables(i),this._allLayersAndTablesMap.get(r)}async fetchAllLayersAndTables(r){await this.load(r),this._allLayersAndTablesPromise||(this._allLayersAndTablesPromise=Z(ae(this.url).path+"/layers",{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey}}).then(s=>{this._allLayersAndTablesMap=new Map;for(const o of s.data.layers)this._allLayersAndTablesMap.set(o.id,o);return{result:s.data}},s=>({error:s})));const i=await this._allLayersAndTablesPromise;if(le(r),"result"in i)return i.result;throw i.error}};return a([n({readOnly:!0})],t.prototype,"capabilities",void 0),a([S("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],t.prototype,"readCapabilities",null),a([n({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),a([n({type:X})],t.prototype,"fullExtent",void 0),a([n(re)],t.prototype,"id",void 0),a([n({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],t.prototype,"legendEnabled",void 0),a([n(ie)],t.prototype,"popupEnabled",void 0),a([n({type:se})],t.prototype,"spatialReference",void 0),a([n({readOnly:!0})],t.prototype,"version",void 0),a([S("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],t.prototype,"readVersion",null),t=a([k("esri.layers.mixins.ArcGISMapService")],t),t};var F;function j(e){return e&&e.type==="esriSMS"}function $(e,t,r){var s;const i=this.originIdOf(t)>=V(r.origin);return{ignoreOrigin:!0,allowNull:i,enabled:!!r&&((s=r.layer)==null?void 0:s.type)==="map-image"&&(r.writeSublayerStructure||i)}}function H(e,t,r){var i;return{enabled:!!r&&((i=r.layer)==null?void 0:i.type)==="tile"&&this._isOverridden(t)}}function h(e,t,r){return{ignoreOrigin:!0,enabled:r&&r.writeSublayerStructure||!1}}function T(e,t,r){return{ignoreOrigin:!0,enabled:!!r&&(r.writeSublayerStructure||this.originIdOf(t)>=V(r.origin))}}let Ae=0;const v=new Set;v.add("layer"),v.add("parent"),v.add("loaded"),v.add("loadStatus"),v.add("loadError"),v.add("loadWarnings");let l=F=class extends oe(ne(ye(De))){constructor(e){super(e),this.capabilities=void 0,this.fields=null,this.fullExtent=null,this.geometryType=null,this.globalIdField=null,this.legendEnabled=!0,this.objectIdField=null,this.popupEnabled=!0,this.popupTemplate=null,this.sourceJSON=null,this.title=null,this.typeIdField=null,this.types=null}async load(e){return this.addResolvingPromise((async()=>{var r,i;if(!this.layer&&!this.url)throw new E("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:this});let t=null;if(!this.layer||this.originIdOf("url")>y.SERVICE||((r=this.source)==null?void 0:r.type)==="data-layer")t=(await Z(this.url,{responseType:"json",query:{f:"json"},...e})).data;else{let s=this.id;((i=this.source)==null?void 0:i.type)==="map-layer"&&(s=this.source.mapLayerId),t=await this.layer.fetchSublayerInfo(s,e)}t&&(this.sourceJSON=t,this.read({layerDefinition:t},{origin:"service"}))})()),this}readCapabilities(e,t){const r=(e=(t=t.layerDefinition||t).capabilities||e)?e.toLowerCase().split(",").map(o=>o.trim()):[],i=this.url?pe(this.url):null,s=r.includes(A(i)&&i.serverType==="MapServer"?"data":"query");return{exportMap:{supportsModification:!!t.canModifyLayer},operations:{supportsQuery:s}}}set definitionExpression(e){this._setAndNotifyLayer("definitionExpression",e)}get fieldsIndex(){return new de(this.fields||[])}set floorInfo(e){this._setAndNotifyLayer("floorInfo",e)}readGlobalIdFieldFromService(e,t){if((t=t.layerDefinition||t).globalIdField)return t.globalIdField;if(t.fields){for(const r of t.fields)if(r.type==="esriFieldTypeGlobalID")return r.name}}get id(){const e=this._get("id");return e!=null?e:Ae++}set id(e){this._get("id")!==e&&(this.get("layer.capabilities.exportMap.supportsDynamicLayers")!==!1?this._set("id",e):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))}set labelingInfo(e){this._setAndNotifyLayer("labelingInfo",e)}writeLabelingInfo(e,t,r,i){e&&e.length&&(t.layerDefinition={drawingInfo:{labelingInfo:e.map(s=>s.write({},i))}})}set labelsVisible(e){this._setAndNotifyLayer("labelsVisible",e)}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(t=>t.layer=e)}set listMode(e){this._set("listMode",e)}set minScale(e){this._setAndNotifyLayer("minScale",e)}readMinScale(e,t){return t.minScale||t.layerDefinition&&t.layerDefinition.minScale||0}set maxScale(e){this._setAndNotifyLayer("maxScale",e)}readMaxScale(e,t){return t.maxScale||t.layerDefinition&&t.layerDefinition.maxScale||0}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}readObjectIdFieldFromService(e,t){if((t=t.layerDefinition||t).objectIdField)return t.objectIdField;if(t.fields){for(const r of t.fields)if(r.type==="esriFieldTypeOID")return r.name}}set opacity(e){this._setAndNotifyLayer("opacity",e)}readOpacity(e,t){const r=t.layerDefinition;return 1-.01*(r.transparency!=null?r.transparency:r.drawingInfo.transparency)}writeOpacity(e,t,r,i){t.layerDefinition={drawingInfo:{transparency:100-100*e}}}writeParent(e,t){this.parent&&this.parent!==this.layer?t.parentLayerId=ue(this.parent.id):t.parentLayerId=-1}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){if(e){for(const t of e.getSymbols())if(ce(t)){L.getLogger(this.declaredClass).warn("Sublayer renderer should use 2D symbols");break}}this._setAndNotifyLayer("renderer",e)}get source(){return this._get("source")||new R({mapLayerId:this.id})}set source(e){this._setAndNotifyLayer("source",e)}set sublayers(e){this._handleSublayersChange(e,this._get("sublayers")),this._set("sublayers",e)}castSublayers(e){return fe(J.ofType(F),e)}writeSublayers(e,t,r){this.get("sublayers.length")&&(t[r]=this.sublayers.map(i=>i.id).toArray().reverse())}readTypeIdField(e,t){let r=(t=t.layerDefinition||t).typeIdField;if(r&&t.fields){r=r.toLowerCase();const i=t.fields.find(s=>s.name.toLowerCase()===r);i&&(r=i.name)}return null}get url(){var i,s;const e=(s=(i=this.layer)==null?void 0:i.parsedUrl)!=null?s:this._lastParsedUrl,t=this.source;if(!e)return null;if(this._lastParsedUrl=e,(t==null?void 0:t.type)==="map-layer")return`${e.path}/${t.mapLayerId}`;const r={layer:JSON.stringify({source:this.source})};return`${e.path}/dynamicLayer?${he(r)}`}set url(e){this._overrideIfSome("url",e)}set visible(e){this._setAndNotifyLayer("visible",e)}writeVisible(e,t,r,i){t[r]=this.getAtOrigin("defaultVisibility","service")||e}clone(){const{store:e}=P(this),t=new F;return P(t).store=e.clone(v),this.commitProperty("url"),t._lastParsedUrl=this._lastParsedUrl,t}createPopupTemplate(e){return be(this,e)}createQuery(){return new W({returnGeometry:!0,where:this.definitionExpression||"1=1"})}async createFeatureLayer(){var r,i;if(this.hasOwnProperty("sublayers"))return null;const e=(r=this.layer)==null?void 0:r.parsedUrl,t=new(await C(()=>import("./index.a113d2e4.js").then(s=>s.hb),["assets/index.a113d2e4.js","assets/index.6fd87b6d.css"])).default({url:e.path});return e&&this.source&&(this.source.type==="map-layer"?t.layerId=this.source.mapLayerId:t.dynamicDataSource=this.source),this.layer.refreshInterval!=null&&(t.refreshInterval=this.layer.refreshInterval),this.definitionExpression&&(t.definitionExpression=this.definitionExpression),this.floorInfo&&(t.floorInfo=_(this.floorInfo)),this.originIdOf("labelingInfo")>y.SERVICE&&(t.labelingInfo=_(this.labelingInfo)),this.originIdOf("labelsVisible")>y.DEFAULTS&&(t.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>y.DEFAULTS&&(t.legendEnabled=this.legendEnabled),this.originIdOf("visible")>y.DEFAULTS&&(t.visible=this.visible),this.originIdOf("minScale")>y.DEFAULTS&&(t.minScale=this.minScale),this.originIdOf("maxScale")>y.DEFAULTS&&(t.maxScale=this.maxScale),this.originIdOf("opacity")>y.DEFAULTS&&(t.opacity=this.opacity),this.originIdOf("popupTemplate")>y.DEFAULTS&&(t.popupTemplate=_(this.popupTemplate)),this.originIdOf("renderer")>y.SERVICE&&(t.renderer=_(this.renderer)),((i=this.source)==null?void 0:i.type)==="data-layer"&&(t.dynamicDataSource=this.source.clone()),this.originIdOf("title")>y.DEFAULTS&&(t.title=this.title),this.layer.type==="map-image"&&this.layer.originIdOf("customParameters")>y.DEFAULTS&&(t.customParameters=this.layer.customParameters),this.layer.type==="tile"&&this.layer.originIdOf("customParameters")>y.DEFAULTS&&(t.customParameters=this.layer.customParameters),t}getField(e){return this.fieldsIndex.get(e)}getFeatureType(e){const{typeIdField:t,types:r}=this;if(!t||!e)return null;const i=e.attributes?e.attributes[t]:void 0;if(i==null)return null;let s=null;return r.some(o=>{const{id:p}=o;return p!=null&&(p.toString()===i.toString()&&(s=o),!!s)}),s}getFieldDomain(e,t){const r=t&&t.feature,i=this.getFeatureType(r);if(i){const s=i.domains&&i.domains[e];if(s&&s.type!=="inherited")return s}return this._getLayerDomain(e)}async queryFeatures(e=this.createQuery(),t){var p,u,c,I,b,m;if(await this.load(),!((u=(p=this.capabilities)==null?void 0:p.operations)!=null&&u.supportsQuery))throw new E("Sublayer.queryFeatures","this layer doesn't support queries.");const[{executeQuery:r},{default:i}]=await Promise.all([C(()=>import("./query.68948bee.js").then(g=>g.q),["assets/query.68948bee.js","assets/index.a113d2e4.js","assets/index.6fd87b6d.css","assets/normalizeUtils.0f2a534b.js","assets/pbfQueryUtils.49c3d5e8.js","assets/pbf.f9a21435.js","assets/OptimizedGeometry.fcc3a6dc.js","assets/OptimizedFeatureSet.0c30c73c.js"]),C(()=>import("./index.a113d2e4.js").then(g=>g.ha),["assets/index.a113d2e4.js","assets/index.6fd87b6d.css"])]),s=await r(this.url,W.from(e),(I=(c=this.layer)==null?void 0:c.spatialReference)!=null?I:null,{...t,query:{...(b=this.layer)==null?void 0:b.customParameters,token:(m=this.layer)==null?void 0:m.apiKey}}),o=i.fromJSON(s.data);if(o!=null&&o.features)for(const g of o.features)g.sourceLayer=this;return o}toExportImageJSON(e){var o;const t={id:this.id,source:((o=this.source)==null?void 0:o.toJSON())||{mapLayerId:this.id,type:"mapLayer"}},r=ge(e,this.definitionExpression);A(r)&&(t.definitionExpression=r);const i=["renderer","labelingInfo","opacity","labelsVisible"].reduce((p,u)=>(p[u]=this.originIdOf(u),p),{});if(Object.keys(i).some(p=>i[p]>y.SERVICE)){const p=t.drawingInfo={};if(i.renderer>y.SERVICE&&(p.renderer=this.renderer?this.renderer.toJSON():null),i.labelsVisible>y.SERVICE&&(p.showLabels=this.labelsVisible),this.labelsVisible&&i.labelingInfo>y.SERVICE){!this.loaded&&this.labelingInfo.some(c=>!c.labelPlacement)&&L.getLogger(this.declaredClass).warnOnce(`A Sublayer (title: ${this.title}, id: ${this.id}) has an undefined 'labelPlacement' and so labels cannot be displayed. Either define a valid 'labelPlacement' or call Sublayer.load() to use a default value based on geometry type.`,{sublayer:this});let u=this.labelingInfo;A(this.geometryType)&&(u=me(this.labelingInfo,U.toJSON(this.geometryType))),p.labelingInfo=u.filter(c=>c.labelPlacement).map(c=>c.toJSON({origin:"service",layer:this.layer})),p.showLabels=!0}i.opacity>y.SERVICE&&(p.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(p.renderer)}return t}_assignDefaultSymbolColors(e){this._forEachSimpleMarkerSymbols(e,t=>{t.color||t.style!=="esriSMSX"&&t.style!=="esriSMSCross"||(t.outline&&t.outline.color?t.color=t.outline.color:t.color=[0,0,0,0])})}_forEachSimpleMarkerSymbols(e,t){if(e){const r="uniqueValueInfos"in e?e.uniqueValueInfos:"classBreakInfos"in e?e.classBreakInfos:[];for(const i of r)j(i.symbol)&&t(i.symbol);"symbol"in e&&j(e.symbol)&&t(e.symbol),"defaultSymbol"in e&&j(e.defaultSymbol)&&t(e.defaultSymbol)}}_setAndNotifyLayer(e,t){const r=this.layer,i=this._get(e);let s,o;switch(e){case"definitionExpression":case"floorInfo":s="supportsSublayerDefinitionExpression";case"minScale":case"maxScale":case"visible":s="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":s="supportsDynamicLayers",o="supportsModification"}const p=P(this).getDefaultOrigin();if(p!=="service"){if(s&&this.get(`layer.capabilities.exportMap.${s}`)===!1)return void this._logLockedError(e,`capability not available 'layer.capabilities.exportMap.${s}'`);if(o&&this.get(`capabilities.exportMap.${o}`)===!1)return void this._logLockedError(e,`capability not available 'capabilities.exportMap.${o}'`)}e!=="source"||this.loadStatus==="not-loaded"?(this._set(e,t),p!=="service"&&i!==t&&r&&r.emit&&r.emit("sublayer-update",{propertyName:e,target:this})):this._logLockedError(e,"'source' can't be changed after calling sublayer.load()")}_handleSublayersChange(e,t){t&&(t.forEach(r=>{r.parent=null,r.layer=null}),this.handles.removeAll()),e&&(e.forEach(r=>{r.parent=this,r.layer=this.layer}),this.handles.add([e.on("after-add",({item:r})=>{r.parent=this,r.layer=this.layer}),e.on("after-remove",({item:r})=>{r.parent=null,r.layer=null}),e.on("before-changes",r=>{const i=this.get("layer.capabilities.exportMap.supportsSublayersChanges");i==null||i||(L.getLogger(this.declaredClass).error(new E("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),r.preventDefault())})]))}_logLockedError(e,t){L.getLogger(this.declaredClass).error(new E("sublayer:locked",`Property '${String(e)}' can't be changed on Sublayer from the layer '${this.layer.id}'`,{reason:t,sublayer:this,layer:this.layer}))}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};l.test={isMapImageLayerOverridePolicy:e=>e===h||e===$,isTileImageLayerOverridePolicy:e=>e===H},a([n({readOnly:!0})],l.prototype,"capabilities",void 0),a([S("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],l.prototype,"readCapabilities",null),a([n({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{allowNull:!0,overridePolicy:$}}})],l.prototype,"definitionExpression",null),a([n({type:[Se],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],l.prototype,"fields",void 0),a([n({readOnly:!0})],l.prototype,"fieldsIndex",null),a([n({type:Ie,value:null,json:{name:"layerDefinition.floorInfo",read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo",overridePolicy:$},origins:{"web-scene":{read:!1,write:!1}}}})],l.prototype,"floorInfo",null),a([n({type:X,json:{read:{source:"layerDefinition.extent"}}})],l.prototype,"fullExtent",void 0),a([n({type:U.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:U.read}}}}})],l.prototype,"geometryType",void 0),a([n({type:String})],l.prototype,"globalIdField",void 0),a([S("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],l.prototype,"readGlobalIdFieldFromService",null),a([n({type:M,json:{write:{ignoreOrigin:!0}}})],l.prototype,"id",null),a([n({value:null,type:[ve],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:h}}})],l.prototype,"labelingInfo",null),a([w("labelingInfo")],l.prototype,"writeLabelingInfo",null),a([n({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:h}}})],l.prototype,"labelsVisible",null),a([n({value:null})],l.prototype,"layer",null),a([n({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:T}}})],l.prototype,"legendEnabled",void 0),a([n({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],l.prototype,"listMode",null),a([n({type:Number,value:0,json:{write:{overridePolicy:h}}})],l.prototype,"minScale",null),a([S("minScale",["minScale","layerDefinition.minScale"])],l.prototype,"readMinScale",null),a([n({type:Number,value:0,json:{write:{overridePolicy:h}}})],l.prototype,"maxScale",null),a([S("maxScale",["maxScale","layerDefinition.maxScale"])],l.prototype,"readMaxScale",null),a([n({readOnly:!0})],l.prototype,"effectiveScaleRange",null),a([n({type:String})],l.prototype,"objectIdField",void 0),a([S("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],l.prototype,"readObjectIdFieldFromService",null),a([n({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:h}}})],l.prototype,"opacity",null),a([S("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],l.prototype,"readOpacity",null),a([w("opacity")],l.prototype,"writeOpacity",null),a([n({json:{type:M,write:{target:"parentLayerId",writerEnsuresNonNull:!0,overridePolicy:h}}})],l.prototype,"parent",void 0),a([w("parent")],l.prototype,"writeParent",null),a([n({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(e,t)=>!t.disablePopup},write:{target:"disablePopup",overridePolicy:T,writer(e,t,r){t[r]=!e}}}})],l.prototype,"popupEnabled",void 0),a([n({type:we,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:T}}})],l.prototype,"popupTemplate",void 0),a([n({readOnly:!0})],l.prototype,"defaultPopupTemplate",null),a([n({types:Ee,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:h},origins:{"web-scene":{types:Le,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:h}}}}})],l.prototype,"renderer",null),a([n({types:{key:"type",base:null,typeMap:{"data-layer":G,"map-layer":R}},cast(e){if(e){if("mapLayerId"in e)return K(R,e);if("dataSource"in e)return K(G,e)}return e},json:{name:"layerDefinition.source",write:{overridePolicy:h}}})],l.prototype,"source",null),a([n()],l.prototype,"sourceJSON",void 0),a([n({value:null,json:{type:[M],write:{target:"subLayerIds",allowNull:!0,overridePolicy:h}}})],l.prototype,"sublayers",null),a([Oe("sublayers")],l.prototype,"castSublayers",null),a([w("sublayers")],l.prototype,"writeSublayers",null),a([n({type:String,json:{name:"name",write:{overridePolicy:T}}})],l.prototype,"title",void 0),a([n({type:String})],l.prototype,"typeIdField",void 0),a([S("typeIdField",["layerDefinition.typeIdField"])],l.prototype,"readTypeIdField",null),a([n({type:[xe],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],l.prototype,"types",void 0),a([n({type:String,json:{read:{source:"layerUrl"},write:{target:"layerUrl",overridePolicy:H}}})],l.prototype,"url",null),a([n({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:h}}})],l.prototype,"visible",null),a([w("visible")],l.prototype,"writeVisible",null),l=F=a([k("esri.layers.support.Sublayer")],l);const B=l;function ke(e,t,r){return t.flatten(({sublayers:s})=>s).length!==e.length?!0:!!e.some(s=>s.originIdOf("minScale")>r||s.originIdOf("maxScale")>r||s.originIdOf("renderer")>r||s.originIdOf("labelingInfo")>r||s.originIdOf("opacity")>r||s.originIdOf("labelsVisible")>r||s.originIdOf("source")>r)||!Y(e,t)}function Je(e,t,r){return!!e.some(i=>{const s=i.source;return!(!s||s.type==="map-layer"&&s.mapLayerId===i.id&&(z(s.gdbVersion)||s.gdbVersion===r))||i.originIdOf("renderer")>y.SERVICE||i.originIdOf("labelingInfo")>y.SERVICE||i.originIdOf("opacity")>y.SERVICE||i.originIdOf("labelsVisible")>y.SERVICE})||!Y(e,t)}function Y(e,t){if(!e||!e.length||z(t))return!0;const r=t.slice().reverse().flatten(({sublayers:o})=>o&&o.toArray().reverse()).map(o=>o.id).toArray();if(e.length>r.length)return!1;let i=0;const s=r.length;for(const{id:o}of e){for(;i<s&&r[i]!==o;)i++;if(i>=s)return!1}return!0}function Ce(e){return!!e&&e.some(t=>t.minScale!=null||t.layerDefinition&&t.layerDefinition.minScale!=null)}const Me=L.getLogger("esri.layers.TileLayer");function je(e,t){const r=[],i={};return e&&e.forEach(s=>{const o=new B;if(o.read(s,t),i[o.id]=o,s.parentLayerId!=null&&s.parentLayerId!==-1){const p=i[s.parentLayerId];p.sublayers||(p.sublayers=[]),p.sublayers.unshift(o)}else r.unshift(o)}),r}const N=J.ofType(B);function ee(e,t){e&&e.forEach(r=>{t(r),r.sublayers&&r.sublayers.length&&ee(r.sublayers,t)})}const Be=e=>{let t=class extends e{constructor(...r){super(...r),this.allSublayers=new Ve({getCollections:()=>[this.sublayers],getChildrenFunction:i=>i.sublayers}),this.sublayersSourceJSON={[y.SERVICE]:{},[y.PORTAL_ITEM]:{},[y.WEB_SCENE]:{},[y.WEB_MAP]:{}},this.addHandles(_e(()=>this.sublayers,(i,s)=>this._handleSublayersChange(i,s),Te))}readSublayers(r,i){if(!i||!r)return;const{sublayersSourceJSON:s}=this,o=V(i.origin);if(o<y.SERVICE||(s[o]={context:i,visibleLayers:r.visibleLayers||s[o].visibleLayers,layers:r.layers||s[o].layers},o>y.SERVICE))return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:p,origin:u}=this.createSublayersForOrigin("web-document"),c=P(this);c.setDefaultOrigin(u),this._set("sublayers",new N(p)),c.setDefaultOrigin("user")}findSublayerById(r){return this.allSublayers.find(i=>i.id===r)}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(r){const i=V(r==="web-document"?"web-map":r);let s=y.SERVICE,o=this.sublayersSourceJSON[y.SERVICE].layers,p=this.sublayersSourceJSON[y.SERVICE].context,u=null;const c=[y.PORTAL_ITEM,y.WEB_SCENE,y.WEB_MAP].filter(d=>d<=i);for(const d of c){const f=this.sublayersSourceJSON[d];Ce(f.layers)&&(s=d,o=f.layers,p=f.context,f.visibleLayers&&(u={visibleLayers:f.visibleLayers,context:f.context}))}const I=[y.PORTAL_ITEM,y.WEB_SCENE,y.WEB_MAP].filter(d=>d>s&&d<=i);let b=null;for(const d of I){const{layers:f,visibleLayers:x,context:D}=this.sublayersSourceJSON[d];f&&(b={layers:f,context:D}),x&&(u={visibleLayers:x,context:D})}const m=je(o,p),g=new Map,O=new Set;if(b)for(const d of b.layers)g.set(d.id,d);if(u)for(const d of u.visibleLayers)O.add(d);return ee(m,d=>{b&&d.read(g.get(d.id),b.context),u&&d.read({defaultVisibility:O.has(d.id)},u.context)}),{origin:Pe(s),sublayers:new N({items:m})}}read(r,i){super.read(r,i),this.readSublayers(r,i)}_handleSublayersChange(r,i){i&&(i.forEach(s=>{s.parent=null,s.layer=null}),this.handles.remove("sublayers-owner")),r&&(r.forEach(s=>{s.parent=this,s.layer=this}),this.handles.add([r.on("after-add",({item:s})=>{s.parent=this,s.layer=this}),r.on("after-remove",({item:s})=>{s.parent=null,s.layer=null})],"sublayers-owner"),this.type==="tile"&&this.handles.add(r.on("before-changes",s=>{Me.error(new E("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),s.preventDefault()}),"sublayers-owner"))}};return a([n({readOnly:!0})],t.prototype,"allSublayers",void 0),a([n({readOnly:!0,type:J.ofType(B)})],t.prototype,"serviceSublayers",void 0),a([n({value:null,type:N,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],t.prototype,"sublayers",void 0),a([n({readOnly:!0})],t.prototype,"sublayersSourceJSON",void 0),t=a([k("esri.layers.mixins.SublayersOwner")],t),t};export{Be as E,Je as i,ke as n,Ue as y,B as z};
