<template>
  <div class="newsCenter">
    <HeaderLogo class="headerLogo"></HeaderLogo>
    <div class="banner">
      <img src="../images/newsCenter/newsBanner.jpg" alt="">
    </div>
    <div class="tab-bar">
      <div class="tab-bar__list">
        <router-link to="/newsCenter/industryNews" tag="span" active-class="z-act">行业新闻
        <div class="border"></div>
        </router-link>
        <router-link to="/newsCenter/companyNews" tag="span" active-class="z-act">公司新闻
        <div class="border"></div>
        </router-link>
      </div>
      <!-- <van-tabs 
      @click="changeNews" 
      v-model="active"
      animated
      >
        <van-tab  title="行内新闻">
        </van-tab>
        <van-tab  title="公司新闻"> 
        </van-tab>
      </van-tabs> -->
    </div>
    <router-view></router-view>
    <FooterLogo class="footerLogo"></FooterLogo>
  </div>
</template>

<script>
import { Tab, Tabs } from 'vant';
import FooterLogo from '../components/FooterLogo';
import HeaderLogo from '../components/HeaderLogo';
// import IndustryNews from '../components/IndustryNews';
// import CompanyNews from '../components/CompanyNews';
export default {
  // name: 'newsCenter',
  data() {
    return {
      active: 2
    }
  },

  components: {
    // IndustryNews,
    // CompanyNews,
    FooterLogo,
    HeaderLogo,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },

  methods: {
    changeNews(index, title) {
      if(index === 0){
        this.$router.push('/newsCenter/industryNews')
      } else if(index === 1){
        this.$router.push('/newsCenter/companyNews')
      }
    }
    
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
    display: flex;
    flex-direction: column;
    position: relative;
    .banner {
      width: 100%;
      height: px2rem(500);
      img {
        width: 100%;
      }
    }
    .tab-bar {
      position: sticky;
      top: 0;
      z-index: 998;
      flex-shrink: 0;
      height: px2rem(102);
      background: #fff;
      border-radius: px2rem(30) px2rem(30) 0 0;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      .tab-bar__list {
        height: px2rem(80);
        width: px2rem(370);
        // background: #eaebf0;
        // border-radius: px2rem(40);
        color: #717171;
        display: flex;
        span {
          flex: 1;
          display: inline-block;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        
          // border-radius: px2rem(40);
          font-size: px2rem(34);
          .border {
            margin-top: px2rem(14);
            width: px2rem(48);
            height: px2rem(6);
            
          }
        }
        .z-act {
          color: #333;
          // font-weight: 600;
          // border-bottom: 6px solid blue;
          // color: white;
          .border {
            background: #2585cd;
          }
        }
      }
    }
  }
  /deep/ .van-tabs__wrap {
    border-radius: 10px 10px 0 0; 
  }
</style>
