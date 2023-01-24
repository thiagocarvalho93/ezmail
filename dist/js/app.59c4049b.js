(function(){"use strict";var e={1705:function(e,t,n){var o=n(144),r=n(998),i=n(3059),a=function(){var e=this,t=e._self._c;return t(r.Z,{attrs:{id:"app"}},["Login"!=this.$router.currentRoute.name&&this.$router.currentRoute.name?t("Toolbar"):e._e(),t(i.Z,{staticClass:"container"},[t("div",[t("router-view")],1)])],1)},u=[],l=n(6232),c=n(5550),s=n(3423),d=n(6190),f=n(9582),m=n(9223),p=n(4324),v=n(5808),h=n(4525),g=n(468),b=n(4611),y=n(4604),k=n(2604),Z=n(8718),w=n(7953),_=function(){var e=this,t=e._self._c;return t("div",[e.isMobile?e._e():t(k.Z,{attrs:{app:"",bottom:"",clipped:"",width:"200","mini-variant":e.mini,"expand-on-hover":"",color:"blue",nav:"",dark:""},on:{"update:miniVariant":function(t){e.mini=t},"update:mini-variant":function(t){e.mini=t}},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[t(v.Z,{attrs:{nav:"",dense:""}},e._l(e.rotas,(function(n,o){return t("div",{key:o},[t(h.Z,{key:o,attrs:{to:n.path,link:""}},[t(b.Z,[t(p.Z,[e._v(e._s(n.icon))])],1),t(g.km,[t(g.V9,[e._v(e._s(n.title))])],1)],1)],1)})),0)],1),e.isMobile?t(k.Z,{attrs:{app:"",bottom:"",clipped:"",width:"200",color:"blue",nav:"",dark:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[t(v.Z,{attrs:{nav:"",dense:""}},e._l(e.rotas,(function(n,o){return t("div",{key:o},[t(h.Z,{key:o,attrs:{to:n.path,link:""}},[t(b.Z,[t(p.Z,[e._v(e._s(n.icon))])],1),t(g.km,[t(g.V9,[e._v(e._s(n.title))])],1)],1)],1)})),0)],1):e._e(),t(l.Z,{attrs:{color:"blue",dark:"",app:"","clipped-left":"",outlined:""}},[t(c.Z,{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),t(w.qW,[e._v("EZmail")]),t(Z.Z),t(d.Z,{attrs:{icon:""}},[t(p.Z,[e._v("mdi-cog")])],1),t(y.Z,{attrs:{transition:"scroll-y-transition",bottom:"","min-width":"200px",rounded:"","offset-y":""},scopedSlots:e._u([{key:"activator",fn:function({on:n}){return[t(d.Z,e._g({attrs:{icon:"","x-large":""}},n),[t(s.Z,{attrs:{size:"32"}},[t("img",{attrs:{src:"https://cdn.vuetifyjs.com/images/john.jpg",alt:"John"}})])],1)]}}])},[t(f.Z,[t(g.km,{staticClass:"justify-center"},[t("div",{staticClass:"mx-auto text-center"},[t(s.Z,{attrs:{color:"brown"}},[t("img",{attrs:{src:"https://cdn.vuetifyjs.com/images/john.jpg",alt:"John"}})]),t("h3",[e._v(e._s(e.user.fullName))]),t("p",{staticClass:"text-caption mt-1"},[e._v(" "+e._s(e.user.email)+" ")]),t(m.Z,{staticClass:"my-3"}),t(d.Z,{attrs:{depressed:"",rounded:"",text:""}},[e._v(" Edit Account ")]),t(m.Z,{staticClass:"my-3"}),t(d.Z,{attrs:{depressed:"",rounded:"",text:""},on:{click:e.logout}},[e._v(" Disconnect ")])],1)])],1)],1)],1)],1)},x=[],C=(n(7658),n(3562)),P=n(3512),j={data:()=>({drawer:!1,mini:!0,group:null,rotas:C.Z.filter((e=>!!e.menu)),user:{initials:"JD",fullName:"John Doe",email:"john.doe@ezmail.com"}}),computed:{isMobile(){return this.$vuetify.breakpoint.xsOnly}},watch:{group(){this.drawer=!1}},methods:{logout(){P.Z.excluirToken(),this.$router.push({name:"Login"})}}},E=j,O=n(1001),T=(0,O.Z)(E,_,x,!1,null,null,null),S=T.exports,L={components:{Toolbar:S}},N=L,A=(0,O.Z)(N,a,u,!1,null,null,null),I=A.exports,z=n(6283);o.ZP.use(z.Z);var F=new z.Z({}),M=n(8345);o.ZP.use(M.ZP);const D=new M.ZP({routes:C.Z});D.beforeEach(((e,t,n)=>{if("Login"!=e.name){if(null==localStorage.getItem("token"))return void n({name:"Login"});n()}else n()}));var $=D;o.ZP.config.productionTip=!1,new o.ZP({vuetify:F,router:$,render:e=>e(I)}).$mount("#app")},3562:function(e,t,n){const o=()=>Promise.all([n.e(808),n.e(154)]).then(n.bind(n,154)),r=()=>Promise.all([n.e(915),n.e(808),n.e(786),n.e(476)]).then(n.bind(n,2476)),i=()=>Promise.all([n.e(915),n.e(808),n.e(786),n.e(102)]).then(n.bind(n,9102)),a=()=>Promise.all([n.e(915),n.e(808),n.e(786),n.e(614)]).then(n.bind(n,2614)),u=()=>Promise.all([n.e(915),n.e(808),n.e(786),n.e(329)]).then(n.bind(n,3329)),l=()=>Promise.all([n.e(915),n.e(808),n.e(786),n.e(402)]).then(n.bind(n,5402)),c=()=>Promise.all([n.e(915),n.e(794)]).then(n.bind(n,1748)),s=()=>Promise.all([n.e(915),n.e(808),n.e(836)]).then(n.bind(n,5541)),d=[{path:"/login",name:"Login",component:o,title:"Login",icon:"",menu:!1},{path:"/caixa-de-entrada",name:"CaixaEntrada",component:r,title:"Caixa de entrada",icon:"mdi-email-open-outline",menu:!0},{path:"/enviados",name:"Enviados",component:i,title:"Enviados",icon:"mdi-send-outline",menu:!0},{path:"/favoritos",name:"Favoritos",component:u,title:"Favoritos",icon:"mdi-star-outline",menu:!0},{path:"/importantes",name:"Importantes",component:l,title:"Importantes",icon:"mdi-bookmark-outline",menu:!0},{path:"/lixeira",name:"Lixeira",component:a,title:"Lixeira",icon:"mdi-delete-outline",menu:!0},{path:"/novo",name:"Novo",component:s,title:"Novo",icon:"mdi-pencil-outline",menu:!0},{path:"/:caixa/:id",name:"CorpoEmail",component:c,title:"Email",icon:"",menu:!1}];t["Z"]=d},3512:function(e,t){const n=e=>{localStorage.setItem("token",e)},o=()=>localStorage.getItem("token"),r=()=>{localStorage.removeItem("token")};t["Z"]={salvarToken:n,obterToken:o,excluirToken:r}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(s=0;s<e.length;s++){o=e[s][0],r=e[s][1],i=e[s][2];for(var u=!0,l=0;l<o.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(u=!1,i<a&&(a=i));if(u){e.splice(s--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{102:"2c07a0ff",154:"b0148400",329:"37516a5e",402:"5d40f5a5",476:"fc63d7d4",614:"7f3932f2",786:"7ea1560d",794:"ef841294",808:"123a2c8e",836:"36443840",915:"b7def162"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{154:"16f588a9",786:"9e42bddf",794:"f92c32d4",808:"739e6d45",836:"7af4adc2"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="ezmail:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var u,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var d=c[s];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){u=d;break}}u||(l=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=o),e[o]=[r];var f=function(t,n){u.onerror=u.onload=null,clearTimeout(m);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),l&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/ezmail/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(n){if(i.onerror=i.onload=null,"load"===n.type)o();else{var a=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=a,l.request=u,i.parentNode.removeChild(i),r(l)}};return i.onerror=i.onload=a,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var a=n.miniCssF(o),u=n.p+a;if(t(a,u))return r();e(o,u,null,r,i)}))},r={143:0};n.f.miniCss=function(e,t){var n={154:1,786:1,794:1,808:1,836:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),u=new Error,l=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,r[1](u)}};n.l(a,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],u=o[1],l=o[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(l)var s=l(n)}for(t&&t(o);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(s)},o=self["webpackChunkezmail"]=self["webpackChunkezmail"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(1705)}));o=n.O(o)})();
//# sourceMappingURL=app.59c4049b.js.map