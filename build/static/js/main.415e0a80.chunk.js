(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{73:function(n,e,t){"use strict";t.r(e);var r=t(2),a=t(23),c=t.n(a),i=t(7),o=t(13),s=t(11),l=t(1),d=Object(r.createContext)({});function u(n){var e=n.children,t=Object(r.useState)((function(){var n=localStorage.getItem("@Theme");return n||"light"})),a=Object(s.a)(t,2),c=a[0],i=a[1];return Object(r.useEffect)((function(){localStorage.setItem("@Theme",c)}),[c]),Object(l.jsx)(d.Provider,{value:{selectedTheme:c,themeSwitcher:function(n){i(n)}},children:e})}var h=t(14),j=t.n(h),b=t(21),p=t(22),m=t(39),f=t.n(m).a.create({baseURL:"https://restcountries.eu/rest/v2"});function g(n){return n.includes("(")?n.split(/\s\(.*?\)/g)[0]:n.split(",")[0]}var x=Object(r.createContext)({});function O(n){var e=n.children,t=Object(r.useState)([]),a=Object(s.a)(t,2),c=a[0],i=a[1],d=Object(r.useState)({}),u=Object(s.a)(d,2),h=u[0],m=u[1],O=Object(r.useState)("all"),v=Object(s.a)(O,2),w=v[0],y=v[1],k=Object(r.useState)(""),C=Object(s.a)(k,2),S=C[0],L=C[1],R=Object(r.useState)([]),N=Object(s.a)(R,2),z=N[0],E=N[1],A=Object(r.useState)(!1),F=Object(s.a)(A,2),I=F[0],T=F[1],B=Object(r.useState)(!1),P=Object(s.a)(B,2),D=P[0],V=P[1];function J(){return M.apply(this,arguments)}function M(){return(M=Object(p.a)(j.a.mark((function n(){var e,t;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,V(!0),n.next=4,f.get("/all").then((function(n){return n.data}));case 4:e=n.sent,t=e.reduce((function(n,e){var t=e.flag,r=e.name,a=e.population,c=e.region,i=e.capital,o=e.alpha3Code,s=g(r);return[].concat(Object(b.a)(n),[{flag:t,name:s,population:a,region:c,capital:i,alpha3Code:o}])}),[]),i(t),y("all"),L(""),E([]),T(!1),V(!1),n.next=18;break;case 14:n.prev=14,n.t0=n.catch(0),o.b.error("Error getting countries information"),V(!1);case 18:case"end":return n.stop()}}),n,null,[[0,14]])})))).apply(this,arguments)}function U(){return(U=Object(p.a)(j.a.mark((function n(e){var t,r;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,"all"!==e){n.next=5;break}J(),n.next=16;break;case 5:return V(!0),n.next=8,f.get("/region/".concat(e)).then((function(n){return n.data}));case 8:t=n.sent,r=t.reduce((function(n,e){var t=e.flag,r=e.name,a=e.population,c=e.region,i=e.capital,o=e.alpha3Code,s=g(r);return[].concat(Object(b.a)(n),[{flag:t,name:s,population:a,region:c,capital:i,alpha3Code:o}])}),[]),y(e),i(r),L(""),E([]),T(!1),V(!1);case 16:n.next=23;break;case 18:n.prev=18,n.t0=n.catch(0),404===n.t0.response.data.status?(T(!0),o.b.error("Region not found")):o.b.error("Error getting region countries"),V(!1);case 23:case"end":return n.stop()}}),n,null,[[0,18]])})))).apply(this,arguments)}function W(){return(W=Object(p.a)(j.a.mark((function n(e){var t,r,a,c,i,s,l,d,u,h,b,p,x,O,v,w;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,V(!0),n.next=4,f.get("/alpha/".concat(e)).then((function(n){return n}));case 4:return t=n.sent,r=t.data,a=r.flag,c=r.name,i=r.population,s=r.region,l=r.capital,d=r.alpha3Code,u=r.subregion,h=r.topLevelDomain,b=r.currencies,p=r.languages,x=r.borders,O=r.nativeName,v=g(c),n.next=10,Promise.all(x.map((function(n){return _(n)})));case 10:w=n.sent,m({flag:a,name:v,population:i,region:s,capital:l,alpha3Code:d,subregion:u,topLevelDomain:h,currencies:b,languages:p,borderCountries:w,nativeName:O}),T(!1),V(!1),n.next=21;break;case 16:n.prev=16,n.t0=n.catch(0),404===n.t0.response.data.status?(T(!0),o.b.error("Countrie not found")):o.b.error("Error getting countrie information"),V(!1);case 21:case"end":return n.stop()}}),n,null,[[0,16]])})))).apply(this,arguments)}function _(n){return q.apply(this,arguments)}function q(){return(q=Object(p.a)(j.a.mark((function n(e){var t,r;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,f.get("/alpha/".concat(e)).then((function(n){return n.data}));case 3:return t=n.sent,r=g(t.name),T(!1),n.abrupt("return",{name:r,alpha3Code:e});case 9:n.prev=9,n.t0=n.catch(0),o.b.error("Error getting border countries information");case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}return Object(l.jsx)(x.Provider,{value:{countries:c,detailedCountrie:h,selectedRegion:w,searchList:z,searchValues:S,error:I,isLoading:D,getAllCountries:J,getCountriesByRegion:function(n){return U.apply(this,arguments)},searchCountries:function(n){if(L(n),""!==n){var e=c.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));E(e)}else E([])},getCountrieByAlphaCode:function(n){return W.apply(this,arguments)}},children:e})}var v=t(5);function w(){return Object(r.useContext)(x)}var y=Object(r.createContext)({});function k(n){var e=n.children,t=Object(r.useState)(""),a=Object(s.a)(t,2),c=a[0],i=a[1];return Object(l.jsx)(y.Provider,{value:{status:c,toggleStatus:function(){switch(c){case"open":i("closed");break;case"closed":default:i("open")}}},children:e})}function C(){return Object(r.useContext)(y)}var S,L,R=t(43),N=t(4),z=t(3),E=z.c.div(S||(S=Object(N.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  box-shadow: var(--shadow);\n\n  width: 15rem;\n  height: 4rem;\n  padding: 1rem 2rem;\n  border-radius: 0.5rem;\n\n  background: ",";\n\n  button {\n    width: 1.5rem;\n    height: 1.5rem;\n\n    background: transparent;\n    border: none;\n    border-radius: 0.2rem;\n    cursor: pointer;\n\n    svg {\n      width: 1.5rem;\n      height: 1.5rem;\n\n      transition: transform 0.2s;\n\n      transform: ",";\n    }\n  }\n\n  &:hover {\n    filter: opacity(0.8);\n  }\n"])),(function(n){return n.theme.collors.background.secondary}),(function(n){switch(n.modalStatus){case"open":return"rotate(180deg)";case"closed":return"rotate(initial)";default:return"none"}}));function A(){var n=C(),e=n.status,t=n.toggleStatus;return Object(l.jsxs)(E,{modalStatus:e,children:[Object(l.jsx)("span",{children:"Filter by Region"}),Object(l.jsx)("button",{type:"button",onClick:t,children:Object(l.jsx)(R.a,{})})]})}var F=z.c.div(L||(L=Object(N.a)(["\n  margin-top: 1rem;\n\n  font-weight: var(--light-weight-font);\n  font-style: italic;\n"])));function I(){var n=w(),e=n.searchValues,t=n.searchList;return Object(l.jsx)(F,{children:e&&Object(l.jsxs)("p",{children:[t.length>1?"".concat(t.length," results"):"".concat(t.length," result")," ","found"]})})}var T,B,P=t(15),D=z.c.div(T||(T=Object(N.a)(["\n  display: flex;\n  align-items: center;\n\n  box-shadow: var(--shadow);\n\n  max-width: 30rem;\n  width: 30rem;\n  height: 4rem;\n  padding: 1rem 2rem;\n  border-radius: 0.5rem;\n  margin-right: 2rem;\n\n  cursor: pointer;\n\n  background: ",";\n\n  svg {\n    margin-right: 1rem;\n  }\n\n  input {\n    background: transparent;\n    border: none;\n    height: 1.5rem;\n    flex: 1;\n    padding: 0.5rem;\n    border-radius: 0.2rem;\n\n    &::placeholder {\n      color: ",";\n      font-size: 1rem;\n    }\n  }\n\n  &:hover {\n    filter: opacity(0.8);\n  }\n\n  @media only screen and (max-width: 728px) {\n    margin-bottom: 2rem;\n    margin-right: 0;\n    width: 100%;\n    max-width: 100%;\n  }\n"])),(function(n){return n.theme.collors.background.secondary}),(function(n){return n.theme.collors.text.secondary}));function V(){var n=w(),e=n.searchCountries,t=n.searchValues,a=Object(r.useRef)(null);return Object(l.jsxs)("div",{children:[Object(l.jsxs)(D,{onClick:function(){a.current&&a.current.focus()},children:[Object(l.jsx)(P.c,{}),Object(l.jsx)("input",{onChange:function(){a.current&&e(a.current.value)},value:t,ref:a,type:"text",placeholder:"Search for a country..."})]}),Object(l.jsx)(I,{})]})}var J,M=z.c.div(B||(B=Object(N.a)(["\n  opacity: ",";\n  pointer-events: ",";\n  transition: opacity 0.2s;\n\n  width: 15rem;\n  padding: 1rem 2rem;\n\n  box-shadow: 3px 0px 3px ",";\n\n  border-radius: 0.5rem;\n\n  background: ",";\n\n  position: absolute;\n  right: 0;\n  top: 5rem;\n  z-index: 100;\n\n  li {\n    & + li {\n      margin-top: 1rem;\n    }\n\n    &:hover {\n      filter: opacity(0.8);\n    }\n\n    a.selected {\n      color: ",";\n    }\n  }\n\n  @media only screen and (max-width: 728px) {\n    left: 0;\n    top: 12rem;\n  }\n"])),(function(n){return"open"===n.isOpen?"100%":"0%"}),(function(n){return"open"===n.isOpen?"initial":"none"}),(function(n){return n.theme.collors.shadow}),(function(n){return n.theme.collors.background.secondary}),(function(n){return n.theme.collors.activeItens}));function U(){var n=C(),e=n.status,t=n.toggleStatus,a=w().getCountriesByRegion,c=Object(r.useRef)(null);function o(n){var e=n.currentTarget.getAttribute("data-region");e&&a(e)}return Object(r.useEffect)((function(){function n(n){c.current&&c.current.contains(n.target)||t()}return"open"===e&&document.addEventListener("click",n),function(){document.removeEventListener("click",n)}}),[e,t]),Object(l.jsx)(M,{ref:c,isOpen:e,children:"open"===e&&Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/africa",activeClassName:"selected","data-region":"africa",onClick:function(n){o(n)},children:"Africa"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/americas",activeClassName:"selected","data-region":"americas",onClick:function(n){o(n)},children:"Americas"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/asia",activeClassName:"selected","data-region":"asia",onClick:function(n){o(n)},children:"Asia"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/europe",activeClassName:"selected","data-region":"europe",onClick:function(n){o(n)},children:"Europe"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/oceania",activeClassName:"selected","data-region":"oceania",onClick:function(n){o(n)},children:"Oceania"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/all",activeClassName:"selected","data-region":"all",onClick:function(n){o(n)},children:"All Regions"})})]})})})}var W,_,q=z.c.div(J||(J=Object(N.a)(["\n  width: 100%;\n  height: calc(100vh - 4rem);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  div {\n    border: 0.5rem solid ",";\n    border-top: 0.5rem solid ",";\n    border-radius: 50%;\n    width: 60px;\n    height: 60px;\n    animation: spin 1s linear infinite;\n\n    @keyframes spin {\n      0% {\n        transform: rotate(0deg);\n      }\n      100% {\n        transform: rotate(360deg);\n      }\n    }\n  }\n"])),(function(n){return n.theme.collors.text.primary}),(function(n){return n.theme.collors.activeItens}));function G(){return Object(l.jsx)(q,{children:Object(l.jsx)("div",{})})}var H,K,Q,X=z.c.div(W||(W=Object(N.a)(["\n  border-radius: 0.5rem;\n  background: ",";\n  box-shadow: var(--shadow);\n\n  flex-basis: 300px;\n\n  div {\n    height: 200px;\n\n    a {\n      img {\n        display: block;\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n        object-fit: cover;\n        border-radius: 0.5rem 0.5rem 0 0;\n\n        &:hover {\n          filter: opacity(0.8);\n        }\n      }\n    }\n  }\n"])),(function(n){return n.theme.collors.background.secondary})),Y=z.c.div(_||(_=Object(N.a)(["\n  padding: 2rem 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  h3 {\n    margin-bottom: 1rem;\n  }\n\n  p {\n    span {\n      font-weight: var(--light-weight-font);\n    }\n\n    & + p {\n      margin-top: 0.5rem;\n    }\n  }\n"])));function Z(n){var e=n.countrie;return Object(l.jsxs)(X,{children:[Object(l.jsx)("div",{children:Object(l.jsx)(i.b,{to:"countrie/".concat(e.alpha3Code),children:Object(l.jsx)("img",{src:e.flag,alt:e.name})})}),Object(l.jsxs)(Y,{children:[Object(l.jsx)("h3",{children:e.name}),Object(l.jsxs)("p",{children:["Population:\xa0",Object(l.jsx)("span",{children:new Intl.NumberFormat("en-US").format(e.population)})]}),Object(l.jsxs)("p",{children:["Region:",Object(l.jsxs)("span",{children:[" ",e.region]})]}),Object(l.jsxs)("p",{children:["Capital:",Object(l.jsxs)("span",{children:[" ",e.capital]})]})]})]})}var $=z.c.main(H||(H=Object(N.a)(["\n  max-width: 1440px;\n  padding: 4rem 2rem;\n  margin: 0 auto;\n\n  h1 {\n    font-size: 2rem;\n    text-transform: capitalize;\n    margin-top: 4rem;\n  }\n\n  h1 ~ div {\n    margin-top: 2rem !important;\n  }\n\n  @media only screen and (max-width: 711px) {\n    h1 {\n      text-align: center;\n    }\n  }\n"]))),nn=z.c.div(K||(K=Object(N.a)(["\n  display: flex;\n  justify-content: space-between;\n\n  position: relative;\n\n  @media only screen and (max-width: 728px) {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n"]))),en=z.c.div(Q||(Q=Object(N.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: 3rem;\n\n  position: relative;\n  z-index: 10;\n\n  margin-top: 4rem;\n\n  @media only screen and (max-width: 728px) {\n    justify-content: center;\n  }\n"])));var tn,rn,an=Object(v.h)((function(){var n=w(),e=n.countries,t=n.searchList,a=n.selectedRegion,c=n.getAllCountries,i=n.isLoading,o=Object(r.useRef)(c);return Object(r.useEffect)((function(){o.current()}),[]),Object(l.jsx)(l.Fragment,{children:i?Object(l.jsx)(G,{}):Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)($,{children:[Object(l.jsxs)(nn,{children:[Object(l.jsx)(V,{}),Object(l.jsxs)(k,{children:[Object(l.jsx)(A,{}),Object(l.jsx)(U,{})]})]}),"all"===a?Object(l.jsx)("h1",{children:"All Regions"}):Object(l.jsx)("h1",{children:a}),e&&Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(en,{children:(t.length>0?t:e).map((function(n){var e=n.flag,t=n.name,r=n.region,a=n.population,c=n.capital,i=n.alpha3Code;return Object(l.jsx)(Z,{countrie:{flag:e,name:t,region:r,population:a,capital:c,alpha3Code:i}},i)}))})})]})})})})),cn=Object(z.c)(i.b)(tn||(tn=Object(N.a)(["\n  background: ",";\n  box-shadow: var(--shadow);\n\n  width: 9rem;\n  height: 3rem;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 4rem;\n  border-radius: 0.3rem;\n  padding: 1rem 2rem;\n\n  span {\n    margin-left: 1rem;\n  }\n\n  &:hover {\n    filter: opacity(0.8);\n  }\n"])),(function(n){return n.theme.collors.background.secondary}));function on(){var n=w().selectedRegion;return Object(l.jsxs)(cn,{to:"/".concat(n),children:[Object(l.jsx)(P.a,{}),Object(l.jsx)("span",{children:"Back"})]})}function sn(n){return n.reduce((function(n,e){return[].concat(Object(b.a)(n),[e.name])}),[]).toString().replace(/,/g,", ")}var ln,dn,un=z.c.div(rn||(rn=Object(N.a)(["\n  margin-top: 4rem;\n  display: flex;\n\n  span {\n    min-width: 150px;\n    margin-right: 1rem;\n  }\n\n  ul {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 1rem;\n\n    li {\n      a {\n        background: ",";\n        box-shadow: var(--shadow);\n\n        display: block;\n        line-height: 2rem;\n        padding: 0 2rem;\n        border-radius: 0.2rem;\n\n        &:hover {\n          filter: opacity(0.8);\n        }\n      }\n    }\n  }\n\n  @media only screen and (max-width: 728px) {\n    flex-direction: column;\n    gap: 1rem;\n  }\n"])),(function(n){return n.theme.collors.background.secondary}));function hn(){var n=w().detailedCountrie.borderCountries;return Object(l.jsx)(l.Fragment,{children:n&&Object(l.jsxs)(un,{children:[Object(l.jsx)("span",{children:"Border Countries:"}),Object(l.jsx)("div",{children:Object(l.jsx)("ul",{children:n.map((function(n){var e=n.name,t=n.alpha3Code;return Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/countrie/".concat(t),children:e})},t)}))})})]})})}var jn,bn=z.c.div(ln||(ln=Object(N.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),pn=z.c.div(dn||(dn=Object(N.a)(["\n  display: flex;\n  justify-content: space-between;\n\n  margin-top: 2rem;\n\n  li {\n    & + li {\n      margin-top: 1rem;\n    }\n\n    span {\n      font-weight: var(--light-weight-font);\n    }\n  }\n\n  @media only screen and (max-width: 1300px) {\n    justify-content: initial;\n    gap: 4rem;\n  }\n\n  @media only screen and (max-width: 728px) {\n    flex-direction: column;\n    gap: 1rem;\n  }\n"])));function mn(){var n=w().detailedCountrie;return Object(l.jsxs)(bn,{children:[Object(l.jsx)("h1",{children:n.name}),Object(l.jsxs)(pn,{children:[Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:["Native Name:\xa0",Object(l.jsx)("span",{children:n.nativeName})]}),Object(l.jsxs)("li",{children:["Population:\xa0",Object(l.jsx)("span",{children:n.population})]}),Object(l.jsxs)("li",{children:["Region:\xa0",Object(l.jsx)("span",{children:n.region})]}),Object(l.jsxs)("li",{children:["Sub Region:\xa0",Object(l.jsx)("span",{children:n.subregion})]}),Object(l.jsxs)("li",{children:["Capital:\xa0",Object(l.jsx)("span",{children:n.capital})]})]}),Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:["Top Level Domain:\xa0",Object(l.jsx)("span",{children:n.topLevelDomain})]}),Object(l.jsxs)("li",{children:["Currencies:\xa0",Object(l.jsx)("span",{children:n.currencies&&sn(n.currencies)})]}),Object(l.jsxs)("li",{children:["Languages:\xa0",Object(l.jsx)("span",{children:n.languages&&sn(n.languages)})]})]})]}),void 0!==n.borderCountries&&n.borderCountries.length>0&&Object(l.jsx)(hn,{})]})}var fn,gn,xn=z.c.div(jn||(jn=Object(N.a)(["\n  margin-top: 12rem;\n  text-align: center;\n\n  h1 {\n    font-size: 5rem;\n  }\n"])));function On(){return Object(l.jsxs)(xn,{children:[Object(l.jsx)("h1",{children:"404"}),Object(l.jsx)("p",{children:"Page not found :("})]})}var vn,wn=z.c.main(fn||(fn=Object(N.a)(["\n  padding: 4rem 2rem;\n  max-width: 1440px;\n  margin: 0 auto;\n"]))),yn=z.c.div(gn||(gn=Object(N.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 4rem;\n\n  .flag {\n    width: 600px;\n    height: 400px;\n    box-shadow: var(--shadow);\n    border-radius: 0.5rem;\n\n    img {\n      display: block;\n      overflow: hidden;\n      border-radius: 0.5rem;\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n      aspect-ratio: attr(width) / attr(height);\n    }\n  }\n\n  @media only screen and (max-width: 1330px) {\n    grid-template-columns: 1fr;\n\n    .flag {\n      width: 100%;\n      height: auto;\n      max-height: 600px;\n    }\n  }\n\n  @media only screen and (max-width: 728px) {\n    .flag {\n      min-height: 200px;\n    }\n  }\n"])));function kn(){var n=Object(v.g)().alpha,e=w(),t=e.detailedCountrie,a=e.getCountrieByAlphaCode,c=e.error,i=e.isLoading,o=Object(r.useRef)(a);return Object(r.useEffect)((function(){o.current(n)}),[o,n]),Object(l.jsx)(l.Fragment,{children:i?Object(l.jsx)(G,{}):Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(wn,{children:[Object(l.jsx)(on,{}),c?Object(l.jsx)(On,{}):Object(l.jsx)(l.Fragment,{children:t&&Object(l.jsxs)(yn,{children:[Object(l.jsx)("div",{className:"flag",children:Object(l.jsx)("img",{src:t.flag,alt:t.name})}),Object(l.jsx)(mn,{})]})})]})})})}function Cn(){return Object(l.jsxs)(v.d,{children:[Object(l.jsx)(v.a,{exact:!0,from:"/",to:"/all"}),Object(l.jsx)(v.b,{path:"/all",component:an}),Object(l.jsx)(v.b,{path:"/africa",component:an}),Object(l.jsx)(v.b,{path:"/americas",component:an}),Object(l.jsx)(v.b,{path:"/asia",component:an}),Object(l.jsx)(v.b,{path:"/europe",component:an}),Object(l.jsx)(v.b,{path:"/oceania",component:an}),Object(l.jsx)(v.b,{path:"/countrie/:alpha",component:kn}),Object(l.jsx)(v.b,{path:"*",component:On})]})}function Sn(){return Object(r.useContext)(d)}var Ln,Rn,Nn=z.c.button(vn||(vn=Object(N.a)(["\n  width: 8rem;\n  height: 2rem;\n  padding: 0.5rem 0 0.5rem 0.5rem;\n\n  background: transparent;\n  border-radius: 0.2rem;\n\n  display: flex;\n  align-items: center;\n\n  svg {\n    width: 1.125rem;\n    height: 1.125rem;\n    margin-right: 0.5rem;\n  }\n\n  &:hover {\n    filter: opacity(0.8);\n  }\n"])));function zn(){var n=Sn(),e=n.selectedTheme,t=n.themeSwitcher;return Object(l.jsxs)(Nn,{onClick:function(){t("dark"===e?"light":"dark")},children:["dark"===e?Object(l.jsx)(P.d,{}):Object(l.jsx)(P.b,{}),Object(l.jsx)("span",{children:"dark"===e?"Light Mode":"Dark Mode"})]})}var En=z.c.header(Ln||(Ln=Object(N.a)(["\n  background: ",";\n"])),(function(n){return n.theme.collors.background.secondary})),An=z.c.div(Rn||(Rn=Object(N.a)(["\n  max-width: 1440px;\n  height: 6rem;\n  padding: 0 2rem;\n  margin: 0 auto;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n\n  h1 {\n    font-size: 2rem;\n  }\n\n  @media only screen and (max-width: 728px) {\n    justify-content: initial;\n\n    h1 {\n      font-size: 1rem;\n      flex-grow: 1;\n    }\n  }\n"])));function Fn(){return Object(l.jsx)(En,{id:"modalAppElement",children:Object(l.jsxs)(An,{children:[Object(l.jsx)("h1",{children:"Where in the World?"}),Object(l.jsx)(zn,{})]})})}t(72);var In,Tn={id:"T_001",name:"light",collors:{text:{primary:"#111517",secondary:"#858585"},background:{primary:"#fafafa",secondary:"#ffffff"},shadow:"#cccccc",activeItens:"#fc5404"}},Bn={id:"T_002",name:"dark",collors:{text:{primary:"#ffffff",secondary:"#d8d8d8"},background:{primary:"#202c37",secondary:"#2b3945"},shadow:"#1e2730",activeItens:"#fc5404"}},Pn=Object(z.b)(In||(In=Object(N.a)(["\n  :root {\n    --font: 'Nunito Sans', sans-serif;\n    --home-font-size: 1rem;\n    --details-font-size: 0,875rem;\n    --light-weight-font: 300;\n    --regular-weight-font: 600;\n    --bold-weight-font: 800;\n    --shadow: 3px 3px 3px ",";\n  }\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    background: ",";\n    -webkit-font-smoothing: antialiased;\n  }\n\n  button {\n    border: none;\n    cursor: pointer;\n  }\n\n  #root {\n    position: relative;\n  }\n\n  body, input, button {\n    font-family: var(--font);\n    font-weight: var(--regular-weight-font);\n    font-size: var(--home-font-size);\n    color: ",";\n  }\n\n  button:focus, input:focus {\n    outline: 0;\n    box-shadow: 0 0 0 3px ",";\n  }\n\n  ul {\n    list-style: none;\n  }\n\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n"])),(function(n){return n.theme.collors.shadow}),(function(n){return n.theme.collors.background.primary}),(function(n){return n.theme.collors.text.primary}),(function(n){return n.theme.collors.activeItens}));function Dn(n){var e,t=n.children;switch(Sn().selectedTheme){case"light":e=Tn;break;case"dark":e=Bn;break;default:e=Tn}return Object(l.jsxs)(z.a,{theme:e,children:[Object(l.jsx)(Pn,{}),t]})}var Vn=function(){return Object(l.jsx)(i.a,{children:Object(l.jsx)(u,{children:Object(l.jsxs)(Dn,{children:[Object(l.jsx)(Fn,{}),Object(l.jsx)(O,{children:Object(l.jsx)(Cn,{})}),Object(l.jsx)(o.a,{autoClose:3e3,position:"bottom-right"})]})})})};c.a.render(Object(l.jsx)(Vn,{}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.415e0a80.chunk.js.map