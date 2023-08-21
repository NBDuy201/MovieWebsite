import{u as d,j as s,a,L as g,g as u,n as L,h as f,m as E,A as r}from"./index.9e470d6b.js";import{u as x,a as y,F as N,P as w,T as i,b as S,o as T,l as P}from"./PageLogo.cd1f4afd.js";import{B as b}from"./Button.50e5d5fd.js";import{T as l}from"./Typography.de832622.js";const D=()=>{const{handleSubmit:c,control:o,formState:{errors:m,isSubmitting:h}}=x({resolver:T(P)}),{showErrToast:t}=y(m),p=d();return s(N,{children:[s("form",{onSubmit:c(async e=>{console.log("\u{1F680} ~ file: LoginPage.jsx:26 ~ handleLogin ~ data",e);try{await L(f,e.email,e.pwd),p(E.HOME)}catch(n){switch(console.log(n.code),n.code){case r.INVALID_PASSWORD:t("Incorrect password");break;case r.USER_DELETED:t("User doesn't exists");break}}}),className:"w-1/2 pr-10 h-full flex flex-col gap-y-6 flex-1 justify-center py-10",children:[a(w,{wrapperClass:"mb-8"}),a("h2",{className:"font-bold text-5xl text-primary",children:"Login"}),a(i,{type:"email",name:"email",className:"outline-slate-500",placeholder:"Email",control:o}),a(i,{type:"password",name:"pwd",className:"outline-slate-500",placeholder:"Password",control:o,hasIcon:!0}),a(b,{type:"submit",className:"p-3",isLoading:h,children:"Login"}),s(l,{variant:"caption",className:"mt-8",children:["Don't have an account?.",a(l,{variant:"caption",component:g,to:u.REGISTER,className:"text-primary underline ml-1",children:"Register here"})]})]}),a(S,{})]})};export{D as default};