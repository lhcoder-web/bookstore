(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57b0f6d4"],{3395:function(t,s,i){},"4ae2":function(t,s,i){"use strict";var a=i("6e8e"),c=i.n(a);c.a},6701:function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{ref:"scrollWrapper",staticClass:"scroll-wrapper",class:{"no-scroll":t.ifNoScroll},on:{"&scroll":function(s){return t.handleScroll(s)}}},[t._t("default")],2)},c=[],e=(i("a9e3"),i("fa7d")),r={props:{top:{type:Number,default:0},bottom:{type:Number,default:0},ifNoScroll:{type:Boolean,default:!1},initPosition:{type:Object,default:function(){return{x:0,y:0}}}},methods:{handleScroll:function(t){var s=t.target.scrollTop||window.pageYOffset||document.body.scrollTop;this.$emit("onScroll",s)},scrollTo:function(t,s){this.$refs.scrollWrapper.scrollTo(t,s)},refresh:function(){this.$refs.scrollWrapper&&(this.$refs.scrollWrapper.style.height=window.innerHeight-Object(e["b"])(this.top)-Object(e["b"])(this.bottom)+"px",this.$refs.scrollWrapper.addEventListener("scroll",this.handleScroll))}},mounted:function(){var t=this;this.refresh(),this.$nextTick((function(){setTimeout((function(){t.scrollTo(Object(e["b"])(t.initPosition.x),Object(e["b"])(t.initPosition.y))}),1)}))}},o=r,l=(i("6a16"),i("2877")),n=Object(l["a"])(o,a,c,!1,null,"7da502e9",null);s["a"]=n.exports},"6a16":function(t,s,i){"use strict";var a=i("8958"),c=i.n(a);c.a},"6a19":function(t,s,i){t.exports=i.p+"img/mypic.d3f747f4.jpg"},"6e8e":function(t,s,i){},"71ca":function(t,s,i){t.exports=i.p+"img/fuli.c8debdec.svg"},"71e2":function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("Scorll",[a("div",{staticClass:"myvip"},[a("top-title",{attrs:{title:"我的包月VIP"}}),a("img",{staticClass:"vipImg",attrs:{src:i("9822")}}),a("div",{staticClass:"user"},[a("img",{staticClass:"userImg",attrs:{src:i("6a19")}}),a("div",{staticClass:"userName"},[t._v(t._s(t.getusername)+" "),a("div",{staticClass:"tips"},[t._v("您还未开通包月vip")])])]),a("div",{staticClass:"container"},[a("div",{staticClass:"lists"},[a("div",{staticClass:"item"},[a("div",{staticClass:"top-title"},[t._v("每月VIP套餐")]),t._l(t.viplists,(function(s,i){return a("div",{key:i,staticClass:"itemlists",class:{active:t.currentIndex===i},on:{click:function(s){return t.beActive(i)}}},[a("div",{staticClass:"left"},[a("div",{staticClass:"left-top"},[t._v(t._s(s.month))]),a("div",{staticClass:"left-bottom"},[t._v(t._s(s.bottom))])]),a("div",{staticClass:"right"},[a("s",[t._v(t._s(s.high))]),a("span",{staticClass:"price"},[t._v(t._s(s.low))]),a("button",[t._v("开通")])])])}))],2),a("div",{staticClass:"last"},[a("div",{staticClass:"top-title"},[t._v("包月VIP特权")]),a("div",{staticClass:"imgOne"},[a("div",{staticClass:"imgbox"},[a("div",{staticClass:"imgItem"},[a("img",{attrs:{src:i("71ca"),alt:""}})]),a("div",{staticClass:"word"},[t._v("包月书库全免")])]),a("div",{staticClass:"imgbox"},[a("div",{staticClass:"imgItem"},[a("img",{attrs:{src:i("71ca"),alt:""}})]),a("div",{staticClass:"word"},[t._v("出版书籍8折")])]),a("div",{staticClass:"imgbox"},[a("div",{staticClass:"imgItem"},[a("img",{attrs:{src:i("71ca"),alt:""}})]),a("div",{staticClass:"word"},[t._v("杂志全免")])]),a("div",{staticClass:"imgbox"},[a("div",{staticClass:"imgItem"},[a("img",{attrs:{src:i("71ca"),alt:""}})]),a("div",{staticClass:"word"},[t._v("尊贵身份")])])]),a("div",{staticClass:"imgOne"},[a("div",{staticClass:"imgbox"},[a("div",{staticClass:"imgItem"},[a("img",{attrs:{src:i("71ca"),alt:""}})]),a("div",{staticClass:"word"},[t._v("赠送代金券")])]),a("div",{staticClass:"imgbox"},[a("div",{staticClass:"imgItem"},[a("img",{attrs:{src:i("71ca"),alt:""}})]),a("div",{staticClass:"word"},[t._v("赠送月票")])]),a("div",{staticClass:"imgbox"},[a("div",{staticClass:"imgItem"},[a("img",{attrs:{src:i("71ca"),alt:""}})]),a("div",{staticClass:"word"},[t._v("任务双倍经验")])]),a("div",{staticClass:"imgbox"},[a("div",{staticClass:"imgItem"},[a("img",{attrs:{src:i("71ca"),alt:""}})]),a("div",{staticClass:"word"},[t._v("漫画书籍8折")])])])]),a("footer",[a("img",{staticClass:"footerImg",attrs:{src:i("a563")}})])])])],1)])},c=[],e=i("b9a5"),r=i("6701"),o={components:{topTitle:e["a"],Scorll:r["a"]},data:function(){return{viplists:[{month:"连续包月",bottom:"自动续费，随时取消",high:"￥20",low:"￥15"},{month:"1个月",bottom:"开通一个月",high:"￥21",low:"￥20"},{month:"12个月",bottom:"立省￥142",high:"￥240",low:"￥98"},{month:"730天",bottom:"立省￥236",high:"￥432",low:"￥196"}],currentIndex:0}},computed:{getusername:function(){return"null"===this.$route.params.uname?"请先登录":this.$route.params.uname}},methods:{beActive:function(t){this.currentIndex=t}}},l=o,n=(i("4ae2"),i("2877")),d=Object(n["a"])(l,a,c,!1,null,"703471db",null);s["default"]=d.exports},8958:function(t,s,i){},9822:function(t,s,i){t.exports=i.p+"img/kaivip.624fbd39.jpg"},a563:function(t,s,i){t.exports=i.p+"img/myvip.916c3fdb.jpg"},b9a5:function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"login"},[i("div",{staticClass:"icon-wrapper",on:{click:t.back}},[i("span",{staticClass:"icon-back"})]),i("div",{staticClass:"title"},[t._v(t._s(t.title))]),i("div",{})])},c=[],e=i("5530"),r=i("2f62"),o={props:{title:String},methods:Object(e["a"])({},Object(r["b"])(["setTabbarVisible"]),{back:function(){this.$router.go(-1),"sign in"!==this.title&&this.setTabbarVisible(!0)}})},l=o,n=(i("efbb"),i("2877")),d=Object(n["a"])(l,a,c,!1,null,"6c91f220",null);s["a"]=d.exports},efbb:function(t,s,i){"use strict";var a=i("3395"),c=i.n(a);c.a},fa7d:function(t,s,i){"use strict";function a(t){var s=37.5;return t/s}function c(t){var s=window.innerWidth>500?500:window.innerWidth;return t/(s/375)}i.d(s,"a",(function(){return a})),i.d(s,"b",(function(){return c}))}}]);
//# sourceMappingURL=chunk-57b0f6d4.97528c95.js.map