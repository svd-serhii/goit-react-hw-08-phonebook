"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[724],{9724:function(e,t,n){n.r(t),n.d(t,{default:function(){return ye}});var a=n(9434),r="phonebook_container__YmxXb",o="phonebook_mainTitle__YmkJI",i="phonebook_title__wIGm2",s="phonebook_wrap__2Obbc",c=(n(5462),n(9439)),l=n(2791),d=n(6151),u=n(4708),m=n(4547),p=n(890),v=n(1889),f=n(4554),h=n(1614),x=n(7107),Z=n(7012),g=n(6052),b=n(5206),y=n(184),I=function(){var e=(0,a.I0)(),t=(0,l.useState)(""),n=(0,c.Z)(t,2),r=n[0],o=n[1],i=(0,l.useState)(""),s=(0,c.Z)(i,2),I=s[0],j=s[1],C=(0,a.v9)((function(e){return e.contacts.items})),S=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":o(a);break;case"number":j(a);break;default:return}},w=(0,x.Z)();return(0,y.jsx)(Z.Z,{theme:w,children:(0,y.jsxs)(h.Z,{component:"main",maxWidth:"xs",children:[(0,y.jsx)(u.ZP,{}),(0,y.jsxs)(f.Z,{sx:{marginTop:2,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,y.jsx)(p.Z,{component:"h2",variant:"h5",children:"Add new contact"}),(0,y.jsxs)(f.Z,{component:"form",noValidate:!0,onSubmit:function(t){t.preventDefault();var n=t.currentTarget.value;console.log(n);var a=n.name.toLowerCase(),i=n.number.toLowerCase();if(C.find((function(e){return a===e.name.toLowerCase()})))return b.Am.error("".concat(n.name," is already in contacts"));var s=C.find((function(e){return i===e.number.toLowerCase()}));if(s)return b.Am.error("".concat(n.number," is already belong to ").concat(s.name));e((0,g.uK)({name:r,number:I})),b.Am.success("Contacts added"),o(""),j("")},sx:{mt:3},children:[(0,y.jsxs)(v.ZP,{container:!0,spacing:2,children:[(0,y.jsx)(v.ZP,{item:!0,xs:12,children:(0,y.jsx)(m.Z,{autoComplete:"given-name",name:"name",required:!0,fullWidth:!0,id:"name",label:"Name",autoFocus:!0,onChange:S,value:r})}),(0,y.jsx)(v.ZP,{item:!0,xs:12,children:(0,y.jsx)(m.Z,{required:!0,fullWidth:!0,id:"number",type:"tel",label:"Phone number",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",autoComplete:"number",onChange:S,value:I})})]}),(0,y.jsx)(d.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Add contact"})]})]})]})})},j=n(7127),C=function(){var e=(0,a.v9)((function(e){return e.filter})),t=(0,a.I0)(),n=(0,x.Z)();return(0,y.jsx)(Z.Z,{theme:n,children:(0,y.jsxs)(h.Z,{component:"main",maxWidth:"xs",children:[(0,y.jsx)(u.ZP,{}),(0,y.jsxs)(f.Z,{sx:{marginTop:0,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,y.jsx)(p.Z,{sx:{marginBottom:2},component:"h2",variant:"h5",children:"Contacts"}),(0,y.jsx)(m.Z,{autoComplete:"given-name",name:"name",type:"text",required:!0,fullWidth:!0,id:"name",label:"Find contacts by name",autoFocus:!0,onChange:function(e){var n=e.currentTarget;return t((0,j.T)(n.value))},value:e})]})]})})},S=(0,n(9201).Z)((0,y.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"}),"Mail"),w=n(493),L=n(4942),P=n(3366),N=n(7462),k=n(8182),A=n(4419),M=n(627),_=n(2065),T=n(6934),F=n(1402),R=n(335),G=n(9103),O=n(162),V=n(2071),W=n(6199),z=n(5878),q=n(1217);function B(e){return(0,q.Z)("MuiListItem",e)}var D=(0,z.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var Y=(0,z.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function H(e){return(0,q.Z)("MuiListItemSecondaryAction",e)}(0,z.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var K=["className"],E=(0,T.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return(0,N.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),J=l.forwardRef((function(e,t){var n=(0,F.Z)({props:e,name:"MuiListItemSecondaryAction"}),a=n.className,r=(0,P.Z)(n,K),o=l.useContext(W.Z),i=(0,N.Z)({},n,{disableGutters:o.disableGutters}),s=function(e){var t=e.disableGutters,n=e.classes,a={root:["root",t&&"disableGutters"]};return(0,A.Z)(a,H,n)}(i);return(0,y.jsx)(E,(0,N.Z)({className:(0,k.Z)(s.root,a),ownerState:i,ref:t},r))}));J.muiName="ListItemSecondaryAction";var Q=J,X=["className"],U=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],$=(0,T.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,"flex-start"===n.alignItems&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters,!n.disablePadding&&t.padding,n.button&&t.button,n.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,n=e.theme,a=e.ownerState;return(0,N.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!a.disablePadding&&(0,N.Z)({paddingTop:8,paddingBottom:8},a.dense&&{paddingTop:4,paddingBottom:4},!a.disableGutters&&{paddingLeft:16,paddingRight:16},!!a.secondaryAction&&{paddingRight:48}),!!a.secondaryAction&&(0,L.Z)({},"& > .".concat(Y.root),{paddingRight:48}),(t={},(0,L.Z)(t,"&.".concat(D.focusVisible),{backgroundColor:(n.vars||n).palette.action.focus}),(0,L.Z)(t,"&.".concat(D.selected),(0,L.Z)({backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,_.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(D.focusVisible),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.focusOpacity,"))"):(0,_.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,L.Z)(t,"&.".concat(D.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),t),"flex-start"===a.alignItems&&{alignItems:"flex-start"},a.divider&&{borderBottom:"1px solid ".concat((n.vars||n).palette.divider),backgroundClip:"padding-box"},a.button&&(0,L.Z)({transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(D.selected,":hover"),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.hoverOpacity,"))"):(0,_.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,_.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),a.hasSecondaryAction&&{paddingRight:48})})),ee=(0,T.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),te=l.forwardRef((function(e,t){var n=(0,F.Z)({props:e,name:"MuiListItem"}),a=n.alignItems,r=void 0===a?"center":a,o=n.autoFocus,i=void 0!==o&&o,s=n.button,c=void 0!==s&&s,d=n.children,u=n.className,m=n.component,p=n.components,v=void 0===p?{}:p,f=n.componentsProps,h=void 0===f?{}:f,x=n.ContainerComponent,Z=void 0===x?"li":x,g=n.ContainerProps,b=(g=void 0===g?{}:g).className,I=n.dense,j=void 0!==I&&I,C=n.disabled,S=void 0!==C&&C,w=n.disableGutters,L=void 0!==w&&w,_=n.disablePadding,T=void 0!==_&&_,z=n.divider,q=void 0!==z&&z,Y=n.focusVisibleClassName,H=n.secondaryAction,K=n.selected,E=void 0!==K&&K,J=n.slotProps,te=void 0===J?{}:J,ne=n.slots,ae=void 0===ne?{}:ne,re=(0,P.Z)(n.ContainerProps,X),oe=(0,P.Z)(n,U),ie=l.useContext(W.Z),se=l.useMemo((function(){return{dense:j||ie.dense||!1,alignItems:r,disableGutters:L}}),[r,ie.dense,j,L]),ce=l.useRef(null);(0,O.Z)((function(){i&&ce.current&&ce.current.focus()}),[i]);var le=l.Children.toArray(d),de=le.length&&(0,G.Z)(le[le.length-1],["ListItemSecondaryAction"]),ue=(0,N.Z)({},n,{alignItems:r,autoFocus:i,button:c,dense:se.dense,disabled:S,disableGutters:L,disablePadding:T,divider:q,hasSecondaryAction:de,selected:E}),me=function(e){var t=e.alignItems,n=e.button,a=e.classes,r=e.dense,o=e.disabled,i={root:["root",r&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",o&&"disabled",n&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return(0,A.Z)(i,B,a)}(ue),pe=(0,V.Z)(ce,t),ve=ae.root||v.Root||$,fe=te.root||h.root||{},he=(0,N.Z)({className:(0,k.Z)(me.root,fe.className,u),disabled:S},oe),xe=m||"li";return c&&(he.component=m||"div",he.focusVisibleClassName=(0,k.Z)(D.focusVisible,Y),xe=R.Z),de?(xe=he.component||m?xe:"div","li"===Z&&("li"===xe?xe="div":"li"===he.component&&(he.component="div")),(0,y.jsx)(W.Z.Provider,{value:se,children:(0,y.jsxs)(ee,(0,N.Z)({as:Z,className:(0,k.Z)(me.container,b),ref:pe,ownerState:ue},re,{children:[(0,y.jsx)(ve,(0,N.Z)({},fe,!(0,M.Z)(ve)&&{as:xe,ownerState:(0,N.Z)({},ue,fe.ownerState)},he,{children:le})),le.pop()]}))})):(0,y.jsx)(W.Z.Provider,{value:se,children:(0,y.jsxs)(ve,(0,N.Z)({},fe,{as:xe,ref:pe},!(0,M.Z)(ve)&&{ownerState:(0,N.Z)({},ue,fe.ownerState)},he,{children:[le,H&&(0,y.jsx)(Q,{children:H})]}))})}));function ne(e){return(0,q.Z)("MuiListItemIcon",e)}(0,z.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);var ae=["className"],re=(0,T.ZP)("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,"flex-start"===n.alignItems&&t.alignItemsFlexStart]}})((function(e){var t=e.theme,n=e.ownerState;return(0,N.Z)({minWidth:56,color:(t.vars||t).palette.action.active,flexShrink:0,display:"inline-flex"},"flex-start"===n.alignItems&&{marginTop:8})})),oe=l.forwardRef((function(e,t){var n=(0,F.Z)({props:e,name:"MuiListItemIcon"}),a=n.className,r=(0,P.Z)(n,ae),o=l.useContext(W.Z),i=(0,N.Z)({},n,{alignItems:o.alignItems}),s=function(e){var t=e.alignItems,n=e.classes,a={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return(0,A.Z)(a,ne,n)}(i);return(0,y.jsx)(re,(0,N.Z)({className:(0,k.Z)(s.root,a),ownerState:i,ref:t},r))}));function ie(e){return(0,q.Z)("MuiListItemAvatar",e)}(0,z.Z)("MuiListItemAvatar",["root","alignItemsFlexStart"]);var se=["className"],ce=(0,T.ZP)("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,"flex-start"===n.alignItems&&t.alignItemsFlexStart]}})((function(e){var t=e.ownerState;return(0,N.Z)({minWidth:56,flexShrink:0},"flex-start"===t.alignItems&&{marginTop:8})})),le=l.forwardRef((function(e,t){var n=(0,F.Z)({props:e,name:"MuiListItemAvatar"}),a=n.className,r=(0,P.Z)(n,se),o=l.useContext(W.Z),i=(0,N.Z)({},n,{alignItems:o.alignItems}),s=function(e){var t=e.alignItems,n=e.classes,a={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return(0,A.Z)(a,ie,n)}(i);return(0,y.jsx)(ce,(0,N.Z)({className:(0,k.Z)(s.root,a),ownerState:i,ref:t},r))})),de=n(3044);function ue(e){return(0,q.Z)("MuiListItemText",e)}var me=(0,z.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),pe=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],ve=(0,T.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[(0,L.Z)({},"& .".concat(me.primary),t.primary),(0,L.Z)({},"& .".concat(me.secondary),t.secondary),t.root,n.inset&&t.inset,n.primary&&n.secondary&&t.multiline,n.dense&&t.dense]}})((function(e){var t=e.ownerState;return(0,N.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})})),fe=l.forwardRef((function(e,t){var n=(0,F.Z)({props:e,name:"MuiListItemText"}),a=n.children,r=n.className,o=n.disableTypography,i=void 0!==o&&o,s=n.inset,c=void 0!==s&&s,d=n.primary,u=n.primaryTypographyProps,m=n.secondary,v=n.secondaryTypographyProps,f=(0,P.Z)(n,pe),h=l.useContext(W.Z).dense,x=null!=d?d:a,Z=m,g=(0,N.Z)({},n,{disableTypography:i,inset:c,primary:!!x,secondary:!!Z,dense:h}),b=function(e){var t=e.classes,n=e.inset,a=e.primary,r=e.secondary,o={root:["root",n&&"inset",e.dense&&"dense",a&&r&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,A.Z)(o,ue,t)}(g);return null==x||x.type===p.Z||i||(x=(0,y.jsx)(p.Z,(0,N.Z)({variant:h?"body2":"body1",className:b.primary,component:null!=u&&u.variant?void 0:"span",display:"block"},u,{children:x}))),null==Z||Z.type===p.Z||i||(Z=(0,y.jsx)(p.Z,(0,N.Z)({variant:"body2",className:b.secondary,color:"text.secondary",display:"block"},v,{children:Z}))),(0,y.jsxs)(ve,(0,N.Z)({className:(0,k.Z)(b.root,r),ownerState:g,ref:t},f,{children:[x,Z]}))})),he=n(3061),xe="ContactsList_contactsList__ZQI1L",Ze="ContactsList_contactItem__r1MhY",ge=function(){var e=(0,a.v9)((function(e){return e.contacts.items})),t=(0,a.v9)((function(e){return e.filter})),n=(0,a.I0)();(0,l.useEffect)((function(){n((0,g.yF)())}),[n]);var r=function(){if(!t)return e;var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}();return(0,y.jsxs)(h.Z,{component:"main",maxWidth:"xs",children:[(0,y.jsx)(u.ZP,{}),(0,y.jsx)(f.Z,{sx:{marginTop:2,display:"flex",flexDirection:"column",alignItems:"center"},children:(0,y.jsx)(w.Z,{className:xe,children:r.map((function(e){var t=e.id,a=e.name,r=e.number;return(0,y.jsxs)(te,{className:Ze,children:[(0,y.jsx)(oe,{children:(0,y.jsx)(le,{children:(0,y.jsx)(de.Z,{sx:{bgcolor:"#3e426b"},children:(0,y.jsx)(S,{})})})}),(0,y.jsx)(fe,{sx:{color:"#3e426b"},primary:a,secondary:r}),(0,y.jsx)(d.Z,{size:"small",variant:"contained",color:"primary",type:"button",onClick:function(){return n((0,g.GK)(t))},children:(0,y.jsx)(he.Z,{sx:{color:"#fff"}})})]},t)}))})})]})},be=n(3535),ye=function(){var e=(0,a.v9)((function(e){return e.contacts})),t=(0,a.v9)(be.um.getIsLoggedIn);return console.log(t),(0,y.jsx)("div",{className:r,children:t?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("h1",{className:o,children:"Phonebook"}),(0,y.jsx)(I,{}),(0,y.jsx)("div",{className:s,children:0===e.length?(0,y.jsx)("p",{children:"Your contacts list is empty"}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(C,{}),(0,y.jsx)(ge,{})]})})]}):(0,y.jsx)("h1",{className:i,children:"Phonebook App"})})}},3061:function(e,t,n){var a=n(4836);t.Z=void 0;var r=a(n(5649)),o=n(184),i=(0,r.default)((0,o.jsx)("path",{d:"M14 8c0-2.21-1.79-4-4-4S6 5.79 6 8s1.79 4 4 4 4-1.79 4-4zm-2 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM2 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4zm2 0c.2-.71 3.3-2 6-2 2.69 0 5.77 1.28 6 2H4zm13-8h6v2h-6z"}),"PersonRemoveOutlined");t.Z=i}}]);
//# sourceMappingURL=724.e65255d1.chunk.js.map