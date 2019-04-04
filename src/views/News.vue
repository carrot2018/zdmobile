<template>
  <div class="newsCenter">
    <div class="logo">
      <img src="../images/logo-1.png" alt="">
    </div>
    <div class="main">
      <div class="main-moreNews">
        <span @click="goNewsCenter()">更多资讯（新闻中心) &gt;&gt;</span>
        <i></i>
      </div>
      <div class="main-news">
        <ul class="main-news__list">
          <li 
            v-for="(items, index) in newsList"
            :key="index"
       
            @click="goDetail(items.id, items.typeId, items.pageIndex)"
            >
            <div class="main-news__list__box">
              <div class="news-box__left">
                <div class="news-box__left__text">
                  <span class="news-box__title" style="-webkit-box-orient:vertical;">{{ items.title }}</span>
                  <div class="news-box__from">
                    <i>{{ items.source }}</i>
                    <i>{{ items.pushTime }}</i>
                  </div>
                </div>
              </div>
              <div class="news-box__right">
                <img :src="items.imgSrc" alt="">
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'newsCenter',
  data() {
    return {
      // 后台返回的新闻
      newsList:[],
      rows:0,
      typeId:''
    }
  },
  methods: {
    goNewsCenter() {
      this.$router.push('/newsCenter')
    },

    // 获取新闻信息
    getNews() {
     
      axios.get('/server/invoker/content/selectPressContentsByTypeName', {
       params:{"typeName": '', "currentPage": 1, "pageSize":3}
     }).then((response) => {
       let result = response.data;
       console.log(result);
       this.newsList = result.data.contents;

      //  this.typeId = result.data.contents.typeId
        // this.rows = result.rows;
        // console.log(result.data.contents)
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
       this.newsList.some((item, i) => {
         item.pushTime = timestampToTime(item.pushTime);
       })
     
       
     })
    },

    // 点击新闻去到新闻详情
     goDetail(id, type, index, rows) {
    //    let type1 = type
    //     console.log(type1)
    //   axios.get('/server/invoker/content/getPressType', {
    //    params: { "typeId":type1 }
    //  }).then((response) => {
    //    console.log(response)
    //    let result = response.data;
    //    let typeName = result.data.typeName;
    //  })
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

  },

  created() {
    this.getNews()
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/common/px2rem.scss';
  .newsCenter {
    flex: 1;
    flex-shrink: 0;
    height: 100%;
    width: 100%;
     .logo {
      z-index: 999;
      width: px2rem(200);
      height: px2rem(52);
      position: absolute;
      top: 3%;
      left: 4.4%;
      img {
        width: 100%;
      }
    }
    .main {
      height: 100%;
      width: 100%;
      background-size: cover;
      background-image: url('http://zhongao-web.oss-cn-hangzhou.aliyuncs.com/a5626355562e472aadc11e29eb375698.png');
      // background-size: 100%;
      background-repeat: no-repeat;
      position: relative;
      display: flex;
      justify-content: center;
      .main-moreNews {
        position: absolute;
        // bottom: px2rem(192);
        bottom: 14.4%;
        span {
          border-bottom: 1px solid #fff;
          font-size: px2rem(32);
          color: #ffffff;
        }
      }
      .main-news {
        height: px2rem(650);
        position: absolute;
        width: px2rem(686);
        // top: px2rem(220);
        top: 15.7%;
        // background: #ccc;
        // opacity: 0.5;
        .main-news__list {
          height: px2rem(650);
          display: flex;
          flex-direction: column;
          li {
            width: 100%;
            height: px2rem(188);
            background-image: url('../images/six/new.png');
            background-size: 100%;
            margin-bottom: px2rem(28);
            .main-news__list__box {
              padding: px2rem(32) px2rem(28);
              box-sizing: border-box;
              height: 100%;
              display: flex;
              align-items: center;
              .news-box__left {
                flex:1;
                display: flex;
                flex-direction: column;
                align-content: space-between;
                .news-box__left__text {
                  height: px2rem(132);
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  .news-box__title {
                    font-family: "PingFamg SC [Bold]";
                    font-size: px2rem(28);
                    line-height: px2rem(46);
                    // font-weight: 600;
                    color: #ffffff;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                  }
                  .news-box__from {
                    display: flex;
                    justify-content: space-between;
                    i{
                      font-style: normal;
                      font-size: px2rem(22);
                      color: #ffffff;
                    }
                  }
                }
              }
              .news-box__right {
                flex-shrink: 0;
                height: px2rem(132);
                width: px2rem(200);
                background: #ccc;
                margin-left: px2rem(26);
                img {
                   height: px2rem(132);
                  width: px2rem(200);

                }
              }
            }
          }
        }
      }
    }
  }
</style>
