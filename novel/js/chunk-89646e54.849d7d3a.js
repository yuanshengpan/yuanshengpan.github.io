(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-89646e54"],{"2d3b":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search"},[a("van-nav-bar",{staticClass:"border",attrs:{title:"搜索","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}}),a("div",{staticClass:"border"},[a("van-search",{attrs:{"show-action":"",placeholder:"请输入搜索关键词"},on:{input:t.getAutoComplete,search:t.onSearch},scopedSlots:t._u([{key:"action",fn:function(){return[a("div",{on:{click:t.onSearch}},[t._v("搜索")])]},proxy:!0}]),model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),0==t.autoCompleteData.length?a("div",[a("div",{staticClass:"hot"},[a("ul",{staticClass:"clearfix"},t._l(t.hotWordsData.hotWords,(function(e,r){return a("li",{key:r,on:{click:function(a){return t.searchList(e)}}},[t._v(t._s(e))])})),0)]),a("div",{staticClass:"bg"},[a("van-cell",{attrs:{title:"搜索历史"},scopedSlots:t._u([{key:"right-icon",fn:function(){return[a("van-icon",{staticStyle:{"line-height":"inherit"},attrs:{name:"delete"},on:{click:t.clearHistory}},[t._v("删除历史")])]},proxy:!0}],null,!1,1400552467)})],1),a("div",t._l(t.searchHistory,(function(e,r){return a("van-cell",{key:r,staticClass:"bg",attrs:{title:e},on:{click:function(a){return t.searchList(e)}}})})),1)]):a("div",t._l(t.autoCompleteData,(function(e,r){return a("van-cell",{key:r,staticClass:"bg",attrs:{title:e},on:{click:function(a){return t.searchList(e)}}})})),1)],1)},s=[],i=(a("ecb4"),a("ea69"),a("fe8a"),a("6db4"),{data:function(){return{value:"",arrData:[],index:0,searchHistory:[],hotWordsData:[],autoCompleteData:[]}},created:function(){var t=window.localStorage;null!==t.getItem("searchHistory")&&(this.searchHistory=JSON.parse(t.getItem("searchHistory"))),this.getHotBooks()},methods:{onClickLeft:function(){this.$router.go(-1)},searchList:function(t){this.value=t,this.onSearch()},clearHistory:function(){localStorage.removeItem("searchHistory"),this.searchHistory=[]},onSearch:function(){if(""==this.value)this.$toast("关键字不能为空");else{var t=this.value;t=t.trim(),this.searchHistory.length>0&&-1!==this.searchHistory.indexOf(t)?(this.searchHistory.splice(this.searchHistory.indexOf(t),1),this.searchHistory.unshift(t)):this.searchHistory.unshift(t),this.searchHistory.length>6&&this.searchHistory.pop(),localStorage.setItem("searchHistory",JSON.stringify(this.searchHistory)),this.$router.push({name:"Classify",query:{val:this.value}})}},getHotBooks:function(){var t=this;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"GET",url:"http://novel.kele8.cn/hot-books"}).then((function(e){t.$toast.clear(),Object.keys(e.data).length>0&&(t.hotWordsData=e.data)})).catch((function(e){t.$toast.clear()}))},getAutoComplete:function(){var t=this;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"GET",url:"http://novel.kele8.cn/auto-complete?query="+this.value}).then((function(e){t.$toast.clear(),t.autoCompleteData=e.data.keywords})).catch((function(e){t.$toast.clear()}))}}}),o=i,n=(a("f25b"),a("9ca4")),c=Object(n["a"])(o,r,s,!1,null,"6d7a6e33",null);e["default"]=c.exports},"6db4":function(t,e,a){"use strict";var r=a("1c8b"),s=a("c10f").trim,i=a("f221");r({target:"String",proto:!0,forced:i("trim")},{trim:function(){return s(this)}})},"8c06":function(t,e,a){},c10f:function(t,e,a){var r=a("2732"),s=a("fc8c"),i="["+s+"]",o=RegExp("^"+i+i+"*"),n=RegExp(i+i+"*$"),c=function(t){return function(e){var a=String(r(e));return 1&t&&(a=a.replace(o,"")),2&t&&(a=a.replace(n,"")),a}};t.exports={start:c(1),end:c(2),trim:c(3)}},f221:function(t,e,a){var r=a("efe2"),s=a("fc8c"),i="​᠎";t.exports=function(t){return r((function(){return!!s[t]()||i[t]()!=i||s[t].name!==t}))}},f25b:function(t,e,a){"use strict";var r=a("8c06"),s=a.n(r);s.a},fc8c:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},fe8a:function(t,e,a){var r=a("1c8b"),s=a("3553"),i=a("cbab"),o=a("efe2"),n=o((function(){i(1)}));r({target:"Object",stat:!0,forced:n},{keys:function(t){return i(s(t))}})}}]);
//# sourceMappingURL=chunk-89646e54.849d7d3a.js.map