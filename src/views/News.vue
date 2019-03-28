<template>
  <div class="newsCenter">
    <div class="logo">
      <img src="../images/logo-1.png" alt="">
    </div>
    <div class="main">
      <div class="main-moreNews">
        <span @click="goNewsCenter()">更多咨询（新闻中心)</span>
        <i></i>
      </div>
      <div class="main-news">
        <ul class="main-news__list">
          <li 
            v-for="(items, index) in newsList"
            :key="index"
       
            @click="goDetail(items.id, items.typeId)"
            >
            <div class="main-news__list__box">
              <div class="news-box__left">
                <div class="news-box__left__text">
                  <span class="news-box__title">{{ items.title }}</span>
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
      newsList:[
        // {
        //   title: '六道无锡本帮菜制作，民间风味一目了然!',
        //   source: '红厨网',
        //   pushTime: '3小时前',
        //   imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552568762989&di=f58dc2d32dbbe62c22d3f2b8e6a834fb&imgtype=0&src=http%3A%2F%2Fimg18.3lian.com%2Fd%2Ffile%2F201710%2F13%2F338b9c076dda5bc17e9239af07c79b62.jpg'
        // },
      ]
    }
  },
  methods: {
    goNewsCenter() {
      this.$router.push('/newsCenter')
    },

    getNews() {
      axios.post('/server/invoker/content/selectPressContentsTop3/', {
       
     }).then((response) => {
       let result = response.data;
       console.log(result);
       this.newsList = result.data;

       function timestampToTime(timestamp) {
        let date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        let Y = date.getFullYear() + '-';
        let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        let D = date.getDate() + ' ';
        let h = date.getHours() + ':';
        let m = date.getMinutes() + ':';
        let s = date.getSeconds();
        return Y+M+D;
      }
       this.newsList.some((item, i) => {
         item.pushTime = timestampToTime(item.pushTime)
       })
        // this.newsList = result.data.news[0].new
        //  console.log(this.news)
     })
    },

     goDetail(id, type) {
      this.$router.push({
        name:'newsDetail',
        query: {
          newsId: id,
          type: type
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
        bottom: px2rem(192);
        span {
          font-size: px2rem(32);
          color: #ffffff;
        }
      }
      .main-news {
        height: px2rem(650);
        position: absolute;
        width: px2rem(686);
        top: px2rem(220);
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
