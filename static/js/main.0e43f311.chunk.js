(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{38:function(e,t,r){},40:function(e,t,r){"use strict";r.r(t);var n=r(2),c=r(13),s=r.n(c),a=r(4),i=r(14),l=r.n(i),o={getUser:function(){return l.a.get("https://randomuser.me/api/?results=50&nat=au,us")}},j=r(0);var u=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("nav",{style:{background:"rebeccapurple"},class:"text-light navbar",children:Object(j.jsx)("h2",{children:"User Directory"})})})};var b=function(e){var t=e.inputChange;return Object(j.jsx)("input",{style:{width:"25%",opacity:"0.7",margin:"15px auto"},type:"text",className:"form-control",placeholder:"Search for an employee here",onChange:t})};var d=function(e){var t=e.employees;return Object(j.jsx)("tbody",{style:{background:"oldlace"},children:t.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.name.first}),Object(j.jsx)("td",{children:e.name.last}),Object(j.jsx)("td",{children:e.email})]},e.email)}))})};var h=function(e){var t=e.employees;return Object(j.jsx)("div",{children:Object(j.jsxs)("table",{className:"table sortable",id:"sortTable",style:{width:"80%",margin:"auto"},children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{style:{background:"rebeccapurple"},className:"text-light",children:[Object(j.jsx)("th",{style:{cursor:"pointer"},children:"First Name"}),Object(j.jsx)("th",{style:{cursor:"pointer"},children:"Last Name"}),Object(j.jsx)("th",{style:{cursor:"pointer"},children:"Email"})]})}),Object(j.jsx)(d,{employees:t})]})})};var p=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),r=t[0],c=t[1],s=Object(n.useState)([]),i=Object(a.a)(s,2),l=i[0],d=i[1];return Object(n.useEffect)((function(){o.getUser().then((function(e){c(e.data.results),d(e.data.results)}))}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)(u,{}),Object(j.jsx)(b,{inputChange:function(e){e.preventDefault();var t=r.filter((function(t){var r=t.name.first.toLowerCase(),n=e.target.value.toLowerCase();return r.includes(n)}));d(t)}}),Object(j.jsx)(h,{employees:l})]})};var O=function(){return Object(j.jsx)(p,{})};r(38),r(39);s.a.render(Object(j.jsx)(O,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.0e43f311.chunk.js.map