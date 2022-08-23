import{B as w,G as R,X as f,J as s,an as l}from"./arcadeUtils.2e13aa4f.js";import{g as u,d as m}from"./SpatialFilter.11e4df30.js";import{bb as o}from"./index.a113d2e4.js";import{R as S,m as A,S as F,x as g,O as v,p as E,h as d}from"./geometryEngineAsync.e719889c.js";import"./number.a2895165.js";import"./featureConversionUtils.14a166d5.js";import"./OptimizedGeometry.fcc3a6dc.js";import"./OptimizedFeatureSet.0c30c73c.js";import"./WhereClause.bca47f15.js";function c(e){return e instanceof o}function a(e,i,r,p){return p(e,i,async function(h,t,n){if(n.length<2)throw new Error("Missing Parameters");if((n=w(n))[0]===null&&n[1]===null)return!1;if(s(n[0])){if(n[1]instanceof o)return new m({parentfeatureset:n[0],relation:r,relationGeom:n[1]});if(n[1]===null)return new u({parentfeatureset:n[0]});throw new Error("Spatial Relation cannot accept this parameter type")}if(c(n[0])){if(c(n[1])){switch(r){case"esriSpatialRelEnvelopeIntersects":return d(l(n[0]),l(n[1]));case"esriSpatialRelIntersects":return d(n[0],n[1]);case"esriSpatialRelContains":return E(n[0],n[1]);case"esriSpatialRelOverlaps":return v(n[0],n[1]);case"esriSpatialRelWithin":return g(n[0],n[1]);case"esriSpatialRelTouches":return F(n[0],n[1]);case"esriSpatialRelCrosses":return A(n[0],n[1])}throw new Error("Unrecognised Relationship")}if(s(n[1]))return new m({parentfeatureset:n[1],relation:r,relationGeom:n[0]});if(n[1]===null)return!1;throw new Error("Spatial Relation cannot accept this parameter type")}if(n[0]!==null)throw new Error("Spatial Relation cannot accept this parameter type");return s(n[1])?new u({parentfeatureset:n[1]}):!(n[1]instanceof o||n[1]===null)&&void 0})}function B(e){e.mode==="async"&&(e.functions.intersects=function(i,r){return a(i,r,"esriSpatialRelIntersects",e.standardFunctionAsync)},e.functions.envelopeintersects=function(i,r){return a(i,r,"esriSpatialRelEnvelopeIntersects",e.standardFunctionAsync)},e.signatures.push({name:"envelopeintersects",min:"2",max:"2"}),e.functions.contains=function(i,r){return a(i,r,"esriSpatialRelContains",e.standardFunctionAsync)},e.functions.overlaps=function(i,r){return a(i,r,"esriSpatialRelOverlaps",e.standardFunctionAsync)},e.functions.within=function(i,r){return a(i,r,"esriSpatialRelWithin",e.standardFunctionAsync)},e.functions.touches=function(i,r){return a(i,r,"esriSpatialRelTouches",e.standardFunctionAsync)},e.functions.crosses=function(i,r){return a(i,r,"esriSpatialRelCrosses",e.standardFunctionAsync)},e.functions.relate=function(i,r){return e.standardFunctionAsync(i,r,function(p,h,t){if(t=w(t),R(t,3,3),c(t[0])&&c(t[1]))return S(t[0],t[1],f(t[2]));if(t[0]instanceof o&&t[1]===null||t[1]instanceof o&&t[0]===null)return!1;if(s(t[0])&&t[1]===null)return new u({parentfeatureset:t[0]});if(s(t[1])&&t[0]===null)return new u({parentfeatureset:t[1]});if(s(t[0])&&t[1]instanceof o)return t[0].relate(t[1],f(t[2]));if(s(t[1])&&t[0]instanceof o)return t[1].relate(t[0],f(t[2]));if(t[0]===null&&t[1]===null)return!1;throw new Error("Illegal Argument")})})}export{B as registerFunctions};
