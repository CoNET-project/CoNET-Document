(self.webpackChunkgatsby_gitbook_boilerplate=self.webpackChunkgatsby_gitbook_boilerplate||[]).push([[740],{2023:function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__assign||function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return s(t,e),t},c=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var u=l(n(7294)),p="undefined"!=typeof window&&"navigator"in window&&/Win/i.test(navigator.platform),f="undefined"!=typeof window&&"navigator"in window&&/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),d="npm__react-simple-code-editor__textarea",y="\n/**\n * Reset the text fill color so that placeholder is visible\n */\n.".concat(d,":empty {\n  -webkit-text-fill-color: inherit !important;\n}\n\n/**\n * Hack to apply on some CSS on IE10 and IE11\n */\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  /**\n    * IE doesn't support '-webkit-text-fill-color'\n    * So we use 'color: transparent' to make the text transparent on IE\n    * Unlike other browsers, it doesn't affect caret color in IE\n    */\n  .").concat(d," {\n    color: transparent !important;\n  }\n\n  .").concat(d,"::selection {\n    background-color: #accef7 !important;\n    color: transparent !important;\n  }\n}\n"),h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={capture:!0},t._recordCurrentState=function(){var e=t._input;if(e){var n=e.value,r=e.selectionStart,o=e.selectionEnd;t._recordChange({value:n,selectionStart:r,selectionEnd:o})}},t._getLines=function(e,t){return e.substring(0,t).split("\n")},t._recordChange=function(e,n){var r,o,a;void 0===n&&(n=!1);var s=t._history,l=s.stack,c=s.offset;if(l.length&&c>-1){t._history.stack=l.slice(0,c+1);var u=t._history.stack.length;if(u>100){var p=u-100;t._history.stack=l.slice(p,u),t._history.offset=Math.max(t._history.offset-p,0)}}var f=Date.now();if(n){var d=t._history.stack[t._history.offset];if(d&&f-d.timestamp<3e3){var y=/[^a-z0-9]([a-z0-9]+)$/i,h=null===(r=t._getLines(d.value,d.selectionStart).pop())||void 0===r?void 0:r.match(y),g=null===(o=t._getLines(e.value,e.selectionStart).pop())||void 0===o?void 0:o.match(y);if((null==h?void 0:h[1])&&(null===(a=null==g?void 0:g[1])||void 0===a?void 0:a.startsWith(h[1])))return void(t._history.stack[t._history.offset]=i(i({},e),{timestamp:f}))}}t._history.stack.push(i(i({},e),{timestamp:f})),t._history.offset++},t._updateInput=function(e){var n=t._input;n&&(n.value=e.value,n.selectionStart=e.selectionStart,n.selectionEnd=e.selectionEnd,t.props.onValueChange(e.value))},t._applyEdits=function(e){var n=t._input,r=t._history.stack[t._history.offset];r&&n&&(t._history.stack[t._history.offset]=i(i({},r),{selectionStart:n.selectionStart,selectionEnd:n.selectionEnd})),t._recordChange(e),t._updateInput(e)},t._undoEdit=function(){var e=t._history,n=e.stack,r=e.offset,o=n[r-1];o&&(t._updateInput(o),t._history.offset=Math.max(r-1,0))},t._redoEdit=function(){var e=t._history,n=e.stack,r=e.offset,o=n[r+1];o&&(t._updateInput(o),t._history.offset=Math.min(r+1,n.length-1))},t._handleKeyDown=function(e){var n=t.props,r=n.tabSize,o=n.insertSpaces,i=n.ignoreTabKey,a=n.onKeyDown;if(!a||(a(e),!e.defaultPrevented)){27===e.keyCode&&e.currentTarget.blur();var s=e.currentTarget,l=s.value,c=s.selectionStart,u=s.selectionEnd,d=(o?" ":"\t").repeat(r);if(9===e.keyCode&&!i&&t.state.capture)if(e.preventDefault(),e.shiftKey){var y=(b=t._getLines(l,c)).length-1,h=t._getLines(l,u).length-1,g=l.split("\n").map((function(e,t){return t>=y&&t<=h&&e.startsWith(d)?e.substring(d.length):e})).join("\n");if(l!==g){var v=b[y];t._applyEdits({value:g,selectionStart:(null==v?void 0:v.startsWith(d))?c-d.length:c,selectionEnd:u-(l.length-g.length)})}}else if(c!==u){var b,m=(b=t._getLines(l,c)).length-1,O=t._getLines(l,u).length-1;v=b[m];t._applyEdits({value:l.split("\n").map((function(e,t){return t>=m&&t<=O?d+e:e})).join("\n"),selectionStart:v&&/\S/.test(v)?c+d.length:c,selectionEnd:u+d.length*(O-m+1)})}else{var _=c+d.length;t._applyEdits({value:l.substring(0,c)+d+l.substring(u),selectionStart:_,selectionEnd:_})}else if(8===e.keyCode){var j=c!==u;if(l.substring(0,c).endsWith(d)&&!j){e.preventDefault();_=c-d.length;t._applyEdits({value:l.substring(0,c-d.length)+l.substring(u),selectionStart:_,selectionEnd:_})}}else if(13===e.keyCode){if(c===u){var C=t._getLines(l,c).pop(),w=null==C?void 0:C.match(/^\s+/);if(null==w?void 0:w[0]){e.preventDefault();var k="\n"+w[0];_=c+k.length;t._applyEdits({value:l.substring(0,c)+k+l.substring(u),selectionStart:_,selectionEnd:_})}}}else if(57===e.keyCode||219===e.keyCode||222===e.keyCode||192===e.keyCode){var S=void 0;57===e.keyCode&&e.shiftKey?S=["(",")"]:219===e.keyCode?S=e.shiftKey?["{","}"]:["[","]"]:222===e.keyCode?S=e.shiftKey?['"','"']:["'","'"]:192!==e.keyCode||e.shiftKey||(S=["`","`"]),c!==u&&S&&(e.preventDefault(),t._applyEdits({value:l.substring(0,c)+S[0]+l.substring(c,u)+S[1]+l.substring(u),selectionStart:c,selectionEnd:u+2}))}else!(f?e.metaKey&&90===e.keyCode:e.ctrlKey&&90===e.keyCode)||e.shiftKey||e.altKey?(f?e.metaKey&&90===e.keyCode&&e.shiftKey:p?e.ctrlKey&&89===e.keyCode:e.ctrlKey&&90===e.keyCode&&e.shiftKey)&&!e.altKey?(e.preventDefault(),t._redoEdit()):77!==e.keyCode||!e.ctrlKey||f&&!e.shiftKey||(e.preventDefault(),t.setState((function(e){return{capture:!e.capture}}))):(e.preventDefault(),t._undoEdit())}},t._handleChange=function(e){var n=e.currentTarget,r=n.value,o=n.selectionStart,i=n.selectionEnd;t._recordChange({value:r,selectionStart:o,selectionEnd:i},!0),t.props.onValueChange(r)},t._history={stack:[],offset:-1},t._input=null,t}return o(t,e),t.prototype.componentDidMount=function(){this._recordCurrentState()},Object.defineProperty(t.prototype,"session",{get:function(){return{history:this._history}},set:function(e){this._history=e.history},enumerable:!1,configurable:!0}),t.prototype.render=function(){var e=this,t=this.props,n=t.value,r=t.style,o=t.padding,a=t.highlight,s=t.textareaId,l=t.textareaClassName,p=t.autoFocus,f=t.disabled,h=t.form,v=t.maxLength,b=t.minLength,m=t.name,O=t.placeholder,_=t.readOnly,j=t.required,C=t.onClick,w=t.onFocus,k=t.onBlur,S=t.onKeyUp,E=(t.onKeyDown,t.onValueChange,t.tabSize,t.insertSpaces,t.ignoreTabKey,t.preClassName),P=c(t,["value","style","padding","highlight","textareaId","textareaClassName","autoFocus","disabled","form","maxLength","minLength","name","placeholder","readOnly","required","onClick","onFocus","onBlur","onKeyUp","onKeyDown","onValueChange","tabSize","insertSpaces","ignoreTabKey","preClassName"]),x={paddingTop:o,paddingRight:o,paddingBottom:o,paddingLeft:o},D=a(n);return u.createElement("div",i({},P,{style:i(i({},g.container),r)}),u.createElement("textarea",{ref:function(t){return e._input=t},style:i(i(i({},g.editor),g.textarea),x),className:d+(l?" ".concat(l):""),id:s,value:n,onChange:this._handleChange,onKeyDown:this._handleKeyDown,onClick:C,onKeyUp:S,onFocus:w,onBlur:k,disabled:f,form:h,maxLength:v,minLength:b,name:m,placeholder:O,readOnly:_,required:j,autoFocus:p,autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"data-gramm":!1}),u.createElement("pre",i({className:E,"aria-hidden":"true",style:i(i(i({},g.editor),g.highlight),x)},"string"==typeof D?{dangerouslySetInnerHTML:{__html:D+"<br />"}}:{children:D})),u.createElement("style",{type:"text/css",dangerouslySetInnerHTML:{__html:y}}))},t.defaultProps={tabSize:2,insertSpaces:!0,ignoreTabKey:!1,padding:0},t}(u.Component);t.default=h;var g={container:{position:"relative",textAlign:"left",boxSizing:"border-box",padding:0,overflow:"hidden"},textarea:{position:"absolute",top:0,left:0,height:"100%",width:"100%",resize:"none",color:"inherit",overflow:"hidden",MozOsxFontSmoothing:"grayscale",WebkitFontSmoothing:"antialiased",WebkitTextFillColor:"transparent"},highlight:{position:"relative",pointerEvents:"none"},editor:{margin:0,border:0,background:"none",boxSizing:"inherit",display:"inherit",fontFamily:"inherit",fontSize:"inherit",fontStyle:"inherit",fontVariantLigatures:"inherit",fontWeight:"inherit",letterSpacing:"inherit",lineHeight:"inherit",tabSize:"inherit",textIndent:"inherit",textRendering:"inherit",textTransform:"inherit",whiteSpace:"pre-wrap",wordBreak:"keep-all",overflowWrap:"break-word"}}},6907:function(e,t,n){var r=n(4977);e.exports=r},9116:function(e,t,n){n(9601);var r=n(857);e.exports=r.Object.assign},7671:function(e,t,n){e.exports=n(7537)},7537:function(e,t,n){var r=n(6907);e.exports=r},1574:function(e,t,n){"use strict";var r=n(9781),o=n(1702),i=n(6916),a=n(7293),s=n(1956),l=n(5181),c=n(5296),u=n(7908),p=n(8361),f=Object.assign,d=Object.defineProperty,y=o([].concat);e.exports=!f||a((function(){if(r&&1!==f({b:1},f(d({},"a",{enumerable:!0,get:function(){d(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),o="abcdefghijklmnopqrst";return e[n]=7,o.split("").forEach((function(e){t[e]=e})),7!=f({},e)[n]||s(f({},t)).join("")!=o}))?function(e,t){for(var n=u(e),o=arguments.length,a=1,f=l.f,d=c.f;o>a;)for(var h,g=p(arguments[a++]),v=f?y(s(g),f(g)):s(g),b=v.length,m=0;b>m;)h=v[m++],r&&!i(d,g,h)||(n[h]=g[h]);return n}:f},857:function(e,t,n){var r=n(7854);e.exports=r},9601:function(e,t,n){var r=n(2109),o=n(1574);r({target:"Object",stat:!0,arity:2,forced:Object.assign!==o},{assign:o})},4977:function(e,t,n){var r=n(9116);e.exports=r},1740:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return R}});var r=n(7294),o=n(2023),i=n.n(o),a=n(509),s=n(3376),l=n(6675),c=n(7671),u=n.n(c);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var y={plain:{color:"#C5C8C6",backgroundColor:"#1D1F21"},styles:[{types:["prolog","comment","doctype","cdata"],style:{color:"hsl(30, 20%, 50%)"}},{types:["property","tag","boolean","number","constant","symbol"],style:{color:"hsl(350, 40%, 70%)"}},{types:["attr-name","string","char","builtin","insterted"],style:{color:"hsl(75, 70%, 60%)"}},{types:["operator","entity","url","string","variable","language-css"],style:{color:"hsl(40, 90%, 60%)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["regex","important"],style:{color:"#e90"}},{types:["atrule","attr-value","keyword"],style:{color:"hsl(350, 40%, 70%)"}},{types:["punctuation","symbol"],style:{opacity:"0.7"}}]},h=["style","theme","onChange"];function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=function(e){var t=(0,r.useState)({code:e.code||""}),n=t[0],o=t[1];(0,r.useEffect)((function(){n.prevCodeProp&&e.code!==n.prevCodeProp&&o({code:e.code,prevCodeProp:e.code})}),[e.code]);(0,r.useEffect)((function(){e.onChange&&e.onChange(n.code)}),[n.code]);var l=e.style,c=e.theme;e.onChange;var u=d(e,h),f=n.code,g=c&&"object"==typeof c.plain?c.plain:{};return r.createElement(i(),p({value:f,padding:10,highlight:function(t){return r.createElement(a.ZP,{Prism:s.Z,code:t,theme:e.theme||y,language:e.language},(function(e){var t=e.tokens,n=e.getLineProps,o=e.getTokenProps;return r.createElement(r.Fragment,null,t.map((function(e,t){return r.createElement("div",n({line:e,key:t}),e.map((function(e,t){return r.createElement("span",o({token:e,key:t}))})))})))}))},onValueChange:function(e){o({code:e})},style:v(v({whiteSpace:"pre",fontFamily:"monospace"},g),l)},u))},m=(0,r.createContext)({});function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j={assign:u()},C=function(e,t){void 0===t&&(t={});var n=_(_({},t),{},{objectAssign:"_poly.assign",transforms:_({dangerousForOf:!0,dangerousTaggedTemplateString:!0},t.transforms)});return(0,l.v)(e,n).code};function w(e,t){return w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},w(e,t)}function k(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,w(e,t)}var S=function(e,t){return function(n){function o(){return n.apply(this,arguments)||this}k(o,n);var i=o.prototype;return i.componentDidCatch=function(e){t(e)},i.render=function(){return"function"==typeof e?r.createElement(e,null):r.isValidElement(e)?e:null},o}(r.Component)};function E(e,t,n){return E=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&w(o,n.prototype),o},E.apply(null,arguments)}var P=function(e,t){var n=Object.keys(t),o=n.map((function(e){return t[e]}));return E(Function,["_poly","React"].concat(n,[e])).apply(void 0,[j,r].concat(o))};function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function I(e){var t=e.children,n=e.code,o=e.language,i=e.theme,a=e.disabled,s=e.scope,l=e.transformCode,c=e.transpileOptions,u=e.noInline,p=void 0!==u&&u,f=(0,r.useState)({error:void 0,element:void 0}),d=f[0],y=f[1];function h(e){var t={code:l?l(e):e,scope:s,transpileOptions:c},n=function(e){return y({error:e.toString(),element:void 0})},r=function(e){return y({error:void 0,element:e})};try{p?(y({error:void 0,element:null}),function(e,t,n){var r=e.code,o=void 0===r?"":r,i=e.scope,a=void 0===i?{}:i,s=e.transpileOptions;if(!/render\s*\(/.test(o))return n(new SyntaxError("No-Inline evaluations must call `render`."));P(C(o,s),D(D({},a),{},{render:function(e){void 0===e?n(new SyntaxError("`render` must be called with valid JSX.")):t(S(e,n))}}))}(t,r,n)):r(function(e,t){var n=e.code,r=void 0===n?"":n,o=e.scope,i=void 0===o?{}:o,a=e.transpileOptions,s=r.trim().replace(/;$/,""),l=C("return ("+s+")",a).trim();return S(P(l,i),t)}(t,n))}catch(o){n(o)}}(0,r.useEffect)((function(){h(n)}),[n,s,p,l,c]);return r.createElement(m.Provider,{value:L(L({},d),{},{code:n,language:o,theme:i,disabled:a,onError:function(e){return y({error:e.toString()})},onChange:function(e){return h(e)}})},t)}function F(e){var t=(0,r.useContext)(m),n=t.code,o=t.language,i=t.theme,a=t.disabled,s=t.onChange;return r.createElement(b,p({theme:i,code:n,language:o,disabled:a,onChange:s},e))}function T(e){var t=(0,r.useContext)(m).error;return t?r.createElement("pre",e,t):null}I.defaultProps={code:"",noInline:!1,language:"jsx",disabled:!1};var z=["Component"];function M(e){var t=e.Component,n=d(e,z),o=(0,r.useContext)(m).element;return r.createElement(t,n,o?r.createElement(o,null):null)}M.defaultProps={Component:"div"};var W=n(3431);var R=e=>{let{code:t}=e;return(0,W.tZ)(I,{code:t},(0,W.tZ)(F,null),(0,W.tZ)(T,null),(0,W.tZ)(M,null))}}}]);
//# sourceMappingURL=740-c936101ae067365e0a2a.js.map