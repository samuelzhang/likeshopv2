(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ec7edb4"],{2909:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var s=a("6b75");function i(e){if(Array.isArray(e))return Object(s["a"])(e)}a("a4d3"),a("e01a"),a("d28b"),a("a630"),a("d3b7"),a("3ca3"),a("ddb0");function r(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}var n=a("06c5");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e){return i(e)||r(e)||Object(n["a"])(e)||o()}},"399b":function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"d",(function(){return i})),a.d(t,"a",(function(){return r})),a.d(t,"e",(function(){return n})),a.d(t,"b",(function(){return o}));var s={ALL:"all",PAY:"pay",DELIVERY:"delivery",FINISH:"finish",CLOSE:"close"},i={wechat:1},r={NORMAL:"normal",HANDLING:"apply",FINISH:"finish"},n={ONLY_REFUND:0,REFUNDS:1},o={REGISTER:"ZCYZ",FINDPWD:"ZHMM",LOGIN:"YZMDL",CHANGE_MOBILE:"BGSJHM"}},5878:function(e,t,a){},b903:function(e,t,a){"use strict";a("5878")},d5b1:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAABd1BMVEUAAAAAAAAAAABVVVVmZmZtbW1gYGBxcXFdXV1qampiYmJ2dnZtbW1mZmZgYGBwcHBpaWljY2NxcXFmZmZtbW1oaGhvb29qampmZmZsbGxtbW1ra2twcHBubm5ra2tvb29wcHBubm5tbW1wcHBtbW1wcHBvb29tbW1vb29ubm5ycnJsbGxxcXFwcHBubm5wcHBxcXFwcHBxcXFubm5ubm5vb29wcHBvb29vb29wcHBvb29vb29vb29vb29ubm5wcHBvb29vb29vb29ubm5vb29wcHBvb29ubm5wcHBwcHBvb29vb29vb29vb29wcHBubm5wcHBvb29vb29vb29wcHBvb29ubm5vb29vb29wcHBwcHBvb29vb29wcHBwcHBwcHBvb29vb29wcHBwcHBvb29wcHBvb29wcHBvb29vb29wcHBwcHBvb29wcHBvb29wcHBwcHBwcHBvb29vb29wcHBvb29wcHBwcHBvb29wcHBwcHBvb29wcHBhabGmAAAAfHRSTlMAAQIDBQcICQsMDQ0ODxAQERISFBUWFxgZGhwfIiUmJyksLzAxMjU2Nzo6Oz1AQUJGaW94eXp7gYOEhYeIiouLjI6RlpqbnJ2doKGjpqqtsLC3vb/AwcPDxcbJy8zP0tTV19nb3N3f4uPo6evs8vPz9Pb3+Pj6+vv8/P3+O+IQPgAAAZNJREFUWMPt2MdSAkEUheFBBZVRVEAUFVTMOeeIohINmDCLOWdhYObhhem2XLm7R4uqPg/w161vMXQhSWJiYmI5uLI2Vz6m3Lx9czkEKcsbWmYLhYijE9n0x7SZPt2q6Xvx0qete2kW95rI2+2HLP0+RW5icMe5yQy9Se0JN5mjN+k4wpk0nONM6uI4k05h8qvJ23gxzOR5AmByxk0myU0M3cc4k8YrnInrL0zGcCZPI0CTYSPM5HW0iN7kmrUfASb1FyrMpOcUZ+LJdZNBI8zk1kNv0vLA2gPk5cqgwn4te8nL6ym9rAZk4nJpkH1J1IMakEYqQl22rfGbI07icomf3azuV1Pf7E9yDfLyqgLWSMM0lDBKIx2uQmnEHDANR85oyEu8vEt9s9Wn/xWgJUN26nKE3xyivln28fKOXWj8aGyhNBIBK0ojQH2z+Vtjk/pmyyJKwxJOgjQKZvm3LlpB/Uhy3+vlz+Vy8pddF/vtXrHRP0cd2Se6EqW/WZLy+mPa3TyinHmiO/uaTJKYmJjYf+wLmpv4t3Rddy0AAAAASUVORK5CYII="},e4bb:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"apply-after-sales"},[a("div",{staticClass:"goods-info row bg-white mt10"},[a("div",{staticClass:"goods-img"},[a("van-image",{attrs:{width:"100%",height:"100%","lazy-load":"",radius:"3px",src:e.goods.image}})],1),a("div",{staticClass:"goods-desc"},[a("div",{staticClass:"nr"},[e._v(e._s(e.goods.goods_name))]),a("div",{staticClass:"muted xs mt5"},[e._v(e._s(e.goods.spec_value))])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.hiddenOpt,expression:"!hiddenOpt"}],staticClass:"opt-box mt10"},[a("div",{staticClass:"opt-item row-between border-line",on:{click:e.onlyRefund}},[e._m(0),a("img",{staticClass:"arrow",attrs:{src:"/images/arrow_right.png"}})]),a("div",{staticClass:"opt-item row-between",on:{click:e.allRefunds}},[e._m(1),a("img",{staticClass:"arrow",attrs:{src:"/images/arrow_right.png"}})])]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.hiddenOpt,expression:"hiddenOpt"}],staticClass:"after-sales-form-container bg-white mt10"},[a("div",{staticClass:"after-sales-item row-between"},[a("div",{staticClass:"nr"},[e._v("数量")]),a("div",{staticClass:"mr10 nr"},[e._v(e._s(e.goods.goods_num))])]),a("div",{staticClass:"after-sales-item row-between"},[a("div",{staticClass:"nr"},[e._v("退款金额")]),a("div",{staticClass:"mr10"},[a("price-slice",{attrs:{showSubscript:!0,subScriptClass:"nr",color:e.primaryColor,price:e.goods.goods_price,firstClass:"nr",secondClass:"sm"}})],1)]),a("div",{staticClass:"after-sales-item row-between",on:{click:function(t){e.showPopup=!0}}},[a("div",{staticClass:"nr"},[e._v("退款原因")]),a("div",{staticClass:"mr10 nr row"},[a("div",{staticClass:"mr5",class:{muted:-1==e.reasonIndex}},[e._v(e._s(-1==e.reasonIndex?"请选择":e.reason[e.reasonIndex]))]),e._m(2)])]),a("div",{staticClass:"after-sales-item"},[a("div",{staticClass:"mr10 nr row"},[a("van-field",{attrs:{rows:"3",name:"reason",autosize:"",label:"退款说明",type:"textarea",placeholder:"请描述申请售后的具体原因，100字以内",border:!1},model:{value:e.remark,callback:function(t){e.remark=t},expression:"remark"}})],1)]),a("div",{staticClass:"after-sales-item"},[e._m(3),a("div",{staticClass:"upload-container"},[a("van-uploader",{staticStyle:{"margin-top":"15px"},attrs:{"preview-size":"80px","file-list":e.fileList,"max-count":"1","after-read":e.afterRead},on:{delete:e.onDelete}})],1)])]),a("button",{directives:[{name:"show",rawName:"v-show",value:e.hiddenOpt,expression:"hiddenOpt"}],staticClass:"bg-primary white br60 btn",on:{click:e.onSubmit}},[e._v("申请退款")]),a("van-popup",{staticStyle:{height:"70%"},attrs:{position:"bottom",round:"",closeable:""},model:{value:e.showPopup,callback:function(t){e.showPopup=t},expression:"showPopup"}},[a("div",{staticClass:"pop-container"},[a("div",{staticClass:"pop-header row-center md normal"},[e._v("退款原因")]),a("div",{staticClass:"reason-box mt10"},[a("van-radio-group",{on:{change:e.radioChange},model:{value:e.reasonIndex,callback:function(t){e.reasonIndex=t},expression:"reasonIndex"}},e._l(e.reason,(function(t,s){return a("label",{key:s,staticClass:"reason-item row-between",on:{click:function(t){return e.hidePop(s)}}},[a("div",{staticClass:"reason-desc nr"},[e._v(e._s(t))]),a("van-radio",{attrs:{value:s,name:s,"checked-color":e.primaryColor}})],1)})),0)],1)])])],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"lg"},[e._v("仅退款")]),a("div",{staticClass:"muted xs mt5"},[e._v("未收到货，与卖家协商同意无需退货只需退款")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"lg"},[e._v("退货退款")]),a("div",{staticClass:"muted xs mt5"},[e._v("已收到货，需退还收到的实物")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"arrow"},[s("img",{attrs:{src:a("d5b1")}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header nr row-between"},[a("div",[e._v("上传凭证")]),a("div",{staticStyle:{color:"#BBBBBB"}},[e._v("（选填，最多可上传1张）")])])}],r=(a("4de4"),a("4160"),a("b0c0"),a("d3b7"),a("ac1f"),a("3ca3"),a("5319"),a("159b"),a("ddb0"),a("5530")),n=a("2909"),o=(a("96cf"),a("1da1")),c=a("399b"),d=a("c24f"),l=a("bc3a"),u=a.n(l),m=a("5f01"),v=a("2f62"),b={name:"applyAfterSales",data:function(){return{hiddenOpt:!1,optTyle:c["e"].ONLY_REFUND,goods:{},reason:[],showPopup:!1,reasonIndex:-1,fileList:[],remark:""}},methods:{afterRead:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:s=[],e.length?e.forEach((function(e){s.push(t.uploadFile(e.file))})):s.push(t.uploadFile(e.file)),Promise.all(s).then((function(e){var a=t.fileList,s=void 0===a?[]:a;s.push.apply(s,Object(n["a"])(e)),t.$toast().clear(),t.fileList=s}));case 3:case"end":return a.stop()}}),a)})))()},uploadFile:function(e){var t=this,a=new FormData;return a.append("file",e),console.log(e,"###",a),new Promise((function(e){u.a.post(m["b"]+"file/formimage",a,{headers:{"Content-Type":"multipart/form-data",token:t.token}}).then((function(a){var s=a.data;1==s.code?e(s.data):t.$toast("上传失败，请重新上传")}))}))},onDelete:function(e){this.fileList=this.fileList.filter((function(t){return t.name!=e.name}))},$getGoodsInfo:function(){var e=this;Object(d["t"])({order_id:this.orderId,item_id:this.itemId}).then((function(t){1==t.code&&(e.reason=t.data.reason,e.goods=t.data.goods)}))},$applyAfterSale:function(){var e=this,t=(this.itemId,this.orderId,this.reason,this.reasonIndex,this.optTyle),a=this.remark,s=this.fileList;console.log(s);var i={item_id:this.itemId,order_id:this.orderId,reason:this.reason[this.reasonIndex],refund_type:t,remark:a,img:s.length>0?s[0].base_url:""};Object(d["c"])(i).then((function(t){1==t.code&&(e.$toast({message:t.msg}),setTimeout((function(){e.$router.replace({name:"afterSalesDetail",query:{after_sale_id:t.data.after_sale_id,order_id:e.orderId}})}),1e3))}))},$applyAgain:function(){var e=this,t=this.reason,a=this.reasonIndex,s=this.optTyle,i=this.remark,r=this.fileList,n={id:this.afterSaleId,reason:t[a],refund_type:s,remark:i,img:r};Object(d["d"])(n).then((function(t){1==t.code&&(e.$toast({message:t.msg}),setTimeout((function(){e.$router.replace({name:"afterSalesDetail",query:{after_sale_id:t.data.after_sale_id}})}),1e3))}))},onlyRefund:function(){this.optTyle=c["e"].ONLY_REFUND,this.hiddenOpt=!0},allRefunds:function(){this.optTyle=c["e"].REFUNDS,this.hiddenOpt=!0},onSubmit:function(){-1!=this.reasonIndex?this.afterSaleId?this.$applyAgain():this.$applyAfterSale():this.$toast({message:"请选择退款原因"})},radioChange:function(e){console.log(e)},hidePop:function(e){this.showPopup=!1,this.reasonIndex=e}},created:function(){},mounted:function(){var e=this.$route.query,t=e.item_id,a=e.order_id,s=e.after_sale_id;this.itemId=t,this.orderId=a,this.afterSaleId=s,this.$getGoodsInfo()},computed:Object(r["a"])({},Object(v["c"])(["token"]))},f=b,p=(a("b903"),a("2877")),h=Object(p["a"])(f,s,i,!1,null,"01ca6e11",null);t["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2ec7edb4.6bdd921a.js.map