import{a as e,u as c,j as a,m as i}from"./index.9e470d6b.js";import{p as o,B as u}from"./Button.50e5d5fd.js";import{t as h}from"./index.esm.753c4a8a.js";const s=t=>e("div",{className:`skeleton ${t.className}`});s.propTypes={props:o.exports.PropTypes.object,className:o.exports.PropTypes.string};const x=({data:t})=>{const{title:n,vote_average:r,release_date:m,poster_path:l,id:d}=t,p=c();return a("div",{className:"movie-item rounded-md bg-slate-800 p-4 text-white select-none",children:[e("img",{src:h.getImage(l,"w500")||"/notFound.png",alt:"no image",className:`w-full h-[300px] ${l?"object-scaledown":"object-cover"} rounded-md mb-4`}),e("h3",{className:"text-xl truncate",children:n}),a("div",{className:"flex justify-between text-gray-600 mb-5",children:[e("span",{children:new Date(m).getFullYear()}),e("span",{children:r})]}),e(u,{className:"w-full p-3 mt-auto",onClick:()=>p(`${i.MOVIE_LIST}/${d}`),children:"Watch Now"})]})},w=()=>a("div",{className:"movie-item rounded-md bg-slate-800 p-4 text-white select-none",children:[e(s,{className:"w-full h-[300px] rounded-md mb-4"}),e(s,{className:"w-[40%] h-[10px] rounded-md mb-4"}),a("div",{className:"flex justify-between mb-5",children:[e("span",{children:e(s,{className:"w-[30px] h-[10px] rounded-lg"})}),e("span",{children:e(s,{className:"w-[30px] h-[10px] rounded-lg"})})]}),e(s,{className:"w-full h-[40px] p-3 mt-auto rounded-lg"})]});x.propTypes={data:o.exports.object};export{s as L,x as M,w as a};