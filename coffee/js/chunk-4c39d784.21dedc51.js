(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c39d784"],{"0801":function(t,e,o){},"0ded":function(t,e,o){"use strict";var n=o("0801"),s=o.n(n);s.a},"17be":function(t,e,o){t.exports=o.p+"img/logo.f0fe65a0.jpg"},a55b:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"register"},[o("van-nav-bar",{attrs:{"left-text":"注册",title:"登录","right-text":"关闭","left-arrow":""},on:{"click-left":function(e){return t.goPage("Register")},"click-right":function(e){return t.goPage("Menu")}}}),t._m(0),o("van-form",{on:{submit:t.login}},[o("van-field",{attrs:{type:"text",label:"手机号",placeholder:"手机号",maxlength:"11"},scopedSlots:t._u([{key:"left-icon",fn:function(){return[o("i",{staticClass:"fa fa-phone"})]},proxy:!0}]),model:{value:t.userInfo.phone,callback:function(e){t.$set(t.userInfo,"phone",e)},expression:"userInfo.phone"}}),o("van-field",{attrs:{"left-icon":"closed-eye",type:t.text,label:"密码",placeholder:"密码","right-icon":t.bool?"closed-eye":"eye-o",maxlength:"16"},on:{"click-right-icon":t.open},scopedSlots:t._u([{key:"left-icon",fn:function(){return[o("i",{staticClass:"fa fa-lock"})]},proxy:!0}]),model:{value:t.userInfo.password,callback:function(e){t.$set(t.userInfo,"password",e)},expression:"userInfo.password"}}),o("div",{staticClass:"register-btn"},[o("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[t._v("立即登录")]),o("div",{staticClass:"forgot"},[o("span",{staticClass:"fr",on:{click:t.forgot}},[t._v("忘记密码？")])])],1)],1)],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo"},[n("img",{staticClass:"auto-img",attrs:{src:o("17be"),alt:""}})])}],a=o("a880"),r={data:function(){return{userInfo:{phone:"",password:""},text:"password",bool:!0}},methods:{forgot:function(){this.$router.push({name:"Forgot"})},goPage:function(t){this.$router.push({name:t})},open:function(){this.bool?(this.text="text",this.bool=!1):(this.text="password",this.bool=!0)},login:function(){var t=this;if(a["a"].validUserForm(this.userInfo,this)){var e=Object.assign({},this.userInfo);e.appkey=this.appkey,this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:"/login",data:e}).then((function(e){t.$toast.clear(),200==e.data.code?(t.$router.push({name:"Menu"}),localStorage.setItem("__TK",e.data.token)):t.$toast(e.data.msg)})).catch((function(e){t.$toast.clear()}))}}}},i=r,l=(o("0ded"),o("2877")),c=Object(l["a"])(i,n,s,!1,null,"42a02edb",null);e["default"]=c.exports},a880:function(t,e,o){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function a(t,e,o){return e&&s(t.prototype,e),o&&s(t,o),t}var r=function(){function t(){n(this,t),this.validUserFormReg={nickName:{reg:/^[\u4e00-\u9fa5\w]{1,10}$/,msg:"用户名格式不正确"},phone:{reg:/^1[3-9]\d{9}$/,msg:"手机格式不正确"},password:{reg:/^[a-zA-Z]\w{5,15}$/,msg:"密码格式不正确"},oldPassword:{reg:/^[a-zA-Z]\w{5,15}$/,msg:"旧密码格式不正确且以字母开头"},email:{reg:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,msg:"邮箱格式不正确"},code:{reg:/^\d{6}$/,msg:"验证格式正确"}}}return a(t,[{key:"validUserForm",value:function(t,e){for(var o in t)if(!this.validUserFormReg[o].reg.test(t[o]))return e.$toast(this.validUserFormReg[o].msg),!1;return!0}}]),t}();e["a"]=new r}}]);
//# sourceMappingURL=chunk-4c39d784.21dedc51.js.map