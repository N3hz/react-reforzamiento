(this.webpackJsonpreforzamiento=this.webpackJsonpreforzamiento||[]).push([[0],{35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var n,r=c(1),s=c.n(r),a=c(27),i=c.n(a),j=(c(35),c(36),c(8)),o=c(2),l=(c(37),c(13)),b=c(10),d=c(9),u=c(0),h=function(){var e=function(e){var t=Object(r.useState)(e),c=Object(d.a)(t,2),n=c[0],s=c[1];return Object(b.a)(Object(b.a)({},n),{},{formularioFull:n,changeImput:function(e,t){s(Object(b.a)(Object(b.a)({},n),{},Object(l.a)({},t,e)))}})}({usuario:"",password:""}),t=e.usuario,c=e.password,n=e.changeImput,s=e.formularioFull;return Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"Formularios"}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"text",className:"form-control inputFormulario",placeholder:"Usuario",value:t,onChange:function(e){var t=e.target;return n(t.value,"usuario")}}),Object(u.jsx)("input",{type:"password",className:"form-control inputFormulario",placeholder:"Password",value:c,onChange:function(e){var t=e.target;return n(t.value,"password")}}),Object(u.jsx)("code",{children:Object(u.jsx)("pre",{children:JSON.stringify(s,null,3)})})]})},O=function(){var e,t;return Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"Funciones"}),Object(u.jsx)("b",{children:"EL resultado es ".concat((e=2,t=4,e+t))})]})},x=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"Objetos Literales"}),Object(u.jsx)("code",{children:Object(u.jsx)("pre",{children:JSON.stringify({nombre:"Daniel",edad:30,direccion:{pais:"Canada",nro:615}},null,3)})})]})},p={validando:!0,token:null,nombre:null};!function(e){e[e.logout=0]="logout",e[e.login=1]="login"}(n||(n={}));var m=function(e,t){var c=t.type,r=t.payload;switch(c){case n.logout:return Object(b.a)(Object(b.a)({},p),{},{validando:!1});case n.login:return null!==r&&void 0!==r?r:e;default:return e}},f=function(){var e=Object(r.useRef)(!0),t=Object(r.useReducer)(m,p),c=Object(d.a)(t,2),s=c[0],a=s.validando,i=s.token,j=s.nombre,o=c[1];return Object(r.useEffect)((function(){e.current=!0;var t={type:n.logout,payload:null};return setTimeout((function(){e.current&&o(t)}),2e3),function(){e.current=!1}}),[]),a?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{children:"Reducer"}),Object(u.jsx)("hr",{}),Object(u.jsx)("b",{children:"Login"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("div",{className:"alert alert-info",children:"Validando..."})]}):Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"Reducer"}),Object(u.jsx)("hr",{}),Object(u.jsx)("b",{children:"Login"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),i?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"alert alert-success",children:["Autenticado como: ",j]}),Object(u.jsx)("button",{className:"btn btn-danger",onClick:function(){var e={type:n.logout,payload:null};o(e)},children:"Logout"})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"alert alert-danger",children:"No autenticado"}),Object(u.jsx)("button",{className:"btn btn-primary",onClick:function(){var e={type:n.login,payload:{validando:!1,token:5526,nombre:"Daniel G"}};o(e)},children:"Login"})]})]})},g=function(){var e=[];return e.push("Valor 1"),e.push("Valor 2"),e.push("Valor 3"),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"Tipos Basicos"}),"".concat("Daniel"," , ").concat(30," , ").concat("inactivo"," "),Object(u.jsx)("br",{}),e.join(", ")]})},v=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"Url"}),Object(u.jsx)("b",{children:"Commando : "})," ",Object(u.jsx)("p",{children:"yarn add react-router-dom"}),Object(u.jsx)("a",{href:"https://reactrouter.com/web/guides/quick-start",children:"https://reactrouter.com/web/guides/quick-start"})]})},y=function(){var e=function(e){var t,c=Object(r.useState)(parseInt(null!==(t=localStorage.getItem("lastNumber"))&&void 0!==t?t:e.toString())),n=Object(d.a)(c,2),s=n[0],a=n[1];return localStorage.setItem("lastNumber",s.toString()),{state:s,sumando:function(e){a(s+e)}}}(20),t=e.state,c=e.sumando;return Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"UseState"}),Object(u.jsxs)("table",{className:"table table-dark",style:{width:300},children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:Object(u.jsx)("b",{children:"Contador: "})}),Object(u.jsx)("th",{children:t})]})}),Object(u.jsx)("tbody",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("button",{className:"btn btn-primary",onClick:function(){return c(-1)},children:"-1"})}),Object(u.jsx)("td",{children:Object(u.jsx)("button",{className:"btn btn-primary",onClick:function(){return c(1)},children:"+1"})})]})})]})]})},N=c(28),w=c.n(N).a.create({baseURL:"https://reqres.in/api"}),k=function(){var e=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],s=Object(r.useRef)(1);return{usuarios:c,cargarUsuarios:function e(){w.get("/users",{params:{page:s.current}}).then((function(t){t.data.data.length>0?(n(t.data.data),s.current++):(s.current=1,e())})).catch(console.log)},paginaref:s.current}}(),t=e.usuarios,c=e.cargarUsuarios,n=e.paginaref;Object(r.useEffect)((function(){c()}),[]);return Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"Peticiones Http"}),Object(u.jsx)("b",{children:"Commando : "})," ",Object(u.jsx)("p",{children:" npm install axios // yarn add axios"}),Object(u.jsx)("a",{href:"https://www.npmjs.com/package/axios",children:"https://www.npmjs.com/package/axios"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsxs)("table",{className:"table table-dark",style:{width:600},children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Avatar"}),Object(u.jsx)("th",{children:"Nombre"}),Object(u.jsx)("th",{children:"Email"})]})}),Object(u.jsxs)("tbody",{children:[t.map((function(e){var t=e.id,c=e.avatar,n=e.first_name,r=e.last_name,s=e.email;return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("img",{alt:n+"_"+r,className:"rounded",src:c,style:{width:80,height:80}})}),Object(u.jsxs)("td",{children:[n," ",r]}),Object(u.jsx)("td",{children:s})]},t.toString())})),Object(u.jsx)("tr",{children:Object(u.jsxs)("td",{colSpan:3,style:{textAlign:"center"},children:["P\xe1gina: ",n]})})]})]}),Object(u.jsx)("button",{className:"btn btn-primary",onClick:c,children:"Siguientes"})]})},S=function(){return Object(u.jsxs)(j.a,{children:[Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(j.b,{to:"/urls",children:"Urls"})}),Object(u.jsx)("li",{children:Object(u.jsx)(j.b,{to:"/tiposbasicos",children:"Tipos Basicos"})}),Object(u.jsx)("li",{children:Object(u.jsx)(j.b,{to:"/objetosLiterales",children:"Objetos Literales"})}),Object(u.jsx)("li",{children:Object(u.jsx)(j.b,{to:"/funciones",children:"Funciones"})})]})}),Object(u.jsx)("div",{className:"col",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(j.b,{to:"/usestate",children:"UseState / LocalStorage"})}),Object(u.jsx)("li",{children:Object(u.jsx)(j.b,{to:"/reducer",children:"Reducer"})}),Object(u.jsx)("li",{children:Object(u.jsx)(j.b,{to:"/usuarios",children:"Peticiones Http"})}),Object(u.jsx)("li",{children:Object(u.jsx)(j.b,{to:"/formularios",children:"Formularios"})})]})})]}),Object(u.jsx)("div",{children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/urls",component:v}),Object(u.jsx)(o.a,{exact:!0,path:"/tiposbasicos",component:g}),Object(u.jsx)(o.a,{exact:!0,path:"/objetosLiterales",component:x}),Object(u.jsx)(o.a,{exact:!0,path:"/funciones",component:O}),Object(u.jsx)(o.a,{exact:!0,path:"/usestate",component:y}),Object(u.jsx)(o.a,{exact:!0,path:"/reducer",component:f}),Object(u.jsx)(o.a,{exact:!0,path:"/usuarios",component:k}),Object(u.jsx)(o.a,{exact:!0,path:"/formularios",component:h})]})})]})};var C=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"React"}),Object(u.jsx)("hr",{}),Object(u.jsx)(S,{})]})};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.82004985.chunk.js.map