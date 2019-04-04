<template>
<!-- 新闻中心 > 公司新闻 -->
  <div class="companyNews">
    <div class="main">
      <ul class="main-news" >
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
      <div 
        v-infinite-scroll="loadMore" 
        infinite-scroll-disabled="busy" 
        infinite-scroll-distance="10">
        <van-loading v-show="load"/>
        <!-- <van-loading color="white" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { Loading } from 'vant';
import { infiniteScroll } from 'vue-infinite-scroll';
export default {
  directives: {infiniteScroll},
  name: 'companyNews',
  data() {
    return {
      newsList:[],
      rows:0,
      flag:true,
      currentPage:1,
      busy:false,
      load:false
    }
  },

  components: {
    [Loading.name]: Loading,
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
          index: index,
          // Total: this.rows
        }
      })
    },

    // 获取新闻数据
    getNews() {
      let index = this.currentPage;
      axios.get('/server/invoker/content/selectPressContentsByTypeName', {
       params: { "typeName":"公司新闻", "currentPage":index, "pageSize":3 }
     }).then((response) => {
       let result = response.data;

       this.newsList = this.newsList.concat(result.data.contents);
       this.rows = result.data.rows
       // 时间戳转换成时间
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

        // 去掉所有的img a 标签内容和空格
        function someContent(content) {
          let str = content.replace(/<\/?(img|a)[^>]*>/gi, '')
          let str1 = str.replace(/&nbsp;/ig, "")
          let str2 = str1.replace(/\s/g, "");
          let str3 = str2.replace(/<br(\s)*\/>/g, '');
          return str3
        } 

        // 用some方法对数据进行检测并操作
        this.newsList.some((item, i) => {
          item.pushTime = timestampToTime(item.pushTime)
          item.content = someContent(item.content)
        })
     })
    },

      // scroll
    loadMore() {
      this.load = true;
      this.busy = true;
      setTimeout(() => {
        //这里请求接口去拿数据，实际应该是调用一个请求数据的方法
        this.currentPage++;
        this.getNews();
        this.busy = false;
        this.load = false;
      }, 1000);
    }
  },

  created() {
    this.getNews()
  },

  mounted() {
    this.loadMore();
  },
}
</script>

<style lang="scss" scoped>
@import '../../styles/common/px2rem.scss';
.van-loading {
  height: px2rem(50);
  width: px2rem(50);
  position: relative;
  left: 50%;
  transform: translate(-50%, -50%)

}
.companyNews {
  background: #fff;
  // flex: 1;
  // height: px2rem()
  //  min-height: px2rem(850);
  .main {
    &-news {
      min-height: px2rem(850);
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

