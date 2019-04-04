<template>
  <div class="newsDetail">
    <van-loading v-show="load"/>
    
    <div class="bar">
      <HeaderLogo></HeaderLogo>
    </div>
    <div class="bar1"></div>
    <div class="main">
      <div class="main-menu">
        <span>当前位置：</span>
        <router-link to="/" tag="a">首页</router-link>&nbsp;>&nbsp;
        <router-link to="/news" tag="a">新闻中心</router-link>&nbsp;>&nbsp;
        <router-link :to="goNewsType" tag="a">{{newsType}}</router-link>&nbsp;>&nbsp;
        <a>正文</a>
      </div>
      <div class="mian-content">
        <div class="mian-content__top">
          <h1 class="mian-content__top__title">{{ news.title }}</h1>
          <div class="mian-content__top__data">
            <span>{{ news.pushTime }}</span>
            分类：<span>{{ newsType }}</span>
            来源：<span>{{ news.source }}</span>
          </div>
          <div class="mian-content__top__img">
            <img :src="news.imgSrc" alt="">
          </div>
        </div>
        <div v-html="news.content" class="mian-content__bottom">
          {{ news.content }}
        </div>
        <div class="mian-content--checkout">
          <div 
          class="mian-content--checkout__title"
          @click="goNextNew"
          >
            <span>下一篇</span>
            <h5>{{nextNew}}</h5>
          </div>
          <div 
          class="mian-content--checkout__title"
          @click="goLastNew"
          >
            <span>上一篇</span>
            <h5>{{lastNew}}</h5>
          </div>
        </div>
      </div>
    </div>
    <FooterLogo></FooterLogo>
  </div>
</template>

<script>
import axios from 'axios';
import FooterLogo from '../components/FooterLogo';
import HeaderLogo from '../components/HeaderLogo';
import { Loading } from 'vant';
export default {
 name: 'newDetail',

 components: {
   FooterLogo,
   HeaderLogo,
   [Loading.name]: Loading,
 },
 data() {
   return {
    
      news:[], // 新闻数据
      
      newsType:'', // 面包屑
      goNewsType: '/newsCenter', // 面包屑跳转路径
      nextNew: '',  // 上一条新闻的标题
      lastNew: '', // 下一条新闻的标题
      type:'',  // 新闻type
      id:'',  // 新闻id
      index:0, // 新闻索引获取上下条新闻标题
      Total:0, // 总条数
      typeName:'',  // 新闻类型
      lastId:'',// 上一条新闻的id
      nextId:'',// 下一条新闻的id
      load:false
    }
 },

 methods: {

   // 去下一条
  goNextNew() {
    console.log(this.Total)
    if(this.nextNew === '没有更多新闻了'){
      return false;
    } else {
      this.index++;
      this.id = this.nextId;
      // this.$route.query.newsId = this.id
      // this.getNewsDetail();
      this.$router.replace({
        path:'/newsDetail',
        query: {
          newsId: this.nextId,
          type: this.type,
          index: this.index
        }
      })
      this.getNewsDetail();
      this.getlastNew();
      this.getNextNew();
      // this.$router.go(0)
    }
    
  },
  
  // 去上一条
  goLastNew() {
   if(this.lastNew === '没有更多新闻了'){
      return false;
    } else {
      this.index--;
      this.id = this.lastId;
      // let newQuery = this.$route.query 
      // newQuery.id = this.lastId;
      // newQuery.index = this.index;
      // this.getNewsDetail();
      // this.getlastNew();
      // this.getNextNew();
      this.$router.replace({
        path:'/newsDetail',
        query: {
          newsId: this.lastId,
          type: this.type,
          index: this.index
        }
      })
      this.getNewsDetail();
      this.getlastNew();
      this.getNextNew();
      // this.$router.go(0)
    }
  },

  // 获取上一条新闻
  getlastNew() {
    let index = this.index;
    let typeName = this.typeName;
    index--;
    if(index <= -1) {
      this.lastNew = '没有更多新闻了'
    } else {
      axios.get('/server/invoker/content/getUpPressContentByPageIndex', {
       params: {"pageIndex":index,"typeName":typeName}
      }).then((response) => {
        // 拿到上一条新闻数据
        let result = response.data;
        //  console.log("上一条",result)
         // 更换上一条 的新闻标题
        this.lastNew = result.data[0].title;
        this.lastId = result.data[0].id;
        //  this.index = result.data.pageIndex;
      })
    }
   
  },

  // 获取下一条新闻
  getNextNew() {
    let index = this.index;
    let typeName = this.typeName;
    index++;
    if(index >= this.Total) {
      this.nextNew = '没有更多新闻了'
    } else {

      axios.get('/server/invoker/content/getDownPressContentByPageIndex', {
      params: {"pageIndex":index,"typeName":typeName}
      }).then((response) => {
        // 拿到下一条新闻数据
        let result = response.data;
        // console.log("下一条",result)
        // 更换下一条 的新闻标题
        this.nextNew = result.data[0].title;
         this.nextId = result.data[0].id;
      })
    }
    
  },

   getNewsDetail() {
     this.load = true;
     let id = this.id
      // console.log(index,typeName)
     axios.get('/server/invoker/content/selectContentById', {
       params: {"id":id}
     }).then((response) => {
      let result = response.data;
      
      let newObj = result.data;
      // console.log(this.news,result)
      function timestampToTime(timestamp) {
        let date1 = Math.round(new Date())
        
        // 计算时间间隔（数据为时间戳）
        let timeSpace = date1 - timestamp 
        // console.log(timeSpace)
        // 当时间间隔小于一小时和小于一天和大一一天的时间显示
        if(timeSpace < 3600000) {
          let timeShow = Math.round(timeSpace/60000) + '分钟前'
          return timeShow
        } else if(timeSpace >= 3600000 && timeSpace < 86400000) {
          let timeShow = Math.round(timeSpace/3600000) + '小时前'
          return timeShow
        } else if (timeSpace >= 86400000) {
          let date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
          let Y = date.getFullYear() + '-';
          let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
          let D = (date.getDate()+1 < 10 ? '0'+(date.getDate()) : date.getDate()) + ' ' ;
          let h = date.getHours() + ':';
          let m = date.getMinutes() + ':';
          let s = date.getSeconds();
          return M+D;
        } else if (typeof timestamp === 'string'){
          // 新闻数据在下拉刷新的时候由于上面的新闻时间已经修改，所以加次判断
          return timestamp
        }
        
      }
      
      newObj.pushTime = timestampToTime(newObj.pushTime);
   
      this.news = newObj
      this.load = false;
     })

   },

    // typeid转typename
   typeIdToTypeName(){
      let type1 = this.type
      // console.log(type1)
      axios.get('/server/invoker/content/getPressType', {
       params: { "typeId":type1 }
     }).then((response) => {

       let result = response.data;
      //  let typeName = result.data.typeName;
       this.typeName = result.data.typeName;
       this.newsType = result.data.typeName;

      //  console.log(result,this.typeName)
       this.getTotal();
     })
   },

    // 获取总条数
   getTotal() {
     let typeName = this.typeName;
    //  console.log(this.newsType)
     axios.get('/server/invoker/content/getTotalRowByTypeName', {
       params:{ "typeName": typeName }
     }).then((response) => {
       let result = response.data;
      //  console.log(result)
       this.Total = result.data
        this.getlastNew();
        this.getNextNew();
     })
   }
 },

 created() {
   this.typeName = this.$route.query.type;
   this.type = this.$route.query.type;
   this.id = this.$route.query.newsId;
   this.index = this.$route.query.index;
  //  this.Total = this.$route.query.Total;
   console.log( this.id,this.type ,this.index)
   
 },
 mounted() {
   this.getNewsDetail();
   
    this.typeIdToTypeName();
    
    // this.getTotal()
 },

 updated() {

 },

  // watch: {
  //   $route: {
  //     handler: function(val, oldVal){
  //       this.getNewsDetail();
  //     },
  //     // 深度观察监听
  //     deep: true
  //   }
  // },
}
</script>

