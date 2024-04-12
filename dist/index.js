"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var g=n(function(Or,P){P.exports={objectMode:!1,encoding:null,allowHalfOpen:!1,decodeStrings:!0}});var v=n(function(Sr,O){
var A=require('@stdlib/assert-is-plain-object/dist'),s=require('@stdlib/assert-has-own-property/dist'),p=require('@stdlib/assert-is-function/dist'),c=require('@stdlib/assert-is-boolean/dist').isPrimitive,J=require('@stdlib/assert-is-nonnegative-number/dist').isPrimitive,V=require('@stdlib/assert-is-string/dist').isPrimitive,a=require('@stdlib/error-tools-fmtprodmsg/dist');function D(e,r){return A(r)?s(r,"transform")&&(e.transform=r.transform,!p(e.transform))?new TypeError(a('1MZ6p',"transform",e.transform)):s(r,"flush")&&(e.flush=r.flush,!p(e.flush))?new TypeError(a('1MZ6p',"flush",e.flush)):s(r,"objectMode")&&(e.objectMode=r.objectMode,!c(e.objectMode))?new TypeError(a('1MZ2o',"objectMode",e.objectMode)):s(r,"encoding")&&(e.encoding=r.encoding,!V(e.encoding))?new TypeError(a('1MZ2W',"encoding",e.encoding)):s(r,"allowHalfOpen")&&(e.allowHalfOpen=r.allowHalfOpen,!c(e.allowHalfOpen))?new TypeError(a('1MZ2o',"allowHalfOpen",e.allowHalfOpen)):s(r,"highWaterMark")&&(e.highWaterMark=r.highWaterMark,!J(e.highWaterMark))?new TypeError(a('1MZ4k',"highWaterMark",e.highWaterMark)):s(r,"decodeStrings")&&(e.decodeStrings=r.decodeStrings,!c(e.decodeStrings))?new TypeError(a('1MZ2o',"decodeStrings",e.decodeStrings)):null:new TypeError(a('1MZ2V',r));}O.exports=D
});var q=n(function(Tr,S){
var L=require("debug"),R=require('@stdlib/utils-next-tick/dist'),h=L("transform-stream:destroy");function U(e){var r;if(this._destroyed)return h("Attempted to destroy an already destroyed stream."),this;return r=this,this._destroyed=!0,R(t),this;function t(){e&&(h("Stream was destroyed due to an error. Error: %s.",JSON.stringify(e)),r.emit("error",e)),h("Closing the stream..."),r.emit("close")}}S.exports=U
});var b=n(function(jr,T){
var B=require("debug"),z=B("transform-stream:transform");function G(e,r,t){z("Received a new chunk. Chunk: %s. Encoding: %s.",e.toString(),r),t(null,e)}T.exports=G
});var l=n(function(Mr,M){
var I=require("debug"),j=require("readable-stream").Transform,K=require('@stdlib/utils-inherit/dist'),Q=require('@stdlib/object-assign/dist'),X=g(),Y=v(),Z=q(),$=b(),rr=I("transform-stream:main");function o(e){var r,t;if(!(this instanceof o))return arguments.length?new o(e):new o;if(r=Q({},X),arguments.length&&(t=Y(r,e),t))throw t;return rr("Creating a transform stream configured with the following options: %s.",JSON.stringify(r)),j.call(this,r),this._destroyed=!1,r.transform?this._transform=r.transform:this._transform=$,r.flush&&(this._flush=r.flush),this}K(o,j);o.prototype.destroy=Z;M.exports=o
});var _=n(function(Er,E){
var er=require('@stdlib/assert-is-plain-object/dist'),tr=require('@stdlib/error-tools-fmtprodmsg/dist'),ir=require('@stdlib/object-assign/dist'),nr=l();function ar(e){var r;if(arguments.length){if(!er(e))throw new TypeError(tr('1MZ2V',e));r=ir({},e)}else r={};return r.objectMode=!0,new nr(r)}E.exports=ar
});var k=n(function(_r,x){
var sr=require('@stdlib/assert-is-plain-object/dist'),or=require('@stdlib/error-tools-fmtprodmsg/dist'),ur=require('@stdlib/object-assign/dist'),fr=l();function lr(e){var r;if(arguments.length){if(!sr(e))throw new TypeError(or('1MZ2V',e));r=ur({},e)}else r={};return t;function t(u,i){return r.transform=u,arguments.length>1?r.flush=i:delete r.flush,new fr(r)}}x.exports=lr
});var F=n(function(xr,C){
var mr=require("debug"),H=require("readable-stream").Transform,dr=require('@stdlib/utils-inherit/dist'),W=require('@stdlib/object-assign/dist'),gr=g(),N=v(),cr=q(),vr=b(),hr=mr("transform-stream:ctor");function qr(e){var r,t,u;if(t=W({},gr),arguments.length&&(u=N(t,e),u))throw u;t.transform?r=t.transform:r=vr;function i(y){var f,d;if(!(this instanceof i))return arguments.length?new i(y):new i;if(f=W({},t),arguments.length&&(d=N(f,y),d))throw d;return hr("Creating a transform stream configured with the following options: %s.",JSON.stringify(f)),H.call(this,f),this._destroyed=!1,this}return dr(i,H),i.prototype._transform=r,t.flush&&(i.prototype._flush=t.flush),i.prototype.destroy=cr,i}C.exports=qr
});var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=l(),br=_(),wr=k(),yr=F();w(m,"objectMode",br);w(m,"factory",wr);w(m,"ctor",yr);module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map