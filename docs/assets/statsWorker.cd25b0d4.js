import{b_ as N,R as C,ak as S,ah as R,b$ as k,k as A,c0 as B,c1 as O,c2 as _}from"./index.e3323316.js";import{O as q,T as G,s as Y,m as j,c as U,V as Z,g as H,h as J,y as K,D as L,z as Q}from"./utils.8f62ec91.js";import"./ClassBreaksDefinition.c1674261.js";let I=null;function W(n,a,s){return n.x<0?n.x+=a:n.x>s&&(n.x-=a),n}function X(n,a,s,t){const i=N(s)?C(s):null,r=i?Math.round((i.valid[1]-i.valid[0])/a.scale[0]):null;return n.map(l=>{const e=new S(R(l.geometry));return q(a,e,e,e.hasZ,e.hasM),l.geometry=i?W(e,r,t[0]):e,l})}function aa(n,a=18,s,t,i,r){const l=new Float64Array(i*r);a=Math.round(B(a));let e=Number.POSITIVE_INFINITY,o=Number.NEGATIVE_INFINITY,u=0,m=0,c=0,f=0;const d=O(t,s);for(const{geometry:v,attributes:z}of n){const{x:y,y:w}=v,E=Math.max(0,y-a),M=Math.max(0,w-a),g=Math.min(r,w+a),$=Math.min(i,y+a),P=+d(z);for(let x=M;x<g;x++)for(let T=E;T<$;T++){const F=x*i+T,b=_(T-y,x-w,a),D=l[F];u=l[F]+=b*P;const V=u-D;m+=V,c+=V*V,u<e&&(e=u),u>o&&(o=u),f++}}if(!f)return{mean:0,stddev:0,min:0,max:0,mid:0,count:0};const p=(o-e)/2;return{mean:m/f,stdDev:Math.sqrt((c-m*m/f)/f),min:e,max:o,mid:p,count:f}}async function h(n,a){if(!a)return[];const s=n.field,t=n.valueExpression,i=n.normalizationType,r=n.normalizationField,l=n.normalizationTotal,e=[],o=n.viewInfoParams;let u=null,m=null;if(t){if(!I){const{arcadeUtils:d}=await k();I=d}u=I.createFunction(t),m=o&&I.getViewInfo({viewingMode:o.viewingMode,scale:o.scale,spatialReference:new A(o.spatialReference)})}const c=n.fieldInfos,f=!(a[0]&&"declaredClass"in a[0]&&a[0].declaredClass==="esri.Graphic")&&c?{fields:c}:null;return a.forEach(d=>{const p=d.attributes;let v;if(t){const z=f?{...d,layer:f}:d,y=I.createExecContext(z,m);v=I.executeFunction(u,y)}else p&&(v=p[s]);if(i&&isFinite(v)){const z=p&&parseFloat(p[r]);v=G(v,i,z,l)}e.push(v)}),e}async function ta(n){const{attribute:a,features:s}=n,{normalizationType:t,normalizationField:i,minValue:r,maxValue:l,fieldType:e}=a,o=await h({field:a.field,valueExpression:a.valueExpression,normalizationType:t,normalizationField:i,normalizationTotal:a.normalizationTotal,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},s),u=Y({normalizationType:t,normalizationField:i,minValue:r,maxValue:l}),m={value:.5,fieldType:e},c=e==="esriFieldTypeString"?j({values:o,supportsNullCount:u,percentileParams:m}):U({values:o,minValue:r,maxValue:l,useSampleStdDev:!t,supportsNullCount:u,percentileParams:m});return Z(c,e==="esriFieldTypeDate")}async function oa(n){const{attribute:a,features:s}=n,t=await h({field:a.field,valueExpression:a.valueExpression,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},s),i=H(t);return J(i,a.domain,a.returnAllCodedValues)}async function la(n){const{attribute:a,features:s}=n,{field:t,normalizationType:i,normalizationField:r,normalizationTotal:l,classificationMethod:e}=a,o=await h({field:t,valueExpression:a.valueExpression,normalizationType:i,normalizationField:r,normalizationTotal:l,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},s),u=K(o,{field:t,normalizationType:i,normalizationField:r,normalizationTotal:l,classificationMethod:e,standardDeviationInterval:a.standardDeviationInterval,numClasses:a.numClasses,minValue:a.minValue,maxValue:a.maxValue});return L(u,e)}async function sa(n){const{attribute:a,features:s}=n,{field:t,normalizationType:i,normalizationField:r,normalizationTotal:l,classificationMethod:e}=a,o=await h({field:t,valueExpression:a.valueExpression,normalizationType:i,normalizationField:r,normalizationTotal:l,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},s);return Q(o,{field:t,normalizationType:i,normalizationField:r,normalizationTotal:l,classificationMethod:e,standardDeviationInterval:a.standardDeviationInterval,numBins:a.numBins,minValue:a.minValue,maxValue:a.maxValue})}async function ra(n){const{attribute:a,features:s}=n,{field:t,radius:i,fieldOffset:r,transform:l,spatialReference:e,size:o}=a,u=X(s,l,e,o),{count:m,min:c,max:f,mean:d,stdDev:p}=aa(u,i,r,t,o[0],o[1]);return{count:m,min:c,max:f,avg:d,stddev:p}}export{la as classBreaks,ra as heatmapStatistics,sa as histogram,ta as summaryStatistics,oa as uniqueValues};