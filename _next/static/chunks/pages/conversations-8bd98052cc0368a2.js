(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[960],{75118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/conversations",function(){return n(37243)}])},23761:function(e,t,n){"use strict";var i=n(83454),l=n(5121);let{BACKEND_ENDPOINT:s}=i.env,a=l.Z.create({baseURL:null!=s?s:"http://localhost:4000"});t.Z=a},37243:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return conversations}});var i,l,s,a,r,c,o=n(85893),h=n(67294),_=n(68672),k=n(65400),S=n.n(k),m=n(74253),d=n(11187),u=n(74048),f=n(20838),p=n(28465),v=n(51024),g=n(64749),H=n(2307),T=n(24342),I=n(46403),w=n(37656);let formatUnixTimestamp=e=>{let t=new Date(e),n=("0"+t.getDate()).slice(-2),i=("0"+(t.getMonth()+1)).slice(-2),l=t.getFullYear(),s=("0"+t.getHours()).slice(-2),a=("0"+t.getMinutes()).slice(-2);return n+"-"+i+"-"+l+" "+s+":"+a};function calculateResultPercentages(e){let t={Incorrect:0,Satisfactory:0,"Needs Improvement":0,ToDo:0};for(let n=0;n<e.length;n++)e[n].result?t[e[n].result]++:t.ToDo++;let n=e.length;return{Incorrect:t.Incorrect/n*100,Satisfactory:t.Satisfactory/n*100,"Needs Improvement":t["Needs Improvement"]/n*100,ToDo:t.ToDo/n*100}}var conversationTimeLine=e=>{let{conversation:t}=e,n=[];return t.forEach(e=>{n.push({label:formatUnixTimestamp(e.TIMESTAMP),children:(0,o.jsx)("p",{dangerouslySetInnerHTML:{__html:e.USER.replace(/\n/g,"<br/>")}}),color:"blue",dot:(0,o.jsx)(I.Z,{})}),n.push({label:formatUnixTimestamp(e.TIMESTAMP),children:(0,o.jsx)("p",{dangerouslySetInnerHTML:{__html:e.BOT.replace(/\n/g,"<br/>")}}),color:"green",dot:(0,o.jsx)(T.Z,{})})}),(0,o.jsx)("div",{children:(0,o.jsx)(w.Z,{mode:"left",items:n})})};function TextDisplay(e){let{text:t,maxWordsPerLine:n}=e,i=function(e,t){let n=e.split(" "),i=[];for(let e=0;e<n.length;e+=t)i.push(n.slice(e,e+t).join(" "));return i}(t,n);return(0,o.jsx)("div",{children:i.map((e,t)=>(0,o.jsxs)(h.Fragment,{children:[e,(0,o.jsx)("br",{})]},t))})}var userUtteranceDisplay=e=>{let{text:t,maxWordsPerLine:n}=e;return(0,o.jsx)(TextDisplay,{text:t,maxWordsPerLine:n})};(i=a||(a={})).CURRENT="Current",i.CURRENT_ADD_UTTERANCE="Current - Add Utterance",i.IN_PROGRESS="In Progress",i.TO_DO="To Do",i.WONT_FIX="Won't Fix",(l=r||(r={})).SATISFACTORY="Satisfactory",l.NEEDS_IMPROVEMENT="Needs Improvement",l.INCORRECT="Incorrect",(s=c||(c={})).RESPONSE_TEXT="Response Text",s.INTENT_MAPPING="Intent Mapping",s.FOLLOW_UP="Follow Up",s.ADD_INTENT="New Intent";var y=JSON.parse('[{"skill":"FAQsDemo","intent":"faq.ans.clearReview.access"},{"skill":"FAQsDemo","intent":"faq.ans.clearReview.attachments"},{"skill":"FAQsDemo","intent":"faq.ans.clearReview.notifications"},{"skill":"FAQsDemo","intent":"faq.ans.clearReview.recording"},{"skill":"FAQsDemo","intent":"faq.ans.endOfYear.anonymousFeedback"},{"skill":"FAQsDemo","intent":"faq.ans.endOfYear.ratingNewJoiners"},{"skill":"FAQsDemo","intent":"faq.ans.endOfYear.ratingWeight"},{"skill":"FAQsDemo","intent":"faq.ans.endOfYear.values"},{"skill":"FAQsDemo","intent":"faq.ans.feedback.proactively"},{"skill":"FAQsDemo","intent":"faq.ans.feedback.request"},{"skill":"FAQsDemo","intent":"faq.ans.goal.manager.cascadeTeam"},{"skill":"FAQsDemo","intent":"faq.ans.goals.indirectReport"},{"skill":"Sch_Absence_Policies","intent":"buyAndSell"},{"skill":"Sch_Absence_Policies","intent":"cancelLeave"},{"skill":"Sch_Absence_Policies","intent":"carryOver"},{"skill":"Sch_Absence_Policies","intent":"juryService"},{"skill":"Sch_Absence_Policies","intent":"leaveBalanceWrong"},{"skill":"Sch_Absence_Policies","intent":"maternityLeave"},{"skill":"Sch_Absence_Policies","intent":"militaryService"},{"skill":"Sch_Absence_Policies","intent":"paidLeave"},{"skill":"Sch_Absence_Policies","intent":"paternityLeave"},{"skill":"Sch_Absence_Policies","intent":"sabbaticalLeave"},{"skill":"Sch_Absence_Policies","intent":"sickLeave"},{"skill":"Sch_Absence_Policies","intent":"specialLeave"},{"skill":"Sch_Absence_Policies","intent":"statutoryHolidays"},{"skill":"Sch_Approvals","intent":"Approval Actions"},{"skill":"Sch_Approvals","intent":"Task Submission Status"},{"skill":"Sch_Benefits","intent":"benefitOptionUnavailable"},{"skill":"Sch_Benefits","intent":"benefitsOffered"},{"skill":"Sch_Benefits","intent":"changeMyBenefits"},{"skill":"Sch_Benefits","intent":"dependents"},{"skill":"Sch_Benefits","intent":"healthAssessment"},{"skill":"Sch_Benefits","intent":"healthInsuranceProvider"},{"skill":"Sch_Benefits","intent":"optionsSelectionPeriod"},{"skill":"Sch_Benefits","intent":"pensionTransferring"},{"skill":"Sch_Benefits","intent":"pensions"},{"skill":"Sch_Benefits","intent":"pensionsForLeavers"},{"skill":"Sch_Benefits","intent":"sabbatical"},{"skill":"Sch_Benefits","intent":"viewMyBenefits"},{"skill":"Sch_Custom","intent":"absence.create.self"},{"skill":"Sch_Custom","intent":"expenses.deepLink"},{"skill":"Sch_Custom","intent":"feedback.negative"},{"skill":"Sch_Custom","intent":"feedback.positive"},{"skill":"Sch_Custom","intent":"feedback.suggestion"},{"skill":"Sch_Custom","intent":"impersonate.testUser"},{"skill":"Sch_Custom","intent":"oda.howToMove"},{"skill":"Sch_Custom","intent":"payslip.view.self"},{"skill":"Sch_Custom","intent":"personNumber.view.self"},{"skill":"Sch_Custom","intent":"timeSheet.manage.self"},{"skill":"Sch_HR_Policies","intent":"P60"},{"skill":"Sch_HR_Policies","intent":"POE"},{"skill":"Sch_HR_Policies","intent":"deferredQueries"},{"skill":"Sch_HR_Policies","intent":"diversityProfile"},{"skill":"Sch_HR_Policies","intent":"dutyOfCare"},{"skill":"Sch_HR_Policies","intent":"finance.helpdesk"},{"skill":"Sch_HR_Policies","intent":"finance.issue"},{"skill":"Sch_HR_Policies","intent":"generalEnquiries"},{"skill":"Sch_HR_Policies","intent":"helpdesk"},{"skill":"Sch_HR_Policies","intent":"hrPolicies"},{"skill":"Sch_HR_Policies","intent":"internalVacancies"},{"skill":"Sch_HR_Policies","intent":"overtime"},{"skill":"Sch_HR_Policies","intent":"password"},{"skill":"Sch_HR_Policies","intent":"performance"},{"skill":"Sch_HR_Policies","intent":"performanceFeedback"},{"skill":"Sch_HR_Policies","intent":"performanceGoals"},{"skill":"Sch_HR_Policies","intent":"referralSchema"},{"skill":"Sch_HR_Policies","intent":"resign"},{"skill":"Sch_HR_Policies","intent":"sendsafely"},{"skill":"Sch_HR_Policies","intent":"tax"},{"skill":"Sch_HR_Policies","intent":"techlink"},{"skill":"Sch_HR_Policies","intent":"travelPolicy"},{"skill":"Sch_HR_Policies","intent":"whistleblow"},{"skill":"Sch_HcmV2","intent":"absenceForDuration.view.self"},{"skill":"Sch_HcmV2","intent":"absenceFuture.view.self"},{"skill":"Sch_HcmV2","intent":"absencePast.view.self"},{"skill":"Sch_HcmV2","intent":"assignment.add.others"},{"skill":"Sch_HcmV2","intent":"assignment.manage.others"},{"skill":"Sch_HcmV2","intent":"assignment.manage.self"},{"skill":"Sch_HcmV2","intent":"assignment.view.self"},{"skill":"Sch_HcmV2","intent":"contactInfo.manage.others"},{"skill":"Sch_HcmV2","intent":"contactInfo.manage.self"},{"skill":"Sch_HcmV2","intent":"department.manage.self"},{"skill":"Sch_HcmV2","intent":"department.view.self"},{"skill":"Sch_HcmV2","intent":"directReports.manage.self"},{"skill":"Sch_HcmV2","intent":"email.manage.other"},{"skill":"Sch_HcmV2","intent":"email.view.self"},{"skill":"Sch_HcmV2","intent":"emergencyContacts.manage.others"},{"skill":"Sch_HcmV2","intent":"emergencyContacts.manage.self"},{"skill":"Sch_HcmV2","intent":"emergencyContacts.view.others"},{"skill":"Sch_HcmV2","intent":"emergencyContacts.view.self"},{"skill":"Sch_HcmV2","intent":"hire.worker"},{"skill":"Sch_HcmV2","intent":"hiredate.manage.others"},{"skill":"Sch_HcmV2","intent":"hiredate.manage.self"},{"skill":"Sch_HcmV2","intent":"hiredate.view.others"},{"skill":"Sch_HcmV2","intent":"hiredate.view.self"},{"skill":"Sch_HcmV2","intent":"job.manage.others"},{"skill":"Sch_HcmV2","intent":"job.manage.self"},{"skill":"Sch_HcmV2","intent":"job.view.self"},{"skill":"Sch_HcmV2","intent":"location.manage.other"},{"skill":"Sch_HcmV2","intent":"location.view.self"},{"skill":"Sch_HcmV2","intent":"manager.actions"},{"skill":"Sch_HcmV2","intent":"manager.manage.others"},{"skill":"Sch_HcmV2","intent":"manager.manage.self"},{"skill":"Sch_HcmV2","intent":"manager.view.self"},{"skill":"Sch_HcmV2","intent":"nickname.manage.others"},{"skill":"Sch_HcmV2","intent":"nickname.manage.self"},{"skill":"Sch_HcmV2","intent":"nickname.view.self"},{"skill":"Sch_HcmV2","intent":"onboarding.view.others"},{"skill":"Sch_HcmV2","intent":"paymentMethod.view.self"},{"skill":"Sch_HcmV2","intent":"payslip.view.others"},{"skill":"Sch_HcmV2","intent":"personalInfo.manage.self"},{"skill":"Sch_HcmV2","intent":"phone.manage.other"},{"skill":"Sch_HcmV2","intent":"phone.manage.self"},{"skill":"Sch_HcmV2","intent":"phone.view.self"},{"skill":"Sch_HcmV2","intent":"photo.manage.others"},{"skill":"Sch_HcmV2","intent":"photo.view.others"},{"skill":"Sch_HcmV2","intent":"photo.view.self"},{"skill":"Sch_HcmV2","intent":"representatives.manage.others"},{"skill":"Sch_HcmV2","intent":"representatives.manage.self"},{"skill":"Sch_HcmV2","intent":"salary.manage.others"},{"skill":"Sch_HcmV2","intent":"salary.manage.self"},{"skill":"Sch_HcmV2","intent":"salary.view.self"},{"skill":"Sch_HcmV2","intent":"taxDocuments.view.others"},{"skill":"Sch_HcmV2","intent":"terminate.worker"},{"skill":"Sch_HcmV2","intent":"transfer.worker"},{"skill":"Sch_HcmV2","intent":"workingHours.manage.others"},{"skill":"Sch_Hcm_Overrides","intent":"absenceBalance.view.others"},{"skill":"Sch_Hcm_Overrides","intent":"absenceBalance.view.self"},{"skill":"Sch_Hcm_Overrides","intent":"absenceForDuration.view.others"},{"skill":"Sch_Hcm_Overrides","intent":"absenceFuture.view.others"},{"skill":"Sch_Hcm_Overrides","intent":"absencePast.view.others"},{"skill":"Sch_Hcm_Overrides","intent":"assignment.view.other"},{"skill":"Sch_Hcm_Overrides","intent":"contactInfo.view.others"},{"skill":"Sch_Hcm_Overrides","intent":"contactInfo.view.self"},{"skill":"Sch_Hcm_Overrides","intent":"department.view.others"},{"skill":"Sch_Hcm_Overrides","intent":"directReports.view.others"},{"skill":"Sch_Hcm_Overrides","intent":"directReports.view.self"},{"skill":"Sch_Hcm_Overrides","intent":"email.manage.self"},{"skill":"Sch_Hcm_Overrides","intent":"email.view.other"},{"skill":"Sch_Hcm_Overrides","intent":"job.view.other"},{"skill":"Sch_Hcm_Overrides","intent":"location.manage.self"},{"skill":"Sch_Hcm_Overrides","intent":"location.view.others"},{"skill":"Sch_Hcm_Overrides","intent":"manager.view.others"},{"skill":"Sch_Hcm_Overrides","intent":"phone.view.other"},{"skill":"Sch_Hcm_Overrides","intent":"photo.manage.self"},{"skill":"Sch_Hcm_Overrides","intent":"representatives.view.others"},{"skill":"Sch_Hcm_Overrides","intent":"representatives.view.self"},{"skill":"Sch_Hcm_Overrides","intent":"salary.view.others"},{"skill":"Sch_Skills_and_Qualifications","intent":"careerCoaches"},{"skill":"Sch_Skills_and_Qualifications","intent":"cfaAndFitchLearning"},{"skill":"Sch_Skills_and_Qualifications","intent":"examReSits"},{"skill":"Sch_Skills_and_Qualifications","intent":"executiveAndAdvancedEducation"},{"skill":"Sch_Skills_and_Qualifications","intent":"mandatoryLearning.others"},{"skill":"Sch_Skills_and_Qualifications","intent":"mandatoryLearning.self"},{"skill":"Sch_Skills_and_Qualifications","intent":"membershipAndSubscriptions"},{"skill":"Sch_Skills_and_Qualifications","intent":"mentoring"},{"skill":"Sch_Skills_and_Qualifications","intent":"professionalQualificationSponsorship"},{"skill":"Sch_Skills_and_Qualifications","intent":"studyLeave"},{"skill":"Sch_Skills_and_Qualifications","intent":"teamDevelopmentDays"},{"skill":"Sch_Spark","intent":"authenticationSpark"},{"skill":"Sch_Spark","intent":"bookCourse"},{"skill":"Sch_Spark","intent":"cdp"},{"skill":"Sch_Spark","intent":"howToUseSpark"},{"skill":"Sch_Spark","intent":"informationContact"},{"skill":"Sch_Spark","intent":"managementCourses"},{"skill":"Sch_Spark","intent":"payment"},{"skill":"Sch_Spark","intent":"pendingRequestSpark"},{"skill":"Sch_Welfare","intent":"employeeAssistanceProgram"},{"skill":"Sch_Welfare","intent":"eyeCareVoucher"},{"skill":"Sch_Welfare","intent":"mentalHealth"},{"skill":"Sch_Welfare","intent":"onsiteDoctor"},{"skill":"SmallTalk","intent":"SMALLTALK_RichMessage"},{"skill":"SmallTalk","intent":"answer.date"},{"skill":"SmallTalk","intent":"answer.goodbye"},{"skill":"SmallTalk","intent":"answer.howAreYou"},{"skill":"SmallTalk","intent":"answer.human"},{"skill":"SmallTalk","intent":"answer.jokes"},{"skill":"SmallTalk","intent":"answer.meaningOfLife"},{"skill":"SmallTalk","intent":"answer.time"},{"skill":"SmallTalk","intent":"answer.weather"},{"skill":"SmallTalk","intent":"answer.whatsYourName"},{"skill":"UnresolvedHandler","intent":"unresolvedIntent"}]');let filterOption=(e,t)=>{var n;return(null!==(n=null==t?void 0:t.label)&&void 0!==n?n:"").toLowerCase().includes(e.toLowerCase())};var conversationDesign=e=>{let{analysis:t,updateHandler:n}=e,i=[{title:"Key",key:"key",dataIndex:"key",filters:t.map(e=>({text:e.key.toString(),value:e.key})),filterSearch:!0,onFilter:(e,t)=>t.USER_ID==e},{title:"User ID",key:"USER_ID",dataIndex:"USER_ID",sorter:(e,t)=>e.USER_ID.localeCompare(t.USER_ID),render:e=>e.replace(/_.*/,""),filters:t.filter((e,t,n)=>n.findIndex(t=>t.USER_ID===e.USER_ID)===t).map(e=>({text:e.USER_ID.replace(/_.*/,""),value:e.USER_ID})),filterSearch:!0,onFilter:(e,t)=>t.USER_ID.includes(e)},{title:"User Utterance",key:"USER_UTTERANCE",dataIndex:"USER_UTTERANCE",sorter:(e,t)=>e.USER_UTTERANCE.localeCompare(t.USER_UTTERANCE),render:e=>(0,o.jsx)(userUtteranceDisplay,{text:e,maxWordsPerLine:6})},{title:"Intent",key:"INTENT",dataIndex:"INTENT",sorter:(e,t)=>e.INTENT.localeCompare(t.INTENT),filters:t.filter((e,t,n)=>n.findIndex(t=>t.SKILL===e.SKILL&&t.INTENT===e.INTENT)===t).map(e=>({text:e.INTENT,value:e.INTENT})),filterSearch:!0,onFilter:(e,t)=>t.INTENT.includes(e)},{title:"Skill",key:"SKILL",dataIndex:"SKILL",sorter:(e,t)=>e.INTENT.localeCompare(t.INTENT),filters:t.filter((e,t,n)=>n.findIndex(t=>t.SKILL===e.SKILL)===t).map(e=>({text:e.SKILL,value:e.SKILL})),filterSearch:!0,onFilter:(e,t)=>t.SKILL.includes(e)},{title:"TIMESTAMP",key:"TIMESTAMP",dataIndex:"TIMESTAMP",sorter:(e,t)=>e.TIMESTAMP-t.TIMESTAMP,render:e=>formatUnixTimestamp(e)},{title:"Result",key:"result",dataIndex:"result",render:(e,t)=>(0,o.jsx)(g.default,{value:e,showSearch:!0,placeholder:"result",filterOption:filterOption,options:Object.entries(r).map(e=>{let[t,n]=e;return{label:n,value:n}}),onChange:e=>n(t.key,"result",e)}),filters:Object.entries(r).map(e=>{let[t,n]=e;return{text:n,value:n}}),filterSearch:!0,onFilter:(e,t)=>t.result&&t.result.includes(e)},{title:"Issue Type",key:"issue_type",dataIndex:"issue_type",render:(e,t)=>(0,o.jsx)(g.default,{showSearch:!0,placeholder:"issue_type",filterOption:filterOption,options:Object.entries(c).map(e=>{let[t,n]=e;return{label:n,value:n}}),onChange:e=>{n(t.key,"issue_type",e)},disabled:t.result==r.SATISFACTORY,value:e})},{title:"User Intent",key:"user_intent",dataIndex:"user_intent",render:(e,t)=>t.result==r.SATISFACTORY?(0,o.jsx)("div",{children:e}):(0,o.jsx)(g.default,{showSearch:!0,placeholder:"select user intent",value:e,onChange:e=>{n(t.key,"user_intent",e)},options:y.map(e=>({label:e.intent,value:e.intent}))})},{title:"Associated Skill",key:"associated_skill",dataIndex:"associated_skill"},{title:"Notes",key:"notes",dataIndex:"notes",render:(e,t)=>(0,o.jsx)(v.default,{value:e,onChange:e=>n(t.key,"notes",e.target.value)})}];return(0,o.jsx)(H.Z,{columns:i,dataSource:t,scroll:{x:"max-content"},expandable:{expandedRowRender:e=>(0,o.jsx)(conversationTimeLine,{conversation:e.conversation})}})},R=n(34212),x=n(29790),b=n(30744),P=n(65132),E=n(35855);let A=[{title:"Skill",dataIndex:"skill",key:"skill",sorter:(e,t)=>e.skill.localeCompare(t.skill)},{title:"Intent",dataIndex:"intent",key:"intent",sorter:(e,t)=>e.intent.localeCompare(t.intent)}];var references=e=>{let{data:t}=e;return(0,o.jsx)(H.Z,{columns:A,dataSource:t,scroll:{y:"max-content"}})};n(23761);var N=n(11163),O=n(23148),j=n(26495);O.kL.register(O.qi,O.u,O.De);var resolutionRate=e=>{let{resultPercentages:t}=e,n=[],i=[];for(let e in t)n.push(e),i.push(t[e]);return(0,o.jsxs)("div",{children:[(0,o.jsxs)(_.Z,{style:{margin:"16px 0"},children:[(0,o.jsx)(_.Z.Item,{children:"Analysis"}),(0,o.jsx)(_.Z.Item,{children:"Resolution Rate"})]}),(0,o.jsx)("div",{style:{height:"90vh"},children:(0,o.jsx)(j.$I,{data:{labels:n,datasets:[{label:"percentage",data:i,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(75, 192, 192, 0.2)","rgba(255, 159, 64, 0.2)","rgba(54, 162, 235, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(75, 192, 192, 1)","rgba(255, 159, 64, 1)","rgba(54, 162, 235, 1)"],borderWidth:1}]}})})]})},conversations=()=>{let[e,t]=(0,h.useState)([]),[n,i]=(0,h.useState)([]);(0,h.useEffect)(()=>{},[]);let handleRouteChange=(e,t)=>{let{shallow:n}=t;if(window.confirm("Are you sure you want to leave this page?"));else throw N.Router.events.emit("routeChangeError"),"Route cancelled."};return(0,h.useEffect)(()=>(N.Router.events.on("routeChangeStart",handleRouteChange),()=>{N.Router.events.off("routeChangeStart",handleRouteChange)}),[]),(0,o.jsxs)("div",{children:[(0,o.jsxs)(_.Z,{style:{margin:"16px 0"},children:[(0,o.jsx)(_.Z.Item,{children:"Conversations"}),(0,o.jsx)(_.Z.Item,{children:"Analytics"})]}),(0,o.jsx)(m.Z,{}),(0,o.jsxs)(u.default,{children:[(0,o.jsx)(p.Z,{beforeUpload:e=>{let t=new FileReader;return t.onload=e=>{try{let t=JSON.parse(e.target.result);i(t.map((e,t)=>({...e,key:t}))),d.ZP.success("File uploaded successfully!")}catch(e){d.ZP.error("Error parsing JSON. Please upload a valid JSON file.")}},t.readAsText(e),!1},showUploadList:!1,accept:".json",children:(0,o.jsx)(S(),{icon:(0,o.jsx)(E.Z,{}),children:"Upload JSON"})}),(0,o.jsx)(S(),{icon:(0,o.jsx)(b.default,{}),onClick:()=>{if(n){let e=JSON.stringify(n,null,2),t=new Blob([e],{type:"application/json"}),i=URL.createObjectURL(t),l=document.createElement("a");l.href=i,l.download="analysis.json",l.click(),URL.revokeObjectURL(i)}else d.ZP.warning("No data to download. Please upload a JSON file first.")},children:"Download JSON"})]}),(0,o.jsx)(m.Z,{dashed:!0}),(0,o.jsx)(f.default,{tabPosition:"right",items:[{key:"conversation_design",label:"",children:(0,o.jsx)(conversationDesign,{analysis:n,updateHandler:(e,t,l)=>{let s=[...n],a=s.findIndex(t=>t.key===e);-1!==a&&(s[a][t]=l),s[a].result===r.SATISFACTORY&&(s[a].user_intent=s[a].INTENT),s[a].INTENT===s[a].user_intent&&(s[a].associated_skill=s[a].SKILL);let c=y.find(e=>e.intent===s[a].user_intent);s[a].associated_skill=c?c.skill:null,i(s),console.log(calculateResultPercentages(s))}}),icon:(0,o.jsx)(R.Z,{})},{key:"reference",label:"",children:(0,o.jsx)(references,{data:y.map((e,t)=>({...e,key:t}))}),icon:(0,o.jsx)(P.Z,{})},{key:"charts",label:"",children:(0,o.jsx)(resolutionRate,{resultPercentages:calculateResultPercentages(n)}),icon:(0,o.jsx)(x.default,{})}]})]})}}},function(e){e.O(0,[196,672,945,121,853,307,470,856,774,888,179],function(){return e(e.s=75118)}),_N_E=e.O()}]);