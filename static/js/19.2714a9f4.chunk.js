(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{306:function(e,t,n){},527:function(e,t,n){"use strict";n.r(t);var a=n(29),r=n(27),o=n(11),c=n(12),l=n(14),u=n(13),i=n(15),s=n(0),m=n.n(s),f=n(51),p=(n(306),n(67)),b=n(60),y=n(63),d=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).axios=Object(f.b)(),n.state={mentors:{},loading:!0},n}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){for(var e=this,t=function(t){e.axios.get("/mentors/list/".concat(t,"/")).then(function(n){console.log(n);var o=n.data.data;o.length>0&&e.setState({loading:!1,mentors:Object(r.a)({},e.state.mentors,Object(a.a)({},t,o))})})},n=2016;n<=2020;n++)t(n)}},{key:"render",value:function(){console.log(this.state.mentors);var e=[];for(var t in this.state.mentors){var n=this.state.mentors[t];n=n.map(function(e){return m.a.createElement("div",{className:"individual_mentors",key:e.id},m.a.createElement("div",null,m.a.createElement("img",{className:"mentors_pic shadow-lg p-3 mb-5 bg-white rounded",src:e.profile_pic_url,alt:e.name})),m.a.createElement("h3",{className:"mentors_name"},e.name),m.a.createElement("p",{className:"center2"},e.detail))});var a=m.a.createElement("div",{className:"flex-containerr",key:t},n);e.push(a)}return m.a.createElement("div",{className:"mentors"},m.a.createElement(p.a,null),m.a.createElement("div",{className:"header4"},"PREVIOUS MENTORS"),m.a.createElement("div",{className:"container-fluid ctn13"},this.state.loading?m.a.createElement("div",{style:{marginTop:"20%"}},m.a.createElement(y.a,null)):e),m.a.createElement(b.a,null))}}]),t}(s.Component);t.default=d},57:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",function(){return a})},58:function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}n.d(t,"a",function(){return r})},59:function(e,t,n){"use strict";function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",function(){return a})},61:function(e,t,n){"use strict";function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){return(r="function"===typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}var o=n(26);function c(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(o.a)(e):t}n.d(t,"a",function(){return c})},62:function(e,t,n){"use strict";function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}n.d(t,"a",function(){return r})},63:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(11),r=n(12),o=n(14),c=n(13),l=n(15),u=n(0),i=n.n(u),s=(n(35),function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"loader"},i.a.createElement("div",{className:"l_main"},i.a.createElement("div",{className:"l_square"},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null)),i.a.createElement("div",{className:"l_square"},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null)),i.a.createElement("div",{className:"l_square"},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null)),i.a.createElement("div",{className:"l_square"},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null))))}}]),t}(u.Component))}}]);
//# sourceMappingURL=19.2714a9f4.chunk.js.map