<template>
  <div class="newDish">
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
  name: 'first',
  data() {
    return {
      
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/common/px2rem.scss';
  .newDish {
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
      background-image: url('http://zhongao-web.oss-cn-hangzhou.aliyuncs.com/e06dd79608ee4750b37087a0420340ee.png');
      // background-size: 100%;
      background-repeat: no-repeat;
      position: relative;
      display: flex;
      justify-content: center;
      .main-logo {
        position: absolute;
        // left: px2rem(157);
        top: px2rem(230);
        width: px2rem(436);
        height: px2rem(450);
        background-image: url('http://zhongao-web.oss-cn-hangzhou.aliyuncs.com/ed24c8935cf1407ba6abaafe38ed798c.png');
        background-size: 100%;
      }
    }
  }
</style>
