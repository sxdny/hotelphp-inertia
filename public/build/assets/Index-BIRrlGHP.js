import{j as e,a as l,Y as i}from"./app-C_oGmaWe.js";import{A as n}from"./AuthenticatedLayout-slEaOIor.js";import{B as o}from"./button-DYCKZZBd.js";import{t,B as c}from"./index-C-BpCRAt.js";import{DataTable as m}from"./data-table-Dd-iQXuD.js";import{columns as d}from"./columns-BDP30bEq.js";import{c as x}from"./dropdown-menu-Ez_03lAO.js";import"./utils-CytzSlOG.js";import"./input-DRSCR1Vr.js";import"./index-Cs7LAjo7.js";import"./index-CUscTlpk.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=x("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);function r({links:a}){return e.jsx("nav",{className:"flex gap-2 justify-center",children:a.map(s=>e.jsx(o,{asChild:!0,variant:s.active?"":"outline",className:s.url?"":"text-neutral-400 !bg-neutral-100 cursor-not-allowed",children:e.jsx(l,{preserveScroll:!0,href:s.url||"",dangerouslySetInnerHTML:{__html:s.label}},s.label)},s.label))})}function L({rooms:a,flash:s}){return s.success&&t.success("Room was deleted succesfully!"),s.error&&t("There was an error my guy."),e.jsxs(n,{header:e.jsx("h2",{className:"leading-tight text-neutral-600",children:"Rooms"}),children:[e.jsx(i,{title:"Rooms"}),e.jsx(c,{}),e.jsx("div",{children:e.jsx("div",{className:"mx-auto",children:e.jsx("div",{className:"overflow-hidden bg-white shadow-sm",children:e.jsxs("div",{className:"flex flex-col gap-8 p-6 text-gray-900",children:[e.jsxs("header",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"font-semibold text-2xl",children:"List of rooms"}),e.jsx("p",{className:"text-neutral-600",children:"Here you can see all the rooms of your database."})]}),e.jsx("div",{children:e.jsxs(o,{children:[e.jsx(l,{href:route("rooms.create"),children:"Create a new room"}),e.jsx(u,{})]})})]}),e.jsx(r,{links:a.meta.links}),e.jsx(m,{data:a.data,columns:d}),e.jsx(r,{links:a.meta.links})]})})})})]})}export{L as default};
