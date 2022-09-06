"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[485],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),u=n,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return r?a.createElement(k,o(o({ref:t},c),{},{components:r})):a.createElement(k,o({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8015:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const i={},o="Pinterest",l={unversionedId:"integrations/sources/pinterest",id:"integrations/sources/pinterest",title:"Pinterest",description:"This page contains the setup guide and reference information for the Pinterest source connector.",source:"@site/../docs/integrations/sources/pinterest.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/pinterest",permalink:"/integrations/sources/pinterest",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/pinterest.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"PersistIq",permalink:"/integrations/sources/persistiq"},next:{title:"Pipedrive",permalink:"/integrations/sources/pipedrive"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Step 1: Set up the Pinterest connector in Airbyte",id:"step-1-set-up-the-pinterest-connector-in-airbyte",level:2},{value:"For Airbyte Cloud:",id:"for-airbyte-cloud",level:3},{value:"For Airbyte OSS:",id:"for-airbyte-oss",level:3},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Rate Limits",id:"rate-limits",level:5},{value:"Changelog",id:"changelog",level:2}],c={toc:s};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"pinterest"},"Pinterest"),(0,n.kt)("p",null,"This page contains the setup guide and reference information for the Pinterest source connector."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"Please read ",(0,n.kt)("a",{parentName:"p",href:"https://developers.pinterest.com/docs/api/v5/#tag/Authentication"},"How to get your credentials"),"."),(0,n.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,n.kt)("h2",{id:"step-1-set-up-the-pinterest-connector-in-airbyte"},"Step 1: Set up the Pinterest connector in Airbyte"),(0,n.kt)("h3",{id:"for-airbyte-cloud"},"For Airbyte Cloud:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.airbyte.io/workspaces"},"Log into your Airbyte Cloud")," account."),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,n.kt)("strong",{parentName:"li"},"+new source"),"."),(0,n.kt)("li",{parentName:"ol"},"On the Set up the source page, enter the name for the Pinterest connector and select ",(0,n.kt)("strong",{parentName:"li"},"Pinterest")," from the Source type dropdown. "),(0,n.kt)("li",{parentName:"ol"},"Enter the ",(0,n.kt)("inlineCode",{parentName:"li"},"start_date")," you want your sync to start from"),(0,n.kt)("li",{parentName:"ol"},"Choose ",(0,n.kt)("inlineCode",{parentName:"li"},"OAuth2.0")," in ",(0,n.kt)("inlineCode",{parentName:"li"},"Authorization Method")," list"),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Authenticate your Pinterest account")," button"),(0,n.kt)("li",{parentName:"ol"},"Proceed with OAuth authentication of your account in the pop-up window that appears after previous step"),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Set up source"))),(0,n.kt)("h3",{id:"for-airbyte-oss"},"For Airbyte OSS:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Navigate to the Airbyte Open Source dashboard"),(0,n.kt)("li",{parentName:"ol"},"Set the name for your source "),(0,n.kt)("li",{parentName:"ol"},"Enter your ",(0,n.kt)("inlineCode",{parentName:"li"},"client_id")),(0,n.kt)("li",{parentName:"ol"},"Enter your ",(0,n.kt)("inlineCode",{parentName:"li"},"client_secret")),(0,n.kt)("li",{parentName:"ol"},"Enter your ",(0,n.kt)("inlineCode",{parentName:"li"},"refresh_token")),(0,n.kt)("li",{parentName:"ol"},"Enter the ",(0,n.kt)("inlineCode",{parentName:"li"},"start_date")," you want your sync to start from"),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Set up source"))),(0,n.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,n.kt)("p",null,"The Pinterest source connector supports the following ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"},"sync modes"),":"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,n.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.pinterest.com/docs/api/v5/#operation/user_account/analytics"},"Account analytics")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.pinterest.com/docs/api/v5/#operation/boards/list"},"Boards")," ","(","Full table",")",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.pinterest.com/docs/api/v5/#operation/board_sections/list"},"Board sections")," ","(","Full table",")",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.pinterest.com/docs/api/v5/#operation/board_sections/list_pins"},"Pins on board section")," ","(","Full table",")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.pinterest.com/docs/api/v5/#operation/boards/list_pins"},"Pins on board")," ","(","Full table",")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.pinterest.com/docs/api/v5/#operation/ad_accounts/list"},"Ad accounts")," ","(","Full table",")",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.pinterest.com/docs/api/v5/#operation/ad_account/analytics"},"Ad account analytics")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.pinterest.com/docs/api/v5/#operation/campaigns/list"},"Campaigns")," ","(","Incremental",")",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.pinterest.com/docs/api/v5/#operation/campaigns/list"},"Campaign analytics")," ","(","Incremental",")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.pinterest.com/docs/api/v5/#operation/ad_groups/list"},"Ad groups")," ","(","Incremental",")",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.pinterest.com/docs/api/v5/#operation/ad_groups/analytics"},"Ad group analytics")," ","(","Incremental",")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.pinterest.com/docs/api/v5/#operation/ads/list"},"Ads")," ","(","Incremental",")",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.pinterest.com/docs/api/v5/#operation/ads/analytics"},"Ad analytics")," ","(","Incremental",")")))))),(0,n.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,n.kt)("p",null,"The connector is restricted by normal Pinterest ",(0,n.kt)("a",{parentName:"p",href:"https://developers.pinterest.com/docs/api/v5/#tag/Rate-limits"},"requests limitation"),"."),(0,n.kt)("h5",{id:"rate-limits"},"Rate Limits"),(0,n.kt)("p",null,"Analytics streams - 300 calls per day / per user \\\nAd accounts streams (Campaigns, Ad groups, Ads) - 1000 calls per min / per user / per app \\\nBoards streams - 10 calls per sec / per user / per app"),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-06"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16161"},"16161")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added ability to handle ",(0,n.kt)("inlineCode",{parentName:"td"},"429 - Too Many Requests")," error with respect to ",(0,n.kt)("inlineCode",{parentName:"td"},"Max Rate Limit Exceeded Error"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-02"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16271"},"16271")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added support of ",(0,n.kt)("inlineCode",{parentName:"td"},"OAuth2.0")," authentication method")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-22"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10223"},"10223")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix naming of ",(0,n.kt)("inlineCode",{parentName:"td"},"AD_ID")," and ",(0,n.kt)("inlineCode",{parentName:"td"},"AD_ACCOUNT_ID")," fields")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-22"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9043"},"9043")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update connector fields title/description")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-29"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7493"},"7493")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Release Pinterest CDK Connector")))))}d.isMDXComponent=!0}}]);