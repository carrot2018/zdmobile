<template>
  <div class="contactUs">
    <div class="logo">
      <img src="../images/logo-1.png" alt="">
    </div>
    
    <div class="main">
      <div class="main-box">
        <span class="main-box__title">联系我们</span>
        <div class="main-box__content">
        <div class="main-box__content__top">
          <i class="main-box__content__top__icon">
            <img src="../images/concat/dizhi.png" alt="">
          </i>
          <h5>地址</h5>
          <span>广东省深圳市南山区科技中一路 深圳软件园二期13栋202</span>
        </div>
        <div class="main-box__content__bottom">
          <i class="main-box__content__bottom__icon">
            <img src="../images/concat/lianxi.png" alt="">
          </i>
          <h5>联系方式</h5>
          <div class="main-box__content__bottom__text">
             <span>服务热线 :（0755）26910451</span>
            <span>销售热线 :（0755）26920451</span>
            <!-- <span>QQ : 12345678</span> -->
            <span>商务 : service@cookhome.cn</span>
            <span>咨询服务 : service@cookhome.cn</span>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contactUs',
  data() {
    return {
      
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/common/px2rem.scss';
  .contactUs {
    flex: 1;
    flex-shrink: 0;
    height: 100%;
    width: 100%;
    position: relative;
      background-size: cover;
      background-image: url('http://zhongao-web.oss-cn-hangzhou.aliyuncs.com/f05bd881a9a44ce5a80329398d984789.png');
      background-size: 100%;
      background-repeat: no-repeat;
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
      // width: 100%;
    
      position: relative;
      display: flex;
      display: -webkit-flex;
      justify-content: center;
      &-box {
        height: 100%;
        width: 100%;
        display: flex;
          display: -webkit-flex;
        flex-direction: column;
        align-items: center;
         position: relative;
        &__title {
          position: absolute;
          top: 15%;
          width: px2rem(258);
          height: px2rem(64);
          font-size: px2rem(48);
          font-weight: 600;
          line-height: px2rem(46);
          color: #fff;
          display: inline-block;
          text-align: center;
          border-bottom: px2rem(1) solid #fff;
        }
        &__content{
          position: absolute;
          // bottom: 16.19%;
          top: 25.7%;
          min-height: px2rem(702);
          width: 100%;
          display: flex;
                  display: -webkit-flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
        &__top {
          margin: 0 0 px2rem(20) 0;
          padding: 0 px2rem(33);
          box-sizing: border-box;
          // position: absolute;
          // top: 30.88%;
          // width: 62.13%;
          // height: 21.96%;
          width: px2rem(466);
          height: px2rem(293);
          background-image: url('../images/concat/dizhibk.png');
          background-size: cover;
          background-repeat: no-repeat;
          display: flex;
                  display: -webkit-flex;
          flex-direction: column;
          align-items:center;
          &__icon {
            height: px2rem(55);
            width: px2rem(42);
            margin: px2rem(50) 0 px2rem(20) 0;
            img {
              width: 100%;
            }
          }
          h5 {
            margin-bottom: px2rem(13);
            font-size: px2rem(30);
            color: #fff;
            line-height: px2rem(46);
          }
          span {
            font-size: px2rem(22);
            line-height: px2rem(36);
            color: #fff;
           
          }
        }

        &__bottom {
          // position: absolute;
          // top:52.85%;
          margin-bottom: 16.19%;
          //  width: 62.13%;
          // height: 29.16%;
          width: px2rem(466);
          height: px2rem(389);
           background-image: url('../images/concat/lianxibk.png');
            background-size: 100%;
            background-repeat: no-repeat;
             display: flex;
          flex-direction: column;
          align-items:center;
         
          &__icon {
            height: px2rem(44);
            width: px2rem(44);
            margin: px2rem(43) 0 px2rem(17) 0;
            img {
              width: 100%;
            }
          }
          h5 {
             margin-bottom: px2rem(26);
            font-size: px2rem(30);
            color: #fff;
            line-height: px2rem(46);
          }
          span {
            display: block;
             font-size: px2rem(22);
            color: #fff;
            line-height: px2rem(36);
          }
        }
      }
      }
    }
  }
</style>
