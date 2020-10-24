var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function s(){return Object.create(null)}function l(t){t.forEach(n)}function r(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e,n,s){if(t){const l=a(t,e,n,s);return t[0](l)}}function a(t,n,s,l){return t[1]&&l?e(s.ctx.slice(),t[1](l(n))):s.ctx}function c(t,e,n,s,l,r,o){const i=function(t,e,n,s){if(t[2]&&s){const l=t[2](s(n));if(void 0===e.dirty)return l;if("object"==typeof l){const t=[],n=Math.max(e.dirty.length,l.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|l[s];return t}return e.dirty|l}return e.dirty}(e,s,l,r);if(i){const l=a(e,n,s,o);t.p(l,i)}}function u(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function $(t){return document.createElement(t)}function m(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function h(t){return document.createTextNode(t)}function g(){return h(" ")}function y(){return h("")}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t,e){for(const n in e)v(t,n,e[n])}function b(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function w(t,e,n){t.classList[n?"add":"remove"](e)}let q;function _(t){q=t}const N=[],k=[],S=[],z=[],C=Promise.resolve();let B=!1;function M(t){S.push(t)}let T=!1;const A=new Set;function E(){if(!T){T=!0;do{for(let t=0;t<N.length;t+=1){const e=N[t];_(e),j(e.$$)}for(_(null),N.length=0;k.length;)k.pop()();for(let t=0;t<S.length;t+=1){const e=S[t];A.has(e)||(A.add(e),e())}S.length=0}while(N.length);for(;z.length;)z.pop()();B=!1,T=!1,A.clear()}}function j(t){if(null!==t.fragment){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}const L=new Set;let P;function O(){P={r:0,c:[],p:P}}function U(){P.r||l(P.c),P=P.p}function H(t,e){t&&t.i&&(L.delete(t),t.i(e))}function R(t,e,n,s){if(t&&t.o){if(L.has(t))return;L.add(t),P.c.push((()=>{L.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function D(t,e){const n={},s={},l={$$scope:1};let r=t.length;for(;r--;){const o=t[r],i=e[r];if(i){for(const t in o)t in i||(s[t]=1);for(const t in i)l[t]||(n[t]=i[t],l[t]=1);t[r]=i}else for(const t in o)l[t]=1}for(const t in s)t in n||(n[t]=void 0);return n}function K(t){t&&t.c()}function V(t,e,s){const{fragment:o,on_mount:i,on_destroy:a,after_update:c}=t.$$;o&&o.m(e,s),M((()=>{const e=i.map(n).filter(r);a?a.push(...e):l(e),t.$$.on_mount=[]})),c.forEach(M)}function W(t,e){const n=t.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function I(t,e){-1===t.$$.dirty[0]&&(N.push(t),B||(B=!0,C.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function F(e,n,r,o,i,a,c=[-1]){const u=q;_(e);const f=n.props||{},d=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:i,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:s(),dirty:c,skip_bound:!1};let $=!1;if(d.ctx=r?r(e,f,((t,n,...s)=>{const l=s.length?s[0]:n;return d.ctx&&i(d.ctx[t],d.ctx[t]=l)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](l),$&&I(e,t)),n})):[],d.update(),$=!0,l(d.before_update),d.fragment=!!o&&o(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(p)}else d.fragment&&d.fragment.c();n.intro&&H(e.$$.fragment),V(e,n.target,n.anchor),E()}_(u)}class G{$destroy(){W(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function J(n){let s,l,r=[{key:l="path-"+n[0]},n[1]],o={};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);return{c(){s=m("path"),x(s,o)},m(t,e){f(t,s,e)},p(t,[e]){x(s,o=D(r,[1&e&&l!==(l="path-"+t[0])&&{key:l},2&e&&t[1]]))},i:t,o:t,d(t){t&&p(s)}}}function Q(t,e,n){let{id:s=""}=e,{data:l={}}=e;return t.$$set=t=>{"id"in t&&n(0,s=t.id),"data"in t&&n(1,l=t.data)},[s,l]}class X extends G{constructor(t){super(),F(this,t,Q,J,o,{id:0,data:1})}}function Y(n){let s,l,r=[{key:l="polygon-"+n[0]},n[1]],o={};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);return{c(){s=m("polygon"),x(s,o)},m(t,e){f(t,s,e)},p(t,[e]){x(s,o=D(r,[1&e&&l!==(l="polygon-"+t[0])&&{key:l},2&e&&t[1]]))},i:t,o:t,d(t){t&&p(s)}}}function Z(t,e,n){let{id:s=""}=e,{data:l={}}=e;return t.$$set=t=>{"id"in t&&n(0,s=t.id),"data"in t&&n(1,l=t.data)},[s,l]}class tt extends G{constructor(t){super(),F(this,t,Z,Y,o,{id:0,data:1})}}function et(e){let n;return{c(){n=m("g")},m(t,s){f(t,n,s),n.innerHTML=e[0]},p(t,[e]){1&e&&(n.innerHTML=t[0])},i:t,o:t,d(t){t&&p(n)}}}function nt(t,e,n){let s,l=870711;let{data:r}=e;function o(t){if(!t||!t.raw)return null;let e=t.raw;const n={};return e=e.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,((t,e)=>{const s=(l+=1,"fa-"+l.toString(16));return n[e]=s,` id="${s}"`})),e=e.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,((t,e,s,l)=>{const r=e||l;return r&&n[r]?"#"+n[r]:t})),e}return t.$$set=t=>{"data"in t&&n(1,r=t.data)},t.$$.update=()=>{2&t.$$.dirty&&n(0,s=o(r))},[s,r]}class st extends G{constructor(t){super(),F(this,t,nt,et,o,{data:1})}}function lt(t){let e,n,s,l;const r=t[13].default,o=i(r,t,t[12],null);return{c(){e=m("svg"),o&&o.c(),v(e,"version","1.1"),v(e,"class",n="fa-icon "+t[0]+" svelte-1qtaxzy"),v(e,"x",t[8]),v(e,"y",t[9]),v(e,"width",t[1]),v(e,"height",t[2]),v(e,"aria-label",t[11]),v(e,"role",s=t[11]?"img":"presentation"),v(e,"viewBox",t[3]),v(e,"style",t[10]),w(e,"fa-spin",t[4]),w(e,"fa-pulse",t[6]),w(e,"fa-inverse",t[5]),w(e,"fa-flip-horizontal","horizontal"===t[7]),w(e,"fa-flip-vertical","vertical"===t[7])},m(t,n){f(t,e,n),o&&o.m(e,null),l=!0},p(t,[i]){o&&o.p&&4096&i&&c(o,r,t,t[12],i,null,null),(!l||1&i&&n!==(n="fa-icon "+t[0]+" svelte-1qtaxzy"))&&v(e,"class",n),(!l||256&i)&&v(e,"x",t[8]),(!l||512&i)&&v(e,"y",t[9]),(!l||2&i)&&v(e,"width",t[1]),(!l||4&i)&&v(e,"height",t[2]),(!l||2048&i)&&v(e,"aria-label",t[11]),(!l||2048&i&&s!==(s=t[11]?"img":"presentation"))&&v(e,"role",s),(!l||8&i)&&v(e,"viewBox",t[3]),(!l||1024&i)&&v(e,"style",t[10]),17&i&&w(e,"fa-spin",t[4]),65&i&&w(e,"fa-pulse",t[6]),33&i&&w(e,"fa-inverse",t[5]),129&i&&w(e,"fa-flip-horizontal","horizontal"===t[7]),129&i&&w(e,"fa-flip-vertical","vertical"===t[7])},i(t){l||(H(o,t),l=!0)},o(t){R(o,t),l=!1},d(t){t&&p(e),o&&o.d(t)}}}function rt(t,e,n){let{$$slots:s={},$$scope:l}=e,{class:r}=e,{width:o}=e,{height:i}=e,{box:a}=e,{spin:c=!1}=e,{inverse:u=!1}=e,{pulse:f=!1}=e,{flip:p=null}=e,{x:d}=e,{y:$}=e,{style:m}=e,{label:h}=e;return t.$$set=t=>{"class"in t&&n(0,r=t.class),"width"in t&&n(1,o=t.width),"height"in t&&n(2,i=t.height),"box"in t&&n(3,a=t.box),"spin"in t&&n(4,c=t.spin),"inverse"in t&&n(5,u=t.inverse),"pulse"in t&&n(6,f=t.pulse),"flip"in t&&n(7,p=t.flip),"x"in t&&n(8,d=t.x),"y"in t&&n(9,$=t.y),"style"in t&&n(10,m=t.style),"label"in t&&n(11,h=t.label),"$$scope"in t&&n(12,l=t.$$scope)},[r,o,i,a,c,u,f,p,d,$,m,h,l,s]}class ot extends G{constructor(t){super(),F(this,t,rt,lt,o,{class:0,width:1,height:2,box:3,spin:4,inverse:5,pulse:6,flip:7,x:8,y:9,style:10,label:11})}}function it(t,e,n){const s=t.slice();return s[24]=e[n],s[26]=n,s}function at(t,e,n){const s=t.slice();return s[27]=e[n],s[26]=n,s}function ct(t){let e,n,s,l,r=t[0].paths&&ut(t),o=t[0].polygons&&pt(t),i=t[0].raw&&$t(t);return{c(){r&&r.c(),e=g(),o&&o.c(),n=g(),i&&i.c(),s=y()},m(t,a){r&&r.m(t,a),f(t,e,a),o&&o.m(t,a),f(t,n,a),i&&i.m(t,a),f(t,s,a),l=!0},p(t,l){t[0].paths?r?(r.p(t,l),1&l&&H(r,1)):(r=ut(t),r.c(),H(r,1),r.m(e.parentNode,e)):r&&(O(),R(r,1,1,(()=>{r=null})),U()),t[0].polygons?o?(o.p(t,l),1&l&&H(o,1)):(o=pt(t),o.c(),H(o,1),o.m(n.parentNode,n)):o&&(O(),R(o,1,1,(()=>{o=null})),U()),t[0].raw?i?(i.p(t,l),1&l&&H(i,1)):(i=$t(t),i.c(),H(i,1),i.m(s.parentNode,s)):i&&(O(),R(i,1,1,(()=>{i=null})),U())},i(t){l||(H(r),H(o),H(i),l=!0)},o(t){R(r),R(o),R(i),l=!1},d(t){r&&r.d(t),t&&p(e),o&&o.d(t),t&&p(n),i&&i.d(t),t&&p(s)}}}function ut(t){let e,n,s=t[0].paths,l=[];for(let e=0;e<s.length;e+=1)l[e]=ft(at(t,s,e));const r=t=>R(l[t],1,1,(()=>{l[t]=null}));return{c(){for(let t=0;t<l.length;t+=1)l[t].c();e=y()},m(t,s){for(let e=0;e<l.length;e+=1)l[e].m(t,s);f(t,e,s),n=!0},p(t,n){if(1&n){let o;for(s=t[0].paths,o=0;o<s.length;o+=1){const r=at(t,s,o);l[o]?(l[o].p(r,n),H(l[o],1)):(l[o]=ft(r),l[o].c(),H(l[o],1),l[o].m(e.parentNode,e))}for(O(),o=s.length;o<l.length;o+=1)r(o);U()}},i(t){if(!n){for(let t=0;t<s.length;t+=1)H(l[t]);n=!0}},o(t){l=l.filter(Boolean);for(let t=0;t<l.length;t+=1)R(l[t]);n=!1},d(t){d(l,t),t&&p(e)}}}function ft(t){let e,n;return e=new X({props:{id:t[26],data:t[27]}}),{c(){K(e.$$.fragment)},m(t,s){V(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.data=t[27]),e.$set(s)},i(t){n||(H(e.$$.fragment,t),n=!0)},o(t){R(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function pt(t){let e,n,s=t[0].polygons,l=[];for(let e=0;e<s.length;e+=1)l[e]=dt(it(t,s,e));const r=t=>R(l[t],1,1,(()=>{l[t]=null}));return{c(){for(let t=0;t<l.length;t+=1)l[t].c();e=y()},m(t,s){for(let e=0;e<l.length;e+=1)l[e].m(t,s);f(t,e,s),n=!0},p(t,n){if(1&n){let o;for(s=t[0].polygons,o=0;o<s.length;o+=1){const r=it(t,s,o);l[o]?(l[o].p(r,n),H(l[o],1)):(l[o]=dt(r),l[o].c(),H(l[o],1),l[o].m(e.parentNode,e))}for(O(),o=s.length;o<l.length;o+=1)r(o);U()}},i(t){if(!n){for(let t=0;t<s.length;t+=1)H(l[t]);n=!0}},o(t){l=l.filter(Boolean);for(let t=0;t<l.length;t+=1)R(l[t]);n=!1},d(t){d(l,t),t&&p(e)}}}function dt(t){let e,n;return e=new tt({props:{id:t[26],data:t[24]}}),{c(){K(e.$$.fragment)},m(t,s){V(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.data=t[24]),e.$set(s)},i(t){n||(H(e.$$.fragment,t),n=!0)},o(t){R(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function $t(t){let e,n,s;function l(e){t[15].call(null,e)}let r={};return void 0!==t[0]&&(r.data=t[0]),e=new st({props:r}),k.push((()=>function(t,e,n){const s=t.$$.props[e];void 0!==s&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}(e,"data",l))),{c(){K(e.$$.fragment)},m(t,n){V(e,t,n),s=!0},p(t,s){const l={};var r;!n&&1&s&&(n=!0,l.data=t[0],r=()=>n=!1,z.push(r)),e.$set(l)},i(t){s||(H(e.$$.fragment,t),s=!0)},o(t){R(e.$$.fragment,t),s=!1},d(t){W(e,t)}}}function mt(t){let e;const n=t[14].default,s=i(n,t,t[16],null),l=s||function(t){let e,n,s=t[0]&&ct(t);return{c(){s&&s.c(),e=y()},m(t,l){s&&s.m(t,l),f(t,e,l),n=!0},p(t,n){t[0]?s?(s.p(t,n),1&n&&H(s,1)):(s=ct(t),s.c(),H(s,1),s.m(e.parentNode,e)):s&&(O(),R(s,1,1,(()=>{s=null})),U())},i(t){n||(H(s),n=!0)},o(t){R(s),n=!1},d(t){s&&s.d(t),t&&p(e)}}}(t);return{c(){l&&l.c()},m(t,n){l&&l.m(t,n),e=!0},p(t,e){s?s.p&&65536&e&&c(s,n,t,t[16],e,null,null):l&&l.p&&1&e&&l.p(t,e)},i(t){e||(H(l,t),e=!0)},o(t){R(l,t),e=!1},d(t){l&&l.d(t)}}}function ht(t){let e,n;return e=new ot({props:{label:t[6],width:t[7],height:t[8],box:t[10],style:t[9],spin:t[2],flip:t[5],inverse:t[3],pulse:t[4],class:t[1],$$slots:{default:[mt]},$$scope:{ctx:t}}}),{c(){K(e.$$.fragment)},m(t,s){V(e,t,s),n=!0},p(t,[n]){const s={};64&n&&(s.label=t[6]),128&n&&(s.width=t[7]),256&n&&(s.height=t[8]),1024&n&&(s.box=t[10]),512&n&&(s.style=t[9]),4&n&&(s.spin=t[2]),32&n&&(s.flip=t[5]),8&n&&(s.inverse=t[3]),16&n&&(s.pulse=t[4]),2&n&&(s.class=t[1]),65537&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(H(e.$$.fragment,t),n=!0)},o(t){R(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function gt(t,e,n){let s,l,r,o,{$$slots:i={},$$scope:a}=e,{class:c=""}=e,{data:u}=e,{scale:f=1}=e,{spin:p=!1}=e,{inverse:d=!1}=e,{pulse:$=!1}=e,{flip:m=null}=e,{label:h=null}=e,{self:g=null}=e,{style:y=null}=e;function v(){let t=1;return void 0!==f&&(t=Number(f)),isNaN(t)||t<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.'),1):1*t}function x(){return g?Math.max(g.width,g.height)/16:1}return t.$$set=t=>{"class"in t&&n(1,c=t.class),"data"in t&&n(11,u=t.data),"scale"in t&&n(12,f=t.scale),"spin"in t&&n(2,p=t.spin),"inverse"in t&&n(3,d=t.inverse),"pulse"in t&&n(4,$=t.pulse),"flip"in t&&n(5,m=t.flip),"label"in t&&n(6,h=t.label),"self"in t&&n(0,g=t.self),"style"in t&&n(13,y=t.style),"$$scope"in t&&n(16,a=t.$$scope)},t.$$.update=()=>{14336&t.$$.dirty&&(!function(){if(void 0===u)return;const t=function(t){if("iconName"in t&&"icon"in t){let e={},n=t.icon,s=t.iconName,l={width:n[0],height:n[1],paths:[{d:n[4]}]};return e[s]=l,e}return t}(u),[e]=Object.keys(t),s=t[e];s.paths||(s.paths=[]),s.d&&s.paths.push({d:s.d}),s.polygons||(s.polygons=[]),s.points&&s.polygons.push({points:s.points}),n(0,g=s)}(),n(7,s=g?g.width/x()*v():0),n(8,l=g?g.height/x()*v():0),n(9,r=function(){let t="";null!==y&&(t+=y);let e=v();return 1===e?t:(""===t||t.endsWith(";")||(t+="; "),`${t}font-size: ${e}em`)}()),n(10,o=g?`0 0 ${g.width} ${g.height}`:`0 0 ${s} ${l}`))},[g,c,p,d,$,m,h,s,l,r,o,u,f,y,i,function(t){g=t,n(0,g)},a]}class yt extends G{constructor(t){super(),F(this,t,gt,ht,o,{class:1,data:11,scale:12,spin:2,inverse:3,pulse:4,flip:5,label:6,self:0,style:13})}}var vt={star:{width:1664,height:1792,paths:[{d:"M1664 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"}]}};function xt(t,e,n){const s=t.slice();return s[4]=e[n],s}function bt(e){let n,s,l,r;return s=new yt({props:{data:vt}}),{c(){n=$("li"),K(s.$$.fragment),l=g(),v(n,"class","svelte-1dxi9rq")},m(t,e){f(t,n,e),V(s,n,null),u(n,l),r=!0},p:t,i(t){r||(H(s.$$.fragment,t),r=!0)},o(t){R(s.$$.fragment,t),r=!1},d(t){t&&p(n),W(s)}}}function wt(t){let e,n,s,l,r,o,a,m,y,x,w,q,_,N=Array(t[0]),k=[];for(let e=0;e<N.length;e+=1)k[e]=bt(xt(t,N,e));const S=t=>R(k[t],1,1,(()=>{k[t]=null})),z=t[3].default,C=i(z,t,t[2],null),B=C||function(t){let e;return{c(){e=h("Undefined Name")},m(t,n){f(t,e,n)},d(t){t&&p(e)}}}();return{c(){e=$("div"),n=$("ul");for(let t=0;t<k.length;t+=1)k[t].c();s=g(),l=$("div"),r=$("span"),o=h("Rated "),a=h(t[0]),m=h("/"),y=h(t[1]),x=h(" stars by"),w=g(),q=$("h2"),B&&B.c(),v(n,"class","stars svelte-1dxi9rq"),v(q,"class","svelte-1dxi9rq"),v(l,"class","text svelte-1dxi9rq"),v(e,"class","rating svelte-1dxi9rq")},m(t,i){f(t,e,i),u(e,n);for(let t=0;t<k.length;t+=1)k[t].m(n,null);u(e,s),u(e,l),u(l,r),u(r,o),u(r,a),u(r,m),u(r,y),u(r,x),u(l,w),u(l,q),B&&B.m(q,null),_=!0},p(t,[e]){if(1&e){let s;for(N=Array(t[0]),s=0;s<N.length;s+=1){const l=xt(t,N,s);k[s]?(k[s].p(l,e),H(k[s],1)):(k[s]=bt(),k[s].c(),H(k[s],1),k[s].m(n,null))}for(O(),s=N.length;s<k.length;s+=1)S(s);U()}(!_||1&e)&&b(a,t[0]),(!_||2&e)&&b(y,t[1]),C&&C.p&&4&e&&c(C,z,t,t[2],e,null,null)},i(t){if(!_){for(let t=0;t<N.length;t+=1)H(k[t]);H(B,t),_=!0}},o(t){k=k.filter(Boolean);for(let t=0;t<k.length;t+=1)R(k[t]);R(B,t),_=!1},d(t){t&&p(e),d(k,t),B&&B.d(t)}}}function qt(t,e,n){let{$$slots:s={},$$scope:l}=e,{stars:r=5}=e,{totalStars:o=r}=e;return t.$$set=t=>{"stars"in t&&n(0,r=t.stars),"totalStars"in t&&n(1,o=t.totalStars),"$$scope"in t&&n(2,l=t.$$scope)},[r,o,l,s]}class _t extends G{constructor(t){super(),F(this,t,qt,wt,o,{stars:0,totalStars:1})}}const Nt=t=>({}),kt=t=>({});function St(t){let e,n,s,l,r,o,a,d,m,y,x;const b=t[2].user,w=i(b,t,t[1],kt),q=w||function(t){let e;return{c(){e=h("User Undefined")},m(t,n){f(t,e,n)},d(t){t&&p(e)}}}(),_=t[2].default,N=i(_,t,t[1],null),k=N||function(t){let e;return{c(){e=h("Review Undefined")},m(t,n){f(t,e,n)},d(t){t&&p(e)}}}();return{c(){e=$("div"),n=$("img"),l=g(),r=$("div"),o=$("h3"),q&&q.c(),a=g(),d=$("h4"),d.textContent="Verified Buyer",m=g(),y=$("blockquote"),k&&k.c(),n.src!==(s=t[0])&&v(n,"src",s),v(n,"alt","user"),v(n,"width","100%"),v(n,"height","100%"),v(n,"class","svelte-1dma1g6"),v(o,"class","name svelte-1dma1g6"),v(d,"class","svelte-1dma1g6"),v(r,"class","title svelte-1dma1g6"),v(y,"class","svelte-1dma1g6"),v(e,"class","card svelte-1dma1g6")},m(t,s){f(t,e,s),u(e,n),u(e,l),u(e,r),u(r,o),q&&q.m(o,null),u(r,a),u(r,d),u(e,m),u(e,y),k&&k.m(y,null),x=!0},p(t,[e]){(!x||1&e&&n.src!==(s=t[0]))&&v(n,"src",s),w&&w.p&&2&e&&c(w,b,t,t[1],e,Nt,kt),N&&N.p&&2&e&&c(N,_,t,t[1],e,null,null)},i(t){x||(H(q,t),H(k,t),x=!0)},o(t){R(q,t),R(k,t),x=!1},d(t){t&&p(e),q&&q.d(t),k&&k.d(t)}}}function zt(t,e,n){let{$$slots:s={},$$scope:l}=e,{avatar:r="https://unsplash.it/50?random=1"}=e;return t.$$set=t=>{"avatar"in t&&n(0,r=t.avatar),"$$scope"in t&&n(1,l=t.$$scope)},[r,l,s]}class Ct extends G{constructor(t){super(),F(this,t,zt,St,o,{avatar:0})}}function Bt(t){let e;return{c(){e=h("KP News")},m(t,n){f(t,e,n)},d(t){t&&p(e)}}}function Mt(t){let e;return{c(){e=h("Tech Reviews")},m(t,n){f(t,e,n)},d(t){t&&p(e)}}}function Tt(t){let e;return{c(){e=h("Social Swamp")},m(t,n){f(t,e,n)},d(t){t&&p(e)}}}function At(t){let e;return{c(){e=$("span"),e.textContent="Brent Sux",v(e,"slot","user")},m(t,n){f(t,e,n)},d(t){t&&p(e)}}}function Et(e){let n;return{c(){n=h("\n      Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec rutrum congue leo eget malesuada. Sed porttitor\n      lectus nibh.")},m(t,e){f(t,n,e)},p:t,d(t){t&&p(n)}}}function jt(t){let e;return{c(){e=$("span"),e.textContent="Kyle Wads",v(e,"slot","user")},m(t,n){f(t,e,n)},d(t){t&&p(e)}}}function Lt(e){let n;return{c(){n=h("\n      Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur aliquet quam id dui posuere blandit.")},m(t,e){f(t,n,e)},p:t,d(t){t&&p(n)}}}function Pt(t){let e;return{c(){e=$("span"),e.textContent="PB Powell",v(e,"slot","user")},m(t,n){f(t,e,n)},d(t){t&&p(e)}}}function Ot(e){let n;return{c(){n=h("\n      Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit met nisl tempus convallis\n      quis ac lectus.")},m(t,e){f(t,n,e)},p:t,d(t){t&&p(n)}}}function Ut(t){let e,n,s,l,r,o,i,a,c,d,m,h,y,x,b,w,q;return r=new _t({props:{stars:4,totalStars:5,$$slots:{default:[Bt]},$$scope:{ctx:t}}}),i=new _t({props:{stars:3,$$slots:{default:[Mt]},$$scope:{ctx:t}}}),c=new _t({props:{$$slots:{default:[Tt]},$$scope:{ctx:t}}}),h=new Ct({props:{avatar:"https://unsplash.it/50?random=2",$$slots:{default:[Et],user:[At]},$$scope:{ctx:t}}}),x=new Ct({props:{$$slots:{default:[Lt],user:[jt]},$$scope:{ctx:t}}}),w=new Ct({props:{avatar:"https://unsplash.it/50?random=3",$$slots:{default:[Ot],user:[Pt]},$$scope:{ctx:t}}}),{c(){e=$("main"),n=$("section"),n.innerHTML='<h1 class="svelte-1wv75yz">Some big arse headline because why not.</h1> \n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores et impedit dolorem molestias alias aliquam aut\n      iure doloribus tempore praesentium! Culpa laudantium enim quam tempore. Totam enim aperiam dolorem?</p>',s=g(),l=$("section"),K(r.$$.fragment),o=g(),K(i.$$.fragment),a=g(),K(c.$$.fragment),d=g(),m=$("section"),K(h.$$.fragment),y=g(),K(x.$$.fragment),b=g(),K(w.$$.fragment),v(n,"class","header svelte-1wv75yz"),v(l,"class","ratings svelte-1wv75yz"),v(m,"class","reviews svelte-1wv75yz"),v(e,"class","svelte-1wv75yz")},m(t,p){f(t,e,p),u(e,n),u(e,s),u(e,l),V(r,l,null),u(l,o),V(i,l,null),u(l,a),V(c,l,null),u(e,d),u(e,m),V(h,m,null),u(m,y),V(x,m,null),u(m,b),V(w,m,null),q=!0},p(t,[e]){const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),r.$set(n);const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),i.$set(s);const l={};1&e&&(l.$$scope={dirty:e,ctx:t}),c.$set(l);const o={};1&e&&(o.$$scope={dirty:e,ctx:t}),h.$set(o);const a={};1&e&&(a.$$scope={dirty:e,ctx:t}),x.$set(a);const u={};1&e&&(u.$$scope={dirty:e,ctx:t}),w.$set(u)},i(t){q||(H(r.$$.fragment,t),H(i.$$.fragment,t),H(c.$$.fragment,t),H(h.$$.fragment,t),H(x.$$.fragment,t),H(w.$$.fragment,t),q=!0)},o(t){R(r.$$.fragment,t),R(i.$$.fragment,t),R(c.$$.fragment,t),R(h.$$.fragment,t),R(x.$$.fragment,t),R(w.$$.fragment,t),q=!1},d(t){t&&p(e),W(r),W(i),W(c),W(h),W(x),W(w)}}}return new class extends G{constructor(t){super(),F(this,t,null,Ut,o,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
