import{R as c,a as o,r as l,j as e}from"./index.61c5e30b.js";import{M as d}from"./MovieList.c74e59ce.js";import{a as h,t as m}from"./index.esm.af73e399.js";import"./MovieItem.f6fef0a4.js";const s=2,p=await h(),u=()=>{const[n,r]=c.useState(s),i=p.slice(0,n),a=()=>{r(n+s)};return o(l.exports.Fragment,{children:[i.map(t=>e(d,{title:t.name,api:m.getMovieWithGenre(t.id)},t.id)),e("div",{className:"text-center mb-5",children:o("button",{className:"text-white",onClick:a,children:["See more",o("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-chevron-down mx-auto",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("polyline",{points:"6 9 12 15 18 9"})]})]})})]})};export{u as default};