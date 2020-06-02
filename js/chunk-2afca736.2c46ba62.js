(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2afca736"],{a955:function(e,t,n){},ac35:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"lin-container"},[n("div",{staticClass:"lin-title"},[e._v("Message 消息提示")]),n("div",{staticClass:"lin-wrap-ui"},[n("el-card",{staticStyle:{"margin-bottom":"50px"}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("span",[e._v("基础用法")])]),n("el-row",[n("div",[[n("el-button",{attrs:{plain:!0},on:{click:e.open}},[e._v("打开消息提示")]),n("el-button",{attrs:{plain:!0},on:{click:e.openVn}},[e._v("VNode")])]],2)]),n("el-collapse",[n("el-collapse-item",{attrs:{title:"查看代码",name:"2"}},[n("div",{staticStyle:{"white-space":"pre-wrap"}},[e._v(e._s(e.base))])])],1)],1),n("el-card",{staticStyle:{"margin-bottom":"50px"}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("span",[e._v("不同状态")])]),n("el-row",[n("div",[[n("el-button",{attrs:{plain:!0},on:{click:e.open2}},[e._v("成功")]),n("el-button",{attrs:{plain:!0},on:{click:e.open3}},[e._v("警告")]),n("el-button",{attrs:{plain:!0},on:{click:e.open1}},[e._v("消息")]),n("el-button",{attrs:{plain:!0},on:{click:e.open4}},[e._v("错误")])]],2)]),n("el-collapse",{staticClass:"test",staticStyle:{color:"red"}},[n("el-collapse-item",{attrs:{title:"查看代码",name:"2"}},[n("div",{staticStyle:{"white-space":"pre-wrap"}},[e._v(e._s(e.type))])])],1)],1),n("el-card",{staticStyle:{"margin-bottom":"50px"}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("span",[e._v("可关闭")])]),n("el-row",[n("div",[[n("el-button",{attrs:{plain:!0},on:{click:e.open5}},[e._v("消息")]),n("el-button",{attrs:{plain:!0},on:{click:e.open6}},[e._v("成功")]),n("el-button",{attrs:{plain:!0},on:{click:e.open7}},[e._v("警告")]),n("el-button",{attrs:{plain:!0},on:{click:e.open8}},[e._v("错误")])]],2)]),n("el-collapse",{staticClass:"test",staticStyle:{color:"red"}},[n("el-collapse-item",{attrs:{title:"查看代码",name:"2"}},[n("div",{staticStyle:{"white-space":"pre-wrap"}},[e._v(e._s(e.showClose))])])],1)],1),n("el-card",{staticStyle:{"margin-bottom":"50px"}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("span",[e._v("文字居中")])]),n("el-row",[n("div",[[n("el-button",{attrs:{plain:!0},on:{click:e.openCenter}},[e._v("文字居中")])]],2)]),n("el-collapse",[n("el-collapse-item",{attrs:{title:"查看代码",name:"2"}},[n("div",{staticStyle:{"white-space":"pre-wrap"}},[e._v(e._s(e.center))])])],1)],1),n("el-card",{staticStyle:{"margin-bottom":"50px"}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("span",[e._v("使用 HTML 片段")])]),n("el-row",[n("div",[[n("el-button",{attrs:{plain:!0},on:{click:e.openHTML}},[e._v("使用 HTML 片段")])]],2)]),n("el-collapse",[n("el-collapse-item",{attrs:{title:"查看代码",name:"2"}},[n("div",{staticStyle:{"white-space":"pre-wrap"}},[e._v(e._s(e.dangerouslyUseHTMLString))])])],1)],1)],1)])},o=[],l={name:"LinCmsUiButton",components:{},data:function(){return{base:"     \n        <template>\n          <el-button :plain=\"true\" @click=\"open\">打开消息提示</el-button>\n          <el-button :plain=\"true\" @click=\"openVn\">VNode</el-button>\n        </template>\n\n        <script>\n          export default {\n            methods: {\n              open() {\n                this.$message('这是一条消息提示')\n              },\n\n              openVn() {\n                const h = this.$createElement\n                this.$message({\n                  message: h('p', null, [\n                    h('span', null, '内容可以是 '),\n                    h('i', { style: 'color: teal' }, 'VNode')\n                  ])\n                })\n              }\n            }\n          }\n        <\/script>",type:'\n      <template>\n        <el-button :plain="true" @click="open2">成功</el-button>\n        <el-button :plain="true" @click="open3">警告</el-button>\n        <el-button :plain="true" @click="open1">消息</el-button>\n        <el-button :plain="true" @click="open4">错误</el-button>\n      </template>\n\n      <script>\n        export default {\n          methods: {\n            open1() {\n              this.$message(\'这是一条消息提示\')\n            },\n            open2() {\n              this.$message({\n                message: \'恭喜你，这是一条成功消息\',\n                type: \'success\'\n              })\n            },\n\n            open3() {\n              this.$message({\n                message: \'警告哦，这是一条警告消息\',\n                type: \'warning\'\n              });\n            },\n\n            open4() {\n              this.$message.error(\'错了哦，这是一条错误消息\');\n            }\n          }\n        }\n      <\/script>',showClose:'\n        <template>\n          <el-button :plain="true" @click="open1">消息</el-button>\n          <el-button :plain="true" @click="open2">成功</el-button>\n          <el-button :plain="true" @click="open3">警告</el-button>\n          <el-button :plain="true" @click="open4">错误</el-button>\n        </template>\n\n        <script>\n          export default {\n            methods: {\n              open1() {\n                this.$message({\n                  showClose: true,\n                  message: \'这是一条消息提示\'\n                });\n              },\n\n              open2() {\n                this.$message({\n                  showClose: true,\n                  message: \'恭喜你，这是一条成功消息\',\n                  type: \'success\'\n                });\n              },\n\n              open3() {\n                this.$message({\n                  showClose: true,\n                  message: \'警告哦，这是一条警告消息\',\n                  type: \'warning\'\n                });\n              },\n\n              open4() {\n                this.$message({\n                  showClose: true,\n                  message: \'错了哦，这是一条错误消息\',\n                  type: \'error\'\n                });\n              }\n            }\n          }\n        <\/script>',center:'\n        <template>\n          <el-button :plain="true" @click="openCenter">文字居中</el-button>\n        </template>\n\n        <script>\n          export default {\n            methods: {\n              openCenter() {\n                this.$message({\n                  message: \'居中的文字\',\n                  center: true\n                });\n              }\n            }\n          }\n        <\/script>\n       ',dangerouslyUseHTMLString:'\n        <template>\n          <el-button :plain="true" @click="openHTML">使用 HTML 片段</el-button>\n        </template>\n\n        <script>\n          export default {\n            methods: {\n              openHTML() {\n                this.$message({\n                  dangerouslyUseHTMLString: true,\n                  message: \'<strong>这是 <i>HTML</i> 片段</strong>\'\n                });\n              }\n            }\n          }\n        <\/script>'}},computed:{},watch:{},mounted:function(){this.init()},methods:{openHTML:function(){this.$message({dangerouslyUseHTMLString:!0,message:"<strong>这是 <i>HTML</i> 片段</strong>"})},openCenter:function(){this.$message({message:"居中的文字",center:!0})},open:function(){this.$message("这是一条消息提示")},openVn:function(){var e=this.$createElement;this.$message({message:e("p",null,[e("span",{style:"color: #3963BC"},"内容可以是 "),e("i",{style:"color: #3963BC"},"VNode")])})},open1:function(){this.$message("这是一条消息提示")},open2:function(){this.$message({message:"恭喜你，这是一条成功消息",type:"success"})},open3:function(){this.$message({message:"警告哦，这是一条警告消息",type:"warning"})},open4:function(){this.$message.error("错了哦，这是一条错误消息")},open5:function(){this.$message({showClose:!0,message:"这是一条消息提示"})},open6:function(){this.$message({showClose:!0,message:"恭喜你，这是一条成功消息",type:"success"})},open7:function(){this.$message({showClose:!0,message:"警告哦，这是一条警告消息",type:"warning"})},open8:function(){this.$message({showClose:!0,message:"错了哦，这是一条错误消息",type:"error"})},init:function(){}}},a=l,i=(n("ce16"),n("2877")),p=Object(i["a"])(a,s,o,!1,null,"79879c98",null);t["default"]=p.exports},ce16:function(e,t,n){"use strict";var s=n("a955"),o=n.n(s);o.a}}]);