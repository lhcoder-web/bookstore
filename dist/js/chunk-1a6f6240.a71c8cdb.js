(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a6f6240"],{"0880":function(t,e,i){"use strict";var a=i("0dc5"),n=i.n(a);n.a},"0dc5":function(t,e,i){},"25f0":function(t,e,i){"use strict";var a=i("6eeb"),n=i("825a"),o=i("d039"),r=i("ad6d"),s="toString",c=RegExp.prototype,l=c[s],d=o((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),u=l.name!=s;(d||u)&&a(RegExp.prototype,s,(function(){var t=n(this),e=String(t.source),i=t.flags,a=String(void 0===i&&t instanceof RegExp&&!("flags"in c)?r.call(t):i);return"/"+e+"/"+a}),{unsafe:!0})},2909:function(t,e,i){"use strict";function a(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}i.d(e,"a",(function(){return r}));i("a4d3"),i("e01a"),i("d28b"),i("a630"),i("e260"),i("d3b7"),i("25f0"),i("3ca3"),i("ddb0");function n(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function r(t){return a(t)||n(t)||o()}},"2ca0":function(t,e,i){"use strict";var a=i("23e7"),n=i("06cf").f,o=i("50c4"),r=i("5a34"),s=i("1d80"),c=i("ab13"),l=i("c430"),d="".startsWith,u=Math.min,f=c("startsWith"),h=!l&&!f&&!!function(){var t=n(String.prototype,"startsWith");return t&&!t.writable}();a({target:"String",proto:!0,forced:!h&&!f},{startsWith:function(t){var e=String(s(this));r(t);var i=o(u(arguments.length>1?arguments[1]:void 0,e.length)),a=String(t);return d?d.call(e,a,i):e.slice(i,i+a.length)===a}})},"3ca3":function(t,e,i){"use strict";var a=i("6547").charAt,n=i("69f3"),o=i("7dd0"),r="String Iterator",s=n.set,c=n.getterFor(r);o(String,"String",(function(t){s(this,{type:r,string:String(t),index:0})}),(function(){var t,e=c(this),i=e.string,n=e.index;return n>=i.length?{value:void 0,done:!0}:(t=a(i,n),e.index+=t.length,{value:t,done:!1})}))},"44e7":function(t,e,i){var a=i("861d"),n=i("c6b6"),o=i("b622"),r=o("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==n(t))}},"4d63":function(t,e,i){var a=i("83ab"),n=i("da84"),o=i("94ca"),r=i("7156"),s=i("9bf2").f,c=i("241c").f,l=i("44e7"),d=i("ad6d"),u=i("9f7f"),f=i("6eeb"),h=i("d039"),v=i("69f3").set,p=i("2626"),b=i("b622"),g=b("match"),m=n.RegExp,k=m.prototype,w=/a/g,y=/a/g,x=new m(w)!==w,S=u.UNSUPPORTED_Y,C=a&&o("RegExp",!x||S||h((function(){return y[g]=!1,m(w)!=w||m(y)==y||"/a/i"!=m(w,"i")})));if(C){var _=function(t,e){var i,a=this instanceof _,n=l(t),o=void 0===e;if(!a&&n&&t.constructor===_&&o)return t;x?n&&!o&&(t=t.source):t instanceof _&&(o&&(e=d.call(t)),t=t.source),S&&(i=!!e&&e.indexOf("y")>-1,i&&(e=e.replace(/y/g,"")));var s=r(x?new m(t,e):m(t,e),a?this:k,_);return S&&i&&v(s,{sticky:i}),s},E=function(t){t in _||s(_,t,{configurable:!0,get:function(){return m[t]},set:function(e){m[t]=e}})},N=c(m),T=0;while(N.length>T)E(N[T++]);k.constructor=_,_.prototype=k,f(n,"RegExp",_)}p("RegExp")},"4df4":function(t,e,i){"use strict";var a=i("0366"),n=i("7b0b"),o=i("9bdd"),r=i("e95a"),s=i("50c4"),c=i("8418"),l=i("35a1");t.exports=function(t){var e,i,d,u,f,h,v=n(t),p="function"==typeof this?this:Array,b=arguments.length,g=b>1?arguments[1]:void 0,m=void 0!==g,k=l(v),w=0;if(m&&(g=a(g,b>2?arguments[2]:void 0,2)),void 0==k||p==Array&&r(k))for(e=s(v.length),i=new p(e);e>w;w++)h=m?g(v[w],w):v[w],c(i,w,h);else for(u=k.call(v),f=u.next,i=new p;!(d=f.call(u)).done;w++)h=m?o(u,g,[d.value,w],!0):d.value,c(i,w,h);return i.length=w,i}},5319:function(t,e,i){"use strict";var a=i("d784"),n=i("825a"),o=i("7b0b"),r=i("50c4"),s=i("a691"),c=i("1d80"),l=i("8aa5"),d=i("14c3"),u=Math.max,f=Math.min,h=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,p=/\$([$&'`]|\d\d?)/g,b=function(t){return void 0===t?t:String(t)};a("replace",2,(function(t,e,i,a){var g=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=a.REPLACE_KEEPS_$0,k=g?"$":"$0";return[function(i,a){var n=c(this),o=void 0==i?void 0:i[t];return void 0!==o?o.call(i,n,a):e.call(String(n),i,a)},function(t,a){if(!g&&m||"string"===typeof a&&-1===a.indexOf(k)){var o=i(e,t,this,a);if(o.done)return o.value}var c=n(t),h=String(this),v="function"===typeof a;v||(a=String(a));var p=c.global;if(p){var y=c.unicode;c.lastIndex=0}var x=[];while(1){var S=d(c,h);if(null===S)break;if(x.push(S),!p)break;var C=String(S[0]);""===C&&(c.lastIndex=l(h,r(c.lastIndex),y))}for(var _="",E=0,N=0;N<x.length;N++){S=x[N];for(var T=String(S[0]),$=u(f(s(S.index),h.length),0),I=[],O=1;O<S.length;O++)I.push(b(S[O]));var A=S.groups;if(v){var R=[T].concat(I,$,h);void 0!==A&&R.push(A);var L=String(a.apply(void 0,R))}else L=w(T,h,$,I,A,a);$>=E&&(_+=h.slice(E,$)+L,E=$+T.length)}return _+h.slice(E)}];function w(t,i,a,n,r,s){var c=a+t.length,l=n.length,d=p;return void 0!==r&&(r=o(r),d=v),e.call(s,d,(function(e,o){var s;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return i.slice(0,a);case"'":return i.slice(c);case"<":s=r[o.slice(1,-1)];break;default:var d=+o;if(0===d)return e;if(d>l){var u=h(d/10);return 0===u?e:u<=l?void 0===n[u-1]?o.charAt(1):n[u-1]+o.charAt(1):e}s=n[d-1]}return void 0===s?"":s}))}}))},"5a34":function(t,e,i){var a=i("44e7");t.exports=function(t){if(a(t))throw TypeError("The method doesn't accept regular expressions");return t}},"5bab":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"book-detail"},[i("detail-title",{ref:"title",attrs:{showShelf:!0},on:{back:t.back}}),i("scroll",{ref:"scroll",staticClass:"content-wrapper",attrs:{top:42,bottom:52},on:{onScroll:t.onScroll}},[i("book-info",{attrs:{cover:t.cover,title:t.title,author:t.author,desc:t.desc}}),i("div",{staticClass:"book-detail-content-wrapper"},[i("div",{staticClass:"book-detail-content-title"},[t._v("版权")]),i("div",{staticClass:"book-detail-content-list-wrapper"},[i("div",{staticClass:"book-detail-content-row"},[i("div",{staticClass:"book-detail-content-label"},[t._v("出版社")]),i("div",{staticClass:"book-detail-content-text"},[t._v(t._s(t.publisher))])]),i("div",{staticClass:"book-detail-content-row"},[i("div",{staticClass:"book-detail-content-label"},[t._v("分类")]),i("div",{staticClass:"book-detail-content-text"},[t._v(t._s(t.categoryText))])]),i("div",{staticClass:"book-detail-content-row"},[i("div",{staticClass:"book-detail-content-label"},[t._v("语言")]),i("div",{staticClass:"book-detail-content-text"},[t._v(t._s(t.lang))])]),i("div",{staticClass:"book-detail-content-row"},[i("div",{staticClass:"book-detail-content-label"},[t._v("ISBN")]),i("div",{staticClass:"book-detail-content-text"},[t._v(t._s(t.isbn))])])])]),i("div",{staticClass:"book-detail-content-wrapper"},[i("div",{staticClass:"book-detail-content-title"},[t._v("目录")]),i("div",{staticClass:"book-detail-content-list-wrapper"},[this.navigation?t._e():i("div",{staticClass:"loading-text-wrapper"},[i("span",{staticClass:"loading-text"},[t._v(t._s("detail.loading"))])]),i("div",{staticClass:"book-detail-content-item-wrapper"},t._l(t.flatNavigation,(function(e,a){return i("div",{key:a,staticClass:"book-detail-content-item"},[e.label?i("div",{staticClass:"book-detail-content-navigation-text",class:{"is-sub":e.deep>1},style:t.itemStyle(e)},[t._v(t._s(e.label)+" ")]):t._e()])})),0)])]),i("div",{staticClass:"book-detail-content-wrapper"},[i("div",{staticClass:"book-detail-content-title"},[t._v("试读")]),i("div",{staticClass:"book-detail-content-list-wrapper"},[this.displayed?t._e():i("div",{staticClass:"loading-text-wrapper"},[i("span",{staticClass:"loading-text"},[t._v("加载中...")])])]),i("div",{directives:[{name:"show",rawName:"v-show",value:this.displayed,expression:"this.displayed"}],ref:"preview",attrs:{id:"preview"}})])],1),i("div",{staticClass:"bottom-wrapper"},[i("div",{staticClass:"bottom-btn",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.readBook()}}},[t._v("阅读")]),i("div",{staticClass:"bottom-btn",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.trialListening()}}},[t._v("听书")]),i("div",{staticClass:"bottom-btn",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addOrRemoveShelf()}}},[t.inBookShelf?i("span",{staticClass:"icon-check"}):t._e(),t._v(" "+t._s(t.inBookShelf?"已加入书架":"加入书架")+" ")])]),i("toast",{ref:"toast",attrs:{text:t.toastText}})],1)},n=[],o=i("70e8"),r=o["a"],s=(i("0880"),i("2877")),c=Object(s["a"])(r,a,n,!1,null,"f0be49d0",null);e["default"]=c.exports},"70e8":function(t,e,i){"use strict";(function(t){i("a4d3"),i("e01a"),i("99af"),i("4de4"),i("4160"),i("d81d"),i("4d63"),i("ac1f"),i("25f0"),i("5319"),i("2ca0"),i("159b");var a=i("2909"),n=i("1432"),o=i("c470"),r=i("6701"),s=i("78dc"),c=i("1ae0"),l=i("fa7d"),d=i("101f"),u=i("da6f"),f=i("ac0d"),h=i("e8ec"),v=i("bb38");t.ePub=v["a"],e["a"]={mixins:[f["c"]],components:{DetailTitle:n["a"],Scroll:r["a"],BookInfo:o["a"],Toast:s["a"]},computed:{desc:function(){return this.description?this.description.substring(0,100):""},flatNavigation:function(){return this.navigation?Array.prototype.concat.apply([],Array.prototype.concat.apply([],this.doFlatNavigation(this.navigation.toc))):[]},lang:function(){return this.metadata?this.metadata.language:"-"},isbn:function(){return this.metadata?this.metadata.identifier:"-"},publisher:function(){return this.metadata?this.metadata.publisher:"-"},title:function(){return this.metadata?this.metadata.title:""},author:function(){return this.metadata?this.metadata.creator:""},inBookShelf:function(){var t=this;if(this.bookItem&&this.shelfList){var e=function t(e){var i;return(i=[]).concat.apply(i,Object(a["a"])(e.map((function(e){return e.itemList?[e].concat(Object(a["a"])(t(e.itemList))):e}))))}(this.shelfList).filter((function(t){return 1===t.type})),i=e.filter((function(e){return e.fileName===t.bookItem.fileName}));return i&&i.length>0}return!1}},data:function(){return{bookItem:null,book:null,metadata:null,trialRead:null,cover:null,navigation:null,displayed:!1,audio:null,randomLocation:null,description:null,toastText:"",trialText:null,categoryText:null,opf:null}},methods:{addOrRemoveShelf:function(){var t=this;this.inBookShelf?this.setShelfList(Object(u["g"])(this.bookItem)).then((function(){Object(h["l"])(t.shelfList)})):(Object(u["a"])(this.bookItem),this.setShelfList(Object(h["b"])()))},showToast:function(t){this.toastText=t,this.$refs.toast.show()},readBook:function(){this.$router.push({path:"/ebook/".concat(this.bookItem.categoryText,"|").concat(this.fileName)})},trialListening:function(){var t=this;Object(d["b"])(this.bookItem.fileName,(function(e,i){!e&&i&&i instanceof Blob?t.$router.push({path:"/store/speaking",query:{fileName:t.bookItem.fileName}}):t.$router.push({path:"/store/speaking",query:{fileName:t.bookItem.fileName,opf:t.opf}})}))},read:function(t){this.$router.push({path:"/ebook/".concat(this.categoryText,"|").concat(this.fileName),query:{href:t.href}})},itemStyle:function(t){return{marginLeft:(t.deep-1)*Object(l["a"])(20)+"rem"}},doFlatNavigation:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=[];return t.forEach((function(t){t.deep=i,a.push(t),t.subitems&&t.subitems.length>0&&a.push(e.doFlatNavigation(t.subitems,i+1))})),a},downloadBook:function(){var t="".concat("http://47.99.166.157/epub","/").concat(this.bookItem.categoryText,"/").concat(this.bookItem.fileName,"/OEBPS/package.opf");this.parseBook(t)},parseBook:function(t){var e=this;this.book=new v["a"](t),this.book.loaded.metadata.then((function(t){e.metadata=t})),this.book.loaded.navigation.then((function(t){if(e.navigation=t,e.navigation.toc&&e.navigation.toc.length>1){var i=e.display(e.navigation.toc[1].href);i&&i.then((function(t){e.$refs.scroll&&e.$refs.scroll.refresh(),e.displayed=!0;var i=new RegExp("<.+?>","g"),a=t.output.replace(i,"").replace(/\s\s/g,"");e.description=a}))}}))},init:function(){var t=this;this.fileName=this.$route.query.fileName,this.categoryText=this.$route.query.category,this.fileName&&Object(c["a"])({fileName:this.fileName}).then((function(e){if(200===e.status&&0===e.data.error_code&&e.data.data){var i=e.data.data;t.bookItem=i,t.cover=t.bookItem.cover;var a=i.rootFile;a.startsWith("/")&&(a=a.substring(1,a.length)),t.opf="".concat("http://47.99.166.157/epub2","/").concat(t.fileName,"/").concat(a),t.parseBook(t.opf)}else t.showToast(e.data.msg)}))},back:function(){this.setTabbarVisible(!0),this.$router.go(-1)},display:function(t){if(this.$refs.preview)return this.rendition||(this.rendition=this.book.renderTo("preview",{width:window.innerWidth>640?640:window.innerWidth,height:window.innerHeight,method:"default"})),t?this.rendition.display(t):this.rendition.display()},onScroll:function(t){t>Object(l["b"])(42)?this.$refs.title.showShadow():this.$refs.title.hideShadow()}},mounted:function(){this.init(),this.shelfList&&0!==this.shelfList.length||this.getShelfList()}}}).call(this,i("c8ba"))},"8b38":function(t,e,i){},a630:function(t,e,i){var a=i("23e7"),n=i("4df4"),o=i("1c7e"),r=!o((function(t){Array.from(t)}));a({target:"Array",stat:!0,forced:r},{from:n})},ab13:function(t,e,i){var a=i("b622"),n=a("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(i){try{return e[n]=!1,"/./"[t](e)}catch(a){}}return!1}},c470:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cover-title-wrapper"},[i("div",{staticClass:"cover-title-left-wrapper"},[i("img",{staticClass:"cover-img",attrs:{src:t.cover}})]),i("div",{staticClass:"cover-title-right-wrapper"},[i("div",{staticClass:"detail-cover-title-wrapper"},[i("div",{staticClass:"cover-title-text"},[t._v(t._s(t.title))])]),i("div",{staticClass:"cover-author-wrapper"},[i("div",{staticClass:"cover-author-text"},[t._v(t._s(t.author))])]),i("div",{staticClass:"detail-cover-description-wrapper"},[i("div",{staticClass:"detail-cover-description-text"},[t._v(t._s(t.desc))])])])])},n=[],o={props:{cover:String,title:String,author:String,desc:String}},r=o,s=(i("cbbc"),i("2877")),c=Object(s["a"])(r,a,n,!1,null,"da3f5996",null);e["a"]=c.exports},cbbc:function(t,e,i){"use strict";var a=i("8b38"),n=i.n(a);n.a},d28b:function(t,e,i){var a=i("746f");a("iterator")},ddb0:function(t,e,i){var a=i("da84"),n=i("fdbc"),o=i("e260"),r=i("9112"),s=i("b622"),c=s("iterator"),l=s("toStringTag"),d=o.values;for(var u in n){var f=a[u],h=f&&f.prototype;if(h){if(h[c]!==d)try{r(h,c,d)}catch(p){h[c]=d}if(h[l]||r(h,l,u),n[u])for(var v in o)if(h[v]!==o[v])try{r(h,v,o[v])}catch(p){h[v]=o[v]}}}}}]);
//# sourceMappingURL=chunk-1a6f6240.a71c8cdb.js.map