(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"+kMw":function(n,e,t){"use strict";t.r(e),t.d(e,"__N_SSP",(function(){return w}));var u=t("q1tI"),r=t.n(u),o=t("QZg2"),c=t("ZDfL"),a=t("3Z9Z"),l=t("JI6e"),i=t("e+cM"),f=t("nOHt"),s=r.a.createElement,g=!0,b=!1,w=!0;e.default=function(n){var e=n.title,t=n.booksProps,w=n.resultsProps,p=n.url,d=Object(u.useState)(t),h=d[0],_=d[1],k=Object(u.useState)(w),m=k[0],O=k[1],j=Object(f.useRouter)();Object(u.useEffect)((function(){return b=!0,function(){return b=!1}}),[]),Object(u.useEffect)((function(){return b=!0,!g&&j.query.genre?o.a.get(p+"?g="+j.query.genre).then((function(n){E(n)})).catch((function(n){return console.log(n)})):g||j.query.genre?g=!1:o.a.get(p).then((function(n){E(n)})),function(){return b=!1}}),[j.query.genre]),Object(u.useEffect)((function(){return b=!0,g||o.a.get(p).then((function(n){E(n)})),function(){return b=!1}}),[j.pathname]);var E=function(n){b&&(t?_(n.data.results):O(n.data.results))};return s(c.b,null,t&&h&&s(r.a.Fragment,null,s(a.a,null,s(l.a,null,s("h2",null,e))),s(a.a,null,s(i.u,{items:h}))),w&&m&&m.map((function(n){return s(r.a.Fragment,{key:n.id},s(a.a,null,s(l.a,null,s("h2",null,n.title))),s(a.a,null,s(i.u,{items:n.books})))})))}},fBK2:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/books/categories",function(){return t("+kMw")}])}},[["fBK2",0,2,1,3,4,5,6]]]);