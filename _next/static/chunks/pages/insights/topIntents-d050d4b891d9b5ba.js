(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[79],{15414:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/insights/topIntents",function(){return n(97558)}])},28586:function(t,e,n){"use strict";n.d(e,{IG:function(){return getDailySessions},fJ:function(){return getNegativeFeedbackConversations},hO:function(){return getSessionsPerCountry},lb:function(){return getTopIntents},vg:function(){return getPercentagePerCountry}});var r=n(23761);let getDailySessions=async()=>{try{let{data:t}=await r.Z.get("/insights/dailySessions");return t}catch(n){var t,e;return null!==(e=null==n?void 0:null===(t=n.response)||void 0===t?void 0:t.data)&&void 0!==e?e:null}},getSessionsPerCountry=async()=>{try{let{data:t}=await r.Z.get("/insights/sessionsPerCountry");return t}catch(n){var t,e;return null!==(e=null==n?void 0:null===(t=n.response)||void 0===t?void 0:t.data)&&void 0!==e?e:null}},getPercentagePerCountry=async()=>{try{let{data:t}=await r.Z.get("/insights/percentagePerCountry");return t}catch(n){var t,e;return null!==(e=null==n?void 0:null===(t=n.response)||void 0===t?void 0:t.data)&&void 0!==e?e:null}},getTopIntents=async()=>{try{let{data:t}=await r.Z.get("/insights/topIntents");return t}catch(n){var t,e;return null!==(e=null==n?void 0:null===(t=n.response)||void 0===t?void 0:t.data)&&void 0!==e?e:null}},getNegativeFeedbackConversations=async()=>{try{let{data:t}=await r.Z.get("/insights/negativeFeedback");return t}catch(n){var t,e;return null!==(e=null==n?void 0:null===(t=n.response)||void 0===t?void 0:t.data)&&void 0!==e?e:null}}},23761:function(t,e,n){"use strict";var r=n(83454),s=n(5121);let{BACKEND_ENDPOINT:a}=r.env,i=s.Z.create({baseURL:null!=a?a:"http://localhost:4000"});e.Z=i},97558:function(t,e,n){"use strict";n.r(e);var r=n(85893),s=n(67294),a=n(28586),i=n(26495),l=n(23148),o=n(68672);l.kL.register(l.uw,l.f$,l.qi,l.jn,l.od,l.ZL,l.u),e.default=()=>{let[t,e]=(0,s.useState)({labels:[],datasets:[{label:[],data:[],borderWidth:1}]});return(0,s.useEffect)(()=>{let fetchData=async()=>{let{success:t,data:n,message:r}=await (0,a.lb)();if(t){let t=Object.keys(n),s=Object.values(n);e({labels:t,datasets:[{label:r,data:s,backgroundColor:"rgba(54, 162, 235, 0.2)",borderColor:"rgba(54, 162, 235, 1)"}],borderWidth:1})}else e({})};fetchData()},[]),(0,r.jsxs)("div",{children:[(0,r.jsxs)(o.Z,{style:{margin:"16px 0"},children:[(0,r.jsx)(o.Z.Item,{children:"Analysis"}),(0,r.jsx)(o.Z.Item,{children:"Top Intents"})]}),(0,r.jsx)(i.$Q,{data:t,options:{responsive:!0,plugins:{tooltip:{enabled:!0}},scales:{y:{beginAtZero:!0}}}})]})}}},function(t){t.O(0,[196,672,121,853,774,888,179],function(){return t(t.s=15414)}),_N_E=t.O()}]);