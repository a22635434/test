webpackJsonp([37],{fkx1:function(n,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var e=t("LMZF"),u=function(){},i=t("Un6q"),o=t("0nO6"),a=t("wywC"),r=t("PGCm"),c=t("AMGi"),s=t("NDpq"),h=t("xllO"),g=t("I4HG"),_=t("6Xbx"),p=t("rM26"),d=t("E+l/"),f=t("bkgj"),b=function(n){function l(){var l=null!==n&&n.apply(this,arguments)||this;return l.pageTitle=getBundleString("\u7e73\u6b3e\u622a\u6b62\u65e5\u901a\u77e5","notice_ag013.00004425"),l.returnKey="ag013",l.controlNames=[],l.channels=[{display:"Email",name:"Email",confirm:"confirmPass",source:"emailFlag"},{display:getBundleString("\u624b\u6a5f<br>\u63a8\u64ad","notice_ag013.00002615"),name:getBundleString("\u624b\u6a5f\u63a8\u64ad","notice_ag013.00002623"),confirm:"confirmPass",source:"pushFlag"},{display:"LINE",name:"LINE",confirm:"confirmLine",source:"lineFlag"},{display:getBundleString("\u4e2d\u4fe1\u5361<br>\u512a\u60e0","notice_ag013.00000654"),name:getBundleString("\u4e2d\u4fe1\u5361\u512a\u60e0","notice_ag013.00000661"),confirm:"confirmMCardApp",source:"cardBonusFlag"}],l.defaults=[0,1],l.remarkAEMKey="TWRBMNoticeAG013_remark",l.showSwitch=!1,l.hasNewSettings=!1,l.disableSave=!0,l.noneEnabledHighlight=!1,l}return Object(_.__extends)(l,n),l.prototype.ignoreInitHideLoader=function(){return!0},l.prototype.control=function(n){return this.formClazz.getForm().controls[n]},l.prototype.buildPageForm=function(n){this.formClazz=new f.a(null,function(n){},null,{},this.formRef)},l.prototype.initWithData=function(l){var t=this,e=this.channels.length;this.switchOn=l.isSwitchOn||!1,this.disableSave=!this.switchOn,this.haveLine="1"==l.haveLineFlag||!1,this.channelEnabled=this.channels.map(function(n){return"1"==l[n.source]||!1}),this.channelEnabling=this.channelEnabled.slice(),this.switchOn&&-1==this.channelEnabling.indexOf(!0)&&this.preset(),this.channelStatus=new Array(e).fill("disabled"),this.buildPageForm(l),this.renderChannelStatus(),setTimeout(function(){n.prototype.hideLoader.call(t),t.showSwitch=!0},500)},l.prototype.init=function(l){var t=this;n.prototype.changePageTitle.call(this,this.pageTitle),n.prototype.getUtils.call(this).getNoticeItem("cardBill","ag013").then(function(l){n.prototype.sendAndReceiveAsync.call(t,"/twrbm-notice/ag013/010",l).then(function(n){return t.initWithData(l)}).catch(function(n){return t.handleResponseError(n)})}).catch(function(l){d.a.isNotNullOrNotEmptyObject(l)?t.handleResponseError(l):n.prototype.sendAndReceiveAsync.call(t,"/twrbm-notice/ag013/010",{}).then(function(n){return t.initWithData(n)}).catch(function(n){return t.handleResponseError(n)})})},l.prototype.renderChannelStatus=function(){this.noneEnabledHighlight=!1,this.switchOn?(console.log("channel enabling",this.channelEnabling),this.channelStatus=this.channelEnabling.map(function(n){return n?"active":""})):this.channelStatus.fill("disabled")},l.prototype.preset=function(){var n=this;this.defaults.forEach(function(l){n.channelEnabling[l]=!0})},l.prototype.toggleSwitch=function(l){var t=this;console.log("toggle switch to",!this.switchOn),n.prototype.preventEvent.call(this,l,function(){t.disableSave=!1,t.switchOn=!t.switchOn,t.channelEnabling.fill(!1),t.controlNames.map(function(n){return t.control(n).setValue("")}),t.switchOn?(t.preset(),t.controlNames.forEach(function(n){return t.control(n).enable()})):t.controlNames.forEach(function(n){return t.control(n).disable()}),t.renderChannelStatus()})},l.prototype.injectTagTheshold=function(l,t){var e=this;console.log("inject",t),n.prototype.preventEvent.call(this,l,function(){e.control("inputThreshold").setValue(t.toString())})},l.prototype.confirmPass=function(){return new Promise(function(n,l){return n()})},l.prototype.confirmLine=function(){var l=this;return this.haveLine?new Promise(function(n,l){return n()}):new Promise(function(t,e){var u;u=getBundleString("\u60a8\u7684\u88dd\u7f6e\u5c1a\u672a\u7d81\u5b9aLINE\uff0c\u662f\u5426\u8981\u7acb\u5373\u7d81\u5b9a\uff1f","notice_ag013.00002456"),n.prototype.showConfirm.call(l,u,function(t){t(),n.prototype.getUtils.call(l).openExtUrl(n.prototype.getSharedService.call(l).getLineURL(),"",{}),e()},function(n){n(),e()},getBundleString("\u78ba\u8a8d\u8a0a\u606f","notice_ag013.00004054"),getBundleString("\u7acb\u5373\u7d81\u5b9a","notice_ag013.00004106"))})},l.prototype.confirmMCardApp=function(){var l=this;return new Promise(function(t,e){n.prototype.getUtils.call(l).isMCardAppInstalled(t,function(){return n.prototype.showConfirm.call(l,getBundleString("\u60a8\u7684\u88dd\u7f6e\u5c1a\u672a\u5b89\u88dd\u4e2d\u4fe1\u5361\u512a\u60e0APP\uff0c\u8acb\u554f\u60a8\u662f\u5426\u8981\u958b\u555f\u901a\u77e5\uff1f","notice_ag013.00002452"),function(n){n(),t()},function(n){n(),e()},getBundleString("\u78ba\u8a8d\u8a0a\u606f","notice_ag013.00004054"))})})},l.prototype.toggleChannelEnabling=function(n){var l=this;this.channelEnabling[n]=!this.channelEnabling[n],this.channelEnabling[0]||this.channelEnabling[2]?this.controlNames.forEach(function(n){return l.control(n).enable()}):(this.controlNames.map(function(n){return l.control(n).setValue("")}),this.controlNames.forEach(function(n){return l.control(n).disable()})),console.log(this.channelEnabled,this.channelEnabling),this.renderChannelStatus()},l.prototype.clickChannelEnabling=function(l,t){var e=this;this.switchOn&&n.prototype.preventEvent.call(this,l,function(){e.channelEnabling[t]?e.toggleChannelEnabling(t):e[e.channels[t].confirm]().then(function(){console.log("resolved"),e.toggleChannelEnabling(t)}).catch(function(){console.log("rejected")})})},l.prototype.clickAmountTag=function(l,t){var e=this;n.prototype.preventEvent.call(this,l,function(){e.switchOn&&(e.channelEnabling[0]||e.channelEnabling[2])&&e.control("inputThreshold").setValue(t.toString())})},l.prototype.haveSettingsChanged=function(){console.log(this.channelEnabled,this.channelEnabling);for(var n=0;n<this.channels.length;n++)if(this.channelEnabled[n]!=this.channelEnabling[n])return!0;for(n=0;n<this.controlNames.length;n++)if(this.control(this.controlNames[n]).value!=this.inputHistory[n])return!0;return!1},l.prototype.pageBack=function(){var l=this;this.haveSettingsChanged()?n.prototype.showConfirm.call(this,getBundleString("\u60a8\u5c1a\u672a\u8a2d\u5b9a\u6b64\u6b21\u8a2d\u5b9a\uff0c\u78ba\u5b9a\u8981\u53d6\u6d88\u8a2d\u5b9a\uff1f","notice_ag013.00002371"),function(t){t(),n.prototype.previousPage.call(l,1,!1,null)},function(n){return n()},getBundleString("\u78ba\u8a8d\u8a0a\u606f","notice_ag013.00004054")):n.prototype.previousPage.call(this,1,!1,this.hasNewSettings?{chgType:"cardBill",key:this.returnKey}:{})},l.prototype.save=function(l,t){var e=this;n.prototype.showLoader.call(this),n.prototype.getSharedService.call(this).clearNoticeItemsCfg(),this.disableSave=!this.switchOn,n.prototype.sendAndReceiveAsync.call(this,l,t).then(function(l){e.channelEnabled=e.channelEnabling.slice(),e.inputHistory=e.controlNames.map(function(n){return e.control(n).value.toString()}),n.prototype.hideLoader.call(e),e.hasNewSettings=!0,n.prototype.showToast.call(e,getBundleString("\u8a2d\u5b9a\u6210\u529f","notice_ag013.00004709"))},function(n){return e.handleResponseError(n)})},l.prototype.saveConfirm=function(){var l=this;this.noneEnabledHighlight=this.switchOn&&-1==this.channelEnabling.indexOf(!0);var t="/twrbm-notice/ag013/011",e={isEmailFlagOn:this.channelEnabling[0],isPushFlagOn:this.channelEnabling[1],isLineFlagOn:this.channelEnabling[2],isCardBonusFlagOn:this.channelEnabling[3],isSwithOn:this.switchOn};this.switchOn?this.noneEnabledHighlight||n.prototype.showConfirm.call(this,getBundleString("\u7e73\u6b3e\u622a\u6b62\u65e5\u901a\u77e5\u5c07\u900f\u904e","notice_ag013.00004427")+this.channels.map(function(n){return n.name}).filter(function(n,t){return l.channelEnabling[t]}).join("\u3001")+getBundleString("\u901a\u77e5\u60a8\uff0c\u8acb\u78ba\u8a8d\u662f\u5426\u8981\u57f7\u884c\u672c\u6b21\u8a2d\u5b9a\uff1f","notice_ag013.00005770"),function(n){n(),l.save(t,e)},function(n){return n()},getBundleString("\u78ba\u8a8d\u8a0a\u606f","notice_ag013.00004054")):this.save(t,e)},l.prototype.clickSave=function(l){var t=this;n.prototype.preventEvent.call(this,l,function(){t.formClazz.resetFormErrors(),t.haveSettingsChanged()?t.saveConfirm():n.prototype.showAlert.call(t,getBundleString("\u60a8\u672a\u7570\u52d5\u4efb\u4f55\u8a2d\u5b9a\uff0c\u8acb\u518d\u6b21\u78ba\u8a8d","notice_ag013.00002413"),null,null,getBundleString("\u6211\u77e5\u9053\u4e86","notice_ag013.00002566"))})},l}(p.a),m=e._3({encapsulation:0,styles:[[""]],data:{}});function v(n){return e._29(0,[(n()(),e._5(0,0,null,null,3,"div",[],null,null,null,null,null)),(n()(),e._27(-1,null,["\n                                "])),(n()(),e._5(2,0,null,null,0,"div",[],null,null,null,null,null)),(n()(),e._27(-1,null,["\n                            "]))],null,null)}function y(n){return e._29(0,[(n()(),e._5(0,0,null,null,4,"li",[["class","word"]],null,[[null,"click"]],function(n,l,t){var e=!0,u=n.component;return"click"===l&&(e=!1!==u.clickChannelEnabling(u.$evnet,n.context.index)&&e),e},null,null)),(n()(),e._27(-1,null,["\n                                "])),(n()(),e._5(2,0,null,null,1,"a",[],[[8,"innerHTML",1]],null,null,null,null)),e._4(3,278528,null,0,i.k,[e.q,e.r,e.k,e.C],{ngClass:[0,"ngClass"]},null),(n()(),e._27(-1,null,["\n                            "]))],function(n,l){n(l,3,0,l.component.channelStatus[l.context.index])},function(n,l){n(l,2,0,l.context.$implicit.display)})}function E(n){return e._29(0,[(n()(),e._5(0,0,[[1,0],["formRef",1]],null,89,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,t){var u=!0;return"submit"===l&&(u=!1!==e._19(n,2).onSubmit(t)&&u),"reset"===l&&(u=!1!==e._19(n,2).onReset()&&u),u},null,null)),e._4(1,16384,null,0,o.A,[],null,null),e._4(2,540672,null,0,o.k,[[8,null],[8,null]],{form:[0,"form"]},null),e._24(2048,null,o.c,null,[o.k]),e._4(4,16384,null,0,o.r,[o.c],null,null),(n()(),e._27(-1,null,["\n        "])),(n()(),e._5(6,0,null,null,60,"ul",[["class","card-list reduse"]],null,null,null,null,null)),(n()(),e._27(-1,null,["\n            "])),(n()(),e._5(8,0,null,null,21,"li",[],null,null,null,null,null)),(n()(),e._27(-1,null,["\n                "])),(n()(),e._5(10,0,null,null,18,"div",[["class","div-tb"]],null,null,null,null,null)),(n()(),e._27(-1,null,["\n                    "])),(n()(),e._5(12,0,null,null,4,"div",[["class","td vmid wid_80per"]],null,null,null,null,null)),(n()(),e._5(13,0,null,null,3,"i18n",[["translate","notice_ag013.00005806"]],null,null,null,a.b,a.a)),e._4(14,81920,null,0,r.a,[e.k,c.b],{bundleKey:[0,"bundleKey"]},null),e._4(15,114688,null,0,s.a,[],null,null),(n()(),e._27(-1,null,["\u901a\u77e5\u8a2d\u5b9a "])),(n()(),e._27(-1,null,["\n                    "])),(n()(),e._5(18,0,null,null,9,"div",[["class","td rt"]],null,null,null,null,null)),(n()(),e._27(-1,null,["\n                        "])),(n()(),e._5(20,0,null,null,6,"label",[["for","ios_btn"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.toggleSwitch(t)&&e),e},null,null)),(n()(),e._27(-1,null,["\n                            "])),(n()(),e._5(22,0,null,null,0,"input",[["class","ios-switch bigswitch"],["id","ios_btn"],["readonly",""],["type","checkbox"]],[[8,"checked",0]],null,null,null,null)),(n()(),e._27(-1,null,["\n                            "])),(n()(),e._0(16777216,null,null,1,null,v)),e._4(25,16384,null,0,i.m,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(n()(),e._27(-1,null,["\n                        "])),(n()(),e._27(-1,null,["\n                    "])),(n()(),e._27(-1,null,["\n                "])),(n()(),e._27(-1,null,["\n            "])),(n()(),e._27(-1,null,["\n            "])),(n()(),e._5(31,0,null,null,34,"li",[],null,null,null,null,null)),(n()(),e._27(-1,null,["\n                "])),(n()(),e._5(33,0,null,null,19,"div",[["class","div-tb"]],null,null,null,null,null)),(n()(),e._27(-1,null,["\n                    "])),(n()(),e._5(35,0,null,null,7,"div",[["class","td vmid wid_40per"]],null,null,null,null,null)),(n()(),e._27(-1,null,["\n                        "])),(n()(),e._5(37,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),e._5(38,0,null,null,3,"i18n",[["translate","notice_ag013.00005793"]],null,null,null,a.b,a.a)),e._4(39,81920,null,0,r.a,[e.k,c.b],{bundleKey:[0,"bundleKey"]},null),e._4(40,114688,null,0,s.a,[],null,null),(n()(),e._27(-1,null,["\u901a\u77e5\u7ba1\u9053 "])),(n()(),e._27(-1,null,["\n                    "])),(n()(),e._27(-1,null,["\n                    "])),(n()(),e._5(44,0,null,null,7,"div",[["class","td rt vmid"]],null,null,null,null,null)),(n()(),e._27(-1,null,["\n                        "])),(n()(),e._5(46,0,null,null,4,"ul",[["class","foot-link for-list pull-right"]],null,null,null,null,null)),(n()(),e._27(-1,null,["\n                            "])),(n()(),e._0(16777216,null,null,1,null,y)),e._4(49,802816,null,0,i.l,[e.N,e.K,e.q],{ngForOf:[0,"ngForOf"]},null),(n()(),e._27(-1,null,["\n                        "])),(n()(),e._27(-1,null,["\n                    "])),(n()(),e._27(-1,null,["\n                "])),(n()(),e._27(-1,null,["\n                "])),(n()(),e._5(54,0,null,null,10,"span",[],[[8,"hidden",0]],null,null,null,null)),(n()(),e._27(-1,null,["\n                    "])),(n()(),e._5(56,0,null,null,7,"div",[["class","form_group"]],null,null,null,null,null)),(n()(),e._27(-1,null,["\n                        "])),(n()(),e._5(58,0,null,null,4,"div",[["class","form_error"]],null,null,null,null,null)),(n()(),e._5(59,0,null,null,3,"i18n",[["translate","notice_ag013.00004956"]],null,null,null,a.b,a.a)),e._4(60,81920,null,0,r.a,[e.k,c.b],{bundleKey:[0,"bundleKey"]},null),e._4(61,114688,null,0,s.a,[],null,null),(n()(),e._27(-1,null,["\u8acb\u81f3\u5c11\u9078\u64c7\u4e00\u500b\u7ba1\u9053"])),(n()(),e._27(-1,null,["\n                    "])),(n()(),e._27(-1,null,["\n                "])),(n()(),e._27(-1,null,["\n            "])),(n()(),e._27(-1,null,["\n        "])),(n()(),e._27(-1,null,["\n        "])),(n()(),e._27(-1,null,["\n        "])),(n()(),e._5(69,0,null,null,19,"div",[["class","container pad_top30"]],null,null,null,null,null)),(n()(),e._27(-1,null,["\n\n\t\t\t"])),(n()(),e._5(71,0,null,null,10,"div",[["class","btn_group mt30"]],null,null,null,null,null)),(n()(),e._27(-1,null,["\n                "])),(n()(),e._5(73,0,null,null,7,"a",[["class","btn btn-block btn-success"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.clickSave(t)&&e),e},null,null)),e._4(74,278528,null,0,i.k,[e.q,e.r,e.k,e.C],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(n()(),e._27(-1,null,["\n                    "])),(n()(),e._5(76,0,null,null,3,"i18n",[["translate","notice_ag013.00001098"]],null,null,null,a.b,a.a)),e._4(77,81920,null,0,r.a,[e.k,c.b],{bundleKey:[0,"bundleKey"]},null),e._4(78,114688,null,0,s.a,[],null,null),(n()(),e._27(-1,null,["\u5132\u5b58\u8a2d\u5b9a"])),(n()(),e._27(-1,null,["\n                "])),(n()(),e._27(-1,null,["\n            "])),(n()(),e._27(-1,null,["\n\n            "])),(n()(),e._5(83,0,null,null,4,"div",[["class","remarks pad_top30"]],null,null,null,null,null)),(n()(),e._27(-1,null,["\n\t\t\t\t"])),(n()(),e._5(85,0,null,null,1,"memo-remarks",[],null,null,null,h.b,h.a)),e._4(86,4964352,null,0,g.a,[],{key:[0,"key"],format:[1,"format"]},null),(n()(),e._27(-1,null,["\n            "])),(n()(),e._27(-1,null,["\n\n\t\t"])),(n()(),e._27(-1,null,["\n\t\t\n    "]))],function(n,l){var t=l.component;n(l,2,0,t.formClazz.form),n(l,14,0,"notice_ag013.00005806"),n(l,15,0),n(l,25,0,t.showSwitch),n(l,39,0,"notice_ag013.00005793"),n(l,40,0),n(l,49,0,t.channels),n(l,60,0,"notice_ag013.00004956"),n(l,61,0),n(l,74,0,"btn btn-block btn-success",t.disableSave?"disabled":""),n(l,77,0,"notice_ag013.00001098"),n(l,78,0),n(l,86,0,t.remarkAEMKey,1)},function(n,l){var t=l.component;n(l,0,0,e._19(l,4).ngClassUntouched,e._19(l,4).ngClassTouched,e._19(l,4).ngClassPristine,e._19(l,4).ngClassDirty,e._19(l,4).ngClassValid,e._19(l,4).ngClassInvalid,e._19(l,4).ngClassPending),n(l,22,0,t.switchOn),n(l,54,0,!t.noneEnabledHighlight)})}function w(n){return e._29(0,[e._25(671088640,1,{formRef:0}),(n()(),e._5(1,0,null,null,8,"div",[["class","body-wrap bg_white scroll"]],null,null,null,null,null)),(n()(),e._27(-1,null,["\n    "])),(n()(),e._5(3,0,null,null,4,"div",[["class","main_container"]],null,null,null,null,null)),(n()(),e._27(-1,null,["\n        "])),(n()(),e._0(16777216,null,null,1,null,E)),e._4(6,16384,null,0,i.m,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(n()(),e._27(-1,null,["\n    "])),(n()(),e._27(-1,null,["\n    "])),(n()(),e._27(-1,null,["\n"])),(n()(),e._27(-1,null,["\n"]))],function(n,l){var t=l.component;n(l,6,0,t.formClazz&&t.formClazz.form)},null)}var S=e._1("twrbm-notice-ag013-010",b,function(n){return e._29(0,[(n()(),e._5(0,0,null,null,1,"twrbm-notice-ag013-010",[],null,null,null,w,m)),e._4(1,4440064,null,0,b,[],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),C=t("TvUf"),k=t("4SdM"),O=t("UtI1"),N=t("v7k6"),B=t("Xb6M"),A=t("3glH"),P=t("UHIZ"),F=function(){};t.d(l,"TWRBMNoticeAG013ModuleNgFactory",function(){return L});var L=e._2(u,[],function(n){return e._16([e._17(512,e.j,e.X,[[8,[S]],[3,e.j],e.v]),e._17(4608,i.o,i.n,[e.s,[2,i.x]]),e._17(4608,o.B,o.B,[]),e._17(4608,o.g,o.g,[]),e._17(512,i.b,i.b,[]),e._17(512,o.y,o.y,[]),e._17(512,o.l,o.l,[]),e._17(512,o.w,o.w,[]),e._17(512,C.a,C.a,[]),e._17(512,k.a,k.a,[]),e._17(512,O.a,O.a,[]),e._17(512,N.a,N.a,[]),e._17(512,B.a,B.a,[]),e._17(512,A.a,A.a,[]),e._17(512,P.l,P.l,[[2,P.q],[2,P.k]]),e._17(512,F,F,[]),e._17(512,u,u,[]),e._17(1024,P.i,function(){return[[{path:"",redirectTo:"010",pathMatch:"full"},{path:"010",component:b}]]},[])])})}});