import{_ as p,a as g}from"./bootstrap-logo-65ff3390.js";import{d as r,u as b,r as i,o as _,c as d,a as t,b as a,w as o,e as s,F as m}from"./index-3334f7f5.js";const v={class:"navbar bg-dark border-bottom border-body navbar-expand-lg","data-bs-theme":"dark"},h={class:"container-fluid"},f=t("img",{src:p,alt:"Logo",width:"30",height:"24",class:"d-inline-block align-text-top"},null,-1),k=t("img",{src:g,alt:"Logo",width:"30",height:"24",class:"d-inline-block align-text-top"},null,-1),x=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1),w={class:"collapse navbar-collapse",id:"navbarSupportedContent"},C={class:"navbar-nav me-auto mb-2 mb-lg-0"},V={class:"nav-item"},L={class:"nav-item"},R={class:"nav-item"},B={class:"nav-item"},N=r({__name:"NavBar",setup(u){const n=b(),l=()=>{localStorage.clear(),n.push({name:"login",replace:!0})};return(c,y)=>{const e=i("RouterLink");return _(),d("nav",v,[t("div",h,[a(e,{class:"navbar-brand",to:"/users/index"},{default:o(()=>[f,k]),_:1}),x,t("div",w,[t("ul",C,[t("li",V,[a(e,{class:"nav-link",to:"/users/index"},{default:o(()=>[s("Home")]),_:1})]),t("li",L,[a(e,{class:"nav-link",to:"/page1"},{default:o(()=>[s("Page 1")]),_:1})]),t("li",R,[a(e,{class:"nav-link",to:"/page2"},{default:o(()=>[s("Page 2")]),_:1})]),t("li",B,[a(e,{class:"nav-link",to:"/page3"},{default:o(()=>[s("Page 3")]),_:1})])]),t("div",{class:"d-flex"},[t("button",{class:"btn btn-danger",type:"button",onClick:l},"Logout")])])])])}}}),S={class:"container mt-5 mb-5"},H=r({__name:"HomeView",setup(u){return(n,l)=>{const c=i("RouterView");return _(),d(m,null,[a(N),t("div",S,[a(c)])],64)}}});export{H as default};
