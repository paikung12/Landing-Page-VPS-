(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{339:function(t,e,r){var content=r(340);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(65).default)("7132a15d",content,!0,{sourceMap:!1})},340:function(t,e,r){var l=r(64)(!1);l.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:rgba(255,255,255,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0px;max-height:0px;border:solid;border-width:thin 0 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0px;width:0px;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=l},367:function(t,e,r){var content=r(447);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(65).default)("4f3c2647",content,!0,{sourceMap:!1})},435:function(t,e,r){"use strict";r(33),r(28),r(36),r(8),r(40),r(29),r(41);var l=r(20),n=(r(339),r(152));function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=n.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:c({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:c({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},446:function(t,e,r){"use strict";r(367)},447:function(t,e,r){var l=r(64)(!1);l.push([t.i,"\n.bg {\n    background: #001727;\n}\n.btn {\n    background: linear-gradient(106.75deg, #00C57E 0%, #00F1A2 100%);\n    border-radius: 10px;\n}\n.btn-body-3 {\n    background: #FFFF;\n    border-radius: 10px;\n}\n.font-color {\n    color: #00C57E;\n}\n.card-color {\n    background: linear-gradient(106.75deg, #00F1A2 0%, #00A36C 100%);\n    box-shadow: 0px 0px 36px rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n}\n",""]),t.exports=l},464:function(t,e,r){"use strict";r.r(e);var l=r(476),n=(r(33),r(28),r(36),r(8),r(40),r(29),r(41),r(20)),o=(r(153),r(314)),c=r(457);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _=r(0).a.extend({name:"v-app-bar-nav-icon",functional:!0,render:function(t,e){var r=e.slots,l=e.listeners,n=e.props,data=e.data,v=Object.assign(data,{staticClass:"v-app-bar__nav-icon ".concat(data.staticClass||"").trim(),props:d(d({},n),{},{icon:!0}),on:l}),_=r().default;return t(c.a,v,_||[t(o.a,"$menu")])}}),h=r(366),x=r(305),m=r(435),f=r(463),C=r(346),y=r(458),w=r(326),O=r(473),E=r(477),B=r(461),S=r(456),M=r(462),P=r(338),j={name:"DefaultLayout",data:function(){return{model:null}}},k=(r(446),r(66)),component=Object(k.a)(j,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg"},[e(l.a,{attrs:{fixed:"",color:"#001727",dark:"","elevate-on-scroll":"","scroll-target":"#scrolling-techniques-7"}},[e(_),t._v(" "),e(P.a,[t._v("Titlessss")]),t._v(" "),e(B.a),t._v(" "),e("div",{staticClass:"pr-2"},[e(c.a,{attrs:{text:"",large:"",dark:""},on:{click:function(e){return t.$router.push("/refound")}}},[t._v("REFOUND POLICY")])],1),t._v(" "),e("div",{staticClass:""},[e(c.a,{staticClass:"btn",attrs:{large:"",dark:""}},[t._v("SIGN IN")])],1)],1),t._v(" "),e("div",[e("div",{staticClass:"flex justify-center h-screen pt-16"},[e("div",{staticClass:"w-full",staticStyle:{"background-image":"url(https://www.img.in.th/images/40e09198369489c4aaca83ec13c9cdae.jpg)"}},[e("div",{staticClass:"container flex items-center h-full"},[e("div",[e("h2",{staticClass:"text-6xl font-bold text-white"},[t._v("EVERYTHING TO MAKE YOU ")]),t._v(" "),e("h2",{staticClass:"text-6xl font-bold text-white"},[t._v(" VPS SERVER HAPPY")]),t._v(" "),e("p",{staticClass:"max-w-xl mt-3 text-gray-300"},[t._v("Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus molestiae")]),t._v(" "),e("div",{staticClass:"mt-6"},[e(c.a,{staticClass:"btn",attrs:{large:"",dark:""}},[t._v("VPS Plans Starting from 1148 THB")])],1),t._v(" "),e("p",{staticClass:"mt-3 text-gray-300"},[t._v("14-day money-back guarantee on all VPS purchases")])])])])])]),t._v(" "),e("div",[e("h2",{staticClass:"text-6xl text-center font-bold text-white"},[t._v("WE STAND HARDWARE QUALITY")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"flex justify-center pt-8"},[e(y.a,{attrs:{"max-height":"500","max-width":"1000",src:"https://sv1.picz.in.th/images/2022/10/12/pXxOnk.png"}})],1)]),t._v(" "),e("div",{staticClass:"pt-64"},[e("div",{staticClass:"container"},[t._m(1),t._v(" "),e("div",{staticClass:"flex justify-center flex-col space-x-3 md:flex-row"},[e(h.a,{staticClass:"w-full my-12",attrs:{height:"652px"}},[e(x.c,[t._v("Basic")]),t._v(" "),e(x.b,[e("div",{staticClass:"flex"},[e("p",{staticClass:"font-color text-6xl font-bold"},[t._v("1148")]),t._v(" "),e("p",{staticClass:"text-gray-500 pl-3 pt-8 text-base"},[t._v("THB /month")])]),t._v(" "),e("p",{staticClass:"mt-3 text-gray-500"},[t._v("For Basic VPS")])]),t._v(" "),e(m.a,{staticClass:"mx-4"}),t._v(" "),e(x.b,[e("div",{staticClass:"space-y-4"},[e(c.a,{staticClass:"mx-2",attrs:{icon:"",color:"#00C57E"}},[e(C.a,[t._v("mdi-heart")])],1),t._v("2 GB (2048 MB) RAM\n                            "),e("br"),t._v(" "),e(c.a,{staticClass:"mx-2",attrs:{icon:"",color:"#00C57E"}},[e(C.a,[t._v("mdi-heart")])],1),t._v("2 GB (2048 MB) RAM\n                            "),e("br"),t._v(" "),e(c.a,{staticClass:"mx-2",attrs:{icon:"",color:"#00C57E"}},[e(C.a,[t._v("mdi-heart")])],1),t._v("2 GB (2048 MB) RAM\n                            "),e("br"),t._v(" "),e(c.a,{staticClass:"mx-2",attrs:{icon:"",color:"#00C57E"}},[e(C.a,[t._v("mdi-heart")])],1),t._v("2 GB (2048 MB) RAM\n                            "),e("br")],1)]),t._v(" "),e(x.a,[e("div",{staticClass:"pt-36 flex justify-center"},[e(c.a,{staticClass:"btn",attrs:{"x-large":"",depressed:"",dark:""}},[t._v("\n                                Get Started\n                            ")])],1)])],1),t._v(" "),e(h.a,{staticClass:"w-full card-color my-12",attrs:{height:"652px"}},[e(x.c,{staticClass:"text-white"},[t._v("Basic")]),t._v(" "),e(x.b,[e("div",{staticClass:"flex"},[e("p",{staticClass:"text-white text-6xl font-bold"},[t._v("1148")]),t._v(" "),e("p",{staticClass:"text-white pl-3 pt-8 text-base"},[t._v("THB /month")])]),t._v(" "),e("p",{staticClass:"mt-3 text-white"},[t._v("For Basic VPS")])]),t._v(" "),e(m.a,{staticClass:"mx-4"}),t._v(" "),e(x.b,[e("div",{staticClass:"space-y-4"},[e(c.a,{staticClass:"mx-2",attrs:{icon:"",color:"#FFFF"}},[e(C.a,[t._v("mdi-heart")])],1),t._v(" "),e("span",{staticClass:"text-white"},[t._v("2 GB (2048 MB) RAM")]),t._v(" "),e("br"),t._v(" "),e(c.a,{staticClass:"mx-2",attrs:{icon:"",color:"#FFFF"}},[e(C.a,[t._v("mdi-heart")])],1),e("span",{staticClass:"text-white"},[t._v("2 GB (2048 MB) RAM")]),t._v(" "),e("br"),t._v(" "),e(c.a,{staticClass:"mx-2",attrs:{icon:"",color:"#FFFF"}},[e(C.a,[t._v("mdi-heart")])],1),e("span",{staticClass:"text-white"},[t._v("2 GB (2048 MB) RAM")]),t._v(" "),e("br"),t._v(" "),e(c.a,{staticClass:"mx-2",attrs:{icon:"",color:"#FFFF"}},[e(C.a,[t._v("mdi-heart")])],1),e("span",{staticClass:"text-white"},[t._v("2 GB (2048 MB) RAM")]),t._v(" "),e("br")],1)]),t._v(" "),e(x.a,[e("div",{staticClass:"pt-36 flex justify-center"},[e(c.a,{staticClass:"btn-body-3",attrs:{"x-large":"",depressed:""}},[t._v("\n                                Get Started\n                            ")])],1)])],1),t._v(" "),e(h.a,{staticClass:"w-full my-12",attrs:{height:"652px"}},[e(x.c,[t._v("Basic")]),t._v(" "),e(x.b,[e("div",{staticClass:"flex"},[e("p",{staticClass:"font-color text-6xl font-bold"},[t._v("1148")]),t._v(" "),e("p",{staticClass:"text-gray-500 pl-3 pt-8 text-base"},[t._v("THB /month")])]),t._v(" "),e("p",{staticClass:"mt-3 text-gray-500"},[t._v("For Basic VPS")])]),t._v(" "),e(m.a,{staticClass:"mx-4"}),t._v(" "),e(x.b,[e("div",{staticClass:"space-y-4"},[e(c.a,{staticClass:"mx-2",attrs:{icon:"",color:"#00C57E"}},[e(C.a,[t._v("mdi-heart")])],1),t._v("2 GB (2048 MB) RAM\n                            "),e("br"),t._v(" "),e(c.a,{staticClass:"mx-2",attrs:{icon:"",color:"#00C57E"}},[e(C.a,[t._v("mdi-heart")])],1),t._v("2 GB (2048 MB) RAM\n                            "),e("br"),t._v(" "),e(c.a,{staticClass:"mx-2",attrs:{icon:"",color:"#00C57E"}},[e(C.a,[t._v("mdi-heart")])],1),t._v("2 GB (2048 MB) RAM\n                            "),e("br"),t._v(" "),e(c.a,{staticClass:"mx-2",attrs:{icon:"",color:"#00C57E"}},[e(C.a,[t._v("mdi-heart")])],1),t._v("2 GB (2048 MB) RAM\n                            "),e("br")],1)]),t._v(" "),e(x.a,[e("div",{staticClass:"pt-36 flex justify-center"},[e(c.a,{staticClass:"btn",attrs:{"x-large":"",depressed:"",dark:""}},[t._v("\n                                Get Started\n                            ")])],1)])],1),t._v(" "),e(h.a,{staticClass:"w-full my-12",attrs:{height:"652px"}},[e(x.c,[t._v("Basic")]),t._v(" "),e(x.b,[e("div",{staticClass:"flex"},[e("p",{staticClass:"font-color text-6xl font-bold"},[t._v("1148")]),t._v(" "),e("p",{staticClass:"text-gray-500 pl-3 pt-8 text-base"},[t._v("THB /month")])]),t._v(" "),e("p",{staticClass:"mt-3 text-gray-500"},[t._v("For Basic VPS")])]),t._v(" "),e(m.a,{staticClass:"mx-4"}),t._v(" "),e(x.b,[e("div",{staticClass:"space-y-4"},[e(c.a,{staticClass:"mx-2",attrs:{icon:"",color:"#00C57E"}},[e(C.a,[t._v("mdi-heart")])],1),t._v("2 GB (2048 MB) RAM\n                            "),e("br"),t._v(" "),e(c.a,{staticClass:"mx-2",attrs:{icon:"",color:"#00C57E"}},[e(C.a,[t._v("mdi-heart")])],1),t._v("2 GB (2048 MB) RAM\n                            "),e("br"),t._v(" "),e(c.a,{staticClass:"mx-2",attrs:{icon:"",color:"#00C57E"}},[e(C.a,[t._v("mdi-heart")])],1),t._v("2 GB (2048 MB) RAM\n                            "),e("br"),t._v(" "),e(c.a,{staticClass:"mx-2",attrs:{icon:"",color:"#00C57E"}},[e(C.a,[t._v("mdi-heart")])],1),t._v("2 GB (2048 MB) RAM\n                            "),e("br")],1)]),t._v(" "),e(x.a,[e("div",{staticClass:"pt-36 flex justify-center"},[e(c.a,{staticClass:"btn",attrs:{"x-large":"",depressed:"",dark:""}},[t._v("\n                                Get Started\n                            ")])],1)])],1)],1),t._v(" "),e("p",{staticClass:"mt-3 text-center text-gray-300"},[t._v("14-day money-back guarantee on all VPS plans purchases")])])]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("div",{staticClass:"pt-64"},[e("div",{staticClass:"container"},[e("h2",{staticClass:"text-6xl text-center font-bold text-white"},[t._v("WIDE SELECTION OF OPERATING SYSTEMS")]),t._v(" "),t._m(4),t._v(" "),e(w.a,{staticClass:"w-full pt-24",attrs:{color:"#001727"}},[e(O.a,{attrs:{multiple:"","show-arrows":""}},t._l(25,(function(r){return e(E.a,{key:r},[e(h.a,{staticClass:"m-4",attrs:{height:"360px",width:"380px",outlined:""}},[e(y.a,{attrs:{height:"180",src:"https://cdn.vuetifyjs.com/images/cards/cooking.png"}}),t._v(" "),e(x.c,[t._v("Ubuntu 18.04 LTS")]),t._v(" "),e(x.b,[t._v("Run business critical workloads such as SQL Server with\n                                confidence using 48TB of memory, 64 sockets, and 2048 logical cores")])],1)],1)})),1)],1)],1)]),t._v(" "),e("div",{staticClass:"pt-64"},[t._m(5),t._v(" "),e("div",{staticClass:"container"},[e(h.a,{staticClass:"w-full"},[e("div",{staticClass:"text-gray-600"},[e("div",{staticClass:"flex"},[e("div",{staticClass:"w-1/2"},[e("img",{staticClass:"h-full",attrs:{src:"https://sv1.picz.in.th/images/2022/10/12/pXnXYz.png",alt:"image",loading:"lazy"}})]),t._v(" "),e("div",{staticClass:"w-1/2 p-9"},[e("h2",{staticClass:"pt-8 text-2xl text-gray-900 font-bold md:text-4xl"},[t._v("CONNECT WITH US")]),t._v(" "),e("p",{staticClass:"mt-6 text-gray-600"},[t._v("*Only the data marked with * are obligatory, all other data are voluntary.\n                                The data collected from you here will be processed by EffortUnionGroup to process your request. For more information, please follow this")]),t._v(" "),e("br"),e("br"),t._v(" "),e("p",{staticClass:"font-color"},[t._v("link: www.effortuniongroup.com ")]),t._v(" "),e("br"),e("br"),t._v(" "),e("div",{staticClass:"mr-12"},[e(S.a,{attrs:{label:"Name *",outlined:""}}),t._v(" "),e(S.a,{attrs:{label:"Email *",outlined:""}}),t._v(" "),e(S.a,{attrs:{label:"Phone *",outlined:""}}),t._v(" "),e(S.a,{attrs:{label:"Sever name (Existing Customers)",outlined:""}}),t._v(" "),e(M.a,{attrs:{label:"Message",outlined:""}}),t._v(" "),e(x.a,[e("div",{},[e(c.a,{staticClass:"btn",attrs:{"x-large":"",depressed:"",dark:""}},[t._v("\n                                            SEND QUESTION\n                                        ")])],1)])],1)])])])])],1)]),t._v(" "),e(f.a,{staticClass:"mt-16",attrs:{color:"#001727"}},[e("div",{staticClass:"flex"},[e("div",{staticClass:"w-1/2"},[e("p",{staticClass:"text-white"},[t._v("Copyright © 2020 www.effortuniongroup.com All rights reserved.")])]),t._v(" "),e("div",{staticClass:"w-1/2 flex justify-end"},[e("p",{staticClass:"text-white"},[t._v("Effort Union group Co.,Ltd.\n                "),e("br"),t._v("\n                No.1 Phomphan2 building , 2nd floor, Ladprao3 , Chomphon, Chatujak , Bangkok, 10900.\n              ")])])])])],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"flex justify-center"},[t("p",{staticClass:"text-center text-base max-w-4xl mt-3 text-gray-300"},[this._v("At EffortUnionGroup, you can rely\n                100% on quality hardware from leading brand manufacturers. We provide branded products\n                from Fujitsu, HPE and Dell, equipped with state-of-the-art server processors from Intel and AMD, memory from\n                Samsung and also high-performance SSD technology from Intel. The bottom line for you: Top performance and dependable stability!")])])},function(){var t=this,e=t._self._c;return e("div",[e("h2",{staticClass:"text-6xl font-bold text-white"},[t._v("VPS PLANS & PRICING ")]),t._v(" "),e("p",{staticClass:"mt-3 text-gray-300"},[t._v("TIP: choose a longer billing cycle for bigger discounts!")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"pt-64"},[e("div",{staticClass:"flex"},[e("div",{staticClass:"ml-16 w-1/2"},[e("h2",{staticClass:"text-6xl font-bold text-white"},[t._v("OUR ENTIRE PACKAGE IS WELL TUNED ")]),t._v(" "),e("p",{staticClass:"mt-3 text-gray-300"},[t._v("We offer you all the features required to get your\n                    server racing along. From cPanel, the most popular control panel for Linux\n                    distributions, to the very latest Plesk Obsidian, right through to our\n                    acclaimed PowerPanel. Take a closer look - it will be worth your while and Our website also has a website\n                    certification mark from Department of Business Development as well")]),t._v(" "),e("img",{staticClass:"w-24 h-16",attrs:{src:"https://sv1.picz.in.th/images/2022/10/12/pXPjqv.png"}})]),t._v(" "),e("div",{staticClass:"flex justify-end w-1/2"},[e("img",{attrs:{src:"https://sv1.picz.in.th/images/2022/10/12/pXADma.png"}})])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"pt-64"},[e("div",{staticClass:"flex"},[e("div",{staticClass:"flex justify-end w-1/2"},[e("img",{attrs:{src:"https://sv1.picz.in.th/images/2022/10/12/pXsYwP.png"}})]),t._v(" "),e("div",{staticClass:"ml-12 w-1/2"},[e("h2",{staticClass:"text-6xl font-bold text-white"},[t._v("WIDE SELECTION OF OPERATING SYSTEMS")]),t._v(" "),e("p",{staticClass:"mt-3 text-gray-300"},[t._v("You get the latest and greatest operating system free"),e("br"),t._v("* ofcharge. You may select\n                    the OS of your choice through your customer panel once your server has been activated.")]),t._v(" "),e("br"),e("br"),t._v(" "),e("h2",{staticClass:"text-6xl font-bold text-white"},[t._v("WE’RE HERE 24/7 FOR YOU")]),t._v(" "),e("p",{staticClass:"mt-3 text-gray-300"},[t._v("Meet our team. We’re proud of what we do and we’re here to help around the clock.")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex justify-center"},[e("p",{staticClass:"text-center text-base max-w-4xl mt-3 text-gray-300"},[t._v("At EffortUnionGroup, you can rely\n                    You get the latest and greatest operating system free* of charge. You may select the OS of your choice through your customer panel once your server has been activated.\n                    "),e("br"),e("br"),t._v("\n                    *Windows Server 2012 R2 Standard* ($ 25 /month)")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("h2",{staticClass:"text-6xl text-center font-bold text-white"},[t._v("GOOD QUESTION !")]),t._v(" "),e("div",{staticClass:"flex justify-center"},[e("p",{staticClass:"text-center text-base max-w-4xl mt-3 text-gray-300"},[t._v("We will gladly answer any questions you may have: From Monday\n                    to Saturday between 08:00AM and 08:00PM personally by telephone - and round-the-clock by email.\n                ")])])])}],!1,null,null,null);e.default=component.exports}}]);