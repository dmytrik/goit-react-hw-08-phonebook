"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[310],{2310:function(e,n,a){a.r(n),a.d(n,{default:function(){return b}});var r,t,i,s,l,o=a(9439),u=a(168),d=a(225),c=d.Z.form(r||(r=(0,u.Z)(["\n  display: block;\n  width: 500px;\n  margin: 0 auto;\n  padding-top: 50px;\n"]))),p=d.Z.label(t||(t=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),m=d.Z.input(i||(i=(0,u.Z)(["\n  width: 300px;\n  margin: 0 auto;\n"]))),h=d.Z.button(s||(s=(0,u.Z)(["\n  display: block;\n  margin: 10px auto 0 auto;\n"]))),f=d.Z.span(l||(l=(0,u.Z)(["\n  text-align: center;\n  padding: 5px;\n"]))),x=a(2791),g=a(8175),Z=a(9434),v=a(1004),w=a(3329),b=function(){var e=(0,x.useState)(""),n=(0,o.Z)(e,2),a=n[0],r=n[1],t=(0,x.useState)(""),i=(0,o.Z)(t,2),s=i[0],l=i[1],u=(0,Z.v9)((function(e){return e.user.error})),d=(0,Z.I0)(),b=""===a.trim()||""===s.trim();if(u){var k=u.message,j=void 0===k?"":k;if(400===u.code)alert("User authorization error, please try again)"),d((0,v.q)());else alert(j),d((0,v.q)())}var y=function(e){var n=e.currentTarget,a=n.name,t=n.value;switch(a){case"email":r(t);break;case"password":l(t);break;default:return}};return(0,w.jsxs)(c,{onSubmit:function(e){e.preventDefault();var n={email:a,password:s};d(g.Z.loginUser(n)),r(""),l("")},children:[(0,w.jsxs)(p,{children:[(0,w.jsx)(f,{children:"Email"}),(0,w.jsx)(m,{type:"email",name:"email",value:a,onChange:y})]}),(0,w.jsxs)(p,{children:[(0,w.jsx)(f,{children:"Password"}),(0,w.jsx)(m,{type:"password",name:"password",value:s,onChange:y,minLength:"7"})]}),(0,w.jsx)(h,{type:"submit",disabled:b,children:"Log in"})]})}}}]);
//# sourceMappingURL=310.cc92b2ec.chunk.js.map