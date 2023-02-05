import{u as p,j as a,a as s,T as r,L as u,d as h,B as g,s as x,e as y,m as N,A as f,Q as L}from"./index.95acfe57.js";import{u as E,a as R,F as S,T as n,b as v,o as w,E as b,C as I,l as T}from"./useToast.de822f41.js";const O=()=>{const{handleSubmit:l,control:o,formState:{errors:i,isSubmitting:c}}=E({resolver:w(T)}),m=p(),d=async e=>{console.log("\u{1F680} ~ file: LoginPage.jsx:26 ~ handleLogin ~ data",e);try{await x(y,e.email,e.pwd),m(N.HOME)}catch(t){switch(console.log(t.code),t.code){case f.INVALID_PASSWORD:L.error("Incorrect password",{pauseOnHover:!1,delay:0,className:"bg-secondary text-primary",icon:()=>a(b,{className:"text-primary"}),closeButton:()=>a(I,{fontSize:"small",className:"text-white"}),progressClassName:"bg-primary"});break}}};return R(i),a("div",{onSubmit:l(d),className:"h-[calc(100vh-108px)] flex",children:s(S,{children:[s("form",{className:"w-1/2 pr-3 h-full flex flex-col gap-y-6 flex-1 justify-center",children:[a("h2",{className:"font-bold text-6xl text-primary text-center",children:"Login"}),a(n,{type:"email",name:"email",className:"outline-slate-500",placeholder:"Email",control:o}),a(n,{type:"password",name:"pwd",className:"outline-slate-500",placeholder:"Password",control:o,hasIcon:!0}),s(r,{variant:"caption",children:["Don't have an account ?"," ",a(r,{variant:"caption",component:u,to:h.REGISTER,className:"text-primary underline",children:"Register here"})]}),a(g,{type:"submit",className:"p-3",isLoading:c,children:"Login"})]}),a(v,{})]})})};export{O as default};
