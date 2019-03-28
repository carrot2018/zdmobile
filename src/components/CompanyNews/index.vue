<template>
<!-- 新闻中心 > 公司新闻 -->
  <div class="companyNews">
    <div class="main">
      <ul class="main-news">
        <li
        v-for="(item, index) in newsList"
        :key="index"
        @click="goDetail(item.newsId, item.type)"
        >
          <div class="main-news--list">
            <div class="main-news__left">
              <img :src="item.imgSrc" alt="">
            </div>
            <div class="main-news__right">
              <h5 class="main-news__right__title"
              style="-webkit-box-orient:vertical;">{{ item.title }}</h5>
              <span v-html="item.content" class="main-news__right__content"></span>
              <div class="main-news__right__bottom">
                <span class="main-news__right__bottom__text">{{ item.pushTime }}</span>
                <span class="main-news__right__bottom__text">分类:{{ item.pressType }}</span>
                <span class="main-news__right__bottom__text">来源:{{ item.source }}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'companyNews',
  data() {
    return {
      newsList:[
        // {
        //   id: '1',
        //   imgSrc: 'http://img.cookhome.club/images/d541a02596f26133959a1bdd0fc93b82.jpg?x-oss-process=image/resize,h_150',
        //   title: '【系列报道】大师名厨助力名厨之家2019砥砺前行！（一）',
        //   content: '2019年，是名厨之家拼搏奋斗、勇于创造的一年，更是智慧喷涌、见证奇迹的一年。名厨之家始终与全国厨师一起，为厨师发声、关心厨师、帮助厨师、让厨师价值最大化。感谢全国厨师朋友对名厨之家的厚爱。你们的祝福和助力，都是我们砥砺前行的最大激励。 　　下面我们就来听听各位名厨的心声，以及对名厨之家新业务、新服务的关注和期待。',
        //   pushTime: '02-28',
        //   pressType: '行业动态',
        //   source: '投资界'
        // },
        // {
        //   id: '2',
        //   imgSrc: 'http://img95.699pic.com/photo/50055/0952.jpg_wh300.jpg',
        //   title: '【系列报道】大师名厨助力名厨之家2019砥砺前行！（一）',
        //   content: '2019年，是名厨之家拼搏奋斗、勇于创造的一年，更是智慧喷涌、见证奇迹的一年。名厨之家始终与全国厨师一起，为厨师发声、关心厨师、帮助厨师、让厨师价值最大化。感谢全国厨师朋友对名厨之家的厚爱。你们的祝福和助力，都是我们砥砺前行的最大激励。 　　下面我们就来听听各位名厨的心声，以及对名厨之家新业务、新服务的关注和期待。',
        //   pushTime: '02-28',
        //   pressType: '行业动态',
        //   source: '投资界'
        // },
        // {
        //   id: '3',
        //   imgSrc: 'http://i1.umei.cc/uploads/tu/201902/9999/4e71d081ad.jpg',
        //   title: '【系列报道】大师名厨助力名厨之家2019砥砺前行！（一）',
        //   content: '2019年，是名厨之家拼搏奋斗、勇于创造的一年，更是智慧喷涌、见证奇迹的一年。名厨之家始终与全国厨师一起，为厨师发声、关心厨师、帮助厨师、让厨师价值最大化。感谢全国厨师朋友对名厨之家的厚爱。你们的祝福和助力，都是我们砥砺前行的最大激励。 　　下面我们就来听听各位名厨的心声，以及对名厨之家新业务、新服务的关注和期待。',
        //   pushTime: '02-28',
        //   pressType: '行业动态',
        //   source: '投资界'
        // }
      ]
    }
  },

  methods: {
    // 根据id去到详情页
    goDetail(id, type) {
      this.$router.push({
        name:'newsDetail',
        query: {
          newsId: id,
          type: type
        }
      })
    },

    getNews() {
      axios.get('/static/api/news.json', {
       params: {
         newsId: this.$route.params.newsId
       }
     }).then((response) => {
       let result = response.data;
      //  console.log(result);
        this.newsList = result.data.news[1].new
        //  console.log(this.news)
     })
    }
  },

  created() {
    this.getNews()
  },
}
</script>

<style lang="scss" scoped>
@import '../../styles/common/px2rem.scss';
.companyNews {
  background: #fff;
  // flex: 1;
  // height: px2rem()
   min-height: px2rem(850);
  .main {
    &-news {
       margin-top: px2rem(0);
      li:nth-last-of-type(1) {
        border-bottom: none;
        margin-bottom: px2rem(48)
      }
      li {
        display: flex;
        height: px2rem(264);
        width: 100%;
        background: #efefef;
        border-bottom: px2rem(16) solid #efefef;
        
        .main-news--list {
          background: #fff;
          height: px2rem(264);
          width: 100%;
          box-sizing: border-box;
          padding: px2rem(32) px2rem(24);
          display: flex;

          .main-news__left {
          flex-shrink: 0;
          height: px2rem(200);
          width: px2rem(300);
          margin-right: px2rem(24);
          img {
            width: 100%;
            height: 100%;
          }
        }
        .main-news__right {
          overflow:hidden;
          &__title {
            font-size: px2rem(28);
            line-height: px2rem(38);
            overflow:hidden;
            text-overflow: ellipsis;
            display:-webkit-box;
            -webkit-line-clamp:2;
            // /*! autoprefixer: off */
            // -webkit-box-orient:vertical;
            // /* autoprefixer: on */
          }
           &__content {
             color: #494949;
             height: px2rem(60);
             margin: px2rem(10) 0 px2rem(20) 0;
             overflow:hidden;
              text-overflow: ellipsis;
              display:-webkit-box;
              -webkit-line-clamp:2;
              -webkit-box-orient:vertical;
             font-size: px2rem(22);
             line-height: px2rem(32)
           }
           &__bottom {
             font-size: px2rem(20);
             color: #999;
             width: 100%;
            //  overflow:hidden;
              display: flex;
            //  display: flex;
            //  justify-content: space-around;
             &__text {
               font-size: px2rem(20);
               margin-right: px2rem(8);
               white-space:nowrap;
               &:nth-last-child(1) {
                  overflow:hidden;
                text-overflow:ellipsis;
                white-space:nowrap;
               }
             }
           }
          
          }
        }
      }
    }
  }
}
</style>

