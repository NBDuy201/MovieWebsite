import{j as t,u as g,a as p}from"./index.ae21c272.js";import{t as x}from"./index.esm.90e3f3c7.js";var s={exports:{}},f="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",b=f,v=b;function d(){}function u(){}u.resetWarningCache=d;var N=function(){function e(n,c,l,i,T,y){if(y!==v){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}e.isRequired=e;function a(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:u,resetWarningCache:d};return r.PropTypes=r,r};s.exports=N();const h=({onClick:e,className:a,type:r="button",children:n})=>t("button",{type:r,onClick:e,className:`bg-primary rounded-lg ${a}`,children:n});h.propTypes={onClick:s.exports.func,className:s.exports.string,type:s.exports.string,children:s.exports.any};const o=e=>t("div",{className:`skeleton ${e.className}`});o.propTypes={props:s.exports.PropTypes.object,className:s.exports.PropTypes.string};const w=({data:e})=>{const{title:a,vote_average:r,release_date:n,poster_path:c,id:l}=e,i=g();return p("div",{className:"movie-item rounded-md bg-slate-800 p-4 text-white select-none",children:[t("img",{src:x.getImage(c,"w500")||"https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png",alt:"no image",className:`w-full h-[300px] ${c?"object-scaledown":"object-cover"} rounded-md mb-4`}),t("h3",{className:"text-xl truncate",children:a}),p("div",{className:"flex justify-between text-gray-600 mb-5",children:[t("span",{children:new Date(n).getFullYear()}),t("span",{children:r})]}),t(h,{className:"w-full p-3 mt-auto",onClick:()=>i(`/movies/${l}`),children:"Watch Now"})]})},j=()=>p("div",{className:"movie-item rounded-md bg-slate-800 p-4 text-white select-none",children:[t(o,{className:"w-full h-[300px] rounded-md mb-4"}),t(o,{className:"w-[40%] h-[10px] rounded-md mb-4"}),p("div",{className:"flex justify-between mb-5",children:[t("span",{children:t(o,{className:"w-[30px] h-[10px] rounded-lg"})}),t("span",{children:t(o,{className:"w-[30px] h-[10px] rounded-lg"})})]}),t(o,{className:"w-full h-[40px] p-3 mt-auto rounded-lg"})]});w.propTypes={data:s.exports.object};export{h as B,o as L,w as M,j as a,s as p};