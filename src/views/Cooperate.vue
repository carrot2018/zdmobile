<template>
  <div class="cooperate">
    <div class="logo">
      <img src="../images/logo-1.png" alt="">
    </div>
    <div class="main">
      <div class="main-logo"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cooperate',
  data() {
    return {
      
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/common/px2rem.scss';
  .cooperate {
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
      background-image: url('http://zhongao-web.oss-cn-hangzhou.aliyuncs.com/eefca3fd9242407cbe00c22254e5d0ad.png');
      // background-size: 100%;
      background-repeat: no-repeat;
      position: relative;
      display: flex;
      justify-content: center;
      .main-logo {
        position: absolute;
        top: 27.88%;
        width: px2rem(686);
        height: px2rem(490);
        background-image: url('http://zhongao-web.oss-cn-hangzhou.aliyuncs.com/6ab6becce09b4fa0ba57b064d61441bc.png');
        background-size: 100%;
      }
    }
  }
</style>
