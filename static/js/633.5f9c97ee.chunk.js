"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[633],{7633:function(e,n,r){r.r(n),r.d(n,{default:function(){return S}});var t=r(9439),o=r(1413),i=r(2791),a=r(3044),s=r(6151),c=r(4708),l=r(4547),u=r(533),d=r(1889),m=r(4554),h=r(403),p=r(890),x=r(1614),Z=r(7107),f=r(7012),v=r(2007),b=r.n(v),g=r(9434),y=r(3535),j=r(184);function w(e){return(0,j.jsxs)(p.Z,(0,o.Z)((0,o.Z)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:["Copyright \xa9 ",(0,j.jsx)(u.Z,{color:"inherit",href:"https://svd-serhii.github.io/goit-react-hw-08-phonebook/",children:"svd-serhii"})," ",(new Date).getFullYear(),"."]}))}var C=(0,Z.Z)();function S(){var e=(0,i.useState)(""),n=(0,t.Z)(e,2),r=n[0],o=n[1],Z=(0,i.useState)(""),v=(0,t.Z)(Z,2),b=v[0],S=v[1],k=(0,i.useState)(""),D=(0,t.Z)(k,2),V=D[0],P=D[1],q=(0,g.I0)(),W=function(e){var n=e.target,r=n.name,t=n.value;switch(r){case"name":return o(t);case"email":return S(t);case"password":return P(t);default:return}};return(0,j.jsx)(f.Z,{theme:C,children:(0,j.jsxs)(x.Z,{component:"main",maxWidth:"xs",children:[(0,j.jsx)(c.ZP,{}),(0,j.jsxs)(m.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,j.jsx)(a.Z,{sx:{m:1,bgcolor:"#3e426b"},children:(0,j.jsx)(h.Z,{})}),(0,j.jsx)(p.Z,{component:"h1",variant:"h5",children:"Sign up"}),(0,j.jsxs)(m.Z,{component:"form",noValidate:!0,onSubmit:function(e){e.preventDefault(),q(y.r5.register({name:r,email:b,password:V})),o(""),S(""),P("")},sx:{mt:3},children:[(0,j.jsxs)(d.ZP,{container:!0,spacing:2,children:[(0,j.jsx)(d.ZP,{item:!0,xs:12,children:(0,j.jsx)(l.Z,{autoComplete:"given-name",name:"name",required:!0,fullWidth:!0,id:"name",label:"Name",autoFocus:!0,onChange:W,value:r})}),(0,j.jsx)(d.ZP,{item:!0,xs:12,children:(0,j.jsx)(l.Z,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:W,value:b})}),(0,j.jsx)(d.ZP,{item:!0,xs:12,children:(0,j.jsx)(l.Z,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password",onChange:W,value:V,title:"The password must be at least 8 characters long."})})]}),(0,j.jsx)(s.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign Up"}),(0,j.jsx)(d.ZP,{container:!0,justifyContent:"flex-end",children:(0,j.jsx)(d.ZP,{item:!0,children:(0,j.jsx)(u.Z,{href:"#",variant:"body2",children:"Already have an account? Sign in"})})})]})]}),(0,j.jsx)(w,{sx:{mt:5}})]})})}S.propType={handleSubmit:b().func.required,handleChange:b().func.required,password:b().string.required,email:b().string.required,name:b().string.required}},403:function(e,n,r){var t=r(4836);n.Z=void 0;var o=t(r(5649)),i=r(184),a=(0,o.default)((0,i.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");n.Z=a},533:function(e,n,r){r.d(n,{Z:function(){return V}});var t=r(3433),o=r(9439),i=r(4942),a=r(3366),s=r(7462),c=r(2791),l=r(8182),u=r(4419),d=r(4036),m=r(6934),h=r(1402),p=r(3031),x=r(2071),Z=r(890),f=r(5878),v=r(1217);function b(e){return(0,v.Z)("MuiLink",e)}var g=(0,f.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),y=r(8529),j=r(2065),w={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},C=function(e){var n=e.theme,r=e.ownerState,t=function(e){return w[e]||e}(r.color),o=(0,y.DW)(n,"palette.".concat(t),!1)||r.color,i=(0,y.DW)(n,"palette.".concat(t,"Channel"));return"vars"in n&&i?"rgba(".concat(i," / 0.4)"):(0,j.Fq)(o,.4)},S=r(184),k=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],D=(0,m.ZP)(Z.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[n.root,n["underline".concat((0,d.Z)(r.underline))],"button"===r.component&&n.button]}})((function(e){var n=e.theme,r=e.ownerState;return(0,s.Z)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&(0,s.Z)({textDecoration:"underline"},"inherit"!==r.color&&{textDecorationColor:C({theme:n,ownerState:r})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===r.component&&(0,i.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(g.focusVisible),{outline:"auto"}))})),V=c.forwardRef((function(e,n){var r=(0,h.Z)({props:e,name:"MuiLink"}),i=r.className,m=r.color,Z=void 0===m?"primary":m,f=r.component,v=void 0===f?"a":f,g=r.onBlur,y=r.onFocus,j=r.TypographyClasses,C=r.underline,V=void 0===C?"always":C,P=r.variant,q=void 0===P?"inherit":P,W=r.sx,A=(0,a.Z)(r,k),F=(0,p.Z)(),_=F.isFocusVisibleRef,M=F.onBlur,z=F.onFocus,T=F.ref,H=c.useState(!1),L=(0,o.Z)(H,2),N=L[0],R=L[1],B=(0,x.Z)(n,T),I=(0,s.Z)({},r,{color:Z,component:v,focusVisible:N,underline:V,variant:q}),O=function(e){var n=e.classes,r=e.component,t=e.focusVisible,o=e.underline,i={root:["root","underline".concat((0,d.Z)(o)),"button"===r&&"button",t&&"focusVisible"]};return(0,u.Z)(i,b,n)}(I);return(0,S.jsx)(D,(0,s.Z)({color:Z,className:(0,l.Z)(O.root,i),classes:j,component:v,onBlur:function(e){M(e),!1===_.current&&R(!1),g&&g(e)},onFocus:function(e){z(e),!0===_.current&&R(!0),y&&y(e)},ref:B,ownerState:I,variant:q,sx:[].concat((0,t.Z)(Object.keys(w).includes(Z)?[]:[{color:Z}]),(0,t.Z)(Array.isArray(W)?W:[W]))},A))}))}}]);
//# sourceMappingURL=633.5f9c97ee.chunk.js.map