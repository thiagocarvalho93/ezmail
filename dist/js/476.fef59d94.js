"use strict";(self["webpackChunkezmail"]=self["webpackChunkezmail"]||[]).push([[476],{2476:function(a,e,t){t.r(e),t.d(e,{default:function(){return h}});var r=function(){var a=this,e=a._self._c;return e("div",[e("Tabela",{attrs:{titulo:"Caixa de entrada",emails:a.emails,carregando:a.carregando}})],1)},n=[],s=t(2649),i=t(9007),o=t(1110),l={components:{Tabela:s.Z},data(){return{search:"",emails:[],carregando:!0}},async beforeMount(){await this.obterEmailsEntrada()},methods:{async obterEmailsEntrada(){this.carregando=!0,await o.Z.obterTodos().then((a=>{this.emails=a.data.map((a=>new i.Z(a))).filter((a=>!a.lixeira&&!a.spam&&!!a.recebido))})).catch((a=>{console.log(a)})),this.carregando=!1}}},c=l,d=t(1001),u=(0,d.Z)(c,r,n,!1,null,"ec193eca",null),h=u.exports}}]);
//# sourceMappingURL=476.fef59d94.js.map