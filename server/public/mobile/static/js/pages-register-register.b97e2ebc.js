(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-register-register"],{1789:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var n={uCountDown:i("71b0").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"register-container"},[i("v-uni-view",{staticClass:"input-container"},[i("v-uni-view",{staticClass:"input-item row"},[i("v-uni-view",{staticClass:"input-label row md normal"},[t._v("手机号")]),i("v-uni-input",{staticClass:"input",attrs:{placeholder:"请输入手机号码"},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}})],1),t.appConfig.register_setting?i("v-uni-view",{staticClass:"input-item row"},[i("v-uni-view",{staticClass:"input-label row md normal"},[t._v("短信验证码")]),i("v-uni-input",{staticStyle:{width:"3.8rem"},attrs:{placeholder:"请输入"},model:{value:t.smsCode,callback:function(e){t.smsCode=e},expression:"smsCode"}}),i("v-uni-button",{staticClass:"bd-primary sm primary br60 row-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sendSmsFun()}}},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.canSendSms,expression:"canSendSms"}],staticClass:"sm"},[t._v("获取验证码")]),i("u-count-down",{directives:[{name:"show",rawName:"v-show",value:!t.canSendSms,expression:"!canSendSms"}],ref:"countDown",attrs:{"show-days":!1,timestamp:t.time,separator:"zh",color:"#FF2C3C",separatorColor:"#FF2C3C","bg-color":"rgba(0, 0, 0, 0)","show-hours":!1,"show-minutes":!1,autoplay:!1},on:{end:function(e){arguments[0]=e=t.$handleEvent(e),t.countDownFinish()}}})],1)],1):t._e(),i("v-uni-view",{staticClass:"input-item row"},[i("v-uni-view",{staticClass:"input-label row md normal"},[t._v("设置密码")]),i("v-uni-input",{attrs:{type:"password",placeholder:"6-20位数字+字母或符号组合"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),i("v-uni-view",{staticClass:"input-item row"},[i("v-uni-view",{staticClass:"input-label row md normal"},[t._v("确认密码")]),i("v-uni-input",{attrs:{type:"password",placeholder:"6-20位数字+字母或符号组合"},model:{value:t.passwordConfirm,callback:function(e){t.passwordConfirm=e},expression:"passwordConfirm"}})],1)],1),i("v-uni-checkbox",{attrs:{checked:t.isAgree,"icon-size":"15px","checked-color":t.primaryColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeChecked.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"xs"},[t._v("已阅读并同意《隐私协议》《会员章程》")])],1),i("v-uni-view",{staticClass:"btn white bg-primary br60 row-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.registerFun.apply(void 0,arguments)}}},[t._v("立即注册")])],1)},s=[]},1920:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-countdown"},[t.showDays&&(t.hideZeroDay||!t.hideZeroDay&&"00"!=t.d)?i("v-uni-view",{style:{fontSize:t.fontSize+"rpx"}},[t._v(t._s(t.d))]):t._e(),t.showDays&&(t.hideZeroDay||!t.hideZeroDay&&"00"!=t.d)?i("v-uni-view",{style:{fontSize:t.separatorSize+"rpx","margin-right":"6rpx"}},[t._v("天")]):t._e(),t.showHours?i("v-uni-view",{staticClass:"u-countdown-item",style:[t.itemStyle]},[i("v-uni-view",{staticClass:"u-countdown-time",style:{fontSize:t.fontSize+"rpx",color:t.color}},[t._v(t._s(t.h))])],1):t._e(),t.showHours?i("v-uni-view",{staticClass:"u-countdown-colon",style:{fontSize:t.separatorSize+"rpx",color:t.separatorColor,paddingBottom:"colon"==t.separator?"4rpx":0}},[t._v(t._s("colon"==t.separator?":":"时"))]):t._e(),t.showMinutes?i("v-uni-view",{staticClass:"u-countdown-item",style:[t.itemStyle]},[i("v-uni-view",{staticClass:"u-countdown-time",style:{fontSize:t.fontSize+"rpx",color:t.color}},[t._v(t._s(t.i))])],1):t._e(),t.showMinutes?i("v-uni-view",{staticClass:"u-countdown-colon",style:{fontSize:t.separatorSize+"rpx",color:t.separatorColor,paddingBottom:"colon"==t.separator?"4rpx":0}},[t._v(t._s("colon"==t.separator?":":"分"))]):t._e(),t.showSeconds?i("v-uni-view",{staticClass:"u-countdown-item",style:[t.itemStyle]},[i("v-uni-view",{staticClass:"u-countdown-time",style:{fontSize:t.fontSize+"rpx",color:t.color}},[t._v(t._s(t.s))])],1):t._e(),t.showSeconds&&"zh"==t.separator?i("v-uni-view",{staticClass:"u-countdown-colon",style:{fontSize:t.separatorSize+"rpx",color:t.separatorColor,paddingBottom:"colon"==t.separator?"4rpx":0}},[t._v("秒")]):t._e()],1)},s=[]},"1de4":function(t,e,i){var n=i("2be9");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("f08b8524",n,!0,{sourceMap:!1,shadowMode:!1})},"26e0":function(t,e,i){"use strict";i.r(e);var n=i("1789"),o=i("9769");for(var s in o)"default"!==s&&function(t){i.d(e,t,(function(){return o[t]}))}(s);i("f7ef");var r,a=i("f0c5"),c=Object(a["a"])(o["default"],n["b"],n["c"],!1,null,"40ec43cc",null,!1,n["a"],r);e["default"]=c.exports},"2be9":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */.u-countdown[data-v-d47f9d56]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-countdown-item[data-v-d47f9d56]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:%?2?%;border-radius:%?6?%;white-space:nowrap;-webkit-transform:translateZ(0);transform:translateZ(0)}.u-countdown-time[data-v-d47f9d56]{margin:0;padding:0}.u-countdown-colon[data-v-d47f9d56]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0 %?5?%;line-height:1;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-bottom:%?4?%}.u-countdown-scale[data-v-d47f9d56]{-webkit-transform:scale(.9);transform:scale(.9);-webkit-transform-origin:center center;transform-origin:center center}',""]),t.exports=e},5380:function(t,e,i){var n=i("7ecf");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("9ec37ce4",n,!0,{sourceMap:!1,shadowMode:!1})},"71b0":function(t,e,i){"use strict";i.r(e);var n=i("1920"),o=i("941c");for(var s in o)"default"!==s&&function(t){i.d(e,t,(function(){return o[t]}))}(s);i("f9e3");var r,a=i("f0c5"),c=Object(a["a"])(o["default"],n["b"],n["c"],!1,null,"d47f9d56",null,!1,n["a"],r);e["default"]=c.exports},"7ecf":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */.register-container[data-v-40ec43cc]{background-color:#fff;min-height:100vh;padding:40px 20px 0}.register-container .input-container .input-item[data-v-40ec43cc]{padding:0 10px;height:44px;margin-bottom:15px;border-bottom:1px solid #d7d7d7}.register-container .input-container .input-item .input-label[data-v-40ec43cc]{width:90px;font-size:15px;-webkit-box-flex:0;-webkit-flex:none;flex:none}.register-container .input-container .input-item uni-input[data-v-40ec43cc]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:15px}.register-container .input-container .input-item .bd-primary[data-v-40ec43cc]{height:29px;width:88px;-webkit-box-flex:0;-webkit-flex:none;flex:none;border:1px solid #ff2c3c;cursor:pointer}.register-container .input-container .input-item .bd-primary .seconds[data-v-40ec43cc]{color:#ff2c3c}.register-container .btn[data-v-40ec43cc]{margin-top:36px;padding:10px 0;width:100%}',""]),t.exports=e},"81d1":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("5530")),s=i("408f"),r=(i("367f"),i("01eb")),a=i("2f62"),c={name:"register",created:function(){},data:function(){return{isAgree:!1,mobile:"",smsCode:"",password:"",passwordConfirm:"",canSendSms:!0,time:59,primaryColor:"#FF2C3C"}},onLoad:function(){console.log(this.appConfig)},methods:(0,o.default)((0,o.default)({},(0,a.mapMutations)(["LOGIN"])),{},{changeChecked:function(){this.isAgree=!this.isAgree},registerFun:function(){var t=this,e=this.isAgree,i=this.mobile,n=this.password,o=this.smsCode,r=this.passwordConfirm;if(i)if(n)if(n==r)if(e){var a={mobile:i,password:n,code:o,client:2};(0,s.register)(a).then((function(e){1==e.code&&(t.LOGIN(a),t.$toast({title:e.msg}),setTimeout((function(){uni.navigateBack()}),1e3))}))}else this.$toast({title:"请阅读并同意《隐私协议》《会员章程》"});else this.$toast({title:"两次密码输入不一致"});else this.$toast({title:"请设置密码"});else this.$toast({title:"请填写手机号"})},countDownFinish:function(){this.canSendSms=!0},sendSmsFun:function(){var t=this;0!=this.canSendSms&&(this.mobile?(0,s.sendSms)({mobile:this.mobile,key:r.SMSType.REGISTER}).then((function(e){1==e.code&&(t.canSendSms=!1,t.$toast(e.msg),t.$refs.countDown.start())})):this.$toast({title:"请填写手机号信息～"}))}}),computed:(0,o.default)({},(0,a.mapGetters)(["appConfig"]))};e.default=c},"941c":function(t,e,i){"use strict";i.r(e);var n=i("ef07"),o=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=o.a},9769:function(t,e,i){"use strict";i.r(e);var n=i("81d1"),o=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=o.a},ef07:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-count-down",props:{timestamp:{type:[Number,String],default:0},autoplay:{type:Boolean,default:!0},separator:{type:String,default:"colon"},separatorSize:{type:[Number,String],default:30},separatorColor:{type:String,default:"#303133"},color:{type:String,default:"#303133"},fontSize:{type:[Number,String],default:30},bgColor:{type:String,default:"#fff"},height:{type:[Number,String],default:"auto"},showBorder:{type:Boolean,default:!1},borderColor:{type:String,default:"#303133"},showSeconds:{type:Boolean,default:!0},showMinutes:{type:Boolean,default:!0},showHours:{type:Boolean,default:!0},showDays:{type:Boolean,default:!0},hideZeroDay:{type:Boolean,default:!1}},watch:{timestamp:function(t,e){this.clearTimer(),this.start()}},data:function(){return{d:"00",h:"00",i:"00",s:"00",timer:null,seconds:0}},computed:{itemStyle:function(){var t={};return this.height&&(t.height=this.height+"rpx",t.width=this.height+"rpx"),this.showBorder&&(t.borderStyle="solid",t.borderColor=this.borderColor,t.borderWidth="1px"),this.bgColor&&(t.backgroundColor=this.bgColor),t},letterStyle:function(){var t={};return this.fontSize&&(t.fontSize=this.fontSize+"rpx"),this.color&&(t.color=this.color),t}},mounted:function(){this.autoplay&&this.timestamp&&this.start()},methods:{start:function(){var t=this;this.clearTimer(),this.timestamp<=0||(this.seconds=Number(this.timestamp),this.formatTime(this.seconds),this.timer=setInterval((function(){if(t.seconds--,t.$emit("change",t.seconds),t.seconds<0)return t.end();t.formatTime(t.seconds)}),1e3))},formatTime:function(t){t<=0&&this.end();var e=0,i=0,n=0,o=0;e=Math.floor(t/86400),i=Math.floor(t/3600)-24*e;var s=null;s=this.showDays?i:Math.floor(t/3600),n=Math.floor(t/60)-60*i-24*e*60,o=Math.floor(t)-24*e*60*60-60*i*60-60*n,s=s<10?"0"+s:s,n=n<10?"0"+n:n,o=o<10?"0"+o:o,e=e<10?"0"+e:e,this.d=e,this.h=s,this.i=n,this.s=o},end:function(){this.clearTimer(),this.$emit("end",{})},reset:function(){this.clearTimer(),this.seconds=Number(this.timestamp),this.s=this.timestamp,console.log(this.s)},clearTimer:function(){this.timer&&(clearInterval(this.timer),this.timer=null)}},beforeDestroy:function(){clearInterval(this.timer),this.timer=null}};e.default=n},f7ef:function(t,e,i){"use strict";var n=i("5380"),o=i.n(n);o.a},f9e3:function(t,e,i){"use strict";var n=i("1de4"),o=i.n(n);o.a}}]);