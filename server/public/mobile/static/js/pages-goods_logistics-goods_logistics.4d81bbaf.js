(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods_logistics-goods_logistics"],{"0301":function(t,e,i){"use strict";i("a630"),i("a9e3"),i("3ca3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={props:{color:String,vertical:Boolean,type:{type:String,default:"spinner"},size:{type:Number,default:40},textSize:String},data:function(){return{array12:Array.from({length:12})}}};e.default=s},"04e9":function(t,e,i){"use strict";i.r(e);var s=i("f058"),a=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);e["default"]=a.a},"0bf1":function(t,e,i){"use strict";i.r(e);var s=i("15ae"),a=i("3100");for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("1e40");var r,o=i("f0c5"),d=Object(o["a"])(a["default"],s["b"],s["c"],!1,null,"c27139f0",null,!1,s["a"],r);e["default"]=d.exports},"0e44":function(t,e,i){"use strict";i.r(e);var s=i("7e17"),a=i("04e9");for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("dc76");var r,o=i("f0c5"),d=Object(o["a"])(a["default"],s["b"],s["c"],!1,null,"33e68b36",null,!1,s["a"],r);e["default"]=d.exports},1239:function(t,e,i){"use strict";i.r(e);var s=i("980a"),a=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);e["default"]=a.a},"15ae":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return s}));var s={goodsList:i("95fe").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.goodsList.length?i("v-uni-view",{staticClass:"recommend"},[i("v-uni-view",{staticClass:"goods-title row-center"},[i("v-uni-text",{staticClass:"line"}),i("v-uni-view",{staticClass:"row"},[i("v-uni-image",{staticClass:"mr10",attrs:{src:"/static/images/icon_like.png"}}),i("v-uni-text",{staticClass:"bold xxl"},[t._v("好物优选")])],1),i("v-uni-text",{staticClass:"line"})],1),i("goods-list",{attrs:{list:t.goodsList}})],1):t._e()},n=[]},"1e40":function(t,e,i){"use strict";var s=i("d517"),a=i.n(s);a.a},"26d9":function(t,e,i){"use strict";var s=i("511c"),a=i.n(s);a.a},3100:function(t,e,i){"use strict";i.r(e);var s=i("cf3c"),a=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);e["default"]=a.a},"37af":function(t,e,i){"use strict";i.r(e);var s=i("6166"),a=i("7296");for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("fa3f");var r,o=i("f0c5"),d=Object(o["a"])(a["default"],s["b"],s["c"],!1,null,"49a28488",null,!1,s["a"],r);e["default"]=d.exports},"511c":function(t,e,i){var s=i("b57a");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=i("4f06").default;a("5495e364",s,!0,{sourceMap:!1,shadowMode:!1})},6166:function(t,e,i){"use strict";var s;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return s}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{class:"loading "+(t.vertical?"loading--vertical":"")},[i("v-uni-view",{class:"loading__spinner loading__spinner--"+t.type,style:{color:t.color,width:t.size+"rpx",height:t.size+"rpx"}},t._l(t.array12,(function(e,s){return"spinner"===t.type?i("v-uni-view",{key:s,staticClass:"loading__dot"}):t._e()})),1),i("v-uni-view",{staticClass:"loading__text",style:{"font-size":t.textSize+"rpx",color:t.color}},[t._t("default")],2)],1)},n=[]},7296:function(t,e,i){"use strict";i.r(e);var s=i("0301"),a=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);e["default"]=a.a},"7e17":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return s}));var s={recommend:i("0bf1").default,loadingView:i("d09b").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"goods-logistics mb20"},[i("v-uni-view",{staticClass:"header row bg-white"},[i("v-uni-view",{staticClass:"goods  mr20"},[i("v-uni-image",{staticClass:"goods-img",attrs:{src:t.order.image}}),i("v-uni-view",{staticClass:"count xs white br60"},[t._v("共"+t._s(t.order.count)+"件商品")])],1),i("v-uni-view",{staticClass:"info sm"},[i("v-uni-view",{staticClass:"bold lg"},[t._v(t._s(t.order.tips))]),i("v-uni-view",{staticClass:"black mt10 mb10"},[t._v("物流公司："+t._s(t.order.shipping_name))]),i("v-uni-view",{staticClass:"row"},[i("v-uni-text",{staticClass:"black"},[t._v("快递单号："+t._s(t.order.invoice_no))]),i("v-uni-text",{staticClass:"primary ml20",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onCopy.apply(void 0,arguments)}}},[t._v("复制")])],1)],1)],1),i("v-uni-view",{staticClass:"main mt20 bg-white column"},[i("v-uni-view",{staticClass:"express"},[t.take.contacts?i("v-uni-view",{staticClass:"express-address row"},[i("v-uni-view",{staticClass:"express-left column-center"},[i("v-uni-image",{staticClass:"express-icon",attrs:{src:t.finish.tips?"/static/images/logistics_address.png":"/static/images/logistics_address_gray.png"}}),i("v-uni-view",{staticClass:"express-line"})],1),i("v-uni-view",{staticClass:"express-right"},[i("v-uni-view",{staticClass:"name bold mb10 sm"},[t._v(t._s(t.take.contacts)+" "+t._s(t.take.mobile))]),i("v-uni-view",{staticClass:"address sm lighter line2"},[t._v(t._s(t.take.address))])],1)],1):t._e(),t.finish.tips?i("v-uni-view",{staticClass:"express-item row"},[i("v-uni-view",{staticClass:"express-left column-center"},[i("v-uni-image",{staticClass:"express-icon",attrs:{src:"/static/images/logistics_success.png"}}),i("v-uni-view",{staticClass:"express-line"})],1),i("v-uni-view",{staticClass:"express-right"},[i("v-uni-view",{staticClass:"title bold sm"},[t._v(t._s(t.finish.title))]),i("v-uni-view",{staticClass:"dec sm"},[t._v(t._s(t.finish.tips))]),i("v-uni-view",{staticClass:"time xs muted"},[t._v(t._s(t.finish.time))])],1)],1):t._e(),t.delivery.traces.length?i("v-uni-view",{staticClass:"express-item row"},[i("v-uni-view",{staticClass:"express-left column-center"},[i("v-uni-image",{staticClass:"express-icon",attrs:{src:"/static/images/logistics_transit.png"}}),i("v-uni-view",{staticClass:"express-line"})],1),i("v-uni-view",{staticClass:"express-right muted"},[i("v-uni-view",{staticClass:"title bold sm "},[t._v(t._s(t.delivery.title))]),t.delivery.traces[0][0]?i("v-uni-view",{staticClass:"xs"},[t._v(t._s(t.delivery.traces[0][0]))]):t._e(),t.delivery.traces[0][1]?i("v-uni-view",{staticClass:"xs"},[t._v(t._s(t.delivery.traces[0][1]))]):t._e(),t.delivery.traces[0][2]?i("v-uni-view",{staticClass:"xs"},[t._v(t._s(t.delivery.traces[0][2]))]):t._e()],1)],1):t._e(),t._l(t.delivery.traces,(function(e,s){return[s>=1?i("v-uni-view",{key:s+"_0",staticClass:"express-item row"},[i("v-uni-view",{staticClass:"express-left column-center"},[i("v-uni-view",{staticClass:"express-doted"}),i("v-uni-view",{staticClass:"express-line"})],1),i("v-uni-view",{staticClass:"express-right muted"},[e[0]?i("v-uni-view",{staticClass:"sm"},[t._v(t._s(e[0]))]):t._e(),e[1]?i("v-uni-view",{staticClass:"sm"},[t._v(t._s(e[1]))]):t._e(),e[2]?i("v-uni-view",{staticClass:"sm"},[t._v(t._s(e[2]))]):t._e()],1)],1):t._e()]})),t.shipment.tips?i("v-uni-view",{staticClass:"express-item row"},[i("v-uni-view",{staticClass:"express-left column-center"},[i("v-uni-image",{staticClass:"express-icon",attrs:{src:"/static/images/logistics_delivered.png"}}),i("v-uni-view",{staticClass:"express-line"})],1),i("v-uni-view",{staticClass:"express-right muted"},[i("v-uni-view",{staticClass:"title bold sm"},[t._v(t._s(t.shipment.title))]),i("v-uni-view",{staticClass:"dec xs"},[t._v(t._s(t.shipment.tips))]),i("v-uni-view",{staticClass:"time xs muted"},[t._v(t._s(t.shipment.time))])],1)],1):t._e(),t.buy.tips?i("v-uni-view",{staticClass:"express-item row"},[i("v-uni-view",{staticClass:"express-left column-center"},[i("v-uni-image",{staticClass:"express-icon",attrs:{src:"/static/images/logistics_pay.png"}}),i("v-uni-view",{staticClass:"express-line"})],1),i("v-uni-view",{staticClass:"express-right muted"},[i("v-uni-view",{staticClass:"title bold sm"},[t._v(t._s(t.buy.title))]),i("v-uni-view",{staticClass:"dec xs"},[t._v(t._s(t.buy.tips))]),i("v-uni-view",{staticClass:"time xs muted"},[t._v(t._s(t.buy.time))])],1)],1):t._e()],2)],1)],1),i("recommend"),t.isFirstLoading?i("loading-view"):t._e()],1)},n=[]},8186:function(t,e,i){var s=i("24fb");e=s(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* components/recommend/recommend.wxss */.recommend[data-v-c27139f0]{padding-bottom:%?50?%}.recommend .header .title[data-v-c27139f0]{width:%?468?%;height:%?45?%;margin:%?10?% 0}.recommend .goods-title[data-v-c27139f0]{height:%?100?%}.recommend .goods-title .line[data-v-c27139f0]{width:%?58?%;height:1px;background-color:#ccc;margin:0 %?22?%}.recommend .goods-title uni-image[data-v-c27139f0]{width:%?38?%;height:%?38?%}",""]),t.exports=e},"980a":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{}},props:{type:{type:String,default:"fixed"},backgroundColor:{type:String},color:{type:String},size:{type:Number,default:40}},methods:{}};e.default=s},b57a:function(t,e,i){var s=i("24fb");e=s(!1),e.push([t.i,".loading[data-v-5027cfe8]{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:9999;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff}.loading.flex[data-v-5027cfe8]{position:static;-webkit-box-flex:1;-webkit-flex:1;flex:1;width:100%}",""]),t.exports=e},b88c:function(t,e,i){var s=i("24fb");e=s(!1),e.push([t.i,'[data-v-49a28488]:host{font-size:0;line-height:1}.loading[data-v-49a28488]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#c8c9cc}.loading__spinner[data-v-49a28488]{position:relative;box-sizing:border-box;width:%?45?%;max-width:100%;max-height:100%;height:%?45?%;-webkit-animation:rotate-data-v-49a28488 .8s linear infinite;animation:rotate-data-v-49a28488 .8s linear infinite}.loading__spinner--spinner[data-v-49a28488]{-webkit-animation-timing-function:steps(12);animation-timing-function:steps(12)}.loading__spinner--circular[data-v-49a28488]{border:%?2?% solid transparent;border-top-color:initial;border-radius:100%}.loading__text[data-v-49a28488]{margin-left:%?16?%;color:#969799;font-size:%?28?%;line-height:%?40?%}.loading__text[data-v-49a28488]:empty{display:none}.loading--vertical[data-v-49a28488]{-webkit-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.loading--vertical .loading__text[data-v-49a28488]{margin:%?16?% 0 0}.loading__dot[data-v-49a28488]{position:absolute;top:0;left:0;width:100%;height:100%}.loading__dot[data-v-49a28488]:before{display:block;width:%?4?%;height:25%;margin:0 auto;background-color:currentColor;border-radius:40%;content:" "}.loading__dot[data-v-49a28488]:first-of-type{-webkit-transform:rotate(30deg);transform:rotate(30deg);opacity:1}.loading__dot[data-v-49a28488]:nth-of-type(2){-webkit-transform:rotate(60deg);transform:rotate(60deg);opacity:.9375}.loading__dot[data-v-49a28488]:nth-of-type(3){-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:.875}.loading__dot[data-v-49a28488]:nth-of-type(4){-webkit-transform:rotate(120deg);transform:rotate(120deg);opacity:.8125}.loading__dot[data-v-49a28488]:nth-of-type(5){-webkit-transform:rotate(150deg);transform:rotate(150deg);opacity:.75}.loading__dot[data-v-49a28488]:nth-of-type(6){-webkit-transform:rotate(180deg);transform:rotate(180deg);opacity:.6875}.loading__dot[data-v-49a28488]:nth-of-type(7){-webkit-transform:rotate(210deg);transform:rotate(210deg);opacity:.625}.loading__dot[data-v-49a28488]:nth-of-type(8){-webkit-transform:rotate(240deg);transform:rotate(240deg);opacity:.5625}.loading__dot[data-v-49a28488]:nth-of-type(9){-webkit-transform:rotate(270deg);transform:rotate(270deg);opacity:.5}.loading__dot[data-v-49a28488]:nth-of-type(10){-webkit-transform:rotate(300deg);transform:rotate(300deg);opacity:.4375}.loading__dot[data-v-49a28488]:nth-of-type(11){-webkit-transform:rotate(330deg);transform:rotate(330deg);opacity:.375}.loading__dot[data-v-49a28488]:nth-of-type(12){-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:.3125}@-webkit-keyframes rotate-data-v-49a28488{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-data-v-49a28488{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),t.exports=e},ba73:function(t,e,i){var s=i("b88c");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=i("4f06").default;a("b7570d24",s,!0,{sourceMap:!1,shadowMode:!1})},cf3c:function(t,e,i){"use strict";var s=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("ca48"),n=s(i("95fe")),r={data:function(){return{goodsList:[]}},components:{goodsList:n.default},props:{},beforeMount:function(){this.getBestListFun()},destroyed:function(){},methods:{getBestListFun:function(){var t=this;(0,a.getBestList)({page_no:1,page_size:6}).then((function(e){1==e.code&&(t.goodsList=e.data.list)}))}}};e.default=r},d09b:function(t,e,i){"use strict";i.r(e);var s=i("fad6"),a=i("1239");for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("26d9");var r,o=i("f0c5"),d=Object(o["a"])(a["default"],s["b"],s["c"],!1,null,"5027cfe8",null,!1,s["a"],r);e["default"]=d.exports},d517:function(t,e,i){var s=i("8186");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=i("4f06").default;a("487b7eb5",s,!0,{sourceMap:!1,shadowMode:!1})},d903:function(t,e,i){var s=i("e9ca");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=i("4f06").default;a("053a6dac",s,!0,{sourceMap:!1,shadowMode:!1})},dc76:function(t,e,i){"use strict";var s=i("d903"),a=i.n(s);a.a},e9ca:function(t,e,i){var s=i("24fb");e=s(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */.goods-logistics[data-v-33e68b36]{padding-top:%?20?%}.goods-logistics .header[data-v-33e68b36]{padding:%?20?%}.goods-logistics .header .goods-img[data-v-33e68b36]{width:%?160?%;height:%?160?%;-webkit-box-flex:0;-webkit-flex:none;flex:none;border-radius:%?10?%}.goods-logistics .goods[data-v-33e68b36]{position:relative}.goods-logistics .goods .count[data-v-33e68b36]{position:absolute;bottom:0;width:100%;text-align:center;background-color:rgba(0,0,0,.6);padding:%?4?% 0}.goods-logistics .express[data-v-33e68b36]{width:%?700?%;padding-top:%?30?%;padding-bottom:%?100?%;margin:0 auto;border-radius:%?10?%}.goods-logistics .express-address[data-v-33e68b36],\n.goods-logistics .express-item[data-v-33e68b36]{-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;position:relative;padding:%?20?% 0}.goods-logistics .express-left[data-v-33e68b36]{margin-top:%?10?%;margin-right:%?24?%;height:100%;position:absolute;width:%?40?%;-webkit-box-flex:0;-webkit-flex:none;flex:none}.goods-logistics .express-left .express-icon[data-v-33e68b36]{width:%?40?%;height:%?40?%}.goods-logistics .express-left .express-line[data-v-33e68b36]{-webkit-box-flex:1;-webkit-flex:1;flex:1;border-left:1px dotted #e5e5e5}.goods-logistics .express-left .express-doted[data-v-33e68b36]{width:%?16?%;height:%?16?%;border-radius:50%;background-color:#e5e5e5}.goods-logistics .express-right[data-v-33e68b36]{padding-left:%?60?%}.goods-logistics .express-right .title[data-v-33e68b36],\n.goods-logistics .express-right .dec[data-v-33e68b36]{margin-bottom:%?5?%}.goods-logistics .express-item:last-of-type .express-left .express-line[data-v-33e68b36]{border:none}',""]),t.exports=e},f058:function(t,e,i){"use strict";var s=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var a=s(i("1da1")),n=i("fd39"),r=i("f30f"),o={data:function(){return{shipment:{},buy:{},delivery:{},finish:{},order:{},take:{},isFirstLoading:!0}},components:{},props:{},onLoad:function(t){this.id=t.id,this.orderTracesFun()},methods:{orderTracesFun:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var i,s,a,r,o,d,c,l,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,n.orderTraces)(t.id);case 2:i=e.sent,s=i.code,a=i.data,r=a.shipment,o=a.buy,d=a.delivery,c=a.finish,l=a.order,u=a.take,1==s?(t.shipment=r,t.buy=o,t.delivery=d,t.finish=c,t.order=l,t.take=u,t.isFirstLoading=!1):setTimeout((function(){return uni.navigateBack()}),1e3);case 12:case"end":return e.stop()}}),e)})))()},onCopy:function(){(0,r.copy)(this.order.invoice_no)}}};e.default=o},fa3f:function(t,e,i){"use strict";var s=i("ba73"),a=i.n(s);a.a},fad6:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return s}));var s={loading:i("37af").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{class:"loading "+("flex"==t.type?"flex":""),style:{backgroundColor:t.backgroundColor}},[i("loading",{attrs:{color:t.color,size:t.size}})],1)},n=[]},fd39:function(t,e,i){"use strict";var s=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.orderBuy=r,e.delOrder=o,e.getOrderList=d,e.getOrderDetail=c,e.cancelOrder=l,e.orderTraces=u,e.confirmOrder=f,e.getOrderCoupon=v;var a=s(i("5530")),n=s(i("c05a"));function r(t,e){var i="order/buy";return n.default.post(i,(0,a.default)((0,a.default)({},t),{},{order_source:1}))}function o(t){return n.default.post("order/del",{id:t})}function d(t){return n.default.get("order/lists",{params:t})}function c(t){return n.default.get("order/detail",{params:{id:t}})}function l(t){return n.default.post("order/cancel",{id:t})}function u(t){return n.default.get("order/orderTraces",{params:{id:t}})}function f(t){return n.default.post("order/confirm",{id:t})}function v(t){return n.default.post("coupon/orderCoupon",t)}}}]);