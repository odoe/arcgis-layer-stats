import{c8 as be,cc as Re,r as P,ai as Q,a0 as q,cd as me,as as k,s as w,t as E,O as Ae,ce as H,b as $e,cf as De,bL as Me,c9 as ae,_ as ge,cg as ne,ch as Ee,ci as Ne,cj as Ce,b$ as Ge}from"./index.a113d2e4.js";import{T as Pe,s as qe,m as re,c as oe,V as Oe,g as Ze,h as je,y as Le,D as Ue,z as Be,f as Qe,a as le,d as He}from"./utils.6cf6dcc2.js";import{e as ue}from"./ItemCache.cebc0123.js";import{WhereClause as Xe}from"./WhereClause.bca47f15.js";import{f as Ye,l as pe}from"./projection.eaf00ec0.js";import{t as ye}from"./json.879c9adc.js";import{L as Je}from"./normalizeUtils.0f2a534b.js";import{f as ke,i as X,y as Ke,G as Y,L as We,C as et,_ as tt}from"./featureConversionUtils.14a166d5.js";import{t as K}from"./OptimizedGeometry.fcc3a6dc.js";const j=[0,0];function xe(r,e){if(!e)return null;if("x"in e){const t={x:0,y:0};return[t.x,t.y]=r(e.x,e.y,j),e.z!=null&&(t.z=e.z),e.m!=null&&(t.m=e.m),t}if("xmin"in e){const t={xmin:0,ymin:0,xmax:0,ymax:0};return[t.xmin,t.ymin]=r(e.xmin,e.ymin,j),[t.xmax,t.ymax]=r(e.xmax,e.ymax,j),e.hasZ&&(t.zmin=e.zmin,t.zmax=e.zmax,t.hasZ=!0),e.hasM&&(t.mmin=e.mmin,t.mmax=e.mmax,t.hasM=!0),t}return"rings"in e?{rings:ce(e.rings,r),hasM:e.hasM,hasZ:e.hasZ}:"paths"in e?{paths:ce(e.paths,r),hasM:e.hasM,hasZ:e.hasZ}:"points"in e?{points:_e(e.points,r),hasM:e.hasM,hasZ:e.hasZ}:void 0}function ce(r,e){const t=[];for(const s of r)t.push(_e(s,e));return t}function _e(r,e){const t=[];for(const s of r){const i=e(s[0],s[1],[0,0]);t.push(i),s.length>2&&i.push(s[2]),s.length>3&&i.push(s[3])}return t}async function Fe(r,e){if(!e)return;const t=Array.isArray(r)?r.map(s=>P(s.geometry)&&s.geometry.spatialReference):[r];await Ye(t.map(s=>({source:s,dest:e})))}const Ie=xe.bind(null,be),Ve=xe.bind(null,Re);function O(r,e,t,s){if(!r||(t||(t=e,e=r.spatialReference),!Q(e)||!Q(t)||q(e,t)))return r;if(me(e,t)){const i=k(t)?Ie(r):Ve(r);return i.spatialReference=t,i}return pe(ye,[r],e,t,null,s)[0]}class st{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(e,t,s){if(!e||!e.length||!t||!s||q(t,s))return e;const i={geometries:e,inSpatialReference:t,outSpatialReference:s,resolve:null};return this._jobs.push(i),new Promise(a=>{i.resolve=a,this._timer===null&&(this._timer=setTimeout(this._process,10))})}_process(){this._timer=null;const e=this._jobs.shift();if(!e)return;const{geometries:t,inSpatialReference:s,outSpatialReference:i,resolve:a}=e;me(s,i)?k(i)?a(t.map(Ie)):a(t.map(Ve)):a(pe(ye,t,s,i,null,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}}const it=new st;function Tt(r,e,t){return it.push(r,e,t)}class at{constructor(e,t){this._cache=new ue(e),this._invalidCache=new ue(t)}get(e,t){const s=`${t.uid}:${e}`,i=this._cache.get(s);if(i)return i;if(this._invalidCache.get(s)!==void 0)return null;try{const a=Xe.create(e,t);return this._cache.put(s,a),a}catch{return this._invalidCache.put(s,null),null}}}const W=new at(50,500),z="feature-store:unsupported-query",Se=" as ",nt=new Set(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeDate"]);function vt(r,e){if(!e)return!0;const t=W.get(e,r);if(!t)throw new w(z,"invalid SQL expression",{where:e});if(!t.isStandardized)throw new w(z,"where clause is not standard",{where:e});return ee(r,t.fieldNames,"where clause contains missing fields"),!0}function wt(r,e,t){if(!e)return!0;const s=W.get(e,r);if(!s)throw new w(z,"invalid SQL expression",{having:e});if(!s.isAggregate)throw new w(z,"having does not contain a valid aggregate function",{having:e});const i=s.fieldNames;if(ee(r,i,"having contains missing fields"),!s.getExpressions().every(a=>{const{aggregateType:n,field:o}=a,l=r.has(o)&&r.get(o).name;return t.some(u=>{const{onStatisticField:c,statisticType:h}=u;return(r.has(c)&&r.get(c).name)===l&&h.toLowerCase().trim()===n})}))throw new w(z,"expressions in having should also exist in outStatistics",{having:e});return!0}function M(r,e){return r?W.get(r,e):null}function ee(r,e,t,s=!0){const i=[];for(const a of e)if(a!=="*"&&!r.has(a))if(s){const n=Te(a);try{const o=M(n,r);if(!o)throw new w(z,"invalid SQL expression",{where:n});if(!o.isStandardized)throw new w(z,"expression is not standard",{clause:o});ee(r,o.fieldNames,"expression contains missing fields")}catch(o){const l=o&&o.details;if(l&&(l.clause||l.where))throw o;l&&l.missingFields?i.push(...l.missingFields):i.push(a)}}else i.push(a);if(i.length)throw new w(z,t,{missingFields:i})}function Te(r){return r.split(Se)[0]}function rt(r){return r.split(Se)[1]}function zt(r,e){const t=e.get(r);return!!t&&!nt.has(t.type)}class G{constructor(e,t,s){this._fieldDataCache=new Map,this._returnDistinctMap=new Map,this.returnDistinctValues=e.returnDistinctValues,this.fieldsIndex=s,this.featureAdapter=t;const i=e.outFields;if(i&&!i.includes("*")){this.outFields=i;let a=0;for(const n of i){const o=Te(n),l=this.fieldsIndex.get(o),u=l?null:M(o,s),c=l?l.name:rt(n)||"FIELD_EXP_"+a++;this._fieldDataCache.set(n,{alias:c,clause:u})}}}countDistinctValues(e){return this.returnDistinctValues?(e.forEach(t=>this.getAttributes(t)),this._returnDistinctMap.size):e.length}getAttributes(e){const t=this._processAttributesForOutFields(e);return this._processAttributesForDistinctValues(t)}getFieldValue(e,t,s){const i=s?s.name:t;let a=null;return this._fieldDataCache.has(i)?a=this._fieldDataCache.get(i).clause:s||(a=M(t,this.fieldsIndex),this._fieldDataCache.set(i,{alias:i,clause:a})),s?this.featureAdapter.getAttribute(e,i):a.calculateValue(e,this.featureAdapter)}getNormalizedValue(e,t){const s=t.normalizationType,i=t.normalizationTotal;let a=this.getFieldValue(e,t.field,t.fieldInfo);if(s&&Number.isFinite(a)){const n=this.getFieldValue(e,t.normalizationField,t.normalizationFieldInfo);a=Pe(a,s,n,i)}return a}getExpressionValue(e,t,s,i){const a={attributes:this.featureAdapter.getAttributes(e),layer:{fields:this.fieldsIndex.fields}},n=i.createExecContext(a,s);return i.executeFunction(t,n)}getExpressionValues(e,t,s,i){const a={fields:this.fieldsIndex.fields};return e.map(n=>{const o={attributes:this.featureAdapter.getAttributes(n),layer:a},l=i.createExecContext(o,s);return i.executeFunction(t,l)})}validateItem(e,t){return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:M(t,this.fieldsIndex)}),this._fieldDataCache.get(t).clause.testFeature(e,this.featureAdapter)}validateItems(e,t){return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:M(t,this.fieldsIndex)}),this._fieldDataCache.get(t).clause.testSet(e,this.featureAdapter)}_processAttributesForOutFields(e){const t=this.outFields;if(!t||!t.length)return this.featureAdapter.getAttributes(e);const s={};for(const i of t){const{alias:a,clause:n}=this._fieldDataCache.get(i);s[a]=n?n.calculateValue(e,this.featureAdapter):this.featureAdapter.getAttribute(e,a)}return s}_processAttributesForDistinctValues(e){if(E(e)||!this.returnDistinctValues)return e;const t=this.outFields,s=[];if(t)for(const n of t){const{alias:o}=this._fieldDataCache.get(n);s.push(e[o])}else for(const n in e)s.push(e[n]);const i=`${(t||["*"]).join(",")}=${s.join(",")}`;let a=this._returnDistinctMap.get(i)||0;return this._returnDistinctMap.set(i,++a),a>1?null:e}}const ot=new Ae({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),he=Object.freeze({}),de=new K,lt=new K,J=new K,L={esriGeometryPoint:Y,esriGeometryPolyline:We,esriGeometryPolygon:et,esriGeometryMultipoint:tt};function fe(r,e,t,s=r.hasZ,i=r.hasM){if(E(e))return null;const a=r.hasZ&&s,n=r.hasM&&i;if(t){const o=X(J,e,r.hasZ,r.hasM,"esriGeometryPoint",t,s,i);return Y(o,a,n)}return Y(e,a,n)}function U(r,e,t,s,i,a,n=e,o=t){const l=e&&n,u=t&&o,c=P(s)?"coords"in s?s:s.geometry:null;if(E(c))return null;if(i){let h=ke(lt,c,e,t,r,i,n,o);return a&&(h=X(J,h,l,u,r,a)),L[r](h,l,u)}if(a){const h=X(J,c,e,t,r,a,n,o);return L[r](h,l,u)}return Ke(de,c,e,t,n,o),L[r](de,l,u)}async function bt(r,e,t){const{outFields:s,orderByFields:i,groupByFieldsForStatistics:a,outStatistics:n}=r;if(s)for(let o=0;o<s.length;o++)s[o]=s[o].trim();if(i)for(let o=0;o<i.length;o++)i[o]=i[o].trim();if(a)for(let o=0;o<a.length;o++)a[o]=a[o].trim();if(n)for(let o=0;o<n.length;o++)n[o].onStatisticField&&(n[o].onStatisticField=n[o].onStatisticField.trim());return r.geometry&&!r.outSR&&(r.outSR=r.geometry.spatialReference),ut(r,e,t)}async function ut(r,e,t){if(!r)return null;let{where:s}=r;if(r.where=s=s&&s.trim(),(!s||/^1 *= *1$/.test(s)||e&&e===s)&&(r.where=null),!r.geometry)return r;let i=await ct(r);if(r.distance=0,r.units=null,r.spatialRel==="esriSpatialRelEnvelopeIntersects"){const{spatialReference:l}=r.geometry;i=H(i),i.spatialReference=l}r.geometry=i,await Fe(i.spatialReference,t);const a=(await Je($e(i)))[0];if(E(a))throw he;const n=a.toJSON(),o=await O(n,n.spatialReference,t);if(!o)throw he;return o.spatialReference=t,r.geometry=o,r}async function ct(r){const{geometry:e,distance:t,units:s}=r;if(t==null||"vertexAttributes"in e)return e;const i=e.spatialReference,a=s?ot.fromJSON(s):De(i),n=i&&(Me(i)||k(i))?e:await Fe(i,ae).then(()=>O(e,ae));return(await ht())(n.spatialReference,n,t,a)}async function ht(){return(await ge(()=>import("./geometryEngineJSON.3d6e7890.js"),["assets/geometryEngineJSON.3d6e7890.js","assets/geometryEngineBase.82b25ca5.js","assets/geometryEngineJSON.f9e9a36f.js","assets/json.879c9adc.js"])).geodesicBuffer}function B(r){return r&&ve in r?JSON.parse(JSON.stringify(r,dt)):r}const ve="_geVersion",dt=(r,e)=>r!==ve?e:void 0;class Rt{constructor(e,t,s){this.items=e,this.query=t,this.geometryType=s.geometryType,this.hasM=s.hasM,this.hasZ=s.hasZ,this.fieldsIndex=s.fieldsIndex,this.objectIdField=s.objectIdField,this.spatialReference=s.spatialReference,this.featureAdapter=s.featureAdapter}get size(){return this.items.length}createQueryResponseForCount(){const e=new G(this.query,this.featureAdapter,this.fieldsIndex);if(!this.query.outStatistics)return e.countDistinctValues(this.items);const{groupByFieldsForStatistics:t,having:s,outStatistics:i}=this.query;if(!(t==null?void 0:t.length))return 1;const n=new Map,o=new Map,l=new Set;for(const u of i){const{statisticType:c}=u,h=c!=="exceedslimit"?u.onStatisticField:void 0;if(!o.has(h)){const d=[];for(const f of t){const _=this._getAttributeValues(e,f,n);d.push(_)}o.set(h,this._calculateUniqueValues(d,e.returnDistinctValues))}const m=o.get(h);for(const d in m){const{data:f,items:_}=m[d],F=f.join(",");s&&!e.validateItems(_,s)||l.add(F)}}return l.size}async createQueryResponse(){let e;return this.query.outStatistics?e=this.query.outStatistics.some(t=>t.statisticType==="exceedslimit")?this._createExceedsLimitQueryResponse(this.query):await this._createStatisticsQueryResponse(this.query):e=this._createFeatureQueryResponse(this.query),this.query.returnQueryGeometry&&(Q(this.query.outSR)&&!q(this.query.geometry.spatialReference,this.query.outSR)?e.queryGeometry=B({spatialReference:this.query.outSR,...O(this.query.geometry,this.query.geometry.spatialReference,this.query.outSR)}):e.queryGeometry=B({spatialReference:this.query.outSR,...this.query.geometry})),e}createSnappingResponse(e,t){const s=this.featureAdapter,i=mt(this.hasZ,this.hasM),{x:a,y:n}=e.point,o=typeof e.distance=="number"?e.distance:e.distance.x,l=typeof e.distance=="number"?e.distance:e.distance.y,u={candidates:[]},c=this.geometryType==="esriGeometryPolygon",h=this._getPointCreator(e.point,this.spatialReference,t);for(const m of this.items){const d=s.getGeometry(m);if(E(d))continue;const{coords:f,lengths:_}=d;if(e.types&Z.EDGE){let F=0;for(let y=0;y<_.length;y++){const I=_[y];for(let x=0;x<I;x++,F+=i){const V=f[F],p=f[F+1];if(x!==I-1){const g=f[F+i],b=f[F+i+1],{x:D,y:N}=ft(a,n,V,p,g,b),S=(a-D)/o,T=(n-N)/l,R=S*S+T*T;R<=1&&u.candidates.push({type:"edge",objectId:s.getObjectId(m),distance:Math.sqrt(R),target:h(D,N),start:h(V,p),end:h(g,b)})}}}}if(e.types&Z.VERTEX){const F=c?f.length-i:f.length;for(let y=0;y<F;y+=i){const I=f[y],x=f[y+1],V=(a-I)/o,p=(n-x)/l,g=V*V+p*p;g<=1&&u.candidates.push({type:"vertex",objectId:s.getObjectId(m),distance:Math.sqrt(g),target:h(I,x)})}}}return u.candidates.sort((m,d)=>m.distance-d.distance),u}_getPointCreator(e,t,s){const i=P(s)&&!q(t,s)?a=>O(a,t,s):a=>a;return e.z!=null&&e.m!=null?(a,n)=>i({x:a,y:n,z:e.z,m:e.m}):e.z!=null?(a,n)=>i({x:a,y:n,z:e.z}):e.m!=null?(a,n)=>i({x:a,y:n,m:e.m}):(a,n)=>i({x:a,y:n})}async createSummaryStatisticsResponse(e){const{field:t,valueExpression:s,normalizationField:i,normalizationType:a,normalizationTotal:n,minValue:o,maxValue:l,scale:u}=e,c=this.fieldsIndex.isDateField(t),h=await this._getDataValues({field:t,valueExpression:s,normalizationField:i,normalizationType:a,normalizationTotal:n,scale:u}),m=qe({normalizationType:a,normalizationField:i,minValue:o,maxValue:l}),d=this.fieldsIndex.get(t),f={value:.5,fieldType:d==null?void 0:d.type},_=ne(d)?re({values:h,supportsNullCount:m,percentileParams:f}):oe({values:h,minValue:o,maxValue:l,useSampleStdDev:!a,supportsNullCount:m,percentileParams:f});return Oe(_,c)}async createUniqueValuesResponse(e){const{field:t,valueExpression:s,domain:i,returnAllCodedValues:a,scale:n}=e,o=await this._getDataValues({field:t,valueExpression:s,scale:n}),l=Ze(o);return je(l,i,a)}async createClassBreaksResponse(e){const{field:t,valueExpression:s,normalizationField:i,normalizationType:a,normalizationTotal:n,classificationMethod:o,standardDeviationInterval:l,minValue:u,maxValue:c,numClasses:h,scale:m}=e,d=await this._getDataValues({field:t,valueExpression:s,normalizationField:i,normalizationType:a,normalizationTotal:n,scale:m}),f=Le(d,{field:t,normalizationField:i,normalizationType:a,normalizationTotal:n,classificationMethod:o,standardDeviationInterval:l,minValue:u,maxValue:c,numClasses:h});return Ue(f,o)}async createHistogramResponse(e){const{field:t,valueExpression:s,normalizationField:i,normalizationType:a,normalizationTotal:n,classificationMethod:o,standardDeviationInterval:l,minValue:u,maxValue:c,numBins:h,scale:m}=e,d=await this._getDataValues({field:t,valueExpression:s,normalizationField:i,normalizationType:a,normalizationTotal:n,scale:m});return Be(d,{field:t,normalizationField:i,normalizationType:a,normalizationTotal:n,classificationMethod:o,standardDeviationInterval:l,minValue:u,maxValue:c,numBins:h})}_sortFeatures(e,t,s){if(e.length>1&&t&&t.length)for(const i of t.reverse()){const a=i.split(" "),n=a[0],o=this.fieldsIndex.get(n),l=a[1]&&a[1].toLowerCase()==="desc",u=Qe(o==null?void 0:o.type,l);e.sort((c,h)=>{const m=s(c,n,o),d=s(h,n,o);return u(m,d)})}}_createFeatureQueryResponse(e){const t=this.items,{geometryType:s,hasM:i,hasZ:a,objectIdField:n,spatialReference:o}=this,{outFields:l,outSR:u,quantizationParameters:c,resultRecordCount:h,resultOffset:m,returnZ:d,returnM:f}=e,_=h!=null&&t.length>(m||0)+h,F=l&&(l.includes("*")?[...this.fieldsIndex.fields]:l.map(y=>this.fieldsIndex.get(y)));return{exceededTransferLimit:_,features:this._createFeatures(e,t),fields:F,geometryType:s,hasM:i&&f,hasZ:a&&d,objectIdFieldName:n,spatialReference:B(u||o),transform:c&&le(c)||null}}_createFeatures(e,t){const s=new G(e,this.featureAdapter,this.fieldsIndex),{hasM:i,hasZ:a}=this,{orderByFields:n,quantizationParameters:o,returnGeometry:l,returnCentroid:u,maxAllowableOffset:c,resultOffset:h,resultRecordCount:m,returnZ:d=!1,returnM:f=!1}=e,_=a&&d,F=i&&f;let y=[],I=0;const x=[...t];if(this._sortFeatures(x,n,(p,g,b)=>s.getFieldValue(p,g,b)),l||u){const p=le(o);if(l&&!u)for(const g of x)y[I++]={attributes:s.getAttributes(g),geometry:U(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(g),c,p,_,F)};else if(!l&&u)for(const g of x)y[I++]={attributes:s.getAttributes(g),centroid:fe(this,this.featureAdapter.getCentroid(g,this),p)};else for(const g of x)y[I++]={attributes:s.getAttributes(g),centroid:fe(this,this.featureAdapter.getCentroid(g,this),p),geometry:U(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(g),c,p,_,F)}}else for(const p of x){const g=s.getAttributes(p);g&&(y[I++]={attributes:g})}const V=h||0;if(m!=null){const p=V+m;y=y.slice(V,Math.min(y.length,p))}return y}_createExceedsLimitQueryResponse(e){let t=!1,s=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY,a=Number.POSITIVE_INFINITY;for(const n of e.outStatistics)if(n.statisticType==="exceedslimit"){s=n.maxPointCount!=null?n.maxPointCount:Number.POSITIVE_INFINITY,i=n.maxRecordCount!=null?n.maxRecordCount:Number.POSITIVE_INFINITY,a=n.maxVertexCount!=null?n.maxVertexCount:Number.POSITIVE_INFINITY;break}if(this.geometryType==="esriGeometryPoint")t=this.items.length>s;else if(this.items.length>i)t=!0;else{const n=this.hasZ?this.hasM?4:3:this.hasM?3:2,o=this.featureAdapter;t=this.items.reduce((l,u)=>{const c=o.getGeometry(u);return l+(P(c)&&c.coords.length||0)},0)/n>a}return{fields:[{name:"exceedslimit",type:"esriFieldTypeInteger",alias:"exceedslimit",sqlType:"sqlTypeInteger",domain:null,defaultValue:null}],features:[{attributes:{exceedslimit:Number(t)}}]}}async _createStatisticsQueryResponse(e){const t={attributes:{}},s=[],i=new Map,a=new Map,n=new Map,o=new Map,l=new G(e,this.featureAdapter,this.fieldsIndex),u=e.outStatistics,{groupByFieldsForStatistics:c,having:h,orderByFields:m}=e,d=c&&c.length,f=!!d,_=f&&c[0],F=f&&!this.fieldsIndex.get(_);for(const I of u){const{outStatisticFieldName:x,statisticType:V}=I,p=I,g=V!=="exceedslimit"?I.onStatisticField:void 0,b=V==="percentile_disc"||V==="percentile_cont",D=V==="EnvelopeAggregate"||V==="CentroidAggregate"||V==="ConvexHullAggregate",N=f&&d===1&&(g===_||F)&&V==="count";if(f){if(!n.has(g)){const T=[];for(const R of c){const C=this._getAttributeValues(l,R,i);T.push(C)}n.set(g,this._calculateUniqueValues(T,l.returnDistinctValues))}const S=n.get(g);for(const T in S){const{count:R,data:C,items:te,itemPositions:we}=S[T],se=C.join(",");if(!h||l.validateItems(te,h)){const A=o.get(se)||{attributes:{}};if(D){A.aggregateGeometries||(A.aggregateGeometries={});const{aggregateGeometries:v,outStatisticFieldName:$}=await this._getAggregateGeometry(p,te);A.aggregateGeometries[$]=v}else{let v=null;if(N)v=R;else{const $=this._getAttributeValues(l,g,i),ie=we.map(ze=>$[ze]);v=b&&"statisticParameters"in p?this._getPercentileValue(p,ie):this._getStatisticValue(p,ie,null,l.returnDistinctValues)}A.attributes[x]=v}c.forEach((v,$)=>A.attributes[this.fieldsIndex.get(v)?v:`EXPR_${$+1}`]=C[$]),o.set(se,A)}}}else if(D){t.aggregateGeometries||(t.aggregateGeometries={});const{aggregateGeometries:S,outStatisticFieldName:T}=await this._getAggregateGeometry(p,this.items);t.aggregateGeometries[T]=S}else{const S=this._getAttributeValues(l,g,i);t.attributes[x]=b&&"statisticParameters"in p?this._getPercentileValue(p,S):this._getStatisticValue(p,S,a,l.returnDistinctValues)}s.push({name:x,alias:x,type:"esriFieldTypeDouble"})}const y=f?Array.from(o.values()):[t];return this._sortFeatures(y,m,(I,x)=>I.attributes[x]),{fields:s,features:y}}async _getAggregateGeometry(e,t){const s=await ge(()=>import("./geometryEngineJSON.3d6e7890.js"),["assets/geometryEngineJSON.3d6e7890.js","assets/geometryEngineBase.82b25ca5.js","assets/geometryEngineJSON.f9e9a36f.js","assets/json.879c9adc.js"]),{statisticType:i,outStatisticFieldName:a}=e,{featureAdapter:n,spatialReference:o,geometryType:l,hasZ:u,hasM:c}=this,h=t.map(f=>U(l,u,c,n.getGeometry(f))),m=s.convexHull(o,h,!0)[0],d={aggregateGeometries:null,outStatisticFieldName:null};if(i==="EnvelopeAggregate"){const f=m?Ee(m):H(s.union(o,h));d.aggregateGeometries={...f,spatialReference:o},d.outStatisticFieldName=a||"extent"}else if(i==="CentroidAggregate"){const f=m?Ne(m):Ce(H(s.union(o,h)));d.aggregateGeometries={x:f[0],y:f[1],spatialReference:o},d.outStatisticFieldName=a||"centroid"}else i==="ConvexHullAggregate"&&(d.aggregateGeometries=m,d.outStatisticFieldName=a||"convexHull");return d}_getStatisticValue(e,t,s,i){const{onStatisticField:a,statisticType:n}=e;let o=null;return o=s!=null&&s.has(a)?s.get(a):ne(this.fieldsIndex.get(a))?re({values:t,returnDistinct:i}):oe({values:t,minValue:null,maxValue:null,useSampleStdDev:!0}),s&&s.set(a,o),o[n==="var"?"variance":n]}_getPercentileValue(e,t){const{onStatisticField:s,statisticParameters:i,statisticType:a}=e,{value:n,orderBy:o}=i,l=this.fieldsIndex.get(s);return He(t,{value:n,orderBy:o,fieldType:l==null?void 0:l.type,isDiscrete:a==="percentile_disc"})}_getAttributeValues(e,t,s){if(s.has(t))return s.get(t);const i=this.fieldsIndex.get(t),a=this.items.map(n=>e.getFieldValue(n,t,i));return s.set(t,a),a}_getAttributeNormalizedValues(e,t){return this.items.map(s=>e.getNormalizedValue(s,{field:t.field,fieldInfo:this.fieldsIndex.get(t.field),normalizationField:t.normalizationField,normalizationFieldInfo:this.fieldsIndex.get(t.normalizationField),normalizationType:t.normalizationType,normalizationTotal:t.normalizationTotal}))}async _getAttributeExpressionValues(e,t,s){const{arcadeUtils:i}=await Ge(),a=i.createFunction(t),n=s&&i.getViewInfo(s);return e.getExpressionValues(this.items,a,n,i)}_calculateUniqueValues(e,t){const s={},i=this.items,a=i.length;for(let n=0;n<a;n++){const o=i[n],l=[];for(const c of e)l.push(c[n]);const u=l.join(",");t?s[u]==null&&(s[u]={count:1,data:l,items:[o],itemPositions:[n]}):s[u]==null?s[u]={count:1,data:l,items:[o],itemPositions:[n]}:(s[u].count++,s[u].items.push(o),s[u].itemPositions.push(n))}return s}async _getDataValues(e){const t=new G(this.query,this.featureAdapter,this.fieldsIndex),{valueExpression:s,field:i,normalizationField:a,normalizationType:n,normalizationTotal:o,scale:l}=e,u=s?{viewingMode:"map",scale:l,spatialReference:this.query.outSR||this.spatialReference}:null;return s?this._getAttributeExpressionValues(t,s,u):this._getAttributeNormalizedValues(t,{field:i,normalizationField:a,normalizationType:n,normalizationTotal:o})}}function ft(r,e,t,s,i,a){const n=i-t,o=a-s,l=n*n+o*o,u=(r-t)*n+(e-s)*o,c=Math.min(1,Math.max(0,u/l));return{x:t+n*c,y:s+o*c}}function mt(r,e){return r?e?4:3:e?3:2}var Z;(function(r){r[r.NONE=0]="NONE",r[r.EDGE=1]="EDGE",r[r.VERTEX=2]="VERTEX"})(Z||(Z={}));export{Z as E,bt as G,ut as J,Tt as M,U as _,wt as a,B as b,ee as c,he as d,zt as e,Fe as f,O as g,M as l,vt as o,Rt as v};
