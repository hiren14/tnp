import{v as h,k as x,r as l,j as d,ae as j,b as o,cq as v,aU as B,cI as I,B as k,bl as H,aV as E,bB as y}from"./desk-eb7b3548-d80aff6a.js";import{useDeskTool as C}from"./index-66ec8894-13a7b3d0.js";import"./json-inspector-8c3da3ef.js";var u;function O(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function U(t){const{actionHandlers:e,index:s,menuItems:n,menuItemGroups:r,title:i}=t,{features:a}=C();return!(n!=null&&n.length)&&!i?null:o(B,{actions:o(I,{menuItems:n,menuItemGroups:r,actionHandlers:e}),backButton:a.backButton&&s>0&&o(k,{as:H,"data-as":"a",icon:E,mode:"bleed"}),title:i})}const g=h(x)(u||(u=O([`
  position: relative;
`])));function L(t){const{children:e}=t,{collapsed:s}=y();return o(g,{hidden:s,height:"fill",overflow:"auto",children:e})}function A(t){const{index:e,pane:s,paneKey:n,...r}=t,{child:i,component:a,menuItems:m,menuItemGroups:p,title:f="",type:T,...b}=s,[c,P]=l.useState(null);return d(j,{id:n,minWidth:320,selected:r.isSelected,children:[o(U,{actionHandlers:c==null?void 0:c.actionHandlers,index:e,menuItems:m,menuItemGroups:p,title:f}),d(L,{children:[v.isValidElementType(a)&&l.createElement(a,{...r,...b,ref:P,child:i,paneKey:n}),l.isValidElement(a)&&a]})]})}export{A as default};
