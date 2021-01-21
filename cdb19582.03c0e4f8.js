(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{126:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),i=(r(0),r(142)),o={slug:"field-notes-3",title:"Spruce Developer Field Notes #3",author:"Wayne Change",author_title:"Bodega Afficionado and CEO",author_url:"https://github.com/wyc",author_image_url:"https://avatars3.githubusercontent.com/u/858687?s=460&v=4",tags:["spruce","tezos","nyc"]},c={permalink:"/blog/field-notes-3",editUrl:"https://github.com/spruceid/spruceid.dev/blog/2020-11-08-field_notes_3.md",source:"@site/blog\\2020-11-08-field_notes_3.md",description:"At Spruce, we\u2019re building a product suite to manage all aspects of the data supply chain. Here\u2019s the latest from our development efforts:",date:"2020-11-08T00:00:00.000Z",tags:[{label:"spruce",permalink:"/blog/tags/spruce"},{label:"tezos",permalink:"/blog/tags/tezos"},{label:"nyc",permalink:"/blog/tags/nyc"}],title:"Spruce Developer Field Notes #3",readingTime:1.88,truncated:!1,prevItem:{title:"Introducing DIDKit",permalink:"/blog/introducing-did-kit"},nextItem:{title:"Spruce joins the Decentralized Identity Foundation",permalink:"/blog/spruce-joins-dif"}},l=[{value:"Rust VC/DID Library",id:"rust-vcdid-library",children:[]},{value:"Tezos DID Method",id:"tezos-did-method",children:[]},{value:"Credible",id:"credible",children:[]},{value:"Keylink",id:"keylink",children:[]},{value:"Contact us",id:"contact-us",children:[]}],s={toc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"At Spruce, we\u2019re building a product suite to manage all aspects of the data supply chain. Here\u2019s the latest from our development efforts:"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://miro.medium.com/max/617/1*aMJZ3_55ovrKSTTCBZmCZQ.png",alt:"user interface buttons"}))),Object(i.b)("h3",{id:"rust-vcdid-library"},"Rust VC/DID Library"),Object(i.b)("p",null,"We are currently working on a project called ",Object(i.b)("em",{parentName:"p"},"DIDKit"),": a cross-platform toolkit for using DIDs and VCs with our Rust libraries at the core."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We have been able to utilize the core credential flows of Issue, Present, and Verify using DIDKit, currently supporting RSA and Ed25519 signature systems with more to come."),Object(i.b)("li",{parentName:"ul"},"We currently support ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://w3c-ccg.github.io/did-method-key/"}),"did-key"),", but are starting work on support for did-tezos, did-btcr, did-web, and did-peer."),Object(i.b)("li",{parentName:"ul"},"We are helping to write tests for the DID Test Suite at the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.w3.org/2019/did-wg/"}),"W3C DID Working Group"),".")),Object(i.b)("h3",{id:"tezos-did-method"},"Tezos DID Method"),Object(i.b)("p",null,"The Tezos DID Method makes a pragmatic trade-off between usability, security, and privacy, allowing any Tezos-based address to have a useful DID."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Our current draft of the Tezos DID Method can be found ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://did-tezos-draft.spruceid.com/"}),"here"),"."),Object(i.b)("li",{parentName:"ul"},"We have been reviewing this with members of the Tezos ecosystem and members of the decentralized identity ecosystem to ensure usability, security, and privacy."),Object(i.b)("li",{parentName:"ul"},"We have started the implementation of the method."),Object(i.b)("li",{parentName:"ul"},"We intend to submit this as a Credentials Community Group work item with our partner TQ over the next few weeks.")),Object(i.b)("h3",{id:"credible"},"Credible"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We are completing the integration of our Rust libraries into our native mobile applications through the Flutter cross-platform framework."),Object(i.b)("li",{parentName:"ul"},"We have begun scoping the cloud wallet and single-page app target aspects of Credible.")),Object(i.b)("h3",{id:"keylink"},"Keylink"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We have begun work on Keylink, which links existing enterprise accounts to keypairs."),Object(i.b)("li",{parentName:"ul"},"We have a working MVP demonstration which uses Keycloak as the identity provider and Keylink as the relying party for signing with Ed25519 keys."),Object(i.b)("li",{parentName:"ul"},"Keys are stored in an encrypted SQLite database for the MVP, but we intend to integrate with cloud KMS systems such as Amazon KMS in the future."),Object(i.b)("li",{parentName:"ul"},"We intend to release Keylink open source as it matures.")),Object(i.b)("h3",{id:"contact-us"},"Contact us"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"If you would like to discuss how we would deploy the architecture described above for a specific use case, please take 30 seconds to")," ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.spruceid.com/contact"}),Object(i.b)("em",{parentName:"a"},"leave us a message")),Object(i.b)("em",{parentName:"p"},", and we will respond within 24 hours.")," "),Object(i.b)("p",null,"Or just Follow us on ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://twitter.com/sprucesystems"}),Object(i.b)("em",{parentName:"a"},"Twitter"))," & ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.linkedin.com/company/sprucesystemsinc"}),Object(i.b)("em",{parentName:"a"},"LinkedIn")),"."))}u.isMDXComponent=!0},142:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return r?a.a.createElement(m,c(c({ref:t},s),{},{components:r})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);