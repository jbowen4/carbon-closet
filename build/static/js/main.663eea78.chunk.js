(this.webpackJsonphackfrontend=this.webpackJsonphackfrontend||[]).push([[0],{74:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(3),r=n(41),s=n.n(r),i=n(17),o=n(8),j=n(14);var u=function(e){var t=Object(a.useState)(e.checked),n=Object(j.a)(t,2),r=n[0];return n[1],Object(c.jsxs)(a.Fragment,{children:[Object(c.jsx)("input",{type:"checkbox",checked:r}),Object(c.jsx)("p",{children:e.name})]})},b=[{id:0,name:"All",checked:!0},{id:1,name:"Tech",checked:!1},{id:2,name:"Agriculture",checked:!1},{id:3,name:"Energy",checked:!1},{id:4,name:"Asset Management",checked:!1},{id:5,name:"Food",checked:!1}].map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u,{name:e.name})},e.id)}));var d=function(){return Object(c.jsx)("div",{className:"industries container",children:Object(c.jsx)("ul",{children:b})})};var h=function(e){var t={pathname:"/comp/".concat(e.id),idParam:e.id};return Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("img",{src:e.logo?"".concat(e.logo):"",alt:"Logo"}),Object(c.jsx)("h3",{children:e.name}),Object(c.jsx)("h5",{children:e.industry}),Object(c.jsx)(i.b,{to:t,children:"View Comp Profile"})]})},p=n(16),l=n.n(p),m=n(19),x=n(21),O=n.n(x),f=O.a.create({baseURL:"https://esg-metric-api.herokuapp.com/api/"});var v=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1],s=function(){var e=Object(m.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.get();case 3:return t=e.sent,e.next=6,t.data;case 6:n=e.sent,r(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){s()})),Object(c.jsx)("div",{className:"card-list container",children:n.map((function(e){return Object(c.jsx)(h,{id:e.id,name:e.name,industry:e.industry,logo:e.photo},e.id)}))})};var g=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(c.jsxs)("div",{className:"searchbar",children:[Object(c.jsx)("input",{id:"searchbox",type:"search",value:n,onChange:function(e){return r(e.target.value)},placeholder:"Search"}),Object(c.jsx)("button",{id:"searchbutton",onClick:function(){return console.log("hi")},type:"button",children:Object(c.jsx)("i",{class:"fas fa-search-location"})})]})};var y=function(){return Object(c.jsx)("div",{children:Object(c.jsx)(i.b,{to:"/form",children:"Add Company"})})};var k=function(){return Object(c.jsxs)(a.Fragment,{children:[Object(c.jsx)(y,{}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"billboard container",children:[Object(c.jsx)("h1",{children:"This is the site"}),Object(c.jsx)(g,{})]}),Object(c.jsxs)("div",{className:"browsebox",children:[Object(c.jsx)(d,{}),Object(c.jsx)(v,{})]})]})]})},w=n(24),C=n(30),S=n(43),B=(n(73),S.a.initializeApp({apiKey:"AIzaSyBmXqLfQg6oR0RIPypl01f-xxybdiCETKY",authDomain:"hackathon-2020-5eb4d.firebaseapp.com",projectId:"hackathon-2020-5eb4d",storageBucket:"hackathon-2020-5eb4d.appspot.com",messagingSenderId:"663135814555",appId:"1:663135814555:web:1db1e9cdf9c4b22e02573e"}));var I=function(){var e=Object(a.useState)({name:"",industry:"",website:"",emissions:0,description:""}),t=Object(j.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(""),o=Object(j.a)(s,2),u=o[0],b=o[1],d=Object(a.useState)(""),h=Object(j.a)(d,2),p=(h[0],h[1]),x=function(e){var t=e.target,c=t.name,a=t.value;r((function(e){return Object(C.a)(Object(C.a)({},e),{},Object(w.a)({},c,a))})),console.log(n)},f=function(){var e=Object(m.a)(l.a.mark((function e(t){var n,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.files[0],c=B.storage().ref(),a=c.child(n.name),e.next=5,a.put(n);case 5:return e.t0=b,e.next=8,a.getDownloadURL();case 8:e.t1=e.sent,(0,e.t0)(e.t1);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(m.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,O.a.post("https://esg-metric-api.herokuapp.com/api/comp/",{name:n.name,industry:n.industry,website:n.website,total_emissions:n.emissions,photo:u,description:n.description});case 4:c=e.sent,console.log(c.data),r({name:"",industry:"",website:"",emissions:0}),p(""),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(1);case 12:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)(a.Fragment,{children:Object(c.jsxs)("div",{children:[Object(c.jsx)(i.b,{to:"/",children:"Back to Browse"}),Object(c.jsxs)("form",{onSubmit:v,children:[Object(c.jsxs)("label",{children:["Company Name:",Object(c.jsx)("input",{type:"text",name:"name",onChange:x})]}),Object(c.jsxs)("label",{children:["Industry:",Object(c.jsx)("input",{type:"text",name:"industry",onChange:x})]}),Object(c.jsxs)("label",{children:["Website:",Object(c.jsx)("input",{type:"text",name:"website",onChange:x})]}),Object(c.jsxs)("label",{children:["Company Logo:",Object(c.jsx)("input",{type:"file",name:"image",onChange:f})]}),Object(c.jsxs)("label",{children:["Total Emissions:",Object(c.jsx)("input",{type:"text",name:"emissions",onChange:x})]}),Object(c.jsx)("input",{type:"submit",value:"Submit"})]})]})})};var N=function(e){var t=e.match.params.id,n=Object(a.useState)(null),r=Object(j.a)(n,2),s=r[0],o=r[1];return Object(a.useEffect)(Object(m.a)(l.a.mark((function e(){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://esg-metric-api.herokuapp.com/api/comp/".concat(t));case 2:return n=e.sent,e.next=5,n.data;case 5:c=e.sent,o(c);case 7:case"end":return e.stop()}}),e)}))),[]),Object(c.jsxs)(a.Fragment,{children:[Object(c.jsx)(i.b,{to:"/",children:"Back to Browse"}),s&&Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:s.name}),Object(c.jsx)("h3",{children:s.industry})]})]})};var A=function(){return Object(c.jsxs)(i.a,{children:[Object(c.jsx)(o.a,{exact:!0,path:"/",component:k}),Object(c.jsx)(o.a,{exact:!0,path:"/form",component:I}),Object(c.jsx)(o.a,{exact:!0,path:"/comp/:id",component:N})]})};s.a.render(Object(c.jsx)(A,{}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.663eea78.chunk.js.map