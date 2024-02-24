import{r as bt,c as _t,g as wt,s as I,R as jt,_ as Et,j as F}from"./index-d3624f09.js";import{B as X}from"./constants-00fcb92c.js";var lt={exports:{}};(function(M,It){(function(rt,K){M.exports=K(bt)})(typeof self<"u"?self:_t,rt=>(()=>{var K={7403:(e,o,t)=>{t.d(o,{default:()=>B});var n=t(4087),i=t.n(n);const a=function(w){return new RegExp(/<[a-z][\s\S]*>/i).test(w)},r=function(w,v){return Math.floor(Math.random()*(v-w+1))+w};var u="TYPE_CHARACTER",c="REMOVE_CHARACTER",p="REMOVE_ALL",d="REMOVE_LAST_VISIBLE_NODE",l="PAUSE_FOR",f="CALL_FUNCTION",m="ADD_HTML_TAG_ELEMENT",h="CHANGE_DELETE_SPEED",x="CHANGE_DELAY",b="CHANGE_CURSOR",E="PASTE_STRING",S="HTML_TAG";function O(w){return O=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(v){return typeof v}:function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v},O(w)}function y(w,v){var T=Object.keys(w);if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(w);v&&(j=j.filter(function(Q){return Object.getOwnPropertyDescriptor(w,Q).enumerable})),T.push.apply(T,j)}return T}function _(w){for(var v=1;v<arguments.length;v++){var T=arguments[v]!=null?arguments[v]:{};v%2?y(Object(T),!0).forEach(function(j){A(w,j,T[j])}):Object.getOwnPropertyDescriptors?Object.defineProperties(w,Object.getOwnPropertyDescriptors(T)):y(Object(T)).forEach(function(j){Object.defineProperty(w,j,Object.getOwnPropertyDescriptor(T,j))})}return w}function C(w){return function(v){if(Array.isArray(v))return P(v)}(w)||function(v){if(typeof Symbol<"u"&&v[Symbol.iterator]!=null||v["@@iterator"]!=null)return Array.from(v)}(w)||function(v,T){if(v){if(typeof v=="string")return P(v,T);var j=Object.prototype.toString.call(v).slice(8,-1);return j==="Object"&&v.constructor&&(j=v.constructor.name),j==="Map"||j==="Set"?Array.from(v):j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j)?P(v,T):void 0}}(w)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function P(w,v){(v==null||v>w.length)&&(v=w.length);for(var T=0,j=new Array(v);T<v;T++)j[T]=w[T];return j}function N(w,v){for(var T=0;T<v.length;T++){var j=v[T];j.enumerable=j.enumerable||!1,j.configurable=!0,"value"in j&&(j.writable=!0),Object.defineProperty(w,$(j.key),j)}}function A(w,v,T){return(v=$(v))in w?Object.defineProperty(w,v,{value:T,enumerable:!0,configurable:!0,writable:!0}):w[v]=T,w}function $(w){var v=function(T,j){if(O(T)!=="object"||T===null)return T;var Q=T[Symbol.toPrimitive];if(Q!==void 0){var s=Q.call(T,"string");if(O(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(T)}(w);return O(v)==="symbol"?v:String(v)}const B=function(){function w(j,Q){var s=this;if(function(g,k){if(!(g instanceof k))throw new TypeError("Cannot call a class as a function")}(this,w),A(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),A(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),A(this,"setupWrapperElement",function(){s.state.elements.container&&(s.state.elements.wrapper.className=s.options.wrapperClassName,s.state.elements.cursor.className=s.options.cursorClassName,s.state.elements.cursor.innerHTML=s.options.cursor,s.state.elements.container.innerHTML="",s.state.elements.container.appendChild(s.state.elements.wrapper),s.state.elements.container.appendChild(s.state.elements.cursor))}),A(this,"start",function(){return s.state.eventLoopPaused=!1,s.runEventLoop(),s}),A(this,"pause",function(){return s.state.eventLoopPaused=!0,s}),A(this,"stop",function(){return s.state.eventLoop&&((0,n.cancel)(s.state.eventLoop),s.state.eventLoop=null),s}),A(this,"pauseFor",function(g){return s.addEventToQueue(l,{ms:g}),s}),A(this,"typeOutAllStrings",function(){return typeof s.options.strings=="string"?(s.typeString(s.options.strings).pauseFor(s.options.pauseFor),s):(s.options.strings.forEach(function(g){s.typeString(g).pauseFor(s.options.pauseFor).deleteAll(s.options.deleteSpeed)}),s)}),A(this,"typeString",function(g){var k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(a(g))return s.typeOutHTMLString(g,k);if(g){var z=(s.options||{}).stringSplitter,D=typeof z=="function"?z(g):g.split("");s.typeCharacters(D,k)}return s}),A(this,"pasteString",function(g){var k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return a(g)?s.typeOutHTMLString(g,k,!0):(g&&s.addEventToQueue(E,{character:g,node:k}),s)}),A(this,"typeOutHTMLString",function(g){var k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,z=arguments.length>2?arguments[2]:void 0,D=function(V){var G=document.createElement("div");return G.innerHTML=V,G.childNodes}(g);if(D.length>0)for(var L=0;L<D.length;L++){var H=D[L],U=H.innerHTML;H&&H.nodeType!==3?(H.innerHTML="",s.addEventToQueue(m,{node:H,parentNode:k}),z?s.pasteString(U,H):s.typeString(U,H)):H.textContent&&(z?s.pasteString(H.textContent,k):s.typeString(H.textContent,k))}return s}),A(this,"deleteAll",function(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return s.addEventToQueue(p,{speed:g}),s}),A(this,"changeDeleteSpeed",function(g){if(!g)throw new Error("Must provide new delete speed");return s.addEventToQueue(h,{speed:g}),s}),A(this,"changeDelay",function(g){if(!g)throw new Error("Must provide new delay");return s.addEventToQueue(x,{delay:g}),s}),A(this,"changeCursor",function(g){if(!g)throw new Error("Must provide new cursor");return s.addEventToQueue(b,{cursor:g}),s}),A(this,"deleteChars",function(g){if(!g)throw new Error("Must provide amount of characters to delete");for(var k=0;k<g;k++)s.addEventToQueue(c);return s}),A(this,"callFunction",function(g,k){if(!g||typeof g!="function")throw new Error("Callbak must be a function");return s.addEventToQueue(f,{cb:g,thisArg:k}),s}),A(this,"typeCharacters",function(g){var k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!g||!Array.isArray(g))throw new Error("Characters must be an array");return g.forEach(function(z){s.addEventToQueue(u,{character:z,node:k})}),s}),A(this,"removeCharacters",function(g){if(!g||!Array.isArray(g))throw new Error("Characters must be an array");return g.forEach(function(){s.addEventToQueue(c)}),s}),A(this,"addEventToQueue",function(g,k){var z=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return s.addEventToStateProperty(g,k,z,"eventQueue")}),A(this,"addReverseCalledEvent",function(g,k){var z=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return s.options.loop?s.addEventToStateProperty(g,k,z,"reverseCalledEvents"):s}),A(this,"addEventToStateProperty",function(g,k){var z=arguments.length>2&&arguments[2]!==void 0&&arguments[2],D=arguments.length>3?arguments[3]:void 0,L={eventName:g,eventArgs:k||{}};return s.state[D]=z?[L].concat(C(s.state[D])):[].concat(C(s.state[D]),[L]),s}),A(this,"runEventLoop",function(){s.state.lastFrameTime||(s.state.lastFrameTime=Date.now());var g=Date.now(),k=g-s.state.lastFrameTime;if(!s.state.eventQueue.length){if(!s.options.loop)return;s.state.eventQueue=C(s.state.calledEvents),s.state.calledEvents=[],s.options=_({},s.state.initialOptions)}if(s.state.eventLoop=i()(s.runEventLoop),!s.state.eventLoopPaused){if(s.state.pauseUntil){if(g<s.state.pauseUntil)return;s.state.pauseUntil=null}var z,D=C(s.state.eventQueue),L=D.shift();if(!(k<=(z=L.eventName===d||L.eventName===c?s.options.deleteSpeed==="natural"?r(40,80):s.options.deleteSpeed:s.options.delay==="natural"?r(120,160):s.options.delay))){var H=L.eventName,U=L.eventArgs;switch(s.logInDevMode({currentEvent:L,state:s.state,delay:z}),H){case E:case u:var V=U.character,G=U.node,st=document.createTextNode(V),W=st;s.options.onCreateTextNode&&typeof s.options.onCreateTextNode=="function"&&(W=s.options.onCreateTextNode(V,st)),W&&(G?G.appendChild(W):s.state.elements.wrapper.appendChild(W)),s.state.visibleNodes=[].concat(C(s.state.visibleNodes),[{type:"TEXT_NODE",character:V,node:W}]);break;case c:D.unshift({eventName:d,eventArgs:{removingCharacterNode:!0}});break;case l:var dt=L.eventArgs.ms;s.state.pauseUntil=Date.now()+parseInt(dt);break;case f:var ut=L.eventArgs,ft=ut.cb,ht=ut.thisArg;ft.call(ht,{elements:s.state.elements});break;case m:var ct=L.eventArgs,Z=ct.node,tt=ct.parentNode;tt?tt.appendChild(Z):s.state.elements.wrapper.appendChild(Z),s.state.visibleNodes=[].concat(C(s.state.visibleNodes),[{type:S,node:Z,parentNode:tt||s.state.elements.wrapper}]);break;case p:var vt=s.state.visibleNodes,et=U.speed,Y=[];et&&Y.push({eventName:h,eventArgs:{speed:et,temp:!0}});for(var pt=0,mt=vt.length;pt<mt;pt++)Y.push({eventName:d,eventArgs:{removingCharacterNode:!1}});et&&Y.push({eventName:h,eventArgs:{speed:s.options.deleteSpeed,temp:!0}}),D.unshift.apply(D,Y);break;case d:var yt=L.eventArgs.removingCharacterNode;if(s.state.visibleNodes.length){var nt=s.state.visibleNodes.pop(),gt=nt.type,q=nt.node,xt=nt.character;s.options.onRemoveNode&&typeof s.options.onRemoveNode=="function"&&s.options.onRemoveNode({node:q,character:xt}),q&&q.parentNode.removeChild(q),gt===S&&yt&&D.unshift({eventName:d,eventArgs:{}})}break;case h:s.options.deleteSpeed=L.eventArgs.speed;break;case x:s.options.delay=L.eventArgs.delay;break;case b:s.options.cursor=L.eventArgs.cursor,s.state.elements.cursor.innerHTML=L.eventArgs.cursor}s.options.loop&&(L.eventName===d||L.eventArgs&&L.eventArgs.temp||(s.state.calledEvents=[].concat(C(s.state.calledEvents),[L]))),s.state.eventQueue=D,s.state.lastFrameTime=g}}}),j)if(typeof j=="string"){var it=document.querySelector(j);if(!it)throw new Error("Could not find container element");this.state.elements.container=it}else this.state.elements.container=j;Q&&(this.options=_(_({},this.options),Q)),this.state.initialOptions=_({},this.options),this.init()}var v,T;return v=w,(T=[{key:"init",value:function(){var j,Q;this.setupWrapperElement(),this.addEventToQueue(b,{cursor:this.options.cursor},!0),this.addEventToQueue(p,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(j=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(Q=document.createElement("style")).appendChild(document.createTextNode(j)),document.head.appendChild(Q),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(j){this.options.devMode&&console.log(j)}}])&&N(v.prototype,T),Object.defineProperty(v,"prototype",{writable:!1}),w}()},8552:(e,o,t)=>{var n=t(852)(t(5639),"DataView");e.exports=n},1989:(e,o,t)=>{var n=t(1789),i=t(401),a=t(7667),r=t(1327),u=t(1866);function c(p){var d=-1,l=p==null?0:p.length;for(this.clear();++d<l;){var f=p[d];this.set(f[0],f[1])}}c.prototype.clear=n,c.prototype.delete=i,c.prototype.get=a,c.prototype.has=r,c.prototype.set=u,e.exports=c},8407:(e,o,t)=>{var n=t(7040),i=t(4125),a=t(2117),r=t(7518),u=t(4705);function c(p){var d=-1,l=p==null?0:p.length;for(this.clear();++d<l;){var f=p[d];this.set(f[0],f[1])}}c.prototype.clear=n,c.prototype.delete=i,c.prototype.get=a,c.prototype.has=r,c.prototype.set=u,e.exports=c},7071:(e,o,t)=>{var n=t(852)(t(5639),"Map");e.exports=n},3369:(e,o,t)=>{var n=t(4785),i=t(1285),a=t(6e3),r=t(9916),u=t(5265);function c(p){var d=-1,l=p==null?0:p.length;for(this.clear();++d<l;){var f=p[d];this.set(f[0],f[1])}}c.prototype.clear=n,c.prototype.delete=i,c.prototype.get=a,c.prototype.has=r,c.prototype.set=u,e.exports=c},3818:(e,o,t)=>{var n=t(852)(t(5639),"Promise");e.exports=n},8525:(e,o,t)=>{var n=t(852)(t(5639),"Set");e.exports=n},8668:(e,o,t)=>{var n=t(3369),i=t(619),a=t(2385);function r(u){var c=-1,p=u==null?0:u.length;for(this.__data__=new n;++c<p;)this.add(u[c])}r.prototype.add=r.prototype.push=i,r.prototype.has=a,e.exports=r},6384:(e,o,t)=>{var n=t(8407),i=t(7465),a=t(3779),r=t(7599),u=t(4758),c=t(4309);function p(d){var l=this.__data__=new n(d);this.size=l.size}p.prototype.clear=i,p.prototype.delete=a,p.prototype.get=r,p.prototype.has=u,p.prototype.set=c,e.exports=p},2705:(e,o,t)=>{var n=t(5639).Symbol;e.exports=n},1149:(e,o,t)=>{var n=t(5639).Uint8Array;e.exports=n},577:(e,o,t)=>{var n=t(852)(t(5639),"WeakMap");e.exports=n},4963:e=>{e.exports=function(o,t){for(var n=-1,i=o==null?0:o.length,a=0,r=[];++n<i;){var u=o[n];t(u,n,o)&&(r[a++]=u)}return r}},4636:(e,o,t)=>{var n=t(2545),i=t(5694),a=t(1469),r=t(4144),u=t(5776),c=t(6719),p=Object.prototype.hasOwnProperty;e.exports=function(d,l){var f=a(d),m=!f&&i(d),h=!f&&!m&&r(d),x=!f&&!m&&!h&&c(d),b=f||m||h||x,E=b?n(d.length,String):[],S=E.length;for(var O in d)!l&&!p.call(d,O)||b&&(O=="length"||h&&(O=="offset"||O=="parent")||x&&(O=="buffer"||O=="byteLength"||O=="byteOffset")||u(O,S))||E.push(O);return E}},2488:e=>{e.exports=function(o,t){for(var n=-1,i=t.length,a=o.length;++n<i;)o[a+n]=t[n];return o}},2908:e=>{e.exports=function(o,t){for(var n=-1,i=o==null?0:o.length;++n<i;)if(t(o[n],n,o))return!0;return!1}},8470:(e,o,t)=>{var n=t(7813);e.exports=function(i,a){for(var r=i.length;r--;)if(n(i[r][0],a))return r;return-1}},8866:(e,o,t)=>{var n=t(2488),i=t(1469);e.exports=function(a,r,u){var c=r(a);return i(a)?c:n(c,u(a))}},4239:(e,o,t)=>{var n=t(2705),i=t(9607),a=t(2333),r=n?n.toStringTag:void 0;e.exports=function(u){return u==null?u===void 0?"[object Undefined]":"[object Null]":r&&r in Object(u)?i(u):a(u)}},9454:(e,o,t)=>{var n=t(4239),i=t(7005);e.exports=function(a){return i(a)&&n(a)=="[object Arguments]"}},939:(e,o,t)=>{var n=t(2492),i=t(7005);e.exports=function a(r,u,c,p,d){return r===u||(r==null||u==null||!i(r)&&!i(u)?r!=r&&u!=u:n(r,u,c,p,a,d))}},2492:(e,o,t)=>{var n=t(6384),i=t(7114),a=t(8351),r=t(6096),u=t(4160),c=t(1469),p=t(4144),d=t(6719),l="[object Arguments]",f="[object Array]",m="[object Object]",h=Object.prototype.hasOwnProperty;e.exports=function(x,b,E,S,O,y){var _=c(x),C=c(b),P=_?f:u(x),N=C?f:u(b),A=(P=P==l?m:P)==m,$=(N=N==l?m:N)==m,B=P==N;if(B&&p(x)){if(!p(b))return!1;_=!0,A=!1}if(B&&!A)return y||(y=new n),_||d(x)?i(x,b,E,S,O,y):a(x,b,P,E,S,O,y);if(!(1&E)){var w=A&&h.call(x,"__wrapped__"),v=$&&h.call(b,"__wrapped__");if(w||v){var T=w?x.value():x,j=v?b.value():b;return y||(y=new n),O(T,j,E,S,y)}}return!!B&&(y||(y=new n),r(x,b,E,S,O,y))}},8458:(e,o,t)=>{var n=t(3560),i=t(5346),a=t(3218),r=t(346),u=/^\[object .+?Constructor\]$/,c=Function.prototype,p=Object.prototype,d=c.toString,l=p.hasOwnProperty,f=RegExp("^"+d.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(m){return!(!a(m)||i(m))&&(n(m)?f:u).test(r(m))}},8749:(e,o,t)=>{var n=t(4239),i=t(1780),a=t(7005),r={};r["[object Float32Array]"]=r["[object Float64Array]"]=r["[object Int8Array]"]=r["[object Int16Array]"]=r["[object Int32Array]"]=r["[object Uint8Array]"]=r["[object Uint8ClampedArray]"]=r["[object Uint16Array]"]=r["[object Uint32Array]"]=!0,r["[object Arguments]"]=r["[object Array]"]=r["[object ArrayBuffer]"]=r["[object Boolean]"]=r["[object DataView]"]=r["[object Date]"]=r["[object Error]"]=r["[object Function]"]=r["[object Map]"]=r["[object Number]"]=r["[object Object]"]=r["[object RegExp]"]=r["[object Set]"]=r["[object String]"]=r["[object WeakMap]"]=!1,e.exports=function(u){return a(u)&&i(u.length)&&!!r[n(u)]}},280:(e,o,t)=>{var n=t(5726),i=t(6916),a=Object.prototype.hasOwnProperty;e.exports=function(r){if(!n(r))return i(r);var u=[];for(var c in Object(r))a.call(r,c)&&c!="constructor"&&u.push(c);return u}},2545:e=>{e.exports=function(o,t){for(var n=-1,i=Array(o);++n<o;)i[n]=t(n);return i}},1717:e=>{e.exports=function(o){return function(t){return o(t)}}},4757:e=>{e.exports=function(o,t){return o.has(t)}},4429:(e,o,t)=>{var n=t(5639)["__core-js_shared__"];e.exports=n},7114:(e,o,t)=>{var n=t(8668),i=t(2908),a=t(4757);e.exports=function(r,u,c,p,d,l){var f=1&c,m=r.length,h=u.length;if(m!=h&&!(f&&h>m))return!1;var x=l.get(r),b=l.get(u);if(x&&b)return x==u&&b==r;var E=-1,S=!0,O=2&c?new n:void 0;for(l.set(r,u),l.set(u,r);++E<m;){var y=r[E],_=u[E];if(p)var C=f?p(_,y,E,u,r,l):p(y,_,E,r,u,l);if(C!==void 0){if(C)continue;S=!1;break}if(O){if(!i(u,function(P,N){if(!a(O,N)&&(y===P||d(y,P,c,p,l)))return O.push(N)})){S=!1;break}}else if(y!==_&&!d(y,_,c,p,l)){S=!1;break}}return l.delete(r),l.delete(u),S}},8351:(e,o,t)=>{var n=t(2705),i=t(1149),a=t(7813),r=t(7114),u=t(8776),c=t(1814),p=n?n.prototype:void 0,d=p?p.valueOf:void 0;e.exports=function(l,f,m,h,x,b,E){switch(m){case"[object DataView]":if(l.byteLength!=f.byteLength||l.byteOffset!=f.byteOffset)return!1;l=l.buffer,f=f.buffer;case"[object ArrayBuffer]":return!(l.byteLength!=f.byteLength||!b(new i(l),new i(f)));case"[object Boolean]":case"[object Date]":case"[object Number]":return a(+l,+f);case"[object Error]":return l.name==f.name&&l.message==f.message;case"[object RegExp]":case"[object String]":return l==f+"";case"[object Map]":var S=u;case"[object Set]":var O=1&h;if(S||(S=c),l.size!=f.size&&!O)return!1;var y=E.get(l);if(y)return y==f;h|=2,E.set(l,f);var _=r(S(l),S(f),h,x,b,E);return E.delete(l),_;case"[object Symbol]":if(d)return d.call(l)==d.call(f)}return!1}},6096:(e,o,t)=>{var n=t(8234),i=Object.prototype.hasOwnProperty;e.exports=function(a,r,u,c,p,d){var l=1&u,f=n(a),m=f.length;if(m!=n(r).length&&!l)return!1;for(var h=m;h--;){var x=f[h];if(!(l?x in r:i.call(r,x)))return!1}var b=d.get(a),E=d.get(r);if(b&&E)return b==r&&E==a;var S=!0;d.set(a,r),d.set(r,a);for(var O=l;++h<m;){var y=a[x=f[h]],_=r[x];if(c)var C=l?c(_,y,x,r,a,d):c(y,_,x,a,r,d);if(!(C===void 0?y===_||p(y,_,u,c,d):C)){S=!1;break}O||(O=x=="constructor")}if(S&&!O){var P=a.constructor,N=r.constructor;P==N||!("constructor"in a)||!("constructor"in r)||typeof P=="function"&&P instanceof P&&typeof N=="function"&&N instanceof N||(S=!1)}return d.delete(a),d.delete(r),S}},1957:(e,o,t)=>{var n=typeof t.g=="object"&&t.g&&t.g.Object===Object&&t.g;e.exports=n},8234:(e,o,t)=>{var n=t(8866),i=t(9551),a=t(3674);e.exports=function(r){return n(r,a,i)}},5050:(e,o,t)=>{var n=t(7019);e.exports=function(i,a){var r=i.__data__;return n(a)?r[typeof a=="string"?"string":"hash"]:r.map}},852:(e,o,t)=>{var n=t(8458),i=t(7801);e.exports=function(a,r){var u=i(a,r);return n(u)?u:void 0}},9607:(e,o,t)=>{var n=t(2705),i=Object.prototype,a=i.hasOwnProperty,r=i.toString,u=n?n.toStringTag:void 0;e.exports=function(c){var p=a.call(c,u),d=c[u];try{c[u]=void 0;var l=!0}catch{}var f=r.call(c);return l&&(p?c[u]=d:delete c[u]),f}},9551:(e,o,t)=>{var n=t(4963),i=t(479),a=Object.prototype.propertyIsEnumerable,r=Object.getOwnPropertySymbols,u=r?function(c){return c==null?[]:(c=Object(c),n(r(c),function(p){return a.call(c,p)}))}:i;e.exports=u},4160:(e,o,t)=>{var n=t(8552),i=t(7071),a=t(3818),r=t(8525),u=t(577),c=t(4239),p=t(346),d="[object Map]",l="[object Promise]",f="[object Set]",m="[object WeakMap]",h="[object DataView]",x=p(n),b=p(i),E=p(a),S=p(r),O=p(u),y=c;(n&&y(new n(new ArrayBuffer(1)))!=h||i&&y(new i)!=d||a&&y(a.resolve())!=l||r&&y(new r)!=f||u&&y(new u)!=m)&&(y=function(_){var C=c(_),P=C=="[object Object]"?_.constructor:void 0,N=P?p(P):"";if(N)switch(N){case x:return h;case b:return d;case E:return l;case S:return f;case O:return m}return C}),e.exports=y},7801:e=>{e.exports=function(o,t){return o==null?void 0:o[t]}},1789:(e,o,t)=>{var n=t(4536);e.exports=function(){this.__data__=n?n(null):{},this.size=0}},401:e=>{e.exports=function(o){var t=this.has(o)&&delete this.__data__[o];return this.size-=t?1:0,t}},7667:(e,o,t)=>{var n=t(4536),i=Object.prototype.hasOwnProperty;e.exports=function(a){var r=this.__data__;if(n){var u=r[a];return u==="__lodash_hash_undefined__"?void 0:u}return i.call(r,a)?r[a]:void 0}},1327:(e,o,t)=>{var n=t(4536),i=Object.prototype.hasOwnProperty;e.exports=function(a){var r=this.__data__;return n?r[a]!==void 0:i.call(r,a)}},1866:(e,o,t)=>{var n=t(4536);e.exports=function(i,a){var r=this.__data__;return this.size+=this.has(i)?0:1,r[i]=n&&a===void 0?"__lodash_hash_undefined__":a,this}},5776:e=>{var o=/^(?:0|[1-9]\d*)$/;e.exports=function(t,n){var i=typeof t;return!!(n=n??9007199254740991)&&(i=="number"||i!="symbol"&&o.test(t))&&t>-1&&t%1==0&&t<n}},7019:e=>{e.exports=function(o){var t=typeof o;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?o!=="__proto__":o===null}},5346:(e,o,t)=>{var n,i=t(4429),a=(n=/[^.]+$/.exec(i&&i.keys&&i.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";e.exports=function(r){return!!a&&a in r}},5726:e=>{var o=Object.prototype;e.exports=function(t){var n=t&&t.constructor;return t===(typeof n=="function"&&n.prototype||o)}},7040:e=>{e.exports=function(){this.__data__=[],this.size=0}},4125:(e,o,t)=>{var n=t(8470),i=Array.prototype.splice;e.exports=function(a){var r=this.__data__,u=n(r,a);return!(u<0||(u==r.length-1?r.pop():i.call(r,u,1),--this.size,0))}},2117:(e,o,t)=>{var n=t(8470);e.exports=function(i){var a=this.__data__,r=n(a,i);return r<0?void 0:a[r][1]}},7518:(e,o,t)=>{var n=t(8470);e.exports=function(i){return n(this.__data__,i)>-1}},4705:(e,o,t)=>{var n=t(8470);e.exports=function(i,a){var r=this.__data__,u=n(r,i);return u<0?(++this.size,r.push([i,a])):r[u][1]=a,this}},4785:(e,o,t)=>{var n=t(1989),i=t(8407),a=t(7071);e.exports=function(){this.size=0,this.__data__={hash:new n,map:new(a||i),string:new n}}},1285:(e,o,t)=>{var n=t(5050);e.exports=function(i){var a=n(this,i).delete(i);return this.size-=a?1:0,a}},6e3:(e,o,t)=>{var n=t(5050);e.exports=function(i){return n(this,i).get(i)}},9916:(e,o,t)=>{var n=t(5050);e.exports=function(i){return n(this,i).has(i)}},5265:(e,o,t)=>{var n=t(5050);e.exports=function(i,a){var r=n(this,i),u=r.size;return r.set(i,a),this.size+=r.size==u?0:1,this}},8776:e=>{e.exports=function(o){var t=-1,n=Array(o.size);return o.forEach(function(i,a){n[++t]=[a,i]}),n}},4536:(e,o,t)=>{var n=t(852)(Object,"create");e.exports=n},6916:(e,o,t)=>{var n=t(5569)(Object.keys,Object);e.exports=n},1167:(e,o,t)=>{e=t.nmd(e);var n=t(1957),i=o&&!o.nodeType&&o,a=i&&e&&!e.nodeType&&e,r=a&&a.exports===i&&n.process,u=function(){try{return a&&a.require&&a.require("util").types||r&&r.binding&&r.binding("util")}catch{}}();e.exports=u},2333:e=>{var o=Object.prototype.toString;e.exports=function(t){return o.call(t)}},5569:e=>{e.exports=function(o,t){return function(n){return o(t(n))}}},5639:(e,o,t)=>{var n=t(1957),i=typeof self=="object"&&self&&self.Object===Object&&self,a=n||i||Function("return this")();e.exports=a},619:e=>{e.exports=function(o){return this.__data__.set(o,"__lodash_hash_undefined__"),this}},2385:e=>{e.exports=function(o){return this.__data__.has(o)}},1814:e=>{e.exports=function(o){var t=-1,n=Array(o.size);return o.forEach(function(i){n[++t]=i}),n}},7465:(e,o,t)=>{var n=t(8407);e.exports=function(){this.__data__=new n,this.size=0}},3779:e=>{e.exports=function(o){var t=this.__data__,n=t.delete(o);return this.size=t.size,n}},7599:e=>{e.exports=function(o){return this.__data__.get(o)}},4758:e=>{e.exports=function(o){return this.__data__.has(o)}},4309:(e,o,t)=>{var n=t(8407),i=t(7071),a=t(3369);e.exports=function(r,u){var c=this.__data__;if(c instanceof n){var p=c.__data__;if(!i||p.length<199)return p.push([r,u]),this.size=++c.size,this;c=this.__data__=new a(p)}return c.set(r,u),this.size=c.size,this}},346:e=>{var o=Function.prototype.toString;e.exports=function(t){if(t!=null){try{return o.call(t)}catch{}try{return t+""}catch{}}return""}},7813:e=>{e.exports=function(o,t){return o===t||o!=o&&t!=t}},5694:(e,o,t)=>{var n=t(9454),i=t(7005),a=Object.prototype,r=a.hasOwnProperty,u=a.propertyIsEnumerable,c=n(function(){return arguments}())?n:function(p){return i(p)&&r.call(p,"callee")&&!u.call(p,"callee")};e.exports=c},1469:e=>{var o=Array.isArray;e.exports=o},8612:(e,o,t)=>{var n=t(3560),i=t(1780);e.exports=function(a){return a!=null&&i(a.length)&&!n(a)}},4144:(e,o,t)=>{e=t.nmd(e);var n=t(5639),i=t(5062),a=o&&!o.nodeType&&o,r=a&&e&&!e.nodeType&&e,u=r&&r.exports===a?n.Buffer:void 0,c=(u?u.isBuffer:void 0)||i;e.exports=c},8446:(e,o,t)=>{var n=t(939);e.exports=function(i,a){return n(i,a)}},3560:(e,o,t)=>{var n=t(4239),i=t(3218);e.exports=function(a){if(!i(a))return!1;var r=n(a);return r=="[object Function]"||r=="[object GeneratorFunction]"||r=="[object AsyncFunction]"||r=="[object Proxy]"}},1780:e=>{e.exports=function(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=9007199254740991}},3218:e=>{e.exports=function(o){var t=typeof o;return o!=null&&(t=="object"||t=="function")}},7005:e=>{e.exports=function(o){return o!=null&&typeof o=="object"}},6719:(e,o,t)=>{var n=t(8749),i=t(1717),a=t(1167),r=a&&a.isTypedArray,u=r?i(r):n;e.exports=u},3674:(e,o,t)=>{var n=t(4636),i=t(280),a=t(8612);e.exports=function(r){return a(r)?n(r):i(r)}},479:e=>{e.exports=function(){return[]}},5062:e=>{e.exports=function(){return!1}},75:function(e){(function(){var o,t,n,i,a,r;typeof performance<"u"&&performance!==null&&performance.now?e.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(e.exports=function(){return(o()-a)/1e6},t=process.hrtime,i=(o=function(){var u;return 1e9*(u=t())[0]+u[1]})(),r=1e9*process.uptime(),a=i-r):Date.now?(e.exports=function(){return Date.now()-n},n=Date.now()):(e.exports=function(){return new Date().getTime()-n},n=new Date().getTime())}).call(this)},4087:(e,o,t)=>{for(var n=t(75),i=typeof window>"u"?t.g:window,a=["moz","webkit"],r="AnimationFrame",u=i["request"+r],c=i["cancel"+r]||i["cancelRequest"+r],p=0;!u&&p<a.length;p++)u=i[a[p]+"Request"+r],c=i[a[p]+"Cancel"+r]||i[a[p]+"CancelRequest"+r];if(!u||!c){var d=0,l=0,f=[];u=function(m){if(f.length===0){var h=n(),x=Math.max(0,16.666666666666668-(h-d));d=x+h,setTimeout(function(){var b=f.slice(0);f.length=0;for(var E=0;E<b.length;E++)if(!b[E].cancelled)try{b[E].callback(d)}catch(S){setTimeout(function(){throw S},0)}},Math.round(x))}return f.push({handle:++l,callback:m,cancelled:!1}),l},c=function(m){for(var h=0;h<f.length;h++)f[h].handle===m&&(f[h].cancelled=!0)}}e.exports=function(m){return u.call(i,m)},e.exports.cancel=function(){c.apply(i,arguments)},e.exports.polyfill=function(m){m||(m=i),m.requestAnimationFrame=u,m.cancelAnimationFrame=c}},8156:e=>{e.exports=rt}},ot={};function R(e){var o=ot[e];if(o!==void 0)return o.exports;var t=ot[e]={id:e,loaded:!1,exports:{}};return K[e].call(t.exports,t,t.exports,R),t.loaded=!0,t.exports}R.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return R.d(o,{a:o}),o},R.d=(e,o)=>{for(var t in o)R.o(o,t)&&!R.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},R.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),R.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),R.nmd=e=>(e.paths=[],e.children||(e.children=[]),e);var at={};return(()=>{R.d(at,{default:()=>f});var e=R(8156),o=R.n(e),t=R(7403),n=R(8446),i=R.n(n);function a(m){return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(h){return typeof h}:function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h},a(m)}function r(m,h){for(var x=0;x<h.length;x++){var b=h[x];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(m,d(b.key),b)}}function u(m,h){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(x,b){return x.__proto__=b,x},u(m,h)}function c(m){if(m===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return m}function p(m){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(h){return h.__proto__||Object.getPrototypeOf(h)},p(m)}function d(m){var h=function(x,b){if(a(x)!=="object"||x===null)return x;var E=x[Symbol.toPrimitive];if(E!==void 0){var S=E.call(x,"string");if(a(S)!=="object")return S;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(x)}(m);return a(h)==="symbol"?h:String(h)}var l=function(m){(function(y,_){if(typeof _!="function"&&_!==null)throw new TypeError("Super expression must either be null or a function");y.prototype=Object.create(_&&_.prototype,{constructor:{value:y,writable:!0,configurable:!0}}),Object.defineProperty(y,"prototype",{writable:!1}),_&&u(y,_)})(O,m);var h,x,b,E,S=(b=O,E=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var y,_=p(b);if(E){var C=p(this).constructor;y=Reflect.construct(_,arguments,C)}else y=_.apply(this,arguments);return function(P,N){if(N&&(a(N)==="object"||typeof N=="function"))return N;if(N!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return c(P)}(this,y)});function O(){var y,_,C,P;(function(B,w){if(!(B instanceof w))throw new TypeError("Cannot call a class as a function")})(this,O);for(var N=arguments.length,A=new Array(N),$=0;$<N;$++)A[$]=arguments[$];return _=c(y=S.call.apply(S,[this].concat(A))),P={instance:null},(C=d(C="state"))in _?Object.defineProperty(_,C,{value:P,enumerable:!0,configurable:!0,writable:!0}):_[C]=P,y}return h=O,(x=[{key:"componentDidMount",value:function(){var y=this,_=new t.default(this.typewriter,this.props.options);this.setState({instance:_},function(){var C=y.props.onInit;C&&C(_)})}},{key:"componentDidUpdate",value:function(y){i()(this.props.options,y.options)||this.setState({instance:new t.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var y=this,_=this.props.component;return o().createElement(_,{ref:function(C){return y.typewriter=C},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&r(h.prototype,x),Object.defineProperty(h,"prototype",{writable:!1}),O}(e.Component);l.defaultProps={component:"div"};const f=l})(),at.default})())})(lt);var Ot=lt.exports;const Tt=wt(Ot),J="/react-app-portfolio/assets/me-70f93904.webp",Bt=I.div`
    width:600px;
    height: 500px;
`,St=I.div`
  background: ${({theme:M})=>M.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 8rem 30px;
  @media screen and (max-width: 960px) {
    padding: 8rem 16px;
  }
  @media screen and (max-width: 640px) {
    padding: 6rem 16px;
  }
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`,At=I.div`
  position: absolute;
  display: flex;
  justify-content: end;
  width: 82%;
  height: 100%;
  inset: 60% 0 0 52% !important;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media screen and (max-width: 1300px) {
    justify-content: center;
    padding: 0 0;
    inset: 65% 0 0 75% !important;
  }

  @media screen and (max-width: 1020px) {
    justify-content: center;
    padding: 0 0;
    inset: 65% 0 0 75% !important;
  }

  @media screen and (max-width: 960px) {
    justify-content: center;
    padding: 0 0;
    inset: 55% 0 0 50% !important;
  }

  @media screen and (max-width: 640px) {
    inset: 55% 0 0 50% !important;
  }
`,Ct=I.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`,Pt=I.div`
  width: 100%;
  order: 1;
  @media screen and (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`,Nt=I.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media screen and (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;
  }

  @media screen and (max-width: 640px) {
    margin-bottom: 30px;
  }
`,kt=I.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({theme:M})=>M.text_primary};
  line-height: 68px;
  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`,Lt=I.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({theme:M})=>M.text_primary};
  line-height: 68px;
  @media screen and (max-width: 960px) {
    text-align: center;
  }
  @media screen and (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`,zt=I.span`
  color: ${({theme:M})=>M.primary};
  cursor: pointer;
`,Dt=I.div`
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 42px;
  color: ${({theme:M})=>M.text_primary+95};
  text-align: justify;

  @media screen and (max-width: 960px) {
    text-align: justify;
    text-justify: inter-word;
    font-size: 14px;
  }

  @media screen and (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`,Mt=I.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color:${({theme:M})=>M.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: hsla(183, 98%, 22%, 1);
    background: linear-gradient(225deg, hsla(183, 98%, 22%, 1) 0%, hsla(164, 100%, 44%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(183, 98%, 22%, 1) 0%, hsla(164, 100%, 44%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(183, 98%, 22%, 1) 0%, hsla(164, 100%, 44%, 1) 100%);
    &:hover {
        transform: scale(1.05);
        transition: all 0.4s ease-in-out;
        filter: brightness(1);
    }
  
    @media screen and (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    }
`,Rt=I.img`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 50%;
  max-height: 400px;
  max-width: 400px;
  object-fit: cover;
  object-position: center;
  border: 2px solid ${({theme:M})=>M.primary};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  
  @media screen and (max-width: 960px) {
    max-height: 350px;
    max-width: 350px;
    height: 350px;
    width: 350px;
  }

  @media screen and (max-width: 640px) {
    max-height: 250px;
    max-width: 250px;
    height: 250px;
    width: 250px;
  }
`,Ft=jt.lazy(()=>Et(()=>import("./index-0a738c46.js"),["assets/index-0a738c46.js","assets/index-d3624f09.js","assets/index-29a84fde.css","assets/constants-00fcb92c.js","assets/createSvgIcon-677a302a.js"])),Ht=()=>F.jsx("div",{id:"home",children:F.jsxs(St,{children:[F.jsx(At,{children:F.jsx(Ft,{})}),F.jsxs(Ct,{children:[F.jsxs(Pt,{id:"left",children:[F.jsxs(kt,{children:["Hi, I am ",F.jsx("br",{}),X.name]}),F.jsxs(Lt,{children:["I am a",F.jsx(zt,{children:F.jsx(Tt,{options:{strings:X.roles,autoStart:!0,loop:!0}})})]}),F.jsx(Dt,{children:X.description}),F.jsx(Mt,{href:X.resume,target:"display",children:"Check Resume"})]}),F.jsx(Nt,{id:"right",children:F.jsx(Rt,{fetchpriority:"high",src:J,alt:"Me",srcSet:`
                                ${J} 400w,
                                ${J} 600w,
                                ${J} 1024w
                              `,sizes:"(max-width: 400px) 400px, (max-width: 1024px) 600px, 1024px"})})]})]})}),Ut=Object.freeze(Object.defineProperty({__proto__:null,default:Ht},Symbol.toStringTag,{value:"Module"}));export{Bt as D,Ut as i};
