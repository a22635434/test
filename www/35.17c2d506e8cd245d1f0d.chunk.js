webpackJsonp([35],{"0Wz/":function(l,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=i("LMZF"),u=function(){},e=i("wywC"),a=i("PGCm"),s=i("AMGi"),o=i("NDpq"),c=i("0nO6"),r=i("Un6q"),g=i("xllO"),h=i("I4HG"),_=i("6Xbx"),d=function(l){function n(){var n=null!==l&&l.apply(this,arguments)||this;return n.hasInit=!1,n.notice={isNoticeFlagOn:!1,isEmailFlagOn:!1,isLineFlagOn:!1,isPushFlagOn:!1,isCardBonusFlagOn:!1,hasLine:!1,init:function(l,n,i,t,u){this.isEmailFlagOn=l,this.isLineFlagOn=n,this.isPushFlagOn=i,this.isCardBonusFlagOn=t,this.hasLine=u,this.assertNoticeFlagOn()},assertNoticeFlagOn:function(){this.isNoticeFlagOn=this.isEmailFlagOn||this.isPushFlagOn||this.isLineFlagOn||this.isCardBonusFlagOn},turnOnEmailFlag:function(){this.isEmailFlagOn=!0},turnOffEmailFlag:function(){this.isEmailFlagOn=!1},turnOnLineFlag:function(){this.isLineFlagOn=!0},turnOffLineFlag:function(){this.isLineFlagOn=!1},turnOnPushFlag:function(){this.isPushFlagOn=!0},turnOffPushFlag:function(){this.isPushFlagOn=!1},turnOnCardBonusFlag:function(){this.isCardBonusFlagOn=!0},turnOffCardBonusFlag:function(){this.isCardBonusFlagOn=!1},turnOnNoticeFlag:function(){this.turnOnEmailFlag(),this.turnOnPushFlag(),this.turnOffLineFlag(),this.turnOffCardBonusFlag(),this.assertNoticeFlagOn()},turnOffNoticeFlag:function(){this.turnOffEmailFlag(),this.turnOffPushFlag(),this.turnOffLineFlag(),this.turnOffCardBonusFlag(),this.assertNoticeFlagOn()}},n.orgNotice={isEmailFlagOn:!1,isLineFlagOn:!1,isPushFlagOn:!1,isCardBonusFlagOn:!1,hasLine:!1,init:function(l,n,i,t,u){this.isEmailFlagOn=l,this.isLineFlagOn=n,this.isPushFlagOn=i,this.isCardBonusFlagOn=t,this.hasLine=u,this.assertNoticeFlagOn()},assertNoticeFlagOn:function(){this.isNoticeFlagOn=this.isEmailFlagOn||this.isPushFlagOn||this.isLineFlagOn||this.isCardBonusFlagOn}},n.checkDisabledSave=function(){return n.notice.isNoticeFlagOn===n.orgNotice.isNoticeFlagOn&&!n.orgNotice.isNoticeFlagOn},n}return Object(_.__extends)(n,l),n.prototype.init=function(n){var i=this;l.prototype.changePageTitle.call(this,getBundleString("\u7d05\u5229\u9ede\u6578\u5230\u671f\u901a\u77e5","notice_ag015.00004206")),this.changedCount=0,this.disabledSave=!1,this.hasInit=!1,this.warningMsg="",setTimeout(function(){l.prototype.showLoader.call(i),l.prototype.sendAndReceiveAsync.call(i,"/twrbm-notice/ag015/010",{}).then(function(){return i.preparedPrepageData()},function(n){return l.prototype.handleResponseError.call(i,n)})},500)},n.prototype.preparedPrepageData=function(){var n=this,i=!0,t=l.prototype.getSharedService.call(this).getNoticeItemsCfg();if(t){if(t.status&&t.status.ag015&&t.status.ag015.desc)return void l.prototype.handleResponseError.call(this,t.status.ag015);if(t.cardBill&&t.cardBill.ag015)return void this.initialValues(t.cardBill.ag015)}l.prototype.getEventService.call(this).getNoticeItemCfgSubject().subscribe(function(u){i=!1,(t=u).status&&t.status.ag015&&t.status.ag015.desc?l.prototype.handleResponseError.call(n,t.status.ag015):t.cardBill&&t.cardBill.ag015?n.initialValues(t.cardBill.ag015):n.getNoticeItem()},function(i){l.prototype.error.call(n,"inner error",i)},function(){if(l.prototype.getEventService.call(n).getNoticeItemCfgSubject())try{l.prototype.getEventService.call(n).getNoticeItemCfgSubject().unsubscribe()}catch(i){l.prototype.error.call(n,i)}}),i&&this.getNoticeItem()},n.prototype.getNoticeItem=function(){var n=this;l.prototype.sendAndReceiveAsync.call(this,"/twrbm-notice/ag001/011",{noticeItem:"ag015"}).then(function(l){n.initialValues(l)},function(i){return l.prototype.handleResponseError.call(n,i)})},n.prototype.initialValues=function(n){var i=this;this.orgNotice.init("1"===n.emailFlag,"1"===n.lineFlag,"1"===n.pushFlag,"1"===n.cardBonusFlag,"1"===n.haveLineFlag),this.notice.init("1"===n.emailFlag,"1"===n.lineFlag,"1"===n.pushFlag,"1"===n.cardBonusFlag,"1"===n.haveLineFlag),setTimeout(function(){i.hasInit=!0,i.disabledSave=i.checkDisabledSave(),l.prototype.hideLoader.call(i)},500)},n.prototype.chgNoticeFlag=function(){this.notice.isNoticeFlagOn?this.notice.turnOnNoticeFlag():this.notice.turnOffNoticeFlag(),this.notice.assertNoticeFlagOn(),this.disabledSave=!1,this.warningMsg=""},n.prototype.chgEmailFlag=function(){this.notice.isEmailFlagOn?this.notice.turnOffEmailFlag():this.notice.turnOnEmailFlag(),this.warningMsg=""},n.prototype.chgPushFlag=function(){this.notice.isPushFlagOn?this.notice.turnOffPushFlag():this.notice.turnOnPushFlag(),this.warningMsg=""},n.prototype.chgLineFlag=function(){var n=this;this.notice.isLineFlagOn?this.notice.turnOffLineFlag():this.notice.hasLine?this.notice.turnOnLineFlag():l.prototype.showConfirm.call(this,getBundleString("\u60a8\u7684\u88dd\u7f6e\u5c1a\u672a\u7d81\u5b9aLine\uff0c\u662f\u5426\u8981\u7acb\u5373\u7d81\u5b9a\uff1f","notice_ag015.00002457"),function(l){n.goBindLine(),l()},function(l){n.notice.turnOffLineFlag(),l()},getBundleString("\u78ba\u8a8d\u8a0a\u606f","notice_ag015.00004049"),getBundleString("\u7acb\u5373\u7d81\u5b9a","notice_ag015.00004102")),this.warningMsg=""},n.prototype.goBindLine=function(){var n=this,i=l.prototype.getSharedService.call(this).getLineURL();l.prototype.getUtils.call(this).openExtUrl(i,getBundleString("\u524d\u5f80Line\u7d81\u5b9a\u6d41\u7a0b","notice_ag015.00001293")).then(function(){return l.prototype.changeTxn.call(n,"/twrbm-notice/ag001/010",{})},function(i){return l.prototype.error.call(n,i)})},n.prototype.chgCardBonusFlag=function(){var n=this;this.notice.isCardBonusFlagOn?this.notice.turnOffCardBonusFlag():l.prototype.getUtils.call(this).isMCardAppInstalled(function(){n.notice.turnOnCardBonusFlag()},function(){l.prototype.showConfirm.call(n,getBundleString("\u60a8\u7684\u88dd\u7f6e\u5c1a\u672a\u5b89\u88dd\u4e2d\u4fe1\u5361\u512a\u60e0APP\uff0c\u8acb\u554f\u60a8\u662f\u5426\u8981\u958b\u555f\u901a\u77e5\uff1f","notice_ag015.00002449"),function(l){n.notice.turnOnCardBonusFlag(),l()},function(l){n.notice.turnOffCardBonusFlag(),l()})}),this.warningMsg=""},n.prototype.save=function(){var n=this;if(!this.notice.isNoticeFlagOn||this.notice.isEmailFlagOn||this.notice.isPushFlagOn||this.notice.isLineFlagOn||this.notice.isCardBonusFlagOn){var i={isEmailFlagChanged:this.notice.isEmailFlagOn!==this.orgNotice.isEmailFlagOn,isEmailFlagOn:this.notice.isEmailFlagOn,isPushFlagChange:this.notice.isPushFlagOn!==this.orgNotice.isPushFlagOn,isPushFlagOn:this.notice.isPushFlagOn,isLineFlagChange:this.notice.isLineFlagOn!==this.orgNotice.isLineFlagOn,isLineFlagOn:this.notice.isLineFlagOn,isCardBonusFlagChange:this.notice.isCardBonusFlagOn!==this.orgNotice.isCardBonusFlagOn,isCardBonusFlagOn:this.notice.isCardBonusFlagOn};this.unchangedChecking()?l.prototype.showAlert.call(this,getBundleString("\u60a8\u672a\u7570\u52d5\u4efb\u4f55\u8a2d\u5b9a\uff0c\u8acb\u518d\u6b21\u78ba\u8a8d","notice_ag015.00002409"),null,null,getBundleString("\u6211\u77e5\u9053\u4e86","notice_ag015.00002562")):this.notice.isNoticeFlagOn?l.prototype.showConfirm.call(this,getBundleString("\u7d05\u5229\u9ede\u6578\u5230\u671f\u901a\u77e5\u5c07\u900f\u904e","notice_ag015.00004208")+this.showNoticeMessage(this.notice)+getBundleString("\u901a\u77e5\u60a8\uff0c\u8acb\u78ba\u8a8d\u662f\u5426\u8981\u9032\u884c\u672c\u6b21\u8a2d\u5b9a\uff1f","notice_ag015.00005774"),function(l){n.doSave(i),l()}):this.doSave(i)}else this.warningMsg=getBundleString("\u8acb\u81f3\u5c11\u9078\u64c7\u4e00\u500b\u7ba1\u9053","notice_ag015.00004952")},n.prototype.showNoticeMessage=function(l){var n=[];return l.isEmailFlagOn&&n.push("Email"),l.isPushFlagOn&&n.push(getBundleString("\u624b\u6a5f\u63a8\u64ad","notice_ag015.00002618")),l.isLineFlagOn&&n.push("LINE"),l.isCardBonusFlagOn&&n.push(getBundleString("\u4e2d\u4fe1\u5361\u512a\u60e0","notice_ag015.00000657")),n.join("\u3001")},n.prototype.doSave=function(n){var i=this;this.showLoader(),l.prototype.sendAndReceiveAsync.call(this,"/twrbm-notice/ag015/011",n).then(function(n){l.prototype.getSharedService.call(i).clearNoticeItemsCfg(),i.orgNotice.init(i.notice.isEmailFlagOn,i.notice.isLineFlagOn,i.notice.isPushFlagOn,i.notice.isCardBonusFlagOn),i.changedCount++,i.disabledSave=i.checkDisabledSave(),i.hideLoader(),l.prototype.showToast.call(i,getBundleString("\u8a2d\u5b9a\u6210\u529f","notice_ag015.00004704"))},function(n){return l.prototype.handleResponseError.call(i,n)})},n.prototype.pageBack=function(){var n=this,i=this.changedCount>0?{chgType:"cardBill",key:"ag015"}:{};this.unchangedChecking()?l.prototype.previousPage.call(this,1,!1,i):l.prototype.showConfirm.call(this,getBundleString("\u60a8\u5c1a\u672a\u5132\u5b58\u6b64\u6b21\u8a2d\u5b9a\uff0c\u78ba\u5b9a\u8981\u53d6\u6d88\u8a2d\u5b9a\uff1f","notice_ag015.00002314"),function(t){l.prototype.previousPage.call(n,1,!1,i),t()},function(l){l()})},n.prototype.pageReuse=function(){this.init({})},n.prototype.unchangedChecking=function(){return this.notice.isEmailFlagOn===this.orgNotice.isEmailFlagOn&&this.notice.isPushFlagOn===this.orgNotice.isPushFlagOn&&this.notice.isLineFlagOn===this.orgNotice.isLineFlagOn&&this.notice.isCardBonusFlagOn===this.orgNotice.isCardBonusFlagOn},n.prototype.doClick=function(n,i,t){var u=this;l.prototype.preventEvent.call(this,n,function(){u[i](t)})},n.prototype.ignoreInitHideLoader=function(){return!0},n}(i("rM26").a),p=t._3({encapsulation:0,styles:[["a.disabled[_ngcontent-%COMP%]{cursor:not-allowed;pointer-events:none}"]],data:{}});function F(l){return t._29(0,[(l()(),t._5(0,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                                "])),(l()(),t._5(2,0,null,null,0,"div",[],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                            "]))],null,null)}function f(l){return t._29(0,[(l()(),t._5(0,0,null,null,134,"div",[["class","body-wrap scroll white"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n    "])),(l()(),t._5(2,0,null,null,130,"div",[["class","main_container"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n        "])),(l()(),t._27(-1,null,["\n        "])),(l()(),t._27(-1,null,["\n        "])),(l()(),t._5(6,0,null,null,102,"ul",[["class","card-list reduse"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n            "])),(l()(),t._5(8,0,null,null,26,"li",[],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                "])),(l()(),t._5(10,0,null,null,23,"div",[["class","div-tb"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                    "])),(l()(),t._5(12,0,null,null,4,"div",[["class","td vmid wid_80per"]],null,null,null,null,null)),(l()(),t._5(13,0,null,null,3,"i18n",[["translate","notice_ag015.00005802"]],null,null,null,e.b,e.a)),t._4(14,81920,null,0,a.a,[t.k,s.b],{bundleKey:[0,"bundleKey"]},null),t._4(15,114688,null,0,o.a,[],null,null),(l()(),t._27(-1,null,["\u901a\u77e5\u8a2d\u5b9a"])),(l()(),t._27(-1,null,["\n                    "])),(l()(),t._5(18,0,null,null,14,"div",[["class","td rt"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                        "])),(l()(),t._5(20,0,null,null,11,"label",[["for","ios_btn"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(22,0,null,null,5,"input",[["class","ios-switch bigswitch"],["id","ios_btn"],["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,i){var u=!0,e=l.component;return"change"===n&&(u=!1!==t._19(l,23).onChange(i.target.checked)&&u),"blur"===n&&(u=!1!==t._19(l,23).onTouched()&&u),"ngModelChange"===n&&(u=!1!==(e.notice.isNoticeFlagOn=i)&&u),"change"===n&&(u=!1!==e.chgNoticeFlag()&&u),u},null,null)),t._4(23,16384,null,0,c.b,[t.C,t.k],null,null),t._24(1024,null,c.o,function(l){return[l]},[c.b]),t._4(25,671744,null,0,c.t,[[8,null],[8,null],[8,null],[2,c.o]],{model:[0,"model"]},{update:"ngModelChange"}),t._24(2048,null,c.p,null,[c.t]),t._4(27,16384,null,0,c.q,[c.p],null,null),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._0(16777216,null,null,1,null,F)),t._4(30,16384,null,0,r.m,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t._27(-1,null,["\n                        "])),(l()(),t._27(-1,null,["\n\n                    "])),(l()(),t._27(-1,null,["\n                "])),(l()(),t._27(-1,null,["\n            "])),(l()(),t._27(-1,null,["\n            "])),(l()(),t._5(36,0,null,null,71,"li",[],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                "])),(l()(),t._5(38,0,null,null,60,"div",[["class","div-tb"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                    "])),(l()(),t._5(40,0,null,null,7,"div",[["class","td vmid wid_40per"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                        "])),(l()(),t._5(42,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),t._5(43,0,null,null,3,"i18n",[["translate","notice_ag015.00005784"]],null,null,null,e.b,e.a)),t._4(44,81920,null,0,a.a,[t.k,s.b],{bundleKey:[0,"bundleKey"]},null),t._4(45,114688,null,0,o.a,[],null,null),(l()(),t._27(-1,null,["\u901a\u77e5\u7ba1\u9053"])),(l()(),t._27(-1,null,["\n                    "])),(l()(),t._27(-1,null,["\n                    "])),(l()(),t._5(49,0,null,null,48,"div",[["class","td rt vmid"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                        "])),(l()(),t._5(51,0,null,null,45,"ul",[["class","foot-link for-list pull-right"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(53,0,null,null,5,"li",[["class","word"]],null,null,null,null,null)),(l()(),t._5(54,0,null,null,3,"a",[],null,[[null,"click"]],function(l,n,i){var t=!0;return"click"===n&&(t=!1!==l.component.doClick(i,"chgEmailFlag")&&t),t},null,null)),t._4(55,278528,null,0,r.k,[t.q,t.r,t.k,t.C],{ngClass:[0,"ngClass"]},null),t._22(56,{active:0,disabled:1}),(l()(),t._27(-1,null,["Email"])),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(60,0,null,null,5,"li",[["class","word"]],null,null,null,null,null)),(l()(),t._5(61,0,null,null,3,"a",[],null,[[null,"click"]],function(l,n,i){var t=!0;return"click"===n&&(t=!1!==l.component.doClick(i,"chgLineFlag")&&t),t},null,null)),t._4(62,278528,null,0,r.k,[t.q,t.r,t.k,t.C],{ngClass:[0,"ngClass"]},null),t._22(63,{active:0,disabled:1}),(l()(),t._27(-1,null,["LINE"])),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(67,0,null,null,13,"li",[["class","word"]],null,null,null,null,null)),(l()(),t._5(68,0,null,null,11,"a",[],null,[[null,"click"]],function(l,n,i){var t=!0;return"click"===n&&(t=!1!==l.component.doClick(i,"chgPushFlag")&&t),t},null,null)),t._4(69,278528,null,0,r.k,[t.q,t.r,t.k,t.C],{ngClass:[0,"ngClass"]},null),t._22(70,{active:0,disabled:1}),(l()(),t._5(71,0,null,null,3,"i18n",[["translate","notice_ag015.00002608"]],null,null,null,e.b,e.a)),t._4(72,81920,null,0,a.a,[t.k,s.b],{bundleKey:[0,"bundleKey"]},null),t._4(73,114688,null,0,o.a,[],null,null),(l()(),t._27(-1,null,["\u624b\u6a5f"])),(l()(),t._5(75,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t._5(76,0,null,null,3,"i18n",[["translate","notice_ag015.00002887"]],null,null,null,e.b,e.a)),t._4(77,81920,null,0,a.a,[t.k,s.b],{bundleKey:[0,"bundleKey"]},null),t._4(78,114688,null,0,o.a,[],null,null),(l()(),t._27(-1,null,["\u63a8\u64ad"])),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(82,0,null,null,13,"li",[["class","word"]],null,null,null,null,null)),(l()(),t._5(83,0,null,null,11,"a",[],null,[[null,"click"]],function(l,n,i){var t=!0;return"click"===n&&(t=!1!==l.component.doClick(i,"chgCardBonusFlag")&&t),t},null,null)),t._4(84,278528,null,0,r.k,[t.q,t.r,t.k,t.C],{ngClass:[0,"ngClass"]},null),t._22(85,{active:0,disabled:1}),(l()(),t._5(86,0,null,null,3,"i18n",[["translate","notice_ag015.00000649"]],null,null,null,e.b,e.a)),t._4(87,81920,null,0,a.a,[t.k,s.b],{bundleKey:[0,"bundleKey"]},null),t._4(88,114688,null,0,o.a,[],null,null),(l()(),t._27(-1,null,["\u4e2d\u4fe1"])),(l()(),t._5(90,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t._5(91,0,null,null,3,"i18n",[["translate","notice_ag015.00001356"]],null,null,null,e.b,e.a)),t._4(92,81920,null,0,a.a,[t.k,s.b],{bundleKey:[0,"bundleKey"]},null),t._4(93,114688,null,0,o.a,[],null,null),(l()(),t._27(-1,null,["\u5361\u512a\u60e0"])),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._27(-1,null,["\n                        "])),(l()(),t._27(-1,null,["\n                    "])),(l()(),t._27(-1,null,["\n                "])),(l()(),t._27(-1,null,["\n                "])),(l()(),t._5(100,0,null,null,6,"div",[["class","form_group"]],null,null,null,null,null)),t._4(101,278528,null,0,r.k,[t.q,t.r,t.k,t.C],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t._22(102,{hide:0}),(l()(),t._27(-1,null,["\n                    "])),(l()(),t._5(104,0,null,null,1,"div",[["class","form_error"]],null,null,null,null,null)),(l()(),t._27(105,null,["",""])),(l()(),t._27(-1,null,["\n                "])),(l()(),t._27(-1,null,["\n            "])),(l()(),t._27(-1,null,["\n        "])),(l()(),t._27(-1,null,["\n        "])),(l()(),t._27(-1,null,["\n\n        "])),(l()(),t._5(111,0,null,null,20,"div",[["class","container"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n            "])),(l()(),t._5(113,0,null,null,0,"div",[["class","clearfix mb30"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n            "])),(l()(),t._5(115,0,null,null,10,"div",[["class","btn_group"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                "])),(l()(),t._5(117,0,null,null,6,"a",[["class","btn btn-block btn-success"],["data-toggle","modal"],["href",".modal-notice"]],null,[[null,"click"]],function(l,n,i){var t=!0;return"click"===n&&(t=!1!==l.component.doClick(i,"save")&&t),t},null,null)),t._4(118,278528,null,0,r.k,[t.q,t.r,t.k,t.C],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t._22(119,{disabled:0}),(l()(),t._5(120,0,null,null,3,"i18n",[["translate","notice_ag015.00001093"]],null,null,null,e.b,e.a)),t._4(121,81920,null,0,a.a,[t.k,s.b],{bundleKey:[0,"bundleKey"]},null),t._4(122,114688,null,0,o.a,[],null,null),(l()(),t._27(-1,null,["\u5132\u5b58\u8a2d\u5b9a"])),(l()(),t._27(-1,null,["\n                "])),(l()(),t._27(-1,null,["\n            "])),(l()(),t._27(-1,null,["\n            "])),(l()(),t._5(127,0,null,null,0,"div",[["class","clearfix mb20"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n            "])),(l()(),t._5(129,0,null,null,1,"memo-remarks",[],null,null,null,g.b,g.a)),t._4(130,4964352,null,0,h.a,[],{key:[0,"key"],format:[1,"format"]},null),(l()(),t._27(-1,null,["\n        "])),(l()(),t._27(-1,null,["\n    "])),(l()(),t._27(-1,null,["\n    "])),(l()(),t._27(-1,null,["\n\n"])),(l()(),t._27(-1,null,["\n"])),(l()(),t._27(-1,null,["\n"]))],function(l,n){var i=n.component;l(n,14,0,"notice_ag015.00005802"),l(n,15,0),l(n,25,0,i.notice.isNoticeFlagOn),l(n,30,0,i.hasInit),l(n,44,0,"notice_ag015.00005784"),l(n,45,0),l(n,55,0,l(n,56,0,i.notice.isEmailFlagOn,!i.notice.isNoticeFlagOn)),l(n,62,0,l(n,63,0,i.notice.isLineFlagOn,!i.notice.isNoticeFlagOn)),l(n,69,0,l(n,70,0,i.notice.isPushFlagOn,!i.notice.isNoticeFlagOn)),l(n,72,0,"notice_ag015.00002608"),l(n,73,0),l(n,77,0,"notice_ag015.00002887"),l(n,78,0),l(n,84,0,l(n,85,0,i.notice.isCardBonusFlagOn,!i.notice.isNoticeFlagOn)),l(n,87,0,"notice_ag015.00000649"),l(n,88,0),l(n,92,0,"notice_ag015.00001356"),l(n,93,0),l(n,101,0,"form_group",l(n,102,0,""===i.warningMsg)),l(n,118,0,"btn btn-block btn-success",l(n,119,0,i.disabledSave)),l(n,121,0,"notice_ag015.00001093"),l(n,122,0),l(n,130,0,"TWRBMNoticeAG015_memo",1)},function(l,n){var i=n.component;l(n,22,0,t._19(n,27).ngClassUntouched,t._19(n,27).ngClassTouched,t._19(n,27).ngClassPristine,t._19(n,27).ngClassDirty,t._19(n,27).ngClassValid,t._19(n,27).ngClassInvalid,t._19(n,27).ngClassPending),l(n,105,0,i.warningMsg)})}var O=t._1("twrbm-notice-ag015-010",d,function(l){return t._29(0,[(l()(),t._5(0,0,null,null,1,"twrbm-notice-ag015-010",[],null,null,null,f,p)),t._4(1,4440064,null,0,d,[],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),v=i("TvUf"),C=i("4SdM"),b=i("UtI1"),m=i("v7k6"),y=i("Xb6M"),B=i("3glH"),k=i("UHIZ"),N=function(){};i.d(n,"TWRBMNOTICEAG015ModuleNgFactory",function(){return L});var L=t._2(u,[],function(l){return t._16([t._17(512,t.j,t.X,[[8,[O]],[3,t.j],t.v]),t._17(4608,r.o,r.n,[t.s,[2,r.x]]),t._17(4608,c.B,c.B,[]),t._17(4608,c.g,c.g,[]),t._17(512,r.b,r.b,[]),t._17(512,c.y,c.y,[]),t._17(512,c.l,c.l,[]),t._17(512,c.w,c.w,[]),t._17(512,v.a,v.a,[]),t._17(512,C.a,C.a,[]),t._17(512,b.a,b.a,[]),t._17(512,m.a,m.a,[]),t._17(512,y.a,y.a,[]),t._17(512,B.a,B.a,[]),t._17(512,k.l,k.l,[[2,k.q],[2,k.k]]),t._17(512,N,N,[]),t._17(512,u,u,[]),t._17(1024,k.i,function(){return[[{path:"",redirectTo:"010",pathMatch:"full"},{path:"010",component:d}]]},[])])})}});