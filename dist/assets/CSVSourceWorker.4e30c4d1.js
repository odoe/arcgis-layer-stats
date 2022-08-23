import{s as h,c6 as $,bF as S,f as q,a as C,L as D,c7 as k,a0 as O,as as j,c8 as v,k as P,c9 as V,b6 as G,ca as Q}from"./index.a113d2e4.js";import{l as R}from"./projection.eaf00ec0.js";import{t as L}from"./json.879c9adc.js";import{s as M,t as Y}from"./OptimizedGeometry.fcc3a6dc.js";import{u as A}from"./FeatureStore.a4a9cc2f.js";import{f as U}from"./QueryEngineResult.fa1560d6.js";import{Y as Z}from"./QueryEngine.7ff5514c.js";import{i as B,o as J}from"./clientSideDefaults.d9d0eca2.js";import{a as W}from"./number.a2895165.js";import"./aaBoundingRect.afad7736.js";import"./featureConversionUtils.14a166d5.js";import"./OptimizedFeatureSet.0c30c73c.js";import"./PooledRBush.ded59dcb.js";import"./quickselect.3948ea39.js";import"./utils.6cf6dcc2.js";import"./ClassBreaksDefinition.c5ebe0f7.js";import"./ItemCache.cebc0123.js";import"./WhereClause.bca47f15.js";import"./normalizeUtils.0f2a534b.js";import"./QueryEngineCapabilities.e56964e9.js";const z=/^\s*"([\S\s]*)"\s*$/,H=/""/g,I=`
`,K=[","," ",";","|","	"];function*w(r,t,e){let i=0;for(;i<=r.length;){const n=r.indexOf(t,i),s=r.substring(i,n>-1?n:void 0);i+=s.length+t.length,e&&!s.trim()||(yield s)}}function b(r){const t=r.includes(`\r
`)?`\r
`:I;return w(r,t,!0)}function X(r,t){return w(r,t,!1)}function ee(r){const t=r.trim();let e=0,i="";for(const n of K){const s=t.split(n).length;s>e&&(e=s,i=n)}return i===""?null:i}function*x(r,t,e,i=()=>Object.create(null)){let n="",s="",d=0,a=i(),c=0;e:for(const l of r){const u=X(l,e);for(const f of u)if(n+=s+f,s="",d+=te(f),d%2==0){if(d>0){const y=z.exec(n);if(!y){a=i(),c=0,n="",d=0;continue e}a[t[c]]=y[1].replace(H,'"'),c++}else a[t[c]]=n,c++;n="",d=0}else s=e;d===0?(yield a,a=i(),c=0):s=I}}function te(r){let t=0,e=0;for(e=r.indexOf('"',e);e>=0;)t++,e=r.indexOf('"',e+1);return t}function ie(r){const t=r.map(e=>e.toLowerCase());return{longitudeFieldName:r[t.indexOf(le.find(e=>t.includes(e)))],latitudeFieldName:r[t.indexOf(oe.find(e=>t.includes(e)))]}}function ne(r,t,e,i){const n=[],s=x(r,e,t),d=[];for(const a of s){if(d.length===10)break;d.push(a)}for(const a of e)if(a===i.longitudeFieldName||a===i.latitudeFieldName)n.push({name:a,type:"esriFieldTypeDouble",alias:a});else{let c,l;switch(re(d.map(u=>u[a]))){case"integer":c="esriFieldTypeInteger";break;case"double":c="esriFieldTypeDouble";break;case"date":c="esriFieldTypeDate",l=36;break;default:c="esriFieldTypeString",l=255}n.push({name:a,type:c,alias:a,length:l})}return n}function re(r){if(!r.length)return"string";const t=/[^+-.,0-9]/;return r.map(e=>{let i=!1;if(e!==""){if(t.test(e))i=!0;else{let n=_(e);if(!isNaN(n))return/[.,]/.test(e)||!Number.isInteger(n)||n>214783647||n<-214783648?"double":"integer";if(e.includes("E")){if(n=Number(e),!isNaN(n))return"double";if(e.includes(",")){if(e=e.replace(",","."),n=Number(e),!isNaN(n))return"double";i=!0}else i=!0}else i=!0}return i?/^[-]?\d*[.,]?\d*$/.test(e)?"string":T(new Date(e),e)?"date":"string":"string"}}).reduce((e,i)=>e===void 0||e===i?i:e==="string"||i==="string"?"string":e==="double"||i==="double"?"double":void 0)}function T(r,t){if(!r||Object.prototype.toString.call(r)!=="[object Date]"||isNaN(r.getTime()))return!1;let e=!0;if(!ae&&/\d+\W*$/.test(t)){const i=t.match(/[a-zA-Z]{2,}/);if(i){let n=!1,s=0;for(;!n&&s<=i.length;)n=!se.test(i[s]),s++;e=!n}}return e}const _=function(){const r=W(),t=new RegExp("^"+r.regexp+"$"),e=new RegExp("["+r.group+"\\s\\xa0]","g"),i=r.factor;return n=>{const s=t.exec(n);if(r.factor=i,!s)return NaN;let d=s[1];if(!s[1]){if(!s[2])return NaN;d=s[2],r.factor*=-1}return d=d.replace(e,"").replace(r.decimal,"."),+d*r.factor}}(),se=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,ae=Number.isNaN(new Date("technology 10").getTime()),oe=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point-y"],le=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point-x"],ue=J("esriGeometryPoint"),de=["csv"],ce=[0,0];class fe{constructor(t,e){this.x=t,this.y=e}}class je{constructor(){this._queryEngine=null,this._snapshotFeatures=async t=>{const e=await this._fetch(t);return this._createFeatures(e)}}destroy(){var t;(t=this._queryEngine)==null||t.destroy(),this._queryEngine=null}async load(t,e={}){var d;this._loadOptions=t;const[i]=await Promise.all([this._fetch(e.signal),this._checkProjection((d=t==null?void 0:t.parsingOptions)==null?void 0:d.spatialReference)]),n=me(i,t);this._locationInfo=n.locationInfo,this._delimiter=n.delimiter,this._queryEngine=this._createQueryEngine(n);const s=await this._createFeatures(i);if(this._queryEngine.featureStore.addMany(s),n.layerDefinition.extent=this._queryEngine.fullExtent,n.layerDefinition.timeInfo){const{start:a,end:c}=this._queryEngine.timeExtent;n.layerDefinition.timeInfo.timeExtent=[a,c]}return n}async applyEdits(){throw new h("csv-layer:editing-not-supported","applyEdits() is not supported on CSVLayer")}async queryFeatures(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(t,e.signal)}async queryFeatureCount(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(t,e.signal)}async queryObjectIds(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(t,e.signal)}async queryExtent(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(t,e.signal)}async querySnapping(t,e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(t,e.signal)}async refresh(t){var e;return this._loadOptions.customParameters=t,(e=this._snapshotTask)==null||e.abort(),this._snapshotTask=$(this._snapshotFeatures),this._snapshotTask.promise.then(i=>{this._queryEngine.featureStore.clear(),i&&this._queryEngine.featureStore.addMany(i)},i=>{this._queryEngine.featureStore.clear(),S(i)||q.getLogger("esri.layers.CSVLayer").error(new h("csv-layer:refresh","An error occurred during refresh",{error:i}))}),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(t){const{url:e,customParameters:i}=this._loadOptions;if(!e)throw new h("csv-layer:invalid-source","url not defined");const n=C(e);return(await D(n.path,{query:{...n.query,...i},responseType:"text",signal:t})).data}_createQueryEngine(t){const{objectIdField:e,fields:i,extent:n,timeInfo:s}=t.layerDefinition,d=new A({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1});return new Z({fields:i,geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:s,objectIdField:e,spatialReference:n.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:d})}async _createFeatures(t){const{latitudeFieldName:e,longitudeFieldName:i}=this._locationInfo,{objectIdField:n,fieldsIndex:s,spatialReference:d}=this._queryEngine;let a=[];const c=[],l=s.fields.filter(o=>o.name!==n).map(o=>o.name);let u=0;const f=b(t);f.next();const y={};for(const o of s.fields)if(o.type!=="esriFieldTypeOID"&&o.type!=="esriFieldTypeGlobalID"){const p=k(o);p!==void 0&&(y[o.name]=p)}const E=x(f,l,this._delimiter,B(y,n));for(const o of E){const p=this._parseCoordinateValue(o[e]),g=this._parseCoordinateValue(o[i]);if(g!=null&&p!=null&&!isNaN(p)&&!isNaN(g)){o[e]=p,o[i]=g;for(const m in o)if(m!==e&&m!==i){if(s.isDateField(m)){const F=new Date(o[m]);o[m]=T(F,o[m])?F.getTime():null}else if(s.isNumericField(m)){const F=_(o[m]);isNaN(F)?o[m]=null:o[m]=F}}o[n]=u,u++,a.push(new fe(g,p)),c.push(o)}}if(!O({wkid:4326},d))if(j(d))for(const o of a)[o.x,o.y]=v(o.x,o.y,ce);else a=R(L,a,P.WGS84,d,null,null);const N=[];for(let o=0;o<a.length;o++){const{x:p,y:g}=a[o],m=c[o];m[n]=o+1,N.push(new M(new Y([],[p,g]),m,null,m[n]))}return N}_parseCoordinateValue(t){if(t==null||t==="")return null;let e=_(t);return(isNaN(e)||Math.abs(e)>181)&&(e=parseFloat(t)),e}async _checkProjection(t){try{await U(V,t)}catch{throw new h("csv-layer:projection-not-supported","Projection not supported")}}}function me(r,t){const e=t.parsingOptions||{},i={delimiter:e.delimiter,layerDefinition:null,locationInfo:{latitudeFieldName:e.latitudeField,longitudeFieldName:e.longitudeField}},n=b(r);let s=n.next().value;if(!s)throw new h("csv-layer:empty-csv","CSV is empty",{csv:r});if(s=s.trim(),!e.delimiter){const l=ee(s);if(!l)throw new h("csv-layer:invalid-delimiter","Unable to detect the delimiter from CSV");i.delimiter=l}const d=s.split(i.delimiter).filter(l=>!!l),a=i.layerDefinition={name:G(t.url,de)||"csv",drawingInfo:ue,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:e.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:e.spatialReference||{wkid:102100}}};if(!e.latitudeField||!e.longitudeField){const l=ie(d);if(!e.longitudeField&&!l.longitudeFieldName||!e.latitudeField&&!l.latitudeFieldName)throw new h("csv-layer:location-fields-not-found","Unable to identify latitude and longitude fields from the CSV file");i.locationInfo={longitudeFieldName:e.longitudeField||l.longitudeFieldName,latitudeFieldName:e.latitudeField||l.latitudeFieldName}}const c=ne(n,i.delimiter,d,i.locationInfo);if(e.fields&&e.fields.length){const l=new Map;for(const u of e.fields)l.set(u.name.toLowerCase(),u);for(const u of c){const f=l.get(u.name.toLowerCase());if(f){const y=u.name;Object.assign(u,f),u.name=y}}}if(a.fields=c,!a.fields.some(l=>l.type==="esriFieldTypeOID"&&(a.objectIdField=l.name,!0))){const l={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};a.objectIdField=l.name,a.fields.unshift(l)}if(a.timeInfo){const l=new Q(a.fields),u=a.timeInfo;if(u.startTimeField){const f=l.get(u.startTimeField);f?(u.startTimeField=f.name,f.type="esriFieldTypeDate"):u.startTimeField=null}if(u.endTimeField){const f=l.get(u.endTimeField);f?(u.endTimeField=f.name,f.type="esriFieldTypeDate"):u.endTimeField=null}if(u.trackIdField){const f=l.get(u.trackIdField);u.trackIdField=f?f.name:null}u.startTimeField||u.endTimeField||(a.timeInfo=null)}return i}export{je as default};
