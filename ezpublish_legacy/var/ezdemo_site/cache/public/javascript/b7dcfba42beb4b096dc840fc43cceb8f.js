
function insertMedia()
{
for( var k = 0, l = arguments.length; k < l; k++ )
{
document.write( arguments[k] );
}
}
typeof YUI!="undefined"&&(YUI._YUI=YUI);var YUI=function(){var e=0,t=this,n=arguments,r=n.length,i=function(e,t){return e&&e.hasOwnProperty&&e instanceof t},s=typeof YUI_config!="undefined"&&YUI_config;i(t,YUI)?(t._init(),YUI.GlobalConfig&&t.applyConfig(YUI.GlobalConfig),s&&t.applyConfig(s),r||t._setup()):t=new YUI;if(r){for(;e<r;e++)t.applyConfig(n[e]);t._setup()}return t.instanceOf=i,t};(function(){var e,t,n="3.17.2",r=".",i="http://yui.yahooapis.com/",s="yui3-js-enabled",o="yui3-css-stamp",u=function(){},a=Array.prototype.slice,f={"io.xdrReady":1,"io.xdrResponse":1,"SWF.eventHandler":1},l=typeof window!="undefined",c=l?window:null,h=l?c.document:null,p=h&&h.documentElement,d=p&&p.className,v={},m=(new Date).getTime(),g=function(e,t,n,r){e&&e.addEventListener?e.addEventListener(t,n,r):e&&e.attachEvent&&e.attachEvent("on"+t,n)},y=function(e,t,n,r){if(e&&e.removeEventListener)try{e.removeEventListener(t,n,r)}catch(i){}else e&&e.detachEvent&&e.detachEvent("on"+t,n)},b=function(){YUI.Env.DOMReady=!0,l&&y(h,"DOMContentLoaded",b)},w=function(){YUI.Env.windowLoaded=!0,YUI.Env.DOMReady=!0,l&&y(window,"load",w)},E=function(e,t){var n=e.Env._loader,r=["loader-base"],i=YUI.Env,s=i.mods;return n?(n.ignoreRegistered=!1,n.onEnd=null,n.data=null,n.required=[],n.loadType=null):(n=new e.Loader(e.config),e.Env._loader=n),s&&s.loader&&(r=[].concat(r,YUI.Env.loaderExtras)),YUI.Env.core=e.Array.dedupe([].concat(YUI.Env.core,r)),n},S=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},x={success:!0};p&&d.indexOf(s)==-1&&(d&&(d+=" "),d+=s,p.className=d),n.indexOf("@")>-1&&(n="3.5.0"),e={applyConfig:function(e){e=e||u;var t,n,r=this.config,i=r.modules,s=r.groups,o=r.aliases,a=this.Env._loader;for(n in e)e.hasOwnProperty(n)&&(t=e[n],i&&n=="modules"?S(i,t):o&&n=="aliases"?S(o,t):s&&n=="groups"?S(s,t):n=="win"?(r[n]=t&&t.contentWindow||t,r.doc=r[n]?r[n].document:null):n!="_yuid"&&(r[n]=t));a&&a._config(e)},_config:function(e){this.applyConfig(e)},_init:function(){var e,t,r=this,s=YUI.Env,u=r.Env,a;r.version=n;if(!u){r.Env={core:["get","features","intl-base","yui-log","yui-later","loader-base","loader-rollup","loader-yui3"],loaderExtras:["loader-rollup","loader-yui3"],mods:{},versions:{},base:i,cdn:i+n+"/build/",_idx:0,_used:{},_attached:{},_exported:{},_missed:[],_yidx:0,_uidx:0,_guidp:"y",_loaded:{},_BASE_RE:/(?:\?(?:[^&]*&)*([^&]*))?\b(yui(?:-\w+)?)\/\2(?:-(min|debug))?\.js/,parseBasePath:function(e,t){var n=e.match(t),r,i;return n&&(r=RegExp.leftContext||e.slice(0,e.indexOf(n[0])),i=n[3],n[1]&&(r+="?"+n[1]),r={filter:i,path:r}),r},getBase:s&&s.getBase||function(t){var n=h&&h.getElementsByTagName("script")||[],i=u.cdn,s,o,a,f;for(o=0,a=n.length;o<a;++o){f=n[o].src;if(f){s=r.Env.parseBasePath(f,t);if(s){e=s.filter,i=s.path;break}}}return i}},u=r.Env,u._loaded[n]={};if(s&&r!==YUI)u._yidx=++s._yidx,u._guidp=("yui_"+n+"_"+u._yidx+"_"+m).replace(/[^a-z0-9_]+/g,"_");else if(YUI._YUI){s=YUI._YUI.Env,u._yidx+=s._yidx,u._uidx+=s._uidx;for(a in s)a in u||(u[a]=s[a]);delete YUI._YUI}r.id=r.stamp(r),v[r.id]=r}r.constructor=YUI,r.config=r.config||{bootstrap:!0,cacheUse:!0,debug:!0,doc:h,fetchCSS:!0,throwFail:!0,useBrowserConsole:!0,useNativeES5:!0,win:c,global:Function("return this")()},h&&!h.getElementById(o)?(t=h.createElement("div"),t.innerHTML='<div id="'+o+'" style="position: absolute !important; visibility: hidden !important"></div>',YUI.Env.cssStampEl=t.firstChild,h.body?h.body.appendChild(YUI.Env.cssStampEl):p.insertBefore(YUI.Env.cssStampEl,p.firstChild)):h&&h.getElementById(o)&&!YUI.Env.cssStampEl&&(YUI.Env.cssStampEl=h.getElementById(o)),r.config.lang=r.config.lang||"en-US",r.config.base=YUI.config.base||r.Env.getBase(r.Env._BASE_RE);if(!e||!"mindebug".indexOf(e))e="min";e=e?"-"+e:e,r.config.loaderPath=YUI.config.loaderPath||"loader/loader"+e+".js"},_setup:function(){var e,t=this,n=[],r=YUI.Env.mods,i=t.config.core||[].concat(YUI.Env.core);for(e=0;e<i.length;e++)r[i[e]]&&n.push(i[e]);t._attach(["yui-base"]),t._attach(n),t.Loader&&E(t)},applyTo:function(e,t,n){if(t in f){var r=v[e],i,s,o;if(r){i=t.split("."),s=r;for(o=0;o<i.length;o+=1)s=s[i[o]],s||this.log("applyTo not found: "+t,"warn","yui");return s&&s.apply(r,n)}return null}return this.log(t+": applyTo not allowed","warn","yui"),null},add:function(e,t,n,r){r=r||{};var i=YUI.Env,s={name:e,fn:t,version:n,details:r},o={},u,a,f,l,c=i.versions;i.mods[e]=s,c[n]=c[n]||{},c[n][e]=s;for(l in v)v.hasOwnProperty(l)&&(a=v[l],o[a.id]||(o[a.id]=!0,u=a.Env._loader,u&&(f=u.getModuleInfo(e),(!f||f.temp)&&u.addModule(r,e))));return this},_attach:function(e,t){var n,r,i,s,o,u,a,f=YUI.Env.mods,l=YUI.Env.aliases,c=this,h,p=YUI.Env._renderedMods,d=c.Env._loader,v=c.Env._attached,m=c.Env._exported,g=e.length,d,y,b,w=[],E,S,x,T,N,C,k;for(n=0;n<g;n++){r=e[n],i=f[r],w.push(r);if(d&&d.conditions[r])for(h in d.conditions[r])d.conditions[r].hasOwnProperty(h)&&(y=d.conditions[r][h],b=y&&(y.ua&&c.UA[y.ua]||y.test&&y.test(c)),b&&w.push(y.name))}e=w,g=e.length;for(n=0;n<g;n++)if(!v[e[n]]){r=e[n],i=f[r];if(l&&l[r]&&!i){c._attach(l[r]);continue}if(!i)T=d&&d.getModuleInfo(r),T&&(i=T,t=!0),!t&&r&&r.indexOf("skin-")===-1&&r.indexOf("css")===-1&&(c.Env._missed.push(r),c.Env._missed=c.Array.dedupe(c.Env._missed),c.message("NOT loaded: "+r,"warn","yui"));else{v[r]=!0;for(h=0;h<c.Env._missed.length;h++)c.Env._missed[h]===r&&(c.message("Found: "+r+" (was reported as missing earlier)","warn","yui"),c.Env._missed.splice(h,1));if(d&&!d._canBeAttached(r))return!0;if(d&&p&&p[r]&&p[r].temp){d.getRequires(p[r]),o=[],T=d.getModuleInfo(r);for(h in T.expanded_map)T.expanded_map.hasOwnProperty(h)&&o.push(h);c._attach(o)}s=i.details,o=s.requires,S=s.es,u=s.use,a=s.after,s.lang&&(o=o||[],o.unshift("intl"));if(o){x=o.length;for(h=0;h<x;h++)if(!v[o[h]]){if(!c._attach(o))return!1;break}}if(a)for(h=0;h<a.length;h++)if(!v[a[h]]){if(!c._attach(a,!0))return!1;break}if(i.fn){E=[c,r];if(S){k={},C={},E.push(k,C);if(o){x=o.length;for(h=0;h<x;h++)k[o[h]]=m.hasOwnProperty(o[h])?m[o[h]]:c}}if(c.config.throwFail)C=i.fn
.apply(S?undefined:i,E);else try{C=i.fn.apply(S?undefined:i,E)}catch(L){return c.error("Attach error: "+r,L,r),!1}S&&(m[r]=C,N=i.details.condition,N&&N.when==="instead"&&(m[N.trigger]=C))}if(u)for(h=0;h<u.length;h++)if(!v[u[h]]){if(!c._attach(u))return!1;break}}}return!0},_delayCallback:function(e,t){var n=this,r=["event-base"];return t=n.Lang.isObject(t)?t:{event:t},t.event==="load"&&r.push("event-synthetic"),function(){var i=arguments;n._use(r,function(){n.on(t.event,function(){i[1].delayUntil=t.event,e.apply(n,i)},t.args)})}},use:function(){var e=a.call(arguments,0),t=e[e.length-1],n=this,r=0,i,s=n.Env,o=!0;n.Lang.isFunction(t)?(e.pop(),n.config.delayUntil&&(t=n._delayCallback(t,n.config.delayUntil))):t=null,n.Lang.isArray(e[0])&&(e=e[0]);if(n.config.cacheUse){while(i=e[r++])if(!s._attached[i]){o=!1;break}if(o)return e.length,n._notify(t,x,e),n}return n._loading?(n._useQueue=n._useQueue||new n.Queue,n._useQueue.add([e,t])):n._use(e,function(n,r){n._notify(t,r,e)}),n},require:function(){var e=a.call(arguments),t;typeof e[e.length-1]=="function"&&(t=e.pop(),e.push(function(n){var r,i=e.length,s=n.Env._exported,o={};for(r=0;r<i;r++)s.hasOwnProperty(e[r])&&(o[e[r]]=s[e[r]]);t.call(undefined,n,o)})),this.use.apply(this,e)},_notify:function(e,t,n){if(!t.success&&this.config.loadErrorFn)this.config.loadErrorFn.call(this,this,e,t,n);else if(e){this.Env._missed&&this.Env._missed.length&&(t.msg="Missing modules: "+this.Env._missed.join(),t.success=!1);if(this.config.throwFail)e(this,t);else try{e(this,t)}catch(r){this.error("use callback error",r,n)}}},_use:function(e,t){this.Array||this._attach(["yui-base"]);var r,i,s,o=this,u=YUI.Env,a=u.mods,f=o.Env,l=f._used,c=u.aliases,h=u._loaderQueue,p=e[0],d=o.Array,v=o.config,m=v.bootstrap,g=[],y,b=[],w=!0,S=v.fetchCSS,x=function(e,t){var r=0,i=[],s,o,f,h,p;if(!e.length)return;if(c){o=e.length;for(r=0;r<o;r++)c[e[r]]&&!a[e[r]]?i=[].concat(i,c[e[r]]):i.push(e[r]);e=i}o=e.length;for(r=0;r<o;r++){s=e[r],t||b.push(s);if(l[s])continue;f=a[s],h=null,p=null,f?(l[s]=!0,h=f.details.requires,p=f.details.use):u._loaded[n][s]?l[s]=!0:g.push(s),h&&h.length&&x(h),p&&p.length&&x(p,1)}},T=function(n){var r=n||{success:!0,msg:"not dynamic"},i,s,u=!0,a=r.data;o._loading=!1,a&&(s=g,g=[],b=[],x(a),i=g.length,i&&[].concat(g).sort().join()==s.sort().join()&&(i=!1)),i&&a?(o._loading=!0,o._use(g,function(){o._attach(a)&&o._notify(t,r,a)})):(a&&(u=o._attach(a)),u&&o._notify(t,r,e)),o._useQueue&&o._useQueue.size()&&!o._loading&&o._use.apply(o,o._useQueue.next())};if(p==="*"){e=[];for(y in a)a.hasOwnProperty(y)&&e.push(y);return w=o._attach(e),w&&T(),o}return(a.loader||a["loader-base"])&&!o.Loader&&o._attach(["loader"+(a.loader?"":"-base")]),m&&o.Loader&&e.length&&(i=E(o),i.require(e),i.ignoreRegistered=!0,i._boot=!0,i.calculate(null,S?null:"js"),e=i.sorted,i._boot=!1),x(e),r=g.length,r&&(g=d.dedupe(g),r=g.length),m&&r&&o.Loader?(o._loading=!0,i=E(o),i.onEnd=T,i.context=o,i.data=e,i.ignoreRegistered=!1,i.require(g),i.insert(null,S?null:"js")):m&&r&&o.Get&&!f.bootstrapped?(o._loading=!0,s=function(){o._loading=!1,h.running=!1,f.bootstrapped=!0,u._bootstrapping=!1,o._attach(["loader"])&&o._use(e,t)},u._bootstrapping?h.add(s):(u._bootstrapping=!0,o.Get.script(v.base+v.loaderPath,{onEnd:s}))):(w=o._attach(e),w&&T()),o},namespace:function(){var e=arguments,t,n=0,i,s,o;for(;n<e.length;n++){t=this,o=e[n];if(o.indexOf(r)>-1){s=o.split(r);for(i=s[0]=="YAHOO"?1:0;i<s.length;i++)t[s[i]]=t[s[i]]||{},t=t[s[i]]}else t[o]=t[o]||{},t=t[o]}return t},log:u,message:u,dump:function(e){return""+e},error:function(e,t,n){var r=this,i;r.config.errorFn&&(i=r.config.errorFn.apply(r,arguments));if(!i)throw t||new Error(e);return r.message(e,"error",""+n),r},guid:function(e){var t=this.Env._guidp+"_"+ ++this.Env._uidx;return e?e+t:t},stamp:function(e,t){var n;if(!e)return e;e.uniqueID&&e.nodeType&&e.nodeType!==9?n=e.uniqueID:n=typeof e=="string"?e:e._yuid;if(!n){n=this.guid();if(!t)try{e._yuid=n}catch(r){n=null}}return n},destroy:function(){var e=this;e.Event&&e.Event._unload(),delete v[e.id],delete e.Env,delete e.config}},YUI.prototype=e;for(t in e)e.hasOwnProperty(t)&&(YUI[t]=e[t]);YUI.applyConfig=function(e){if(!e)return;YUI.GlobalConfig&&this.prototype.applyConfig.call(this,YUI.GlobalConfig),this.prototype.applyConfig.call(this,e),YUI.GlobalConfig=this.config},YUI._init(),l?(g(h,"DOMContentLoaded",b),g(window,"load",w)):(b(),w()),YUI.Env.add=g,YUI.Env.remove=y,typeof exports=="object"&&(exports.YUI=YUI,YUI.setLoadHook=function(e){YUI._getLoadHook=e},YUI._getLoadHook=null),YUI.Env[n]={}})(),YUI.add("yui-base",function(e,t){function m(e,t,n){var r,i;t||(t=0);if(n||m.test(e))try{return d.slice.call(e,t)}catch(s){i=[];for(r=e.length;t<r;++t)i.push(e[t]);return i}return[e]}function g(){this._init(),this.add.apply(this,arguments)}var n=e.Lang||(e.Lang={}),r=String.prototype,i=Object.prototype.toString,s={"undefined":"undefined",number:"number","boolean":"boolean",string:"string","[object Function]":"function","[object RegExp]":"regexp","[object Array]":"array","[object Date]":"date","[object Error]":"error"},o=/\{\s*([^|}]+?)\s*(?:\|([^}]*))?\s*\}/g,u="	\n\f\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000\ufeff",a="[	-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+",f=new RegExp("^"+a),l=new RegExp(a+"$"),c=new RegExp(f.source+"|"+l.source,"g"),h=/\{\s*\[(?:native code|function)\]\s*\}/i;n._isNative=function(t){return!!(e.config.useNativeES5&&t&&h.test(t))},n.isArray=n._isNative(Array.isArray)?Array.isArray:function(e){return n.type(e)==="array"},n.isBoolean=function(e){return typeof e=="boolean"},n.isDate=function(e){return n.type(e)==="date"&&e.toString()!=="Invalid Date"&&!isNaN(e)},n.isFunction=function(e){return n.type(e)==="function"},n.isNull=function(e){return e===null},n.isNumber=function(e){return typeof e=="number"&&isFinite(e)},n.isObject=function(e,t){var r=typeof e;return e&&(r==="object"||!t&&(r==="function"||
n.isFunction(e)))||!1},n.isRegExp=function(e){return n.type(e)==="regexp"},n.isString=function(e){return typeof e=="string"},n.isUndefined=function(e){return typeof e=="undefined"},n.isValue=function(e){var t=n.type(e);switch(t){case"number":return isFinite(e);case"null":case"undefined":return!1;default:return!!t}},n.now=Date.now||function(){return(new Date).getTime()},n.sub=function(e,t){return e.replace?e.replace(o,function(e,r){return n.isUndefined(t[r])?e:t[r]}):e},n.trim=n._isNative(r.trim)&&!u.trim()?function(e){return e&&e.trim?e.trim():e}:function(e){try{return e.replace(c,"")}catch(t){return e}},n.trimLeft=n._isNative(r.trimLeft)&&!u.trimLeft()?function(e){return e.trimLeft()}:function(e){return e.replace(f,"")},n.trimRight=n._isNative(r.trimRight)&&!u.trimRight()?function(e){return e.trimRight()}:function(e){return e.replace(l,"")},n.type=function(e){return s[typeof e]||s[i.call(e)]||(e?"object":"null")};var p=e.Lang,d=Array.prototype,v=Object.prototype.hasOwnProperty;e.Array=m,m.dedupe=p._isNative(Object.create)?function(e){var t=Object.create(null),n=[],r,i,s;for(r=0,s=e.length;r<s;++r)i=e[r],t[i]||(t[i]=1,n.push(i));return n}:function(e){var t={},n=[],r,i,s;for(r=0,s=e.length;r<s;++r)i=e[r],v.call(t,i)||(t[i]=1,n.push(i));return n},m.each=m.forEach=p._isNative(d.forEach)?function(t,n,r){return d.forEach.call(t||[],n,r||e),e}:function(t,n,r){for(var i=0,s=t&&t.length||0;i<s;++i)i in t&&n.call(r||e,t[i],i,t);return e},m.hash=function(e,t){var n={},r=t&&t.length||0,i,s;for(i=0,s=e.length;i<s;++i)i in e&&(n[e[i]]=r>i&&i in t?t[i]:!0);return n},m.indexOf=p._isNative(d.indexOf)?function(e,t,n){return d.indexOf.call(e,t,n)}:function(e,t,n){var r=e.length;n=+n||0,n=(n>0||-1)*Math.floor(Math.abs(n)),n<0&&(n+=r,n<0&&(n=0));for(;n<r;++n)if(n in e&&e[n]===t)return n;return-1},m.numericSort=function(e,t){return e-t},m.some=p._isNative(d.some)?function(e,t,n){return d.some.call(e,t,n)}:function(e,t,n){for(var r=0,i=e.length;r<i;++r)if(r in e&&t.call(n,e[r],r,e))return!0;return!1},m.test=function(e){var t=0;if(p.isArray(e))t=1;else if(p.isObject(e))try{"length"in e&&!e.tagName&&(!e.scrollTo||!e.document)&&!e.apply&&(t=2)}catch(n){}return t},g.prototype={_init:function(){this._q=[]},next:function(){return this._q.shift()},last:function(){return this._q.pop()},add:function(){return this._q.push.apply(this._q,arguments),this},size:function(){return this._q.length}},e.Queue=g,YUI.Env._loaderQueue=YUI.Env._loaderQueue||new g;var y="__",v=Object.prototype.hasOwnProperty,b=e.Lang.isObject;e.cached=function(e,t,n){return t||(t={}),function(r){var i=arguments.length>1?Array.prototype.join.call(arguments,y):String(r);if(!(i in t)||n&&t[i]==n)t[i]=e.apply(e,arguments);return t[i]}},e.getLocation=function(){var t=e.config.win;return t&&t.location},e.merge=function(){var e=0,t=arguments.length,n={},r,i;for(;e<t;++e){i=arguments[e];for(r in i)v.call(i,r)&&(n[r]=i[r])}return n},e.mix=function(t,n,r,i,s,o){var u,a,f,l,c,h,p;if(!t||!n)return t||e;if(s){s===2&&e.mix(t.prototype,n.prototype,r,i,0,o),f=s===1||s===3?n.prototype:n,p=s===1||s===4?t.prototype:t;if(!f||!p)return t}else f=n,p=t;u=r&&!o;if(i)for(l=0,h=i.length;l<h;++l){c=i[l];if(!v.call(f,c))continue;a=u?!1:c in p;if(o&&a&&b(p[c],!0)&&b(f[c],!0))e.mix(p[c],f[c],r,null,0,o);else if(r||!a)p[c]=f[c]}else{for(c in f){if(!v.call(f,c))continue;a=u?!1:c in p;if(o&&a&&b(p[c],!0)&&b(f[c],!0))e.mix(p[c],f[c],r,null,0,o);else if(r||!a)p[c]=f[c]}e.Object._hasEnumBug&&e.mix(p,f,r,e.Object._forceEnum,s,o)}return t};var p=e.Lang,v=Object.prototype.hasOwnProperty,w,E=e.Object=p._isNative(Object.create)?function(e){return Object.create(e)}:function(){function e(){}return function(t){return e.prototype=t,new e}}(),S=E._forceEnum=["hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toString","toLocaleString","valueOf"],x=E._hasEnumBug=!{valueOf:0}.propertyIsEnumerable("valueOf"),T=E._hasProtoEnumBug=function(){}.propertyIsEnumerable("prototype"),N=E.owns=function(e,t){return!!e&&v.call(e,t)};E.hasKey=N,E.keys=p._isNative(Object.keys)&&!T?Object.keys:function(e){if(!p.isObject(e))throw new TypeError("Object.keys called on a non-object");var t=[],n,r,i;if(T&&typeof e=="function")for(r in e)N(e,r)&&r!=="prototype"&&t.push(r);else for(r in e)N(e,r)&&t.push(r);if(x)for(n=0,i=S.length;n<i;++n)r=S[n],N(e,r)&&t.push(r);return t},E.values=function(e){var t=E.keys(e),n=0,r=t.length,i=[];for(;n<r;++n)i.push(e[t[n]]);return i},E.size=function(e){try{return E.keys(e).length}catch(t){return 0}},E.hasValue=function(t,n){return e.Array.indexOf(E.values(t),n)>-1},E.each=function(t,n,r,i){var s;for(s in t)(i||N(t,s))&&n.call(r||e,t[s],s,t);return e},E.some=function(t,n,r,i){var s;for(s in t)if(i||N(t,s))if(n.call(r||e,t[s],s,t))return!0;return!1},E.getValue=function(t,n){if(!p.isObject(t))return w;var r,i=e.Array(n),s=i.length;for(r=0;t!==w&&r<s;r++)t=t[i[r]];return t},E.setValue=function(t,n,r){var i,s=e.Array(n),o=s.length-1,u=t;if(o>=0){for(i=0;u!==w&&i<o;i++)u=u[s[i]];if(u===w)return w;u[s[i]]=r}return t},E.isEmpty=function(e){return!E.keys(Object(e)).length},YUI.Env.parseUA=function(t){var n=function(e){var t=0;return parseFloat(e.replace(/\./g,function(){return t++===1?"":"."}))},r=e.config.win,i=r&&r.navigator,s={ie:0,opera:0,gecko:0,webkit:0,safari:0,chrome:0,mobile:null,air:0,phantomjs:0,ipad:0,iphone:0,ipod:0,ios:null,android:0,silk:0,ubuntu:0,accel:!1,webos:0,caja:i&&i.cajaVersion,secure:!1,os:null,nodejs:0,winjs:typeof Windows!="undefined"&&!!Windows.System,touchEnabled:!1},o=t||i&&i.userAgent,u=r&&r.location,a=u&&u.href,f;return s.userAgent=o,s.secure=a&&a.toLowerCase().indexOf("https")===0,o&&(/windows|win32/i.test(o)?s.os="windows":/macintosh|mac_powerpc/i.test(o)?s.os="macintosh":/android/i.test(o)?s.os="android":/symbos/i.test(o)?s.os="symbos":/linux/i.test(o)?s.os="linux":/rhino/i.test(o)&&(s.os="rhino"),/KHTML/.test(o)&&(s.webkit=1),/IEMobile|XBLWP7/.test(o)&&(s.mobile="windows"),/Fennec/.test(o)&&(s.mobile="gecko"),f=o.match(/AppleWebKit\/([^\s]*)/),f&&f[1]&&(s.
webkit=n(f[1]),s.safari=s.webkit,/PhantomJS/.test(o)&&(f=o.match(/PhantomJS\/([^\s]*)/),f&&f[1]&&(s.phantomjs=n(f[1]))),/ Mobile\//.test(o)||/iPad|iPod|iPhone/.test(o)?(s.mobile="Apple",f=o.match(/OS ([^\s]*)/),f&&f[1]&&(f=n(f[1].replace("_","."))),s.ios=f,s.os="ios",s.ipad=s.ipod=s.iphone=0,f=o.match(/iPad|iPod|iPhone/),f&&f[0]&&(s[f[0].toLowerCase()]=s.ios)):(f=o.match(/NokiaN[^\/]*|webOS\/\d\.\d/),f&&(s.mobile=f[0]),/webOS/.test(o)&&(s.mobile="WebOS",f=o.match(/webOS\/([^\s]*);/),f&&f[1]&&(s.webos=n(f[1]))),/ Android/.test(o)&&(/Mobile/.test(o)&&(s.mobile="Android"),f=o.match(/Android ([^\s]*);/),f&&f[1]&&(s.android=n(f[1]))),/Silk/.test(o)&&(f=o.match(/Silk\/([^\s]*)/),f&&f[1]&&(s.silk=n(f[1])),s.android||(s.android=2.34,s.os="Android"),/Accelerated=true/.test(o)&&(s.accel=!0))),f=o.match(/OPR\/(\d+\.\d+)/),f&&f[1]?s.opera=n(f[1]):(f=o.match(/(Chrome|CrMo|CriOS)\/([^\s]*)/),f&&f[1]&&f[2]?(s.chrome=n(f[2]),s.safari=0,f[1]==="CrMo"&&(s.mobile="chrome")):(f=o.match(/AdobeAIR\/([^\s]*)/),f&&(s.air=f[0])))),f=o.match(/Ubuntu\ (\d+\.\d+)/),f&&f[1]&&(s.os="linux",s.ubuntu=n(f[1]),f=o.match(/\ WebKit\/([^\s]*)/),f&&f[1]&&(s.webkit=n(f[1])),f=o.match(/\ Chromium\/([^\s]*)/),f&&f[1]&&(s.chrome=n(f[1])),/ Mobile$/.test(o)&&(s.mobile="Ubuntu")),s.webkit||(/Opera/.test(o)?(f=o.match(/Opera[\s\/]([^\s]*)/),f&&f[1]&&(s.opera=n(f[1])),f=o.match(/Version\/([^\s]*)/),f&&f[1]&&(s.opera=n(f[1])),/Opera Mobi/.test(o)&&(s.mobile="opera",f=o.replace("Opera Mobi","").match(/Opera ([^\s]*)/),f&&f[1]&&(s.opera=n(f[1]))),f=o.match(/Opera Mini[^;]*/),f&&(s.mobile=f[0])):(f=o.match(/MSIE ([^;]*)|Trident.*; rv:([0-9.]+)/),f&&(f[1]||f[2])?s.ie=n(f[1]||f[2]):(f=o.match(/Gecko\/([^\s]*)/),f&&(s.gecko=1,f=o.match(/rv:([^\s\)]*)/),f&&f[1]&&(s.gecko=n(f[1]),/Mobile|Tablet/.test(o)&&(s.mobile="ffos"))))))),r&&i&&!(s.chrome&&s.chrome<6)&&(s.touchEnabled="ontouchstart"in r||"msMaxTouchPoints"in i&&i.msMaxTouchPoints>0),t||(typeof process=="object"&&process.versions&&process.versions.node&&(s.os=process.platform,s.nodejs=n(process.versions.node)),YUI.Env.UA=s),s},e.UA=YUI.Env.UA||YUI.Env.parseUA(),e.UA.compareVersions=function(e,t){var n,r,i,s,o,u;if(e===t)return 0;r=(e+"").split("."),s=(t+"").split(".");for(o=0,u=Math.max(r.length,s.length);o<u;++o){n=parseInt(r[o],10),i=parseInt(s[o],10),isNaN(n)&&(n=0),isNaN(i)&&(i=0);if(n<i)return-1;if(n>i)return 1}return 0},YUI.Env.aliases={anim:["anim-base","anim-color","anim-curve","anim-easing","anim-node-plugin","anim-scroll","anim-xy"],"anim-shape-transform":["anim-shape"],app:["app-base","app-content","app-transitions","lazy-model-list","model","model-list","model-sync-rest","model-sync-local","router","view","view-node-map"],attribute:["attribute-base","attribute-complex"],"attribute-events":["attribute-observable"],autocomplete:["autocomplete-base","autocomplete-sources","autocomplete-list","autocomplete-plugin"],axes:["axis-numeric","axis-category","axis-time","axis-stacked"],"axes-base":["axis-numeric-base","axis-category-base","axis-time-base","axis-stacked-base"],base:["base-base","base-pluginhost","base-build"],cache:["cache-base","cache-offline","cache-plugin"],charts:["charts-base"],collection:["array-extras","arraylist","arraylist-add","arraylist-filter","array-invoke"],color:["color-base","color-hsl","color-harmony"],controller:["router"],dataschema:["dataschema-base","dataschema-json","dataschema-xml","dataschema-array","dataschema-text"],datasource:["datasource-local","datasource-io","datasource-get","datasource-function","datasource-cache","datasource-jsonschema","datasource-xmlschema","datasource-arrayschema","datasource-textschema","datasource-polling"],datatable:["datatable-core","datatable-table","datatable-head","datatable-body","datatable-base","datatable-column-widths","datatable-message","datatable-mutable","datatable-sort","datatable-datasource"],datatype:["datatype-date","datatype-number","datatype-xml"],"datatype-date":["datatype-date-parse","datatype-date-format","datatype-date-math"],"datatype-number":["datatype-number-parse","datatype-number-format"],"datatype-xml":["datatype-xml-parse","datatype-xml-format"],dd:["dd-ddm-base","dd-ddm","dd-ddm-drop","dd-drag","dd-proxy","dd-constrain","dd-drop","dd-scroll","dd-delegate"],dom:["dom-base","dom-screen","dom-style","selector-native","selector"],editor:["frame","editor-selection","exec-command","editor-base","editor-para","editor-br","editor-bidi","editor-tab","createlink-base"],event:["event-base","event-delegate","event-synthetic","event-mousewheel","event-mouseenter","event-key","event-focus","event-resize","event-hover","event-outside","event-touch","event-move","event-flick","event-valuechange","event-tap"],"event-custom":["event-custom-base","event-custom-complex"],"event-gestures":["event-flick","event-move"],handlebars:["handlebars-compiler"],highlight:["highlight-base","highlight-accentfold"],history:["history-base","history-hash","history-html5"],io:["io-base","io-xdr","io-form","io-upload-iframe","io-queue"],json:["json-parse","json-stringify"],loader:["loader-base","loader-rollup","loader-yui3"],node:["node-base","node-event-delegate","node-pluginhost","node-screen","node-style"],pluginhost:["pluginhost-base","pluginhost-config"],querystring:["querystring-parse","querystring-stringify"],recordset:["recordset-base","recordset-sort","recordset-filter","recordset-indexer"],resize:["resize-base","resize-proxy","resize-constrain"],slider:["slider-base","slider-value-range","clickable-rail","range-slider"],template:["template-base","template-micro"],text:["text-accentfold","text-wordbreak"],widget:["widget-base","widget-htmlparser","widget-skin","widget-uievents"]}},"3.17.2",{use:["yui-base","get","features","intl-base","yui-log","yui-later","loader-base","loader-rollup","loader-yui3"]}),YUI.add("get",function(e,t){var n=e.Lang,r,i,s;e.Get=i={cssOptions:{attributes:{rel:"stylesheet"},doc:e.config.linkDoc||e.config.doc,pollInterval:50},jsOptions:{autopurge:!0,doc:e.config.scriptDoc||e.config.doc},options
:{attributes:{charset:"utf-8"},purgethreshold:20},REGEX_CSS:/\.css(?:[?;].*)?$/i,REGEX_JS:/\.js(?:[?;].*)?$/i,_insertCache:{},_pending:null,_purgeNodes:[],_queue:[],abort:function(e){var t,n,r,i,s;if(!e.abort){n=e,s=this._pending,e=null;if(s&&s.transaction.id===n)e=s.transaction,this._pending=null;else for(t=0,i=this._queue.length;t<i;++t){r=this._queue[t].transaction;if(r.id===n){e=r,this._queue.splice(t,1);break}}}e&&e.abort()},css:function(e,t,n){return this._load("css",e,t,n)},js:function(e,t,n){return this._load("js",e,t,n)},load:function(e,t,n){return this._load(null,e,t,n)},_autoPurge:function(e){e&&this._purgeNodes.length>=e&&this._purge(this._purgeNodes)},_getEnv:function(){var t=e.config.doc,n=e.UA;return this._env={async:t&&t.createElement("script").async===!0||n.ie>=10,cssFail:n.gecko>=9||n.compareVersions(n.webkit,535.24)>=0,cssLoad:(!n.gecko&&!n.webkit||n.gecko>=9||n.compareVersions(n.webkit,535.24)>=0)&&!(n.chrome&&n.chrome<=18),preservesScriptOrder:!!(n.gecko||n.opera||n.ie&&n.ie>=10)}},_getTransaction:function(t,r){var i=[],o,u,a,f;n.isArray(t)||(t=[t]),r=e.merge(this.options,r),r.attributes=e.merge(this.options.attributes,r.attributes);for(o=0,u=t.length;o<u;++o){f=t[o],a={attributes:{}};if(typeof f=="string")a.url=f;else{if(!f.url)continue;e.mix(a,f,!1,null,0,!0),f=f.url}e.mix(a,r,!1,null,0,!0),a.type||(this.REGEX_CSS.test(f)?a.type="css":(!this.REGEX_JS.test(f),a.type="js")),e.mix(a,a.type==="js"?this.jsOptions:this.cssOptions,!1,null,0,!0),a.attributes.id||(a.attributes.id=e.guid()),a.win?a.doc=a.win.document:a.win=a.doc.defaultView||a.doc.parentWindow,a.charset&&(a.attributes.charset=a.charset),i.push(a)}return new s(i,r)},_load:function(e,t,n,r){var s;return typeof n=="function"&&(r=n,n={}),n||(n={}),n.type=e,n._onFinish=i._onTransactionFinish,this._env||this._getEnv(),s=this._getTransaction(t,n),this._queue.push({callback:r,transaction:s}),this._next(),s},_onTransactionFinish:function(){i._pending=null,i._next()},_next:function(){var e;if(this._pending)return;e=this._queue.shift(),e&&(this._pending=e,e.transaction.execute(e.callback))},_purge:function(t){var n=this._purgeNodes,r=t!==n,i,s;while(s=t.pop()){if(!s._yuiget_finished)continue;s.parentNode&&s.parentNode.removeChild(s),r&&(i=e.Array.indexOf(n,s),i>-1&&n.splice(i,1))}}},i.script=i.js,i.Transaction=s=function(t,n){var r=this;r.id=s._lastId+=1,r.data=n.data,r.errors=[],r.nodes=[],r.options=n,r.requests=t,r._callbacks=[],r._queue=[],r._reqsWaiting=0,r.tId=r.id,r.win=n.win||e.config.win},s._lastId=0,s.prototype={_state:"new",abort:function(e){this._pending=null,this._pendingCSS=null,this._pollTimer=clearTimeout(this._pollTimer),this._queue=[],this._reqsWaiting=0,this.errors.push({error:e||"Aborted"}),this._finish()},execute:function(e){var t=this,n=t.requests,r=t._state,i,s,o,u;if(r==="done"){e&&e(t.errors.length?t.errors:null,t);return}e&&t._callbacks.push(e);if(r==="executing")return;t._state="executing",t._queue=o=[],t.options.timeout&&(t._timeout=setTimeout(function(){t.abort("Timeout")},t.options.timeout)),t._reqsWaiting=n.length;for(i=0,s=n.length;i<s;++i)u=n[i],u.async||u.type==="css"?t._insert(u):o.push(u);t._next()},purge:function(){i._purge(this.nodes)},_createNode:function(e,t,n){var i=n.createElement(e),s,o;r||(o=n.createElement("div"),o.setAttribute("class","a"),r=o.className==="a"?{}:{"for":"htmlFor","class":"className"});for(s in t)t.hasOwnProperty(s)&&i.setAttribute(r[s]||s,t[s]);return i},_finish:function(){var e=this.errors.length?this.errors:null,t=this.options,n=t.context||this,r,i,s;if(this._state==="done")return;this._state="done";for(i=0,s=this._callbacks.length;i<s;++i)this._callbacks[i].call(n,e,this);r=this._getEventData(),e?(t.onTimeout&&e[e.length-1].error==="Timeout"&&t.onTimeout.call(n,r),t.onFailure&&t.onFailure.call(n,r)):t.onSuccess&&t.onSuccess.call(n,r),t.onEnd&&t.onEnd.call(n,r),t._onFinish&&t._onFinish()},_getEventData:function(t){return t?e.merge(this,{abort:this.abort,purge:this.purge,request:t,url:t.url,win:t.win}):this},_getInsertBefore:function(t){var n=t.doc,r=t.insertBefore,s,o;return r?typeof r=="string"?n.getElementById(r):r:(s=i._insertCache,o=e.stamp(n),(r=s[o])?r:(r=n.getElementsByTagName("base")[0])?s[o]=r:(r=n.head||n.getElementsByTagName("head")[0],r?(r.appendChild(n.createTextNode("")),s[o]=r.lastChild):s[o]=n.getElementsByTagName("script")[0]))},_insert:function(t){function c(){u._progress("Failed to load "+t.url,t)}function h(){f&&clearTimeout(f),u._progress(null,t)}var n=i._env,r=this._getInsertBefore(t),s=t.type==="js",o=t.node,u=this,a=e.UA,f,l;o||(s?l="script":!n.cssLoad&&a.gecko?l="style":l="link",o=t.node=this._createNode(l,t.attributes,t.doc)),s?(o.setAttribute("src",t.url),t.async?o.async=!0:(n.async&&(o.async=!1),n.preservesScriptOrder||(this._pending=t))):!n.cssLoad&&a.gecko?o.innerHTML=(t.attributes.charset?'@charset "'+t.attributes.charset+'";':"")+'@import "'+t.url+'";':o.setAttribute("href",t.url),s&&a.ie&&(a.ie<9||document.documentMode&&document.documentMode<9)?o.onreadystatechange=function(){/loaded|complete/.test(o.readyState)&&(o.onreadystatechange=null,h())}:!s&&!n.cssLoad?this._poll(t):(a.ie>=10?(o.onerror=function(){setTimeout(c,0)},o.onload=function(){setTimeout(h,0)}):(o.onerror=c,o.onload=h),!n.cssFail&&!s&&(f=setTimeout(c,t.timeout||3e3))),this.nodes.push(o),r.parentNode.insertBefore(o,r)},_next:function(){if(this._pending)return;this._queue.length?this._insert(this._queue.shift()):this._reqsWaiting||this._finish()},_poll:function(t){var n=this,r=n._pendingCSS,i=e.UA.webkit,s,o,u,a,f,l;if(t){r||(r=n._pendingCSS=[]),r.push(t);if(n._pollTimer)return}n._pollTimer=null;for(s=0;s<r.length;++s){f=r[s];if(i){l=f.doc.styleSheets,u=l.length,a=f.node.href;while(--u>=0)if(l[u].href===a){r.splice(s,1),s-=1,n._progress(null,f);break}}else try{o=!!f.node.sheet.cssRules,r.splice(s,1),s-=1,n._progress(null,f)}catch(c){}}r.length&&(n._pollTimer=setTimeout(function(){n._poll.call(n)},n.options.pollInterval))},_progress:function(e,t){var n=this.options
;e&&(t.error=e,this.errors.push({error:e,request:t})),t.node._yuiget_finished=t.finished=!0,n.onProgress&&n.onProgress.call(n.context||this,this._getEventData(t)),t.autopurge&&(i._autoPurge(this.options.purgethreshold),i._purgeNodes.push(t.node)),this._pending===t&&(this._pending=null),this._reqsWaiting-=1,this._next()}}},"3.17.2",{requires:["yui-base"]}),YUI.add("features",function(e,t){var n={};e.mix(e.namespace("Features"),{tests:n,add:function(e,t,r){n[e]=n[e]||{},n[e][t]=r},all:function(t,r){var i=n[t],s=[];return i&&e.Object.each(i,function(n,i){s.push(i+":"+(e.Features.test(t,i,r)?1:0))}),s.length?s.join(";"):""},test:function(t,r,i){i=i||[];var s,o,u,a=n[t],f=a&&a[r];return!f||(s=f.result,e.Lang.isUndefined(s)&&(o=f.ua,o&&(s=e.UA[o]),u=f.test,u&&(!o||s)&&(s=u.apply(e,i)),f.result=s)),s}});var r=e.Features.add;r("load","0",{name:"app-transitions-native",test:function(e){var t=e.config.doc,n=t?t.documentElement:null;return n&&n.style?"MozTransition"in n.style||"WebkitTransition"in n.style||"transition"in n.style:!1},trigger:"app-transitions"}),r("load","1",{name:"autocomplete-list-keys",test:function(e){return!e.UA.ios&&!e.UA.android},trigger:"autocomplete-list"}),r("load","2",{name:"dd-gestures",trigger:"dd-drag",ua:"touchEnabled"}),r("load","3",{name:"dom-style-ie",test:function(e){var t=e.Features.test,n=e.Features.add,r=e.config.win,i=e.config.doc,s="documentElement",o=!1;return n("style","computedStyle",{test:function(){return r&&"getComputedStyle"in r}}),n("style","opacity",{test:function(){return i&&"opacity"in i[s].style}}),o=!t("style","opacity")&&!t("style","computedStyle"),o},trigger:"dom-style"}),r("load","4",{name:"editor-para-ie",trigger:"editor-para",ua:"ie",when:"instead"}),r("load","5",{name:"event-base-ie",test:function(e){var t=e.config.doc&&e.config.doc.implementation;return t&&!t.hasFeature("Events","2.0")},trigger:"node-base"}),r("load","6",{name:"graphics-canvas",test:function(e){var t=e.config.doc,n=e.config.defaultGraphicEngine&&e.config.defaultGraphicEngine=="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return(!i||n)&&r&&r.getContext&&r.getContext("2d")},trigger:"graphics"}),r("load","7",{name:"graphics-canvas-default",test:function(e){var t=e.config.doc,n=e.config.defaultGraphicEngine&&e.config.defaultGraphicEngine=="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return(!i||n)&&r&&r.getContext&&r.getContext("2d")},trigger:"graphics"}),r("load","8",{name:"graphics-svg",test:function(e){var t=e.config.doc,n=!e.config.defaultGraphicEngine||e.config.defaultGraphicEngine!="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return i&&(n||!r)},trigger:"graphics"}),r("load","9",{name:"graphics-svg-default",test:function(e){var t=e.config.doc,n=!e.config.defaultGraphicEngine||e.config.defaultGraphicEngine!="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return i&&(n||!r)},trigger:"graphics"}),r("load","10",{name:"graphics-vml",test:function(e){var t=e.config.doc,n=t&&t.createElement("canvas");return t&&!t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")&&(!n||!n.getContext||!n.getContext("2d"))},trigger:"graphics"}),r("load","11",{name:"graphics-vml-default",test:function(e){var t=e.config.doc,n=t&&t.createElement("canvas");return t&&!t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")&&(!n||!n.getContext||!n.getContext("2d"))},trigger:"graphics"}),r("load","12",{name:"history-hash-ie",test:function(e){var t=e.config.doc&&e.config.doc.documentMode;return e.UA.ie&&(!("onhashchange"in e.config.win)||!t||t<8)},trigger:"history-hash"}),r("load","13",{name:"io-nodejs",trigger:"io-base",ua:"nodejs"}),r("load","14",{name:"json-parse-shim",test:function(e){function i(e,t){return e==="ok"?!0:t}var t=e.config.global.JSON,n=Object.prototype.toString.call(t)==="[object JSON]"&&t,r=e.config.useNativeJSONParse!==!1&&!!n;if(r)try{r=n.parse('{"ok":false}',i).ok}catch(s){r=!1}return!r},trigger:"json-parse"}),r("load","15",{name:"json-stringify-shim",test:function(e){var t=e.config.global.JSON,n=Object.prototype.toString.call(t)==="[object JSON]"&&t,r=e.config.useNativeJSONStringify!==!1&&!!n;if(r)try{r="0"===n.stringify(0)}catch(i){r=!1}return!r},trigger:"json-stringify"}),r("load","16",{name:"scrollview-base-ie",trigger:"scrollview-base",ua:"ie"}),r("load","17",{name:"selector-css2",test:function(e){var t=e.config.doc,n=t&&!("querySelectorAll"in t);return n},trigger:"selector"}),r("load","18",{name:"transition-timer",test:function(e){var t=e.config.doc,n=t?t.documentElement:null,r=!0;return n&&n.style&&(r=!("MozTransition"in n.style||"WebkitTransition"in n.style||"transition"in n.style)),r},trigger:"transition"}),r("load","19",{name:"widget-base-ie",trigger:"widget-base",ua:"ie"}),r("load","20",{name:"yql-jsonp",test:function(e){return!e.UA.nodejs&&!e.UA.winjs},trigger:"yql"}),r("load","21",{name:"yql-nodejs",trigger:"yql",ua:"nodejs"}),r("load","22",{name:"yql-winjs",trigger:"yql",ua:"winjs"})},"3.17.2",{requires:["yui-base"]}),YUI.add("intl-base",function(e,t){var n=/[, ]/;e.mix(e.namespace("Intl"),{lookupBestLang:function(t,r){function a(e){var t;for(t=0;t<r.length;t+=1)if(e.toLowerCase()===r[t].toLowerCase())return r[t]}var i,s,o,u;e.Lang.isString(t)&&(t=t.split(n));for(i=0;i<t.length;i+=1){s=t[i];if(!s||s==="*")continue;while(s.length>0){o=a(s);if(o)return o;u=s.lastIndexOf("-");if(!(u>=0))break;s=s.substring(0,u),u>=2&&s.charAt(u-2)==="-"&&(s=s.substring(0,u-2))}}return""}})},"3.17.2",{requires:["yui-base"]}),YUI.add("yui-log",function(e,t){var n=e,r="yui:log",i="undefined",s={debug:1,info:2,warn:4,error:8};n.log=function(e,t,o,u){var a,f,l,c,h,p,d=n,v=d.config,m=d.fire?d:YUI.Env
.globalEvents;return v.debug&&(o=o||"",typeof o!="undefined"&&(f=v.logExclude,l=v.logInclude,!l||o in l?l&&o in l?a=!l[o]:f&&o in f&&(a=f[o]):a=1,typeof t=="undefined"&&(t="info"),d.config.logLevel=d.config.logLevel||"debug",p=s[d.config.logLevel.toLowerCase()],t in s&&s[t]<p&&(a=1)),a||(v.useBrowserConsole&&(c=o?o+": "+e:e,d.Lang.isFunction(v.logFn)?v.logFn.call(d,e,t,o):typeof console!==i&&console.log?(h=t&&console[t]&&t in s?t:"log",console[h](c)):typeof opera!==i&&opera.postError(c)),m&&!u&&(m===d&&!m.getEvent(r)&&m.publish(r,{broadcast:2}),m.fire(r,{msg:e,cat:t,src:o})))),d},n.message=function(){return n.log.apply(n,arguments)}},"3.17.2",{requires:["yui-base"]}),YUI.add("yui-later",function(e,t){var n=[];e.later=function(t,r,i,s,o){t=t||0,s=e.Lang.isUndefined(s)?n:e.Array(s),r=r||e.config.win||e;var u=!1,a=r&&e.Lang.isString(i)?r[i]:i,f=function(){u||(a.apply?a.apply(r,s||n):a(s[0],s[1],s[2],s[3]))},l=o?setInterval(f,t):setTimeout(f,t);return{id:l,interval:o,cancel:function(){u=!0,this.interval?clearInterval(l):clearTimeout(l)}}},e.Lang.later=e.later},"3.17.2",{requires:["yui-base"]}),YUI.add("loader-base",function(e,t){(function(){var t=e.version,n="/build/",r=t+"/",i=e.Env.base,s="gallery-2014.05.29-15-46",o="2in3",u="4",a="2.9.0",f=i+"combo?",l={version:t,root:r,base:e.Env.base,comboBase:f,skin:{defaultSkin:"sam",base:"assets/skins/",path:"skin.css",after:["cssreset","cssfonts","cssgrids","cssbase","cssreset-context","cssfonts-context"]},groups:{},patterns:{}},c=l.groups,h=function(e,t,r){var s=o+"."+(e||u)+"/"+(t||a)+n,l=r&&r.base?r.base:i,h=r&&r.comboBase?r.comboBase:f;c.yui2.base=l+s,c.yui2.root=s,c.yui2.comboBase=h},p=function(e,t){var r=(e||s)+n,o=t&&t.base?t.base:i,u=t&&t.comboBase?t.comboBase:f;c.gallery.base=o+r,c.gallery.root=r,c.gallery.comboBase=u};c[t]={},c.gallery={ext:!1,combine:!0,comboBase:f,update:p,patterns:{"gallery-":{},"lang/gallery-":{},"gallerycss-":{type:"css"}}},c.yui2={combine:!0,ext:!1,comboBase:f,update:h,patterns:{"yui2-":{configFn:function(e){/-skin|reset|fonts|grids|base/.test(e.name)&&(e.type="css",e.path=e.path.replace(/\.js/,".css"),e.path=e.path.replace(/\/yui2-skin/,"/assets/skins/sam/yui2-skin"))}}}},p(),h(),YUI.Env[t]&&e.mix(l,YUI.Env[t],!1,["modules","groups","skin"],0,!0),YUI.Env[t]=l})();var n={},r=[],i=1024,s=YUI.Env,o=s._loaded,u="css",a="js",f="intl",l="sam",c=e.version,h="",p=e.Object,d=p.each,v=e.Array,m=s._loaderQueue,g=s[c],y="skin-",b=e.Lang,w=s.mods,E,S=function(e,t,n,r){var i=e+"/"+t;return r||(i+="-min"),i+="."+(n||u),i};YUI.Env._cssLoaded||(YUI.Env._cssLoaded={}),e.Env.meta=g,e.Loader=function(t){var n=this;t=t||{},E=g.md5,n.context=e,t.doBeforeLoader&&t.doBeforeLoader.apply(n,arguments),n.base=e.Env.meta.base+e.Env.meta.root,n.comboBase=e.Env.meta.comboBase,n.combine=t.base&&t.base.indexOf(n.comboBase.substr(0,20))>-1,n.comboSep="&",n.maxURLLength=i,n.ignoreRegistered=t.ignoreRegistered,n.root=e.Env.meta.root,n.timeout=0,n.forceMap={},n.allowRollup=!1,n.filters={},n.required={},n.patterns={},n.moduleInfo={},n.groups=e.merge(e.Env.meta.groups),n.skin=e.merge(e.Env.meta.skin),n.conditions={},n.config=t,n._internal=!0,n._populateConditionsCache(),n.loaded=o[c],n.async=!0,n._inspectPage(),n._internal=!1,n._config(t),n.forceMap=n.force?e.Array.hash(n.force):{},n.testresults=null,e.config.tests&&(n.testresults=e.config.tests),n.sorted=[],n.dirty=!0,n.inserted={},n.skipped={},n.tested={},n.ignoreRegistered&&n._resetModules()},e.Loader.prototype={getModuleInfo:function(t){var n=this.moduleInfo[t],r,i,o,a;return n?n:(r=g.modules,i=s._renderedMods,o=this._internal,i&&i.hasOwnProperty(t)&&!this.ignoreRegistered?this.moduleInfo[t]=e.merge(i[t]):r.hasOwnProperty(t)&&(this._internal=!0,a=this.addModule(r[t],t),a&&a.type===u&&this.isCSSLoaded(a.name,!0)&&(this.loaded[a.name]=!0),this._internal=o),this.moduleInfo[t])},_expandAliases:function(t){var n=[],r=YUI.Env.aliases,i,s;t=e.Array(t);for(i=0;i<t.length;i+=1)s=t[i],n.push.apply(n,r[s]?r[s]:[s]);return n},_populateConditionsCache:function(){var t=g.modules,n=s._conditions,r,i,o,u;if(n&&!this.ignoreRegistered)for(r in n)n.hasOwnProperty(r)&&(this.conditions[r]=e.merge(n[r]));else{for(r in t)if(t.hasOwnProperty(r)&&t[r].condition){o=this._expandAliases(t[r].condition.trigger);for(i=0;i<o.length;i+=1)u=o[i],this.conditions[u]=this.conditions[u]||{},this.conditions[u][t[r].name||r]=t[r].condition}s._conditions=this.conditions}},_resetModules:function(){var e=this,t,n,r,i,s;for(t in e.moduleInfo)if(e.moduleInfo.hasOwnProperty(t)&&e.moduleInfo[t]){r=e.moduleInfo[t],i=r.name,s=YUI.Env.mods[i]?YUI.Env.mods[i].details:null,s&&(e.moduleInfo[i]._reset=!0,e.moduleInfo[i].requires=s.requires||[],e.moduleInfo[i].optional=s.optional||[],e.moduleInfo[i].supersedes=s.supercedes||[]);if(r.defaults)for(n in r.defaults)r.defaults.hasOwnProperty(n)&&r[n]&&(r[n]=r.defaults[n]);r.langCache=undefined,r.skinCache=undefined,r.skinnable&&e._addSkin(e.skin.defaultSkin,r.name)}},REGEX_CSS:/\.css(?:[?;].*)?$/i,FILTER_DEFS:{RAW:{searchExp:"-min\\.js",replaceStr:".js"},DEBUG:{searchExp:"-min\\.js",replaceStr:"-debug.js"},COVERAGE:{searchExp:"-min\\.js",replaceStr:"-coverage.js"}},_inspectPage:function(){var e=this,t,n,r,i,s;for(s in w)w.hasOwnProperty(s)&&(t=w[s],t.details&&(n=e.getModuleInfo(t.name),r=t.details.requires,i=n&&n.requires,n?!n._inspected&&r&&i.length!==r.length&&delete n.expanded:n=e.addModule(t.details,s),n._inspected=!0))},_requires:function(e,t){var n,r,i,s,o=this.getModuleInfo(e),a=this.getModuleInfo(t);if(!o||!a)return!1;r=o.expanded_map,i=o.after_map;if(i&&t in i)return!0;i=a.after_map;if(i&&e in i)return!1;s=a.supersedes;if(s)for(n=0;n<s.length;n++)if(this._requires(e,s[n]))return!0;s=o.supersedes;if(s)for(n=0;n<s.length;n++)if(this._requires(t,s[n]))return!1;return r&&t in r?!0:o.ext&&o.type===u&&!a.ext&&a.type===u?!0:!1},_config:function(t){var n,r,i,s,o,u,a,f=this,l=[],c,h;if(t)for(n in t)if(t.hasOwnProperty(n)){i=t[n];if(n==="require")f.require(i);else if(n==="skin")typeof i=="string"&&(f.skin.defaultSkin=
t.skin,i={defaultSkin:i}),e.mix(f.skin,i,!0);else if(n==="groups"){for(r in i)if(i.hasOwnProperty(r)){a=r,u=i[r],f.addGroup(u,a);if(u.aliases)for(s in u.aliases)u.aliases.hasOwnProperty(s)&&f.addAlias(u.aliases[s],s)}}else if(n==="modules")for(r in i)i.hasOwnProperty(r)&&f.addModule(i[r],r);else if(n==="aliases")for(r in i)i.hasOwnProperty(r)&&f.addAlias(i[r],r);else n==="gallery"?this.groups.gallery.update&&this.groups.gallery.update(i,t):n==="yui2"||n==="2in3"?this.groups.yui2.update&&this.groups.yui2.update(t["2in3"],t.yui2,t):f[n]=i}o=f.filter,b.isString(o)&&(o=o.toUpperCase(),f.filterName=o,f.filter=f.FILTER_DEFS[o],o==="DEBUG"&&f.require("yui-log","dump"));if(f.filterName&&f.coverage&&f.filterName==="COVERAGE"&&b.isArray(f.coverage)&&f.coverage.length){for(n=0;n<f.coverage.length;n++)c=f.coverage[n],h=f.getModuleInfo(c),h&&h.use?l=l.concat(h.use):l.push(c);f.filters=f.filters||{},e.Array.each(l,function(e){f.filters[e]=f.FILTER_DEFS.COVERAGE}),f.filterName="RAW",f.filter=f.FILTER_DEFS[f.filterName]}},formatSkin:function(e,t){var n=y+e;return t&&(n=n+"-"+t),n},_addSkin:function(e,t,n){var r,i,s,o=this.skin,u=t&&this.getModuleInfo(t),a=u&&u.ext;return t&&(i=this.formatSkin(e,t),this.getModuleInfo(i)||(r=u.pkg||t,s={skin:!0,name:i,group:u.group,type:"css",after:o.after,path:(n||r)+"/"+o.base+e+"/"+t+".css",ext:a},u.base&&(s.base=u.base),u.configFn&&(s.configFn=u.configFn),this.addModule(s,i))),i},addAlias:function(e,t){YUI.Env.aliases[t]=e,this.addModule({name:t,use:e})},addGroup:function(e,t){var n=e.modules,r=this,i,s;t=t||e.name,e.name=t,r.groups[t]=e;if(e.patterns)for(i in e.patterns)e.patterns.hasOwnProperty(i)&&(e.patterns[i].group=t,r.patterns[i]=e.patterns[i]);if(n)for(i in n)n.hasOwnProperty(i)&&(s=n[i],typeof s=="string"&&(s={name:i,fullpath:s}),s.group=t,r.addModule(s,i))},addModule:function(t,n){n=n||t.name,typeof t=="string"&&(t={name:n,fullpath:t});var r,i,o,f,l,c,p,d,m,g,y,b,w,E,x,T,N,C,k,L,A,O,M=this.moduleInfo[n],_=this.conditions,D;M&&M.temp&&(t=e.merge(M,t)),t.name=n;if(!t||!t.name)return null;t.type||(t.type=a,O=t.path||t.fullpath,O&&this.REGEX_CSS.test(O)&&(t.type=u)),!t.path&&!t.fullpath&&(t.path=S(n,n,t.type)),t.supersedes=t.supersedes||t.use,t.ext="ext"in t?t.ext:this._internal?!1:!0,r=t.submodules,this.moduleInfo[n]=t,t.requires=t.requires||[];if(this.requires)for(i=0;i<this.requires.length;i++)t.requires.push(this.requires[i]);if(t.group&&this.groups&&this.groups[t.group]){A=this.groups[t.group];if(A.requires)for(i=0;i<A.requires.length;i++)t.requires.push(A.requires[i])}t.defaults||(t.defaults={requires:t.requires?[].concat(t.requires):null,supersedes:t.supersedes?[].concat(t.supersedes):null,optional:t.optional?[].concat(t.optional):null}),t.skinnable&&t.ext&&t.temp&&(k=this._addSkin(this.skin.defaultSkin,n),t.requires.unshift(k)),t.requires.length&&(t.requires=this.filterRequires(t.requires)||[]);if(!t.langPack&&t.lang){y=v(t.lang);for(g=0;g<y.length;g++)T=y[g],b=this.getLangPackName(T,n),p=this.getModuleInfo(b),p||(p=this._addLangPack(T,t,b))}if(r){l=t.supersedes||[],o=0;for(i in r)if(r.hasOwnProperty(i)){c=r[i],c.path=c.path||S(n,i,t.type),c.pkg=n,c.group=t.group,c.supersedes&&(l=l.concat(c.supersedes)),p=this.addModule(c,i),l.push(i);if(p.skinnable){t.skinnable=!0,C=this.skin.overrides;if(C&&C[i])for(g=0;g<C[i].length;g++)k=this._addSkin(C[i][g],i,n),l.push(k);k=this._addSkin(this.skin.defaultSkin,i,n),l.push(k)}if(c.lang&&c.lang.length){y=v(c.lang);for(g=0;g<y.length;g++)T=y[g],b=this.getLangPackName(T,n),w=this.getLangPackName(T,i),p=this.getModuleInfo(b),p||(p=this._addLangPack(T,t,b)),E=E||v.hash(p.supersedes),w in E||p.supersedes.push(w),t.lang=t.lang||[],x=x||v.hash(t.lang),T in x||t.lang.push(T),b=this.getLangPackName(h,n),w=this.getLangPackName(h,i),p=this.getModuleInfo(b),p||(p=this._addLangPack(T,t,b)),w in E||p.supersedes.push(w)}o++}t.supersedes=v.dedupe(l),this.allowRollup&&(t.rollup=o<4?o:Math.min(o-1,4))}d=t.plugins;if(d)for(i in d)d.hasOwnProperty(i)&&(m=d[i],m.pkg=n,m.path=m.path||S(n,i,t.type),m.requires=m.requires||[],m.group=t.group,this.addModule(m,i),t.skinnable&&this._addSkin(this.skin.defaultSkin,i,n));if(t.condition){f=this._expandAliases(t.condition.trigger);for(i=0;i<f.length;i++)D=f[i],L=t.condition.when,_[D]=_[D]||{},_[D][n]=t.condition,L&&L!=="after"?L==="instead"&&(t.supersedes=t.supersedes||[],t.supersedes.push(D)):(t.after=t.after||[],t.after.push(D))}return t.supersedes&&(t.supersedes=this.filterRequires(t.supersedes)),t.after&&(t.after=this.filterRequires(t.after),t.after_map=v.hash(t.after)),t.configFn&&(N=t.configFn(t),N===!1&&(delete this.moduleInfo[n],delete s._renderedMods[n],t=null)),t&&(s._renderedMods||(s._renderedMods={}),s._renderedMods[n]=e.mix(s._renderedMods[n]||{},t),s._conditions=_),t},require:function(t){var n=typeof t=="string"?v(arguments):t;this.dirty=!0,this.required=e.merge(this.required,v.hash(this.filterRequires(n))),this._explodeRollups()},_explodeRollups:function(){var e=this,t,n,r,i,s,o,u,a=e.required;if(!e.allowRollup){for(r in a)if(a.hasOwnProperty(r)){t=e.getModule(r);if(t&&t.use){o=t.use.length;for(i=0;i<o;i++){n=e.getModule(t.use[i]);if(n&&n.use){u=n.use.length;for(s=0;s<u;s++)a[n.use[s]]=!0}else a[t.use[i]]=!0}}}e.required=a}},filterRequires:function(t){if(t){e.Lang.isArray(t)||(t=[t]),t=e.Array(t);var n=[],r,i,s,o;for(r=0;r<t.length;r++){i=this.getModule(t[r]);if(i&&i.use)for(s=0;s<i.use.length;s++)o=this.getModule(i.use[s]),o&&o.use&&o.name!==i.name?n=e.Array.dedupe([].concat(n,this.filterRequires(o.use))):n.push(i.use[s]);else n.push(t[r])}t=n}return t},_canBeAttached:function(t){return t=this.getModule(t),t&&t.test?(t.hasOwnProperty("_testResult")||(t._testResult=t.test(e)),t._testResult):!0},getRequires:function(t){if(!t)return r;if(t._parsed)return t.expanded||r;var n,i,s,o,u,a,l,c=this.testresults,m=t.name,g,y=w[m]&&w[m].details,b=t.optionalRequires,E,S,x,T,N,C,k,L,A,O,M=t.lang||t.intl,_=e.Features&&e.Features.tests.load,D,P;t.temp&&y&&(N=t,t=this.addModule(y,m),t.group=N.group,t.pkg=
N.pkg,delete t.expanded),P=!!this.lang&&t.langCache!==this.lang||t.skinCache!==this.skin.defaultSkin;if(t.expanded&&!P)return t.expanded;if(b)for(n=0,o=b.length;n<o;n++)this._canBeAttached(b[n])&&t.requires.push(b[n]);E=[],D={},T=this.filterRequires(t.requires),t.lang&&(E.unshift("intl"),T.unshift("intl"),M=!0),C=this.filterRequires(t.optional),t._parsed=!0,t.langCache=this.lang,t.skinCache=this.skin.defaultSkin;for(n=0;n<T.length;n++)if(!D[T[n]]){E.push(T[n]),D[T[n]]=!0,i=this.getModule(T[n]);if(i){u=this.getRequires(i),M=M||i.expanded_map&&f in i.expanded_map;for(s=0;s<u.length;s++)E.push(u[s])}}T=this.filterRequires(t.supersedes);if(T)for(n=0;n<T.length;n++)if(!D[T[n]]){t.submodules&&E.push(T[n]),D[T[n]]=!0,i=this.getModule(T[n]);if(i){u=this.getRequires(i),M=M||i.expanded_map&&f in i.expanded_map;for(s=0;s<u.length;s++)E.push(u[s])}}if(C&&this.loadOptional)for(n=0;n<C.length;n++)if(!D[C[n]]){E.push(C[n]),D[C[n]]=!0,i=this.getModuleInfo(C[n]);if(i){u=this.getRequires(i),M=M||i.expanded_map&&f in i.expanded_map;for(s=0;s<u.length;s++)E.push(u[s])}}g=this.conditions[m];if(g){t._parsed=!1;if(c&&_)d(c,function(e,t){var n=_[t].name;!D[n]&&_[t].trigger===m&&e&&_[t]&&(D[n]=!0,E.push(n))});else for(n in g)if(g.hasOwnProperty(n)&&!D[n]){x=g[n],S=x&&(!x.ua&&!x.test||x.ua&&e.UA[x.ua]||x.test&&x.test(e,T));if(S){D[n]=!0,E.push(n),i=this.getModule(n);if(i){u=this.getRequires(i);for(s=0;s<u.length;s++)E.push(u[s])}}}}if(t.skinnable){L=this.skin.overrides;for(n in YUI.Env.aliases)YUI.Env.aliases.hasOwnProperty(n)&&e.Array.indexOf(YUI.Env.aliases[n],m)>-1&&(A=n);if(L&&(L[m]||A&&L[A])){O=m,L[A]&&(O=A);for(n=0;n<L[O].length;n++)k=this._addSkin(L[O][n],m),this.isCSSLoaded(k,this._boot)||E.push(k)}else k=this._addSkin(this.skin.defaultSkin,m),this.isCSSLoaded(k,this._boot)||E.push(k)}return t._parsed=!1,M&&(t.lang&&!t.langPack&&e.Intl&&(l=e.Intl.lookupBestLang(this.lang||h,t.lang),a=this.getLangPackName(l,m),a&&E.unshift(a)),E.unshift(f)),t.expanded_map=v.hash(E),t.expanded=p.keys(t.expanded_map),t.expanded},isCSSLoaded:function(t,n){if(!t||!YUI.Env.cssStampEl||!n&&this.ignoreRegistered)return!1;var r=YUI.Env.cssStampEl,i=!1,s=YUI.Env._cssLoaded[t],o=r.currentStyle;return s!==undefined?s:(r.className=t,o||(o=e.config.doc.defaultView.getComputedStyle(r,null)),o&&o.display==="none"&&(i=!0),r.className="",YUI.Env._cssLoaded[t]=i,i)},getProvides:function(t){var r=this.getModule(t),i,s;return r?(r&&!r.provides&&(i={},s=r.supersedes,s&&v.each(s,function(t){e.mix(i,this.getProvides(t))},this),i[t]=!0,r.provides=i),r.provides):n},calculate:function(e,t){if(e||t||this.dirty)e&&this._config(e),this._init||this._setup(),this._explode(),this.allowRollup?this._rollup():this._explodeRollups(),this._reduce(),this._sort()},_addLangPack:function(t,n,r){var i=n.name,s,o,u=this.getModuleInfo(r);return u||(s=S(n.pkg||i,r,a,!0),o={path:s,intl:!0,langPack:!0,ext:n.ext,group:n.group,supersedes:[]},n.root&&(o.root=n.root),n.base&&(o.base=n.base),n.configFn&&(o.configFn=n.configFn),this.addModule(o,r),t&&(e.Env.lang=e.Env.lang||{},e.Env.lang[t]=e.Env.lang[t]||{},e.Env.lang[t][i]=!0)),this.getModuleInfo(r)},_setup:function(){var t=this.moduleInfo,n,r,i,o,u,a;for(n in t)t.hasOwnProperty(n)&&(o=t[n],o&&(o.requires=v.dedupe(o.requires),o.lang&&(a=this.getLangPackName(h,n),this._addLangPack(null,o,a))));u={},this.ignoreRegistered||e.mix(u,s.mods),this.ignore&&e.mix(u,v.hash(this.ignore));for(i in u)u.hasOwnProperty(i)&&e.mix(u,this.getProvides(i));if(this.force)for(r=0;r<this.force.length;r++)this.force[r]in u&&delete u[this.force[r]];e.mix(this.loaded,u),this._init=!0},getLangPackName:function(e,t){return"lang/"+t+(e?"_"+e:"")},_explode:function(){var t=this.required,n,r,i={},s=this,o,u;s.dirty=!1,s._explodeRollups(),t=s.required;for(o in t)t.hasOwnProperty(o)&&(i[o]||(i[o]=!0,n=s.getModule(o),n&&(u=n.expound,u&&(t[u]=s.getModule(u),r=s.getRequires(t[u]),e.mix(t,v.hash(r))),r=s.getRequires(n),e.mix(t,v.hash(r)))))},_patternTest:function(e,t){return e.indexOf(t)>-1},getModule:function(t){if(!t)return null;var n,r,i,s=this.getModuleInfo(t),o=this.patterns;if(!s||s&&s.ext)for(i in o)if(o.hasOwnProperty(i)){n=o[i],n.test||(n.test=this._patternTest);if(n.test(t,i)){r=n;break}}return s?r&&s&&r.configFn&&!s.configFn&&(s.configFn=r.configFn,s.configFn(s)):r&&(n.action?n.action.call(this,t,i):(s=this.addModule(e.merge(r,{test:void 0,temp:!0}),t),r.configFn&&(s.configFn=r.configFn))),s},_rollup:function(){},_reduce:function(e){e=e||this.required;var t,n,r,i,s=this.loadType,o=this.ignore?v.hash(this.ignore):!1;for(t in e)if(e.hasOwnProperty(t)){i=this.getModule(t),((this.loaded[t]||w[t])&&!this.forceMap[t]&&!this.ignoreRegistered||s&&i&&i.type!==s)&&delete e[t],o&&o[t]&&delete e[t],r=i&&i.supersedes;if(r)for(n=0;n<r.length;n++)r[n]in e&&delete e[r[n]]}return e},_finish:function(e,t){m.running=!1;var n=this.onEnd;n&&n.call(this.context,{msg:e,data:this.data,success:t}),this._continue()},_onSuccess:function(){var t=this,n=e.merge(t.skipped),r,i=[],s=t.requireRegistration,o,u,f,l;for(f in n)n.hasOwnProperty(f)&&delete t.inserted[f];t.skipped={};for(f in t.inserted)t.inserted.hasOwnProperty(f)&&(l=t.getModule(f),!l||!s||l.type!==a||f in YUI.Env.mods?e.mix(t.loaded,t.getProvides(f)):i.push(f));r=t.onSuccess,u=i.length?"notregistered":"success",o=!i.length,r&&r.call(t.context,{msg:u,data:t.data,success:o,failed:i,skipped:n}),t._finish(u,o)},_onProgress:function(e){var t=this,n;if(e.data&&e.data.length)for(n=0;n<e.data.length;n++)e.data[n]=t.getModule(e.data[n].name);t.onProgress&&t.onProgress.call(t.context,{name:e.url,data:e.data})},_onFailure:function(e){var t=this.onFailure,n=[],r=0,i=e.errors.length;for(r;r<i;r++)n.push(e.errors[r].error);n=n.join(","),t&&t.call(this.context,{msg:n,data:this.data,success:!1}),this._finish(n,!1)},_onTimeout:function(e){var t=this.onTimeout;t&&t.call(this.context,{msg:"timeout",data:this.data,success:!1,transaction:e})},_sort:function(){var e,t=this.required,n={};this.sorted=[];for(e in t)!n[e]&&t.hasOwnProperty(e)&&
this._visit(e,n)},_visit:function(e,t){var n,r,i,s,o,u,a,f,l;t[e]=!0,n=this.required,i=this.moduleInfo[e],r=this.conditions[e]||{};if(i){o=i.expanded||i.requires;for(f=0,l=o.length;f<l;++f)s=o[f],u=r[s],a=u&&(!u.when||u.when==="after"),n[s]&&!t[s]&&!a&&this._visit(s,t)}this.sorted.push(e)},_insert:function(t,n,r,i){t&&this._config(t);var s=this.resolve(!i),o=this,f=0,l=0,c={},h,p;o._refetch=[],r&&(s[r===a?u:a]=[]),o.fetchCSS||(s.css=[]),s.js.length&&f++,s.css.length&&f++,p=function(t){l++;var n={},r=0,i=0,s="",u,a,p;if(t&&t.errors)for(r=0;r<t.errors.length;r++)t.errors[r].request?s=t.errors[r].request.url:s=t.errors[r],n[s]=s;if(t&&t.data&&t.data.length&&t.type==="success")for(r=0;r<t.data.length;r++){o.inserted[t.data[r].name]=!0;if(t.data[r].lang||t.data[r].skinnable)delete o.inserted[t.data[r].name],o._refetch.push(t.data[r].name)}if(l===f){o._loading=null;if(o._refetch.length){for(r=0;r<o._refetch.length;r++){h=o.getRequires(o.getModule(o._refetch[r]));for(i=0;i<h.length;i++)o.inserted[h[i]]||(c[h[i]]=h[i])}c=e.Object.keys(c);if(c.length){o.require(c),p=o.resolve(!0);if(p.cssMods.length){for(r=0;r<p.cssMods.length;r++)a=p.cssMods[r].name,delete YUI.Env._cssLoaded[a],o.isCSSLoaded(a)&&(o.inserted[a]=!0,delete o.required[a]);o.sorted=[],o._sort()}t=null,o._insert()}}t&&t.fn&&(u=t.fn,delete t.fn,u.call(o,t))}},this._loading=!0;if(!s.js.length&&!s.css.length){l=-1,p({fn:o._onSuccess});return}s.css.length&&e.Get.css(s.css,{data:s.cssMods,attributes:o.cssAttributes,insertBefore:o.insertBefore,charset:o.charset,timeout:o.timeout,context:o,onProgress:function(e){o._onProgress.call(o,e)},onTimeout:function(e){o._onTimeout.call(o,e)},onSuccess:function(e){e.type="success",e.fn=o._onSuccess,p.call(o,e)},onFailure:function(e){e.type="failure",e.fn=o._onFailure,p.call(o,e)}}),s.js.length&&e.Get.js(s.js,{data:s.jsMods,insertBefore:o.insertBefore,attributes:o.jsAttributes,charset:o.charset,timeout:o.timeout,autopurge:!1,context:o,async:o.async,onProgress:function(e){o._onProgress.call(o,e)},onTimeout:function(e){o._onTimeout.call(o,e)},onSuccess:function(e){e.type="success",e.fn=o._onSuccess,p.call(o,e)},onFailure:function(e){e.type="failure",e.fn=o._onFailure,p.call(o,e)}})},_continue:function(){!m.running&&m.size()>0&&(m.running=!0,m.next()())},insert:function(t,n,r){var i=this,s=e.merge(this);delete s.require,delete s.dirty,m.add(function(){i._insert(s,t,n,r)}),this._continue()},loadNext:function(){return},_filter:function(e,t,n){var r=this.filter,i=t&&t in this.filters,s=i&&this.filters[t],o=n||(this.getModuleInfo(t)||{}).group||null;return o&&this.groups[o]&&this.groups[o].filter&&(s=this.groups[o].filter,i=!0),e&&(i&&(r=b.isString(s)?this.FILTER_DEFS[s.toUpperCase()]||null:s),r&&(e=e.replace(new RegExp(r.searchExp,"g"),r.replaceStr))),e},_url:function(e,t,n){return this._filter((n||this.base||"")+e,t)},resolve:function(e,t){var r=this,s={js:[],jsMods:[],css:[],cssMods:[]},o;(r.skin.overrides||r.skin.defaultSkin!==l||r.ignoreRegistered)&&r._resetModules(),e&&r.calculate(),t=t||r.sorted,o=function(e){if(e){var t=e.group&&r.groups[e.group]||n,i;t.async===!1&&(e.async=t.async),i=e.fullpath?r._filter(e.fullpath,e.name):r._url(e.path,e.name,t.base||e.base);if(e.attributes||e.async===!1)i={url:i,async:e.async},e.attributes&&(i.attributes=e.attributes);s[e.type].push(i),s[e.type+"Mods"].push(e)}};var f=r.ignoreRegistered?{}:r.inserted,c={},h,p,d,v,m,g,y,b;for(b=0,y=t.length;b<y;b++){g=r.getModule(t[b]);if(!g||f[g.name])continue;m=r.groups[g.group],d=r.comboBase;if(m){if(!m.combine||g.fullpath){o(g);continue}g.combine=!0,typeof m.root=="string"&&(g.root=m.root),d=m.comboBase||d,v=m.comboSep,h=m.maxURLLength}else if(!r.combine){o(g);continue}if(!g.combine&&g.ext){o(g);continue}c[d]=c[d]||{js:[],jsMods:[],css:[],cssMods:[]},p=c[d],p.group=g.group,p.comboSep=v||r.comboSep,p.maxURLLength=h||r.maxURLLength,p[g.type+"Mods"].push(g)}var w,E,S,x,T,N,C;for(d in c)if(c.hasOwnProperty(d)){p=c[d],v=p.comboSep,h=p.maxURLLength;for(C in p)if(C===a||C===u){E=p[C+"Mods"],T=[];for(b=0,y=E.length;b<y;b+=1)g=E[b],N=(typeof g.root=="string"?g.root:r.root)+(g.path||g.fullpath),T.push(r._filter(N,g.name));S=d+T.join(v),x=S.length,h<=d.length&&(h=i);if(T.length)if(x>h){w=[];for(b=0,y=T.length;b<y;b++)w.push(T[b]),S=d+w.join(v),S.length>h&&(N=w.pop(),S=d+w.join(v),s[C].push(r._filter(S,null,p.group)),w=[],N&&w.push(N));w.length&&(S=d+w.join(v),s[C].push(r._filter(S,null,p.group)))}else s[C].push(r._filter(S,null,p.group));s[C+"Mods"]=s[C+"Mods"].concat(E)}}return s},load:function(e){if(!e)return;var t=this,n=t.resolve(!0);t.data=n,t.onEnd=function(){e.apply(t.context||t,arguments)},t.insert()}}},"3.17.2",{requires:["get","features"]}),YUI.add("loader-rollup",function(e,t){e.Loader.prototype._rollup=function(){var e,t,n,r,i=this.required,s,o=this.moduleInfo,u,a,f;if(this.dirty||!this.rollups){this.rollups={};for(e in o)o.hasOwnProperty(e)&&(n=this.getModule(e),n&&n.rollup&&(this.rollups[e]=n))}for(;;){u=!1;for(e in this.rollups)if(this.rollups.hasOwnProperty(e)&&!i[e]&&(!this.loaded[e]||this.forceMap[e])){n=this.getModule(e),r=n.supersedes||[],s=!1;if(!n.rollup)continue;a=0;for(t=0;t<r.length;t++){f=o[r[t]];if(this.loaded[r[t]]&&!this.forceMap[r[t]]){s=!1;break}if(i[r[t]]&&n.type===f.type){a++,s=a>=n.rollup;if(s)break}}s&&(i[e]=!0,u=!0,this.getRequires(n))}if(!u)break}}},"3.17.2",{requires:["loader-base"]}),YUI.add("loader-yui3",function(e,t){YUI.Env[e.version].modules=YUI.Env[e.version].modules||{},e.mix(YUI.Env[e.version].modules,{"align-plugin":{requires:["node-screen","node-pluginhost"]},anim:{use:["anim-base","anim-color","anim-curve","anim-easing","anim-node-plugin","anim-scroll","anim-xy"]},"anim-base":{requires:["base-base","node-style","color-base"]},"anim-color":{requires:["anim-base"]},"anim-curve":{requires:["anim-xy"]},"anim-easing":{requires:["anim-base"]},"anim-node-plugin":{requires:["node-pluginhost","anim-base"]},"anim-scroll":{requires:["anim-base"]},"anim-shape":{requires:["anim-base","anim-easing","anim-color"
,"matrix"]},"anim-shape-transform":{use:["anim-shape"]},"anim-xy":{requires:["anim-base","node-screen"]},app:{use:["app-base","app-content","app-transitions","lazy-model-list","model","model-list","model-sync-rest","model-sync-local","router","view","view-node-map"]},"app-base":{requires:["classnamemanager","pjax-base","router","view"]},"app-content":{requires:["app-base","pjax-content"]},"app-transitions":{requires:["app-base"]},"app-transitions-css":{type:"css"},"app-transitions-native":{condition:{name:"app-transitions-native",test:function(e){var t=e.config.doc,n=t?t.documentElement:null;return n&&n.style?"MozTransition"in n.style||"WebkitTransition"in n.style||"transition"in n.style:!1},trigger:"app-transitions"},requires:["app-transitions","app-transitions-css","parallel","transition"]},"array-extras":{requires:["yui-base"]},"array-invoke":{requires:["yui-base"]},arraylist:{requires:["yui-base"]},"arraylist-add":{requires:["arraylist"]},"arraylist-filter":{requires:["arraylist"]},arraysort:{requires:["yui-base"]},"async-queue":{requires:["event-custom"]},attribute:{use:["attribute-base","attribute-complex"]},"attribute-base":{requires:["attribute-core","attribute-observable","attribute-extras"]},"attribute-complex":{requires:["attribute-base"]},"attribute-core":{requires:["oop"]},"attribute-events":{use:["attribute-observable"]},"attribute-extras":{requires:["oop"]},"attribute-observable":{requires:["event-custom"]},autocomplete:{use:["autocomplete-base","autocomplete-sources","autocomplete-list","autocomplete-plugin"]},"autocomplete-base":{optional:["autocomplete-sources"],requires:["array-extras","base-build","escape","event-valuechange","node-base"]},"autocomplete-filters":{requires:["array-extras","text-wordbreak"]},"autocomplete-filters-accentfold":{requires:["array-extras","text-accentfold","text-wordbreak"]},"autocomplete-highlighters":{requires:["array-extras","highlight-base"]},"autocomplete-highlighters-accentfold":{requires:["array-extras","highlight-accentfold"]},"autocomplete-list":{after:["autocomplete-sources"],lang:["en","es","hu","it"],requires:["autocomplete-base","event-resize","node-screen","selector-css3","shim-plugin","widget","widget-position","widget-position-align"],skinnable:!0},"autocomplete-list-keys":{condition:{name:"autocomplete-list-keys",test:function(e){return!e.UA.ios&&!e.UA.android},trigger:"autocomplete-list"},requires:["autocomplete-list","base-build"]},"autocomplete-plugin":{requires:["autocomplete-list","node-pluginhost"]},"autocomplete-sources":{optional:["io-base","json-parse","jsonp","yql"],requires:["autocomplete-base"]},axes:{use:["axis-numeric","axis-category","axis-time","axis-stacked"]},"axes-base":{use:["axis-numeric-base","axis-category-base","axis-time-base","axis-stacked-base"]},axis:{requires:["dom","widget","widget-position","widget-stack","graphics","axis-base"]},"axis-base":{requires:["classnamemanager","datatype-number","datatype-date","base","event-custom"]},"axis-category":{requires:["axis","axis-category-base"]},"axis-category-base":{requires:["axis-base"]},"axis-numeric":{requires:["axis","axis-numeric-base"]},"axis-numeric-base":{requires:["axis-base"]},"axis-stacked":{requires:["axis-numeric","axis-stacked-base"]},"axis-stacked-base":{requires:["axis-numeric-base"]},"axis-time":{requires:["axis","axis-time-base"]},"axis-time-base":{requires:["axis-base"]},base:{use:["base-base","base-pluginhost","base-build"]},"base-base":{requires:["attribute-base","base-core","base-observable"]},"base-build":{requires:["base-base"]},"base-core":{requires:["attribute-core"]},"base-observable":{requires:["attribute-observable","base-core"]},"base-pluginhost":{requires:["base-base","pluginhost"]},button:{requires:["button-core","cssbutton","widget"]},"button-core":{requires:["attribute-core","classnamemanager","node-base","escape"]},"button-group":{requires:["button-plugin","cssbutton","widget"]},"button-plugin":{requires:["button-core","cssbutton","node-pluginhost"]},cache:{use:["cache-base","cache-offline","cache-plugin"]},"cache-base":{requires:["base"]},"cache-offline":{requires:["cache-base","json"]},"cache-plugin":{requires:["plugin","cache-base"]},calendar:{requires:["calendar-base","calendarnavigator"],skinnable:!0},"calendar-base":{lang:["de","en","es","es-AR","fr","hu","it","ja","nb-NO","nl","pt-BR","ru","zh-Hans","zh-Hans-CN","zh-Hant","zh-Hant-HK","zh-HANT-TW"],requires:["widget","datatype-date","datatype-date-math","cssgrids"],skinnable:!0},calendarnavigator:{requires:["plugin","classnamemanager","datatype-date","node"],skinnable:!0},charts:{use:["charts-base"]},"charts-base":{requires:["dom","event-mouseenter","event-touch","graphics-group","axes","series-pie","series-line","series-marker","series-area","series-spline","series-column","series-bar","series-areaspline","series-combo","series-combospline","series-line-stacked","series-marker-stacked","series-area-stacked","series-spline-stacked","series-column-stacked","series-bar-stacked","series-areaspline-stacked","series-combo-stacked","series-combospline-stacked"]},"charts-legend":{requires:["charts-base"]},classnamemanager:{requires:["yui-base"]},"clickable-rail":{requires:["slider-base"]},collection:{use:["array-extras","arraylist","arraylist-add","arraylist-filter","array-invoke"]},color:{use:["color-base","color-hsl","color-harmony"]},"color-base":{requires:["yui-base"]},"color-harmony":{requires:["color-hsl"]},"color-hsl":{requires:["color-base"]},"color-hsv":{requires:["color-base"]},console:{lang:["en","es","hu","it","ja"],requires:["yui-log","widget"],skinnable:!0},"console-filters":{requires:["plugin","console"],skinnable:!0},"content-editable":{requires:["node-base","editor-selection","stylesheet","plugin"]},controller:{use:["router"]},cookie:{requires:["yui-base"]},"createlink-base":{requires:["editor-base"]},cssbase:{after:["cssreset","cssfonts","cssgrids","cssreset-context","cssfonts-context","cssgrids-context"],type:"css"},"cssbase-context":{after:["cssreset"
,"cssfonts","cssgrids","cssreset-context","cssfonts-context","cssgrids-context"],type:"css"},cssbutton:{type:"css"},cssfonts:{type:"css"},"cssfonts-context":{type:"css"},cssgrids:{optional:["cssnormalize"],type:"css"},"cssgrids-base":{optional:["cssnormalize"],type:"css"},"cssgrids-responsive":{optional:["cssnormalize"],requires:["cssgrids","cssgrids-responsive-base"],type:"css"},"cssgrids-units":{optional:["cssnormalize"],requires:["cssgrids-base"],type:"css"},cssnormalize:{type:"css"},"cssnormalize-context":{type:"css"},cssreset:{type:"css"},"cssreset-context":{type:"css"},dataschema:{use:["dataschema-base","dataschema-json","dataschema-xml","dataschema-array","dataschema-text"]},"dataschema-array":{requires:["dataschema-base"]},"dataschema-base":{requires:["base"]},"dataschema-json":{requires:["dataschema-base","json"]},"dataschema-text":{requires:["dataschema-base"]},"dataschema-xml":{requires:["dataschema-base"]},datasource:{use:["datasource-local","datasource-io","datasource-get","datasource-function","datasource-cache","datasource-jsonschema","datasource-xmlschema","datasource-arrayschema","datasource-textschema","datasource-polling"]},"datasource-arrayschema":{requires:["datasource-local","plugin","dataschema-array"]},"datasource-cache":{requires:["datasource-local","plugin","cache-base"]},"datasource-function":{requires:["datasource-local"]},"datasource-get":{requires:["datasource-local","get"]},"datasource-io":{requires:["datasource-local","io-base"]},"datasource-jsonschema":{requires:["datasource-local","plugin","dataschema-json"]},"datasource-local":{requires:["base"]},"datasource-polling":{requires:["datasource-local"]},"datasource-textschema":{requires:["datasource-local","plugin","dataschema-text"]},"datasource-xmlschema":{requires:["datasource-local","plugin","datatype-xml","dataschema-xml"]},datatable:{use:["datatable-core","datatable-table","datatable-head","datatable-body","datatable-base","datatable-column-widths","datatable-message","datatable-mutable","datatable-sort","datatable-datasource"]},"datatable-base":{requires:["datatable-core","datatable-table","datatable-head","datatable-body","base-build","widget"],skinnable:!0},"datatable-body":{requires:["datatable-core","view","classnamemanager"]},"datatable-column-widths":{requires:["datatable-base"]},"datatable-core":{requires:["escape","model-list","node-event-delegate"]},"datatable-datasource":{requires:["datatable-base","plugin","datasource-local"]},"datatable-foot":{requires:["datatable-core","view"]},"datatable-formatters":{requires:["datatable-body","datatype-number-format","datatype-date-format","escape"]},"datatable-head":{requires:["datatable-core","view","classnamemanager"]},"datatable-highlight":{requires:["datatable-base","event-hover"],skinnable:!0},"datatable-keynav":{requires:["datatable-base"]},"datatable-message":{lang:["en","fr","es","hu","it"],requires:["datatable-base"],skinnable:!0},"datatable-mutable":{requires:["datatable-base"]},"datatable-paginator":{lang:["en","fr"],requires:["model","view","paginator-core","datatable-foot","datatable-paginator-templates"],skinnable:!0},"datatable-paginator-templates":{requires:["template"]},"datatable-scroll":{requires:["datatable-base","datatable-column-widths","dom-screen"],skinnable:!0},"datatable-sort":{lang:["en","fr","es","hu"],requires:["datatable-base"],skinnable:!0},"datatable-table":{requires:["datatable-core","datatable-head","datatable-body","view","classnamemanager"]},datatype:{use:["datatype-date","datatype-number","datatype-xml"]},"datatype-date":{use:["datatype-date-parse","datatype-date-format","datatype-date-math"]},"datatype-date-format":{lang:["ar","ar-JO","ca","ca-ES","da","da-DK","de","de-AT","de-DE","el","el-GR","en","en-AU","en-CA","en-GB","en-IE","en-IN","en-JO","en-MY","en-NZ","en-PH","en-SG","en-US","es","es-AR","es-BO","es-CL","es-CO","es-EC","es-ES","es-MX","es-PE","es-PY","es-US","es-UY","es-VE","fi","fi-FI","fr","fr-BE","fr-CA","fr-FR","hi","hi-IN","hu","id","id-ID","it","it-IT","ja","ja-JP","ko","ko-KR","ms","ms-MY","nb","nb-NO","nl","nl-BE","nl-NL","pl","pl-PL","pt","pt-BR","ro","ro-RO","ru","ru-RU","sv","sv-SE","th","th-TH","tr","tr-TR","vi","vi-VN","zh-Hans","zh-Hans-CN","zh-Hant","zh-Hant-HK","zh-Hant-TW"]},"datatype-date-math":{requires:["yui-base"]},"datatype-date-parse":{},"datatype-number":{use:["datatype-number-parse","datatype-number-format"]},"datatype-number-format":{},"datatype-number-parse":{requires:["escape"]},"datatype-xml":{use:["datatype-xml-parse","datatype-xml-format"]},"datatype-xml-format":{},"datatype-xml-parse":{},dd:{use:["dd-ddm-base","dd-ddm","dd-ddm-drop","dd-drag","dd-proxy","dd-constrain","dd-drop","dd-scroll","dd-delegate"]},"dd-constrain":{requires:["dd-drag"]},"dd-ddm":{requires:["dd-ddm-base","event-resize"]},"dd-ddm-base":{requires:["node","base","yui-throttle","classnamemanager"]},"dd-ddm-drop":{requires:["dd-ddm"]},"dd-delegate":{requires:["dd-drag","dd-drop-plugin","event-mouseenter"]},"dd-drag":{requires:["dd-ddm-base"]},"dd-drop":{requires:["dd-drag","dd-ddm-drop"]},"dd-drop-plugin":{requires:["dd-drop"]},"dd-gestures":{condition:{name:"dd-gestures",trigger:"dd-drag",ua:"touchEnabled"},requires:["dd-drag","event-synthetic","event-gestures"]},"dd-plugin":{optional:["dd-constrain","dd-proxy"],requires:["dd-drag"]},"dd-proxy":{requires:["dd-drag"]},"dd-scroll":{requires:["dd-drag"]},dial:{lang:["en","es","hu"],requires:["widget","dd-drag","event-mouseenter","event-move","event-key","transition","intl"],skinnable:!0},dom:{use:["dom-base","dom-screen","dom-style","selector-native","selector"]},"dom-base":{requires:["dom-core"]},"dom-core":{requires:["oop","features"]},"dom-screen":{requires:["dom-base","dom-style"]},"dom-style":{requires:["dom-base"]},"dom-style-ie":{condition:{name:"dom-style-ie",test:function(e){var t=e.Features.test,n=e.Features.add,r=e.config.win,i=e.config.doc,s="documentElement",o=!1;return n("style","computedStyle",{test:function(){return r&&"getComputedStyle"in r}})
,n("style","opacity",{test:function(){return i&&"opacity"in i[s].style}}),o=!t("style","opacity")&&!t("style","computedStyle"),o},trigger:"dom-style"},requires:["dom-style","color-base"]},dump:{requires:["yui-base"]},editor:{use:["frame","editor-selection","exec-command","editor-base","editor-para","editor-br","editor-bidi","editor-tab","createlink-base"]},"editor-base":{requires:["base","frame","node","exec-command","editor-selection"]},"editor-bidi":{requires:["editor-base"]},"editor-br":{requires:["editor-base"]},"editor-inline":{requires:["editor-base","content-editable"]},"editor-lists":{requires:["editor-base"]},"editor-para":{requires:["editor-para-base"]},"editor-para-base":{requires:["editor-base"]},"editor-para-ie":{condition:{name:"editor-para-ie",trigger:"editor-para",ua:"ie",when:"instead"},requires:["editor-para-base"]},"editor-selection":{requires:["node"]},"editor-tab":{requires:["editor-base"]},escape:{requires:["yui-base"]},event:{after:["node-base"],use:["event-base","event-delegate","event-synthetic","event-mousewheel","event-mouseenter","event-key","event-focus","event-resize","event-hover","event-outside","event-touch","event-move","event-flick","event-valuechange","event-tap"]},"event-base":{after:["node-base"],requires:["event-custom-base"]},"event-base-ie":{after:["event-base"],condition:{name:"event-base-ie",test:function(e){var t=e.config.doc&&e.config.doc.implementation;return t&&!t.hasFeature("Events","2.0")},trigger:"node-base"},requires:["node-base"]},"event-contextmenu":{requires:["event-synthetic","dom-screen"]},"event-custom":{use:["event-custom-base","event-custom-complex"]},"event-custom-base":{requires:["oop"]},"event-custom-complex":{requires:["event-custom-base"]},"event-delegate":{requires:["node-base"]},"event-flick":{requires:["node-base","event-touch","event-synthetic"]},"event-focus":{requires:["event-synthetic"]},"event-gestures":{use:["event-flick","event-move"]},"event-hover":{requires:["event-mouseenter"]},"event-key":{requires:["event-synthetic"]},"event-mouseenter":{requires:["event-synthetic"]},"event-mousewheel":{requires:["node-base"]},"event-move":{requires:["node-base","event-touch","event-synthetic"]},"event-outside":{requires:["event-synthetic"]},"event-resize":{requires:["node-base","event-synthetic"]},"event-simulate":{requires:["event-base"]},"event-synthetic":{requires:["node-base","event-custom-complex"]},"event-tap":{requires:["node-base","event-base","event-touch","event-synthetic"]},"event-touch":{requires:["node-base"]},"event-valuechange":{requires:["event-focus","event-synthetic"]},"exec-command":{requires:["frame"]},features:{requires:["yui-base"]},file:{requires:["file-flash","file-html5"]},"file-flash":{requires:["base"]},"file-html5":{requires:["base"]},frame:{requires:["base","node","plugin","selector-css3","yui-throttle"]},"gesture-simulate":{requires:["async-queue","event-simulate","node-screen"]},get:{requires:["yui-base"]},graphics:{requires:["node","event-custom","pluginhost","matrix","classnamemanager"]},"graphics-canvas":{condition:{name:"graphics-canvas",test:function(e){var t=e.config.doc,n=e.config.defaultGraphicEngine&&e.config.defaultGraphicEngine=="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return(!i||n)&&r&&r.getContext&&r.getContext("2d")},trigger:"graphics"},requires:["graphics","color-base"]},"graphics-canvas-default":{condition:{name:"graphics-canvas-default",test:function(e){var t=e.config.doc,n=e.config.defaultGraphicEngine&&e.config.defaultGraphicEngine=="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return(!i||n)&&r&&r.getContext&&r.getContext("2d")},trigger:"graphics"}},"graphics-group":{requires:["graphics"]},"graphics-svg":{condition:{name:"graphics-svg",test:function(e){var t=e.config.doc,n=!e.config.defaultGraphicEngine||e.config.defaultGraphicEngine!="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return i&&(n||!r)},trigger:"graphics"},requires:["graphics"]},"graphics-svg-default":{condition:{name:"graphics-svg-default",test:function(e){var t=e.config.doc,n=!e.config.defaultGraphicEngine||e.config.defaultGraphicEngine!="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return i&&(n||!r)},trigger:"graphics"}},"graphics-vml":{condition:{name:"graphics-vml",test:function(e){var t=e.config.doc,n=t&&t.createElement("canvas");return t&&!t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")&&(!n||!n.getContext||!n.getContext("2d"))},trigger:"graphics"},requires:["graphics","color-base"]},"graphics-vml-default":{condition:{name:"graphics-vml-default",test:function(e){var t=e.config.doc,n=t&&t.createElement("canvas");return t&&!t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")&&(!n||!n.getContext||!n.getContext("2d"))},trigger:"graphics"}},handlebars:{use:["handlebars-compiler"]},"handlebars-base":{requires:[]},"handlebars-compiler":{requires:["handlebars-base"]},highlight:{use:["highlight-base","highlight-accentfold"]},"highlight-accentfold":{requires:["highlight-base","text-accentfold"]},"highlight-base":{requires:["array-extras","classnamemanager","escape","text-wordbreak"]},history:{use:["history-base","history-hash","history-html5"]},"history-base":{requires:["event-custom-complex"]},"history-hash":{after:["history-html5"],requires:["event-synthetic","history-base","yui-later"]},"history-hash-ie":{condition:{name:"history-hash-ie",test:function(e){var t=e.config.doc&&e.config.doc.documentMode;return e.UA.ie&&(!("onhashchange"in e.config.win)||!t||t<8)},trigger:"history-hash"},requires:["history-hash","node-base"]},"history-html5":{optional:["json"],requires:["event-base","history-base","node-base"
]},imageloader:{requires:["base-base","node-style","node-screen"]},intl:{requires:["intl-base","event-custom"]},"intl-base":{requires:["yui-base"]},io:{use:["io-base","io-xdr","io-form","io-upload-iframe","io-queue"]},"io-base":{requires:["event-custom-base","querystring-stringify-simple"]},"io-form":{requires:["io-base","node-base"]},"io-nodejs":{condition:{name:"io-nodejs",trigger:"io-base",ua:"nodejs"},requires:["io-base"]},"io-queue":{requires:["io-base","queue-promote"]},"io-upload-iframe":{requires:["io-base","node-base"]},"io-xdr":{requires:["io-base","datatype-xml-parse"]},json:{use:["json-parse","json-stringify"]},"json-parse":{requires:["yui-base"]},"json-parse-shim":{condition:{name:"json-parse-shim",test:function(e){function i(e,t){return e==="ok"?!0:t}var t=e.config.global.JSON,n=Object.prototype.toString.call(t)==="[object JSON]"&&t,r=e.config.useNativeJSONParse!==!1&&!!n;if(r)try{r=n.parse('{"ok":false}',i).ok}catch(s){r=!1}return!r},trigger:"json-parse"},requires:["json-parse"]},"json-stringify":{requires:["yui-base"]},"json-stringify-shim":{condition:{name:"json-stringify-shim",test:function(e){var t=e.config.global.JSON,n=Object.prototype.toString.call(t)==="[object JSON]"&&t,r=e.config.useNativeJSONStringify!==!1&&!!n;if(r)try{r="0"===n.stringify(0)}catch(i){r=!1}return!r},trigger:"json-stringify"},requires:["json-stringify"]},jsonp:{requires:["get","oop"]},"jsonp-url":{requires:["jsonp"]},"lazy-model-list":{requires:["model-list"]},loader:{use:["loader-base","loader-rollup","loader-yui3"]},"loader-base":{requires:["get","features"]},"loader-rollup":{requires:["loader-base"]},"loader-yui3":{requires:["loader-base"]},matrix:{requires:["yui-base"]},model:{requires:["base-build","escape","json-parse"]},"model-list":{requires:["array-extras","array-invoke","arraylist","base-build","escape","json-parse","model"]},"model-sync-local":{requires:["model","json-stringify"]},"model-sync-rest":{requires:["model","io-base","json-stringify"]},node:{use:["node-base","node-event-delegate","node-pluginhost","node-screen","node-style"]},"node-base":{requires:["event-base","node-core","dom-base","dom-style"]},"node-core":{requires:["dom-core","selector"]},"node-event-delegate":{requires:["node-base","event-delegate"]},"node-event-html5":{requires:["node-base"]},"node-event-simulate":{requires:["node-base","event-simulate","gesture-simulate"]},"node-flick":{requires:["classnamemanager","transition","event-flick","plugin"],skinnable:!0},"node-focusmanager":{requires:["attribute","node","plugin","node-event-simulate","event-key","event-focus"]},"node-load":{requires:["node-base","io-base"]},"node-menunav":{requires:["node","classnamemanager","plugin","node-focusmanager"],skinnable:!0},"node-pluginhost":{requires:["node-base","pluginhost"]},"node-screen":{requires:["dom-screen","node-base"]},"node-scroll-info":{requires:["array-extras","base-build","event-resize","node-pluginhost","plugin","selector"]},"node-style":{requires:["dom-style","node-base"]},oop:{requires:["yui-base"]},overlay:{requires:["widget","widget-stdmod","widget-position","widget-position-align","widget-stack","widget-position-constrain"],skinnable:!0},paginator:{requires:["paginator-core"]},"paginator-core":{requires:["base"]},"paginator-url":{requires:["paginator"]},panel:{requires:["widget","widget-autohide","widget-buttons","widget-modality","widget-position","widget-position-align","widget-position-constrain","widget-stack","widget-stdmod"],skinnable:!0},parallel:{requires:["yui-base"]},pjax:{requires:["pjax-base","pjax-content"]},"pjax-base":{requires:["classnamemanager","node-event-delegate","router"]},"pjax-content":{requires:["io-base","node-base","router"]},"pjax-plugin":{requires:["node-pluginhost","pjax","plugin"]},plugin:{requires:["base-base"]},pluginhost:{use:["pluginhost-base","pluginhost-config"]},"pluginhost-base":{requires:["yui-base"]},"pluginhost-config":{requires:["pluginhost-base"]},promise:{requires:["timers"]},querystring:{use:["querystring-parse","querystring-stringify"]},"querystring-parse":{requires:["yui-base","array-extras"]},"querystring-parse-simple":{requires:["yui-base"]},"querystring-stringify":{requires:["yui-base"]},"querystring-stringify-simple":{requires:["yui-base"]},"queue-promote":{requires:["yui-base"]},"range-slider":{requires:["slider-base","slider-value-range","clickable-rail"]},recordset:{use:["recordset-base","recordset-sort","recordset-filter","recordset-indexer"]},"recordset-base":{requires:["base","arraylist"]},"recordset-filter":{requires:["recordset-base","array-extras","plugin"]},"recordset-indexer":{requires:["recordset-base","plugin"]},"recordset-sort":{requires:["arraysort","recordset-base","plugin"]},resize:{use:["resize-base","resize-proxy","resize-constrain"]},"resize-base":{requires:["base","widget","event","oop","dd-drag","dd-delegate","dd-drop"],skinnable:!0},"resize-constrain":{requires:["plugin","resize-base"]},"resize-plugin":{optional:["resize-constrain"],requires:["resize-base","plugin"]},"resize-proxy":{requires:["plugin","resize-base"]},router:{optional:["querystring-parse"],requires:["array-extras","base-build","history"]},scrollview:{requires:["scrollview-base","scrollview-scrollbars"]},"scrollview-base":{requires:["widget","event-gestures","event-mousewheel","transition"],skinnable:!0},"scrollview-base-ie":{condition:{name:"scrollview-base-ie",trigger:"scrollview-base",ua:"ie"},requires:["scrollview-base"]},"scrollview-list":{requires:["plugin","classnamemanager"],skinnable:!0},"scrollview-paginator":{requires:["plugin","classnamemanager"]},"scrollview-scrollbars":{requires:["classnamemanager","transition","plugin"],skinnable:!0},selector:{requires:["selector-native"]},"selector-css2":{condition:{name:"selector-css2",test:function(e){var t=e.config.doc,n=t&&!("querySelectorAll"in t);return n},trigger:"selector"},requires:["selector-native"]},"selector-css3":{requires:["selector-native","selector-css2"]},"selector-native":{requires:["dom-base"]},"series-area"
:{requires:["series-cartesian","series-fill-util"]},"series-area-stacked":{requires:["series-stacked","series-area"]},"series-areaspline":{requires:["series-area","series-curve-util"]},"series-areaspline-stacked":{requires:["series-stacked","series-areaspline"]},"series-bar":{requires:["series-marker","series-histogram-base"]},"series-bar-stacked":{requires:["series-stacked","series-bar"]},"series-base":{requires:["graphics","axis-base"]},"series-candlestick":{requires:["series-range"]},"series-cartesian":{requires:["series-base"]},"series-column":{requires:["series-marker","series-histogram-base"]},"series-column-stacked":{requires:["series-stacked","series-column"]},"series-combo":{requires:["series-cartesian","series-line-util","series-plot-util","series-fill-util"]},"series-combo-stacked":{requires:["series-stacked","series-combo"]},"series-combospline":{requires:["series-combo","series-curve-util"]},"series-combospline-stacked":{requires:["series-combo-stacked","series-curve-util"]},"series-curve-util":{},"series-fill-util":{},"series-histogram-base":{requires:["series-cartesian","series-plot-util"]},"series-line":{requires:["series-cartesian","series-line-util"]},"series-line-stacked":{requires:["series-stacked","series-line"]},"series-line-util":{},"series-marker":{requires:["series-cartesian","series-plot-util"]},"series-marker-stacked":{requires:["series-stacked","series-marker"]},"series-ohlc":{requires:["series-range"]},"series-pie":{requires:["series-base","series-plot-util"]},"series-plot-util":{},"series-range":{requires:["series-cartesian"]},"series-spline":{requires:["series-line","series-curve-util"]},"series-spline-stacked":{requires:["series-stacked","series-spline"]},"series-stacked":{requires:["axis-stacked"]},"shim-plugin":{requires:["node-style","node-pluginhost"]},slider:{use:["slider-base","slider-value-range","clickable-rail","range-slider"]},"slider-base":{requires:["widget","dd-constrain","event-key"],skinnable:!0},"slider-value-range":{requires:["slider-base"]},sortable:{requires:["dd-delegate","dd-drop-plugin","dd-proxy"]},"sortable-scroll":{requires:["dd-scroll","sortable"]},stylesheet:{requires:["yui-base"]},substitute:{optional:["dump"],requires:["yui-base"]},swf:{requires:["event-custom","node","swfdetect","escape"]},swfdetect:{requires:["yui-base"]},tabview:{requires:["widget","widget-parent","widget-child","tabview-base","node-pluginhost","node-focusmanager"],skinnable:!0},"tabview-base":{requires:["node-event-delegate","classnamemanager"]},"tabview-plugin":{requires:["tabview-base"]},template:{use:["template-base","template-micro"]},"template-base":{requires:["yui-base"]},"template-micro":{requires:["escape"]},test:{requires:["event-simulate","event-custom","json-stringify"]},"test-console":{requires:["console-filters","test","array-extras"],skinnable:!0},text:{use:["text-accentfold","text-wordbreak"]},"text-accentfold":{requires:["array-extras","text-data-accentfold"]},"text-data-accentfold":{requires:["yui-base"]},"text-data-wordbreak":{requires:["yui-base"]},"text-wordbreak":{requires:["array-extras","text-data-wordbreak"]},timers:{requires:["yui-base"]},transition:{requires:["node-style"]},"transition-timer":{condition:{name:"transition-timer",test:function(e){var t=e.config.doc,n=t?t.documentElement:null,r=!0;return n&&n.style&&(r=!("MozTransition"in n.style||"WebkitTransition"in n.style||"transition"in n.style)),r},trigger:"transition"},requires:["transition"]},tree:{requires:["base-build","tree-node"]},"tree-labelable":{requires:["tree"]},"tree-lazy":{requires:["base-pluginhost","plugin","tree"]},"tree-node":{},"tree-openable":{requires:["tree"]},"tree-selectable":{requires:["tree"]},"tree-sortable":{requires:["tree"]},uploader:{requires:["uploader-html5","uploader-flash"]},"uploader-flash":{requires:["swfdetect","escape","widget","base","cssbutton","node","event-custom","uploader-queue"]},"uploader-html5":{requires:["widget","node-event-simulate","file-html5","uploader-queue"]},"uploader-queue":{requires:["base"]},view:{requires:["base-build","node-event-delegate"]},"view-node-map":{requires:["view"]},widget:{use:["widget-base","widget-htmlparser","widget-skin","widget-uievents"]},"widget-anim":{requires:["anim-base","plugin","widget"]},"widget-autohide":{requires:["base-build","event-key","event-outside","widget"]},"widget-base":{requires:["attribute","base-base","base-pluginhost","classnamemanager","event-focus","node-base","node-style"],skinnable:!0},"widget-base-ie":{condition:{name:"widget-base-ie",trigger:"widget-base",ua:"ie"},requires:["widget-base"]},"widget-buttons":{requires:["button-plugin","cssbutton","widget-stdmod"]},"widget-child":{requires:["base-build","widget"]},"widget-htmlparser":{requires:["widget-base"]},"widget-modality":{requires:["base-build","event-outside","widget"],skinnable:!0},"widget-parent":{requires:["arraylist","base-build","widget"]},"widget-position":{requires:["base-build","node-screen","widget"]},"widget-position-align":{requires:["widget-position"]},"widget-position-constrain":{requires:["widget-position"]},"widget-skin":{requires:["widget-base"]},"widget-stack":{requires:["base-build","widget"],skinnable:!0},"widget-stdmod":{requires:["base-build","widget"]},"widget-uievents":{requires:["node-event-delegate","widget-base"]},yql:{requires:["oop"]},"yql-jsonp":{condition:{name:"yql-jsonp",test:function(e){return!e.UA.nodejs&&!e.UA.winjs},trigger:"yql"},requires:["yql","jsonp","jsonp-url"]},"yql-nodejs":{condition:{name:"yql-nodejs",trigger:"yql",ua:"nodejs"},requires:["yql"]},"yql-winjs":{condition:{name:"yql-winjs",trigger:"yql",ua:"winjs"},requires:["yql"]},yui:{},"yui-base":{},"yui-later":{requires:["yui-base"]},"yui-log":{requires:["yui-base"]},"yui-throttle":{requires:["yui-base"]}}),YUI.Env[e.version].md5="45357bb11eddf7fd0a89c0b756599df2"},"3.17.2",{requires:["loader-base"]}),YUI.add("yui",function(e,t){},"3.17.2",{use:["yui-base","get","features","intl-base","yui-log","yui-later","loader-base","loader-rollup"
,"loader-yui3"]});
var YUI3_config = {"base":"\/extension\/ezjscore\/design\/standard\/lib\/yui\/3.17.2\/build\/","combine":false,"modules":{}};
YUI(YUI3_config).use('event', function (Y) {
Y.on('domready', function () {
var h = Y.one('html'),
ua = Y.UA;
if ( h.hasClass('ie') ) {
return;
}
if ( ua.ie ) {
h.addClass('ie').addClass('ie-gt9');
} else if ( ua.webkit ) {
h.addClass('webkit').addClass('vers_' + (ua.webkit + '').replace('.', '_'));
} else if ( ua.gecko ) {
h.addClass('gecko').addClass('vers_' + (ua.gecko + '').replace('.', '_'));
}
});
});
YUI(YUI3_config).use('event-base', 'node-base', 'event-outside', function (Y) {
Y.on('domready', function () {
Y.all('.transition-showed').each(function () {
this.on('clickoutside', function (e) {
if ( this.get('id') === location.hash.replace('#', '') ) {
location.hash = '';
}
});
});
});
});
YUI(YUI3_config).use('event', function (Y) {
Y.on('domready', function () {
Y.all('*[data-action=toggleclass]').each(function(elem) {
var cl = elem.getAttribute('data-class'),
targets = Y.all(elem.getAttribute('data-target'));
elem.on('click', function (e) {
e.preventDefault();
targets.toggleClass(cl);
});
});
});
});
YUI(YUI3_config).add('ezflyout', function (Y) {
Y.namespace('eZ');
var L = Y.Lang;
var defaultConfig = {
element: '',
close: '.close',
scrollTrigger: 0,
trackInitialScroll: true,
hideTransition: {
},
showTransition: {
}
};
function eZFlyOut(conf) {
this.conf = Y.merge(defaultConfig, conf);
this.element = Y.one(this.conf.element);
this.hidden = true;
this.scrollSubscription = false;
this._initEvents();
}
eZFlyOut.prototype.isHidden = function () {
return this.hidden;
}
eZFlyOut.prototype.show = function () {
if ( this.isHidden() ) {
this.element.transition(
this._transitionConf(this.conf.showTransition)
);
this.hidden = false;
this.fire('show');
}
}
eZFlyOut.prototype.hide = function () {
if ( !this.isHidden() ) {
this.element.transition(
this._transitionConf(this.conf.hideTransition)
);
this.hidden = true;
this.fire('hide');
}
}
eZFlyOut.prototype.close = function () {
this.scrollSubscription.detach();
this.hide();
this.fire('close');
}
eZFlyOut.prototype._initEvents = function () {
var that = this,
handleScroll = function () {
var limit = false;
if ( L.isNumber(that.conf.scrollTrigger) ) {
limit = that.conf.scrollTrigger;
} else {
if ( L.isString(that.conf.scrollTrigger) ) {
limit = Y.one(that.conf.scrollTrigger);
}
if ( !L.isObject(limit) ) {
return;
}
limit = limit.getY();
}
if ( that.element.get('docScrollY') >= limit ) {
that.show();
} else {
that.hide();
}
};
this.scrollSubscription = Y.on('scroll', handleScroll);
this.element.delegate('click', function () {
that.close();
}, this.conf.close);
this.fire('ready');
if ( this.conf.trackInitialScroll ) {
handleScroll();
}
}
eZFlyOut.prototype._transitionConf = function(conf) {
var res = Y.clone(conf, false);
Y.Object.each(res, function(v, k) {
if ( L.isFunction(v) ) {
res[k] = v.call(this);
} else if ( k !== 'on' && L.isObject(v) ) {
res[k] = this._transitionConf(v);
}
}, this);
return res;
}
Y.augment(eZFlyOut, Y.EventTarget, true, null, {emitFacade: true});
Y.eZ.FlyOut = eZFlyOut;
}, '1.0.0', {
requires: [
'event', 'node-screen', 'transition', 'node-event-delegate'
]
});
YUI(YUI3_config).add('ezsimplegallery', function (Y) {
Y.namespace('eZ');
var L = Y.Lang;
var defaultConfig = {
gallery: '',
next: '.next',
prev: '.prev',
indicators: '.indicator li',
selectedIndactorClass: 'selected',
container: '.images',
images: 'figure',
transitionDuration: 0.8,
easing: 'cubic-bezier'
};
function eZSG(conf) {
this.conf = Y.merge(defaultConfig, conf);
if ( L.isString(this.conf.gallery) ) {
this.gallery = Y.one(this.conf.gallery);
} else if ( L.isObject(this.conf.gallery) ) {
this.gallery = this.conf.gallery;
}
this.container = this.gallery.one(this.conf.container);
this.next = this.gallery.one(this.conf.next);
this.prev = this.gallery.one(this.conf.prev);
this.indicators = this.gallery.all(this.conf.indicators);
this.index = 0;
this.total = this.gallery.all(this.conf.images).size();
this._init();
}
eZSG.prototype._init = function () {
var that = this;
this.next.on('click', function (e) {
e.preventDefault();
that.showNext();
});
this.prev.on('click', function (e) {
e.preventDefault();
that.showPrev();
});
Y.on('windowresize', function () {
that.scrollTo(that.index);
});
this.indicators.each(function(ind, k) {
ind.on('click', function (e) {
if ( !this.hasClass(that.conf.selectedIndactorClass) ) {
that.scrollTo(k);
}
});
});
}
eZSG.prototype.showNext = function () {
if ( this.index == (this.total - 1) ) {
return;
}
this.scrollTo(this.index + 1);
}
eZSG.prototype.showPrev = function () {
if ( this.index == 0 ) {
return;
}
this.scrollTo(this.index - 1);
}
eZSG.prototype.scrollTo = function (newIndex) {
var f = 1, s = this.conf.selectedIndactorClass,
c = this.container, o = this.index * this._getOffset() * -1,
hasIndicator = (this.indicators.size() > 0);
f =  this.index - newIndex;
if ( f != 0 ) {
if ( hasIndicator )
this.indicators.item(this.index).removeClass(s);
this.index = newIndex;
if ( hasIndicator )
this.indicators.item(this.index).addClass(s);
}
var target = o + (f * this._getOffset());
if ( Y.UA.ie ) {
var anim = new Y.Anim({
node: c,
duration: this.conf.transitionDuration,
to: {
left: target + 'px'
}
});
anim.run();
} else {
c.transition({
left: {
value: target + 'px',
duration: this.conf.transitionDuration,
easing: this.conf.easing
}
});
}
this._handleNavigationLink();
}
eZSG.prototype._getOffset = function () {
return this.gallery.get('clientWidth');
}
eZSG.prototype._handleNavigationLink = function () {
var d = this.conf.transitionDuration,
showC = {
opacity:1,
duration: d
},
hideC = {
opacity:0,
duration: d
}
if ( this.index == 0 ) {
this.prev.transition(hideC);
} else if ( this.index >= 1 ) {
this.prev.transition(showC);
}
if ( this.index == (this.total -1) ) {
this.next.transition(hideC);
} else if ( this.index <= (this.total - 2) ) {
this.next.transition(showC);
}
}
Y.eZ.SimpleGallery = eZSG;
}, '1.0.0', {
requires: [
'node-base', 'node-screen', 'transition', 'anim', 'event-resize'
]
});
YUI(YUI3_config).add('ezgallerynavigator', function (Y) {
Y.namespace('eZ');
var L = Y.Lang;
var defaultConfig = {
gallery: '',
next: '.next',
prev: '.prev',
cursor: '.cursor',
container: '.images',
images: 'figure',
transitionDuration: 0.5,
easing: 'cubic-bezier'
};
function width(el) {
return parseInt(el.getStyle('width'));
}
function left(el) {
return parseInt(el.getStyle('left'));
}
function eZGN(conf) {
var that = this;
this.conf = Y.merge(defaultConfig, conf);
if ( L.isString(this.conf.gallery) ) {
this.gallery = Y.one(this.conf.gallery);
} else if ( L.isObject(this.conf.gallery) ) {
this.gallery = this.conf.gallery;
}
this.container = this.gallery.one(this.conf.container);
this.nextLink = this.gallery.one(this.conf.next);
this.prevLink = this.gallery.one(this.conf.prev);
this.images = this.container.all(this.conf.images);
this.index = 0;
this.total = this.images.size();
this.cursor = this.gallery.one(this.conf.cursor);
this.cursor.setStyles({
left: this._computeCursorX(this.getSelectedImage()) + 'px',
display: 'inline-block'
});
this._init();
}
eZGN.DEFAULT_CONFIG = defaultConfig;
eZGN.prototype._init = function () {
var that = this;
this.nextLink.on('click', function (e) {
e.preventDefault();
that.next();
});
this.prevLink.on('click', function (e) {
e.preventDefault();
that.previous();
});
this.images.each(function(img, k) {
img.on('click', function (e) {
e.preventDefault();
that.select(k);
});
});
}
eZGN.NAME = 'gallerynavigator';
eZGN.prototype.getSelectedImage = function () {
return this.images.item(this.index);
}
eZGN.prototype.getImages = function () {
return this.images;
}
eZGN.prototype.getContainer = function () {
return this.container;
}
eZGN.prototype.select = function (i) {
var p = this.index;
if ( !L.isUndefined(i) ) {
this.index = i;
}
var s = this.getSelectedImage();
this.fire('select', {
index: this.index,
previous: p,
total: this.total,
imageNode: s,
});
this._handleNavigationLink();
this._animate();
}
eZGN.prototype.next = function () {
if ( this.index == (this.total -1) ) {
return;
}
this.select(this.index + 1);
}
eZGN.prototype.previous = function () {
if ( this.index == 0 ) {
return;
}
this.select(this.index - 1);
}
eZGN.prototype._isSelectedImageOutsideRight = function () {
var s = this.getSelectedImage(),
lRight = this.gallery.getX() + parseInt(this.gallery.getStyle('width'));
if ( ((s.getX() + parseInt(s.getStyle('width'))) > lRight) ) {
return true;
}
return false;
}
eZGN.prototype._isSelectedImageOutsideLeft = function () {
var s = this.getSelectedImage(),
lLeft = this.gallery.getX();
if ( s.getX() < lLeft ) {
return true;
}
return false;
}
eZGN.prototype._computeCursorX = function (s) {
var offset = this.gallery.getX(),
selectedWidth = width(s),
cursorWidth = width(this.cursor);
return s.getX() - offset + selectedWidth/2 - cursorWidth/2;
}
eZGN.prototype._animate = function () {
var trConf = {
duration: this.conf.transitionDuration,
easing: this.conf.easing
}, sel = this.getSelectedImage(),
cursorX = this._computeCursorX(sel), containerX, containerXOrig;
if ( this._isSelectedImageOutsideRight() ) {
containerXOrig = left(this.container);
containerX = this.container.getX() - sel.getX();
cursorX += containerX - containerXOrig;
trConf['left'] = containerX + 'px';
this._doTransition(this.container, trConf);
} else if ( this._isSelectedImageOutsideLeft() ) {
containerXOrig = left(this.container);
var selectedBorderLeft = sel.getX() + width(sel), sizeBetween,
widthGallery = width(this.gallery);
for(var i = this.index; i >= 0; i--) {
sizeBetween = selectedBorderLeft - this.images.item(i).getX();
if ( sizeBetween > widthGallery ) {
i++;
break;
}
}
if ( i < 0 )
i = 0;
containerX = this.container.getX() - this.images.item(i).getX();
cursorX += containerX - containerXOrig;
trConf['left'] = containerX + 'px';
this._doTransition(this.container, trConf);
}
trConf['left'] = cursorX + 'px';
this._doTransition(this.cursor, trConf);
}
eZGN.prototype._doTransition = function(node, conf) {
if ( Y.UA.ie ) {
var anim = new Y.Anim({
node: node,
duration: conf.duration,
to: {
left: conf.left
}
});
anim.run();
} else {
node.transition(conf);
}
}
eZGN.prototype._handleNavigationLink = function () {
var d = this.conf.transitionDuration,
showC = {
opacity:1,
duration: d
},
hideC = {
opacity:0,
duration: d
};
if ( this.index == 0 ) {
this.prevLink.transition(hideC);
} else if ( this.index >= 1 ) {
this.prevLink.transition(showC);
}
if ( this.index == (this.total -1) ) {
this.nextLink.transition(hideC);
} else if ( this.index <= (this.total - 2) ) {
this.nextLink.transition(showC);
}
}
Y.augment(eZGN, Y.EventTarget, true, null, {emitFacade: true});
Y.eZ.GalleryNavigator = eZGN;
}, '1.0.0', {
requires: [
'event-custom', 'transition', 'node-base', 'node-screen', 'anim'
]
});
YUI(YUI3_config).add('ezgallery', function (Y) {
Y.namespace('eZ');
var L = Y.Lang;
var defaultConfig = {
container: '.gallery-viewer',
title: 'h2 a',
counter: '.counter span',
image: 'figure > img',
caption: 'figcaption',
figure: 'figure',
transitionDuration: 0.8,
autoScrollOnSelect: true,
autoFixSizes: true,
initFunc: function () { },
updateFunc: function (elem) { },
navigator: Y.eZ.GalleryNavigator.DEFAULT_CONFIG
}
function eZG(conf) {
this.conf = Y.merge(defaultConfig, conf);
this.navigator = new Y.eZ.GalleryNavigator(conf.navigator);
this._init();
this.hasStarted = false;
}
eZG.prototype._init = function () {
var that = this;
this.container = Y.one(this.conf.container);
this._fixSizes();
this.conf.initFunc.call(this);
this.navigator.on('select', function (item) {
that.hasStarted = true;
if ( that.conf.autoScrollOnSelect ) {
that.container.scrollIntoView(true);
}
that.update(item, (item.index != item.previous));
});
Y.on('windowresize', function () {
if ( that.hasStarted && that.conf.autoScrollOnSelect ) {
that.container.scrollIntoView(true);
}
that.navigator.select();
});
}
eZG.prototype.update = function (item, animate) {
var that = this;
if ( animate ) {
this.container.setStyle('opacity', 0);
this.conf.updateFunc.call(that, item);
this._fixSizes();
this.container.transition({
duration: this.conf.transitionDuration,
opacity: 1
});
} else {
this.conf.updateFunc.call(this, item);
this._fixSizes();
}
}
eZG.prototype._fixSizes = function () {
if ( !this.conf.autoFixSizes ) {
return;
}
var c = this.container,
fig = c.one(this.conf.figure),
nav = this.navigator.getContainer();
caption = c.one(this.conf.caption);
img = c.one(this.conf.image),
offsetFig = 0, figH = 0, offsetImg = 0,
imgRatio = parseInt(img.getAttribute('width')) / parseInt(img.getAttribute('height'));
fig.setStyle('height', 'auto');
offsetFig = nav.getY() + nav.get('offsetHeight') - this.container.getY() - nav.get('winHeight');
figH = fig.get('offsetHeight') - offsetFig
fig.setStyle('height', figH + 'px');
img.setStyles({height: 'auto', width: 'auto'});
offsetImg = img.get('offsetHeight') + caption.get('offsetHeight') - figH;
if ( offsetImg > 0 ) {
var imgH = img.get('offsetHeight') - offsetImg,
imgW = imgH * imgRatio;
if ( imgH > parseInt(img.getAttribute('height')) ) {
imgH = parseInt(img.getAttribute('height'));
imgW = imgH * imgRatio;
}
img.setStyles({height: imgH + 'px', width: imgW + 'px'});
}
}
Y.eZ.Gallery = eZG;
}, '1.0.0', {
requires: [
'ezgallerynavigator', 'transition', 'event-resize', 'anim', 'node-base'
]
});
;(function(window, undefined){
var document = window.document;// HTML5 Shiv. Must be in <head> to support older browsers.
document.createElement("video");document.createElement("audio");
var VideoJS = function(id, addOptions, ready){
var tag; // Element of ID
if (typeof id == "string") {
if (id.indexOf("#") === 0) {
id = id.slice(1);
}
if (_V_.players[id]) {
return _V_.players[id];
} else {
tag = _V_.el(id)
}
} else {
tag = id;
}
if (!tag || !tag.nodeName) { // re: nodeName, could be a box div also
throw new TypeError("The element or ID supplied is not valid. (VideoJS)"); // Returns
}
return tag.player || new _V_.Player(tag, addOptions, ready);
},
_V_ = VideoJS,
CDN_VERSION = "3.2";
VideoJS.players = {};
VideoJS.options = {
techOrder: ["html5","flash"],
html5: {},
flash: { swf: "http://vjs.zencdn.net/c/video-js.swf" },
width: "auto",
height: "auto",
defaultVolume: 0.00, // The freakin seaguls are driving me crazy!
components: {
"posterImage": {},
"textTrackDisplay": {},
"loadingSpinner": {},
"bigPlayButton": {},
"controlBar": {}
}
};
if (CDN_VERSION != "GENERATED_CDN_VSN") {
_V_.options.flash.swf = "http://vjs.zencdn.net/"+CDN_VERSION+"/video-js.swf"
}_V_.merge = function(obj1, obj2, safe){
if (!obj2) { obj2 = {}; };
for (var attrname in obj2){
if (obj2.hasOwnProperty(attrname) && (!safe || !obj1.hasOwnProperty(attrname))) { obj1[attrname]=obj2[attrname]; }
}
return obj1;
};
_V_.extend = function(obj){ this.merge(this, obj, true); };
_V_.extend({
tech: {}, // Holder for playback technology settings
controlSets: {}, // Holder for control set definitions
isIE: function(){ return !+"\v1"; },
isFF: function(){ return !!_V_.ua.match("Firefox") },
isIPad: function(){ return navigator.userAgent.match(/iPad/i) !== null; },
isIPhone: function(){ return navigator.userAgent.match(/iPhone/i) !== null; },
isIOS: function(){ return VideoJS.isIPhone() || VideoJS.isIPad(); },
iOSVersion: function() {
var match = navigator.userAgent.match(/OS (\d+)_/i);
if (match && match[1]) { return match[1]; }
},
isAndroid: function(){ return navigator.userAgent.match(/Android.*AppleWebKit/i) !== null; },
androidVersion: function() {
var match = navigator.userAgent.match(/Android (\d+)\./i);
if (match && match[1]) { return match[1]; }
},
testVid: document.createElement("video"),
ua: navigator.userAgent,
support: {},
each: function(arr, fn){
if (!arr || arr.length === 0) { return; }
for (var i=0,j=arr.length; i<j; i++) {
fn.call(this, arr[i], i);
}
},
eachProp: function(obj, fn){
if (!obj) { return; }
for (var name in obj) {
if (obj.hasOwnProperty(name)) {
fn.call(this, name, obj[name]);
}
}
},
el: function(id){ return document.getElementById(id); },
createElement: function(tagName, attributes){
var el = document.createElement(tagName),
attrname;
for (attrname in attributes){
if (attributes.hasOwnProperty(attrname)) {
if (attrname.indexOf("-") !== -1) {
el.setAttribute(attrname, attributes[attrname]);
} else {
el[attrname] = attributes[attrname];
}
}
}
return el;
},
insertFirst: function(node, parent){
if (parent.firstChild) {
parent.insertBefore(node, parent.firstChild);
} else {
parent.appendChild(node);
}
},
addClass: function(element, classToAdd){
if ((" "+element.className+" ").indexOf(" "+classToAdd+" ") == -1) {
element.className = element.className === "" ? classToAdd : element.className + " " + classToAdd;
}
},
removeClass: function(element, classToRemove){
if (element.className.indexOf(classToRemove) == -1) { return; }
var classNames = element.className.split(" ");
classNames.splice(classNames.indexOf(classToRemove),1);
element.className = classNames.join(" ");
},
remove: function(item, array){
if (!array) return;
var i = array.indexOf(item);
if (i != -1) {
return array.splice(i, 1)
};
},
blockTextSelection: function(){
document.body.focus();
document.onselectstart = function () { return false; };
},
unblockTextSelection: function(){ document.onselectstart = function () { return true; }; },
formatTime: function(seconds, guide) {
guide = guide || seconds; // Default to using seconds as guide
var s = Math.floor(seconds % 60),
m = Math.floor(seconds / 60 % 60),
h = Math.floor(seconds / 3600),
gm = Math.floor(guide / 60 % 60),
gh = Math.floor(guide / 3600);
h = (h > 0 || gh > 0) ? h + ":" : "";
m = (((h || gm >= 10) && m < 10) ? "0" + m : m) + ":";
s = (s < 10) ? "0" + s : s;
return h + m + s;
},
uc: function(string){
return string.charAt(0).toUpperCase() + string.slice(1);
},
getRelativePosition: function(x, relativeElement){
return Math.max(0, Math.min(1, (x - _V_.findPosX(relativeElement)) / relativeElement.offsetWidth));
},
getComputedStyleValue: function(element, style){
return window.getComputedStyle(element, null).getPropertyValue(style);
},
trim: function(string){ return string.toString().replace(/^\s+/, "").replace(/\s+$/, ""); },
round: function(num, dec) {
if (!dec) { dec = 0; }
return Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
},
isEmpty: function(object) {
for (var prop in object) {
return false;
}
return true;
},
createTimeRange: function(start, end){
return {
length: 1,
start: function() { return start; },
end: function() { return end; }
};
},
cache: {}, // Where the data is stored
guid: 1, // Unique ID for the element
expando: "vdata" + (new Date).getTime(), // Unique attribute to store element's guid in
getData: function(elem){
var id = elem[_V_.expando];
if (!id) {
id = elem[_V_.expando] = _V_.guid++;
_V_.cache[id] = {};
}
return _V_.cache[id];
},
removeData: function(elem){
var id = elem[_V_.expando];
if (!id) { return; }
delete _V_.cache[id];
try {
delete elem[_V_.expando];
} catch(e) {
if (elem.removeAttribute) {
elem.removeAttribute(_V_.expando);
} else {
elem[_V_.expando] = null;
}
}
},
proxy: function(context, fn, uid) {
if (!fn.guid) { fn.guid = _V_.guid++; }
var ret = function() {
return fn.apply(context, arguments);
}
ret.guid = (uid) ? uid + "_" + fn.guid : fn.guid;
return ret;
},
get: function(url, onSuccess, onError){
var local = (url.indexOf("file:") == 0 || (window.location.href.indexOf("file:") == 0 && url.indexOf("http:") == -1));
if (typeof XMLHttpRequest == "undefined") {
XMLHttpRequest = function () {
try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); } catch (e) {}
try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); } catch (f) {}
try { return new ActiveXObject("Msxml2.XMLHTTP"); } catch (g) {}
throw new Error("This browser does not support XMLHttpRequest.");
};
}
var request = new XMLHttpRequest();
try {
request.open("GET", url);
} catch(e) {
_V_.log("VideoJS XMLHttpRequest (open)", e);
return false;
}
request.onreadystatechange = _V_.proxy(this, function() {
if (request.readyState == 4) {
if (request.status == 200 || local && request.status == 0) {
onSuccess(request.responseText);
} else {
if (onError) {
onError();
}
}
}
});
try {
request.send();
} catch(e) {
_V_.log("VideoJS XMLHttpRequest (send)", e);
if (onError) {
onError(e);
}
}
},
setLocalStorage: function(key, value){
var localStorage = window.localStorage || false;
if (!localStorage) { return; }
try {
localStorage[key] = value;
} catch(e) {
if (e.code == 22 || e.code == 1014) { // Webkit == 22 / Firefox == 1014
_V_.log("LocalStorage Full (VideoJS)", e);
} else {
_V_.log("LocalStorage Error (VideoJS)", e);
}
}
},
getAbsoluteURL: function(url){
if (!url.match(/^https?:\/\//)) {
url = _V_.createElement('div', {
innerHTML: '<a href="'+url+'">x</a>'
}).firstChild.href;
}
return url;
}
});
_V_.log = function(){
_V_.log.history = _V_.log.history || [];// store logs to an array for reference
_V_.log.history.push(arguments);
if(window.console) {
arguments.callee = arguments.callee.caller;
var newarr = [].slice.call(arguments);
(typeof console.log === 'object' ? _V_.log.apply.call(console.log, console, newarr) : console.log.apply(console, newarr));
}
};
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());
if ("getBoundingClientRect" in document.documentElement) {
_V_.findPosX = function(el) {
var box;
try {
box = el.getBoundingClientRect();
} catch(e) {}
if (!box) { return 0; }
var docEl = document.documentElement,
body = document.body,
clientLeft = docEl.clientLeft || body.clientLeft || 0,
scrollLeft = window.pageXOffset || body.scrollLeft,
left = box.left + scrollLeft - clientLeft;
return left;
};
} else {
_V_.findPosX = function(el) {
var curleft = el.offsetLeft;
while(el = obj.offsetParent) {
if (el.className.indexOf("video-js") == -1) {
} else {
}
curleft += el.offsetLeft;
}
return curleft;
};
}// Using John Resig's Class implementation http://ejohn.org/blog/simple-javascript-inheritance/
(function(){
var initializing = false, fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;
_V_.Class = function(){};
_V_.Class.extend = function(prop) {
var _super = this.prototype;
initializing = true;
var prototype = new this();
initializing = false;
for (var name in prop) {
prototype[name] = typeof prop[name] == "function" &&
typeof _super[name] == "function" && fnTest.test(prop[name]) ?
(function(name, fn){
return function() {
var tmp = this._super;
this._super = _super[name];
var ret = fn.apply(this, arguments);
this._super = tmp;
return ret;
};
})(name, prop[name]) :
prop[name];
}
function Class() {
if ( !initializing && this.init ) {
return this.init.apply(this, arguments);
} else if (!initializing) {
return arguments.callee.prototype.init()
}
}
Class.prototype = prototype;
Class.constructor = Class;
Class.extend = arguments.callee;
return Class;
};
})();
_V_.Component = _V_.Class.extend({
init: function(player, options){
this.player = player;
options = this.options = _V_.merge(this.options || {}, options);
if (options.el) {
this.el = options.el;
} else {
this.el = this.createElement();
}
this.initComponents();
},
destroy: function(){},
createElement: function(type, attrs){
return _V_.createElement(type || "div", attrs);
},
buildCSSClass: function(){
return "";
},
initComponents: function(){
var options = this.options;
if (options && options.components) {
this.eachProp(options.components, function(name, opts){
var tempAdd = this.proxy(function(){
this[name] = this.addComponent(name, opts);
});
if (opts.loadEvent) {
this.one(opts.loadEvent, tempAdd)
} else {
tempAdd();
}
});
}
},
addComponent: function(name, options){
var component, componentClass;
if (typeof name == "string") {
options = options || {};
componentClass = options.componentClass || _V_.uc(name);
component = new _V_[componentClass](this.player || this, options);
} else {
component = name;
}
this.el.appendChild(component.el);
return component;
},
removeComponent: function(component){
this.el.removeChild(component.el);
},
show: function(){
this.el.style.display = "block";
},
hide: function(){
this.el.style.display = "none";
},
fadeIn: function(){
this.removeClass("vjs-fade-out");
this.addClass("vjs-fade-in");
},
fadeOut: function(){
this.removeClass("vjs-fade-in");
this.addClass("vjs-fade-out");
},
lockShowing: function(){
var style = this.el.style;
style.display = "block";
style.opacity = 1;
style.visiblity = "visible";
},
unlockShowing: function(){
var style = this.el.style;
style.display = "";
style.opacity = "";
style.visiblity = "";
},
addClass: function(classToAdd){
_V_.addClass(this.el, classToAdd);
},
removeClass: function(classToRemove){
_V_.removeClass(this.el, classToRemove);
},
addEvent: function(type, fn, uid){
return _V_.addEvent(this.el, type, _V_.proxy(this, fn));
},
removeEvent: function(type, fn){
return _V_.removeEvent(this.el, type, fn);
},
triggerEvent: function(type, e){
return _V_.triggerEvent(this.el, type, e);
},
one: function(type, fn) {
_V_.one(this.el, type, _V_.proxy(this, fn));
},
ready: function(fn){
if (!fn) return this;
if (this.isReady) {
fn.call(this);
} else {
if (this.readyQueue === undefined) {
this.readyQueue = [];
}
this.readyQueue.push(fn);
}
return this;
},
triggerReady: function(){
this.isReady = true;
if (this.readyQueue && this.readyQueue.length > 0) {
this.each(this.readyQueue, function(fn){
fn.call(this);
});
this.readyQueue = [];
this.triggerEvent("ready");
}
},
each: function(arr, fn){ _V_.each.call(this, arr, fn); },
eachProp: function(obj, fn){ _V_.eachProp.call(this, obj, fn); },
extend: function(obj){ _V_.merge(this, obj) },
proxy: function(fn, uid){  return _V_.proxy(this, fn, uid); }
});
_V_.Control = _V_.Component.extend({
buildCSSClass: function(){
return "vjs-control " + this._super();
}
});
_V_.ControlBar = _V_.Component.extend({
options: {
loadEvent: "play",
components: {
"playToggle": {},
"fullscreenToggle": {},
"currentTimeDisplay": {},
"timeDivider": {},
"durationDisplay": {},
"remainingTimeDisplay": {},
"progressControl": {},
"volumeControl": {},
"muteToggle": {}
}
},
init: function(player, options){
this._super(player, options);
player.addEvent("play", this.proxy(function(){
this.fadeIn();
this.player.addEvent("mouseover", this.proxy(this.fadeIn));
this.player.addEvent("mouseout", this.proxy(this.fadeOut));
}));
},
createElement: function(){
return _V_.createElement("div", {
className: "vjs-controls"
});
},
fadeIn: function(){
this._super();
this.player.triggerEvent("controlsvisible");
},
fadeOut: function(){
this._super();
this.player.triggerEvent("controlshidden");
},
lockShowing: function(){
this.el.style.opacity = "1";
}
});
_V_.Button = _V_.Control.extend({
init: function(player, options){
this._super(player, options);
this.addEvent("click", this.onClick);
this.addEvent("focus", this.onFocus);
this.addEvent("blur", this.onBlur);
},
createElement: function(type, attrs){
attrs = _V_.merge({
className: this.buildCSSClass(),
innerHTML: '<div><span class="vjs-control-text">' + (this.buttonText || "Need Text") + '</span></div>',
role: "button",
tabIndex: 0
}, attrs);
return this._super(type, attrs);
},
onClick: function(){},
onFocus: function(){
_V_.addEvent(document, "keyup", _V_.proxy(this, this.onKeyPress));
},
onKeyPress: function(event){
if (event.which == 32 || event.which == 13) {
event.preventDefault();
this.onClick();
}
},
onBlur: function(){
_V_.removeEvent(document, "keyup", _V_.proxy(this, this.onKeyPress));
}
});
_V_.PlayButton = _V_.Button.extend({
buttonText: "Play",
buildCSSClass: function(){
return "vjs-play-button " + this._super();
},
onClick: function(){
this.player.play();
}
});
_V_.PauseButton = _V_.Button.extend({
buttonText: "Pause",
buildCSSClass: function(){
return "vjs-pause-button " + this._super();
},
onClick: function(){
this.player.pause();
}
});
_V_.PlayToggle = _V_.Button.extend({
buttonText: "Play",
init: function(player, options){
this._super(player, options);
player.addEvent("play", _V_.proxy(this, this.onPlay));
player.addEvent("pause", _V_.proxy(this, this.onPause));
},
buildCSSClass: function(){
return "vjs-play-control " + this._super();
},
onClick: function(){
if (this.player.paused()) {
this.player.play();
} else {
this.player.pause();
}
},
onPlay: function(){
_V_.removeClass(this.el, "vjs-paused");
_V_.addClass(this.el, "vjs-playing");
},
onPause: function(){
_V_.removeClass(this.el, "vjs-playing");
_V_.addClass(this.el, "vjs-paused");
}
});
_V_.FullscreenToggle = _V_.Button.extend({
buttonText: "Fullscreen",
buildCSSClass: function(){
return "vjs-fullscreen-control " + this._super();
},
onClick: function(){
if (!this.player.isFullScreen) {
this.player.requestFullScreen();
} else {
this.player.cancelFullScreen();
}
}
});
_V_.BigPlayButton = _V_.Button.extend({
init: function(player, options){
this._super(player, options);
player.addEvent("play", _V_.proxy(this, this.hide));
player.addEvent("ended", _V_.proxy(this, this.show));
},
createElement: function(){
return this._super("div", {
className: "vjs-big-play-button",
innerHTML: "<span></span>"
});
},
onClick: function(){
if(this.player.currentTime()) {
this.player.currentTime(0);
}
this.player.play();
}
});
_V_.LoadingSpinner = _V_.Component.extend({
init: function(player, options){
this._super(player, options);
player.addEvent("canplay", _V_.proxy(this, this.hide));
player.addEvent("canplaythrough", _V_.proxy(this, this.hide));
player.addEvent("playing", _V_.proxy(this, this.hide));
player.addEvent("seeking", _V_.proxy(this, this.show));
player.addEvent("error", _V_.proxy(this, this.show));
player.addEvent("waiting", _V_.proxy(this, this.show));
},
createElement: function(){
var classNameSpinner, innerHtmlSpinner;
if ( typeof this.player.el.style.WebkitBorderRadius == "string"
|| typeof this.player.el.style.MozBorderRadius == "string"
|| typeof this.player.el.style.KhtmlBorderRadius == "string"
|| typeof this.player.el.style.borderRadius == "string")
{
classNameSpinner = "vjs-loading-spinner";
innerHtmlSpinner = "<div class='ball1'></div><div class='ball2'></div><div class='ball3'></div><div class='ball4'></div><div class='ball5'></div><div class='ball6'></div><div class='ball7'></div><div class='ball8'></div>";
} else {
classNameSpinner = "vjs-loading-spinner-fallback";
innerHtmlSpinner = "";
}
return this._super("div", {
className: classNameSpinner,
innerHTML: innerHtmlSpinner
});
}
});
_V_.CurrentTimeDisplay = _V_.Component.extend({
init: function(player, options){
this._super(player, options);
player.addEvent("timeupdate", _V_.proxy(this, this.updateContent));
},
createElement: function(){
var el = this._super("div", {
className: "vjs-current-time vjs-time-controls vjs-control"
});
this.content = _V_.createElement("div", {
className: "vjs-current-time-display",
innerHTML: '0:00'
});
el.appendChild(_V_.createElement("div").appendChild(this.content));
return el;
},
updateContent: function(){
var time = (this.player.scrubbing) ? this.player.values.currentTime : this.player.currentTime();
this.content.innerHTML = _V_.formatTime(time, this.player.duration());
}
});
_V_.DurationDisplay = _V_.Component.extend({
init: function(player, options){
this._super(player, options);
player.addEvent("timeupdate", _V_.proxy(this, this.updateContent));
},
createElement: function(){
var el = this._super("div", {
className: "vjs-duration vjs-time-controls vjs-control"
});
this.content = _V_.createElement("div", {
className: "vjs-duration-display",
innerHTML: '0:00'
});
el.appendChild(_V_.createElement("div").appendChild(this.content));
return el;
},
updateContent: function(){
if (this.player.duration()) { this.content.innerHTML = _V_.formatTime(this.player.duration()); }
}
});
_V_.TimeDivider = _V_.Component.extend({
createElement: function(){
return this._super("div", {
className: "vjs-time-divider",
innerHTML: '<div><span>/</span></div>'
});
}
});
_V_.RemainingTimeDisplay = _V_.Component.extend({
init: function(player, options){
this._super(player, options);
player.addEvent("timeupdate", _V_.proxy(this, this.updateContent));
},
createElement: function(){
var el = this._super("div", {
className: "vjs-remaining-time vjs-time-controls vjs-control"
});
this.content = _V_.createElement("div", {
className: "vjs-remaining-time-display",
innerHTML: '-0:00'
});
el.appendChild(_V_.createElement("div").appendChild(this.content));
return el;
},
updateContent: function(){
if (this.player.duration()) { this.content.innerHTML = "-"+_V_.formatTime(this.player.remainingTime()); }
}
});
_V_.Slider = _V_.Component.extend({
init: function(player, options){
this._super(player, options);
player.addEvent(this.playerEvent, _V_.proxy(this, this.update));
this.addEvent("mousedown", this.onMouseDown);
this.addEvent("focus", this.onFocus);
this.addEvent("blur", this.onBlur);
this.player.addEvent("controlsvisible", this.proxy(this.update));
this.update();
},
createElement: function(type, attrs) {
attrs = _V_.merge({
role: "slider",
"aria-valuenow": 0,
"aria-valuemin": 0,
"aria-valuemax": 100,
tabIndex: 0
}, attrs);
return this._super(type, attrs);
},
onMouseDown: function(event){
event.preventDefault();
_V_.blockTextSelection();
_V_.addEvent(document, "mousemove", _V_.proxy(this, this.onMouseMove));
_V_.addEvent(document, "mouseup", _V_.proxy(this, this.onMouseUp));
this.onMouseMove(event);
},
onMouseUp: function(event) {
_V_.unblockTextSelection();
_V_.removeEvent(document, "mousemove", this.onMouseMove, false);
_V_.removeEvent(document, "mouseup", this.onMouseUp, false);
this.update();
},
update: function(){
var barProgress,
progress = this.getPercent();
handle = this.handle,
bar = this.bar;
if (isNaN(progress)) { progress = 0; }
barProgress = progress;
if (handle) {
var box = this.el,
boxWidth = box.offsetWidth,
handleWidth = handle.el.offsetWidth,
handlePercent = (handleWidth) ? handleWidth / boxWidth : 0,
boxAdjustedPercent = 1 - handlePercent;
adjustedProgress = progress * boxAdjustedPercent,
barProgress = adjustedProgress + (handlePercent / 2);
handle.el.style.left = _V_.round(adjustedProgress * 100, 2) + "%";
}
bar.el.style.width = _V_.round(barProgress * 100, 2) + "%";
},
calculateDistance: function(event){
var box = this.el,
boxX = _V_.findPosX(box),
boxW = box.offsetWidth,
handle = this.handle;
if (handle) {
var handleW = handle.el.offsetWidth;
boxX = boxX + (handleW / 2);
boxW = boxW - handleW;
}
return Math.max(0, Math.min(1, (event.pageX - boxX) / boxW));
},
onFocus: function(event){
_V_.addEvent(document, "keyup", _V_.proxy(this, this.onKeyPress));
},
onKeyPress: function(event){
if (event.which == 37) { // Left Arrow
event.preventDefault();
this.stepBack();
} else if (event.which == 39) { // Right Arrow
event.preventDefault();
this.stepForward();
}
},
onBlur: function(event){
_V_.removeEvent(document, "keyup", _V_.proxy(this, this.onKeyPress));
}
});
_V_.ProgressControl = _V_.Component.extend({
options: {
components: {
"seekBar": {}
}
},
createElement: function(){
return this._super("div", {
className: "vjs-progress-control vjs-control"
});
}
});
_V_.SeekBar = _V_.Slider.extend({
options: {
components: {
"loadProgressBar": {},
"bar": { componentClass: "PlayProgressBar" },
"handle": { componentClass: "SeekHandle" }
}
},
playerEvent: "timeupdate",
init: function(player, options){
this._super(player, options);
},
createElement: function(){
return this._super("div", {
className: "vjs-progress-holder"
});
},
getPercent: function(){
return this.player.currentTime() / this.player.duration();
},
onMouseDown: function(event){
this._super(event);
this.player.scrubbing = true;
this.videoWasPlaying = !this.player.paused();
this.player.pause();
},
onMouseMove: function(event){
var newTime = this.calculateDistance(event) * this.player.duration();
if (newTime == this.player.duration()) { newTime = newTime - 0.1; }
this.player.currentTime(newTime);
},
onMouseUp: function(event){
this._super(event);
this.player.scrubbing = false;
if (this.videoWasPlaying) {
this.player.play();
}
},
stepForward: function(){
this.player.currentTime(this.player.currentTime() + 1);
},
stepBack: function(){
this.player.currentTime(this.player.currentTime() - 1);
}
});
_V_.LoadProgressBar = _V_.Component.extend({
init: function(player, options){
this._super(player, options);
player.addEvent("progress", _V_.proxy(this, this.update));
},
createElement: function(){
return this._super("div", {
className: "vjs-load-progress",
innerHTML: '<span class="vjs-control-text">Loaded: 0%</span>'
});
},
update: function(){
if (this.el.style) { this.el.style.width = _V_.round(this.player.bufferedPercent() * 100, 2) + "%"; }
}
});
_V_.PlayProgressBar = _V_.Component.extend({
createElement: function(){
return this._super("div", {
className: "vjs-play-progress",
innerHTML: '<span class="vjs-control-text">Progress: 0%</span>'
});
}
});
_V_.SeekHandle = _V_.Component.extend({
createElement: function(){
return this._super("div", {
className: "vjs-seek-handle",
innerHTML: '<span class="vjs-control-text">00:00</span>'
});
}
});
_V_.VolumeControl = _V_.Component.extend({
options: {
components: {
"volumeBar": {}
}
},
createElement: function(){
return this._super("div", {
className: "vjs-volume-control vjs-control"
});
}
});
_V_.VolumeBar = _V_.Slider.extend({
options: {
components: {
"bar": { componentClass: "VolumeLevel" },
"handle": { componentClass: "VolumeHandle" }
}
},
playerEvent: "volumechange",
createElement: function(){
return this._super("div", {
className: "vjs-volume-bar"
});
},
onMouseMove: function(event) {
this.player.volume(this.calculateDistance(event));
},
getPercent: function(){
return this.player.volume();
},
stepForward: function(){
this.player.volume(this.player.volume() + 0.1);
},
stepBack: function(){
this.player.volume(this.player.volume() - 0.1);
}
});
_V_.VolumeLevel = _V_.Component.extend({
createElement: function(){
return this._super("div", {
className: "vjs-volume-level",
innerHTML: '<span class="vjs-control-text"></span>'
});
}
});
_V_.VolumeHandle = _V_.Component.extend({
createElement: function(){
return this._super("div", {
className: "vjs-volume-handle",
innerHTML: '<span class="vjs-control-text"></span>'
});
}
});
_V_.MuteToggle = _V_.Button.extend({
init: function(player, options){
this._super(player, options);
player.addEvent("volumechange", _V_.proxy(this, this.update));
},
createElement: function(){
return this._super("div", {
className: "vjs-mute-control vjs-control",
innerHTML: '<div><span class="vjs-control-text">Mute</span></div>'
});
},
onClick: function(event){
this.player.muted( this.player.muted() ? false : true );
},
update: function(event){
var vol = this.player.volume(),
level = 3;
if (vol == 0 || this.player.muted()) {
level = 0;
} else if (vol < 0.33) {
level = 1;
} else if (vol < 0.67) {
level = 2;
}
_V_.each.call(this, [0,1,2,3], function(i){
_V_.removeClass(this.el, "vjs-vol-"+i);
});
_V_.addClass(this.el, "vjs-vol-"+level);
}
});
_V_.PosterImage = _V_.Button.extend({
init: function(player, options){
this._super(player, options);
if (!this.player.options.poster) {
this.hide();
}
player.addEvent("play", _V_.proxy(this, this.hide));
},
createElement: function(){
return _V_.createElement("img", {
className: "vjs-poster",
src: this.player.options.poster,
tabIndex: -1
});
},
onClick: function(){
this.player.play();
}
});
_V_.Menu = _V_.Component.extend({
init: function(player, options){
this._super(player, options);
},
addItem: function(component){
this.addComponent(component);
component.addEvent("click", this.proxy(function(){
this.unlockShowing();
}));
},
createElement: function(){
return this._super("ul", {
className: "vjs-menu"
});
}
});
_V_.MenuItem = _V_.Button.extend({
init: function(player, options){
this._super(player, options);
if (options.selected) {
this.addClass("vjs-selected");
}
},
createElement: function(type, attrs){
return this._super("li", _V_.merge({
className: "vjs-menu-item",
innerHTML: this.options.label
}, attrs));
},
onClick: function(){
this.selected(true);
},
selected: function(selected){
if (selected) {
this.addClass("vjs-selected");
} else {
this.removeClass("vjs-selected")
}
}
});// ECMA-262 is the standard for javascript.
if (!Array.prototype.indexOf) {
Array.prototype.indexOf = function (searchElement ) {
"use strict";
if (this === void 0 || this === null) {
throw new TypeError();
}
var t = Object(this);
var len = t.length >>> 0;
if (len === 0) {
return -1;
}
var n = 0;
if (arguments.length > 0) {
n = Number(arguments[1]);
if (n !== n) { // shortcut for verifying if it's NaN
n = 0;
} else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
n = (n > 0 || -1) * Math.floor(Math.abs(n));
}
}
if (n >= len) {
return -1;
}
var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
for (; k < len; k++) {
if (k in t && t[k] === searchElement) {
return k;
}
}
return -1;
}
}
_V_.extend({
addEvent: function(elem, type, fn){
var data = _V_.getData(elem), handlers;
if (data && !data.handler) {
data.handler = function(event){
event = _V_.fixEvent(event);
var handlers = _V_.getData(elem).events[event.type];
if (handlers) {
var handlersCopy = [];
_V_.each(handlers, function(handler, i){
handlersCopy[i] = handler;
})
for (var i = 0, l = handlersCopy.length; i < l; i++) {
handlersCopy[i].call(elem, event);
}
}
};
}
if (!data.events) { data.events = {}; }
handlers = data.events[type];
if (!handlers) {
handlers = data.events[ type ] = [];
if (document.addEventListener) {
elem.addEventListener(type, data.handler, false);
} else if (document.attachEvent) {
elem.attachEvent("on" + type, data.handler);
}
}
if (!fn.guid) { fn.guid = _V_.guid++; }
handlers.push(fn);
},
removeEvent: function(elem, type, fn) {
var data = _V_.getData(elem), handlers;
if (!data.events) { return; }
if (!type) {
for (type in data.events) {
_V_.cleanUpEvents(elem, type);
}
return;
}
handlers = data.events[type];
if (!handlers) { return; }
if (fn && fn.guid) {
for (var i = 0; i < handlers.length; i++) {
if (handlers[i].guid === fn.guid) {
handlers.splice(i--, 1);
}
}
}
_V_.cleanUpEvents(elem, type);
},
cleanUpEvents: function(elem, type) {
var data = _V_.getData(elem);
if (data.events[type].length === 0) {
delete data.events[type];
if (document.removeEventListener) {
elem.removeEventListener(type, data.handler, false);
} else if (document.detachEvent) {
elem.detachEvent("on" + type, data.handler);
}
}
if (_V_.isEmpty(data.events)) {
delete data.events;
delete data.handler;
}
if (_V_.isEmpty(data)) {
_V_.removeData(elem);
}
},
fixEvent: function(event) {
if (event[_V_.expando]) { return event; }
var originalEvent = event;
event = new _V_.Event(originalEvent);
for ( var i = _V_.Event.props.length, prop; i; ) {
prop = _V_.Event.props[ --i ];
event[prop] = originalEvent[prop];
}
if (!event.target) { event.target = event.srcElement || document; }
if (event.target.nodeType === 3) { event.target = event.target.parentNode; }
if (!event.relatedTarget && event.fromElement) {
event.relatedTarget = event.fromElement === event.target ? event.toElement : event.fromElement;
}
if ( event.pageX == null && event.clientX != null ) {
var eventDocument = event.target.ownerDocument || document,
doc = eventDocument.documentElement,
body = eventDocument.body;
event.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
event.pageY = event.clientY + (doc && doc.scrollTop  || body && body.scrollTop  || 0) - (doc && doc.clientTop  || body && body.clientTop  || 0);
}
if (event.which == null && (event.charCode != null || event.keyCode != null)) {
event.which = event.charCode != null ? event.charCode : event.keyCode;
}
if ( !event.metaKey && event.ctrlKey ) {
event.metaKey = event.ctrlKey;
}
if ( !event.which && event.button !== undefined ) {
event.which = (event.button & 1 ? 1 : ( event.button & 2 ? 3 : ( event.button & 4 ? 2 : 0 ) ));
}
return event;
},
triggerEvent: function(elem, event) {
var data = _V_.getData(elem),
parent = elem.parentNode || elem.ownerDocument,
type = event.type || event,
handler;
if (data) { handler = data.handler }
event = typeof event === "object" ?
event[_V_.expando] ?
event :
new _V_.Event(type, event) :
new _V_.Event(type);
event.type = type;
if (handler) {
handler.call(elem, event);
}
event.result = undefined;
event.target = elem;
},
one: function(elem, type, fn) {
_V_.addEvent(elem, type, function(){
_V_.removeEvent(elem, type, arguments.callee)
fn.apply(this, arguments);
});
}
});
_V_.Event = function(src, props){
if (src && src.type) {
this.originalEvent = src;
this.type = src.type;
this.isDefaultPrevented = (src.defaultPrevented || src.returnValue === false ||
src.getPreventDefault && src.getPreventDefault()) ? returnTrue : returnFalse;
} else {
this.type = src;
}
if (props) { _V_.merge(this, props); }
this.timeStamp = (new Date).getTime();
this[_V_.expando] = true;
};
_V_.Event.prototype = {
preventDefault: function() {
this.isDefaultPrevented = returnTrue;
var e = this.originalEvent;
if (!e) { return; }
if (e.preventDefault) {
e.preventDefault();
} else {
e.returnValue = false;
}
},
stopPropagation: function() {
this.isPropagationStopped = returnTrue;
var e = this.originalEvent;
if (!e) { return; }
if (e.stopPropagation) { e.stopPropagation(); }
e.cancelBubble = true;
},
stopImmediatePropagation: function() {
this.isImmediatePropagationStopped = returnTrue;
this.stopPropagation();
},
isDefaultPrevented: returnFalse,
isPropagationStopped: returnFalse,
isImmediatePropagationStopped: returnFalse
};
_V_.Event.props = "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" ");
function returnTrue(){ return true; }
function returnFalse(){ return false; }
var JSON;
if (!JSON) { JSON = {}; }
(function(){
var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
if (typeof JSON.parse !== 'function') {
JSON.parse = function (text, reviver) {
var j;
function walk(holder, key) {
var k, v, value = holder[key];
if (value && typeof value === 'object') {
for (k in value) {
if (Object.prototype.hasOwnProperty.call(value, k)) {
v = walk(value, k);
if (v !== undefined) {
value[k] = v;
} else {
delete value[k];
}
}
}
}
return reviver.call(holder, key, value);
}
text = String(text);
cx.lastIndex = 0;
if (cx.test(text)) {
text = text.replace(cx, function (a) {
return '\\u' +
('0000' + a.charCodeAt(0).toString(16)).slice(-4);
});
}
if (/^[\],:{}\s]*$/
.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
.replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
j = eval('(' + text + ')');
return typeof reviver === 'function' ?
walk({'': j}, '') : j;
}
throw new SyntaxError('JSON.parse');
};
}
}());
_V_.Player = _V_.Component.extend({
init: function(tag, addOptions, ready){
this.tag = tag; // Store the original tag used to set options
var el = this.el = _V_.createElement("div"), // Div to contain video and controls
options = this.options = {},
width = options.width = tag.getAttribute('width'),
height = options.height = tag.getAttribute('height'),
initWidth = width || 300,
initHeight = height || 150;
tag.player = el.player = this;
this.ready(ready);
tag.parentNode.insertBefore(el, tag);
el.appendChild(tag); // Breaks iPhone, fixed in HTML5 setup.
el.id = this.id = tag.id; // ID will now reference box, not the video tag
el.className = tag.className;
tag.id += "_html5_api";
tag.className = "vjs-tech";
_V_.players[el.id] = this;
el.setAttribute("width", initWidth);
el.setAttribute("height", initHeight);
el.style.width = initWidth+"px";
el.style.height = initHeight+"px";
tag.removeAttribute("width");
tag.removeAttribute("height");
_V_.merge(options, _V_.options); // Copy Global Defaults
_V_.merge(options, this.getVideoTagSettings()); // Override with Video Tag Options
_V_.merge(options, addOptions); // Override/extend with options from setup call
tag.removeAttribute("controls");
tag.removeAttribute("poster");
if (tag.hasChildNodes()) {
for (var i=0,j=tag.childNodes;i<j.length;i++) {
if (j[i].nodeName == "SOURCE" || j[i].nodeName == "TRACK") {
tag.removeChild(j[i]);
}
}
}
this.values = {};
this.addClass("vjs-paused");
this.addEvent("ended", this.onEnded);
this.addEvent("play", this.onPlay);
this.addEvent("pause", this.onPause);
this.addEvent("progress", this.onProgress);
this.addEvent("error", this.onError);
if (options.controls) {
this.ready(function(){
this.initComponents();
});
}
this.textTracks = [];
if (options.tracks && options.tracks.length > 0) {
this.addTextTracks(options.tracks);
}
if (!options.sources || options.sources.length == 0) {
for (var i=0,j=options.techOrder; i<j.length; i++) {
var techName = j[i],
tech = _V_[techName];
if (tech.isSupported()) {
this.loadTech(techName);
break;
}
}
} else {
this.src(options.sources);
}
},
values: {},
destroy: function(){
this.stopTrackingProgress();
this.stopTrackingCurrentTime();
_V_.players[this.id] = null;
delete _V_.players[this.id];
this.tech.destroy();
this.el.parentNode.removeChild(this.el);
},
createElement: function(type, options){},
getVideoTagSettings: function(){
var options = {
sources: [],
tracks: []
};
options.src = this.tag.getAttribute("src");
options.controls = this.tag.getAttribute("controls") !== null;
options.poster = this.tag.getAttribute("poster");
options.preload = this.tag.getAttribute("preload");
options.autoplay = this.tag.getAttribute("autoplay") !== null; // hasAttribute not IE <8 compatible
options.loop = this.tag.getAttribute("loop") !== null;
options.muted = this.tag.getAttribute("muted") !== null;
if (this.tag.hasChildNodes()) {
for (var c,i=0,j=this.tag.childNodes;i<j.length;i++) {
c = j[i];
if (c.nodeName == "SOURCE") {
options.sources.push({
src: c.getAttribute('src'),
type: c.getAttribute('type'),
media: c.getAttribute('media'),
title: c.getAttribute('title')
});
}
if (c.nodeName == "TRACK") {
options.tracks.push({
src: c.getAttribute("src"),
kind: c.getAttribute("kind"),
srclang: c.getAttribute("srclang"),
label: c.getAttribute("label"),
'default': c.getAttribute("default") !== null,
title: c.getAttribute("title")
});
}
}
}
return options;
},
loadTech: function(techName, source){
if (this.tech) {
this.unloadTech();
} else if (techName != "html5" && this.tag) {
this.el.removeChild(this.tag);
this.tag = false;
}
this.techName = techName;
this.isReady = false;
var techReady = function(){
this.player.triggerReady();
if (!this.support.progressEvent) {
this.player.manualProgressOn();
}
if (!this.support.timeupdateEvent) {
this.player.manualTimeUpdatesOn();
}
}
var techOptions = _V_.merge({ source: source, parentEl: this.el }, this.options[techName])
if (source) {
if (source.src == this.values.src && this.values.currentTime > 0) {
techOptions.startTime = this.values.currentTime;
}
this.values.src = source.src;
}
this.tech = new _V_[techName](this, techOptions);
this.tech.ready(techReady);
},
unloadTech: function(){
this.tech.destroy();
if (this.manualProgress) { this.manualProgressOff(); }
if (this.manualTimeUpdates) { this.manualTimeUpdatesOff(); }
this.tech = false;
},
manualProgressOn: function(){
this.manualProgress = true;
this.trackProgress();
this.tech.addEvent("progress", function(){
this.removeEvent("progress", arguments.callee);
this.support.progressEvent = true;
this.player.manualProgressOff();
});
},
manualProgressOff: function(){
this.manualProgress = false;
this.stopTrackingProgress();
},
trackProgress: function(){
this.progressInterval = setInterval(_V_.proxy(this, function(){
if (this.values.bufferEnd < this.buffered().end(0)) {
this.triggerEvent("progress");
} else if (this.bufferedPercent() == 1) {
this.stopTrackingProgress();
this.triggerEvent("progress"); // Last update
}
}), 500);
},
stopTrackingProgress: function(){ clearInterval(this.progressInterval); },
manualTimeUpdatesOn: function(){
this.manualTimeUpdates = true;
this.addEvent("play", this.trackCurrentTime);
this.addEvent("pause", this.stopTrackingCurrentTime);
this.tech.addEvent("timeupdate", function(){
this.removeEvent("timeupdate", arguments.callee);
this.support.timeupdateEvent = true;
this.player.manualTimeUpdatesOff();
});
},
manualTimeUpdatesOff: function(){
this.manualTimeUpdates = false;
this.stopTrackingCurrentTime();
this.removeEvent("play", this.trackCurrentTime);
this.removeEvent("pause", this.stopTrackingCurrentTime);
},
trackCurrentTime: function(){
if (this.currentTimeInterval) { this.stopTrackingCurrentTime(); }
this.currentTimeInterval = setInterval(_V_.proxy(this, function(){
this.triggerEvent("timeupdate");
}), 250); // 42 = 24 fps // 250 is what Webkit uses // FF uses 15
},
stopTrackingCurrentTime: function(){ clearInterval(this.currentTimeInterval); },
onEnded: function(){
if (this.options.loop) {
this.currentTime(0);
this.play();
} else {
this.pause();
this.currentTime(0);
this.pause();
}
},
onPlay: function(){
_V_.removeClass(this.el, "vjs-paused");
_V_.addClass(this.el, "vjs-playing");
},
onPause: function(){
_V_.removeClass(this.el, "vjs-playing");
_V_.addClass(this.el, "vjs-paused");
},
onProgress: function(){
if (this.bufferedPercent() == 1) {
this.triggerEvent("loadedalldata");
}
},
onError: function(e) {
_V_.log("Video Error", e);
},
techCall: function(method, arg){
if (!this.tech.isReady) {
this.tech.ready(function(){
this[method](arg);
});
} else {
try {
this.tech[method](arg);
} catch(e) {
_V_.log(e);
}
}
},
techGet: function(method){
if (this.tech.isReady) {
try {
return this.tech[method]();
} catch(e) {
if (this.tech[method] === undefined) {
_V_.log("Video.js: " + method + " method not defined for "+this.techName+" playback technology.", e);
} else {
if (e.name == "TypeError") {
_V_.log("Video.js: " + method + " unavailable on "+this.techName+" playback technology element.", e);
this.tech.isReady = false;
} else {
_V_.log(e);
}
}
}
}
return;
},
play: function(){
this.techCall("play");
return this;
},
pause: function(){
this.techCall("pause");
return this;
},
paused: function(){
return (this.techGet("paused") === false) ? false : true;
},
currentTime: function(seconds){
if (seconds !== undefined) {
this.values.lastSetCurrentTime = seconds;
this.techCall("setCurrentTime", seconds);
if (this.manualTimeUpdates) { this.triggerEvent("timeupdate"); }
return this;
}
return this.values.currentTime = (this.techGet("currentTime") || 0);
},
duration: function(){
return parseFloat(this.techGet("duration"));
},
remainingTime: function(){
return this.duration() - this.currentTime();
},
buffered: function(){
var buffered = this.techGet("buffered"),
start = 0,
end = this.values.bufferEnd = this.values.bufferEnd || 0, // Default end to 0 and store in values
timeRange;
if (buffered && buffered.length > 0 && buffered.end(0) !== end) {
end = buffered.end(0);
this.values.bufferEnd = end;
}
return _V_.createTimeRange(start, end);
},
bufferedPercent: function(){
return (this.duration()) ? this.buffered().end(0) / this.duration() : 0;
},
volume: function(percentAsDecimal){
var vol;
if (percentAsDecimal !== undefined) {
vol = Math.max(0, Math.min(1, parseFloat(percentAsDecimal))); // Force value to between 0 and 1
this.values.volume = vol;
this.techCall("setVolume", vol);
_V_.setLocalStorage("volume", vol);
return this;
}
vol = parseFloat(this.techGet("volume"));
return (isNaN(vol)) ? 1 : vol;
},
muted: function(muted){
if (muted !== undefined) {
this.techCall("setMuted", muted);
return this;
}
return this.techGet("muted") || false; // Default to false
},
width: function(width, skipListeners){
if (width !== undefined) {
this.el.width = width;
this.el.style.width = width+"px";
if (!skipListeners) { this.triggerEvent("resize"); }
return this;
}
return parseInt(this.el.getAttribute("width"));
},
height: function(height){
if (height !== undefined) {
this.el.height = height;
this.el.style.height = height+"px";
this.triggerEvent("resize");
return this;
}
return parseInt(this.el.getAttribute("height"));
},
size: function(width, height){
return this.width(width, true).height(height);
},
supportsFullScreen: function(){ return this.techGet("supportsFullScreen") || false; },
requestFullScreen: function(){
var requestFullScreen = _V_.support.requestFullScreen;
this.isFullScreen = true;
if (requestFullScreen) {
_V_.addEvent(document, requestFullScreen.eventName, this.proxy(function(){
this.isFullScreen = document[requestFullScreen.isFullScreen];
if (this.isFullScreen == false) {
_V_.removeEvent(document, requestFullScreen.eventName, arguments.callee);
}
this.triggerEvent("fullscreenchange");
}));
if (this.tech.support.fullscreenResize === false && this.options.flash.iFrameMode != true) {
this.pause();
this.unloadTech();
_V_.addEvent(document, requestFullScreen.eventName, this.proxy(function(){
_V_.removeEvent(document, requestFullScreen.eventName, arguments.callee);
this.loadTech(this.techName, { src: this.values.src });
}));
this.el[requestFullScreen.requestFn]();
} else {
this.el[requestFullScreen.requestFn]();
}
} else if (this.tech.supportsFullScreen()) {
this.triggerEvent("fullscreenchange");
this.techCall("enterFullScreen");
} else {
this.triggerEvent("fullscreenchange");
this.enterFullWindow();
}
return this;
},
cancelFullScreen: function(){
var requestFullScreen = _V_.support.requestFullScreen;
this.isFullScreen = false;
if (requestFullScreen) {
if (this.tech.support.fullscreenResize === false && this.options.flash.iFrameMode != true) {
this.pause();
this.unloadTech();
_V_.addEvent(document, requestFullScreen.eventName, this.proxy(function(){
_V_.removeEvent(document, requestFullScreen.eventName, arguments.callee);
this.loadTech(this.techName, { src: this.values.src })
}));
document[requestFullScreen.cancelFn]();
} else {
document[requestFullScreen.cancelFn]();
}
} else if (this.tech.supportsFullScreen()) {
this.techCall("exitFullScreen");
this.triggerEvent("fullscreenchange");
} else {
this.exitFullWindow();
this.triggerEvent("fullscreenchange");
}
return this;
},
enterFullWindow: function(){
this.isFullWindow = true;
this.docOrigOverflow = document.documentElement.style.overflow;
_V_.addEvent(document, "keydown", _V_.proxy(this, this.fullWindowOnEscKey));
document.documentElement.style.overflow = 'hidden';
_V_.addClass(document.body, "vjs-full-window");
_V_.addClass(this.el, "vjs-fullscreen");
this.triggerEvent("enterFullWindow");
},
fullWindowOnEscKey: function(event){
if (event.keyCode == 27) {
if (this.isFullScreen == true) {
this.cancelFullScreen();
} else {
this.exitFullWindow();
}
}
},
exitFullWindow: function(){
this.isFullWindow = false;
_V_.removeEvent(document, "keydown", this.fullWindowOnEscKey);
document.documentElement.style.overflow = this.docOrigOverflow;
_V_.removeClass(document.body, "vjs-full-window");
_V_.removeClass(this.el, "vjs-fullscreen");
this.triggerEvent("exitFullWindow");
},
selectSource: function(sources){
for (var i=0,j=this.options.techOrder;i<j.length;i++) {
var techName = j[i],
tech = _V_[techName];
if (tech.isSupported()) {
for (var a=0,b=sources;a<b.length;a++) {
var source = b[a];
if (tech.canPlaySource.call(this, source)) {
return { source: source, tech: techName };
}
}
}
}
return false;
},
src: function(source){
if (source instanceof Array) {
var sourceTech = this.selectSource(source),
source,
techName;
if (sourceTech) {
source = sourceTech.source;
techName = sourceTech.tech;
if (techName == this.techName) {
this.src(source); // Passing the source object
} else {
this.loadTech(techName, source);
}
} else {
_V_.log("No compatible source and playback technology were found.")
}
} else if (source instanceof Object) {
if (_V_[this.techName].canPlaySource(source)) {
this.src(source.src);
} else {
this.src([source]);
}
} else {
this.values.src = source;
if (!this.isReady) {
this.ready(function(){
this.src(source);
});
} else {
this.techCall("src", source);
if (this.options.preload == "auto") {
this.load();
}
if (this.options.autoplay) {
this.play();
}
}
}
return this;
},
load: function(){
this.techCall("load");
return this;
},
currentSrc: function(){
return this.techGet("currentSrc") || this.values.src || "";
},
preload: function(value){
if (value !== undefined) {
this.techCall("setPreload", value);
this.options.preload = value;
return this;
}
return this.techGet("preload");
},
autoplay: function(value){
if (value !== undefined) {
this.techCall("setAutoplay", value);
this.options.autoplay = value;
return this;
}
return this.techGet("autoplay", value);
},
loop: function(value){
if (value !== undefined) {
this.techCall("setLoop", value);
this.options.loop = value;
return this;
}
return this.techGet("loop");
},
controls: function(){ return this.options.controls; },
poster: function(){ return this.techGet("poster"); },
error: function(){ return this.techGet("error"); },
ended: function(){ return this.techGet("ended"); }
});
(function(){
var requestFn,
cancelFn,
eventName,
isFullScreen,
playerProto = _V_.Player.prototype;
if (document.cancelFullscreen !== undefined) {
requestFn = "requestFullscreen";
cancelFn = "exitFullscreen";
eventName = "fullscreenchange";
isFullScreen = "fullScreen";
} else {
_V_.each(["moz", "webkit"], function(prefix){
if ((prefix != "moz" || document.mozFullScreenEnabled) && document[prefix + "CancelFullScreen"] !== undefined) {
requestFn = prefix + "RequestFullScreen";
cancelFn = prefix + "CancelFullScreen";
eventName = prefix + "fullscreenchange";
if (prefix == "webkit") {
isFullScreen = prefix + "IsFullScreen";
} else {
isFullScreen = prefix + "FullScreen";
}
}
});
}
if (requestFn) {
_V_.support.requestFullScreen = {
requestFn: requestFn,
cancelFn: cancelFn,
eventName: eventName,
isFullScreen: isFullScreen
};
}
})();
_V_.PlaybackTech = _V_.Component.extend({
init: function(player, options){
},
onClick: function(){
if (this.player.options.controls) {
_V_.PlayToggle.prototype.onClick.call(this);
}
}
});
_V_.apiMethods = "play,pause,paused,currentTime,setCurrentTime,duration,buffered,volume,setVolume,muted,setMuted,width,height,supportsFullScreen,enterFullScreen,src,load,currentSrc,preload,setPreload,autoplay,setAutoplay,loop,setLoop,error,networkState,readyState,seeking,initialTime,startOffsetTime,played,seekable,ended,videoTracks,audioTracks,videoWidth,videoHeight,textTracks,defaultPlaybackRate,playbackRate,mediaGroup,controller,controls,defaultMuted".split(",");
_V_.each(_V_.apiMethods, function(methodName){
_V_.PlaybackTech.prototype[methodName] = function(){
throw new Error("The '"+methodName+"' method is not available on the playback technology's API");
}
});
_V_.html5 = _V_.PlaybackTech.extend({
init: function(player, options, ready){
this.player = player;
this.el = this.createElement();
this.ready(ready);
this.addEvent("click", this.proxy(this.onClick));
var source = options.source;
if (source && this.el.currentSrc == source.src) {
player.triggerEvent("loadstart");
} else if (source) {
this.el.src = source.src;
}
player.ready(function(){
if (this.options.autoplay && this.paused()) {
this.tag.poster = null; // Chrome Fix. Fixed in Chrome v16.
this.play();
}
});
this.setupTriggers();
this.triggerReady();
},
destroy: function(){
this.player.tag = false;
this.removeTriggers();
this.el.parentNode.removeChild(this.el);
},
createElement: function(){
var html5 = _V_.html5,
player = this.player,
el = player.tag,
newEl;
if (!el || this.support.movingElementInDOM === false) {
if (el) {
player.el.removeChild(el);
}
newEl = _V_.createElement("video", {
id: el.id || player.el.id + "_html5_api",
className: el.className || "vjs-tech"
});
el = newEl;
_V_.insertFirst(el, player.el);
}
_V_.each(["autoplay","preload","loop","muted"], function(attr){ // ,"poster"
if (player.options[attr] !== null) {
el[attr] = player.options[attr];
}
}, this);
return el;
},
setupTriggers: function(){
_V_.each.call(this, _V_.html5.events, function(type){
_V_.addEvent(this.el, type, _V_.proxy(this.player, this.eventHandler));
});
},
removeTriggers: function(){
_V_.each.call(this, _V_.html5.events, function(type){
_V_.removeEvent(this.el, type, _V_.proxy(this.player, this.eventHandler));
});
},
eventHandler: function(e){
e.stopPropagation();
this.triggerEvent(e);
},
play: function(){ this.el.play(); },
pause: function(){ this.el.pause(); },
paused: function(){ return this.el.paused; },
currentTime: function(){ return this.el.currentTime; },
setCurrentTime: function(seconds){
try {
this.el.currentTime = seconds;
} catch(e) {
_V_.log(e, "Video isn't ready. (VideoJS)");
}
},
duration: function(){ return this.el.duration || 0; },
buffered: function(){ return this.el.buffered; },
volume: function(){ return this.el.volume; },
setVolume: function(percentAsDecimal){ this.el.volume = percentAsDecimal; },
muted: function(){ return this.el.muted; },
setMuted: function(muted){ this.el.muted = muted },
width: function(){ return this.el.offsetWidth; },
height: function(){ return this.el.offsetHeight; },
supportsFullScreen: function(){
if (typeof this.el.webkitEnterFullScreen == 'function') {
if (!navigator.userAgent.match("Chrome") && !navigator.userAgent.match("Mac OS X 10.5")) {
return true;
}
}
return false;
},
enterFullScreen: function(){
try {
this.el.webkitEnterFullScreen();
} catch (e) {
if (e.code == 11) {
_V_.log("VideoJS: Video not ready.")
}
}
},
src: function(src){ this.el.src = src; },
load: function(){ this.el.load(); },
currentSrc: function(){ return this.el.currentSrc; },
preload: function(){ return this.el.preload; },
setPreload: function(val){ this.el.preload = val; },
autoplay: function(){ return this.el.autoplay; },
setAutoplay: function(val){ this.el.autoplay = val; },
loop: function(){ return this.el.loop; },
setLoop: function(val){ this.el.loop = val; },
error: function(){ return this.el.error; },
seeking: function(){ return this.el.seeking; },
ended: function(){ return this.el.ended; },
controls: function(){ return this.player.options.controls; },
defaultMuted: function(){ return this.el.defaultMuted; }
});
_V_.html5.isSupported = function(){
return !!document.createElement("video").canPlayType;
};
_V_.html5.canPlaySource = function(srcObj){
return !!document.createElement("video").canPlayType(srcObj.type);
};
_V_.html5.events = "loadstart,suspend,abort,error,emptied,stalled,loadedmetadata,loadeddata,canplay,canplaythrough,playing,waiting,seeking,seeked,ended,durationchange,timeupdate,progress,play,pause,ratechange,volumechange".split(",");
_V_.html5.prototype.support = {
fullscreen: (typeof _V_.testVid.webkitEnterFullScreen !== undefined) ? (!_V_.ua.match("Chrome") && !_V_.ua.match("Mac OS X 10.5") ? true : false) : false,
movingElementInDOM: !_V_.isIOS()
};
if (_V_.isAndroid()) {
if (_V_.androidVersion() < 3) {
document.createElement("video").constructor.prototype.canPlayType = function(type){
return (type && type.toLowerCase().indexOf("video/mp4") != -1) ? "maybe" : "";
};
}
}
_V_.flash = _V_.PlaybackTech.extend({
init: function(player, options){
this.player = player;
var source = options.source,
parentEl = options.parentEl,
placeHolder = this.el = _V_.createElement("div", { id: parentEl.id + "_temp_flash" }),
objId = player.el.id+"_flash_api",
playerOptions = player.options,
flashVars = _V_.merge({
readyFunction: "_V_.flash.onReady",
eventProxyFunction: "_V_.flash.onEvent",
errorEventProxyFunction: "_V_.flash.onError",
autoplay: playerOptions.autoplay,
preload: playerOptions.preload,
loop: playerOptions.loop,
muted: playerOptions.muted
}, options.flashVars),
params = _V_.merge({
wmode: "opaque", // Opaque is needed to overlay controls, but can affect playback performance
bgcolor: "#000000" // Using bgcolor prevents a white flash when the object is loading
}, options.params),
attributes = _V_.merge({
id: objId,
name: objId, // Both ID and Name needed or swf to identifty itself
'class': 'vjs-tech'
}, options.attributes)
;
if (source) {
flashVars.src = encodeURIComponent(_V_.getAbsoluteURL(source.src));
}
_V_.insertFirst(placeHolder, parentEl);
if (options.startTime) {
this.ready(function(){
this.load();
this.play();
this.currentTime(options.startTime);
});
}
if (options.iFrameMode == true && !_V_.isFF) {
var iFrm = _V_.createElement("iframe", {
id: objId + "_iframe",
name: objId + "_iframe",
className: "vjs-tech",
scrolling: "no",
marginWidth: 0,
marginHeight: 0,
frameBorder: 0
});
flashVars.readyFunction = "ready";
flashVars.eventProxyFunction = "events";
flashVars.errorEventProxyFunction = "errors";
_V_.addEvent(iFrm, "load", _V_.proxy(this, function(){
var iDoc, objTag, swfLoc,
iWin = iFrm.contentWindow,
varString = "";
iDoc = iFrm.contentDocument ? iFrm.contentDocument : iFrm.contentWindow.document;
iDoc.write(_V_.flash.getEmbedCode(options.swf, flashVars, params, attributes));
iWin.player = this.player;
iWin.ready = _V_.proxy(this.player, function(currSwf){
var el = iDoc.getElementById(currSwf),
player = this,
tech = player.tech;
tech.el = el;
_V_.addEvent(el, "click", tech.proxy(tech.onClick));
_V_.flash.checkReady(tech);
});
iWin.events = _V_.proxy(this.player, function(swfID, eventName, other){
var player = this;
if (player && player.techName == "flash") {
player.triggerEvent(eventName);
}
});
iWin.errors = _V_.proxy(this.player, function(swfID, eventName){
_V_.log("Flash Error", eventName);
});
}));
placeHolder.parentNode.replaceChild(iFrm, placeHolder);
} else {
_V_.flash.embed(options.swf, placeHolder, flashVars, params, attributes);
}
},
destroy: function(){
this.el.parentNode.removeChild(this.el);
},
play: function(){ this.el.vjs_play(); },
pause: function(){ this.el.vjs_pause(); },
src: function(src){
src = _V_.getAbsoluteURL(src);
this.el.vjs_src(src);
if (this.player.autoplay()) {
var tech = this;
setTimeout(function(){ tech.play(); }, 0);
}
},
load: function(){ this.el.vjs_load(); },
poster: function(){ this.el.vjs_getProperty("poster"); },
buffered: function(){
return _V_.createTimeRange(0, this.el.vjs_getProperty("buffered"));
},
supportsFullScreen: function(){
return false; // Flash does not allow fullscreen through javascript
},
enterFullScreen: function(){
return false;
}
});
(function(){
var api = _V_.flash.prototype,
readWrite = "preload,currentTime,defaultPlaybackRate,playbackRate,autoplay,loop,mediaGroup,controller,controls,volume,muted,defaultMuted".split(","),
readOnly = "error,currentSrc,networkState,readyState,seeking,initialTime,duration,startOffsetTime,paused,played,seekable,ended,videoTracks,audioTracks,videoWidth,videoHeight,textTracks".split(","),
callOnly = "load,play,pause".split(",");
createSetter = function(attr){
var attrUpper = attr.charAt(0).toUpperCase() + attr.slice(1);
api["set"+attrUpper] = function(val){ return this.el.vjs_setProperty(attr, val); };
},
createGetter = function(attr){
api[attr] = function(){ return this.el.vjs_getProperty(attr); };
}
;
_V_.each(readWrite, function(attr){
createGetter(attr);
createSetter(attr);
});
_V_.each(readOnly, function(attr){
createGetter(attr);
});
})();
_V_.flash.isSupported = function(){
return _V_.flash.version()[0] >= 10;
};
_V_.flash.canPlaySource = function(srcObj){
if (srcObj.type in _V_.flash.prototype.support.formats) { return "maybe"; }
};
_V_.flash.prototype.support = {
formats: {
"video/flv": "FLV",
"video/x-flv": "FLV",
"video/mp4": "MP4",
"video/m4v": "MP4"
},
progressEvent: false,
timeupdateEvent: false,
fullscreenResize: false,
parentResize: !(_V_.ua.match("Firefox"))
};
_V_.flash.onReady = function(currSwf){
var el = _V_.el(currSwf);
var player = el.player || el.parentNode.player,
tech = player.tech;
el.player = player;
tech.el = el;
tech.addEvent("click", tech.onClick);
_V_.flash.checkReady(tech);
};
_V_.flash.checkReady = function(tech){
if (tech.el.vjs_getProperty) {
tech.triggerReady();
} else {
setTimeout(function(){
_V_.flash.checkReady(tech);
}, 50);
}
};
_V_.flash.onEvent = function(swfID, eventName){
var player = _V_.el(swfID).player;
player.triggerEvent(eventName);
};
_V_.flash.onError = function(swfID, err){
var player = _V_.el(swfID).player;
player.triggerEvent("error");
_V_.log("Flash Error", err, swfID);
};
_V_.flash.version = function(){
var version = '0,0,0'
try {
version = new ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version').replace(/\D+/g, ',').match(/^,?(.+),?$/)[1];
} catch(e) {
try {
if (navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin){
version = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1];
}
} catch(e) {}
}
return version.split(",");
}
_V_.flash.embed = function(swf, placeHolder, flashVars, params, attributes){
var code = _V_.flash.getEmbedCode(swf, flashVars, params, attributes),
obj = _V_.createElement("div", { innerHTML: code }).childNodes[0],
par = placeHolder.parentNode
;
placeHolder.parentNode.replaceChild(obj, placeHolder);
if (_V_.isIE()) {
var newObj = par.childNodes[0];
setTimeout(function(){
newObj.style.display = "block";
}, 1000);
}
return obj;
};
_V_.flash.getEmbedCode = function(swf, flashVars, params, attributes){
var objTag = '<object type="application/x-shockwave-flash"',
flashVarsString = '',
paramsString = ''
attrsString = '';
if (flashVars) {
_V_.eachProp(flashVars, function(key, val){
flashVarsString += (key + "=" + val + "&amp;");
});
}
params = _V_.merge({
movie: swf,
flashvars: flashVarsString,
allowScriptAccess: "always", // Required to talk to swf
allowNetworking: "all" // All should be default, but having security issues.
}, params);
_V_.eachProp(params, function(key, val){
paramsString += '<param name="'+key+'" value="'+val+'" />';
});
attributes = _V_.merge({
data: swf,
width: "100%",
height: "100%"
}, attributes);
_V_.eachProp(attributes, function(key, val){
attrsString += (key + '="' + val + '" ');
});
return objTag + attrsString + '>' + paramsString + '</object>';
}
_V_.merge(_V_.Player.prototype, {
addTextTracks: function(trackObjects){
var tracks = this.textTracks = (this.textTracks) ? this.textTracks : [],
i = 0, j = trackObjects.length, track, Kind;
for (;i<j;i++) {
Kind = _V_.uc(trackObjects[i].kind || "subtitles");
track = new _V_[Kind + "Track"](this, trackObjects[i]);
tracks.push(track);
if (track['default']) {
this.ready(_V_.proxy(track, track.show));
}
}
return this;
},
showTextTrack: function(id, disableSameKind){
var tracks = this.textTracks,
i = 0,
j = tracks.length,
track, showTrack, kind;
for (;i<j;i++) {
track = tracks[i];
if (track.id === id) {
track.show();
showTrack = track;
} else if (disableSameKind && track.kind == disableSameKind && track.mode > 0) {
track.disable();
}
}
kind = (showTrack) ? showTrack.kind : ((disableSameKind) ? disableSameKind : false);
if (kind) {
this.triggerEvent(kind+"trackchange");
}
return this;
}
});
_V_.Track = _V_.Component.extend({
init: function(player, options){
this._super(player, options);
_V_.merge(this, {
id: options.id || ("vjs_" + options.kind + "_" + options.language + "_" + _V_.guid++),
src: options.src,
"default": options["default"], // 'default' is reserved-ish
title: options.title,
language: options.srclang,
label: options.label,
cues: [],
activeCues: [],
readyState: 0,
mode: 0
});
},
createElement: function(){
return this._super("div", {
className: "vjs-" + this.kind + " vjs-text-track"
});
},
show: function(){
this.activate();
this.mode = 2;
this._super();
},
hide: function(){
this.activate();
this.mode = 1;
this._super();
},
disable: function(){
if (this.mode == 2) { this.hide(); }
this.deactivate();
this.mode = 0;
},
activate: function(){
if (this.readyState == 0) { this.load(); }
if (this.mode == 0) {
this.player.addEvent("timeupdate", this.proxy(this.update, this.id));
this.player.addEvent("ended", this.proxy(this.reset, this.id));
if (this.kind == "captions" || this.kind == "subtitles") {
this.player.textTrackDisplay.addComponent(this);
}
}
},
deactivate: function(){
this.player.removeEvent("timeupdate", this.proxy(this.update, this.id));
this.player.removeEvent("ended", this.proxy(this.reset, this.id));
this.reset(); // Reset
this.player.textTrackDisplay.removeComponent(this);
},
load: function(){
if (this.readyState == 0) {
this.readyState = 1;
_V_.get(this.src, this.proxy(this.parseCues), this.proxy(this.onError));
}
},
onError: function(err){
this.error = err;
this.readyState = 3;
this.triggerEvent("error");
},
parseCues: function(srcContent) {
var cue, time, text,
lines = srcContent.split("\n"),
line = "", id;
for (var i=1, j=lines.length; i<j; i++) {
line = _V_.trim(lines[i]); // Trim whitespace and linebreaks
if (line) { // Loop until a line with content
if (line.indexOf("-->") == -1) {
id = line;
line = _V_.trim(lines[++i]);
} else {
id = this.cues.length;
}
cue = {
id: id, // Cue Number
index: this.cues.length // Position in Array
};
time = line.split(" --> ");
cue.startTime = this.parseCueTime(time[0]);
cue.endTime = this.parseCueTime(time[1]);
text = [];
while (lines[++i] && (line = _V_.trim(lines[i]))) {
text.push(line);
}
cue.text = text.join('<br/>');
this.cues.push(cue);
}
}
this.readyState = 2;
this.triggerEvent("loaded");
},
parseCueTime: function(timeText) {
var parts = timeText.split(':'),
time = 0,
hours, minutes, other, seconds, ms, flags;
if (parts.length == 3) {
hours = parts[0];
minutes = parts[1];
other = parts[2];
} else {
hours = 0;
minutes = parts[0];
other = parts[1];
}
other = other.split(/\s+/)
seconds = other.splice(0,1)[0];
seconds = seconds.split(/\.|,/);
ms = parseFloat(seconds[1]);
seconds = seconds[0];
time += parseFloat(hours) * 3600;
time += parseFloat(minutes) * 60;
time += parseFloat(seconds);
if (ms) { time += ms/1000; }
return time;
},
update: function(){
if (this.cues.length > 0) {
var time = this.player.currentTime();
if (this.prevChange === undefined || time < this.prevChange || this.nextChange <= time) {
var cues = this.cues,
newNextChange = this.player.duration(), // Start at beginning of the timeline
newPrevChange = 0, // Start at end
reverse = false, // Set the direction of the loop through the cues. Optimized the cue check.
newCues = [], // Store new active cues.
firstActiveIndex, lastActiveIndex,
html = "", // Create cue text HTML to add to the display
cue, i, j; // Loop vars
if (time >= this.nextChange || this.nextChange === undefined) { // NextChange should happen
i = (this.firstActiveIndex !== undefined) ? this.firstActiveIndex : 0;
} else {
reverse = true;
i = (this.lastActiveIndex !== undefined) ? this.lastActiveIndex : cues.length - 1;
}
while (true) { // Loop until broken
cue = cues[i];
if (cue.endTime <= time) {
newPrevChange = Math.max(newPrevChange, cue.endTime);
if (cue.active) {
cue.active = false;
}
} else if (time < cue.startTime) {
newNextChange = Math.min(newNextChange, cue.startTime);
if (cue.active) {
cue.active = false;
}
if (!reverse) { break; }
} else {
if (reverse) {
newCues.splice(0,0,cue);
if (lastActiveIndex === undefined) { lastActiveIndex = i; }
firstActiveIndex = i;
} else {
newCues.push(cue);
if (firstActiveIndex === undefined) { firstActiveIndex = i; }
lastActiveIndex = i;
}
newNextChange = Math.min(newNextChange, cue.endTime);
newPrevChange = Math.max(newPrevChange, cue.startTime);
cue.active = true;
}
if (reverse) {
if (i === 0) { break; } else { i--; }
} else {
if (i === cues.length - 1) { break; } else { i++; }
}
}
this.activeCues = newCues;
this.nextChange = newNextChange;
this.prevChange = newPrevChange;
this.firstActiveIndex = firstActiveIndex;
this.lastActiveIndex = lastActiveIndex;
this.updateDisplay();
this.triggerEvent("cuechange");
}
}
},
updateDisplay: function(){
var cues = this.activeCues,
html = "",
i=0,j=cues.length;
for (;i<j;i++) {
html += "<span class='vjs-tt-cue'>"+cues[i].text+"</span>";
}
this.el.innerHTML = html;
},
reset: function(){
this.nextChange = 0;
this.prevChange = this.player.duration();
this.firstActiveIndex = 0;
this.lastActiveIndex = 0;
}
});
_V_.CaptionsTrack = _V_.Track.extend({
kind: "captions"
});
_V_.SubtitlesTrack = _V_.Track.extend({
kind: "subtitles"
});
_V_.ChaptersTrack = _V_.Track.extend({
kind: "chapters"
});
_V_.TextTrackDisplay = _V_.Component.extend({
createElement: function(){
return this._super("div", {
className: "vjs-text-track-display"
});
}
});
_V_.TextTrackMenuItem = _V_.MenuItem.extend({
init: function(player, options){
var track = this.track = options.track;
options.label = track.label;
options.selected = track["default"];
this._super(player, options);
this.player.addEvent(track.kind + "trackchange", _V_.proxy(this, this.update));
},
onClick: function(){
this._super();
this.player.showTextTrack(this.track.id, this.track.kind);
},
update: function(){
if (this.track.mode == 2) {
this.selected(true);
} else {
this.selected(false);
}
}
});
_V_.OffTextTrackMenuItem = _V_.TextTrackMenuItem.extend({
init: function(player, options){
options.track = { kind: options.kind, player: player, label: "Off" }
this._super(player, options);
},
onClick: function(){
this._super();
this.player.showTextTrack(this.track.id, this.track.kind);
},
update: function(){
var tracks = this.player.textTracks,
i=0, j=tracks.length, track,
off = true;
for (;i<j;i++) {
track = tracks[i];
if (track.kind == this.track.kind && track.mode == 2) {
off = false;
}
}
if (off) {
this.selected(true);
} else {
this.selected(false);
}
}
});
_V_.TextTrackButton = _V_.Button.extend({
init: function(player, options){
this._super(player, options);
this.menu = this.createMenu();
if (this.items.length === 0) {
this.hide();
}
},
createMenu: function(){
var menu = new _V_.Menu(this.player);
menu.el.appendChild(_V_.createElement("li", {
className: "vjs-menu-title",
innerHTML: _V_.uc(this.kind)
}));
menu.addItem(new _V_.OffTextTrackMenuItem(this.player, { kind: this.kind }))
this.items = this.createItems();
this.each(this.items, function(item){
menu.addItem(item);
});
this.addComponent(menu);
return menu;
},
createItems: function(){
var items = [];
this.each(this.player.textTracks, function(track){
if (track.kind === this.kind) {
items.push(new _V_.TextTrackMenuItem(this.player, {
track: track
}));
}
});
return items;
},
buildCSSClass: function(){
return this.className + " vjs-menu-button " + this._super();
},
onFocus: function(){
this.menu.lockShowing();
_V_.one(this.menu.el.childNodes[this.menu.el.childNodes.length - 1], "blur", this.proxy(function(){
this.menu.unlockShowing();
}));
},
onBlur: function(){},
onClick: function(){
this.one("mouseout", this.proxy(function(){
this.menu.unlockShowing();
this.el.blur();
}));
}
});
_V_.CaptionsButton = _V_.TextTrackButton.extend({
kind: "captions",
buttonText: "Captions",
className: "vjs-captions-button"
});
_V_.SubtitlesButton = _V_.TextTrackButton.extend({
kind: "subtitles",
buttonText: "Subtitles",
className: "vjs-subtitles-button"
});
_V_.ChaptersButton = _V_.TextTrackButton.extend({
kind: "chapters",
buttonText: "Chapters",
className: "vjs-chapters-button",
createItems: function(chaptersTrack){
var items = [];
this.each(this.player.textTracks, function(track){
if (track.kind === this.kind) {
items.push(new _V_.TextTrackMenuItem(this.player, {
track: track
}));
}
});
return items;
},
createMenu: function(){
var tracks = this.player.textTracks,
i = 0,
j = tracks.length,
track, chaptersTrack,
items = this.items = [];
for (;i<j;i++) {
track = tracks[i];
if (track.kind == this.kind && track["default"]) {
if (track.readyState < 2) {
this.chaptersTrack = track;
track.addEvent("loaded", this.proxy(this.createMenu));
return;
} else {
chaptersTrack = track;
break;
}
}
}
var menu = this.menu = new _V_.Menu(this.player);
menu.el.appendChild(_V_.createElement("li", {
className: "vjs-menu-title",
innerHTML: _V_.uc(this.kind)
}));
if (chaptersTrack) {
var cues = chaptersTrack.cues,
i = 0, j = cues.length, cue, mi;
for (;i<j;i++) {
cue = cues[i];
mi = new _V_.ChaptersTrackMenuItem(this.player, {
track: chaptersTrack,
cue: cue
});
items.push(mi);
menu.addComponent(mi);
}
}
this.addComponent(menu);
if (this.items.length > 0) {
this.show();
}
return menu;
}
});
_V_.ChaptersTrackMenuItem = _V_.MenuItem.extend({
init: function(player, options){
var track = this.track = options.track,
cue = this.cue = options.cue,
currentTime = player.currentTime();
options.label = cue.text;
options.selected = (cue.startTime <= currentTime && currentTime < cue.endTime);
this._super(player, options);
track.addEvent("cuechange", _V_.proxy(this, this.update));
},
onClick: function(){
this._super();
this.player.currentTime(this.cue.startTime);
this.update(this.cue.startTime);
},
update: function(time){
var cue = this.cue,
currentTime = this.player.currentTime();
if (cue.startTime <= currentTime && currentTime < cue.endTime) {
this.selected(true);
} else {
this.selected(false);
}
}
});
_V_.merge(_V_.ControlBar.prototype.options.components, {
"subtitlesButton": {},
"captionsButton": {},
"chaptersButton": {}
});
_V_.autoSetup = function(){
var options, vid, player,
vids = document.getElementsByTagName("video");
if (vids && vids.length > 0) {
for (var i=0,j=vids.length; i<j; i++) {
vid = vids[i];
if (vid && vid.getAttribute) {
if (vid.player === undefined) {
options = vid.getAttribute("data-setup");
if (options !== null) {
options = JSON.parse(options || "{}");
player = _V_(vid, options);
}
}
} else {
_V_.autoSetupTimeout(1);
break;
}
}
} else if (!_V_.windowLoaded) {
_V_.autoSetupTimeout(1);
}
};
_V_.autoSetupTimeout = function(wait){
setTimeout(_V_.autoSetup, wait);
};
_V_.addEvent(window, "load", function(){
_V_.windowLoaded = true;
});
_V_.autoSetup();
window.VideoJS = window._V_ = VideoJS;
})(window);
