import{r as R}from"./index.61c5e30b.js";function vt(e,t){return function(){return e.apply(t,arguments)}}const{toString:wt}=Object.prototype,{getPrototypeOf:He}=Object,$e=(e=>t=>{const r=wt.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),k=e=>(e=e.toLowerCase(),t=>$e(t)===e),Re=e=>t=>typeof t===e,{isArray:de}=Array,Ue=Re("undefined");function Kt(e){return e!==null&&!Ue(e)&&e.constructor!==null&&!Ue(e.constructor)&&ee(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const yt=k("ArrayBuffer");function Gt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&yt(e.buffer),t}const Xt=Re("string"),ee=Re("function"),bt=Re("number"),Rt=e=>e!==null&&typeof e=="object",Qt=e=>e===!0||e===!1,we=e=>{if($e(e)!=="object")return!1;const t=He(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Yt=k("Date"),Zt=k("File"),er=k("Blob"),tr=k("FileList"),rr=e=>Rt(e)&&ee(e.pipe),nr=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||wt.call(e)===t||ee(e.toString)&&e.toString()===t)},sr=k("URLSearchParams"),ir=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Se(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,i;if(typeof e!="object"&&(e=[e]),de(e))for(n=0,i=e.length;n<i;n++)t.call(null,e[n],n,e);else{const s=r?Object.getOwnPropertyNames(e):Object.keys(e),o=s.length;let c;for(n=0;n<o;n++)c=s[n],t.call(null,e[c],c,e)}}function Be(){const e={},t=(r,n)=>{we(e[n])&&we(r)?e[n]=Be(e[n],r):we(r)?e[n]=Be({},r):de(r)?e[n]=r.slice():e[n]=r};for(let r=0,n=arguments.length;r<n;r++)arguments[r]&&Se(arguments[r],t);return e}const or=(e,t,r,{allOwnKeys:n}={})=>(Se(t,(i,s)=>{r&&ee(i)?e[s]=vt(i,r):e[s]=i},{allOwnKeys:n}),e),ar=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ur=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},cr=(e,t,r,n)=>{let i,s,o;const c={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),s=i.length;s-- >0;)o=i[s],(!n||n(o,e,t))&&!c[o]&&(t[o]=e[o],c[o]=!0);e=r!==!1&&He(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},fr=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},lr=e=>{if(!e)return null;if(de(e))return e;let t=e.length;if(!bt(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},dr=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&He(Uint8Array)),hr=(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=n.next())&&!i.done;){const s=i.value;t.call(e,s[0],s[1])}},pr=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},mr=k("HTMLFormElement"),Er=e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(r,n,i){return n.toUpperCase()+i}),tt=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),vr=k("RegExp"),St=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};Se(r,(i,s)=>{t(i,s,e)!==!1&&(n[s]=i)}),Object.defineProperties(e,n)},wr=e=>{St(e,(t,r)=>{const n=e[r];if(!!ee(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not read-only method '"+r+"'")})}})},yr=(e,t)=>{const r={},n=i=>{i.forEach(s=>{r[s]=!0})};return de(e)?n(e):n(String(e).split(t)),r},br=()=>{},Rr=(e,t)=>(e=+e,Number.isFinite(e)?e:t),u={isArray:de,isArrayBuffer:yt,isBuffer:Kt,isFormData:nr,isArrayBufferView:Gt,isString:Xt,isNumber:bt,isBoolean:Qt,isObject:Rt,isPlainObject:we,isUndefined:Ue,isDate:Yt,isFile:Zt,isBlob:er,isRegExp:vr,isFunction:ee,isStream:rr,isURLSearchParams:sr,isTypedArray:dr,isFileList:tr,forEach:Se,merge:Be,extend:or,trim:ir,stripBOM:ar,inherits:ur,toFlatObject:cr,kindOf:$e,kindOfTest:k,endsWith:fr,toArray:lr,forEachEntry:hr,matchAll:pr,isHTMLForm:mr,hasOwnProperty:tt,hasOwnProp:tt,reduceDescriptors:St,freezeMethods:wr,toObjectSet:yr,toCamelCase:Er,noop:br,toFiniteNumber:Rr};function w(e,t,r,n,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),i&&(this.response=i)}u.inherits(w,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ot=w.prototype,gt={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{gt[e]={value:e}});Object.defineProperties(w,gt);Object.defineProperty(Ot,"isAxiosError",{value:!0});w.from=(e,t,r,n,i,s)=>{const o=Object.create(Ot);return u.toFlatObject(e,o,function(l){return l!==Error.prototype},c=>c!=="isAxiosError"),w.call(o,e.message,t,r,n,i),o.cause=e,o.name=e.name,s&&Object.assign(o,s),o};var Sr=typeof self=="object"?self.FormData:window.FormData;function Ie(e){return u.isPlainObject(e)||u.isArray(e)}function Tt(e){return u.endsWith(e,"[]")?e.slice(0,-2):e}function rt(e,t,r){return e?e.concat(t).map(function(i,s){return i=Tt(i),!r&&s?"["+i+"]":i}).join(r?".":""):t}function Or(e){return u.isArray(e)&&!e.some(Ie)}const gr=u.toFlatObject(u,{},null,function(t){return/^is[A-Z]/.test(t)});function Tr(e){return e&&u.isFunction(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator]}function Oe(e,t,r){if(!u.isObject(e))throw new TypeError("target must be an object");t=t||new(Sr||FormData),r=u.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,y){return!u.isUndefined(y[v])});const n=r.metaTokens,i=r.visitor||f,s=r.dots,o=r.indexes,l=(r.Blob||typeof Blob<"u"&&Blob)&&Tr(t);if(!u.isFunction(i))throw new TypeError("visitor must be a function");function a(m){if(m===null)return"";if(u.isDate(m))return m.toISOString();if(!l&&u.isBlob(m))throw new w("Blob is not supported. Use a Buffer instead.");return u.isArrayBuffer(m)||u.isTypedArray(m)?l&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function f(m,v,y){let d=m;if(m&&!y&&typeof m=="object"){if(u.endsWith(v,"{}"))v=n?v:v.slice(0,-2),m=JSON.stringify(m);else if(u.isArray(m)&&Or(m)||u.isFileList(m)||u.endsWith(v,"[]")&&(d=u.toArray(m)))return v=Tt(v),d.forEach(function(D,_){!u.isUndefined(D)&&t.append(o===!0?rt([v],_,s):o===null?v:v+"[]",a(D))}),!1}return Ie(m)?!0:(t.append(rt(y,v,s),a(m)),!1)}const E=[],h=Object.assign(gr,{defaultVisitor:f,convertValue:a,isVisitable:Ie});function p(m,v){if(!u.isUndefined(m)){if(E.indexOf(m)!==-1)throw Error("Circular reference detected in "+v.join("."));E.push(m),u.forEach(m,function(d,x){(!u.isUndefined(d)&&i.call(t,d,u.isString(x)?x.trim():x,v,h))===!0&&p(d,v?v.concat(x):[x])}),E.pop()}}if(!u.isObject(e))throw new TypeError("data must be an object");return p(e),t}function nt(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function qe(e,t){this._pairs=[],e&&Oe(e,this,t)}const xt=qe.prototype;xt.append=function(t,r){this._pairs.push([t,r])};xt.toString=function(t){const r=t?function(n){return t.call(this,n,nt)}:nt;return this._pairs.map(function(i){return r(i[0])+"="+r(i[1])},"").join("&")};function xr(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function At(e,t,r){if(!t)return e;const n=e.indexOf("#");n!==-1&&(e=e.slice(0,n));const i=r&&r.encode||xr,s=u.isURLSearchParams(t)?t.toString():new qe(t,r).toString(i);return s&&(e+=(e.indexOf("?")===-1?"?":"&")+s),e}class st{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){u.forEach(this.handlers,function(n){n!==null&&t(n)})}}const Ct={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ar=typeof URLSearchParams<"u"?URLSearchParams:qe,Cr=FormData,Nr=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),M={isBrowser:!0,classes:{URLSearchParams:Ar,FormData:Cr,Blob},isStandardBrowserEnv:Nr,protocols:["http","https","file","blob","url","data"]};function Dr(e,t){return Oe(e,new M.classes.URLSearchParams,Object.assign({visitor:function(r,n,i,s){return M.isNode&&u.isBuffer(r)?(this.append(n,r.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function _r(e){return u.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Pr(e){const t={},r=Object.keys(e);let n;const i=r.length;let s;for(n=0;n<i;n++)s=r[n],t[s]=e[s];return t}function Nt(e){function t(r,n,i,s){let o=r[s++];const c=Number.isFinite(+o),l=s>=r.length;return o=!o&&u.isArray(i)?i.length:o,l?(u.hasOwnProp(i,o)?i[o]=[i[o],n]:i[o]=n,!c):((!i[o]||!u.isObject(i[o]))&&(i[o]=[]),t(r,n,i[o],s)&&u.isArray(i[o])&&(i[o]=Pr(i[o])),!c)}if(u.isFormData(e)&&u.isFunction(e.entries)){const r={};return u.forEachEntry(e,(n,i)=>{t(_r(n),i,r,0)}),r}return null}function Fr(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new w("Request failed with status code "+r.status,[w.ERR_BAD_REQUEST,w.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}const Lr=M.isStandardBrowserEnv?function(){return{write:function(r,n,i,s,o,c){const l=[];l.push(r+"="+encodeURIComponent(n)),u.isNumber(i)&&l.push("expires="+new Date(i).toGMTString()),u.isString(s)&&l.push("path="+s),u.isString(o)&&l.push("domain="+o),c===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(r){const n=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Ur(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Br(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Dt(e,t){return e&&!Ur(t)?Br(e,t):t}const Ir=M.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");let n;function i(s){let o=s;return t&&(r.setAttribute("href",o),o=r.href),r.setAttribute("href",o),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=i(window.location.href),function(o){const c=u.isString(o)?i(o):o;return c.protocol===n.protocol&&c.host===n.host}}():function(){return function(){return!0}}();function he(e,t,r){w.call(this,e??"canceled",w.ERR_CANCELED,t,r),this.name="CanceledError"}u.inherits(he,w,{__CANCEL__:!0});function jr(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}const Mr=u.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),kr=e=>{const t={};let r,n,i;return e&&e.split(`
`).forEach(function(o){i=o.indexOf(":"),r=o.substring(0,i).trim().toLowerCase(),n=o.substring(i+1).trim(),!(!r||t[r]&&Mr[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},it=Symbol("internals"),_t=Symbol("defaults");function ue(e){return e&&String(e).trim().toLowerCase()}function Ee(e){return e===!1||e==null?e:String(e)}function Vr(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}function ot(e,t,r,n){if(u.isFunction(n))return n.call(this,t,r);if(!!u.isString(t)){if(u.isString(n))return t.indexOf(n)!==-1;if(u.isRegExp(n))return n.test(t)}}function Hr(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function $r(e,t){const r=u.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(i,s,o){return this[n].call(this,t,i,s,o)},configurable:!0})})}function ae(e,t){t=t.toLowerCase();const r=Object.keys(e);let n=r.length,i;for(;n-- >0;)if(i=r[n],t===i.toLowerCase())return i;return null}function N(e,t){e&&this.set(e),this[_t]=t||null}Object.assign(N.prototype,{set:function(e,t,r){const n=this;function i(s,o,c){const l=ue(o);if(!l)throw new Error("header name must be a non-empty string");const a=ae(n,l);a&&c!==!0&&(n[a]===!1||c===!1)||(u.isArray(s)?s=s.map(Ee):s=Ee(s),n[a||o]=s)}return u.isPlainObject(e)?u.forEach(e,(s,o)=>{i(s,o,t)}):i(t,e,r),this},get:function(e,t){if(e=ue(e),!e)return;const r=ae(this,e);if(r){const n=this[r];if(!t)return n;if(t===!0)return Vr(n);if(u.isFunction(t))return t.call(this,n,r);if(u.isRegExp(t))return t.exec(n);throw new TypeError("parser must be boolean|regexp|function")}},has:function(e,t){if(e=ue(e),e){const r=ae(this,e);return!!(r&&(!t||ot(this,this[r],r,t)))}return!1},delete:function(e,t){const r=this;let n=!1;function i(s){if(s=ue(s),s){const o=ae(r,s);o&&(!t||ot(r,r[o],o,t))&&(delete r[o],n=!0)}}return u.isArray(e)?e.forEach(i):i(e),n},clear:function(){return Object.keys(this).forEach(this.delete.bind(this))},normalize:function(e){const t=this,r={};return u.forEach(this,(n,i)=>{const s=ae(r,i);if(s){t[s]=Ee(n),delete t[i];return}const o=e?Hr(i):String(i).trim();o!==i&&delete t[i],t[o]=Ee(n),r[o]=!0}),this},toJSON:function(){const e=Object.create(null);return u.forEach(Object.assign({},this[_t]||null,this),(t,r)=>{t==null||t===!1||(e[r]=u.isArray(t)?t.join(", "):t)}),e}});Object.assign(N,{from:function(e){return u.isString(e)?new this(kr(e)):e instanceof this?e:new this(e)},accessor:function(e){const r=(this[it]=this[it]={accessors:{}}).accessors,n=this.prototype;function i(s){const o=ue(s);r[o]||($r(n,s),r[o]=!0)}return u.isArray(e)?e.forEach(i):i(e),this}});N.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);u.freezeMethods(N.prototype);u.freezeMethods(N);function qr(e,t){e=e||10;const r=new Array(e),n=new Array(e);let i=0,s=0,o;return t=t!==void 0?t:1e3,function(l){const a=Date.now(),f=n[s];o||(o=a),r[i]=l,n[i]=a;let E=s,h=0;for(;E!==i;)h+=r[E++],E=E%e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),a-o<t)return;const p=f&&a-f;return p?Math.round(h*1e3/p):void 0}}function at(e,t){let r=0;const n=qr(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,c=s-r,l=n(c),a=s<=o;r=s;const f={loaded:s,total:o,progress:o?s/o:void 0,bytes:c,rate:l||void 0,estimated:l&&o&&a?(o-s)/l:void 0};f[t?"download":"upload"]=!0,e(f)}}function ut(e){return new Promise(function(r,n){let i=e.data;const s=N.from(e.headers).normalize(),o=e.responseType;let c;function l(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}u.isFormData(i)&&M.isStandardBrowserEnv&&s.setContentType(!1);let a=new XMLHttpRequest;if(e.auth){const p=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(p+":"+m))}const f=Dt(e.baseURL,e.url);a.open(e.method.toUpperCase(),At(f,e.params,e.paramsSerializer),!0),a.timeout=e.timeout;function E(){if(!a)return;const p=N.from("getAllResponseHeaders"in a&&a.getAllResponseHeaders()),v={data:!o||o==="text"||o==="json"?a.responseText:a.response,status:a.status,statusText:a.statusText,headers:p,config:e,request:a};Fr(function(d){r(d),l()},function(d){n(d),l()},v),a=null}if("onloadend"in a?a.onloadend=E:a.onreadystatechange=function(){!a||a.readyState!==4||a.status===0&&!(a.responseURL&&a.responseURL.indexOf("file:")===0)||setTimeout(E)},a.onabort=function(){!a||(n(new w("Request aborted",w.ECONNABORTED,e,a)),a=null)},a.onerror=function(){n(new w("Network Error",w.ERR_NETWORK,e,a)),a=null},a.ontimeout=function(){let m=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const v=e.transitional||Ct;e.timeoutErrorMessage&&(m=e.timeoutErrorMessage),n(new w(m,v.clarifyTimeoutError?w.ETIMEDOUT:w.ECONNABORTED,e,a)),a=null},M.isStandardBrowserEnv){const p=(e.withCredentials||Ir(f))&&e.xsrfCookieName&&Lr.read(e.xsrfCookieName);p&&s.set(e.xsrfHeaderName,p)}i===void 0&&s.setContentType(null),"setRequestHeader"in a&&u.forEach(s.toJSON(),function(m,v){a.setRequestHeader(v,m)}),u.isUndefined(e.withCredentials)||(a.withCredentials=!!e.withCredentials),o&&o!=="json"&&(a.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&a.addEventListener("progress",at(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&a.upload&&a.upload.addEventListener("progress",at(e.onUploadProgress)),(e.cancelToken||e.signal)&&(c=p=>{!a||(n(!p||p.type?new he(null,e,a):p),a.abort(),a=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c)));const h=jr(f);if(h&&M.protocols.indexOf(h)===-1){n(new w("Unsupported protocol "+h+":",w.ERR_BAD_REQUEST,e));return}a.send(i||null)})}const ct={http:ut,xhr:ut},ft={getAdapter:e=>{if(u.isString(e)){const t=ct[e];if(!e)throw Error(u.hasOwnProp(e)?`Adapter '${e}' is not available in the build`:`Can not resolve adapter '${e}'`);return t}if(!u.isFunction(e))throw new TypeError("adapter is not a function");return e},adapters:ct},Wr={"Content-Type":"application/x-www-form-urlencoded"};function Jr(){let e;return typeof XMLHttpRequest<"u"?e=ft.getAdapter("xhr"):typeof process<"u"&&u.kindOf(process)==="process"&&(e=ft.getAdapter("http")),e}function zr(e,t,r){if(u.isString(e))try{return(t||JSON.parse)(e),u.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const te={transitional:Ct,adapter:Jr(),transformRequest:[function(t,r){const n=r.getContentType()||"",i=n.indexOf("application/json")>-1,s=u.isObject(t);if(s&&u.isHTMLForm(t)&&(t=new FormData(t)),u.isFormData(t))return i&&i?JSON.stringify(Nt(t)):t;if(u.isArrayBuffer(t)||u.isBuffer(t)||u.isStream(t)||u.isFile(t)||u.isBlob(t))return t;if(u.isArrayBufferView(t))return t.buffer;if(u.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(s){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Dr(t,this.formSerializer).toString();if((c=u.isFileList(t))||n.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Oe(c?{"files[]":t}:t,l&&new l,this.formSerializer)}}return s||i?(r.setContentType("application/json",!1),zr(t)):t}],transformResponse:[function(t){const r=this.transitional||te.transitional,n=r&&r.forcedJSONParsing,i=this.responseType==="json";if(t&&u.isString(t)&&(n&&!this.responseType||i)){const o=!(r&&r.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(c){if(o)throw c.name==="SyntaxError"?w.from(c,w.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:M.classes.FormData,Blob:M.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};u.forEach(["delete","get","head"],function(t){te.headers[t]={}});u.forEach(["post","put","patch"],function(t){te.headers[t]=u.merge(Wr)});function _e(e,t){const r=this||te,n=t||r,i=N.from(n.headers);let s=n.data;return u.forEach(e,function(c){s=c.call(r,s,i.normalize(),t?t.status:void 0)}),i.normalize(),s}function Pt(e){return!!(e&&e.__CANCEL__)}function Pe(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new he}function lt(e){return Pe(e),e.headers=N.from(e.headers),e.data=_e.call(e,e.transformRequest),(e.adapter||te.adapter)(e).then(function(n){return Pe(e),n.data=_e.call(e,e.transformResponse,n),n.headers=N.from(n.headers),n},function(n){return Pt(n)||(Pe(e),n&&n.response&&(n.response.data=_e.call(e,e.transformResponse,n.response),n.response.headers=N.from(n.response.headers))),Promise.reject(n)})}function fe(e,t){t=t||{};const r={};function n(a,f){return u.isPlainObject(a)&&u.isPlainObject(f)?u.merge(a,f):u.isPlainObject(f)?u.merge({},f):u.isArray(f)?f.slice():f}function i(a){if(u.isUndefined(t[a])){if(!u.isUndefined(e[a]))return n(void 0,e[a])}else return n(e[a],t[a])}function s(a){if(!u.isUndefined(t[a]))return n(void 0,t[a])}function o(a){if(u.isUndefined(t[a])){if(!u.isUndefined(e[a]))return n(void 0,e[a])}else return n(void 0,t[a])}function c(a){if(a in t)return n(e[a],t[a]);if(a in e)return n(void 0,e[a])}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:c};return u.forEach(Object.keys(e).concat(Object.keys(t)),function(f){const E=l[f]||i,h=E(f);u.isUndefined(h)&&E!==c||(r[f]=h)}),r}const Ft="1.1.2",We={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{We[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const dt={};We.transitional=function(t,r,n){function i(s,o){return"[Axios v"+Ft+"] Transitional option '"+s+"'"+o+(n?". "+n:"")}return(s,o,c)=>{if(t===!1)throw new w(i(o," has been removed"+(r?" in "+r:"")),w.ERR_DEPRECATED);return r&&!dt[o]&&(dt[o]=!0,console.warn(i(o," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(s,o,c):!0}};function Kr(e,t,r){if(typeof e!="object")throw new w("options must be an object",w.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let i=n.length;for(;i-- >0;){const s=n[i],o=t[s];if(o){const c=e[s],l=c===void 0||o(c,s,e);if(l!==!0)throw new w("option "+s+" must be "+l,w.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new w("Unknown option "+s,w.ERR_BAD_OPTION)}}const Lt={assertOptions:Kr,validators:We},Z=Lt.validators;class X{constructor(t){this.defaults=t,this.interceptors={request:new st,response:new st}}request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=fe(this.defaults,r);const n=r.transitional;n!==void 0&&Lt.assertOptions(n,{silentJSONParsing:Z.transitional(Z.boolean),forcedJSONParsing:Z.transitional(Z.boolean),clarifyTimeoutError:Z.transitional(Z.boolean)},!1),r.method=(r.method||this.defaults.method||"get").toLowerCase();const i=r.headers&&u.merge(r.headers.common,r.headers[r.method]);i&&u.forEach(["delete","get","head","post","put","patch","common"],function(p){delete r.headers[p]}),r.headers=new N(r.headers,i);const s=[];let o=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(r)===!1||(o=o&&p.synchronous,s.unshift(p.fulfilled,p.rejected))});const c=[];this.interceptors.response.forEach(function(p){c.push(p.fulfilled,p.rejected)});let l,a=0,f;if(!o){const h=[lt.bind(this),void 0];for(h.unshift.apply(h,s),h.push.apply(h,c),f=h.length,l=Promise.resolve(r);a<f;)l=l.then(h[a++],h[a++]);return l}f=s.length;let E=r;for(a=0;a<f;){const h=s[a++],p=s[a++];try{E=h(E)}catch(m){p.call(this,m);break}}try{l=lt.call(this,E)}catch(h){return Promise.reject(h)}for(a=0,f=c.length;a<f;)l=l.then(c[a++],c[a++]);return l}getUri(t){t=fe(this.defaults,t);const r=Dt(t.baseURL,t.url);return At(r,t.params,t.paramsSerializer)}}u.forEach(["delete","get","head","options"],function(t){X.prototype[t]=function(r,n){return this.request(fe(n||{},{method:t,url:r,data:(n||{}).data}))}});u.forEach(["post","put","patch"],function(t){function r(n){return function(s,o,c){return this.request(fe(c||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}X.prototype[t]=r(),X.prototype[t+"Form"]=r(!0)});class Je{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(s){r=s});const n=this;this.promise.then(i=>{if(!n._listeners)return;let s=n._listeners.length;for(;s-- >0;)n._listeners[s](i);n._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(c=>{n.subscribe(c),s=c}).then(i);return o.cancel=function(){n.unsubscribe(s)},o},t(function(s,o,c){n.reason||(n.reason=new he(s,o,c),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new Je(function(i){t=i}),cancel:t}}}function Gr(e){return function(r){return e.apply(null,r)}}function Xr(e){return u.isObject(e)&&e.isAxiosError===!0}function Ut(e){const t=new X(e),r=vt(X.prototype.request,t);return u.extend(r,X.prototype,t,{allOwnKeys:!0}),u.extend(r,t,null,{allOwnKeys:!0}),r.create=function(i){return Ut(fe(e,i))},r}const T=Ut(te);T.Axios=X;T.CanceledError=he;T.CancelToken=Je;T.isCancel=Pt;T.VERSION=Ft;T.toFormData=Oe;T.AxiosError=w;T.Cancel=T.CanceledError;T.all=function(t){return Promise.all(t)};T.spread=Gr;T.isAxiosError=Xr;T.formToJSON=e=>Nt(u.isHTMLForm(e)?new FormData(e):e);const An=(...e)=>fetch(...e).then(t=>t.json()),K="607dd9711e27d5eec5db5fac9e8e2414",Cn={NOW_PLAYING:"now_playing",TOP_RATED:"top_rated",TRENDING:"popular",UPCONGMING:"upcoming"},Qr={getMovieList:(e,t=1)=>`https://api.themoviedb.org/3/movie/${e}?api_key=${K}&page=${t}`,getMovieDetail:e=>`https://api.themoviedb.org/3/movie/${e}?api_key=${K}`,getMovieCredit:e=>`https://api.themoviedb.org/3/movie/${e}/credits?api_key=${K}`,getMovieVideo:e=>`https://api.themoviedb.org/3/movie/${e}/videos?api_key=${K}`,getGenreList:()=>`https://api.themoviedb.org/3/genre/movie/list?api_key=${K}`,getMovieWithGenre:e=>`https://api.themoviedb.org/3/discover/movie?api_key=${K}&with_genres=${e}`,getSearch:(e,t=1)=>`https://api.themoviedb.org/3/search/movie?api_key=${K}&query=${e}&page=${t}`,getImage:(e,t="original")=>`https://image.tmdb.org/t/p/${t}/${e}`,getGenreName:e=>{if(ht)return ht[e.toString()]}},Yr=async()=>{try{return(await T.get(Qr.getGenreList()))?.data?.genres||[]}catch(e){console.error(e)}},Zr=e=>{if(!e)return{};console.log("run");var t=e.map(r=>({[r.id]:r.name}));return Object.assign({},...t)},ht=Zr(await Yr());/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Bt(e,t,r,n){function i(s){return s instanceof r?s:new r(function(o){o(s)})}return new(r||(r=Promise))(function(s,o){function c(f){try{a(n.next(f))}catch(E){o(E)}}function l(f){try{a(n.throw(f))}catch(E){o(E)}}function a(f){f.done?s(f.value):i(f.value).then(c,l)}a((n=n.apply(e,t||[])).next())})}function It(e,t){var r={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},n,i,s,o;return o={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(a){return function(f){return l([a,f])}}function l(a){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(s=a[0]&2?i.return:a[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,a[1])).done)return s;switch(i=0,s&&(a=[a[0]&2,s.value]),a[0]){case 0:case 1:s=a;break;case 4:return r.label++,{value:a[1],done:!1};case 5:r.label++,i=a[1],a=[0];continue;case 7:a=r.ops.pop(),r.trys.pop();continue;default:if(s=r.trys,!(s=s.length>0&&s[s.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!s||a[1]>s[0]&&a[1]<s[3])){r.label=a[1];break}if(a[0]===6&&r.label<s[1]){r.label=s[1],s=a;break}if(s&&r.label<s[2]){r.label=s[2],r.ops.push(a);break}s[2]&&r.ops.pop(),r.trys.pop();continue}a=t.call(e,r)}catch(f){a=[6,f],i=0}finally{n=s=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}}var I=function(){},g=I(),ye=Object,O=function(e){return e===g},$=function(e){return typeof e=="function"},q=function(e,t){return ye.assign({},e,t)},ze="undefined",Ke=function(){return typeof window!=ze},en=function(){return typeof document!=ze},tn=function(){return Ke()&&typeof window.requestAnimationFrame!=ze},ve=new WeakMap,rn=0,le=function(e){var t=typeof e,r=e&&e.constructor,n=r==Date,i,s;if(ye(e)===e&&!n&&r!=RegExp){if(i=ve.get(e),i)return i;if(i=++rn+"~",ve.set(e,i),r==Array){for(i="@",s=0;s<e.length;s++)i+=le(e[s])+",";ve.set(e,i)}if(r==ye){i="#";for(var o=ye.keys(e).sort();!O(s=o.pop());)O(e[s])||(i+=s+":"+le(e[s])+",");ve.set(e,i)}}else i=n?e.toJSON():t=="symbol"?e.toString():t=="string"?JSON.stringify(e):""+e;return i},je=!0,nn=function(){return je},jt=Ke(),Ge=en(),Me=jt&&window.addEventListener?window.addEventListener.bind(window):I,sn=Ge?document.addEventListener.bind(document):I,ke=jt&&window.removeEventListener?window.removeEventListener.bind(window):I,on=Ge?document.removeEventListener.bind(document):I,an=function(){var e=Ge&&document.visibilityState;return O(e)||e!=="hidden"},un=function(e){return sn("visibilitychange",e),Me("focus",e),function(){on("visibilitychange",e),ke("focus",e)}},cn=function(e){var t=function(){je=!0,e()},r=function(){je=!1};return Me("online",t),Me("offline",r),function(){ke("online",t),ke("offline",r)}},fn={isOnline:nn,isVisible:an},ln={initFocus:un,initReconnect:cn},ge=!Ke()||"Deno"in window,dn=function(e){return tn()?window.requestAnimationFrame(e):setTimeout(e,1)},be=ge?R.exports.useEffect:R.exports.useLayoutEffect,Fe=typeof navigator<"u"&&navigator.connection,pt=!ge&&Fe&&(["slow-2g","2g"].includes(Fe.effectiveType)||Fe.saveData),Mt=function(e){if($(e))try{e=e()}catch{e=""}var t=[].concat(e);e=typeof e=="string"?e:(Array.isArray(e)?e.length:e)?le(e):"";var r=e?"$swr$"+e:"";return[e,t,r]},G=new WeakMap,kt=0,Vt=1,Ht=2,ce=function(e,t,r,n,i,s,o){o===void 0&&(o=!0);var c=G.get(e),l=c[0],a=c[1],f=c[3],E=l[t],h=a[t];if(o&&h)for(var p=0;p<h.length;++p)h[p](r,n,i);return s&&(delete f[t],E&&E[0])?E[0](Ht).then(function(){return e.get(t)}):e.get(t)},hn=0,Ve=function(){return++hn},$t=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return Bt(void 0,void 0,void 0,function(){var r,n,i,s,o,c,l,a,f,E,h,p,m,v,y,d,x,D,_,L,W;return It(this,function(V){switch(V.label){case 0:if(r=e[0],n=e[1],i=e[2],s=e[3],o=typeof s=="boolean"?{revalidate:s}:s||{},c=O(o.populateCache)?!0:o.populateCache,l=o.revalidate!==!1,a=o.rollbackOnError!==!1,f=o.optimisticData,E=Mt(n),h=E[0],p=E[2],!h)return[2];if(m=G.get(r),v=m[2],e.length<3)return[2,ce(r,h,r.get(h),g,g,l,!0)];if(y=i,x=Ve(),v[h]=[x,0],D=!O(f),_=r.get(h),D&&(L=$(f)?f(_):f,r.set(h,L),ce(r,h,L)),$(y))try{y=y(r.get(h))}catch(J){d=J}return y&&$(y.then)?[4,y.catch(function(J){d=J})]:[3,2];case 1:if(y=V.sent(),x!==v[h][0]){if(d)throw d;return[2,y]}else d&&D&&a&&(c=!0,y=_,r.set(h,_));V.label=2;case 2:return c&&(d||($(c)&&(y=c(y,_)),r.set(h,y)),r.set(p,q(r.get(p),{error:d}))),v[h][1]=Ve(),[4,ce(r,h,y,d,g,l,!!c)];case 3:if(W=V.sent(),d)throw d;return[2,c?W:y]}})})},mt=function(e,t){for(var r in e)e[r][0]&&e[r][0](t)},pn=function(e,t){if(!G.has(e)){var r=q(ln,t),n={},i=$t.bind(g,e),s=I;if(G.set(e,[n,{},{},{},i]),!ge){var o=r.initFocus(setTimeout.bind(g,mt.bind(g,n,kt))),c=r.initReconnect(setTimeout.bind(g,mt.bind(g,n,Vt)));s=function(){o&&o(),c&&c(),G.delete(e)}}return[e,i,s]}return[e,G.get(e)[4]]},mn=function(e,t,r,n,i){var s=r.errorRetryCount,o=i.retryCount,c=~~((Math.random()+.5)*(1<<(o<8?o:8)))*r.errorRetryInterval;!O(s)&&o>s||setTimeout(n,c,i)},qt=pn(new Map),En=qt[0],vn=qt[1],wn=q({onLoadingSlow:I,onSuccess:I,onError:I,onErrorRetry:mn,onDiscarded:I,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:pt?1e4:5e3,focusThrottleInterval:5*1e3,dedupingInterval:2*1e3,loadingTimeout:pt?5e3:3e3,compare:function(e,t){return le(e)==le(t)},isPaused:function(){return!1},cache:En,mutate:vn,fallback:{}},fn),yn=function(e,t){var r=q(e,t);if(t){var n=e.use,i=e.fallback,s=t.use,o=t.fallback;n&&s&&(r.use=n.concat(s)),i&&o&&(r.fallback=q(i,o))}return r},bn=R.exports.createContext({}),Rn=function(e,t){var r=R.exports.useState({})[1],n=R.exports.useRef(e),i=R.exports.useRef({data:!1,error:!1,isValidating:!1}),s=R.exports.useCallback(function(o){var c=!1,l=n.current;for(var a in o){var f=a;l[f]!==o[f]&&(l[f]=o[f],i.current[f]&&(c=!0))}c&&!t.current&&r({})},[]);return be(function(){n.current=e}),[n,i.current,s]},Sn=function(e){return $(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(e[1]===null?e[2]:e[1])||{}]},On=function(){return q(wn,R.exports.useContext(bn))},gn=function(e){return function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var i=On(),s=Sn(r),o=s[0],c=s[1],l=s[2],a=yn(i,l),f=e,E=a.use;if(E)for(var h=E.length;h-- >0;)f=E[h](f);return f(o,c||a.fetcher,a)}},Et=function(e,t,r){var n=t[e]||(t[e]=[]);return n.push(r),function(){var i=n.indexOf(r);i>=0&&(n[i]=n[n.length-1],n.pop())}},Le={dedupe:!0},Tn=function(e,t,r){var n=r.cache,i=r.compare,s=r.fallbackData,o=r.suspense,c=r.revalidateOnMount,l=r.refreshInterval,a=r.refreshWhenHidden,f=r.refreshWhenOffline,E=G.get(n),h=E[0],p=E[1],m=E[2],v=E[3],y=Mt(e),d=y[0],x=y[1],D=y[2],_=R.exports.useRef(!1),L=R.exports.useRef(!1),W=R.exports.useRef(d),V=R.exports.useRef(t),J=R.exports.useRef(r),b=function(){return J.current},Te=function(){return b().isVisible()&&b().isOnline()},pe=function(P){return n.set(D,q(n.get(D),P))},Xe=n.get(d),Wt=O(s)?r.fallback[d]:s,j=O(Xe)?Wt:Xe,Qe=n.get(D)||{},re=Qe.error,Ye=!_.current,Ze=function(){return Ye&&!O(c)?c:b().isPaused()?!1:o?O(j)?!1:r.revalidateIfStale:O(j)||r.revalidateIfStale},Jt=function(){return!d||!t?!1:Qe.isValidating?!0:Ye&&Ze()},xe=Jt(),Ae=Rn({data:j,error:re,isValidating:xe},L),Q=Ae[0],Ce=Ae[1],me=Ae[2],z=R.exports.useCallback(function(P){return Bt(void 0,void 0,void 0,function(){var A,C,F,ne,se,U,S,H,B,Ne,ie,Y,De;return It(this,function(oe){switch(oe.label){case 0:if(A=V.current,!d||!A||L.current||b().isPaused())return[2,!1];ne=!0,se=P||{},U=!v[d]||!se.dedupe,S=function(){return!L.current&&d===W.current&&_.current},H=function(){var et=v[d];et&&et[1]===F&&delete v[d]},B={isValidating:!1},Ne=function(){pe({isValidating:!1}),S()&&me(B)},pe({isValidating:!0}),me({isValidating:!0}),oe.label=1;case 1:return oe.trys.push([1,3,,4]),U&&(ce(n,d,Q.current.data,Q.current.error,!0),r.loadingTimeout&&!n.get(d)&&setTimeout(function(){ne&&S()&&b().onLoadingSlow(d,r)},r.loadingTimeout),v[d]=[A.apply(void 0,x),Ve()]),De=v[d],C=De[0],F=De[1],[4,C];case 2:return C=oe.sent(),U&&setTimeout(H,r.dedupingInterval),!v[d]||v[d][1]!==F?(U&&S()&&b().onDiscarded(d),[2,!1]):(pe({error:g}),B.error=g,ie=m[d],!O(ie)&&(F<=ie[0]||F<=ie[1]||ie[1]===0)?(Ne(),U&&S()&&b().onDiscarded(d),[2,!1]):(i(Q.current.data,C)?B.data=Q.current.data:B.data=C,i(n.get(d),C)||n.set(d,C),U&&S()&&b().onSuccess(C,d,r),[3,4]));case 3:return Y=oe.sent(),H(),b().isPaused()||(pe({error:Y}),B.error=Y,U&&S()&&(b().onError(Y,d,r),(typeof r.shouldRetryOnError=="boolean"&&r.shouldRetryOnError||$(r.shouldRetryOnError)&&r.shouldRetryOnError(Y))&&Te()&&b().onErrorRetry(Y,d,r,z,{retryCount:(se.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return ne=!1,Ne(),S()&&U&&ce(n,d,B.data,B.error,!1),[2,!0]}})})},[d]),zt=R.exports.useCallback($t.bind(g,n,function(){return W.current}),[]);if(be(function(){V.current=t,J.current=r}),be(function(){if(!!d){var P=d!==W.current,A=z.bind(g,Le),C=function(S,H,B){me(q({error:H,isValidating:B},i(Q.current.data,S)?g:{data:S}))},F=0,ne=function(S){if(S==kt){var H=Date.now();b().revalidateOnFocus&&H>F&&Te()&&(F=H+b().focusThrottleInterval,A())}else if(S==Vt)b().revalidateOnReconnect&&Te()&&A();else if(S==Ht)return z()},se=Et(d,p,C),U=Et(d,h,ne);return L.current=!1,W.current=d,_.current=!0,P&&me({data:j,error:re,isValidating:xe}),Ze()&&(O(j)||ge?A():dn(A)),function(){L.current=!0,se(),U()}}},[d,z]),be(function(){var P;function A(){var F=$(l)?l(j):l;F&&P!==-1&&(P=setTimeout(C,F))}function C(){!Q.current.error&&(a||b().isVisible())&&(f||b().isOnline())?z(Le).then(A):A()}return A(),function(){P&&(clearTimeout(P),P=-1)}},[l,a,f,z]),R.exports.useDebugValue(j),o&&O(j)&&d)throw V.current=t,J.current=r,L.current=!1,O(re)?z(Le):re;return{mutate:zt,get data(){return Ce.data=!0,j},get error(){return Ce.error=!0,re},get isValidating(){return Ce.isValidating=!0,xe}}},Nn=gn(Tn);export{Yr as a,An as f,Cn as l,Qr as t,Nn as u};