<template>
<!-- 联系我们 详细的页面 -->
  <div class="contacaDetail">
    <HeaderLogo class="headerLogo"></HeaderLogo>
    <div class="banner">
      <img src="../images/concat/BANNER.jpg" alt="">
    </div>
    <div class="title">
      <h5 class="title__header">联系我们</h5>
      <div class="title__border"></div>
      <span class="title__text">We expecr the cooperation and valuable suggestions.</span>
    </div>
    <div class="main">
      <div class="main__address">
        <img src="../images/concat/map.png" alt="">
      </div>

      <div class="main__content">
        <div class="main__content__top">
          <img src="../images/concat/Contactus.png" alt="">
          <div class="main__content__top__border"></div>
        </div>
        
        <div class="main__content__box">
          <div class="main__content__box__top box">
            <img src="../images/concat/address.png" alt="">
            <h5>地址</h5>
            <span>广东省深圳市</span>
            <span>南山区科技中一路 深圳软件园二期13栋2楼</span>
          </div>
          <div class="main__content__box__wall">

        </div>
          <div class="main__content__box__bottom box">
            <img src="../images/concat/phone.png" alt="">
            <h5>联系方式</h5>
            <span>服务热线 :（0755）26910451</span>
            <span>销售热线 :（0755）26920451</span>
            <!-- <span>Q     Q : 12345678</span> -->
            <span>商务 : service@cookhome.cn</span>
            <span>咨询服务 : service@cookhome.cn</span>
          </div>
        </div>
      </div>
    </div>
    <FooterLogo class="footerLogo"></FooterLogo>
  </div>
</template>

<script>
import FooterLogo from '../components/FooterLogo';
import HeaderLogo from '../components/HeaderLogo';
export default {
  name: 'contacaDetail',
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
  .contacaDetail {
    background: #fff;
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
    .title {
      // z-index: 500;
      flex-shrink: 0;
      height: px2rem(203);
      background: #fff;
      border-radius: px2rem(30) px2rem(30) 0 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      // align-content: center;
      justify-content: center;
      &__header {
        font-size: px2rem(40);
        color: #333;
      }
      &__border {
        height: px2rem(8);
        width: px2rem(56);
        border-radius: px2rem(4);
        background: #2585cd;
        margin: px2rem(20) 0 px2rem(18) 0;
      }
      &__text {
        font-size: px2rem(24);
        color:#666;
      }
    }

    .main {
      &__address {
        display: flex;
        justify-content: center;
        img {
          height: px2rem(386);
          width: px2rem(686);
          border-radius: px2rem(24);
          box-shadow: px2rem(-5) px2rem(5) px2rem(25) rgba(0, 0, 0, 0.1);
        }
      }
      &__content {
        flex: 1;
        margin: px2rem(64) 0 px2rem(88) 0;
        &__wall {
          height: px2rem(275);
        }
        &__top {
          height: px2rem(275);
          background: #004982;
          display: flex;
          flex-direction: column;
          align-items: center;
          img {
            height: px2rem(28);
            width: px2rem(284);
            margin: px2rem(89) 0 px2rem(21) 0;
          }
          &__border {
            height: px2rem(8);
            width: px2rem(56);
            border-radius: px2rem(4);
            background: #fff;
          }
        }

        &__box {
            z-index: 1000;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          &__wall {
            height: px2rem(335);
          }
          .box {
            background: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: px2rem(24);
            box-shadow: px2rem(0) px2rem(5) px2rem(35) rgba(0, 0, 0, 0.1);
            img {
              margin-top: px2rem(38);
              height: px2rem(192);
              width: px2rem(212);
            }
            h5 {
              font-size: px2rem(40);
              color: #004982;
              font-weight: 600;
              margin: px2rem(18) 0 px2rem(28) 0;
            }
            span {
              font-size: px2rem(30);
              color: #004982;
              line-height: px2rem(40);
            }
          }
          &__top {
          
            height: px2rem(422);
            width: px2rem(686);
            position: absolute;
            top: px2rem(-87)
          }
          &__bottom {
            margin-top: px2rem(54);
            height: px2rem(567);
            width: px2rem(686);
           
          }
        }
      }
    }
  }
  
</style>
