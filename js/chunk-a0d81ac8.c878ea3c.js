(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a0d81ac8"],{"0bfd":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"lin-container"},[a("div",{staticClass:"lin-title"},[t._v("Badge 标记")]),a("div",{staticClass:"lin-wrap-ui"},[a("el-card",{staticClass:"demo",staticStyle:{"margin-bottom":"50px"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[t._v("基础用法")])]),a("el-row",[a("el-badge",{staticClass:"item",attrs:{value:12}},[a("el-button",{attrs:{size:"small"}},[t._v("评论")])],1),a("el-badge",{staticClass:"item",attrs:{value:3}},[a("el-button",{attrs:{size:"small"}},[t._v("回复")])],1),a("el-badge",{staticClass:"item",attrs:{value:1,type:"primary"}},[a("el-button",{attrs:{size:"small"}},[t._v("评论")])],1),a("el-badge",{staticClass:"item",attrs:{value:2,type:"warning"}},[a("el-button",{attrs:{size:"small"}},[t._v("回复")])],1),a("el-dropdown",{attrs:{trigger:"click"}},[a("span",{staticClass:"el-dropdown-link"},[t._v(" 点我查看"),a("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{staticClass:"clearfix"},[t._v("\n              评论\n              "),a("el-badge",{staticClass:"mark",attrs:{value:12}})],1),a("el-dropdown-item",{staticClass:"clearfix"},[t._v("\n              回复\n              "),a("el-badge",{staticClass:"mark",attrs:{value:3}})],1)],1)],1)],1),a("el-collapse",[a("el-collapse-item",{attrs:{title:"查看代码",name:"2"}},[a("div",{staticStyle:{"white-space":"pre-wrap"}},[t._v(t._s(t.base))])])],1)],1),a("el-card",{staticStyle:{"margin-bottom":"50px"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[t._v("最大值")])]),a("el-row",[a("div",[a("el-badge",{staticClass:"item",attrs:{value:200,max:99}},[a("el-button",{attrs:{size:"small"}},[t._v("评论")])],1),a("el-badge",{staticClass:"item",attrs:{value:100,max:10}},[a("el-button",{attrs:{size:"small"}},[t._v("回复")])],1)],1)]),a("el-collapse",{staticClass:"test",staticStyle:{color:"red"}},[a("el-collapse-item",{attrs:{title:"查看代码",name:"2"}},[a("div",{staticStyle:{"white-space":"pre-wrap"}},[t._v(t._s(t.max))])])],1)],1),a("el-card",{staticStyle:{"margin-bottom":"50px"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[t._v("自定义内容")])]),a("el-row",[a("div",[a("el-badge",{staticClass:"item",attrs:{value:"new"}},[a("el-button",{attrs:{size:"small"}},[t._v("评论")])],1),a("el-badge",{staticClass:"item",attrs:{value:"hot"}},[a("el-button",{attrs:{size:"small"}},[t._v("回复")])],1)],1)]),a("el-collapse",{staticClass:"test",staticStyle:{color:"red"}},[a("el-collapse-item",{attrs:{title:"查看代码",name:"2"}},[a("div",{staticStyle:{"white-space":"pre-wrap"}},[t._v(t._s(t.customize))])])],1)],1),a("el-card",{staticStyle:{"margin-bottom":"50px"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[t._v("小红点")])]),a("el-row",[a("div",[a("el-badge",{staticClass:"item",attrs:{"is-dot":""}},[t._v("数据查询")]),a("el-badge",{staticClass:"item",attrs:{"is-dot":""}},[a("el-button",{staticClass:"share-button",attrs:{icon:"el-icon-share",type:"primary"}})],1)],1)]),a("el-collapse",[a("el-collapse-item",{attrs:{title:"查看代码",name:"2"}},[a("div",{staticStyle:{"white-space":"pre-wrap"}},[t._v(t._s(t.isDot))])])],1)],1)],1)])},s=[],i={name:"",components:{},data:function(){return{text:"",base:'     \n        <el-badge :value="12" class="item">\n          <el-button size="small">评论</el-button>\n        </el-badge>\n        <el-badge :value="3" class="item">\n          <el-button size="small">回复</el-button>\n        </el-badge>\n        <el-badge :value="1" class="item" type="primary">\n          <el-button size="small">评论</el-button>\n        </el-badge>\n        <el-badge :value="2" class="item" type="warning">\n          <el-button size="small">回复</el-button>\n        </el-badge>\n\n        <el-dropdown trigger="click">\n          <span class="el-dropdown-link">\n            点我查看<i class="el-icon-caret-bottom el-icon--right"></i>\n          </span>\n          <el-dropdown-menu slot="dropdown">\n            <el-dropdown-item class="clearfix">\n              评论\n              <el-badge class="mark" :value="12" />\n            </el-dropdown-item>\n            <el-dropdown-item class="clearfix">\n              回复\n              <el-badge class="mark" :value="3" />\n            </el-dropdown-item>\n          </el-dropdown-menu>\n        </el-dropdown>',max:'\n        <el-badge :value="200" :max="99" class="item">\n          <el-button size="small">评论</el-button>\n        </el-badge>\n        <el-badge :value="100" :max="10" class="item">\n          <el-button size="small">回复</el-button>\n        </el-badge>',customize:'\n        <el-badge value="new" class="item">\n          <el-button size="small">评论</el-button>\n        </el-badge>\n        <el-badge value="hot" class="item">\n          <el-button size="small">回复</el-button>\n        </el-badge>',isDot:'\n        <el-badge is-dot class="item">数据查询</el-badge>\n        <el-badge is-dot class="item">\n          <el-button class="share-button" icon="el-icon-share" type="primary"></el-button>\n        </el-badge>\n        '}},computed:{},watch:{},mounted:function(){this.init()},methods:{init:function(){}}},n=i,o=(a("ad54"),a("2877")),r=Object(o["a"])(n,l,s,!1,null,"0428d6a6",null);e["default"]=r.exports},ad54:function(t,e,a){"use strict";var l=a("bb05"),s=a.n(l);s.a},bb05:function(t,e,a){}}]);