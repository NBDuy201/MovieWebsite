import{R as c,j as o,r as l,a as e}from"./index.43d98d9e.js";import{M as m}from"./MovieList.37fb2b73.js";import{a as p,t as d}from"./config.ea020879.js";import"./MovieItem.8ffe537e.js";import"./Button.4fc47e2d.js";import"./createSvgIcon.b4693e9c.js";import"./FavoriteBorder.6d9c0eda.js";import"./jsx-runtime_commonjs-proxy.75b84722.js";import"./favorite-api.965f7039.js";import"./index.esm.695b709b.js";const i=2,h=await p(),j=()=>{const[r,n]=c.useState(i),s=h.slice(0,r),a=()=>{n(r+i)};return o(l.exports.Fragment,{children:[s.map(t=>e(m,{title:t.name,api:d.getMovieWithGenre(t.id)},t.id)),e("div",{className:"text-center mb-5",children:o("button",{className:"text-white",onClick:a,children:["See more",o("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-chevron-down mx-auto",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("polyline",{points:"6 9 12 15 18 9"})]})]})})]})};export{j as default};
