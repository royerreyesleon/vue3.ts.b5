import{a as r}from"./sweetalert2.all-e9a3c9e0.js";const t=async()=>await r("https://reqres.in/api/users?delay=1","GET",null),a=async e=>await r(`https://reqres.in/api/users/${e}`,"GET",null),n=async e=>await r(`https://reqres.in/api/users/${e}`,"DELETE",null),i=async e=>await r("https://reqres.in/api/users","POST",e),c=async(e,s)=>await r(`https://reqres.in/api/users/${e}`,"PUT",s),u={getAllService:t,getOneService:a,createService:i,updateService:c,deleteService:n};export{u as U};