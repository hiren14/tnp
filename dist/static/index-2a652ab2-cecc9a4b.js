import{v as _,b7 as j,j as B,ae as g,cJ as w,b as a,aU as L,cI as O,B as T,bl as S,aV as A,af as D,A as W,k as z}from"./desk-eb7b3548-d80aff6a.js";import{P as C}from"./PaneItem-59fdbcf0-14c2f915.js";import{useDeskTool as G}from"./index-66ec8894-13a7b3d0.js";import"./json-inspector-8c3da3ef.js";var r;function H(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}const U=_.hr(r||(r=H([`
  background-color: var(--card-border-color);
  height: 1px;
  margin: 0;
  border: none;
`])));function M(n){const{childItemId:t,index:l,isActive:d,isSelected:p,pane:u,paneKey:f}=n,{features:h}=G(),{collapsed:m}=j(),{defaultLayout:v,displayOptions:c,items:i,menuItems:y,menuItemGroups:b,title:I}=u,k=c==null?void 0:c.showIcons,P=e=>{var o;const s=(o=e.displayOptions)==null?void 0:o.showIcon;return typeof s<"u"?s!==!1:k!==!1};return B(g,{currentMaxWidth:350,"data-testid":"desk-tool-list-pane",id:f,maxWidth:640,minWidth:320,selected:p,children:[w,a(L,{actions:a(O,{menuItems:y,menuItemGroups:b}),backButton:h.backButton&&l>0&&a(T,{as:S,"data-as":"a",icon:A,mode:"bleed"}),title:I}),a(D,{overflow:m?void 0:"auto",children:a(W,{padding:2,space:1,children:i&&i.map((e,o)=>{if(e.type==="divider")return a(z,{paddingY:1,children:a(U,{})},"divider-".concat(o));const s=!d&&t===e.id,x=d&&t===e.id;return a(C,{icon:P(e)?e.icon:!1,id:e.id,layout:v,pressed:s,schemaType:e.schemaType,selected:x,title:e.title,value:e._id&&e.schemaType?{_id:e._id,_type:e.schemaType.name,title:e.title}:void 0},e.id)})})})]})}export{M as default};