import{F as m,H as v,I as C,Z as Tt,bI as te,t as A,c4 as ee,by as gt,c5 as se,y as st,O as Yt,e1 as Z,bm as dt,s as At,A as Q,r as M,ap as U,l as ne,ak as $,k as re}from"./index.a113d2e4.js";import{o as oe,c as ie,b as ae,e as ft,l as ce,i as ue,M as le}from"./dataUtils.9cbf27ac.js";import{e as Mt,t as pe,r as D,A as fe,E as k,a as G,P as kt,b as me,O as he}from"./projection.eaf00ec0.js";let nt=class extends Tt{constructor(){super(...arguments),this.raster=void 0}};m([v({json:{write:!0}})],nt.prototype,"raster",void 0),nt=m([C("esri.layers.support.rasterFunctions.AspectFunctionArguments")],nt);const ct=nt;var wt;let vt=wt=class extends ct{clone(){return new wt({raster:this.raster})}};vt=wt=m([C("esri.layers.support.rasterFunctions.AspectFunctionArguments")],vt);const ye=vt;let F=class extends Tt{constructor(){super(...arguments),this.functionArguments=null,this.readingBufferSize=0}bind(t,e=!1){for(let s=0;s<this.rasterArgumentNames.length;s++){const n=this.rasterArgumentNames[s],o=this.functionArguments[n];if(o&&typeof o=="object"&&"bind"in o&&(!o.rasterInfo||e)){const r=o.bind(t);if(!r.success)return r}}return{success:!0}}process(t){const e=this.rasterArgumentNames.map(s=>this._readRasterValue(this.functionArguments[s],t));return this.processPixels({...t,pixelBlocks:e})}getPrimaryRasters(){const t=[],e=[];return this._getPrimaryRasters(this,t,e),{rasters:t,rasterIds:e}}getSourceRasterInfos(){return this.rasterArgumentNames.map(t=>{const e=this.functionArguments[t];return e&&typeof e=="object"&&"bind"in e&&e.rasterInfo?e.rasterInfo:null}).filter(t=>t!=null)}getPrimaryRasterId(t){return t==null?void 0:t.url}_readRasterValue(t,e){if(A(t)||t==="$$"){const s=e.primaryPixelBlocks[0];return A(s)?null:s.clone()}if(typeof t=="string"){const s=e.primaryRasterIds.indexOf(t);return s===-1?null:e.primaryPixelBlocks[s]}if(typeof t=="number"){const s=e.primaryPixelBlocks[0];if(A(s))return null;const n=new Float32Array(s.width*s.height);n.fill(t);const o=s.clone();return o.pixels=o.pixels.map(()=>n),o}return t.process(e)}_getPrimaryRasters(t,e=[],s=[]){for(let n=0;n<t.sourceRasters.length;n++){const o=t.sourceRasters[n];if(typeof o!="number")if("bind"in o)this._getPrimaryRasters(o,e,s);else{const r=o,i=this.getPrimaryRasterId(r);s.includes(i)||(this.mainPrimaryRasterId===i?(e.unshift(r),s.unshift(i)):(e.push(r),s.push(i)))}}}};m([v({json:{write:!0}})],F.prototype,"functionName",void 0),m([v({json:{write:!0}})],F.prototype,"functionArguments",void 0),m([v()],F.prototype,"rasterArgumentNames",void 0),m([v({json:{write:!0}}),te(t=>t==null?void 0:t.toLowerCase())],F.prototype,"outputPixelType",void 0),m([v({json:{write:!0}})],F.prototype,"mainPrimaryRasterId",void 0),m([v()],F.prototype,"sourceRasters",void 0),m([v({json:{write:!0}})],F.prototype,"sourceRasterInfos",void 0),m([v({json:{write:!0}})],F.prototype,"rasterInfo",void 0),m([v({json:{write:!0}})],F.prototype,"readingBufferSize",void 0),F=m([C("esri.layers.support.rasterFunctions.BaseRasterFunction")],F);const ut=F;let L=class extends ut{constructor(){super(...arguments),this.functionName="Aspect",this.functionArguments=null,this.rasterArgumentNames=["raster"],this.isGCS=!1}bind(t,e=!1){const s=super.bind(t,e);if(!s.success)return s;const n=this.getSourceRasterInfos().concat(t)[0];return this.isGCS=n.spatialReference.isGeographic,this.outputPixelType=this.outputPixelType||"f32",this.sourceRasterInfos=[n],this.rasterInfo=n.clone(),this.rasterInfo.pixelType=this.outputPixelType,this.rasterInfo.statistics=null,this.rasterInfo.histograms=null,this.outputPixelType==="u8"&&(this.rasterInfo.keyProperties.DataType="processed"),{success:!0}}processPixels(t){const e=t.pixelBlocks[0];if(A(e))return null;const{extent:s}=t,n=s?{x:s.width/e.width,y:s.height/e.height}:{x:1,y:1};return oe(e,{resolution:n})}};m([v({json:{write:!0,name:"rasterFunction"}})],L.prototype,"functionName",void 0),m([v({type:ye,json:{write:!0,name:"rasterFunctionArguments"}})],L.prototype,"functionArguments",void 0),m([v()],L.prototype,"rasterArgumentNames",void 0),m([v({json:{write:!0}})],L.prototype,"isGCS",void 0),L=m([C("esri.layers.support.rasterFunctions.AspectFunction")],L);const xe=L;var Pt;let _=Pt=class extends ct{readColorRamp(t){return se(t)}clone(){var t;return new Pt({colormap:st(this.colormap),colormapName:this.colormapName,colorRamp:(t=this.colorRamp)==null?void 0:t.clone(),colorRampName:this.colorRampName})}};m([v({type:[[Number]],json:{write:!0}})],_.prototype,"colormap",void 0),m([v({type:String,json:{write:!0}})],_.prototype,"colormapName",void 0),m([v({types:ee,json:{write:!0}})],_.prototype,"colorRamp",void 0),m([gt("colorRamp")],_.prototype,"readColorRamp",null),m([v({type:String,json:{write:!0}})],_.prototype,"colorRampName",void 0),_=Pt=m([C("esri.layers.support.rasterFunctions.StretchFunctionArguments")],_);const ge=_;let W=class extends ut{constructor(){super(...arguments),this.functionName="Colormap",this.functionArguments=null,this.rasterArgumentNames=["raster"]}bind(t,e=!1){const s=super.bind(t,e);if(!s.success)return s;const n=this.getSourceRasterInfos().concat(t)[0];if(n.bandCount>1)return{success:!1,error:"colormap-function: source data must be single band"};let{colormap:o,colorRamp:r}=this.functionArguments;return o!=null&&o.length||r&&(o=ie(r,256,!0)),o!=null&&o.length?(this.outputPixelType=this.outputPixelType||"u8",this.sourceRasterInfos=[n],this.rasterInfo=n.clone(),this.rasterInfo.colormap=o,{success:!0}):{success:!1,error:"colormap-function: missing colormap argument"}}processPixels(t){return t.pixelBlocks[0]}};m([v({json:{write:!0,name:"rasterFunction"}})],W.prototype,"functionName",void 0),m([v({type:ge,json:{write:!0,name:"rasterFunctionArguments"}})],W.prototype,"functionArguments",void 0),m([v()],W.prototype,"rasterArgumentNames",void 0),m([v({json:{write:!0}})],W.prototype,"indexedColormap",void 0),W=m([C("esri.layers.support.rasterFunctions.SlopeFunction")],W);const de=W;var Rt;const we=new Yt({0:"degree",1:"percent-rise",2:"adjusted"},{useNumericKeys:!0});let X=Rt=class extends ct{constructor(){super(...arguments),this.slopeType="degree",this.zFactor=1,this.pixelSizePower=.664,this.pixelSizeFactor=.024}clone(){return new Rt({slopeType:this.slopeType,zFactor:this.zFactor,pixelSizePower:this.pixelSizePower,pixelSizeFactor:this.pixelSizeFactor,raster:this.raster})}};m([Z(we)],X.prototype,"slopeType",void 0),m([v({type:Number,json:{write:!0}})],X.prototype,"zFactor",void 0),m([v({type:Number,json:{name:"psPower",write:!0}})],X.prototype,"pixelSizePower",void 0),m([v({type:Number,json:{name:"psFactor",write:!0}})],X.prototype,"pixelSizeFactor",void 0),X=Rt=m([C("esri.layers.support.rasterFunctions.SlopeFunctionArguments")],X);const ve=X;let Y=class extends ut{constructor(){super(...arguments),this.functionName="Slope",this.functionArguments=null,this.rasterArgumentNames=["raster"],this.isGCS=!1}bind(t,e=!1){const s=super.bind(t,e);if(!s.success)return s;const n=this.getSourceRasterInfos().concat(t)[0];return this.isGCS=n.spatialReference.isGeographic,this.outputPixelType=this.outputPixelType||"f32",this.sourceRasterInfos=[n],this.rasterInfo=n.clone(),this.rasterInfo.pixelType=this.outputPixelType,this.rasterInfo.statistics=null,this.rasterInfo.histograms=null,this.outputPixelType==="u8"&&(this.rasterInfo.keyProperties.DataType="processed"),{success:!0}}processPixels(t){const e=t.pixelBlocks[0];if(A(e))return null;const{zFactor:s,slopeType:n,pixelSizePower:o,pixelSizeFactor:r}=this.functionArguments,{isGCS:i}=this,{extent:u}=t,a=u?{x:u.width/e.width,y:u.height/e.height}:{x:1,y:1};return ae(e,{zFactor:s,slopeType:n,pixelSizePower:o,pixelSizeFactor:r,isGCS:i,resolution:a})}};m([v({json:{write:!0,name:"rasterFunction"}})],Y.prototype,"functionName",void 0),m([v({type:ve,json:{write:!0,name:"rasterFunctionArguments"}})],Y.prototype,"functionArguments",void 0),m([v()],Y.prototype,"rasterArgumentNames",void 0),m([v({json:{write:!0}})],Y.prototype,"isGCS",void 0),Y=m([C("esri.layers.support.rasterFunctions.SlopeFunction")],Y);const Pe=Y;var St;const Re=new Yt({0:"none",3:"standard-deviation",4:"histogram-equalization",5:"min-max",6:"percent-clip",7:"sigmoid"},{useNumericKeys:!0});let T=St=class extends ct{constructor(){super(...arguments),this.computeGamma=!1,this.dynamicRangeAdjustment=!1,this.gamma=[],this.histograms=null,this.statistics=null,this.stretchType="none",this.useGamma=!1}writeStatistics(t,e,s){t!=null&&t.length&&(Array.isArray(t[0])||(t=t.map(n=>[n.min,n.max,n.avg,n.stddev])),e[s]=t)}clone(){return new St({stretchType:this.stretchType,outputMin:this.outputMin,outputMax:this.outputMax,useGamma:this.useGamma,computeGamma:this.computeGamma,statistics:st(this.statistics),gamma:st(this.gamma),sigmoidStrengthLevel:this.sigmoidStrengthLevel,numberOfStandardDeviations:this.numberOfStandardDeviations,minPercent:this.minPercent,maxPercent:this.maxPercent,histograms:st(this.histograms),dynamicRangeAdjustment:this.dynamicRangeAdjustment,raster:this.raster})}};m([v({type:Boolean,json:{write:!0}})],T.prototype,"computeGamma",void 0),m([v({type:Boolean,json:{name:"dra",write:!0}})],T.prototype,"dynamicRangeAdjustment",void 0),m([v({type:[Number],json:{write:!0}})],T.prototype,"gamma",void 0),m([v()],T.prototype,"histograms",void 0),m([v({type:Number,json:{write:!0}})],T.prototype,"maxPercent",void 0),m([v({type:Number,json:{write:!0}})],T.prototype,"minPercent",void 0),m([v({type:Number,json:{write:!0}})],T.prototype,"numberOfStandardDeviations",void 0),m([v({type:Number,json:{name:"max",write:!0}})],T.prototype,"outputMax",void 0),m([v({type:Number,json:{name:"min",write:!0}})],T.prototype,"outputMin",void 0),m([v({type:Number,json:{write:!0}})],T.prototype,"sigmoidStrengthLevel",void 0),m([v({json:{type:[[Number]],write:!0}})],T.prototype,"statistics",void 0),m([dt("statistics")],T.prototype,"writeStatistics",null),m([Z(Re)],T.prototype,"stretchType",void 0),m([v({type:Boolean,json:{write:!0}})],T.prototype,"useGamma",void 0),T=St=m([C("esri.layers.support.rasterFunctions.StretchFunctionArguments")],T);const Se=T;let B=class extends ut{constructor(){super(...arguments),this.functionName="Stretch",this.functionArguments=null,this.rasterArgumentNames=["raster"]}bind(t,e=!1){const s=super.bind(t,e);if(!s.success)return s;const n=this.getSourceRasterInfos().concat(t)[0],o=this.functionArguments.dynamicRangeAdjustment,r=!o&&["u8","u16","s8","s16"].includes(n.pixelType);if(this.lookup=null,this.cutOffs=null,r){const i=ft(this.functionArguments.toJSON(),{rasterInfo:n});this.lookup=ce({pixelType:n.pixelType,...i,gamma:this.functionArguments.useGamma?this.functionArguments.gamma:null})}else o||(this.cutOffs=ft(this.functionArguments.toJSON(),{rasterInfo:n}));return this.outputPixelType=this.outputPixelType||n.pixelType,this.sourceRasterInfos=[n],this.rasterInfo=n.clone(),this.rasterInfo.pixelType=this.outputPixelType,this.rasterInfo.statistics=null,this.rasterInfo.histograms=null,this.outputPixelType==="u8"&&(this.rasterInfo.keyProperties.DataType="processed"),{success:!0}}processPixels(t){const e=t.pixelBlocks[0];if(A(e))return e;const{lookup:s}=this;if(s)return ue(e,{...s,outputPixelType:this.rasterInfo.pixelType});const n=this.cutOffs||ft(this.functionArguments.toJSON(),{rasterInfo:this.sourceRasterInfos[0],pixelBlock:e}),o=this.functionArguments.useGamma?this.functionArguments.gamma:null;return le(e,{...n,gamma:o,outputPixelType:this.outputPixelType})}};m([v({json:{write:!0,name:"rasterFunction"}})],B.prototype,"functionName",void 0),m([v({type:Se,json:{write:!0,name:"rasterFunctionArguments"}})],B.prototype,"functionArguments",void 0),m([v()],B.prototype,"rasterArgumentNames",void 0),m([v({json:{write:!0}})],B.prototype,"lookup",void 0),m([v({json:{write:!0}})],B.prototype,"cutOffs",void 0),B=m([C("esri.layers.support.rasterFunctions.StretchFunction")],B);const Ne=B,q=new Map;function We(t,e){if("rasterFunction"in t)return Jt(t,e);throw new At("raster-function-helper","unsupported raster function json.")}function Jt(t,e){var c,p;const{rasterFunction:s,rasterFunctionArguments:n}=t,o=(c=t.outputPixelType)==null?void 0:c.toLowerCase();if(!q.has(s))throw new At("raster-function-helper",`unsupported raster function: ${s}`);const r=q.get(s),i=(typeof r.ctor=="function"?r.ctor:r.ctor.default).fromJSON({...t,outputPixelType:o}),{rasterArgumentNames:u}=i,a=[];for(let x=0;x<u.length;x++){const l=n[u[x]];if(l==null||typeof l=="string"&&l.startsWith("$"))a.push(e==null?void 0:e.raster);else if(typeof l=="string")e[l]&&a.push(e[l]);else{if(typeof l=="number")continue;if("rasterFunction"in l){const h=Jt(l,e);i.functionArguments[u[x]]=h,a.push(h)}}}if(e){i.sourceRasters=a;const x=(p=e.raster)==null?void 0:p.url;x&&(i.mainPrimaryRasterId=x)}return i}q.set("Aspect",{desc:"Aspect Function",ctor:xe,rasterArgumentNames:["raster"]}),q.set("Colormap",{desc:"Colormap Function",ctor:de,rasterArgumentNames:["raster"]}),q.set("Slope",{desc:"Slope Function",ctor:Pe,rasterArgumentNames:["raster"]}),q.set("Stretch",{desc:"Stretch Function",ctor:Ne,rasterArgumentNames:["raster"]});var Nt;function qt(t,e,s){return!fe(t,e,s)}function tt(t,e,s){const n=qt(t,e,s);if(n&&!Mt())throw new At("rasterprojectionhelper-project","projection engine is not loaded");return n}(function(t){t[t.None=0]="None",t[t.North=1]="North",t[t.South=2]="South",t[t.Both=3]="Both"})(Nt||(Nt={}));const zt=(t,e,s,n=0)=>{if(s[0]===1)return[0,0];let o=1,r=-1,i=1,u=-1;for(let f=0;f<t.length;f+=2)isNaN(t[f])||(o=o>t[f]?t[f]:o,r=r>t[f]?r:t[f],i=i>t[f+1]?t[f+1]:i,u=u>t[f+1]?u:t[f+1]);const{cols:a,rows:c}=e,p=(r-o)/a/s[0],x=(u-i)/c/s[1],l=2*n;let h=0,y=!1,d=[0,0];for(let f=0;f<a-3;f++){for(let R=0;R<c-3;R++){const w=f*c*2+2*R,g=(t[w]+t[w+4]+t[w+4*c]+t[w+4*c+4])/4,P=(t[w+1]+t[w+5]+t[w+4*c+1]+t[w+4*c+5])/4,S=Math.abs((g-t[w+2*c+2])/p),N=Math.abs((P-t[w+2*c+3])/x);if(S+N>h&&(h=S+N,d=[S,N]),l&&h>l){y=!0;break}}if(y)break}return d},be={3395:20037508342789244e-9,3410:17334193943686873e-9,3857:20037508342788905e-9,3975:17367530445161372e-9,4087:20037508342789244e-9,4088:20015108787169147e-9,6933:17367530445161372e-9,32662:20037508342789244e-9,53001:2001508679602057e-8,53002:1000754339801029e-8,53003:2001508679602057e-8,53004:2001508679602057e-8,53016:14152803599503474e-9,53017:17333573624304302e-9,53034:2001508679602057e-8,53079:20015114352186374e-9,53080:20015114352186374e-9,54001:20037508342789244e-9,54002:10018754171394624e-9,54003:20037508342789244e-9,54004:20037508342789244e-9,54016:14168658027268292e-9,54017:1736753044516137e-8,54034:20037508342789244e-9,54079:20037508342789244e-9,54080:20037508342789244e-9,54100:20037508342789244e-9,54101:20037508342789244e-9},ot=32,it=4,mt=it,ht=new Map,yt=new Map;async function Xe(){if(Mt())return null;await pe()}function Ye(t,e,s,n=null){const o=t.spatialReference;if(o.equals(e))return t;tt(o,e,n);const r=s.center,i=new Q({xmin:r.x-t.x/2,xmax:r.x+t.x/2,ymin:r.y-t.y/2,ymax:r.y+t.y/2,spatialReference:o}),u=D(i,e,n),a=z(e);let c;if(A(u)||M(a)&&u.width>=a){const p=U(o)/U(e);c={x:t.x*p,y:t.y*p}}else c={x:u.width,y:u.height};return c}function j(t,e=.01){return U(t)?e/U(t):0}function Et(t,e,s=null,n=!0){const o=t.spatialReference;if(o.equals(e))return t;tt(o,e,s);const r=D(t,e,s);if(!n||!r)return r;const i=at(o,!0),u=at(e,!0),a=j(o);return a&&M(i)&&M(u)&&(r.x>0&&Math.abs(t.x-i[0])<a?r.x-=u[1]-u[0]:r.x<0&&Math.abs(t.x-i[1])<a&&(r.x+=u[1]-u[0])),r}function Te(t){const{inSR:e,outSR:s,datumTransformation:n,preferPE:o}=t;if(e.equals(s)){const{points:r}=Ct(t,null);return r}if(e.isWebMercator&&s.isWGS84||e.isWGS84&&s.isWebMercator)return Me(t);if(tt(e,s,n)&&o){if(e.isGeographic)return Ot(t);const r=J(e);if(M(r))return Ot(t)}return Ae(t)}function Ae(t){const{points:e}=Ct(t,null),s=e.map(n=>new $(n[0],n[1],t.inSR));return D(s,t.outSR,t.datumTransformation).map(n=>n?[n.x,n.y]:[NaN,NaN])}function Ot(t){const{inSR:e,outSR:s,datumTransformation:n}=t,o=J(e),{points:r,mask:i}=Ct(t,o);if(!e.isGeographic){const a=e.wkid?k.coordsys(e.wkid):k.fromString(e.isGeographic?G.PE_TYPE_GEOGCS:G.PE_TYPE_PROJCS,e.wkt);kt.projToGeog(a,r.length,r)}if(M(n)&&n.steps.length&&n.steps.forEach(a=>{const c=a.wkid?k.geogtran(a.wkid):k.fromString(G.PE_TYPE_GEOGTRAN,a.wkt);me.geogToGeog(c,r.length,r,null,a.isInverse?G.PE_TRANSFORM_2_TO_1:G.PE_TRANSFORM_1_TO_2)}),!s.isGeographic){const a=J(s,!0),c=M(a)&&a.isEnvelope?[a.bbox[1],a.bbox[3]]:[-90,90];Ce(r,c);const p=s.wkid?k.coordsys(s.wkid):k.fromString(s.isGeographic?G.PE_TYPE_GEOGCS:G.PE_TYPE_PROJCS,s.wkt);kt.geogToProj(p,r.length,r)}let u=r;if(i&&r.length!==i.length){u=[];for(let a=0,c=0;a<i.length;a++)i[a]?u.push(r[c++]):u.push([NaN,NaN])}return u}function Me(t){const{cols:e,rows:s,xres:n,yres:o,usePixelCenter:r,inSR:i,outSR:u}=t;let{xmin:a,ymax:c}=t;r&&(a+=n/2,c-=o/2);const p=[],x=[],l=Math.max(e,s);for(let y=0;y<l;y++){const d=a+n*Math.min(e,y),f=c-o*Math.min(s,y),R=D(new $({x:d,y:f,spatialReference:i}),u);y<=e&&p.push(R.x),y<=s&&x.push(R.y)}const h=[];for(let y=0;y<e;y++)for(let d=0;d<s;d++)h.push([p[y],x[d]]);return h}function J(t,e=!1){let s=t.wkid||t.wkt;if(!s||t.isGeographic)return null;if(s=String(s),ht.has(s)){const i=ht.get(s);return e?i==null?void 0:i.gcs:i==null?void 0:i.pcs}const n=t.wkid?k.coordsys(t.wkid):k.fromString(t.isGeographic?G.PE_TYPE_GEOGCS:G.PE_TYPE_PROJCS,t.wkt),o=_t(n,j(t,1e-4)),r=_t(n,0,!0);return ht.set(s,{pcs:o,gcs:r}),e?r:o}function _t(t,e=0,s=!1){const n=he.generate(t),o=s?t.horizonGcsGenerate():t.horizonPcsGenerate();if(!(o!=null&&o.length))return null;let r=!1,i=o.find(f=>f.getInclusive()===1&&f.getKind()===1);if(!i){if(i=o.find(f=>f.getInclusive()===1&&f.getKind()===0),!i)return null;r=!0}const u=s?0:(n.getNorthPoleLocation()===2?1:0)|(n.getSouthPoleLocation()===2?2:0),a=n.isPannableRectangle(),c=i.getCoord();if(r)return{isEnvelope:r,isPannable:a,vertices:c,coef:null,bbox:[c[0][0]-e,c[0][1]-e,c[1][0]+e,c[1][1]+e],poleLocation:u};let p=0;const x=[];let[l,h]=c[0],[y,d]=c[0];for(let f=0,R=c.length;f<R;f++){p++,p===R&&(p=0);const[w,g]=c[f],[P,S]=c[p];if(S===g)x.push([w,P,g,S,2]);else{const N=(P-w)/(S-g||1e-4),E=w-N*g;g<S?x.push([N,E,g,S,0]):x.push([N,E,S,g,1])}l=l<w?l:w,h=h<g?h:g,y=y>w?y:w,d=d>g?d:g}return{isEnvelope:!1,isPannable:a,vertices:c,coef:x,bbox:[l,h,y,d],poleLocation:u}}function Ct(t,e){const s=[],{cols:n,rows:o,xres:r,yres:i,usePixelCenter:u}=t;let{xmin:a,ymax:c}=t;if(u&&(a+=r/2,c-=i/2),A(e)){for(let h=0;h<n;h++)for(let y=0;y<o;y++)s.push([a+r*h,c-i*y]);return{points:s}}const p=new Uint8Array(n*o);if(e.isEnvelope){const{bbox:[h,y,d,f]}=e;for(let R=0,w=0;R<n;R++){const g=a+r*R,P=e.isPannable||g>=h&&g<=d;for(let S=0;S<o;S++,w++){const N=c-i*S;P&&N>=y&&N<=f&&(s.push([g,N]),p[w]=1)}}return{points:s,mask:p}}const{coef:x}=e,l=[];for(let h=0;h<o;h++){const y=c-i*h,d=[],f=[];for(let w=0;w<x.length;w++){const[g,P,S,N,E]=x[w];if(y===S&&S===N)d.push(g),d.push(P),f.push(2),f.push(2);else if(y>=S&&y<=N){const et=g*y+P;d.push(et),f.push(E)}}let R=d;if(d.length>2){let w=f[0]===2?0:f[0],g=d[0];R=[];for(let P=1;P<f.length;P++)f[P]===2&&P!==f.length-1||(f[P]!==w&&(R.push(w===0?Math.min(g,d[P-1]):Math.max(g,d[P-1])),w=f[P],g=d[P]),P===f.length-1&&R.push(f[P]===0?Math.min(g,d[P]):Math.max(g,d[P])));R.sort((P,S)=>P-S)}else d[0]>d[1]&&(R=[d[1],d[0]]);l.push(R)}for(let h=0,y=0;h<n;h++){const d=a+r*h;for(let f=0;f<o;f++,y++){const R=c-i*f,w=l[f];if(w.length===2)d>=w[0]&&d<=w[1]&&(s.push([d,R]),p[y]=1);else if(w.length>2){let g=!1;for(let P=0;P<w.length;P+=2)if(d>=w[P]&&d<=w[P+1]){g=!0;break}g&&(s.push([d,R]),p[y]=1)}}}return{points:s,mask:p}}function Ce(t,e){const[s,n]=e;for(let o=0;o<t.length;o++){const r=t[o][1];(r<s||r>n)&&(t[o]=[NaN,NaN])}}function Dt(t){const e=z(t[0].spatialReference);if(t.length<2||A(e))return t[0];let{xmin:s,xmax:n,ymin:o,ymax:r}=t[0];for(let i=1;i<t.length;i++){const u=t[i];n=u.xmax+e*i,o=Math.min(o,u.ymin),r=Math.max(r,u.ymax)}return new Q({xmin:s,xmax:n,ymin:o,ymax:r,spatialReference:t[0].spatialReference})}function $e(t,e,s=null,n=!0){const o=t.spatialReference;if(o.equals(e))return t;const r=Ie(t),i=z(o,!0),u=z(e);if(r===0||A(i)||A(u)){const c=Bt(t,e,s,n);if(A(i)&&M(u)&&Math.abs(c.width-u)<j(e)&&Mt()){const p=J(o);if(M(p)&&p.poleLocation===Nt.None&&t.width<(p.bbox[2]-p.bbox[0])/2)return Fe(t,e)||c}return c}const a=t.clone().normalize();if(a.length===1&&t.xmax<i&&t.xmax-i/2>j(o)){const{xmin:c,xmax:p}=t;for(let x=0;x<=r;x++){const l=x===0?c:-i/2,h=x===r?p-i*x:i/2;a[x]=new Q({xmin:l,xmax:h,ymin:t.ymin,ymax:t.ymax,spatialReference:o})}}return Dt(a.map(c=>Bt(c,e,s,n)).filter(c=>!!c))}function Fe(t,e){const s=z(e);if(A(s))return null;let{xmin:n,ymin:o,xmax:r,ymax:i}=t;const u=t.spatialReference,a=new ne({spatialReference:u,rings:[[[n,o],[r,o],[r,i],[n,i],[n,o]]]}),c=D(a,e);if(c.rings.length!==2||!c.rings[0].length||!c.rings[1].length)return null;const{rings:p}=c,x=j(u),l=new Q({spatialReference:e});for(let h=0;h<2;h++){n=r=p[h][0][0],o=i=p[h][0][1];for(let y=0;y<p[h].length;y++)n=n>p[h][y][0]?p[h][y][0]:n,r=r<p[h][y][0]?p[h][y][0]:r,o=o>p[h][y][1]?p[h][y][1]:o,i=i<p[h][y][1]?p[h][y][1]:i;if(h===0)l.ymin=o,l.ymax=i,l.xmin=n,l.xmax=r;else if(l.ymin=Math.min(l.ymin,o),l.ymax=Math.max(l.ymax,i),Math.abs(r-s/2)<x)l.xmin=n,l.xmax=l.xmax+s;else{if(!(Math.abs(n+s/2)<x))return null;l.xmax=r+s}}return l}function Bt(t,e,s=null,n=!0,o=!0){const r=t.spatialReference;if(r.equals(e))return t;tt(r,e,s);const i=D(t,e,s);if(o&&e.isWebMercator&&i&&(i.ymax=Math.min(20037508342787e-6,i.ymax),i.ymin=Math.max(-20037508342787e-6,i.ymin),i.ymin>=i.ymax))return null;if(!n||!i)return i;const u=at(r,!0),a=at(e,!0);if(A(u)||A(a))return i;const c=j(r,.001),p=j(r,500),x=j(e,.001);if(Math.abs(i.xmin-a[0])<x&&Math.abs(i.xmax-a[1])<x){const l=Math.abs(t.xmin-u[0]),h=Math.abs(u[1]-t.xmax);if(l<c&&h>p){i.xmin=a[0];const y=[];y.push(new $(t.xmax,t.ymin,r)),y.push(new $(t.xmax,(t.ymin+t.ymax)/2,r)),y.push(new $(t.xmax,t.ymax,r));const d=y.map(f=>Et(f,e,s)).filter(f=>!isNaN(f==null?void 0:f.x)).map(f=>f.x);i.xmax=Math.max.apply(null,d)}if(h<c&&l>p){i.xmax=a[1];const y=[];y.push(new $(t.xmin,t.ymin,r)),y.push(new $(t.xmin,(t.ymin+t.ymax)/2,r)),y.push(new $(t.xmin,t.ymax,r));const d=y.map(f=>Et(f,e,s)).filter(f=>!isNaN(f==null?void 0:f.x)).map(f=>f.x);i.xmin=Math.min.apply(null,d)}}else{const l=j(e,.001);Math.abs(i.xmin-a[0])<l&&(i.xmin=a[0]),Math.abs(i.xmax-a[1])<l&&(i.xmax=a[1])}return i}function z(t,e=!1){const s=e?20037508342787e-6:20037508342788905e-9;return t.isWebMercator?2*s:t.wkid&&t.isGeographic?360:2*be[t.wkid]||null}function at(t,e=!1){if(t.isGeographic)return[-180,180];const s=z(t,e);return M(s)?[-s/2,s/2]:null}function Lt(t,e,s,n){let o=(t-e)/s;return o-Math.floor(o)!=0?o=Math.floor(o):n&&(o-=1),o}function Ie(t,e=!1){const s=z(t.spatialReference);if(A(s))return 0;const n=e?0:-(s/2),o=j(t.spatialReference),r=!e&&Math.abs(t.xmax-s/2)<o?s/2:t.xmax,i=!e&&Math.abs(t.xmin+s/2)<o?-s/2:t.xmin;return Lt(r,n,s,!0)-Lt(i,n,s,!1)}function Je(t){const e=t.storageInfo.origin.x,s=z(t.spatialReference,!0);if(A(s))return{originX:e,halfWorldWidth:null,pyramidsInfo:null};const n=s/2,{nativePixelSize:o,storageInfo:r,extent:i}=t,{maximumPyramidLevel:u,blockWidth:a,pyramidScalingFactor:c}=r;let p=o.x;const x=[],l=M(t.transform)&&t.transform.type==="gcs-shift",h=e+(l?0:n),y=l?s-e:n-e;for(let d=0;d<=u;d++){const f=(i.xmax-e)/p/a,R=f-Math.floor(f)==0?f:Math.ceil(f),w=y/p/a,g=w-Math.floor(w)==0?w:Math.ceil(w),P=Math.floor(h/p/a),S=Math.round(h/p)%a,N=(a-Math.round(y/p)%a)%a;x.push({resolutionX:p,blockWidth:a,datsetColumnCount:R,worldColumnCountFromOrigin:g,leftMargin:S,rightPadding:N,originColumnOffset:P}),p*=c}return{originX:e,halfWorldWidth:n,pyramidsInfo:x,hasGCSSShiftTransform:l}}function je(t){if(!t||t.isGeographic)return t;const e=String(t.wkid||t.wkt);let s;return yt.has(e)?s=yt.get(e):(s=(t.wkid?k.coordsys(t.wkid):k.fromString(G.PE_TYPE_PROJCS,t.wkt)).getGeogcs().getCode(),yt.set(e,s)),new re({wkid:s})}function qe(t){const e=t.isAdaptive&&t.spacing==null;let s=t.spacing||[ot,ot],n=xt(t),o={cols:n.size[0]+1,rows:n.size[1]+1};const r=n.outofBoundPointCount>0&&n.outofBoundPointCount<n.offsets.length/2;let i=n.outofBoundPointCount===n.offsets.length/2||e&&r?[0,0]:zt(n.offsets,o,s,mt);const u=(i[0]+i[1])/2,a=t.projectedExtent.spatialReference,c=t.srcBufferExtent.spatialReference;if(e&&(r||u>mt)&&(qt(a,c,t.datumTransformation)&&(a.isGeographic||M(J(a))),s=[it,it],n=xt({...t,spacing:s}),o={cols:n.size[0]+1,rows:n.size[1]+1},i=zt(n.offsets,o,s,mt)),n.error=i,s[0]>1&&(n.coefficients=Wt(n.offsets,o,r)),t.includeGCSGrid&&!a.isGeographic&&!a.isWebMercator)if(c.isGeographic)n.gcsGrid={offsets:n.offsets,coefficients:n.coefficients,spacing:s};else{const p=J(a);if(M(p)&&!p.isEnvelope){const x=je(a),l=$e(t.projectedExtent,x),{offsets:h}=xt({...t,srcBufferExtent:l,spacing:s}),y=Wt(h,o,r);n.gcsGrid={offsets:h,coefficients:y,spacing:s}}}return n}function xt(t){const{projectedExtent:e,srcBufferExtent:s,pixelSize:n,datumTransformation:o,rasterTransform:r}=t,i=e.spatialReference,u=s.spatialReference,a=tt(i,u),{xmin:c,ymin:p,xmax:x,ymax:l}=e,h=z(u),y=M(h)&&(t.hasWrapAround||(r==null?void 0:r.type)==="gcs-shift"),d=t.spacing||[ot,ot],f=d[0]*n.x,R=d[1]*n.y,w=d[0]===1,g=Math.ceil((x-c)/f-.1/d[0])+(w?0:1),P=Math.ceil((l-p)/R-.1/d[1])+(w?0:1),S=Te({cols:g,rows:P,xmin:c,ymax:l,xres:f,yres:R,inSR:i,outSR:u,datumTransformation:o,preferPE:d[0]<=it,usePixelCenter:w}),N=[];let E,et=0;const Ft=w?-1:NaN,{xmin:It,xmax:lt,ymax:Vt,width:Ht,height:Ut}=s,Zt=j(u,500),Qt=M(h)&&It>0&&lt>h/2;let jt=!1;if(a){const O=J(i);jt=M(O)&&O.poleLocation>0}for(let O=0;O<g;O++){const pt=[];for(let K=0;K<P;K++){let b=S[O*P+K];if(y&&b[0]>lt&&b[0]>h/2-Zt?b[0]-=h:y&&O===0&&b[0]<0&&Qt&&!r&&(b[0]+=h),!b||isNaN(b[0])||isNaN(b[1]))N.push(Ft),N.push(Ft),pt.push(null),et++;else{if(r){const Gt=r.inverseTransform(new $({x:b[0],y:b[1],spatialReference:u}));b=[Gt.x,Gt.y]}pt.push(b),O>0&&y&&E[K]&&b[0]<E[K][0]&&(b[0]+=h,jt&&b[0]>lt&&b[0]>h&&(b[0]-=h)),N.push((b[0]-It)/Ht),N.push((Vt-b[1])/Ut)}}E=pt}return{offsets:N,error:null,coefficients:null,outofBoundPointCount:et,spacing:d,size:w?[g,P]:[g-1,P-1]}}function Wt(t,e,s){const{cols:n,rows:o}=e,r=new Float32Array((n-1)*(o-1)*2*6),i=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),u=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let a=0;a<n-1;a++){for(let c=0;c<o-1;c++){let p=a*o*2+2*c;const x=t[p],l=t[p+1],h=t[p+2],y=t[p+3];p+=2*o;const d=t[p],f=t[p+1],R=t[p+2],w=t[p+3];let g=0,P=12*(c*(n-1)+a);for(let S=0;S<3;S++)r[P++]=i[g++]*x+i[g++]*h+i[g++]*R;g=0;for(let S=0;S<3;S++)r[P++]=i[g++]*l+i[g++]*y+i[g++]*w;g=0;for(let S=0;S<3;S++)r[P++]=u[g++]*x+u[g++]*d+u[g++]*R;g=0;for(let S=0;S<3;S++)r[P++]=u[g++]*l+u[g++]*f+u[g++]*w}if(s)for(let c=0;c<r.length;c++)isNaN(r[c])&&(r[c]=-1)}return r}function De(t){const e=t.clone().normalize();return e.length===1?e[0]:Dt(e)}function Ke(t,e,s){const{storageInfo:n,pixelSize:o}=e;let r,i=!1;const{pyramidResolutions:u}=n;if(M(u)&&u.length){const l=(t.x+t.y)/2,h=u[u.length-1],y=(h.x+h.y)/2,d=(o.x+o.y)/2;if(l<=d)r=0;else if(l>=y)r=u.length,i=l/y>8;else{let R,w=d;for(let g=1;g<=u.length;g++){if(R=(u[g-1].x+u[g-1].y)/2,l<=R){l===R?r=g:s==="down"?(r=g-1,i=l/w>8):r=s==="up"||l-w>R-l||l/w>2?g:g-1;break}w=R}}const f=r===0?o:u[r-1];return i&&Math.min(f.x,f.y)*U(e.spatialReference)>19567&&(i=!1),{pyramidLevel:r,pyramidResolution:new $({x:f.x,y:f.y,spatialReference:e.spatialReference}),excessiveReading:i}}const a=Math.log(t.x/o.x)/Math.LN2,c=Math.log(t.y/o.y)/Math.LN2,p=e.storageInfo.maximumPyramidLevel||0;r=s==="down"?Math.floor(Math.min(a,c)):s==="up"?Math.ceil(Math.max(a,c)):Math.round((a+c)/2),r<0?r=0:r>p&&(i=r>p+3,r=p);const x=2**r;return{pyramidLevel:r,pyramidResolution:new $({x:x*e.nativePixelSize.x,y:x*e.nativePixelSize.y,spatialReference:e.spatialReference}),excessiveReading:i}}let V=class extends Tt{get affectsPixelSize(){return!1}forwardTransform(t){return t}inverseTransform(t){return t}};m([v()],V.prototype,"affectsPixelSize",null),m([v({json:{write:!0}})],V.prototype,"spatialReference",void 0),V=m([C("esri.layers.support.rasterTransforms.BaseRasterTransform")],V);const $t=V;let H=class extends $t{constructor(){super(...arguments),this.type="gcs-shift",this.tolerance=1e-8}forwardTransform(t){return(t=t.clone()).type==="point"?(t.x>180+this.tolerance&&(t.x-=360),t):(t.xmin>=180-this.tolerance?(t.xmax-=360,t.xmin-=360):t.xmax>180+this.tolerance&&(t.xmin=-180,t.xmax=180),t)}inverseTransform(t){return(t=t.clone()).type==="point"?(t.x<-this.tolerance&&(t.x+=360),t):(t.xmin<-this.tolerance&&(t.xmin+=360,t.xmax+=360),t)}};m([Z({GCSShiftXform:"gcs-shift"})],H.prototype,"type",void 0),m([v()],H.prototype,"tolerance",void 0),H=m([C("esri.layers.support.rasterTransforms.GCSShiftTransform")],H);const Ge=H;let rt=class extends $t{constructor(){super(...arguments),this.type="identity"}};m([Z({IdentityXform:"identity"})],rt.prototype,"type",void 0),rt=m([C("esri.layers.support.rasterTransforms.IdentityTransform")],rt);const ke=rt;function bt(t,e,s){const{x:n,y:o}=e;if(s<2)return{x:t[0]+n*t[2]+o*t[4],y:t[1]+n*t[3]+o*t[5]};if(s===2){const l=n*n,h=o*o,y=n*o;return{x:t[0]+n*t[2]+o*t[4]+l*t[6]+y*t[8]+h*t[10],y:t[1]+n*t[3]+o*t[5]+l*t[7]+y*t[9]+h*t[11]}}const r=n*n,i=o*o,u=n*o,a=r*n,c=r*o,p=n*i,x=o*i;return{x:t[0]+n*t[2]+o*t[4]+r*t[6]+u*t[8]+i*t[10]+a*t[12]+c*t[14]+p*t[16]+x*t[18],y:t[1]+n*t[3]+o*t[5]+r*t[7]+u*t[9]+i*t[11]+a*t[13]+c*t[15]+p*t[17]+x*t[19]}}function Xt(t,e,s){const{xmin:n,ymin:o,xmax:r,ymax:i,spatialReference:u}=e;let a=[];if(s<2)a.push({x:n,y:i}),a.push({x:r,y:i}),a.push({x:n,y:o}),a.push({x:r,y:o});else{let x=10;for(let l=0;l<x;l++)a.push({x:n,y:o+(i-o)*l/(x-1)}),a.push({x:r,y:o+(i-o)*l/(x-1)});x=8;for(let l=1;l<=x;l++)a.push({x:n+(r-n)*l/x,y:o}),a.push({x:n+(r-n)*l/x,y:i})}a=a.map(x=>bt(t,x,s));const c=a.map(x=>x.x),p=a.map(x=>x.y);return new Q({xmin:Math.min.apply(null,c),xmax:Math.max.apply(null,c),ymin:Math.min.apply(null,p),ymax:Math.max.apply(null,p),spatialReference:u})}function ze(t){const[e,s,n,o,r,i]=t,u=n*i-r*o,a=r*o-n*i;return[(r*s-e*i)/u,(n*s-e*o)/a,i/u,o/a,-r/u,-n/a]}let I=class extends $t{constructor(){super(...arguments),this.polynomialOrder=1,this.type="polynomial"}readForwardCoefficients(t,e){const{coeffX:s,coeffY:n}=e;if(!(s!=null&&s.length)||!(n!=null&&n.length)||s.length!==n.length)return null;const o=[];for(let r=0;r<s.length;r++)o.push(s[r]),o.push(n[r]);return o}writeForwardCoefficients(t,e,s){const n=[],o=[];for(let r=0;r<(t==null?void 0:t.length);r++)r%2==0?n.push(t[r]):o.push(t[r]);e.coeffX=n,e.coeffY=o}get inverseCoefficients(){let t=this._get("inverseCoefficients");const e=this._get("forwardCoefficients");return!t&&e&&this.polynomialOrder<2&&(t=ze(e)),t}set inverseCoefficients(t){this._set("inverseCoefficients",t)}readInverseCoefficients(t,e){const{inverseCoeffX:s,inverseCoeffY:n}=e;if(!(s!=null&&s.length)||!(n!=null&&n.length)||s.length!==n.length)return null;const o=[];for(let r=0;r<s.length;r++)o.push(s[r]),o.push(n[r]);return o}writeInverseCoefficients(t,e,s){const n=[],o=[];for(let r=0;r<(t==null?void 0:t.length);r++)r%2==0?n.push(t[r]):o.push(t[r]);e.inverseCoeffX=n,e.inverseCoeffY=o}get affectsPixelSize(){return this.polynomialOrder>0}forwardTransform(t){if(t.type==="point"){const e=bt(this.forwardCoefficients,t,this.polynomialOrder);return new $({x:e.x,y:e.y,spatialReference:t.spatialReference})}return Xt(this.forwardCoefficients,t,this.polynomialOrder)}inverseTransform(t){if(t.type==="point"){const e=bt(this.inverseCoefficients,t,this.polynomialOrder);return new $({x:e.x,y:e.y,spatialReference:t.spatialReference})}return Xt(this.inverseCoefficients,t,this.polynomialOrder)}};m([v({json:{write:!0}})],I.prototype,"polynomialOrder",void 0),m([v()],I.prototype,"forwardCoefficients",void 0),m([gt("forwardCoefficients",["coeffX","coeffY"])],I.prototype,"readForwardCoefficients",null),m([dt("forwardCoefficients")],I.prototype,"writeForwardCoefficients",null),m([v({json:{write:!0}})],I.prototype,"inverseCoefficients",null),m([gt("inverseCoefficients",["inverseCoeffX","inverseCoeffY"])],I.prototype,"readInverseCoefficients",null),m([dt("inverseCoefficients")],I.prototype,"writeInverseCoefficients",null),m([v()],I.prototype,"affectsPixelSize",null),m([Z({PolynomialXform:"polynomial"})],I.prototype,"type",void 0),I=m([C("esri.layers.support.rasterTransforms.PolynomialTransform")],I);const Ee=I,Kt={GCSShiftXform:Ge,IdentityXform:ke,PolynomialXform:Ee},Oe=Object.keys(Kt);function Ve(t){const e=t==null?void 0:t.type;return!t||Oe.includes(e)}function He(t){if(!(t==null?void 0:t.type))return null;const s=Kt[t==null?void 0:t.type];if(s){const n=new s;return n.read(t),n}return null}export{Ie as D,$e as F,Je as H,qt as M,qe as V,z as X,Et as _,Ge as c,De as e,Ve as f,He as i,Xe as k,Ee as m,Ke as t,We as u,Ye as v};
