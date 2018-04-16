!function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},n=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var i=Object.getPrototypeOf(e);return null===i?void 0:get(i,t,n)}if("value"in r)return r.value;var o=r.get;return void 0!==o?o.call(n):void 0},i=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},a=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},s=new Map,l=function(){function TemplateResult(e,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:T;t(this,TemplateResult),this.strings=e,this.values=n,this.type=r,this.partCallback=i}return n(TemplateResult,[{key:"getHTML",value:function getHTML(){for(var e,t,n=this.strings.length-1,r="",i=!0,o=0;o<n;o++){var a=this.strings[o];r+=a;var s=(t=(e=a).lastIndexOf(">"),e.indexOf("<",t+1)>-1?e.length:t);r+=(i=s>-1?s<a.length:i)?c:u}return r+this.strings[n]}},{key:"getTemplateElement",value:function getTemplateElement(){var e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}]),TemplateResult}();function defaultTemplateFactory(e){var t=s.get(e.type);void 0===t&&(t=new Map,s.set(e.type,t));var n=t.get(e.strings);return void 0===n&&(n=new d(e,e.getTemplateElement()),t.set(e.strings,n)),n}!function(e){function SVGTemplateResult(){return t(this,SVGTemplateResult),o(this,(SVGTemplateResult.__proto__||Object.getPrototypeOf(SVGTemplateResult)).apply(this,arguments))}i(SVGTemplateResult,l),n(SVGTemplateResult,[{key:"getHTML",value:function getHTML(){return"<svg>"+r(SVGTemplateResult.prototype.__proto__||Object.getPrototypeOf(SVGTemplateResult.prototype),"getHTML",this).call(this)+"</svg>"}},{key:"getTemplateElement",value:function getTemplateElement(){var e=r(SVGTemplateResult.prototype.__proto__||Object.getPrototypeOf(SVGTemplateResult.prototype),"getTemplateElement",this).call(this),t=e.content,n=t.firstChild;return t.removeChild(n),P(t,n.firstChild),e}}])}();var u="{{lit-"+String(Math.random()).slice(2)+"}}",c="\x3c!--"+u+"--\x3e",p=new RegExp(u+"|"+c),h=/[ \x09\x0a\x0c\x0d]([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)[ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*)$/,f=function TemplatePart(e,n,r,i,o){t(this,TemplatePart),this.type=e,this.index=n,this.name=r,this.rawName=i,this.strings=o},d=function Template(e,n){t(this,Template),this.parts=[],this.element=n;for(var r=this.element.content,i=document.createTreeWalker(r,133,null,!1),o=-1,a=0,s=[],l=void 0,c=void 0;i.nextNode();){o++,l=c;var d=c=i.currentNode;if(1===d.nodeType){if(!d.hasAttributes())continue;for(var v=d.attributes,m=0,y=0;y<v.length;y++)v[y].value.indexOf(u)>=0&&m++;for(;m-- >0;){var g=e.strings[a],_=h.exec(g)[1],b=v.getNamedItem(_),T=b.value.split(p);this.parts.push(new f("attribute",o,b.name,_,T)),d.removeAttribute(b.name),a+=T.length-1}}else if(3===d.nodeType){var x=d.nodeValue;if(x.indexOf(u)<0)continue;var P=d.parentNode,N=x.split(p),w=N.length-1;a+=w;for(var V=0;V<w;V++)console.log(P.nodeName),P.insertBefore(""===N[V]?document.createComment(""):document.createTextNode(N[V]),d),this.parts.push(new f("node",o++));P.insertBefore(""===N[w]?document.createComment(""):document.createTextNode(N[w]),d),s.push(d)}else if(8===d.nodeType&&d.nodeValue===u){var k=d.parentNode,S=d.previousSibling;null===S||S!==l||S.nodeType!==Node.TEXT_NODE?k.insertBefore(document.createComment(""),d):o--,this.parts.push(new f("node",o++)),s.push(d),null===d.nextSibling?k.insertBefore(document.createComment(""),d):o--,c=l,a++}}var O=!0,E=!1,A=void 0;try{for(var C,M=s[Symbol.iterator]();!(O=(C=M.next()).done);O=!0){var R=C.value;R.parentNode.removeChild(R)}}catch(e){E=!0,A=e}finally{try{!O&&M.return&&M.return()}finally{if(E)throw A}}},v=function getValue(e,t){return m(t)?(t=t(e),y):null===t?void 0:t},m=function isDirective(e){return"function"==typeof e&&!0===e.__litDirective},y={},g=function isPrimitiveValue(t){return null===t||!("object"===(void 0===t?"undefined":e(t))||"function"==typeof t)},_=function(){function AttributePart(e,n,r,i){t(this,AttributePart),this.instance=e,this.element=n,this.name=r,this.strings=i,this.size=i.length-1,this._previousValues=[]}return n(AttributePart,[{key:"_interpolate",value:function _interpolate(e,t){for(var n=this.strings,r=n.length-1,i="",o=0;o<r;o++){i+=n[o];var a=v(this,e[t+o]);if(a&&a!==y&&(Array.isArray(a)||"string"!=typeof a&&a[Symbol.iterator])){var s=!0,l=!1,u=void 0;try{for(var c,p=a[Symbol.iterator]();!(s=(c=p.next()).done);s=!0)i+=c.value}catch(e){l=!0,u=e}finally{try{!s&&p.return&&p.return()}finally{if(l)throw u}}}else i+=a}return i+n[r]}},{key:"_equalToPreviousValues",value:function _equalToPreviousValues(e,t){for(var n=t;n<t+this.size;n++)if(this._previousValues[n]!==e[n]||!g(e[n]))return!1;return!0}},{key:"setValue",value:function setValue(e,t){if(!this._equalToPreviousValues(e,t)){var n=this.strings,r=void 0;2===n.length&&""===n[0]&&""===n[1]?(r=v(this,e[t]),Array.isArray(r)&&(r=r.join(""))):r=this._interpolate(e,t),r!==y&&this.element.setAttribute(this.name,r),this._previousValues=e}}}]),AttributePart}(),b=function(){function NodePart(e,n,r){t(this,NodePart),this.instance=e,this.startNode=n,this.endNode=r,this._previousValue=void 0}return n(NodePart,[{key:"setValue",value:function setValue(e){if((e=v(this,e))!==y)if(g(e)){if(e===this._previousValue)return;this._setText(e)}else e instanceof l?this._setTemplateResult(e):Array.isArray(e)||e[Symbol.iterator]?this._setIterable(e):e instanceof Node?this._setNode(e):void 0!==e.then?this._setPromise(e):this._setText(e)}},{key:"_insert",value:function _insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}},{key:"_setNode",value:function _setNode(e){this._previousValue!==e&&(this.clear(),this._insert(e),this._previousValue=e)}},{key:"_setText",value:function _setText(e){var t=this.startNode.nextSibling;e=void 0===e?"":e,t===this.endNode.previousSibling&&t.nodeType===Node.TEXT_NODE?t.textContent=e:this._setNode(document.createTextNode(e)),this._previousValue=e}},{key:"_setTemplateResult",value:function _setTemplateResult(e){var t=this.instance._getTemplate(e),n=void 0;this._previousValue&&this._previousValue.template===t?n=this._previousValue:(n=new x(t,this.instance._partCallback,this.instance._getTemplate),this._setNode(n._clone()),this._previousValue=n),n.update(e.values)}},{key:"_setIterable",value:function _setIterable(e){Array.isArray(this._previousValue)||(this.clear(),this._previousValue=[]);var t=this._previousValue,n=0,r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var l=a.value,u=t[n];if(void 0===u){var c=this.startNode;n>0&&(c=t[n-1].endNode=document.createTextNode(""),this._insert(c)),u=new NodePart(this.instance,c,this.endNode),t.push(u)}u.setValue(l),n++}}catch(e){i=!0,o=e}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}if(0===n)this.clear(),this._previousValue=void 0;else if(n<t.length){var p=t[n-1];t.length=n,this.clear(p.endNode.previousSibling),p.endNode=this.endNode}}},{key:"_setPromise",value:function _setPromise(e){var t=this;this._previousValue=e,e.then(function(n){t._previousValue===e&&t.setValue(n)})}},{key:"clear",value:function clear(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;N(this.startNode.parentNode,e.nextSibling,this.endNode)}}]),NodePart}(),T=function defaultPartCallback(e,t,n){if("attribute"===t.type)return new _(e,n,t.name,t.strings);if("node"===t.type)return new b(e,n,n.nextSibling);throw new Error("Unknown part type "+t.type)},x=function(){function TemplateInstance(e,n,r){t(this,TemplateInstance),this._parts=[],this.template=e,this._partCallback=n,this._getTemplate=r}return n(TemplateInstance,[{key:"update",value:function update(e){var t=0,n=!0,r=!1,i=void 0;try{for(var o,a=this._parts[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;void 0===s.size?(s.setValue(e[t]),t++):(s.setValue(e,t),t+=s.size)}}catch(e){r=!0,i=e}finally{try{!n&&a.return&&a.return()}finally{if(r)throw i}}}},{key:"_clone",value:function _clone(){var e=document.importNode(this.template.element.content,!0),t=this.template.parts;if(t.length>0)for(var n=document.createTreeWalker(e,133,null,!1),r=-1,i=0;i<t.length;i++){for(var o=t[i];r<o.index;)r++,n.nextNode();var a=n.currentNode;null!==a.nextSibling&&8===a.nextSibling.nodeType&&a.parentNode.replaceChild(document.createTextNode(""),a.nextSibling),8===a.nodeType&&(a=document.createTextNode(""),n.currentNode.parentNode.replaceChild(a,n.currentNode),n.currentNode=a),this._parts.push(this._partCallback(this,o,a))}return e}}]),TemplateInstance}(),P=function reparentNodes(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=t;i!==n;){var o=i.nextSibling;e.insertBefore(i,r),i=o}},N=function removeNodes(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=t;r!==n;){var i=r.nextSibling;e.removeChild(r),r=i}},w=function shadyTemplateFactory(t){return function(n){var r=n.type+"--"+t,i=s.get(r);void 0===i&&(i=new Map,s.set(r,i));var o=i.get(n.strings);if(void 0===o){var a=n.getTemplateElement();"object"===e(window.ShadyCSS)&&window.ShadyCSS.prepareTemplate(a,t),o=new d(n,a),i.set(n.strings,o)}return o}};var V=function html$$1(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new l(e,n,"html",k)},k=function extendedPartCallback(e,t,n){if("attribute"===t.type){if(t.rawName.startsWith("on-")){var r=t.rawName.slice(3);return new E(e,n,r)}if(t.name.endsWith("$")){var i=t.name.slice(0,-1);return new _(e,n,i,t.strings)}if(t.name.endsWith("?")){var o=t.name.slice(0,-1);return new S(e,n,o,t.strings)}return new O(e,n,t.rawName,t.strings)}return T(e,t,n)},S=function(e){function BooleanAttributePart(){return t(this,BooleanAttributePart),o(this,(BooleanAttributePart.__proto__||Object.getPrototypeOf(BooleanAttributePart)).apply(this,arguments))}return i(BooleanAttributePart,_),n(BooleanAttributePart,[{key:"setValue",value:function setValue(e,t){var n=this.strings;if(2!==n.length||""!==n[0]||""!==n[1])throw new Error("boolean attributes can only contain a single expression");var r=v(this,e[t]);r!==y&&(r?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name))}}]),BooleanAttributePart}(),O=function(e){function PropertyPart(){return t(this,PropertyPart),o(this,(PropertyPart.__proto__||Object.getPrototypeOf(PropertyPart)).apply(this,arguments))}return i(PropertyPart,_),n(PropertyPart,[{key:"setValue",value:function setValue(e,t){var n=this.strings,r=void 0;this._equalToPreviousValues(e,t)||((r=2===n.length&&""===n[0]&&""===n[1]?v(this,e[t]):this._interpolate(e,t))!==y&&(this.element[this.name]=r),this._previousValues=e)}}]),PropertyPart}(),E=function(){function EventPart(e,n,r){t(this,EventPart),this.instance=e,this.element=n,this.eventName=r}return n(EventPart,[{key:"setValue",value:function setValue(e){var t=v(this,e),n=this._listener;t!==n&&(this._listener=t,null!=n&&this.element.removeEventListener(this.eventName,n),null!=t&&this.element.addEventListener(this.eventName,t))}}]),EventPart}(),A=Symbol("tag"),C=Symbol("needsRender"),M=function(e){function GluonElement(){return t(this,GluonElement),o(this,(GluonElement.__proto__||Object.getPrototypeOf(GluonElement)).apply(this,arguments))}return i(GluonElement,e),n(GluonElement,[{key:"connectedCallback",value:function connectedCallback(){"template"in this&&(this.attachShadow({mode:"open"}),this.render({sync:!0}),function createIdCache(e){e.$={},e.shadowRoot.querySelectorAll("[id]").forEach(function(t){e.$[t.id]=t})}(this))}},{key:"render",value:(r=regeneratorRuntime.mark(function _callee(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).sync,t=void 0!==e&&e;return regeneratorRuntime.wrap(function _callee$(e){for(;;)switch(e.prev=e.next){case 0:if(this[C]=!0,t){e.next=4;break}return e.next=4,0;case 4:this[C]&&(this[C]=!1,n=this.template,r=this.shadowRoot,i=this.constructor.is,function render(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:defaultTemplateFactory,r=n(e),i=t.__templateInstance;if(void 0===i||i.template!==r||i._partCallback!==e.partCallback){i=new x(r,e.partCallback,n),t.__templateInstance=i;var o=i._clone();i.update(e.values),N(t,t.firstChild),t.appendChild(o)}else i.update(e.values)}(n,r,w(i)));case 5:case"end":return e.stop()}var n,r,i},_callee,this)}),a=function(){var e=r.apply(this,arguments);return new Promise(function(t,n){return function step(r,i){try{var o=e[r](i),a=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(a).then(function(e){step("next",e)},function(e){step("throw",e)});t(a)}("next")})},function render$$1(){return a.apply(this,arguments)})}],[{key:"is",get:function get$$1(){return this.hasOwnProperty(A)&&this[A]||(this[A]=function camelToKebab(e){return e.replace(/([a-z](?=[A-Z]))|([A-Z](?=[A-Z][a-z]))/g,"$1$2-").toLowerCase()}(this.name))}}]),GluonElement;var r,a}(HTMLElement),R=a(["<style> p { color: firebrick } </style>"],["<style> p { color: firebrick } </style>"]),j=a(["\n      ","\n      <p>Hello ","</p>\n    "],["\n      ","\n      <p>Hello ","</p>\n    "]),$=a(["<style> p { text-transform: uppercase } </style>"],["<style> p { text-transform: uppercase } </style>"]),L=function(e){function HelloMessage(){return t(this,HelloMessage),o(this,(HelloMessage.__proto__||Object.getPrototypeOf(HelloMessage)).apply(this,arguments))}return i(HelloMessage,M),n(HelloMessage,[{key:"style",get:function get$$1(){return V(R)}},{key:"template",get:function get$$1(){return V(j,this.style,this.getAttribute("name"))}}]),HelloMessage}(),G=function(e){function LoudMessage(){return t(this,LoudMessage),o(this,(LoudMessage.__proto__||Object.getPrototypeOf(LoudMessage)).apply(this,arguments))}return i(LoudMessage,L),n(LoudMessage,[{key:"style",get:function get$$1(){return V($)}}]),LoudMessage}();customElements.define(G.is,G),customElements.define(L.is,L)}();
