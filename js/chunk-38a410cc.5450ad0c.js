(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38a410cc","chunk-02830d84","chunk-8d71f8ec","chunk-2d0bd266"],{"0995":function(e,t,n){},1973:function(e,t,n){},"1deb":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"title"},[n("span",[e._v("修改图书")]),n("span",{staticClass:"back",on:{click:e.back}},[n("i",{staticClass:"iconfont icon-fanhui"}),e._v(" 返回 ")])]),n("el-divider"),n("div",{staticClass:"wrap"},[n("el-row",[n("el-col",{attrs:{lg:16,md:20,sm:24,xs:24}},[n("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"form",attrs:{model:e.form,"status-icon":"","label-width":"100px"},nativeOn:{submit:function(e){e.preventDefault()}}},[n("el-form-item",{attrs:{label:"书名",prop:"title"}},[n("el-input",{attrs:{size:"medium",placeholder:"请填写书名"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),n("el-form-item",{attrs:{label:"作者",prop:"author"}},[n("el-input",{attrs:{size:"medium",placeholder:"请填写作者"},model:{value:e.form.author,callback:function(t){e.$set(e.form,"author",t)},expression:"form.author"}})],1),n("el-form-item",{attrs:{label:"封面",prop:"image"}},[n("el-input",{attrs:{size:"medium",placeholder:"请填写封面地址"},model:{value:e.form.image,callback:function(t){e.$set(e.form,"image",t)},expression:"form.image"}})],1),n("el-form-item",{attrs:{label:"简介",prop:"summary"}},[n("el-input",{attrs:{size:"medium",type:"textarea",rows:4,placeholder:"请输入简介"},model:{value:e.form.summary,callback:function(t){e.$set(e.form,"summary",t)},expression:"form.summary"}})],1),n("el-form-item",{staticClass:"submit"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("保 存")]),n("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("重 置")])],1)],1)],1)],1)],1)],1)},r=[],i=n("a34a"),o=n.n(i),l=n("2b88");function s(e,t,n,a,r,i,o){try{var l=e[i](o),s=l.value}catch(u){return void n(u)}l.done?t(s):Promise.resolve(s).then(a,r)}function u(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var i=e.apply(t,n);function o(e){s(i,a,r,o,l,"next",e)}function l(e){s(i,a,r,o,l,"throw",e)}o(void 0)})}}var c={props:{editBookID:{type:Number}},data:function(){return{loading:!1,form:{title:"",author:"",summary:"",image:""}}},mounted:function(){var e=u(o.a.mark(function e(){return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,l["default"].getBook(this.editBookID);case 3:this.form=e.sent,this.loading=!1;case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),methods:{submitForm:function(){var e=u(o.a.mark(function e(){var t;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l["default"].editBook(this.editBookID,this.form);case 2:t=e.sent,0===t.error_code&&(this.$message.success("".concat(t.msg)),this.$emit("editClose"));case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),resetForm:function(e){this.$refs[e].resetFields()},back:function(){this.$emit("editClose")}}},d=c,f=(n("ef8d"),n("2877")),h=Object(f["a"])(d,a,r,!1,null,"4b55310f",null);t["default"]=h.exports},"2b88":function(e,t,n){"use strict";n.r(t);var a=n("a34a"),r=n.n(a),i=n("dfd8");function o(e,t,n,a,r,i,o){try{var l=e[i](o),s=l.value}catch(u){return void n(u)}l.done?t(s):Promise.resolve(s).then(a,r)}function l(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var i=e.apply(t,n);function l(e){o(i,a,r,l,s,"next",e)}function s(e){o(i,a,r,l,s,"throw",e)}l(void 0)})}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}var d=function(){function e(){s(this,e)}return c(e,[{key:"addBook",value:function(){var e=l(r.a.mark(function e(t){var n;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["post"])("v1/book",t,{handleError:!0});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getBook",value:function(){var e=l(r.a.mark(function e(t){var n;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["get"])("v1/book/".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"editBook",value:function(){var e=l(r.a.mark(function e(t,n){var a;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["put"])("v1/book/".concat(t),n);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"delectBook",value:function(){var e=l(r.a.mark(function e(t){var n;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["_delete"])("v1/book/".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getBooks",value:function(){var e=l(r.a.mark(function e(){var t;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["get"])("v1/book",{handleError:!0});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()}]),e}();t["default"]=new d},"4bf9":function(e,t,n){},"6e10":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"lin-table"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"linTable",attrs:{stripe:"","row-key":"id",border:e.border,data:e.currentData,"highlight-current-row":!!e.highlightCurrentRow,"element-loading-text":e.loadingText,"element-loading-spinner":e.loadingIcon,"element-loading-background":e.loadingBG,"row-class-name":e.rowClassName},on:{"current-change":e.handleCurrentChange,"selection-change":e.handleSelectionChange,"select-all":e.selectAll,"row-click":e.rowClick}},[e.type?n("el-table-column",{attrs:{type:e.type,width:"55"}}):e._e(),e.index?n("el-table-column",{attrs:{type:e.index,index:e.currentIndex,width:"55"}}):e._e(),e._l(e.filterTableColumn,function(e){return n("el-table-column",{key:e.id,attrs:{prop:e.prop,label:e.label,"show-overflow-tooltip":!0,filters:e.filters?e.filters:null,"filter-method":e.filterMethod?e.filterMethod:null,"column-key":e.filterMethod?e.prop:null,formatter:e.formatter?e.formatter:null,sortable:!!e.sortable&&e.sortable,fixed:!!e.fixed&&e.fixed,width:e.width?e.width:""}})}),e.operate.length>0?n("el-table-column",{attrs:{label:"操作",fixed:"right",width:"175"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(e.operate,function(a,r){return n("el-button",{directives:[{name:"auth",rawName:"v-auth",value:{auth:a.auth?a.auth:"",type:"disabled"},expression:"{ auth: item.auth ? item.auth : '', type: 'disabled' }"}],key:r,attrs:{type:a.type,plain:"",size:"mini"},nativeOn:{click:function(n){return n.preventDefault(),n.stopPropagation(),e.buttonMethods(a.func,t.$index,t.row)}}},[e._v(e._s(a.name))])})}}],null,!1,206950486)}):e._e()],2),e.pagination?n("el-pagination",{staticClass:"pagination",attrs:{background:"",layout:"prev, pager, next","page-size":e.pagination.pageSize?e.pagination.pageSize:10,total:e.pagination.pageTotal?e.pagination.pageTotal:null},on:{"current-change":e.currentChange}}):e._e()],1)},r=[];function i(e){return s(e)||l(e)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function l(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function s(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}var u={props:{tableColumn:{type:Array,default:function(){return[]}},tableData:{type:Array,default:function(){return[]}},operate:{type:Array,default:function(){return[]}},customColumn:{type:Array,default:function(){return[]}},fixedLeftList:{type:Array,default:function(){return[]}},fixedRightList:{type:Array,default:function(){return[]}},type:{type:String,default:null},index:{index:String,default:""},highlightCurrentRow:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},loadingText:{type:String,default:""},loadingIcon:{type:String,default:"el-icon-loading"},loadingBG:{type:String,default:"rgba(255,255,255,0.5)"},pagination:{type:[Object,Boolean],default:!1},border:{type:Boolean,default:!1}},data:function(){return{filterTableColumn:[],currentPage:1,currentData:[],selectedTableData:[],currentRow:null,oldVal:[],oldKey:[],currentIndex:1,rowClassName:""}},created:function(){},beforeMount:function(){sessionStorage.setItem("selectedTableData",JSON.stringify([]))},methods:{buttonMethods:function(e,t,n){var a=this,r=this.$options.methods;r[e](a,t,n)},handleEdit:function(e,t,n){e.$emit("handleEdit",{index:t,row:n})},handleDelete:function(e,t,n){e.$emit("handleDelete",{index:t,row:n})},toggleSelection:function(e,t){var n=this;e?e.forEach(function(e){n.$refs.linTable.toggleRowSelection(e,t)}):this.$refs.linTable.clearSelection()},selectAll:function(e){this.oldKey=e.map(function(e){return e.key})},handleCurrentChange:function(e,t){this.currentRow=e,this.$emit("handleCurrentChange",{val:e,oldVal:t})},rowClick:function(e){if(this.oldKey.includes(e.key)){this.oldKey=this.oldKey.filter(function(t){return t!==e.key});var t=this.oldVal.filter(function(t){return t.key!==e.key});this.handleSelectionChange(t),this.toggleSelection(this.currentData.filter(function(t){return t.key===e.key}),!1)}else{this.oldKey.push(e.key);var n=this.oldVal.concat(e);this.handleSelectionChange(n),this.toggleSelection(this.currentData.filter(function(t){return t.key===e.key}))}if(this.currentOldRow&&this.currentOldRow.key===e.key)return this.$refs.linTable.setCurrentRow(),void(this.currentOldRow=null);this.currentOldRow=e},currentChange:function(e){var t=this,n=[];this.oldVal=[],this.currentPage=e,this.selectedTableData=JSON.parse(sessionStorage.getItem("selectedTableData")),this.currentData=this.tableData.filter(function(e,n){return n>=(t.currentPage-1)*t.pagination.pageSize&&n<t.currentPage*t.pagination.pageSize}),this.$emit("currentChange",e),this.selectedTableData.forEach(function(e){for(var a=0;a<t.currentData.length;a++)t.currentData[a].key===e.key&&(t.oldVal.push(t.currentData[a]),n.push(t.currentData[a]))}),this.$nextTick(function(){t.toggleSelection(n)}),this.currentIndex=(this.currentPage-1)*this.pagination.pageSize+1},handleSelectionChange:function(e){var t=e.map(function(e){return e.key}),n=this.oldVal.map(function(e){return e.key});if(this.selectedTableData=JSON.parse(sessionStorage.getItem("selectedTableData")),0===this.selectedTableData.length)return this.selectedTableData=this.selectedTableData.concat(e),this.$emit("selection-change",this.selectedTableData),this.oldVal=i(e),void sessionStorage.setItem("selectedTableData",JSON.stringify(this.selectedTableData));if(t.length<n.length){var a=n.filter(function(e){return!t.includes(e)});this.selectedTableData=this.selectedTableData.filter(function(e){return!a.includes(e.key)}),this.$emit("selection-change",this.selectedTableData)}else{var r=t.filter(function(e){return!n.includes(e)}),o=e.filter(function(e){return r.includes(e.key)});this.selectedTableData=this.selectedTableData.concat(o),this.$emit("selection-change",this.selectedTableData)}sessionStorage.setItem("selectedTableData",JSON.stringify(this.selectedTableData)),this.oldVal=i(e)}},watch:{fixedLeftList:{handler:function(){var e=this;this.filterTableColumn.map(function(t,n){return e.fixedLeftList.indexOf(t.label)>-1?e.$set(e.filterTableColumn[n],"fixed","left"):-1===e.fixedRightList.indexOf(t.label)&&e.$set(e.filterTableColumn[n],"fixed",!1),""})},deep:!0,immediate:!0},fixedRightList:{handler:function(){var e=this;this.filterTableColumn.map(function(t,n){return e.fixedRightList.indexOf(t.label)>-1?e.$set(e.filterTableColumn[n],"fixed","right"):-1===e.fixedLeftList.indexOf(t.label)&&e.$set(e.filterTableColumn[n],"fixed",!1),""})},deep:!0,immediate:!0},customColumn:{handler:function(e){e.length>1&&(this.filterTableColumn=this.tableColumn.filter(function(t){return e.indexOf(t.label)>-1}))},deep:!0},tableData:{handler:function(){var e=this;this.pagination&&this.pagination.pageSize?this.currentData=this.tableData.filter(function(t,n){return n<e.pagination.pageSize}):this.currentData=this.tableData},deep:!0,immediate:!0},tableColumn:{handler:function(){var e=this;this.customColumn.length>1?this.filterTableColumn=this.tableColumn.filter(function(t){return e.customColumn.indexOf(t.label)>-1}):this.filterTableColumn=this.tableColumn},deep:!0,immediate:!0}}},c=u,d=(n("d51e"),n("980e"),n("2877")),f=Object(d["a"])(c,a,r,!1,null,"38e69034",null);t["default"]=f.exports},"980e":function(e,t,n){"use strict";var a=n("cfa4"),r=n.n(a);r.a},bf20:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.showEdit?n("book-edit",{attrs:{editBookID:e.editBookID},on:{editClose:e.editClose}}):n("div",{staticClass:"container"},[e._m(0),n("lin-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{tableColumn:e.tableColumn,tableData:e.tableData,operate:e.operate},on:{handleEdit:e.handleEdit,handleDelete:e.handleDelete,"row-click":e.rowClick}})],1)],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("div",{staticClass:"title"},[e._v("图书列表")])])}],i=n("a34a"),o=n.n(i),l=n("2b88"),s=n("6e10"),u=n("1deb");function c(e,t,n,a,r,i,o){try{var l=e[i](o),s=l.value}catch(u){return void n(u)}l.done?t(s):Promise.resolve(s).then(a,r)}function d(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var i=e.apply(t,n);function o(e){c(i,a,r,o,l,"next",e)}function l(e){c(i,a,r,o,l,"throw",e)}o(void 0)})}}var f={components:{LinTable:s["default"],BookEdit:u["default"]},data:function(){return{tableColumn:[{prop:"title",label:"书名"},{prop:"author",label:"作者"}],tableData:[],operate:[],showEdit:!1,editBookID:1}},created:function(){var e=d(o.a.mark(function e(){return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,this.getBooks();case 3:this.operate=[{name:"编辑",func:"handleEdit",type:"primary"},{name:"删除",func:"handleDelete",type:"danger",auth:"删除图书"}],this.loading=!1;case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),methods:{getBooks:function(){var e=d(o.a.mark(function e(){var t;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l["default"].getBooks();case 3:t=e.sent,this.tableData=t,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),10020===e.t0.error_code&&(this.tableData=[]);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(){return e.apply(this,arguments)}return t}(),handleEdit:function(e){console.log("val",e),this.showEdit=!0,this.editBookID=e.row.id},handleDelete:function(e){var t=this;this.$confirm("此操作将永久删除该图书, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(d(o.a.mark(function n(){var a;return o.a.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,l["default"].delectBook(e.row.id);case 2:a=n.sent,0===a.error_code&&(t.getBooks(),t.$message({type:"success",message:"".concat(a.msg)}));case 4:case"end":return n.stop()}},n)})))},rowClick:function(){},editClose:function(){this.showEdit=!1,this.getBooks()}}},h=f,p=(n("d9db"),n("2877")),m=Object(p["a"])(h,a,r,!1,null,"65b4d6d8",null);t["default"]=m.exports},cfa4:function(e,t,n){},d51e:function(e,t,n){"use strict";var a=n("0995"),r=n.n(a);r.a},d9db:function(e,t,n){"use strict";var a=n("1973"),r=n.n(a);r.a},ef8d:function(e,t,n){"use strict";var a=n("4bf9"),r=n.n(a);r.a}}]);