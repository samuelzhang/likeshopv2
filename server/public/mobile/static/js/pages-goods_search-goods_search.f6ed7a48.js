(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods_search-goods_search"],{1088:function(t,e,o){"use strict";o.r(e);var s=o("c62a"),i=o.n(s);for(var a in s)"default"!==a&&function(t){o.d(e,t,(function(){return s[t]}))}(a);e["default"]=i.a},1439:function(t,e,o){"use strict";o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return a})),o.d(e,"a",(function(){return s}));var s={uSticky:o("432f").default,uSearch:o("2696").default,trigonometry:o("22c1").default,goodsList:o("95fe").default,loadingFooter:o("e2bb").default},i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"goods-search"},[o("v-uni-view",{staticClass:"header-wrap"},[o("u-sticky",{attrs:{"offset-top":"0","h5-nav-height":"0"}},[o("v-uni-view",{staticClass:"search"},[o("u-search",{attrs:{"bg-color":"#F4F4F4"},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t.showHistory=!0},search:function(e){arguments[0]=e=t.$handleEvent(e),t.onSearch.apply(void 0,arguments)}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1),o("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.showHistory,expression:"!showHistory"}],staticClass:"header row bg-white"},[o("v-uni-view",{class:"tag row-center "+(t.comprehensive?"primary":""),on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onNormal.apply(void 0,arguments)}}},[t._v("综合")]),o("v-uni-view",{staticClass:"tag row-center",attrs:{"data-type":"priceSort"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onPriceSort.apply(void 0,arguments)}}},[o("v-uni-text",{class:t.priceSort?"primary":""},[t._v("价格")]),o("v-uni-view",[o("trigonometry",{attrs:{direction:"up",size:"small",color:"desc"==t.priceSort?"#FF5058":"#333"}}),o("trigonometry",{attrs:{size:"small",color:"asc"==t.priceSort?"#FF5058":"#333"}})],1)],1),o("v-uni-view",{staticClass:"tag row-center",attrs:{"data-type":"saleSort"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onSaleSort.apply(void 0,arguments)}}},[o("v-uni-text",{class:t.saleSort?"primary":""},[t._v("销量")]),o("v-uni-view",[o("trigonometry",{attrs:{direction:"up",size:"small",color:"desc"==t.saleSort?"#FF5058":"#333"}}),o("trigonometry",{attrs:{size:"small",color:"asc"==t.saleSort?"#FF5058":"#333"}})],1)],1),o("v-uni-view",{staticClass:"tag row-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeType.apply(void 0,arguments)}}},[o("v-uni-image",{staticClass:"icon-sm",attrs:{src:"one"===t.goodsType?"/static/images/icon_double.png":"/static/images/icon_one.png"}})],1)],1)],1)],1),o("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.showHistory,expression:"showHistory"}],staticClass:"content bg-white"},[t.hotList.length?o("v-uni-view",{staticClass:"search-words"},[o("v-uni-view",{staticClass:"title"},[t._v("热门搜索")]),o("v-uni-view",{staticClass:"words row wrap"},t._l(t.hotList,(function(e,s){return o("v-uni-view",{key:s,staticClass:"item br60 bg-gray mr20 mb20 lighter sm line1",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.onChangeKeyword(e)}}},[t._v(t._s(e))])})),1)],1):t._e(),t.historyList.length?o("v-uni-view",{staticClass:"search-words"},[o("v-uni-view",{staticClass:"title row-between"},[o("v-uni-view",[t._v("历史搜索")]),o("v-uni-view",{staticClass:"xs muted mr20",staticStyle:{padding:"10rpx 20rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearSearchFun.apply(void 0,arguments)}}},[t._v("清空")])],1),o("v-uni-view",{staticClass:"words row wrap"},t._l(t.historyList,(function(e,s){return o("v-uni-view",{key:s,staticClass:"item br60 bg-gray mr20 mb20 lighter sm line1",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.onChangeKeyword(e)}}},[t._v(t._s(e))])})),1)],1):t._e()],1),o("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.showHistory,expression:"!showHistory"}],staticClass:"content"},[o("v-uni-view",{staticClass:"goods-list"},[o("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"double"==t.goodsType,expression:"goodsType == 'double'"}],staticClass:"double"},[o("goods-list",{attrs:{type:"double",list:t.goodsList}})],1),o("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"one"==t.goodsType,expression:"goodsType == 'one'"}],staticClass:"one"},[o("goods-list",{attrs:{list:t.goodsList,type:"one"}})],1)],1),o("loading-footer",{attrs:{status:t.status,"slot-empty":!0},on:{refresh:function(e){arguments[0]=e=t.$handleEvent(e),t.reload.apply(void 0,arguments)}}},[o("v-uni-view",{staticClass:"column-center",staticStyle:{"padding-top":"200rpx"},attrs:{slot:"empty"},slot:"empty"},[o("v-uni-image",{staticClass:"img-null",attrs:{src:"/static/images/goods_null.png"}}),o("v-uni-text",{staticClass:"lighter"},[t._v("暂无商品")])],1)],1)],1)],1)},a=[]},"22c1":function(t,e,o){"use strict";o.r(e);var s=o("87cc"),i=o("6621");for(var a in i)"default"!==a&&function(t){o.d(e,t,(function(){return i[t]}))}(a);o("d55a");var n,r=o("f0c5"),c=Object(r["a"])(i["default"],s["b"],s["c"],!1,null,"a2d90620",null,!1,s["a"],n);e["default"]=c.exports},"5dda":function(t,e,o){var s=o("866b");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var i=o("4f06").default;i("16f4c4da",s,!0,{sourceMap:!1,shadowMode:!1})},6621:function(t,e,o){"use strict";o.r(e);var s=o("78b2"),i=o.n(s);for(var a in s)"default"!==a&&function(t){o.d(e,t,(function(){return s[t]}))}(a);e["default"]=i.a},"707c":function(t,e,o){"use strict";var s=o("5dda"),i=o.n(s);i.a},"78b2":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{}},components:{},props:{color:{type:String,default:""},direction:{type:String},size:{type:String},opacity:{type:String,default:"0.8"}},methods:{}};e.default=s},"866b":function(t,e,o){var s=o("24fb");e=s(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */.goods-search .header-wrap .search[data-v-1e9ec600]{box-shadow:0 3px 6px rgba(0,0,0,.03);position:relative;z-index:1}.goods-search .header-wrap .header[data-v-1e9ec600]{height:%?80?%}.goods-search .header-wrap .header .tag[data-v-1e9ec600]{height:100%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.goods-search .content .search-words[data-v-1e9ec600]{padding-left:%?24?%;padding-bottom:%?20?%}.goods-search .content .search-words .title[data-v-1e9ec600]{padding:%?26?% 0}.goods-search .content .search-words .words .item[data-v-1e9ec600]{line-height:%?52?%;height:%?52?%;padding:0 %?24?%}.goods-search .content .goods-list[data-v-1e9ec600]{overflow:hidden}',""]),t.exports=e},"872d":function(t,e,o){var s=o("984a");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var i=o("4f06").default;i("00f43669",s,!0,{sourceMap:!1,shadowMode:!1})},"87cc":function(t,e,o){"use strict";var s;o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return a})),o.d(e,"a",(function(){return s}));var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{class:"trigonometry "+("up"===t.direction?"up":"")+" "+("small"===t.size?"small":""),style:"color:"+t.color+";opacity: "+t.opacity})},a=[]},"984a":function(t,e,o){var s=o("24fb");e=s(!1),e.push([t.i,".trigonometry[data-v-a2d90620]{border-color:transparent transparent currentcolor currentcolor;border-style:solid;border-width:%?6?%;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:.8;margin:%?-6?% %?10?% 0}.up[data-v-a2d90620]{margin-top:%?6?%;-webkit-transform:rotate(135deg);transform:rotate(135deg)}.small[data-v-a2d90620]{border-width:%?4?%;margin-top:%?-4?%}.small.up[data-v-a2d90620]{margin-top:%?4?%}",""]),t.exports=e},c62a:function(t,e,o){"use strict";var s=o("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,o("96cf");var i=s(o("1da1")),a=o("ca48"),n=o("f30f"),r=o("01eb"),c=(getApp(),{data:function(){return{headerH:0,keyword:"",status:r.loadingType.LOADING,page:1,goodsType:"double",goodsList:[],priceSort:"",saleSort:"",showHistory:!1,hotList:[],historyList:[]}},components:{},props:{},watch:{keyword:function(t,e){t||this.id||(this.showHistory=!0)},showHistory:function(t){t&&this.getSearchpageFun()}},computed:{comprehensive:function(){var t=this.priceSort,e=this.saleSort;return""==t&&""==e}},onLoad:function(t){this.onNormal=(0,n.trottle)(this.onNormal,500,this),this.onPriceSort=(0,n.trottle)(this.onPriceSort,500,this),this.onSaleSort=(0,n.trottle)(this.onSaleSort,500,this),this.onSearch=(0,n.trottle)(this.onSearch,500,this),this.init(t)},onReachBottom:function(){this.getGoodsSearchFun()},methods:{onChange:function(t){this.keyword=t.value},changeType:function(){this.goodsType="one"===this.goodsType?"double":"one"},clearSearchFun:function(){var t=this;(0,a.clearSearch)().then((function(e){1==e.code&&t.getSearchpageFun()}))},onNormal:function(){this.priceSort="",this.saleSort="",this.onRefresh()},onPriceSort:function(){var t=this.priceSort;this.saleSort="",this.priceSort="asc"==t?"desc":"asc",this.onRefresh()},onSaleSort:function(){var t=this.saleSort;this.priceSort="",this.saleSort="desc"==t?"asc":"desc",this.onSearch()},init:function(t){var e=this,o=t.id,s=t.name,i=t.type;this.type=i,(0,n.getRect)(".header-wrap").then((function(t){e.headerH=t.height})),o?(uni.setNavigationBarTitle({title:s}),this.id=o,this.getGoodsSearchFun()):(uni.setNavigationBarTitle({title:"搜索"}),this.showHistory=!0)},getSearchpageFun:function(){var t=this;(0,a.getSearchpage)().then((function(e){if(1==e.code){var o=e.data,s=o.history_lists,i=o.hot_lists;t.hotList=i,t.historyList=s}}))},onClear:function(){this.id&&this.onSearch()},onSearch:function(){this.onRefresh()},onRefresh:function(){var t=this;this.showHistory=!1,this.page=1,this.goodsList=[],this.status=r.loadingType.LOADING,this.$nextTick((function(){t.getGoodsSearchFun()}))},onChangeKeyword:function(t){this.keyword=t,this.showHistory=!1,this.onRefresh()},getGoodsSearchFun:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var o,s,i,c,d,u,l,h;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(o=t.page,s=t.goodsList,i=t.keyword,c=t.priceSort,d=t.saleSort,u=t.status,u!=r.loadingType.FINISHED){e.next=3;break}return e.abrupt("return");case 3:return l={category_id:1==t.type?t.id:"",brand_id:0==t.type?t.id:"",page_no:o,keyword:i,price:c,sales_sum:d},e.next=6,(0,n.loadingFun)(a.getGoodsSearch,o,s,u,l);case 6:if(h=e.sent,h){e.next=9;break}return e.abrupt("return");case 9:console.log(h),t.page=h.page,t.goodsList=h.dataList,t.status=h.status,console.log(t);case 14:case"end":return e.stop()}}),e)})))()}}});e.default=c},d55a:function(t,e,o){"use strict";var s=o("872d"),i=o.n(s);i.a},df84:function(t,e,o){"use strict";o.r(e);var s=o("1439"),i=o("1088");for(var a in i)"default"!==a&&function(t){o.d(e,t,(function(){return i[t]}))}(a);o("707c");var n,r=o("f0c5"),c=Object(r["a"])(i["default"],s["b"],s["c"],!1,null,"1e9ec600",null,!1,s["a"],n);e["default"]=c.exports}}]);