"use strict";(self["webpackChunkezmail"]=self["webpackChunkezmail"]||[]).push([[102],{9102:function(a,e,t){t.r(e),t.d(e,{default:function(){return h}});var r=function(){var a=this,e=a._self._c;return e("div",[e("Tabela",{attrs:{titulo:"Enviados",emails:a.emails,carregando:a.carregando}})],1)},s=[],n=t(525),i=t(9007),o=t(1110),l={components:{Tabela:n.Z},data(){return{search:"",emails:[],carregando:!0}},async beforeMount(){await this.obterEmailsEnviados()},methods:{async obterEmailsEnviados(){this.carregando=!0,await o.Z.obterTodos().then((a=>{this.emails=a.data.map((a=>new i.Z(a))).filter((a=>!a.lixeira&&!a.spam&&!a.recebido))})).catch((a=>{console.log(a)})),this.carregando=!1}}},c=l,d=t(1001),u=(0,d.Z)(c,r,s,!1,null,"2b93c938",null),h=u.exports}}]);
//# sourceMappingURL=102.8c57a9c4.js.map