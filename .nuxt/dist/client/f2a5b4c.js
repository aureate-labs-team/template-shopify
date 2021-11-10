(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{593:function(e,t,n){var content=n(735);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(7).default)("fbd5ef26",content,!0,{sourceMap:!1})},734:function(e,t,n){"use strict";n(593)},735:function(e,t,n){var r=n(6)(!1);r.push([e.i,".message[data-v-b3c82fbe]{font-family:var(--font-family--primary);line-height:1.6;font-size:var(--font-size--base);margin:0 0 var(--spacer-base)}.billing-list[data-v-b3c82fbe]{margin-bottom:var(--spacer-base)}.billing[data-v-b3c82fbe]{display:flex;padding:var(--spacer-xl) 0;border-top:1px solid var(--c-light)}.billing[data-v-b3c82fbe]:last-child{border-bottom:1px solid var(--c-light)}.billing__content[data-v-b3c82fbe]{flex:1;color:var(--c-text);font-size:var(--font-size--base);font-weight:300;line-height:1.6}.billing__actions[data-v-b3c82fbe]{flex:1;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-end}@media(min-width:1024px){.billing__actions[data-v-b3c82fbe]{flex-direction:row;align-items:center;justify-content:flex-end}}.billing__button-delete[data-v-b3c82fbe]{color:var(--c-link)}@media(min-width:1024px){.billing__button-delete[data-v-b3c82fbe]{margin-left:var(--spacer-base)}}.billing__address[data-v-b3c82fbe],.billing__address p[data-v-b3c82fbe]{margin:0}.billing__client-name[data-v-b3c82fbe]{font-size:var(--font-size--base);font-weight:500}.action-button[data-v-b3c82fbe]{width:100%}@media(min-width:1024px){.action-button[data-v-b3c82fbe]{width:auto}}@media(max-width:1023px){.tab-orphan[data-v-b3c82fbe]  .sf-tabs__title{display:none}.tab-orphan[data-v-b3c82fbe]  .sf-tabs__content{border:0;padding:0}}",""]),e.exports=r},774:function(e,t,n){"use strict";n.r(t);var r=n(5),d=(n(26),n(762)),l=n(17),o=n(15),c=n(513),f=n(514),v=n(16),_=n(1),m=n(11),h={name:"BillingDetails",components:{SfTabs:d.a,SfButton:l.a,SfIcon:o.a,UserBillingAddress:c.a,BillingAddressForm:f.a},setup:function(){var e=Object(v.k)(),t=e.billing,n=e.load,d=e.addAddress,l=e.deleteAddress,o=e.updateAddress,c=Object(_.computed)((function(){return v.o.getAddresses(t.value)})),f=Object(_.ref)(!1),h=Object(_.ref)(void 0),x=Object(_.computed)((function(){return!h.value})),A=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(t){var form,n,r,l,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return form=t.form,n=t.onComplete,r=t.onError,e.prev=1,l=x.value?d:o,e.next=5,l({address:form});case 5:return data=e.sent,f.value=!1,h.value=void 0,e.next=10,n(data);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),r(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.onSSR)(Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:case"end":return e.stop()}}),e)})))),{changeAddress:function(){var address=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;h.value=address,f.value=!0},updateAddress:o,removeAddress:function(address){return l({address:address})},saveAddress:A,userBillingGetters:v.o,addresses:c,edittingAddress:f,activeAddress:h,isNewAddress:x}}},x=(n(734),n(0)),component=Object(x.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade"}},[e.edittingAddress?n("SfTabs",{key:"edit-address",staticClass:"tab-orphan",attrs:{"open-tab":1}},[n("SfTab",{attrs:{title:e.isNewAddress?"Add the address":"Update the address"}},[n("p",{staticClass:"message"},[e._v("\n        "+e._s(e.$t("Contact details updated"))+"\n      ")]),e._v(" "),n("BillingAddressForm",{attrs:{address:e.activeAddress,isNew:e.isNewAddress},on:{submit:e.saveAddress}})],1)],1):n("SfTabs",{key:"address-list",staticClass:"tab-orphan",attrs:{"open-tab":1}},[n("SfTab",{attrs:{title:"Billing details"}},[n("p",{staticClass:"message"},[e._v("\n        "+e._s(e.$t("Manage billing addresses"))+"\n      ")]),e._v(" "),n("transition-group",{staticClass:"billing-list",attrs:{tag:"div",name:"fade"}},e._l(e.addresses,(function(address){return n("div",{key:e.userBillingGetters.getId(address),staticClass:"billing"},[n("div",{staticClass:"billing__content"},[n("div",{staticClass:"billing__address"},[n("UserBillingAddress",{attrs:{address:address}})],1)]),e._v(" "),n("div",{staticClass:"billing__actions"},[n("SfIcon",{staticClass:"smartphone-only",attrs:{icon:"cross",color:"gray",size:"14px",role:"button"},on:{click:function(t){return e.removeAddress(address)}}}),e._v(" "),n("SfButton",{on:{click:function(t){return e.changeAddress(address)}}},[e._v("\n              "+e._s(e.$t("Change"))+"\n            ")]),e._v(" "),n("SfButton",{staticClass:"color-light billing__button-delete desktop-only",on:{click:function(t){return e.removeAddress(address)}}},[e._v("\n              "+e._s(e.$t("Delete"))+"\n            ")])],1)])})),0),e._v(" "),n("SfButton",{staticClass:"action-button",on:{click:function(t){return e.changeAddress()}}},[e._v("\n        "+e._s(e.$t("Add new address"))+"\n      ")])],1)],1)],1)}),[],!1,null,"b3c82fbe",null);t.default=component.exports}}]);