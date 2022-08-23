import{t as A,ck as Ce,cl as Qe,c as H,cm as M,cn as Ge,co as $e,s as w,ai as z,v as ve,_ as Ue,ag as De,aC as Me,aT as Ne,bK as j,bd as Be,F as Z,H as le,I as qe,J as Ve,cp as X,bH as J,aM as je,cq as Ye,cr as He,cs as ie,ct as x,f as ze,cu as We,r as N,cv as Ze,cw as Xe,cx as Je,cy as ke,cz as Ke,ca as et,cA as he,cB as tt,cC as st,cD as it,ap as K,a0 as Q,b as ce,y as de,cE as rt,cF as at,cG as nt,b$ as ut}from"./index.96cac272.js";import{o as _e,u as ot}from"./aaBoundingRect.6489c7ff.js";import{L as fe}from"./normalizeUtils.28ae413c.js";import{D as me,t as lt}from"./featureConversionUtils.196ba421.js";import{_ as U,f as Y,b as ee,d as G,v as S,g as $,E as ht,G as pe,l as ct,M as dt,c as v,o as _t,a as ft,e as mt}from"./QueryEngineResult.ff394788.js";import{t as pt}from"./QueryEngineCapabilities.e56964e9.js";import{t as ge}from"./OptimizedGeometry.cf2a6bd4.js";function ne(a,e){return a?e?4:3:e?3:2}function Jt(a,e,t,i,u){if(A(e)||!e.lengths.length)return null;const s=(u==null?void 0:u.originPosition)==="upperLeft"?-1:1;a.lengths.length&&(a.lengths.length=0),a.coords.length&&(a.coords.length=0);const n=a.coords,r=[],o=t?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:l,coords:h}=e,_=ne(t,i);let g=0;for(const c of l){const p=gt(o,h,g,c,t,i,s);p&&r.push(p),g+=c*_}if(r.sort((c,p)=>{let m=s*c[2]-s*p[2];return m===0&&t&&(m=c[4]-p[4]),m}),r.length){let c=6*r[0][2];n[0]=r[0][0]/c,n[1]=r[0][1]/c,t&&(c=6*r[0][4],n[2]=c!==0?r[0][3]/c:0),(n[0]<o[0]||n[0]>o[1]||n[1]<o[2]||n[1]>o[3]||t&&(n[2]<o[4]||n[2]>o[5]))&&(n.length=0)}if(!n.length){const c=e.lengths[0]?yt(h,0,l[0],t,i):null;if(!c)return null;n[0]=c[0],n[1]=c[1],t&&c.length>2&&(n[2]=c[2])}return a}function gt(a,e,t,i,u,s,n=1){const r=ne(u,s);let o=t,l=t+r,h=0,_=0,g=0,c=0,p=0;for(let T=0,y=i-1;T<y;T++,o+=r,l+=r){const E=e[o],R=e[o+1],f=e[o+2],I=e[l],B=e[l+1],C=e[l+2];let O=E*B-I*R;c+=O,h+=(E+I)*O,_+=(R+B)*O,u&&(O=E*C-I*f,g+=(f+C)*O,p+=O),E<a[0]&&(a[0]=E),E>a[1]&&(a[1]=E),R<a[2]&&(a[2]=R),R>a[3]&&(a[3]=R),u&&(f<a[4]&&(a[4]=f),f>a[5]&&(a[5]=f))}if(c*n>0&&(c*=-1),p*n>0&&(p*=-1),!c)return null;const m=[h,_,.5*c];return u&&(m[3]=g,m[4]=.5*p),m}function yt(a,e,t,i,u){const s=ne(i,u);let n=e,r=e+s,o=0,l=0,h=0,_=0;for(let g=0,c=t-1;g<c;g++,n+=s,r+=s){const p=a[n],m=a[n+1],T=a[n+2],y=a[r],E=a[r+1],R=a[r+2],f=i?It(p,m,T,y,E,R):Et(p,m,y,E);if(f)if(o+=f,i){const I=St(p,m,T,y,E,R);l+=f*I[0],h+=f*I[1],_+=f*I[2]}else{const I=Tt(p,m,y,E);l+=f*I[0],h+=f*I[1]}}return o>0?i?[l/o,h/o,_/o]:[l/o,h/o]:t>0?i?[a[e],a[e+1],a[e+2]]:[a[e],a[e+1]]:null}function Et(a,e,t,i){const u=t-a,s=i-e;return Math.sqrt(u*u+s*s)}function It(a,e,t,i,u,s){const n=i-a,r=u-e,o=s-t;return Math.sqrt(n*n+r*r+o*o)}function Tt(a,e,t,i){return[a+.5*(t-a),e+.5*(i-e)]}function St(a,e,t,i,u,s){return[a+.5*(i-a),e+.5*(u-e),t+.5*(s-t)]}function Rt(a){return a==="mesh"?Ce:Qe(a)}function Oe(a,e){return a?e?4:3:e?3:2}function At(a,e,t,i){return Le(a,e,t,i.coords[0],i.coords[1])}function bt(a,e,t,i,u,s){const n=Oe(u,s),{coords:r,lengths:o}=i;if(!o)return!1;for(let l=0,h=0;l<o.length;l++,h+=n)if(!Le(a,e,t,r[h],r[h+1]))return!1;return!0}function Le(a,e,t,i,u){if(!a)return!1;const s=Oe(e,t),{coords:n,lengths:r}=a;let o=!1,l=0;for(const h of r)o=wt(o,n,s,l,h,i,u),l+=h*s;return o}function wt(a,e,t,i,u,s,n){let r=a,o=i;for(let l=i,h=i+u*t;l<h;l+=t){o=l+t,o===h&&(o=i);const _=e[l],g=e[l+1],c=e[o],p=e[o+1];(g<n&&p>=n||p<n&&g>=n)&&_+(n-g)/(p-g)*(c-_)<s&&(r=!r)}return r}const te="feature-store:unsupported-query",xt={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},ue={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function Ft(a){return ue.spatialRelationship[a]===!0}function Nt(a){return ue.queryGeometry[ve(a)]===!0}function kt(a){return ue.layerGeometry[a]===!0}function Ot(){return Ue(()=>import("./geometryEngineJSON.3d6e7890.js"),["assets/geometryEngineJSON.3d6e7890.js","assets/geometryEngineBase.82b25ca5.js","assets/geometryEngineJSON.f9e9a36f.js","assets/json.879c9adc.js"])}function q(a,e,t,i,u){if(H(e)&&t==="esriGeometryPoint"&&(a==="esriSpatialRelIntersects"||a==="esriSpatialRelContains")){const s=me(new ge,e,!1,!1);return Promise.resolve(n=>At(s,!1,!1,n))}if(H(e)&&t==="esriGeometryMultipoint"){const s=me(new ge,e,!1,!1);if(a==="esriSpatialRelContains")return Promise.resolve(n=>bt(s,!1,!1,n,i,u))}if(M(e)&&t==="esriGeometryPoint"&&(a==="esriSpatialRelIntersects"||a==="esriSpatialRelContains"))return Promise.resolve(s=>Ge(e,U(t,i,u,s)));if(M(e)&&t==="esriGeometryMultipoint"&&a==="esriSpatialRelContains")return Promise.resolve(s=>$e(e,U(t,i,u,s)));if(M(e)&&a==="esriSpatialRelIntersects"){const s=Rt(t);return Promise.resolve(n=>s(e,U(t,i,u,n)))}return Ot().then(s=>{const n=s[xt[a]].bind(null,e.spatialReference,e);return r=>n(U(t,i,u,r))})}async function ye(a,e,t){const{spatialRel:i,geometry:u}=a;if(u){if(!Ft(i))throw new w(te,"Unsupported query spatial relationship",{query:a});if(z(u.spatialReference)&&z(t)){if(!Nt(u))throw new w(te,"Unsupported query geometry type",{query:a});if(!kt(e))throw new w(te,"Unsupported layer geometry type",{query:a});if(a.outSR)return Y(a.geometry&&a.geometry.spatialReference,a.outSR)}}}function Ee(a){if(M(a))return!0;if(H(a)){for(const e of a.rings)if(e.length!==5||e[0][0]!==e[1][0]||e[0][0]!==e[4][0]||e[2][0]!==e[3][0]||e[0][1]!==e[3][1]||e[0][1]!==e[4][1]||e[1][1]!==e[2][1])return!1;return!0}return!1}function Lt(a,e){if(!a)return null;const t=e.featureAdapter,{startTimeField:i,endTimeField:u}=a;let s=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;if(i&&u)e.forEach(r=>{const o=t.getAttribute(r,i),l=t.getAttribute(r,u);o==null||isNaN(o)||(s=Math.min(s,o)),l==null||isNaN(l)||(n=Math.max(n,l))});else{const r=i||u;e.forEach(o=>{const l=t.getAttribute(o,r);l==null||isNaN(l)||(s=Math.min(s,l),n=Math.max(n,l))})}return{start:s,end:n}}function Pt(a,e,t){if(!e||!a)return null;const{startTimeField:i,endTimeField:u}=a;if(!i&&!u)return null;const{start:s,end:n}=e;return s===null&&n===null?null:s===void 0&&n===void 0?Gt():i&&u?Ct(t,i,u,s,n):Qt(t,i||u,s,n)}function Ct(a,e,t,i,u){return i!=null&&u!=null?s=>{const n=a.getAttribute(s,e),r=a.getAttribute(s,t);return(n==null||n<=u)&&(r==null||r>=i)}:i!=null?s=>{const n=a.getAttribute(s,t);return n==null||n>=i}:u!=null?s=>{const n=a.getAttribute(s,e);return n==null||n<=u}:void 0}function Qt(a,e,t,i){return t!=null&&i!=null&&t===i?u=>a.getAttribute(u,e)===t:t!=null&&i!=null?u=>{const s=a.getAttribute(u,e);return s>=t&&s<=i}:t!=null?u=>a.getAttribute(u,e)>=t:i!=null?u=>a.getAttribute(u,e)<=i:void 0}function Gt(){return()=>!1}class re{constructor(e){this._observable=new De,this._value=e}get(){return Me(this._observable),this._value}set(e){e!==this._value&&(this._value=e,this._observable.notify())}}class $t{constructor(){this._tasks=new Array,this._running=new re(!1)}get length(){return this._tasks.length}get running(){return this._running.get()}destroy(){this.cancelAll()}runTask(e){for(;!e.done&&this._process(e);)e.madeProgress()}push(e,t,i){return this._running.set(!0),new Promise((u,s)=>this._tasks.push(new Ie(u,s,e,t,i)))}unshift(e,t,i){return this._running.set(!0),new Promise((u,s)=>this._tasks.unshift(new Ie(u,s,e,t,i)))}_process(e){if(this._tasks.length===0)return!1;const t=this._tasks.shift();try{const i=Ne(t.signal);if(i&&!t.abortCallback)t.reject(j());else{const u=i?t.abortCallback(j()):t.callback(e);Be(u)?u.then(t.resolve,t.reject):t.resolve(u)}}catch(i){t.reject(i)}return this._running.set(this._tasks.length>0),!0}cancelAll(){const e=j();for(const t of this._tasks)if(t.abortCallback){const i=t.abortCallback(e);t.resolve(i)}else t.reject(e);this._tasks.length=0,this._running.set(!1)}}class Ie{constructor(e,t,i,u,s){this.resolve=e,this.reject=t,this.callback=i,this.signal=u,this.abortCallback=s}}let D=class extends Ve{constructor(){super(...arguments),this.SCHEDULER_LOG_SLOW_TASKS=!1,this.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES=!1}};Z([le()],D.prototype,"SCHEDULER_LOG_SLOW_TASKS",void 0),Z([le()],D.prototype,"FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES",void 0),D=Z([qe("esri.views.support.DebugFlags")],D);const vt=new D;var d;(function(a){a.RESOURCE_CONTROLLER="schedule",a.SLIDE="slide",a.STREAM_DATA_LOADER="stream loader",a.ELEVATION_QUERY="elevation query",a.TERRAIN_SURFACE="terrain",a.SURFACE_GEOMETRY_UPDATES="surface geometry updates",a.GRAPHICS_CORE="Graphics3D",a.I3S_CONTROLLER="I3S",a.POINT_CLOUD_LAYER="point cloud",a.FEATURE_TILE_FETCHER="feature fetcher",a.OVERLAY="overlay",a.STAGE="stage",a.GRAPHICS_DECONFLICTOR="graphics deconflictor",a.FILTER_VISIBILITY="Graphics3D filter visibility",a.SCALE_VISIBILITY="Graphics3D scale visibility",a.FRUSTUM_VISIBILITY="Graphics3D frustum visibility",a.POINT_OF_INTEREST_FREQUENT="POI frequent",a.POINT_OF_INTEREST_INFREQUENT="POI infrequent",a.LABELER="labeler",a.FEATURE_QUERY_ENGINE="feature query",a.FEATURE_TILE_TREE="feature tile tree",a.FEATURE_TILE_TREE_ACTIVE="fast feature tile tree",a.ELEVATION_ALIGNMENT="elevation alignment",a.TEXT_TEXTURE_ATLAS="text texture atlas",a.TEXTURE_UNLOAD="texture unload",a.LINE_OF_SIGHT_TOOL="line of sight tool",a.LINE_OF_SIGHT_TOOL_INTERACTIVE="interactive line of sight tool",a.ELEVATION_PROFILE="elevation profile",a.SNAPPING="snapping",a.SHADOW_ACCUMULATOR="shadow accumulator",a.CLOUDS_GENERATOR="cloud generator",a[a.TEST_PRIO=1]="TEST_PRIO"})(d||(d={}));const k=0,Te=new Map([[d.RESOURCE_CONTROLLER,k],[d.SLIDE,k],[d.STREAM_DATA_LOADER,k],[d.ELEVATION_QUERY,k],[d.TERRAIN_SURFACE,1],[d.SURFACE_GEOMETRY_UPDATES,1],[d.GRAPHICS_CORE,2],[d.I3S_CONTROLLER,2],[d.POINT_CLOUD_LAYER,2],[d.FEATURE_TILE_FETCHER,2],[d.OVERLAY,4],[d.STAGE,4],[d.GRAPHICS_DECONFLICTOR,4],[d.FILTER_VISIBILITY,4],[d.SCALE_VISIBILITY,4],[d.FRUSTUM_VISIBILITY,4],[d.POINT_OF_INTEREST_FREQUENT,6],[d.POINT_OF_INTEREST_INFREQUENT,30],[d.LABELER,8],[d.FEATURE_QUERY_ENGINE,8],[d.FEATURE_TILE_TREE,16],[d.FEATURE_TILE_TREE_ACTIVE,k],[d.ELEVATION_ALIGNMENT,12],[d.TEXT_TEXTURE_ATLAS,12],[d.CLOUDS_GENERATOR,12],[d.TEXTURE_UNLOAD,12],[d.LINE_OF_SIGHT_TOOL,16],[d.LINE_OF_SIGHT_TOOL_INTERACTIVE,k],[d.SNAPPING,k],[d.SHADOW_ACCUMULATOR,30]]);function Se(a){return Te.has(a)?Te.get(a):typeof a=="number"?a:1}var b;(function(a){a[a.ANIMATING=0]="ANIMATING",a[a.INTERACTING=1]="INTERACTING",a[a.IDLE=2]="IDLE"})(b||(b={}));const Re=x(6.5),Ae=x(1),Ut=x(30),be=x(1e3/30),we=x(100),xe=.9;var ae,P;(function(a){class e{constructor(){this._updating=new re(!0),this._microTaskQueued=!1,this.performanceInfo={total:new X("total"),tasks:new Map},this._frameTaskTimes=new Map,this._budget=new i,this._state=b.INTERACTING,this._tasks=new J,this._runQueue=new J,this._load=0,this._idleStateCallbacks=new J,this._idleUpdatesStartFired=!1,this._maxReschedule=V,this._forceTask=!1,this._debug=!1,this._debugHandle=je(()=>vt.SCHEDULER_LOG_SLOW_TASKS,r=>this._debug=r,Ye);for(const r of Object.keys(d))this.performanceInfo.tasks.set(d[r],new X(d[r]));let s;const n=this;this._test={get state(){return He(s,n._state)},set state(r){s=r},FRAME_SAFETY_BUDGET:Re,INTERACTING_BUDGET:be,IDLE_BUDGET:we,get availableBudget(){return n._budget.budget},usedBudget:0,getBudget:()=>n._budget,setBudget:r=>n._budget=r,updateTask:r=>this._updateTask(r),getState:r=>this._getState(r),getRuntime:r=>this._getRuntime(r),frameTaskTimes:this._frameTaskTimes,resetRuntimes:()=>this._resetRuntimes(),getRunning:()=>this._getRunning()}}get updating(){return this._updating.get()}set updating(s){this._updating.set(s)}destroy(){this._tasks.toArray().forEach(s=>s.remove()),this._tasks.clear(),ie(this._debugHandle),this._microTaskQueued=!1,this._updating.set(!1)}activate(){this._budget.done||this._microTaskQueued||(this._microTaskQueued=!0,queueMicrotask(()=>{this._microTaskQueued&&(this._microTaskQueued=!1,this._budget.done||(this._maxReschedule=V,this._schedule(),this.frame()))}))}registerTask(s,n){const r=Se(s),o=new t(this,s,n,r);return this._tasks.push(o),this.performanceInfo.tasks.has(s)||this.performanceInfo.tasks.set(s,new X(s)),o}registerIdleStateCallbacks(s,n){const r={idleBegin:s,idleEnd:n};this._idleStateCallbacks.push(r),this.state===b.IDLE&&this._idleUpdatesStartFired&&r.idleBegin();const o=this;return{remove:()=>this._removeIdleStateCallbacks(r),set idleBegin(l){o._idleUpdatesStartFired&&(r.idleEnd(),o._state===b.IDLE&&l()),r.idleBegin=l},set idleEnd(l){r.idleEnd=l}}}get load(){return this._load}set state(s){this._state!==s&&(this._state=s,this.state!==b.IDLE&&this._idleUpdatesStartFired&&(this._idleUpdatesStartFired=!1,this._idleStateCallbacks.forAll(n=>n.idleEnd())))}get state(){return A(this._test.state)?this._state:this._test.state}updateBudget(s){this._test.usedBudget=0;let n=Re,r=s.frameDuration,o=Ae;switch(this.state){case b.IDLE:n=x(0),r=x(Math.max(we,s.frameDuration)),o=Ut;break;case b.INTERACTING:r=x(Math.max(be,s.frameDuration));case b.ANIMATING:}return r=x(r-s.elapsedFrameTime-n),this.state!==b.IDLE&&r<Ae&&!this._forceTask?(this._forceTask=!0,!1):(r=x(Math.max(r,o)),this._budget.reset(r,this.state),this._maxReschedule=V,this._updateLoad(),this._schedule())}frame(){switch(this._forceTask=!1,this._microTaskQueued=!1,this.state){case b.IDLE:this._idleUpdatesStartFired||(this._idleUpdatesStartFired=!0,this._idleStateCallbacks.forAll(s=>s.idleBegin())),this._runIdle();break;case b.INTERACTING:this._runInteracting();break;default:this._runAnimating()}this._test.usedBudget=this._budget.elapsed}stopFrame(){this._budget.reset(x(0),this._state),this._budget.madeProgress()}_removeIdleStateCallbacks(s){this._idleUpdatesStartFired&&s.idleEnd(),this._idleStateCallbacks.removeUnordered(s)}removeTask(s){this._tasks.removeUnordered(s),this._runQueue.removeUnordered(s)}_updateTask(s){this._tasks.forAll(n=>{n.name===s&&n.setPriority(s)})}_getState(s){if(this._runQueue.some(r=>r.name===s))return P.SCHEDULED;let n=P.IDLE;return this._tasks.forAll(r=>{r.name===s&&r.needsUpdate&&(r.schedulePriority<=1?n=P.READY:n!==P.READY&&(n=P.WAITING))}),n}_getRuntime(s){let n=0;return this._tasks.forAll(r=>{r.name===s&&(n+=r.runtime)}),n}_resetRuntimes(){this._tasks.forAll(s=>s.runtime=0)}_getRunning(){const s=new Map;if(this._tasks.forAll(r=>{r.needsUpdate&&s.set(r.name,(s.get(r.name)||0)+1)}),s.size===0)return null;let n="";return s.forEach((r,o)=>{n+=r>1?` ${r}x ${o}`:` ${o}`}),n}_runIdle(){this._run()}_runInteracting(){this._run()}_runAnimating(){this._run()}_updateLoad(){const s=this._tasks.reduce((n,r)=>r.needsUpdate?++n:n,0);this._load=this._load*xe+s*(1-xe)}_schedule(){if(this._maxReschedule<=0)return!1;for(this._runQueue.filterInPlace(s=>!!s.needsUpdate||(s.schedulePriority=s.basePriority,!1)),this._tasks.forAll(s=>{s.basePriority===k&&s.needsUpdate&&!this._runQueue.includes(s)&&this._runQueue.unshift(s)});this._runQueue.length===0;){let s=!1,n=0;if(this._tasks.forAll(r=>{r.needsUpdate&&r.schedulePriority!==0&&r.basePriority!==k&&(s=!0,n=Math.max(n,r.basePriority),r.schedulePriority===1?(r.schedulePriority=0,this._runQueue.push(r)):--r.schedulePriority)}),!s)return this._updating.set(!1),!1;this._maxReschedule===V&&(this._maxReschedule=n),--this._maxReschedule}return this._updating.set(!0),!0}_run(){const s=this._budget.now();this._startFrameTaskTimes();do for(;this._runQueue.length>0;){const n=this._budget.now(),r=this._runQueue.pop();this._budget.resetProgress();try{r.task.runTask(this._budget)}catch(l){ze.getLogger("esri.views.support.Scheduler").error(`Exception in task "${r.name}"`,l)}r.schedulePriority=r.basePriority;const o=this._budget.now()-n;if(r.runtime+=o,this._frameTaskTimes.set(r.priority,this._frameTaskTimes.get(r.priority)+o),this._debug&&this._budget.elapsed>2*this._budget.budget&&console.log("Task",r.name,"used",this._budget.elapsed,"of max",this._budget.budget,"ms"),this._budget.remaining<=0)return this._updating.set(this._tasks.some(l=>l.needsUpdate)),void this._recordFrameTaskTimes(this._budget.now()-s)}while(this._schedule());this._updating.set(this._tasks.some(n=>n.needsUpdate)),this._recordFrameTaskTimes(this._budget.now()-s)}_startFrameTaskTimes(){for(const s of Object.keys(d))this._frameTaskTimes.set(d[s],0)}_recordFrameTaskTimes(s){this._frameTaskTimes.forEach((n,r)=>this.performanceInfo.tasks.get(r).record(n)),this.performanceInfo.total.record(s)}get test(){return this._test}}a.Scheduler=e;class t{constructor(s,n,r,o){this._scheduler=s,this.name=n,this._basePriority=o,this.runtime=0,this._queue=new $t,this._handles=new We,this.schedulePriority=this._basePriority,this._task=new re(N(r)?r:this._queue),this._handles.add(Ze(()=>this.task.running,()=>s.activate()))}get task(){return this._task.get()}get updating(){return this._queue.running}remove(){this.processQueue(W),this._scheduler.removeTask(this),this.schedule=Fe.schedule,this.reschedule=Fe.reschedule,this._handles.destroy()}get basePriority(){return this._basePriority}setPriority(s){this.name=s;const n=Se(s);this._basePriority!==k&&this.schedulePriority===0||(this.schedulePriority=n),this._basePriority=n}get priority(){return this.name}set priority(s){this.setPriority(s)}get needsUpdate(){return this.updating||this.task.running}schedule(s,n,r){return this._queue.push(s,n,r)}reschedule(s,n,r){return this._queue.unshift(s,n,r)}processQueue(s){this._queue.runTask(s)}}class i{constructor(){this._begin=typeof performance<"u"?performance.now():0,this._budget=0,this._state=b.IDLE,this._done=!1,this._enabled=!0}run(s){return!this.done&&(s()===!0&&this.madeProgress(),!0)}get done(){return this._done}get budget(){return this._budget}madeProgress(){this._done=this.elapsed>=this._budget&&this._enabled}get state(){return this._state}get enabled(){return this._enabled}set enabled(s){this._enabled=s}reset(s,n){this._begin=this.now(),this._budget=s,this._state=n,this._done=!1}get remaining(){return Math.max(this._budget-this.elapsed,0)}now(){return performance.now()}get elapsed(){return performance.now()-this._begin}resetProgress(){this._done=!1}get hasProgressed(){return this._done}}a.Budget=i})(ae||(ae={})),function(a){a.SCHEDULED="s",a.READY="r",a.WAITING="w",a.IDLE="i"}(P||(P={}));const W=(()=>{const a=new ae.Budget;return a.enabled=!1,a})();class Dt{remove(){}processQueue(){}schedule(e,t,i){try{if(Ne(t)){const u=j();return i?Promise.resolve(i(u)):Promise.reject(u)}return Xe(e(W))}catch(u){return Promise.reject(u)}}reschedule(e,t,i){return this.schedule(e,t,i)}}const Fe=new Dt,V=Number.MAX_SAFE_INTEGER;function Mt(a){return a.every(e=>e.statisticType!=="exceedslimit")}const L="feature-store:unsupported-query",Bt=new Je(2e6);let qt=0;class Kt{constructor(e){this.capabilities={query:pt},this.geometryType=e.geometryType,this.hasM=e.hasM,this.hasZ=e.hasZ,this.objectIdField=e.objectIdField,this.spatialReference=e.spatialReference,this.definitionExpression=e.definitionExpression,this.featureStore=e.featureStore,this.aggregateAdapter=e.aggregateAdapter,this._changeHandle=this.featureStore.events.on("changed",()=>this.clearCache()),this.timeInfo=e.timeInfo,e.cacheSpatialQueries&&(this._geometryQueryCache=new Ke(qt+++"$$",Bt)),this.fieldsIndex=new et(e.fields),e.scheduler&&e.priority&&(this._frameTask=e.scheduler.registerTask(e.priority))}destroy(){this._frameTask=ie(this._frameTask),this.clearCache(),he(this._geometryQueryCache),this._changeHandle=ie(this._changeHandle),he(this.fieldsIndex)}get featureAdapter(){return this.featureStore.featureAdapter}get fullExtent(){const e=this.featureStore.fullBounds;return A(e)?null:{xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:ee(this.spatialReference)}}get timeExtent(){return this.timeInfo?(this._timeExtent||(this._timeExtent=Lt(this.timeInfo,this.featureStore)),this._timeExtent):null}clearCache(){var e;(e=this._geometryQueryCache)==null||e.clear(),this._allItems=null,this._timeExtent=null}async executeQuery(e,t){try{return(await this._executeQuery(e,{},t)).createQueryResponse()}catch(i){if(i!==G)throw i;return new S([],e,this).createQueryResponse()}}async executeQueryForCount(e={},t){try{return(await this._executeQuery(e,{returnGeometry:!1,returnCentroid:!1,outSR:null},t)).createQueryResponseForCount()}catch(i){if(i!==G)throw i;return 0}}async executeQueryForExtent(e,t){const i=e.outSR;try{const u=await this._executeQuery(e,{returnGeometry:!0,returnCentroid:!1,outSR:null},t),s=u.size;if(!s)return{count:0,extent:null};tt(F,st),this.featureStore.forEachBounds(u.items,o=>it(F,o),Vt);const n={xmin:F[0],ymin:F[1],xmax:F[3],ymax:F[4],spatialReference:ee(this.spatialReference)};this.hasZ&&isFinite(F[2])&&isFinite(F[5])&&(n.zmin=F[2],n.zmax=F[5]);const r=$(n,u.spatialReference,i);if(r.spatialReference=ee(i||this.spatialReference),r.xmax-r.xmin==0){const o=K(r.spatialReference);r.xmin-=o,r.xmax+=o}if(r.ymax-r.ymin==0){const o=K(r.spatialReference);r.ymin-=o,r.ymax+=o}if(this.hasZ&&r.zmin!=null&&r.zmax!=null&&r.zmax-r.zmin==0){const o=K(r.spatialReference);r.zmin-=o,r.zmax+=o}return{count:s,extent:r}}catch(u){if(u===G)return{count:0,extent:null};throw u}}async executeQueryForIds(e,t){return this.executeQueryForIdSet(e,t).then(i=>Array.from(i))}async executeQueryForIdSet(e,t){try{const i=await this._executeQuery(e,{returnGeometry:!0,returnCentroid:!1,outSR:null},t),u=i.items,s=new Set;return await this._reschedule(()=>{for(const n of u)s.add(i.featureAdapter.getObjectId(n))},t),s}catch(i){if(i===G)return new Set;throw i}}async executeQueryForSnapping(e,t){const{point:i,distance:u,types:s}=e;if(s===ht.NONE)return{candidates:[]};const n=await this._reschedule(()=>this._checkQuerySupport(e.query),t),r=!Q(i.spatialReference,this.spatialReference);r&&await Y(i.spatialReference,this.spatialReference);const o=typeof u=="number"?u:u.x,l=typeof u=="number"?u:u.y,h={xmin:i.x-o,xmax:i.x+o,ymin:i.y-l,ymax:i.y+l,spatialReference:i.spatialReference},_=r?$(h,this.spatialReference):h;if(!_)return{candidates:[]};const g=(await fe(ce(i),null,{signal:t}))[0],c=(await fe(ce(_),null,{signal:t}))[0];if(A(g)||A(c))return{candidates:[]};const p=new S(this._searchFeatures(this._getQueryBBoxes(c.toJSON())),n,this);await this._reschedule(()=>this._executeObjectIdsQuery(p),t),await this._reschedule(()=>this._executeTimeQuery(p),t),await this._reschedule(()=>this._executeAttributesQuery(p),t);const m=g.toJSON(),T=r?$(m,this.spatialReference):m,y=r?Math.max(_.xmax-_.xmin,_.ymax-_.ymin)/2:u;return p.createSnappingResponse({...e,point:T,distance:y},i.spatialReference)}async executeQueryForLatestObservations(e,t){if(!this.timeInfo||!this.timeInfo.trackIdField)throw new w(L,"Missing timeInfo or timeInfo.trackIdField",{query:e,timeInfo:this.timeInfo});try{const i=await this._executeQuery(e,{},t);return await this._reschedule(()=>this._filterLatest(i),t),i.createQueryResponse()}catch(i){if(i!==G)throw i;return new S([],e,this).createQueryResponse()}}async executeQueryForSummaryStatistics(e={},t,i){const{field:u,normalizationField:s,valueExpression:n}=t;return(await this._getQueryEngineResultForStats(e,{field:u,normalizationField:s,valueExpression:n},i)).createSummaryStatisticsResponse(t)}async executeQueryForUniqueValues(e={},t,i){const{field:u,valueExpression:s}=t;return(await this._getQueryEngineResultForStats(e,{field:u,valueExpression:s},i)).createUniqueValuesResponse(t)}async executeQueryForClassBreaks(e={},t,i){const{field:u,normalizationField:s,valueExpression:n}=t;return(await this._getQueryEngineResultForStats(e,{field:u,normalizationField:s,valueExpression:n},i)).createClassBreaksResponse(t)}async executeQueryForHistogram(e={},t,i){const{field:u,normalizationField:s,valueExpression:n}=t;return(await this._getQueryEngineResultForStats(e,{field:u,normalizationField:s,valueExpression:n},i)).createHistogramResponse(t)}async _schedule(e,t){return N(this._frameTask)?this._frameTask.schedule(e,t):e(W)}async _reschedule(e,t){return N(this._frameTask)?this._frameTask.reschedule(e,t):e(W)}_getAll(e){return A(this._allItems)&&(this._allItems=this.featureStore.toArray()),new S(this._allItems,e,this)}async _executeQuery(e,t,i){e=de(e),e=await this._schedule(()=>pe(e,this.definitionExpression,this.spatialReference),i),e=await this._reschedule(()=>this._checkQuerySupport(e),i),e={...e,...t};const u=await this._reschedule(()=>this._executeSceneFilterQuery(e,i),i),s=await this._reschedule(()=>this._executeGeometryQuery(e,u,i),i);return await this._reschedule(()=>this._executeAggregateIdsQuery(s),i),await this._reschedule(()=>this._executeObjectIdsQuery(s),i),await this._reschedule(()=>this._executeTimeQuery(s),i),await this._reschedule(()=>this._executeAttributesQuery(s),i),s}async _executeSceneFilterQuery(e,t){if(A(e.sceneFilter))return null;const{outSR:i,returnGeometry:u,returnCentroid:s}=e,n=this.featureStore.featureSpatialReference,r=e.sceneFilter.geometry,o=A(n)||Q(n,r.spatialReference)?r:$(r,n);if(!o)return null;const l=u||s,h=z(i)&&!Q(this.spatialReference,i)&&l?async m=>this._project(m,i):m=>m,_=this.featureAdapter,g=this._searchFeatures(this._getQueryBBoxes(o));if(e.sceneFilter.spatialRelationship==="disjoint"){if(!g.length)return null;const m=new Set;for(const E of g)m.add(_.getObjectId(E));const T=await this._reschedule(()=>this.featureStore.toArray(),t),y=await this._reschedule(async()=>{const E=await q("esriSpatialRelDisjoint",o,this.geometryType,this.hasZ,this.hasM),R=I=>!m.has(_.getObjectId(I))||E(_.getGeometry(I)),f=await this._runSpatialFilter(T,R,t);return new S(f,e,this)},t);return h(y)}if(!g.length)return new S([],e,this);if(this._canExecuteSinglePass(o,e))return h(new S(g,e,this));const c=await q("esriSpatialRelContains",o,this.geometryType,this.hasZ,this.hasM),p=await this._runSpatialFilter(g,m=>c(_.getGeometry(m)),t);return h(new S(p,e,this))}async _executeGeometryQuery(e,t,i){if(N(t)&&t.items.length===0)return t;e=N(t)?t.query:e;const{geometry:u,outSR:s,spatialRel:n,returnGeometry:r,returnCentroid:o}=e,l=this.featureStore.featureSpatialReference,h=!u||A(l)||Q(l,u.spatialReference)?u:$(u,l),_=r||o,g=z(s)&&!Q(this.spatialReference,s),c=this._geometryQueryCache&&A(t)?g&&_?JSON.stringify({originalFilterGeometry:u,spatialRelationship:n,outSpatialReference:s}):JSON.stringify({originalFilterGeometry:u,spatialRelationship:n}):null,p=c?this._geometryQueryCache.get(c):null;if(N(p))return new S(p,e,this);const m=async f=>(g&&_&&await this._project(f,s),c&&this._geometryQueryCache.put(c,f.items,f.items.length+1),f);if(!h)return m(N(t)?t:this._getAll(e));const T=this.featureAdapter;let y=this._searchFeatures(this._getQueryBBoxes(u));if(n==="esriSpatialRelDisjoint"){if(!y.length)return m(N(t)?t:this._getAll(e));const f=new Set;for(const C of y)f.add(T.getObjectId(C));const I=N(t)?t.items:await this._reschedule(()=>this.featureStore.toArray(),i),B=await this._reschedule(async()=>{const C=await q(n,h,this.geometryType,this.hasZ,this.hasM),O=oe=>!f.has(T.getObjectId(oe))||C(T.getGeometry(oe)),Pe=await this._runSpatialFilter(I,O,i);return new S(Pe,e,this)},i);return m(B)}if(N(t)){const f=new rt;y=y.filter(I=>at(t.items,I,t.items.length,f)>=0)}if(!y.length){const f=new S([],e,this);return c&&this._geometryQueryCache.put(c,f.items,1),f}if(this._canExecuteSinglePass(h,e))return m(new S(y,e,this));const E=await q(n,h,this.geometryType,this.hasZ,this.hasM),R=await this._runSpatialFilter(y,f=>E(T.getGeometry(f)),i);return m(new S(R,e,this))}_executeAggregateIdsQuery(e){if(e.items.length===0||!e.query.aggregateIds||!e.query.aggregateIds.length||A(this.aggregateAdapter))return;const t=new Set;for(const u of e.query.aggregateIds)this.aggregateAdapter.getFeatureObjectIds(u).forEach(s=>t.add(s));const i=this.featureAdapter.getObjectId;e.items=e.items.filter(u=>t.has(i(u)))}_executeObjectIdsQuery(e){if(e.items.length===0||!e.query.objectIds||!e.query.objectIds.length)return;const t=new Set(e.query.objectIds),i=this.featureAdapter.getObjectId;e.items=e.items.filter(u=>t.has(i(u)))}_executeTimeQuery(e){if(e.items.length===0)return;const t=Pt(this.timeInfo,e.query.timeExtent,this.featureAdapter);A(t)||(e.items=e.items.filter(t))}_executeAttributesQuery(e){if(e.items.length===0)return;const t=ct(e.query.where,this.fieldsIndex);if(t){if(!t.isStandardized)throw new TypeError("Where clause is not standardized");e.items=e.items.filter(i=>t.testFeature(i,this.featureAdapter))}}async _runSpatialFilter(e,t,i){if(!t)return e;if(A(this._frameTask))return e.filter(r=>t(r));let u=0;const s=new Array,n=async r=>{for(;u<e.length;){const o=e[u++];t(o)&&(s.push(o),r.madeProgress()),r.done&&await this._reschedule(l=>n(l),i)}};return this._reschedule(r=>n(r),i).then(()=>s)}_filterLatest(e){const{trackIdField:t,startTimeField:i,endTimeField:u}=this.timeInfo,s=u||i,n=new Map,r=this.featureAdapter.getAttribute;for(const o of e.items){const l=r(o,t),h=r(o,s),_=n.get(l);(!_||h>r(_,s))&&n.set(l,o)}e.items=Array.from(n.values())}_canExecuteSinglePass(e,t){const{spatialRel:i}=t;return Ee(e)&&(i==="esriSpatialRelEnvelopeIntersects"||this.geometryType==="esriGeometryPoint"&&(i==="esriSpatialRelIntersects"||i==="esriSpatialRelContains"||i==="esriSpatialRelWithin"))}async _project(e,t){if(!t||Q(this.spatialReference,t))return e;const i=this.featureAdapter,u=await dt(e.items.map(s=>U(this.geometryType,this.hasZ,this.hasM,i.getGeometry(s))),this.spatialReference,t);return e.items=u.map((s,n)=>i.cloneWithGeometry(e.items[n],lt(s,this.hasZ,this.hasM))),e}_getQueryBBoxes(e){if(Ee(e)){if(M(e))return[_e(e.xmin,e.ymin,e.xmax,e.ymax)];if(H(e))return e.rings.map(t=>_e(Math.min(t[0][0],t[2][0]),Math.min(t[0][1],t[2][1]),Math.max(t[0][0],t[2][0]),Math.max(t[0][1],t[2][1])))}return[nt(ot(),e)]}_searchFeatures(e){for(const i of e)this.featureStore.forEachInBounds(i,u=>se.add(u));const t=Array.from(se.values());return se.clear(),t}async _checkStatisticsSupport(e,t){if(e.distance<0||e.geometryPrecision!=null||e.multipatchOption||e.pixelSize||e.relationParam||e.text||e.outStatistics||e.groupByFieldsForStatistics||e.having||e.orderByFields)throw new w(L,"Unsupported query options",{query:e});return this._checkAttributesQuerySupport(e),Promise.all([this._checkStatisticsParamsSupport(t),ye(e,this.geometryType,this.spatialReference),Y(this.spatialReference,e.outSR)]).then(()=>e)}async _checkStatisticsParamsSupport(e){let t=[];if(e.valueExpression){const{arcadeUtils:i}=await ut();t=i.extractFieldNames(e.valueExpression)}if(e.field&&t.push(e.field),e.normalizationField&&t.push(e.normalizationField),!t.length)throw new w(L,"params should have at least a field or valueExpression",{params:e});v(this.fieldsIndex,t,"params contains missing fields")}async _checkQuerySupport(e){if(e.distance<0||e.geometryPrecision!=null||e.multipatchOption||e.pixelSize||e.relationParam||e.text)throw new w(L,"Unsupported query options",{query:e});return this._checkAttributesQuerySupport(e),this._checkStatisticsQuerySupport(e),Promise.all([ye(e,this.geometryType,this.spatialReference),Y(this.spatialReference,e.outSR)]).then(()=>e)}_checkAttributesQuerySupport(e){const{outFields:t,orderByFields:i,returnDistinctValues:u,outStatistics:s}=e,n=s?s.map(r=>r.outStatisticFieldName&&r.outStatisticFieldName.toLowerCase()).filter(Boolean):[];if(i&&i.length>0){const r=" asc",o=" desc",l=i.map(h=>{const _=h.toLowerCase();return _.includes(r)?_.split(r)[0]:_.includes(o)?_.split(o)[0]:h}).filter(h=>!n.includes(h));v(this.fieldsIndex,l,"orderByFields contains missing fields")}if(t&&t.length>0)v(this.fieldsIndex,t,"outFields contains missing fields");else if(u)throw new w(L,"outFields should be specified for returnDistinctValues",{query:e});_t(this.fieldsIndex,e.where)}_checkStatisticsQuerySupport(e){const{outStatistics:t,groupByFieldsForStatistics:i,having:u}=e,s=i&&i.length,n=t&&t.length;if(u){if(!s||!n)throw new w(L,"outStatistics and groupByFieldsForStatistics should be specified with having",{query:e});ft(this.fieldsIndex,u,t)}if(n){if(!Mt(t))return;const r=t.map(o=>o.onStatisticField).filter(Boolean);v(this.fieldsIndex,r,"onStatisticFields contains missing fields"),s&&v(this.fieldsIndex,i,"groupByFieldsForStatistics contains missing fields");for(const o of t){const{onStatisticField:l,statisticType:h}=o;if((h==="percentile_disc"||h==="percentile_cont")&&"statisticParameters"in o){const{statisticParameters:_}=o;if(!_)throw new w(L,"statisticParamters should be set for percentile type",{definition:o,query:e})}else if(h!=="count"&&l&&mt(l,this.fieldsIndex))throw new w(L,"outStatistics contains non-numeric fields",{definition:o,query:e})}}}async _getQueryEngineResultForStats(e,t,i){e=de(e);try{e=await this._schedule(()=>pe(e,this.definitionExpression,this.spatialReference),i),e=await this._reschedule(()=>this._checkStatisticsSupport(e,t),i);const u=await this._reschedule(()=>this._executeSceneFilterQuery(e,i),i),s=await this._reschedule(()=>this._executeGeometryQuery(e,u,i),i);return await this._reschedule(()=>this._executeAggregateIdsQuery(s),i),await this._reschedule(()=>this._executeObjectIdsQuery(s),i),await this._reschedule(()=>this._executeTimeQuery(s),i),await this._reschedule(()=>this._executeAttributesQuery(s),i),s}catch(u){if(u!==G)throw u;return new S([],e,this)}}}const Vt=ke(),F=ke(),se=new Set;export{Kt as Y,Jt as e,Pt as n,q as v};