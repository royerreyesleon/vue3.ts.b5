import{U as u}from"./Users-861ea522.js";import{S as _}from"./sweetalert2.all-00ea368b.js";import{d as m,u as h,f,g as p,h as v,o as n,c,a as e,b as g,w as x,e as w,m as b,t as a,p as y,F as N,R as k}from"./index-487aaab7.js";const V=e("h1",{class:"text-start"},"User Detail",-1),B={class:"text-start"},R={key:0,class:"row d-flex justify-content-center"},S={class:"col-md-3"},C={class:"card"},D=["src"],E={class:"card-body"},U={class:"card-title"},j={class:"card-subtitle mb-2 text-muted"},I=m({__name:"DetailView",setup(q){const i=h(),d=f.useLoading(),s=p({id:0,email:"",first_name:"",last_name:"",avatar:""});v(()=>{l()});const l=async()=>{const o=d.show(),t=await u.getOneService(Number(i.currentRoute.value.params.id)),r=await t.json();if(console.log("request",t),console.log("response",r),t.status!=200){o.hide(),_.fire("Error","Not found","error");return}o.hide(),s.value=r.data};return(o,t)=>(n(),c(N,null,[V,e("p",B,[g(b(k),{to:"/users/index",class:"btn btn-secondary"},{default:x(()=>[w(" Back ")]),_:1})]),s.value.avatar?(n(),c("div",R,[e("div",S,[e("div",C,[e("img",{src:s.value.avatar,class:"card-img-top",height:"220"},null,8,D),e("div",E,[e("h5",U,"Id: "+a(s.value.id)+" - "+a(s.value.first_name)+" "+a(s.value.last_name),1),e("h6",j,a(s.value.email),1)])])])])):y("",!0)],64))}});export{I as default};
