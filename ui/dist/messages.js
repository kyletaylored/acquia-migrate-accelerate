!function(e){function t(t){for(var n,l,s=t[0],o=t[1],c=t[2],m=0,f=[];m<s.length;m++)l=s[m],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&f.push(r[l][0]),r[l]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(u&&u(t);f.length;)f.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,s=1;s<a.length;s++){var o=a[s];0!==r[o]&&(n=!1)}n&&(i.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},r={2:0},i=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=n);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=function(e){return l.p+""+({5:"tracker"}[e]||e)+".bundle.js"}(e);var o=new Error;i=function(t){s.onerror=s.onload=null,clearTimeout(c);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;o.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",o.name="ChunkLoadError",o.type=n,o.request=i,a[1](o)}r[e]=void 0}};var c=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var s=window.webpackJsonp=window.webpackJsonp||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=o;i.push([245,0]),a()}({245:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(23),l=a(22),s=(a.p,a(1)),o=a.n(s),c=a(20),u=a.n(c),m=a(41),f=a(153),d=a(248),p=a(35),g=function(e,t){return e.id===t.id},v=function(e){var t=e.className,a=e.children;return r.a.createElement("div",{className:"message_grid__col ".concat(t)},a)},b=function(e){var t=e.message,a=(e.className,t.datetime),n=t.migration,i=t.plugin,l=t.sourceId,s=t.type,o=t.severity,c=t.text,u=t.solution,m=Object(f.a)(Object(d.a)(a),p.a);return r.a.createElement("div",{className:"message_grid"},r.a.createElement(v,{className:"message_row__datetime"},m),r.a.createElement(v,{className:"message_row__severity"},o),r.a.createElement(v,{className:"message_row__title"},n,r.a.createElement("br",null),r.a.createElement("code",null,i)),r.a.createElement(v,{className:"message_row__source"},r.a.createElement("label",{className:"form-item__label"},"Source ID:"),r.a.createElement("code",null,l)),r.a.createElement(v,{className:"message_row__type"},r.a.createElement("label",{className:"form-item__label"},"Type:"),r.a.createElement("code",null,s)),r.a.createElement(v,{className:"message_row__text message_row__message"},r.a.createElement("label",{className:"form-item__label"},"Message:"),r.a.createElement("div",{className:"message__text"},c)),r.a.createElement(v,{className:"message_row__text message_row__solution"},r.a.createElement("label",{className:"form-item__label"},"Solution:"),r.a.createElement("div",{className:"message__text"},u||"No solution currently available")))},h=r.a.memo(b,g);v.propTypes={className:o.a.string,children:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node])},v.defaultProps={className:"",children:""},b.propTypes={message:o.a.shape({datetime:o.a.string,migration:o.a.string,plugin:o.a.string,sourceId:o.a.string,type:o.a.string,severity:o.a.string,text:o.a.string,solution:o.a.string}),className:o.a.string},b.defaultProps={message:o.a.objectOf(null),className:""};var y=a(44),O=a(2),E=a.n(O),w=a(6),j=a.n(w),_=a(15),N=function(e){return{url:e.href,path:e.pathname}},R=r.a.createContext({}),P=function(e){var t=e.children,a=Object(n.useState)(N(window.location)),i=E()(a,2),l=i[0],s=i[1];Object(n.useEffect)((function(){window.addEventListener("popstate",(function(){s(N(window.location))}))}));var o={windowURL:l.url,windowPath:l.path,setWindowURL:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";window.history.pushState(null,t.length||document.title,e||window.location.pathname),s(N(window.location))}};return r.a.createElement(R.Provider,{value:o},t)};function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(Object(a),!0).forEach((function(t){j()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}P.propTypes={children:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node]).isRequired};var T=function(e){return Object(_.g)(e).join("-")},k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.map((function(e){var a=t.find((function(t){return t.field===e.field}));return C(C({},e),{},{value:a?a.value:""})}))},D=function(e,t){switch(t.type){case"init":return C({},t.filters);case"navigate":return C(C({},e),{},{fields:k(e.fields,Object(_.f)(t.params))});case"filterChange":return C(C({},e),{},{fields:e.fields.map((function(e){return e.field===t.filter.field?C(C({},e),t.filter):e}))});case"filterClear":return C(C({},e),{},{fields:k(e.fields)});default:return e}},q=function(){var e=Object(n.useContext)(R),t=e.windowURL,a=e.windowPath,r=e.setWindowURL,i=Object(n.useReducer)(D,{}),l=E()(i,2),s=l[0],o=l[1],c=T(s.fields||[]),u=T(Object(_.f)(Object(_.e)(t))),m=function(){var e=Object(_.g)(s.fields),t=Object(_.a)({filter:e},s.template);r(Object(_.b)(t))};return Object(n.useEffect)((function(){s.fields&&o({type:"navigate",params:Object(_.e)(t)})}),[t]),Object(n.useEffect)((function(){s.fields&&c!==u&&m()}),[c]),{filters:s,setFields:function(e){o({type:"init",filters:Object(_.c)(e,Object(_.f)(Object(_.e)(t)))})},updateFilter:function(e){o({type:"filterChange",filter:e})},submitFilters:m,clearFilters:function(){r(a)}}},L=a(3),S=a(91),M=a(66),F=a(78),U=a(9),A=a.n(U),I=a(10),H=a.n(I),J=a(24),V=a.n(J),W=a(13),G=a.n(W),z=a(14),B=a.n(z),K=a(4),Q=a.n(K);function X(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Q()(e);if(t){var r=Q()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return B()(this,a)}}var Y=function(e){G()(a,e);var t=X(a);function a(){return A()(this,a),t.apply(this,arguments)}return H()(a,[{key:"withValue",value:function(e){return new a({name:this.name,value:e})}},{key:"test",value:function(e){return V()(Q()(a.prototype),"test",this).call(this,[e.migration,e.plugin,e.text,e.solution])}}]),a}(a(67).a);function Z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Q()(e);if(t){var r=Q()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return B()(this,a)}}var $=function(e){G()(a,e);var t=Z(a);function a(){return A()(this,a),t.apply(this,arguments)}return H()(a,[{key:"withValue",value:function(e){return new a({name:this.name,value:e})}},{key:"test",value:function(e){return V()(Q()(a.prototype),"test",this).call(this,e.solution)}}]),a}(a(71).a),ee=r.a.createContext({}),te=function(e){var t=e.basepathDashboard,a=e.source,i=e.children,l=Object(n.useContext)(R).windowURL,s=Object(S.a)({href:a,uriTemplateParams:Object(_.e)(l),handleError:console.error}),o=s.isLoading,c=s.document,u=Object(n.useState)([]),m=E()(u,2),f=m[0],d=m[1],p=Object(M.a)({searchText:new Y({name:"searchText",value:""}),solutionOnly:new $({name:"solutionOnly",value:!1})}),g=p.limiters,v=p.updateLimiter,b=Object(F.a)(f,g),h=Object(n.useState)(null),y=E()(h,2),O=y[0],w=y[1],j=q(),N=j.filters,P=j.setFields,x=j.updateFilter,C=j.submitFilters,T=j.clearFilters;return Object(n.useEffect)((function(){O&&P(O)}),[O]),Object(n.useEffect)((function(){if(c){var e=c.data,t=c.included,a=c.links,n=void 0===a?{}:a,r=Object(L.o)(n)[0];r&&w(r),d(e.map((function(e){return function(e,t){var a=e.id,n=e.attributes,r=e.relationships,i=e.links,l=n.datetime,s=n.severity,o=n.message,c=n.messageCategory,u=n.solution,m=r.sourceMigration,f=r.sourceMigrationPlugin,d=function(e,t){return e.data.hasOwnProperty("meta")?e.data.meta.label:t.find((function(t){return t.id===e.data.id})).attributes.label}(m,t),p=f.data.id;return{id:a,sourceId:i&&i.hasOwnProperty("source")?Object(L.G)(Object(L.f)(i.source,"meta.source-identifiers")):"",datetime:l,migration:d,plugin:p,type:c,severity:Object(L.f)(i,"severity.title")||s,text:o,solution:u}}(e,t)})))}}),[c]),r.a.createElement(ee.Provider,{value:{basepathDashboard:t,messages:b,filters:N,updateFilter:x,submitFilters:C,clearFilters:T,limiters:g,updateLimiter:v,isLoading:o}},i)};te.propTypes={basepathDashboard:o.a.string.isRequired,source:o.a.string.isRequired,children:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node]).isRequired};var ae=function(){var e=Object(c.useTracking)(),t=Object(n.useContext)(ee),a=t.messages,i=t.isLoading,l=!!a.length;return Object(n.useEffect)((function(){setTimeout((function(){e.trackEvent({type:"User viewed messages console"})}),1e3)}),[]),r.a.createElement("div",{className:"messages__list"},l?r.a.createElement("div",null,a.map((function(e){return r.a.createElement(h,{key:e.id,message:e})}))):r.a.createElement(y.a,{pending:i,empty:"No Messages found."}))},ne=a(68),re=a.n(ne),ie=function(e){var t=e.options,a=e.name,n=e.label,i=e.value,l=e.multiple,s=void 0!==l&&l,o=e.children,c=e.onChange;return r.a.createElement("div",{className:"form-item form-type--select form-item--select-".concat(s?"multiple":"single")},n&&r.a.createElement("label",{htmlFor:a,className:"form-item__label"},n),r.a.createElement("select",re()({name:a,className:"form-select form-element form-element--type-".concat(s?"select-multiple":"select"),onChange:c,value:i},s?{multiple:s}:void 0,o?{"aria-describedby":"".concat(a,"--description")}:void 0),r.a.createElement("option",{value:""},"--"),t.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.label)}))),o&&r.a.createElement("div",{id:"".concat(a,"--description"),className:"form-item__description"},o))},le=ie;ie.propTypes={options:o.a.arrayOf(o.a.shape({label:o.a.string.isRequired,value:o.a.string.isRequired})),name:o.a.string.isRequired,label:o.a.string,value:o.a.string.isRequired,multiple:o.a.bool,children:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node]),onChange:o.a.func.isRequired},ie.defaultProps={label:null,multiple:!1,options:[],children:null};var se=a(43),oe=function(e){var t=e.field,a=e.update,n=t.field,i=t.label,l=t.operator,s=t.value,o=t.options,c=function(e){a({field:n,operator:l,value:e.target.value})};return r.a.createElement(r.a.Fragment,null,o?r.a.createElement(le,{label:i,name:n,value:s,options:o,onChange:c}):r.a.createElement(se.a,{label:i,name:n,value:s,onChange:c}))},ce=oe;oe.propTypes={field:o.a.shape({cardinality:o.a.number.isRequired,field:o.a.string.isRequired,label:o.a.string.isRequired,operator:o.a.string.isRequired,value:o.a.string,options:o.a.arrayOf(o.a.shape({label:o.a.string,value:o.a.string}))}).isRequired,update:o.a.func.isRequired};var ue=a(27),me=function(){var e=Object(n.useContext)(ee),t=e.filters,a=e.updateFilter,i=e.clearFilters,l=t.fields;return l?r.a.createElement("form",{className:"messages__filters exposed-form"},l.map((function(e){return r.a.createElement(ce,{key:e.field,field:e,update:a})})),r.a.createElement("div",{className:"form-actions form-item exposed-form__item--actions"},r.a.createElement("input",{onClick:function(e){e.preventDefault(),i(e)},className:"button form-submit",value:"Clear filters",type:"button"}))):r.a.createElement(ue.a,{message:"Loading…"})},fe=a(79),de=function(){var e=Object(n.useContext)(ee),t=e.limiters,a=t.searchText,i=t.solutionOnly,l=e.updateLimiter;return r.a.createElement("div",{className:"message_limiter"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},r.a.createElement(se.a,{name:a.name,label:"Search for text",value:a.value,onChange:function(e){l(a.name,e.target.value)},type:"search",validation:{minLength:"3"}},"Limit messages to those that have matching text in any of these fields: ",r.a.createElement("em",null,"Migration"),", ",r.a.createElement("em",null,"Migration Plugin"),","," ",r.a.createElement("em",null,"Message"),", or ",r.a.createElement("em",null,"Solution"),"."),r.a.createElement(fe.a,{name:i.name,label:"Hide messages without a solution",checked:i.value,toggle:function(){l(i.name,!i.value)}})))},pe=a(11),ge=a(52),ve=a(28),be=a(45),he=function(){var e=Object(n.useContext)(ee).basepathDashboard;return r.a.createElement("div",{className:"region-content"},r.a.createElement(m.a,null,r.a.createElement(ge.a,null,r.a.createElement(ve.a,null,r.a.createElement(pe.a,{href:"../../",title:"Home"},"Home")),r.a.createElement(ve.a,null,r.a.createElement(pe.a,{href:e,title:"Migrations"},"Migrations")),r.a.createElement(ve.a,null,r.a.createElement("span",null,"Messages"))),r.a.createElement(be.a,{title:"Messages"})),r.a.createElement("div",null,r.a.createElement(me,null),r.a.createElement(de,null)),r.a.createElement("div",null,r.a.createElement(ae,null)))},ye=function(e){var t=e.basepathDashboard,a=e.source;return r.a.createElement("div",{className:"migrate-ui__messages"},r.a.createElement(P,null,r.a.createElement(te,{source:a,basepathDashboard:t},r.a.createElement(he,null))))},Oe=new l.a,Ee=u()({},{dispatch:function(e){return Oe.logEvent(e)}})(ye);ye.propTypes={basepathDashboard:o.a.string.isRequired,source:o.a.string.isRequired};var we=a(53);document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#decoupled-page-root"),t=e.getAttribute("data-module-path");a.p="/".concat(t,"/ui/dist/");var n=e.getAttribute("data-basepath-dashboard"),s=e.getAttribute("data-source");(new l.a).init(e.getAttribute("data-tracking-api-key"),Object(we.a)(e),void 0),e&&Object(i.render)(r.a.createElement(Ee,{basepathDashboard:n,source:s}),e)}))}});