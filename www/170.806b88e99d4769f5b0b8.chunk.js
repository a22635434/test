webpackJsonp([170],{sVPV:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=u("LMZF"),a=function(){},e=u("wywC"),o=u("PGCm"),r=u("AMGi"),i=u("NDpq"),s=u("0nO6"),_=u("Un6q"),c=u("7kY7"),p=u("RIcE"),g=u("Lyt5"),m=u("bang"),d=u("6Xbx"),f=u("rM26"),h=u("E+l/"),C=u("bkgj"),b=function(l){function n(){var n=null!==l&&l.apply(this,arguments)||this;return n.title=getBundleString("\u7406\u8ca1\u8aee\u8a62","application_ag003.00003773"),n.formData={},n.telMaxLen=8,n.controls=["name","custId","mobile","areaCode","phoneNo","email","ext","privacyCheck"],n}return Object(d.__extends)(n,l),n.prototype.buildPageForm=function(){var l=this,n={};this.controls.forEach(function(l){n[l]=[""]}),this.formClazz=new C.a(null,function(n){console.log("form changed:",n),h.a.required(n.name)?l.checkChinese(n.name)||l.formClazz.setFormErrors("name",getBundleString("\u59d3\u540d\u8acb\u8f38\u5165\u4e2d\u6587\u5b57","application_ag003.00001910")):l.formClazz.setFormErrors("name",getBundleString("\u8acb\u8f38\u5165\u59d3\u540d","application_ag003.00005045")),h.a.required(n.custId)?!h.a.isEngAndNumber(n.custId)||h.a.isNumber(n.custId)||h.a.isEnglish(n.custId)||n.custId.toUpperCase()!=n.custId?l.formClazz.setFormErrors("custId",getBundleString("\u8eab\u5206\u8b49\u5b57\u865f\u9650\u8f38\u5165\u6578\u5b57\u3001\u5927\u5beb\u82f1\u6587\u5b57\u6bcd","application_ag003.00005577")):h.a.minLength(n.custId,10)||l.formClazz.setFormErrors("custId",getBundleString("\u8acb\u518d\u6b21\u6aa2\u67e5\u8eab\u5206\u8b49\u5b57\u865f","application_ag003.00004834")):l.formClazz.setFormErrors("custId",getBundleString("\u8acb\u8f38\u5165\u8eab\u5206\u8b49\u5b57\u865f","application_ag003.00005167")),h.a.required(n.mobile)?h.a.minLength(n.mobile,10)&&n.mobile[0]+n.mobile[1]=="09"||l.formClazz.setFormErrors("mobile",getBundleString("\u8acb\u8f38\u5165\u6b63\u78ba\u7684\u884c\u52d5\u96fb\u8a71\u683c\u5f0f","application_ag003.00005117")):l.formClazz.setFormErrors("mobile",getBundleString("\u8acb\u8f38\u5165\u884c\u52d5\u96fb\u8a71","application_ag003.00005161")),h.a.required(n.areaCode)?h.a.minLength(n.areaCode,2)&&h.a.isNumber(n.areaCode)||l.formClazz.setFormErrors("phoneNo",getBundleString("\u8acb\u518d\u6b21\u6aa2\u67e5\u5e02\u8a71","application_ag003.00004829")):l.formClazz.setFormErrors("areaCode",getBundleString("\u8acb\u8f38\u5165\u5340\u78bc","application_ag003.00005033")),h.a.required(n.phoneNo)?l.checkPhone(n.phoneNo,n.areaCode)||l.formClazz.setFormErrors("phoneNo",getBundleString("\u8acb\u518d\u6b21\u6aa2\u67e5\u5e02\u8a71","application_ag003.00004829")):l.formClazz.setFormErrors("phoneNo",getBundleString("\u8acb\u8f38\u5165\u96fb\u8a71\u865f\u78bc","application_ag003.00005190")),n.ext&&(h.a.isNumber(n.ext)||l.formClazz.setFormErrors("phoneNo",getBundleString("\u8acb\u518d\u6b21\u6aa2\u67e5\u5e02\u8a71","application_ag003.00004829"))),n.email&&(h.a.isEmail(n.email)||l.formClazz.setFormErrors("email",getBundleString("\u8acb\u8f38\u5165\u6b63\u78ba\u7684\u96fb\u5b50\u4fe1\u7bb1\u683c\u5f0f","application_ag003.00005120"))),n.privacyCheck||l.formClazz.setFormErrors("privacyCheck"," ")},null,n,this.formRef)},n.prototype.init=function(n){l.prototype.changePageTitle.call(this,this.title),this.buildPageForm()},n.prototype.upper=function(n){var u=this;l.prototype.preventEvent.call(this,n,function(){u.formClazz.getForm().controls.custId.setValue(u.formClazz.getForm().controls.custId.value.toUpperCase())})},n.prototype.setTelMaxLen=function(n){var u=this;l.prototype.preventEvent.call(this,n,function(){switch(u.formClazz.getForm().controls.areaCode.value){case"02":u.telMaxLen=8;break;case"03":u.telMaxLen=7;break;case"04":u.telMaxLen=8;break;case"05":case"06":case"07":case"08":case"049":u.telMaxLen=7;break;case"037":case"089":u.telMaxLen=6;break;case"0836":u.telMaxLen=5;break;default:u.telMaxLen=8}})},n.prototype.submit=function(n){var u=this;l.prototype.preventEvent.call(this,n,function(){if(u.formClazz.isFormValid()){var n={custId:u.formClazz.getForm().controls.custId.value,custName:u.formClazz.getForm().controls.name.value,useremail:u.formClazz.getForm().controls.email.value,mobilePhone:u.formClazz.getForm().controls.mobile.value,areaCode:u.formClazz.getForm().controls.areaCode.value,phone_number:u.formClazz.getForm().controls.phoneNo.value,ext:u.formClazz.getForm().controls.ext.value};u.formClazz.getForm(),l.prototype.showLoader.call(u),l.prototype.sendAndReceiveAsync.call(u,"/twrbm-application/ag003/010",n).then(function(n){l.prototype.hideLoader.call(u),1==n.isSuccess&&l.prototype.changeTxn.call(u,"/twrbm-application/ag003/020",{custName:n.custName},!1)},function(n){l.prototype.hideLoader.call(u),l.prototype.handleResponseError.call(u,n)})}})},n.prototype.pageReuse=function(l){this.formClazz.getForm().controls.privacyCheck.setValue(!1)},n.prototype.checkChinese=function(l){if(h.a.isNull(l))return!1;for(var n=0;n<l.length;n++){var u=String.fromCharCode(l.charCodeAt(n));if(!/^[\u4e00-\u9fa5]*$/.test(u))return!1}return!0},n.prototype.checkPhone=function(l,n){switch(n){case"02":if(l.length>8||l.length<8)return!1;break;case"03":if(l.length>7||l.length<7)return!1;break;case"04":if(l.length>8||l.length<8)return!1;break;case"05":case"06":case"07":case"08":case"049":if(l.length>7||l.length<7)return!1;break;case"037":case"089":if(l.length>6||l.length<6)return!1;break;case"0836":if(l.length>5||l.length<5)return!1;break;default:if(l.length<6)return!1}return!0},n}(f.a),v=t._3({encapsulation:0,styles:[[""]],data:{}});function z(l){return t._29(0,[t._25(402653184,1,{formRef:0}),(l()(),t._27(-1,null,["\t"])),(l()(),t._5(2,0,null,null,196,"div",[["class","body-wrap scroll bg_white"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n\t"])),(l()(),t._5(4,0,null,null,193,"div",[["class","main_container"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n\t\t"])),(l()(),t._5(6,0,null,null,7,"div",[["class","pad_15 line-bot"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n            "])),(l()(),t._5(8,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),t._5(9,0,null,null,3,"i18n",[["translate","application_ag003.00004899"]],null,null,null,e.b,e.a)),t._4(10,81920,null,0,o.a,[t.k,r.b],{bundleKey:[0,"bundleKey"]},null),t._4(11,114688,null,0,i.a,[],null,null),(l()(),t._27(-1,null,["\u8acb\u7559\u4e0b\u60a8\u7684\u57fa\u672c\u8cc7\u6599\uff0c\u4e26\u9078\u64c7\u60a8\u76ee\u524d\u6240\u5728\u7684\u5340\u57df\uff0c\u6211\u5011\u5c07\u6307\u6d3e\u5c08\u54e1\u8207\u60a8\u806f\u7d61\u3002"])),(l()(),t._27(-1,null,["\n        "])),(l()(),t._27(-1,null,["\n\t\t"])),(l()(),t._5(15,0,null,null,181,"div",[["class","container pad_top30"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n\t\t"])),(l()(),t._5(17,0,[[1,0],["formRef",1]],null,178,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var a=!0;return"submit"===n&&(a=!1!==t._19(l,19).onSubmit(u)&&a),"reset"===n&&(a=!1!==t._19(l,19).onReset()&&a),a},null,null)),t._4(18,16384,null,0,s.A,[],null,null),t._4(19,540672,null,0,s.k,[[8,null],[8,null]],{form:[0,"form"]},null),t._24(2048,null,s.c,null,[s.k]),t._4(21,16384,null,0,s.r,[s.c],null,null),(l()(),t._27(-1,null,["\n\t\t\t"])),(l()(),t._5(23,0,null,null,26,"div",[["class","form_group"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n\t\t\t\t"])),(l()(),t._5(25,0,null,null,17,"div",[["class","input_group has-value"]],null,null,null,null,null)),t._4(26,278528,null,0,_.k,[t.q,t.r,t.k,t.C],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),t._27(-1,null,["\n\t\t\t\t\t"])),(l()(),t._5(28,0,null,null,4,"span",[["class","title"]],null,null,null,null,null)),(l()(),t._5(29,0,null,null,3,"i18n",[["translate","application_ag003.00001906"]],null,null,null,e.b,e.a)),t._4(30,81920,null,0,o.a,[t.k,r.b],{bundleKey:[0,"bundleKey"]},null),t._4(31,114688,null,0,i.a,[],null,null),(l()(),t._27(-1,null,["\u59d3\u540d"])),(l()(),t._27(-1,null,["\n\t\t\t\t\t"])),(l()(),t._5(34,0,null,null,7,"input",[["formControlName","name"],["maxlength","30"],["placeholder"," "],["type","text"],["value",""]],[[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var a=!0;return"input"===n&&(a=!1!==t._19(l,35)._handleInput(u.target.value)&&a),"blur"===n&&(a=!1!==t._19(l,35).onTouched()&&a),"compositionstart"===n&&(a=!1!==t._19(l,35)._compositionStart()&&a),"compositionend"===n&&(a=!1!==t._19(l,35)._compositionEnd(u.target.value)&&a),a},null,null)),t._4(35,16384,null,0,s.d,[t.C,t.k,[2,s.a]],null,null),t._4(36,540672,null,0,s.m,[],{maxlength:[0,"maxlength"]},null),t._24(1024,null,s.n,function(l){return[l]},[s.m]),t._24(1024,null,s.o,function(l){return[l]},[s.d]),t._4(39,671744,null,0,s.j,[[3,s.c],[2,s.n],[8,null],[2,s.o]],{name:[0,"name"]},null),t._24(2048,null,s.p,null,[s.j]),t._4(41,16384,null,0,s.q,[s.p],null,null),(l()(),t._27(-1,null,["\n\t\t\t\t"])),(l()(),t._27(-1,null,["\n\t\t\t\t"])),(l()(),t._5(44,0,null,null,1,"div",[["class","form_error"]],null,null,null,null,null)),(l()(),t._27(45,null,["",""])),(l()(),t._27(-1,null,["\n\t\t\t\t"])),(l()(),t._5(47,0,null,null,1,"div",[["class","form_info"]],null,null,null,null,null)),(l()(),t._27(-1,null,[" "])),(l()(),t._27(-1,null,["\n\t\t\t"])),(l()(),t._27(-1,null,["\n\t\t\t"])),(l()(),t._5(51,0,null,null,21,"div",[["class","form_group"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n\t\t\t\t"])),(l()(),t._5(53,0,null,null,12,"div",[["class","input_group has-value"]],null,null,null,null,null)),t._4(54,278528,null,0,_.k,[t.q,t.r,t.k,t.C],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),t._27(-1,null,["\n\t\t\t\t\t"])),(l()(),t._5(56,0,null,null,4,"span",[["class","title"]],null,null,null,null,null)),(l()(),t._5(57,0,null,null,3,"i18n",[["translate","application_ag003.00005571"]],null,null,null,e.b,e.a)),t._4(58,81920,null,0,o.a,[t.k,r.b],{bundleKey:[0,"bundleKey"]},null),t._4(59,114688,null,0,i.a,[],null,null),(l()(),t._27(-1,null,["\u8eab\u5206\u8b49\u5b57\u865f"])),(l()(),t._27(-1,null,["\n\t\t\t\t\t"])),(l()(),t._5(62,0,null,null,1,"custom-keyboard-input",[],null,null,null,c.b,c.a)),t._4(63,4964352,null,0,p.a,[],{keyboardType:[0,"keyboardType"],$currPage:[1,"$currPage"],maxlength:[2,"maxlength"],txtTrans:[3,"txtTrans"],inputForm:[4,"inputForm"],inputId:[5,"inputId"]},null),(l()(),t._27(-1,null,["\n\t\t\t\t\t"])),(l()(),t._27(-1,null,["\n\t\t\t\t"])),(l()(),t._27(-1,null,["\n\t\t\t\t"])),(l()(),t._5(67,0,null,null,1,"div",[["class","form_error"]],null,null,null,null,null)),(l()(),t._27(68,null,["",""])),(l()(),t._27(-1,null,["\n\t\t\t\t"])),(l()(),t._5(70,0,null,null,1,"div",[["class","form_info"]],null,null,null,null,null)),(l()(),t._27(-1,null,[" "])),(l()(),t._27(-1,null,["\n\t\t\t"])),(l()(),t._27(-1,null,["                        \n\t\t\t"])),(l()(),t._5(74,0,null,null,25,"div",[["class","form_group"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n\t\t\t\t"])),(l()(),t._5(76,0,null,null,16,"div",[["class","input_group has-value"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n\t\t\t\t\t"])),(l()(),t._5(78,0,null,null,4,"span",[["class","title"]],null,null,null,null,null)),(l()(),t._5(79,0,null,null,3,"i18n",[["translate","application_ag003.00006097"]],null,null,null,e.b,e.a)),t._4(80,81920,null,0,o.a,[t.k,r.b],{bundleKey:[0,"bundleKey"]},null),t._4(81,114688,null,0,i.a,[],null,null),(l()(),t._27(-1,null,["\u96fb\u5b50\u90f5\u4ef6"])),(l()(),t._27(-1,null,["\n\t\t\t\t\t"])),(l()(),t._5(84,0,null,null,7,"input",[["formControlName","email"],["maxlength","50"],["type","email"],["value",""]],[[8,"placeholder",0],[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var a=!0;return"input"===n&&(a=!1!==t._19(l,85)._handleInput(u.target.value)&&a),"blur"===n&&(a=!1!==t._19(l,85).onTouched()&&a),"compositionstart"===n&&(a=!1!==t._19(l,85)._compositionStart()&&a),"compositionend"===n&&(a=!1!==t._19(l,85)._compositionEnd(u.target.value)&&a),a},null,null)),t._4(85,16384,null,0,s.d,[t.C,t.k,[2,s.a]],null,null),t._4(86,540672,null,0,s.m,[],{maxlength:[0,"maxlength"]},null),t._24(1024,null,s.n,function(l){return[l]},[s.m]),t._24(1024,null,s.o,function(l){return[l]},[s.d]),t._4(89,671744,null,0,s.j,[[3,s.c],[2,s.n],[8,null],[2,s.o]],{name:[0,"name"]},null),t._24(2048,null,s.p,null,[s.j]),t._4(91,16384,null,0,s.q,[s.p],null,null),(l()(),t._27(-1,null,["\n\t\t\t\t"])),(l()(),t._27(-1,null,["\n\t\t\t\t"])),(l()(),t._5(94,0,null,null,1,"div",[["class","form_error"]],null,null,null,null,null)),(l()(),t._27(95,null,["",""])),(l()(),t._27(-1,null,["\n\t\t\t\t"])),(l()(),t._5(97,0,null,null,1,"div",[["class","form_info"]],null,null,null,null,null)),(l()(),t._27(-1,null,[" "])),(l()(),t._27(-1,null,["\n\t\t\t"])),(l()(),t._27(-1,null,["\n\t\t\t"])),(l()(),t._5(101,0,null,null,25,"div",[["class","form_group"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n\t\t\t\t"])),(l()(),t._5(103,0,null,null,17,"div",[["class","input_group has-value"]],null,null,null,null,null)),t._4(104,278528,null,0,_.k,[t.q,t.r,t.k,t.C],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),t._27(-1,null,["\n\t\t\t\t\t"])),(l()(),t._5(106,0,null,null,4,"span",[["class","title"]],null,null,null,null,null)),(l()(),t._5(107,0,null,null,3,"i18n",[["translate","application_ag003.00004607"]],null,null,null,e.b,e.a)),t._4(108,81920,null,0,o.a,[t.k,r.b],{bundleKey:[0,"bundleKey"]},null),t._4(109,114688,null,0,i.a,[],null,null),(l()(),t._27(-1,null,["\u884c\u52d5\u96fb\u8a71"])),(l()(),t._27(-1,null,["\n\t\t\t\t\t"])),(l()(),t._5(112,0,null,null,7,"input",[["formControlName","mobile"],["maxlength","10"],["type","tel"],["value",""]],[[8,"placeholder",0],[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var a=!0;return"input"===n&&(a=!1!==t._19(l,113)._handleInput(u.target.value)&&a),"blur"===n&&(a=!1!==t._19(l,113).onTouched()&&a),"compositionstart"===n&&(a=!1!==t._19(l,113)._compositionStart()&&a),"compositionend"===n&&(a=!1!==t._19(l,113)._compositionEnd(u.target.value)&&a),a},null,null)),t._4(113,16384,null,0,s.d,[t.C,t.k,[2,s.a]],null,null),t._4(114,540672,null,0,s.m,[],{maxlength:[0,"maxlength"]},null),t._24(1024,null,s.n,function(l){return[l]},[s.m]),t._24(1024,null,s.o,function(l){return[l]},[s.d]),t._4(117,671744,null,0,s.j,[[3,s.c],[2,s.n],[8,null],[2,s.o]],{name:[0,"name"]},null),t._24(2048,null,s.p,null,[s.j]),t._4(119,16384,null,0,s.q,[s.p],null,null),(l()(),t._27(-1,null,["\n\t\t\t\t"])),(l()(),t._27(-1,null,["\n\t\t\t\t"])),(l()(),t._5(122,0,null,null,0,"div",[["class","form_info"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n\t\t\t\t"])),(l()(),t._5(124,0,null,null,1,"div",[["class","form_error"]],null,null,null,null,null)),(l()(),t._27(125,null,["",""])),(l()(),t._27(-1,null,["\t\t\t\t\n\t\t\t"])),(l()(),t._27(-1,null,["\n\t\t\t"])),(l()(),t._5(128,0,null,null,54,"div",[["class","form_group"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n\t\t\t\t"])),(l()(),t._5(130,0,null,null,39,"div",[["class","input-group phone-num"]],null,null,null,null,null)),t._4(131,278528,null,0,_.k,[t.q,t.r,t.k,t.C],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),t._27(-1,null,["\n\t\t\t\t\t"])),(l()(),t._5(133,0,null,null,4,"span",[["class","input-group-addon title"]],null,null,null,null,null)),(l()(),t._5(134,0,null,null,3,"i18n",[["translate","application_ag003.00002122"]],null,null,null,e.b,e.a)),t._4(135,81920,null,0,o.a,[t.k,r.b],{bundleKey:[0,"bundleKey"]},null),t._4(136,114688,null,0,i.a,[],null,null),(l()(),t._27(-1,null,["\u5e02\u8a71"])),(l()(),t._27(-1,null,["\n\t\t\t\t\t"])),(l()(),t._5(139,0,null,null,7,"input",[["class","form-control short"],["formControlName","areaCode"],["maxlength","4"],["size",""],["type","tel"],["value",""]],[[8,"placeholder",0],[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var a=!0,e=l.component;return"input"===n&&(a=!1!==t._19(l,140)._handleInput(u.target.value)&&a),"blur"===n&&(a=!1!==t._19(l,140).onTouched()&&a),"compositionstart"===n&&(a=!1!==t._19(l,140)._compositionStart()&&a),"compositionend"===n&&(a=!1!==t._19(l,140)._compositionEnd(u.target.value)&&a),"change"===n&&(a=!1!==e.setTelMaxLen(u)&&a),a},null,null)),t._4(140,16384,null,0,s.d,[t.C,t.k,[2,s.a]],null,null),t._4(141,540672,null,0,s.m,[],{maxlength:[0,"maxlength"]},null),t._24(1024,null,s.n,function(l){return[l]},[s.m]),t._24(1024,null,s.o,function(l){return[l]},[s.d]),t._4(144,671744,null,0,s.j,[[3,s.c],[2,s.n],[8,null],[2,s.o]],{name:[0,"name"]},null),t._24(2048,null,s.p,null,[s.j]),t._4(146,16384,null,0,s.q,[s.p],null,null),(l()(),t._27(-1,null,["\n\t\t\t\t\t"])),(l()(),t._5(148,0,null,null,1,"span",[["class","input-group-addon"]],null,null,null,null,null)),(l()(),t._27(-1,null,["-"])),(l()(),t._27(-1,null,["\n\t\t\t\t\t"])),(l()(),t._5(151,0,null,null,5,"input",[["class","form-control long"],["formControlName","phoneNo"],["size",""],["type","tel"],["value",""]],[[1,"maxlength",0],[8,"placeholder",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var a=!0;return"input"===n&&(a=!1!==t._19(l,152)._handleInput(u.target.value)&&a),"blur"===n&&(a=!1!==t._19(l,152).onTouched()&&a),"compositionstart"===n&&(a=!1!==t._19(l,152)._compositionStart()&&a),"compositionend"===n&&(a=!1!==t._19(l,152)._compositionEnd(u.target.value)&&a),a},null,null)),t._4(152,16384,null,0,s.d,[t.C,t.k,[2,s.a]],null,null),t._24(1024,null,s.o,function(l){return[l]},[s.d]),t._4(154,671744,null,0,s.j,[[3,s.c],[8,null],[8,null],[2,s.o]],{name:[0,"name"]},null),t._24(2048,null,s.p,null,[s.j]),t._4(156,16384,null,0,s.q,[s.p],null,null),(l()(),t._27(-1,null,["\n\t\t\t\t\t"])),(l()(),t._5(158,0,null,null,1,"span",[["class","input-group-addon"]],null,null,null,null,null)),(l()(),t._27(-1,null,[" #"])),(l()(),t._27(-1,null,["\n\t\t\t\t\t"])),(l()(),t._5(161,0,null,null,7,"input",[["class","form-control"],["formControlName","ext"],["maxlength","6"],["size",""],["type","tel"],["value",""]],[[8,"placeholder",0],[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var a=!0;return"input"===n&&(a=!1!==t._19(l,162)._handleInput(u.target.value)&&a),"blur"===n&&(a=!1!==t._19(l,162).onTouched()&&a),"compositionstart"===n&&(a=!1!==t._19(l,162)._compositionStart()&&a),"compositionend"===n&&(a=!1!==t._19(l,162)._compositionEnd(u.target.value)&&a),a},null,null)),t._4(162,16384,null,0,s.d,[t.C,t.k,[2,s.a]],null,null),t._4(163,540672,null,0,s.m,[],{maxlength:[0,"maxlength"]},null),t._24(1024,null,s.n,function(l){return[l]},[s.m]),t._24(1024,null,s.o,function(l){return[l]},[s.d]),t._4(166,671744,null,0,s.j,[[3,s.c],[2,s.n],[8,null],[2,s.o]],{name:[0,"name"]},null),t._24(2048,null,s.p,null,[s.j]),t._4(168,16384,null,0,s.q,[s.p],null,null),(l()(),t._27(-1,null,["\n\t\t\t\t"])),(l()(),t._27(-1,null,["\n\t\t\t\t"])),(l()(),t._5(171,0,null,null,4,"div",[["class","form_info"]],null,null,null,null,null)),(l()(),t._5(172,0,null,null,3,"i18n",[["translate","application_ag003.00001231"]],null,null,null,e.b,e.a)),t._4(173,81920,null,0,o.a,[t.k,r.b],{bundleKey:[0,"bundleKey"]},null),t._4(174,114688,null,0,i.a,[],null,null),(l()(),t._27(-1,null,["\u5206\u6a5f\u70ba\u975e\u5fc5\u586b"])),(l()(),t._27(-1,null,["\n\t\t\t\t"])),(l()(),t._5(177,0,null,null,1,"div",[["class","form_error"]],null,null,null,null,null)),(l()(),t._27(178,null,["",""])),(l()(),t._27(-1,null,["\n\t\t\t\t"])),(l()(),t._5(180,0,null,null,1,"div",[["class","form_error"]],null,null,null,null,null)),(l()(),t._27(181,null,["",""])),(l()(),t._27(-1,null,["\t\t\t\t\n\t\t\t"])),(l()(),t._27(-1,null,["\n\t\t\t"])),(l()(),t._5(184,0,null,null,1,"form-privacy-announce",[],null,null,null,g.b,g.a)),t._4(185,4440064,null,0,m.a,[],{formClazz:[0,"formClazz"]},null),(l()(),t._27(-1,null,["\n\t\t\t"])),(l()(),t._5(187,0,null,null,7,"div",[["class","btn_group mt30"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n\t\t\t\t"])),(l()(),t._5(189,0,null,null,4,"a",[["class","btn btn-block btn-success"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.submit(u)&&t),t},null,null)),(l()(),t._5(190,0,null,null,3,"i18n",[["translate","application_ag003.00003977"]],null,null,null,e.b,e.a)),t._4(191,81920,null,0,o.a,[t.k,r.b],{bundleKey:[0,"bundleKey"]},null),t._4(192,114688,null,0,i.a,[],null,null),(l()(),t._27(-1,null,["\u78ba\u5b9a\u9001\u51fa"])),(l()(),t._27(-1,null,["\n\t\t\t"])),(l()(),t._27(-1,null,["\n\t\t"])),(l()(),t._27(-1,null,["                          \n\t\t"])),(l()(),t._27(-1,null,["\n\t"])),(l()(),t._27(-1,null,["\n"])),(l()(),t._27(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,10,0,"application_ag003.00004899"),l(n,11,0),l(n,19,0,u.formClazz.form),l(n,26,0,"input_group has-value",null!=u.formClazz.formErrors&&u.formClazz.formErrors.name?"has-error red-rim":""),l(n,30,0,"application_ag003.00001906"),l(n,31,0),l(n,36,0,"30"),l(n,39,0,"name"),l(n,54,0,"input_group has-value",null!=u.formClazz.formErrors&&u.formClazz.formErrors.custId?"has-error red-rim":""),l(n,58,0,"application_ag003.00005571"),l(n,59,0),l(n,63,0,"alphaNum",u.getPageRootElement(),11,"upper",u.formClazz,"custId"),l(n,80,0,"application_ag003.00006097"),l(n,81,0),l(n,86,0,"50"),l(n,89,0,"email"),l(n,104,0,"input_group has-value",null!=u.formClazz.formErrors&&u.formClazz.formErrors.mobile?"has-error red-rim":""),l(n,108,0,"application_ag003.00004607"),l(n,109,0),l(n,114,0,"10"),l(n,117,0,"mobile"),l(n,131,0,"input-group phone-num",null!=u.formClazz.formErrors&&u.formClazz.formErrors.areaCode?"has-error red-rim":""),l(n,135,0,"application_ag003.00002122"),l(n,136,0),l(n,141,0,"4"),l(n,144,0,"areaCode"),l(n,154,0,"phoneNo"),l(n,163,0,"6"),l(n,166,0,"ext"),l(n,173,0,"application_ag003.00001231"),l(n,174,0),l(n,185,0,u.formClazz),l(n,191,0,"application_ag003.00003977"),l(n,192,0)},function(l,n){var u=n.component;l(n,17,0,t._19(n,21).ngClassUntouched,t._19(n,21).ngClassTouched,t._19(n,21).ngClassPristine,t._19(n,21).ngClassDirty,t._19(n,21).ngClassValid,t._19(n,21).ngClassInvalid,t._19(n,21).ngClassPending),l(n,34,0,t._19(n,36).maxlength?t._19(n,36).maxlength:null,t._19(n,41).ngClassUntouched,t._19(n,41).ngClassTouched,t._19(n,41).ngClassPristine,t._19(n,41).ngClassDirty,t._19(n,41).ngClassValid,t._19(n,41).ngClassInvalid,t._19(n,41).ngClassPending),l(n,45,0,null==u.formClazz.formErrors?null:u.formClazz.formErrors.name),l(n,68,0,null==u.formClazz.formErrors?null:u.formClazz.formErrors.custId),l(n,84,0,u.getBundleString("\u6b64\u6b04\u4f4d\u975e\u5fc5\u586b","application_ag003.00003568"),t._19(n,86).maxlength?t._19(n,86).maxlength:null,t._19(n,91).ngClassUntouched,t._19(n,91).ngClassTouched,t._19(n,91).ngClassPristine,t._19(n,91).ngClassDirty,t._19(n,91).ngClassValid,t._19(n,91).ngClassInvalid,t._19(n,91).ngClassPending),l(n,95,0,null==u.formClazz.formErrors?null:u.formClazz.formErrors.email),l(n,112,0,u.getBundleString("\u4f8b\uff1a0912345678","application_ag003.00000853"),t._19(n,114).maxlength?t._19(n,114).maxlength:null,t._19(n,119).ngClassUntouched,t._19(n,119).ngClassTouched,t._19(n,119).ngClassPristine,t._19(n,119).ngClassDirty,t._19(n,119).ngClassValid,t._19(n,119).ngClassInvalid,t._19(n,119).ngClassPending),l(n,125,0,null==u.formClazz.formErrors?null:u.formClazz.formErrors.mobile),l(n,139,0,u.getBundleString("\u5340\u78bc","application_ag003.00001350"),t._19(n,141).maxlength?t._19(n,141).maxlength:null,t._19(n,146).ngClassUntouched,t._19(n,146).ngClassTouched,t._19(n,146).ngClassPristine,t._19(n,146).ngClassDirty,t._19(n,146).ngClassValid,t._19(n,146).ngClassInvalid,t._19(n,146).ngClassPending),l(n,151,0,u.telMaxLen,u.getBundleString("\u96fb\u8a71\u865f\u78bc","application_ag003.00006101"),t._19(n,156).ngClassUntouched,t._19(n,156).ngClassTouched,t._19(n,156).ngClassPristine,t._19(n,156).ngClassDirty,t._19(n,156).ngClassValid,t._19(n,156).ngClassInvalid,t._19(n,156).ngClassPending),l(n,161,0,u.getBundleString("\u5206\u6a5f","application_ag003.00001230"),t._19(n,163).maxlength?t._19(n,163).maxlength:null,t._19(n,168).ngClassUntouched,t._19(n,168).ngClassTouched,t._19(n,168).ngClassPristine,t._19(n,168).ngClassDirty,t._19(n,168).ngClassValid,t._19(n,168).ngClassInvalid,t._19(n,168).ngClassPending),l(n,178,0,null==u.formClazz.formErrors?null:u.formClazz.formErrors.areaCode),l(n,181,0,null==u.formClazz.formErrors?null:u.formClazz.formErrors.phoneNo)})}var y=t._1("twrbm-application-ag003-010",b,function(l){return t._29(0,[(l()(),t._5(0,0,null,null,1,"twrbm-application-ag003-010",[],null,null,null,z,v)),t._4(1,4440064,null,0,b,[],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),k=function(l){function n(){return null!==l&&l.apply(this,arguments)||this}return Object(d.__extends)(n,l),n.prototype.init=function(n){l.prototype.changePageTitle.call(this,getBundleString("\u7406\u8ca1\u8aee\u8a62","application_ag003.00003773")),this.custName=n.custName},n.prototype.isTxnResultPage=function(){return!0},n}(f.a),x=t._3({encapsulation:0,styles:[[""]],data:{}});function E(l){return t._29(0,[(l()(),t._5(0,0,null,null,36,"div",[["class","body-wrap scroll bg_white"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n\t"])),(l()(),t._5(2,0,null,null,33,"div",[["class","main_container"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n\t\t"])),(l()(),t._5(4,0,null,null,30,"div",[["class","container pad_top30"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n\t\t\t"])),(l()(),t._5(6,0,null,null,10,"div",[["class","panel-result"]],null,null,null,null,null)),(l()(),t._27(-1,null,["\n\t\t\t\t"])),(l()(),t._5(8,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t._5(9,0,null,null,0,"i",[["class","icon-ok"]],null,null,null,null,null)),(l()(),t._27(-1,null,[" "])),(l()(),t._5(11,0,null,null,4,"strong",[["class","txt_big"]],null,null,null,null,null)),(l()(),t._5(12,0,null,null,3,"i18n",[["translate","application_ag003.00003846"]],null,null,null,e.b,e.a)),t._4(13,81920,null,0,o.a,[t.k,r.b],{bundleKey:[0,"bundleKey"]},null),t._4(14,114688,null,0,i.a,[],null,null),(l()(),t._27(-1,null,["\u7533\u8acb\u6210\u529f"])),(l()(),t._27(-1,null,["\n\t\t\t"])),(l()(),t._27(-1,null,["\n\t\t\t"])),(l()(),t._5(18,0,null,null,9,"p",[["class","mb20 mt20"]],null,null,null,null,null)),(l()(),t._5(19,0,null,null,3,"i18n",[["translate","application_ag003.00004613"]],null,null,null,e.b,e.a)),t._4(20,81920,null,0,o.a,[t.k,r.b],{bundleKey:[0,"bundleKey"]},null),t._4(21,114688,null,0,i.a,[],null,null),(l()(),t._27(-1,null,["\u89aa\u611b\u7684"])),(l()(),t._27(23,null,["",""])),(l()(),t._5(24,0,null,null,3,"i18n",[["translate","application_ag003.00001133"]],null,null,null,e.b,e.a)),t._4(25,81920,null,0,o.a,[t.k,r.b],{bundleKey:[0,"bundleKey"]},null),t._4(26,114688,null,0,i.a,[],null,null),(l()(),t._27(-1,null,["\u5148\u751f/\u5c0f\u59d0\u60a8\u597d\uff1a"])),(l()(),t._27(-1,null,["\n      \t\t"])),(l()(),t._5(29,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),t._5(30,0,null,null,3,"i18n",[["translate","application_ag003.00002509"]],null,null,null,e.b,e.a)),t._4(31,81920,null,0,o.a,[t.k,r.b],{bundleKey:[0,"bundleKey"]},null),t._4(32,114688,null,0,i.a,[],null,null),(l()(),t._27(-1,null,["\u611f\u8b1d\u60a8\u7684\u7533\u8acb\uff0c\u670d\u52d9\u5c08\u54e1\u5c07\u65bc\u4e00\u500b\u5de5\u4f5c\u5929\u5167\u8207\u60a8\u806f\u7d61\uff0c\u5982\u6709\u4efb\u4f55\u7591\u554f\uff0c\u8acb\u76f4\u63a5\u900f\u904eSkype\u6216\u4ee5\u5e02\u8a71\u64a5\u62530800-024-365\u63093\u8f49\u63a5\u5ba2\u670d\u5c08\u54e1\uff0c\u518d\u6b21\u611f\u8b1d\u60a8\u7684\u652f\u6301\u3002"])),(l()(),t._27(-1,null,["\n\t\t"])),(l()(),t._27(-1,null,["\n\t"])),(l()(),t._27(-1,null,["\n"])),(l()(),t._27(-1,null,["\n"]))],function(l,n){l(n,13,0,"application_ag003.00003846"),l(n,14,0),l(n,20,0,"application_ag003.00004613"),l(n,21,0),l(n,25,0,"application_ag003.00001133"),l(n,26,0),l(n,31,0,"application_ag003.00002509"),l(n,32,0)},function(l,n){l(n,23,0,n.component.custName)})}var I=t._1("twrbm-application-ag003-020",k,function(l){return t._29(0,[(l()(),t._5(0,0,null,null,1,"twrbm-application-ag003-020",[],null,null,null,E,x)),t._4(1,4440064,null,0,k,[],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),F=u("TvUf"),N=u("4SdM"),S=u("UtI1"),P=u("v7k6"),T=u("Xb6M"),K=u("3glH"),B=u("UHIZ"),M=function(){};u.d(n,"TWRBMApplicationAG003ModuleNgFactory",function(){return w});var w=t._2(a,[],function(l){return t._16([t._17(512,t.j,t.X,[[8,[y,I]],[3,t.j],t.v]),t._17(4608,_.o,_.n,[t.s,[2,_.x]]),t._17(4608,s.B,s.B,[]),t._17(4608,s.g,s.g,[]),t._17(512,_.b,_.b,[]),t._17(512,s.y,s.y,[]),t._17(512,s.l,s.l,[]),t._17(512,s.w,s.w,[]),t._17(512,F.a,F.a,[]),t._17(512,N.a,N.a,[]),t._17(512,S.a,S.a,[]),t._17(512,P.a,P.a,[]),t._17(512,T.a,T.a,[]),t._17(512,K.a,K.a,[]),t._17(512,B.l,B.l,[[2,B.q],[2,B.k]]),t._17(512,M,M,[]),t._17(512,a,a,[]),t._17(1024,B.i,function(){return[[{path:"",redirectTo:"010",pathMatch:"full"},{path:"010",component:b},{path:"020",component:k}]]},[])])})}});