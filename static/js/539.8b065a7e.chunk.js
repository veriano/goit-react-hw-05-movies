"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[539],{539:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var r=a(861),n=a(152),s=a(757),c=a.n(s),o=a(791),i=a(504),u=a(871),l="MoviesPage_SearchForm__kpN7l",h="MoviesPage_SearchFormButton__pBDYN",p="MoviesPage_SearchFormButtonLabel__q049z",f="MoviesPage_SearchFormInput__9qTli",m="MoviesPage_linksOfMovies__BSlkS",_=a(184),v=a(569),d=function(){var e=(0,u.TH)().pathname,t=(0,o.useState)(""),a=(0,n.Z)(t,2),s=a[0],d=a[1],g=(0,o.useState)(JSON.parse(localStorage.getItem("values"))),b=(0,n.Z)(g,2),S=b[0],x=b[1];(0,o.useEffect)((function(){S&&localStorage.setItem("values",JSON.stringify(S))}),[S]);function k(){return(k=(0,r.Z)(c().mark((function e(t){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"61d280fbc4e0ab3fee827783c53f7600","https://api.themoviedb.org/3/",e.prev=2,e.next=5,v.get("".concat("https://api.themoviedb.org/3/","search/movie?api_key=").concat("61d280fbc4e0ab3fee827783c53f7600","&query=").concat(t));case 5:if(a=e.sent,console.log(a.data.results),!(a.data.results.length<1)){e.next=10;break}return alert("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0438\u043b\u0438 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0442\u0430\u043a\u043e\u0439 \u0444\u0438\u043b\u044c\u043c \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"),e.abrupt("return");case 10:return e.abrupt("return",a.data.results);case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,13]])})))).apply(this,arguments)}return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("form",{className:l,onSubmit:function(e){e.preventDefault(),""!==s.trim()?(function(e){return k.apply(this,arguments)}(s).then((function(e){return x(e)})),d("")):alert("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e.")},children:[(0,_.jsx)("input",{className:f,type:"text",onChange:function(e){var t=e.currentTarget.value;d(t)},autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),(0,_.jsx)("button",{type:"submit",className:h,children:(0,_.jsx)("span",{className:p,children:"Search"})})]}),(0,_.jsx)("ul",{children:S&&S.map((function(t){return(0,_.jsx)("li",{children:(0,_.jsx)(i.rU,{to:"".concat(e,"/").concat(t.id),className:m,children:(0,_.jsx)("b",{children:t.original_title})})},t.id)}))})]})}}}]);
//# sourceMappingURL=539.8b065a7e.chunk.js.map