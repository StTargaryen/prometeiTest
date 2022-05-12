import{_ as h,m as g,o as l,c as f,w as c,a as b,b as e,h as x,d as p,i as w,F as v,j as y,t as d}from"./entry-6033a8be.mjs";import{u as k}from"./fetch-00bb1a3c.mjs";import"./asyncData-c2770651.mjs";const j={async setup(u,{expose:n}){n();let t,s;const{data:i}=([t,s]=g(()=>k("http://localhost:1337/api/products")),t=await t,s(),t),o={products:i};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}},B={class:"flex-grow"},C={class:"mt-[102px] mb-[40px] flex-grow"},L={class:"max-w-screen-xl w-full mx-auto"},N={class:"page-header flex items-center"},$={class:"inline-block"},F=e("svg",{class:"w-6 h-6 mt-[2px]",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})],-1),P=e("span",null,"\u041A \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F\u043C",-1),S=e("div",{class:"page-header mb-[20px] flex items-center"},[e("h1",{class:"flex-grow text-primary text-[36px] font-bold"}," \u0424\u0443\u0442\u0431\u043E\u043B\u044C\u043D\u044B\u0435 \u043C\u044F\u0447\u0438 ")],-1),M={class:"flex justify-between items-start gap-[40px]"},V=e("aside",{class:"catalog-filter w-[300px] flex flex-col"},[e("div",{class:"filter-block mb-[20px]"},[e("div",{class:"filter-block-title bg-grey-light border-[1px] border-grey-text rounded-[4px] h-[60px] flex items-center px-[28px] text-[21px]"}," \u0411\u0440\u0435\u043D\u0434 "),e("ul",{class:"filter-block-content py-[10px] mx-[30px]"},[e("li",{class:"px-[18px] py-[10px] border-2 border-white text-[16px] rounded-[4px] hover:bg-grey-light active:border-primary active:bg-white flex justify-center items-center active:text-primary cursor-pointer"},[e("span",{class:"flex-grow"},"Puma"),e("span",null,[e("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})])])])])]),e("div",{class:"filter-block"},[e("div",{class:"filter-block-title bg-grey-light border-[1px] border-grey-text rounded-[4px] h-[60px] flex items-center px-[28px] text-[21px]"}," \u0426\u0435\u043D\u0430, \u0440\u0443\u0431. "),e("div",{class:"filter-block-content py-[10px] mx-[30px]"},[e("div",{class:"mt-[20px] flex justify-between items-center w-full"},[e("input",{class:"py-[10px] px-[5px] bg-grey-light rounded-[4px] max-w-[100px] text-[16px] shadow-inner outline-none text-center",type:"text",placeholder:"799"}),e("span",{class:"w-[20px] h-[2px] bg-grey-light"}),e("input",{class:"py-[10px] px-[5px] bg-grey-light rounded-[4px] max-w-[100px] text-[16px] shadow-inner outline-none text-center",type:"text",placeholder:"13000"})])])])],-1),A={class:"catalog-list flex-grow flex gap-[25px]"},D={class:"item-content flex flex-col items-stretch text-center"},E={class:"item-title mb-[30px] font-medium"},O={class:"item-button border-[2px] py-[4px] border-primary rounded-[4px] flex justify-center items-center"};function T(u,n,t,s,i,o){const a=y,_=b;return l(),f(_,{name:"shop"},{default:c(()=>[e("div",B,[e("main",C,[e("div",L,[e("div",N,[e("div",$,[x(a,{to:"/categories",class:"breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"},{default:c(()=>[F,P]),_:1})])]),S,e("div",M,[V,e("div",A,[(l(!0),p(v,null,w(s.products.data,(r,m)=>(l(),p("div",{key:m,class:"catalog-list-item font-medium text-[21px] w-1/3 h-[450px] shadow-card hover:shadow-card-hover rounded-[4px] relative flex flex-col p-[30px]"},[x(a,{to:`/product/${r.id}`,class:"item-image flex-grow bg-center bg-no-repeat bg-contain",style:{"background-image":"url('assets/images/product-item.png')"}},null,8,["to"]),e("div",D,[e("div",E,d(r.attributes.Title),1),e("button",O,d(r.attributes.Price)+" \u0440\u0443\u0431. ",1)])]))),128))])])])])])]),_:1})}var H=h(j,[["render",T]]);export{H as default};
