var h=Object.defineProperty;var v=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var k=(e,n,t)=>n in e?h(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p=(e,n)=>{for(var t in n||(n={}))j.call(n,t)&&k(e,t,n[t]);if(v)for(var t of v(n))b.call(n,t)&&k(e,t,n[t]);return e};import{K as A,s as O,r as G,g,L as C,M as T}from"./entry-6033a8be.mjs";const q=(e,n)=>{const t=p({},e);for(const o in n)typeof n[o]=="object"&&n[o]!==null?t[o]=q(t[o]||{},n[o]):t[o]=n[o];return t},y={proxyCookies:!0},f=(e,n)=>{var o,s;const t=O();if(t._gqlState||(t._gqlState=G(Object.assign({},y))),e){if(e.options){const i=Object.keys(e.options||{});for(const l of i)(o=t._gqlState.value.clients)!=null&&o[l]||delete e.options[l]}n===void 0&&(n=!Object.keys(e).length),n?t._gqlState.value=Object.assign(y,{clients:t._gqlState.value.clients}):t._gqlState.value=q(t._gqlState.value,e);const c=t._gqlState.value.clients;if(c)for(const[i,l]of Object.entries(c)){if(n){l.options={};continue}!((s=e==null?void 0:e.options)!=null&&s[i])||(l.options=t._gqlState.value.options[i])}}return t._gqlState},x=()=>{var o,s,c,i,l,r;const e=f(),n=g(),{clients:t}=q({},C(n==null?void 0:n["graphql-client"],(o=n==null?void 0:n.public)==null?void 0:o["graphql-client"]));e.value.clients=((s=e.value)==null?void 0:s.clients)||{},e.value.options=((c=e.value)==null?void 0:c.options)||{};for(const[u,a]of Object.entries(t)){if((i=e.value)!=null&&i.clients[u])continue;(l=e.value)!=null&&l.options[u]||(e.value.options[u]={});const _=new T.GraphQLClient(a.host,e.value.options[u]);e.value.clients[u]=_,(r=a==null?void 0:a.token)!=null&&r.value&&B(a.token.value,{client:u})}},S=e=>{var o,s,c,i,l;const n=f();if(e&&((s=(o=n.value)==null?void 0:o.clients)==null?void 0:s[e]))return e;const{clients:t}=(i=(c=g())==null?void 0:c.public)==null?void 0:i["graphql-client"];if((!n.value.clients||!n.value.options)&&x(),!e&&((l=Object.keys(t))==null?void 0:l.length)){const r=Object.entries(t).find(([u,a])=>u==="default"||(a==null?void 0:a.default));r?e=r[0]:e=Object.keys(t)[0]}return e},L=e=>{const n=f();return e=S(e),n.value.clients[e]},d={type:"Bearer",name:"Authorization"},B=(e,n)=>{var c,i,l,r,u,a;if(!e)return;let{client:t,config:o}=n||{};t=S(t);const s=(r=(l=(i=(c=g())==null?void 0:c.public)==null?void 0:i["graphql-client"])==null?void 0:l.clients)==null?void 0:r[t];o=p(p(p(p({},d),((u=s==null?void 0:s.token)==null?void 0:u.name)&&{name:s.token.name}),((a=s==null?void 0:s.token)==null?void 0:a.type)!==void 0&&{type:s.token.type}),o),f({options:{[t]:{headers:{[o.name||d.name]:`${o.type} ${e}`.trim()}}}})},m=e=>{f();const n=L(e),t=A(n);return p({},t)},U=(...e)=>m().CatalogMenu(...e),$=(...e)=>m().ProductByArticle(...e);export{$ as G,U as a};
