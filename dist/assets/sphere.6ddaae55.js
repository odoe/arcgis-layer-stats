import{d8 as _,an as p,cM as Z,cQ as d,cT as $,e6 as h,eb as a,cN as q,ec as E,de as L,ed as v,cL as K,f as N,t as Q,cS as V,cP as x,ee as k,d2 as B,ea as D,cR as F,ef as A,cK as O,e7 as G}from"./index.a113d2e4.js";import{s as H,c as f,f as I}from"./vectorStacks.2a75747f.js";var g;(function(t){t[t.X=0]="X",t[t.Y=1]="Y",t[t.Z=2]="Z"})(g||(g={}));function J(t){return t?T(_(t.origin),_(t.direction)):T(p(),p())}function T(t,e){return{origin:t,direction:e}}function St(t,e){const n=W.get();return n.origin=t,n.direction=e,n}function U(t,e,n){const o=Z(t.direction,d(n,e,t.origin));return $(n,t.origin,h(n,t.direction,o)),n}const W=new H(()=>J());function tt(t,e){const n=Z(t,e)/(a(t)*a(e));return-q(n)}function R(){return E()}function w(t,e=R()){return L(e,t)}function nt(t,e){return v(t[0],t[1],t[2],e)}function et(t){return t}function ot(t){t[0]=t[1]=t[2]=t[3]=0}function rt(t,e){return t[0]=t[1]=t[2]=0,t[3]=e,t}function m(t){return t[3]}function it(t){return t}function ct(t,e,n,o){return v(t,e,n,o)}function st(t,e,n){return t!==n&&K(n,t),n[3]=t[3]+e,n}function ut(t,e,n){return N.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),t===n?n:w(t,n)}function M(t,e,n){if(Q(e))return!1;const{origin:o,direction:r}=e,i=at;i[0]=o[0]-t[0],i[1]=o[1]-t[1],i[2]=o[2]-t[2];const c=r[0]*r[0]+r[1]*r[1]+r[2]*r[2],s=2*(r[0]*i[0]+r[1]*i[1]+r[2]*i[2]),l=s*s-4*c*(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]-t[3]*t[3]);if(l<0)return!1;const b=Math.sqrt(l);let u=(-s-b)/(2*c);const S=(-s+b)/(2*c);return(u<0||S<u&&S>0)&&(u=S),!(u<0)&&(n&&(n[0]=o[0]+r[0]*u,n[1]=o[1]+r[1]*u,n[2]=o[2]+r[2]*u),!0)}const at=p();function ft(t,e){return M(t,e,null)}function gt(t,e,n){if(M(t,e,n))return n;const o=C(t,e,f.get());return $(n,e.origin,h(f.get(),e.direction,V(e.origin,o)/a(e.direction))),n}function C(t,e,n){const o=f.get(),r=I.get();x(o,e.origin,e.direction);const i=m(t);x(n,o,e.origin),h(n,n,1/a(n)*i);const c=Y(t,e.origin),s=tt(e.origin,n);return k(r,s+c,o),B(n,n,r),n}function dt(t,e,n){return M(t,e,n)?n:(U(e,t,n),X(t,n,n))}function X(t,e,n){const o=d(f.get(),e,t),r=h(f.get(),o,t[3]/a(o));return $(n,r,t)}function lt(t,e){const n=d(f.get(),e,t),o=D(n),r=t[3]*t[3];return Math.sqrt(Math.abs(o-r))}function Y(t,e){const n=d(f.get(),e,t),o=a(n),r=m(t),i=r+Math.abs(r-o);return q(r/i)}const y=p();function j(t,e,n,o){const r=d(y,e,t);switch(n){case g.X:{const i=A(r,y)[2];return O(o,-Math.sin(i),Math.cos(i),0)}case g.Y:{const i=A(r,y),c=i[1],s=i[2],l=Math.sin(c);return O(o,-l*Math.cos(s),-l*Math.sin(s),Math.cos(c))}case g.Z:return F(o,r);default:return}}function z(t,e){const n=d(P,e,t);return a(n)-t[3]}function pt(t,e,n,o){const r=z(t,e),i=j(t,e,g.Z,P),c=h(P,i,n-r);return $(o,e,c)}function ht(t,e){const n=G(t,e),o=m(t);return n<=o*o}const P=p(),$t=R();Object.freeze(Object.defineProperty({__proto__:null,create:R,copy:w,fromCenterAndRadius:nt,wrap:et,clear:ot,fromRadius:rt,getRadius:m,getCenter:it,fromValues:ct,elevate:st,setExtent:ut,intersectRay:M,intersectsRay:ft,intersectRayClosestSilhouette:gt,closestPointOnSilhouette:C,closestPoint:dt,projectPoint:X,distanceToSilhouette:lt,angleToSilhouette:Y,axisAt:j,altitudeAt:z,setAltitudeAt:pt,containsPoint:ht,tmpSphere:$t},Symbol.toStringTag,{value:"Module"}));export{ht as N,R,m as T,ft as V,w as _,J as d,it as k,St as p};
