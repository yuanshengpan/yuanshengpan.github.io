(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34b20c2e"],{"247d":function(t,o,i){"use strict";i.r(o);var s=function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("div",{staticClass:"catalog"},[i("div",[i("van-nav-bar",{staticClass:"bar",attrs:{title:"目录","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight},scopedSlots:t._u([{key:"right",fn:function(){return[i("van-icon",{attrs:{name:t.show?"cross":"ellipsis",size:"18"}})]},proxy:!0}])}),i("van-popup",{style:{height:"171.2px"},attrs:{position:"top"},model:{value:t.show,callback:function(o){t.show=o},expression:"show"}},[i("van-grid",{attrs:{"column-num":3}},t._l(t.popup,(function(o,s){return i("van-grid-item",{key:s,attrs:{icon:o.icon,text:o.text},on:{click:function(i){return t.popupClick(o)}}})})),1)],1)],1),i("div",{staticClass:"booklist"},[i("van-list",{attrs:{finished:t.loadOptions.isFinished,"finished-text":t.loadOptions.finishedText,offset:50},on:{load:t.onLoad},model:{value:t.loadOptions.isLoading,callback:function(o){t.$set(t.loadOptions,"isLoading",o)},expression:"loadOptions.isLoading"}},[i("van-cell",{staticClass:"total",staticStyle:{color:"#333730","font-weight":"bold"},attrs:{title:"共"+t.length+"章"},scopedSlots:t._u([{key:"default",fn:function(){return[i("div",{staticStyle:{color:"#333730","font-weight":"200"},on:{click:t.sort}},[t._v(t._s(t.isSort?"正序":"倒序"))])]},proxy:!0}])}),t._l(t.listData,(function(o,s){return i("van-cell",{key:s,class:s==t.isIndex?"active":"",attrs:{title:o.title,"is-link":""},on:{click:function(i){return t.listClick(s,o)}}})}))],2)],1)])},n=[],a=(i("a434"),i("b64b"),i("2909")),e={data:function(){return{show:!1,bookId:{},isIndex:0,popup:[{icon:"home-o",text:"主页",route:"Home"},{icon:"contact",text:"账户",route:"Login"},{icon:"search",text:"搜索",route:"Search"},{icon:"bookmark-o",text:"书架",route:"Bookshelf"},{icon:"bar-chart-o",text:"排行榜",route:"Ranking"}],listData:[],allListData:[],loadOptions:{isLoading:!0,isFinished:!1,finishedText:"没有章节可加载了"},loadCount:20,isSort:!1,length:0}},created:function(){this.bookId=this.$route.query,this.getbookChapters()},methods:{onClickLeft:function(){this.$router.go(-1)},onClickRight:function(){this.show=!this.show},popupClick:function(t){this.$router.push({name:t.route})},getbookChapters:function(t){var o=this;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"GET",url:"https://novel.kele8.cn/book-chapters/"+this.bookId.id}).then((function(t){o.$toast.clear(),o.length=t.data.chapters.length,Object.keys(t.data).length>0&&(o.allListData=t.data.chapters,o.allListData=o.allListData.sort(o.sortNumber),o.listData=o.allListData.splice(0,o.loadCount),o.allListData.length>0?o.loadOptions.isLoading=!1:(o.loadOptions.isLoading=!0,o.loadOptions.isFinished=!0),0==o.listData.length&&(o.loadOptions.finishedText=""))})).catch((function(t){o.$toast.clear()}))},sort:function(){this.isSort=!this.isSort,this.getbookChapters(this.isSort)},sortNumber:function(t,o){return this.isSort?o.order-t.order:t.order-o.order},onLoad:function(){var t=this;setTimeout((function(){var o;(o=t.listData).push.apply(o,Object(a["a"])(t.allListData.splice(0,t.loadCount))),t.loadOptions.isLoading=!1,0==t.allListData.length&&(t.loadOptions.isFinished=!0)}),200)},listClick:function(t,o){this.isIndex=t;var i=this.bookId.id;this.$router.push({name:"Book",query:{isSort:this.isSort,index:t,bookId:i}})}}},l=e,r=(i("fda8"),i("2877")),c=Object(r["a"])(l,s,n,!1,null,"c90a051a",null);o["default"]=c.exports},"28ec":function(t,o,i){},fda8:function(t,o,i){"use strict";var s=i("28ec"),n=i.n(s);n.a}}]);
//# sourceMappingURL=chunk-34b20c2e.05b845ef.js.map