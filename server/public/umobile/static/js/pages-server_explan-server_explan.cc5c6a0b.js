(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-server_explan-server_explan"],{1127:function(t,e,n){"use strict";n.r(e);var i=n("db67"),r=n("acda");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("c130");var o,s=n("f0c5"),c=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"3bda5848",null,!1,i["a"],o);e["default"]=c.exports},"1dd4":function(t,e,n){"use strict";n.r(e);var i=n("60a3"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},"2a5e":function(t,e,n){var i=n("e318");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("217d4583",i,!0,{sourceMap:!1,shadowMode:!1})},"5ebf":function(t,e,n){function i(t){for(var e={},n=t.split(","),i=n.length;i--;)e[n[i]]=!0;return e}n("ac1f"),n("1276"),t.exports={filter:null,highlight:null,onText:null,blankChar:i(" , ,\t,\r,\n,\f"),blockTags:i("address,article,aside,body,caption,center,cite,footer,header,html,nav,section,pre"),ignoreTags:i("area,base,basefont,canvas,command,frame,input,isindex,keygen,link,map,meta,param,script,source,style,svg,textarea,title,track,use,wbr,embed,iframe"),richOnlyTags:i("a,colgroup,fieldset,legend,picture,table"),selfClosingTags:i("area,base,basefont,br,col,circle,ellipse,embed,frame,hr,img,input,isindex,keygen,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),trustAttrs:i("align,alt,app-id,author,autoplay,border,cellpadding,cellspacing,class,color,colspan,controls,data-src,dir,face,height,href,id,ignore,loop,media,muted,name,path,poster,rowspan,size,span,src,start,style,type,unit-id,width,xmlns"),boolAttrs:i("autoplay,controls,ignore,loop,muted"),trustTags:i("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),userAgentStyles:{address:"font-style:italic",big:"display:inline;font-size:1.2em",blockquote:"background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px",caption:"display:table-caption;text-align:center",center:"text-align:center",cite:"font-style:italic",dd:"margin-left:40px",img:"max-width:100%",mark:"background-color:yellow",picture:"max-width:100%",pre:"font-family:monospace;white-space:pre;overflow:scroll",s:"text-decoration:line-through",small:"display:inline;font-size:0.8em",u:"text-decoration:underline"}}},"60a3":function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__("4ea4");__webpack_require__("99af"),__webpack_require__("caad"),__webpack_require__("c975"),__webpack_require__("acd8"),__webpack_require__("ac1f"),__webpack_require__("2532"),__webpack_require__("466d"),__webpack_require__("5319"),__webpack_require__("1276"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _createForOfIteratorHelper2=_interopRequireDefault(__webpack_require__("b85c")),rpx=uni.getSystemInfoSync().screenWidth/750,cfg=__webpack_require__("5ebf"),_default={name:"parser",data:function(){return{uid:this._uid,scaleAm:"",showAm:"",imgs:[],nodes:[]}},props:{html:null,autopause:{type:Boolean,default:!0},autosetTitle:{type:Boolean,default:!0},domain:String,gestureZoom:Boolean,lazyLoad:Boolean,selectable:Boolean,tagStyle:Object,showWithAnimation:Boolean,useAnchor:Boolean},watch:{html:function(t){this.setContent(t)}},mounted:function(){this.imgList=[],this.imgList.each=function(t){for(var e=0,n=this.length;e<n;e++)this.setItem(e,t(this[e],e,this))},this.imgList.setItem=function(t,e){if(void 0!=t&&e){if(0==e.indexOf("http")&&this.includes(e)){for(var n,i="",r=0;n=e[r];r++){if("/"==n&&"/"!=e[r-1]&&"/"!=e[r+1])break;i+=Math.random()>.5?n.toUpperCase():n}return i+=e.substr(r),this[t]=i}if(this[t]=e,e.includes("data:image")){var a=e.match(/data:image\/(\S+?);(\S+?),(.+)/);if(!a)return}}},this.html&&this.setContent(this.html)},beforeDestroy:function(){this._observer&&this._observer.disconnect(),this.imgList.each((function(t){})),clearInterval(this._timer)},methods:{_Dom2Str:function(t){var e,n="",i=(0,_createForOfIteratorHelper2.default)(t);try{for(i.s();!(e=i.n()).done;){var r=e.value;if("text"==r.type)n+=r.text;else{for(var a in n+="<"+r.name,r.attrs||{})n+=" "+a+'="'+r.attrs[a]+'"';r.children&&r.children.length?n+=">"+this._Dom2Str(r.children)+"</"+r.name+">":n+=">"}}}catch(o){i.e(o)}finally{i.f()}return n},_handleHtml:function(t,e){if("string"!=typeof t&&(t=this._Dom2Str(t.nodes||t)),t.includes("rpx")&&(t=t.replace(/[0-9.]+\s*rpx/g,(function(t){return parseFloat(t)*rpx+"px"}))),!e){var n="<style scoped>@keyframes show{0%{opacity:0}100%{opacity:1}}";for(var i in cfg.userAgentStyles)n+="".concat(i,"{").concat(cfg.userAgentStyles[i],"}");for(i in this.tagStyle)n+="".concat(i,"{").concat(this.tagStyle[i],"}");n+="</style>",t=n+t}return t},setContent:function(t,e){var n=this;if(t){var i=document.createElement("div");e?this.rtf?this.rtf.appendChild(i):this.rtf=i:(this.rtf&&this.rtf.parentNode.removeChild(this.rtf),this.rtf=i),i.innerHTML=this._handleHtml(t,e);for(var r,a=this.rtf.getElementsByTagName("style"),o=0;r=a[o++];)r.innerHTML=r.innerHTML.replace(/body/g,"#rtf"+this._uid),r.setAttribute("scoped","true");!this._observer&&this.lazyLoad&&IntersectionObserver&&(this._observer=new IntersectionObserver((function(t){for(var e,i=0;e=t[i++];)e.isIntersecting&&(e.target.src=e.target.getAttribute("data-src"),e.target.removeAttribute("data-src"),n._observer.unobserve(e.target))}),{rootMargin:"900px 0px 900px 0px"}));var s=this,c=this.rtf.getElementsByTagName("title");c.length&&this.autosetTitle&&uni.setNavigationBarTitle({title:c[0].innerText}),this.imgList.length=0;for(var l,u=this.rtf.getElementsByTagName("img"),f=0,h=0;l=u[f];f++){l.style.maxWidth="100%";var d=l.getAttribute("src");this.domain&&d&&("/"==d[0]?"/"==d[1]?l.src=(this.domain.includes("://")?this.domain.split("://")[0]:"")+":"+d:l.src=this.domain+d:d.includes("://")||(l.src=this.domain+"/"+d)),l.hasAttribute("ignore")||"A"==l.parentElement.nodeName||(l.i=h++,s.imgList.push(l.src||l.getAttribute("data-src")),l.onclick=function(){var t=!0;this.ignore=function(){return t=!1},s.$emit("imgtap",this),t&&uni.previewImage({current:this.i,urls:s.imgList})}),l.onerror=function(){s.$emit("error",{source:"img",target:this})},s.lazyLoad&&this._observer&&l.src&&0!=l.i&&(l.setAttribute("data-src",l.src),l.removeAttribute("src"),this._observer.observe(l))}var p,m=this.rtf.getElementsByTagName("a"),_=(0,_createForOfIteratorHelper2.default)(m);try{for(_.s();!(p=_.n()).done;){var g=p.value;g.onclick=function(){var t=!0,e=this.getAttribute("href");if(s.$emit("linkpress",{href:e,ignore:function(){return t=!1}}),t&&e)if("#"==e[0])s.useAnchor&&s.navigateTo({id:e.substr(1)});else{if(0==e.indexOf("http")||0==e.indexOf("//"))return!0;uni.navigateTo({url:e})}return!1}}}catch(S){_.e(S)}finally{_.f()}var v=this.rtf.getElementsByTagName("video");s.videoContexts=v;for(var b,y=0;b=v[y++];)b.style.maxWidth="100%",b.onerror=function(){s.$emit("error",{source:"video",target:this})},b.onplay=function(){if(s.autopause)for(var t,e=0;t=s.videoContexts[e++];)t!=this&&t.pause()};var x,w,T=this.rtf.getElementsByTagName("audios"),k=(0,_createForOfIteratorHelper2.default)(T);try{for(k.s();!(x=k.n()).done;){var A=x.value;A.onerror=function(){s.$emit("error",{source:"audio",target:this})}}}catch(S){k.e(S)}finally{k.f()}this.document=this.rtf,e||document.getElementById("rtf"+this._uid).appendChild(this.rtf),this.$nextTick((function(){n.nodes=[1],n.$emit("load")})),setTimeout((function(){return n.showAm=""}),500),clearInterval(this._timer),this._timer=setInterval((function(){var t=[n.rtf.getBoundingClientRect()];n.width=t[0].width,t[0].height==w&&(n.$emit("ready",t[0]),clearInterval(n._timer)),w=t[0].height}),350),this.showWithAnimation&&!e&&(this.showAm="animation:show .5s")}else this.rtf&&!e&&this.rtf.parentNode.removeChild(this.rtf)},getText:function(){arguments.length>0&&void 0!==arguments[0]||this.nodes;return this.rtf.innerText},navigateTo:function(t){if(!this.useAnchor)return t.fail&&t.fail({errMsg:"Anchor is disabled"});if(!t.id)return window.scrollTo(0,this.rtf.offsetTop),t.success&&t.success({errMsg:"pageScrollTo:ok"});var e=document.getElementById(t.id);if(!e)return t.fail&&t.fail({errMsg:"Label not found"});t.scrollTop=this.rtf.offsetTop+e.offsetTop,uni.pageScrollTo(t)},getVideoContext:function(t){if(!t)return this.videoContexts;for(var e=this.videoContexts.length;e--;)if(this.videoContexts[e].id==t)return this.videoContexts[e]},preLoad:function preLoad(html,num){html.constructor==Array&&(html=this._Dom2Str(html));var script="var contain=document.createElement('div');contain.innerHTML='"+html.replace(/'/g,"\\'")+"';for(var imgs=contain.querySelectorAll('img'),i=imgs.length-1;i>="+num+";i--)imgs[i].removeAttribute('src');";eval(script)},_tap:function(t){if(this.gestureZoom&&t.timeStamp-this._lastT<300){var e=t.touches[0].pageY-t.currentTarget.offsetTop;if(this._zoom)this._scaleAm.translateX(0).scale(1).step(),uni.pageScrollTo({scrollTop:(e+this._initY)/2-t.touches[0].clientY,duration:400});else{var n=t.touches[0].pageX-t.currentTarget.offsetLeft;this._initY=e,this._scaleAm=uni.createAnimation({transformOrigin:"".concat(n,"px ").concat(this._initY,"px 0"),timingFunction:"ease-in-out"}),this._scaleAm.scale(2).step(),this._tMax=n/2,this._tMin=(n-this.width)/2,this._tX=0}this._zoom=!this._zoom,this.scaleAm=this._scaleAm.export()}this._lastT=t.timeStamp},_touchstart:function(t){1==t.touches.length&&(this._initX=this._lastX=t.touches[0].pageX)},_touchmove:function(t){var e=t.touches[0].pageX-this._lastX;if(this._zoom&&1==t.touches.length&&Math.abs(e)>20){if(this._lastX=t.touches[0].pageX,this._tX<=this._tMin&&e<0||this._tX>=this._tMax&&e>0)return;this._tX+=e*Math.abs(this._lastX-this._initX)*.05,this._tX<this._tMin&&(this._tX=this._tMin),this._tX>this._tMax&&(this._tX=this._tMax),this._scaleAm.translateX(this._tX).step(),this.scaleAm=this._scaleAm.export()}}}};exports.default=_default},"654d":function(t,e,n){"use strict";n("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("408f"),r={data:function(){return{article_content:""}},components:{},props:{},onLoad:function(t){var e=t.type;switch(e=parseInt(e),uni.setNavigationBarTitle({title:0==e?"服务协议":1==e?"隐私政策":"售后保障"}),e){case 0:this.getServerProtoFun();break;case 1:this.getPrivatePolicyFun();break;case 2:this.getAfterSaleGuarFun();break;default:this.getServerProtoFun();break}},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{getServerProtoFun:function(){var t=this;(0,i.getServerProto)().then((function(e){1==e.code&&setTimeout((function(){t.article_content=e.data}),200)}))},getPrivatePolicyFun:function(){var t=this;(0,i.getPrivatePolicy)().then((function(e){1==e.code&&setTimeout((function(){t.article_content=e.data}),200)}))},getAfterSaleGuarFun:function(){var t=this;(0,i.getAfterSaleGuar)().then((function(e){1==e.code&&setTimeout((function(){t.article_content=e.data}),200)}))}}};e.default=r},7139:function(t,e,n){"use strict";var i=n("c518"),r=n.n(i);r.a},"7a28":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t.nodes.length?t._e():t._t("default"),n("v-uni-view",{style:t.showAm+(t.selectable?";user-select:text;-webkit-user-select:text":""),attrs:{id:"top",animation:t.scaleAm},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t._touchstart.apply(void 0,arguments)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t._touchmove.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t._tap.apply(void 0,arguments)}}},[n("div",{attrs:{id:"rtf"+t.uid}})])],2)},a=[]},"88f5":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"@-webkit-keyframes show-data-v-f0cc9922{0%{opacity:0}100%{opacity:1}}@keyframes show-data-v-f0cc9922{0%{opacity:0}100%{opacity:1}}\n\n\n\n",""]),t.exports=e},"8cc8":function(t,e,n){"use strict";n.r(e);var i=n("7a28"),r=n("1dd4");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("7139");var o,s=n("f0c5"),c=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"f0cc9922",null,!1,i["a"],o);e["default"]=c.exports},acda:function(t,e,n){"use strict";n.r(e);var i=n("654d"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},c130:function(t,e,n){"use strict";var i=n("2a5e"),r=n.n(i);r.a},c518:function(t,e,n){var i=n("88f5");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("d8b39cfa",i,!0,{sourceMap:!1,shadowMode:!1})},db67:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={jyfParser:n("8cc8").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"main"},[n("jyf-parser",{attrs:{html:t.article_content}})],1)],1)},a=[]},e318:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* pages/server_explan/server_explan.wxss */.main[data-v-3bda5848]{padding:%?20?%\n  /* min-height: 100vh; */}",""]),t.exports=e}}]);