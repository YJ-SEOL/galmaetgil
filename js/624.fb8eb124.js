"use strict";(self["webpackChunkfront_end"]=self["webpackChunkfront_end"]||[]).push([[624,978],{62793:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"page"},[s("main",{staticClass:"mypage"},[s("section",{staticClass:"profile",attrs:{"aria-label":"profile"}},[s("div",{staticClass:"profile__people"},[s("img",{staticClass:"profile__avatar",attrs:{src:a(88441),alt:"profile photo"}}),s("div",{staticClass:"profile__info"},[s("h1",[e._v(" "+e._s(e.currentUser.username)+" ")]),s("p",{staticClass:"profile__job"},[s("strong",[e._v("E-Mail :")]),e._v(" "+e._s(e.currentUser.email)+" ")]),s("p")])])]),s("section",{staticClass:"page__move container-fluid"},[s("div",{staticClass:"page__move__item container-fluid"},[s("button",{staticClass:"popup__button mr-3",attrs:{id:"myPageBtn"},on:{click:function(t){e.plogging=!0}}},[s("b",[e._v("MY PLOGGING")])]),s("button",{staticClass:"popup__button",attrs:{id:"myPageBtn"},on:{click:function(t){e.plogging=!1}}},[s("b",[e._v("MY GALLERY")])])]),e.plogging?s("div",{attrs:{id:"plogging"}},[s("Plogging")],1):s("div",{attrs:{id:"mygallary"}},[s("MyGallury")],1)])]),e._m(0)])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"popup-edit popup"},[a("div",{staticClass:"popup__container"},[a("button",{staticClass:"popup-edit__close-button popup__close-button",attrs:{type:"button"}}),a("h2",{staticClass:"popup__title"},[e._v("Edit name")]),a("form",{staticClass:"popup__form form-edit form",attrs:{name:"edit-form",id:"form-edit",novalidate:""}},[a("input",{staticClass:"popup__input popup__input_value_name form__input",attrs:{id:"form__input-text",type:"text",name:"name",placeholder:"이름",value:"",minlength:"2",maxlength:"40",required:""}}),a("span",{staticClass:"form__input-text-error"}),a("button",{staticClass:"popup__button",attrs:{type:"submit"}},[e._v("Save")])])])])}],i=(a(41539),a(78783),a(33948),a(60285),a(41637),a(46716)),n=a(78653),o=a(83597);const l={name:"Profile",components:{Plogging:i["default"],MyGallury:n["default"]},data:function(){return{plogging:!0,currentImage:void 0,previewImage:void 0,progress:0,message:"",mes:"",imageInfo:[],page:1,count:0,pageSize:3,pageSizes:[3,6,9],usernick:"",url:"",openModal:!1,clicked:!1,currentIndex:-1}},methods:{refreshList:function(){this.currentImage=null,this.currentIndex=-1,this.retrieveUpload()},getRequestParams:function(e,t,a,s){var r={};return e&&(r["username"]=e),t&&(r["usernick"]=t),a&&(r["page"]=a-1),s&&(r["size"]=s),console.log(r),r},retrieveUpload:function(){var e=this,t=this.getRequestParams(this.currentUser.username,this.currentUser.usernick,this.page,this.pageSize);console.log(t),o.Z.getFiles(t).then((function(t){e.imageInfo=t.data,e.count=e.imageInfo[0].totalItems})),console.log(t)},selectImage:function(){this.currentImage=this.$refs.file.files.item(0),this.previewImage=URL.createObjectURL(this.currentImage),this.progress=0,this.message=""},upload:function(){var e=this;this.progress=0,o.Z.upload(this.currentUser.username,this.currentUser.usernick,this.currentImage,(function(t){e.progress=Math.round(100*t.loaded/t.total)})).then((function(t){var a=e.getRequestParams(e.currentUser.username,e.currentUser.usernick,e.page,e.pageSize);return e.message=t.data.message,o.Z.getFiles(a)})).then((function(t){e.imageInfo=t.data,console.log("ㅋㅋㅋㅋㅋ"+t.data)}))["catch"]((function(t){e.progress=0,e.message="Could not upload the image!"+t,e.currentImage=void 0}))},deletePhoto:function(e){var t=this;o.Z["delete"](this.imageInfo[e].id).then((function(){alert("삭제가 완료되었습니다"),t.refreshList()}))["catch"]((function(e){alert(e)}))},handlePageChange:function(e){this.page=e,this.retrieveUpload()},handlePageSizeChange:function(e){this.pageSize=e.target.value,this.page=1,this.retrieveUpload()}},computed:{currentUser:function(){return this.$store.state.auth.user}},mounted:function(){this.currentUser||this.$router.push("/login"),this.retrieveUpload()}},u=l;var c=a(1001),p=(0,c.Z)(u,s,r,!1,null,"05fa972d",null);const g=p.exports},46716:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("main",{staticClass:"mypage"},[a("section",{staticClass:"plogging__info",attrs:{"aria-label":"plogging__info"}},[a("div",{staticClass:"profile__info"},[a("p",{staticClass:"elements__sum_title"},[a("strong",[e._v(e._s(e.count))]),e._v("번의 플로깅에 동참하셨습니다. ")])]),a("button",{staticClass:"open-popup profile__add-button ml-3",attrs:{type:"button","aria-label":"add button"}})]),a("section",{staticClass:"elements",attrs:{"aria-label":"photo"}},e._l(e.imageInfo,(function(t,s){return a("div",{key:s,staticClass:"card",attrs:{id:"element-template"}},[a("article",{staticClass:"element"},[a("button",{staticClass:"element__trash",attrs:{type:"button","aria-label":"delete button"},on:{click:function(t){return e.deletePhoto(s)}}}),a("img",{staticClass:"element__image",attrs:{src:t.url,alt:""}})])])})),0),a("div",{staticClass:"pageSelect"},[a("div",{staticClass:"pageSize"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.pageSize,expression:"pageSize"}],on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.pageSize=t.target.multiple?a:a[0]},function(t){return e.handlePageSizeChange(t)}]}},e._l(e.pageSizes,(function(t){return a("option",{key:t,domProps:{value:t}},[e._v(" "+e._s(t)+" ")])})),0),e._v(" 개씩 보기 ")]),a("div",{staticClass:"pagination"},[a("b-pagination",{attrs:{"total-rows":e.count,"per-page":e.pageSize,"prev-text":"Prev","next-text":"Next"},on:{change:e.handlePageChange},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}})],1)])]),a("div",{staticClass:"popup popup-add"},[a("div",{staticClass:"popup__container"},[a("button",{staticClass:"popup-add__close-button popup__close-button mt-3",attrs:{type:"button"}}),a("h2",{staticClass:"popup__title"},[e._v("New Photo")]),a("form",{staticClass:"popup__form form-add form",attrs:{name:"add-form",id:"form-add",novalidate:""}},[a("label",{staticClass:"form-label",attrs:{for:"formFileSm"}},[a("input",{ref:"file",staticClass:"form-control form-control-sm",attrs:{id:"formFileSm",type:"file",accept:"image/*"},on:{change:e.selectImage}})]),e.previewImage?a("div",{staticClass:"container add-image__preview"},[a("img",{staticClass:"add-image__image",attrs:{src:e.previewImage,alt:""}})]):e._e(),e.currentImage?a("div",{staticClass:"progress"},[a("div",{staticClass:"progress-bar progress-bar-striped progress-bar-animated bg-info",style:{width:e.progress+"%"},attrs:{role:"progressbar","aria-valuenow":e.progress,"aria-valuemin":"0","aria-valuemax":"100"}},[e._v(" "+e._s(e.progress)+"% ")])]):e._e(),a("span",{staticClass:"form__input-link-error"}),a("button",{staticClass:"popup__button popup-add__button form__button",attrs:{type:"submit",disabled:!e.currentImage},on:{click:e.upload}},[e._v(" Add Photo ")]),e.message?a("div",{staticClass:"alert alert-secondary",attrs:{role:"alert"}},[e._v(" "+e._s(e.message)+" ")]):e._e()])])])])},r=[],i=(a(41539),a(78783),a(33948),a(60285),a(41637),a(83597)),n=a(71253);const o={name:"Profile",data:function(){return{currentImage:void 0,previewImage:void 0,progress:0,message:"",mes:"",imageInfo:[],page:1,count:0,pageSize:3,pageSizes:[3,6,9],usernick:"",url:"",openModal:!1,clicked:!1,currentIndex:-1}},methods:{refreshList:function(){this.currentImage=null,this.currentIndex=-1,this.retrieveUpload()},getRequestParams:function(e,t,a,s){var r={};return e&&(r["username"]=e),t&&(r["usernick"]=t),a&&(r["page"]=a-1),s&&(r["size"]=s),console.log(r),r},retrieveUpload:function(){var e=this,t=this.getRequestParams(this.currentUser.username,this.currentUser.usernick,this.page,this.pageSize);console.log(t),i.Z.getFiles(t).then((function(t){e.imageInfo=t.data,e.count=e.imageInfo[0].totalItems})),console.log(t)},selectImage:function(){this.currentImage=this.$refs.file.files.item(0),this.previewImage=URL.createObjectURL(this.currentImage),this.progress=0,this.message=""},upload:function(){var e=this;this.progress=0,i.Z.upload(this.currentUser.username,this.currentUser.usernick,this.currentImage,(function(t){e.progress=Math.round(100*t.loaded/t.total)})).then((function(t){var a=e.getRequestParams(e.currentUser.username,e.currentUser.usernick,e.page,e.pageSize);return e.message=t.data.message,i.Z.getFiles(a)})).then((function(t){e.imageInfo=t.data,console.log("ㅋㅋㅋㅋㅋ"+t.data)}))["catch"]((function(t){e.progress=0,e.message="Could not upload the image!"+t,e.currentImage=void 0}))},deletePhoto:function(e){var t=this;i.Z["delete"](this.imageInfo[e].id).then((function(){alert("삭제가 완료되었습니다"),t.refreshList()}))["catch"]((function(e){alert(e)}))},handlePageChange:function(e){this.page=e,this.retrieveUpload()},handlePageSizeChange:function(e){this.pageSize=e.target.value,this.page=1,this.retrieveUpload()}},computed:{currentUser:function(){return this.$store.state.auth.user}},mounted:function(){this.currentUser||this.$router.push("/login"),this.retrieveUpload(),(0,n.Z)()}},l=o;var u=a(1001),c=(0,u.Z)(l,s,r,!1,null,"3ccf77c0",null);const p=c.exports},83597:(e,t,a)=>{a.d(t,{Z:()=>o});var s=a(76133),r=a(92751),i=a(32327),n=function(){function e(){(0,s.Z)(this,e)}return(0,r.Z)(e,[{key:"upload",value:function(e,t,a,s){var r=new FormData;return r.append("username",e),r.append("usernick",t),r.append("file",a),i.Z.post("/uploadpf",r,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:s})}},{key:"getFiles",value:function(e){return i.Z.get("/filespf",{params:e})}},{key:"delete",value:function(e){return i.Z.put("/filespf/deletion/".concat(e))}}]),e}();const o=new n},88441:(e,t,a)=>{e.exports=a.p+"img/portfolio-4.eb06faf7.jpg"}}]);
//# sourceMappingURL=624.fb8eb124.js.map