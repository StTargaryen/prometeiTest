import{_ as m,m as g,g as f,o as n,c as d,w as c,a as h,b as t,h as b,d as w,i as v,F as k,j as y,k as L,t as $}from"./entry-6033a8be.mjs";import{u as B}from"./fetch-00bb1a3c.mjs";import"./asyncData-c2770651.mjs";const C={async setup(x,{expose:l}){l();let s,o;const{data:r}=([s,o]=g(()=>B("http://localhost:1337/api/sections?populate=*")),s=await s,o(),s),i=r.value.data,a=f(),e={sections:r,sectionsList:i,config:a,imageUrl:p=>{const u=p.attributes.image.data.attributes.url;return`${a.API_URL}${u}`}};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}},N={class:"flex-grow"},S={class:"mt-[102px] mb-[40px] flex-grow"},U={class:"max-w-screen-xl w-full mx-auto"},j={class:"inline-block"},F=t("svg",{class:"w-6 h-6 mt-[2px]",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})],-1),A=t("span",null,"\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E",-1),P=t("div",{class:"page-header mb-[20px] flex items-center"},[t("h1",{class:"flex-grow text-primary text-[36px] font-bold"}," \u0412\u0441\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 ")],-1),R={class:"cards flex items-center gap-[20px]"},V={class:"flex flex-grow card-text text-[21px]"};function z(x,l,s,o,r,i){const a=y,_=h;return n(),d(_,{name:"shop"},{default:c(()=>[t("div",N,[t("main",S,[t("div",U,[t("div",j,[b(a,{to:"/",class:"breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"},{default:c(()=>[F,A]),_:1})]),P,t("div",R,[(n(!0),w(k,null,v(o.sectionsList,e=>(n(),d(a,{to:{path:`/catalog/${e.attributes.slug}`},class:"card flex flex-col items-center w-1/5 h-[300px] bg-grey-light rounded-[4px] border-[2px] border-grey-text relative"},{default:c(()=>[t("div",{class:"card-image flex-grow w-[200px] h-[200px] bg-no-repeat bg-center bg-contain",style:L(`background-image: url('${o.imageUrl(e)}')`)},null,4),t("div",V,$(e.attributes.name),1)]),_:2},1032,["to"]))),256))])])])])]),_:1})}var M=m(C,[["render",z]]);export{M as default};