<style lang="scss" scoped>
@import '../styles/common/px2rem.scss';

.van-loading {
  height: px2rem(80);
  width: px2rem(80);
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background: rgba($color: #000000, $alpha: .3);
  padding: px2rem(8);
  border-radius: px2rem(10)
}
.newsDetail {
  flex: 1;
  flex-shrink: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  .bar {
    position: fixed;
    top: 0;
    flex-shrink: 0;
    height: px2rem(120);
    width: 100%;
    background: #0074cf;
    // position: sticky;
    // top: 0;
  }
  .bar1 {
     height: px2rem(120);
     flex-shrink: 0;
  }
  .main {
    // overflow-y: auto;
    flex: 1;
    padding: 0 px2rem(32);
 
    .main-menu {
      margin: px2rem(40) 0 px2rem(32) 0;
      font-size: px2rem(26);
      color: #333;
      a {
        color:#008f3e;
        text-decoration:underline;
      }
    }
    .mian-content {

      &__top {
        &__title {
          font-size: px2rem(40);
          line-height: px2rem(50);
        }
        &__data {
          margin-top: px2rem(32);
          font-size: px2rem(24);
          color: #666;
          span {
            margin-right: px2rem(30);
          }
        }
        &__img {
          width:px2rem(686);
          height: px2rem(363);
          margin: px2rem(35) 0 px2rem(40) 0;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      &__bottom {
        margin-bottom: px2rem(72);
        font-size: px2rem(30);
        line-height: px2rem(40);
        color: #000;
        /deep/ p {
          // margin-bottom: px2rem(50);
          line-height: px2rem(50);
        }
        /deep/ img {
          width: 100%
        }
        /deep/ strong {font-weight: bold;}
        /deep/ h1 {font-size:1.6em;font-weight: bold;}
        /deep/ h2 {font-size:1.5em;font-weight: bold;}
        /deep/ h3 {font-size:1.4em;font-weight: bold;}
        /deep/ h4 {font-size:1.3em;font-weight: bold;}
        /deep/ h5 {font-size:1.2em;font-weight: bold;}
        /deep/ h6 {font-size:1.1em;font-weight: bold;}

      }
      &--checkout {
        height: px2rem(248);

        margin-bottom: px2rem(40);
        &__title {
          background: #f9f9f9;
          opacity: 1;
          height: px2rem(112);
          padding: 0 px2rem(20); 
          margin-bottom: px2rem(24);
          border-radius: px2rem(18);
          box-shadow: px2rem(10) px2rem(20) px2rem(90) #f9f9f9;
          span {
            font-size: px2rem(24);
            color: #666;
            display: inline-block;
            margin: px2rem(24) 0 px2rem(14) 0
          }
          h5 {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: px2rem(28);
            color: #333;
          }
        }
      }
    }
  }
}
</style>
