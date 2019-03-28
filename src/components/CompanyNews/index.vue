<template>
<!-- 新闻中心 > 公司新闻 -->
  <div class="companyNews">
    <div class="main">
      <ul class="main-news">
        <li
        v-for="(item, index) in newsList"
        :key="index"
        @click="goDetail(item.id,item.typeId,item.pageIndex)"
        >
          <div class="main-news--list">
            <div class="main-news__left">
              <img :src="item.imgSrc" alt="">
            </div>
            <div class="main-news__right">
              <h5 class="main-news__right__title"
              style="-webkit-box-orient:vertical;">{{ item.title }}</h5>
              <span 
              v-html="item.content" 
              class="main-news__right__content"
              style="-webkit-box-orient:vertical;"></span>
              <div class="main-news__right__bottom">
                <span class="main-news__right__bottom__text">{{ item.pushTime }}</span>
                <span class="main-news__right__bottom__text">分类：{{ item.pressType.typeName }}</span>
                <span class="main-news__right__bottom__text">来源：{{ item.source }}</span>
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
      newsList:[],
      rows:0
    }
  },

  methods: {
    // 根据id去到详情页
    goDetail(id, type, index) {
      console.log(index)
      this.$router.push({
        name:'newsDetail',
        query: {
          newsId: id,
          type: type,
         index: index
        }
      })
    },

    // 获取新闻数据
    getNews() {
      let index = 1;
      axios.get('/server/invoker/content/selectPressContentsByTypeName', {
       params: { "typeName":"公司新闻", "currentPage":index, "pageSize":10 }
     }).then((response) => {
       let result = response.data;
       console.log(result);
       this.newsList = result.data.contents;
       this.rows = result.data.rows
       // 时间戳转换成时间
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
        // 用some方法对数据进行检测并操作
        this.newsList.some((item, i) => {
          item.pushTime = timestampToTime(item.pushTime)
        })
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
          padding: px2rem(5) 0;
          flex: 1;
          overflow:hidden;
           display: flex;
          flex-direction: column;
          justify-content: space-between;
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
              justify-content: space-between;
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

