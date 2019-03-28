<template>
  <div class="about">
    <HeaderLogo class="headerLogo"></HeaderLogo>
    <div class="banner">
      <img src="../images/expertTeam/BANNER.jpg" alt="">
    </div>
    <div class="tab-bar">
      <div class="tab-bar__list">
        <router-link to="/expertTeam/culinaryMaster" tag="span" active-class="z-act">烹饪大师</router-link>
        <!-- <router-link to="/expertTeam/chairmanMsg" tag="span" active-class="z-act">农业专家顾问</router-link>
        <router-link to="/expertTeam/corporateCulture" tag="span" active-class="z-act">食品卫生专家</router-link> -->
        <span>
          农业专家顾问
        </span>
        <span>
          食品卫生专家
        </span>
      </div>
    </div>
    <router-view></router-view>
    <FooterLogo class="footerLogo"></FooterLogo>
  </div>
</template>

<script>
// import { Tab, Tabs } from 'vant';
import FooterLogo from '../components/FooterLogo';
import HeaderLogo from '../components/HeaderLogo';
export default {
  data() {
    return {
      
    }
  },

  components: {
    FooterLogo,
    HeaderLogo,
  },

  methods: {
    
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/common/px2rem.scss';
  .about {
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
          font-size: px2rem(28);
          color: #333;
        }
        .z-act {
          background: #2585cd;
          color: white;
        }
      }
    }
  }
  
</style>
