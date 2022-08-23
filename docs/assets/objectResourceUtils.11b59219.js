import{a as jo}from"./devEnvironmentUtils.d8d0484c.js";import{t as W,r as p,L as Mi,bH as Oi,an as H,cZ as ct,d8 as Xo,e8 as _r,e7 as Yo,dF as Ko,f as _t,s as wr,ed as sr,_ as Mr,ac as Qo,d_ as Zt,gX as xr,gS as qr,gY as jr,gZ as Zo,aO as Jo,fG as Xr,gM as ea,d$ as Et,gT as St,ao as Yr,g_ as ta,aS as ra,bK as ia,u as nr,cW as Kr,cs as oa,bw as Ye,bd as aa,g$ as sa,cy as na,h0 as la,h1 as ca,cK as ge,cP as da,cR as Or,aA as ua,h2 as ha,e0 as Qr,cT as Ni,cQ as rt,h3 as Pi,M as Ii,ah as Tr,eu as Nr,d2 as Dt,d0 as br,F as x,cV as me,ec as lr,h4 as ma,cL as fa,eb as Li,e6 as Zr,cM as pa,d9 as ga,bo as Fi,bx as $i,h5 as Jr,h6 as Di,fS as Jt,bY as va,d1 as _a,h7 as ei}from"./index.96cac272.js";import{i as ti,g as ri}from"./mat3.f562a113.js";import{e as xa,a as cr}from"./quatf64.74f3afdd.js";import{e as Pr,o as Bi}from"./mat4f64.ff2a477c.js";import{c as Ar,x as ht,u as zi,i as mt,L as Ta,O as ii,E as ba}from"./BufferView.e5eedfc2.js";import{t as Aa,r as Ea,f as oi,e as Sa}from"./vec33.305d56d9.js";import{l as ai,u as Ra,p as ya,m as Ca,n as wa,k as lt,r as et,a as Ma,b as Oa,o as si,e as Na,t as Pa,i as Ia,g as La,h as Fa}from"./DefaultMaterial_COLOR_GAMMA.6691fb81.js";import{c as $a,i as Da}from"./vec2f32.447fc8c4.js";import{r as Ui}from"./Version.92a1e872.js";import{e as ce}from"./Util.d73bb965.js";import{O as f}from"./VertexAttribute.42396f25.js";import{r as er}from"./vec2.bfaa9e2d.js";import{a as tr,n as Vi}from"./vectorStacks.78a180bd.js";import{u as q,U as R,B as le,P as j,A as ee,L as Le,C as re,t as Ge,F as rr,f as Re,V as K,G as Bt,c as ni,n as Ke,M as de,Y as Ot,D as Ue,E as Nt,N as Gi,S as Hi,T as Er,R as Ve,I as ye,O as fe}from"./enums.23a7fab5.js";import{u as oe,a as Ht,b as Sr,c as Ba,n as za}from"./Texture.72f5540c.js";import{t as be}from"./VertexElementDescriptor.1fdca6da.js";import{r as De}from"./context-util.75241806.js";import{r as Ie,l as Rr}from"./symbolColorUtils.74cb6fc3.js";import{T as ki}from"./InterleavedLayout.432bd524.js";import{r as Ua,n as Va}from"./vec3f32.1121a836.js";import{S as Ga}from"./quat.b686e95d.js";import{R as Wi}from"./sphere.5b607634.js";function nt(){const t=new Float32Array(9);return t[0]=1,t[4]=1,t[8]=1,t}function Ha(t){const e=new Float32Array(9);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e}function Xt(t,e,r,i,o,a,s,n,d){const c=new Float32Array(9);return c[0]=t,c[1]=e,c[2]=r,c[3]=i,c[4]=o,c[5]=a,c[6]=s,c[7]=n,c[8]=d,c}function ka(t,e){return new Float32Array(t,e,9)}Object.freeze(Object.defineProperty({__proto__:null,create:nt,clone:Ha,fromValues:Xt,createView:ka},Symbol.toStringTag,{value:"Module"}));function Rt(t){if(W(t))return null;const e=p(t.offset)?t.offset:$a,r=p(t.rotation)?t.rotation:0,i=p(t.scale)?t.scale:Da,o=Xt(1,0,0,0,1,0,e[0],e[1],1),a=Xt(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),s=Xt(i[0],0,0,0,i[1],0,0,0,1),n=nt();return ti(n,a,s),ti(n,o,n),n}async function qi(t,e){const{data:r}=await Mi(t,{responseType:"image",...e});return r}var ve,at,li,zt,Ce,ci,di,ft,Pt,ui,Y,hi;(function(t){t[t.None=0]="None",t[t.Front=1]="Front",t[t.Back=2]="Back",t[t.COUNT=3]="COUNT"})(ve||(ve={})),function(t){t[t.Less=0]="Less",t[t.Lequal=1]="Lequal",t[t.COUNT=2]="COUNT"}(at||(at={})),function(t){t[t.BACKGROUND=0]="BACKGROUND",t[t.UPDATE=1]="UPDATE"}(li||(li={})),function(t){t[t.NOT_LOADED=0]="NOT_LOADED",t[t.LOADING=1]="LOADING",t[t.LOADED=2]="LOADED"}(zt||(zt={})),function(t){t[t.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",t[t.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(Ce||(Ce={})),function(t){t[t.ASYNC=0]="ASYNC",t[t.SYNC=1]="SYNC"}(ci||(ci={})),function(t){t[t.Highlight=0]="Highlight",t[t.MaskOccludee=1]="MaskOccludee",t[t.COUNT=2]="COUNT"}(di||(di={})),function(t){t[t.Triangle=0]="Triangle",t[t.Point=1]="Point",t[t.Line=2]="Line"}(ft||(ft={})),function(t){t[t.STRETCH=1]="STRETCH",t[t.PAD=2]="PAD"}(Pt||(Pt={})),function(t){t[t.CHANGED=0]="CHANGED",t[t.UNCHANGED=1]="UNCHANGED"}(ui||(ui={})),function(t){t[t.Blend=0]="Blend",t[t.Opaque=1]="Opaque",t[t.Mask=2]="Mask",t[t.MaskBlend=3]="MaskBlend",t[t.COUNT=4]="COUNT"}(Y||(Y={})),function(t){t[t.OFF=0]="OFF",t[t.ON=1]="ON"}(hi||(hi={}));class Ir{constructor(e,r,i,o){this.primitiveIndices=e,this._numIndexPerPrimitive=r,this.indices=i,this.position=o,this.center=H(),this._children=void 0,ce(e.length>=1),ce(i.length%this._numIndexPerPrimitive==0),ce(i.length>=e.length*this._numIndexPerPrimitive),ce(o.size===3||o.size===4);const{data:a,size:s}=o,n=e.length;let d=s*i[this._numIndexPerPrimitive*e[0]];Qe.clear(),Qe.push(d),this.bbMin=ct(a[d],a[d+1],a[d+2]),this.bbMax=Xo(this.bbMin);for(let u=0;u<n;++u){const g=this._numIndexPerPrimitive*e[u];for(let m=0;m<this._numIndexPerPrimitive;++m){d=s*i[g+m],Qe.push(d);let _=a[d];this.bbMin[0]=Math.min(_,this.bbMin[0]),this.bbMax[0]=Math.max(_,this.bbMax[0]),_=a[d+1],this.bbMin[1]=Math.min(_,this.bbMin[1]),this.bbMax[1]=Math.max(_,this.bbMax[1]),_=a[d+2],this.bbMin[2]=Math.min(_,this.bbMin[2]),this.bbMax[2]=Math.max(_,this.bbMax[2])}}_r(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let c=this.radius*this.radius;for(let u=0;u<Qe.length;++u){d=Qe.getItemAt(u);const g=a[d]-this.center[0],m=a[d+1]-this.center[1],_=a[d+2]-this.center[2],h=g*g+m*m+_*_;if(h<=c)continue;const S=Math.sqrt(h),A=.5*(S-this.radius);this.radius=this.radius+A,c=this.radius*this.radius;const b=A/S;this.center[0]+=g*b,this.center[1]+=m*b,this.center[2]+=_*b}Qe.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if(Yo(this.bbMin,this.bbMax)>1){const e=_r(H(),this.bbMin,this.bbMax,.5),r=this.primitiveIndices.length,i=new Uint8Array(r),o=new Array(8);for(let c=0;c<8;++c)o[c]=0;const{data:a,size:s}=this.position;for(let c=0;c<r;++c){let u=0;const g=this._numIndexPerPrimitive*this.primitiveIndices[c];let m=s*this.indices[g],_=a[m],h=a[m+1],S=a[m+2];for(let A=1;A<this._numIndexPerPrimitive;++A){m=s*this.indices[g+A];const b=a[m],G=a[m+1],N=a[m+2];b<_&&(_=b),G<h&&(h=G),N<S&&(S=N)}_<e[0]&&(u|=1),h<e[1]&&(u|=2),S<e[2]&&(u|=4),i[c]=u,++o[u]}let n=0;for(let c=0;c<8;++c)o[c]>0&&++n;if(n<2)return;const d=new Array(8);for(let c=0;c<8;++c)d[c]=o[c]>0?new Uint32Array(o[c]):void 0;for(let c=0;c<8;++c)o[c]=0;for(let c=0;c<r;++c){const u=i[c];d[u][o[u]++]=this.primitiveIndices[c]}this._children=new Array(8);for(let c=0;c<8;++c)d[c]!==void 0&&(this._children[c]=new Ir(d[c],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){Qe.prune()}}const Qe=new Oi({deallocator:null});class Lr{constructor(){this.id=Ko()}unload(){}}var Ut;(function(t){t[t.Layer=0]="Layer",t[t.Object=1]="Object",t[t.Geometry=2]="Geometry",t[t.Material=3]="Material",t[t.Texture=4]="Texture",t[t.COUNT=5]="COUNT"})(Ut||(Ut={}));class dr extends Lr{constructor(e,r=[],i=ft.Triangle,o=null,a=-1){super(),this._primitiveType=i,this.objectAndLayerIdColor=o,this.edgeIndicesLength=a,this.type=Ut.Geometry,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[s,n]of e)n&&this._vertexAttributes.set(s,{...n});if(r==null||r.length===0){const s=Wa(this._vertexAttributes),n=ai(s);this.edgeIndicesLength=this.edgeIndicesLength<0?s:this.edgeIndicesLength;for(const d of this._vertexAttributes.keys())this._indices.set(d,n)}else for(const[s,n]of r)n&&(this._indices.set(s,qa(n)),s===f.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(s).length:this.edgeIndicesLength))}cloneShallow(){const e=new dr([],void 0,this._primitiveType,this.objectAndLayerIdColor,void 0),{_vertexAttributes:r,_indices:i}=e;return this._vertexAttributes.forEach((o,a)=>{r.set(a,o)}),this._indices.forEach((o,a)=>{i.set(a,o)}),e.screenToWorldRatio=this.screenToWorldRatio,e._boundingInfo=this._boundingInfo,e}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){const r=this._vertexAttributes.get(e);return r&&!r.exclusive&&(r.data=Array.from(r.data),r.exclusive=!0),r}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return W(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return this.primitiveType===ft.Triangle?this._computeAttachmentOriginTriangles(e):this._computeAttachmentOriginPoints(e)}_computeAttachmentOriginTriangles(e){const r=this.indices.get(f.POSITION),i=this.vertexAttributes.get(f.POSITION);return Ra(i,r,e)}_computeAttachmentOriginPoints(e){const r=this.indices.get(f.POSITION),i=this.vertexAttributes.get(f.POSITION);return ya(i,r,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get(f.POSITION);if(!e||e.length===0)return null;const r=this.primitiveType===ft.Triangle?3:1;ce(e.length%r==0,"Indexing error: "+e.length+" not divisible by "+r);const i=ai(e.length/r),o=this.vertexAttributes.get(f.POSITION);return o?new Ir(i,r,e,o):null}}function Wa(t){const e=t.values().next().value;return e==null?0:e.data.length/e.size}function qa(t){if(t.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return t;for(const e of t)if(e>=65536)return t;return new Uint16Array(t)}class Fr{}function l(t,...e){let r="";for(let i=0;i<e.length;i++)r+=t[i]+e[i];return r+=t[t.length-1],r}(function(t){function e(i){return Math.round(i).toString()}function r(i){return i.toPrecision(8)}t.int=e,t.float=r})(l||(l={}));function ja(t,e=!0){t.attributes.add(f.POSITION,"vec2"),e&&t.varyings.add("uv","vec2"),t.vertex.code.add(l`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${e?l`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}var V;(function(t){t[t.Pass=0]="Pass",t[t.Draw=1]="Draw"})(V||(V={}));class J{constructor(e,r,i,o,a=null){this.name=e,this.type=r,this.arraySize=a,this.bind={[V.Pass]:null,[V.Draw]:null},p(i)&&p(o)&&(this.bind[i]=o)}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}class te extends J{constructor(e,r){super(e,"vec4",V.Pass,(i,o,a)=>i.setUniform4fv(e,r(o,a)))}}const ji=_t.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class Xi{constructor(){this._includedModules=new Map}include(e,r){if(this._includedModules.has(e)){const i=this._includedModules.get(e);if(i!==r){ji.error("Trying to include shader module multiple times with different sets of options.");const o=new Set;for(const a of Object.keys(i))i[a]!==e[a]&&o.add(a);for(const a of Object.keys(e))i[a]!==e[a]&&o.add(a);o.forEach(a=>console.error(`  ${a}: current ${i[a]} new ${e[a]}`))}}else this._includedModules.set(e,r),e(this.builder,r)}}class $r extends Xi{constructor(){super(...arguments),this.vertex=new mi,this.fragment=new mi,this.attributes=new Ka,this.varyings=new Qa,this.extensions=new gt,this.constants=new k}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const r=this.extensions.generateSource(e),i=this.attributes.generateSource(e),o=this.varyings.generateSource(),a=e==="vertex"?this.vertex:this.fragment,s=a.uniforms.generateSource(),n=a.code.generateSource(),d=e==="vertex"?Ja:Za,c=this.constants.generateSource().concat(a.constants.generateSource());return`
${r.join(`
`)}

${d}

${c.join(`
`)}

${s.join(`
`)}

${i.join(`
`)}

${o.join(`
`)}

${n.join(`
`)}`}generateBind(e,r){const i=new Map;this.vertex.uniforms.entries.forEach(s=>{const n=s.bind[e];p(n)&&i.set(s.name,n)}),this.fragment.uniforms.entries.forEach(s=>{const n=s.bind[e];p(n)&&i.set(s.name,n)});const o=Array.from(i.values()),a=o.length;return(s,n,d)=>{for(let c=0;c<a;++c)o[c](r,s,n,d)}}}class Xa{constructor(){this._entries=new Map}add(e){if(!Array.isArray(e))return this._add(e);for(const r of e)this._add(r)}get(e){return this._entries.get(e)}_add(e){if(W(e))ji.error(`Trying to add null Uniform from ${new Error().stack}.`);else{if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new wr(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}}generateSource(){return Array.from(this._entries.values()).map(e=>p(e.arraySize)?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`)}get entries(){return Array.from(this._entries.values())}}class Ya{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class mi extends Xi{constructor(){super(...arguments),this.uniforms=new Xa,this.code=new Ya,this.constants=new k}get builder(){return this}}class Ka{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(e){return e==="fragment"?[]:this._entries.map(r=>`attribute ${r[1]} ${r[0]};`)}}class Qa{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(){return this._entries.map(e=>`varying ${e[1]} ${e[0]};`)}}class gt{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const r=e==="vertex"?gt.ALLOWLIST_VERTEX:gt.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(i=>r.includes(i)).map(i=>`#extension ${i} : enable`)}}gt.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],gt.ALLOWLIST_VERTEX=[];class k{constructor(){this._entries=new Set}add(e,r,i){let o="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":o=k._numberToFloatStr(i);break;case"int":o=k._numberToIntStr(i);break;case"bool":o=i.toString();break;case"vec2":o=`vec2(${k._numberToFloatStr(i[0])},                            ${k._numberToFloatStr(i[1])})`;break;case"vec3":o=`vec3(${k._numberToFloatStr(i[0])},                            ${k._numberToFloatStr(i[1])},                            ${k._numberToFloatStr(i[2])})`;break;case"vec4":o=`vec4(${k._numberToFloatStr(i[0])},                            ${k._numberToFloatStr(i[1])},                            ${k._numberToFloatStr(i[2])},                            ${k._numberToFloatStr(i[3])})`;break;case"ivec2":o=`ivec2(${k._numberToIntStr(i[0])},                             ${k._numberToIntStr(i[1])})`;break;case"ivec3":o=`ivec3(${k._numberToIntStr(i[0])},                             ${k._numberToIntStr(i[1])},                             ${k._numberToIntStr(i[2])})`;break;case"ivec4":o=`ivec4(${k._numberToIntStr(i[0])},                             ${k._numberToIntStr(i[1])},                             ${k._numberToIntStr(i[2])},                             ${k._numberToIntStr(i[3])})`;break;case"mat2":case"mat3":case"mat4":o=`${r}(${Array.prototype.map.call(i,a=>k._numberToFloatStr(a)).join(", ")})`}return this._entries.add(`const ${r} ${e} = ${o};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const Za=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif`,Ja=`precision highp float;
precision highp sampler2D;`;class st extends J{constructor(e,r){super(e,"vec2",V.Pass,(i,o,a)=>i.setUniform2fv(e,r(o,a)))}}var pe;(function(t){t[t.None=0]="None",t[t.Size=1]="Size",t[t.InvSize=2]="InvSize"})(pe||(pe={}));class ue extends J{constructor(e,r){super(e,"sampler2D",V.Pass,(i,o,a)=>i.bindTexture(e,r(o,a)))}}function Yt(t,e,r=pe.None){const i=[new ue(t,e)];if(r&pe.Size){const o=t+"Size";i.push(new st(o,(a,s)=>{const n=e(a,s);return p(n)?er(fi,n.descriptor.width,n.descriptor.height):tr}))}if(r&pe.InvSize){const o=t+"InvSize";i.push(new st(o,(a,s)=>{const n=e(a,s);return p(n)?er(fi,1/n.descriptor.width,1/n.descriptor.height):tr}))}return i}const fi=Vi();class Yi extends Fr{constructor(){super(...arguments),this.color=sr(1,1,1,1)}}function es(){const t=new $r;return t.include(ja),t.fragment.uniforms.add([new ue("tex",e=>e.texture),new te("uColor",e=>e.color)]),t.fragment.code.add(l`void main() {
vec4 texColor = texture2D(tex, uv);
gl_FragColor = texColor * uColor;
}`),t}Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:Yi,build:es},Symbol.toStringTag,{value:"Module"}));function ts(){if(W(mr)){const t=e=>Qo(`esri/libs/basisu/${e}`);mr=Mr(()=>import("./basis_transcoder.229eaac8.js"),["assets/basis_transcoder.229eaac8.js","assets/_commonjsHelpers.773c2c82.js"]).then(e=>e.b).then(({default:e})=>e({locateFile:t}).then(r=>(r.initializeBasis(),delete r.then,r)))}return mr}let mr;var tt;(function(t){t[t.ETC1_RGB=0]="ETC1_RGB",t[t.ETC2_RGBA=1]="ETC2_RGBA",t[t.BC1_RGB=2]="BC1_RGB",t[t.BC3_RGBA=3]="BC3_RGBA",t[t.BC4_R=4]="BC4_R",t[t.BC5_RG=5]="BC5_RG",t[t.BC7_M6_RGB=6]="BC7_M6_RGB",t[t.BC7_M5_RGBA=7]="BC7_M5_RGBA",t[t.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",t[t.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",t[t.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",t[t.ATC_RGB=11]="ATC_RGB",t[t.ATC_RGBA=12]="ATC_RGBA",t[t.FXT1_RGB=17]="FXT1_RGB",t[t.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",t[t.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",t[t.ETC2_EAC_R11=20]="ETC2_EAC_R11",t[t.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",t[t.RGBA32=13]="RGBA32",t[t.RGB565=14]="RGB565",t[t.BGR565=15]="BGR565",t[t.RGBA4444=16]="RGBA4444"})(tt||(tt={}));function rs(t,e){return t.vertexBuffers[e].size/is(t.layout[e])}function is(t){return t[0].stride}function os(t,e,r,i,o=0){const a=t.gl,s=t.capabilities.instancing;t.bindBuffer(r);for(const n of i){const d=e.get(n.name);d===void 0&&console.error(`There is no location for vertex attribute '${n.name}' defined.`);const c=o*n.stride;if(n.count<=4)a.vertexAttribPointer(d,n.count,n.type,n.normalized,n.stride,n.offset+c),a.enableVertexAttribArray(d),n.divisor>0&&s&&s.vertexAttribDivisor(d,n.divisor);else if(n.count===9)for(let u=0;u<3;u++)a.vertexAttribPointer(d+u,3,n.type,n.normalized,n.stride,n.offset+12*u+c),a.enableVertexAttribArray(d+u),n.divisor>0&&s&&s.vertexAttribDivisor(d+u,n.divisor);else if(n.count===16)for(let u=0;u<4;u++)a.vertexAttribPointer(d+u,4,n.type,n.normalized,n.stride,n.offset+16*u+c),a.enableVertexAttribArray(d+u),n.divisor>0&&s&&s.vertexAttribDivisor(d+u,n.divisor);else console.error("Unsupported vertex attribute element count: "+n.count)}}function as(t,e,r,i){const o=t.gl,a=t.capabilities.instancing;t.bindBuffer(r);for(const s of i){const n=e.get(s.name);if(s.count<=4)o.disableVertexAttribArray(n),s.divisor&&s.divisor>0&&a&&a.vertexAttribDivisor(n,0);else if(s.count===9)for(let d=0;d<3;d++)o.disableVertexAttribArray(n+d),s.divisor&&s.divisor>0&&a&&a.vertexAttribDivisor(n+d,0);else if(s.count===16)for(let d=0;d<4;d++)o.disableVertexAttribArray(n+d),s.divisor&&s.divisor>0&&a&&a.vertexAttribDivisor(n+d,0);else console.error("Unsupported vertex attribute element count: "+s.count)}t.unbindBuffer(ee.ARRAY_BUFFER)}function Ki(t){switch(t){case j.ALPHA:case j.LUMINANCE:case j.RED:case j.RED_INTEGER:case R.R8:case R.R8I:case R.R8UI:case R.R8_SNORM:case le.STENCIL_INDEX8:return 1;case j.LUMINANCE_ALPHA:case j.RG:case j.RG_INTEGER:case R.RGBA4:case R.R16F:case R.R16I:case R.R16UI:case R.RG8:case R.RG8I:case R.RG8UI:case R.RG8_SNORM:case R.RGB565:case R.RGB5_A1:case le.DEPTH_COMPONENT16:return 2;case j.DEPTH_COMPONENT:case j.RGB:case j.RGB_INTEGER:case R.RGB8:case R.RGB8I:case R.RGB8UI:case R.RGB8_SNORM:case R.SRGB8:case le.DEPTH_COMPONENT24:return 3;case j.DEPTH_STENCIL:case j.RGBA:case j.RGBA_INTEGER:case R.RGBA8:case R.R32F:case R.R11F_G11F_B10F:case R.RG16F:case R.R32I:case R.R32UI:case R.RG16I:case R.RG16UI:case R.RGBA8I:case R.RGBA8UI:case R.RGBA8_SNORM:case R.SRGB8_ALPHA8:case R.RGB9_E5:case R.RGB10_A2UI:case R.RGB10_A2:case le.DEPTH_STENCIL:case le.DEPTH_COMPONENT32F:case le.DEPTH24_STENCIL8:return 4;case le.DEPTH32F_STENCIL8:return 5;case R.RGB16F:case R.RGB16I:case R.RGB16UI:return 6;case R.RG32F:case R.RG32I:case R.RG32UI:case R.RGBA16F:case R.RGBA16I:case R.RGBA16UI:return 8;case R.RGB32F:case R.RGB32I:case R.RGB32UI:return 12;case R.RGBA32F:case R.RGBA32I:case R.RGBA32UI:return 16;case q.COMPRESSED_RGB_S3TC_DXT1_EXT:case q.COMPRESSED_RGBA_S3TC_DXT1_EXT:return .5;case q.COMPRESSED_RGBA_S3TC_DXT3_EXT:case q.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case q.COMPRESSED_R11_EAC:case q.COMPRESSED_SIGNED_R11_EAC:case q.COMPRESSED_RGB8_ETC2:case q.COMPRESSED_SRGB8_ETC2:case q.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case q.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return .5;case q.COMPRESSED_RG11_EAC:case q.COMPRESSED_SIGNED_RG11_EAC:case q.COMPRESSED_RGBA8_ETC2_EAC:case q.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}function yr(t){if(W(t))return 0;if("descriptor"in t)return t.glName?yr(t.descriptor):0;const e=t.internalFormat||"pixelFormat"in t&&t.pixelFormat;if(!e)return 0;const r="hasMipmap"in t&&t.hasMipmap?1.3:1,i=t.width*t.height;return Ki(e)*i*r}let Ae=null,kt=null;async function Qi(){return W(kt)&&(kt=ts(),Ae=await kt),kt}function ss(t,e){if(W(Ae))return t.byteLength;const r=new Ae.BasisFile(new Uint8Array(t)),i=Ji(r)?Zi(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),e):0;return r.close(),r.delete(),i}function ns(t,e){if(W(Ae))return t.byteLength;const r=new Ae.KTX2File(new Uint8Array(t)),i=eo(r)?Zi(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),e):0;return r.close(),r.delete(),i}function Zi(t,e,r,i,o){const a=Ki(e?q.COMPRESSED_RGBA8_ETC2_EAC:q.COMPRESSED_RGB8_ETC2),s=o&&t>1?(4**t-1)/(3*4**(t-1)):1;return Math.ceil(r*i*a*s)}function Ji(t){return t.getNumImages()>=1&&!t.isUASTC()}function eo(t){return t.getFaces()>=1&&t.isETC1S()}async function ls(t,e,r){W(Ae)&&(Ae=await Qi());const i=new Ae.BasisFile(new Uint8Array(r));if(!Ji(i))return null;i.startTranscoding();const o=to(t,e,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),(a,s)=>i.getImageTranscodedSizeInBytes(0,a,s),(a,s,n)=>i.transcodeImage(n,0,a,s,0,0));return i.close(),i.delete(),o}async function cs(t,e,r){W(Ae)&&(Ae=await Qi());const i=new Ae.KTX2File(new Uint8Array(r));if(!eo(i))return null;i.startTranscoding();const o=to(t,e,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),(a,s)=>i.getImageTranscodedSizeInBytes(a,0,0,s),(a,s,n)=>i.transcodeImage(n,a,0,0,s,0,-1,-1));return i.close(),i.delete(),o}function to(t,e,r,i,o,a,s,n){const{compressedTextureETC:d,compressedTextureS3TC:c}=t.capabilities,[u,g]=d?i?[tt.ETC2_RGBA,q.COMPRESSED_RGBA8_ETC2_EAC]:[tt.ETC1_RGB,q.COMPRESSED_RGB8_ETC2]:c?i?[tt.BC3_RGBA,q.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[tt.BC1_RGB,q.COMPRESSED_RGB_S3TC_DXT1_EXT]:[tt.RGBA32,j.RGBA],m=e.hasMipmap?r:Math.min(1,r),_=[];for(let b=0;b<m;b++)_.push(new Uint8Array(s(b,u))),n(b,u,_[b]);const h=_.length>1,S=h?Le.LINEAR_MIPMAP_LINEAR:Le.LINEAR,A={...e,samplingMode:S,hasMipmap:h,internalFormat:g,width:o,height:a};return new oe(t,A,{type:"compressed",levels:_})}const yt=_t.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),ds=542327876,us=131072,hs=4;function Dr(t){return t.charCodeAt(0)+(t.charCodeAt(1)<<8)+(t.charCodeAt(2)<<16)+(t.charCodeAt(3)<<24)}function ms(t){return String.fromCharCode(255&t,t>>8&255,t>>16&255,t>>24&255)}const fs=Dr("DXT1"),ps=Dr("DXT3"),gs=Dr("DXT5"),vs=31,_s=0,xs=1,Ts=2,bs=3,As=4,Es=7,Ss=20,Rs=21;function ys(t,e,r){const{textureData:i,internalFormat:o,width:a,height:s}=Cs(r,e.hasMipmap);return e.samplingMode=i.levels.length>1?Le.LINEAR_MIPMAP_LINEAR:Le.LINEAR,e.hasMipmap=i.levels.length>1,e.internalFormat=o,e.width=a,e.height=s,new oe(t,e,i)}function Cs(t,e){const r=new Int32Array(t,0,vs);if(r[_s]!==ds)return yt.error("Invalid magic number in DDS header"),null;if(!(r[Ss]&hs))return yt.error("Unsupported format, must contain a FourCC code"),null;const i=r[Rs];let o,a;switch(i){case fs:o=8,a=q.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case ps:o=16,a=q.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case gs:o=16,a=q.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return yt.error("Unsupported FourCC code:",ms(i)),null}let s=1,n=r[As],d=r[bs];(3&n)==0&&(3&d)==0||(yt.warn("Rounding up compressed texture size to nearest multiple of 4."),n=n+3&-4,d=d+3&-4);const c=n,u=d;let g,m;r[Ts]&us&&e!==!1&&(s=Math.max(1,r[Es])),s===1||Zt(n)&&Zt(d)||(yt.warn("Ignoring mipmaps of non power of two sized compressed texture."),s=1);let _=r[xs]+4;const h=[];for(let S=0;S<s;++S)m=(n+3>>2)*(d+3>>2)*o,g=new Uint8Array(t,_,m),h.push(g),_+=m,n=Math.max(1,n>>1),d=Math.max(1,d>>1);return{textureData:{type:"compressed",levels:h},internalFormat:a,width:c,height:u}}const Br=new Map([[f.POSITION,0],[f.NORMAL,1],[f.UV0,2],[f.COLOR,3],[f.SIZE,4],[f.TANGENT,4],[f.AUXPOS1,5],[f.SYMBOLCOLOR,5],[f.AUXPOS2,6],[f.FEATUREATTRIBUTE,6],[f.INSTANCEFEATUREATTRIBUTE,6],[f.OBJECTANDLAYERIDCOLOR,6],[f.OBJECTANDLAYERIDCOLOR_INSTANCED,6],[f.INSTANCECOLOR,7],[f.MODEL,8],[f.MODELNORMAL,12],[f.MODELORIGINHI,11],[f.MODELORIGINLO,15]]);new be(f.POSITION,3,re.FLOAT,0,12);new be(f.POSITION,3,re.FLOAT,0,20),new be(f.UV0,2,re.FLOAT,12,20);new be(f.POSITION,3,re.FLOAT,0,32),new be(f.NORMAL,3,re.FLOAT,12,32),new be(f.UV0,2,re.FLOAT,24,32);new be(f.POSITION,3,re.FLOAT,0,16),new be(f.COLOR,4,re.UNSIGNED_BYTE,12,16);const ws=[new be(f.POSITION,2,re.FLOAT,0,8)],Ms=[new be(f.POSITION,2,re.FLOAT,0,16),new be(f.UV0,2,re.FLOAT,8,16)],Ze=_t.getLogger("esri.views.webgl.VertexArrayObject");class Os{constructor(e,r,i,o,a=null){this._context=e,this._locations=r,this._layout=i,this._buffers=o,this._indexBuffer=a,this._glName=null,this._initialized=!1,e.instanceCounter.increment(Ge.VertexArrayObject,this)}get glName(){return this._glName}get context(){return this._context}get vertexBuffers(){return this._buffers}get indexBuffer(){return this._indexBuffer}get size(){return Object.keys(this._buffers).reduce((e,r)=>e+this._buffers[r].size,p(this._indexBuffer)?this._indexBuffer.size:0)}get layout(){return this._layout}get locations(){return this._locations}dispose(e=!0){var r,i;if(!this._context)return void((this._glName||e&&Object.getOwnPropertyNames(this._buffers).length>0)&&Ze.warn("Leaked WebGL VAO"));if(this._glName){const o=(i=(r=this._context)==null?void 0:r.capabilities)==null?void 0:i.vao;o?(o.deleteVertexArray(this._glName),this._glName=null):Ze.warn("Leaked WebGL VAO")}if(this._context.getBoundVAO()===this&&this._context.bindVAO(null),e){for(const o in this._buffers)this._buffers[o].dispose(),delete this._buffers[o];this._indexBuffer=xr(this._indexBuffer)}this._context.instanceCounter.decrement(Ge.VertexArrayObject,this),this._context=null}initialize(){if(this._initialized)return;const e=this._context.capabilities.vao;if(e){const r=e.createVertexArray();e.bindVertexArray(r),this._bindLayout(),e.bindVertexArray(null),this._glName=r}this._initialized=!0}bind(){this.initialize();const e=this._context.capabilities.vao;e?e.bindVertexArray(this.glName):(this._context.bindVAO(null),this._bindLayout())}_bindLayout(){const{_buffers:e,_layout:r,_indexBuffer:i}=this;e||Ze.error("Vertex buffer dictionary is empty!");const o=this._context.gl;for(const a in e){const s=e[a];s||Ze.error("Vertex buffer is uninitialized!");const n=r[a];n||Ze.error("Vertex element descriptor is empty!"),os(this._context,this._locations,s,n)}p(i)&&(this._context.capabilities.vao?o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,i.glName):this._context.bindBuffer(i))}unbind(){this.initialize();const e=this._context.capabilities.vao;e?e.bindVertexArray(null):this._unbindLayout()}_unbindLayout(){const{_buffers:e,_layout:r}=this;e||Ze.error("Vertex buffer dictionary is empty!");for(const i in e){const o=e[i];o||Ze.error("Vertex buffer is uninitialized!");const a=r[i];as(this._context,this._locations,o,a)}p(this._indexBuffer)&&this._context.unbindBuffer(this._indexBuffer.bufferType)}}class Ns extends Os{}const ne=_t.getLogger("esri.views.webgl.BufferObject");function Ps(t){return Zo(t)}class Be{constructor(e,r,i,o){this._context=e,this.bufferType=r,this.usage=i,this._glName=null,this._size=-1,this._indexType=void 0,e.instanceCounter.increment(Ge.BufferObject,this),this._glName=this._context.gl.createBuffer(),Ht(this._context.gl),o&&this.setData(o)}static createIndex(e,r,i){return new Be(e,ee.ELEMENT_ARRAY_BUFFER,r,i)}static createVertex(e,r,i){return new Be(e,ee.ARRAY_BUFFER,r,i)}static createUniform(e,r,i){if(e.type!==De.WEBGL2)throw new Error("Uniform buffers are supported in WebGL2 only!");return new Be(e,ee.UNIFORM_BUFFER,r,i)}static createPixelPack(e,r=rr.STREAM_READ,i){if(e.type!==De.WEBGL2)throw new Error("Pixel pack buffers are supported in WebGL2 only!");const o=new Be(e,ee.PIXEL_PACK_BUFFER,r);return i&&o.setSize(i),o}static createPixelUnpack(e,r=rr.STREAM_DRAW,i){if(e.type!==De.WEBGL2)throw new Error("Pixel unpack buffers are supported in WebGL2 only!");return new Be(e,ee.PIXEL_UNPACK_BUFFER,r,i)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get byteSize(){return this.bufferType===ee.ELEMENT_ARRAY_BUFFER?this._indexType===re.UNSIGNED_INT?4*this._size:2*this._size:this._size}get _isVAOAware(){return this.bufferType===ee.ELEMENT_ARRAY_BUFFER||this.bufferType===ee.ARRAY_BUFFER}dispose(){var e;(e=this._context)!=null&&e.gl?(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(Ge.BufferObject,this),this._context=null):this._glName&&ne.warn("Leaked WebGL buffer object")}setSize(e,r=null){if(e<=0&&ne.error("Buffer size needs to be positive!"),this.bufferType===ee.ELEMENT_ARRAY_BUFFER&&p(r))switch(this._indexType=r,r){case re.UNSIGNED_SHORT:e*=2;break;case re.UNSIGNED_INT:e*=4}this._setBufferData(e)}setData(e){if(!e)return;let r=e.byteLength;this.bufferType===ee.ELEMENT_ARRAY_BUFFER&&(qr(e)&&(r/=2,this._indexType=re.UNSIGNED_SHORT),jr(e)&&(r/=4,this._indexType=re.UNSIGNED_INT)),this._setBufferData(r,e)}_setBufferData(e,r=null){this._size=e;const i=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const o=this._context.gl;p(r)?o.bufferData(this.bufferType,r,this.usage):o.bufferData(this.bufferType,e,this.usage),Ht(o),this._isVAOAware&&this._context.bindVAO(i)}setSubData(e,r=0,i=0,o=e.byteLength){if(!e)return;(r<0||r>=this._size)&&ne.error("offset is out of range!");let a=r,s=i,n=o,d=e.byteLength;this.bufferType===ee.ELEMENT_ARRAY_BUFFER&&(qr(e)?(d/=2,a*=2,s*=2,n*=2):jr(e)&&(d/=4,a*=4,s*=4,n*=4)),o===void 0&&(o=d-1),i>=o&&ne.error("end must be bigger than start!"),r+i-o>this._size&&ne.error("An attempt to write beyond the end of the buffer!");const c=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const u=this._context.gl,g=ArrayBuffer.isView(e)?e.buffer:e,m=s===0&&n===e.byteLength?g:g.slice(s,n);u.bufferSubData(this.bufferType,a,m),Ht(u),this._isVAOAware&&this._context.bindVAO(c)}setSubDataFromView(e,r,i,o){if(!e)return;(r<0||r>=this._size)&&ne.error("offset is out of range!"),i>=o&&ne.error("end must be bigger than start!"),r+i-o>this._size&&ne.error("An attempt to write beyond the end of the buffer!");const a=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const s=this._context.gl;if(this._context.type===De.WEBGL2)s.bufferSubData(this.bufferType,r*e.BYTES_PER_ELEMENT,e,i,o-i);else{const n=i===0&&o===e.length?e:e.subarray(i,o);s.bufferSubData(this.bufferType,r*e.BYTES_PER_ELEMENT,n)}Ht(s),this._isVAOAware&&this._context.bindVAO(a)}getSubData(e,r=0,i,o){if(this._context.type!==De.WEBGL2)return void ne.error("Get buffer subdata is supported in WebGL2 only!");if(i<0||o<0)return void ne.error("Problem getting subdata: offset and length were less than zero!");const a=Ps(e)?e.BYTES_PER_ELEMENT:1;if(a*((i!=null?i:0)+(o!=null?o:0))>e.byteLength)return void ne.error("Problem getting subdata: offset and length exceeded destination size!");r+a*(o!=null?o:0)>this.byteSize&&ne.warn("Potential problem getting subdata: requested data exceeds buffer size!");const s=this._context.gl;this._context.bindBuffer(this,ee.COPY_READ_BUFFER),s.getBufferSubData(ee.COPY_READ_BUFFER,r,e,i,o),this._context.unbindBuffer(ee.COPY_READ_BUFFER)}async getSubDataAsync(e,r=0,i,o){this._context.type===De.WEBGL2?(await this._context.clientWaitAsync(),this.getSubData(e,r,i,o)):ne.error("Get buffer subdata is supported in WebGL2 only!")}}function Is(t,e=ws,r=Br,i=-1,o=1){let a=null;return e===Ms?a=new Float32Array([i,i,0,0,o,i,1,0,i,o,0,1,o,o,1,1]):a=new Float32Array([i,i,o,i,i,o,o,o]),new Ns(t,r,{geometry:e},{geometry:Be.createVertex(t,rr.STATIC_DRAW,a)})}class Ct{constructor(e,r){this._context=e,this._desc=r,this.type="renderbuffer",this._context.instanceCounter.increment(Ge.Renderbuffer,this);const i=this._context.gl;this.glName=i.createRenderbuffer(),this._context.bindRenderbuffer(this);const{width:o,height:a,internalFormat:s,multisampled:n}=r;if(n){if(this._context.type!==De.WEBGL2)throw new Error("Multisampled renderbuffers are not supported in WebGL1!");i.renderbufferStorageMultisample(i.RENDERBUFFER,this.samples,s,o,a)}else i.renderbufferStorage(i.RENDERBUFFER,s,o,a)}get descriptor(){return this._desc}get samples(){const e=this._desc.samples,r=this._context.parameters.maxSamples;return e?Math.min(e,r):r}resize(e,r){const i=this._desc;if(i.width===e&&i.height===r)return;i.width=e,i.height=r;const o=this._context.gl;this._context.bindRenderbuffer(this),i.multisampled?o.renderbufferStorageMultisample(o.RENDERBUFFER,this.samples,i.internalFormat,i.width,i.height):o.renderbufferStorage(o.RENDERBUFFER,i.internalFormat,i.width,i.height)}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(Ge.Renderbuffer,this),this._context=null)}}class ze{constructor(e,r,i=null,o=null){var a;if(this._context=e,this._glName=null,this._depthAttachment=null,this._stencilAttachment=null,this._colorAttachments=new Map,this._depthStencilTexture=null,this._initialized=!1,this._desc={...r},e.instanceCounter.increment(Ge.FramebufferObject,this),p(i)){Array.isArray(i)||(i=[i]);for(let s=0;s<i.length;++s){const n=i[s],d=Re.COLOR_ATTACHMENT0+s;let c;gi(n)?(Ne(n)?(c=n.descriptor,this._colorAttachments.set(d,n)):(c=n,this._colorAttachments.set(d,new oe(this._context,c))),Wt(c,this._desc)):(pi(n)?(c=n.descriptor,this._colorAttachments.set(d,n)):(c=n,this._colorAttachments.set(d,new Ct(this._context,c))),fr(c,this._desc)),this._validateColorAttachmentPoint(d)}}if(p(o)){let s,n;if(gi(o))this._context.capabilities.depthTexture||console.error("Setting the depth/stencil texture as an attachment requires WEBGL_depth_texture or WebGL2"),Ne(o)?(n=o.descriptor,this._depthStencilTexture=o):(n=o,this._depthStencilTexture=new oe(this._context,n)),Wt(n,this._desc);else{pi(o)?(n=o.descriptor,s=o):(n=o,s=new Ct(this._context,n));const d=(a=this._desc.depthStencilTarget)!=null?a:K.DEPTH_STENCIL_RENDER_BUFFER;d===K.STENCIL_RENDER_BUFFER?this._stencilAttachment=s:d===K.DEPTH_RENDER_BUFFER||d===K.DEPTH_STENCIL_RENDER_BUFFER?this._depthAttachment=s:console.error('If a Renderbuffer is provided, "depthStencilTarget" must be one of STENCIL_RENDER_BUFFER, DEPTH_RENDER_BUFFER or DEPTH_STENCIL_RENDER_BUFFER'),this._desc.depthStencilTarget=d,fr(n,this._desc)}}}dispose(){if(!this._desc)return;const e=this._context.getBoundFramebufferObject();this._disposeColorAttachments(),this._disposeDepthStencilAttachments(),this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null),this._context.bindFramebuffer(e),this._context.instanceCounter.decrement(Ge.FramebufferObject,this),this._desc=null}get glName(){return this._glName}get descriptor(){return this._desc}get colorTexture(){const e=this._colorAttachments.get(Re.COLOR_ATTACHMENT0);return e&&Ne(e)?e:null}get colorAttachment(){return this._colorAttachments.get(Re.COLOR_ATTACHMENT0)}get depthStencilAttachment(){return this._depthStencilTexture||this._depthAttachment||this._stencilAttachment}get depthStencilTexture(){return this._depthStencilTexture}get width(){var e;return(e=this._desc.width)!=null?e:0}get height(){var e;return(e=this._desc.height)!=null?e:0}get gpuMemoryUsage(){return[...this._colorAttachments].reduce((e,[r,i])=>e+yr(i),0)+yr(this.depthStencilAttachment)}getColorTexture(e){const r=this._colorAttachments.get(e);return r&&Ne(r)?r:null}attachColorTexture(e,r=Re.COLOR_ATTACHMENT0){!e||(this._validateColorAttachmentPoint(r),Wt(e.descriptor,this._desc),this._disposeColorAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(e.glName,r)),this._colorAttachments.set(r,e))}detachColorTexture(e=Re.COLOR_ATTACHMENT0){const r=this._colorAttachments.get(e);if(Ne(r)){const i=r;return this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e)),this._colorAttachments.delete(e),i}}setColorTextureTarget(e,r=Re.COLOR_ATTACHMENT0){const i=this._colorAttachments.get(r);Ne(i)&&this._framebufferTexture2D(i.glName,r,e)}attachDepthStencilTexture(e){if(W(e))return;const r=e.descriptor;r.pixelFormat!==j.DEPTH_STENCIL&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),r.dataType!==Bt.UNSIGNED_INT_24_8&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"),Wt(r,this._desc),this._desc.depthStencilTarget&&this._desc.depthStencilTarget!==K.DEPTH_STENCIL_TEXTURE&&(this._desc.depthStencilTarget=K.DEPTH_STENCIL_TEXTURE),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(e.glName,ni)),this._depthStencilTexture=e}detachDepthStencilTexture(){const e=this._depthStencilTexture;return e&&this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,ni)),this._depthStencilTexture=null,e}attachDepthStencilBuffer(e){if(W(e))return;const r=e.descriptor;if(r.internalFormat!==le.DEPTH_STENCIL&&r.internalFormat!==le.DEPTH_COMPONENT16&&console.error("Depth/Stencil buffer must have correct internalFormat"),fr(r,this._desc),this._disposeDepthStencilAttachments(),this._desc.depthStencilTarget=r.internalFormat===le.DEPTH_STENCIL?K.DEPTH_STENCIL_RENDER_BUFFER:K.DEPTH_RENDER_BUFFER,this._initialized){this._context.bindFramebuffer(this);const i=this._context.gl,o=this._desc.depthStencilTarget===K.DEPTH_RENDER_BUFFER?i.DEPTH_ATTACHMENT:i.DEPTH_STENCIL_ATTACHMENT;i.framebufferRenderbuffer(Ke.FRAMEBUFFER,o,i.RENDERBUFFER,e.glName)}this._depthAttachment=e}detachDepthStencilBuffer(){const e=this._context.gl,r=this._depthAttachment;if(r&&this._initialized){this._context.bindFramebuffer(this);const i=this._desc.depthStencilTarget===K.DEPTH_RENDER_BUFFER?e.DEPTH_ATTACHMENT:e.DEPTH_STENCIL_ATTACHMENT;e.framebufferRenderbuffer(Ke.FRAMEBUFFER,i,e.RENDERBUFFER,null)}return this._depthAttachment=null,r}detachAll(){this._colorAttachments.forEach((e,r)=>this._detachColorAttachment(r)),this.detachDepthStencilBuffer(),this.detachDepthStencilTexture()}copyToTexture(e,r,i,o,a,s,n){(e<0||r<0||a<0||s<0)&&console.error("Offsets cannot be negative!"),(i<=0||o<=0)&&console.error("Copy width and height must be greater than zero!");const d=this._desc,c=n.descriptor;n.descriptor.target!==de.TEXTURE_2D&&console.error("Texture target must be TEXTURE_2D!"),((d==null?void 0:d.width)==null||(d==null?void 0:d.height)==null||(c==null?void 0:c.width)==null||(c==null?void 0:c.height)==null||e+i>d.width||r+o>d.height||a+i>c.width||s+o>c.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const u=this._context,g=u.bindTexture(n,oe.TEXTURE_UNIT_FOR_UPDATES);u.setActiveTexture(oe.TEXTURE_UNIT_FOR_UPDATES),u.bindFramebuffer(this),u.gl.copyTexSubImage2D(de.TEXTURE_2D,0,a,s,e,r,i,o),u.bindTexture(g,oe.TEXTURE_UNIT_FOR_UPDATES)}readPixels(e,r,i,o,a,s,n){(i<=0||o<=0)&&console.error("Copy width and height must be greater than zero!"),n||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(e,r,i,o,a,s,n)}async readPixelsAsync(e,r,i,o,a,s,n){if(this._context.type!==De.WEBGL2)return Sr()&&console.warn("Attempting to read pixels using pixel buffer object without WebGL2"),void this.readPixels(e,r,i,o,a,s,n);const d=this._context.gl,c=Be.createPixelPack(this._context,rr.STREAM_READ,n.byteLength);this._context.bindBuffer(c),this._context.bindFramebuffer(this),d.readPixels(e,r,i,o,a,s,0),this._context.unbindBuffer(ee.PIXEL_PACK_BUFFER),await c.getSubDataAsync(n),c.dispose()}resize(e,r){const i=this._desc;if(i.width!==e||i.height!==r){if(!this._initialized)return i.width=e,i.height=r,this._colorAttachments.forEach(o=>{o&&o.resize(e,r)}),void(this._depthStencilTexture&&this._depthStencilTexture.resize(e,r));i.width=e,i.height=r,this._colorAttachments.forEach(o=>{o&&o.resize(e,r)}),this._depthStencilTexture!=null?this._depthStencilTexture.resize(e,r):(this._depthAttachment||this._stencilAttachment)&&(this._depthAttachment&&this._depthAttachment.resize(e,r),this._stencilAttachment&&this._stencilAttachment.resize(e,r)),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1}}initializeAndBind(e=Ke.FRAMEBUFFER){var u,g,m,_;const r=this._context.gl;if(this._initialized)return void r.bindFramebuffer(e,this.glName);this._glName&&r.deleteFramebuffer(this._glName);const i=this._context,o=r.createFramebuffer(),a=this._desc,s=(u=a.colorTarget)!=null?u:Ot.RENDER_BUFFER,n=(g=a.width)!=null?g:1,d=(m=a.height)!=null?m:1;if(r.bindFramebuffer(e,o),this._colorAttachments.size===0)if(s===Ot.TEXTURE||s===Ot.CUBEMAP)this._colorAttachments.set(Re.COLOR_ATTACHMENT0,Ls(i,a,this.descriptor.colorTarget===Ot.CUBEMAP?de.TEXTURE_CUBE_MAP:de.TEXTURE_2D));else{const h=new Ct(i,{internalFormat:R.RGBA4,width:n,height:d});this._colorAttachments.set(Re.COLOR_ATTACHMENT0,h)}this._colorAttachments.forEach((h,S)=>{h&&(Ne(h)?this._framebufferTexture2D(h.glName,S,vi(h),e):r.framebufferRenderbuffer(e,S,r.RENDERBUFFER,h.glName))});const c=(_=a.depthStencilTarget)!=null?_:K.NONE;switch(c){case K.DEPTH_RENDER_BUFFER:case K.DEPTH_STENCIL_RENDER_BUFFER:{this._depthAttachment||(this._depthAttachment=new Ct(i,{internalFormat:a.depthStencilTarget===K.DEPTH_RENDER_BUFFER?le.DEPTH_COMPONENT16:le.DEPTH_STENCIL,width:n,height:d}));const h=c===K.DEPTH_RENDER_BUFFER?r.DEPTH_ATTACHMENT:r.DEPTH_STENCIL_ATTACHMENT;r.framebufferRenderbuffer(e,h,r.RENDERBUFFER,this._depthAttachment.glName);break}case K.STENCIL_RENDER_BUFFER:this._stencilAttachment||(this._stencilAttachment=new Ct(i,{internalFormat:le.STENCIL_INDEX8,width:n,height:d})),r.framebufferRenderbuffer(e,r.STENCIL_ATTACHMENT,r.RENDERBUFFER,this._stencilAttachment.glName);break;case K.DEPTH_STENCIL_TEXTURE:if(!this._depthStencilTexture){i.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!");const h={target:de.TEXTURE_2D,pixelFormat:j.DEPTH_STENCIL,dataType:Bt.UNSIGNED_INT_24_8,samplingMode:Le.NEAREST,wrapMode:Ue.CLAMP_TO_EDGE,width:n,height:d};this._depthStencilTexture=new oe(i,h)}this._framebufferTexture2D(this._depthStencilTexture.glName,r.DEPTH_STENCIL_ATTACHMENT,vi(this._depthStencilTexture),e)}Ba()&&r.checkFramebufferStatus(e)!==r.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!"),this._glName=o,this._initialized=!0}_framebufferTexture2D(e,r=Re.COLOR_ATTACHMENT0,i=de.TEXTURE_2D,o=Ke.FRAMEBUFFER,a=0){this._context.gl.framebufferTexture2D(o,r,i,e,a)}_detachColorAttachment(e){Sr()&&console.warn("Detaching an FBO attachment can be a slow due to invalidating framebuffer completeness!");const r=this._context.gl,i=this._colorAttachments.get(e);return Ne(i)?this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e)):this._initialized&&(this._context.bindFramebuffer(this),r.framebufferRenderbuffer(Ke.FRAMEBUFFER,e,r.RENDERBUFFER,null)),this._colorAttachments.delete(e),i}_disposeColorAttachments(){this._colorAttachments.forEach((e,r)=>{this._detachColorAttachment(r),e.dispose()}),this._colorAttachments.clear()}_disposeDepthStencilAttachments(){const e=this._context.gl;if(this._depthAttachment){if(this._initialized){this._context.bindFramebuffer(this);const r=this._desc.depthStencilTarget===K.DEPTH_RENDER_BUFFER?e.DEPTH_ATTACHMENT:e.DEPTH_STENCIL_ATTACHMENT;e.framebufferRenderbuffer(Ke.FRAMEBUFFER,r,e.RENDERBUFFER,null)}this._depthAttachment.dispose(),this._depthAttachment=null}this._stencilAttachment&&(this._initialized&&(this._context.bindFramebuffer(this),e.framebufferRenderbuffer(Ke.FRAMEBUFFER,e.STENCIL_ATTACHMENT,e.RENDERBUFFER,null)),this._stencilAttachment.dispose(),this._stencilAttachment=null),this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture.dispose(),this._depthStencilTexture=null)}_validateColorAttachmentPoint(e){if(ze._MAX_COLOR_ATTACHMENTS===-1){const i=this._context.capabilities.drawBuffers;if(i){const o=this._context.gl;ze._MAX_COLOR_ATTACHMENTS=o.getParameter(i.MAX_COLOR_ATTACHMENTS)}else ze._MAX_COLOR_ATTACHMENTS=1}const r=e-Re.COLOR_ATTACHMENT0;r+1>ze._MAX_COLOR_ATTACHMENTS&&_t.getLogger("esri.views.webgl.FrameBufferObject").error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${r+1}. Implementation supports up to ${ze._MAX_COLOR_ATTACHMENTS} color attachments`)}}function Ne(t){return t!=null&&"type"in t&&t.type==="texture"}function pi(t){return t!=null&&"type"in t&&t.type==="renderbuffer"}function gi(t){return Ne(t)||t!=null&&"pixelFormat"in t}function Ls(t,e,r){return new oe(t,{target:r,pixelFormat:j.RGBA,dataType:Bt.UNSIGNED_BYTE,samplingMode:Le.NEAREST,wrapMode:Ue.CLAMP_TO_EDGE,width:e.width,height:e.height})}function Wt(t,e){t.target!==de.TEXTURE_2D&&t.target!==de.TEXTURE_CUBE_MAP&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),e.width!==void 0&&e.width>=0&&e.height!==void 0&&e.height>=0?e.width===t.width&&e.height===t.height||console.error("Color attachment texture must match the framebuffer's!"):(e.width=t.width,e.height=t.height)}function fr(t,e){e.width!==void 0&&e.width>=0&&e.height!==void 0&&e.height>=0?e.width===t.width&&e.height===t.height||console.error("Renderbuffer dimensions must match the framebuffer's!"):(e.width=t.width,e.height=t.height)}function vi(t){return t.descriptor.target===de.TEXTURE_CUBE_MAP?de.TEXTURE_CUBE_MAP_POSITIVE_X:de.TEXTURE_2D}ze._MAX_COLOR_ATTACHMENTS=-1;class Z extends Lr{constructor(e,r){super(),this._data=e,this.type=Ut.Texture,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new Jo,this._passParameters=new Yi,this.params=r||{},this.params.mipmap=this.params.mipmap!==!1,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:Ue.REPEAT,t:Ue.REPEAT},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||Pt.STRETCH,this.estimatedTexMemRequired=Z._estimateTexMemRequired(this._data,this.params),this._startPreload()}_startPreload(){const e=this._data;W(e)||(e instanceof HTMLVideoElement?this._startPreloadVideoElement(e):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!(Xr(e.src)||e.preload==="auto"&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const r=!e.paused;if(e.src=e.src,r&&e.autoplay){const i=()=>{e.removeEventListener("canplay",i),e.play()};e.addEventListener("canplay",i)}}}_startPreloadImageElement(e){ea(e.src)||Xr(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static _getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static _estimateTexMemRequired(e,r){if(W(e))return 0;if(Et(e)||St(e))return r.encoding===Z.KTX2_ENCODING?ns(e,r.mipmap):r.encoding===Z.BASIS_ENCODING?ss(e,r.mipmap):e.byteLength;const{width:i,height:o}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?Z._getDataDimensions(e):r;return(r.mipmap?4/3:1)*i*o*(r.components||4)||0}dispose(){this._data=void 0}get width(){return this.params.width}get height(){return this.params.height}_createDescriptor(e){var r;return{target:de.TEXTURE_2D,pixelFormat:j.RGBA,dataType:Bt.UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?Le.LINEAR_MIPMAP_LINEAR:Le.LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:(r=this.params.maxAnisotropy)!=null?r:this.params.mipmap?e.parameters.maxMaxAnisotropy:1}}get glTexture(){return this._glTexture}load(e,r){if(p(this._glTexture))return this._glTexture;if(p(this._loadingPromise))return this._loadingPromise;const i=this._data;return W(i)?(this._glTexture=new oe(e,this._createDescriptor(e),null),this._glTexture):typeof i=="string"?this._loadFromURL(e,r,i):i instanceof Image?this._loadFromImageElement(e,r,i):i instanceof HTMLVideoElement?this._loadFromVideoElement(e,r,i):i instanceof ImageData||i instanceof HTMLCanvasElement?this._loadFromImage(e,i,r):(Et(i)||St(i))&&this.params.encoding===Z.DDS_ENCODING?(this._data=void 0,this._loadFromDDSData(e,i)):(Et(i)||St(i))&&this.params.encoding===Z.KTX2_ENCODING?(this._data=void 0,this._loadFromKTX2(e,i)):(Et(i)||St(i))&&this.params.encoding===Z.BASIS_ENCODING?(this._data=void 0,this._loadFromBasis(e,i)):St(i)?this._loadFromPixelData(e,i):Et(i)?this._loadFromPixelData(e,new Uint8Array(i)):null}get requiresFrameUpdates(){return this._data instanceof HTMLVideoElement}frameUpdate(e,r,i){if(!(this._data instanceof HTMLVideoElement)||W(this._glTexture)||this._data.readyState<It.HAVE_CURRENT_DATA||i===this._data.currentTime)return i;if(p(this._powerOfTwoStretchInfo)){const{framebuffer:o,vao:a,sourceTexture:s}=this._powerOfTwoStretchInfo;s.setData(this._data),this._drawStretchedTexture(e,r,o,a,s,this._glTexture)}else{const{videoWidth:o,videoHeight:a}=this._data,{width:s,height:n}=this._glTexture.descriptor;o!==s||a!==n?this._glTexture.updateData(0,0,0,Math.min(o,s),Math.min(a,n),this._data):this._glTexture.setData(this._data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.params.updateCallback&&this.params.updateCallback(),this._data.currentTime}_loadFromDDSData(e,r){return this._glTexture=ys(e,this._createDescriptor(e),r),this._glTexture}_loadFromKTX2(e,r){return this._loadAsync(()=>cs(e,this._createDescriptor(e),r).then(i=>(this._glTexture=i,i)))}_loadFromBasis(e,r){return this._loadAsync(()=>ls(e,this._createDescriptor(e),r).then(i=>(this._glTexture=i,i)))}_loadFromPixelData(e,r){ce(this.params.width>0&&this.params.height>0);const i=this._createDescriptor(e);return i.pixelFormat=this.params.components===1?j.LUMINANCE:this.params.components===3?j.RGB:j.RGBA,i.width=this.params.width,i.height=this.params.height,this._glTexture=new oe(e,i,r),this._glTexture}_loadFromURL(e,r,i){return this._loadAsync(async o=>{const a=await qi(i,{signal:o});return Yr(o),this._loadFromImage(e,a,r)})}_loadFromImageElement(e,r,i){return i.complete?this._loadFromImage(e,i,r):this._loadAsync(async o=>{const a=await ta(i,i.src,!1,o);return Yr(o),this._loadFromImage(e,a,r)})}_loadFromVideoElement(e,r,i){return i.readyState>=It.HAVE_CURRENT_DATA?this._loadFromImage(e,i,r):this._loadFromVideoElementAsync(e,r,i)}_loadFromVideoElementAsync(e,r,i){return this._loadAsync(o=>new Promise((a,s)=>{const n=()=>{i.removeEventListener("loadeddata",d),i.removeEventListener("error",c),oa(u)},d=()=>{i.readyState>=It.HAVE_CURRENT_DATA&&(n(),a(this._loadFromImage(e,i,r)))},c=g=>{n(),s(g||new wr("Failed to load video"))};i.addEventListener("loadeddata",d),i.addEventListener("error",c);const u=ra(o,()=>c(ia()))}))}_loadFromImage(e,r,i){const o=Z._getDataDimensions(r);this.params.width=o.width,this.params.height=o.height;const a=this._createDescriptor(e);return a.pixelFormat=this.params.components===3?j.RGB:j.RGBA,!this._requiresPowerOfTwo(e,a)||Zt(o.width)&&Zt(o.height)?(a.width=o.width,a.height=o.height,this._glTexture=new oe(e,a,r),this._glTexture):(this._glTexture=this._makePowerOfTwoTexture(e,r,o,a,i),this._glTexture)}_loadAsync(e){const r=new AbortController;this._loadingController=r;const i=e(r.signal);this._loadingPromise=i;const o=()=>{this._loadingController===r&&(this._loadingController=null),this._loadingPromise===i&&(this._loadingPromise=null)};return i.then(o,o),i}_requiresPowerOfTwo(e,r){const i=Ue.CLAMP_TO_EDGE,o=typeof r.wrapMode=="number"?r.wrapMode===i:r.wrapMode.s===i&&r.wrapMode.t===i;return!za(e.gl)&&(r.hasMipmap||!o)}_makePowerOfTwoTexture(e,r,i,o,a){const{width:s,height:n}=i,d=Kr(s),c=Kr(n);let u;switch(o.width=d,o.height=c,this.params.powerOfTwoResizeMode){case Pt.PAD:o.textureCoordinateScaleFactor=[s/d,n/c],u=new oe(e,o),u.updateData(0,0,0,s,n,r);break;case Pt.STRETCH:case null:case void 0:u=this._stretchToPowerOfTwo(e,r,o,a());break;default:nr(this.params.powerOfTwoResizeMode)}return o.hasMipmap&&u.generateMipmap(),u}_stretchToPowerOfTwo(e,r,i,o){const a=new oe(e,i),s=new ze(e,{colorTarget:Ot.TEXTURE,depthStencilTarget:K.NONE},a),n=new oe(e,{target:de.TEXTURE_2D,pixelFormat:i.pixelFormat,dataType:Bt.UNSIGNED_BYTE,wrapMode:Ue.CLAMP_TO_EDGE,samplingMode:Le.LINEAR,flipped:!!i.flipped,maxAnisotropy:8,preMultiplyAlpha:i.preMultiplyAlpha},r),d=Is(e),c=e.getBoundFramebufferObject();return this._drawStretchedTexture(e,o,s,d,n,a),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:d,sourceTexture:n,framebuffer:s}:(d.dispose(!0),n.dispose(),s.detachColorTexture(),s.dispose()),e.bindFramebuffer(c),a}_drawStretchedTexture(e,r,i,o,a,s){this._passParameters.texture=a,e.bindFramebuffer(i);const n=e.getViewport();e.setViewport(0,0,s.descriptor.width,s.descriptor.height),e.bindTechnique(r,this._passParameters,null),e.bindVAO(o),e.drawArrays(Nt.TRIANGLE_STRIP,0,rs(o,"geometry")),e.bindFramebuffer(null),e.setViewport(n.x,n.y,n.width,n.height),this._passParameters.texture=null}unload(){if(p(this._powerOfTwoStretchInfo)){const{framebuffer:e,vao:r,sourceTexture:i}=this._powerOfTwoStretchInfo;r.dispose(!0),i.dispose(),e.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if(p(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),p(this._loadingController)){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}var It;Z.DDS_ENCODING="image/vnd-ms.dds",Z.KTX2_ENCODING="image/ktx2",Z.BASIS_ENCODING="image/x.basis",function(t){t[t.HAVE_NOTHING=0]="HAVE_NOTHING",t[t.HAVE_METADATA=1]="HAVE_METADATA",t[t.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",t[t.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",t[t.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(It||(It={}));var y;(function(t){t[t.Color=0]="Color",t[t.Depth=1]="Depth",t[t.Normal=2]="Normal",t[t.Shadow=3]="Shadow",t[t.ShadowHighlight=4]="ShadowHighlight",t[t.ShadowExludeHighlight=5]="ShadowExludeHighlight",t[t.Highlight=6]="Highlight",t[t.Alpha=7]="Alpha",t[t.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",t[t.COUNT=9]="COUNT"})(y||(y={}));function Fs(t){const e=l`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;t.fragment.code.add(e),t.vertex.code.add(e)}function ur(t,e){e.normalType===Q.Attribute&&(t.attributes.add(f.NORMAL,"vec3"),t.vertex.code.add(l`vec3 normalModel() {
return normal;
}`)),e.normalType===Q.CompressedAttribute&&(t.include(Fs),t.attributes.add(f.NORMALCOMPRESSED,"vec2"),t.vertex.code.add(l`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),e.normalType===Q.ScreenDerivative&&(t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(l`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}var Q;(function(t){t[t.Attribute=0]="Attribute",t[t.CompressedAttribute=1]="CompressedAttribute",t[t.Ground=2]="Ground",t[t.ScreenDerivative=3]="ScreenDerivative",t[t.COUNT=4]="COUNT"})(Q||(Q={}));function $s(t,e){const r=t.fragment;switch(r.code.add(l`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),e.doubleSidedMode){case se.None:r.code.add(l`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case se.View:r.code.add(l`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case se.WindingOrder:r.code.add(l`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:nr(e.doubleSidedMode);case se.COUNT:}}var se;(function(t){t[t.None=0]="None",t[t.View=1]="View",t[t.WindingOrder=2]="WindingOrder",t[t.COUNT=3]="COUNT"})(se||(se={}));var ae;function pt(t,e){switch(e.textureCoordinateType){case ae.Default:return t.attributes.add(f.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(l`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case ae.Atlas:return t.attributes.add(f.UV0,"vec2"),t.varyings.add("vuv0","vec2"),t.attributes.add(f.UVREGION,"vec4"),t.varyings.add("vuvRegion","vec4"),void t.vertex.code.add(l`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:nr(e.textureCoordinateType);case ae.None:return void t.vertex.code.add(l`void forwardTextureCoordinates() {}`);case ae.COUNT:return}}(function(t){t[t.None=0]="None",t[t.Default=1]="Default",t[t.Atlas=2]="Atlas",t[t.COUNT=3]="COUNT"})(ae||(ae={}));function Ds(t){t.extensions.add("GL_EXT_shader_texture_lod"),t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(l`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function ro(t,e){switch(t.include(pt,e),t.fragment.code.add(l`
  struct TextureLookupParameter {
    vec2 uv;
    ${e.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),e.textureCoordinateType){case ae.Default:return void t.fragment.code.add(l`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return texture2D(texture, params.uv);
}`);case ae.Atlas:return t.include(Ds),void t.fragment.code.add(l`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return textureAtlasLookup(texture, params.size, params.uv, vuvRegion);
}`);default:nr(e.textureCoordinateType);case ae.None:case ae.COUNT:return}}class Ee extends J{constructor(e,r){super(e,"vec3",V.Draw,(i,o,a,s)=>i.setUniform3fv(e,r(o,a,s)))}}class X extends J{constructor(e,r){super(e,"vec3",V.Pass,(i,o,a)=>i.setUniform3fv(e,r(o,a)))}}class _i extends J{constructor(e,r){super(e,"vec2",V.Draw,(i,o,a,s)=>i.setUniform2fv(e,r(o,a,s)))}}class Bs extends J{constructor(e,r){super(e,"sampler2D",V.Draw,(i,o,a)=>i.bindTexture(e,r(o,a)))}}function Kt(t,e,r=pe.None){const i=[new Bs(t,e)];if(r&pe.Size){const o=t+"Size";i.push(new _i(o,(a,s)=>{const n=e(a,s);return p(n)?er(xi,n.descriptor.width,n.descriptor.height):tr}))}if(r&pe.InvSize){const o=t+"InvSize";i.push(new _i(o,(a,s)=>{const n=e(a,s);return p(n)?er(xi,1/n.descriptor.width,1/n.descriptor.height):tr}))}return i}const xi=Vi();class zs{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}ensureTechnique(e,r,i=this._output){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(i,r),this._technique),this._technique}ensureResources(e){return zt.LOADED}}class Us extends zs{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId,r=>this._texture=r),this._acquire(e.normalTextureId,r=>this._textureNormal=r),this._acquire(e.emissiveTextureId,r=>this._textureEmissive=r),this._acquire(e.occlusionTextureId,r=>this._textureOcclusion=r),this._acquire(e.metallicRoughnessTextureId,r=>this._textureMetallicRoughness=r)}dispose(){this._texture=Ye(this._texture),this._textureNormal=Ye(this._textureNormal),this._textureEmissive=Ye(this._textureEmissive),this._textureOcclusion=Ye(this._textureOcclusion),this._textureMetallicRoughness=Ye(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return this._numLoading===0?zt.LOADED:zt.LOADING}get textureBindParameters(){return new Vs(p(this._texture)?this._texture.glTexture:null,p(this._textureNormal)?this._textureNormal.glTexture:null,p(this._textureEmissive)?this._textureEmissive.glTexture:null,p(this._textureOcclusion)?this._textureOcclusion.glTexture:null,p(this._textureMetallicRoughness)?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){(W(this._texture)||e!==this._texture.id)&&(this._texture=Ye(this._texture),this._textureId=e,this._acquire(this._textureId,r=>this._texture=r))}_acquire(e,r){if(W(e))return void r(null);const i=this._textureRepository.acquire(e);if(aa(i))return++this._numLoading,void i.then(o=>{if(this._disposed)return Ye(o),void r(null);r(o)}).finally(()=>--this._numLoading);r(i)}}class Vs extends Fr{constructor(e=null,r=null,i=null,o=null,a=null){super(),this.texture=e,this.textureNormal=r,this.textureEmissive=i,this.textureOcclusion=o,this.textureMetallicRoughness=a}}Ua(0,.6,.2);var U;(function(t){t[t.Disabled=0]="Disabled",t[t.Normal=1]="Normal",t[t.Schematic=2]="Schematic",t[t.Water=3]="Water",t[t.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",t[t.COUNT=5]="COUNT"})(U||(U={}));function io(t,e){const r=t.fragment,i=e.hasMetallicRoughnessTexture||e.hasEmissionTexture||e.hasOcclusionTexture;if(e.pbrMode===U.Normal&&i&&t.include(ro,e),e.pbrMode!==U.Schematic)if(e.pbrMode!==U.Disabled){if(e.pbrMode===U.Normal){r.code.add(l`vec3 mrr;
vec3 emission;
float occlusion;`);const o=e.supportsTextureAtlas?pe.Size:pe.None,a=e.pbrTextureBindType;e.hasMetallicRoughnessTexture&&(r.uniforms.add(a===V.Pass?Yt("texMetallicRoughness",s=>s.textureMetallicRoughness,o):Kt("texMetallicRoughness",s=>s.textureMetallicRoughness,o)),r.code.add(l`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),e.hasEmissionTexture&&(r.uniforms.add(a===V.Pass?Yt("texEmission",s=>s.textureEmissive,o):Kt("texEmission",s=>s.textureEmissive,o)),r.code.add(l`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),e.hasOcclusionTexture?(r.uniforms.add(a===V.Pass?Yt("texOcclusion",s=>s.textureOcclusion,o):Kt("texOcclusion",s=>s.textureOcclusion,o)),r.code.add(l`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(l`float getBakedOcclusion() { return 1.0; }`),r.uniforms.add(a===V.Pass?[new X("emissionFactor",s=>s.emissiveFactor),new X("mrrFactors",s=>s.mrrFactors)]:[new Ee("emissionFactor",s=>s.emissiveFactor),new Ee("mrrFactors",s=>s.mrrFactors)]),r.code.add(l`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${i?l`vtc.uv = vuv0;`:""}
      ${e.hasMetallicRoughnessTextureTransform?l`vtc.uv = metallicRoughnessUV;`:""}
      ${e.hasMetallicRoughnessTexture?e.supportsTextureAtlas?l`
                vtc.size = texMetallicRoughnessSize;
                applyMetallnessAndRoughness(vtc);`:l`applyMetallnessAndRoughness(vtc);`:""}
      ${e.hasEmissiveTextureTransform?l`vtc.uv = emissiveUV;`:""}
      ${e.hasEmissionTexture?e.supportsTextureAtlas?l`
                vtc.size = texEmissionSize;
                applyEmission(vtc);`:l`applyEmission(vtc);`:""}
      ${e.hasOcclusionTextureTransform?l`vtc.uv = occlusionUV;`:""}
      ${e.hasOcclusionTexture?e.supportsTextureAtlas?l`
                vtc.size = texOcclusionSize;
                applyOcclusion(vtc);`:l`applyOcclusion(vtc);`:""}
    }
  `)}}else r.code.add(l`float getBakedOcclusion() { return 1.0; }`);else r.code.add(l`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function Gs(t){return Math.abs(t*t*t)}function Hs(t,e,r){const i=r.parameters,o=r.paddingPixelsOverride;return wt.scale=Math.min(i.divisor/(e-i.offset),1),wt.factor=Gs(t),wt.minPixelSize=i.minPixelSize,wt.paddingPixels=o,wt}function ks(t,e){return t===0?e.minPixelSize:e.minPixelSize*(1+2*e.paddingPixels/t)}function Ws(t,e){return Math.max(sa(t*e.scale,t,e.factor),ks(t,e))}function qs(t,e,r,i){return Ws(t,Hs(e,r,i))}const wt={scale:0,factor:0,minPixelSize:0,paddingPixels:0};function js(t,e){const r=t.length;for(let i=0;i<r;++i)dt[0]=t[i],e[i]=dt[0];return e}function Xs(t,e){const r=t.length;for(let i=0;i<r;++i)dt[0]=t[i],dt[1]=t[i]-dt[0],e[i]=dt[1];return e}const dt=new Float32Array(2);function Ys(t){return!!p(t)&&!t.visible}const qt=na();function Ks(t,e,r,i,o,a,s){if(!Ys(e))if(t.boundingInfo){ce(t.primitiveType===ft.Triangle);const n=r.tolerance;oo(t.boundingInfo,i,o,n,a,s)}else{const n=t.indices.get(f.POSITION),d=t.vertexAttributes.get(f.POSITION);so(i,o,0,n.length/3,n,d,void 0,a,s)}}const Qs=H();function oo(t,e,r,i,o,a){if(W(t))return;const s=Js(e,r,Qs);if(la(qt,t.getBBMin()),ca(qt,t.getBBMax()),p(o)&&o.applyToAabb(qt),en(qt,e,s,i)){const{primitiveIndices:n,indices:d,position:c}=t,u=n?n.length:d.length/3;if(u>nn){const g=t.getChildren();if(g!==void 0){for(let m=0;m<8;++m)g[m]!==void 0&&oo(g[m],e,r,i,o,a);return}}so(e,r,0,u,d,c,n,o,a)}}const ao=H();function so(t,e,r,i,o,a,s,n,d){if(s)return Zs(t,e,r,i,o,a,s,n,d);const c=a.data,u=a.stride||a.size,g=t[0],m=t[1],_=t[2],h=e[0]-g,S=e[1]-m,A=e[2]-_;for(let b=r,G=3*r;b<i;++b){let N=u*o[G++],O=c[N++],L=c[N++],C=c[N];N=u*o[G++];let w=c[N++],P=c[N++],v=c[N];N=u*o[G++];let M=c[N++],F=c[N++],$=c[N];p(n)&&([O,L,C]=n.applyToVertex(O,L,C,b),[w,P,v]=n.applyToVertex(w,P,v,b),[M,F,$]=n.applyToVertex(M,F,$,b));const I=w-O,B=P-L,D=v-C,z=M-O,xe=F-L,we=$-C,ke=S*we-xe*A,xt=A*z-we*h,Tt=h*xe-z*S,Te=I*ke+B*xt+D*Tt;if(Math.abs(Te)<=Number.EPSILON)continue;const he=g-O,We=m-L,qe=_-C,Se=he*ke+We*xt+qe*Tt;if(Te>0){if(Se<0||Se>Te)continue}else if(Se>0||Se<Te)continue;const Me=We*D-B*qe,bt=qe*I-D*he,At=he*B-I*We,je=h*Me+S*bt+A*At;if(Te>0){if(je<0||Se+je>Te)continue}else if(je>0||Se+je<Te)continue;const Xe=(z*Me+xe*bt+we*At)/Te;Xe>=0&&d(Xe,no(I,B,D,z,xe,we,ao),b,!1)}}function Zs(t,e,r,i,o,a,s,n,d){const c=a.data,u=a.stride||a.size,g=t[0],m=t[1],_=t[2],h=e[0]-g,S=e[1]-m,A=e[2]-_;for(let b=r;b<i;++b){const G=s[b];let N=3*G,O=u*o[N++],L=c[O++],C=c[O++],w=c[O];O=u*o[N++];let P=c[O++],v=c[O++],M=c[O];O=u*o[N];let F=c[O++],$=c[O++],I=c[O];p(n)&&([L,C,w]=n.applyToVertex(L,C,w,b),[P,v,M]=n.applyToVertex(P,v,M,b),[F,$,I]=n.applyToVertex(F,$,I,b));const B=P-L,D=v-C,z=M-w,xe=F-L,we=$-C,ke=I-w,xt=S*ke-we*A,Tt=A*xe-ke*h,Te=h*we-xe*S,he=B*xt+D*Tt+z*Te;if(Math.abs(he)<=Number.EPSILON)continue;const We=g-L,qe=m-C,Se=_-w,Me=We*xt+qe*Tt+Se*Te;if(he>0){if(Me<0||Me>he)continue}else if(Me>0||Me<he)continue;const bt=qe*z-D*Se,At=Se*B-z*We,je=We*D-B*qe,Xe=h*bt+S*At+A*je;if(he>0){if(Xe<0||Me+Xe>he)continue}else if(Xe>0||Me+Xe<he)continue;const Wr=(xe*bt+we*At+ke*je)/he;Wr>=0&&d(Wr,no(B,D,z,xe,we,ke,ao),G,!1)}}const Ti=H(),bi=H();function no(t,e,r,i,o,a,s){return ge(Ti,t,e,r),ge(bi,i,o,a),da(s,Ti,bi),Or(s,s),s}function Js(t,e,r){return ge(r,1/(e[0]-t[0]),1/(e[1]-t[1]),1/(e[2]-t[2]))}function en(t,e,r,i){return tn(t,e,r,i,1/0)}function tn(t,e,r,i,o){const a=(t[0]-i-e[0])*r[0],s=(t[3]+i-e[0])*r[0];let n=Math.min(a,s),d=Math.max(a,s);const c=(t[1]-i-e[1])*r[1],u=(t[4]+i-e[1])*r[1];if(d=Math.min(d,Math.max(c,u)),d<0||(n=Math.max(n,Math.min(c,u)),n>d))return!1;const g=(t[2]-i-e[2])*r[2],m=(t[5]+i-e[2])*r[2];return d=Math.min(d,Math.max(g,m)),!(d<0)&&(n=Math.max(n,Math.min(g,m)),!(n>d)&&n<o)}function rn(t,e,r,i,o){let a=(r.screenLength||0)*t.pixelRatio;p(o)&&(a=qs(a,i,e,o));const s=a*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return ua(s*e,r.minWorldLength||0,r.maxWorldLength!=null?r.maxWorldLength:1/0)}function lo(t,e){const r=e?lo(e):{};for(const i in t){let o=t[i];o&&o.forEach&&(o=an(o)),o==null&&i in r||(r[i]=o)}return r}function on(t,e){let r=!1;for(const i in e){const o=e[i];o!==void 0&&(Array.isArray(o)?t[i]===null?(t[i]=o.slice(),r=!0):ha(t[i],o)&&(r=!0):t[i]!==o&&(r=!0,t[i]=o))}return r}function an(t){const e=[];return t.forEach(r=>e.push(r)),e}const sn={multiply:1,ignore:2,replace:3,tint:4},nn=1e3;class ln extends Lr{constructor(e,r){super(),this.type=Ut.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=Br,this._parameters=lo(e,r),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e,r=!0){on(this._parameters,e)&&(this.validateParameters(this._parameters),r&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&(this.renderOccluded&e.renderOccludedMask)!=0}isVisibleForOutput(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){p(this.repository)&&this.repository.materialChanged(this)}}var Cr;(function(t){t[t.Occlude=1]="Occlude",t[t.Transparent=2]="Transparent",t[t.OccludeAndTransparent=4]="OccludeAndTransparent",t[t.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",t[t.Opaque=16]="Opaque"})(Cr||(Cr={}));var _e;(function(t){t[t.Color=0]="Color",t[t.Alpha=1]="Alpha",t[t.FrontFace=2]="FrontFace",t[t.NONE=3]="NONE",t[t.COUNT=4]="COUNT"})(_e||(_e={}));function co(t,e,r=Er.ADD,i=[0,0,0,0]){return{srcRgb:t,srcAlpha:t,dstRgb:e,dstAlpha:e,opRgb:r,opAlpha:r,color:{r:i[0],g:i[1],b:i[2],a:i[3]}}}function cn(t,e,r,i,o=Er.ADD,a=Er.ADD,s=[0,0,0,0]){return{srcRgb:t,srcAlpha:e,dstRgb:r,dstAlpha:i,opRgb:o,opAlpha:a,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}const dn={face:Gi.BACK,mode:Hi.CCW},un={face:Gi.FRONT,mode:Hi.CCW},hn=t=>t===ve.Back?dn:t===ve.Front?un:null,mn={zNear:0,zFar:1},fn={r:!0,g:!0,b:!0,a:!0};function pn(t){return Sn.intern(t)}function gn(t){return Rn.intern(t)}function vn(t){return yn.intern(t)}function _n(t){return Cn.intern(t)}function xn(t){return wn.intern(t)}function Tn(t){return Mn.intern(t)}function bn(t){return On.intern(t)}function An(t){return Nn.intern(t)}function En(t){return Pn.intern(t)}class Fe{constructor(e,r){this._makeKey=e,this._makeRef=r,this._interns=new Map}intern(e){var o;if(!e)return null;const r=this._makeKey(e),i=this._interns;return i.has(r)||i.set(r,this._makeRef(e)),(o=i.get(r))!=null?o:null}}function $e(t){return"["+t.join(",")+"]"}const Sn=new Fe(uo,t=>({__tag:"Blending",...t}));function uo(t){return t?$e([t.srcRgb,t.srcAlpha,t.dstRgb,t.dstAlpha,t.opRgb,t.opAlpha,t.color.r,t.color.g,t.color.b,t.color.a]):null}const Rn=new Fe(ho,t=>({__tag:"Culling",...t}));function ho(t){return t?$e([t.face,t.mode]):null}const yn=new Fe(mo,t=>({__tag:"PolygonOffset",...t}));function mo(t){return t?$e([t.factor,t.units]):null}const Cn=new Fe(fo,t=>({__tag:"DepthTest",...t}));function fo(t){return t?$e([t.func]):null}const wn=new Fe(po,t=>({__tag:"StencilTest",...t}));function po(t){return t?$e([t.function.func,t.function.ref,t.function.mask,t.operation.fail,t.operation.zFail,t.operation.zPass]):null}const Mn=new Fe(go,t=>({__tag:"DepthWrite",...t}));function go(t){return t?$e([t.zNear,t.zFar]):null}const On=new Fe(vo,t=>({__tag:"ColorWrite",...t}));function vo(t){return t?$e([t.r,t.g,t.b,t.a]):null}const Nn=new Fe(_o,t=>({__tag:"StencilWrite",...t}));function _o(t){return t?$e([t.mask]):null}const Pn=new Fe(In,t=>({blending:pn(t.blending),culling:gn(t.culling),polygonOffset:vn(t.polygonOffset),depthTest:_n(t.depthTest),stencilTest:xn(t.stencilTest),depthWrite:Tn(t.depthWrite),colorWrite:bn(t.colorWrite),stencilWrite:An(t.stencilWrite)}));function In(t){return t?$e([uo(t.blending),ho(t.culling),mo(t.polygonOffset),fo(t.depthTest),po(t.stencilTest),go(t.depthWrite),vo(t.colorWrite),_o(t.stencilWrite)]):null}const Ln=cn(Ve.SRC_ALPHA,Ve.ONE,Ve.ONE_MINUS_SRC_ALPHA,Ve.ONE_MINUS_SRC_ALPHA),Fn=co(Ve.ONE,Ve.ONE),$n=co(Ve.ZERO,Ve.ONE_MINUS_SRC_ALPHA);function Dn(t){return t===_e.FrontFace?null:t===_e.Alpha?$n:Fn}const Bn=5e5,zn={factor:-1,units:-2};function Un(t){return t?zn:null}function Vn(t,e=ye.LESS){return t===_e.NONE||t===_e.FrontFace?e:ye.LEQUAL}var ut;(function(t){t[t.INTEGRATED_MESH=0]="INTEGRATED_MESH",t[t.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",t[t.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",t[t.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",t[t.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",t[t.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",t[t.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",t[t.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",t[t.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",t[t.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",t[t.POSTPROCESSING_ENVIRONMENT_OPAQUE=10]="POSTPROCESSING_ENVIRONMENT_OPAQUE",t[t.POSTPROCESSING_ENVIRONMENT_TRANSPARENT=11]="POSTPROCESSING_ENVIRONMENT_TRANSPARENT",t[t.LASERLINES=12]="LASERLINES",t[t.LASERLINES_CONTRAST_CONTROL=13]="LASERLINES_CONTRAST_CONTROL",t[t.HUD_MATERIAL=14]="HUD_MATERIAL",t[t.LABEL_MATERIAL=15]="LABEL_MATERIAL",t[t.LINE_CALLOUTS=16]="LINE_CALLOUTS",t[t.LINE_CALLOUTS_HUD_DEPTH=17]="LINE_CALLOUTS_HUD_DEPTH",t[t.DRAPED_MATERIAL=18]="DRAPED_MATERIAL",t[t.DRAPED_WATER=19]="DRAPED_WATER",t[t.VOXEL=20]="VOXEL",t[t.MAX_SLOTS=21]="MAX_SLOTS"})(ut||(ut={}));class Gn{constructor(e=0){this.componentLocalOriginLength=0,this._tmpVertex=H(),this._mbs=Wi(),this._obb={center:H(),halfSize:Va(),quaternion:null},this._totalOffset=0,this._offset=0,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,r,i){const o=e,a=r,s=i+this.componentLocalOriginLength,n=this._totalOffset/Math.sqrt(o*o+a*a+s*s);return this._tmpVertex[0]=e+o*n,this._tmpVertex[1]=r+a*n,this._tmpVertex[2]=i+s*n,this._tmpVertex}applyToAabb(e){const r=e[0],i=e[1],o=e[2]+this.componentLocalOriginLength,a=e[3],s=e[4],n=e[5]+this.componentLocalOriginLength,d=r*a<0?0:Math.min(Math.abs(r),Math.abs(a)),c=i*s<0?0:Math.min(Math.abs(i),Math.abs(s)),u=o*n<0?0:Math.min(Math.abs(o),Math.abs(n)),g=Math.sqrt(d*d+c*c+u*u);if(g<this._totalOffset)return e[0]-=r<0?this._totalOffset:0,e[1]-=i<0?this._totalOffset:0,e[2]-=o<0?this._totalOffset:0,e[3]+=a>0?this._totalOffset:0,e[4]+=s>0?this._totalOffset:0,e[5]+=n>0?this._totalOffset:0,e;const m=Math.max(Math.abs(r),Math.abs(a)),_=Math.max(Math.abs(i),Math.abs(s)),h=Math.max(Math.abs(o),Math.abs(n)),S=Math.sqrt(m*m+_*_+h*h),A=this._totalOffset/S,b=this._totalOffset/g;return e[0]+=r*(r>0?A:b),e[1]+=i*(i>0?A:b),e[2]+=o*(o>0?A:b),e[3]+=a*(a<0?A:b),e[4]+=s*(s<0?A:b),e[5]+=n*(n<0?A:b),e}applyToMbs(e){const r=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),i=this._totalOffset/r;return this._mbs[0]=e[0]+e[0]*i,this._mbs[1]=e[1]+e[1]*i,this._mbs[2]=e[2]+e[2]*i,this._mbs[3]=e[3]+e[3]*this._totalOffset/r,this._mbs}applyToObb(e){const r=e.center,i=this._totalOffset/Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]);this._obb.center[0]=r[0]+r[0]*i,this._obb.center[1]=r[1]+r[1]*i,this._obb.center[2]=r[2]+r[2]*i,Qr(this._obb.halfSize,e.halfSize,e.quaternion),Ni(this._obb.halfSize,this._obb.halfSize,e.center);const o=this._totalOffset/Math.sqrt(this._obb.halfSize[0]*this._obb.halfSize[0]+this._obb.halfSize[1]*this._obb.halfSize[1]+this._obb.halfSize[2]*this._obb.halfSize[2]);return this._obb.halfSize[0]+=this._obb.halfSize[0]*o,this._obb.halfSize[1]+=this._obb.halfSize[1]*o,this._obb.halfSize[2]+=this._obb.halfSize[2]*o,rt(this._obb.halfSize,this._obb.halfSize,e.center),Ga(Ei,e.quaternion),Qr(this._obb.halfSize,this._obb.halfSize,Ei),this._obb.halfSize[0]*=this._obb.halfSize[0]<0?-1:1,this._obb.halfSize[1]*=this._obb.halfSize[1]<0?-1:1,this._obb.halfSize[2]*=this._obb.halfSize[2]<0?-1:1,this._obb.quaternion=e.quaternion,this._obb}}class Hn{constructor(e=0){this.offset=e,this.sphere=Wi(),this.tmpVertex=H()}applyToVertex(e,r,i){const o=this.objectTransform.transform;let a=o[0]*e+o[4]*r+o[8]*i+o[12],s=o[1]*e+o[5]*r+o[9]*i+o[13],n=o[2]*e+o[6]*r+o[10]*i+o[14];const d=this.offset/Math.sqrt(a*a+s*s+n*n);a+=a*d,s+=s*d,n+=n*d;const c=this.objectTransform.inverse;return this.tmpVertex[0]=c[0]*a+c[4]*s+c[8]*n+c[12],this.tmpVertex[1]=c[1]*a+c[5]*s+c[9]*n+c[13],this.tmpVertex[2]=c[2]*a+c[6]*s+c[10]*n+c[14],this.tmpVertex}applyToMinMax(e,r){const i=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*i,e[1]+=e[1]*i,e[2]+=e[2]*i;const o=this.offset/Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]);r[0]+=r[0]*o,r[1]+=r[1]*o,r[2]+=r[2]*o}applyToAabb(e){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const i=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*i,e[4]+=e[4]*i,e[5]+=e[5]*i,e}applyToBoundingSphere(e){const r=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),i=this.offset/r;return this.sphere[0]=e[0]+e[0]*i,this.sphere[1]=e[1]+e[1]*i,this.sphere[2]=e[2]+e[2]*i,this.sphere[3]=e[3]+e[3]*this.offset/r,this.sphere}}const Ai=new Hn;function kn(t){return p(t)?(Ai.offset=t,Ai):null}new Gn;const Ei=xa();function Wn(t,e,r,i){const o=r.typedBuffer,a=r.typedBufferStride,s=t.length;i*=a;for(let n=0;n<s;++n){const d=2*t[n];o[i]=e[d],o[i+1]=e[d+1],i+=a}}function xo(t,e,r,i,o){const a=r.typedBuffer,s=r.typedBufferStride,n=t.length;if(i*=s,o==null||o===1)for(let d=0;d<n;++d){const c=3*t[d];a[i]=e[c],a[i+1]=e[c+1],a[i+2]=e[c+2],i+=s}else for(let d=0;d<n;++d){const c=3*t[d];for(let u=0;u<o;++u)a[i]=e[c],a[i+1]=e[c+1],a[i+2]=e[c+2],i+=s}}function qn(t,e,r,i,o=1){const a=r.typedBuffer,s=r.typedBufferStride,n=t.length;if(i*=s,o===1)for(let d=0;d<n;++d){const c=4*t[d];a[i]=e[c],a[i+1]=e[c+1],a[i+2]=e[c+2],a[i+3]=e[c+3],i+=s}else for(let d=0;d<n;++d){const c=4*t[d];for(let u=0;u<o;++u)a[i]=e[c],a[i+1]=e[c+1],a[i+2]=e[c+2],a[i+3]=e[c+3],i+=s}}function jn(t,e,r,i,o,a=1){if(!r)return void xo(t,e,i,o,a);const s=i.typedBuffer,n=i.typedBufferStride,d=t.length,c=r[0],u=r[1],g=r[2],m=r[4],_=r[5],h=r[6],S=r[8],A=r[9],b=r[10],G=r[12],N=r[13],O=r[14];if(o*=n,a===1)for(let L=0;L<d;++L){const C=3*t[L],w=e[C],P=e[C+1],v=e[C+2];s[o]=c*w+m*P+S*v+G,s[o+1]=u*w+_*P+A*v+N,s[o+2]=g*w+h*P+b*v+O,o+=n}else for(let L=0;L<d;++L){const C=3*t[L],w=e[C],P=e[C+1],v=e[C+2],M=c*w+m*P+S*v+G,F=u*w+_*P+A*v+N,$=g*w+h*P+b*v+O;for(let I=0;I<a;++I)s[o]=M,s[o+1]=F,s[o+2]=$,o+=n}}function Xn(t,e,r,i,o,a=1){if(!r)return void xo(t,e,i,o,a);const s=r,n=i.typedBuffer,d=i.typedBufferStride,c=t.length,u=s[0],g=s[1],m=s[2],_=s[4],h=s[5],S=s[6],A=s[8],b=s[9],G=s[10],N=!Pi(s),O=1e-6,L=1-O;if(o*=d,a===1)for(let C=0;C<c;++C){const w=3*t[C],P=e[w],v=e[w+1],M=e[w+2];let F=u*P+_*v+A*M,$=g*P+h*v+b*M,I=m*P+S*v+G*M;if(N){const B=F*F+$*$+I*I;if(B<L&&B>O){const D=1/Math.sqrt(B);F*=D,$*=D,I*=D}}n[o+0]=F,n[o+1]=$,n[o+2]=I,o+=d}else for(let C=0;C<c;++C){const w=3*t[C],P=e[w],v=e[w+1],M=e[w+2];let F=u*P+_*v+A*M,$=g*P+h*v+b*M,I=m*P+S*v+G*M;if(N){const B=F*F+$*$+I*I;if(B<L&&B>O){const D=1/Math.sqrt(B);F*=D,$*=D,I*=D}}for(let B=0;B<a;++B)n[o+0]=F,n[o+1]=$,n[o+2]=I,o+=d}}function Yn(t,e,r,i,o,a=1){if(!r)return void qn(t,e,i,o,a);const s=r,n=i.typedBuffer,d=i.typedBufferStride,c=t.length,u=s[0],g=s[1],m=s[2],_=s[4],h=s[5],S=s[6],A=s[8],b=s[9],G=s[10],N=!Pi(s),O=1e-6,L=1-O;if(o*=d,a===1)for(let C=0;C<c;++C){const w=4*t[C],P=e[w],v=e[w+1],M=e[w+2],F=e[w+3];let $=u*P+_*v+A*M,I=g*P+h*v+b*M,B=m*P+S*v+G*M;if(N){const D=$*$+I*I+B*B;if(D<L&&D>O){const z=1/Math.sqrt(D);$*=z,I*=z,B*=z}}n[o+0]=$,n[o+1]=I,n[o+2]=B,n[o+3]=F,o+=d}else for(let C=0;C<c;++C){const w=4*t[C],P=e[w],v=e[w+1],M=e[w+2],F=e[w+3];let $=u*P+_*v+A*M,I=g*P+h*v+b*M,B=m*P+S*v+G*M;if(N){const D=$*$+I*I+B*B;if(D<L&&D>O){const z=1/Math.sqrt(D);$*=z,I*=z,B*=z}}for(let D=0;D<a;++D)n[o+0]=$,n[o+1]=I,n[o+2]=B,n[o+3]=F,o+=d}}function Si(t,e,r,i,o,a=1){const s=i.typedBuffer,n=i.typedBufferStride,d=t.length;if(o*=n,a===1){if(r===4)for(let c=0;c<d;++c){const u=4*t[c];s[o]=e[u],s[o+1]=e[u+1],s[o+2]=e[u+2],s[o+3]=e[u+3],o+=n}else if(r===3)for(let c=0;c<d;++c){const u=3*t[c];s[o]=e[u],s[o+1]=e[u+1],s[o+2]=e[u+2],s[o+3]=255,o+=n}}else if(r===4)for(let c=0;c<d;++c){const u=4*t[c];for(let g=0;g<a;++g)s[o]=e[u],s[o+1]=e[u+1],s[o+2]=e[u+2],s[o+3]=e[u+3],o+=n}else if(r===3)for(let c=0;c<d;++c){const u=3*t[c];for(let g=0;g<a;++g)s[o]=e[u],s[o+1]=e[u+1],s[o+2]=e[u+2],s[o+3]=255,o+=n}}function Kn(t,e,r,i){const o=e.typedBuffer,a=e.typedBufferStride;i*=a;for(let s=0;s<r;++s)o[i]=t[0],o[i+1]=t[1],o[i+2]=t[2],o[i+3]=t[3],i+=a}function Qn(t,e,r,i,o,a){for(const s of e.fieldNames){const n=t.vertexAttributes.get(s),d=t.indices.get(s);if(n&&d)switch(s){case f.POSITION:{ce(n.size===3);const c=o.getField(s,mt);c&&jn(d,n.data,r,c,a);break}case f.NORMAL:{ce(n.size===3);const c=o.getField(s,mt);c&&Xn(d,n.data,i,c,a);break}case f.UV0:{ce(n.size===2);const c=o.getField(s,zi);c&&Wn(d,n.data,c,a);break}case f.COLOR:{ce(n.size===3||n.size===4);const c=o.getField(s,ht);c&&Si(d,n.data,n.size,c,a);break}case f.SYMBOLCOLOR:{ce(n.size===3||n.size===4);const c=o.getField(s,ht);c&&Si(d,n.data,n.size,c,a);break}case f.TANGENT:{ce(n.size===4);const c=o.getField(s,Ar);c&&Yn(d,n.data,i,c,a);break}}else if(s===f.OBJECTANDLAYERIDCOLOR&&p(t.objectAndLayerIdColor)&&t.objectAndLayerIdColor.length===4&&t.indices.get(f.POSITION)){const c=t.indices.get(f.POSITION).length,u=o.getField(s,ht);Kn(t.objectAndLayerIdColor,u,c,a)}}}function zr(t){t.attributes.add(f.POSITION,"vec3"),t.vertex.code.add(l`vec3 positionModel() { return position; }`)}function To({code:t},e){e.doublePrecisionRequiresObfuscation?t.add(l`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):t.add(l`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function Zn(t){return!!Ii("force-double-precision-obfuscation")||t.driverTest.doublePrecisionRequiresObfuscation}class bo extends J{constructor(e,r){super(e,"mat3",V.Draw,(i,o,a)=>i.setUniformMatrix3fv(e,r(o,a)))}}class He extends J{constructor(e,r){super(e,"mat3",V.Pass,(i,o,a)=>i.setUniformMatrix3fv(e,r(o,a)))}}class vt extends J{constructor(e,r){super(e,"mat4",V.Pass,(i,o,a)=>i.setUniformMatrix4fv(e,r(o,a)))}}function Ao(t,e){t.include(zr);const r=t.vertex;r.include(To,e),t.varyings.add("vPositionWorldCameraRelative","vec3"),t.varyings.add("vPosition_view","vec3"),r.uniforms.add([new X("transformWorldFromViewTH",i=>i.transformWorldFromViewTH),new X("transformWorldFromViewTL",i=>i.transformWorldFromViewTL),new He("transformViewFromCameraRelativeRS",i=>i.transformViewFromCameraRelativeRS),new vt("transformProjFromView",i=>i.transformProjFromView),new bo("transformWorldFromModelRS",i=>i.transformWorldFromModelRS),new Ee("transformWorldFromModelTH",i=>i.transformWorldFromModelTH),new Ee("transformWorldFromModelTL",i=>i.transformWorldFromModelTL)]),r.code.add(l`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(l`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${e.spherical?l`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:l`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),t.fragment.uniforms.add(new X("transformWorldFromViewTL",i=>i.transformWorldFromViewTL)),r.code.add(l`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),t.fragment.code.add(l`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class Jn extends Fr{constructor(){super(...arguments),this.transformWorldFromViewTH=H(),this.transformWorldFromViewTL=H(),this.transformViewFromCameraRelativeRS=cr(),this.transformProjFromView=Pr()}}function Eo(t,e){e.normalType===Q.Attribute||e.normalType===Q.CompressedAttribute?(t.include(ur,e),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("vNormalView","vec3"),t.vertex.uniforms.add([new bo("transformNormalGlobalFromModel",r=>r.transformNormalGlobalFromModel),new He("transformNormalViewFromGlobal",r=>r.transformNormalViewFromGlobal)]),t.vertex.code.add(l`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`)):e.normalType===Q.Ground?(t.include(Ao,e),t.varyings.add("vNormalWorld","vec3"),t.vertex.code.add(l`
    void forwardNormal() {
      vNormalWorld = ${e.spherical?l`normalize(vPositionWorldCameraRelative);`:l`vec3(0.0, 0.0, 1.0);`}
    }
    `)):t.vertex.code.add(l`void forwardNormal() {}`)}class el extends Jn{constructor(){super(...arguments),this.transformNormalViewFromGlobal=cr()}}const tl=.1,Ur=.001;class So{constructor(e,r){this._module=e,this._loadModule=r}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}class rl{constructor(e,r,i){this.release=i,this.initializeConfiguration(e,r),this._configuration=r.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}destroy(){this._program=xr(this._program),this._pipeline=this._configuration=null}reload(e){xr(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.isCompiled}get key(){return this._configuration.key}get configuration(){return this._configuration}bindPipelineState(e,r=null,i){e.setPipelineState(this.getPipelineState(r,i))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return Nt.TRIANGLES}getPipelineState(e,r){return this._pipeline}initializeConfiguration(e,r){}}class il{constructor(e,r,i){this._context=e,this._locations=i,this._textures=new Map,this._freeTextureUnits=new Oi({deallocator:null}),this._glProgram=e.programCache.acquire(r.generate("vertex"),r.generate("fragment"),i),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=r.generateBind(V.Pass,this),this.bindDraw=r.generateBind(V.Draw,this),this._fragmentUniforms=Sr()?r.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get isCompiled(){return this._glProgram.isCompiled}setUniform1b(e,r){this._glProgram.setUniform1i(e,r?1:0)}setUniform1i(e,r){this._glProgram.setUniform1i(e,r)}setUniform1f(e,r){this._glProgram.setUniform1f(e,r)}setUniform2fv(e,r){this._glProgram.setUniform2fv(e,r)}setUniform3fv(e,r){this._glProgram.setUniform3fv(e,r)}setUniform4fv(e,r){this._glProgram.setUniform4fv(e,r)}setUniformMatrix3fv(e,r){this._glProgram.setUniformMatrix3fv(e,r)}setUniformMatrix4fv(e,r){this._glProgram.setUniformMatrix4fv(e,r)}setUniform1fv(e,r){this._glProgram.setUniform1fv(e,r)}setUniform1iv(e,r){this._glProgram.setUniform1iv(e,r)}setUniform2iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform3iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform4iv(e,r){this._glProgram.setUniform4iv(e,r)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,r){if(W(r)||r.glName==null){const o=this._textures.get(e);return o&&(this._context.bindTexture(null,o.unit),this._freeTextureUnit(o),this._textures.delete(e)),null}let i=this._textures.get(e);return i==null?(i=this._allocTextureUnit(r),this._textures.set(e,i)):i.texture=r,this._context.useProgram(this),this.setUniform1i(e,i.unit),this._context.bindTexture(r,i.unit),i.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((e,r)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(r,e.unit)}),p(this._fragmentUniforms)&&this._fragmentUniforms.forEach(e=>{e.type!=="sampler2D"&&e.type!=="samplerCube"||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)})}_allocTextureUnit(e){return{texture:e,unit:this._freeTextureUnits.length===0?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}ye.LESS;ye.ALWAYS;const ol={mask:255},al={function:{func:ye.ALWAYS,ref:Ce.OutlineVisualElementMask,mask:Ce.OutlineVisualElementMask},operation:{fail:fe.KEEP,zFail:fe.KEEP,zPass:fe.ZERO}},sl={function:{func:ye.ALWAYS,ref:Ce.OutlineVisualElementMask,mask:Ce.OutlineVisualElementMask},operation:{fail:fe.KEEP,zFail:fe.KEEP,zPass:fe.REPLACE}};ye.EQUAL,Ce.OutlineVisualElementMask,Ce.OutlineVisualElementMask,fe.KEEP,fe.KEEP,fe.KEEP;ye.NOTEQUAL,Ce.OutlineVisualElementMask,Ce.OutlineVisualElementMask,fe.KEEP,fe.KEEP,fe.KEEP;function Ro(t,e){switch(e.output){case y.Color:if(e.receiveShadows)return t.varyings.add("linearDepth","float"),void t.vertex.code.add(l`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case y.Depth:case y.Shadow:case y.ShadowHighlight:case y.ShadowExludeHighlight:return t.include(Ao,e),t.varyings.add("linearDepth","float"),t.vertex.uniforms.add(new st("nearFar",(r,i)=>i.camera.nearFar)),void t.vertex.code.add(l`void forwardLinearDepth() {
linearDepth = (-vPosition_view.z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}t.vertex.code.add(l`void forwardLinearDepth() {}`)}function yo(t){t.vertex.code.add(l`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function it(t,e){nl(t,e,[new Ee("slicePlaneOrigin",(r,i)=>ll(e,r,i)),new Ee("slicePlaneBasis1",(r,i)=>{var o;return Ri(e,r,i,(o=Tr(i.slicePlane))==null?void 0:o.basis1)}),new Ee("slicePlaneBasis2",(r,i)=>{var o;return Ri(e,r,i,(o=Tr(i.slicePlane))==null?void 0:o.basis2)})])}function nl(t,e,r){if(!e.hasSlicePlane){const s=l`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return e.hasSliceInVertexProgram&&t.vertex.code.add(s),void t.fragment.code.add(s)}t.extensions.add("GL_OES_standard_derivatives"),e.hasSliceInVertexProgram&&t.vertex.uniforms.add(r),t.fragment.uniforms.add(r);const i=l`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,o=l`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,a=e.hasSliceHighlight?l`
        ${o}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:l`#define highlightSlice(_color_, _pos_) (_color_)`;e.hasSliceInVertexProgram&&t.vertex.code.add(i),t.fragment.code.add(i),t.fragment.code.add(a)}function Co(t,e,r){return t.instancedDoublePrecision?ge(cl,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):e.slicePlaneLocalOrigin}function wo(t,e){return p(t)?rt(ir,e.origin,t):e.origin}function Mo(t,e,r){return t.hasSliceTranslatedView?p(e)?br(dl,r.camera.viewMatrix,e):r.camera.viewMatrix:null}function ll(t,e,r){if(W(r.slicePlane))return Nr;const i=Co(t,e,r),o=wo(i,r.slicePlane),a=Mo(t,i,r);return p(a)?Dt(ir,o,a):o}function Ri(t,e,r,i){if(W(i)||W(r.slicePlane))return Nr;const o=Co(t,e,r),a=wo(o,r.slicePlane),s=Mo(t,o,r);return p(s)?(Ni(Mt,i,a),Dt(ir,a,s),Dt(Mt,Mt,s),rt(Mt,Mt,ir)):i}const cl=H(),ir=H(),Mt=H(),dl=Pr();function Lt(t,e){if(e.hasModelTransformation)return t.vertex.code.add(l`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`),void t.vertex.code.add(l`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);t.vertex.code.add(l`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`),t.vertex.code.add(l`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}class Oo{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,r={key:this.key};for(const i of e)r[i]=this[i];return r}}function T(t={}){return(e,r)=>{var i,o;if(e._parameterNames=(i=e._parameterNames)!=null?i:[],e._parameterNames.push(r),t.constValue!=null)Object.defineProperty(e,r,{get:()=>t.constValue});else{const a=e._parameterNames.length-1,s=t.count||2,n=Math.ceil(Math.log2(s)),d=(o=e._parameterBits)!=null?o:[0];let c=0;for(;d[c]+n>16;)c++,c>=d.length&&d.push(0);e._parameterBits=d;const u=d[c],g=(1<<n)-1<<u;d[c]+=n,Object.defineProperty(e,r,{get(){return this[a]},set(m){if(this[a]!==m&&(this[a]=m,this._keyDirty=!0,this._parameterBits[c]=this._parameterBits[c]&~g|+m<<u&g,typeof m!="number"&&typeof m!="boolean"))throw"Configuration value for "+r+" must be boolean or number, got "+typeof m}})}}}class ul extends Oo{constructor(){super(...arguments),this.instancedDoublePrecision=!1}}function No(t,e){e.instanced&&e.instancedDoublePrecision&&(t.attributes.add(f.MODELORIGINHI,"vec3"),t.attributes.add(f.MODELORIGINLO,"vec3"),t.attributes.add(f.MODEL,"mat3"),t.attributes.add(f.MODELNORMAL,"mat3"));const r=t.vertex;e.instancedDoublePrecision&&(r.include(To,e),r.uniforms.add(new Ee("viewOriginHi",(i,o)=>js(ge(jt,o.camera.viewInverseTransposeMatrix[3],o.camera.viewInverseTransposeMatrix[7],o.camera.viewInverseTransposeMatrix[11]),jt))),r.uniforms.add(new Ee("viewOriginLo",(i,o)=>Xs(ge(jt,o.camera.viewInverseTransposeMatrix[3],o.camera.viewInverseTransposeMatrix[7],o.camera.viewInverseTransposeMatrix[11]),jt)))),r.code.add(l`
    vec3 calculateVPos() {
      ${e.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),r.code.add(l`
    vec3 subtractOrigin(vec3 _pos) {
      ${e.instancedDoublePrecision?l`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),r.code.add(l`
    vec3 dpNormal(vec4 _normal) {
      ${e.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),e.output===y.Normal&&(r.uniforms.add(new vt("viewNormal",(i,o)=>o.camera.viewInverseTransposeMatrix)),r.code.add(l`
    vec3 dpNormalView(vec4 _normal) {
      ${e.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),e.hasVertexTangents&&r.code.add(l`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${e.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)}x([T()],ul.prototype,"instancedDoublePrecision",void 0);const jt=H();function hl(t){t.vertex.code.add(l`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${l.int(Ie.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${l.int(Ie.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${l.int(Ie.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${l.int(Ie.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}class Po extends J{constructor(e,r){super(e,"int",V.Pass,(i,o,a)=>i.setUniform1i(e,r(o,a)))}}function Io(t,e){e.hasSymbolColors?(t.include(hl),t.attributes.add(f.SYMBOLCOLOR,"vec4"),t.varyings.add("colorMixMode","mediump float"),t.vertex.code.add(l`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(t.fragment.uniforms.add(new Po("colorMixMode",r=>sn[r.colorMixMode])),t.vertex.code.add(l`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function Lo(t,e){e.hasVertexColors?(t.attributes.add(f.COLOR,"vec4"),t.varyings.add("vColor","vec4"),t.vertex.code.add(l`void forwardVertexColor() { vColor = color; }`),t.vertex.code.add(l`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):t.vertex.code.add(l`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}function ml(t){t.vertex.code.add(l`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),t.vertex.code.add(l`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),t.vertex.code.add(l`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),t.vertex.code.add(l`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),t.vertex.code.add(l`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),t.vertex.code.add(l`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),t.vertex.code.add(l`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function fl(t){t.uniforms.add(new te("screenSizePerspectiveAlignment",e=>pl(e.screenSizePerspectiveAlignment||e.screenSizePerspective)))}function pl(t){return me(gl,t.parameters.divisor,t.parameters.offset,t.parameters.minPixelSize,t.paddingPixelsOverride)}const gl=lr();class vl extends J{constructor(e,r){super(e,"mat4",V.Draw,(i,o,a)=>i.setUniformMatrix4fv(e,r(o,a)))}}function Vt(t,e){e.instancedDoublePrecision?t.constants.add("cameraPosition","vec3",Nr):t.uniforms.add(new Ee("cameraPosition",(r,i)=>ge(Fo,i.camera.viewInverseTransposeMatrix[3]-r.origin[0],i.camera.viewInverseTransposeMatrix[7]-r.origin[1],i.camera.viewInverseTransposeMatrix[11]-r.origin[2])))}function Ft(t,e){if(t.vertex.uniforms.add(new vt("proj",(i,o)=>o.camera.projectionMatrix)),!e.instancedDoublePrecision)return void t.vertex.uniforms.add([new vl("view",(i,o)=>br(yi,o.camera.viewMatrix,i.origin)),new Ee("localOrigin",i=>i.origin)]);const r=i=>ge(Fo,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]);t.vertex.uniforms.add([new vt("view",(i,o)=>br(yi,o.camera.viewMatrix,r(o))),new X("localOrigin",(i,o)=>r(o))])}const yi=ma(),Fo=H();function $o(t,e){const r=t.vertex;e.hasVerticalOffset?(xl(r),e.hasScreenSizePerspective&&(t.include(ml),fl(r),Vt(t.vertex,e)),r.code.add(l`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${e.spherical?l`vec3 worldNormal = normalize(worldPos + localOrigin);`:l`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${e.hasScreenSizePerspective?l`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:l`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(l`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const _l=lr();function xl(t){t.uniforms.add(new te("verticalOffset",(e,r)=>{const{minWorldLength:i,maxWorldLength:o,screenLength:a}=e.verticalOffset,s=Math.tan(.5*r.camera.fovY)/(.5*r.camera.fullViewport[3]),n=r.camera.pixelRatio||1;return me(_l,a*n,s,i,o)}))}function Tl(t,e){const r=e.output===y.ObjectAndLayerIdColor,i=e.objectAndLayerIdColorInstanced;r&&(t.varyings.add("objectAndLayerIdColorVarying","vec4"),i?t.attributes.add(f.OBJECTANDLAYERIDCOLOR_INSTANCED,"vec4"):t.attributes.add(f.OBJECTANDLAYERIDCOLOR,"vec4")),t.vertex.code.add(l`
     void forwardObjectAndLayerIdColor() {
      ${r?i?l`objectAndLayerIdColorVarying = objectAndLayerIdColor_instanced * 0.003921568627451;`:l`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:l``} }`),t.fragment.code.add(l`
      void outputObjectAndLayerIdColor() {
        ${r?l`gl_FragColor = objectAndLayerIdColorVarying;`:l``} }`)}function Vr(t){t.code.add(l`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}function bl(t,e){switch(t.fragment.include(Vr),e.output){case y.Shadow:case y.ShadowHighlight:case y.ShadowExludeHighlight:t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(l`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`);break;case y.Depth:t.fragment.code.add(l`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}}const Al=sr(1,1,0,1),El=sr(1,0,1,1);function Sl(t){t.fragment.uniforms.add(new ue("depthTex",(e,r)=>r.highlightDepthTexture)),t.fragment.uniforms.add(new st("highlightViewportPixelSz",(e,r)=>r.inverseViewport)),t.fragment.constants.add("occludedHighlightFlag","vec4",Al).add("unoccludedHighlightFlag","vec4",El),t.fragment.code.add(l`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, fragCoord.xy * highlightViewportPixelSz.xy).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`)}class Rl extends J{constructor(e,r,i){super(e,"vec4",V.Pass,(o,a,s)=>o.setUniform4fv(e,r(a,s)),i)}}class yl extends J{constructor(e,r,i){super(e,"float",V.Pass,(o,a,s)=>o.setUniform1fv(e,r(a,s)),i)}}const pr=8;function $t(t,e){e.hasVvInstancing&&(e.vvSize||e.vvColor)&&t.attributes.add(f.INSTANCEFEATUREATTRIBUTE,"vec4");const r=t.vertex;e.vvSize?(r.uniforms.add(new X("vvSizeMinSize",i=>i.vvSizeMinSize)),r.uniforms.add(new X("vvSizeMaxSize",i=>i.vvSizeMaxSize)),r.uniforms.add(new X("vvSizeOffset",i=>i.vvSizeOffset)),r.uniforms.add(new X("vvSizeFactor",i=>i.vvSizeFactor)),r.uniforms.add(new He("vvSymbolRotationMatrix",i=>i.vvSymbolRotationMatrix)),r.uniforms.add(new X("vvSymbolAnchor",i=>i.vvSymbolAnchor)),r.code.add(l`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(l`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${e.hasVvInstancing?l`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(l`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),e.vvColor?(r.constants.add("vvColorNumber","int",pr),e.hasVvInstancing&&r.uniforms.add([new yl("vvColorValues",i=>i.vvColorValues,pr),new Rl("vvColorColors",i=>i.vvColorColors,pr)]),r.code.add(l`
      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${e.hasVvInstancing?l`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):r.code.add(l`vec4 vvColor() { return vec4(1.0); }`)}function Cl(t){t.fragment.code.add(l`
    #define discardOrAdjustAlpha(color) { if (color.a < ${l.float(Ur)}) { discard; } }
  `)}class ie extends J{constructor(e,r){super(e,"float",V.Pass,(i,o,a)=>i.setUniform1f(e,r(o,a)))}}function ot(t,e){wl(t,e,new ie("textureAlphaCutoff",r=>r.textureAlphaCutoff))}function wl(t,e,r){const i=t.fragment;switch(e.alphaDiscardMode!==Y.Mask&&e.alphaDiscardMode!==Y.MaskBlend||i.uniforms.add(r),e.alphaDiscardMode){case Y.Blend:return t.include(Cl);case Y.Opaque:i.code.add(l`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case Y.Mask:i.code.add(l`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case Y.MaskBlend:t.fragment.code.add(l`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function Do(t,e){const r=t.vertex.code,i=t.fragment.code,o=e.hasModelTransformation;switch(o&&t.vertex.uniforms.add(new vt("model",a=>p(a.modelTransformation)?a.modelTransformation:Bi)),e.output){case y.Depth:case y.Shadow:case y.ShadowHighlight:case y.ShadowExludeHighlight:case y.ObjectAndLayerIdColor:Ft(t,e),t.include(Lt,e),t.include(pt,e),t.include($t,e),t.include(bl,e),t.include(it,e),t.include(Tl,e),t.vertex.uniforms.add(new st("nearFar",(a,s)=>s.camera.nearFar)),t.varyings.add("depth","float"),e.hasColorTexture&&t.fragment.uniforms.add(new ue("tex",a=>a.texture)),r.add(l`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPositionWithDepth(proj, view, ${o?"model,":""} vpos, nearFar, depth);
            forwardTextureCoordinates();
            forwardObjectAndLayerIdColor();
          }
        `),t.include(ot,e),i.add(l`
          void main(void) {
            discardBySlice(vpos);
            ${e.hasColorTexture?l`
                    vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?l`colorUV`:l`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${e.output===y.ObjectAndLayerIdColor?l`outputObjectAndLayerIdColor();`:l`outputDepth(depth);`}
          }
        `);break;case y.Normal:Ft(t,e),t.include(Lt,e),t.include(ur,e),t.include(Eo,e),t.include(pt,e),t.include($t,e),e.hasColorTexture&&t.fragment.uniforms.add(new ue("tex",a=>a.texture)),t.varyings.add("vPositionView","vec3"),r.add(l`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            ${e.normalType===Q.Attribute?l`
            vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${o?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),t.include(it,e),t.include(ot,e),i.add(l`
          void main() {
            discardBySlice(vpos);
            ${e.hasColorTexture?l`
                    vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?l`colorUV`:l`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${e.normalType===Q.ScreenDerivative?l`
                vec3 normal = screenDerivativeNormal(vPositionView);`:l`
                vec3 normal = normalize(vNormalWorld);
                if (gl_FrontFacing == false) normal = -normal;`}
            gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
          }
        `);break;case y.Highlight:Ft(t,e),t.include(Lt,e),t.include(pt,e),t.include($t,e),e.hasColorTexture&&t.fragment.uniforms.add(new ue("tex",a=>a.texture)),r.add(l`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${o?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),t.include(it,e),t.include(ot,e),t.include(Sl),i.add(l`
          void main() {
            discardBySlice(vpos);
            ${e.hasColorTexture?l`
                    vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?l`colorUV`:l`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}function Ml(t,e){const r=t.fragment;if(e.hasVertexTangents?(t.attributes.add(f.TANGENT,"vec4"),t.varyings.add("vTangent","vec4"),e.doubleSidedMode===se.WindingOrder?r.code.add(l`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(l`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(t.extensions.add("GL_OES_standard_derivatives"),r.code.add(l`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),e.textureCoordinateType!==ae.None){t.include(ro,e);const i=e.supportsTextureAtlas?pe.Size:pe.None;r.uniforms.add(e.pbrTextureBindType===V.Pass?Yt("normalTexture",o=>o.textureNormal,i):Kt("normalTexture",o=>o.textureNormal,i)),r.code.add(l`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${e.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `)}}function Gr(t,e){const r=t.fragment;e.receiveAmbientOcclusion?(r.uniforms.add([new ue("ssaoTex",(i,o)=>o.ssaoHelper.colorTexture),new te("viewportPixelSz",(i,o)=>me(Ol,o.camera.fullViewport[0],o.camera.fullViewport[1],1/o.ssaoHelper.width,1/o.ssaoHelper.height))]),r.code.add(l`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
return texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}`)):r.code.add(l`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}const Ol=lr();function Nl(t,e){const r=t.fragment,i=e.lightingSphericalHarmonicsOrder!==void 0?e.lightingSphericalHarmonicsOrder:2;i===0?(r.uniforms.add(new X("lightingAmbientSH0",(o,a)=>ge(Ci,a.lighting.sh.r[0],a.lighting.sh.g[0],a.lighting.sh.b[0]))),r.code.add(l`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):i===1?(r.uniforms.add([new te("lightingAmbientSH_R",(o,a)=>me(Oe,a.lighting.sh.r[0],a.lighting.sh.r[1],a.lighting.sh.r[2],a.lighting.sh.r[3])),new te("lightingAmbientSH_G",(o,a)=>me(Oe,a.lighting.sh.g[0],a.lighting.sh.g[1],a.lighting.sh.g[2],a.lighting.sh.g[3])),new te("lightingAmbientSH_B",(o,a)=>me(Oe,a.lighting.sh.b[0],a.lighting.sh.b[1],a.lighting.sh.b[2],a.lighting.sh.b[3]))]),r.code.add(l`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):i===2&&(r.uniforms.add([new X("lightingAmbientSH0",(o,a)=>ge(Ci,a.lighting.sh.r[0],a.lighting.sh.g[0],a.lighting.sh.b[0])),new te("lightingAmbientSH_R1",(o,a)=>me(Oe,a.lighting.sh.r[1],a.lighting.sh.r[2],a.lighting.sh.r[3],a.lighting.sh.r[4])),new te("lightingAmbientSH_G1",(o,a)=>me(Oe,a.lighting.sh.g[1],a.lighting.sh.g[2],a.lighting.sh.g[3],a.lighting.sh.g[4])),new te("lightingAmbientSH_B1",(o,a)=>me(Oe,a.lighting.sh.b[1],a.lighting.sh.b[2],a.lighting.sh.b[3],a.lighting.sh.b[4])),new te("lightingAmbientSH_R2",(o,a)=>me(Oe,a.lighting.sh.r[5],a.lighting.sh.r[6],a.lighting.sh.r[7],a.lighting.sh.r[8])),new te("lightingAmbientSH_G2",(o,a)=>me(Oe,a.lighting.sh.g[5],a.lighting.sh.g[6],a.lighting.sh.g[7],a.lighting.sh.g[8])),new te("lightingAmbientSH_B2",(o,a)=>me(Oe,a.lighting.sh.b[5],a.lighting.sh.b[6],a.lighting.sh.b[7],a.lighting.sh.b[8]))]),r.code.add(l`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),e.pbrMode!==U.Normal&&e.pbrMode!==U.Schematic||r.code.add(l`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const Ci=H(),Oe=lr();function Pl(t,e){const r=t.fragment;e.isGround?r.uniforms.add(new ie("lightingFixedFactor",(i,o)=>(1-o.lighting.groundLightingFactor)*(1-o.lighting.globalFactor))):r.constants.add("lightingFixedFactor","float",0),r.uniforms.add([new X("lightingMainDirection",(i,o)=>o.lighting.lightingMainDirection),new X("lightingMainIntensity",(i,o)=>o.lighting.mainLight.intensity)]),r.code.add(l`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}function Il(t){const e=t.fragment.code;e.add(l`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.add(l`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.add(l`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function Bo(t){t.vertex.code.add(l`const float PI = 3.141592653589793;`),t.fragment.code.add(l`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}function Hr(t,e){const r=t.fragment.code;t.include(Bo),e.pbrMode===U.Water||e.pbrMode===U.WaterOnIntegratedMesh?(r.add(l`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${e.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(l`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(l`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(l`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(l`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):e.pbrMode!==U.Normal&&e.pbrMode!==U.Schematic||(t.include(Il),r.add(l`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(l`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(l`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),r.add(l`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(l`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(l`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}class Ll extends J{constructor(e,r){super(e,"bool",V.Pass,(i,o,a)=>i.setUniform1b(e,r(o,a)))}}const kr=.4;function zo(t,e){const r=t.fragment;t.include(Gr,e),e.pbrMode!==U.Disabled&&t.include(Hr,e),t.include(Nl,e),r.constants.add("ambientBoostFactor","float",kr),t.include(Bo),r.code.add(l`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${e.pbrMode===U.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),r.uniforms.add(new X("lightingMainDirection",(i,o)=>o.lighting.lightingMainDirection)),r.code.add(l`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${e.spherical?l`normalize(vPosWorld)`:l`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),r.uniforms.add([new ie("lightingGlobalFactor",(i,o)=>o.lighting.globalFactor),new X("lightingMainIntensity",(i,o)=>o.lighting.mainLight.intensity)]),r.code.add(l`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),e.pbrMode===U.Disabled||e.pbrMode===U.WaterOnIntegratedMesh?(t.include(Pl,e),r.code.add(l`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`)):e.pbrMode!==U.Normal&&e.pbrMode!==U.Schematic||(r.code.add(l`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(l`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),e.useFillLights?r.uniforms.add(new Ll("hasFillLights",(i,o)=>o.enableFillLights)):r.constants.add("hasFillLights","bool",!1),r.code.add(l`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add([new ie("lightingSpecularStrength",(i,o)=>o.lighting.mainLight.specularStrength),new ie("lightingEnvironmentStrength",(i,o)=>o.lighting.mainLight.environmentStrength)]),r.code.add(l`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(l`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${e.pbrMode===U.Schematic?l`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:l`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}function Fl(t){t.include(Vr),t.code.add(l`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}function or(t,e){e.hasMultipassTerrain&&(t.fragment.include(Fl),t.fragment.uniforms.add(new ue("terrainDepthTexture",(r,i)=>i.multipassTerrain.linearDepthTexture)),t.fragment.uniforms.add(new st("nearFar",(r,i)=>i.camera.nearFar)),t.fragment.uniforms.add(new st("inverseViewport",(r,i)=>i.inverseViewport)),t.fragment.code.add(l`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${e.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `))}class $l extends J{constructor(e,r,i){super(e,"mat4",V.Draw,(o,a,s)=>o.setUniformMatrix4fv(e,r(a,s)),i)}}class Dl extends J{constructor(e,r,i){super(e,"mat4",V.Pass,(o,a,s)=>o.setUniformMatrix4fv(e,r(a,s)),i)}}function Uo(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new Dl("shadowMapMatrix",(r,i)=>i.shadowMap.getShadowMapMatrices(r.origin),4)),Go(t))}function Vo(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new $l("shadowMapMatrix",(r,i)=>i.shadowMap.getShadowMapMatrices(r.origin),4)),Go(t))}function Go(t){const e=t.fragment;e.include(Vr),e.uniforms.add([new ue("shadowMapTex",(r,i)=>i.shadowMap.depthTexture),new Po("numCascades",(r,i)=>i.shadowMap.numCascades),new te("cascadeDistances",(r,i)=>i.shadowMap.cascadeDistances),new ie("depthHalfPixelSz",(r,i)=>.5/i.shadowMap.textureSize)]),e.code.add(l`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture2D(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
float texSize = 0.5 / halfPixelSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, depthHalfPixelSz, shadowMapTex);
}`)}function Bl(t){t.vertex.uniforms.add(new He("colorTextureTransformMatrix",e=>p(e.colorTextureTransformMatrix)?e.colorTextureTransformMatrix:nt())),t.varyings.add("colorUV","vec2"),t.vertex.code.add(l`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function zl(t){t.vertex.uniforms.add(new He("normalTextureTransformMatrix",e=>p(e.normalTextureTransformMatrix)?e.normalTextureTransformMatrix:nt())),t.varyings.add("normalUV","vec2"),t.vertex.code.add(l`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Ul(t){t.vertex.uniforms.add(new He("emissiveTextureTransformMatrix",e=>p(e.emissiveTextureTransformMatrix)?e.emissiveTextureTransformMatrix:nt())),t.varyings.add("emissiveUV","vec2"),t.vertex.code.add(l`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Vl(t){t.vertex.uniforms.add(new He("occlusionTextureTransformMatrix",e=>p(e.occlusionTextureTransformMatrix)?e.occlusionTextureTransformMatrix:nt())),t.varyings.add("occlusionUV","vec2"),t.vertex.code.add(l`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Gl(t){t.vertex.uniforms.add(new He("metallicRoughnessTextureTransformMatrix",e=>p(e.metallicRoughnessTextureTransformMatrix)?e.metallicRoughnessTextureTransformMatrix:nt())),t.varyings.add("metallicRoughnessUV","vec2"),t.vertex.code.add(l`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Hl(t){t.code.add(l`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function ar(t){t.include(Hl),t.code.add(l`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${l.int(Ie.Multiply)}) {
        return allMixed;
      }
      if (mode == ${l.int(Ie.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${l.int(Ie.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${l.int(Ie.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${l.int(Ie.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}function kl(t){const e=new $r,r=e.vertex.code,i=e.fragment.code;return Ft(e,t),e.include(zr),e.varyings.add("vpos","vec3"),e.include($t,t),e.include(No,t),e.include($o,t),t.hasColorTextureTransform&&e.include(Bl),t.output!==y.Color&&t.output!==y.Alpha||(t.hasNormalTextureTransform&&e.include(zl),t.hasEmissionTextureTransform&&e.include(Ul),t.hasOcclusionTextureTransform&&e.include(Vl),t.hasMetallicRoughnessTextureTransform&&e.include(Gl),Vt(e.vertex,t),e.include(ur,t),e.include(Lt,t),t.normalType===Q.Attribute&&t.offsetBackfaces&&e.include(yo),e.include(Ml,t),e.include(Eo,t),t.instancedColor&&e.attributes.add(f.INSTANCECOLOR,"vec4"),e.varyings.add("localvpos","vec3"),e.include(pt,t),e.include(Ro,t),e.include(Io,t),e.include(Lo,t),e.vertex.uniforms.add(new te("externalColor",o=>o.externalColor)),e.varyings.add("vcolorExt","vec4"),t.hasMultipassTerrain&&e.varyings.add("depth","float"),t.hasModelTransformation&&e.vertex.uniforms.add(new vt("model",o=>p(o.modelTransformation)?o.modelTransformation:Bi)),r.add(l`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${t.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${l.float(Ur)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${t.normalType===Q.Attribute?l`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${t.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${t.hasModelTransformation?"model,":""} vpos);
          ${t.normalType===Q.Attribute&&t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${t.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${t.hasColorTextureTransform?l`forwardColorUV();`:""}
        ${t.hasNormalTextureTransform?l`forwardNormalUV();`:""}
        ${t.hasEmissionTextureTransform?l`forwardEmissiveUV();`:""}
        ${t.hasOcclusionTextureTransform?l`forwardOcclusionUV();`:""}
        ${t.hasMetallicRoughnessTextureTransform?l`forwardMetallicRoughnessUV();`:""}
      }
    `)),t.output===y.Alpha&&(e.include(it,t),e.include(ot,t),e.include(or,t),e.fragment.uniforms.add([new ie("opacity",o=>o.opacity),new ie("layerOpacity",o=>o.layerOpacity)]),t.hasColorTexture&&e.fragment.uniforms.add(new ue("tex",o=>o.texture)),e.fragment.include(ar),i.add(l`
      void main() {
        discardBySlice(vpos);
        ${t.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${t.hasColorTexture?l`
                vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?l`colorUV`:l`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:l`vec4 texColor = vec4(1.0);`}
        ${t.hasVertexColors?l`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:l`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        gl_FragColor = vec4(opacity_);
      }
    `)),t.output===y.Color&&(e.include(it,t),e.include(zo,t),e.include(Gr,t),e.include(ot,t),e.include(t.instancedDoublePrecision?Uo:Vo,t),e.include(or,t),Vt(e.fragment,t),e.fragment.uniforms.add([e.vertex.uniforms.get("localOrigin"),new X("ambient",o=>o.ambient),new X("diffuse",o=>o.diffuse),new ie("opacity",o=>o.opacity),new ie("layerOpacity",o=>o.layerOpacity),new ie("lightingGlobalFactor",(o,a)=>a.lighting.globalFactor),new X("lightingMainIntensity",(o,a)=>a.lighting.mainLight.intensity)]),e.fragment.constants.add("ambientBoostFactor","float",kr),t.hasColorTexture&&e.fragment.uniforms.add(new ue("tex",o=>o.texture)),e.include(io,t),e.include(Hr,t),e.fragment.include(ar),e.include($s,t),i.add(l`
      void main() {
        discardBySlice(vpos);
        ${t.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${t.hasColorTexture?l`
                vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?l`colorUV`:l`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:l`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${t.normalType===Q.ScreenDerivative?l`
                vec3 normal = screenDerivativeNormal(localvpos);`:l`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${t.pbrMode===U.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        ${t.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":t.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${t.hasVertexColors?l`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:l`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${t.hasNormalTexture?l`
                mat3 tangentSpace = ${t.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`:l`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${t.spherical?l`normalize(vpos + localOrigin);`:l`vec3(0.0, 0.0, 1.0);`}

        ${t.snowCover?l`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${t.pbrMode===U.Normal||t.pbrMode===U.Schematic?l`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
                ${t.snowCover?l`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:l`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.transparencyPassType===_e.Color?l`gl_FragColor = premultiplyAlpha(gl_FragColor);`:""}
      }
    `)),e.include(Do,t),e}const Wl=Object.freeze(Object.defineProperty({__proto__:null,build:kl},Symbol.toStringTag,{value:"Module"}));class ql extends el{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=ct(0,1,.5),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=ve.Back,this.emissiveFactor=ct(0,0,0),this.instancedDoublePrecision=!1,this.normals="default",this.receiveSSAO=!0,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=ct(.2,.2,.2),this.diffuse=ct(.8,.8,.8),this.externalColor=sr(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=H(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSizeEnabled=!1,this.vvSizeMinSize=[1,1,1],this.vvSizeMaxSize=[100,100,100],this.vvSizeOffset=[0,0,0],this.vvSizeFactor=[1,1,1],this.vvSizeValue=[1,1,1],this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.vvSymbolAnchor=[0,0,0],this.vvSymbolRotationMatrix=cr(),this.vvOpacityEnabled=!1,this.vvOpacityValues=[],this.vvOpacityOpacities=[],this.transparent=!1,this.writeDepth=!0,this.customDepthTest=at.Less,this.textureAlphaMode=Y.Blend,this.textureAlphaCutoff=tl,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=Cr.Occlude}}class Gt extends rl{initializeConfiguration(e,r){r.spherical=e.viewingMode===Rr.Global,r.doublePrecisionRequiresObfuscation=Zn(e.rctx),r.textureCoordinateType=r.hasColorTexture||r.hasMetallicRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture?ae.Default:ae.None,r.objectAndLayerIdColorInstanced=r.instanced}initializeProgram(e){return this._initializeProgram(e,Gt.shader)}_initializeProgram(e,r){return new il(e.rctx,r.get().build(this.configuration),Br)}_convertDepthTestFunction(e){return e===at.Lequal?ye.LEQUAL:ye.LESS}_makePipeline(e,r){const i=this.configuration,o=e===_e.NONE,a=e===_e.FrontFace;return En({blending:i.output!==y.Color&&i.output!==y.Alpha||!i.transparent?null:o?Ln:Dn(e),culling:jl(i)&&hn(i.cullFace),depthTest:{func:Vn(e,this._convertDepthTestFunction(i.customDepthTest))},depthWrite:o||a?i.writeDepth&&mn:null,colorWrite:fn,stencilWrite:i.hasOccludees?ol:null,stencilTest:i.hasOccludees?r?sl:al:null,polygonOffset:o||a?null:Un(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,r){return r?this._occludeePipelineState:super.getPipelineState(e,r)}}function jl(t){return t.cullFace!==ve.None||!t.hasSlicePlane&&!t.transparent&&!t.doubleSidedMode}Gt.shader=new So(Wl,()=>Mr(()=>import("./DefaultMaterial.glsl.262a7009.js"),["assets/DefaultMaterial.glsl.262a7009.js","assets/mat4f64.ff2a477c.js","assets/quatf64.74f3afdd.js","assets/vec3f32.1121a836.js","assets/index.96cac272.js","assets/index.6fd87b6d.css","assets/VertexAttribute.42396f25.js","assets/symbolColorUtils.74cb6fc3.js","assets/vectorStacks.78a180bd.js","assets/byteSizeEstimations.0938bf46.js","assets/vec2.bfaa9e2d.js","assets/devEnvironmentUtils.d8d0484c.js","assets/mat3.f562a113.js","assets/BufferView.e5eedfc2.js","assets/vec33.305d56d9.js","assets/DefaultMaterial_COLOR_GAMMA.6691fb81.js","assets/types.44c7402c.js","assets/enums.23a7fab5.js","assets/Version.92a1e872.js","assets/quat.b686e95d.js","assets/lineSegment.299efb91.js","assets/vec2f32.447fc8c4.js","assets/Util.d73bb965.js","assets/Texture.72f5540c.js","assets/context-util.75241806.js","assets/VertexElementDescriptor.1fdca6da.js","assets/InterleavedLayout.432bd524.js","assets/sphere.5b607634.js"]));class Je extends Oo{}x([T({constValue:!0})],Je.prototype,"hasSliceHighlight",void 0),x([T({constValue:!1})],Je.prototype,"hasSliceInVertexProgram",void 0),x([T({constValue:!1})],Je.prototype,"instancedDoublePrecision",void 0),x([T({constValue:!1})],Je.prototype,"isGround",void 0),x([T({constValue:!1})],Je.prototype,"hasModelTransformation",void 0),x([T({constValue:V.Pass})],Je.prototype,"pbrTextureBindType",void 0);class E extends Je{constructor(){super(...arguments),this.output=y.Color,this.alphaDiscardMode=Y.Opaque,this.doubleSidedMode=se.None,this.pbrMode=U.Disabled,this.cullFace=ve.None,this.transparencyPassType=_e.NONE,this.normalType=Q.Attribute,this.textureCoordinateType=ae.None,this.customDepthTest=at.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}x([T({count:y.COUNT})],E.prototype,"output",void 0),x([T({count:Y.COUNT})],E.prototype,"alphaDiscardMode",void 0),x([T({count:se.COUNT})],E.prototype,"doubleSidedMode",void 0),x([T({count:U.COUNT})],E.prototype,"pbrMode",void 0),x([T({count:ve.COUNT})],E.prototype,"cullFace",void 0),x([T({count:_e.COUNT})],E.prototype,"transparencyPassType",void 0),x([T({count:Q.COUNT})],E.prototype,"normalType",void 0),x([T({count:ae.COUNT})],E.prototype,"textureCoordinateType",void 0),x([T({count:at.COUNT})],E.prototype,"customDepthTest",void 0),x([T()],E.prototype,"spherical",void 0),x([T()],E.prototype,"hasVertexColors",void 0),x([T()],E.prototype,"hasSymbolColors",void 0),x([T()],E.prototype,"hasVerticalOffset",void 0),x([T()],E.prototype,"hasSlicePlane",void 0),x([T()],E.prototype,"hasSliceHighlight",void 0),x([T()],E.prototype,"hasColorTexture",void 0),x([T()],E.prototype,"hasMetallicRoughnessTexture",void 0),x([T()],E.prototype,"hasEmissionTexture",void 0),x([T()],E.prototype,"hasOcclusionTexture",void 0),x([T()],E.prototype,"hasNormalTexture",void 0),x([T()],E.prototype,"hasScreenSizePerspective",void 0),x([T()],E.prototype,"hasVertexTangents",void 0),x([T()],E.prototype,"hasOccludees",void 0),x([T()],E.prototype,"hasMultipassTerrain",void 0),x([T()],E.prototype,"hasModelTransformation",void 0),x([T()],E.prototype,"offsetBackfaces",void 0),x([T()],E.prototype,"vvSize",void 0),x([T()],E.prototype,"vvColor",void 0),x([T()],E.prototype,"receiveShadows",void 0),x([T()],E.prototype,"receiveAmbientOcclusion",void 0),x([T()],E.prototype,"textureAlphaPremultiplied",void 0),x([T()],E.prototype,"instanced",void 0),x([T()],E.prototype,"instancedColor",void 0),x([T()],E.prototype,"objectAndLayerIdColorInstanced",void 0),x([T()],E.prototype,"instancedDoublePrecision",void 0),x([T()],E.prototype,"doublePrecisionRequiresObfuscation",void 0),x([T()],E.prototype,"writeDepth",void 0),x([T()],E.prototype,"transparent",void 0),x([T()],E.prototype,"enableOffset",void 0),x([T()],E.prototype,"cullAboveGround",void 0),x([T()],E.prototype,"snowCover",void 0),x([T()],E.prototype,"hasColorTextureTransform",void 0),x([T()],E.prototype,"hasEmissionTextureTransform",void 0),x([T()],E.prototype,"hasNormalTextureTransform",void 0),x([T()],E.prototype,"hasOcclusionTextureTransform",void 0),x([T()],E.prototype,"hasMetallicRoughnessTextureTransform",void 0),x([T({constValue:!0})],E.prototype,"hasVvInstancing",void 0),x([T({constValue:!1})],E.prototype,"useCustomDTRExponentForWater",void 0),x([T({constValue:!1})],E.prototype,"supportsTextureAtlas",void 0),x([T({constValue:!0})],E.prototype,"useFillLights",void 0);function Xl(t){const e=new $r,r=e.vertex.code,i=e.fragment.code;return Ft(e,t),e.include(zr),e.varyings.add("vpos","vec3"),e.include($t,t),e.include(No,t),e.include($o,t),t.output!==y.Color&&t.output!==y.Alpha||(Vt(e.vertex,t),e.include(ur,t),e.include(Lt,t),t.offsetBackfaces&&e.include(yo),t.instancedColor&&e.attributes.add(f.INSTANCECOLOR,"vec4"),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("localvpos","vec3"),t.hasMultipassTerrain&&e.varyings.add("depth","float"),e.include(pt,t),e.include(Ro,t),e.include(Io,t),e.include(Lo,t),e.vertex.uniforms.add(new te("externalColor",o=>o.externalColor)),e.varyings.add("vcolorExt","vec4"),r.add(l`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${t.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${l.float(Ur)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${t.hasMultipassTerrain?l`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),t.output===y.Alpha&&(e.include(it,t),e.include(ot,t),e.include(or,t),e.fragment.uniforms.add([new ie("opacity",o=>o.opacity),new ie("layerOpacity",o=>o.layerOpacity)]),t.hasColorTexture&&e.fragment.uniforms.add(new ue("tex",o=>o.texture)),e.fragment.include(ar),i.add(l`
      void main() {
        discardBySlice(vpos);
        ${t.hasMultipassTerrain?l`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${t.hasColorTexture?l`
                vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?l`colorUV`:l`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:l`vec4 texColor = vec4(1.0);`}
        ${t.hasVertexColors?l`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:l`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        gl_FragColor = vec4(opacity_);
      }
    `)),t.output===y.Color&&(e.include(it,t),e.include(zo,t),e.include(Gr,t),e.include(ot,t),e.include(t.instancedDoublePrecision?Uo:Vo,t),e.include(or,t),Vt(e.fragment,t),e.fragment.uniforms.add([e.vertex.uniforms.get("localOrigin"),e.vertex.uniforms.get("view"),new X("ambient",o=>o.ambient),new X("diffuse",o=>o.diffuse),new ie("opacity",o=>o.opacity),new ie("layerOpacity",o=>o.layerOpacity),new ie("lightingGlobalFactor",(o,a)=>a.lighting.globalFactor),new X("lightingMainIntensity",(o,a)=>a.lighting.mainLight.intensity)]),e.fragment.constants.add("ambientBoostFactor","float",kr),t.hasColorTexture&&e.fragment.uniforms.add(new ue("tex",o=>o.texture)),e.include(io,t),e.include(Hr,t),e.fragment.include(ar),e.extensions.add("GL_OES_standard_derivatives"),i.add(l`
      void main() {
        discardBySlice(vpos);
        ${t.hasMultipassTerrain?l`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${t.hasColorTexture?l`
                vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?l`colorUV`:l`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:l`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${t.pbrMode===U.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${t.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":t.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${t.hasVertexColors?l`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:l`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${t.snowCover?l`albedo = mix(albedo, vec3(1), 0.9);`:l``}
        ${l`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * lightingMainIntensity;`}
        ${t.pbrMode===U.Normal||t.pbrMode===U.Schematic?t.spherical?l`vec3 normalGround = normalize(vpos + localOrigin);`:l`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:l``}
        ${t.pbrMode===U.Normal||t.pbrMode===U.Schematic?l`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
                ${t.snowCover?l`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:l`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.transparencyPassType===_e.Color?l`gl_FragColor = premultiplyAlpha(gl_FragColor);`:l``}
      }
    `)),e.include(Do,t),e}const Yl=Object.freeze(Object.defineProperty({__proto__:null,build:Xl},Symbol.toStringTag,{value:"Module"}));class hr extends Gt{initializeConfiguration(e,r){super.initializeConfiguration(e,r),r.hasMetallicRoughnessTexture=!1,r.hasEmissionTexture=!1,r.hasOcclusionTexture=!1,r.hasNormalTexture=!1,r.hasModelTransformation=!1,r.normalType=Q.Attribute,r.doubleSidedMode=se.WindingOrder,r.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,hr.shader)}}hr.shader=new So(Yl,()=>Mr(()=>import("./RealisticTree.glsl.d2c28812.js"),["assets/RealisticTree.glsl.d2c28812.js","assets/quatf64.74f3afdd.js","assets/mat4f64.ff2a477c.js","assets/vec3f32.1121a836.js","assets/index.96cac272.js","assets/index.6fd87b6d.css","assets/VertexAttribute.42396f25.js","assets/symbolColorUtils.74cb6fc3.js","assets/vectorStacks.78a180bd.js","assets/byteSizeEstimations.0938bf46.js","assets/vec2.bfaa9e2d.js","assets/devEnvironmentUtils.d8d0484c.js","assets/mat3.f562a113.js","assets/BufferView.e5eedfc2.js","assets/vec33.305d56d9.js","assets/DefaultMaterial_COLOR_GAMMA.6691fb81.js","assets/types.44c7402c.js","assets/enums.23a7fab5.js","assets/Version.92a1e872.js","assets/quat.b686e95d.js","assets/lineSegment.299efb91.js","assets/vec2f32.447fc8c4.js","assets/Util.d73bb965.js","assets/Texture.72f5540c.js","assets/context-util.75241806.js","assets/VertexElementDescriptor.1fdca6da.js","assets/InterleavedLayout.432bd524.js","assets/sphere.5b607634.js"]));class Ho extends ln{constructor(e){super(e,Zl),this.supportsEdges=!0,this._configuration=new E,this._vertexBufferLayout=ec(this.parameters),this._instanceBufferLayout=e.instanced?tc(this.parameters):null}isVisibleForOutput(e){return e!==y.Shadow&&e!==y.ShadowExludeHighlight&&e!==y.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||e.layerOpacity===0)return!1;const{instanced:r,hasVertexColors:i,hasSymbolColors:o,vvColorEnabled:a}=e,s=p(r)&&r.includes("color"),n=e.colorMixMode==="replace",d=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0;return i&&(s||a||o)?!!n||d:i?n?c:d:s||a||o?!!n||d:n?c:d}getConfiguration(e,r){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=!!this.parameters.instanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=this.parameters.vvSizeEnabled,this._configuration.hasVerticalOffset=p(this.parameters.verticalOffset),this._configuration.hasScreenSizePerspective=p(this.parameters.screenSizePerspective),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normals==="screenDerivative"?Q.ScreenDerivative:Q.Attribute,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,p(this.parameters.customDepthTest)&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?ve.None:this.parameters.cullFace,this._configuration.hasMultipassTerrain=r.multipassTerrain.enabled,this._configuration.cullAboveGround=r.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=p(this.parameters.modelTransformation),e!==y.Color&&e!==y.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=se.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&this.parameters.doubleSidedType==="normal"?se.View:this.parameters.doubleSided&&this.parameters.doubleSidedType==="winding-order"?se.WindingOrder:se.None,this._configuration.instancedColor=p(this.parameters.instanced)&&this.parameters.instanced.includes("color"),this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=!!r.ssaoHelper.ready&&this.parameters.receiveSSAO,this._configuration.vvColor=this.parameters.vvColorEnabled,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?U.Schematic:U.Normal:U.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=r.transparencyPassType,this._configuration.enableOffset=r.camera.relativeElevation<Bn,this._configuration.snowCover=this.hasSnowCover(r),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return p(e.weather)&&e.weatherVisible&&e.weather.type==="snowy"&&e.weather.snowCover==="enabled"}intersect(e,r,i,o,a,s,n){if(p(this.parameters.verticalOffset)){const d=o.camera;ge(vr,i[12],i[13],i[14]);let c=null;switch(o.viewingMode){case Rr.Global:c=Or(wi,vr);break;case Rr.Local:c=fa(wi,oc)}let u=0;const g=rt(ac,vr,d.eye),m=Li(g),_=Zr(g,g,1/m);let h=null;this.parameters.screenSizePerspective&&(h=pa(c,_)),u+=rn(d,m,this.parameters.verticalOffset,h,this.parameters.screenSizePerspective),Zr(c,c,u),ga(gr,c,o.transform.inverseRotation),a=rt(rc,a,gr),s=rt(ic,s,gr)}Ks(e,r,o,a,s,kn(o.verticalOffset),n)}requiresSlot(e,r){return r===y.Color||r===y.Alpha||r===y.Depth||r===y.Normal||r===y.Shadow||r===y.ShadowHighlight||r===y.ShadowExludeHighlight||r===y.Highlight||r===y.ObjectAndLayerIdColor?e===(this.parameters.transparent?this.parameters.writeDepth?ut.TRANSPARENT_MATERIAL:ut.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:ut.OPAQUE_MATERIAL)||e===ut.DRAPED_MATERIAL||r===y.ObjectAndLayerIdColor&&this.parameters.writeObjectAndLayerId:!1}createGLMaterial(e){return new Kl(e)}createBufferWriter(){return new Jl(this._vertexBufferLayout,this._instanceBufferLayout)}}class Kl extends Us{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){const r=this._material.parameters;this.updateTexture(r.textureId);const i=e.camera.viewInverseTransposeMatrix;return ge(r.origin,i[3],i[7],i[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(r.treeRendering?hr:Gt,e)}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){return this._output!==y.Color&&this._output!==y.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e)),this._updateParameters(e)}}class Ql extends ql{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.writeObjectAndLayerId=!1,this.hasVertexTangents=!1}}const Zl=new Ql;class Jl{constructor(e,r){this.vertexBufferLayout=e,this.instanceBufferLayout=r}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(f.POSITION).length}write(e,r,i,o){Qn(r,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,i,o)}}function ec(t){const e=t.textureId||t.normalTextureId||t.metallicRoughnessTextureId||t.emissiveTextureId||t.occlusionTextureId,r=ki().vec3f(f.POSITION).vec3f(f.NORMAL);return t.hasVertexTangents&&r.vec4f(f.TANGENT),e&&r.vec2f(f.UV0),t.hasVertexColors&&r.vec4u8(f.COLOR),t.hasSymbolColors&&r.vec4u8(f.SYMBOLCOLOR),Ii("enable-feature:objectAndLayerId-rendering")&&r.vec4u8(f.OBJECTANDLAYERIDCOLOR),r}function tc(t){let e=ki();return e=t.instancedDoublePrecision?e.vec3f(f.MODELORIGINHI).vec3f(f.MODELORIGINLO).mat3f(f.MODEL).mat3f(f.MODELNORMAL):e.mat4f(f.MODEL).mat4f(f.MODELNORMAL),p(t.instanced)&&t.instanced.includes("color")&&(e=e.vec4f(f.INSTANCECOLOR)),p(t.instanced)&&t.instanced.includes("featureAttribute")&&(e=e.vec4f(f.INSTANCEFEATUREATTRIBUTE)),p(t.instanced)&&t.instanced.includes("objectAndLayerIdColor")&&(e=e.vec4u8(f.OBJECTANDLAYERIDCOLOR_INSTANCED)),e}const rc=H(),ic=H(),oc=ct(0,0,1),wi=H(),gr=H(),vr=H(),ac=H(),Pe=_t.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function sc(t,e){const r=await nc(t,e);return{resource:r,textures:await hc(r.textureDefinitions,e)}}async function nc(t,e){const r=p(e)&&e.streamDataRequester;if(r)return lc(t,r,e);const i=await Fi(Mi(t,Tr(e)));if(i.ok===!0)return i.value.data;$i(i.error),ko(i.error)}async function lc(t,e,r){const i=await Fi(e.request(t,"json",r));if(i.ok===!0)return i.value;$i(i.error),ko(i.error.details.url)}function ko(t){throw new wr("",`Request for object resource failed: ${t}`)}function cc(t){const e=t.params,r=e.topology;let i=!0;switch(e.vertexAttributes||(Pe.warn("Geometry must specify vertex attributes"),i=!1),e.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const a=e.faces;if(a){if(e.vertexAttributes)for(const s in e.vertexAttributes){const n=a[s];n&&n.values?(n.valueType!=null&&n.valueType!=="UInt32"&&(Pe.warn(`Unsupported indexed geometry indices type '${n.valueType}', only UInt32 is currently supported`),i=!1),n.valuesPerElement!=null&&n.valuesPerElement!==1&&(Pe.warn(`Unsupported indexed geometry values per element '${n.valuesPerElement}', only 1 is currently supported`),i=!1)):(Pe.warn(`Indexed geometry does not specify face indices for '${s}' attribute`),i=!1)}}else Pe.warn("Indexed geometries must specify faces"),i=!1;break}default:Pe.warn(`Unsupported topology '${r}'`),i=!1}t.params.material||(Pe.warn("Geometry requires material"),i=!1);const o=t.params.vertexAttributes;for(const a in o)o[a].values||(Pe.warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function dc(t,e){const r=[],i=[],o=[],a=[],s=t.resource,n=Ui.parse(s.version||"1.0","wosr");fc.validate(n);const d=s.model.name,c=s.model.geometries,u=s.materialDefinitions,g=t.textures;let m=0;const _=new Map;for(let h=0;h<c.length;h++){const S=c[h];if(!cc(S))continue;const A=mc(S),b=S.params.vertexAttributes,G=[];for(const v in b){const M=b[v],F=M.values;G.push([v,{data:F,size:M.valuesPerElement,exclusive:!0}])}const N=[];if(S.params.topology!=="PerAttributeArray"){const v=S.params.faces;for(const M in v)N.push([M,new Uint32Array(v[M].values)])}const O=g&&g[A.texture];if(O&&!_.has(A.texture)){const{image:v,params:M}=O,F=new Z(v,M);a.push(F),_.set(A.texture,F)}const L=_.get(A.texture),C=L?L.id:void 0;let w=o[A.material]?o[A.material][A.texture]:null;if(!w){const v=u[A.material.substring(A.material.lastIndexOf("/")+1)].params;v.transparency===1&&(v.transparency=0);const M=O&&O.alphaChannelUsage,F=v.transparency>0||M==="transparency"||M==="maskAndTransparency",$=O?Wo(O.alphaChannelUsage):void 0,I={ambient:Jr(v.diffuse),diffuse:Jr(v.diffuse),opacity:1-(v.transparency||0),transparent:F,textureAlphaMode:$,textureAlphaCutoff:.33,textureId:C,initTextureTransparent:!0,doubleSided:!0,cullFace:ve.None,colorMixMode:v.externalColorMixMode||"tint",textureAlphaPremultiplied:!!O&&!!O.params.preMultiplyAlpha};p(e)&&e.materialParamsMixin&&Object.assign(I,e.materialParamsMixin),w=new Ho(I),o[A.material]||(o[A.material]={}),o[A.material][A.texture]=w}i.push(w);const P=new dr(G,N);m+=N.position?N.position.length:0,r.push(P)}return{name:d,stageResources:{textures:a,materials:i,geometries:r},pivotOffset:s.model.pivotOffset,boundingBox:uc(r),numberOfVertices:m,lodThreshold:null}}function uc(t){const e=Di();return t.forEach(r=>{const i=r.boundingInfo;p(i)&&(Jt(e,i.getBBMin()),Jt(e,i.getBBMax()))}),e}async function hc(t,e){const r=[];for(const a in t){const s=t[a],n=s.images[0].data;if(!n){Pe.warn("Externally referenced texture data is not yet supported");continue}const d=s.encoding+";base64,"+n,c="/textureDefinitions/"+a,u=s.channels==="rgba"?s.alphaChannelUsage||"transparency":"none",g={noUnpackFlip:!0,wrap:{s:Ue.REPEAT,t:Ue.REPEAT},preMultiplyAlpha:Wo(u)!==Y.Opaque},m=p(e)&&e.disableTextures?Promise.resolve(null):qi(d,e);r.push(m.then(_=>({refId:c,image:_,params:g,alphaChannelUsage:u})))}const i=await Promise.all(r),o={};for(const a of i)o[a.refId]=a;return o}function Wo(t){switch(t){case"mask":return Y.Mask;case"maskAndTransparency":return Y.MaskBlend;case"none":return Y.Opaque;default:return Y.Blend}}function mc(t){const e=t.params;return{id:1,material:e.material,texture:e.texture,region:e.texture}}const fc=new Ui(1,2,"wosr");async function pc(t,e){const r=qo(jo(t));if(r.fileType==="wosr"){const d=await(e.cache?e.cache.loadWOSR(r.url,e):sc(r.url,e)),c=dc(d,e);return{lods:[c],referenceBoundingBox:c.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:d.remove}}const i=await(e.cache?e.cache.loadGLTF(r.url,e,e.usePBR):Ca(new wa(e.streamDataRequester),r.url,e,e.usePBR)),o=va(i.model.meta,"ESRI_proxyEllipsoid");i.meta.isEsriSymbolResource&&p(o)&&i.meta.uri.includes("/RealisticTrees/")&&_c(i,o);const a=i.meta.isEsriSymbolResource?{usePBR:e.usePBR,isSchematic:!1,treeRendering:!!i.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:e.usePBR,isSchematic:!1,treeRendering:!1,mrrFactors:[0,1,.5]},s={...e.materialParamsMixin,treeRendering:!!i.customMeta.esriTreeRendering};if(r.specifiedLodIndex!=null){const d=Qt(i,a,s,r.specifiedLodIndex);let c=d[0].boundingBox;return r.specifiedLodIndex!==0&&(c=Qt(i,a,s,0)[0].boundingBox),{lods:d,referenceBoundingBox:c,isEsriSymbolResource:i.meta.isEsriSymbolResource,isWosr:!1,remove:i.remove}}const n=Qt(i,a,s);return{lods:n,referenceBoundingBox:n[0].boundingBox,isEsriSymbolResource:i.meta.isEsriSymbolResource,isWosr:!1,remove:i.remove}}function qo(t){const e=t.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return e?{fileType:"gltf",url:e[1],specifiedLodIndex:e[4]!=null?Number(e[4]):null}:t.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:t,specifiedLodIndex:null}:{fileType:"unknown",url:t,specifiedLodIndex:null}}function Qt(t,e,r,i){const o=t.model,a=cr(),s=new Array,n=new Map,d=new Map;return o.lods.forEach((c,u)=>{if(i!==void 0&&u!==i)return;const g={name:c.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:p(c.lodThreshold)?c.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:Di()};s.push(g),c.parts.forEach(m=>{const _=m.material+(m.attributes.normal?"_normal":"")+(m.attributes.color?"_color":"")+(m.attributes.texCoord0?"_texCoord0":"")+(m.attributes.tangent?"_tangent":""),h=o.materials.get(m.material),S=p(m.attributes.texCoord0),A=p(m.attributes.normal),b=gc(h.alphaMode);if(!n.has(_)){if(S){if(p(h.textureColor)&&!d.has(h.textureColor)){const z=o.textures.get(h.textureColor),xe={...z.parameters,preMultiplyAlpha:b!==Y.Opaque};d.set(h.textureColor,new Z(z.data,xe))}if(p(h.textureNormal)&&!d.has(h.textureNormal)){const z=o.textures.get(h.textureNormal);d.set(h.textureNormal,new Z(z.data,z.parameters))}if(p(h.textureOcclusion)&&!d.has(h.textureOcclusion)){const z=o.textures.get(h.textureOcclusion);d.set(h.textureOcclusion,new Z(z.data,z.parameters))}if(p(h.textureEmissive)&&!d.has(h.textureEmissive)){const z=o.textures.get(h.textureEmissive);d.set(h.textureEmissive,new Z(z.data,z.parameters))}if(p(h.textureMetallicRoughness)&&!d.has(h.textureMetallicRoughness)){const z=o.textures.get(h.textureMetallicRoughness);d.set(h.textureMetallicRoughness,new Z(z.data,z.parameters))}}const v=h.color[0]**(1/lt),M=h.color[1]**(1/lt),F=h.color[2]**(1/lt),$=h.emissiveFactor[0]**(1/lt),I=h.emissiveFactor[1]**(1/lt),B=h.emissiveFactor[2]**(1/lt),D=p(h.textureColor)&&S?d.get(h.textureColor):null;n.set(_,new Ho({...e,transparent:b===Y.Blend,customDepthTest:at.Lequal,textureAlphaMode:b,textureAlphaCutoff:h.alphaCutoff,diffuse:[v,M,F],ambient:[v,M,F],opacity:h.opacity,doubleSided:h.doubleSided,doubleSidedType:"winding-order",cullFace:h.doubleSided?ve.None:ve.Back,hasVertexColors:!!m.attributes.color,hasVertexTangents:!!m.attributes.tangent,normals:A?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:p(D)?D.id:void 0,colorMixMode:h.colorMixMode,normalTextureId:p(h.textureNormal)&&S?d.get(h.textureNormal).id:void 0,textureAlphaPremultiplied:p(D)&&!!D.params.preMultiplyAlpha,occlusionTextureId:p(h.textureOcclusion)&&S?d.get(h.textureOcclusion).id:void 0,emissiveTextureId:p(h.textureEmissive)&&S?d.get(h.textureEmissive).id:void 0,metallicRoughnessTextureId:p(h.textureMetallicRoughness)&&S?d.get(h.textureMetallicRoughness).id:void 0,emissiveFactor:[$,I,B],mrrFactors:[h.metallicFactor,h.roughnessFactor,e.mrrFactors[2]],isSchematic:!1,colorTextureTransformMatrix:Rt(h.colorTextureTransform),normalTextureTransformMatrix:Rt(h.normalTextureTransform),occlusionTextureTransformMatrix:Rt(h.occlusionTextureTransform),emissiveTextureTransformMatrix:Rt(h.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:Rt(h.metallicRoughnessTextureTransform),...r}))}const G=vc(m.indices||m.attributes.position.count,m.primitiveType),N=m.attributes.position.count,O=et(mt,N);Aa(O,m.attributes.position,m.transform);const L=[[f.POSITION,{data:O.typedBuffer,size:O.elementCount,exclusive:!0}]],C=[[f.POSITION,G]];if(p(m.attributes.normal)){const v=et(mt,N);ri(a,m.transform),Ea(v,m.attributes.normal,a),L.push([f.NORMAL,{data:v.typedBuffer,size:v.elementCount,exclusive:!0}]),C.push([f.NORMAL,G])}if(p(m.attributes.tangent)){const v=et(Ar,N);ri(a,m.transform),Ma(v,m.attributes.tangent,a),L.push([f.TANGENT,{data:v.typedBuffer,size:v.elementCount,exclusive:!0}]),C.push([f.TANGENT,G])}if(p(m.attributes.texCoord0)){const v=et(zi,N);Oa(v,m.attributes.texCoord0),L.push([f.UV0,{data:v.typedBuffer,size:v.elementCount,exclusive:!0}]),C.push([f.UV0,G])}if(p(m.attributes.color)){const v=et(ht,N);if(m.attributes.color.elementCount===4)m.attributes.color instanceof Ar?si(v,m.attributes.color,255):m.attributes.color instanceof ht?Na(v,m.attributes.color):m.attributes.color instanceof Ta&&si(v,m.attributes.color,1/256);else{Pa(v,255,255,255,255);const M=new ii(v.buffer,0,4);m.attributes.color instanceof mt?oi(M,m.attributes.color,255):m.attributes.color instanceof ii?Sa(M,m.attributes.color):m.attributes.color instanceof ba&&oi(M,m.attributes.color,1/256)}L.push([f.COLOR,{data:v.typedBuffer,size:v.elementCount,exclusive:!0}]),C.push([f.COLOR,G])}const w=new dr(L,C);g.stageResources.geometries.push(w),g.stageResources.materials.push(n.get(_)),S&&(p(h.textureColor)&&g.stageResources.textures.push(d.get(h.textureColor)),p(h.textureNormal)&&g.stageResources.textures.push(d.get(h.textureNormal)),p(h.textureOcclusion)&&g.stageResources.textures.push(d.get(h.textureOcclusion)),p(h.textureEmissive)&&g.stageResources.textures.push(d.get(h.textureEmissive)),p(h.textureMetallicRoughness)&&g.stageResources.textures.push(d.get(h.textureMetallicRoughness))),g.numberOfVertices+=N;const P=w.boundingInfo;p(P)&&(Jt(g.boundingBox,P.getBBMin()),Jt(g.boundingBox,P.getBBMax()))})}),s}function gc(t){switch(t){case"BLEND":return Y.Blend;case"MASK":return Y.Mask;case"OPAQUE":case null:case void 0:return Y.Opaque}}function vc(t,e){switch(e){case Nt.TRIANGLES:return Fa(t);case Nt.TRIANGLE_STRIP:return La(t);case Nt.TRIANGLE_FAN:return Ia(t)}}function _c(t,e){for(let r=0;r<t.model.lods.length;++r){const i=t.model.lods[r];t.customMeta.esriTreeRendering=!0;for(const o of i.parts){const a=o.attributes.normal;if(W(a))return;const s=o.attributes.position,n=s.count,d=H(),c=H(),u=H(),g=et(ht,n),m=et(mt,n),_=_a(Pr(),o.transform);for(let h=0;h<n;h++){s.getVec(h,c),a.getVec(h,d),Dt(c,c,o.transform),rt(u,c,e.center),ei(u,u,e.radius);const S=u[2],A=Li(u),b=Math.min(.45+.55*A*A,1);ei(u,u,e.radius),Dt(u,u,_),Or(u,u),r+1!==t.model.lods.length&&t.model.lods.length>1&&_r(u,u,d,S>-1?.2:Math.min(-4*S-3.8,1)),m.setVec(h,u),g.set(h,0,255*b),g.set(h,1,255*b),g.set(h,2,255*b),g.set(h,3,255)}o.attributes.normal=m,o.attributes.color=g}}}const Gc=Object.freeze(Object.defineProperty({__proto__:null,fetch:pc,gltfToEngineResources:Qt,parseUrl:qo},Symbol.toStringTag,{value:"Module"}));export{Xl as D,kl as J,Gc as o};
