(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2cb29f79"],{"4c9d":function(e,t,n){e.exports=n.p+"img/logoBiger.4a2a6408.png"},"5faf":function(e,t,n){},"73cf":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"register"},[n("van-nav-bar",{attrs:{"left-text":"返回",title:"注册","right-text":"登录","left-arrow":""},on:{"click-left":function(t){return e.goPage("Home")},"click-right":function(t){return e.goPage("Login")}}}),e._m(0),n("van-form",{on:{submit:e.register}},[n("van-field",{attrs:{type:"text",label:"手机号",placeholder:"手机号",maxlength:"11"},scopedSlots:e._u([{key:"left-icon",fn:function(){return[n("i",{staticClass:"fa fa-phone"})]},proxy:!0}]),model:{value:e.userInfo.phone,callback:function(t){e.$set(e.userInfo,"phone",t)},expression:"userInfo.phone"}}),n("van-field",{attrs:{type:"text",label:"用户名",placeholder:"用户名",maxlength:"10"},scopedSlots:e._u([{key:"left-icon",fn:function(){return[n("i",{staticClass:"fa fa-user-circle"})]},proxy:!0}]),model:{value:e.userInfo.nickName,callback:function(t){e.$set(e.userInfo,"nickName",t)},expression:"userInfo.nickName"}}),n("van-field",{attrs:{"left-icon":"closed-eye",type:e.text,label:"密码",placeholder:"密码","right-icon":e.bool?"closed-eye":"eye-o",maxlength:"16"},on:{"click-right-icon":e.open},scopedSlots:e._u([{key:"left-icon",fn:function(){return[n("i",{staticClass:"fa fa-lock"})]},proxy:!0}]),model:{value:e.userInfo.password,callback:function(t){e.$set(e.userInfo,"password",t)},expression:"userInfo.password"}}),n("div",{staticClass:"register-btn"},[n("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("立即注册")])],1)],1)],1)},a=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"logo"},[o("img",{staticClass:"auto-img",attrs:{src:n("4c9d"),alt:""}})])}],s=n("a880"),r={data:function(){return{userInfo:{phone:"",nickName:"",password:""},text:"password",bool:!0}},methods:{goBack:function(){this.$router.go(-1)},goPage:function(e){this.$router.push({name:e})},open:function(){this.bool?(this.text="text",this.bool=!1):(this.text="password",this.bool=!0)},register:function(){var e=this;if(s["a"].validUserForm(this.userInfo,this)){var t=Object.assign({},this.userInfo);t.appkey=this.appkey,this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:"/register",data:t}).then((function(t){e.$toast.clear(),console.log(t.data),100==t.data.code?e.$router.push({name:"Login"}):e.$toast(t.data.msg)})).catch((function(t){e.$toast.clear()}))}}}},i=r,c=(n("be45"),n("9ca4")),l=Object(c["a"])(i,o,a,!1,null,"7eb6c99c",null);t["default"]=l.exports},a880:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}var r=function(){function e(){o(this,e),this.validUserFormReg={nickName:{reg:/^[\u4e00-\u9fa5\w]{1,10}$/,msg:"用户名格式不正确"},phone:{reg:/^1[3-9]\d{9}$/,msg:"手机格式不正确"},password:{reg:/^[a-zA-Z]\w{5,15}$/,msg:"密码格式不正确"},oldPassword:{reg:/^[a-zA-Z]\w{5,15}$/,msg:"旧密码格式不正确且以字母开头"},email:{reg:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,msg:"邮箱格式不正确"},code:{reg:/^\d{6}$/,msg:"验证格式正确"}}}return s(e,[{key:"validUserForm",value:function(e,t){for(var n in e)if(!this.validUserFormReg[n].reg.test(e[n]))return t.$toast(this.validUserFormReg[n].msg),!1;return!0}}]),e}();t["a"]=new r},be45:function(e,t,n){"use strict";var o=n("5faf"),a=n.n(o);a.a}}]);
//# sourceMappingURL=chunk-2cb29f79.55ccb2fc.js.map