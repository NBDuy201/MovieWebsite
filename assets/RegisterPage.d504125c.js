import{j as l,a as e,L as h,f as g,x as f,g as i,A as w,l as y,U as N,y as R,w as x}from"./index.43d98d9e.js";import{u as b,a as E,F as P,c as S,P as T,T as t,b as n,o as L,r as A}from"./PageLogo.e46cf504.js";import{B as I}from"./Button.4fc47e2d.js";import"./createSvgIcon.b4693e9c.js";const O=()=>{const{handleSubmit:c,control:s,formState:{errors:m,isSubmitting:p}}=b({resolver:L(A)}),{showSuccessToast:u,showErrToast:o}=E(m);return l(P,{children:[e(S,{}),l("form",{onSubmit:c(async a=>{console.log("\u{1F680} ~ file: RegisterPage.jsx:25 ~ handleRegister ~ data",a);try{const r=await f(i,a.email,a.pwd),d=w(y,"users",r.user.uid);await N(d,{name:a.fullName,email:a.email,password:a.pwd,favMovie:[]}),await R(i.currentUser,{displayName:a.fullName}),u("Register successfully")}catch(r){switch(console.log(r),r.code){case x.EMAIL_EXISTS:o("Email already registered");break;default:o("Register failed. Please try again later.");break}}}),className:"w-1/2 pl-10 h-full flex flex-col gap-y-6 flex-1 justify-center",children:[e(T,{wrapperClass:"mb-8"}),e("h2",{className:"font-bold text-5xl text-primary",children:"Register"}),e(t,{type:"text",name:"fullName",className:"outline-slate-500",placeholder:"Full name",control:s}),e(t,{type:"email",name:"email",className:"outline-slate-500",placeholder:"Email",control:s}),e(t,{type:"password",name:"pwd",className:"outline-slate-500",placeholder:"Password",control:s,hasIcon:!0}),e(t,{type:"password",name:"cpwd",className:"outline-slate-500",placeholder:"Re-enter password",control:s,hasIcon:!0}),e(I,{type:"submit",className:"p-3",isLoading:p,children:"Register"}),l(n,{variant:"caption",className:"mt-8",children:["Already have an account?",e(n,{variant:"caption",component:h,to:g.LOGIN,className:"text-primary underline ml-1",children:"Login here"})]})]})]})};export{O as default};
