import{q as d,W as u,j as e,Y as f}from"./app-C_oGmaWe.js";import{A as v}from"./AuthenticatedLayout-slEaOIor.js";import{B as N}from"./button-DYCKZZBd.js";import{T as g,S as m,a as x,b as h,c as p,d as l}from"./textarea-DU33IKGU.js";import{L as r}from"./label-CDfufwE_.js";import{I as i}from"./input-DRSCR1Vr.js";import"./utils-CytzSlOG.js";import"./index-Cs7LAjo7.js";import"./index-CUscTlpk.js";import"./dropdown-menu-Ez_03lAO.js";function L({auth:b}){const{errors:a}=d().props,{flash:o}=d().props,{data:c,setData:t,post:j,processing:y,error:S}=u({name:"",description:"",state:"",type:"",capacity:"",price:""});function n(s){s.preventDefault(),j(route("rooms.store"))}return e.jsxs(v,{header:e.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:"Rooms"}),children:[e.jsx(f,{title:"Rooms"}),e.jsx("div",{className:"border-t",children:e.jsx("div",{className:"mx-auto max-w-7xl",children:e.jsx("div",{className:"overflow-hidden bg-white shadow-sm",children:e.jsxs("div",{className:"flex flex-col gap-8 p-6 text-gray-900",children:[e.jsxs("header",{children:[e.jsx("h1",{className:"font-semibold text-2xl",children:"Create a room"}),e.jsx("p",{className:"text-neutral-600",children:"Fill the form to create a new room."})]}),o.success&&e.jsx("div",{class:"alert",children:o.success}),e.jsxs("form",{onSubmit:n,className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(r,{className:"font-semibold",children:"Name"}),e.jsx(i,{value:c.name,onChange:s=>t("name",s.target.value),className:"max-w-[30rem]",htmlFor:"name"}),a.name&&e.jsx("div",{className:"text-sm text-red-500",children:a.name})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(r,{className:"font-semibold",children:"Description"}),e.jsx(g,{value:c.description,onChange:s=>t("description",s.target.value),placeholder:"Type the description of the room here.",className:"max-w-[30rem] resize-none"}),a.description&&e.jsx("div",{className:"text-sm text-red-500",children:a.description})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(r,{className:"font-semibold",children:"State"}),e.jsxs(m,{defaultValue:c.state,onValueChange:s=>t("state",s),children:[e.jsx(x,{className:"max-w-[10rem]",children:e.jsx(h,{placeholder:"Select a state..."})}),e.jsxs(p,{children:[e.jsx(l,{value:"available",children:"Available"}),e.jsx(l,{value:"booked",children:"Booked"}),e.jsx(l,{value:"not available",children:"Not available"})]})]}),a.state&&e.jsx("div",{className:"text-sm text-red-500",children:a.state})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(r,{className:"font-semibold",children:"Type"}),e.jsxs(m,{defaultValue:c.type,onValueChange:s=>t("type",s),children:[e.jsx(x,{className:"max-w-[10rem]",children:e.jsx(h,{placeholder:"Select a type..."})}),e.jsxs(p,{children:[e.jsx(l,{value:"studio",children:"Studio"}),e.jsx(l,{value:"single",children:"Single"}),e.jsx(l,{value:"double",children:"Double"}),e.jsx(l,{value:"presidential",children:"Presidential"})]})]}),a.type&&e.jsx("div",{className:"text-sm text-red-500",children:a.type})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(r,{className:"font-semibold",children:"Capacity"}),e.jsx(i,{type:"number",className:"max-w-[30rem]",htmlFor:"capacity",onChange:s=>t("capacity",s.target.value)}),a.capacity&&e.jsx("div",{className:"text-sm text-red-500",children:a.capacity})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(r,{className:"font-semibold",children:"Price"}),e.jsx(i,{type:"number",className:"max-w-[30rem]",htmlFor:"price",onChange:s=>t("price",s.target.value)}),a.price&&e.jsx("div",{className:"text-sm text-red-500",children:a.price})]}),e.jsx(N,{className:"mr-auto",type:"submit",onClick:s=>n,children:"Create"})]})]})})})})]})}export{L as default};
