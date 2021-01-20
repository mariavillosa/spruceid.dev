(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{112:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(141)),o={slug:"field-notes-4",title:"Spruce Developer Field Notes #4",author:"Gregory Rocco",author_title:"Lovable Scrumbag",author_url:"https://github.com/obstropolos",author_image_url:"https://avatars2.githubusercontent.com/u/18144858?s=460&u=c893f3c7ca61474a5d7891ea36ef22423b795cd0&v=4",tags:["spruce","tezos","pizza"]},c={permalink:"/blog/field-notes-4",editUrl:"https://github.com/spruceid/spruceid.dev/blog/2020-12-04-field_notes_4.md",source:"@site/blog\\2020-12-04-field_notes_4.md",description:"At Spruce, we\u2019re building a product suite to manage all aspects of the data supply chain. Here\u2019s the latest from our development efforts:",date:"2020-12-04T00:00:00.000Z",tags:[{label:"spruce",permalink:"/blog/tags/spruce"},{label:"tezos",permalink:"/blog/tags/tezos"},{label:"pizza",permalink:"/blog/tags/pizza"}],title:"Spruce Developer Field Notes #4",readingTime:2.335,truncated:!1,prevItem:{title:"Spruce Developer Field Notes #5",permalink:"/blog/field-notes-5"},nextItem:{title:"Introducing DIDKit",permalink:"/blog/introducing-did-kit"}},l=[{value:"Tezos DID Method",id:"tezos-did-method",children:[]},{value:"DIDKit",id:"didkit",children:[]},{value:"Credible",id:"credible",children:[]},{value:"Keylink",id:"keylink",children:[]},{value:"Intake",id:"intake",children:[]},{value:"Contact us",id:"contact-us",children:[]}],s={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"At Spruce, we\u2019re building a product suite to manage all aspects of the data supply chain. Here\u2019s the latest from our development efforts:"),Object(i.b)("h3",{id:"tezos-did-method"},"Tezos DID Method"),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://did-tezos-draft.spruceid.com/"}),"Tezos DID Method")," specifies how Tezos can be used for DID creation and management, compatible with the issuance, storage, and verification of Verifiable Credentials."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We are actively implementing ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://gitlab.com/tzip/tzip/-/blob/tzip-19-draft/proposals/tzip-19/tzip-19.md"}),"TZIP-19"),", which is the smart contract interface necessary to implement the Tezos DID Manager."),Object(i.b)("li",{parentName:"ul"},"Derivation from did:tz (tier 1/did-key resolution) has been fully implemented."),Object(i.b)("li",{parentName:"ul"},"On-chain (tier 2) is in progress, the smart contract has been written, and now we are working on the integration between the resolver and the Tezos blockchain."),Object(i.b)("li",{parentName:"ul"},"We are still continuing to iterate on the DID Method Specification and TZIP-19 based on multiple rounds of feedback.")),Object(i.b)("h3",{id:"didkit"},"DIDKit"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://sprucesystems.medium.com/introducing-didkit-an-identity-toolkit-e0dfa292f53d"}),"DIDKit "),"is a cross-platform toolkit for working with W3C Decentralized Identifiers (DIDs) and Verifiable Credentials (VCs)."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The HTTP server has been implemented, and it passes the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/w3c-ccg/vc-http-api/tree/master/packages/plugfest-2020"}),"VC HTTP API test suite"),"."),Object(i.b)("li",{parentName:"ul"},"The CLI and HTTP server have been dockerized."),Object(i.b)("li",{parentName:"ul"},"We now have the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Java_Native_Interface"}),"JNI")," implemented."),Object(i.b)("li",{parentName:"ul"},"We\u2019ve expanded our documentation in order to provide a better developer experience."),Object(i.b)("li",{parentName:"ul"},"We fixed a number of bugs discovered during our interoperability testing.")),Object(i.b)("h3",{id:"credible"},"Credible"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://medium.com/@sprucesystems/spruce-developer-update-2-484368f87ee9"}),"Credible")," is Spruce\u2019s native credential wallet for the consumption, storage, and presentation of Verifiable Credentials on Android and iOS."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We demonstrated a complete workflow integrated with one of our initial use-cases with ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://hieofone.com/"}),"HIE of One"),", dealing with patient-directed health records."),Object(i.b)("li",{parentName:"ul"},"The workflow noted includes a user being able to respond to a credential offer, save that credential to secure storage, and respond to a verifiable presentation request."),Object(i.b)("li",{parentName:"ul"},"We continued to enhance our documentation efforts to further support the developer experience using the wallet.")),Object(i.b)("h3",{id:"keylink"},"Keylink"),Object(i.b)("p",null,"Keylink is Spruce\u2019s tool to link existing enterprise accounts to keypairs."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We\u2019ve completed the integration of verifiable credential issuance for files using libssi (our native library), ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://w3c-ccg.github.io/did-method-key/"}),"did:key"),", and ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://iscc.foundation/iscc/"}),"ISCC ID"),".")),Object(i.b)("h3",{id:"intake"},"Intake"),Object(i.b)("p",null,"Intake is a smarter onboarding tool for businesses via secure document collection and processing. These artifacts can then be used as evidence to generate and issue credentials to the counterparty that originally uploaded them."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We\u2019ve completed our initial design phase for the first MVP iteration of Intake and have begun to implement it."),Object(i.b)("li",{parentName:"ul"},"We\u2019re begun integrating with 3rd party auth providers to create a familiar authentication experience, and cloud storage providers for directed data storage."),Object(i.b)("li",{parentName:"ul"},"We\u2019re utilizing our own internal projects to prepare Intake for the handling of Verifiable Credentials.")),Object(i.b)("h3",{id:"contact-us"},"Contact us"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"If you would like to discuss how we would deploy the architecture described above for a specific use case, please take 30 seconds to")," ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.spruceid.com/contact"}),Object(i.b)("em",{parentName:"a"},"leave us a message")),Object(i.b)("em",{parentName:"p"},", and we will respond within 24 hours.")," "),Object(i.b)("p",null,"Or just Follow us on ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://twitter.com/sprucesystems"}),Object(i.b)("em",{parentName:"a"},"Twitter"))," & ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.linkedin.com/company/sprucesystemsinc"}),Object(i.b)("em",{parentName:"a"},"LinkedIn")),"."))}p.isMDXComponent=!0},141:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return r?a.a.createElement(m,c(c({ref:t},s),{},{components:r})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);