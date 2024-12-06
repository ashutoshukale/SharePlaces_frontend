"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[830],{3830:(e,t,r)=>{r.r(t),r.d(t,{default:()=>y});var n=r(5043),a=r(1688),i=(r(4284),r(2244)),o=r(8347),l=r(837),s=r(8863),c=r(9626),u=r(1882),d=r(5789),p=r(171),f=r(5323),h=r(6886),v=r(579);const y=()=>{const e=(0,n.useContext)(h.c),t=(0,a.useParams)().placeId,{isLoading:r,sendRequest:y,error:m,clearError:x}=(0,p.x)(),[C,j]=(0,n.useState)(),A=(0,f.W6)(),[g,E,V]=(0,d.A)({title:{value:"",isValid:!1},description:{value:"",isValid:!1}},!1);(0,n.useEffect)((()=>{(async()=>{try{const e=await y(`https://shareplaces-3oeh.onrender.com/api/places/${t}`);j(e.place),V({title:{value:e.place.title,isValid:!0},description:{value:e.place.description,isValid:!0}},!0)}catch(e){}})()}),[y,t]);return r?(0,v.jsx)("div",{className:"center",children:(0,v.jsx)(s.A,{asOverlay:!0})}):C||m?(0,v.jsxs)(n.Fragment,{children:[(0,v.jsx)(c.A,{error:m,onClear:x}),!r&&C&&(0,v.jsxs)("form",{className:"place-form",onSubmit:async r=>{r.preventDefault();try{const r=await y(`https://shareplaces-3oeh.onrender.com/api/places/${t}`,"PATCH",JSON.stringify({title:g.inputs.title.value,description:g.inputs.description.value}),{"Content-Type":"application/json",Authorization:"Bearer "+e.token});V({title:{value:r.place.title,isValid:!0},description:{value:r.place.description,isValid:!0}},!0),A.push(`/${r.place.creator}/places`)}catch(n){}},children:[(0,v.jsx)(i.A,{id:"title",element:"input",type:"text",label:"Title",validators:[(0,u.B_)()],errorText:"Please enter a Valid Title",onInput:E,initialValue:C.title,initialValid:!!C.title}),(0,v.jsx)(i.A,{id:"description",element:"textarea",label:"Description",validators:[(0,u.B_)(),(0,u.Ik)(5)],errorText:"Please enter a Valid Description, Atleast 5 Characters",onInput:E,initialValue:C.description,initialValid:!!C.description}),(0,v.jsx)(o.A,{type:"submit",disabled:!g.isValid,children:"UPDATE PLACE"})]})]}):(0,v.jsx)("div",{className:"center",children:(0,v.jsx)(l.A,{children:(0,v.jsx)("h2",{children:"Could Not Find Place!"})})})}},2244:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(5043),a=r(1882),i=r(579);const o=(e,t)=>{switch(t.type){case"CHANGE":return{...e,value:t.val,isValid:(0,a.tf)(t.val,t.validators)};case"TOUCH":return{...e,isTouched:!0};default:return e}},l=e=>{const[t,r]=(0,n.useReducer)(o,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),{id:a,onInput:l}=e,{value:s,isValid:c}=t;(0,n.useEffect)((()=>{l(a,s,c)}),[a,c,l,s]);const u=t=>{r({type:"CHANGE",val:t.target.value,validators:e.validators})},d=()=>{r({type:"TOUCH"})},p="input"===e.element?(0,i.jsx)("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:u,onBlur:d,value:t.value}):(0,i.jsx)("textarea",{id:e.id,rows:e.rows||3,onChange:u,onBlur:d,value:t.value});return(0,i.jsxs)("div",{className:`form-control ${!t.isValid&&t.isTouched&&"form-control--invalid"}`,children:[(0,i.jsx)("label",{htmlFor:e.id,children:e.label}),p,!t.isValid&&t.isTouched&&(0,i.jsx)("p",{children:e.errorText})]})}},837:(e,t,r)=>{r.d(t,{A:()=>a});r(5043);var n=r(579);const a=e=>(0,n.jsx)("div",{className:`card ${e.className}`,style:e.style,children:e.children})},9626:(e,t,r)=>{r.d(t,{A:()=>o});r(5043);var n=r(8630),a=r(8347),i=r(579);const o=e=>(0,i.jsx)(n.A,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:(0,i.jsx)(a.A,{onClick:e.onClear,children:"Okay"}),children:(0,i.jsx)("p",{children:e.error})})},8630:(e,t,r)=>{r.d(t,{A:()=>c});var n=r(5043),a=r(3006),i=r(8336),o=r(7950),l=r(579);const s=e=>{const t=(0,l.jsxs)("div",{className:`modal ${e.className}`,style:e.style,children:[(0,l.jsx)("header",{className:`modal__header ${e.headerClass}`,children:(0,l.jsx)("h2",{children:e.header})}),(0,l.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:e=>e.preventDefault(),children:[(0,l.jsx)("div",{className:`modal__content  ${e.contentClass}`,children:e.children}),(0,l.jsx)("footer",{className:`modal__footer ${e.footerClass}`,children:e.footer})]})]});return(0,o.createPortal)(t,document.getElementById("modal-hook"))},c=e=>(0,l.jsxs)(n.Fragment,{children:[e.show&&(0,l.jsx)(a.A,{onClick:e.onCancel}),(0,l.jsx)(i.A,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:(0,l.jsx)(s,{...e})})]})},5789:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(5043);const a=(e,t)=>{switch(t.type){case"INPUT_CHANGE":let r=!0;for(const n in e.inputs)e.inputs[n]&&(r=n===t.inputId?r&&t.isValid:r&&e.inputs[n].isValid);return{...e,inputs:{...e.inputs,[t.inputId]:{value:t.value,isValid:t.isValid}},isValid:r};case"SET_DATA":return{inputs:t.inputs,isValid:t.formValid};default:return e}},i=(e,t)=>{const[r,i]=(0,n.useReducer)(a,{inputs:e,isValid:t});return[r,(0,n.useCallback)(((e,t,r)=>{i({type:"INPUT_CHANGE",value:t,isValid:r,inputId:e})}),[]),(0,n.useCallback)(((e,t)=>{i({type:"SET_DATA",inputs:e,formValid:t})}),[])]}},171:(e,t,r)=>{r.d(t,{x:()=>a});var n=r(5043);const a=()=>{const[e,t]=(0,n.useState)(!1),[r,a]=(0,n.useState)(),i=(0,n.useRef)([]),o=(0,n.useCallback)((async function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t(!0);const l=new AbortController;i.current.push(l);try{const a=await fetch(e,{method:r,body:n,headers:o,signal:l.signal}),s=await a.json();if(i.current=i.current.filter((e=>e!==l)),!a.ok)throw new Error(s.message);return t(!1),s}catch(s){throw a(s.message),t(!1),s}}),[]);return(0,n.useEffect)((()=>()=>{i.current.forEach((e=>e.abort()))}),[]),{isLoading:e,error:r,sendRequest:o,clearError:()=>{a(null)}}}},1882:(e,t,r)=>{r.d(t,{B_:()=>l,Ik:()=>s,i$:()=>c,tf:()=>u});const n="REQUIRE",a="MINLENGTH",i="MAXLENGTH",o="EMAIL",l=()=>({type:n}),s=e=>({type:a,val:e}),c=()=>({type:o}),u=(e,t)=>{let r=!0;for(const l of t)l.type===n&&(r=r&&e.trim().length>0),l.type===a&&(r=r&&e.trim().length>=l.val),l.type===i&&(r=r&&e.trim().length<=l.val),"MIN"===l.type&&(r=r&&+e>=l.val),"MAX"===l.type&&(r=r&&+e<=l.val),l.type===o&&(r=r&&/^\S+@\S+\.\S+$/.test(e));return r}},5323:(e,t,r)=>{function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var a=r(1688),i=n(r(5043)),o=r(7321);r(5173),r(8620);var l=n(r(2213));function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){e.prototype=Object.create(t.prototype),u(e.prototype.constructor=e,t)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],0<=t.indexOf(r)||(a[r]=e[r]);return a}var p=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).history=o.createBrowserHistory(t.props),t}return c(t,e),t.prototype.render=function(){return i.createElement(a.Router,{history:this.history,children:this.props.children})},t}(i.Component),f=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).history=o.createHashHistory(t.props),t}return c(t,e),t.prototype.render=function(){return i.createElement(a.Router,{history:this.history,children:this.props.children})},t}(i.Component),h=function(e,t){return"function"==typeof e?e(t):e},v=function(e,t){return"string"==typeof e?o.createLocation(e,null,null,t):e},y=function(e){return e},m=i.forwardRef;void 0===m&&(m=y);var x=m((function(e,t){var r=e.innerRef,n=e.navigate,a=e.onClick,o=d(e,["innerRef","navigate","onClick"]),l=o.target,c=s({},o,{onClick:function(t){try{a&&a(t)}catch(e){throw t.preventDefault(),e}t.defaultPrevented||0!==t.button||l&&"_self"!==l||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(t)||(t.preventDefault(),n())}});return c.ref=y!==m&&t||r,i.createElement("a",c)})),C=m((function(e,t){var r=e.component,n=void 0===r?x:r,c=e.replace,u=e.to,p=e.innerRef,f=d(e,["component","replace","to","innerRef"]);return i.createElement(a.__RouterContext.Consumer,null,(function(e){e||l(!1);var r=e.history,a=v(h(u,e.location),e.location),d=a?r.createHref(a):"",x=s({},f,{href:d,navigate:function(){var t=h(u,e.location),n=o.createPath(e.location)===o.createPath(v(t));(c||n?r.replace:r.push)(t)}});return y!==m?x.ref=t||p:x.innerRef=p,i.createElement(n,x)}))})),j=function(e){return e},A=i.forwardRef;void 0===A&&(A=j);var g=A((function(e,t){var r=e["aria-current"],n=void 0===r?"page":r,o=e.activeClassName,c=void 0===o?"active":o,u=e.activeStyle,p=e.className,f=e.exact,y=e.isActive,m=e.location,x=e.sensitive,g=e.strict,E=e.style,V=e.to,N=e.innerRef,b=d(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return i.createElement(a.__RouterContext.Consumer,null,(function(e){e||l(!1);var r=m||e.location,o=v(h(V,r),r),d=o.pathname,w=d&&d.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),T=w?a.matchPath(r.pathname,{path:w,exact:f,sensitive:x,strict:g}):null,_=!!(y?y(T,r):T),R="function"==typeof p?p(_):p,k="function"==typeof E?E(_):E;_&&(R=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((function(e){return e})).join(" ")}(R,c),k=s({},k,u));var I=s({"aria-current":_&&n||null,className:R,style:k,to:o},b);return j!==A?I.ref=t||N:I.innerRef=N,i.createElement(C,I)}))}));Object.defineProperty(t,"W6",{enumerable:!0,get:function(){return a.useHistory}})},2213:e=>{var t="Invariant failed";e.exports=function(e,r){if(!e)throw new Error(t)}},8620:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n=function(e,t){}},4284:()=>{}}]);
//# sourceMappingURL=830.8e05c516.chunk.js.map