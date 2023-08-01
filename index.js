// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("stream"),require("process")):"function"==typeof define&&define.amd?define(["stream","process"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).transformStream=e(r.require$$1,r.require$$0$1)}(this,(function(r,e){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,o=Object.defineProperty,i=Object.prototype,a=i.toString,u=i.__defineGetter__,c=i.__defineSetter__,f=i.__lookupGetter__,l=i.__lookupSetter__;n=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?o:function(r,e,t){var n,o,s,p;if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((o="value"in t)&&(f.call(r,e)||l.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),s="get"in t,p="set"in t,o&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(r,e,t.get),p&&c&&c.call(r,e,t.set),r};var s=n;function p(r,e,t){s(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function g(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){if(this instanceof r){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(e,t);return new n}return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}var h=g(Object.freeze({__proto__:null,default:()=>()=>{}}));function d(r){var e=typeof r;return null===r||"object"!==e&&"function"!==e?new TypeError("invalid argument. A provided constructor must be either an object (except null) or a function. Value: `"+r+"`."):null}var y=Object.create;function b(){}var v="function"==typeof y?y:function(r){return b.prototype=r,new b};function m(r,e){var t=d(r);if(t)throw t;if(t=d(e))throw t;if(void 0===e.prototype)throw new TypeError("invalid argument. Second argument must have a prototype from which another object can inherit. Value: `"+e.prototype+"`.");return r.prototype=v(e.prototype),s(r.prototype,"constructor",{configurable:!0,enumerable:!1,writable:!0,value:r}),r}var w=/./;function j(r){return"boolean"==typeof r}var O="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function S(){return O&&"symbol"==typeof Symbol.toStringTag}var _=Object.prototype.toString;var E=Object.prototype.hasOwnProperty;function T(r,e){return null!=r&&E.call(r,e)}var k="function"==typeof Symbol?Symbol.toStringTag:"";var x=S()?function(r){var e,t,n;if(null==r)return _.call(r);t=r[k],e=T(r,k);try{r[k]=void 0}catch(e){return _.call(r)}return n=_.call(r),e?r[k]=t:delete r[k],n}:function(r){return _.call(r)},P=Boolean.prototype.toString;var I=S();function M(r){return"object"==typeof r&&(r instanceof Boolean||(I?function(r){try{return P.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===x(r)))}function A(r){return j(r)||M(r)}function V(){return new Function("return this;")()}p(A,"isPrimitive",j),p(A,"isObject",M);var B="object"==typeof self?self:null,F="object"==typeof window?window:null,$="object"==typeof global?global:null;var C=function(r){if(arguments.length){if(!j(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return V()}if(B)return B;if(F)return F;if($)return $;throw new Error("unexpected error. Unable to resolve global object.")}(),N=C.document&&C.document.childNodes,W=Int8Array;function H(){return/^\s*function\s*([^(]*)/i}var R=/^\s*function\s*([^(]*)/i;p(H,"REGEXP",R);var L=Array.isArray?Array.isArray:function(r){return"[object Array]"===x(r)};function G(r){return null!==r&&"object"==typeof r}function X(r){var e,t,n,o;if(("Object"===(t=x(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=R.exec(n.toString()))return e[1]}return G(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}p(G,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!L(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(G));var Z="function"==typeof w||"object"==typeof W||"function"==typeof N?function(r){return X(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?X(r).toLowerCase():e};function q(r){return"function"===Z(r)}var U=q(Object.assign),Y=Object.assign;function J(r){return Object.keys(Object(r))}var z,D=void 0!==Object.keys;function K(r){return"[object Arguments]"===x(r)}z=function(){return K(arguments)}();var Q=z;function rr(r){return"string"==typeof r}var er=String.prototype.valueOf;var tr=S();function nr(r){return"object"==typeof r&&(r instanceof String||(tr?function(r){try{return er.call(r),!0}catch(r){return!1}}(r):"[object String]"===x(r)))}function or(r){return rr(r)||nr(r)}function ir(r){return"number"==typeof r}p(or,"isPrimitive",rr),p(or,"isObject",nr);var ar=Number,ur=ar.prototype.toString;var cr=S();function fr(r){return"object"==typeof r&&(r instanceof ar||(cr?function(r){try{return ur.call(r),!0}catch(r){return!1}}(r):"[object Number]"===x(r)))}function lr(r){return ir(r)||fr(r)}function sr(r){return r!=r}function pr(r){return ir(r)&&sr(r)}function gr(r){return fr(r)&&sr(r.valueOf())}function hr(r){return pr(r)||gr(r)}p(lr,"isPrimitive",ir),p(lr,"isObject",fr),p(hr,"isPrimitive",pr),p(hr,"isObject",gr);var dr=Number.POSITIVE_INFINITY,yr=ar.NEGATIVE_INFINITY,br=Math.floor;function vr(r){return br(r)===r}function mr(r){return r<dr&&r>yr&&vr(r)}function wr(r){return ir(r)&&mr(r)}function jr(r){return fr(r)&&mr(r.valueOf())}function Or(r){return wr(r)||jr(r)}p(Or,"isPrimitive",wr),p(Or,"isObject",jr);var Sr=Object.prototype.propertyIsEnumerable;var _r=!Sr.call("beep","0");function Er(r,e){var t;return null!=r&&(!(t=Sr.call(r,e))&&_r&&or(r)?!pr(e=+e)&&wr(e)&&e>=0&&e<r.length:t)}var Tr=Q?K:function(r){return null!==r&&"object"==typeof r&&!L(r)&&"number"==typeof r.length&&vr(r.length)&&r.length>=0&&r.length<=4294967295&&T(r,"callee")&&!Er(r,"callee")},kr=Array.prototype.slice;var xr=Er((function(){}),"prototype"),Pr=!Er({toString:null},"toString");function Ir(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&vr(r.length)&&r.length>=0&&r.length<=9007199254740991}function Mr(r,e,t){var n,o;if(!Ir(r)&&!rr(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(n=r.length))return-1;if(3===arguments.length){if(!wr(t))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+t+"`.");if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(hr(e)){for(;o<n;o++)if(hr(r[o]))return o}else for(;o<n;o++)if(r[o]===e)return o;return-1}function Ar(r){return r.constructor&&r.constructor.prototype===r}var Vr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Br="undefined"==typeof window?void 0:window;var Fr=function(){var r;if("undefined"===Z(Br))return!1;for(r in Br)try{-1===Mr(Vr,r)&&T(Br,r)&&null!==Br[r]&&"object"===Z(Br[r])&&Ar(Br[r])}catch(r){return!0}return!1}(),$r="undefined"!=typeof window;var Cr,Nr=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Cr=D?function(){return 2!==(J(arguments)||"").length}(1,2)?function(r){return Tr(r)?J(kr.call(r)):J(r)}:J:function(r){var e,t,n,o,i,a,u;if(o=[],Tr(r)){for(u=0;u<r.length;u++)o.push(u.toString());return o}if("string"==typeof r){if(r.length>0&&!T(r,"0"))for(u=0;u<r.length;u++)o.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!G(r))return o;t=xr&&n}for(i in r)t&&"prototype"===i||!T(r,i)||o.push(String(i));if(Pr)for(e=function(r){if(!1===$r&&!Fr)return Ar(r);try{return Ar(r)}catch(r){return!1}}(r),u=0;u<Nr.length;u++)a=Nr[u],e&&"constructor"===a||!T(r,a)||o.push(String(a));return o};var Wr=Cr,Hr=void 0!==Object.getOwnPropertySymbols,Rr=Object.getOwnPropertySymbols;var Lr=Hr?function(r){return Rr(Object(r))}:function(){return[]};function Gr(r){var e,t,n;for(e=Wr(r),t=Lr(r),n=0;n<t.length;n++)Er(r,t[n])&&e.push(t[n]);return e}var Xr=Object;function Zr(r){return"number"==typeof r}function qr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function Ur(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+qr(o):qr(o)+r,n&&(r="-"+r)),r}var Yr=String.prototype.toLowerCase,Jr=String.prototype.toUpperCase;function zr(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!Zr(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Ur(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Ur(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===Jr.call(r.specifier)?Jr.call(t):Yr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Dr(r){return"string"==typeof r}var Kr=Math.abs,Qr=String.prototype.toLowerCase,re=String.prototype.toUpperCase,ee=String.prototype.replace,te=/e\+(\d)$/,ne=/e-(\d)$/,oe=/^(\d+)$/,ie=/^(\d+)e/,ae=/\.0$/,ue=/\.0*e/,ce=/(\..*[^0])0*e/;function fe(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!Zr(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Kr(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=ee.call(t,ce,"$1e"),t=ee.call(t,ue,"e"),t=ee.call(t,ae,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=ee.call(t,te,"e+0$1"),t=ee.call(t,ne,"e-0$1"),r.alternate&&(t=ee.call(t,oe,"$1."),t=ee.call(t,ie,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===re.call(r.specifier)?re.call(t):Qr.call(t)}function le(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function se(r,e,t){var n=e-r.length;return n<0?r:r=t?r+le(n):le(n)+r}var pe=String.fromCharCode,ge=isNaN,he=Array.isArray;function de(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function ye(r){var e,t,n,o,i,a,u,c,f;if(!he(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(Dr(n=r[c]))a+=n;else{if(e=void 0!==n.precision,!(n=de(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,ge(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,ge(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=zr(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!ge(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=ge(i)?String(n.arg):pe(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=fe(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Ur(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=se(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var be,ve=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function me(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function we(r){var e,t,n,o;for(t=[],o=0,n=ve.exec(r);n;)(e=r.slice(o,ve.lastIndex-n[0].length)).length&&t.push(e),t.push(me(n)),o=ve.lastIndex,n=ve.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function je(r){return"string"==typeof r}function Oe(r){var e,t,n;if(!je(r))throw new TypeError(Oe("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=we(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return ye.apply(null,t)}be=U?Y:function(r){var e,t,n,o,i,a,u;if(null==r)throw new TypeError(Oe("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(i=Xr(r),a=1;a<arguments.length;a++)if(null!=(e=arguments[a]))for(o=(t=Gr(Xr(e))).length,u=0;u<o;u++)i[n=t[u]]=e[n];return i};var Se=be,_e={objectMode:!1,encoding:null,allowHalfOpen:!1,decodeStrings:!0};var Ee,Te=Object.getPrototypeOf;Ee=q(Object.getPrototypeOf)?Te:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===x(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var ke=Ee;var xe=Object.prototype;function Pe(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!L(r)}(r)&&(e=function(r){return null==r?null:(r=Object(r),ke(r))}(r),!e||!T(r,"constructor")&&T(e,"constructor")&&q(e.constructor)&&"[object Function]"===x(e.constructor)&&T(e,"isPrototypeOf")&&q(e.isPrototypeOf)&&(e===xe||function(r){var e;for(e in r)if(!T(r,e))return!1;return!0}(r)))}function Ie(r){return ir(r)&&r>=0}function Me(r){return fr(r)&&r.valueOf()>=0}function Ae(r){return Ie(r)||Me(r)}function Ve(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}function Be(r,e){return Pe(e)?T(e,"transform")&&(r.transform=e.transform,!q(r.transform))?new TypeError(Ve("0gB78","transform",r.transform)):T(e,"flush")&&(r.flush=e.flush,!q(r.flush))?new TypeError(Ve("0gB78","flush",r.flush)):T(e,"objectMode")&&(r.objectMode=e.objectMode,!j(r.objectMode))?new TypeError(Ve("0gB30","objectMode",r.objectMode)):T(e,"encoding")&&(r.encoding=e.encoding,!rr(r.encoding))?new TypeError(Ve("0gB2i","encoding",r.encoding)):T(e,"allowHalfOpen")&&(r.allowHalfOpen=e.allowHalfOpen,!j(r.allowHalfOpen))?new TypeError(Ve("0gB30","allowHalfOpen",r.allowHalfOpen)):T(e,"highWaterMark")&&(r.highWaterMark=e.highWaterMark,!Ie(r.highWaterMark))?new TypeError(Ve("0gB4x","highWaterMark",r.highWaterMark)):T(e,"decodeStrings")&&(r.decodeStrings=e.decodeStrings,!j(r.decodeStrings))?new TypeError(Ve("0gB30","decodeStrings",r.decodeStrings)):null:new TypeError(Ve("0gB2h",e))}p(Ae,"isPrimitive",Ie),p(Ae,"isObject",Me);var Fe=e;var $e=h("transform-stream:destroy");function Ce(r){var e;return this._destroyed?($e("Attempted to destroy an already destroyed stream."),this):(e=this,this._destroyed=!0,function(r){var e,t;for(e=[],t=1;t<arguments.length;t++)e.push(arguments[t]);function n(){r.apply(null,e)}Fe.nextTick(n)}((function(){r&&($e("Stream was destroyed due to an error. Error: %s.",JSON.stringify(r)),e.emit("error",r));$e("Closing the stream..."),e.emit("close")})),this)}var Ne=h("transform-stream:transform");function We(r,e,t){Ne("Received a new chunk. Chunk: %s. Encoding: %s.",r.toString(),e),t(null,r)}var He=h,Re=r.Transform,Le=He("transform-stream:main");function Ge(r){var e,t;if(!(this instanceof Ge))return arguments.length?new Ge(r):new Ge;if(e=Se({},_e),arguments.length&&(t=Be(e,r)))throw t;return Le("Creating a transform stream configured with the following options: %s.",JSON.stringify(e)),Re.call(this,e),this._destroyed=!1,e.transform?this._transform=e.transform:this._transform=We,e.flush&&(this._flush=e.flush),this}m(Ge,Re),Ge.prototype.destroy=Ce;var Xe=h,Ze=r.Transform,qe=Xe("transform-stream:ctor");return p(Ge,"objectMode",(function(r){var e;if(arguments.length){if(!Pe(r))throw new TypeError(Ve("0gB2h",r));e=Se({},r)}else e={};return e.objectMode=!0,new Ge(e)})),p(Ge,"factory",(function(r){var e;if(arguments.length){if(!Pe(r))throw new TypeError(Ve("0gB2h",r));e=Se({},r)}else e={};return t;function t(r,t){return e.transform=r,arguments.length>1?e.flush=t:delete e.flush,new Ge(e)}})),p(Ge,"ctor",(function(r){var e,t,n;if(t=Se({},_e),arguments.length&&(n=Be(t,r)))throw n;function o(r){var e,n;if(!(this instanceof o))return arguments.length?new o(r):new o;if(e=Se({},t),arguments.length&&(n=Be(e,r)))throw n;return qe("Creating a transform stream configured with the following options: %s.",JSON.stringify(e)),Ze.call(this,e),this._destroyed=!1,this}return e=t.transform?t.transform:We,m(o,Ze),o.prototype._transform=e,t.flush&&(o.prototype._flush=t.flush),o.prototype.destroy=Ce,o})),Ge}));
//# sourceMappingURL=index.js.map
