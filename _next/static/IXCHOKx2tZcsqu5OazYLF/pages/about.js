(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{TaPz:function(n,t,e){"use strict";e.r(t);var u=e("q1tI"),a=e.n(u),l=e("WcU3"),o=a.a.createElement,i=function(){var n=Object(l.b)(),t=n.state,e=n.actions;n.effects;return o("div",null,o("input",{placeholder:"user name",value:t.login.username,onChange:function(n){return e.login.changeUsername(n.target.value)}}),o("input",{placeholder:"password",value:t.login.password,onChange:function(n){return e.login.changePassword(n.target.value)}}),o("div",null,o("button",{onClick:function(){return e.login.login()}},"submit"),o("button",{onClick:function(){return e.login.logout()}},"logout"),o("button",{onClick:function(){return e.login.tryAgain()}},"tryAgain")),o("p",null,"Login: ",t.login.matches({LOGIN:!0})?"true":"false"),o("p",null,"AUTHENTICATING: ",t.login.matches({AUTHENTICATING:!0})?"true":"false"),o("p",null,"AUTHENTICATED: ",t.login.matches({AUTHENTICATED:!0})?"true":"false"),o("p",null,"ERROR: ",t.login.matches({ERROR:!0})?"true":"false"))},r=e("EqR6"),c=a.a.createElement;t.default=function(){var n=Object(l.b)(),t=n.state,e=n.actions;return Object(u.useEffect)(e.toggleActive,[e]),c(a.a.Fragment,null,c("p",null,"This is the about page"),c(r.a,{active:t.animated,toggle:e.toggleActive}),c(i,null))}},hIud:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return e("TaPz")}])}},[["hIud",0,1,3,2,4]]]);