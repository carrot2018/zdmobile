<template>
  <div class="newsDetail">
    
    <div class="bar">
      <HeaderLogo></HeaderLogo>
    </div>
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
            分类：<span>{{ news.typeId }}</span>
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
export default {
 name: 'newDetail',

 components: {
   FooterLogo,
   HeaderLogo
 },
 data() {
   return {
    
      news:[],
      
      newsType:'行业新闻', // 面包屑
      goNewsType: '/newsCenter', // 面包屑跳转路径
      nextNew: '',
      lastNew: '',
      // type: parseInt(this.$route.query.type),
      // id: parseInt(this.$route.query.newsId)
      type:'',
      id:'',
      index:0,
      Total:0,
    }
 },

 methods: {

  goNextNew() {
    if(this.nextNew === '没有新闻了'){
      return false;
    } else {
      this.id++;
      this.getNewsDetail();
      this.$router.replace({
        path:'/newsDetail',
        query: {
          newsId: this.id,
          type: this.type
        }
      })
    }
    
  },
  
  goLastNew() {
   if(this.lastNew === '没有新闻了'){
      return false;
    } else {
      this.id--;
      this.getNewsDetail();
      this.$router.replace({
        path:'/newsDetail',
        query: {
          newsId: this.id,
          type: this.type
        }
      })
     
    }
  },

  // 获取上一条新闻
  getlastNew() {
    let index = this.index;
    // console.log(index)
    index-=1;
    if(index <= -1) {
      this.lastNew = '没有更多新闻了'
    } else {
      axios.get('/server/invoker/content/getUpPressContentByPageIndex', {
       params: {"pageIndex":index}
      }).then((response) => {
        let result = response.data;
        this.lastNew = result.data[0].title;
        //  this.index = result.data.pageIndex;
          // console.log(1111,result)
      })
    }
   
  },

  // 获取下一条新闻
  getNextNew() {
    let index = this.index;
    index+=1;
    console.log(this.Total,22)
    if(index >= this.Total) {
      this.nextNew = '没有更多新闻了'
    } else {
      axios.get('/server/invoker/content/getDownPressContentByPageIndex', {
       params: {"pageIndex":index}
     }).then((response) => {
        let result = response.data;
       console.log(1111,result)
        this.nextNew = result.data[0].title;
     })
    }
    
  },

   getNewsDetail() {
    //  let _this = this
     let id = this.id
     axios.get('/server/invoker/content/selectContentById', {
       params: {"id":id}
     }).then((response) => {
      let result = response.data;
      
      let newObj = result.data;
      // console.log(this.news,result)
      function timestampToTime(timestamp) {
        let date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        let Y = date.getFullYear() + '-';
        let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        let D = date.getDate() + ' ';
        let h = date.getHours() + ':';
        let m = date.getMinutes() + ':';
        let s = date.getSeconds();
        return M+D;
      }
      
      newObj.pushTime = timestampToTime(newObj.pushTime);
      if(newObj.typeId==='c8ce902c3ad64162be9caebd935adb') {
        newObj.typeId = '行业新闻'
      } else {
        newObj.typeId = '公司新闻'
      }
   
      this.news = newObj
     
     })

    //  axios.get('/static/api/news.json', {
    //    params: {
    //      newsId: this.$route.query.newsId
    //    }
    //  }).then((response) => {
    //   //  let that = this
    //    let result = response.data;
    //    let type = this.$route.query.type;
    //    console.log(type)
    //   // 现在只有3条新闻，所以现在只根据json数据的id来计算，后面要改
    //    if(type === '1') {
    //      this.newsType = '行业新闻';
    //      this.goNewsType = '/newsCenter/industryNews';
    //     //  let id = parseInt(this.$route.query.newsId) ;
    //     let id = this.id;
    //        console.log(id )
    //     if(id >= 3 || id <= 1){
    //       if(id >= 3) {
    //         let lastId = id-2;
    //        this.nextNew = '没有新闻了',
    //        this.lastNew = result.data.news[0].new[lastId].title;
    //      } 
    //      if(id <= 1) {
    //         this.nextNew = result.data.news[0].new[id].title;
    //        this.lastNew = '没有新闻了'
    //      } 
    //     } else {
    //        let lastId = id-2;
    //       this.nextNew = result.data.news[0].new[id].title;
    //       this.lastNew = result.data.news[0].new[lastId].title;
    //     }
         

    //     id--;
    //      this.news = result.data.news[0].new[id]
        
    //    } else if(type === '2') {
    //      this.newsType = '公司新闻';
    //      this.goNewsType = '/newsCenter/companyNews';
    //     //  let id = this.$route.query.newsId;
    //     let id = this.id;

    //     if(id >= 3 || id <= 1){
    //       if(id >= 3) {
    //         let lastId = id-2;
    //        this.nextNew = '没有新闻了',
    //        this.lastNew = result.data.news[1].new[lastId].title;
    //      } 
    //      if(id <= 1) {
    //         this.nextNew = result.data.news[1].new[id].title;
    //        this.lastNew = '没有新闻了'
    //      } 
    //     } else {
    //        let lastId = id-2;
    //       this.nextNew = result.data.news[1].new[id].title;
    //       this.lastNew = result.data.news[1].new[lastId].title;
    //     }

    //     id--;
    //      this.news = result.data.news[1].new[id]
    //    }
    //         //  window.location.reload();
    //     //  console.log(this.news)
       
    //  })
   }
 },

 created() {
   this.type = this.$route.query.type;
   this.id = this.$route.query.newsId;
   this.index = this.$route.query.index;
   this.Total = this.$route.query.Total;
  //  console.log( this.id,this.type ,this.index)
   
 },
 mounted() {
   this.getNewsDetail();
    this.getlastNew();
    this.getNextNew();
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

.newsDetail {
  flex: 1;
  flex-shrink: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  .bar {
    // position: fixed;
    top: 0;
    flex-shrink: 0;
    height: px2rem(120);
    background: #0074cf;
    position: sticky;
    // top: 0;
  }
  .main {
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
        color: #333;
        /deep/ p {
          margin-bottom: px2rem(50);
        }
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
            font-size: px2rem(28);
            color: #333;
          }
        }
      }
    }
  }
}
</style>
