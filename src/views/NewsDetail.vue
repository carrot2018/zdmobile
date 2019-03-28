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
            分类：<span>{{ news.pressType }}</span>
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
      // news:{
      //   imgSrc: 'http://img.cookhome.club/news/DgshdwMUHpxrRsEqkxWp9lRwJ2tl8NaFTlmpZZ26.png',
      //   title: '【系列报道】大师名厨助力名厨之家2019砥砺前行！（一）',
      //   pushTime: '02-28',
      //   pressType: '行业动态',
      //   source: '投资界',
      //   content: '<p>原生态、有机、绿色的美食是&ldquo;龙菜&rdquo;的特质。为了推广&ldquo;龙菜&rdquo;，使其成为黑龙江的名片，黑龙江正在积极建设中国粮食和绿色有机食品生产基地，解决全国各地特色食材、特色农产品销售难、推广难的难题。洞见此症结，名厨之家在多年前已开始规划、布局农业产业、餐饮产业新型业态，在哈尔滨、北京、上海、西安、成都、武汉、济南、深圳八地建立了8大食材研发推广中心。</p><p>黑龙江绿色食材研发推广中心是最先投入运营的中心之一。以黑龙江绿色食材孵化基地作为发展核心，聚焦全国绿色、无污染农业用地及偏远山区贫困人群，通过名厨之家全国32家省级分公司力量整合全国无污染农业用地，利用留守人员劳动力，发展绿色有机食品种植，为全国500万家餐饮机构提供绿色有机食材。</p><p>当下，国家正在大力推进扶贫攻坚工作，实施精准扶贫方略，增加扶贫投入，出台优惠政策措施，坚持分类施策，因人因地施策，因贫困原因施策，因贫困类型施策，通过扶持广泛动员全社会力量参与扶贫。绿色食材孵化基地响应国家扶贫号召，接下来计划与政府相关负责部门达成合作，为黑龙江各地贫困人口提供定点培训，挖掘产品研发和食材中心的孵化功能，解决黑龙江农产品深加工、提高附加值和销售瓶颈困难。</p>'
      // }
      news:{},
      
      newsType:'行业新闻', // 面包屑
      goNewsType: '/newsCenter', // 面包屑跳转路径
      nextNew: '',
      lastNew: '',
      type: parseInt(this.$route.query.type),
      id: parseInt(this.$route.query.newsId)
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

   getNewsDetail() {
     axios.get('/static/api/news.json', {
       params: {
         newsId: this.$route.query.newsId
       }
     }).then((response) => {
      //  let that = this
       let result = response.data;
       let type = this.$route.query.type;
       console.log(type)
      // 现在只有3条新闻，所以现在只根据json数据的id来计算，后面要改
       if(type === '1') {
         this.newsType = '行业新闻';
         this.goNewsType = '/newsCenter/industryNews';
        //  let id = parseInt(this.$route.query.newsId) ;
        let id = this.id;
           console.log(id )
        if(id >= 3 || id <= 1){
          if(id >= 3) {
            let lastId = id-2;
           this.nextNew = '没有新闻了',
           this.lastNew = result.data.news[0].new[lastId].title;
         } 
         if(id <= 1) {
            this.nextNew = result.data.news[0].new[id].title;
           this.lastNew = '没有新闻了'
         } 
        } else {
           let lastId = id-2;
          this.nextNew = result.data.news[0].new[id].title;
          this.lastNew = result.data.news[0].new[lastId].title;
        }
         

        id--;
         this.news = result.data.news[0].new[id]
        
       } else if(type === '2') {
         this.newsType = '公司新闻';
         this.goNewsType = '/newsCenter/companyNews';
        //  let id = this.$route.query.newsId;
        let id = this.id;

        if(id >= 3 || id <= 1){
          if(id >= 3) {
            let lastId = id-2;
           this.nextNew = '没有新闻了',
           this.lastNew = result.data.news[1].new[lastId].title;
         } 
         if(id <= 1) {
            this.nextNew = result.data.news[1].new[id].title;
           this.lastNew = '没有新闻了'
         } 
        } else {
           let lastId = id-2;
          this.nextNew = result.data.news[1].new[id].title;
          this.lastNew = result.data.news[1].new[lastId].title;
        }

        id--;
         this.news = result.data.news[1].new[id]
       }
            //  window.location.reload();
        //  console.log(this.news)
       
     })
   }
 },

 created() {
    this.type = this.$route.query.type;
  //  this.id = this.$route.query.newsId;
   this.getNewsDetail();
 },
 mounted() {
    
    
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
