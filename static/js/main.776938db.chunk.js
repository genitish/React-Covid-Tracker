(this["webpackJsonpcorona-tracker"]=this["webpackJsonpcorona-tracker"]||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(4),r=c.n(a),i=(c(9),c.p,c(10),c(2)),o=(c(11),c(0));var j=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=(t[0],t[1],Object(n.useState)([])),s=Object(i.a)(c,2),a=s[0],r=s[1],j=Object(n.useState)([]),h=Object(i.a)(j,2),u=h[0],l=h[1];return Object(n.useEffect)((function(){fetch("https://corona.lmao.ninja/v2/countries").then((function(e){return e.json()})).then(r)}),[]),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:"Covid Tracker"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Select Country name"}),a&&Object(o.jsx)("select",{onChange:function(e){var t;t=e.target.value,fetch("https://corona.lmao.ninja/v2/countries/".concat(t)).then((function(e){return e.json()})).then(l)},children:a.map((function(e){return Object(o.jsx)("option",{className:"country-name",value:e.country,children:e.country})}))})]}),Object(o.jsx)("div",{children:u.country&&Object(o.jsxs)("div",{className:"cases-container",children:[Object(o.jsxs)("div",{children:[Object(o.jsxs)("h2",{className:"country",children:[u.country," "]}),Object(o.jsxs)("h3",{className:"total",children:[" Total Cases : ",u.cases," "]}),Object(o.jsxs)("h3",{className:"active",children:[" Active Cases : ",u.active," "]}),Object(o.jsxs)("h3",{className:"recovered",children:[" Recovered Cases : ",u.recovered," "]}),Object(o.jsxs)("h3",{className:"deaths",children:[" Deaths : ",u.deaths," "]})]}),Object(o.jsx)("div",{children:Object(o.jsx)("img",{src:u.countryInfo.flag})})]})})]})};var h=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(j,{})})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),u()}],[[13,1,2]]]);
//# sourceMappingURL=main.776938db.chunk.js.map