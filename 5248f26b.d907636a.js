(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{141:function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return h}));var a=i(0),r=i.n(a);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function c(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?c(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function p(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var b=r.a.createContext({}),l=function(e){var t=r.a.useContext(b),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},s=function(e){var t=l(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=l(i),u=a,h=s["".concat(c,".").concat(u)]||s[u]||d[u]||n;return i?r.a.createElement(h,o(o({ref:t},b),{},{components:i})):r.a.createElement(h,o({ref:t},b))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,c=new Array(n);c[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var b=2;b<n;b++)c[b]=i[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},89:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return c})),i.d(t,"metadata",(function(){return o})),i.d(t,"toc",(function(){return p})),i.d(t,"default",(function(){return l}));var a=i(3),r=i(7),n=(i(0),i(141)),c={id:"cli_commands",title:"CLI Commands"},o={unversionedId:"didkit/cli_commands",id:"didkit/cli_commands",isDocsHomePage:!1,title:"CLI Commands",description:"DIDKit offers its functionality in a command-line program, didkit.",source:"@site/docs\\didkit\\cli_commands.md",slug:"/didkit/cli_commands",permalink:"/docs/didkit/cli_commands",editUrl:"https://github.com/spruceid/docs/didkit/cli_commands.md",version:"current",sidebar:"didkitSidebar",previous:{title:"Installation",permalink:"/docs/didkit/install"},next:{title:"HTTP Syntax",permalink:"/docs/didkit/http_syntax"}},p=[{value:"Build",id:"build",children:[]},{value:"Install",id:"install",children:[]},{value:"Commands",id:"commands",children:[{value:"<code>help</code>",id:"help",children:[]},{value:"<code>generate-ed25519-key</code>",id:"generate-ed25519-key",children:[]},{value:"<code>key-to-did-key</code>",id:"key-to-did-key",children:[]},{value:"<code>key-to-verification-method</code>",id:"key-to-verification-method",children:[]},{value:"<code>vc-issue-credential</code>",id:"vc-issue-credential",children:[]},{value:"<code>vc-verify-credential</code>",id:"vc-verify-credential",children:[]},{value:"<code>vc-issue-presentation</code>",id:"vc-issue-presentation",children:[]},{value:"<code>vc-verify-presentation</code>",id:"vc-verify-presentation",children:[]}]},{value:"Examples",id:"examples",children:[]}],b={toc:p};function l(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},b,i,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"DIDKit offers its functionality in a command-line program, ",Object(n.b)("inlineCode",{parentName:"p"},"didkit"),"."),Object(n.b)("h2",{id:"build"},"Build"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ cargo build\n")),Object(n.b)("h2",{id:"install"},"Install"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ cargo install --path .\n")),Object(n.b)("h2",{id:"commands"},"Commands"),Object(n.b)("p",null,"Each command is called in the form:\n",Object(n.b)("inlineCode",{parentName:"p"},"didkit help"),", ",Object(n.b)("inlineCode",{parentName:"p"},"didkit generate-ed25519-key"),", etc."),Object(n.b)("h3",{id:"help"},Object(n.b)("inlineCode",{parentName:"h3"},"help")),Object(n.b)("p",null,"Output help about ",Object(n.b)("inlineCode",{parentName:"p"},"didkit")," and its subcommands."),Object(n.b)("h3",{id:"generate-ed25519-key"},Object(n.b)("inlineCode",{parentName:"h3"},"generate-ed25519-key")),Object(n.b)("p",null,"Generate a Ed25519 keypair and output it in ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://tools.ietf.org/html/rfc8037#appendix-A.1"}),"JWK format"),"."),Object(n.b)("h3",{id:"key-to-did-key"},Object(n.b)("inlineCode",{parentName:"h3"},"key-to-did-key")),Object(n.b)("p",null,"Given a ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://tools.ietf.org/html/rfc7517"}),"JWK"),", output the corresponding ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://w3c-ccg.github.io/did-method-key/"}),"did:key"),"."),Object(n.b)("p",null,"Currently, this only supports ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://tools.ietf.org/html/rfc8037#appendix-A.2"}),"Ed25519")," keys."),Object(n.b)("h3",{id:"key-to-verification-method"},Object(n.b)("inlineCode",{parentName:"h3"},"key-to-verification-method")),Object(n.b)("p",null,"Given a Ed25519 ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://tools.ietf.org/html/rfc7517"}),"JWK"),", output the corresponding ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://w3c-ccg.github.io/did-method-key/"}),"did:key")," ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://w3c-ccg.github.io/security-vocab/#verificationMethod"}),"verificationMethod"),"."),Object(n.b)("h4",{id:"options"},"Options"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"-k, --key-path <file>")," (required, conflicts with jwk) - Filename of JWK file"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"-j, --jwk <jwk>")," (required, conflicts with key-path) - JWK.")),Object(n.b)("h3",{id:"vc-issue-credential"},Object(n.b)("inlineCode",{parentName:"h3"},"vc-issue-credential")),Object(n.b)("p",null,"Issue a verifiable credential. Reads credential on stdin, constructs a ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://w3c-ccg.github.io/ld-proofs/"}),"linked data proof")," to add to the credential, and outputs the resulting verifiable credential."),Object(n.b)("p",null,"Corresponds to ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://w3c-ccg.github.io/vc-http-api/#/Issuer/issueCredential"}),"/issue/credentials")," in ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://w3c-ccg.github.io/vc-http-api/"}),"vc-http-api"),"."),Object(n.b)("p",null,"The proof type is set automatically based on the key file provided. JWK parameters besides the cryptographic components, such as ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://tools.ietf.org/html/rfc7517#section-4.5"}),"kid")," (Key ID), are ignored currently. For an RSA key, the ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://tools.ietf.org/html/rfc7517#section-4.4"}),"alg")," (Algorithm) parameter is ignored and ",Object(n.b)("inlineCode",{parentName:"p"},"RS256")," is used for it, for ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://w3c-ccg.github.io/lds-rsa2018/"}),"RsaSignature2018"),"."),Object(n.b)("h4",{id:"options-1"},"Options"),Object(n.b)("p",null,"Options besides ",Object(n.b)("inlineCode",{parentName:"p"},"--key-path")," correspond to linked data ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://w3c-ccg.github.io/ld-proofs/#dfn-proof-options"}),"proof options")," as specified in ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://w3c-ccg.github.io/ld-proofs/"}),"ld-proofs")," and ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://w3c-ccg.github.io/vc-http-api/"}),"vc-http-api"),"."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"-C, --challenge <challenge>")," - ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://w3c-ccg.github.io/security-vocab/#challenge"}),"challenge")," property of the proof"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"-c, --created <created>")," - ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://w3c-ccg.github.io/security-vocab/#created"}),"created")," property of the proof. ISO8601 datetime. Defaults to the current time.\ntime."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"-d, --domain <domain>")," - ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://w3c-ccg.github.io/security-vocab/#domain"}),"domain")," property of the proof"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"-k, --key-path <key>")," (required, conflicts with jwk) - Filename of JWK for signing."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"-j, --jwk <jwk>")," (required, conflicts with key-path) - JWK for signing."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"-p, --proof-purpose <proof-purpose>")," ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://w3c-ccg.github.io/security-vocab/#proofPurpose"}),"proofPurpose")," property of the proof."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"-v, --verification-method <verification-method>")," ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://w3c-ccg.github.io/security-vocab/#verificationMethod"}),"verificationMethod"),"\nproperty of the proof. URI for proof verification information, e.g. a public key identifier.")),Object(n.b)("h4",{id:"supported-jwk-key-types"},"Supported ",Object(n.b)("a",Object(a.a)({parentName:"h4"},{href:"https://tools.ietf.org/html/rfc7517#section-4.1"}),"JWK key types")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"RSA")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"OKP")," (",Object(n.b)("inlineCode",{parentName:"li"},"curve"),": ",Object(n.b)("inlineCode",{parentName:"li"},"Ed25519"),")")),Object(n.b)("h3",{id:"vc-verify-credential"},Object(n.b)("inlineCode",{parentName:"h3"},"vc-verify-credential")),Object(n.b)("p",null,"Verify a verifiable credential. Reads verifiable credential on standard input, and outputs verification result. Returns exit status zero if credential successfully verified, or non-zero if errors were encountered."),Object(n.b)("p",null,"Corresponds to ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://w3c-ccg.github.io/vc-http-api/#/Verifier/verifyCredential"}),"/verify/credentials")," in ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://w3c-ccg.github.io/vc-http-api/"}),"vc-http-api"),"."),Object(n.b)("h4",{id:"options-2"},"Options"),Object(n.b)("p",null,"Options are linked data ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://w3c-ccg.github.io/ld-proofs/#dfn-proof-options"}),"proof options")," as specified in ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://w3c-ccg.github.io/ld-proofs/"}),"ld-proofs")," and ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://w3c-ccg.github.io/vc-http-api/"}),"vc-http-api"),". If there is more than one proof present, at least one must pass all the requirements passed in the options."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"-C, --challenge <challenge>")," - The ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://w3c-ccg.github.io/security-vocab/#challenge"}),"challenge")," property of the proof must\nequal this value."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"-c, --created <created>")," - The ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://w3c-ccg.github.io/security-vocab/#created"}),"created")," property of the proof must be on or after the given ISO8601 datetime. Defaults to the current time.\ntime."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"-d, --domain <domain>")," - The ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://w3c-ccg.github.io/security-vocab/#domain"}),"domain")," property of the proof must equal the\ngiven value."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"-p, --proof-purpose <proof-purpose>")," - The ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://w3c-ccg.github.io/security-vocab/#proofPurpose"}),"proofPurpose")," property of the proof must equal this value."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"-v, --verification-method <verification-method>")," - The ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://w3c-ccg.github.io/security-vocab/#verificationMethod"}),"verificationMethod"),"\nproperty of the proof must equal this value.")),Object(n.b)("h4",{id:"supported-proof-types"},"Supported proof types"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://w3c-ccg.github.io/lds-rsa2018/"}),"RsaSignature2018")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://w3c-ccg.github.io/lds-ed25519-2018/"}),"Ed25519VerificationKey2018"))),Object(n.b)("h4",{id:"output"},"Output"),Object(n.b)("p",null,"The verification result output is a ",Object(n.b)("inlineCode",{parentName:"p"},"VerificationResult")," JSON object as specified in ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://w3c-ccg.github.io/vc-http-api/"}),"vc-http-api"),":"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "checks": [],\n  "warnings": [],\n  "errors": []\n}\n')),Object(n.b)("p",null,"Verification result properties:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"checks")," - Array of strings indicating checks completed on the credential."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"warnings")," - Array of warnings encountered during validation or verification."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"errors")," - Array of strings indicating errors encountered during validation or verification. If ",Object(n.b)("inlineCode",{parentName:"li"},"errors")," is empty, the credential is verified.")),Object(n.b)("h3",{id:"vc-issue-presentation"},Object(n.b)("inlineCode",{parentName:"h3"},"vc-issue-presentation")),Object(n.b)("p",null,"Issue a verifiable presentation. Reads presentation on stdin, generates proof to add to it, and outputs the resulting verifiable presentation."),Object(n.b)("p",null,"Corresponds to ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://w3c-ccg.github.io/vc-http-api/#/Holder/provePresentation"}),"/prove/presentations")," in ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://w3c-ccg.github.io/vc-http-api/"}),"vc-http-api"),"."),Object(n.b)("p",null,"Options are the same as for ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"#vc-issue-credential"}),"vc-issue-credential"),"."),Object(n.b)("h3",{id:"vc-verify-presentation"},Object(n.b)("inlineCode",{parentName:"h3"},"vc-verify-presentation")),Object(n.b)("p",null,"Verify a verifiable presentation. Reads verifiable presentation on stdin, and outputs verification result. Returns exit status zero if presentation successfully verified, or non-zero if errors were encountered."),Object(n.b)("p",null,"Corresponds to ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://w3c-ccg.github.io/vc-http-api/#/Verifier/verifyPresentation"}),"/verify/presentations")," in ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://w3c-ccg.github.io/vc-http-api/"}),"vc-http-api"),"."),Object(n.b)("p",null,"Options and output format are the same as for ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"#vc-verify-credential"}),"vc-verify-credential"),"."),Object(n.b)("h2",{id:"examples"},"Examples"),Object(n.b)("p",null,"See the included ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"script1"}),"Script 1")," in the Examples section."))}l.isMDXComponent=!0}}]);