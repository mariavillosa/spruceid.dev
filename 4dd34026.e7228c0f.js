(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{76:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return o})),i.d(t,"metadata",(function(){return s})),i.d(t,"toc",(function(){return c})),i.d(t,"default",(function(){return l}));var n=i(3),a=i(7),r=(i(0),i(95)),o={id:"glossary",title:"Glossary"},s={unversionedId:"glossary",id:"glossary",isDocsHomePage:!1,title:"Glossary",description:"Terminology",source:"@site/docs\\glossary.md",slug:"/glossary",permalink:"/docs/glossary",editUrl:"https://github.com/spruceid/docs/glossary.md",version:"current",sidebar:"docs",previous:{title:"Overview of Examples",permalink:"/docs/credible/examples"},next:{title:"Further Reading",permalink:"/docs/further-reading"}},c=[{value:"Terminology",id:"terminology",children:[{value:"Verifiable Credentials (&quot;<em>VCs</em>&quot;)",id:"verifiable-credentials-vcs",children:[]},{value:"Wallet",id:"wallet",children:[]},{value:"Decentralized Identifiers (&quot;<em>DIDs</em>&quot;)",id:"decentralized-identifiers-dids",children:[]},{value:"DID Document",id:"did-document",children:[]},{value:"DID Method",id:"did-method",children:[]},{value:"DID:Key",id:"didkey",children:[]},{value:"JavaScript Object Notation (JSON)",id:"javascript-object-notation-json",children:[]},{value:"JSON-LD",id:"json-ld",children:[]},{value:"JSON Web Key (JWK)",id:"json-web-key-jwk",children:[]}]}],d={toc:c};function l(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},d,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"terminology"},"Terminology"),Object(r.b)("h3",{id:"verifiable-credentials-vcs"},'Verifiable Credentials ("',Object(r.b)("em",{parentName:"h3"},"VCs"),'")'),Object(r.b)("p",null,"Verifiable Credentials combine properties and superpowers from many different mental models. They are like portable, free-floating data units, which are not exactly documents or data points or records. They are signed and thus tamper-evident, and thus share much of the verifiability of blockchain data or signed PDFs insofar as the signatures they contain can be properly verified by reference to the identities included inside the document. Particularly in the form of JSON-LD verifiable credentials, they are highly portable, in that the structure of their data can often be reconstructed years later and completely out of their original context. For more on JSON-LD and linked data, see the Semantics section of the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/didkit/concepts.md#Semantics"}),"DIDKit Core Concepts")," entry."),Object(r.b)("h3",{id:"wallet"},"Wallet"),Object(r.b)("p",null,'The mental model of a "wallet" for storing directly and manually controlled information and assets has become increasingly common in recent years thanks to the growing popularity of ledger-based cryptocurrencies, NFTs, and other virtual assets controlled by cryptography. Just as wallet software makes cryptographic key management intuitive and human-scaled when handling such cryptographically-controlled assets on common ledgers, so too can "wallet" interfaces make cryptographically-controlled documents like Verifiable Credentials manageable. '),Object(r.b)("p",null,'In the verifiable credential space, a "wallet" is traditionally assumed to manage one or more strong cryptographic identifiers, which must be authenticated to an issuer to receive identifier-specific or identifier-locked credentials. This is often assumed to be a direct and interactive process, as is the process of presenting these strong credentials to verifiers (usually double-authenticated, to both the verifier and to the credential, with two respective identifiers). Credible Wallet was designed to a secure, production-grade, yet lightweight and general-purpose wallet for such use cases, completely free of platform-, vendor-, or blockchain-lock-in and almost free of opinions (our preference for open standards is, after all, an opinion).'),Object(r.b)("p",null,'There are, however, fiduciary, automated, and/or "custodial" wallets (by analogy to cryptocurrency). Here, the dividing line between wallets and agents, services, and service providers gets a little blurry; particularly when the wallet holder is a legal entity or non-human actor, this is an important wrinkle on the concept of the "wallet." Here, DIDKit may be combined with enterprise identity and security platforms to provide a less human-scale "wallet" for handling strong credentials about human and non-human actors. '),Object(r.b)("h3",{id:"decentralized-identifiers-dids"},'Decentralized Identifiers ("',Object(r.b)("em",{parentName:"h3"},"DIDs"),'")'),Object(r.b)("p",null,"Decentralized Identifiers are stable identifiers which are bound to a controlling keypair, which is usually rotatable without changing the identifier. This is achieved by a publication mechanism maintaining information about key material in verifiable data stores (usually distributed ledgers) over time. This information is referred to as a DID Document. The ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.w3.org/TR/did-core/"}),"specification")," governing these identifiers is maintained by a dedicated W3C ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.w3.org/2019/did-wg/"}),"working group"),", of which Spruce is a member. For more information on the W3C, see the ",Object(r.b)("strong",{parentName:"p"},"Further Reading")," section."),Object(r.b)("h3",{id:"did-document"},"DID Document"),Object(r.b)("p",null,'A record returned by a query for a DID, containing information on how to verify information linked in some way to that identifier. The name can be misleading, since in many cases this "document" is entirely ephemeral or contextual and not intended to be a static file or document stored or cached anywhere.  It is sometimes couched in a "Resolution object," which contains metadata about the query and resolution process, although most application developers have no need to worry about these DID mechanics. For a The ',Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://w3c-ccg.github.io/did-resolution/"}),"specification")," governing the DID--\x3eDocument resolution process is maintained by a dedicated W3C ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.w3.org/2019/did-wg/"}),"working group"),", of which Spruce is a member. For more information on the W3C, see the ",Object(r.b)("strong",{parentName:"p"},"Further Reading")," section."),Object(r.b)("h3",{id:"did-method"},"DID Method"),Object(r.b)("p",null,"A set of interdependent governance, publication, and discovery mechanisms for DIDs in a given DID namespace. Most DID methods use blockchains or other publically-readable distributed ledgers as data registries, but some, such as DID:Web, use other systems of verification, such as secure DNS resolution. All methods are specified by a registered specification. This specification explains how to validate a DID (namespace rules), where to query and what to expect back when resolving a DID, etc. The ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://w3c.github.io/did-spec-registries/#did-methods"}),"registry")," of compliant specifications for DID Methods is maintained by a dedicated W3C ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.w3.org/2019/did-wg/"}),"working group"),", of which Spruce is a member. For more information on the W3C, see the ",Object(r.b)("strong",{parentName:"p"},"Further Reading")," section."),Object(r.b)("h3",{id:"didkey"},"DID:Key"),Object(r.b)("p",null,"A special DID Method that generates conformant, offchain DID documents for local, private, and/or ephemeral resolution from a keypair. This can be helpful for integrating conventional PKI or signing infrastructure with DID issuance, or to allow caching or local resolution of DID documents where it is undesirable or impossible to resolve remote DIDs. The ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://w3c-ccg.github.io/did-method-key/"}),"specification")," for this method was originally created in, and maintained in, the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://w3c-ccg.github.io/"}),"W3C-Credentials Community Group"),"."),Object(r.b)("h3",{id:"javascript-object-notation-json"},"JavaScript Object Notation (JSON)"),Object(r.b)("p",null,"First described in 2006 as Javascript was becoming the most dominant web development language, and already widespread with it was standardized in 2013 by ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ecma-international.org/publications-and-standards/standards/ecma-404/"}),"ECMA-404"),', the JSON "blob" or "object" is the most widely-used, language-independent format for data. It is often pronounced "JAson" or "JaySON".'),Object(r.b)("h3",{id:"json-ld"},"JSON-LD"),Object(r.b)("p",null,'JSON-LD is a serialization and messaging format building Linked Data capabilities onto data objects expressable as JSON objects. This means it is built on (but not 100% within) the JSON format, with slightly different properties, including serialization, ordering, and referencing mechanics.  In the language of its specification\'s abstract, its "syntax is designed to easily integrate into deployed systems that already use JSON, and provides a smooth upgrade path from JSON to JSON-LD." The ',Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://json-ld.org/spec/latest/json-ld/"}),"specification")," is maintained and governed in the W3C."),Object(r.b)("h3",{id:"json-web-key-jwk"},"JSON Web Key (JWK)"),Object(r.b)("p",null,'A JSON Web Key, or a "JWK" for short, is a subset of JSON objects specified for containing cryptographic key or set of keys. They were ',Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://tools.ietf.org/html/rfc7517"}),"specified")," in 2015 through the IETF."))}l.isMDXComponent=!0},95:function(e,t,i){"use strict";i.d(t,"a",(function(){return h})),i.d(t,"b",(function(){return b}));var n=i(0),a=i.n(n);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var d=a.a.createContext({}),l=function(e){var t=a.a.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},h=function(e){var t=l(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),h=l(i),u=n,b=h["".concat(o,".").concat(u)]||h[u]||p[u]||r;return i?a.a.createElement(b,s(s({ref:t},d),{},{components:i})):a.a.createElement(b,s({ref:t},d))}));function b(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var d=2;d<r;d++)o[d]=i[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,i)}u.displayName="MDXCreateElement"}}]);