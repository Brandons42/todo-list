parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"V+Z4":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e){return r(e)||o(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function o(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function r(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function u(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?s(t):n}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var y=function(e){function n(e){var o,r;return a(this,n),p(s(o=u(this,i(n).call(this,e))),"_add",function(e){o.state.new.length>0&&(13===("click"===e.type?13:e.keyCode||e.which)&&o.setState({new:"",todos:[[o.state.new,!1]].concat(t(o.state.todos))},o._updateStorage))}),p(s(o),"_delete",function(e){var t=o.state.todos;t.splice(e,1),o.setState({todos:t},o._updateStorage)}),p(s(o),"_toggleCheck",function(e,t){var n=o.state.todos[t];n[1]=e.target.checked;var r=o.state.todos;r.splice(t,1,n),o.setState({todos:r},o._updateStorage)}),p(s(o),"_updateStorage",function(){o.storage&&localStorage.setItem("todos",JSON.stringify(o.state.todos))}),o.storage="undefined"!=typeof Storage,o.storage&&(r=JSON.parse(localStorage.getItem("todos")))||(r=[]),o.state={new:"",todos:r},o}return f(n,React.Component),l(n,[{key:"render",value:function(){var e=this;return React.createElement("div",null,React.createElement("header",{className:"header"},React.createElement("h1",null,"Todo-list"),React.createElement("p",null,"Easily keep track of your todos.",this.storage&&" Your todos will be stored even if you close the tab."),React.createElement("div",null,React.createElement("input",{type:"text",value:this.state.new,onChange:function(t){return e.setState({new:t.target.value})},onKeyPress:this._add}),React.createElement("button",{onClick:this._add},"Add"))),React.createElement("section",{className:"todos"},this.state.todos.map(function(t,n){return React.createElement("label",{className:"todo",key:n},React.createElement("input",{type:"checkbox",checked:t[1],onChange:function(t){return e._toggleCheck(t,n)}}),React.createElement("span",{className:"checkmark"}),React.createElement("p",null,t[0]),React.createElement("button",{className:"delete",onClick:function(){return e._delete(n)}},"X"))}),0===this.state.todos.length?React.createElement("p",null,"Add a todo and see them appear here!"):null))}}]),n}();exports.default=y;
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=t(require("./TodoList"));function t(e){return e&&e.__esModule?e:{default:e}}ReactDOM.render(React.createElement(e.default,null),document.getElementById("root"));
},{"./TodoList":"V+Z4"}]},{},["Focm"], null)