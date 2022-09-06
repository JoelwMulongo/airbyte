"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[5862],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>u});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),d=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=d(a),u=n,g=m["".concat(p,".").concat(u)]||m[u]||s[u]||o;return a?r.createElement(g,i(i({ref:e},c),{},{components:a})):r.createElement(g,i({ref:e},c))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},97669:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const o={},i="Google Directory",l={unversionedId:"integrations/sources/google-directory",id:"integrations/sources/google-directory",title:"Google Directory",description:"Overview",source:"@site/../docs/integrations/sources/google-directory.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/google-directory",permalink:"/integrations/sources/google-directory",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/google-directory.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Google Analytics 4 (GA4)",permalink:"/integrations/sources/google-analytics-v4"},next:{title:"Google Search Console",permalink:"/integrations/sources/google-search-console"}},p={},d=[{value:"Overview",id:"overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Data type mapping",id:"data-type-mapping",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting Started (Airbyte Cloud)",id:"getting-started-airbyte-cloud",level:2},{value:"Getting Started (Airbyte Open-Source)",id:"getting-started-airbyte-open-source",level:2},{value:"Service account requirements",id:"service-account-requirements",level:3},{value:"Create a Service Account with delegated domain wide authority",id:"create-a-service-account-with-delegated-domain-wide-authority",level:3},{value:"Changelog",id:"changelog",level:2}],c={toc:d};function s(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"google-directory"},"Google Directory"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The Directory source supports Full Refresh syncs. It uses ",(0,n.kt)("a",{parentName:"p",href:"https://developers.google.com/admin-sdk/directory/v1/get-start/getting-started"},"Google Directory API"),"."),(0,n.kt)("h3",{id:"output-schema"},"Output schema"),(0,n.kt)("p",null,"This Source is capable of syncing the following Streams:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/admin-sdk/directory/v1/guides/manage-users#get_all_users"},"users")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/admin-sdk/directory/v1/guides/manage-groups#get_all_domain_groups"},"groups")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/admin-sdk/directory/v1/guides/manage-group-members#get_all_members"},"group members"))),(0,n.kt)("h3",{id:"data-type-mapping"},"Data type mapping"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"array")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"array")),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"object")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"object")),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Replicate Incremental Deletes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Coming soon"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,n.kt)("p",null,"This connector attempts to back off gracefully when it hits Directory API's rate limits. To find more information about limits, see ",(0,n.kt)("a",{parentName:"p",href:"https://developers.google.com/admin-sdk/directory/v1/limits"},"Google Directory's Limits and Quotas")," documentation."),(0,n.kt)("h2",{id:"getting-started-airbyte-cloud"},"Getting Started ","(","Airbyte Cloud",")"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"OAuth2.0 authorization")," then ",(0,n.kt)("inlineCode",{parentName:"li"},"Authenticate your Google Directory account"),"."),(0,n.kt)("li",{parentName:"ol"},"You're done.")),(0,n.kt)("h2",{id:"getting-started-airbyte-open-source"},"Getting Started ","(","Airbyte Open-Source",")"),(0,n.kt)("p",null,"Google APIs use the OAuth 2.0 protocol for authentication and authorization. This connector supports ",(0,n.kt)("a",{parentName:"p",href:"https://developers.google.com/identity/protocols/oauth2#webserver"},"Web server application")," and ",(0,n.kt)("a",{parentName:"p",href:"https://developers.google.com/identity/protocols/oauth2#serviceaccount"},"Service accounts")," scenarios. Therefore, there are 2 options of setting up authorization for this source:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Use your Google account and authorize over Google\'s OAuth on connection setup. Select "Default OAuth2.0 authorization" from dropdown list.'),(0,n.kt)("li",{parentName:"ul"},"Create service account specifically for Airbyte.")),(0,n.kt)("h3",{id:"service-account-requirements"},"Service account requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Credentials to a Google Service Account with delegated Domain Wide Authority"),(0,n.kt)("li",{parentName:"ul"},"Email address of the workspace admin which created the Service Account")),(0,n.kt)("h3",{id:"create-a-service-account-with-delegated-domain-wide-authority"},"Create a Service Account with delegated domain wide authority"),(0,n.kt)("p",null,"Follow the Google Documentation for performing ",(0,n.kt)("a",{parentName:"p",href:"https://developers.google.com/admin-sdk/directory/v1/guides/delegation"},"Domain Wide Delegation of Authority")," to create a Service account with delegated domain wide authority. This account must be created by an administrator of the Google Workspace. Please make sure to grant the following OAuth scopes to the service user:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"https://www.googleapis.com/auth/admin.directory.user.readonly")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"https://www.googleapis.com/auth/admin.directory.group.readonly"))),(0,n.kt)("p",null,"At the end of this process, you should have JSON credentials to this Google Service Account."),(0,n.kt)("p",null,"You should now be ready to use the Google Directory connector in Airbyte."),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-06"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8524"},"8524")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update connector fields title/description")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-02"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7409"},"7409")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Support oauth (update publish)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-02"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7409"},"7409")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Support oauth")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-02"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7464"},"7464")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Migrate to the CDK")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-20"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6930"},"6930")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix crash when a group don't have members")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-19"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7167"},"7167")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add organizations and phones to ",(0,n.kt)("inlineCode",{parentName:"td"},"users")," schema")))))}s.isMDXComponent=!0}}]);