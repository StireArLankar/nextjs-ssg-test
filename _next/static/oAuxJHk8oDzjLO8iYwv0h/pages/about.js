(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{TaPz:function(n,e,t){"use strict";t.r(e);var a=t("q1tI"),u=t.n(a),o=t("WcU3"),l=u.a.createElement,i=function(){var n=Object(o.b)(),e=n.state,t=n.actions;n.effects;return l("div",null,l("input",{placeholder:"user name",value:e.login.username,onChange:function(n){return t.login.changeUsername(n.target.value)}}),l("input",{placeholder:"password",value:e.login.password,onChange:function(n){return t.login.changePassword(n.target.value)}}),l("div",null,l("button",{onClick:function(){return t.login.login()}},"submit"),l("button",{onClick:function(){return t.login.logout()}},"logout"),l("button",{onClick:function(){return t.login.tryAgain()}},"tryAgain")),l("p",null,"Login: ",e.login.matches({LOGIN:!0})?"true":"false"),l("p",null,"AUTHENTICATING: ",e.login.matches({AUTHENTICATING:!0})?"true":"false"),l("p",null,"AUTHENTICATED: ",e.login.matches({AUTHENTICATED:!0})?"true":"false"),l("p",null,"ERROR: ",e.login.matches({ERROR:!0})?"true":"false"))},r=t("EqR6"),c=t("az50"),s=t.n(c),g=t("e45s"),p=t.n(g),f=u.a.createElement,d=(e.default=function(){var n=Object(o.b)(),e=n.state,t=n.actions;Object(a.useEffect)(t.toggleActive,[t]);var l=d();return f(u.a.Fragment,null,f("p",{className:l.p},"This is the about page"),f(r.a,{active:e.animated,toggle:t.toggleActive}),f(i,null))},p()((function(n){return s()({p:{padding:n.spacing(2),background:n.palette.grey[400]}})})))},hIud:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return t("TaPz")}])}},[["hIud",0,1,4,2,5]]]);