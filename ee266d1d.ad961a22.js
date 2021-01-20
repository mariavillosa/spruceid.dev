(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{133:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(141)),i={slug:"field-notes-1",title:"Spruce Developer Field Notes #1",author:"Gregory Rocco",author_title:"Lovable Scrumbag",author_url:"https://github.com/obstropolos",author_image_url:"https://avatars2.githubusercontent.com/u/18144858?s=460&u=c893f3c7ca61474a5d7891ea36ef22423b795cd0&v=4",tags:["spruce","tezos","pizza"]},s={permalink:"/blog/field-notes-1",editUrl:"https://github.com/spruceid/spruceid.dev/blog/2020-09-08-field_notes_1.md",source:"@site/blog\\2020-09-08-field_notes_1.md",description:"At Spruce, we\u2019re building software to power the future of digital identity. Here\u2019s the latest from our development efforts:",date:"2020-09-08T00:00:00.000Z",tags:[{label:"spruce",permalink:"/blog/tags/spruce"},{label:"tezos",permalink:"/blog/tags/tezos"},{label:"pizza",permalink:"/blog/tags/pizza"}],title:"Spruce Developer Field Notes #1",readingTime:2.685,truncated:!1,prevItem:{title:"Spruce's Origins, Decentralized Markets, and Identity",permalink:"/blog/spruce-origin-story"},nextItem:{title:"Announcing Decentralized Identity on Tezos",permalink:"/blog/decentralized-identity-on-tezos"}},c=[{value:"Verifiable Credential Library",id:"verifiable-credential-library",children:[]},{value:"Tezos DID Method",id:"tezos-did-method",children:[]},{value:"Reusable Components",id:"reusable-components",children:[]},{value:"Contact us",id:"contact-us",children:[]}],l={toc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"At Spruce, we\u2019re building software to power the future of digital identity. Here\u2019s the latest from our development efforts:"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://miro.medium.com/max/700/0*FwXmEvmdGxjxgh7y.png",alt:"the urbanity of it all clipart"}))),Object(o.b)("h3",{id:"verifiable-credential-library"},"Verifiable Credential Library"),Object(o.b)("p",null,"As part of our efforts, we are developing a library to provide functionality around Verifiable Credentials (VC) in Rust. We chose Rust for its ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://msrc-blog.microsoft.com/2019/07/22/why-rust-for-safe-systems-programming/"}),"speed, predictable performance, and safety"),". One other consideration for Rust was for embedded and IoT devices in the future as they harness credentials and use them in the performance of discrete tasks."),Object(o.b)("p",null,"We are happy to report that our VC library passes all tests required by the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/w3c/vc-test-suite"}),"W3C Verifiable Claims Working Group")," test suite to be considered a conforming implementation. Once released, we will propose that our library is included in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://w3c.github.io/vc-test-suite/implementations/"}),"W3C CCG implementations list")," with all public results of our conformance testing, and instructions on how to run them locally. At the moment we are implementing JSON-LD support in Rust to fully express semantic data models past the operations required to pass the test suite. We are also working on improving support for LD-Proofs and the use of ZKPs."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://miro.medium.com/max/896/0*nshLJCNbnl9rD3O-",alt:"Screengrab of a very nerdy CLI"}))),Object(o.b)("p",null,"We are currently awaiting a preliminary security review. After that check passes and with proper contributor guidelines, we will publicly release the repository."),Object(o.b)("h3",{id:"tezos-did-method"},"Tezos DID Method"),Object(o.b)("p",null,"Our work with the Tezos ecosystem requires a Tezos-based DID method to allow Tezos accounts to use verifiable credentials using a trustless model and within the same execution context. As a refresher, a decentralized identifier (DID) relies on DID documents to establish authentication, and operations on DID documents themselves, including creation, resolution, updating, and deactivation, as described by a DID method. We are therefore currently in the early stages of developing a DID method based on Tezos, incorporating ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://gitlab.com/tzip/tzip"}),"TZIPs")," such as TZIP-16 and eventually producing TZIPs from our work."),Object(o.b)("p",null,"Public ledger-based DIDs are rife with privacy concerns, and we are taking the following approaches with our DID method specification:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Encouraging off-chain interactions where possible by (1) not requiring a public transaction prior to DID resolution and usage, and (2) considering the interplay with privacy-preserving DID methods such as ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://identity.foundation/peer-did-method-spec/"}),"did:peer"),", which should actually serve the brunt of interactions to prevent unnecessary information exposure."),Object(o.b)("li",{parentName:"ul"},"Limiting the scope towards providing only authentication via keypairs thereby ameliorating many concerns by the community ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/w3c/did-core/issues/382"}),"around service endpoints"),". We are considering the incorporation of the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/decentralized-identity/keri"}),"KERI")," protocol to keep things straightforward."),Object(o.b)("li",{parentName:"ul"},"Working closely with engineers from the Tezos ecosystem to provide implementations in Lorentz and/or LIGO for the DID document management smart contracts. There is a chance we\u2019ll have a full spec if we can keep the contracts tight enough, and also minimize gas costs in the process.")),Object(o.b)("h3",{id:"reusable-components"},"Reusable Components"),Object(o.b)("p",null,"With respect to our reusable product components, we are currently in the early design stages for our credential wallet, issuer tool, and ecosystem steward platform. We are completing user journeys and technical requirements based on customer feedback."),Object(o.b)("h3",{id:"contact-us"},"Contact us"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"If you would like to discuss how we would deploy the architecture described above for a specific use case, please take 30 seconds to")," ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.spruceid.com/contact"}),Object(o.b)("em",{parentName:"a"},"leave us a message")),Object(o.b)("em",{parentName:"p"},", and we will respond within 24 hours.")," "),Object(o.b)("p",null,"Or just Follow us on ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://twitter.com/sprucesystems"}),Object(o.b)("em",{parentName:"a"},"Twitter"))," & ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.linkedin.com/company/sprucesystemsinc"}),Object(o.b)("em",{parentName:"a"},"LinkedIn")),"."))}p.isMDXComponent=!0},141:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return r?a.a.createElement(m,s(s({ref:t},l),{},{components:r})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);