(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ef95a47c"],{1276:function(t,e,n){"use strict";var i=n("d784"),o=n("44e7"),r=n("825a"),a=n("1d80"),s=n("4840"),c=n("8aa5"),h=n("50c4"),l=n("14c3"),u=n("9263"),f=n("d039"),d=[].push,v=Math.min,g=4294967295,b=!f((function(){return!RegExp(g,"y")}));i("split",2,(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(a(this)),r=void 0===n?g:n>>>0;if(0===r)return[];if(void 0===t)return[i];if(!o(t))return e.call(i,t,r);var s,c,h,l=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,b=new RegExp(t.source,f+"g");while(s=u.call(b,i)){if(c=b.lastIndex,c>v&&(l.push(i.slice(v,s.index)),s.length>1&&s.index<i.length&&d.apply(l,s.slice(1)),h=s[0].length,v=c,l.length>=r))break;b.lastIndex===s.index&&b.lastIndex++}return v===i.length?!h&&b.test("")||l.push(""):l.push(i.slice(v)),l.length>r?l.slice(0,r):l}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var o=a(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,o,n):i.call(String(o),e,n)},function(t,o){var a=n(i,t,this,o,i!==e);if(a.done)return a.value;var u=r(t),f=String(this),d=s(u,RegExp),p=u.unicode,m=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(b?"y":"g"),y=new d(b?u:"^(?:"+u.source+")",m),k=void 0===o?g:o>>>0;if(0===k)return[];if(0===f.length)return null===l(y,f)?[f]:[];var x=0,S=0,O=[];while(S<f.length){y.lastIndex=b?S:0;var j,w=l(y,b?f:f.slice(S));if(null===w||(j=v(h(y.lastIndex+(b?0:S)),f.length))===x)S=c(f,S,p);else{if(O.push(f.slice(x,S)),O.length===k)return O;for(var T=1;T<=w.length-1;T++)if(O.push(w[T]),O.length===k)return O;S=x=j}}return O.push(f.slice(x)),O}]}),!b)},"25f0":function(t,e,n){"use strict";var i=n("6eeb"),o=n("825a"),r=n("d039"),a=n("ad6d"),s="toString",c=RegExp.prototype,h=c[s],l=r((function(){return"/a/b"!=h.call({source:"a",flags:"b"})})),u=h.name!=s;(l||u)&&i(RegExp.prototype,s,(function(){var t=o(this),e=String(t.source),n=t.flags,i=String(void 0===n&&t instanceof RegExp&&!("flags"in c)?a.call(t):n);return"/"+e+"/"+i}),{unsafe:!0})},2909:function(t,e,n){"use strict";function i(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}n.d(e,"a",(function(){return a}));n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("e260"),n("d3b7"),n("25f0"),n("3ca3"),n("ddb0");function o(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function a(t){return i(t)||o(t)||r()}},"385c":function(t,e,n){"use strict";(function(t){n("99af"),n("4de4"),n("4160"),n("a15b"),n("d81d"),n("b0c0"),n("ac1f"),n("1276"),n("159b");var i=n("2909"),o=n("101f"),r=n("bb38"),a=n("ac0d"),s=n("e8ec");t.ePub=r["a"],e["a"]={mixins:[a["a"]],mounted:function(){var t=this,e=this.$route.params.fileName.split("|"),n=e[1];Object(o["b"])(n,(function(n,i){!n&&i?(console.log("找到离线电子书"),t.setFileName(e.join("/")).then((function(){t.initEpub(i)}))):(console.log("在线获取电子书"),t.setFileName(e.join("/")).then((function(){var e="http://47.99.166.157/epub/"+t.fileName+".epub";t.initEpub(e)})))}))},methods:{initEpub:function(t){var e=this;this.book=new r["a"](t),this.setCurrentBook(this.book),this.initRendition(),this.parseBook(),this.book.ready.then((function(){return e.book.locations.generate(window.innerWidth/375*750*(Object(s["e"])(e.fileName)/16))})).then((function(t){e.setBookAvailable(!0),e.refreshLocation()}))},initRendition:function(){var t=this;this.rendition=this.book.renderTo("read",{width:innerWidth,height:innerHeight,methods:"default"});var e=Object(s["g"])(this.fileName);this.display(e,(function(){t.initFontFamily(),t.initFontSize(),t.initTheme(),t.initGlobalStyle()})),this.rendition.hooks.content.register((function(t){t.addStylesheet("".concat("http://192.168.100.2:8081","/fonts/cabin.css")),t.addStylesheet("".concat("http://192.168.100.2:8081","/fonts/daysOne.css")),t.addStylesheet("".concat("http://192.168.100.2:8081","/fonts/montserrat.css")),t.addStylesheet("".concat("http://192.168.100.2:8081","/fonts/tangerine.css"))}))},parseBook:function(){var t=this;this.book.loaded.cover.then((function(e){t.book.archive.createUrl(e).then((function(e){t.setCover(e)}))})),this.book.loaded.metadata.then((function(e){t.setMetadata(e)})),this.book.loaded.navigation.then((function(e){var n=t.flatten(e.toc);function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t.parent?i(n.filter((function(e){return e.id===t.parent}))[0],++e):e}n.forEach((function(t){t.level=i(t)})),t.setNavigation(n)}))},flatten:function(t){var e,n=this;return(e=[]).concat.apply(e,Object(i["a"])(t.map((function(t){var e;return(e=[]).concat.apply(e,[t].concat(Object(i["a"])(n.flatten(t.subitems))))}))))},initFontFamily:function(){var t=Object(s["d"])(this.fileName);t?(this.book.rendition.themes.font(t),this.setFontFamilyDefault(t)):Object(s["n"])(this.fileName,this.fontFamilyDefault)},initFontSize:function(){var t=Object(s["e"])(this.fileName);t?(this.book.rendition.themes.fontSize(t),this.setFontdefault(t)):Object(s["o"])(this.fileName,this.fontdefault)},initTheme:function(){var t=this,e=Object(s["i"])(this.fileName);e?this.setThemeDefault(e):Object(s["r"])(this.fileName,this.themeDefault),this.themeslists.forEach((function(e){t.rendition.themes.register(e.name,e.style)})),this.rendition.themes.select(this.themeDefault)},prevPage:function(){var t=this;this.rendition&&this.rendition.prev().then((function(){t.refreshLocation()}))},nextPage:function(){var t=this;this.rendition&&this.rendition.next().then((function(){t.refreshLocation()}))},toggleTitleAndMenu:function(){this.setMenuVisible(!this.menuVisible),this.menuVisible||(this.setSettingVisible(-1),this.setFontFamilyVisible(!1))},onMaskClick:function(t){var e=innerWidth,n=t.offsetX;n>0&&n<.3*e?(this.prevPage(),this.hideTitleAndMenu()):n>0&&n>.7*e?(this.nextPage(),this.hideTitleAndMenu()):this.toggleTitleAndMenu()},move:function(t){var e=0;this.firstOffsetY?(e=t.changedTouches[0].clientY-this.firstOffsetY,this.setOffsetY(e)):this.firstOffsetY=t.changedTouches[0].clientY,t.preventDefault(),t.stopPropagation()},moveEnd:function(t){if(this.offsetY<20){var e=event.changedTouches[0].clientX-this.startX;e>40?(this.prevPage(),this.hideTitleAndMenu()):e<-40&&(this.nextPage(),this.hideTitleAndMenu()),event.stopPropagation()}else this.setOffsetY(0),this.firstOffsetY=null},initTurnPage:function(t){this.startX=t.changedTouches?t.changedTouches[0].clientX:""}}}}).call(this,n("c8ba"))},"3ca3":function(t,e,n){"use strict";var i=n("6547").charAt,o=n("69f3"),r=n("7dd0"),a="String Iterator",s=o.set,c=o.getterFor(a);r(String,"String",(function(t){s(this,{type:a,string:String(t),index:0})}),(function(){var t,e=c(this),n=e.string,o=e.index;return o>=n.length?{value:void 0,done:!0}:(t=i(n,o),e.index+=t.length,{value:t,done:!1})}))},"44e7":function(t,e,n){var i=n("861d"),o=n("c6b6"),r=n("b622"),a=r("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==o(t))}},"4df4":function(t,e,n){"use strict";var i=n("0366"),o=n("7b0b"),r=n("9bdd"),a=n("e95a"),s=n("50c4"),c=n("8418"),h=n("35a1");t.exports=function(t){var e,n,l,u,f,d,v=o(t),g="function"==typeof this?this:Array,b=arguments.length,p=b>1?arguments[1]:void 0,m=void 0!==p,y=h(v),k=0;if(m&&(p=i(p,b>2?arguments[2]:void 0,2)),void 0==y||g==Array&&a(y))for(e=s(v.length),n=new g(e);e>k;k++)d=m?p(v[k],k):v[k],c(n,k,d);else for(u=y.call(v),f=u.next,n=new g;!(l=f.call(u)).done;k++)d=m?r(u,p,[l.value,k],!0):l.value,c(n,k,d);return n.length=k,n}},5158:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ebook-reader"},[n("div",{attrs:{id:"read"}}),n("div",{staticClass:"ebook-reader-mask",on:{click:t.onMaskClick,touchmove:t.move,touchend:t.moveEnd,touchstart:t.initTurnPage}})])},o=[],r=n("385c"),a=r["a"],s=(n("88d4"),n("2877")),c=Object(s["a"])(a,i,o,!1,null,"02e21d7e",null);e["default"]=c.exports},"621c":function(t,e,n){},"88d4":function(t,e,n){"use strict";var i=n("621c"),o=n.n(i);o.a},a15b:function(t,e,n){"use strict";var i=n("23e7"),o=n("44ad"),r=n("fc6a"),a=n("a640"),s=[].join,c=o!=Object,h=a("join",",");i({target:"Array",proto:!0,forced:c||!h},{join:function(t){return s.call(r(this),void 0===t?",":t)}})},a630:function(t,e,n){var i=n("23e7"),o=n("4df4"),r=n("1c7e"),a=!r((function(t){Array.from(t)}));i({target:"Array",stat:!0,forced:a},{from:o})},b0c0:function(t,e,n){var i=n("83ab"),o=n("9bf2").f,r=Function.prototype,a=r.toString,s=/^\s*function ([^ (]*)/,c="name";!i||c in r||o(r,c,{configurable:!0,get:function(){try{return a.call(this).match(s)[1]}catch(t){return""}}})},d28b:function(t,e,n){var i=n("746f");i("iterator")},ddb0:function(t,e,n){var i=n("da84"),o=n("fdbc"),r=n("e260"),a=n("9112"),s=n("b622"),c=s("iterator"),h=s("toStringTag"),l=r.values;for(var u in o){var f=i[u],d=f&&f.prototype;if(d){if(d[c]!==l)try{a(d,c,l)}catch(g){d[c]=l}if(d[h]||a(d,h,u),o[u])for(var v in r)if(d[v]!==r[v])try{a(d,v,r[v])}catch(g){d[v]=r[v]}}}}}]);
//# sourceMappingURL=chunk-ef95a47c.c9778a2a.js.map