webpackJsonp([62],{Bcs9:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=u("LMZF"),_=function(){},e=u("wywC"),i=u("PGCm"),d=u("AMGi"),a=u("NDpq"),s=u("Un6q"),r=u("6Xbx"),c=u("rM26"),o=this&&this.__assign||Object.assign||function(l){for(var n,u=1,t=arguments.length;u<t;u++)for(var _ in n=arguments[u])Object.prototype.hasOwnProperty.call(n,_)&&(l[_]=n[_]);return l},p=function(l){function n(){var n=null!==l&&l.apply(this,arguments)||this;return n.statusName={0:getBundleString("\u90e8\u5206","mf_qu004.00005884"),1:getBundleString("\u5168\u90e8","mf_qu004.00001156")},n.tranTypeName={2:getBundleString("\u8d16\u56de","mf_qu004.00005492"),3:getBundleString("\u8f49\u63db","mf_qu004.00005707"),4:getBundleString("\u8d16\u56de","mf_qu004.00005492")},n}return Object(r.__extends)(n,l),n.prototype.prodStatusDesc=function(l){var n=this.statusName[l.status]||"",u=this.tranTypeName[l.tranType]||"";return""==n||""==u?"":n+u},n.prototype.init=function(l){var n=this;this.prodList=(l.prodList||[]).map(function(l){return o({},l,{statusDesc:n.prodStatusDesc(l)})})},n.prototype.toDetail=function(n,u){var t=this;l.prototype.preventEvent.call(this,n,function(){l.prototype.nextPage.call(t,"/twrbm-mf/qu004/020",{prod:t.prodList[u]},!1)})},n}(c.a),v=t._3({encapsulation:0,styles:[[""]],data:{}});function m(l){return t._29(0,[(l()(),t._5(0,0,null,null,37,"li",[],null,null,null,null,null)),(l()(),t._27(-1,null,["\n\t\t\t\t"])),(l()(),t._5(2,0,null,null,34,"a",[["class","arrow-up"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toDetail(u,l.context.index)&&t),t},null,null)),(l()(),t._27(-1,null,["\n\t\t\t\t\t"])),(l()(),t._5(4,0,null,null,7,"div",[["class","div-tb"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n\t\t\t\t\t\t"])),(l()(),t._5(6,0,null,null,1,"div",[["class","td"]],null,null,null,null,null)),(l()(),t._27(7,null,["",""])),(l()(),t._27(-1,null,["\n\t\t\t\t\t\t"])),(l()(),t._5(9,0,null,null,1,"div",[["class","td wid_15px"]],null,null,null,null,null)),(l()(),t._27(-1,null,[" "])),(l()(),t._27(-1,null,["\n\t\t\t\t\t"])),(l()(),t._27(-1,null,["\n\t\t\t\t\t"])),(l()(),t._5(13,0,null,null,10,"div",[["class","div-tb"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n\t\t\t\t\t\t"])),(l()(),t._5(15,0,null,null,1,"div",[["class","td"]],null,null,null,null,null)),(l()(),t._27(16,null,["",""])),(l()(),t._27(-1,null,["\n\t\t\t\t\t\t"])),(l()(),t._5(18,0,null,null,1,"div",[["class","td rt"]],null,null,null,null,null)),(l()(),t._27(19,null,["",""])),(l()(),t._27(-1,null,["\n\t\t\t\t\t\t"])),(l()(),t._5(21,0,null,null,1,"div",[["class","td wid_15px"]],null,null,null,null,null)),(l()(),t._27(-1,null,[" "])),(l()(),t._27(-1,null,["\n\t\t\t\t\t"])),(l()(),t._27(-1,null,["\n\t\t\t\t\t"])),(l()(),t._5(25,0,null,null,10,"div",[["class","div-tb"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n\t\t\t\t\t\t"])),(l()(),t._5(27,0,null,null,1,"div",[["class","td"]],null,null,null,null,null)),(l()(),t._27(28,null,["",""])),(l()(),t._27(-1,null,["\n\t\t\t\t\t\t"])),(l()(),t._5(30,0,null,null,1,"div",[["class","td rt"]],null,null,null,null,null)),(l()(),t._27(31,null,["",""])),(l()(),t._27(-1,null,["\n\t\t\t\t\t\t"])),(l()(),t._5(33,0,null,null,1,"div",[["class","td wid_15px"]],null,null,null,null,null)),(l()(),t._27(-1,null,[" "])),(l()(),t._27(-1,null,["\n\t\t\t\t\t"])),(l()(),t._27(-1,null,["\n\t\t\t\t"])),(l()(),t._27(-1,null,["\n\t\t\t"]))],null,function(l,n){l(n,7,0,n.context.$implicit.prodCName),l(n,16,0,n.context.$implicit.prodId+"-"+n.context.$implicit.prodSeq),l(n,19,0,n.context.$implicit.statusDesc),l(n,28,0,n.context.$implicit.tranDt),l(n,31,0,n.context.$implicit.buyAmt)})}function b(l){return t._29(0,[(l()(),t._5(0,0,null,null,32,"div",[["class","body-wrap bg_white scroll"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n    "])),(l()(),t._5(2,0,null,null,28,"div",[["class","main_container"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n        "])),(l()(),t._5(4,0,null,null,25,"ul",[["class","card-list reduse"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n            "])),(l()(),t._5(6,0,null,null,19,"li",[["class","title"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                "])),(l()(),t._5(8,0,null,null,16,"div",[["class","div-tb"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                    "])),(l()(),t._5(10,0,null,null,4,"div",[["class","td"]],null,null,null,null,null)),(l()(),t._5(11,0,null,null,3,"i18n",[["translate","mf_qu004.00000069"]],null,null,null,e.b,e.a)),t._4(12,81920,null,0,i.a,[t.k,d.b],{bundleKey:[0,"bundleKey"]},null),t._4(13,114688,null,0,a.a,[],null,null),(l()(),t._27(-1,null,[" \u7533\u8acb\u65e5\u671f "])),(l()(),t._27(-1,null,["\n                    "])),(l()(),t._5(16,0,null,null,4,"div",[["class","td rt"]],null,null,null,null,null)),(l()(),t._5(17,0,null,null,3,"i18n",[["translate","mf_qu004.00001397"]],null,null,null,e.b,e.a)),t._4(18,81920,null,0,i.a,[t.k,d.b],{bundleKey:[0,"bundleKey"]},null),t._4(19,114688,null,0,a.a,[],null,null),(l()(),t._27(-1,null,["\u539f\u59cb\u6295\u8cc7\u91d1\u984d"])),(l()(),t._27(-1,null,["\n\t\t\t\t\t"])),(l()(),t._5(22,0,null,null,1,"div",[["class","td wid_15px"]],null,null,null,null,null)),(l()(),t._27(-1,null,[" "])),(l()(),t._27(-1,null,["\n\t\t\t\t"])),(l()(),t._27(-1,null,["\n\t\t\t"])),(l()(),t._27(-1,null,["\n\t\t\t\n            "])),(l()(),t._0(16777216,null,null,1,null,m)),t._4(28,802816,null,0,s.l,[t.N,t.K,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t._27(-1,null,["\n            \n        "])),(l()(),t._27(-1,null,["\n\t"])),(l()(),t._27(-1,null,["\n\t"])),(l()(),t._27(-1,null,["\n"])),(l()(),t._27(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,12,0,"mf_qu004.00000069"),l(n,13,0),l(n,18,0,"mf_qu004.00001397"),l(n,19,0),l(n,28,0,u.prodList)},null)}var f=t._1("twrbm-mf-qu004-010",p,function(l){return t._29(0,[(l()(),t._5(0,0,null,null,1,"twrbm-mf-qu004-010",[],null,null,null,b,v)),t._4(1,4440064,null,0,p,[],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),y=u("1exV"),g=u("O3G8"),q=u("xllO"),h=u("I4HG"),x=u("E+l/"),w=function(l){function n(){var n=null!==l&&l.apply(this,arguments)||this;return n.statusName={0:getBundleString("\u90e8\u5206","mf_qu004.00005884"),1:getBundleString("\u5168\u90e8","mf_qu004.00001156")},n.tranTypeName={2:getBundleString("\u8d16\u56de","mf_qu004.00005492"),3:getBundleString("\u8f49\u63db","mf_qu004.00005707"),4:getBundleString("\u8d16\u56de","mf_qu004.00005492")},n.prod={},n.detailList=[],n.years=[],n.yearDetailList=[],n}return Object(r.__extends)(n,l),n.prototype.init=function(l){this.prod=l.prod||{}},n.prototype.getProdDetail=function(n){var u=this;l.prototype.sendAndReceiveAsync.call(this,"/twrbm-mf/qu004/011",{prodCode:this.prod.prodId,prodSeq:this.prod.prodSeq}).then(function(l){u.yearDetailList=l.acctDtlsOfYear||[],n()},function(l){return n(l)})},n.prototype.prodTypeDesc=function(){var l=this.prod.invType||"",n=this.prod.joinType||"";if("01"==l||"04"==l)return getBundleString("\u55ae\u7b46","mf_qu004.00001708");if("06"==l||"08"==l)return getBundleString("\u5916\u55ae","mf_qu004.00001847");var u="";return"2"==n?u+="\u25b2":"3"==n?u+="\u25cf":"4"==n&&(u+="\u25cf\u25b2"),"02"==l||"05"==l?u+=getBundleString("\u5c0f\u984d","mf_qu004.00002036"):"07"!=l&&"09"!=l||(u+=getBundleString("\u5916\u5c0f\u984d","mf_qu004.00001850")),u.substr(0,3)},n.prototype.investAmt=function(l){return"1"===l.tranType||"3"===l.tranType||"4"===l.tranType?l.tolAmt:"2"===l.tranType||"5"===l.tranType&&"1"===l.dividendType||"5"===l.tranType&&"2"===l.dividendType?l.pmtAmt:"-"},n.prototype.refIncomeAmt=function(){return"3"===(this.prod.tranType||"")?"":this.prod.refIncomeAmt},n.prototype.refIncomeRate=function(){return"3"!==(this.prod.tranType||"")&&x.a.isNotNullOrNotEmptyObject(this.prod.refIncomeRate)?this.prod.refIncomeRate+"%":""},n.prototype.tranProdTypeDesc=function(){var l=this.prod.tranProdType||"";return"1"==l?getBundleString("\u57fa\u91d1","mf_qu004.00001790"):"2"==l?getBundleString("\u50b5\u5238","mf_qu004.00001041"):"3"==l?getBundleString("ETF/\u5883\u5916\u80a1\u7968","mf_qu004.00000448"):"-"},n.prototype.pmtNameOrMethod=function(){var l=this.prod.tranType||"",n=this.prod.pmtMethod||"",u="";return"2"==l?"1"==n?u=getBundleString("\u8f49\u5e33","mf_qu004.00005684"):"4"==n&&(u=getBundleString("\u532f\u6b3e","mf_qu004.00001334")):"3"!=l&&"4"!=l||(u=this.prod.tranProdCName),u},n.prototype.tranProdNumber=function(){var l=this.prod.tranType||"";return"2"==l?this.prod.redeemBank+("1"==this.prod.pmtMethod||"4"==this.prod.pmtMethod?"<br>":"")+"-"+this.prod.redeemAcctId:"3"==l||"4"==l?this.prod.tranProdId+"-"+this.prod.tranProdSeq:""},n.prototype.detailDt=function(l){var n=l.tranDt||"";return n.substr(4,2)+"/"+n.substr(6,2)},n.prototype.detailTypeDesc=function(l){var n=l.tranType||"",u=l.dividendType||"";if("1"==n)return getBundleString("\u7533\u8cfc","mf_qu004.00003869");if("2"==n)return getBundleString("\u8d16\u56de","mf_qu004.00005492");if("3"==n)return getBundleString("\u8f49\u51fa","mf_qu004.00005646");if("4"==n)return getBundleString("\u8f49\u5165","mf_qu004.00005594");if("5"==n){var t="";return"1"==u?t=getBundleString("\u914d\u73fe","mf_qu004.00005891"):"2"==u&&(t=getBundleString("\u914d\u80a1","mf_qu004.00005900")),t}return""},n.prototype.toFundDetail=function(n){var u=this;l.prototype.preventEvent.call(this,n,function(){l.prototype.nextPage.call(u,"/twrbm-mf/qu002/020",{fundNo:u.prod.fundNo,localClassLipperId:u.prod.prodId,doLog:"Y"},!0)})},n}(c.a),K=t._3({encapsulation:0,styles:[[""]],data:{}});function k(l){return t._29(0,[(l()(),t._5(0,0,null,null,4,"div",[["class","div-tb"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                                "])),(l()(),t._5(2,0,null,null,1,"div",[["class","td ct"]],null,null,null,null,null)),(l()(),t._27(3,null,["",""])),(l()(),t._27(-1,null,["\n                            "]))],null,function(l,n){l(n,3,0,n.parent.context.$implicit.tranYear)})}function T(l){return t._29(0,[(l()(),t._5(0,0,null,null,12,"div",[["class","div-tb"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                                "])),(l()(),t._5(2,0,null,null,1,"div",[["class","td vmid wid_50px"]],null,null,null,null,null)),(l()(),t._27(3,null,["",""])),(l()(),t._27(-1,null,["\n                                "])),(l()(),t._5(5,0,null,null,1,"div",[["class","td vmid"]],null,null,null,null,null)),(l()(),t._27(6,null,["",""])),(l()(),t._27(-1,null,["\n                                "])),(l()(),t._5(8,0,null,null,3,"div",[["class","td rt wid_money"]],null,null,null,null,null)),(l()(),t._27(9,null,["\n                                    ","\n                                    "])),(l()(),t._5(10,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t._27(11,null,["","\n                                "])),(l()(),t._27(-1,null,["\n                            "]))],null,function(l,n){var u=n.component;l(n,3,0,n.parent.context.$implicit.tranDt),l(n,6,0,n.parent.context.$implicit.tranTypeDesc),l(n,9,0,u.investAmt(n.parent.context.$implicit)),l(n,11,0,n.parent.context.$implicit.tranUnit?n.parent.context.$implicit.tranUnit:"-")})}function B(l){return t._29(0,[(l()(),t._5(0,0,null,null,8,"li",[],null,null,null,null,null)),t._4(1,278528,null,0,s.k,[t.q,t.r,t.k,t.C],{ngClass:[0,"ngClass"]},null),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._0(16777216,null,null,1,null,k)),t._4(4,16384,null,0,s.m,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._0(16777216,null,null,1,null,T)),t._4(7,16384,null,0,s.m,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t._27(-1,null,["\n                        "]))],function(l,n){l(n,1,0,n.context.$implicit.title?"title bg_white":""),l(n,4,0,n.context.$implicit.title),l(n,7,0,!n.context.$implicit.title)},null)}function S(l){return t._29(0,[(l()(),t._5(0,0,null,null,330,"div",[["class","body-wrap white"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n    "])),(l()(),t._5(2,0,null,null,326,"div",[["class","main_container has-foot-btn"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n        "])),(l()(),t._5(4,0,null,null,59,"div",[["class","detail-block"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n            "])),(l()(),t._5(6,0,null,null,14,"div",[["class","div-tb mb10"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                "])),(l()(),t._5(8,0,null,null,8,"div",[["class","td vmid"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                    "])),(l()(),t._5(10,0,null,null,5,"ul",[["class","badge-list mt0"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                        "])),(l()(),t._27(-1,null,["\n                        "])),(l()(),t._5(13,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t._27(14,null,["",""])),(l()(),t._27(-1,null,["\n                    "])),(l()(),t._27(-1,null,["\n                "])),(l()(),t._27(-1,null,["\n                "])),(l()(),t._5(18,0,null,null,1,"div",[["class","td rt"]],null,null,null,null,null)),(l()(),t._27(19,null,["",""])),(l()(),t._27(-1,null,["\n            "])),(l()(),t._27(-1,null,["\n            "])),(l()(),t._5(22,0,null,null,4,"div",[["class","div-tb mb10"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                "])),(l()(),t._5(24,0,null,null,1,"div",[["class","td vmid"]],null,null,null,null,null)),(l()(),t._27(25,null,["",""])),(l()(),t._27(-1,null,["\n            "])),(l()(),t._27(-1,null,["\n            "])),(l()(),t._5(28,0,null,null,10,"div",[["class","div-tb mb10"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                "])),(l()(),t._5(30,0,null,null,4,"div",[["class","td vmid"]],null,null,null,null,null)),(l()(),t._5(31,0,null,null,3,"i18n",[["translate","mf_qu004.00002740"]],null,null,null,e.b,e.a)),t._4(32,81920,null,0,i.a,[t.k,d.b],{bundleKey:[0,"bundleKey"]},null),t._4(33,114688,null,0,a.a,[],null,null),(l()(),t._27(-1,null,["\u6295\u8cc7\u5e63\u5225"])),(l()(),t._27(-1,null,["\n                "])),(l()(),t._5(36,0,null,null,1,"div",[["class","td rt"]],null,null,null,null,null)),(l()(),t._27(37,null,["",""])),(l()(),t._27(-1,null,["\n            "])),(l()(),t._27(-1,null,["\n            "])),(l()(),t._5(40,0,null,null,10,"div",[["class","div-tb mb10"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                "])),(l()(),t._5(42,0,null,null,4,"div",[["class","td vmid"]],null,null,null,null,null)),(l()(),t._5(43,0,null,null,3,"i18n",[["translate","mf_qu004.00004634"]],null,null,null,e.b,e.a)),t._4(44,81920,null,0,i.a,[t.k,d.b],{bundleKey:[0,"bundleKey"]},null),t._4(45,114688,null,0,a.a,[],null,null),(l()(),t._27(-1,null,["\u8a08\u50f9\u5e63\u5225"])),(l()(),t._27(-1,null,["\n                "])),(l()(),t._5(48,0,null,null,1,"div",[["class","td rt"]],null,null,null,null,null)),(l()(),t._27(49,null,["",""])),(l()(),t._27(-1,null,["\n            "])),(l()(),t._27(-1,null,["\n            "])),(l()(),t._5(52,0,null,null,10,"div",[["class","div-tb mb10"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                "])),(l()(),t._5(54,0,null,null,4,"div",[["class","td vmid"]],null,null,null,null,null)),(l()(),t._5(55,0,null,null,3,"i18n",[["translate","mf_qu004.00003852"]],null,null,null,e.b,e.a)),t._4(56,81920,null,0,i.a,[t.k,d.b],{bundleKey:[0,"bundleKey"]},null),t._4(57,114688,null,0,a.a,[],null,null),(l()(),t._27(-1,null,["\u7533\u8acb\u65e5\u671f"])),(l()(),t._27(-1,null,["\n                "])),(l()(),t._5(60,0,null,null,1,"div",[["class","td rt"]],null,null,null,null,null)),(l()(),t._27(61,null,["",""])),(l()(),t._27(-1,null,["\n            "])),(l()(),t._27(-1,null,["\n        "])),(l()(),t._27(-1,null,["\n        "])),(l()(),t._5(65,0,null,null,186,"div",[["class","panel-group toggle-panel"],["id","AA"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n            "])),(l()(),t._27(-1,null,["\n            "])),(l()(),t._5(68,0,null,null,181,"div",[["class","panel panel-default"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                "])),(l()(),t._5(70,0,null,null,13,"div",[["class","panel-heading"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                    "])),(l()(),t._5(72,0,null,null,10,"a",[["aria-expanded","false"],["class","accordion-toggle"],["data-parent","#AA"],["data-toggle","collapse"],["href","#collapse1"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                        "])),(l()(),t._5(74,0,null,null,7,"div",[["class","div-tb"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(76,0,null,null,4,"div",[["class","td wid_50px"]],null,null,null,null,null)),(l()(),t._5(77,0,null,null,3,"i18n",[["translate","mf_qu004.00004803"]],null,null,null,e.b,e.a)),t._4(78,81920,null,0,i.a,[t.k,d.b],{bundleKey:[0,"bundleKey"]},null),t._4(79,114688,null,0,a.a,[],null,null),(l()(),t._27(-1,null,["\u8a73\u7d30\u8cc7\u6599"])),(l()(),t._27(-1,null,["\n                        "])),(l()(),t._27(-1,null,["\n                    "])),(l()(),t._27(-1,null,["\n                "])),(l()(),t._27(-1,null,["\n                "])),(l()(),t._5(85,0,null,null,163,"div",[["aria-expanded","false"],["class","panel-collapse collapse in"],["id","collapse1"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                    "])),(l()(),t._5(87,0,null,null,160,"div",[["class","panel-body "]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                        "])),(l()(),t._5(89,0,null,null,14,"div",[["class","div-tb mb5"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(91,0,null,null,0,"div",[["class","td wid_25px"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(93,0,null,null,4,"div",[["class","td"]],null,null,null,null,null)),(l()(),t._5(94,0,null,null,3,"i18n",[["translate","mf_qu004.00004266"]],null,null,null,e.b,e.a)),t._4(95,81920,null,0,i.a,[t.k,d.b],{bundleKey:[0,"bundleKey"]},null),t._4(96,114688,null,0,a.a,[],null,null),(l()(),t._27(-1,null,["\u7d66\u4ed8\u65e5\u671f"])),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(99,0,null,null,1,"div",[["class","td rt"]],null,null,null,null,null)),(l()(),t._27(100,null,["",""])),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(102,0,null,null,0,"div",[["class","td wid_25px"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                        "])),(l()(),t._27(-1,null,["\n                        "])),(l()(),t._5(105,0,null,null,14,"div",[["class","div-tb mb5"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(107,0,null,null,0,"div",[["class","td wid_25px"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(109,0,null,null,4,"div",[["class","td"]],null,null,null,null,null)),(l()(),t._5(110,0,null,null,3,"i18n",[["translate","mf_qu004.00003762"]],null,null,null,e.b,e.a)),t._4(111,81920,null,0,i.a,[t.k,d.b],{bundleKey:[0,"bundleKey"]},null),t._4(112,114688,null,0,a.a,[],null,null),(l()(),t._27(-1,null,["\u72c0\u6cc1"])),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(115,0,null,null,1,"div",[["class","td rt"]],null,null,null,null,null)),(l()(),t._27(116,null,["",""])),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(118,0,null,null,0,"div",[["class","td wid_25px"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                        "])),(l()(),t._27(-1,null,["\n                        "])),(l()(),t._5(121,0,null,null,14,"div",[["class","div-tb mb5"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(123,0,null,null,0,"div",[["class","td wid_25px"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(125,0,null,null,4,"div",[["class","td"]],null,null,null,null,null)),(l()(),t._5(126,0,null,null,3,"i18n",[["translate","mf_qu004.00001397"]],null,null,null,e.b,e.a)),t._4(127,81920,null,0,i.a,[t.k,d.b],{bundleKey:[0,"bundleKey"]},null),t._4(128,114688,null,0,a.a,[],null,null),(l()(),t._27(-1,null,["\u539f\u59cb\u6295\u8cc7\u91d1\u984d"])),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(131,0,null,null,1,"div",[["class","td rt"]],null,null,null,null,null)),(l()(),t._27(132,null,["",""])),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(134,0,null,null,0,"div",[["class","td wid_25px"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                        "])),(l()(),t._27(-1,null,["\n                        "])),(l()(),t._5(137,0,null,null,14,"div",[["class","div-tb mb5"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(139,0,null,null,0,"div",[["class","td wid_25px"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(141,0,null,null,4,"div",[["class","td"]],null,null,null,null,null)),(l()(),t._5(142,0,null,null,3,"i18n",[["translate","mf_qu004.00004271"]],null,null,null,e.b,e.a)),t._4(143,81920,null,0,i.a,[t.k,d.b],{bundleKey:[0,"bundleKey"]},null),t._4(144,114688,null,0,a.a,[],null,null),(l()(),t._27(-1,null,["\u7d66\u4ed8\u6de8\u984d"])),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(147,0,null,null,1,"div",[["class","td rt"]],null,null,null,null,null)),(l()(),t._27(148,null,["",""])),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(150,0,null,null,0,"div",[["class","td wid_25px"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                        "])),(l()(),t._27(-1,null,["\n                        "])),(l()(),t._5(153,0,null,null,14,"div",[["class","div-tb mb5"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(155,0,null,null,0,"div",[["class","td wid_25px"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(157,0,null,null,4,"div",[["class","td"]],null,null,null,null,null)),(l()(),t._5(158,0,null,null,3,"i18n",[["translate","mf_qu004.00000700"]],null,null,null,e.b,e.a)),t._4(159,81920,null,0,i.a,[t.k,d.b],{bundleKey:[0,"bundleKey"]},null),t._4(160,114688,null,0,a.a,[],null,null),(l()(),t._27(-1,null,["\u4ea4\u6613\u55ae\u4f4d\u6578"])),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(163,0,null,null,1,"div",[["class","td rt"]],null,null,null,null,null)),(l()(),t._27(164,null,["",""])),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(166,0,null,null,0,"div",[["class","td wid_25px"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                        "])),(l()(),t._27(-1,null,["\n                        "])),(l()(),t._5(169,0,null,null,14,"div",[["class","div-tb mb5"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(171,0,null,null,0,"div",[["class","td wid_25px"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(173,0,null,null,4,"div",[["class","td"]],null,null,null,null,null)),(l()(),t._5(174,0,null,null,3,"i18n",[["translate","mf_qu004.00004360"]],null,null,null,e.b,e.a)),t._4(175,81920,null,0,i.a,[t.k,d.b],{bundleKey:[0,"bundleKey"]},null),t._4(176,114688,null,0,a.a,[],null,null),(l()(),t._27(-1,null,["\u7e3d\u53c3\u8003\u640d\u76ca"])),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(179,0,null,null,1,"div",[["class","td rt"]],null,null,null,null,null)),(l()(),t._27(180,null,["",""])),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(182,0,null,null,0,"div",[["class","td wid_25px"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                        "])),(l()(),t._27(-1,null,["\n                        "])),(l()(),t._5(185,0,null,null,14,"div",[["class","div-tb mb5"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(187,0,null,null,0,"div",[["class","td wid_25px"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(189,0,null,null,4,"div",[["class","td"]],null,null,null,null,null)),(l()(),t._5(190,0,null,null,3,"i18n",[["translate","mf_qu004.00004328"]],null,null,null,e.b,e.a)),t._4(191,81920,null,0,i.a,[t.k,d.b],{bundleKey:[0,"bundleKey"]},null),t._4(192,114688,null,0,a.a,[],null,null),(l()(),t._27(-1,null,["\u7e3d\u53c3\u8003\u5831\u916c\u7387"])),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(195,0,null,null,1,"div",[["class","td rt"]],null,null,null,null,null)),(l()(),t._27(196,null,["",""])),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(198,0,null,null,0,"div",[["class","td wid_25px"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                        "])),(l()(),t._27(-1,null,["\n                        "])),(l()(),t._5(201,0,null,null,14,"div",[["class","div-tb mb5"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(203,0,null,null,0,"div",[["class","td wid_25px"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(205,0,null,null,4,"div",[["class","td"]],null,null,null,null,null)),(l()(),t._5(206,0,null,null,3,"i18n",[["translate","mf_qu004.00005635"]],null,null,null,e.b,e.a)),t._4(207,81920,null,0,i.a,[t.k,d.b],{bundleKey:[0,"bundleKey"]},null),t._4(208,114688,null,0,a.a,[],null,null),(l()(),t._27(-1,null,["\u8f49\u5165\u7522\u54c1\u5225"])),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(211,0,null,null,1,"div",[["class","td rt"]],null,null,null,null,null)),(l()(),t._27(212,null,["",""])),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(214,0,null,null,0,"div",[["class","td wid_25px"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                        "])),(l()(),t._27(-1,null,["\n                        "])),(l()(),t._5(217,0,null,null,14,"div",[["class","div-tb mb5"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(219,0,null,null,0,"div",[["class","td wid_25px"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(221,0,null,null,4,"div",[["class","td wid_40per"]],null,null,null,null,null)),(l()(),t._5(222,0,null,null,3,"i18n",[["translate","mf_qu004.00005624"]],null,null,null,e.b,e.a)),t._4(223,81920,null,0,i.a,[t.k,d.b],{bundleKey:[0,"bundleKey"]},null),t._4(224,114688,null,0,a.a,[],null,null),(l()(),t._27(-1,null,["\u8f49\u5165\u6a19\u7684\u540d\u7a31/\u65b9\u5f0f"])),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(227,0,null,null,1,"div",[["class","td rt"]],null,null,null,null,null)),(l()(),t._27(228,null,["",""])),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(230,0,null,null,0,"div",[["class","td wid_25px"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                        "])),(l()(),t._27(-1,null,["\n                        "])),(l()(),t._5(233,0,null,null,13,"div",[["class","div-tb mb5"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(235,0,null,null,0,"div",[["class","td wid_25px"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(237,0,null,null,4,"div",[["class","td"]],null,null,null,null,null)),(l()(),t._5(238,0,null,null,3,"i18n",[["translate","mf_qu004.00005630"]],null,null,null,e.b,e.a)),t._4(239,81920,null,0,i.a,[t.k,d.b],{bundleKey:[0,"bundleKey"]},null),t._4(240,114688,null,0,a.a,[],null,null),(l()(),t._27(-1,null,["\u8f49\u5165\u6a19\u7684\u7de8\u865f/\u5e33\u865f"])),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(243,0,null,null,0,"div",[["class","td rt"]],[[8,"innerHTML",1]],null,null,null,null)),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(245,0,null,null,0,"div",[["class","td wid_25px"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                        "])),(l()(),t._27(-1,null,["\n                    "])),(l()(),t._27(-1,null,["\n                "])),(l()(),t._27(-1,null,["\n            "])),(l()(),t._27(-1,null,["\n            "])),(l()(),t._27(-1,null,["\n        "])),(l()(),t._27(-1,null,["\n\n        "])),(l()(),t._5(253,0,null,null,51,"div",[["class","panel-group toggle-panel"],["id","BB"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n            "])),(l()(),t._5(255,0,null,null,47,"panel-collapse",[],null,[[null,"clickInitEvent"]],function(l,n,u){var t=!0;return"clickInitEvent"===n&&(t=!1!==l.component.getProdDetail(u)&&t),t},y.b,y.a)),t._4(256,4440064,[["acctDtlPanelCollapse",4]],0,g.a,[],{hidePadTop:[0,"hidePadTop"]},{clickInitEvent:"clickInitEvent"}),(l()(),t._27(-1,null,["\n                "])),(l()(),t._5(258,0,null,0,10,"div",[["heading",""]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                    "])),(l()(),t._5(260,0,null,null,7,"div",[["class","div-tb"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                        "])),(l()(),t._5(262,0,null,null,4,"div",[["class","td wid_50px"]],null,null,null,null,null)),(l()(),t._5(263,0,null,null,3,"i18n",[["translate","mf_qu004.00002766"]],null,null,null,e.b,e.a)),t._4(264,81920,null,0,i.a,[t.k,d.b],{bundleKey:[0,"bundleKey"]},null),t._4(265,114688,null,0,a.a,[],null,null),(l()(),t._27(-1,null,["\u6295\u8cc7\u660e\u7d30"])),(l()(),t._27(-1,null,["\n                    "])),(l()(),t._27(-1,null,["\n                "])),(l()(),t._27(-1,null,["\n                "])),(l()(),t._5(270,0,null,1,31,"div",[["panel-body",""]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n\n                    "])),(l()(),t._5(272,0,null,null,27,"ul",[["class","card-list"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                        "])),(l()(),t._5(274,0,null,null,21,"li",[["class","title"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._5(276,0,null,null,18,"div",[["class","div-tb"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                                "])),(l()(),t._5(278,0,null,null,4,"div",[["class","td"]],null,null,null,null,null)),(l()(),t._5(279,0,null,null,3,"i18n",[["translate","mf_qu004.00000758"]],null,null,null,e.b,e.a)),t._4(280,81920,null,0,i.a,[t.k,d.b],{bundleKey:[0,"bundleKey"]},null),t._4(281,114688,null,0,a.a,[],null,null),(l()(),t._27(-1,null,["\u4ea4\u6613\u65e5\u671f"])),(l()(),t._27(-1,null,["\n                                "])),(l()(),t._5(284,0,null,null,9,"div",[["class","td rt"]],null,null,null,null,null)),(l()(),t._5(285,0,null,null,3,"i18n",[["translate","mf_qu004.00002774"]],null,null,null,e.b,e.a)),t._4(286,81920,null,0,i.a,[t.k,d.b],{bundleKey:[0,"bundleKey"]},null),t._4(287,114688,null,0,a.a,[],null,null),(l()(),t._27(-1,null,["\u6295\u8cc7\u672c\u91d1/\u7d66\u4ed8\u91d1\u984d"])),(l()(),t._5(289,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t._5(290,0,null,null,3,"i18n",[["translate","mf_qu004.00001681"]],null,null,null,e.b,e.a)),t._4(291,81920,null,0,i.a,[t.k,d.b],{bundleKey:[0,"bundleKey"]},null),t._4(292,114688,null,0,a.a,[],null,null),(l()(),t._27(-1,null,["\u55ae\u4f4d\u6578"])),(l()(),t._27(-1,null,["\n                            "])),(l()(),t._27(-1,null,["\n                        "])),(l()(),t._27(-1,null,["\n                        "])),(l()(),t._0(16777216,null,null,1,null,B)),t._4(298,802816,null,0,s.l,[t.N,t.K,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t._27(-1,null,["\n                    "])),(l()(),t._27(-1,null,["\n                    "])),(l()(),t._27(-1,null,["\n\n                "])),(l()(),t._27(-1,null,["\n            "])),(l()(),t._27(-1,null,["\n            "])),(l()(),t._27(-1,null,["\n        "])),(l()(),t._27(-1,null,["\n        "])),(l()(),t._5(306,0,null,null,4,"div",[["class","container pad_top30"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n            "])),(l()(),t._5(308,0,null,null,1,"memo-remarks",[],null,null,null,q.b,q.a)),t._4(309,4964352,null,0,h.a,[],{key:[0,"key"],format:[1,"format"]},null),(l()(),t._27(-1,null,["\n        "])),(l()(),t._27(-1,null,["\n        "])),(l()(),t._5(312,0,null,null,15,"div",[["id","footer"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n            "])),(l()(),t._5(314,0,null,null,12,"div",[["class","modal-footer"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                "])),(l()(),t._5(316,0,null,null,9,"div",[["class","btn-group btn-group-justified"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n                    "])),(l()(),t._5(318,0,null,null,6,"a",[["class","btn btn-success btn-square"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toFundDetail(u)&&t),t},null,null)),(l()(),t._27(-1,null,["\n                        "])),(l()(),t._5(320,0,null,null,3,"i18n",[["translate","mf_qu004.00001817"]],null,null,null,e.b,e.a)),t._4(321,81920,null,0,i.a,[t.k,d.b],{bundleKey:[0,"bundleKey"]},null),t._4(322,114688,null,0,a.a,[],null,null),(l()(),t._27(-1,null,["\u57fa\u91d1\u8cc7\u8a0a(\u542b\u6de8\u503c\u8d70\u52e2\u3001\u7e3e\u6548\u8868\u73fe)"])),(l()(),t._27(-1,null,["\n                    "])),(l()(),t._27(-1,null,["\n                "])),(l()(),t._27(-1,null,["\n            "])),(l()(),t._27(-1,null,["\n        "])),(l()(),t._27(-1,null,["\n    "])),(l()(),t._27(-1,null,["\n    "])),(l()(),t._27(-1,null,["\n"])),(l()(),t._27(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,32,0,"mf_qu004.00002740"),l(n,33,0),l(n,44,0,"mf_qu004.00004634"),l(n,45,0),l(n,56,0,"mf_qu004.00003852"),l(n,57,0),l(n,78,0,"mf_qu004.00004803"),l(n,79,0),l(n,95,0,"mf_qu004.00004266"),l(n,96,0),l(n,111,0,"mf_qu004.00003762"),l(n,112,0),l(n,127,0,"mf_qu004.00001397"),l(n,128,0),l(n,143,0,"mf_qu004.00004271"),l(n,144,0),l(n,159,0,"mf_qu004.00000700"),l(n,160,0),l(n,175,0,"mf_qu004.00004360"),l(n,176,0),l(n,191,0,"mf_qu004.00004328"),l(n,192,0),l(n,207,0,"mf_qu004.00005635"),l(n,208,0),l(n,223,0,"mf_qu004.00005624"),l(n,224,0),l(n,239,0,"mf_qu004.00005630"),l(n,240,0),l(n,256,0,!0),l(n,264,0,"mf_qu004.00002766"),l(n,265,0),l(n,280,0,"mf_qu004.00000758"),l(n,281,0),l(n,286,0,"mf_qu004.00002774"),l(n,287,0),l(n,291,0,"mf_qu004.00001681"),l(n,292,0),l(n,298,0,u.yearDetailList),l(n,309,0,"TWRBMMfQU004_detailmemo",3),l(n,321,0,"mf_qu004.00001817"),l(n,322,0)},function(l,n){var u=n.component;l(n,14,0,u.prod.prodTypeDesc),l(n,19,0,u.prod.prodId+"-"+u.prod.prodSeq),l(n,25,0,u.prod.prodCName),l(n,37,0,u.prod.investCurName),l(n,49,0,u.prod.origCurName),l(n,61,0,u.prod.tranDt),l(n,100,0,u.prod.redeemPostDt),l(n,116,0,u.prod.statusDesc),l(n,132,0,u.prod.buyAmt),l(n,148,0,u.prod.redeemAmt),l(n,164,0,u.prod.tranUnit),l(n,180,0,u.refIncomeAmt()),l(n,196,0,u.refIncomeRate()),l(n,212,0,u.tranProdTypeDesc()),l(n,228,0,u.pmtNameOrMethod()),l(n,243,0,u.tranProdNumber())})}var D=t._1("twrbm-mf-qu004-020",w,function(l){return t._29(0,[(l()(),t._5(0,0,null,null,1,"twrbm-mf-qu004-020",[],null,null,null,S,K)),t._4(1,4440064,null,0,w,[],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),N=u("0nO6"),I=u("TvUf"),P=u("4SdM"),A=u("UtI1"),M=u("v7k6"),O=u("Xb6M"),$=u("3glH"),C=u("UHIZ"),L=function(){};u.d(n,"TWRBMMFQU004ModuleNgFactory",function(){return j});var j=t._2(_,[],function(l){return t._16([t._17(512,t.j,t.X,[[8,[f,D]],[3,t.j],t.v]),t._17(4608,s.o,s.n,[t.s,[2,s.x]]),t._17(4608,N.B,N.B,[]),t._17(4608,N.g,N.g,[]),t._17(512,s.b,s.b,[]),t._17(512,N.y,N.y,[]),t._17(512,N.l,N.l,[]),t._17(512,N.w,N.w,[]),t._17(512,I.a,I.a,[]),t._17(512,P.a,P.a,[]),t._17(512,A.a,A.a,[]),t._17(512,M.a,M.a,[]),t._17(512,O.a,O.a,[]),t._17(512,$.a,$.a,[]),t._17(512,C.l,C.l,[[2,C.q],[2,C.k]]),t._17(512,L,L,[]),t._17(512,_,_,[]),t._17(1024,C.i,function(){return[[{path:"",redirectTo:"010",pathMatch:"full"},{path:"010",component:p},{path:"020",component:w}]]},[])])})}});