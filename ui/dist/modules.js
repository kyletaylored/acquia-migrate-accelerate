!function(e){function t(t){for(var a,i,l=t[0],s=t[1],u=t[2],d=0,m=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);for(c&&c(t);m.length;)m.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,l=1;l<n.length;l++){var s=n[l];0!==r[s]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={3:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=a);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=function(e){return i.p+""+({5:"tracker"}[e]||e)+".bundle.js"}(e);var s=new Error;o=function(t){l.onerror=l.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,n[1](s)}r[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var c=s;o.push([246,0]),n()}({246:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(23),i=n(22),l=n(1),s=n.n(l),u=n(20),c=n.n(u),d=n(25),m=n(44),p=n(48),f=n.n(p),h=n(2),g=n.n(h),v=n(77),b=n.n(v),y=n(19),E=n(11),O=n(34),j=n(3),w=function(e,t){return e.id===t.id},_=function(e){var t=e.title,n=e.version;return r.a.createElement("div",{className:"datagrid__item"},r.a.createElement("span",{className:"source-module__title"},t," ",n))},k=function(e){var t=e.title,n=e.version,a=e.link,o=e.icon,i=e.help;return r.a.createElement("div",{className:"datagrid__item"},r.a.createElement("span",{className:"recommendation-module__title"},a?r.a.createElement(E.a,{href:a.href,title:t},t," ",n):r.a.createElement("span",null,t," ",n),o?r.a.createElement("span",{title:i,className:"title__badge"},r.a.createElement(y.a,{icon:o,stroke:"none",size:"18"})):null))},N=function(e){var t=e.instruction;return"object"===b()(t)?r.a.createElement(E.a,{title:t.title,href:t.href},t.title):r.a.createElement("span",null,t)},R=function(e){var t=e.installLabel,n=e.instructions;return r.a.createElement("div",{className:"datagrid__item"},r.a.createElement("span",{className:"module-recommendations__install-status module-recommendations__install-status--".concat(t.modifier),title:t.title},t.label),n?r.a.createElement("div",{className:"module-recommendations__install-instructions"},n.instruction?r.a.createElement(N,{instruction:n.instruction}):null,n.detail?r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("code",null,n.detail)):null):null)},P=function(e){var t=e.id,n=e.modules,a=e.link,o=e.vetted;return r.a.createElement("ul",{className:"module-recommendations__module-list"},n.map((function(e){return r.a.createElement("li",{className:"module-recommendations__row-inner module-recommendations__module-list-item",key:"".concat(t,"-").concat(encodeURIComponent(e.displayName).toLowerCase())},r.a.createElement(k,{title:e.displayName,version:e.version,link:a,icon:o?"vetted":null,help:o?"Migration path vetted by Acquia":null}),r.a.createElement(R,{installLabel:e.installLabel,instructions:e.installInstructions}))})))},T=function(e){var t=e.recommendation,n=t.id,a=t.type,o=t.modules,i=t.note,l=t.vetted,s=t.links,u=(s?Object(j.g)(s):[])[0]||null;return r.a.createElement("div",{className:"module-recommendations__recommendation"},o.length||"abandonmentRecommendation"===a?r.a.createElement("div",{className:"module-recommendations__recommendation-header"},o.length?r.a.createElement(P,{id:n,modules:o,link:u,vetted:l}):null,"abandonmentRecommendation"===a?r.a.createElement(k,{title:"Module obsolete or not recommended",icon:"abandoned"}):null):null,i?r.a.createElement("div",{className:"datagrid__item"},r.a.createElement("p",{className:"module-recommendations__recommendation-note"},i)):null)},q=function(e){var t=e.module,n=e.columns,a=Object(O.a)(!1),o=g()(a,2),i=o[0],l=o[1],s=t.title,u=t.version,c=t.replacementCandidates,d=n.includes("status")&&c.some((function(e){return e.modules&&e.modules.some((function(e){return!!e.installInstructions}))}));return r.a.createElement("div",{className:"module-recommendations__row datagrid__row ".concat(i?"is-expanded":"is-collapsed")},n.includes("source")?r.a.createElement(_,{title:s,version:u}):null,n.includes("destination")?r.a.createElement("div",{className:"datagrid__inner"},c.map((function(e){return r.a.createElement(T,{key:"".concat(e.category,"_").concat(e.id,"_").concat(e.modules?e.modules.map((function(e){return e.machineName})).join("_"):"".concat(s,"-").concat(u)),recommendation:e})}))):null,d?r.a.createElement("a",{className:"dropdown-toggle",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":i,onClick:l},r.a.createElement(y.a,{icon:"chevron-down"})):null)},D=r.a.memo(q,w);_.propTypes={title:s.a.string.isRequired,version:s.a.string},_.defaultProps={version:null},k.propTypes={title:s.a.string.isRequired,version:s.a.string,link:s.a.shape({href:s.a.string,type:s.a.string}),icon:s.a.string,help:s.a.string},k.defaultProps={version:null,link:null,icon:null,help:null},N.propTypes={instruction:s.a.oneOfType([s.a.string,s.a.shape({href:s.a.string,title:s.a.string})]).isRequired},R.propTypes={installLabel:s.a.shape({label:s.a.string,title:s.a.string,modifier:s.a.string}).isRequired,instructions:s.a.shape({instruction:s.a.oneOfType([s.a.string,s.a.shape({href:s.a.string,title:s.a.string})]),detail:s.a.string})},R.defaultProps={instructions:null},P.propTypes={id:s.a.string.isRequired,modules:s.a.arrayOf(s.a.shape({displayName:s.a.string,installLabel:s.a.shape({label:s.a.string,title:s.a.string,version:s.a.string,modifier:s.a.string}),machineName:s.a.string})).isRequired,link:s.a.shape({href:s.a.string,type:s.a.string}),vetted:s.a.bool.isRequired},P.defaultProps={link:null},T.propTypes={recommendation:s.a.shape({note:s.a.string,vetted:s.a.bool,modules:s.a.arrayOf(s.a.shape({displayName:s.a.string,installed:s.a.bool,installLabel:s.a.shape({label:s.a.string,title:s.a.string,modifier:s.a.string}),installInstructions:s.a.oneOfType([s.a.string,s.a.object]),machineName:s.a.string})),requirePackage:s.a.shape({packageName:s.a.string,versionConstraint:s.a.string}),id:s.a.string,links:s.a.shape({about:s.a.shape({href:s.a.string,type:s.a.string})}),type:s.a.string}).isRequired},q.propTypes={module:s.a.shape({id:s.a.string,title:s.a.string,version:s.a.string,replacementCandidates:s.a.arrayOf(s.a.object)}).isRequired,columns:s.a.arrayOf(s.a.string).isRequired};var S=function(e,t){return e.modules.map((function(e){return e.id})).join()===t.modules.map((function(e){return e.id})).join()},C=function(e){var t=e.title,n=e.modules,a=e.columns,o=e.sourceVersion,i=e.destVersion;return r.a.createElement("div",{className:"module-recommendations datagrid"},t?r.a.createElement("h4",null,t):null,r.a.createElement("div",{className:"module-recommendations__header datagrid__header",role:"presentation"},a.includes("source")?r.a.createElement("div",{className:"datagrid__header-item datagrid__item"},"Drupal ",o):null,a.includes("destination")?r.a.createElement("div",{className:"datagrid__header-item datagrid__item"},"Drupal ",i):null,a.includes("status")?r.a.createElement("div",{className:"datagrid__header-item datagrid__item"},"Module state"):null),n.map((function(e){return r.a.createElement(D,{key:e.id,module:e,columns:a})})))},M=r.a.memo(C,S);C.propTypes={title:s.a.string,modules:s.a.arrayOf(s.a.shape({id:s.a.string,title:s.a.string,version:s.a.string})).isRequired,columns:s.a.arrayOf(s.a.string).isRequired,sourceVersion:s.a.string,destVersion:s.a.string},C.defaultProps={title:null,sourceVersion:"7",destVersion:"9"};var A=n(43),L=n(79),I=function(e){var t=e.limiters,n=e.update,a=t.searchText,o=t.vettedOnly,i=t.installedOnly;return r.a.createElement("div",{className:"module_limiter"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},r.a.createElement(A.a,{name:a.name,label:"Search for text",value:a.value,onChange:function(e){n(a.name,e.target.value)},type:"search",validation:{minLength:"3"}}),r.a.createElement(L.a,{name:o.name,label:"Show only modules with an Acquia-vetted migration path",checked:o.value,toggle:function(){n(o.name,!o.value)}}),r.a.createElement(L.a,{name:i.name,label:"Show only installed modules",checked:i.value,toggle:function(){n(i.name,!i.value)}})))},x=n(66),V=n(78),F=n(8),J=n.n(F),U=n(9),H=n.n(U),z=n(10),G=n.n(z),B=n(24),K=n.n(B),Q=n(13),W=n.n(Q),X=n(14),Y=n.n(X),Z=n(4),$=n.n(Z);function ee(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=$()(e);if(t){var r=$()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Y()(this,n)}}var te=function(e){W()(n,e);var t=ee(n);function n(){return H()(this,n),t.apply(this,arguments)}return G()(n,[{key:"withValue",value:function(e){return new n({name:this.name,value:e})}},{key:"test",value:function(e){var t=e.id,a=e.title,r=e.version,o=e.replacementCandidates.reduce((function(e,t){var n=t.category,a=t.id,r=t.modules,o=t.note;return e=[].concat(J()(e),[n,a,o]),r&&(e=[].concat(J()(e),J()(r.reduce((function(e,t){return e=[].concat(J()(e),[t.displayName,t.machineName])}),[])))),e}),[]).filter((function(e){return e})).join(" ");return K()($()(n.prototype),"test",this).call(this,[t,a,r,o])}}]),n}(n(67).a),ne=n(71);function ae(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=$()(e);if(t){var r=$()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Y()(this,n)}}var re=function(e){W()(n,e);var t=ae(n);function n(){return H()(this,n),t.apply(this,arguments)}return G()(n,[{key:"withValue",value:function(e){return new n({name:this.name,value:e})}},{key:"test",value:function(e){var t=e.replacementCandidates,a=!!t&&t.some((function(e){return e.vetted}));return K()($()(n.prototype),"test",this).call(this,a)}}]),n}(ne.a);function oe(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=$()(e);if(t){var r=$()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Y()(this,n)}}var ie=function(e){W()(n,e);var t=oe(n);function n(){return H()(this,n),t.apply(this,arguments)}return G()(n,[{key:"withValue",value:function(e){return new n({name:this.name,value:e})}},{key:"test",value:function(e){var t=e.replacementCandidates,a=!!t&&t.some((function(e){return e.modules&&e.modules.some((function(e){return!!e.installed}))}));return K()($()(n.prototype),"test",this).call(this,a)}}]),n}(ne.a),le=function(e){var t=e.list,n=e.modules,a=t.title,o=t.columns,i=t.help,l=null,s=null,u=Object(x.a)({searchText:new te({name:"searchText",value:""}),vettedOnly:new re({name:"vettedOnly",value:!1}),installedOnly:new ie({name:"installedOnly",value:!1})}),c=u.limiters,d=u.updateLimiter,m=n.reduce((function(e,t){if(t.replacementCandidates&&t.replacementCandidates.some((function(e){return"core"===e.category}))){t.replacementCandidates.forEach((function(e){return"core"===e.category&&(e.modules=e.modules.map((function(e){var t=e.version,n=f()(e,["version"]);return s||(s=t),n}))),e}));var n=t.version,a=f()(t,["version"]);return e.coreAll.push(a),l||(l=n),e}return e.otherAll.push(t),e}),{otherAll:[],coreAll:[]}),p=m.otherAll,h=m.coreAll,g=Object(V.a)(h,c),v=Object(V.a)(p,c);return r.a.createElement("div",null,i,r.a.createElement(I,{limiters:c,update:d}),g.length||v.length?r.a.createElement("div",null,v.length?r.a.createElement(M,{title:null,modules:v,columns:o}):null,g.length?r.a.createElement(M,{title:"Migration path to Drupal 9 core",modules:g,columns:o,sourceVersion:l,destVersion:s}):null):r.a.createElement("div",null,"No ",r.a.createElement("em",null,a)," modules to display."))},se=le;le.propTypes={list:s.a.shape({title:s.a.string,columns:s.a.arrayOf(s.a.string),help:s.a.node}).isRequired,modules:s.a.arrayOf(s.a.shape({id:s.a.string,title:s.a.string,version:s.a.string})).isRequired};var ue=n(153),ce=n(35),de=function(e){var t=e.projectInfo,n=t.status,a=t.timestamp,o=t.reset;return r.a.createElement("div",null,r.a.createElement("p",null,n),a?r.a.createElement("p",null,"Last updated on ",r.a.createElement("em",null,Object(ue.a)(a,ce.a))):null,o?r.a.createElement("button",{className:"button button--primary button--small",onClick:o},"Refresh project list"):null)},me=de;de.propTypes={projectInfo:s.a.shape({status:s.a.string,timestamp:s.a.number,reset:s.a.func}).isRequired};var pe=n(27),fe=n(6),he=n.n(fe),ge=n(16),ve=n(89),be=function(e){return{value:e,timestamp:Date.now()}},ye=function(e,t){var n=Object(a.useState)((function(){return function(e,t){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):be(t)}catch(e){return console.error(e),be(t)}}(e,t)})),r=g()(n,2),o=r[0],i=r[1],l=Object(a.useCallback)((function(t){t.key===e&&i(JSON.parse(t.newValue))}),[o]);return Object(a.useEffect)((function(){return window.addEventListener("storage",l),function(){return window.removeEventListener("storage",l)}}),[l]),{stored:o,storeValue:function(t){try{var n=function(e,t){try{var n=be(t);return window.localStorage.setItem(e,JSON.stringify(n)),n}catch(e){console.error(e)}}(e,t);i(n)}catch(e){console.error(e)}}}};function Ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ee(Object(n),!0).forEach((function(t){he()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var je={status:"Checking drupal.org project pages...",completed:!1,projects:[]},we=function(e,t){switch(t.type){case"reset":return Oe({},je);case"addAll":return Oe(Oe({},e),{},{completed:!0,projects:J()(t.stored.value),status:"Found ".concat(t.stored.value.length," matching projects on drupal.org"),timestamp:t.stored.timestamp,reset:t.reset});default:return e}},_e=function(e){var t=ye("unknownSources",[]),n=t.stored,r=t.storeValue,o=Object(a.useReducer)(we,je),i=g()(o,2),l=i[0],s=i[1],u=function(){r([])};return Object(a.useEffect)((function(){l.completed&&!n.value.length&&r(l.projects)}),[l]),Object(a.useEffect)((function(){n.value.length!==l.projects.length&&(n.value.length?s({type:"addAll",stored:n,reset:u}):s({type:"reset"}))}),[n]),Object(a.useEffect)((function(){if(e.length&&!l.projects.length)if(n.value.length)s({type:"addAll",stored:n,reset:u});else try{Promise.all(e.map((function(e){return t=e.id,fetch("".concat("https://www.drupal.org/api-d7/node.json","?field_project_machine_name=").concat(t),{method:"GET",mode:"cors",headers:{Accept:"application/json"}}).then((function(e){if(e.ok)return e.json().then((function(e){if(e.list.length)return t}))}));var t}))).then((function(e){r(e.filter((function(e){return e})))}))}catch(e){console.error(e)}}),[e.length,l.projects]),{projectInfo:l}};function ke(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ke(Object(n),!0).forEach((function(t){he()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ke(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Re={found:{name:"found",title:"Found",path:"/",to:"./",columns:["source","destination","status"],modules:[],help:r.a.createElement("p",null,"This page shows the Drupal 9 modules"," ",r.a.createElement("strong",null,"Acquia Migrate: Accelerate")," automatically downloaded for you, based on your Drupal 7 code base. Modules will be automatically enabled if their migration path is marked as ",r.a.createElement("em",null,"vetted")," by our team.")},unknown:{name:"unknown",title:"Unknown",path:"unknown",to:"unknown",columns:["source"],modules:[],help:r.a.createElement("p",null,"This page shows modules that are either custom code, or contributed modules without a known Drupal 9 replacement. For contributed projects, look to"," ",r.a.createElement(E.a,{title:"contrib_tracker",href:"https://www.drupal.org/project/issues/contrib_tracker"},"contrib_tracker")," ","for guidance. For custom code,"," ",r.a.createElement(E.a,{title:"drupalmoduleupgrader",href:"https://www.drupal.org/project/drupalmoduleupgrader"},"drupalmoduleupgrader")," ","can help get you started in the code porting process.")}},Pe=function(e){return e.availableToInstall?e.installed?{label:"Installed",title:"This module is installed",modifier:"installed"}:{label:"Not Enabled",title:"This module is present in the codebase but is not installed",modifier:"not-enabled"}:{label:"Not Installed",title:"This module is not available to install and must be downloaded using composer",modifier:"not-installed"}},Te=function(e,t,n){return e.availableToInstall?e.installed?null:{instruction:{href:"/admin/modules",title:"Enable this module"}}:"core"!==t&&n?{instruction:"Install with Composer:",detail:"composer require ".concat(n.packageName,":").concat(n.versionConstraint)}:null},qe=function(e){var t=e.id,n=e.type,a=e.attributes,r=e.links,o=a.modules,i=a.note,l=a.requirePackage,s=a.vetted,u=l&&"drupal/core"===l.packageName?"core":"other";return{id:t,type:n,vetted:s,category:u,note:i,links:r,modules:o?o.map((function(e){return Ne(Ne({},e),{},{installLabel:Pe(e),installInstructions:Te(e,u,l)})})):[]}},De=r.a.createContext(),Se=function(e){var t=e.basepathDashboard,n=e.source,o=e.children,i=Object(a.useState)([]),l=g()(i,2),s=l[0],u=l[1],c=Object(a.useContext)(ge.c).throwError,d=Object(ve.a)({href:n,handleError:c}),m=g()(d,1)[0],p=m.isLoading,f=m.document,h=_e(s.filter((function(e){return"Unknown"===e.recognitionState}))).projectInfo;return Object(a.useEffect)((function(){var e,t,n,a,r;f&&u((e=f.data,t=e.reduce((function(e,t){return e["sourceModule"===t.type?"sourceModules":"destModules"].push(t),e}),{sourceModules:[],destModules:[]}),n=t.sourceModules,a=t.destModules,r=function(e){return function(t){return(Object(j.f)(t,"relationships.recommendedFor.data")||[]).some((function(t){return e.type===t.type&&e.id===t.id}))}},n.map((function(e){return Ne(Ne({},function(e){return{id:e.id,title:e.attributes.humanName,version:e.attributes.version,recognitionState:e.attributes.recognitionState}}(e)),{},{replacementCandidates:a.filter(r(e)).map(qe)})}))))}),[f]),r.a.createElement(De.Provider,{value:{isLoading:p,modules:s,lists:Re,projectInfo:h,basepathDashboard:t}},o)};Se.propTypes={basepathDashboard:s.a.string.isRequired,source:s.a.string.isRequired,children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]).isRequired};var Ce=function(e){var t=e.list,n=e.modules,o=t.columns,i=t.help,l=Object(a.useContext)(De).projectInfo,s=l.status,u=l.completed,c=l.projects,d=n.reduce((function(e,t){return c.length&&e[c.includes(t.id)?"contrib":"custom"].push(t),e}),{contrib:[],custom:[]}),m=d.contrib,p=d.custom;return u?r.a.createElement("div",null,i,r.a.createElement(me,{projectInfo:l}),m?r.a.createElement(M,{title:"Contributed modules",modules:m,columns:o}):null,p?r.a.createElement(M,{title:"Modules of unknown origin (usually custom, sometimes submodules)",modules:p,columns:o}):null):r.a.createElement(pe.a,{message:s})},Me=Ce;Ce.propTypes={list:s.a.shape({title:s.a.string,columns:s.a.arrayOf(s.a.string),help:s.a.node}).isRequired,modules:s.a.arrayOf(s.a.shape({id:s.a.string,title:s.a.string,version:s.a.string})).isRequired};var Ae=n(52),Le=n(28),Ie=n(45),xe=n(69),Ve=n(49),Fe=n(41),Je=n(90),Ue=function(){var e=Object(u.useTracking)(),t=Object(a.useContext)(De),n=t.isLoading,o=t.lists,i=t.modules,l=t.basepathDashboard,s=!!i.length;if(Object(a.useEffect)((function(){setTimeout((function(){e.trackEvent({type:"User viewed modules auditor"})}),1e3)}),[]),!s)return r.a.createElement(m.a,{pending:n,empty:"No Module info."});var c=o.found,d=o.unknown,p=i.filter((function(e){return"Found"===e.recognitionState})),f=i.filter((function(e){return"Unknown"===e.recognitionState})),h=!!p.length,g=!!f.length;return r.a.createElement("div",null,r.a.createElement(Fe.a,null,r.a.createElement(Ae.a,null,r.a.createElement(Le.a,null,r.a.createElement(E.a,{href:"../../",title:"Home"},"Home")),r.a.createElement(Le.a,null,r.a.createElement(E.a,{href:l,title:"Migrations"},"Migrations")),r.a.createElement(Le.a,null,r.a.createElement("span",null,"Modules"))),r.a.createElement(Ie.a,{title:"Modules"}),r.a.createElement(xe.a,null,h?r.a.createElement(Ve.a,{to:c.to},c.title):null,g?r.a.createElement(Ve.a,{to:d.to},d.title):null)),r.a.createElement(Je.a,null,h?r.a.createElement(se,{path:c.path,list:c,modules:p}):null,g?r.a.createElement(Me,{path:d.path,list:d,modules:f}):null))},He=function(e){var t=e.basepath,n=e.basepathDashboard,a=e.source;return r.a.createElement("div",{className:"migrate-ui"},r.a.createElement(Se,{basepathDashboard:n,source:a},r.a.createElement(d.c,{basepath:t,primary:!1},r.a.createElement(Ue,{path:"/*"}))))},ze=new i.a,Ge=c()({},{dispatch:function(e){return ze.logEvent(e)}})(He);He.propTypes={basepath:s.a.string.isRequired,basepathDashboard:s.a.string.isRequired,source:s.a.string.isRequired};var Be=n(53);document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#decoupled-page-root"),t=e.getAttribute("data-module-path");n.p="/".concat(t,"/ui/dist/");var a=e.getAttribute("data-basepath"),l=e.getAttribute("data-basepath-dashboard"),s=e.getAttribute("data-source");(new i.a).init(e.getAttribute("data-tracking-api-key"),Object(Be.a)(e),void 0),e&&Object(o.render)(r.a.createElement(Ge,{basepath:a,basepathDashboard:l,source:s}),e)}))}});