(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{374:function(t,e,l){var content=l(426);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(6).default)("ed832812",content,!0,{sourceMap:!1})},425:function(t,e,l){"use strict";l(374)},426:function(t,e,l){var n=l(5)(!1);n.push([t.i,".billing-list[data-v-6983b80c]{display:flex;flex-wrap:wrap;margin-left:-10px;margin-right:-10px}.billing-list .billing[data-v-6983b80c]{padding-left:10px;padding-right:10px;flex:0 0 50%;max-width:50%;min-height:180px}@media(max-width:767px){.billing-list .billing[data-v-6983b80c]{flex:0 0 100%;max-width:100%}}.billing-list .billing[data-v-6983b80c]:nth-child(n+3){margin-top:20px}@media(max-width:767px){.billing-list .billing[data-v-6983b80c]:nth-child(n+3){margin-top:0}}@media(max-width:767px){.billing-list .billing+.billing[data-v-6983b80c]{margin-top:20px}}.billing-list .billing .billing__wrap[data-v-6983b80c]{border:1px solid var(--_c-gray-DDDDDD);border-radius:6px;padding:20px 15px 15px 20px;height:100%;display:flex;flex-direction:column;justify-content:space-between}.billing-list .billing.add-address-btn .billing__wrap[data-v-6983b80c]{padding:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer}.billing-list .billing.add-address-btn .billing__wrap:hover .sf-button[data-v-6983b80c]{color:var(--c-primary);--icon-color:var(--c-primary)}.billing-list .billing.add-address-btn .sf-button[data-v-6983b80c]{color:var(--c-black);--icon-color:var(--c-black);text-decoration:none;display:flex;align-items:center;font-weight:400;transition:all .3s ease 0s}.billing-list .billing.add-address-btn .sf-button[data-v-6983b80c]:hover{color:var(--c-primary);--icon-color:var(--c-primary)}.billing-list .billing.add-address-btn .sf-button .sf-icon[data-v-6983b80c]{width:21px;height:21px;margin-right:10px}.billing-list .billing.add-address-btn .sf-button .sf-icon svg path[data-v-6983b80c]{transition:all .3s ease 0s}.billing__actions[data-v-6983b80c]{display:flex;justify-content:flex-end;margin-top:28px}@media(max-width:1023px){.billing__actions[data-v-6983b80c]{margin-top:10px}}.billing__actions .sf-button[data-v-6983b80c]{color:var(--c-primary);font-size:12px;transition:all .3s ease 0s}.billing__actions .sf-button+.sf-button[data-v-6983b80c]{border-left:1px solid var(--_c-gray-888888);margin-left:10px;padding-left:10px}.billing__actions .sf-button[data-v-6983b80c]:hover{color:var(--_c-black-171717)}.address-loader[data-v-6983b80c]{margin:100px 0}",""]),t.exports=n},522:function(t,e,l){"use strict";l.r(e);var n=l(4),d=l(12),r=l(9),o=l(75),c=l(336),v=l(335),f=l(432),m=l(433),_=l(11),y=l(1),h=l(8),x=l(94),w={name:"AdressBook",components:{SfButton:d.a,SfIcon:r.a,SfHeading:o.a,SfLoader:c.a,SfNotification:v.a,UserBillingAddress:f.a,BillingAddressForm:m.a},props:{title:{type:String,default:"Address Book"}},data:()=>({visible:!1,addressToRemove:{}}),methods:{ConfirmRemove(address){this.visible=!0,this.addressToRemove=address},handleRemove(address){var t=this;return Object(n.a)((function*(){t.isLoadervisible=!0,yield t.removeAddress(address).then((()=>{t.visible=!1}))}))()}},setup(){var{billing:t,load:e,addAddress:l,deleteAddress:d,updateAddress:r,loading:o}=Object(_.k)(),c=Object(y.computed)((()=>_.o.getAddresses(t.value))),v=Object(y.ref)(!1),f=Object(y.ref)(void 0),m=Object(y.computed)((()=>!f.value)),{send:w}=Object(x.a)(),A=function(){var l=Object(n.a)((function*(address){return yield d({address:address}).then((()=>{t.value?(e(),w({key:"address_removed",message:"Address has been removed successfully",type:"success",title:"Address removed!",icon:"check"})):w({key:"address_removed",message:"Something went wrong, please retry",type:"danger",title:"Remove address failed!"})}))}));return function(t){return l.apply(this,arguments)}}(),k=function(){var d=Object(n.a)((function*(n){var{form:form,onComplete:d,onError:o}=n;try{var c=m.value?l:r,_="Addressbook updated successfully";m.value&&(_="Address added successfully");var data=yield c({address:form.value}).then((()=>{t.value?(e(),w({key:"address_success",message:_,type:"success",title:"Success!",icon:"check"})):w({key:"address_failed",message:"Somethig went wrong, please retry",type:"danger",title:"Failed!"})}));v.value=!1,f.value=void 0,yield d(data)}catch(t){o(t)}}));return function(t){return d.apply(this,arguments)}}();return Object(h.onSSR)(Object(n.a)((function*(){yield e()}))),{changeAddress:function(){var address=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;f.value=address,v.value=!0},updateAddress:r,removeAddress:A,saveAddress:k,userBillingGetters:_.o,addresses:c,edittingAddress:v,activeAddress:f,isNewAddress:m,loading:o}}},A=(l(425),l(0)),component=Object(A.a)(w,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"my_account_content_wrap"},[l("div",{staticClass:"my_accoutn_title_wrap"},[l("SfHeading",{staticClass:"my_accoutn_title",attrs:{level:1,title:t.title}})],1),t._v(" "),t.edittingAddress?l("div",{staticClass:"tab-orphan"},[l("div",{attrs:{"data-cy":"billing-details-tab_change"}},[l("BillingAddressForm",{attrs:{address:t.activeAddress,isNew:t.isNewAddress},on:{submit:t.saveAddress}})],1)]):l("div",{staticClass:"tab-orphan"},[l("transition",{attrs:{name:"sf-collapse-top",mode:"out-in"}},[l("div",{staticClass:"notifications"},[t.loading?t._e():l("SfNotification",{attrs:{visible:t.visible,title:"Are you sure?",message:"Are you sure you would like to remove this address from your account?",type:"secondary"},scopedSlots:t._u([{key:"action",fn:function(){return[l("div",{staticClass:"button-wrap"},[l("SfButton",{on:{click:function(e){return t.handleRemove(t.addressToRemove)}}},[t._v("Yes")]),t._v(" "),l("SfButton",{on:{click:function(e){t.visible=!1}}},[t._v("Cancel")])],1)]},proxy:!0},{key:"close",fn:function(){return[l("div")]},proxy:!0}],null,!1,1994956572)})],1)]),t._v(" "),t.loading?l("SfLoader",{staticClass:"address-loader",class:{loading:t.loading},attrs:{loading:t.loading}},[l("div")]):t._e(),t._v(" "),t.loading?t._e():l("div",{attrs:{"data-cy":"billing-details-tab_details"}},[l("div",{staticClass:"billing-list"},[t._l(t.addresses,(function(address){return l("div",{key:t.userBillingGetters.getId(address),staticClass:"billing"},[l("div",{staticClass:"billing__wrap"},[l("div",{staticClass:"billing__content"},[l("div",{staticClass:"billing__address"},[l("UserBillingAddress",{attrs:{address:address}})],1)]),t._v(" "),l("div",{staticClass:"billing__actions"},[l("SfButton",{staticClass:" sf-button--text",attrs:{"data-cy":"billing-details-btn_change"},on:{click:function(e){t.changeAddress(address),t.scrollToTop()}}},[t._v("\n                Edit\n              ")]),t._v(" "),l("SfButton",{staticClass:"billing__button-delete sf-button--text",attrs:{"data-cy":"billing-details-btn_delete"},on:{click:function(e){return t.ConfirmRemove(address)}}},[t._v("\n                Delete\n              ")])],1)])])})),t._v(" "),l("div",{staticClass:"billing add-address-btn"},[l("div",{staticClass:"billing__wrap",on:{click:function(e){t.changeAddress(),t.scrollToTop()}}},[l("SfButton",{staticClass:"action-button sf-button--text",attrs:{"data-cy":"billing-details-btn_add"}},[l("SfIcon",{attrs:{icon:"plus"}}),t._v("\n              Add Address\n            ")],1)],1)])],2)])],1)])}),[],!1,null,"6983b80c",null);e.default=component.exports}}]);