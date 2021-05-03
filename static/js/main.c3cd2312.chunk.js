(this["webpackJsonpcustom-counters"]=this["webpackJsonpcustom-counters"]||[]).push([[0],{24:function(e,n,t){},25:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var c=t(2),a=t.n(c),o=t(14),r=t.n(o),i=(t(24),t(3)),s=(t(25),t(19)),l=t(10),u=t(5),j=Object(c.createContext)([]),b={min:1,max:6,log:[]};function d(){var e;try{var n=JSON.parse(localStorage.getItem("config"));e=Object(u.a)(Object(u.a)({},b),null!==n&&void 0!==n?n:[])}catch(t){e=b}return[e,function(e){return localStorage.setItem("config",JSON.stringify(e))}]}function v(e){var n=Object(c.useContext)(j),t=Object(i.a)(n,2),a=t[0],o=t[1],r=d(),s=Object(i.a)(r,2)[1];if(!a)throw Error("useConfig hook must be used inside ConfigContext.Provider");return[a[e],function(n){var t=Object(u.a)(Object(u.a)({},a),{},Object(l.a)({},e,n));o(t),s(t)}]}var f=t(7),m=t(4),O=t(0);function h(){var e=Object(c.useState)("..."),n=Object(i.a)(e,2),t=n[0],a=n[1],o=Object(c.useState)(!1),r=Object(i.a)(o,2),l=r[0],u=r[1],j=v("min"),b=Object(i.a)(j,1)[0],d=v("max"),h=Object(i.a)(d,1)[0],g=v("log"),x=Object(i.a)(g,2),p=x[0],w=x[1];return Object(O.jsx)("div",{className:l?"rotation-animation ":" ",onClick:function(){u(!0);var e=function(e,n){if(e>n){var t=[n,e];e=t[0],n=t[1]}return e=Math.ceil(e),n=Math.floor(n),Math.floor(Math.random()*(n-e+1))+e}(b,h);a(e),function(e,n,t){w([{value:e,min:n,max:t}].concat(Object(s.a)(p)))}(e,b,h),setTimeout((function(){return u(!1)}),400)},children:function(e){if(b<=6&&b>=1&&h<=6&&h>=1){var n=m.b;switch(e){case 1:n=m.e;break;case 2:n=m.h;break;case 3:n=m.g;break;case 4:n=m.d;break;case 5:n=m.c;break;case 6:n=m.f}return Object(O.jsx)(f.a,{className:"dice-value result-value",icon:n})}return Object(O.jsx)("div",{className:"random-number result-value",children:e})}(t)})}var g=t(18),x=t.n(g);function p(){var e=v("min"),n=Object(i.a)(e,2),t=n[0],a=n[1],o=v("max"),r=Object(i.a)(o,2),s=r[0],l=r[1],u=Object(c.useState)(!1),j=Object(i.a)(u,2),b=j[0],d=j[1];function h(e){return Math.round(Number(e.replaceAll(/[^\d]/g,"").substr(0,3)))}return Object(O.jsxs)("div",{children:[Object(O.jsx)(f.a,{className:"settings-button",icon:m.a,onClick:function(){return d(!0)}}),Object(O.jsx)(x.a,{className:"settings-button__modal",overlayClassName:"settings-button__overlay",isOpen:b,onRequestClose:function(){return d(!1)},children:Object(O.jsxs)("div",{className:"config",children:[Object(O.jsx)(f.a,{icon:m.i,className:"settings-button__modal__close",onClick:function(){return d(!1)}}),Object(O.jsxs)("div",{className:"config__properties",children:[Object(O.jsxs)("label",{children:["\u041e\u0442",Object(O.jsx)("input",{value:t,inputMode:"numeric",onChange:function(e){return a(h(e.target.value))}})]}),Object(O.jsxs)("label",{children:["\u0414\u043e",Object(O.jsx)("input",{value:s,inputMode:"numeric",onChange:function(e){return l(h(e.target.value))}})]})]})]})})]})}function w(){var e=v("log"),n=Object(i.a)(e,2)[1];return Object(O.jsx)("div",{className:"clear-log-button",onClick:function(){return n([])},children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"})}function k(e){return Object(O.jsx)("div",{className:"log-element",children:Object(O.jsxs)("div",{className:"log-element__value",children:[e.value,Object(O.jsx)("sub",{className:"log-element__value__sub",children:e.min+"-"+e.max})]})})}function N(e){var n=Object(c.useRef)(null);return n.current&&(n.current.scrollTop=0),Object(O.jsx)("div",{className:"log-element-list",ref:n,children:e.log.map((function(e,n){return Object(O.jsx)(k,{value:e.value,min:e.min,max:e.max},n)}))})}function C(){var e=v("log"),n=Object(i.a)(e,1)[0];return Object(O.jsxs)("div",{className:"log",children:[Object(O.jsx)(N,{log:n}),n.length>0?Object(O.jsx)(w,{}):""]})}function _(){var e=d(),n=Object(i.a)(e,1)[0],t=Object(c.useState)(n),a=Object(i.a)(t,2),o=a[0],r=a[1];return Object(O.jsx)("div",{className:"app",children:Object(O.jsxs)(j.Provider,{value:[o,r],children:[Object(O.jsx)(p,{}),Object(O.jsx)("div",{className:"container",children:Object(O.jsx)(h,{})}),Object(O.jsx)("div",{className:"container",children:Object(O.jsx)(C,{})})]})})}var S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var M=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,42)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,o=n.getLCP,r=n.getTTFB;t(e),c(e),a(e),o(e),r(e)}))};r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(_,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/custom-counters",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/custom-counters","/service-worker.js");S?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var c=t.headers.get("content-type");404===t.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):y(n,e)}))}}(),M()}},[[41,1,2]]]);
//# sourceMappingURL=main.c3cd2312.chunk.js.map