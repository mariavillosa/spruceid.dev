(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{141:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return r?a.a.createElement(m,s(s({ref:t},l),{},{components:r})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},71:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),i=(r(0),r(141)),o={slug:"introducing-did-kit",title:"Introducing DIDKit",author:"Charles Lerner",author_title:"Rust Kingpin",author_url:"https://github.com/clehner",author_image_url:"https://avatars0.githubusercontent.com/u/95347?s=460&u=d3198bf178a7747bffd84e067ab0b9391bb06a69&v=4",tags:["spruce","rust","automation"]},s={permalink:"/blog/introducing-did-kit",editUrl:"https://github.com/spruceid/spruceid.dev/blog/2020-11-13-introducing-didkit.md",source:"@site/blog\\2020-11-13-introducing-didkit.md",description:"In order to better work with decentralized identifiers and verifiable credentials, we\u2019re working on DIDKit.",date:"2020-11-13T00:00:00.000Z",tags:[{label:"spruce",permalink:"/blog/tags/spruce"},{label:"rust",permalink:"/blog/tags/rust"},{label:"automation",permalink:"/blog/tags/automation"}],title:"Introducing DIDKit",readingTime:1.505,truncated:!1,prevItem:{title:"Spruce Developer Field Notes #4",permalink:"/blog/field-notes-4"},nextItem:{title:"Spruce Developer Field Notes #3",permalink:"/blog/field-notes-3"}},c=[{value:"Contact us",id:"contact-us",children:[]}],l={toc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In order to better work with decentralized identifiers and verifiable credentials, we\u2019re working on DIDKit."),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://miro.medium.com/max/1464/0*04yvJG6ysGtY5aMB",alt:"Image for post"}))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"DIDKit")," is a cross-platform toolkit for working with W3C Decentralized Identifiers (DIDs) and Verifiable Credentials (VCs). It allows you to resolve and manage DID documents, and also manage the entire lifecycle of Verifiable Credentials including their issuance, presentation, and verification."),Object(i.b)("p",null,"Notably, it reuses the same codebase across command-line tooling, RESTful HTTP servers, and platform-specific SDKs to facilitate code-level interoperability and a low total cost of ownership. When building ecosystems using decentralized identity to enable verifiable information, many actors must share the same underlying data formats and processing algorithms across different roles."),Object(i.b)("p",null,"We wrote DIDKit in Rust due to its memory safety, expressive type system, and suitability across a variety of systems and environments. For example, the Rust ecosystem has already explored WASM compilation targets in support of single-page apps running in browsers, and we wanted to be able to support those and also browser extensions with DID and VC operations."),Object(i.b)("p",null,"The same codebase can also run nimbly on embedded systems with moderately constrained resources (memory in the megabytes and CPU in the megahertz). Finally, Rust programs are able to directly interface with production-ready cryptographic libraries, as seen with Hyperledger Ursa\u2019s use of openssl, libsodium, and libsecp256k1."),Object(i.b)("p",null,"Currently, we have a working suite of command-line tools for credential issuance, presentation, and verification. We are creating an HTTP server conforming to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://w3c-ccg.github.io/vc-http-api/"}),"VC HTTP API"),", and we have native iOS and Android libraries that are used in our Credible wallet."),Object(i.b)("h2",{id:"contact-us"},"Contact us"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"If you would like to discuss how we would deploy the architecture described above for a specific use case, please take 30 seconds to")," ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.spruceid.com/contact"}),Object(i.b)("em",{parentName:"a"},"leave us a message")),Object(i.b)("em",{parentName:"p"},", and we will respond within 24 hours.")," "),Object(i.b)("p",null,"Or just Follow us on ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://twitter.com/sprucesystems"}),Object(i.b)("em",{parentName:"a"},"Twitter"))," & ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.linkedin.com/company/sprucesystemsinc"}),Object(i.b)("em",{parentName:"a"},"LinkedIn")),"."))}u.isMDXComponent=!0}}]);