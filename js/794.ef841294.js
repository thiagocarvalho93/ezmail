"use strict";(self["webpackChunkezmail"]=self["webpackChunkezmail"]||[]).push([[794],{1748:function(t,a,i){i.r(a),i.d(a,{default:function(){return Z}});var s=i(3423),o=i(6190),e=i(9582),n=i(4886),r=i(9223),l=i(4324),c=i(9592),h=i(9258),m=i(2082),d=function(){var t=this,a=t._self._c;return a("div",[a(h.Z,{attrs:{transition:"scale-transition",timeout:t.snackbarTimeout},scopedSlots:t._u([{key:"action",fn:function({attrs:i}){return[a(o.Z,t._b({attrs:{color:"blue",text:""},on:{click:function(a){t.snackbar=!1}}},"v-btn",i,!1),[t._v(" Fechar ")])]}}]),model:{value:t.snackbar,callback:function(a){t.snackbar=a},expression:"snackbar"}},[t._v(" "+t._s(t.textoSnackbar)+" ")]),a(e.Z,{staticClass:"ma-2",attrs:{height:"465px"}},[a(n.h7,[a(m.Z,{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function({on:i,attrs:s}){return[a(o.Z,t._g(t._b({staticClass:"ma-0",attrs:{text:"",icon:""},on:{click:function(a){return t.voltar()}}},"v-btn",s,!1),i),[a(l.Z,{attrs:{color:"blue"}},[t._v("mdi-arrow-left")])],1)]}}])},[a("span",[t._v("Voltar para "+t._s(t.rotas.find((a=>a.path=="/"+t.$route.params.caixa)).title))])]),a(r.Z,{staticClass:"mx-2",attrs:{vertical:""}}),a(m.Z,{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function({on:i,attrs:s}){return[a(o.Z,t._g(t._b({staticClass:"ma-0",attrs:{text:"",icon:""},on:{click:t.marcarFavorito}},"v-btn",s,!1),i),[a(l.Z,{attrs:{color:t.email.favorito?"yellow":"blue"}},[t._v(t._s(t.email.favorito?"mdi-star":"mdi-star-outline"))])],1)]}}])},[a("span",[t._v("Marcar como favorito")])]),a(m.Z,{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function({on:i,attrs:s}){return[a(o.Z,t._g(t._b({staticClass:"ma-0",attrs:{text:"",icon:""},on:{click:t.marcarImportante}},"v-btn",s,!1),i),[a(l.Z,{attrs:{color:t.email.importante?"red":"blue"}},[t._v(t._s(t.email.importante?"mdi-bookmark":"mdi-bookmark-outline"))])],1)]}}])},[a("span",[t._v("Marcar como importante")])]),a(m.Z,{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function({on:i,attrs:s}){return[a(o.Z,t._g(t._b({staticClass:"ma-0",attrs:{text:"",icon:"",disabled:t.email.lixeira},on:{click:t.mandarParaLixeira}},"v-btn",s,!1),i),[a(l.Z,{attrs:{color:"blue"}},[t._v("mdi-delete-outline")])],1)]}}])},[a("span",[t._v("Mandar para lixeira")])]),a(m.Z,{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function({on:i,attrs:s}){return[a(o.Z,t._g(t._b({staticClass:"ma-0",attrs:{text:"",icon:"",disabled:!t.email.lido},on:{click:t.marcarNaoLido}},"v-btn",s,!1),i),[a(l.Z,{attrs:{color:"blue"}},[t._v("mdi-email-outline")])],1)]}}])},[a("span",[t._v("Marcar como não lido")])]),a(r.Z,{staticClass:"mx-2",attrs:{vertical:""}})],1),t.loading?a("div",[a(c.Z,{attrs:{indeterminate:"",color:"primary"}})],1):a("div",[a(n.EB,[t._v(" "+t._s(t.email.assunto)+" ")]),a(n.Qq,[a(s.Z,{staticClass:"mr-2",attrs:{size:"30"}},[t.email.avatar?a("img",{attrs:{alt:"Avatar",src:t.email.avatar}}):a(l.Z,{attrs:{size:"30",color:t.blue}},[t._v("mdi-account")])],1),t._v(" "+t._s(t.email.endereco)+" "),a("br"),t._v(" "+t._s(new Date(1e3*t.email.data).toLocaleString())+" ")],1),a(n.ZB,{staticClass:"corpo-email"},[t._v(" "+t._s(t.email.corpoEmail)+" ")])],1)],1)],1)},u=[],p=(i(7658),i(9007)),v=i(1110),f=i(3562),b={data(){return{snackbar:!1,textoSnackbar:"",snackbarTimeout:5e3,email:new p.Z,routeName:"",loading:!0,rotas:f.Z}},async beforeMount(){await this.obterEmail()},methods:{async obterEmail(){this.loading=!0,await v.Z.obterPorId(this.$route.params.id).then((t=>{this.email=t.data,200!=t.status&&this.$router.push({name:"CaixaEntrada"})})).catch((t=>{console.log(t)})),this.loading=!1},voltar(){const t=f.Z.find((t=>t.path=="/"+this.$route.params.caixa));this.$router.push({name:t.name})},async marcarFavorito(){this.loading=!0,await v.Z.atualizar(this.email.id,{favorito:!this.email.favorito}),this.loading=!1,this.email.favorito=!this.email.favorito,this.textoSnackbar=this.email.favorito?"Marcado como favorito":"Desmarcado como favorito",this.snackbar=!0},async marcarImportante(){this.loading=!0,await v.Z.atualizar(this.email.id,{importante:!this.email.importante}),this.loading=!1,this.email.importante=!this.email.importante,this.textoSnackbar=this.email.importante?"Marcado como importante":"Desmarcado como importante",this.snackbar=!0},async mandarParaLixeira(){this.loading=!0,await v.Z.atualizar(this.email.id,{lixeira:!0}),this.loading=!1,this.email.lixeira=!this.email.lixeira,this.textoSnackbar="Enviado para a lixeira",this.snackbar=!0},async marcarNaoLido(){this.loading=!0,await v.Z.atualizar(this.email.id,{lido:!this.email.lido}),this.loading=!1,this.email.lido=!this.email.lido,this.textoSnackbar="Marcado como não lido",this.snackbar=!0}}},g=b,_=i(1001),k=(0,_.Z)(g,d,u,!1,null,"bd8e597a",null),Z=k.exports},2082:function(t,a,i){i.d(a,{Z:function(){return m}});var s=i(1452),o=i(6878),e=i(3016),n=i(908),r=i(8938),l=i(5352),c=i(4101),h=i(7678),m=(0,h.Z)(o.Z,e.Z,n.Z,r.Z).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:()=>({calculatedMinWidth:0,closeDependents:!1}),computed:{calculatedLeft(){const{activator:t,content:a}=this.dimensions,i=!this.bottom&&!this.left&&!this.top&&!this.right,s=!1!==this.attach?t.offsetLeft:t.left;let o=0;return this.top||this.bottom||i?o=s+t.width/2-a.width/2:(this.left||this.right)&&(o=s+(this.right?t.width:-a.width)+(this.right?10:-10)),this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),`${this.calcXOverflow(o,this.dimensions.content.width)}px`},calculatedTop(){const{activator:t,content:a}=this.dimensions,i=!1!==this.attach?t.offsetTop:t.top;let s=0;return this.top||this.bottom?s=i+(this.bottom?t.height:-a.height)+(this.bottom?10:-10):(this.left||this.right)&&(s=i+t.height/2-a.height/2),this.nudgeTop&&(s-=parseInt(this.nudgeTop)),this.nudgeBottom&&(s+=parseInt(this.nudgeBottom)),!1===this.attach&&(s+=this.pageYOffset),`${this.calcYOverflow(s)}px`},classes(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY(){return this.top||this.bottom},offsetX(){return this.left||this.right},styles(){return{left:this.calculatedLeft,maxWidth:(0,l.kb)(this.maxWidth),minWidth:(0,l.kb)(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount(){this.$nextTick((()=>{this.value&&this.callActivate()}))},mounted(){"v-slot"===(0,l.sp)(this,"activator",!0)&&(0,c.N6)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate(){this.runDelay("close")},genActivatorListeners(){const t=s.Z.options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(t.focus=t=>{this.getActivator(t),this.runDelay("open")},t.blur=t=>{this.getActivator(t),this.runDelay("close")}),t.keydown=t=>{t.keyCode===l.Do.esc&&(this.getActivator(t),this.runDelay("close"))},t},genActivatorAttributes(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition(){const t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:{[this.contentClass]:!0,menuable__content__active:this.isActive,"v-tooltip__content--fixed":this.activatorFixed},style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render(t){return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((()=>[this.genTransition()])),this.genActivator()])}})}}]);
//# sourceMappingURL=794.ef841294.js.map