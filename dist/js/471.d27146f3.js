"use strict";(self["webpackChunkezmail"]=self["webpackChunkezmail"]||[]).push([[471],{4471:function(t,e,i){i.r(e),i.d(e,{default:function(){return b}});var o=i(6190),r=i(9582),a=i(4886),n=i(7808),s=i(7678);const u=(0,s.Z)(n.Z);var l=u.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...n.Z.options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(t){this.$nextTick((()=>{var e;t?this.calculateInputHeight():null===(e=this.$refs.input)||void 0===e||e.style.removeProperty("height")}))},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout((()=>{this.autoGrow&&this.calculateInputHeight()}),0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(i,e)+"px"},genInput(){const t=n.Z.options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){n.Z.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),c=function(){var t=this,e=t._self._c;return e("div",[e(r.Z,{attrs:{height:"465px"}},[e(a.EB,[t._v("Novo email")]),e(a.Qq,[e(n.Z,{attrs:{rules:t.emailRules,prefix:"Para: ",dense:"","single-line":"",required:"",autofocus:""},model:{value:t.destinatario,callback:function(e){t.destinatario=e},expression:"destinatario"}}),e(n.Z,{attrs:{prefix:"Assunto: ",dense:"","single-line":"",required:""},model:{value:t.assunto,callback:function(e){t.assunto=e},expression:"assunto"}})],1),e(a.ZB,[e(l,{attrs:{label:"Email",counter:"","no-resize":"",dense:"",rows:"7",value:t.texto,hint:"Escreva aqui o seu email"}})],1),e(a.h7,[e(o.Z,{attrs:{dark:"",color:"blue"}},[t._v("Enviar")])],1)],1)],1)},h=[],d=i(9007),p={data(){return{email:new d.Z,texto:"",emailRules:[t=>!!t||"Campo obrigatório",t=>/.+@.+\..+/.test(t)||"E-mail inválido"]}},async beforeMount(){await this.obterEmail()},methods:{}},m=p,f=i(1001),v=(0,f.Z)(m,c,h,!1,null,"31978df9",null),b=v.exports},4886:function(t,e,i){i.d(e,{EB:function(){return u},Qq:function(){return n},ZB:function(){return s},h7:function(){return a}});var o=i(9582),r=i(5352);const a=(0,r.Ji)("v-card__actions"),n=(0,r.Ji)("v-card__subtitle"),s=(0,r.Ji)("v-card__text"),u=(0,r.Ji)("v-card__title");o.Z},9007:function(t,e,i){function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function r(t,e){if("object"!==o(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var r=i.call(t,e||"default");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function a(t){var e=r(t,"string");return"symbol"===o(e)?e:String(e)}function n(t,e,i){return e=a(e),e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}i.d(e,{Z:function(){return s}});class s{constructor(t){n(this,"converterTimestampParaData",(()=>{this.data=new Date(this.data).toLocaleDateString()})),t=t||{},this.id=t.id,this.endereco=t.endereco||"",this.assunto=t.assunto||"",this.corpoEmail=t.corpoEmail||"",this.data=t.data,this.lido=t.lido||!1,this.favorito=t.favorito||!1,this.importante=t.importante||!1,this.recebido=t.recebido||!1,this.lixeira=t.lixeira||!1,this.rascunho=t.rascunho||!1}}}}]);
//# sourceMappingURL=471.d27146f3.js.map