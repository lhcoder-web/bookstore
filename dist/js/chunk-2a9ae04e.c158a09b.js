(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a9ae04e"],{"029c":function(t,e,s){},"0842":function(t,e,s){"use strict";var i=s("1961"),n=s.n(i);n.a},"0c27":function(t,e,s){},"122b":function(t,e,s){},1961:function(t,e,s){},"1b8f":function(t,e,s){},"1ef5":function(t,e,s){"use strict";var i=s("f2d8"),n=s.n(i);n.a},"29f5":function(t,e,s){"use strict";var i=s("c217"),n=s.n(i);n.a},"4a16":function(t,e,s){"use strict";var i=s("a846"),n=s.n(i);n.a},"4b6b":function(t,e,s){},"510c":function(t,e,s){"use strict";var i=s("122b"),n=s.n(i);n.a},"51a1":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"ebook",staticClass:"ebook"},[s("ebook-header"),s("ebook-reader"),s("ebook-title"),s("ebook-menu"),s("ebook-footer"),s("ebook-bookmark")],1)},n=[],a=s("e8ec"),o=s("ac0d"),r=s("5158"),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"slide-down"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.menuVisible,expression:"menuVisible"}],staticClass:"title-wrapper"},[s("div",{staticClass:"left"},[s("span",{staticClass:"icon-back icon",on:{click:t.back}})]),s("div",{staticClass:"right"},[s("div",{staticClass:"icon-wrapper icon"},[s("span",{staticClass:"icon-cart"})]),s("div",{staticClass:"icon-wrapper icon"},[s("span",{staticClass:"icon-person icon"})]),s("div",{staticClass:"icon-wrapper icon"},[s("span",{staticClass:"icon-more"})])])])])},l=[],u={mixins:[o["a"]],methods:{back:function(){this.$router.go(-1)}}},d=u,f=(s("56db"),s("2877")),h=Object(f["a"])(d,c,l,!1,null,"fa026760",null),v=h.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("transition",{attrs:{name:"slide-up"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.menuVisible,expression:"menuVisible"}],staticClass:"menu-wrapper"},[s("div",{staticClass:"icon-wrapper"},[s("span",{staticClass:"icon-menu icon",on:{click:function(e){return t.showSettings(3)}}})]),s("div",{staticClass:"icon-wrapper",on:{click:function(e){return t.showSettings(2)}}},[s("span",{staticClass:"icon-progress icon"})]),s("div",{staticClass:"icon-wrapper",on:{click:function(e){return t.showSettings(1)}}},[s("span",{staticClass:"icon-bright icon"})]),s("div",{staticClass:"icon-wrapper"},[s("span",{staticClass:"icon-A icon",on:{click:function(e){return t.showSettings(0)}}})])])]),s("setting-font"),s("setting-font-family-option"),s("setting-theme"),s("setting-progress"),s("catalog-slide")],1)},m=[],b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"slide-up"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.menuVisible&&0===t.settingVisible,expression:"menuVisible && settingVisible === 0"}],staticClass:"setting-wrapper"},[s("div",{staticClass:"setting-font-size"},[s("div",{staticClass:"leftA"},[t._v("A")]),t._l(t.fontlists,(function(e,i){return s("div",{key:i,staticClass:"select",on:{click:function(s){return t.setFontSize(e)}}},[s("div",{staticClass:"line"}),s("div",{staticClass:"point-wrapper"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.fontdefault===e,expression:"fontdefault === item"}],staticClass:"point"},[s("div",{staticClass:"small-point"})])]),s("div",{staticClass:"line"})])})),s("div",{staticClass:"rightA"},[t._v("A")])],2),s("div",{staticClass:"setting-font-family",on:{click:t.showFontFamilyOption}},[s("div",{staticClass:"setting-font-family-text-wrapper"},[s("span",{staticClass:"set-fontFamily"},[t._v(t._s(t.fontFamilyDefault))])]),s("div",{staticClass:"icon-wrapper"},[s("span",{staticClass:"icon-forward"})])])])])},k=[],g={mixins:[o["a"]],data:function(){return{fontlists:["12px","14px","16px","18px","20px","22px","24px"]}},methods:{setFontSize:function(t){this.setFontdefault(t),this.currentBook.rendition.themes.fontSize(t),Object(a["o"])(this.fileName,t)},showFontFamilyOption:function(){this.setFontFamilyVisible(!0),this.setSettingVisible(-1)}}},C=g,x=(s("fe28"),Object(f["a"])(C,b,k,!1,null,"66f999c7",null)),w=x.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"option-slide-up"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.fontFamilyVisible,expression:"fontFamilyVisible"}],staticClass:"ebook-popup-list"},[s("div",{staticClass:"ebook-popup-title"},[s("div",{staticClass:"title",on:{click:t.hide}},[s("span",{staticClass:"icon-down2"})]),s("span",{staticClass:"title-text"},[t._v("设置字体")])]),s("div",{staticClass:"ebook-popup-list-wrapper"},t._l(t.fontFamilyList,(function(e,i){return s("div",{key:i,staticClass:"ebook-popup-item",on:{click:function(s){return t.setFontFamily(e.font)}}},[s("div",{staticClass:"item-text",class:{selected:t.isselected(e.font)}},[t._v(t._s(e.font))]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isselected(e.font),expression:"isselected(item.font)"}],staticClass:"item-icon"},[s("span",{staticClass:"icon-check"})])])})),0)])])},_=[],S={mixins:[o["a"]],data:function(){return{fontFamilyList:[{font:"Default"},{font:"Cabin"},{font:"Days One"},{font:"Montserrat"},{font:"Tangerine"}]}},methods:{hide:function(){this.setFontFamilyVisible(!1)},isselected:function(t){return t===this.fontFamilyDefault},setFontFamily:function(t){this.setFontFamilyDefault(t),Object(a["n"])(this.fileName,t),"Default"===t?this.currentBook.rendition.themes.font("Times New Roman"):this.currentBook.rendition.themes.font(t)}}},T=S,$=(s("0842"),Object(f["a"])(T,y,_,!1,null,"b0e61108",null)),O=$.exports,F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"slide-up"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.menuVisible&&1===t.settingVisible,expression:"menuVisible && settingVisible === 1"}],staticClass:"setting-wrapper"},t._l(t.themeslists,(function(e,i){return s("div",{key:i,staticClass:"setting-theme-item"},[s("div",{staticClass:"view",class:{boxActive:t.themeDefault===e.name},style:{background:e.style.body.background},on:{click:function(s){return t.setTheme(e.name)}}}),s("div",{staticClass:"text",class:{active:t.themeDefault===e.name}},[t._v(t._s(e.name))])])})),0)])},V=[],j={mixins:[o["a"]],methods:{setTheme:function(t){var e=this;Object(a["r"])(this.fileName,t),this.setThemeDefault(t).then((function(){e.currentBook.rendition.themes.select(e.themeDefault)})),this.removeAllCss(),this.initGlobalStyle(t)}}},N=j,E=(s("ab56"),Object(f["a"])(N,F,V,!1,null,"207a0614",null)),B=E.exports,P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"slide-up"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.menuVisible&&2===t.settingVisible,expression:"menuVisible && settingVisible === 2"}],staticClass:"setting-wrapper"},[s("div",{staticClass:"setting-progress"},[s("div",{staticClass:"read-time-wrapper"},[s("span",{staticClass:"read-time-text"},[t._v("已读"+t._s(t.getReadTimeText())+"分钟")]),s("span",{staticClass:"icon-forward"})]),s("div",{staticClass:"progress-wrapper"},[s("div",{staticClass:"progress-icon-wrapper",on:{click:function(e){return t.prevSection()}}},[s("span",{staticClass:"icon-back"})]),s("input",{ref:"progress",staticClass:"progress",attrs:{type:"range",max:"100",min:"0",step:"1",disabled:!t.bookAvailable},domProps:{value:t.progress},on:{input:function(e){return t.onProgressInput(e.target.value)},change:function(e){return t.onProgressChange(e.target.value)}}}),s("div",{staticClass:"progress-icon-wrapper",on:{click:function(e){return t.nextSection()}}},[s("span",{staticClass:"icon-forward"})])]),s("div",{staticClass:"text-wrapper"},[s("span",{staticClass:"progress-section-text"},[t._v(t._s(t.getSectionName))]),s("span",{staticClass:"progress-text"},[t._v("("+t._s(t.bookAvailable?this.progress+"%":"book.loading")+")")])])])])])},A=[],I={mixins:[o["a"]],methods:{changeProgressColor:function(t){this.$refs.progress.style.backgroundSize=t+"%"},prevSection:function(){var t=this;this.section>0&&this.bookAvailable&&this.setSection(this.section-1).then((function(){t.displaySection()}))},nextSection:function(){var t=this;this.section<this.currentBook.spine.length-1&&this.bookAvailable&&this.setSection(this.section+1).then((function(){t.displaySection()}))},displaySection:function(){var t=this,e=this.currentBook.section(this.section);e&&e.href&&this.display(e.href,(function(){t.changeProgressColor(t.progress)}))},onProgressChange:function(t){var e=this;this.setProgress(t).then((function(){e.displayProgress(),e.changeProgressColor()}))},onProgressInput:function(t){var e=this;this.setProgress(t).then((function(){e.changeProgressColor(t)}))},displayProgress:function(){var t=this.currentBook.locations.cfiFromPercentage(this.progress/100);this.display(t)}},updated:function(){this.changeProgressColor(this.progress)}},D=I,L=(s("c66d"),Object(f["a"])(D,P,A,!1,null,"17f1607c",null)),W=L.exports,R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"fade-slide-right"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.menuVisible&&3===t.settingVisible,expression:"menuVisible && settingVisible === 3"}],staticClass:"slide-content-wrapper"},[s("div",{staticClass:"content"},[t.bookAvailable?s("div",{staticClass:"content-page-wrapper"},[s("div",{staticClass:"content-page"},[s(1===t.currentTab?t.content:t.ebookSlideBookmark,{tag:"component"})],1),s("div",{staticClass:"content-page-tab"},[s("div",{staticClass:"content-page-tab-item",class:{selected:1===t.currentTab},on:{click:function(e){return t.selectTab(1)}}},[t._v("目录")]),s("div",{staticClass:"content-page-tab-item",class:{selected:2===t.currentTab},on:{click:function(e){return t.selectTab(2)}}},[t._v("书签")])])]):s("div",{staticClass:"content-empty"},[s("ebook-loading")],1)]),s("div",{staticClass:"content-bg",on:{click:t.hideTitleAndMenu}})])])},M=[],H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ebook-slide-contents"},[s("div",{staticClass:"slide-contents-search-wrapper"},[s("div",{staticClass:"slid-contents-search-input-wrapper"},[t._m(0),s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"slid-contents-search-input",attrs:{type:"text",placeholder:"搜索全书内容"},domProps:{value:t.searchText},on:{click:t.showCancel,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)},input:function(e){e.target.composing||(t.searchText=e.target.value)}}})]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.cancleVisible,expression:"cancleVisible"}],staticClass:"slide-contents-search-cancel",on:{click:t.hideCancel}},[t._v("取消")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.cancleVisible,expression:"!cancleVisible"}],staticClass:"slide-contents-book-wrapper"},[s("div",{staticClass:"slide-contents-book-img-wrapper"},[s("img",{staticClass:"slide-contents-book-img",attrs:{src:t.cover}})]),s("div",{staticClass:"slide-contents-book-info-wrapper"},[s("div",{staticClass:"slide-contents-book-title"},[t._v(t._s(t.metadata?t.metadata.title:""))]),s("div",{staticClass:"slide-contents-book-author"},[t._v(t._s(t.metadata?t.metadata.creator:""))])]),s("div",{staticClass:"slide-contents-book-progress-wrapper"},[s("div",{staticClass:"slide-contents-book-progress"},[s("span",{staticClass:"progress"},[t._v(t._s(t.progress+"%"))]),s("span",{staticClass:"progress-text"},[t._v("已读")])]),s("div",{staticClass:"slide-contens-book-time"},[t._v("已读"+t._s(t.getReadTimeText())+"分钟")])])]),s("Scroll",{directives:[{name:"show",rawName:"v-show",value:!t.cancleVisible,expression:"!cancleVisible"}],staticClass:"scroll",attrs:{top:156,bottom:48}},t._l(t.navigation,(function(e,i){return s("div",{key:i,staticClass:"slide-contents-item"},[s("span",{staticClass:"slide-contents-item-label",class:{selected:i===t.section},style:t.contentItemStyle(e),on:{click:function(s){return t.displayNavigation(e.href)}}},[t._v(t._s(e.label))]),s("span",{staticClass:"slide-contents-item-page"})])})),0),s("Scroll",{directives:[{name:"show",rawName:"v-show",value:t.cancleVisible,expression:"cancleVisible"}],staticClass:"slide-search-list",attrs:{top:66,bottom:48}},t._l(t.searchList,(function(e,i){return s("div",{key:i,staticClass:"slide-search-item",domProps:{innerHTML:t._s(e.excerpt)},on:{click:function(s){return t.displaySearchItem(e.cfi)}}})})),0)],1)},z=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slide-contents-search-icon"},[s("span",{staticClass:"icon-search"})])}],U=(s("99af"),s("7db0"),s("d81d"),s("d3b7"),s("ac1f"),s("3ca3"),s("5319"),s("ddb0"),s("6701")),Y={mixins:[o["a"]],data:function(){return{cancleVisible:!1,searchText:"",searchList:null}},methods:{displayNavigation:function(t){var e=this;this.display(t,(function(){e.hideTitleAndMenu()}))},hideCancel:function(){this.cancleVisible=!1,this.searchText="",this.searchList=null},showCancel:function(){this.cancleVisible=!0},contentItemStyle:function(t){return{marginLeft:15*t.level+"px"}},doSearch:function(t){var e=this;return Promise.all(this.currentBook.spine.spineItems.map((function(s){return s.load(e.currentBook.load.bind(e.currentBook)).then(s.find.bind(s,t)).finally(s.unload.bind(s))}))).then((function(t){return Promise.resolve([].concat.apply([],t))}))},search:function(){var t=this;this.searchText&&this.searchText.length>0&&this.doSearch(this.searchText).then((function(e){t.searchList=e,t.searchList.map((function(e){return e.excerpt=e.excerpt.replace(t.searchText,'<span class="content-search-text">'.concat(t.searchText,"</span>")),e}))}))},displaySearchItem:function(t){var e=this;this.display(t,(function(){e.hideTitleAndMenu(),e.currentBook.rendition.annotations.highlight(t)}))}},components:{Scroll:U["a"]}},G=Y,J=(s("f5fd"),Object(f["a"])(G,H,z,!1,null,"030b7c08",null)),q=J.exports,K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ebook-slide-bookmark"},[s("div",{staticClass:"slide-bookmark-title"},[t._v("书签 · "+t._s(t.bookmarkText?t.bookmarkText.length:0))]),s("scroll",{staticClass:"slide-bookmark-list",attrs:{top:48,bottom:48}},t._l(t.bookmarkText,(function(e,i){return s("div",{key:i,staticClass:"slide-bookmark-item",on:{click:function(s){return t.displaybookmark(e.cfi)}}},[s("div",{staticClass:"slide-bookmark-item-icon"},[s("div",{staticClass:"icon-bookmark"})]),s("div",{staticClass:"slide-bookmark-item-text"},[t._v(t._s(e.text))])])})),0)],1)},X=[],Q={mixins:[o["a"]],components:{Scroll:U["a"]},data:function(){return{}},methods:{displaybookmark:function(t){var e=this;this.display(t,(function(){e.hideTitleAndMenu()}))}},mounted:function(){}},Z=Q,tt=(s("4a16"),Object(f["a"])(Z,K,X,!1,null,"6cd46416",null)),et=tt.exports,st=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ebook-loading"},[s("div",{staticClass:"ebook-loading-wrapper"},[t._l(t.data,(function(e,i){return s("div",{key:i,staticClass:"ebook-loading-item"},t._l(e,(function(t,e){return s("div",{key:e,staticClass:"ebook-loading-line-wrapper"},[s("div",{ref:"line",refInFor:!0,staticClass:"ebook-loading-line"}),s("div",{ref:"mask",refInFor:!0,staticClass:"ebook-loading-mask"})])})),0)})),s("div",{staticClass:"ebook-loading-center"})],2)])},it=[],nt=(s("4160"),s("159b"),s("fa7d")),at={data:function(){return{data:[[{},{},{}],[{},{},{}]],maskWidth:[{value:0},{value:0},{value:0},{value:0},{value:0},{value:0}],lineWidth:[{value:16},{value:16},{value:16},{value:16},{value:16},{value:16}],add:!0,end:!1}},methods:{},mounted:function(){var t=this;this.task=setInterval((function(){t.$refs.mask.forEach((function(e,s){var i=t.$refs.mask[s],n=t.$refs.line[s],a=t.maskWidth[s],o=t.lineWidth[s];if(0===s)t.add&&a.value<16?(a.value++,o.value--):!t.add&&o.value<16&&(a.value--,o.value++);else if(t.add&&a.value<16){var r=t.maskWidth[s-1];r.value>=8&&(a.value++,o.value--)}else if(!t.add&&o.value<16){var c=t.lineWidth[s-1];c.value>=8&&(a.value--,o.value++)}i.style.width="".concat(Object(nt["a"])(a.value),"rem"),i.style.flex="0 0 ".concat(Object(nt["a"])(a.value),"rem"),n.style.width="".concat(Object(nt["a"])(o.value),"rem"),n.style.flex="0 0 ".concat(Object(nt["a"])(o.value),"rem"),s===t.maskWidth.length-1&&(t.add?16===a.value&&(t.end=!0):0===a.value&&(t.end=!0)),t.end&&(t.add=!t.add,t.end=!1)}))}),20)},beforeDestroy:function(){this.task&&clearInterval(this.task)}},ot=at,rt=(s("8031"),Object(f["a"])(ot,st,it,!1,null,"cd303296",null)),ct=rt.exports,lt={mixins:[o["a"]],data:function(){return{currentTab:1,content:q,ebookSlideBookmark:et}},methods:{selectTab:function(t){this.currentTab=t}},components:{ebookLoading:ct}},ut=lt,dt=(s("a2ad"),Object(f["a"])(ut,R,M,!1,null,"a0c08184",null)),ft=dt.exports,ht={mixins:[o["a"]],components:{settingFont:w,settingFontFamilyOption:O,settingTheme:B,settingProgress:W,catalogSlide:ft},methods:{showSettings:function(t){this.setFontFamilyVisible(!1),this.setSettingVisible(t)}}},vt=ht,pt=(s("1ef5"),Object(f["a"])(vt,p,m,!1,null,"912d4782",null)),mt=pt.exports,bt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"bookmark",staticClass:"ebook-bookmark"},[s("div",{staticClass:"ebook-bookmark-text-wrapper"},[s("div",{staticClass:"ebook-bookmark-down-wrapper"},[s("span",{ref:"iconDown",staticClass:"icon-down"})]),s("div",{staticClass:"ebook-bookmark-text"},[t._v(t._s(t.text))])]),s("div",{staticClass:"ebook-bookmark-icon-wrapper",style:t.isFixed?t.fixedStyle:{}},[s("bookmark-icon",{attrs:{color:t.color,width:"15",height:"35"}})],1)])},kt=[],gt=(s("4de4"),s("25f0"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"bookmarkIcon",staticClass:"bookmark-icon",style:t.style})}),Ct=[],xt={props:{width:String,height:String,color:String},computed:{style:function(){return this.color?{borderColor:"".concat(this.color," ").concat(this.color," transparent ").concat(this.color)}:{}}},methods:{refresh:function(){this.width&&this.height&&(this.$refs.bookmarkIcon.style.borderWidth="".concat(Object(nt["a"])(this.height-5),"rem \n                    ").concat(Object(nt["a"])(this.width/2),"rem ").concat(Object(nt["a"])(5),"rem ").concat(Object(nt["a"])(this.width/2),"rem"))}},mounted:function(){this.refresh()}},wt=xt,yt=(s("d675"),Object(f["a"])(wt,gt,Ct,!1,null,"6b329730",null)),_t=yt.exports,St={mixins:[o["a"]],data:function(){return{text:"下拉添加书签",color:"#fff",isFixed:!1}},components:{bookmarkIcon:_t},computed:{height:function(){return Object(nt["b"])(35)},threshold:function(){return Object(nt["b"])(55)},fixedStyle:function(){return{position:"fixed",top:0,right:window.innerWidth-this.$refs.bookmark.clientWidth+"px"}}},watch:{offsetY:function(t){!this.bookAvailable||this.menuVisible||this.settingVisible>=0||(t>this.height&&t<this.threshold?this.beforeThreshold(t):t>=this.threshold?this.afterThreshold(t):t>0&&t<this.height?this.beforeHeight():0===t&&this.restore())},isBookmark:function(t){this.isFixed=t,this.color=t?"blue":"#fff"}},methods:{addBookmark:function(){var t=this;this.bookmark=Object(a["c"])(this.fileName),this.bookmark||(this.bookmark=[]);var e=this.currentBook.rendition.currentLocation(),s=e.start.cfi.replace(/!.*/,""),i=e.start.cfi.replace(/.*!/,"").replace(/\)$/,""),n=e.end.cfi.replace(/.*!/,"").replace(/\)$/,""),o="".concat(s,"!,").concat(i,",").concat(n,")");this.currentBook.getRange(o).then((function(s){var i=s.toString().replace("/ss/g","");t.bookmark.push({cfi:e.start.cfi,text:i}),Object(a["m"])(t.fileName,t.bookmark),t.setBookmarkText(t.bookmark)}))},removeBookmark:function(){var t=this.currentBook.rendition.currentLocation(),e=t.start.cfi;if(this.bookmark=Object(a["c"])(this.fileName),this.bookmark){var s=this.bookmark.filter((function(t){return t.cfi!==e}));Object(a["m"])(this.fileName,s),this.setBookmarkText(s),this.setIsBookmark(!1)}},restore:function(){var t=this;setTimeout((function(){t.$refs.bookmark.style.top=-t.height+"px",t.$refs.iconDown.style.transform="rotate(0deg)"}),200),this.isFixed?(this.setIsBookmark(!0),this.addBookmark()):(this.setIsBookmark(!1),this.removeBookmark())},beforeHeight:function(){this.isBookmark?(this.text="松手删除书签",this.color="#00f",this.isFixed=!0):(this.text="下拉添加书签",this.color="#fff",this.isFixed=!1)},beforeThreshold:function(t){this.$refs.bookmark.style.top=-t+"px",this.beforeHeight(),"rotate(180deg)"===this.$refs.iconDown.style.transform&&(this.$refs.iconDown.style.transform="")},afterThreshold:function(t){this.$refs.bookmark.style.top=-t+"px",this.isBookmark?(this.text="松手删除书签",this.color="#fff",this.isFixed=!1):(this.text="松手添加书签",this.color="#00f",this.isFixed=!0),""===this.$refs.iconDown.style.transform&&(this.$refs.iconDown.style.transform="rotate(180deg)")}}},Tt=St,$t=(s("510c"),Object(f["a"])(Tt,bt,kt,!1,null,"7b3421e4",null)),Ot=$t.exports,Ft=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ebook-header"},[s("span",{staticClass:"ebook-header-text"},[t._v(t._s(t.getSectionName))])])},Vt=[],jt={mixins:[o["a"]]},Nt=jt,Et=(s("67d4"),Object(f["a"])(Nt,Ft,Vt,!1,null,"fb6e2cd8",null)),Bt=Et.exports,Pt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ebook-footer"},[s("span",{staticClass:"ebook-footer-text"},[t._v(t._s(this.progress+"%"))])])},At=[],It={mixins:[o["a"]]},Dt=It,Lt=(s("29f5"),Object(f["a"])(Dt,Pt,At,!1,null,"b76d6b7c",null)),Wt=Lt.exports,Rt={mixins:[o["a"]],components:{ebookReader:r["default"],ebookTitle:v,ebookMenu:mt,ebookBookmark:Ot,ebookHeader:Bt,ebookFooter:Wt},methods:{startLoopReadTime:function(){var t=this,e=Object(a["h"])(this.fileName);e||(e=0),this.task=setInterval((function(){e++,e%30===0&&Object(a["q"])(t.fileName,e)}),1e3)},move:function(t){this.$refs.ebook.style.top=t+"px"},restore:function(){var t=this;this.$refs.ebook.style.top=0,this.$refs.ebook.style.transition="all 0.2s linear",setTimeout((function(){t.$refs.ebook.style.transition=""}),200)}},watch:{offsetY:function(t){!this.menuVisible&&this.bookAvailable&&(t>0?this.move(t):0===t&&this.restore())}},mounted:function(){this.startLoopReadTime()},beforeDestroy:function(){this.task&&clearInterval(this.task)}},Mt=Rt,Ht=(s("b444"),Object(f["a"])(Mt,i,n,!1,null,"a5f06134",null));e["default"]=Ht.exports},"51f6":function(t,e,s){},5319:function(t,e,s){"use strict";var i=s("d784"),n=s("825a"),a=s("7b0b"),o=s("50c4"),r=s("a691"),c=s("1d80"),l=s("8aa5"),u=s("14c3"),d=Math.max,f=Math.min,h=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,p=/\$([$&'`]|\d\d?)/g,m=function(t){return void 0===t?t:String(t)};i("replace",2,(function(t,e,s,i){var b=i.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,k=i.REPLACE_KEEPS_$0,g=b?"$":"$0";return[function(s,i){var n=c(this),a=void 0==s?void 0:s[t];return void 0!==a?a.call(s,n,i):e.call(String(n),s,i)},function(t,i){if(!b&&k||"string"===typeof i&&-1===i.indexOf(g)){var a=s(e,t,this,i);if(a.done)return a.value}var c=n(t),h=String(this),v="function"===typeof i;v||(i=String(i));var p=c.global;if(p){var x=c.unicode;c.lastIndex=0}var w=[];while(1){var y=u(c,h);if(null===y)break;if(w.push(y),!p)break;var _=String(y[0]);""===_&&(c.lastIndex=l(h,o(c.lastIndex),x))}for(var S="",T=0,$=0;$<w.length;$++){y=w[$];for(var O=String(y[0]),F=d(f(r(y.index),h.length),0),V=[],j=1;j<y.length;j++)V.push(m(y[j]));var N=y.groups;if(v){var E=[O].concat(V,F,h);void 0!==N&&E.push(N);var B=String(i.apply(void 0,E))}else B=C(O,h,F,V,N,i);F>=T&&(S+=h.slice(T,F)+B,T=F+O.length)}return S+h.slice(T)}];function C(t,s,i,n,o,r){var c=i+t.length,l=n.length,u=p;return void 0!==o&&(o=a(o),u=v),e.call(r,u,(function(e,a){var r;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return s.slice(0,i);case"'":return s.slice(c);case"<":r=o[a.slice(1,-1)];break;default:var u=+a;if(0===u)return e;if(u>l){var d=h(u/10);return 0===d?e:d<=l?void 0===n[d-1]?a.charAt(1):n[d-1]+a.charAt(1):e}r=n[u-1]}return void 0===r?"":r}))}}))},"56db":function(t,e,s){"use strict";var i=s("f08d"),n=s.n(i);n.a},6701:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"scrollWrapper",staticClass:"scroll-wrapper",class:{"no-scroll":t.ifNoScroll},on:{"&scroll":function(e){return t.handleScroll(e)}}},[t._t("default")],2)},n=[],a=(s("a9e3"),s("fa7d")),o={props:{top:{type:Number,default:0},bottom:{type:Number,default:0},ifNoScroll:{type:Boolean,default:!1},initPosition:{type:Object,default:function(){return{x:0,y:0}}}},methods:{handleScroll:function(t){var e=t.target.scrollTop||window.pageYOffset||document.body.scrollTop;this.$emit("onScroll",e)},scrollTo:function(t,e){this.$refs.scrollWrapper.scrollTo(t,e)},refresh:function(){this.$refs.scrollWrapper&&(this.$refs.scrollWrapper.style.height=window.innerHeight-Object(a["b"])(this.top)-Object(a["b"])(this.bottom)+"px",this.$refs.scrollWrapper.addEventListener("scroll",this.handleScroll))}},mounted:function(){var t=this;this.refresh(),this.$nextTick((function(){setTimeout((function(){t.scrollTo(Object(a["b"])(t.initPosition.x),Object(a["b"])(t.initPosition.y))}),1)}))}},r=o,c=(s("6a16"),s("2877")),l=Object(c["a"])(r,i,n,!1,null,"7da502e9",null);e["a"]=l.exports},"67d4":function(t,e,s){"use strict";var i=s("0c27"),n=s.n(i);n.a},"6a16":function(t,e,s){"use strict";var i=s("8958"),n=s.n(i);n.a},"71a6":function(t,e,s){},"7db0":function(t,e,s){"use strict";var i=s("23e7"),n=s("b727").find,a=s("44d2"),o=s("ae40"),r="find",c=!0,l=o(r);r in[]&&Array(1)[r]((function(){c=!1})),i({target:"Array",proto:!0,forced:c||!l},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),a(r)},"7e86":function(t,e,s){},8031:function(t,e,s){"use strict";var i=s("4b6b"),n=s.n(i);n.a},8958:function(t,e,s){},"8b2c":function(t,e,s){},"92ec":function(t,e,s){},a2ad:function(t,e,s){"use strict";var i=s("8b2c"),n=s.n(i);n.a},a846:function(t,e,s){},ab56:function(t,e,s){"use strict";var i=s("029c"),n=s.n(i);n.a},b444:function(t,e,s){"use strict";var i=s("1b8f"),n=s.n(i);n.a},c217:function(t,e,s){},c66d:function(t,e,s){"use strict";var i=s("7e86"),n=s.n(i);n.a},d675:function(t,e,s){"use strict";var i=s("92ec"),n=s.n(i);n.a},f08d:function(t,e,s){},f2d8:function(t,e,s){},f5fd:function(t,e,s){"use strict";var i=s("51f6"),n=s.n(i);n.a},fa7d:function(t,e,s){"use strict";function i(t){var e=37.5;return t/e}function n(t){var e=window.innerWidth>500?500:window.innerWidth;return t/(e/375)}s.d(e,"a",(function(){return i})),s.d(e,"b",(function(){return n}))},fe28:function(t,e,s){"use strict";var i=s("71a6"),n=s.n(i);n.a}}]);
//# sourceMappingURL=chunk-2a9ae04e.c158a09b.js.map