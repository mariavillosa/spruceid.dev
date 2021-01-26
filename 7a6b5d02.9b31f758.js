(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var i=n(3),a=n(7),r=(n(0),n(97)),o={id:"authn",title:"Authenticating to other services"},c={unversionedId:"credible/authn",id:"credible/authn",isDocsHomePage:!1,title:"Authenticating to other services",description:"Credible's current authentication model is simple: services request a verifiable credential issued to the wallet-holder at each authentication, and an interactive presentation is used to initiate a session. Future extensions and alternatives are roadmapped.",source:"@site/docs\\credible\\authn.md",slug:"/credible/authn",permalink:"/docs/credible/authn",editUrl:"https://github.com/spruceid/docs/credible/authn.md",version:"current",sidebar:"docs",previous:{title:"Installation",permalink:"/docs/credible/install"},next:{title:"Overview of Examples",permalink:"/docs/credible/examples"}},s=[{value:"VP-Authentication",id:"vp-authentication",children:[]}],l={toc:s};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Credible's current authentication model is simple: services request a verifiable credential issued to the wallet-holder at each authentication, and an interactive presentation is used to initiate a session. Future extensions and alternatives are roadmapped."),Object(r.b)("h2",{id:"vp-authentication"},"VP-Authentication"),Object(r.b)("p",null,'The presentation request formulated by a "relying party" (i.e., the service relying on credible to authenticate its user) currently comes in only two forms: '),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Unspecified VP Request for enrollment"),": any wallet holding 1 or more VCs can pass this verification to create an account keyed to the presenting identifier."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Unspecified VP Request for authentication"),": if the relying party wants to allow any enrolled party to sign in, they can simply request a presentation of any credential and check the received credential's presenter identifier against  records of enrolled users, to decide whom (if anyone) to authenticate."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Specified VP Request for authentication"),": if the relying party retained the wallet/identifier pair used in an interactive enrolment, they can simply specify the same identifier in a VP request-- anyone except the previously-enrolled party will not ")),Object(r.b)("p",null,"It is presently only possible to verify that a verifiable presentation is valid, i.e. that the signature is valid and corresponds to the public key & identifier (DID) passed with it. For this reason, the passed DID may be used as a unique, stable user identifier between sessions on the basis that a valid VC-holding wallet will consistently prove the same private key for the life of the wallet/identifier combination. No verification based on the ",Object(r.b)("em",{parentName:"p"},"content")," of the presented credential is yet supported."),Object(r.b)("p",null,"See also the code snippets provided below of a Credible VP flow used to authenticate to another service."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},'Note: The current version does not allow the "relying party" to specify much about the verifiable credential requested, and then check the presented credential against this specification. It also does not support backups or recovery of wallet contents.')),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},'Future versions will be able to specify a subject DID, or a subject DID type (by method), or a date range of issuance, or an issuer, etc etc. Without such specification against which to validate a authenticating presentation, Credible\'s authentication should be considered "for testing purposes only" and not used to authenticate users to real-world systems.')),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("h2",Object(i.a)({parentName:"div"},{id:"oidc-considerations"}),"OIDC Considerations"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"v0.2? ")))))}d.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),b=i,h=u["".concat(o,".").concat(b)]||u[b]||p[b]||r;return n?a.a.createElement(h,c(c({ref:t},l),{},{components:n})):a.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);