"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[414],{414:function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.r(t),r.d(t,{default:function(){return S}});var a,o=r(861),c=r(152),l=r(757),u=r.n(l),d=r(791),f=r(504),p=r(871),h=new Uint8Array(16);function v(){if(!a&&!(a="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(h)}var g=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var m=function(e){return"string"===typeof e&&g.test(e)},b=[],_=0;_<256;++_)b.push((_+256).toString(16).substr(1));var j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(b[e[t+0]]+b[e[t+1]]+b[e[t+2]]+b[e[t+3]]+"-"+b[e[t+4]]+b[e[t+5]]+"-"+b[e[t+6]]+b[e[t+7]]+"-"+b[e[t+8]]+b[e[t+9]]+"-"+b[e[t+10]]+b[e[t+11]]+b[e[t+12]]+b[e[t+13]]+b[e[t+14]]+b[e[t+15]]).toLowerCase();if(!m(r))throw TypeError("Stringified UUID is invalid");return r};var y=function(e,t,r){var n=(e=e||{}).random||(e.rng||v)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(var i=0;i<16;++i)t[r+i]=n[i];return t}return j(n)},x="MovieDetailsPage_containerOfDetails__zSQN1",w="MovieDetailsPage_link__ZE1Eo",O="MovieDetailsPage_infoOfMovie__EY5M4",P="MovieDetailsPage_text__lmKT4",D="MovieDetailsPage_wrapper__3wAUt",N="MovieDetailsPage_button__IlAfH",k="MovieDetailsPage_listOfGenres__xZERP",M="MovieDetailsPage_item__NYiJ0",C=r(184),E=r(569),S=function(){var e=(0,p.s0)(),t=(0,p.UO)().slug.match(/[a-z0-9]+$/)[0],r=(0,d.useState)(null),n=(0,c.Z)(r,2),i=n[0],a=n[1];(0,d.useEffect)((function(){(function(e){return l.apply(this,arguments)})(t).then(a)}),[t]);function l(){return(l=(0,o.Z)(u().mark((function e(t){var r,n,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"61d280fbc4e0ab3fee827783c53f7600","https://api.themoviedb.org/3/",e.prev=2,e.next=5,E("".concat("https://api.themoviedb.org/3/","movie/").concat(t,"?api_key=").concat("61d280fbc4e0ab3fee827783c53f7600","&language=en-US"));case 5:return r=e.sent,n=r.data,i=s(s({},n),{},{release_date:n.release_date.slice(0,4),genres:n.genres.slice(0,3)}),console.log(i),e.abrupt("return",i);case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)}return(0,C.jsxs)("div",{children:[i&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("button",{type:"button",onClick:function(){e(-1)},className:N,children:"\u2190 Go back"}),(0,C.jsxs)("div",{className:D,children:[(0,C.jsx)("img",{src:"https://image.tmdb.org/t/p/w600_and_h900_bestv2/".concat(i.poster_path),alt:i.title,width:"300"}),(0,C.jsxs)("div",{className:O,children:[(0,C.jsx)("h1",{children:(0,C.jsxs)("b",{children:[i.title,"(",i.release_date,")"]})}),(0,C.jsxs)("p",{className:P,children:["User Score: ",10*i.vote_average,"%"]}),(0,C.jsx)("h2",{children:(0,C.jsx)("b",{children:"Overview"})}),(0,C.jsx)("p",{className:P,children:i.overview}),(0,C.jsx)("h2",{children:(0,C.jsx)("b",{children:"Genres"})}),(0,C.jsx)("ul",{className:k,children:i.genres.map((function(e){return(0,C.jsx)("li",{className:M,children:(0,C.jsx)("p",{className:P,children:e.name})},y())}))})]})]})]}),(0,C.jsx)(C.Fragment,{children:i&&(0,C.jsxs)("div",{className:x,children:[(0,C.jsx)("h2",{children:"Additional information"}),(0,C.jsxs)("ul",{children:[(0,C.jsx)("li",{children:(0,C.jsx)(f.rU,{to:"/movies/".concat(i.id,"/cast"),className:w,children:"Cast"})}),(0,C.jsx)("li",{children:(0,C.jsx)(f.rU,{to:"/movies/".concat(i.id,"/reviews"),className:w,children:"Reviews"})})]})]})})]})}}}]);
//# sourceMappingURL=414.be3de49f.chunk.js.map