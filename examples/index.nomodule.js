!function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},n=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var i=Object.getPrototypeOf(e);return null===i?void 0:get(i,t,n)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(n):void 0},i=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},o=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},s=new Map,l=function(){function TemplateResult(e,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:T;t(this,TemplateResult),this.strings=e,this.values=n,this.type=r,this.partCallback=i}return n(TemplateResult,[{key:"getHTML",value:function getHTML(){for(var e,t,n=this.strings.length-1,r="",i=!0,a=0;a<n;a++){var o=this.strings[a];r+=o;var s=(t=(e=o).lastIndexOf(">"),e.indexOf("<",t+1)>-1?e.length:t);r+=(i=s>-1?s<o.length:i)?c:u}return r+this.strings[n]}},{key:"getTemplateElement",value:function getTemplateElement(){var e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}]),TemplateResult}();function defaultTemplateFactory(e){var t=s.get(e.type);void 0===t&&(t=new Map,s.set(e.type,t));var n=t.get(e.strings);return void 0===n&&(n=new v(e,e.getTemplateElement()),t.set(e.strings,n)),n}!function(e){function SVGTemplateResult(){return t(this,SVGTemplateResult),a(this,(SVGTemplateResult.__proto__||Object.getPrototypeOf(SVGTemplateResult)).apply(this,arguments))}i(SVGTemplateResult,l),n(SVGTemplateResult,[{key:"getHTML",value:function getHTML(){return"<svg>"+r(SVGTemplateResult.prototype.__proto__||Object.getPrototypeOf(SVGTemplateResult.prototype),"getHTML",this).call(this)+"</svg>"}},{key:"getTemplateElement",value:function getTemplateElement(){var e=r(SVGTemplateResult.prototype.__proto__||Object.getPrototypeOf(SVGTemplateResult.prototype),"getTemplateElement",this).call(this),t=e.content,n=t.firstChild;return t.removeChild(n),x(t,n.firstChild),e}}])}();var u="{{lit-"+String(Math.random()).slice(2)+"}}",c="\x3c!--"+u+"--\x3e",h=new RegExp(u+"|"+c),p=/[ \x09\x0a\x0c\x0d]([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)[ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*)$/,f=function TemplatePart(e,n,r,i,a){t(this,TemplatePart),this.type=e,this.index=n,this.name=r,this.rawName=i,this.strings=a},v=function Template(e,n){t(this,Template),this.parts=[],this.element=n;for(var r=this.element.content,i=document.createTreeWalker(r,133,null,!1),a=-1,o=0,s=[],l=void 0,c=void 0;i.nextNode();){a++,l=c;var v=c=i.currentNode;if(1===v.nodeType){if(!v.hasAttributes())continue;for(var d=v.attributes,m=0,y=0;y<d.length;y++)d[y].value.indexOf(u)>=0&&m++;for(;m-- >0;){var g=e.strings[o],_=p.exec(g)[1],b=d.getNamedItem(_),T=b.value.split(h);this.parts.push(new f("attribute",a,b.name,_,T)),v.removeAttribute(b.name),o+=T.length-1}}else if(3===v.nodeType){var P=v.nodeValue;if(P.indexOf(u)<0)continue;var x=v.parentNode,w=P.split(h),N=w.length-1;o+=N;for(var V=0;V<N;V++)x.insertBefore(""===w[V]?document.createComment(""):document.createTextNode(w[V]),v),this.parts.push(new f("node",a++));x.insertBefore(""===w[N]?document.createComment(""):document.createTextNode(w[N]),v),s.push(v)}else if(8===v.nodeType&&v.nodeValue===u){var k=v.parentNode,S=v.previousSibling;null===S||S!==l||S.nodeType!==Node.TEXT_NODE?k.insertBefore(document.createComment(""),v):a--,this.parts.push(new f("node",a++)),s.push(v),null===v.nextSibling?k.insertBefore(document.createComment(""),v):a--,c=l,o++}}var E=!0,O=!1,A=void 0;try{for(var C,M=s[Symbol.iterator]();!(E=(C=M.next()).done);E=!0){var R=C.value;R.parentNode.removeChild(R)}}catch(e){O=!0,A=e}finally{try{!E&&M.return&&M.return()}finally{if(O)throw A}}},d=function getValue(e,t){return m(t)?(t=t(e),y):null===t?void 0:t},m=function isDirective(e){return"function"==typeof e&&!0===e.__litDirective},y={},g=function isPrimitiveValue(t){return null===t||!("object"===(void 0===t?"undefined":e(t))||"function"==typeof t)},_=function(){function AttributePart(e,n,r,i){t(this,AttributePart),this.instance=e,this.element=n,this.name=r,this.strings=i,this.size=i.length-1,this._previousValues=[]}return n(AttributePart,[{key:"_interpolate",value:function _interpolate(e,t){for(var n=this.strings,r=n.length-1,i="",a=0;a<r;a++){i+=n[a];var o=d(this,e[t+a]);if(o&&o!==y&&(Array.isArray(o)||"string"!=typeof o&&o[Symbol.iterator])){var s=!0,l=!1,u=void 0;try{for(var c,h=o[Symbol.iterator]();!(s=(c=h.next()).done);s=!0)i+=c.value}catch(e){l=!0,u=e}finally{try{!s&&h.return&&h.return()}finally{if(l)throw u}}}else i+=o}return i+n[r]}},{key:"_equalToPreviousValues",value:function _equalToPreviousValues(e,t){for(var n=t;n<t+this.size;n++)if(this._previousValues[n]!==e[n]||!g(e[n]))return!1;return!0}},{key:"setValue",value:function setValue(e,t){if(!this._equalToPreviousValues(e,t)){var n=this.strings,r=void 0;2===n.length&&""===n[0]&&""===n[1]?(r=d(this,e[t]),Array.isArray(r)&&(r=r.join(""))):r=this._interpolate(e,t),r!==y&&this.element.setAttribute(this.name,r),this._previousValues=e}}}]),AttributePart}(),b=function(){function NodePart(e,n,r){t(this,NodePart),this.instance=e,this.startNode=n,this.endNode=r,this._previousValue=void 0}return n(NodePart,[{key:"setValue",value:function setValue(e){if((e=d(this,e))!==y)if(g(e)){if(e===this._previousValue)return;this._setText(e)}else e instanceof l?this._setTemplateResult(e):Array.isArray(e)||e[Symbol.iterator]?this._setIterable(e):e instanceof Node?this._setNode(e):void 0!==e.then?this._setPromise(e):this._setText(e)}},{key:"_insert",value:function _insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}},{key:"_setNode",value:function _setNode(e){this._previousValue!==e&&(this.clear(),this._insert(e),this._previousValue=e)}},{key:"_setText",value:function _setText(e){var t=this.startNode.nextSibling;e=void 0===e?"":e,t===this.endNode.previousSibling&&t.nodeType===Node.TEXT_NODE?t.textContent=e:this._setNode(document.createTextNode(e)),this._previousValue=e}},{key:"_setTemplateResult",value:function _setTemplateResult(e){var t=this.instance._getTemplate(e),n=void 0;this._previousValue&&this._previousValue.template===t?n=this._previousValue:(n=new P(t,this.instance._partCallback,this.instance._getTemplate),this._setNode(n._clone()),this._previousValue=n),n.update(e.values)}},{key:"_setIterable",value:function _setIterable(e){Array.isArray(this._previousValue)||(this.clear(),this._previousValue=[]);var t=this._previousValue,n=0,r=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var l=o.value,u=t[n];if(void 0===u){var c=this.startNode;n>0&&(c=t[n-1].endNode=document.createTextNode(""),this._insert(c)),u=new NodePart(this.instance,c,this.endNode),t.push(u)}u.setValue(l),n++}}catch(e){i=!0,a=e}finally{try{!r&&s.return&&s.return()}finally{if(i)throw a}}if(0===n)this.clear(),this._previousValue=void 0;else if(n<t.length){var h=t[n-1];t.length=n,this.clear(h.endNode.previousSibling),h.endNode=this.endNode}}},{key:"_setPromise",value:function _setPromise(e){var t=this;this._previousValue=e,e.then(function(n){t._previousValue===e&&t.setValue(n)})}},{key:"clear",value:function clear(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;w(this.startNode.parentNode,e.nextSibling,this.endNode)}}]),NodePart}(),T=function defaultPartCallback(e,t,n){if("attribute"===t.type)return new _(e,n,t.name,t.strings);if("node"===t.type)return new b(e,n,n.nextSibling);throw new Error("Unknown part type "+t.type)},P=function(){function TemplateInstance(e,n,r){t(this,TemplateInstance),this._parts=[],this.template=e,this._partCallback=n,this._getTemplate=r}return n(TemplateInstance,[{key:"update",value:function update(e){var t=0,n=!0,r=!1,i=void 0;try{for(var a,o=this._parts[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;void 0===s.size?(s.setValue(e[t]),t++):(s.setValue(e,t),t+=s.size)}}catch(e){r=!0,i=e}finally{try{!n&&o.return&&o.return()}finally{if(r)throw i}}}},{key:"_clone",value:function _clone(){var e=document.importNode(this.template.element.content,!0),t=this.template.parts;if(t.length>0)for(var n=document.createTreeWalker(e,133,null,!1),r=-1,i=0;i<t.length;i++){for(var a=t[i];r<a.index;)r++,n.nextNode();this._parts.push(this._partCallback(this,a,n.currentNode))}return e}}]),TemplateInstance}(),x=function reparentNodes(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=t;i!==n;){var a=i.nextSibling;e.insertBefore(i,r),i=a}},w=function removeNodes(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=t;r!==n;){var i=r.nextSibling;e.removeChild(r),r=i}},N=function shadyTemplateFactory(t){return function(n){var r=n.type+"--"+t,i=s.get(r);void 0===i&&(i=new Map,s.set(r,i));var a=i.get(n.strings);if(void 0===a){var o=n.getTemplateElement();"object"===e(window.ShadyCSS)&&window.ShadyCSS.prepareTemplate(o,t),a=new v(n,o),i.set(n.strings,a)}return a}};var V=function html$$1(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new l(e,n,"html",k)},k=function extendedPartCallback(e,t,n){if("attribute"===t.type){if("on-"===t.rawName.substr(0,3)){var r=t.rawName.slice(3);return new O(e,n,r)}var i=t.name.substr(t.name.length-1);if("$"===i){var a=t.name.slice(0,-1);return new _(e,n,a,t.strings)}if("?"===i){var o=t.name.slice(0,-1);return new S(e,n,o,t.strings)}return new E(e,n,t.rawName,t.strings)}return T(e,t,n)},S=function(e){function BooleanAttributePart(){return t(this,BooleanAttributePart),a(this,(BooleanAttributePart.__proto__||Object.getPrototypeOf(BooleanAttributePart)).apply(this,arguments))}return i(BooleanAttributePart,_),n(BooleanAttributePart,[{key:"setValue",value:function setValue(e,t){var n=this.strings;if(2!==n.length||""!==n[0]||""!==n[1])throw new Error("boolean attributes can only contain a single expression");var r=d(this,e[t]);r!==y&&(r?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name))}}]),BooleanAttributePart}(),E=function(e){function PropertyPart(){return t(this,PropertyPart),a(this,(PropertyPart.__proto__||Object.getPrototypeOf(PropertyPart)).apply(this,arguments))}return i(PropertyPart,_),n(PropertyPart,[{key:"setValue",value:function setValue(e,t){var n=this.strings,r=void 0;this._equalToPreviousValues(e,t)||((r=2===n.length&&""===n[0]&&""===n[1]?d(this,e[t]):this._interpolate(e,t))!==y&&(this.element[this.name]=r),this._previousValues=e)}}]),PropertyPart}(),O=function(){function EventPart(e,n,r){t(this,EventPart),this.instance=e,this.element=n,this.eventName=r}return n(EventPart,[{key:"setValue",value:function setValue(e){var t=d(this,e);t!==this._listener&&(null==t?this.element.removeEventListener(this.eventName,this):null==this._listener&&this.element.addEventListener(this.eventName,this),this._listener=t)}},{key:"handleEvent",value:function handleEvent(e){"function"==typeof this._listener?this._listener.call(this.element,e):"function"==typeof this._listener.handleEvent&&this._listener.handleEvent(e)}}]),EventPart}(),A=Symbol("tag"),C=Symbol("needsRender"),M=function(e){function GluonElement(){return t(this,GluonElement),a(this,(GluonElement.__proto__||Object.getPrototypeOf(GluonElement)).apply(this,arguments))}return i(GluonElement,e),n(GluonElement,[{key:"connectedCallback",value:function connectedCallback(){"template"in this&&(this.attachShadow({mode:"open"}),this.render({sync:!0}),function createIdCache(e){e.$={},e.shadowRoot.querySelectorAll("[id]").forEach(function(t){e.$[t.id]=t})}(this))}},{key:"render",value:(r=regeneratorRuntime.mark(function _callee(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).sync,t=void 0!==e&&e;return regeneratorRuntime.wrap(function _callee$(e){for(;;)switch(e.prev=e.next){case 0:if(this[C]=!0,t){e.next=4;break}return e.next=4,0;case 4:this[C]&&(this[C]=!1,n=this.template,r=this.shadowRoot,i=this.constructor.is,function render(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:defaultTemplateFactory,r=n(e),i=t.__templateInstance;if(void 0===i||i.template!==r||i._partCallback!==e.partCallback){i=new P(r,e.partCallback,n),t.__templateInstance=i;var a=i._clone();i.update(e.values),w(t,t.firstChild),t.appendChild(a)}else i.update(e.values)}(n,r,N(i)));case 5:case"end":return e.stop()}var n,r,i},_callee,this)}),o=function(){var e=r.apply(this,arguments);return new Promise(function(t,n){return function step(r,i){try{var a=e[r](i),o=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(o).then(function(e){step("next",e)},function(e){step("throw",e)});t(o)}("next")})},function render$$1(){return o.apply(this,arguments)})}],[{key:"is",get:function get$$1(){return this.hasOwnProperty(A)&&this[A]||(this[A]=function camelToKebab(e){return e.replace(/([a-z](?=[A-Z]))|([A-Z](?=[A-Z][a-z]))/g,"$1$2-").toLowerCase()}(this.name))}}]),GluonElement;var r,o}(HTMLElement),R=o(["<style> p { color: firebrick } </style>"],["<style> p { color: firebrick } </style>"]),j=o(["\n      ","\n      <p>Hello ","</p>\n    "],["\n      ","\n      <p>Hello ","</p>\n    "]),$=o(["<style> p { text-transform: uppercase } </style>"],["<style> p { text-transform: uppercase } </style>"]),L=function(e){function HelloMessage(){return t(this,HelloMessage),a(this,(HelloMessage.__proto__||Object.getPrototypeOf(HelloMessage)).apply(this,arguments))}return i(HelloMessage,M),n(HelloMessage,[{key:"style",get:function get$$1(){return V(R)}},{key:"template",get:function get$$1(){return V(j,this.style,this.getAttribute("name"))}}]),HelloMessage}(),G=function(e){function LoudMessage(){return t(this,LoudMessage),a(this,(LoudMessage.__proto__||Object.getPrototypeOf(LoudMessage)).apply(this,arguments))}return i(LoudMessage,L),n(LoudMessage,[{key:"style",get:function get$$1(){return V($)}}]),LoudMessage}();customElements.define(G.is,G),customElements.define(L.is,L)}();