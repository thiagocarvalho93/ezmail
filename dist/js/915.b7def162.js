(self["webpackChunkezmail"]=self["webpackChunkezmail"]||[]).push([[915],{6230:function(t){t.exports="object"==typeof self?self.FormData:window.FormData},4886:function(t,e,n){"use strict";n.d(e,{EB:function(){return c},Qq:function(){return s},ZB:function(){return a},h7:function(){return i}});var r=n(9582),o=n(5352);const i=(0,o.Ji)("v-card__actions"),s=(0,o.Ji)("v-card__subtitle"),a=(0,o.Ji)("v-card__text"),c=(0,o.Ji)("v-card__title");r.Z},9258:function(t,e,n){"use strict";n.d(e,{Z:function(){return f}});var r=n(7423),o=n(6878),i=n(6669),s=n(1444),a=n(4263),c=n(7678),u=n(5352),l=n(4101),f=(0,c.Z)(r.Z,o.Z,s.Z,(0,a.d)(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:t=>"string"===typeof t||!1===t},vertical:Boolean},data:()=>({activeTimeout:-1}),computed:{classes(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground(){return!this.text&&!this.outlined},isDark(){return this.hasBackground?!this.light:i.Z.options.computed.isDark.call(this)},styles(){if(this.absolute||!this.app)return{};const{bar:t,bottom:e,footer:n,insetFooter:r,left:o,right:i,top:s}=this.$vuetify.application;return{paddingBottom:(0,u.kb)(e+n+r),paddingLeft:(0,u.kb)(o),paddingRight:(0,u.kb)(i),paddingTop:(0,u.kb)(t+s)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted(){this.isActive&&this.setTimeout()},created(){this.$attrs.hasOwnProperty("auto-height")&&(0,l.Jk)("auto-height",this),0==this.timeout&&(0,l.Rn)('timeout="0"',"-1",this)},methods:{genActions(){return this.$createElement("div",{staticClass:"v-snack__action "},[(0,u.z9)(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent(){return this.$createElement("div",{staticClass:"v-snack__content",class:{[this.contentClass]:!0},attrs:{role:"status","aria-live":"polite"}},[(0,u.z9)(this)])},genWrapper(){const t=this.hasBackground?this.setBackgroundColor:this.setTextColor,e=t(this.color,{staticClass:"v-snack__wrapper",class:r.Z.options.computed.classes.call(this),style:r.Z.options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{pointerenter:()=>window.clearTimeout(this.activeTimeout),pointerleave:this.setTimeout}});return this.$createElement("div",e,[this.genContent(),this.genActions()])},genTransition(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout(){window.clearTimeout(this.activeTimeout);const t=Number(this.timeout);this.isActive&&![0,-1].includes(t)&&(this.activeTimeout=window.setTimeout((()=>{this.isActive=!1}),t))}},render(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})},1110:function(t,e,n){"use strict";function r(t,e){return function(){return t.apply(e,arguments)}}n.d(e,{Z:function(){return Ie}});const{toString:o}=Object.prototype,{getPrototypeOf:i}=Object,s=(t=>e=>{const n=o.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),a=t=>(t=t.toLowerCase(),e=>s(e)===t),c=t=>e=>typeof e===t,{isArray:u}=Array,l=c("undefined");function f(t){return null!==t&&!l(t)&&null!==t.constructor&&!l(t.constructor)&&m(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const d=a("ArrayBuffer");function h(t){let e;return e="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&d(t.buffer),e}const p=c("string"),m=c("function"),y=c("number"),b=t=>null!==t&&"object"===typeof t,g=t=>!0===t||!1===t,w=t=>{if("object"!==s(t))return!1;const e=i(t);return(null===e||e===Object.prototype||null===Object.getPrototypeOf(e))&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},E=a("Date"),v=a("File"),O=a("Blob"),S=a("FileList"),R=t=>b(t)&&m(t.pipe),T=t=>{const e="[object FormData]";return t&&("function"===typeof FormData&&t instanceof FormData||o.call(t)===e||m(t.toString)&&t.toString()===e)},A=a("URLSearchParams"),C=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function N(t,e,{allOwnKeys:n=!1}={}){if(null===t||"undefined"===typeof t)return;let r,o;if("object"!==typeof t&&(t=[t]),u(t))for(r=0,o=t.length;r<o;r++)e.call(null,t[r],r,t);else{const o=n?Object.getOwnPropertyNames(t):Object.keys(t),i=o.length;let s;for(r=0;r<i;r++)s=o[r],e.call(null,t[s],s,t)}}function x(t,e){e=e.toLowerCase();const n=Object.keys(t);let r,o=n.length;while(o-- >0)if(r=n[o],e===r.toLowerCase())return r;return null}const j=(()=>"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global)(),k=t=>!l(t)&&t!==j;function P(){const{caseless:t}=k(this)&&this||{},e={},n=(n,r)=>{const o=t&&x(e,r)||r;w(e[o])&&w(n)?e[o]=P(e[o],n):w(n)?e[o]=P({},n):u(n)?e[o]=n.slice():e[o]=n};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&N(arguments[r],n);return e}const _=(t,e,n,{allOwnKeys:o}={})=>(N(e,((e,o)=>{n&&m(e)?t[o]=r(e,n):t[o]=e}),{allOwnKeys:o}),t),B=t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),U=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},D=(t,e,n,r)=>{let o,s,a;const c={};if(e=e||{},null==t)return e;do{o=Object.getOwnPropertyNames(t),s=o.length;while(s-- >0)a=o[s],r&&!r(a,t,e)||c[a]||(e[a]=t[a],c[a]=!0);t=!1!==n&&i(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},F=(t,e,n)=>{t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return-1!==r&&r===n},L=t=>{if(!t)return null;if(u(t))return t;let e=t.length;if(!y(e))return null;const n=new Array(e);while(e-- >0)n[e]=t[e];return n},q=(t=>e=>t&&e instanceof t)("undefined"!==typeof Uint8Array&&i(Uint8Array)),z=(t,e)=>{const n=t&&t[Symbol.iterator],r=n.call(t);let o;while((o=r.next())&&!o.done){const n=o.value;e.call(t,n[0],n[1])}},M=(t,e)=>{let n;const r=[];while(null!==(n=t.exec(e)))r.push(n);return r},I=a("HTMLFormElement"),J=t=>t.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(t,e,n){return e.toUpperCase()+n})),$=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),H=a("RegExp"),W=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};N(n,((n,o)=>{!1!==e(n,o,t)&&(r[o]=n)})),Object.defineProperties(t,r)},K=t=>{W(t,((e,n)=>{if(m(t)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=t[n];m(r)&&(e.enumerable=!1,"writable"in e?e.writable=!1:e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},V=(t,e)=>{const n={},r=t=>{t.forEach((t=>{n[t]=!0}))};return u(t)?r(t):r(String(t).split(e)),n},Z=()=>{},G=(t,e)=>(t=+t,Number.isFinite(t)?t:e),X=t=>{const e=new Array(10),n=(t,r)=>{if(b(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[r]=t;const o=u(t)?[]:{};return N(t,((t,e)=>{const i=n(t,r+1);!l(i)&&(o[e]=i)})),e[r]=void 0,o}}return t};return n(t,0)};var Q={isArray:u,isArrayBuffer:d,isBuffer:f,isFormData:T,isArrayBufferView:h,isString:p,isNumber:y,isBoolean:g,isObject:b,isPlainObject:w,isUndefined:l,isDate:E,isFile:v,isBlob:O,isRegExp:H,isFunction:m,isStream:R,isURLSearchParams:A,isTypedArray:q,isFileList:S,forEach:N,merge:P,extend:_,trim:C,stripBOM:B,inherits:U,toFlatObject:D,kindOf:s,kindOfTest:a,endsWith:F,toArray:L,forEachEntry:z,matchAll:M,isHTMLForm:I,hasOwnProperty:$,hasOwnProp:$,reduceDescriptors:W,freezeMethods:K,toObjectSet:V,toCamelCase:J,noop:Z,toFiniteNumber:G,findKey:x,global:j,isContextDefined:k,toJSONObject:X};function Y(t,e,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}Q.inherits(Y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Q.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const tt=Y.prototype,et={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((t=>{et[t]={value:t}})),Object.defineProperties(Y,et),Object.defineProperty(tt,"isAxiosError",{value:!0}),Y.from=(t,e,n,r,o,i)=>{const s=Object.create(tt);return Q.toFlatObject(t,s,(function(t){return t!==Error.prototype}),(t=>"isAxiosError"!==t)),Y.call(s,t.message,e,n,r,o),s.cause=t,s.name=t.name,i&&Object.assign(s,i),s};var nt=Y,rt=n(6230),ot=rt;function it(t){return Q.isPlainObject(t)||Q.isArray(t)}function st(t){return Q.endsWith(t,"[]")?t.slice(0,-2):t}function at(t,e,n){return t?t.concat(e).map((function(t,e){return t=st(t),!n&&e?"["+t+"]":t})).join(n?".":""):e}function ct(t){return Q.isArray(t)&&!t.some(it)}const ut=Q.toFlatObject(Q,{},null,(function(t){return/^is[A-Z]/.test(t)}));function lt(t){return t&&Q.isFunction(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator]}function ft(t,e,n){if(!Q.isObject(t))throw new TypeError("target must be an object");e=e||new(ot||FormData),n=Q.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(t,e){return!Q.isUndefined(e[t])}));const r=n.metaTokens,o=n.visitor||l,i=n.dots,s=n.indexes,a=n.Blob||"undefined"!==typeof Blob&&Blob,c=a&&lt(e);if(!Q.isFunction(o))throw new TypeError("visitor must be a function");function u(t){if(null===t)return"";if(Q.isDate(t))return t.toISOString();if(!c&&Q.isBlob(t))throw new nt("Blob is not supported. Use a Buffer instead.");return Q.isArrayBuffer(t)||Q.isTypedArray(t)?c&&"function"===typeof Blob?new Blob([t]):Buffer.from(t):t}function l(t,n,o){let a=t;if(t&&!o&&"object"===typeof t)if(Q.endsWith(n,"{}"))n=r?n:n.slice(0,-2),t=JSON.stringify(t);else if(Q.isArray(t)&&ct(t)||Q.isFileList(t)||Q.endsWith(n,"[]")&&(a=Q.toArray(t)))return n=st(n),a.forEach((function(t,r){!Q.isUndefined(t)&&null!==t&&e.append(!0===s?at([n],r,i):null===s?n:n+"[]",u(t))})),!1;return!!it(t)||(e.append(at(o,n,i),u(t)),!1)}const f=[],d=Object.assign(ut,{defaultVisitor:l,convertValue:u,isVisitable:it});function h(t,n){if(!Q.isUndefined(t)){if(-1!==f.indexOf(t))throw Error("Circular reference detected in "+n.join("."));f.push(t),Q.forEach(t,(function(t,r){const i=!(Q.isUndefined(t)||null===t)&&o.call(e,t,Q.isString(r)?r.trim():r,n,d);!0===i&&h(t,n?n.concat(r):[r])})),f.pop()}}if(!Q.isObject(t))throw new TypeError("data must be an object");return h(t),e}var dt=ft;function ht(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,(function(t){return e[t]}))}function pt(t,e){this._pairs=[],t&&dt(t,this,e)}const mt=pt.prototype;mt.append=function(t,e){this._pairs.push([t,e])},mt.toString=function(t){const e=t?function(e){return t.call(this,e,ht)}:ht;return this._pairs.map((function(t){return e(t[0])+"="+e(t[1])}),"").join("&")};var yt=pt;function bt(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function gt(t,e,n){if(!e)return t;const r=n&&n.encode||bt,o=n&&n.serialize;let i;if(i=o?o(e,n):Q.isURLSearchParams(e)?e.toString():new yt(e,n).toString(r),i){const e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+i}return t}class wt{constructor(){this.handlers=[]}use(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){Q.forEach(this.handlers,(function(e){null!==e&&t(e)}))}}var Et=wt,vt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ot="undefined"!==typeof URLSearchParams?URLSearchParams:yt,St=FormData;const Rt=(()=>{let t;return("undefined"===typeof navigator||"ReactNative"!==(t=navigator.product)&&"NativeScript"!==t&&"NS"!==t)&&("undefined"!==typeof window&&"undefined"!==typeof document)})(),Tt=(()=>"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts)();var At={isBrowser:!0,classes:{URLSearchParams:Ot,FormData:St,Blob:Blob},isStandardBrowserEnv:Rt,isStandardBrowserWebWorkerEnv:Tt,protocols:["http","https","file","blob","url","data"]};function Ct(t,e){return dt(t,new At.classes.URLSearchParams,Object.assign({visitor:function(t,e,n,r){return At.isNode&&Q.isBuffer(t)?(this.append(e,t.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},e))}function Nt(t){return Q.matchAll(/\w+|\[(\w*)]/g,t).map((t=>"[]"===t[0]?"":t[1]||t[0]))}function xt(t){const e={},n=Object.keys(t);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],e[i]=t[i];return e}function jt(t){function e(t,n,r,o){let i=t[o++];const s=Number.isFinite(+i),a=o>=t.length;if(i=!i&&Q.isArray(r)?r.length:i,a)return Q.hasOwnProp(r,i)?r[i]=[r[i],n]:r[i]=n,!s;r[i]&&Q.isObject(r[i])||(r[i]=[]);const c=e(t,n,r[i],o);return c&&Q.isArray(r[i])&&(r[i]=xt(r[i])),!s}if(Q.isFormData(t)&&Q.isFunction(t.entries)){const n={};return Q.forEachEntry(t,((t,r)=>{e(Nt(t),r,n,0)})),n}return null}var kt=jt;const Pt={"Content-Type":void 0};function _t(t,e,n){if(Q.isString(t))try{return(e||JSON.parse)(t),Q.trim(t)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(t)}const Bt={transitional:vt,adapter:["xhr","http"],transformRequest:[function(t,e){const n=e.getContentType()||"",r=n.indexOf("application/json")>-1,o=Q.isObject(t);o&&Q.isHTMLForm(t)&&(t=new FormData(t));const i=Q.isFormData(t);if(i)return r&&r?JSON.stringify(kt(t)):t;if(Q.isArrayBuffer(t)||Q.isBuffer(t)||Q.isStream(t)||Q.isFile(t)||Q.isBlob(t))return t;if(Q.isArrayBufferView(t))return t.buffer;if(Q.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Ct(t,this.formSerializer).toString();if((s=Q.isFileList(t))||n.indexOf("multipart/form-data")>-1){const e=this.env&&this.env.FormData;return dt(s?{"files[]":t}:t,e&&new e,this.formSerializer)}}return o||r?(e.setContentType("application/json",!1),_t(t)):t}],transformResponse:[function(t){const e=this.transitional||Bt.transitional,n=e&&e.forcedJSONParsing,r="json"===this.responseType;if(t&&Q.isString(t)&&(n&&!this.responseType||r)){const n=e&&e.silentJSONParsing,i=!n&&r;try{return JSON.parse(t)}catch(o){if(i){if("SyntaxError"===o.name)throw nt.from(o,nt.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:At.classes.FormData,Blob:At.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};Q.forEach(["delete","get","head"],(function(t){Bt.headers[t]={}})),Q.forEach(["post","put","patch"],(function(t){Bt.headers[t]=Q.merge(Pt)}));var Ut=Bt;const Dt=Q.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var Ft=t=>{const e={};let n,r,o;return t&&t.split("\n").forEach((function(t){o=t.indexOf(":"),n=t.substring(0,o).trim().toLowerCase(),r=t.substring(o+1).trim(),!n||e[n]&&Dt[n]||("set-cookie"===n?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)})),e};const Lt=Symbol("internals");function qt(t){return t&&String(t).trim().toLowerCase()}function zt(t){return!1===t||null==t?t:Q.isArray(t)?t.map(zt):String(t)}function Mt(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;while(r=n.exec(t))e[r[1]]=r[2];return e}function It(t){return/^[-_a-zA-Z]+$/.test(t.trim())}function Jt(t,e,n,r){return Q.isFunction(r)?r.call(this,e,n):Q.isString(e)?Q.isString(r)?-1!==e.indexOf(r):Q.isRegExp(r)?r.test(e):void 0:void 0}function $t(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((t,e,n)=>e.toUpperCase()+n))}function Ht(t,e){const n=Q.toCamelCase(" "+e);["get","set","has"].forEach((r=>{Object.defineProperty(t,r+n,{value:function(t,n,o){return this[r].call(this,e,t,n,o)},configurable:!0})}))}class Wt{constructor(t){t&&this.set(t)}set(t,e,n){const r=this;function o(t,e,n){const o=qt(e);if(!o)throw new Error("header name must be a non-empty string");const i=Q.findKey(r,o);(!i||void 0===r[i]||!0===n||void 0===n&&!1!==r[i])&&(r[i||e]=zt(t))}const i=(t,e)=>Q.forEach(t,((t,n)=>o(t,n,e)));return Q.isPlainObject(t)||t instanceof this.constructor?i(t,e):Q.isString(t)&&(t=t.trim())&&!It(t)?i(Ft(t),e):null!=t&&o(e,t,n),this}get(t,e){if(t=qt(t),t){const n=Q.findKey(this,t);if(n){const t=this[n];if(!e)return t;if(!0===e)return Mt(t);if(Q.isFunction(e))return e.call(this,t,n);if(Q.isRegExp(e))return e.exec(t);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=qt(t),t){const n=Q.findKey(this,t);return!(!n||e&&!Jt(this,this[n],n,e))}return!1}delete(t,e){const n=this;let r=!1;function o(t){if(t=qt(t),t){const o=Q.findKey(n,t);!o||e&&!Jt(n,n[o],o,e)||(delete n[o],r=!0)}}return Q.isArray(t)?t.forEach(o):o(t),r}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(t){const e=this,n={};return Q.forEach(this,((r,o)=>{const i=Q.findKey(n,o);if(i)return e[i]=zt(r),void delete e[o];const s=t?$t(o):String(o).trim();s!==o&&delete e[o],e[s]=zt(r),n[s]=!0})),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return Q.forEach(this,((n,r)=>{null!=n&&!1!==n&&(e[r]=t&&Q.isArray(n)?n.join(", "):n)})),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([t,e])=>t+": "+e)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const n=new this(t);return e.forEach((t=>n.set(t))),n}static accessor(t){const e=this[Lt]=this[Lt]={accessors:{}},n=e.accessors,r=this.prototype;function o(t){const e=qt(t);n[e]||(Ht(r,t),n[e]=!0)}return Q.isArray(t)?t.forEach(o):o(t),this}}Wt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),Q.freezeMethods(Wt.prototype),Q.freezeMethods(Wt);var Kt=Wt;function Vt(t,e){const n=this||Ut,r=e||n,o=Kt.from(r.headers);let i=r.data;return Q.forEach(t,(function(t){i=t.call(n,i,o.normalize(),e?e.status:void 0)})),o.normalize(),i}function Zt(t){return!(!t||!t.__CANCEL__)}function Gt(t,e,n){nt.call(this,null==t?"canceled":t,nt.ERR_CANCELED,e,n),this.name="CanceledError"}Q.inherits(Gt,nt,{__CANCEL__:!0});var Xt=Gt,Qt=null;function Yt(t,e,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?e(new nt("Request failed with status code "+n.status,[nt.ERR_BAD_REQUEST,nt.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):t(n)}var te=At.isStandardBrowserEnv?function(){return{write:function(t,e,n,r,o,i){const s=[];s.push(t+"="+encodeURIComponent(e)),Q.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),Q.isString(r)&&s.push("path="+r),Q.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function ee(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function ne(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function re(t,e){return t&&!ee(e)?ne(t,e):e}var oe=At.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");let n;function r(n){let r=n;return t&&(e.setAttribute("href",r),r=e.href),e.setAttribute("href",r),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname}}return n=r(window.location.href),function(t){const e=Q.isString(t)?r(t):t;return e.protocol===n.protocol&&e.host===n.host}}():function(){return function(){return!0}}();function ie(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function se(t,e){t=t||10;const n=new Array(t),r=new Array(t);let o,i=0,s=0;return e=void 0!==e?e:1e3,function(a){const c=Date.now(),u=r[s];o||(o=c),n[i]=a,r[i]=c;let l=s,f=0;while(l!==i)f+=n[l++],l%=t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),c-o<e)return;const d=u&&c-u;return d?Math.round(1e3*f/d):void 0}}var ae=se;function ce(t,e){let n=0;const r=ae(50,250);return o=>{const i=o.loaded,s=o.lengthComputable?o.total:void 0,a=i-n,c=r(a),u=i<=s;n=i;const l={loaded:i,total:s,progress:s?i/s:void 0,bytes:a,rate:c||void 0,estimated:c&&s&&u?(s-i)/c:void 0,event:o};l[e?"download":"upload"]=!0,t(l)}}const ue="undefined"!==typeof XMLHttpRequest;var le=ue&&function(t){return new Promise((function(e,n){let r=t.data;const o=Kt.from(t.headers).normalize(),i=t.responseType;let s;function a(){t.cancelToken&&t.cancelToken.unsubscribe(s),t.signal&&t.signal.removeEventListener("abort",s)}Q.isFormData(r)&&(At.isStandardBrowserEnv||At.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let c=new XMLHttpRequest;if(t.auth){const e=t.auth.username||"",n=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";o.set("Authorization","Basic "+btoa(e+":"+n))}const u=re(t.baseURL,t.url);function l(){if(!c)return;const r=Kt.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),o=i&&"text"!==i&&"json"!==i?c.response:c.responseText,s={data:o,status:c.status,statusText:c.statusText,headers:r,config:t,request:c};Yt((function(t){e(t),a()}),(function(t){n(t),a()}),s),c=null}if(c.open(t.method.toUpperCase(),gt(u,t.params,t.paramsSerializer),!0),c.timeout=t.timeout,"onloadend"in c?c.onloadend=l:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(l)},c.onabort=function(){c&&(n(new nt("Request aborted",nt.ECONNABORTED,t,c)),c=null)},c.onerror=function(){n(new nt("Network Error",nt.ERR_NETWORK,t,c)),c=null},c.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const r=t.transitional||vt;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(new nt(e,r.clarifyTimeoutError?nt.ETIMEDOUT:nt.ECONNABORTED,t,c)),c=null},At.isStandardBrowserEnv){const e=(t.withCredentials||oe(u))&&t.xsrfCookieName&&te.read(t.xsrfCookieName);e&&o.set(t.xsrfHeaderName,e)}void 0===r&&o.setContentType(null),"setRequestHeader"in c&&Q.forEach(o.toJSON(),(function(t,e){c.setRequestHeader(e,t)})),Q.isUndefined(t.withCredentials)||(c.withCredentials=!!t.withCredentials),i&&"json"!==i&&(c.responseType=t.responseType),"function"===typeof t.onDownloadProgress&&c.addEventListener("progress",ce(t.onDownloadProgress,!0)),"function"===typeof t.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",ce(t.onUploadProgress)),(t.cancelToken||t.signal)&&(s=e=>{c&&(n(!e||e.type?new Xt(null,t,c):e),c.abort(),c=null)},t.cancelToken&&t.cancelToken.subscribe(s),t.signal&&(t.signal.aborted?s():t.signal.addEventListener("abort",s)));const f=ie(u);f&&-1===At.protocols.indexOf(f)?n(new nt("Unsupported protocol "+f+":",nt.ERR_BAD_REQUEST,t)):c.send(r||null)}))};const fe={http:Qt,xhr:le};Q.forEach(fe,((t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(n){}Object.defineProperty(t,"adapterName",{value:e})}}));var de={getAdapter:t=>{t=Q.isArray(t)?t:[t];const{length:e}=t;let n,r;for(let o=0;o<e;o++)if(n=t[o],r=Q.isString(n)?fe[n.toLowerCase()]:n)break;if(!r){if(!1===r)throw new nt(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(Q.hasOwnProp(fe,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!Q.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:fe};function he(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Xt(null,t)}function pe(t){he(t),t.headers=Kt.from(t.headers),t.data=Vt.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);const e=de.getAdapter(t.adapter||Ut.adapter);return e(t).then((function(e){return he(t),e.data=Vt.call(t,t.transformResponse,e),e.headers=Kt.from(e.headers),e}),(function(e){return Zt(e)||(he(t),e&&e.response&&(e.response.data=Vt.call(t,t.transformResponse,e.response),e.response.headers=Kt.from(e.response.headers))),Promise.reject(e)}))}const me=t=>t instanceof Kt?t.toJSON():t;function ye(t,e){e=e||{};const n={};function r(t,e,n){return Q.isPlainObject(t)&&Q.isPlainObject(e)?Q.merge.call({caseless:n},t,e):Q.isPlainObject(e)?Q.merge({},e):Q.isArray(e)?e.slice():e}function o(t,e,n){return Q.isUndefined(e)?Q.isUndefined(t)?void 0:r(void 0,t,n):r(t,e,n)}function i(t,e){if(!Q.isUndefined(e))return r(void 0,e)}function s(t,e){return Q.isUndefined(e)?Q.isUndefined(t)?void 0:r(void 0,t):r(void 0,e)}function a(n,o,i){return i in e?r(n,o):i in t?r(void 0,n):void 0}const c={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(t,e)=>o(me(t),me(e),!0)};return Q.forEach(Object.keys(t).concat(Object.keys(e)),(function(r){const i=c[r]||o,s=i(t[r],e[r],r);Q.isUndefined(s)&&i!==a||(n[r]=s)})),n}const be="1.2.3",ge={};["object","boolean","number","function","string","symbol"].forEach(((t,e)=>{ge[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));const we={};function Ee(t,e,n){if("object"!==typeof t)throw new nt("options must be an object",nt.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let o=r.length;while(o-- >0){const i=r[o],s=e[i];if(s){const e=t[i],n=void 0===e||s(e,i,t);if(!0!==n)throw new nt("option "+i+" must be "+n,nt.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new nt("Unknown option "+i,nt.ERR_BAD_OPTION)}}ge.transitional=function(t,e,n){function r(t,e){return"[Axios v"+be+"] Transitional option '"+t+"'"+e+(n?". "+n:"")}return(n,o,i)=>{if(!1===t)throw new nt(r(o," has been removed"+(e?" in "+e:"")),nt.ERR_DEPRECATED);return e&&!we[o]&&(we[o]=!0,console.warn(r(o," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,o,i)}};var ve={assertOptions:Ee,validators:ge};const Oe=ve.validators;class Se{constructor(t){this.defaults=t,this.interceptors={request:new Et,response:new Et}}request(t,e){"string"===typeof t?(e=e||{},e.url=t):e=t||{},e=ye(this.defaults,e);const{transitional:n,paramsSerializer:r,headers:o}=e;let i;void 0!==n&&ve.assertOptions(n,{silentJSONParsing:Oe.transitional(Oe.boolean),forcedJSONParsing:Oe.transitional(Oe.boolean),clarifyTimeoutError:Oe.transitional(Oe.boolean)},!1),void 0!==r&&ve.assertOptions(r,{encode:Oe.function,serialize:Oe.function},!0),e.method=(e.method||this.defaults.method||"get").toLowerCase(),i=o&&Q.merge(o.common,o[e.method]),i&&Q.forEach(["delete","get","head","post","put","patch","common"],(t=>{delete o[t]})),e.headers=Kt.concat(i,o);const s=[];let a=!0;this.interceptors.request.forEach((function(t){"function"===typeof t.runWhen&&!1===t.runWhen(e)||(a=a&&t.synchronous,s.unshift(t.fulfilled,t.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(t){c.push(t.fulfilled,t.rejected)}));let l,f=0;if(!a){const t=[pe.bind(this),void 0];t.unshift.apply(t,s),t.push.apply(t,c),l=t.length,u=Promise.resolve(e);while(f<l)u=u.then(t[f++],t[f++]);return u}l=s.length;let d=e;f=0;while(f<l){const t=s[f++],e=s[f++];try{d=t(d)}catch(h){e.call(this,h);break}}try{u=pe.call(this,d)}catch(h){return Promise.reject(h)}f=0,l=c.length;while(f<l)u=u.then(c[f++],c[f++]);return u}getUri(t){t=ye(this.defaults,t);const e=re(t.baseURL,t.url);return gt(e,t.params,t.paramsSerializer)}}Q.forEach(["delete","get","head","options"],(function(t){Se.prototype[t]=function(e,n){return this.request(ye(n||{},{method:t,url:e,data:(n||{}).data}))}})),Q.forEach(["post","put","patch"],(function(t){function e(e){return function(n,r,o){return this.request(ye(o||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Se.prototype[t]=e(),Se.prototype[t+"Form"]=e(!0)}));var Re=Se;class Te{constructor(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");let e;this.promise=new Promise((function(t){e=t}));const n=this;this.promise.then((t=>{if(!n._listeners)return;let e=n._listeners.length;while(e-- >0)n._listeners[e](t);n._listeners=null})),this.promise.then=t=>{let e;const r=new Promise((t=>{n.subscribe(t),e=t})).then(t);return r.cancel=function(){n.unsubscribe(e)},r},t((function(t,r,o){n.reason||(n.reason=new Xt(t,r,o),e(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}static source(){let t;const e=new Te((function(e){t=e}));return{token:e,cancel:t}}}var Ae=Te;function Ce(t){return function(e){return t.apply(null,e)}}function Ne(t){return Q.isObject(t)&&!0===t.isAxiosError}const xe={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(xe).forEach((([t,e])=>{xe[e]=t}));var je=xe;function ke(t){const e=new Re(t),n=r(Re.prototype.request,e);return Q.extend(n,Re.prototype,e,{allOwnKeys:!0}),Q.extend(n,e,null,{allOwnKeys:!0}),n.create=function(e){return ke(ye(t,e))},n}const Pe=ke(Ut);Pe.Axios=Re,Pe.CanceledError=Xt,Pe.CancelToken=Ae,Pe.isCancel=Zt,Pe.VERSION=be,Pe.toFormData=dt,Pe.AxiosError=nt,Pe.Cancel=Pe.CanceledError,Pe.all=function(t){return Promise.all(t)},Pe.spread=Ce,Pe.isAxiosError=Ne,Pe.mergeConfig=ye,Pe.AxiosHeaders=Kt,Pe.formToJSON=t=>kt(Q.isHTMLForm(t)?new FormData(t):t),Pe.HttpStatusCode=je,Pe.default=Pe;var _e=Pe;const Be=_e.create({baseURL:"https://63c82060075b3f3a91dacb71.mockapi.io/api/v1/"});var Ue=Be;const De="/email",Fe=async()=>{try{const t=await Ue.get(De);return t}catch(t){return t.response}},Le=async t=>{try{const e=await Ue.get(`${De}/${t}`);return e}catch(e){return e.response}},qe=async t=>{try{const e=await Ue.post(De,t);return e}catch(e){return e.response}},ze=async(t,e)=>{try{const n=await Ue.put(`${De}/${t}`,e);return n}catch(n){return n.response}},Me=async t=>{try{const e=await Ue["delete"](`${De}/${t}`);return e}catch(e){return e.response}};var Ie={cadastrar:qe,atualizar:ze,deletar:Me,obterPorId:Le,obterTodos:Fe}},9007:function(t,e,n){"use strict";function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function i(t){var e=o(t,"string");return"symbol"===r(e)?e:String(e)}function s(t,e,n){return e=i(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,{Z:function(){return a}});class a{constructor(t){s(this,"converterTimestampParaData",(()=>{this.data=new Date(this.data).toLocaleDateString()})),t=t||{},this.id=t.id,this.endereco=t.endereco||"",this.assunto=t.assunto||"",this.corpoEmail=t.corpoEmail||"",this.data=t.data,this.lido=t.lido||!1,this.favorito=t.favorito||!1,this.importante=t.importante||!1,this.recebido=t.recebido||!1,this.lixeira=t.lixeira||!1,this.rascunho=t.rascunho||!1,this.avatar=t.avatar||""}}}}]);
//# sourceMappingURL=915.b7def162.js.map