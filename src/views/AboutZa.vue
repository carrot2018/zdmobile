<template>
  <div class="expert">
    <HeaderLogo class="headerLogo"></HeaderLogo>
    <div class="banner">
      <img src="../images/aboutZa/BANNER.jpg" alt="">
    </div>
    <div class="tab-bar">
      <div class="tab-bar__list">
        <router-link to="/aboutZa/zaIntroduce" tag="span" active-class="z-act">中奥简介</router-link>
        <router-link to="/aboutZa/chairmanMsg" tag="span" active-class="z-act">董事长寄语</router-link>
        <router-link to="/aboutZa/corporateCulture" tag="span" active-class="z-act">企业文化</router-link>
      </div>
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
      // active: 2
    }
  },

  components: {
    // IndustryNews,
    // CompanyNews,
    FooterLogo,
    HeaderLogo,
    // [Tab.name]: Tab,
    // [Tabs.name]: Tabs
  },

  methods: {
    // changeNews(index, title) {
    //   if(index === 0){
    //     this.$router.push('/newsCenter/industryNews')
    //   } else if(index === 1){
    //     this.$router.push('/newsCenter/companyNews')
    //   }
    // }
    
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/common/px2rem.scss';
  .expert {
    background: #f5f5f5;
    flex: 1;
    flex-shrink: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    .banner {
      width: 100%;
      height: px2rem(562);
      img {
        width: 100%;
      }
    }
    .tab-bar {
      z-index: 998;
      flex-shrink: 0;
      height: px2rem(122);
      background: #f5f5f5;
      border-radius: px2rem(30) px2rem(30) 0 0;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      .tab-bar__list {
        height: px2rem(80);
        width: px2rem(670);
        background: #eaebf0;
        border-radius: px2rem(40);
        color: #717171;
        display: flex;
        span {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: px2rem(40);
          font-size: px2rem(30);

        }
        .z-act {
          background: #01843e;
          color: white;
        }
      }
    }
  }
  
</style>
