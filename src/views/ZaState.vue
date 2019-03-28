<template>
  <div class="zaState">
    <div class="logo">
      <img src="../images/logo-1.png" alt="">
    </div>
    <div class="main">
      <div class="main-title">
      </div>
      <ul class="main-list">
        <router-link 
          v-for="(item, index) in models"
          :key="index"
          :class="item.class"
          tag="li"
          to="/zastate"
         >
          <div class="img"></div>
         </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'zastate',
  data() {
    return {
      models:[
        {
          class:'one_one'
        },
        {
          class:'one_two'
        },
         {
          class:'two_one'
        },
         {
          class:'two_two'
        },
         {
          class:'three_one'
        },
         {
          class:'three_two'
        },
         {
          class:'four_one'
        },
         {
          class:'four_two'
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/common/px2rem.scss';
  .zaState {
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
      display: flex;
      display: -webkit-flex;
      align-items: center;
      height: 100%;
      width: 100%;
      background-size: cover;
      background-image: url('http://zhongao-web.oss-cn-hangzhou.aliyuncs.com/b1e365b2d8874fdc9f46cbae73193182.jpg');
      // background-size: 100%;
      background-repeat: no-repeat;
      .main-title {
        position: absolute;
        left: 0;
        top: 40%;
        height: px2rem(246);
        width: px2rem(114);
         background-size: 100%;
          background-image: url('../images/two/state.png');
      }
      .main-list {
        position: absolute;
        // top: px2rem(293);
        // top: 22%;
        right: px2rem(11);
        height: px2rem(800);
        width: px2rem(480);
        // background: #ccc;
        display: flex;
        display: -webkit-flex;
        justify-content: space-around;
        align-content: space-around;
        flex-wrap: wrap;
        li {
          flex: 1;
          margin-right: 0;
          width: px2rem(240);
          height: px2rem(200);
          // border: 1px solid red;
          .img {
            width: px2rem(220);
            height: px2rem(172);
            background-size: 100%;
          }
          &.one_one {
            .img {
              background-image: url('http://zhongao-web.oss-cn-hangzhou.aliyuncs.com/1cb7a148bfd84d41835568830c5c7b07.png')
            }
          }
           &.one_two {
            .img {
              background-image: url('http://zhongao-web.oss-cn-hangzhou.aliyuncs.com/1fc9773fe2cc4a3cb5287570c6552d70.png')
            }
          }
           &.two_one {
            .img {
              background-image: url('http://zhongao-web.oss-cn-hangzhou.aliyuncs.com/b5ef05aefeac4bb99284c0472319ce5d.png')
            }
          }
           &.two_two {
            .img {
              background-image: url('http://zhongao-web.oss-cn-hangzhou.aliyuncs.com/164797eee0cc43e38c31c29256f12e4f.png')
            }
          }
            &.three_one {
            .img {
              background-image: url('http://zhongao-web.oss-cn-hangzhou.aliyuncs.com/6eb73664b0474cf3b771c1d79d858465.png')
            }
          }
           &.three_two {
            .img {
              background-image: url('http://zhongao-web.oss-cn-hangzhou.aliyuncs.com/1bc1ecb02f774ffe90a4f158b7a0bdf5.png')
            }
          }
           &.four_one {
            .img {
              background-image: url('http://zhongao-web.oss-cn-hangzhou.aliyuncs.com/2369cd68cfbb4b698fd3760bcabcb185.png')
            }
          }
           &.four_two {
            .img {
              background-image: url('http://zhongao-web.oss-cn-hangzhou.aliyuncs.com/a84e87bffc2847c9a451adef77bdf3cc.png')
            }
          }
        }
      }
    }
  }
</style>
