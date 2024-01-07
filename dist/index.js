"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=a(function(O,i){
var p=require('@stdlib/blas-ext-base-dnansumkbn/dist');function y(e,r,n){return p(e,r,n)}i.exports=y
});var v=a(function(g,t){
var x=require('@stdlib/blas-ext-base-dnansumkbn/dist').ndarray;function f(e,r,n,c){return x(e,r,n,c)}t.exports=f
});var m=a(function(h,q){
var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=s(),b=v();j(d,"ndarray",b);q.exports=d
});var k=require("path").join,l=require('@stdlib/utils-try-require/dist'),R=require('@stdlib/assert-is-error/dist'),_=m(),u,o=l(k(__dirname,"./native.js"));R(o)?u=_:u=o;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
