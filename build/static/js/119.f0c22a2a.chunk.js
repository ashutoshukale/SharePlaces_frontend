"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[119],{837:(e,s,r)=>{r.d(s,{A:()=>n});r(5043);var a=r(579);const n=e=>(0,a.jsx)("div",{className:`card ${e.className}`,style:e.style,children:e.children})},9626:(e,s,r)=>{r.d(s,{A:()=>l});r(5043);var a=r(8630),n=r(8347),t=r(579);const l=e=>(0,t.jsx)(a.A,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:(0,t.jsx)(n.A,{onClick:e.onClear,children:"Okay"}),children:(0,t.jsx)("p",{children:e.error})})},8630:(e,s,r)=>{r.d(s,{A:()=>i});var a=r(5043),n=r(3006),t=r(8336),l=r(7950),c=r(579);const o=e=>{const s=(0,c.jsxs)("div",{className:`modal ${e.className}`,style:e.style,children:[(0,c.jsx)("header",{className:`modal__header ${e.headerClass}`,children:(0,c.jsx)("h2",{children:e.header})}),(0,c.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:e=>e.preventDefault(),children:[(0,c.jsx)("div",{className:`modal__content  ${e.contentClass}`,children:e.children}),(0,c.jsx)("footer",{className:`modal__footer ${e.footerClass}`,children:e.footer})]})]});return(0,l.createPortal)(s,document.getElementById("modal-hook"))},i=e=>(0,c.jsxs)(a.Fragment,{children:[e.show&&(0,c.jsx)(n.A,{onClick:e.onCancel}),(0,c.jsx)(t.A,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:(0,c.jsx)(o,{...e})})]})},171:(e,s,r)=>{r.d(s,{x:()=>n});var a=r(5043);const n=()=>{const[e,s]=(0,a.useState)(!1),[r,n]=(0,a.useState)(),t=(0,a.useRef)([]),l=(0,a.useCallback)((async function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};s(!0);const c=new AbortController;t.current.push(c);try{const n=await fetch(e,{method:r,body:a,headers:l,signal:c.signal}),o=await n.json();if(t.current=t.current.filter((e=>e!==c)),!n.ok)throw new Error(o.message);return s(!1),o}catch(o){throw n(o.message),s(!1),o}}),[]);return(0,a.useEffect)((()=>()=>{t.current.forEach((e=>e.abort()))}),[]),{isLoading:e,error:r,sendRequest:l,clearError:()=>{n(null)}}}},7119:(e,s,r)=>{r.r(s),r.d(s,{default:()=>u});var a=r(5043),n=r(2582),t=r(579);const l=e=>(0,t.jsx)("div",{className:`avatar ${e.className}`,style:e.style,children:(0,t.jsx)("img",{src:e.image,alt:e.alt,style:{width:e.width,height:e.width}})});var c=r(837);const o=e=>(0,t.jsx)("li",{className:"user-item",children:(0,t.jsx)(c.A,{className:"user-item__content",children:(0,t.jsxs)(n.N_,{to:`/${e.id}/places`,children:[(0,t.jsx)("div",{className:"user-item__image",children:(0,t.jsx)(l,{image:`https://shareplaces-3oeh.onrender.com/${e.image}`,alt:e.name})}),(0,t.jsxs)("div",{className:"user-item__info",children:[(0,t.jsx)("h2",{children:e.name}),(0,t.jsxs)("h3",{children:[e.placeCount," ",1===e.placeCount?"Place":"Places"]})]})]})})}),i=e=>0===e.items.length?(0,t.jsx)("div",{className:"center",children:(0,t.jsx)(c.A,{children:(0,t.jsx)("h2",{children:"No users found."})})}):(0,t.jsx)("ul",{className:"users-list",children:e.items.map((e=>(0,t.jsx)(o,{id:e.id,image:e.image,name:e.name,placeCount:e.places.length},e.id)))});var d=r(9626),h=r(8863),m=r(171);const u=()=>{const[e,s]=(0,a.useState)(),{isLoading:r,error:n,sendRequest:l,clearError:c}=(0,m.x)();return(0,a.useEffect)((()=>{(async()=>{try{const e=await l("https://shareplaces-3oeh.onrender.com/api/users/");s(e.users)}catch(e){}})()}),[l]),(0,t.jsxs)(a.Fragment,{children:[(0,t.jsx)(d.A,{error:n,onClear:c}),r&&(0,t.jsx)("div",{className:"center",children:(0,t.jsx)(h.A,{asOverlay:!0})}),!r&&e&&(0,t.jsx)(i,{items:e})]})}}}]);
//# sourceMappingURL=119.f0c22a2a.chunk.js.map