import{b as ce}from"./vec33.f620da8e.js";import{s as we,r as ge,c as Se,e as Ie}from"./types.44c7402c.js";import{gM as fe,ao as Ee,gQ as de,t as le,L as Ne,bo as Oe,bx as Ae,s as te,f as Re,u as Ue,gR as Ce,n as Be,gN as $e,d4 as Le,d0 as Me,c$ as ve,dc as Fe,b1 as Pe,r as re,d8 as W,an as N,cQ as ne,eb as De,cP as Ge,cK as $,cT as B,e6 as z,gS as je,gT as Ve}from"./index.a113d2e4.js";import{e as pe,r as me}from"./mat4f64.ff2a477c.js";import{D as K,L as X,C as l,E as G}from"./enums.23a7fab5.js";import{r as ye}from"./Version.e1beddfd.js";import{x as ke}from"./quat.4e314757.js";import{e as He}from"./quatf64.74f3afdd.js";import{B as Ye,g as ze,d as qe,i as Z,c as se,u as he,x as Je,L as Ke,O as Xe,E as Qe,F as We,w as Ze,q as et,A as tt,V as rt}from"./BufferView.3064c120.js";import{s as Te}from"./vectorStacks.2a75747f.js";import{v as nt}from"./lineSegment.771986b7.js";function st(n,e,t){if(n.count!==e.count)return void ce.error("source and destination buffers need to have the same number of elements");const s=n.count,r=t[0],o=t[1],a=t[2],c=t[3],u=t[4],i=t[5],f=t[6],d=t[7],m=t[8],T=t[9],h=t[10],p=t[11],y=t[12],g=t[13],b=t[14],w=t[15],x=n.typedBuffer,S=n.typedBufferStride,_=e.typedBuffer,R=e.typedBufferStride;for(let U=0;U<s;U++){const C=U*S,M=U*R,v=_[M],F=_[M+1],P=_[M+2],D=_[M+3];x[C]=r*v+u*F+m*P+y*D,x[C+1]=o*v+i*F+T*P+g*D,x[C+2]=a*v+f*F+h*P+b*D,x[C+3]=c*v+d*F+p*P+w*D}}function ot(n,e,t){if(n.count!==e.count)return void ce.error("source and destination buffers need to have the same number of elements");const s=n.count,r=t[0],o=t[1],a=t[2],c=t[3],u=t[4],i=t[5],f=t[6],d=t[7],m=t[8],T=n.typedBuffer,h=n.typedBufferStride,p=e.typedBuffer,y=e.typedBufferStride;for(let g=0;g<s;g++){const b=g*h,w=g*y,x=p[w],S=p[w+1],_=p[w+2],R=p[w+3];T[b]=r*x+c*S+f*_,T[b+1]=o*x+u*S+d*_,T[b+2]=a*x+i*S+m*_,T[b+3]=R}}function at(n,e){const t=Math.min(n.count,e.count),s=n.typedBuffer,r=n.typedBufferStride,o=e.typedBuffer,a=e.typedBufferStride;for(let c=0;c<t;c++){const u=c*r,i=c*a,f=o[i],d=o[i+1],m=o[i+2],T=f*f+d*d+m*m;if(T>0){const h=1/Math.sqrt(T);s[u]=h*f,s[u+1]=h*d,s[u+2]=h*m}}}function it(n,e,t){const s=Math.min(n.count,e.count),r=n.typedBuffer,o=n.typedBufferStride,a=e.typedBuffer,c=e.typedBufferStride;for(let u=0;u<s;u++){const i=u*o,f=u*c;r[i]=t*a[f],r[i+1]=t*a[f+1],r[i+2]=t*a[f+2],r[i+3]=t*a[f+3]}}function ut(n,e,t){const s=Math.min(n.count,e.count),r=n.typedBuffer,o=n.typedBufferStride,a=e.typedBuffer,c=e.typedBufferStride;for(let u=0;u<s;u++){const i=u*o,f=u*c;r[i]=a[f]>>t,r[i+1]=a[f+1]>>t,r[i+2]=a[f+2]>>t,r[i+3]=a[f+3]>>t}}Object.freeze(Object.defineProperty({__proto__:null,transformMat4:st,transformMat3:ot,normalize:at,scale:it,shiftRight:ut},Symbol.toStringTag,{value:"Module"}));function ct(n,e,t){const s=n.typedBuffer,r=n.typedBufferStride,o=e.typedBuffer,a=e.typedBufferStride,c=t?t.count:e.count;let u=(t&&t.dstIndex?t.dstIndex:0)*r,i=(t&&t.srcIndex?t.srcIndex:0)*a;for(let f=0;f<c;++f){for(let d=0;d<9;++d)s[u+d]=o[i+d];u+=r,i+=a}}Object.freeze(Object.defineProperty({__proto__:null,copy:ct},Symbol.toStringTag,{value:"Module"}));function ft(n,e,t){const s=n.typedBuffer,r=n.typedBufferStride,o=e.typedBuffer,a=e.typedBufferStride,c=t?t.count:e.count;let u=(t&&t.dstIndex?t.dstIndex:0)*r,i=(t&&t.srcIndex?t.srcIndex:0)*a;for(let f=0;f<c;++f){for(let d=0;d<16;++d)s[u+d]=o[i+d];u+=r,i+=a}}Object.freeze(Object.defineProperty({__proto__:null,copy:ft},Symbol.toStringTag,{value:"Module"}));function dt(n,e,t){const s=n.typedBuffer,r=n.typedBufferStride,o=e.typedBuffer,a=e.typedBufferStride,c=t?t.count:e.count;let u=(t&&t.dstIndex?t.dstIndex:0)*r,i=(t&&t.srcIndex?t.srcIndex:0)*a;for(let f=0;f<c;++f)s[u]=o[i],u+=r,i+=a}function q(n,e){const t=n.count;e||(e=new n.TypedArrayConstructor(t));for(let s=0;s<t;s++)e[s]=n.get(s);return e}Object.freeze(Object.defineProperty({__proto__:null,copy:dt,makeDense:q},Symbol.toStringTag,{value:"Module"}));function xe(n,e,t){const s=n.typedBuffer,r=n.typedBufferStride,o=e.typedBuffer,a=e.typedBufferStride,c=t?t.count:e.count;let u=(t&&t.dstIndex?t.dstIndex:0)*r,i=(t&&t.srcIndex?t.srcIndex:0)*a;for(let f=0;f<c;++f)s[u]=o[i],s[u+1]=o[i+1],u+=r,i+=a}function lt(n,e,t){const s=n.typedBuffer,r=n.typedBufferStride,o=e.typedBuffer,a=e.typedBufferStride,c=t?t.count:e.count;let u=(t&&t.dstIndex?t.dstIndex:0)*r,i=(t&&t.srcIndex?t.srcIndex:0)*a;if(we(e.elementType)){const f=ge(e.elementType);if(Se(e.elementType))for(let d=0;d<c;++d)s[u]=Math.max(o[i]/f,-1),s[u+1]=Math.max(o[i+1]/f,-1),u+=r,i+=a;else for(let d=0;d<c;++d)s[u]=o[i]/f,s[u+1]=o[i+1]/f,u+=r,i+=a}else xe(n,e,t);return n}function pt(n,e,t,s){var u,i;const r=n.typedBuffer,o=n.typedBufferStride,a=(u=s==null?void 0:s.count)!=null?u:n.count;let c=((i=s==null?void 0:s.dstIndex)!=null?i:0)*o;for(let f=0;f<a;++f)r[c]=e,r[c+1]=t,c+=o}Object.freeze(Object.defineProperty({__proto__:null,copy:xe,normalizeIntegerBuffer:lt,fill:pt},Symbol.toStringTag,{value:"Module"}));function mt(n,e,t){const s=n.typedBuffer,r=n.typedBufferStride,o=e.typedBuffer,a=e.typedBufferStride,c=t?t.count:e.count;let u=(t&&t.dstIndex?t.dstIndex:0)*r,i=(t&&t.srcIndex?t.srcIndex:0)*a;for(let f=0;f<c;++f)s[u]=o[i],s[u+1]=o[i+1],s[u+2]=o[i+2],s[u+3]=o[i+3],u+=r,i+=a}function yt(n,e,t,s,r,o){var f,d;const a=n.typedBuffer,c=n.typedBufferStride,u=(f=o==null?void 0:o.count)!=null?f:n.count;let i=((d=o==null?void 0:o.dstIndex)!=null?d:0)*c;for(let m=0;m<u;++m)a[i]=e,a[i+1]=t,a[i+2]=s,a[i+3]=r,i+=c}Object.freeze(Object.defineProperty({__proto__:null,copy:mt,fill:yt},Symbol.toStringTag,{value:"Module"}));function er(n,e){return new n(new ArrayBuffer(e*n.ElementCount*Ie(n.ElementType)))}class tr{constructor(e){this._streamDataRequester=e}async loadJSON(e,t){return this._load("json",e,t)}async loadBinary(e,t){return fe(e)?(Ee(t),de(e)):this._load("binary",e,t)}async loadImage(e,t){return this._load("image",e,t)}async _load(e,t,s){if(le(this._streamDataRequester))return(await Ne(t,{responseType:ht[e]})).data;const r=await Oe(this._streamDataRequester.request(t,e,s));if(r.ok===!0)return r.value;throw Ae(r.error),new te("",`Request for resource failed: ${r.error}`)}}const ht={image:"image",binary:"array-buffer",json:"json"};class Tt{error(e){throw new te("gltf-loader-error",e)}errorUnsupported(e){throw new te("gltf-loader-unsupported-feature",e)}errorUnsupportedIf(e,t){e&&this.errorUnsupported(t)}assert(e,t){e||this.error(t)}warn(e){Re.getLogger("esri.views.3d.glTF").warn(e)}warnUnsupported(e){this.warn("[Unsupported Feature] "+e)}warnUnsupportedIf(e,t){e&&this.warnUnsupported(t)}}function xt(n={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,colorTextureTransform:null,normalTextureTransform:null,occlusionTextureTransform:null,emissiveTextureTransform:null,metallicRoughnessTextureTransform:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...n}}function _t(n,e={}){return{data:n,parameters:{wrap:{s:K.REPEAT,t:K.REPEAT,...e.wrap},noUnpackFlip:!0,mipmap:!1,...e}}}class oe{constructor(e){this._data=e,this._offset4=0,this._dataUint32=new Uint32Array(this._data,0,Math.floor(this._data.byteLength/4))}readUint32(){const e=this._offset4;return this._offset4+=1,this._dataUint32[e]}readUint8Array(e){const t=4*this._offset4;return this._offset4+=e/4,new Uint8Array(this._data,t,e)}remainingBytes(){return this._data.byteLength-4*this._offset4}}var L,ae;(function(n){n.SCALAR="SCALAR",n.VEC2="VEC2",n.VEC3="VEC3",n.VEC4="VEC4",n.MAT2="MAT2",n.MAT3="MAT3",n.MAT4="MAT4"})(L||(L={})),function(n){n[n.ARRAY_BUFFER=34962]="ARRAY_BUFFER",n[n.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(ae||(ae={}));const _e={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},bt={pbrMetallicRoughness:_e,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},wt={ESRI_externalColorMixMode:"tint"},ie=(n={})=>{const e={..._e,...n.pbrMetallicRoughness},t=gt({...wt,...n.extras});return{...bt,...n,pbrMetallicRoughness:e,extras:t}};function gt(n){switch(n.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:Ue(n.ESRI_externalColorMixMode),n.ESRI_externalColorMixMode="tint"}return n}const St={magFilter:X.LINEAR,minFilter:X.LINEAR_MIPMAP_LINEAR,wrapS:K.REPEAT,wrapT:K.REPEAT},It=n=>({...St,...n});function Et(n){let e,t;return n.replace(/^(.*\/)?([^/]*)$/,(s,r,o)=>(e=r||"",t=o||"","")),{dirPart:e,filePart:t}}const j={MAGIC:1179937895,CHUNK_TYPE_JSON:1313821514,CHUNK_TYPE_BIN:5130562,MIN_HEADER_LENGTH:20};class E{constructor(e,t,s,r,o){this._context=e,this._errorContext=t,this.uri=s,this.json=r,this._glbBuffer=o,this._bufferLoaders=new Map,this._textureLoaders=new Map,this._textureCache=new Map,this._materialCache=new Map,this._nodeParentMap=new Map,this._nodeTransformCache=new Map,this._baseUri=Et(this.uri).dirPart,this._checkVersionSupported(),this._checkRequiredExtensionsSupported(),t.errorUnsupportedIf(r.scenes==null,"Scenes must be defined."),t.errorUnsupportedIf(r.meshes==null,"Meshes must be defined"),t.errorUnsupportedIf(r.nodes==null,"Nodes must be defined."),this._computeNodeParents()}static async load(e,t,s,r){if(fe(s)){const c=Be(s);if(c&&c.mediaType!=="model/gltf-binary")try{const i=JSON.parse(c.isBase64?atob(c.data):c.data);return new E(e,t,s,i)}catch{}const u=de(s);if(E._isGLBData(u))return this._fromGLBData(e,t,s,u)}if(s.endsWith(".gltf")){const c=await e.loadJSON(s,r);return new E(e,t,s,c)}const o=await e.loadBinary(s,r);if(E._isGLBData(o))return this._fromGLBData(e,t,s,o);const a=await e.loadJSON(s,r);return new E(e,t,s,a)}static _isGLBData(e){if(e==null)return!1;const t=new oe(e);return t.remainingBytes()>=4&&t.readUint32()===j.MAGIC}static async _fromGLBData(e,t,s,r){const o=await E._parseGLBData(t,r);return new E(e,t,s,o.json,o.binaryData)}static async _parseGLBData(e,t){const s=new oe(t);e.assert(s.remainingBytes()>=12,"GLB binary data is insufficiently large.");const r=s.readUint32(),o=s.readUint32(),a=s.readUint32();e.assert(r===j.MAGIC,"Magic first 4 bytes do not fit to expected GLB value."),e.assert(t.byteLength>=a,"GLB binary data is smaller than header specifies."),e.errorUnsupportedIf(o!==2,"An unsupported GLB container version was detected. Only version 2 is supported.");let c,u,i=0;for(;s.remainingBytes()>=8;){const f=s.readUint32(),d=s.readUint32();i===0?(e.assert(d===j.CHUNK_TYPE_JSON,"First GLB chunk must be JSON."),e.assert(f>=0,"No JSON data found."),c=await Ct(s.readUint8Array(f))):i===1?(e.errorUnsupportedIf(d!==j.CHUNK_TYPE_BIN,"Second GLB chunk expected to be BIN."),u=s.readUint8Array(f)):e.warnUnsupported("More than 2 GLB chunks detected. Skipping."),i+=1}return c||e.error("No GLB JSON chunk detected."),{json:c,binaryData:u}}async getBuffer(e,t){const s=this.json.buffers[e],r=this._errorContext;if(s.uri==null)return r.assert(this._glbBuffer!=null,"GLB buffer not present"),this._glbBuffer;const o=await this._getBufferLoader(e,t);return r.assert(o.byteLength===s.byteLength,"Buffer byte lengths should match."),o}async _getBufferLoader(e,t){const s=this._bufferLoaders.get(e);if(s)return s;const r=this.json.buffers[e].uri,o=this._context.loadBinary(this._resolveUri(r),t).then(a=>new Uint8Array(a));return this._bufferLoaders.set(e,o),o}async getAccessor(e,t){const s=this._errorContext;s.errorUnsupportedIf(!this.json.accessors,"Accessors missing.");const r=this.json.accessors[e];s.errorUnsupportedIf((r==null?void 0:r.bufferView)==null,"Some accessor does not specify a bufferView."),s.errorUnsupportedIf(r.type in[L.MAT2,L.MAT3,L.MAT4],`AttributeType ${r.type} is not supported`);const o=this.json.bufferViews[r.bufferView],a=await this.getBuffer(o.buffer,t),c=At[r.type],u=Rt[r.componentType],i=c*u,f=o.byteStride||i;return{raw:a.buffer,byteStride:f,byteOffset:a.byteOffset+(o.byteOffset||0)+(r.byteOffset||0),entryCount:r.count,isDenselyPacked:f===i,componentCount:c,componentByteSize:u,componentType:r.componentType,min:r.min,max:r.max,normalized:!!r.normalized}}async getIndexData(e,t){if(e.indices==null)return;const s=await this.getAccessor(e.indices,t);if(s.isDenselyPacked)switch(s.componentType){case l.UNSIGNED_BYTE:return new Uint8Array(s.raw,s.byteOffset,s.entryCount);case l.UNSIGNED_SHORT:return new Uint16Array(s.raw,s.byteOffset,s.entryCount);case l.UNSIGNED_INT:return new Uint32Array(s.raw,s.byteOffset,s.entryCount)}else switch(s.componentType){case l.UNSIGNED_BYTE:return q(this._wrapAccessor(qe,s));case l.UNSIGNED_SHORT:return q(this._wrapAccessor(ze,s));case l.UNSIGNED_INT:return q(this._wrapAccessor(Ye,s))}}async getPositionData(e,t){const s=this._errorContext;s.errorUnsupportedIf(e.attributes.POSITION==null,"No POSITION vertex data found.");const r=await this.getAccessor(e.attributes.POSITION,t);return s.errorUnsupportedIf(r.componentType!==l.FLOAT,"Expected type FLOAT for POSITION vertex attribute, but found "+k[r.componentType]),s.errorUnsupportedIf(r.componentCount!==3,"POSITION vertex attribute must have 3 components, but found "+r.componentCount.toFixed()),this._wrapAccessor(Z,r)}async getNormalData(e,t){const s=this._errorContext;s.assert(e.attributes.NORMAL!=null,"No NORMAL vertex data found.");const r=await this.getAccessor(e.attributes.NORMAL,t);return s.errorUnsupportedIf(r.componentType!==l.FLOAT,"Expected type FLOAT for NORMAL vertex attribute, but found "+k[r.componentType]),s.errorUnsupportedIf(r.componentCount!==3,"NORMAL vertex attribute must have 3 components, but found "+r.componentCount.toFixed()),this._wrapAccessor(Z,r)}async getTangentData(e,t){const s=this._errorContext;s.assert(e.attributes.TANGENT!=null,"No TANGENT vertex data found.");const r=await this.getAccessor(e.attributes.TANGENT,t);return s.errorUnsupportedIf(r.componentType!==l.FLOAT,"Expected type FLOAT for TANGENT vertex attribute, but found "+k[r.componentType]),s.errorUnsupportedIf(r.componentCount!==4,"TANGENT vertex attribute must have 4 components, but found "+r.componentCount.toFixed()),new se(r.raw,r.byteOffset,r.byteStride,r.byteOffset+r.byteStride*r.entryCount)}async getTextureCoordinates(e,t){const s=this._errorContext;s.assert(e.attributes.TEXCOORD_0!=null,"No TEXCOORD_0 vertex data found.");const r=await this.getAccessor(e.attributes.TEXCOORD_0,t);return s.errorUnsupportedIf(r.componentCount!==2,"TEXCOORD_0 vertex attribute must have 2 components, but found "+r.componentCount.toFixed()),r.componentType===l.FLOAT?this._wrapAccessor(he,r):(s.errorUnsupportedIf(!r.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0."),Ut(r))}async getVertexColors(e,t){const s=this._errorContext;s.assert(e.attributes.COLOR_0!=null,"No COLOR_0 vertex data found.");const r=await this.getAccessor(e.attributes.COLOR_0,t);if(s.errorUnsupportedIf(r.componentCount!==4&&r.componentCount!==3,"COLOR_0 attribute must have 3 or 4 components, but found "+r.componentCount.toFixed()),r.componentCount===4){if(r.componentType===l.FLOAT)return this._wrapAccessor(se,r);if(r.componentType===l.UNSIGNED_BYTE)return this._wrapAccessor(Je,r);if(r.componentType===l.UNSIGNED_SHORT)return this._wrapAccessor(Ke,r)}else if(r.componentCount===3){if(r.componentType===l.FLOAT)return this._wrapAccessor(Z,r);if(r.componentType===l.UNSIGNED_BYTE)return this._wrapAccessor(Xe,r);if(r.componentType===l.UNSIGNED_SHORT)return this._wrapAccessor(Qe,r)}s.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+k[r.componentType])}hasPositions(e){return e.attributes.POSITION!==void 0}hasNormals(e){return e.attributes.NORMAL!==void 0}hasVertexColors(e){return e.attributes.COLOR_0!==void 0}hasTextureCoordinates(e){return e.attributes.TEXCOORD_0!==void 0}hasTangents(e){return e.attributes.TANGENT!==void 0}async getMaterial(e,t,s){var o,a,c,u,i,f,d,m,T,h;let r=e.material?this._materialCache.get(e.material):void 0;if(!r){const p=e.material!=null?ie(this.json.materials[e.material]):ie(),y=p.pbrMetallicRoughness,g=this.hasVertexColors(e),b=this.getTexture(y.baseColorTexture,t),w=this.getTexture(p.normalTexture,t),x=s?this.getTexture(p.occlusionTexture,t):void 0,S=s?this.getTexture(p.emissiveTexture,t):void 0,_=s?this.getTexture(y.metallicRoughnessTexture,t):void 0,R=e.material!=null?e.material:-1;r={alphaMode:p.alphaMode,alphaCutoff:p.alphaCutoff,color:y.baseColorFactor,doubleSided:!!p.doubleSided,colorTexture:await b,normalTexture:await w,name:p.name,id:R,occlusionTexture:await x,emissiveTexture:await S,emissiveFactor:p.emissiveFactor,metallicFactor:y.metallicFactor,roughnessFactor:y.roughnessFactor,metallicRoughnessTexture:await _,hasVertexColors:g,ESRI_externalColorMixMode:p.extras.ESRI_externalColorMixMode,colorTextureTransform:(a=(o=y==null?void 0:y.baseColorTexture)==null?void 0:o.extensions)==null?void 0:a.KHR_texture_transform,normalTextureTransform:(u=(c=p.normalTexture)==null?void 0:c.extensions)==null?void 0:u.KHR_texture_transform,occlusionTextureTransform:(f=(i=p.occlusionTexture)==null?void 0:i.extensions)==null?void 0:f.KHR_texture_transform,emissiveTextureTransform:(m=(d=p.emissiveTexture)==null?void 0:d.extensions)==null?void 0:m.KHR_texture_transform,metallicRoughnessTextureTransform:(h=(T=y==null?void 0:y.metallicRoughnessTexture)==null?void 0:T.extensions)==null?void 0:h.KHR_texture_transform}}return r}async getTexture(e,t){if(!e)return;this._errorContext.errorUnsupportedIf((e.texCoord||0)!==0,"Only TEXCOORD with index 0 is supported.");const s=e.index,r=this._errorContext,o=this.json.textures[s],a=It(o.sampler!=null?this.json.samplers[o.sampler]:{});r.errorUnsupportedIf(o.source==null,"Source is expected to be defined for a texture.");const c=this.json.images[o.source],u=await this._loadTextureImageData(s,o,t);return $e(this._textureCache,s,()=>{const i=d=>d===33071||d===33648||d===10497,f=d=>(r.error(`Unexpected TextureSampler WrapMode: ${d}. Using default REPEAT(10497).`),10497);return{data:u,wrapS:i(a.wrapS)?a.wrapS:f(a.wrapS),wrapT:i(a.wrapT)?a.wrapT:f(a.wrapT),minFilter:a.minFilter,name:c.name,id:s}})}getNodeTransform(e){if(e===void 0)return Ot;let t=this._nodeTransformCache.get(e);if(!t){const s=this.getNodeTransform(this._getNodeParent(e)),r=this.json.nodes[e];r.matrix?t=Le(pe(),s,r.matrix):r.translation||r.rotation||r.scale?(t=me(s),r.translation&&Me(t,t,r.translation),r.rotation&&(V[3]=ke(V,r.rotation),ve(t,t,V[3],V)),r.scale&&Fe(t,t,r.scale)):t=s,this._nodeTransformCache.set(e,t)}return t}_wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}_resolveUri(e){return Pe(e,this._baseUri)}_getNodeParent(e){return this._nodeParentMap.get(e)}_checkVersionSupported(){const e=ye.parse(this.json.asset.version,"glTF");Nt.validate(e)}_checkRequiredExtensionsSupported(){const e=this.json,t=this._errorContext;e.extensionsRequired&&e.extensionsRequired.length!==0&&t.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}_computeNodeParents(){this.json.nodes.forEach((e,t)=>{e.children&&e.children.forEach(s=>{this._nodeParentMap.set(s,t)})})}async _loadTextureImageData(e,t,s){const r=this._textureLoaders.get(e);if(r)return r;const o=this._createTextureLoader(t,s);return this._textureLoaders.set(e,o),o}async _createTextureLoader(e,t){const s=this.json.images[e.source];if(s.uri)return this._context.loadImage(this._resolveUri(s.uri),t);const r=this._errorContext;r.errorUnsupportedIf(s.bufferView==null,"Image bufferView must be defined."),r.errorUnsupportedIf(s.mimeType==null,"Image mimeType must be defined.");const o=this.json.bufferViews[s.bufferView],a=await this.getBuffer(o.buffer,t);return r.errorUnsupportedIf(o.byteStride!=null,"byteStride not supported for image buffer"),Bt(new Uint8Array(a.buffer,a.byteOffset+(o.byteOffset||0),o.byteLength),s.mimeType)}}const Nt=new ye(2,0,"glTF"),Ot=Ce(pe(),Math.PI/2),V=He(),At={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},Rt={[l.BYTE]:1,[l.UNSIGNED_BYTE]:1,[l.SHORT]:2,[l.UNSIGNED_SHORT]:2,[l.FLOAT]:4,[l.UNSIGNED_INT]:4};function Ut(n){switch(n.componentType){case l.BYTE:return new rt(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case l.UNSIGNED_BYTE:return new tt(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case l.SHORT:return new et(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case l.UNSIGNED_SHORT:return new Ze(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case l.UNSIGNED_INT:return new We(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case l.FLOAT:return new he(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount)}}async function Ct(n){return new Promise((e,t)=>{const s=new Blob([n]),r=new FileReader;r.onload=()=>{const o=r.result;e(JSON.parse(o))},r.onerror=o=>{t(o)},r.readAsText(s)})}async function Bt(n,e){return new Promise((t,s)=>{const r=new Blob([n],{type:e}),o=URL.createObjectURL(r),a=new Image;a.addEventListener("load",()=>{URL.revokeObjectURL(o),"decode"in a?a.decode().then(()=>t(a),()=>t(a)):t(a)}),a.addEventListener("error",c=>{URL.revokeObjectURL(o),s(c)}),a.src=o})}const k={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};let $t=0;async function rr(n,e,t={},s=!0){const r=await E.load(n,J,e,t),o="gltf_"+$t++,a={lods:[],materials:new Map,textures:new Map,meta:Lt(r)},c=!(!r.json.asset.extras||r.json.asset.extras.ESRI_type!=="symbolResource"),u=new Map;await Mt(r,async(i,f,d,m)=>{var C;const T=(C=u.get(d))!=null?C:0;u.set(d,T+1);const h=i.mode!==void 0?i.mode:G.TRIANGLES,p=h===G.TRIANGLES||h===G.TRIANGLE_STRIP||h===G.TRIANGLE_FAN?h:null;if(le(p))return void J.warnUnsupported("Unsupported primitive mode ("+Dt[h]+"). Skipping primitive.");if(!r.hasPositions(i))return void J.warn("Skipping primitive without POSITION vertex attribute.");const y=r.getPositionData(i,t),g=r.getMaterial(i,t,s),b=r.hasNormals(i)?r.getNormalData(i,t):null,w=r.hasTangents(i)?r.getTangentData(i,t):null,x=r.hasTextureCoordinates(i)?r.getTextureCoordinates(i,t):null,S=r.hasVertexColors(i)?r.getVertexColors(i,t):null,_=r.getIndexData(i,t),R={transform:me(f),attributes:{position:await y,normal:b?await b:null,texCoord0:x?await x:null,color:S?await S:null,tangent:w?await w:null},indices:await _,primitiveType:p,material:Ft(a,await g,o)};let U=null;re(a.meta)&&re(a.meta.ESRI_lod)&&a.meta.ESRI_lod.metric==="screenSpaceRadius"&&(U=a.meta.ESRI_lod.thresholds[d]),a.lods[d]=a.lods[d]||{parts:[],name:m,lodThreshold:U},a.lods[d].parts[T]=R});for(const i of a.lods)i.parts=i.parts.filter(f=>!!f);return{model:a,meta:{isEsriSymbolResource:c,uri:r.uri},customMeta:{}}}function Lt(n){const e=n.json;let t=null;return e.nodes.forEach(s=>{const r=s.extras;re(r)&&(r.ESRI_proxyEllipsoid||r.ESRI_lod)&&(t=r)}),t}async function Mt(n,e){const t=n.json,s=t.scenes[t.scene||0].nodes,r=s.length>1,o=[];for(const c of s){const u=t.nodes[c];o.push(a(c,0)),vt(u)&&!r&&u.extensions.MSFT_lod.ids.forEach((i,f)=>a(i,f+1))}async function a(c,u){const i=t.nodes[c],f=n.getNodeTransform(c);if(J.warnUnsupportedIf(i.weights!=null,"Morph targets are not supported."),i.mesh!=null){const d=t.meshes[i.mesh];for(const m of d.primitives)o.push(e(m,f,u,d.name))}for(const d of i.children||[])o.push(a(d,u))}await Promise.all(o)}function vt(n){return n.extensions&&n.extensions.MSFT_lod&&Array.isArray(n.extensions.MSFT_lod.ids)}function Ft(n,e,t){const s=o=>{const a=`${t}_tex_${o&&o.id}${o&&o.name?"_"+o.name:""}`;if(o&&!n.textures.has(a)){const c=_t(o.data,{wrap:{s:o.wrapS,t:o.wrapT},mipmap:Pt.includes(o.minFilter),noUnpackFlip:!0});n.textures.set(a,c)}return a},r=`${t}_mat_${e.id}_${e.name}`;if(!n.materials.has(r)){const o=xt({color:[e.color[0],e.color[1],e.color[2]],opacity:e.color[3],alphaMode:e.alphaMode,alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,colorMixMode:e.ESRI_externalColorMixMode,textureColor:e.colorTexture?s(e.colorTexture):void 0,textureNormal:e.normalTexture?s(e.normalTexture):void 0,textureOcclusion:e.occlusionTexture?s(e.occlusionTexture):void 0,textureEmissive:e.emissiveTexture?s(e.emissiveTexture):void 0,textureMetallicRoughness:e.metallicRoughnessTexture?s(e.metallicRoughnessTexture):void 0,emissiveFactor:[e.emissiveFactor[0],e.emissiveFactor[1],e.emissiveFactor[2]],colorTextureTransform:e.colorTextureTransform,normalTextureTransform:e.normalTextureTransform,occlusionTextureTransform:e.occlusionTextureTransform,emissiveTextureTransform:e.emissiveTextureTransform,metallicRoughnessTextureTransform:e.metallicRoughnessTextureTransform,metallicFactor:e.metallicFactor,roughnessFactor:e.roughnessFactor});n.materials.set(r,o)}return r}const J=new Tt,Pt=[X.LINEAR_MIPMAP_LINEAR,X.LINEAR_MIPMAP_NEAREST],Dt=["POINTS","LINES","LINE_LOOP","LINE_STRIP","TRIANGLES","TRIANGLE_STRIP","TRIANGLE_FAN"];function Gt(n){return n?{p0:W(n.p0),p1:W(n.p1),p2:W(n.p2)}:{p0:N(),p1:N(),p2:N()}}function jt(n,e,t){return ne(ee,e,n),ne(ue,t,n),De(Ge(ee,ee,ue))/2}new Te(nt);new Te(()=>Gt());const ee=N(),ue=N();let A=(()=>{const n=new Uint32Array(131072);for(let e=0;e<n.length;++e)n[e]=e;return n})();const be=new Uint16Array([0]),Q=(()=>{const n=new Uint16Array(65536);for(let e=0;e<n.length;++e)n[e]=e;return n})();function Vt(n){if(n===1)return be;if(n<Q.length)return new Uint16Array(Q.buffer,0,n);if(n>A.length){const e=Math.max(2*A.length,n);A=new Uint32Array(e);for(let t=0;t<A.length;t++)A[t]=t}return new Uint32Array(A.buffer,0,n)}function nr(n){if(n===1)return new Uint16Array(be);if(n<Q.length)return new Uint16Array(Q.slice(0,n));if(n>A.length){const e=new Uint32Array(n);for(let t=0;t<e.length;t++)e[t]=t;return e}return new Uint32Array(A.slice(0,n))}function sr(n,e,t){if(!n||!e)return!1;const{size:s,data:r}=n;$(t,0,0,0),$(O,0,0,0);let o=0,a=0;for(let c=0;c<e.length-2;c+=3){const u=e[c+0]*s,i=e[c+1]*s,f=e[c+2]*s;$(I,r[u+0],r[u+1],r[u+2]),$(H,r[i+0],r[i+1],r[i+2]),$(Y,r[f+0],r[f+1],r[f+2]);const d=jt(I,H,Y);d?(B(I,I,H),B(I,I,Y),z(I,I,1/3*d),B(t,t,I),o+=d):(B(O,O,I),B(O,O,H),B(O,O,Y),a+=3)}return(a!==0||o!==0)&&(o!==0?(z(t,t,1/o),!0):a!==0&&(z(t,O,1/a),!0))}function or(n,e,t){if(!n||!e)return!1;const{size:s,data:r}=n;$(t,0,0,0);let o=-1,a=0;for(let c=0;c<e.length;c++){const u=e[c]*s;o!==u&&(t[0]+=r[u+0],t[1]+=r[u+1],t[2]+=r[u+2],a++),o=u}return a>1&&z(t,t,1/a),a>0}const I=N(),H=N(),Y=N(),O=N();function ar(n,e=Vt){return typeof n=="number"?e(n):je(n)||Ve(n)?new Uint32Array(n):n}function ir(n){const e=typeof n=="number"?n:n.length;if(e<3)return new Uint16Array(0);const t=e-2,s=t<=65536?new Uint16Array(3*t):new Uint32Array(3*t);if(typeof n=="number"){let r=0;for(let o=0;o<t;o+=1)o%2==0?(s[r++]=o,s[r++]=o+1,s[r++]=o+2):(s[r++]=o+1,s[r++]=o,s[r++]=o+2)}else{let r=0;for(let o=0;o<t;o+=1)if(o%2==0){const a=n[o],c=n[o+1],u=n[o+2];s[r++]=a,s[r++]=c,s[r++]=u}else{const a=n[o+1],c=n[o],u=n[o+2];s[r++]=a,s[r++]=c,s[r++]=u}}return s}function ur(n){const e=typeof n=="number"?n:n.length;if(e<3)return new Uint16Array(0);const t=e-2,s=t<=65536?new Uint16Array(3*t):new Uint32Array(3*t);if(typeof n=="number"){let r=0;for(let o=0;o<t;++o)s[r++]=0,s[r++]=o+1,s[r++]=o+2;return s}{const r=n[0];let o=n[1],a=0;for(let c=0;c<t;++c){const u=n[c+2];s[a++]=r,s[a++]=o,s[a++]=u,o=u}return s}}const cr=2.1;export{ot as a,lt as b,ut as c,pt as d,mt as e,at as f,ir as g,ar as h,ur as i,nr as j,cr as k,Vt as l,rr as m,tr as n,it as o,or as p,er as r,yt as t,sr as u};
