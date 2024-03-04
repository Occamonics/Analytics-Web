"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[672],{1808:function(e,t,n){var o=n(64836).default,r=n(75263).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(67294)),l=o(n(93967)),i=o(n(45598)),s=o(n(30339)),u=n(47419);n(13594);var d=n(31929),c=r(n(73757)),p=o(n(32117)),m=o(n(60101)),f=o(n(65964)),g=o(n(15379)),__rest=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>t.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};let getPath=(e,t)=>{if(void 0===t)return t;let n=(t||"").replace(/^\//,"");return Object.keys(e).forEach(t=>{n=n.replace(`:${t}`,e[t])}),n},Breadcrumb=e=>{let t;let{prefixCls:n,separator:o="/",style:r,className:b,rootClassName:v,routes:h,items:y,children:$,itemRender:C,params:w={}}=e,O=__rest(e,["prefixCls","separator","style","className","rootClassName","routes","items","children","itemRender","params"]),{getPrefixCls:S,direction:k,breadcrumb:j}=a.useContext(d.ConfigContext),E=S("breadcrumb",n),[x,P,_]=(0,m.default)(E),I=(0,g.default)(y,h),M=(0,f.default)(E,C);if(I&&I.length>0){let e=[],n=y||h;t=I.map((t,r)=>{let{path:l,key:i,type:u,menu:d,overlay:m,onClick:f,className:g,separator:b,dropdownProps:v}=t,h=getPath(w,l);void 0!==h&&e.push(h);let y=null!=i?i:r;if("separator"===u)return a.createElement(p.default,{key:y},b);let $={},C=r===I.length-1;d?$.menu=d:m&&($.overlay=m);let{href:O}=t;return e.length&&void 0!==h&&(O=`#/${e.join("/")}`),a.createElement(c.InternalBreadcrumbItem,Object.assign({key:y},$,(0,s.default)(t,{data:!0,aria:!0}),{className:g,dropdownProps:v,href:O,separator:C?"":o,onClick:f,prefixCls:E}),M(t,w,n,e,O))})}else if($){let e=(0,i.default)($).length;t=(0,i.default)($).map((t,n)=>t?(0,u.cloneElement)(t,{separator:n===e-1?"":o,key:n}):t)}let T=(0,l.default)(E,null==j?void 0:j.className,{[`${E}-rtl`]:"rtl"===k},b,v,P,_),N=Object.assign(Object.assign({},null==j?void 0:j.style),r);return x(a.createElement("nav",Object.assign({className:T,style:N},O),a.createElement("ol",null,t)))};Breadcrumb.Item=c.default,Breadcrumb.Separator=p.default,t.default=Breadcrumb},73757:function(e,t,n){var o=n(75263).default,r=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.InternalBreadcrumbItem=void 0;var a=r(n(5085)),l=o(n(67294)),i=n(31929),s=r(n(48301)),u=r(n(32117)),d=n(65964);n(13594);var __rest=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>t.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};let InternalBreadcrumbItem=e=>{let{prefixCls:t,separator:n="/",children:o,menu:r,overlay:i,dropdownProps:d,href:c}=e,p=(e=>{if(r||i){let n=Object.assign({},d);if(r){let e=r||{},{items:t}=e,o=__rest(e,["items"]);n.menu=Object.assign(Object.assign({},o),{items:null==t?void 0:t.map((e,t)=>{var{key:n,title:o,label:r,path:a}=e,i=__rest(e,["key","title","label","path"]);let s=null!=r?r:o;return a&&(s=l.createElement("a",{href:`${c}${a}`},s)),Object.assign(Object.assign({},i),{key:null!=n?n:t,label:s})})})}else i&&(n.overlay=i);return l.createElement(s.default,Object.assign({placement:"bottom"},n),l.createElement("span",{className:`${t}-overlay-link`},e,l.createElement(a.default,null)))}return e})(o);return null!=p?l.createElement(l.Fragment,null,l.createElement("li",null,p),n&&l.createElement(u.default,null,n)):null};t.InternalBreadcrumbItem=InternalBreadcrumbItem;let BreadcrumbItem=e=>{let{prefixCls:t,children:n,href:o}=e,r=__rest(e,["prefixCls","children","href"]),{getPrefixCls:a}=l.useContext(i.ConfigContext),s=a("breadcrumb",t);return l.createElement(InternalBreadcrumbItem,Object.assign({},r,{prefixCls:s}),(0,d.renderItem)(s,r,n,o))};BreadcrumbItem.__ANT_BREADCRUMB_ITEM=!0,t.default=BreadcrumbItem},32117:function(e,t,n){var o=n(75263).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=n(31929);let BreadcrumbSeparator=e=>{let{children:t}=e,{getPrefixCls:n}=r.useContext(a.ConfigContext),o=n("breadcrumb");return r.createElement("li",{className:`${o}-separator`,"aria-hidden":"true"},""===t?t:t||"/")};BreadcrumbSeparator.__ANT_BREADCRUMB_SEPARATOR=!0,t.default=BreadcrumbSeparator},68672:function(e,t,n){var o=n(64836).default;t.Z=void 0;var r=o(n(1808));t.Z=r.default},60101:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.prepareComponentToken=t.default=void 0;var o=n(54548),r=n(98078),a=n(3184);let genBreadcrumbStyle=e=>{let{componentCls:t,iconCls:n,calc:a}=e;return{[t]:Object.assign(Object.assign({},(0,r.resetComponent)(e)),{color:e.itemColor,fontSize:e.fontSize,[n]:{fontSize:e.iconFontSize},ol:{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"},a:Object.assign({color:e.linkColor,transition:`color ${e.motionDurationMid}`,padding:`0 ${(0,o.unit)(e.paddingXXS)}`,borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",marginInline:a(e.marginXXS).mul(-1).equal(),"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover}},(0,r.genFocusStyle)(e)),"li:last-child":{color:e.lastItemColor},[`${t}-separator`]:{marginInline:e.separatorMargin,color:e.separatorColor},[`${t}-link`]:{[`
          > ${n} + span,
          > ${n} + a
        `]:{marginInlineStart:e.marginXXS}},[`${t}-overlay-link`]:{borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",padding:`0 ${(0,o.unit)(e.paddingXXS)}`,marginInline:a(e.marginXXS).mul(-1).equal(),[`> ${n}`]:{marginInlineStart:e.marginXXS,fontSize:e.fontSizeIcon},"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover,a:{color:e.linkHoverColor}},a:{"&:hover":{backgroundColor:"transparent"}}},[`&${e.componentCls}-rtl`]:{direction:"rtl"}})}},prepareComponentToken=e=>({itemColor:e.colorTextDescription,lastItemColor:e.colorText,iconFontSize:e.fontSize,linkColor:e.colorTextDescription,linkHoverColor:e.colorText,separatorColor:e.colorTextDescription,separatorMargin:e.marginXS});t.prepareComponentToken=prepareComponentToken,t.default=(0,a.genStyleHooks)("Breadcrumb",e=>{let t=(0,a.mergeToken)(e,{});return genBreadcrumbStyle(t)},prepareComponentToken)},65964:function(e,t,n){var o=n(75263).default,r=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return(n,o,r,a,l)=>{if(t)return t(n,o,r,a);let i=function(e,t){if(void 0===e.title||null===e.title)return null;let n=Object.keys(t).join("|");return"object"==typeof e.title?e.title:String(e.title).replace(RegExp(`:(${n})`,"g"),(e,n)=>t[n]||e)}(n,o);return renderItem(e,n,i,l)}},t.renderItem=renderItem;var a=r(n(93967)),l=r(n(30339)),i=o(n(67294)),__rest=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>t.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};function renderItem(e,t,n,o){if(null==n)return null;let{className:r,onClick:s}=t,u=__rest(t,["className","onClick"]),d=Object.assign(Object.assign({},(0,l.default)(u,{data:!0,aria:!0})),{onClick:s});return void 0!==o?i.createElement("a",Object.assign({},d,{className:(0,a.default)(`${e}-link`,r),href:o}),n):i.createElement("span",Object.assign({},d,{className:(0,a.default)(`${e}-link`,r)}),n)}},15379:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return(0,o.useMemo)(()=>e||(t?t.map(route2item):null),[e,t])};var o=n(67294),__rest=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>t.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};function route2item(e){let{breadcrumbName:t,children:n}=e,o=__rest(e,["breadcrumbName","children"]),r=Object.assign({title:t},o);return n&&(r.menu={items:n.map(e=>{var{breadcrumbName:t}=e;return Object.assign(Object.assign({},__rest(e,["breadcrumbName"])),{title:t})})}),r}},48301:function(e,t,n){var o=n(64836).default,r=n(75263).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(67294)),l=o(n(67638)),i=o(n(93967)),s=o(n(29171)),u=n(56790),d=o(n(60869)),c=o(n(18475)),p=n(56333),m=o(n(74132)),f=o(n(91351)),g=n(47419),b=n(13594),v=o(n(96877)),h=n(31929),y=o(n(12386)),$=n(2639),C=n(3184),w=o(n(6373)),O=o(n(14893));let Dropdown=e=>{let t;let{menu:n,arrow:o,prefixCls:r,children:f,trigger:S,disabled:k,dropdownRender:j,getPopupContainer:E,overlayClassName:x,rootClassName:P,overlayStyle:_,open:I,onOpenChange:M,visible:T,onVisibleChange:N,mouseEnterDelay:R=.15,mouseLeaveDelay:B=.1,autoAdjustOverflow:D=!0,placement:z="",overlay:A,transitionName:L}=e,{getPopupContainer:X,getPrefixCls:H,direction:F,dropdown:V}=a.useContext(h.ConfigContext);(0,b.devUseWarning)("Dropdown");let W=a.useMemo(()=>{let e=H();return void 0!==L?L:z.includes("top")?`${e}-slide-down`:`${e}-slide-up`},[H,z,L]),Z=a.useMemo(()=>z?z.includes("Center")?z.slice(0,z.indexOf("Center")):z:"rtl"===F?"bottomRight":"bottomLeft",[z,F]),U=H("dropdown",r),q=(0,O.default)(U),[Y,G,K]=(0,w.default)(U,q),[,Q]=(0,C.useToken)(),J=a.Children.only(f),ee=(0,g.cloneElement)(J,{className:(0,i.default)(`${U}-trigger`,{[`${U}-rtl`]:"rtl"===F},J.props.className),disabled:k}),et=k?[]:S;et&&et.includes("contextMenu")&&(t=!0);let[en,eo]=(0,d.default)(!1,{value:null!=I?I:T}),er=(0,u.useEvent)(e=>{null==M||M(e,{source:"trigger"}),null==N||N(e),eo(e)}),ea=(0,i.default)(x,P,G,K,q,null==V?void 0:V.className,{[`${U}-rtl`]:"rtl"===F}),el=(0,m.default)({arrowPointAtCenter:"object"==typeof o&&o.pointAtCenter,autoAdjustOverflow:D,offset:Q.marginXXS,arrowWidth:o?Q.sizePopupArrow:0,borderRadius:Q.borderRadius}),ei=a.useCallback(()=>{null!=n&&n.selectable&&null!=n&&n.multiple||(null==M||M(!1,{source:"menu"}),eo(!1))},[null==n?void 0:n.selectable,null==n?void 0:n.multiple]),[es,eu]=(0,p.useZIndex)("Dropdown",null==_?void 0:_.zIndex),ed=a.createElement(s.default,Object.assign({alignPoint:t},(0,c.default)(e,["rootClassName"]),{mouseEnterDelay:R,mouseLeaveDelay:B,visible:en,builtinPlacements:el,arrow:!!o,overlayClassName:ea,prefixCls:U,getPopupContainer:E||X,transitionName:W,trigger:et,overlay:()=>{let e;return e=(null==n?void 0:n.items)?a.createElement(y.default,Object.assign({},n)):"function"==typeof A?A():A,j&&(e=j(e)),e=a.Children.only("string"==typeof e?a.createElement("span",null,e):e),a.createElement($.OverrideProvider,{prefixCls:`${U}-menu`,rootClassName:(0,i.default)(K,q),expandIcon:a.createElement("span",{className:`${U}-menu-submenu-arrow`},a.createElement(l.default,{className:`${U}-menu-submenu-arrow-icon`})),mode:"vertical",selectable:!1,onClick:ei,validator:e=>{let{mode:t}=e}},e)},placement:Z,onVisibleChange:er,overlayStyle:Object.assign(Object.assign(Object.assign({},null==V?void 0:V.style),_),{zIndex:es})}),ee);return es&&(ed=a.createElement(v.default.Provider,{value:eu},ed)),Y(ed)},S=(0,f.default)(Dropdown,"dropdown",e=>e,function(e){return Object.assign(Object.assign({},e),{align:{overflow:{adjustX:!1,adjustY:!1}}})});Dropdown._InternalPanelDoNotUseOrYouWillBeFired=e=>a.createElement(S,Object.assign({},e),a.createElement("span",null)),t.default=Dropdown},6373:function(e,t,n){var o=n(64836).default,r=n(75263).default;Object.defineProperty(t,"__esModule",{value:!0}),t.prepareComponentToken=t.default=void 0;var a=n(98078),l=n(42836),i=r(n(9064)),s=n(3184),u=o(n(38203)),d=n(51337),c=n(54548);let genBaseStyle=e=>{let{componentCls:t,menuCls:n,zIndexPopup:o,dropdownArrowDistance:r,sizePopupArrow:s,antCls:u,iconCls:d,motionDurationMid:p,paddingBlock:m,fontSize:f,dropdownEdgeChildPadding:g,colorTextDisabled:b,fontSizeIcon:v,controlPaddingHorizontal:h,colorBgElevated:y}=e;return[{[t]:Object.assign(Object.assign({},(0,a.resetComponent)(e)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:o,display:"block","&::before":{position:"absolute",insetBlock:e.calc(s).div(2).sub(r).equal(),zIndex:-9999,opacity:1e-4,content:'""'},[`&-trigger${u}-btn`]:{[`& > ${d}-down, & > ${u}-btn-icon > ${d}-down`]:{fontSize:v}},[`${t}-wrap`]:{position:"relative",[`${u}-btn > ${d}-down`]:{fontSize:v},[`${d}-down::before`]:{transition:`transform ${p}`}},[`${t}-wrap-open`]:{[`${d}-down::before`]:{transform:"rotate(180deg)"}},[`
        &-hidden,
        &-menu-hidden,
        &-menu-submenu-hidden
      `]:{display:"none"},[`&${u}-slide-down-enter${u}-slide-down-enter-active${t}-placement-bottomLeft,
          &${u}-slide-down-appear${u}-slide-down-appear-active${t}-placement-bottomLeft,
          &${u}-slide-down-enter${u}-slide-down-enter-active${t}-placement-bottom,
          &${u}-slide-down-appear${u}-slide-down-appear-active${t}-placement-bottom,
          &${u}-slide-down-enter${u}-slide-down-enter-active${t}-placement-bottomRight,
          &${u}-slide-down-appear${u}-slide-down-appear-active${t}-placement-bottomRight`]:{animationName:l.slideUpIn},[`&${u}-slide-up-enter${u}-slide-up-enter-active${t}-placement-topLeft,
          &${u}-slide-up-appear${u}-slide-up-appear-active${t}-placement-topLeft,
          &${u}-slide-up-enter${u}-slide-up-enter-active${t}-placement-top,
          &${u}-slide-up-appear${u}-slide-up-appear-active${t}-placement-top,
          &${u}-slide-up-enter${u}-slide-up-enter-active${t}-placement-topRight,
          &${u}-slide-up-appear${u}-slide-up-appear-active${t}-placement-topRight`]:{animationName:l.slideDownIn},[`&${u}-slide-down-leave${u}-slide-down-leave-active${t}-placement-bottomLeft,
          &${u}-slide-down-leave${u}-slide-down-leave-active${t}-placement-bottom,
          &${u}-slide-down-leave${u}-slide-down-leave-active${t}-placement-bottomRight`]:{animationName:l.slideUpOut},[`&${u}-slide-up-leave${u}-slide-up-leave-active${t}-placement-topLeft,
          &${u}-slide-up-leave${u}-slide-up-leave-active${t}-placement-top,
          &${u}-slide-up-leave${u}-slide-up-leave-active${t}-placement-topRight`]:{animationName:l.slideDownOut}})},(0,i.default)(e,y,{arrowPlacement:{top:!0,bottom:!0}}),{[`${t} ${n}`]:{position:"relative",margin:0},[`${n}-submenu-popup`]:{position:"absolute",zIndex:o,background:"transparent",boxShadow:"none",transformOrigin:"0 0","ul, li":{listStyle:"none",margin:0}},[`${t}, ${t}-menu-submenu`]:{[n]:Object.assign(Object.assign({padding:g,listStyleType:"none",backgroundColor:y,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary},(0,a.genFocusStyle)(e)),{"&:empty":{padding:0,boxShadow:"none"},[`${n}-item-group-title`]:{padding:`${(0,c.unit)(m)} ${(0,c.unit)(h)}`,color:e.colorTextDescription,transition:`all ${p}`},[`${n}-item`]:{position:"relative",display:"flex",alignItems:"center"},[`${n}-item-icon`]:{minWidth:f,marginInlineEnd:e.marginXS,fontSize:e.fontSizeSM},[`${n}-title-content`]:{flex:"auto","> a":{color:"inherit",transition:`all ${p}`,"&:hover":{color:"inherit"},"&::after":{position:"absolute",inset:0,content:'""'}}},[`${n}-item, ${n}-submenu-title`]:Object.assign(Object.assign({clear:"both",margin:0,padding:`${(0,c.unit)(m)} ${(0,c.unit)(h)}`,color:e.colorText,fontWeight:"normal",fontSize:f,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${p}`,borderRadius:e.borderRadiusSM,"&:hover, &-active":{backgroundColor:e.controlItemBgHover}},(0,a.genFocusStyle)(e)),{"&-selected":{color:e.colorPrimary,backgroundColor:e.controlItemBgActive,"&:hover, &-active":{backgroundColor:e.controlItemBgActiveHover}},"&-disabled":{color:b,cursor:"not-allowed","&:hover":{color:b,backgroundColor:y,cursor:"not-allowed"},a:{pointerEvents:"none"}},"&-divider":{height:1,margin:`${(0,c.unit)(e.marginXXS)} 0`,overflow:"hidden",lineHeight:0,backgroundColor:e.colorSplit},[`${t}-menu-submenu-expand-icon`]:{position:"absolute",insetInlineEnd:e.paddingXS,[`${t}-menu-submenu-arrow-icon`]:{marginInlineEnd:"0 !important",color:e.colorTextDescription,fontSize:v,fontStyle:"normal"}}}),[`${n}-item-group-list`]:{margin:`0 ${(0,c.unit)(e.marginXS)}`,padding:0,listStyle:"none"},[`${n}-submenu-title`]:{paddingInlineEnd:e.calc(h).add(e.fontSizeSM).equal()},[`${n}-submenu-vertical`]:{position:"relative"},[`${n}-submenu${n}-submenu-disabled ${t}-menu-submenu-title`]:{[`&, ${t}-menu-submenu-arrow-icon`]:{color:b,backgroundColor:y,cursor:"not-allowed"}},[`${n}-submenu-selected ${t}-menu-submenu-title`]:{color:e.colorPrimary}})}},[(0,l.initSlideMotion)(e,"slide-up"),(0,l.initSlideMotion)(e,"slide-down"),(0,l.initMoveMotion)(e,"move-up"),(0,l.initMoveMotion)(e,"move-down"),(0,l.initZoomMotion)(e,"zoom-big")]]},prepareComponentToken=e=>Object.assign(Object.assign({zIndexPopup:e.zIndexPopupBase+50,paddingBlock:(e.controlHeight-e.fontSize*e.lineHeight)/2},(0,i.getArrowOffsetToken)({contentRadius:e.borderRadiusLG,limitVerticalRadius:!0})),(0,d.getArrowToken)(e));t.prepareComponentToken=prepareComponentToken,t.default=(0,s.genStyleHooks)("Dropdown",e=>{let{marginXXS:t,sizePopupArrow:n,paddingXXS:o,componentCls:r}=e,a=(0,s.mergeToken)(e,{menuCls:`${r}-menu`,dropdownArrowDistance:e.calc(n).div(2).add(t).equal(),dropdownEdgeChildPadding:o});return[genBaseStyle(a),(0,u.default)(a)]},prepareComponentToken)},38203:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=e=>{let{componentCls:t,menuCls:n,colorError:o,colorTextLightSolid:r}=e,a=`${n}-item`;return{[`${t}, ${t}-menu-submenu`]:{[`${n} ${a}`]:{[`&${a}-danger:not(${a}-disabled)`]:{color:o,"&:hover":{color:r,backgroundColor:o}}}}}}},29171:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var o=n(87462),r=n(4942),a=n(97685),l=n(45987),i=n(50811),s=n(93967),u=n.n(s),d=n(42550),c=n(67294),p=n(15105),m=n(75164),f=p.Z.ESC,g=p.Z.TAB,b=(0,c.forwardRef)(function(e,t){var n=e.overlay,o=e.arrow,r=e.prefixCls,a=(0,c.useMemo)(function(){return"function"==typeof n?n():n},[n]),l=(0,d.sQ)(t,null==a?void 0:a.ref);return c.createElement(c.Fragment,null,o&&c.createElement("div",{className:"".concat(r,"-arrow")}),c.cloneElement(a,{ref:(0,d.Yr)(a)?l:void 0}))}),v={adjustX:1,adjustY:1},h=[0,0],y={topLeft:{points:["bl","tl"],overflow:v,offset:[0,-4],targetOffset:h},top:{points:["bc","tc"],overflow:v,offset:[0,-4],targetOffset:h},topRight:{points:["br","tr"],overflow:v,offset:[0,-4],targetOffset:h},bottomLeft:{points:["tl","bl"],overflow:v,offset:[0,4],targetOffset:h},bottom:{points:["tc","bc"],overflow:v,offset:[0,4],targetOffset:h},bottomRight:{points:["tr","br"],overflow:v,offset:[0,4],targetOffset:h}},$=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus","overlay","children","onVisibleChange"],C=c.forwardRef(function(e,t){var n,s,p,v,h,C,w,O,S,k,j,E,x,P,_=e.arrow,I=void 0!==_&&_,M=e.prefixCls,T=void 0===M?"rc-dropdown":M,N=e.transitionName,R=e.animation,B=e.align,D=e.placement,z=e.placements,A=e.getPopupContainer,L=e.showAction,X=e.hideAction,H=e.overlayClassName,F=e.overlayStyle,V=e.visible,W=e.trigger,Z=void 0===W?["hover"]:W,U=e.autoFocus,q=e.overlay,Y=e.children,G=e.onVisibleChange,K=(0,l.Z)(e,$),Q=c.useState(),J=(0,a.Z)(Q,2),ee=J[0],et=J[1],en="visible"in e?V:ee,eo=c.useRef(null),er=c.useRef(null),ea=c.useRef(null);c.useImperativeHandle(t,function(){return eo.current});var handleVisibleChange=function(e){et(e),null==G||G(e)};s=(n={visible:en,triggerRef:ea,onVisibleChange:handleVisibleChange,autoFocus:U,overlayRef:er}).visible,p=n.triggerRef,v=n.onVisibleChange,h=n.autoFocus,C=n.overlayRef,w=c.useRef(!1),O=function(){if(s){var e,t;null===(e=p.current)||void 0===e||null===(t=e.focus)||void 0===t||t.call(e),null==v||v(!1)}},S=function(){var e;return null!==(e=C.current)&&void 0!==e&&!!e.focus&&(C.current.focus(),w.current=!0,!0)},k=function(e){switch(e.keyCode){case f:O();break;case g:var t=!1;w.current||(t=S()),t?e.preventDefault():O()}},c.useEffect(function(){return s?(window.addEventListener("keydown",k),h&&(0,m.Z)(S,3),function(){window.removeEventListener("keydown",k),w.current=!1}):function(){w.current=!1}},[s]);var getMenuElement=function(){return c.createElement(b,{ref:er,overlay:q,prefixCls:T,arrow:I})},el=c.cloneElement(Y,{className:u()(null===(P=Y.props)||void 0===P?void 0:P.className,en&&(void 0!==(j=e.openClassName)?j:"".concat(T,"-open"))),ref:(0,d.Yr)(Y)?(0,d.sQ)(ea,Y.ref):void 0}),ei=X;return ei||-1===Z.indexOf("contextMenu")||(ei=["click"]),c.createElement(i.Z,(0,o.Z)({builtinPlacements:void 0===z?y:z},K,{prefixCls:T,ref:eo,popupClassName:u()(H,(0,r.Z)({},"".concat(T,"-show-arrow"),I)),popupStyle:F,action:Z,showAction:L,hideAction:ei,popupPlacement:void 0===D?"bottomLeft":D,popupAlign:B,popupTransitionName:N,popupAnimation:R,popupVisible:en,stretch:(E=e.minOverlayWidthMatchTrigger,x=e.alignPoint,"minOverlayWidthMatchTrigger"in e?E:!x)?"minWidth":"",popup:"function"==typeof q?getMenuElement:getMenuElement(),onPopupVisibleChange:handleVisibleChange,onPopupClick:function(t){var n=e.onOverlayClick;et(!1),n&&n(t)},getPopupContainer:A}),el)})},30339:function(e,t,n){var o=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t=!1===n?{aria:!0,data:!0,attr:!0}:!0===n?{aria:!0}:(0,r.default)({},n);var o={};return Object.keys(e).forEach(function(n){(t.aria&&("role"===n||match(n,"aria-"))||t.data&&match(n,"data-")||t.attr&&a.includes(n))&&(o[n]=e[n])}),o};var r=o(n(42122)),a="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/);function match(e,t){return 0===e.indexOf(t)}}}]);