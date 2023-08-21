import{a as e,u,j as l,m as h,r as N}from"./index.9e470d6b.js";import{u as b,t,l as r,f}from"./index.esm.753c4a8a.js";import{S as v,a as x,M as o}from"./MovieList.87b0fe86.js";import{p as T,B as w}from"./Button.50e5d5fd.js";import"./MovieItem.be174459.js";const M=()=>{const{data:i}=b(t.getMovieList(r.UPCONGMING),f),a=i?.results||[];return e("section",{className:"banner h-[500px] page-container mb-10",children:e(v,{grabCursor:!0,children:a.length>0&&a.map(s=>e(x,{children:e(n,{data:s})},s.id))})})},n=({data:i})=>{const{genre_ids:a,title:s,poster_path:m,id:c}=i,d=u();return l("div",{className:"bg-white w-full h-full rounded-lg relative",children:[e("div",{className:"overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] \r to-[rgba(0,0,0,0.5)] rounded-lg"}),e("img",{src:t.getImage(m),alt:"",className:"object-cover rounded-lg w-full h-full"}),l("div",{className:"absolute bottom-5 left-4 text-white",children:[e("h2",{className:"text-4xl font-semibold mb-4",children:s}),e("div",{className:"flex items-center justify-start gap-x-5 mb-8",children:a&&a.map((p,g)=>e("span",{className:"border p-2",children:t.getGenreName(p)},g))}),e(w,{onClick:()=>d(`${h.MOVIE_LIST}/${c}`),className:"p-4 font-medium",children:"Watch now"})]})]})};n.propTypes={data:T.exports.PropTypes.object};const S=()=>l(N.exports.Fragment,{children:[e(M,{}),e(o,{title:"New Releases",api:t.getMovieList(r.NOW_PLAYING)}),e(o,{title:"Top Rated",api:t.getMovieList(r.TOP_RATED)}),e(o,{title:"Trending",api:t.getMovieList(r.TRENDING)})]});export{S as default};