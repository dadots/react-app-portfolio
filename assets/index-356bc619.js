import{r as t,c as e,g as n,s as r,R as i,_ as o,j as a}from"./index-122c3be8.js";import{B as u}from"./constants-4222bbdc.js";var c={exports:{}};"undefined"!=typeof self&&self;const s=n(c.exports=(t=>(()=>{var e={7403:(t,e,n)=>{n.d(e,{default:()=>A});var r=n(4087),i=n.n(r);const o=function(t){return new RegExp(/<[a-z][\s\S]*>/i).test(t)},a=function(t,e){return Math.floor(Math.random()*(e-t+1))+t};var u="TYPE_CHARACTER",c="REMOVE_CHARACTER",s="REMOVE_ALL",f="REMOVE_LAST_VISIBLE_NODE",l="PAUSE_FOR",d="CALL_FUNCTION",v="ADD_HTML_TAG_ELEMENT",h="CHANGE_DELETE_SPEED",p="CHANGE_DELAY",m="CHANGE_CURSOR",b="PASTE_STRING",y="HTML_TAG";function w(t){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?x(Object(n),!0).forEach((function(e){_(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function j(t){return function(t){if(Array.isArray(t))return O(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return O(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?O(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function _(t,e,n){return(e=E(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function E(t){var e=function(t,e){if("object"!==w(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===w(e)?e:String(e)}const A=function(){function t(e,n){var w=this;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),_(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),_(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),_(this,"setupWrapperElement",(function(){w.state.elements.container&&(w.state.elements.wrapper.className=w.options.wrapperClassName,w.state.elements.cursor.className=w.options.cursorClassName,w.state.elements.cursor.innerHTML=w.options.cursor,w.state.elements.container.innerHTML="",w.state.elements.container.appendChild(w.state.elements.wrapper),w.state.elements.container.appendChild(w.state.elements.cursor))})),_(this,"start",(function(){return w.state.eventLoopPaused=!1,w.runEventLoop(),w})),_(this,"pause",(function(){return w.state.eventLoopPaused=!0,w})),_(this,"stop",(function(){return w.state.eventLoop&&((0,r.cancel)(w.state.eventLoop),w.state.eventLoop=null),w})),_(this,"pauseFor",(function(t){return w.addEventToQueue(l,{ms:t}),w})),_(this,"typeOutAllStrings",(function(){return"string"==typeof w.options.strings?(w.typeString(w.options.strings).pauseFor(w.options.pauseFor),w):(w.options.strings.forEach((function(t){w.typeString(t).pauseFor(w.options.pauseFor).deleteAll(w.options.deleteSpeed)})),w)})),_(this,"typeString",(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(o(t))return w.typeOutHTMLString(t,e);if(t){var n=(w.options||{}).stringSplitter,r="function"==typeof n?n(t):t.split("");w.typeCharacters(r,e)}return w})),_(this,"pasteString",(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return o(t)?w.typeOutHTMLString(t,e,!0):(t&&w.addEventToQueue(b,{character:t,node:e}),w)})),_(this,"typeOutHTMLString",(function(t){var e,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2?arguments[2]:void 0,o=(e=t,(n=document.createElement("div")).innerHTML=e,n.childNodes);if(o.length>0)for(var a=0;a<o.length;a++){var u=o[a],c=u.innerHTML;u&&3!==u.nodeType?(u.innerHTML="",w.addEventToQueue(v,{node:u,parentNode:r}),i?w.pasteString(c,u):w.typeString(c,u)):u.textContent&&(i?w.pasteString(u.textContent,r):w.typeString(u.textContent,r))}return w})),_(this,"deleteAll",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"natural";return w.addEventToQueue(s,{speed:t}),w})),_(this,"changeDeleteSpeed",(function(t){if(!t)throw new Error("Must provide new delete speed");return w.addEventToQueue(h,{speed:t}),w})),_(this,"changeDelay",(function(t){if(!t)throw new Error("Must provide new delay");return w.addEventToQueue(p,{delay:t}),w})),_(this,"changeCursor",(function(t){if(!t)throw new Error("Must provide new cursor");return w.addEventToQueue(m,{cursor:t}),w})),_(this,"deleteChars",(function(t){if(!t)throw new Error("Must provide amount of characters to delete");for(var e=0;e<t;e++)w.addEventToQueue(c);return w})),_(this,"callFunction",(function(t,e){if(!t||"function"!=typeof t)throw new Error("Callback must be a function");return w.addEventToQueue(d,{cb:t,thisArg:e}),w})),_(this,"typeCharacters",(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!t||!Array.isArray(t))throw new Error("Characters must be an array");return t.forEach((function(t){w.addEventToQueue(u,{character:t,node:e})})),w})),_(this,"removeCharacters",(function(t){if(!t||!Array.isArray(t))throw new Error("Characters must be an array");return t.forEach((function(){w.addEventToQueue(c)})),w})),_(this,"addEventToQueue",(function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return w.addEventToStateProperty(t,e,n,"eventQueue")})),_(this,"addReverseCalledEvent",(function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return w.options.loop?w.addEventToStateProperty(t,e,n,"reverseCalledEvents"):w})),_(this,"addEventToStateProperty",(function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0,i={eventName:t,eventArgs:e||{}};return w.state[r]=n?[i].concat(j(w.state[r])):[].concat(j(w.state[r]),[i]),w})),_(this,"runEventLoop",(function(){w.state.lastFrameTime||(w.state.lastFrameTime=Date.now());var t=Date.now(),e=t-w.state.lastFrameTime;if(!w.state.eventQueue.length){if(!w.options.loop)return;w.state.eventQueue=j(w.state.calledEvents),w.state.calledEvents=[],w.options=g({},w.state.initialOptions)}if(w.state.eventLoop=i()(w.runEventLoop),!w.state.eventLoopPaused){if(w.state.pauseUntil){if(t<w.state.pauseUntil)return;w.state.pauseUntil=null}var n,r=j(w.state.eventQueue),o=r.shift();if(!(e<=(n=o.eventName===f||o.eventName===c?"natural"===w.options.deleteSpeed?a(40,80):w.options.deleteSpeed:"natural"===w.options.delay?a(120,160):w.options.delay))){var x=o.eventName,O=o.eventArgs;switch(w.logInDevMode({currentEvent:o,state:w.state,delay:n}),x){case b:case u:var _=O.character,E=O.node,A=document.createTextNode(_),S=A;w.options.onCreateTextNode&&"function"==typeof w.options.onCreateTextNode&&(S=w.options.onCreateTextNode(_,A)),S&&(E?E.appendChild(S):w.state.elements.wrapper.appendChild(S)),w.state.visibleNodes=[].concat(j(w.state.visibleNodes),[{type:"TEXT_NODE",character:_,node:S}]);break;case c:r.unshift({eventName:f,eventArgs:{removingCharacterNode:!0}});break;case l:var T=o.eventArgs.ms;w.state.pauseUntil=Date.now()+parseInt(T);break;case d:var k=o.eventArgs,C=k.cb,R=k.thisArg;C.call(R,{elements:w.state.elements});break;case v:var D=o.eventArgs,N=D.node,M=D.parentNode;M?M.appendChild(N):w.state.elements.wrapper.appendChild(N),w.state.visibleNodes=[].concat(j(w.state.visibleNodes),[{type:y,node:N,parentNode:M||w.state.elements.wrapper}]);break;case s:var $=w.state.visibleNodes,L=O.speed,z=[];L&&z.push({eventName:h,eventArgs:{speed:L,temp:!0}});for(var F=0,P=$.length;F<P;F++)z.push({eventName:f,eventArgs:{removingCharacterNode:!1}});L&&z.push({eventName:h,eventArgs:{speed:w.options.deleteSpeed,temp:!0}}),r.unshift.apply(r,z);break;case f:var I=o.eventArgs.removingCharacterNode;if(w.state.visibleNodes.length){var H=w.state.visibleNodes.pop(),U=H.type,V=H.node,B=H.character;w.options.onRemoveNode&&"function"==typeof w.options.onRemoveNode&&w.options.onRemoveNode({node:V,character:B}),V&&V.parentNode.removeChild(V),U===y&&I&&r.unshift({eventName:f,eventArgs:{}})}break;case h:w.options.deleteSpeed=o.eventArgs.speed;break;case p:w.options.delay=o.eventArgs.delay;break;case m:w.options.cursor=o.eventArgs.cursor,w.state.elements.cursor.innerHTML=o.eventArgs.cursor}w.options.loop&&(o.eventName===f||o.eventArgs&&o.eventArgs.temp||(w.state.calledEvents=[].concat(j(w.state.calledEvents),[o]))),w.state.eventQueue=r,w.state.lastFrameTime=t}}})),e)if("string"==typeof e){var x=document.querySelector(e);if(!x)throw new Error("Could not find container element");this.state.elements.container=x}else this.state.elements.container=e;n&&(this.options=g(g({},this.options),n)),this.state.initialOptions=g({},this.options),this.init()}var e,n;return e=t,(n=[{key:"init",value:function(){var t;this.setupWrapperElement(),this.addEventToQueue(m,{cursor:this.options.cursor},!0),this.addEventToQueue(s,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||((t=document.createElement("style")).appendChild(document.createTextNode(".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}")),document.head.appendChild(t),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),!0===this.options.autoStart&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(t){this.options.devMode}}])&&function(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,E(r.key),r)}}(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},8552:(t,e,n)=>{var r=n(852)(n(5639),"DataView");t.exports=r},1989:(t,e,n)=>{var r=n(1789),i=n(401),o=n(7667),a=n(1327),u=n(1866);function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=i,c.prototype.get=o,c.prototype.has=a,c.prototype.set=u,t.exports=c},8407:(t,e,n)=>{var r=n(7040),i=n(4125),o=n(2117),a=n(7518),u=n(4705);function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=i,c.prototype.get=o,c.prototype.has=a,c.prototype.set=u,t.exports=c},7071:(t,e,n)=>{var r=n(852)(n(5639),"Map");t.exports=r},3369:(t,e,n)=>{var r=n(4785),i=n(1285),o=n(6e3),a=n(9916),u=n(5265);function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=i,c.prototype.get=o,c.prototype.has=a,c.prototype.set=u,t.exports=c},3818:(t,e,n)=>{var r=n(852)(n(5639),"Promise");t.exports=r},8525:(t,e,n)=>{var r=n(852)(n(5639),"Set");t.exports=r},8668:(t,e,n)=>{var r=n(3369),i=n(619),o=n(2385);function a(t){var e=-1,n=null==t?0:t.length;for(this.t=new r;++e<n;)this.add(t[e])}a.prototype.add=a.prototype.push=i,a.prototype.has=o,t.exports=a},6384:(t,e,n)=>{var r=n(8407),i=n(7465),o=n(3779),a=n(7599),u=n(4758),c=n(4309);function s(t){var e=this.t=new r(t);this.size=e.size}s.prototype.clear=i,s.prototype.delete=o,s.prototype.get=a,s.prototype.has=u,s.prototype.set=c,t.exports=s},2705:(t,e,n)=>{var r=n(5639).Symbol;t.exports=r},1149:(t,e,n)=>{var r=n(5639).Uint8Array;t.exports=r},577:(t,e,n)=>{var r=n(852)(n(5639),"WeakMap");t.exports=r},4963:t=>{t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,i=0,o=[];++n<r;){var a=t[n];e(a,n,t)&&(o[i++]=a)}return o}},4636:(t,e,n)=>{var r=n(2545),i=n(5694),o=n(1469),a=n(4144),u=n(5776),c=n(6719),s=Object.prototype.hasOwnProperty;t.exports=function(t,e){var n=o(t),f=!n&&i(t),l=!n&&!f&&a(t),d=!n&&!f&&!l&&c(t),v=n||f||l||d,h=v?r(t.length,String):[],p=h.length;for(var m in t)!e&&!s.call(t,m)||v&&("length"==m||l&&("offset"==m||"parent"==m)||d&&("buffer"==m||"byteLength"==m||"byteOffset"==m)||u(m,p))||h.push(m);return h}},2488:t=>{t.exports=function(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}},2908:t=>{t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}},8470:(t,e,n)=>{var r=n(7813);t.exports=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1}},8866:(t,e,n)=>{var r=n(2488),i=n(1469);t.exports=function(t,e,n){var o=e(t);return i(t)?o:r(o,n(t))}},4239:(t,e,n)=>{var r=n(2705),i=n(9607),o=n(2333),a=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?i(t):o(t)}},9454:(t,e,n)=>{var r=n(4239),i=n(7005);t.exports=function(t){return i(t)&&"[object Arguments]"==r(t)}},939:(t,e,n)=>{var r=n(2492),i=n(7005);t.exports=function t(e,n,o,a,u){return e===n||(null==e||null==n||!i(e)&&!i(n)?e!=e&&n!=n:r(e,n,o,a,t,u))}},2492:(t,e,n)=>{var r=n(6384),i=n(7114),o=n(8351),a=n(6096),u=n(4160),c=n(1469),s=n(4144),f=n(6719),l="[object Arguments]",d="[object Array]",v="[object Object]",h=Object.prototype.hasOwnProperty;t.exports=function(t,e,n,p,m,b){var y=c(t),w=c(e),x=y?d:u(t),g=w?d:u(e),j=(x=x==l?v:x)==v,O=(g=g==l?v:g)==v,_=x==g;if(_&&s(t)){if(!s(e))return!1;y=!0,j=!1}if(_&&!j)return b||(b=new r),y||f(t)?i(t,e,n,p,m,b):o(t,e,x,n,p,m,b);if(!(1&n)){var E=j&&h.call(t,"__wrapped__"),A=O&&h.call(e,"__wrapped__");if(E||A){var S=E?t.value():t,T=A?e.value():e;return b||(b=new r),m(S,T,n,p,b)}}return!!_&&(b||(b=new r),a(t,e,n,p,m,b))}},8458:(t,e,n)=>{var r=n(3560),i=n(5346),o=n(3218),a=n(346),u=/^\[object .+?Constructor\]$/,c=Function.prototype,s=Object.prototype,f=c.toString,l=s.hasOwnProperty,d=RegExp("^"+f.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!o(t)||i(t))&&(r(t)?d:u).test(a(t))}},8749:(t,e,n)=>{var r=n(4239),i=n(1780),o=n(7005),a={};a["[object Float32Array]"]=a["[object Float64Array]"]=a["[object Int8Array]"]=a["[object Int16Array]"]=a["[object Int32Array]"]=a["[object Uint8Array]"]=a["[object Uint8ClampedArray]"]=a["[object Uint16Array]"]=a["[object Uint32Array]"]=!0,a["[object Arguments]"]=a["[object Array]"]=a["[object ArrayBuffer]"]=a["[object Boolean]"]=a["[object DataView]"]=a["[object Date]"]=a["[object Error]"]=a["[object Function]"]=a["[object Map]"]=a["[object Number]"]=a["[object Object]"]=a["[object RegExp]"]=a["[object Set]"]=a["[object String]"]=a["[object WeakMap]"]=!1,t.exports=function(t){return o(t)&&i(t.length)&&!!a[r(t)]}},280:(t,e,n)=>{var r=n(5726),i=n(6916),o=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return i(t);var e=[];for(var n in Object(t))o.call(t,n)&&"constructor"!=n&&e.push(n);return e}},2545:t=>{t.exports=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}},1717:t=>{t.exports=function(t){return function(e){return t(e)}}},4757:t=>{t.exports=function(t,e){return t.has(e)}},4429:(t,e,n)=>{var r=n(5639)["i"];t.exports=r},7114:(t,e,n)=>{var r=n(8668),i=n(2908),o=n(4757);t.exports=function(t,e,n,a,u,c){var s=1&n,f=t.length,l=e.length;if(f!=l&&!(s&&l>f))return!1;var d=c.get(t),v=c.get(e);if(d&&v)return d==e&&v==t;var h=-1,p=!0,m=2&n?new r:void 0;for(c.set(t,e),c.set(e,t);++h<f;){var b=t[h],y=e[h];if(a)var w=s?a(y,b,h,e,t,c):a(b,y,h,t,e,c);if(void 0!==w){if(w)continue;p=!1;break}if(m){if(!i(e,(function(t,e){if(!o(m,e)&&(b===t||u(b,t,n,a,c)))return m.push(e)}))){p=!1;break}}else if(b!==y&&!u(b,y,n,a,c)){p=!1;break}}return c.delete(t),c.delete(e),p}},8351:(t,e,n)=>{var r=n(2705),i=n(1149),o=n(7813),a=n(7114),u=n(8776),c=n(1814),s=r?r.prototype:void 0,f=s?s.valueOf:void 0;t.exports=function(t,e,n,r,s,l,d){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!l(new i(t),new i(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return o(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var v=u;case"[object Set]":var h=1&r;if(v||(v=c),t.size!=e.size&&!h)return!1;var p=d.get(t);if(p)return p==e;r|=2,d.set(t,e);var m=a(v(t),v(e),r,s,l,d);return d.delete(t),m;case"[object Symbol]":if(f)return f.call(t)==f.call(e)}return!1}},6096:(t,e,n)=>{var r=n(8234),i=Object.prototype.hasOwnProperty;t.exports=function(t,e,n,o,a,u){var c=1&n,s=r(t),f=s.length;if(f!=r(e).length&&!c)return!1;for(var l=f;l--;){var d=s[l];if(!(c?d in e:i.call(e,d)))return!1}var v=u.get(t),h=u.get(e);if(v&&h)return v==e&&h==t;var p=!0;u.set(t,e),u.set(e,t);for(var m=c;++l<f;){var b=t[d=s[l]],y=e[d];if(o)var w=c?o(y,b,d,e,t,u):o(b,y,d,t,e,u);if(!(void 0===w?b===y||a(b,y,n,o,u):w)){p=!1;break}m||(m="constructor"==d)}if(p&&!m){var x=t.constructor,g=e.constructor;x==g||!("constructor"in t)||!("constructor"in e)||"function"==typeof x&&x instanceof x&&"function"==typeof g&&g instanceof g||(p=!1)}return u.delete(t),u.delete(e),p}},1957:(t,e,n)=>{var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;t.exports=r},8234:(t,e,n)=>{var r=n(8866),i=n(9551),o=n(3674);t.exports=function(t){return r(t,o,i)}},5050:(t,e,n)=>{var r=n(7019);t.exports=function(t,e){var n=t.t;return r(e)?n["string"==typeof e?"string":"hash"]:n.map}},852:(t,e,n)=>{var r=n(8458),i=n(7801);t.exports=function(t,e){var n=i(t,e);return r(n)?n:void 0}},9607:(t,e,n)=>{var r=n(2705),i=Object.prototype,o=i.hasOwnProperty,a=i.toString,u=r?r.toStringTag:void 0;t.exports=function(t){var e=o.call(t,u),n=t[u];try{t[u]=void 0;var r=!0}catch(c){}var i=a.call(t);return r&&(e?t[u]=n:delete t[u]),i}},9551:(t,e,n)=>{var r=n(4963),i=n(479),o=Object.prototype.propertyIsEnumerable,a=Object.getOwnPropertySymbols,u=a?function(t){return null==t?[]:(t=Object(t),r(a(t),(function(e){return o.call(t,e)})))}:i;t.exports=u},4160:(t,e,n)=>{var r=n(8552),i=n(7071),o=n(3818),a=n(8525),u=n(577),c=n(4239),s=n(346),f="[object Map]",l="[object Promise]",d="[object Set]",v="[object WeakMap]",h="[object DataView]",p=s(r),m=s(i),b=s(o),y=s(a),w=s(u),x=c;(r&&x(new r(new ArrayBuffer(1)))!=h||i&&x(new i)!=f||o&&x(o.resolve())!=l||a&&x(new a)!=d||u&&x(new u)!=v)&&(x=function(t){var e=c(t),n="[object Object]"==e?t.constructor:void 0,r=n?s(n):"";if(r)switch(r){case p:return h;case m:return f;case b:return l;case y:return d;case w:return v}return e}),t.exports=x},7801:t=>{t.exports=function(t,e){return null==t?void 0:t[e]}},1789:(t,e,n)=>{var r=n(4536);t.exports=function(){this.t=r?r(null):{},this.size=0}},401:t=>{t.exports=function(t){var e=this.has(t)&&delete this.t[t];return this.size-=e?1:0,e}},7667:(t,e,n)=>{var r=n(4536),i=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.t;if(r){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return i.call(e,t)?e[t]:void 0}},1327:(t,e,n)=>{var r=n(4536),i=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.t;return r?void 0!==e[t]:i.call(e,t)}},1866:(t,e,n)=>{var r=n(4536);t.exports=function(t,e){var n=this.t;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?"__lodash_hash_undefined__":e,this}},5776:t=>{var e=/^(?:0|[1-9]\d*)$/;t.exports=function(t,n){var r=typeof t;return!!(n=null==n?9007199254740991:n)&&("number"==r||"symbol"!=r&&e.test(t))&&t>-1&&t%1==0&&t<n}},7019:t=>{t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},5346:(t,e,n)=>{var r,i=n(4429),o=(r=/[^.]+$/.exec(i&&i.keys&&i.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(t){return!!o&&o in t}},5726:t=>{var e=Object.prototype;t.exports=function(t){var n=t&&t.constructor;return t===("function"==typeof n&&n.prototype||e)}},7040:t=>{t.exports=function(){this.t=[],this.size=0}},4125:(t,e,n)=>{var r=n(8470),i=Array.prototype.splice;t.exports=function(t){var e=this.t,n=r(e,t);return!(n<0||(n==e.length-1?e.pop():i.call(e,n,1),--this.size,0))}},2117:(t,e,n)=>{var r=n(8470);t.exports=function(t){var e=this.t,n=r(e,t);return n<0?void 0:e[n][1]}},7518:(t,e,n)=>{var r=n(8470);t.exports=function(t){return r(this.t,t)>-1}},4705:(t,e,n)=>{var r=n(8470);t.exports=function(t,e){var n=this.t,i=r(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this}},4785:(t,e,n)=>{var r=n(1989),i=n(8407),o=n(7071);t.exports=function(){this.size=0,this.t={hash:new r,map:new(o||i),string:new r}}},1285:(t,e,n)=>{var r=n(5050);t.exports=function(t){var e=r(this,t).delete(t);return this.size-=e?1:0,e}},6e3:(t,e,n)=>{var r=n(5050);t.exports=function(t){return r(this,t).get(t)}},9916:(t,e,n)=>{var r=n(5050);t.exports=function(t){return r(this,t).has(t)}},5265:(t,e,n)=>{var r=n(5050);t.exports=function(t,e){var n=r(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this}},8776:t=>{t.exports=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}},4536:(t,e,n)=>{var r=n(852)(Object,"create");t.exports=r},6916:(t,e,n)=>{var r=n(5569)(Object.keys,Object);t.exports=r},1167:(t,e,n)=>{t=n.nmd(t);var r=n(1957),i=e&&!e.nodeType&&e,o=i&&t&&!t.nodeType&&t,a=o&&o.exports===i&&r.process,u=function(){try{return o&&o.require&&o.require("util").types||a&&a.binding&&a.binding("util")}catch(t){}}();t.exports=u},2333:t=>{var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},5569:t=>{t.exports=function(t,e){return function(n){return t(e(n))}}},5639:(t,e,n)=>{var r=n(1957),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();t.exports=o},619:t=>{t.exports=function(t){return this.t.set(t,"__lodash_hash_undefined__"),this}},2385:t=>{t.exports=function(t){return this.t.has(t)}},1814:t=>{t.exports=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}},7465:(t,e,n)=>{var r=n(8407);t.exports=function(){this.t=new r,this.size=0}},3779:t=>{t.exports=function(t){var e=this.t,n=e.delete(t);return this.size=e.size,n}},7599:t=>{t.exports=function(t){return this.t.get(t)}},4758:t=>{t.exports=function(t){return this.t.has(t)}},4309:(t,e,n)=>{var r=n(8407),i=n(7071),o=n(3369);t.exports=function(t,e){var n=this.t;if(n instanceof r){var a=n.t;if(!i||a.length<199)return a.push([t,e]),this.size=++n.size,this;n=this.t=new o(a)}return n.set(t,e),this.size=n.size,this}},346:t=>{var e=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return e.call(t)}catch(n){}try{return t+""}catch(n){}}return""}},7813:t=>{t.exports=function(t,e){return t===e||t!=t&&e!=e}},5694:(t,e,n)=>{var r=n(9454),i=n(7005),o=Object.prototype,a=o.hasOwnProperty,u=o.propertyIsEnumerable,c=r(function(){return arguments}())?r:function(t){return i(t)&&a.call(t,"callee")&&!u.call(t,"callee")};t.exports=c},1469:t=>{var e=Array.isArray;t.exports=e},8612:(t,e,n)=>{var r=n(3560),i=n(1780);t.exports=function(t){return null!=t&&i(t.length)&&!r(t)}},4144:(t,e,n)=>{t=n.nmd(t);var r=n(5639),i=n(5062),o=e&&!e.nodeType&&e,a=o&&t&&!t.nodeType&&t,u=a&&a.exports===o?r.Buffer:void 0,c=(u?u.isBuffer:void 0)||i;t.exports=c},8446:(t,e,n)=>{var r=n(939);t.exports=function(t,e){return r(t,e)}},3560:(t,e,n)=>{var r=n(4239),i=n(3218);t.exports=function(t){if(!i(t))return!1;var e=r(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},1780:t=>{t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},3218:t=>{t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},7005:t=>{t.exports=function(t){return null!=t&&"object"==typeof t}},6719:(t,e,n)=>{var r=n(8749),i=n(1717),o=n(1167),a=o&&o.isTypedArray,u=a?i(a):r;t.exports=u},3674:(t,e,n)=>{var r=n(4636),i=n(280),o=n(8612);t.exports=function(t){return o(t)?r(t):i(t)}},479:t=>{t.exports=function(){return[]}},5062:t=>{t.exports=function(){return!1}},75:function(t){(function(){var e,n,r,i,o,a;"undefined"!=typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:"undefined"!=typeof process&&null!==process&&process.hrtime?(t.exports=function(){return(e()-o)/1e6},n=process.hrtime,i=(e=function(){var t;return 1e9*(t=n())[0]+t[1]})(),a=1e9*process.uptime(),o=i-a):Date.now?(t.exports=function(){return Date.now()-r},r=Date.now()):(t.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(this)},4087:(t,e,n)=>{for(var r=n(75),i="undefined"==typeof window?n.g:window,o=["moz","webkit"],a="AnimationFrame",u=i["request"+a],c=i["cancel"+a]||i["cancelRequest"+a],s=0;!u&&s<o.length;s++)u=i[o[s]+"Request"+a],c=i[o[s]+"Cancel"+a]||i[o[s]+"CancelRequest"+a];if(!u||!c){var f=0,l=0,d=[];u=function(t){if(0===d.length){var e=r(),n=Math.max(0,16.666666666666668-(e-f));f=n+e,setTimeout((function(){var t=d.slice(0);d.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(f)}catch(n){setTimeout((function(){throw n}),0)}}),Math.round(n))}return d.push({handle:++l,callback:t,cancelled:!1}),l},c=function(t){for(var e=0;e<d.length;e++)d[e].handle===t&&(d[e].cancelled=!0)}}t.exports=function(t){return u.call(i,t)},t.exports.cancel=function(){c.apply(i,arguments)},t.exports.polyfill=function(t){t||(t=i),t.requestAnimationFrame=u,t.cancelAnimationFrame=c}},8156:e=>{e.exports=t}},n={};function r(t){var i=n[t];if(void 0!==i)return i.exports;var o=n[t]={id:t,loaded:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.n=t=>{var e=t&&t.u?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.nmd=t=>(t.paths=[],t.children||(t.children=[]),t);var i={};return(()=>{r.d(i,{default:()=>v});var t=r(8156),e=r.n(t),n=r(7403),o=r(8446),a=r.n(o);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){return(c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t){var e=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===u(e)?e:String(e)}var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}(h,t);var r,i,o,d,v=(o=h,d=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=f(o);if(d){var n=f(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===u(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return s(t)}(this,t)});function h(){var t,e,n,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,h);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return e=s(t=v.call.apply(v,[this].concat(o))),r={instance:null},(n=l(n="state"))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,t}return r=h,(i=[{key:"componentDidMount",value:function(){var t=this,e=new n.default(this.typewriter,this.props.options);this.setState({instance:e},(function(){var n=t.props.onInit;n&&n(e)}))}},{key:"componentDidUpdate",value:function(t){a()(this.props.options,t.options)||this.setState({instance:new n.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var t=this,n=this.props.component;return e().createElement(n,{ref:function(e){return t.typewriter=e},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&function(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,l(r.key),r)}}(r.prototype,i),Object.defineProperty(r,"prototype",{writable:!1}),h}(t.Component);d.defaultProps={component:"div"};const v=d})(),i.default})())(t)),f=r.div`
    width:600px;
    height: 500px;
`,l=r.div`
  background: ${({theme:t})=>t.card_light};
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
`,d=r.div`
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
`,v=r.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`,h=r.div`
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
`,p=r.div`
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
`,m=r.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({theme:t})=>t.text_primary};
  line-height: 68px;
  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`,b=r.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({theme:t})=>t.text_primary};
  line-height: 68px;
  @media screen and (max-width: 960px) {
    text-align: center;
  }
  @media screen and (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`,y=r.span`
  color: ${({theme:t})=>t.primary};
  cursor: pointer;
`,w=r.div`
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 42px;
  color: ${({theme:t})=>t.text_primary+95};
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
`,x=r.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color:${({theme:t})=>t.white};
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
`,g=r.img`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 50%;
  max-height: 400px;
  max-width: 400px;
  object-fit: cover;
  object-position: center;
  border: 2px solid ${({theme:t})=>t.primary};
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
`,j=i.lazy((()=>o((()=>import("./index-f3c3c719.js")),["assets/index-f3c3c719.js","assets/index-122c3be8.js","assets/index-29a84fde.css","assets/constants-4222bbdc.js"]))),O=Object.freeze(Object.defineProperty({__proto__:null,default:()=>{const{name:t,roles:e,description:n,resume:r,picture:i}=u;return a.jsx("div",{id:"home",children:a.jsxs(l,{children:[a.jsx(d,{children:a.jsx(j,{})}),a.jsxs(v,{children:[a.jsxs(h,{id:"left",children:[a.jsxs(m,{children:["Hi, I am ",a.jsx("br",{}),t]}),a.jsxs(b,{children:["I am a",a.jsx(y,{children:a.jsx(s,{options:{strings:e,autoStart:!0,loop:!0}})})]}),a.jsx(w,{children:n}),a.jsx(x,{href:r,target:"display",children:"Check Resume"})]}),a.jsx(p,{id:"right",children:a.jsx(g,{fetchpriority:"high",src:i,alt:"Me",srcSet:`\n                                ${i} 400w,\n                                ${i} 600w,\n                                ${i} 1024w\n                              `,sizes:"(max-width: 400px) 400px, (max-width: 1024px) 600px, 1024px"})})]})]})})}},Symbol.toStringTag,{value:"Module"}));export{f as D,O as i};
