(this.webpackJsonpabhishyam=this.webpackJsonpabhishyam||[]).push([[0],{20:function(e,n,t){},21:function(e,n,t){e.exports=t(32)},26:function(e,n,t){},32:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(18),i=t.n(a),c=(t(20),t(11)),l=t(12),s=t(14),u=t(13),d=(t(26),Object(o.lazy)((function(){return t.e(4).then(t.bind(null,35))}))),f=function(e){return r.a.createElement(o.Suspense,{fallback:null},r.a.createElement(d,e))},h=t(16),p=t(1),m=Object(o.lazy)((function(){return t.e(3).then(t.bind(null,36))})),v=function(e){return r.a.createElement(o.Suspense,{fallback:null},r.a.createElement(m,e))},b=document.querySelector(".loader-container"),g=document.querySelector("#root"),w=function(e){Object(s.a)(t,e);var n=Object(u.a)(t);function t(){var e;Object(c.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=n.call.apply(n,[this].concat(r))).showLoader=function(){return b.classList.remove("hide-loader")},e.hideLoader=function(){b.classList.add("hide"),g.classList.remove("hide")},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.hideLoader()}},{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/portfolio",render:function(e){return r.a.createElement(f,Object.assign({},e,{name:"Abhi"}))}}),r.a.createElement(p.a,{path:"/photography",render:function(e){return r.a.createElement(v,Object.assign({},e,{name:"Abhi"}))}})))}}]),t}(r.a.Component),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}setTimeout((function(){i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))}),2e3),function(e){if("serviceWorker"in navigator){if(new URL("/portfolio",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/portfolio","/service-worker.js");y?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):k(n,e)}))}}()}},[[21,1,2]]]);
//# sourceMappingURL=main.b608fa2b.chunk.js.map