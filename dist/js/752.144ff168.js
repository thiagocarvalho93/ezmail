"use strict";(self["webpackChunkezmail"]=self["webpackChunkezmail"]||[]).push([[752],{7752:function(t,e,i){i.r(e),i.d(e,{default:function(){return B}});var s=i(6190),a=i(9582),r=i(4886),n=i(2240),l=i(573),o=(i(7658),i(7069)),u=i(144),h=u.ZP.extend({name:"rippleable",directives:{ripple:o.Z},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),d=i(6174),c=i(7678);function p(t){t.preventDefault()}var m=(0,c.Z)(l.Z,h,d.Z).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some((e=>this.valueComparator(e,t))):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=l.Z.options.methods.genLabel.call(this);return t?(t.data.on={click:p},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:p},ref:"input"})},onClick(t){this.onChange(),this.$emit("click",t)},onChange(){if(!this.isInteractive)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const i=e.length;e=e.filter((e=>!this.valueComparator(e,t))),e.length===i&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown(t){}}}),v=m.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...l.Z.options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate(t){this.$nextTick((()=>this.inputIndeterminate=t))},inputIndeterminate(t){this.$emit("update:indeterminate",t)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){const{title:t,...e}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(n.Z,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",{...e,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}}),f=i(5125),g=i(7808),w=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e(a.Z,{staticClass:"pa-6",attrs:{width:"330px",elevation:"10"}},[e(r.EB,{staticClass:"d-flex justify-center mb-3"},[e("h2",{staticClass:"fade"},[t._v("Login")])]),e(r.ZB,[e(f.Z,{ref:"form",staticClass:"fade",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(g.Z,{staticClass:"mb-2",attrs:{outlined:"",rules:t.emailRules,label:"Email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),e(g.Z,{attrs:{outlined:"","append-icon":t.showPassword?"mdi-eye":"mdi-eye-off",rules:t.passwordRules,label:"Password",type:t.showPassword?"text":"password",required:""},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),e(v,{staticClass:"pa-0 ma-0 mb-2",attrs:{label:"Lembrar-me",color:"indigo","hide-details":""},model:{value:t.rememberPassword,callback:function(e){t.rememberPassword=e},expression:"rememberPassword"}})],1)],1),e(r.h7,{staticClass:"d-flex justify-center align-center fade"},[e(s.Z,{staticClass:"pa-5 mb-5",attrs:{color:"indigo",width:"100%",loading:t.loading,disabled:!t.valid,dark:""},on:{click:t.login}},[t._v(" Entrar ")])],1)],1)],1)},b=[];const k="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",I=async()=>{const t=new Promise((t=>setTimeout((()=>t({token:k})),1e3)));return t};var C={login:I},y=i(3512),V={data:()=>({valid:!0,email:"john.doe@ezmail.com",password:"123",loading:!1,showPassword:!1,rememberPassword:!0,emailRules:[t=>!!t||"E-mail is required",t=>/.+@.+\..+/.test(t)||"E-mail must be valid"],passwordRules:[t=>!!t||"Password is required"]}),methods:{async login(){this.loading=!0,this.$refs.form.validate(),this.$refs.form.value?(await C.login().then((t=>{y.Z.salvarToken(t.token)})).catch((t=>console.log(t))),this.loading=!1,this.$router.push({name:"CaixaEntrada"})):this.loading=!1},reset(){this.$refs.form.reset()},resetValidation(){this.$refs.form.resetValidation()}}},x=V,_=i(1001),$=(0,_.Z)(x,w,b,!1,null,"c75109ca",null),B=$.exports},4886:function(t,e,i){i.d(e,{EB:function(){return o},Qq:function(){return n},ZB:function(){return l},h7:function(){return r}});var s=i(9582),a=i(5352);const r=(0,a.Ji)("v-card__actions"),n=(0,a.Ji)("v-card__subtitle"),l=(0,a.Ji)("v-card__text"),o=(0,a.Ji)("v-card__title");s.Z},5125:function(t,e,i){i(7658);var s=i(7678),a=i(2500),r=i(4712);e["Z"]=(0,s.Z)(a.Z,(0,r.J)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",(e=>{this.$set(this.errorBag,t._uid,e)}),{immediate:!0}),i={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(s=>{s&&(this.errorBag.hasOwnProperty(t._uid)||(i.valid=e(t)))})):i.valid=e(t),i},validate(){return 0===this.inputs.filter((t=>!t.validate(!0))).length},reset(){this.inputs.forEach((t=>t.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((t=>t.resetValidation())),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find((e=>e._uid===t._uid));if(!e)return;const i=this.watchers.find((t=>t._uid===e._uid));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((t=>t._uid!==e._uid)),this.inputs=this.inputs.filter((t=>t._uid!==e._uid)),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})}}]);
//# sourceMappingURL=752.144ff168.js.map