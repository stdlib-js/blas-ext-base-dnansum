"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=n(function(g,s){
var y=require('@stdlib/blas-ext-base-dnansumkbn/dist').ndarray;function f(e,r,a,c){return y(e,r,a,c)}s.exports=f
});var v=n(function(h,t){
var p=require('@stdlib/strided-base-stride2offset/dist'),x=i();function j(e,r,a){return x(e,r,a,p(e,a))}t.exports=j
});var o=n(function(w,q){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=v(),R=i();l(d,"ndarray",R);q.exports=d
});var _=require("path").join,b=require('@stdlib/utils-try-require/dist'),k=require('@stdlib/assert-is-error/dist'),E=o(),u,m=b(_(__dirname,"./native.js"));k(m)?u=E:u=m;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
