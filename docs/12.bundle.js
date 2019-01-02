/*! For license information please see 12.bundle.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{276:function(e,n,t){(function(e,t){var r;!function(){var u="object"==typeof self&&self.self===self&&self||"object"==typeof e&&e.global===e&&e||this||{},a=u._,i=Array.prototype,o=Object.prototype,c="undefined"!=typeof Symbol?Symbol.prototype:null,l=i.push,f=i.slice,s=o.toString,p=o.hasOwnProperty,h=Array.isArray,d=Object.keys,m=Object.create,v=function(){},y=function(e){return e instanceof y?e:this instanceof y?void(this._wrapped=e):new y(e)};n.nodeType?u._=y:(!t.nodeType&&t.exports&&(n=t.exports=y),n._=y),y.VERSION="1.9.1";var g,b=function(e,n,t){if(void 0===n)return e;switch(null==t?3:t){case 1:return function(t){return e.call(n,t)};case 3:return function(t,r,u){return e.call(n,t,r,u)};case 4:return function(t,r,u,a){return e.call(n,t,r,u,a)}}return function(){return e.apply(n,arguments)}},w=function(e,n,t){return y.iteratee!==g?y.iteratee(e,n):null==e?y.identity:y.isFunction(e)?b(e,n,t):y.isObject(e)&&!y.isArray(e)?y.matcher(e):y.property(e)};y.iteratee=g=function(e,n){return w(e,n,1/0)};var A=function(e,n){return n=null==n?e.length-1:+n,function(){for(var t=Math.max(arguments.length-n,0),r=Array(t),u=0;u<t;u++)r[u]=arguments[u+n];switch(n){case 0:return e.call(this,r);case 1:return e.call(this,arguments[0],r);case 2:return e.call(this,arguments[0],arguments[1],r)}var a=Array(n+1);for(u=0;u<n;u++)a[u]=arguments[u];return a[n]=r,e.apply(this,a)}},x=function(e){if(!y.isObject(e))return{};if(m)return m(e);v.prototype=e;var n=new v;return v.prototype=null,n},j=function(e){return function(n){return null==n?void 0:n[e]}},k=function(e,n){return null!=e&&p.call(e,n)},T=function(e,n){for(var t=n.length,r=0;r<t;r++){if(null==e)return;e=e[n[r]]}return t?e:void 0},_=Math.pow(2,53)-1,O=j("length"),M=function(e){var n=O(e);return"number"==typeof n&&n>=0&&n<=_};y.each=y.forEach=function(e,n,t){var r,u;if(n=b(n,t),M(e))for(r=0,u=e.length;r<u;r++)n(e[r],r,e);else{var a=y.keys(e);for(r=0,u=a.length;r<u;r++)n(e[a[r]],a[r],e)}return e},y.map=y.collect=function(e,n,t){n=w(n,t);for(var r=!M(e)&&y.keys(e),u=(r||e).length,a=Array(u),i=0;i<u;i++){var o=r?r[i]:i;a[i]=n(e[o],o,e)}return a};var F=function(e){return function(n,t,r,u){var a=arguments.length>=3;return function(n,t,r,u){var a=!M(n)&&y.keys(n),i=(a||n).length,o=e>0?0:i-1;for(u||(r=n[a?a[o]:o],o+=e);o>=0&&o<i;o+=e){var c=a?a[o]:o;r=t(r,n[c],c,n)}return r}(n,b(t,u,4),r,a)}};y.reduce=y.foldl=y.inject=F(1),y.reduceRight=y.foldr=F(-1),y.find=y.detect=function(e,n,t){var r=(M(e)?y.findIndex:y.findKey)(e,n,t);if(void 0!==r&&-1!==r)return e[r]},y.filter=y.select=function(e,n,t){var r=[];return n=w(n,t),y.each(e,function(e,t,u){n(e,t,u)&&r.push(e)}),r},y.reject=function(e,n,t){return y.filter(e,y.negate(w(n)),t)},y.every=y.all=function(e,n,t){n=w(n,t);for(var r=!M(e)&&y.keys(e),u=(r||e).length,a=0;a<u;a++){var i=r?r[a]:a;if(!n(e[i],i,e))return!1}return!0},y.some=y.any=function(e,n,t){n=w(n,t);for(var r=!M(e)&&y.keys(e),u=(r||e).length,a=0;a<u;a++){var i=r?r[a]:a;if(n(e[i],i,e))return!0}return!1},y.contains=y.includes=y.include=function(e,n,t,r){return M(e)||(e=y.values(e)),("number"!=typeof t||r)&&(t=0),y.indexOf(e,n,t)>=0},y.invoke=A(function(e,n,t){var r,u;return y.isFunction(n)?u=n:y.isArray(n)&&(r=n.slice(0,-1),n=n[n.length-1]),y.map(e,function(e){var a=u;if(!a){if(r&&r.length&&(e=T(e,r)),null==e)return;a=e[n]}return null==a?a:a.apply(e,t)})}),y.pluck=function(e,n){return y.map(e,y.property(n))},y.where=function(e,n){return y.filter(e,y.matcher(n))},y.findWhere=function(e,n){return y.find(e,y.matcher(n))},y.max=function(e,n,t){var r,u,a=-1/0,i=-1/0;if(null==n||"number"==typeof n&&"object"!=typeof e[0]&&null!=e)for(var o=0,c=(e=M(e)?e:y.values(e)).length;o<c;o++)null!=(r=e[o])&&r>a&&(a=r);else n=w(n,t),y.each(e,function(e,t,r){((u=n(e,t,r))>i||u===-1/0&&a===-1/0)&&(a=e,i=u)});return a},y.min=function(e,n,t){var r,u,a=1/0,i=1/0;if(null==n||"number"==typeof n&&"object"!=typeof e[0]&&null!=e)for(var o=0,c=(e=M(e)?e:y.values(e)).length;o<c;o++)null!=(r=e[o])&&r<a&&(a=r);else n=w(n,t),y.each(e,function(e,t,r){((u=n(e,t,r))<i||u===1/0&&a===1/0)&&(a=e,i=u)});return a},y.shuffle=function(e){return y.sample(e,1/0)},y.sample=function(e,n,t){if(null==n||t)return M(e)||(e=y.values(e)),e[y.random(e.length-1)];var r=M(e)?y.clone(e):y.values(e),u=O(r);n=Math.max(Math.min(n,u),0);for(var a=u-1,i=0;i<n;i++){var o=y.random(i,a),c=r[i];r[i]=r[o],r[o]=c}return r.slice(0,n)},y.sortBy=function(e,n,t){var r=0;return n=w(n,t),y.pluck(y.map(e,function(e,t,u){return{value:e,index:r++,criteria:n(e,t,u)}}).sort(function(e,n){var t=e.criteria,r=n.criteria;if(t!==r){if(t>r||void 0===t)return 1;if(t<r||void 0===r)return-1}return e.index-n.index}),"value")};var N=function(e,n){return function(t,r,u){var a=n?[[],[]]:{};return r=w(r,u),y.each(t,function(n,u){var i=r(n,u,t);e(a,n,i)}),a}};y.groupBy=N(function(e,n,t){k(e,t)?e[t].push(n):e[t]=[n]}),y.indexBy=N(function(e,n,t){e[t]=n}),y.countBy=N(function(e,n,t){k(e,t)?e[t]++:e[t]=1});var E=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;y.toArray=function(e){return e?y.isArray(e)?f.call(e):y.isString(e)?e.match(E):M(e)?y.map(e,y.identity):y.values(e):[]},y.size=function(e){return null==e?0:M(e)?e.length:y.keys(e).length},y.partition=N(function(e,n,t){e[t?0:1].push(n)},!0),y.first=y.head=y.take=function(e,n,t){return null==e||e.length<1?null==n?void 0:[]:null==n||t?e[0]:y.initial(e,e.length-n)},y.initial=function(e,n,t){return f.call(e,0,Math.max(0,e.length-(null==n||t?1:n)))},y.last=function(e,n,t){return null==e||e.length<1?null==n?void 0:[]:null==n||t?e[e.length-1]:y.rest(e,Math.max(0,e.length-n))},y.rest=y.tail=y.drop=function(e,n,t){return f.call(e,null==n||t?1:n)},y.compact=function(e){return y.filter(e,Boolean)};var I=function(e,n,t,r){for(var u=(r=r||[]).length,a=0,i=O(e);a<i;a++){var o=e[a];if(M(o)&&(y.isArray(o)||y.isArguments(o)))if(n)for(var c=0,l=o.length;c<l;)r[u++]=o[c++];else I(o,n,t,r),u=r.length;else t||(r[u++]=o)}return r};y.flatten=function(e,n){return I(e,n,!1)},y.without=A(function(e,n){return y.difference(e,n)}),y.uniq=y.unique=function(e,n,t,r){y.isBoolean(n)||(r=t,t=n,n=!1),null!=t&&(t=w(t,r));for(var u=[],a=[],i=0,o=O(e);i<o;i++){var c=e[i],l=t?t(c,i,e):c;n&&!t?(i&&a===l||u.push(c),a=l):t?y.contains(a,l)||(a.push(l),u.push(c)):y.contains(u,c)||u.push(c)}return u},y.union=A(function(e){return y.uniq(I(e,!0,!0))}),y.intersection=function(e){for(var n=[],t=arguments.length,r=0,u=O(e);r<u;r++){var a=e[r];if(!y.contains(n,a)){var i;for(i=1;i<t&&y.contains(arguments[i],a);i++);i===t&&n.push(a)}}return n},y.difference=A(function(e,n){return n=I(n,!0,!0),y.filter(e,function(e){return!y.contains(n,e)})}),y.unzip=function(e){for(var n=e&&y.max(e,O).length||0,t=Array(n),r=0;r<n;r++)t[r]=y.pluck(e,r);return t},y.zip=A(y.unzip),y.object=function(e,n){for(var t={},r=0,u=O(e);r<u;r++)n?t[e[r]]=n[r]:t[e[r][0]]=e[r][1];return t};var S=function(e){return function(n,t,r){t=w(t,r);for(var u=O(n),a=e>0?0:u-1;a>=0&&a<u;a+=e)if(t(n[a],a,n))return a;return-1}};y.findIndex=S(1),y.findLastIndex=S(-1),y.sortedIndex=function(e,n,t,r){for(var u=(t=w(t,r,1))(n),a=0,i=O(e);a<i;){var o=Math.floor((a+i)/2);t(e[o])<u?a=o+1:i=o}return a};var C=function(e,n,t){return function(r,u,a){var i=0,o=O(r);if("number"==typeof a)e>0?i=a>=0?a:Math.max(a+o,i):o=a>=0?Math.min(a+1,o):a+o+1;else if(t&&a&&o)return r[a=t(r,u)]===u?a:-1;if(u!=u)return(a=n(f.call(r,i,o),y.isNaN))>=0?a+i:-1;for(a=e>0?i:o-1;a>=0&&a<o;a+=e)if(r[a]===u)return a;return-1}};y.indexOf=C(1,y.findIndex,y.sortedIndex),y.lastIndexOf=C(-1,y.findLastIndex),y.range=function(e,n,t){null==n&&(n=e||0,e=0),t||(t=n<e?-1:1);for(var r=Math.max(Math.ceil((n-e)/t),0),u=Array(r),a=0;a<r;a++,e+=t)u[a]=e;return u},y.chunk=function(e,n){if(null==n||n<1)return[];for(var t=[],r=0,u=e.length;r<u;)t.push(f.call(e,r,r+=n));return t};var B=function(e,n,t,r,u){if(!(r instanceof n))return e.apply(t,u);var a=x(e.prototype),i=e.apply(a,u);return y.isObject(i)?i:a};y.bind=A(function(e,n,t){if(!y.isFunction(e))throw new TypeError("Bind must be called on a function");var r=A(function(u){return B(e,r,n,this,t.concat(u))});return r}),y.partial=A(function(e,n){var t=y.partial.placeholder,r=function(){for(var u=0,a=n.length,i=Array(a),o=0;o<a;o++)i[o]=n[o]===t?arguments[u++]:n[o];for(;u<arguments.length;)i.push(arguments[u++]);return B(e,r,this,this,i)};return r}),y.partial.placeholder=y,y.bindAll=A(function(e,n){var t=(n=I(n,!1,!1)).length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var r=n[t];e[r]=y.bind(e[r],e)}}),y.memoize=function(e,n){var t=function(r){var u=t.cache,a=""+(n?n.apply(this,arguments):r);return k(u,a)||(u[a]=e.apply(this,arguments)),u[a]};return t.cache={},t},y.delay=A(function(e,n,t){return setTimeout(function(){return e.apply(null,t)},n)}),y.defer=y.partial(y.delay,y,1),y.throttle=function(e,n,t){var r,u,a,i,o=0;t||(t={});var c=function(){o=!1===t.leading?0:y.now(),r=null,i=e.apply(u,a),r||(u=a=null)},l=function(){var l=y.now();o||!1!==t.leading||(o=l);var f=n-(l-o);return u=this,a=arguments,f<=0||f>n?(r&&(clearTimeout(r),r=null),o=l,i=e.apply(u,a),r||(u=a=null)):r||!1===t.trailing||(r=setTimeout(c,f)),i};return l.cancel=function(){clearTimeout(r),o=0,r=u=a=null},l},y.debounce=function(e,n,t){var r,u,a=function(n,t){r=null,t&&(u=e.apply(n,t))},i=A(function(i){if(r&&clearTimeout(r),t){var o=!r;r=setTimeout(a,n),o&&(u=e.apply(this,i))}else r=y.delay(a,n,this,i);return u});return i.cancel=function(){clearTimeout(r),r=null},i},y.wrap=function(e,n){return y.partial(n,e)},y.negate=function(e){return function(){return!e.apply(this,arguments)}},y.compose=function(){var e=arguments,n=e.length-1;return function(){for(var t=n,r=e[n].apply(this,arguments);t--;)r=e[t].call(this,r);return r}},y.after=function(e,n){return function(){if(--e<1)return n.apply(this,arguments)}},y.before=function(e,n){var t;return function(){return--e>0&&(t=n.apply(this,arguments)),e<=1&&(n=null),t}},y.once=y.partial(y.before,2),y.restArguments=A;var V=!{toString:null}.propertyIsEnumerable("toString"),P=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],z=function(e,n){var t=P.length,r=e.constructor,u=y.isFunction(r)&&r.prototype||o,a="constructor";for(k(e,a)&&!y.contains(n,a)&&n.push(a);t--;)(a=P[t])in e&&e[a]!==u[a]&&!y.contains(n,a)&&n.push(a)};y.keys=function(e){if(!y.isObject(e))return[];if(d)return d(e);var n=[];for(var t in e)k(e,t)&&n.push(t);return V&&z(e,n),n},y.allKeys=function(e){if(!y.isObject(e))return[];var n=[];for(var t in e)n.push(t);return V&&z(e,n),n},y.values=function(e){for(var n=y.keys(e),t=n.length,r=Array(t),u=0;u<t;u++)r[u]=e[n[u]];return r},y.mapObject=function(e,n,t){n=w(n,t);for(var r=y.keys(e),u=r.length,a={},i=0;i<u;i++){var o=r[i];a[o]=n(e[o],o,e)}return a},y.pairs=function(e){for(var n=y.keys(e),t=n.length,r=Array(t),u=0;u<t;u++)r[u]=[n[u],e[n[u]]];return r},y.invert=function(e){for(var n={},t=y.keys(e),r=0,u=t.length;r<u;r++)n[e[t[r]]]=t[r];return n},y.functions=y.methods=function(e){var n=[];for(var t in e)y.isFunction(e[t])&&n.push(t);return n.sort()};var L=function(e,n){return function(t){var r=arguments.length;if(n&&(t=Object(t)),r<2||null==t)return t;for(var u=1;u<r;u++)for(var a=arguments[u],i=e(a),o=i.length,c=0;c<o;c++){var l=i[c];n&&void 0!==t[l]||(t[l]=a[l])}return t}};y.extend=L(y.allKeys),y.extendOwn=y.assign=L(y.keys),y.findKey=function(e,n,t){n=w(n,t);for(var r,u=y.keys(e),a=0,i=u.length;a<i;a++)if(n(e[r=u[a]],r,e))return r};var U,R,K=function(e,n,t){return n in t};y.pick=A(function(e,n){var t={},r=n[0];if(null==e)return t;y.isFunction(r)?(n.length>1&&(r=b(r,n[1])),n=y.allKeys(e)):(r=K,n=I(n,!1,!1),e=Object(e));for(var u=0,a=n.length;u<a;u++){var i=n[u],o=e[i];r(o,i,e)&&(t[i]=o)}return t}),y.omit=A(function(e,n){var t,r=n[0];return y.isFunction(r)?(r=y.negate(r),n.length>1&&(t=n[1])):(n=y.map(I(n,!1,!1),String),r=function(e,t){return!y.contains(n,t)}),y.pick(e,r,t)}),y.defaults=L(y.allKeys,!0),y.create=function(e,n){var t=x(e);return n&&y.extendOwn(t,n),t},y.clone=function(e){return y.isObject(e)?y.isArray(e)?e.slice():y.extend({},e):e},y.tap=function(e,n){return n(e),e},y.isMatch=function(e,n){var t=y.keys(n),r=t.length;if(null==e)return!r;for(var u=Object(e),a=0;a<r;a++){var i=t[a];if(n[i]!==u[i]||!(i in u))return!1}return!0},U=function(e,n,t,r){if(e===n)return 0!==e||1/e==1/n;if(null==e||null==n)return!1;if(e!=e)return n!=n;var u=typeof e;return("function"===u||"object"===u||"object"==typeof n)&&R(e,n,t,r)},R=function(e,n,t,r){e instanceof y&&(e=e._wrapped),n instanceof y&&(n=n._wrapped);var u=s.call(e);if(u!==s.call(n))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+e==""+n;case"[object Number]":return+e!=+e?+n!=+n:0==+e?1/+e==1/n:+e==+n;case"[object Date]":case"[object Boolean]":return+e==+n;case"[object Symbol]":return c.valueOf.call(e)===c.valueOf.call(n)}var a="[object Array]"===u;if(!a){if("object"!=typeof e||"object"!=typeof n)return!1;var i=e.constructor,o=n.constructor;if(i!==o&&!(y.isFunction(i)&&i instanceof i&&y.isFunction(o)&&o instanceof o)&&"constructor"in e&&"constructor"in n)return!1}r=r||[];for(var l=(t=t||[]).length;l--;)if(t[l]===e)return r[l]===n;if(t.push(e),r.push(n),a){if((l=e.length)!==n.length)return!1;for(;l--;)if(!U(e[l],n[l],t,r))return!1}else{var f,p=y.keys(e);if(l=p.length,y.keys(n).length!==l)return!1;for(;l--;)if(f=p[l],!k(n,f)||!U(e[f],n[f],t,r))return!1}return t.pop(),r.pop(),!0},y.isEqual=function(e,n){return U(e,n)},y.isEmpty=function(e){return null==e||(M(e)&&(y.isArray(e)||y.isString(e)||y.isArguments(e))?0===e.length:0===y.keys(e).length)},y.isElement=function(e){return!(!e||1!==e.nodeType)},y.isArray=h||function(e){return"[object Array]"===s.call(e)},y.isObject=function(e){var n=typeof e;return"function"===n||"object"===n&&!!e},y.each(["Arguments","Function","String","Number","Date","RegExp","Error","Symbol","Map","WeakMap","Set","WeakSet"],function(e){y["is"+e]=function(n){return s.call(n)==="[object "+e+"]"}}),y.isArguments(arguments)||(y.isArguments=function(e){return k(e,"callee")});var q=u.document&&u.document.childNodes;"object"!=typeof Int8Array&&"function"!=typeof q&&(y.isFunction=function(e){return"function"==typeof e||!1}),y.isFinite=function(e){return!y.isSymbol(e)&&isFinite(e)&&!isNaN(parseFloat(e))},y.isNaN=function(e){return y.isNumber(e)&&isNaN(e)},y.isBoolean=function(e){return!0===e||!1===e||"[object Boolean]"===s.call(e)},y.isNull=function(e){return null===e},y.isUndefined=function(e){return void 0===e},y.has=function(e,n){if(!y.isArray(n))return k(e,n);for(var t=n.length,r=0;r<t;r++){var u=n[r];if(null==e||!p.call(e,u))return!1;e=e[u]}return!!t},y.noConflict=function(){return u._=a,this},y.identity=function(e){return e},y.constant=function(e){return function(){return e}},y.noop=function(){},y.property=function(e){return y.isArray(e)?function(n){return T(n,e)}:j(e)},y.propertyOf=function(e){return null==e?function(){}:function(n){return y.isArray(n)?T(e,n):e[n]}},y.matcher=y.matches=function(e){return e=y.extendOwn({},e),function(n){return y.isMatch(n,e)}},y.times=function(e,n,t){var r=Array(Math.max(0,e));n=b(n,t,1);for(var u=0;u<e;u++)r[u]=n(u);return r},y.random=function(e,n){return null==n&&(n=e,e=0),e+Math.floor(Math.random()*(n-e+1))},y.now=Date.now||function(){return(new Date).getTime()};var H={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},D=y.invert(H),G=function(e){var n=function(n){return e[n]},t="(?:"+y.keys(e).join("|")+")",r=RegExp(t),u=RegExp(t,"g");return function(e){return e=null==e?"":""+e,r.test(e)?e.replace(u,n):e}};y.escape=G(H),y.unescape=G(D),y.result=function(e,n,t){y.isArray(n)||(n=[n]);var r=n.length;if(!r)return y.isFunction(t)?t.call(e):t;for(var u=0;u<r;u++){var a=null==e?void 0:e[n[u]];void 0===a&&(a=t,u=r),e=y.isFunction(a)?a.call(e):a}return e};var W=0;y.uniqueId=function(e){var n=++W+"";return e?e+n:n},y.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var J=/(.)^/,$={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},Q=/\\|'|\r|\n|\u2028|\u2029/g,X=function(e){return"\\"+$[e]};y.template=function(e,n,t){!n&&t&&(n=t),n=y.defaults({},n,y.templateSettings);var r,u=RegExp([(n.escape||J).source,(n.interpolate||J).source,(n.evaluate||J).source].join("|")+"|$","g"),a=0,i="__p+='";e.replace(u,function(n,t,r,u,o){return i+=e.slice(a,o).replace(Q,X),a=o+n.length,t?i+="'+\n((__t=("+t+"))==null?'':_.escape(__t))+\n'":r?i+="'+\n((__t=("+r+"))==null?'':__t)+\n'":u&&(i+="';\n"+u+"\n__p+='"),n}),i+="';\n",n.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{r=new Function(n.variable||"obj","_",i)}catch(e){throw e.source=i,e}var o=function(e){return r.call(this,e,y)},c=n.variable||"obj";return o.source="function("+c+"){\n"+i+"}",o},y.chain=function(e){var n=y(e);return n._chain=!0,n};var Y=function(e,n){return e._chain?y(n).chain():n};y.mixin=function(e){return y.each(y.functions(e),function(n){var t=y[n]=e[n];y.prototype[n]=function(){var e=[this._wrapped];return l.apply(e,arguments),Y(this,t.apply(y,e))}}),y},y.mixin(y),y.each(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var n=i[e];y.prototype[e]=function(){var t=this._wrapped;return n.apply(t,arguments),"shift"!==e&&"splice"!==e||0!==t.length||delete t[0],Y(this,t)}}),y.each(["concat","join","slice"],function(e){var n=i[e];y.prototype[e]=function(){return Y(this,n.apply(this._wrapped,arguments))}}),y.prototype.value=function(){return this._wrapped},y.prototype.valueOf=y.prototype.toJSON=y.prototype.value,y.prototype.toString=function(){return String(this._wrapped)},void 0===(r=function(){return y}.apply(n,[]))||(t.exports=r)}()}).call(this,t(48),t(83)(e))},280:function(e,n,t){"use strict";var r=t(276),u=t(98),a={version:"0.7.0",matchFuncs:[],templateCache:{},options:{},css:".uv { min-width: 300px; max-width: 600px; margin: 5px; float: left;}",initialize:function(e=window){r.isUndefined(a.ready)&&(r.each(a.matchers,function(n){if(!r.isUndefined(e[n.jsArray])){var t=r.map(e[n.jsArray],function(e){return n(e)});a.matchFuncs=r.union(t,a.matchFuncs)}}),r.each(a.matchers,function(e){a.helper.loadMatcher(e.rdfClass,e)}),a.ready=!0)},editor:function(){throw"The editor functionality is not loaded, please load additionaly uduvudu_edit.js after uduvudu.js is loaded for this purpose."},process:function(e){a.options=a.options||{},"object"==typeof e&&(e=a.helper.deleteSameAs(e),a.input=e),"object"==typeof arguments[1]?(a.options=r.extend(a.options,arguments[1])||a.options,a.cb=arguments[2]||a.cb):a.cb=arguments[1]||a.cb,void 0!==a.options.language&&""!==a.options.language||(a.options.language=navigator.language.substring(0,2)||"en"),void 0===a.options.device&&(a.options.device="desktop"),a.initialize(),console.debug("Uduvudu:","Start to process with resource ",a.options.resource);var n=a.matcher(a.input.match(),a.options.resource,0),t=a.visualizer(n,a.options.language,a.options.device);return a.helper.injectCss(a.css),a.cb&&a.cb(t),t},matcher:function(e,n,t){console.debug("Uduvudu:","Matcher in recursion: "+t,"/",a.helper.showGraph(e,!0)+" triples still in graph."),console.debug("Uduvudu:","Graph",a.helper.showGraph(e));var u=r.compact(r.map(a.matchFuncs,function(t){return r.first(r.values(t))(e,n)})),i=r.sortBy(u,function(e){return-e.elements});if(r.isEmpty(i))return a.helper.handleUnknown(e);var o=r.first(i);return null!=o.subgraph&&o.subgraph.forEach(function(n){e.remove(n)}),r.union([o],this.matcher(e,n,t+1))},visualizer:function(e,n,t){var u="";return e=r.sortBy(e,function(e){return-e.order}),r.each(e,function(e){var t=r.toArray(e.context)[0].t.name,i=a.helper.prepareLanguage(e.context,n);r.extend(i,a.helper.templateHelper),u+=a.helper.renderContext(t,i)}),u},helper:{}};a.helper.injectCss=function(e){var n=document.createElement("style");n.type="text/css",n.id=r.uniqueId("uvCss"),n.innerHTML=e;try{(document.getElementsByTagName("head")[0]||document.body).appendChild(n)}catch(e){console.debug(e)}},a.helper.renderContext=function(e,n){var t,u="";if(!(t=a.templateCache[e])){var i=a.helper.getTemplate(e);if(i)t=a.helper.compileTemplate(i),a.templateCache[e]=t;else{console.debug("Uduvudu:","NoTemplateFound","There was no template with the name '"+e+"' found.",n);var o="",c=r.find(n,function(e){return o=e,r.isObject(e)}),l=r.map(r.filter(c,function(e){return e.m}),function(e){return"<%=template("+o.v+"."+e.v+")%>\n"});t=r.isEmpty(l)?a.helper.compileTemplate("<div>"+c.v+": "+c.u+"</div>"):a.helper.compileTemplate("<div>"+l.join("")+"</div>")}}u+=t(n);var f=a.helper.getTemplate(e+"_js");f&&(u+='<script type="text/javascript">'+a.helper.compileTemplate(f)(n)+"<\/script>");return u},a.helper.compileTemplate=function(e){return r.template(e)},a.helper.getTemplate=function(e,n,t){var r="";if(a.options.styles){var i=a.options.styles;i.match(null,u.resolve("uv:abstractTemplate"),e).forEach(function(e){i.match(e.subject,u.resolve("uv:template"),null).forEach(function(e){r=e.object.value})})}var o=document.getElementById(e);return o&&(r=o.innerHTML),r||null},a.helper.templateHelper={template:function(e){if(e.t&&e.t.name&&e.v){var n=r.object([[e.v,e]]);return r.extend(n,a.helper.templateHelper),a.helper.renderContext(e.t.name,n)}return console.debug("Uduvudu:","WrongContext","The context given to the template() helper is not valid."),null},num:function(e){var n=Number(e.replace("−","-"));return n||0}},a.helper.findMatchFunc=function(e){return r.first(r.values(r.find(a.matchFuncs,function(n){return r.first(r.keys(n))===e})))||function(){return!1}},a.helper.matchArrayOfFuncs=function(e,n,t){return r.map(t,function(t){return a.helper.findMatchFunc(t)(e,n)})},a.helper.nameFromPredicate=function(e){if("NamedNode"===e.termType)return a.helper.getTerm(e.value)},a.helper.getTerm=function(e){return r.last(/(#|\/)([^#\/]*)$/.exec(e))},a.helper.handleUnknown=function(e){var n=r.compact(e.toArray().map(function(e){return"Literal"===e.object.termType?{elements:1,context:{literal:{subject:{l:{undefined:e.subject.value}},predicate:{l:{undefined:e.predicate.value}},name:{l:{undefined:a.helper.nameFromPredicate(e.predicate)}},text:{l:{undefined:e.object.value}},s:{l:{undefined:a.helper.getTerm(e.subject.value)}},p:{l:{undefined:a.helper.getTerm(e.predicate.value)}},o:{l:{undefined:e.object.value}},t:{name:"literal"},m:{name:"literal",type:"literal",p:e.predicate.value,r:e.subject.value},v:"literal"}},order:1}:null})),t=r.compact(e.toArray().map(function(e){if("Literal"!==e.object.termType)return{elements:1,context:{unknown:{subject:{l:{undefined:e.subject.value}},predicate:{l:{undefined:e.predicate.value}},object:{l:{undefined:e.object.value}},s:{l:{undefined:a.helper.getTerm(e.subject.value)}},p:{l:{undefined:a.helper.getTerm(e.predicate.value)}},o:{l:{undefined:a.helper.getTerm(e.object.value)}},t:{name:"unknown"},m:{name:"unknown",type:"unknown",p:e.predicate.value,r:e.object.value},v:"unknown"}},order:0}}));if(r.every(n,r.identity))var u={elements:r.reduce(r.pluck(n,"elements"),function(e,n){return e+n},0),context:r.object([["literals",r.extend(r.map(n,function(e){return e.context}),{t:{name:"literals"},m:{name:"literals",type:"link",r:"undefined"},v:"literals"})]]),order:1};if(r.every(t,r.identity))var i={elements:r.reduce(r.pluck(t,"elements"),function(e,n){return e+n},0),context:r.object([["unknowns",r.extend(r.map(t,function(e){return e.context}),{t:{name:"unknowns"},m:{name:"unknowns",type:"link",r:"undefined"},v:"unknowns"})]]),order:0};return[u,i]},a.helper.deleteSameAs=function(e){return e.removeMatches(null,"<http://www.w3.org/2002/07/owl#sameAs>",null)},a.helper.showGraph=function(e,n){return n?e.length:[e.length,e.toArray().map(function(e){return e.subject.value+" - "+e.predicate.value+" - "+e.object.value})]},a.helper.prepareLanguage=function(e,n){if(r.isArray(e))return r.each(e,function(e){return a.helper.prepareLanguage(e,n)});if(r.isObject(e)){if(!r.has(e,"l"))return r.object(r.keys(e),r.map(e,function(e){return a.helper.prepareLanguage(e,n)}));e.l[n]?e.u=e.l[n]:e.l.null?e.u=e.l.null:e.u=r.first(r.toArray(e.l))}return e},a.helper.addVisualizer=function(e,n){var t=document.createElement("script");t.setAttribute("id",n),t.setAttribute("type","text/uduvudu-template");var r=document.createTextNode(e);t.appendChild(r),document.getElementById("visualizer").appendChild(t)},a.helper.addMatcher=function(e){a.matchFuncs=r.union([e],a.matchFuncs)},a.helper.loadMatcher=function(e,n){if(a.options.styles){var t=a.options.styles;t.match(null,u.resolve("a"),u.resolve(e)).forEach(function(e){var u=[];t.match(e.subject,null,null).forEach(function(e){u.push([a.helper.getTerm(e.predicate.value),e.object.value])});var i=r.object(r.map(r.groupBy(u,function(e){return r.first(e)}),function(e){return 1==e.length?r.first(e):[r.first(r.first(e)),r.map(e,function(e){return r.last(e)})]}));a.helper.addMatcher(n(i))})}},a.matchers={},a.matchers.createCombine=function(e){return r.object([[e.matcherName,function(n,t){var i=e;i.templateVariable=i.templateVariable||i.matcherName,i.combineIds=r.isArray(i.combineIds)?i.combineIds:[i.combineIds];var o=!1,c=a.helper.matchArrayOfFuncs(n,t,i.combineIds),l=u.graph();return c.forEach(function(e){"object"==typeof e&&"subgraph"in e&&l.addAll(e.subgraph)}),r.every(c,r.identity)&&(o={elements:r.reduce(r.pluck(c,"elements"),function(e,n){return e+n},0),context:r.object([[i.templateVariable,r.extend(r.reduce(r.rest(c),function(e,n){return r.extend(e,n.context)},r.first(c).context),{t:{name:i.abstractTemplate},m:{name:i.matcherName,type:"combine",r:t},v:i.templateVariable})]]),subgraph:l,order:i.order||1e3}),o}]])},a.matchers.createCombine.rdfClass="uv:CombineMatcher",a.matchers.createCombine.jsArray="combineMatchers",a.matchers.createLink=function(e){return r.object([[e.matcherName,function(n,t){var i,o=e,c=null,l=null,f=null;o.templateVariable=o.templateVariable||a.helper.getTerm(o.predicate),o.linkIds=r.isArray(o.linkIds)?o.linkIds:[o.linkIds],(i=o.resourcePosition&&"object"===o.resourcePosition)?(l=u.namedNode(o.predicate),f=u.namedNode(t)):(c=u.namedNode(t),l=u.namedNode(o.predicate));var s=!1,p=n.match(c,l,f);if(0!==p.length){var h=r.compact(p.toArray().map(function(e){return i?a.helper.matchArrayOfFuncs(n,e.subject.value,o.linkIds)[0]:a.helper.matchArrayOfFuncs(n,e.object.value,o.linkIds)[0]})),d=u.graph();h.forEach(function(e){"object"==typeof e&&"subgraph"in e&&d.addAll(e.subgraph)}),r.some(h)&&(s={elements:r.reduce(r.pluck(h,"elements"),function(e,n){return e+n},0),context:r.object([[o.templateVariable,r.extend(r.map(h,function(e){return e.context}),{t:{name:o.abstractTemplate},m:{type:"link",name:o.matcherName,p:o.predicate,r:t},v:o.templateVariable})]]),subgraph:d,order:o.order||1e3})}return s}]])},a.matchers.createLink.rdfClass="uv:LinkMatcher",a.matchers.createLink.jsArray="linkMatchers",a.matchers.createPredicate=function(e){return r.object([[e.matcherName,function(n,t){var i,o=e,c=null,l=null,f=null;o.templateVariable=o.templateVariable||a.helper.getTerm(o.predicate),(i=o.resourcePosition&&"object"===o.resourcePosition)?(l=u.namedNode(o.predicate),f=u.namedNode(t)):(c=u.namedNode(t),l=u.namedNode(o.predicate));var s=!1,p=n.match(c,l,f);if(0!==p.length){var h,d,m={};s={elements:p.length,context:r.object([[o.templateVariable,{l:r.object(p.toArray().map(function(e){return i?(h=e.subject.language,d=e.subject.value):(h=e.object.language,d=e.object.value),r.has(m,h)?(m[h]+=1,[h+"."+m[h],d]):(m[h]=1,[h,d])})),t:{name:o.abstractTemplate},m:{name:o.matcherName,type:"predicate",p:o.predicate,r:t},v:o.templateVariable}]]),subgraph:p,order:o.order||1e3}}return s}]])},a.matchers.createPredicate.rdfClass="uv:PredicateMatcher",a.matchers.createPredicate.jsArray="predicateMatchers","undefined"!=typeof window&&(window.uduvudu=a),e.exports=a}}]);
//# sourceMappingURL=12.bundle.js.map