(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60aa3f22"],{"099d":function(t,a,o){"use strict";var s=o("ebb7"),e=o.n(s);e.a},"305b":function(t,a,o){"use strict";o.r(a);var s=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"secure"},[o("van-nav-bar",{attrs:{title:"安全中心","left-text":"返回","left-arrow":""},on:{"click-left":t.back}}),o("div",{staticClass:"listBox"},[o("van-cell-group",[o("van-cell",{attrs:{title:"修改密码","is-link":""},on:{click:t.openPopup}}),o("van-cell",{attrs:{title:"注销账号","is-link":""},on:{click:t.destroyAccount}})],1)],1),o("div",{staticClass:"logout"},[o("van-button",{attrs:{round:!0,block:!0,type:"danger"},on:{click:t.logout}},[t._v("退出登录")])],1),o("van-popup",{attrs:{position:"bottom"},model:{value:t.isOpen,callback:function(a){t.isOpen=a},expression:"isOpen"}},[o("div",{staticClass:"v-pop"},[o("van-form",{on:{submit:t.commit}},[o("van-field",{attrs:{label:"旧密码",placeholder:"旧密码"},model:{value:t.passwords.oldPassword,callback:function(a){t.$set(t.passwords,"oldPassword",a)},expression:"passwords.oldPassword"}}),o("van-field",{attrs:{type:"text",label:"新密码",placeholder:"新密码"},model:{value:t.passwords.password,callback:function(a){t.$set(t.passwords,"password",a)},expression:"passwords.password"}}),o("div",{staticClass:"btnBox"},[o("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[t._v("提交")])],1)],1)],1)])],1)},e=[],n=o("a880"),r={data:function(){return{isOpen:!1,passwords:{oldPassword:"",password:""}}},methods:{back:function(){this.$router.go(-1)},openPopup:function(){this.isOpen=!0},commit:function(){var t=this;if(n["a"].validUserForm(this.passwords)){var a=localStorage.getItem("__TK");this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:"/updatePassword",data:{appkey:this.appkey,tokenString:a,password:this.passwords.password,oldPassword:this.passwords.oldPassword}}).then((function(a){t.$toast.clear(),t.isOpen=!1,"E001"==a.data.code?(localStorage.removeItem("__TK"),t.$router.push({name:"Login"})):t.$toast(a.data.msg)})).catch((function(a){t.$toast.clear()}))}},logout:function(){localStorage.removeItem("__TK"),this.$router.push({name:"Login"})},destroyAccount:function(){var t=this;this.$dialog.confirm({title:"注销账号",message:"一旦注销，数据无法恢复"}).then((function(){var a=localStorage.getItem("__TK");t.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),t.axios({method:"POST",url:"/destroyAccount",data:{appkey:t.appkey,tokenString:a}}).then((function(a){t.$toast.clear(),"G001"==a.data.code?(localStorage.removeItem("__TK"),t.$router.push({name:"Login"})):t.$toast(a.data.msg)})).catch((function(a){t.$toast.clear()}))})).catch((function(t){}))}}},i=r,l=(o("099d"),o("2877")),c=Object(l["a"])(i,s,e,!1,null,null,null);a["default"]=c.exports},a880:function(t,a,o){"use strict";function s(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}function e(t,a){for(var o=0;o<a.length;o++){var s=a[o];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function n(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}var r=function(){function t(){s(this,t),this.validUserFormReg={nickName:{reg:/^[\u4e00-\u9fa5\w]{1,10}$/,msg:"用户名格式不正确"},phone:{reg:/^1[3-9]\d{9}$/,msg:"手机格式不正确"},password:{reg:/^[a-zA-Z]\w{5,15}$/,msg:"密码格式不正确"},oldPassword:{reg:/^[a-zA-Z]\w{5,15}$/,msg:"旧密码格式不正确且以字母开头"},email:{reg:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,msg:"邮箱格式不正确"},code:{reg:/^\d{6}$/,msg:"验证格式正确"}}}return n(t,[{key:"validUserForm",value:function(t,a){for(var o in t)if(!this.validUserFormReg[o].reg.test(t[o]))return a.$toast(this.validUserFormReg[o].msg),!1;return!0}}]),t}();a["a"]=new r},ebb7:function(t,a,o){}}]);
//# sourceMappingURL=chunk-60aa3f22.be1a46ba.js.map