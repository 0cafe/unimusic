(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28cacdde","chunk-2d22d9c7","chunk-2d0c53b3"],{"3de1":function(t,e,n){"use strict";function r(t){var e=t.split("/"),n=e[4]+"/"+e[5];return n}n.r(e),n.d(e,"src",function(){return r})},"3f7d":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"title"},[n("span",[t._v("编辑歌手")]),n("span",{staticClass:"back",on:{click:t.back}},[n("i",{staticClass:"iconfont icon-fanhui"}),t._v(" 返回 ")])]),n("el-divider"),n("div",{staticClass:"wrap"},[n("el-row",[n("el-col",{attrs:{lg:16,md:20,sm:24,xs:24}},[n("el-form",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"form",attrs:{model:t.form,"status-icon":"","label-width":"200px"},nativeOn:{submit:function(t){t.preventDefault()}}},[n("el-form-item",{attrs:{label:"歌手名",prop:"name"}},[n("el-input",{attrs:{size:"medium",placeholder:"请填写"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),n("el-form-item",{attrs:{label:"歌单封面"}},[n("upload-imgs",{ref:"uploadEle",attrs:{value:t.initData,multiple:!0,"max-num":1,"auto-upload":!0}})],1),n("el-form-item",{staticClass:"submit"},[n("el-button",{directives:[{name:"auth",rawName:"v-auth",value:{auth:"创建歌单",type:"disabled"},expression:"{auth:'创建歌单', type: 'disabled'}"}],attrs:{type:"primary"},on:{click:function(e){return t.submitForm("form")}}},[t._v("提 交")]),n("el-button",{on:{click:function(e){return t.resetForm("form")}}},[t._v("重 置")])],1)],1)],1)],1)],1)],1)},a=[],i=n("a34a"),s=n.n(i),u=n("e0ba"),c=n("f7dd"),o=n("3de1");function l(t,e,n,r,a,i,s){try{var u=t[i](s),c=u.value}catch(o){return void n(o)}u.done?e(c):Promise.resolve(c).then(r,a)}function f(t){return function(){var e=this,n=arguments;return new Promise(function(r,a){var i=t.apply(e,n);function s(t){l(i,r,a,s,u,"next",t)}function u(t){l(i,r,a,s,u,"throw",t)}s(void 0)})}}var p={data:function(){return{form:{},initData:[],loading:!1,fileList:"",uploadUrl:"http://muscafe/index.php/cms/file",addSong:!1}},props:{editID:Number},components:{uploadImgs:u["default"]},methods:{submitForm:function(){var t=f(s.a.mark(function t(e){var n;return s.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this.getValue();case 3:if(console.log(this.form),this.form.img&&this.form.name){t.next=7;break}return this.loading=!1,t.abrupt("return",this.$message.error("请完整填写"));case 7:return t.next=9,c["default"].editSinger(this.form);case 9:n=t.sent,0===n.error_code?(this.$message.success("".concat(n.msg)),this.back()):this.$message.error(n.data.msg),this.loading=!1;case 12:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),resetForm:function(t){this.$refs[t].resetFields()},back:function(){this.$emit("editClose")},getSinger:function(){var t=f(s.a.mark(function t(e){var n;return s.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c["default"].getSinger(e);case 2:n=t.sent,this.form=n;case 4:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),getValue:function(){var t=f(s.a.mark(function t(){var e,n;return s.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$refs["uploadEle"].getValue();case 2:if(e=t.sent,n=e[0].src,n){t.next=6;break}return t.abrupt("return");case 6:this.form.img=n;case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),doClear:function(){this.$refs["uploadEle"].clear()},initUpload:function(t){this.initData=[{id:"",src:"",display:t,img_id:""}]}},created:function(){var t=f(s.a.mark(function t(){return s.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getSinger(this.editID);case 2:this.initUpload(this.form.img),1==this.form.from&&(this.form.img=Object(o["src"])(this.form.img),console.log(this.form));case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),mounted:function(){var t=f(s.a.mark(function t(){return s.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()},d=p,m=(n("5b6f"),n("2877")),h=Object(m["a"])(d,r,a,!1,null,"35772042",null);e["default"]=h.exports},"5b6f":function(t,e,n){"use strict";var r=n("9832"),a=n.n(r);a.a},9832:function(t,e,n){},f7dd:function(t,e,n){"use strict";n.r(e);var r=n("a34a"),a=n.n(r),i=n("dfd8");function s(t,e,n,r,a,i,s){try{var u=t[i](s),c=u.value}catch(o){return void n(o)}u.done?e(c):Promise.resolve(c).then(r,a)}function u(t){return function(){var e=this,n=arguments;return new Promise(function(r,a){var i=t.apply(e,n);function u(t){s(i,r,a,u,c,"next",t)}function c(t){s(i,r,a,u,c,"throw",t)}u(void 0)})}}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}var f=function(){function t(){c(this,t)}return l(t,[{key:"addSinger",value:function(){var t=u(a.a.mark(function t(e){var n;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["post"])("v1/singer",e,{handleError:!0});case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"getSinger",value:function(){var t=u(a.a.mark(function t(e){var n;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["get"])("v1/singer/".concat(e));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"editSinger",value:function(){var t=u(a.a.mark(function t(e){var n;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["put"])("v1/singer",e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"delectSinger",value:function(){var t=u(a.a.mark(function t(e){var n;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["_delete"])("v1/singer/".concat(e));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"getSingers",value:function(){var t=u(a.a.mark(function t(e){var n;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["get"])("v1/singer",e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"getSingerInList",value:function(){var t=u(a.a.mark(function t(e){var n;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["get"])("v1/singer/list/"+e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()}]),t}();e["default"]=new f}}]);