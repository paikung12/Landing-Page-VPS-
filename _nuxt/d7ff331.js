(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{308:function(e,t,r){"use strict";(function(e){var n=r(321),o=r.n(n),c={baseURL:e.env.baseURL||e.env.apiUrl||"http://209.97.161.34:8005"},f=o.a.create(c);t.a=f}).call(this,r(218))},309:function(e,t,r){"use strict";r.d(t,"a",(function(){return D}));r(57);var n=r(21),o=r(15),c=r(16),f=r(27),l=r(23),d=r(12),h=r(26),m=(r(84),r(40),r(8),r(215),r(306)),v=r(308),y=r(323),R=r.n(y),x=r(324),w=r.n(x),k=r(0),j=r(325);k.a.use(j.a);var O=new j.a.Store({state:{},mutations:{},actions:{},modules:{}});function B(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(d.a)(e);if(t){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var A=function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c},C=function(e){Object(f.a)(A,e);var t,r,l,d,h,m,v,y,R,x,k,j,O=B(A);function A(){var e;return Object(o.a)(this,A),(e=O.apply(this,arguments)).loading=!1,e.loadTxt="Loading..",e.snackTxt="",e.snacking=!1,e.snackColor="success",e.vs=null,e}return Object(c.a)(A,[{key:"setVuesax",value:(j=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.vs=t;case 1:case"end":return e.stop()}}),e,this)}))),function(e){return j.apply(this,arguments)})},{key:"noti",value:(k=Object(n.a)(regeneratorRuntime.mark((function e(){var t,title,text,r=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=r.length>0&&void 0!==r[0]?r[0]:"success",title=r.length>1&&void 0!==r[1]?r[1]:"Notification",text=r.length>2&&void 0!==r[2]?r[2]:"Notification Detail",this.vs.notification({color:t,title:title,text:text});case 4:case"end":return e.stop()}}),e,this)}))),function(){return k.apply(this,arguments)})},{key:"onSnack",value:(x=Object(n.a)(regeneratorRuntime.mark((function e(t){var r,n=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:"success",e.next=3,this.offSnack();case 3:this.snacking=!0,this.snackTxt=t,this.snackColor=r;case 6:case"end":return e.stop()}}),e,this)}))),function(e){return x.apply(this,arguments)})},{key:"offSnack",value:(R=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.snacking=!1;case 1:case"end":return e.stop()}}),e,this)}))),function(){return R.apply(this,arguments)})},{key:"switchLoad",value:(y=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.loading=t;case 1:case"end":return e.stop()}}),e,this)}))),function(e){return y.apply(this,arguments)})},{key:"onLoad",value:(v=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.loadTxt=t,this.loading=!0;case 2:case"end":return e.stop()}}),e,this)}))),function(e){return v.apply(this,arguments)})},{key:"offLoad",value:(m=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.loading=!1;case 1:case"end":return e.stop()}}),e,this)}))),function(){return m.apply(this,arguments)})},{key:"alert",value:(h=Object(n.a)(regeneratorRuntime.mark((function e(){var title,t,text,r=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return title=r.length>0&&void 0!==r[0]?r[0]:"OK",t=r.length>1&&void 0!==r[1]?r[1]:"success",text=r.length>2&&void 0!==r[2]?r[2]:"",e.next=5,w.a.fire({icon:t,title:title,text:text,confirmButtonText:"OK",confirmButtonColor:"#00E96A"});case 5:case"end":return e.stop()}}),e)}))),function(){return h.apply(this,arguments)})},{key:"alertAuto",value:(d=Object(n.a)(regeneratorRuntime.mark((function e(){var title,t,r,text,n=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return title=n.length>0&&void 0!==n[0]?n[0]:"OK",t=n.length>1&&void 0!==n[1]?n[1]:2e3,r=n.length>2&&void 0!==n[2]?n[2]:"success",text=n.length>3&&void 0!==n[3]?n[3]:"",e.next=6,w.a.fire({showConfirmButton:!1,icon:r,title:title,text:text,timer:t});case 6:case"end":return e.stop()}}),e)}))),function(){return d.apply(this,arguments)})},{key:"alertnotfound",value:(l=Object(n.a)(regeneratorRuntime.mark((function e(){var title,t,text,r=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return title=r.length>0&&void 0!==r[0]?r[0]:"OK",t=r.length>1&&void 0!==r[1]?r[1]:"error",text=r.length>2&&void 0!==r[2]?r[2]:"",e.next=5,w.a.fire({icon:t,title:title,text:text,confirmButtonText:"OK",confirmButtonColor:"#ef4444"});case 5:case"end":return e.stop()}}),e)}))),function(){return l.apply(this,arguments)})},{key:"alerterror",value:(r=Object(n.a)(regeneratorRuntime.mark((function e(){var title,t,text,r=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return title=r.length>0&&void 0!==r[0]?r[0]:"Please click the link from the email again.",t=r.length>1&&void 0!==r[1]?r[1]:"error",text=r.length>2&&void 0!==r[2]?r[2]:"",e.next=5,w.a.fire({icon:t,title:title,text:text,confirmButtonText:"OK",confirmButtonColor:"#ef4444"});case 5:case"end":return e.stop()}}),e)}))),function(){return r.apply(this,arguments)})},{key:"confirm",value:(t=Object(n.a)(regeneratorRuntime.mark((function e(){var title,t,r=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return title=r.length>0&&void 0!==r[0]?r[0]:"Are you sure ?",e.next=3,w.a.fire({title:title,showCancelButton:!0,confirmButtonText:"OK",cancelButtonText:"Cancel",confirmButtonColor:"#00E96A"}).then((function(e){return e.isConfirmed}));case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})}]),A}(m.b),S=new(C=A([Object(m.a)({generateMutationSetters:!0})],C))({store:O,name:"Web"});function H(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(d.a)(e);if(t){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var T=function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c},_=function(e){Object(f.a)(O,e);var t,r,l,d,h,m,y,x,w,k,j=H(O);function O(){var e;return Object(o.a)(this,O),(e=j.apply(this,arguments)).token=null,e.url=v.a.defaults.baseURL,e}return Object(c.a)(O,[{key:"getHttp",value:(k=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get(t).then((function(e){return e.data})).catch((function(e){return e.response.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),function(e){return k.apply(this,arguments)})},{key:"postHttpAlert",value:(w=Object(n.a)(regeneratorRuntime.mark((function e(t,form){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post(t,form).then((function(e){return S.alert("Successfully Saved"),e.data})).catch((function(e){return S.alerterror("Failed to save data","error"),console.log(e),e.response.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),function(e,t){return w.apply(this,arguments)})},{key:"postHttpAlertAccount",value:(x=Object(n.a)(regeneratorRuntime.mark((function e(t,form){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post(t,form).then((function(e){return S.alert("Successfully Saved"),e.data})).catch((function(e){return S.alert("Can not : save due to the same Account Number in the system","error"),console.log(e),e.response.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),function(e,t){return x.apply(this,arguments)})},{key:"postHttp",value:(y=Object(n.a)(regeneratorRuntime.mark((function e(t,form){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post(t,form).then((function(e){return e.data})).catch((function(e){return e.response.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),function(e,t){return y.apply(this,arguments)})},{key:"putHttp",value:(m=Object(n.a)(regeneratorRuntime.mark((function e(t,form){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.put(t,form).then((function(e){return e.data})).catch((function(e){return e.response.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),function(e,t){return m.apply(this,arguments)})},{key:"putHttpAlert",value:(h=Object(n.a)(regeneratorRuntime.mark((function e(t,form){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.confirm("Do you want to continue? ");case 2:if(!e.sent){e.next=7;break}return e.next=6,v.a.put(t,form).then((function(e){return S.alert("Successfully executed"),e.data})).catch((function(e){return S.alert("Failed to complete ","error"),e.response.data}));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)}))),function(e,t){return h.apply(this,arguments)})},{key:"deleteHttp",value:(d=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.delete(t).then((function(e){return e.data})).catch((function(e){return e.response.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),function(e){return d.apply(this,arguments)})},{key:"deleteHttpAlert",value:(l=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.confirm("Are ");case 2:if(!e.sent){e.next=7;break}return e.next=6,v.a.delete(t).then((function(e){return S.alert("Successfully deleted"),!0})).catch((function(e){return S.alert("Failed to delete data","error"),!1}));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)}))),function(e){return l.apply(this,arguments)})},{key:"putImageHttpAlert",value:(r=Object(n.a)(regeneratorRuntime.mark((function e(t,form){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.confirm("Are you sure you want to edit the information?");case 2:if(!e.sent){e.next=7;break}return e.next=6,v.a.put(t,form,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return S.alert("Successfully executed"),e.data})).catch((function(e){return S.alert("Failed to edit data","error"),e.response.data}));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)}))),function(e,t){return r.apply(this,arguments)})},{key:"fillData",value:function(e,t,r){return R.a.find(e,(function(e){return e[t]==r}))}},{key:"getBase64",value:(t=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,r){var n=new FileReader;n.readAsDataURL(t),n.onload=function(){return e(n.result)},n.onerror=function(e){return r(e)}})));case 1:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})}]),O}(m.b),D=new(_=T([Object(m.a)({generateMutationSetters:!0})],_))({store:O,name:"Core"})},466:function(e,t,r){"use strict";r.r(t);var n=r(457),o=r(460),c=r(456),f=r(21),l=(r(84),r(309)),d={data:function(){return{majorss:[],form:{}}},created:function(){var e=this;return Object(f.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getmajor();case 2:return t.next=4,e.deletemajor();case 4:case"end":return t.stop()}}),t)})))()},methods:{getmajor:function(){var e=this;return Object(f.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.getHttp("/api/company/major/");case 2:e.majorss=t.sent;case 3:case"end":return t.stop()}}),t)})))()},deletemajor:function(){var e=this;return Object(f.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.deleteHttp("/api/company/major/".concat(e.form.id,"/"),e.form);case 2:e.deletemajor=t.sent;case 3:case"end":return t.stop()}}),t)})))()}}},h=r(66),component=Object(h.a)(d,(function(){var e=this,t=e._self._c;return t("div",[t("p",[e._v("Table")]),e._v(" "),t("pre",[e._v(e._s(this.majorss))]),e._v(" "),t("div",[t(o.a,{on:{submit:function(t){return t.preventDefault(),e.deletemajor.apply(null,arguments)}}},[t(c.a,{attrs:{label:"major update"},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}}),e._v(" "),t(n.a,{attrs:{type:"submit"}},[e._v("Delete")])],1)],1)])}),[],!1,null,null,null);t.default=component.exports}}]);