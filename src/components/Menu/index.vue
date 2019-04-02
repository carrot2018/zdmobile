<template>
  <div class="menu1">
    <!-- <div class="mask"></div> -->
    <div class="off">
      <img src="./images/off.png" alt="">
    </div>
    <ul class="menu-list">
      <router-link
        v-for="(item, index) in menus"
        :key="index"
        :class="item.class"
        :to="{ path: item.path }"
        tag="li">
        <i class="img"></i>
        <span>{{ item.id }}</span>
          <img class="back" src="./images/fanhui.png" alt="">
      </router-link>
    </ul>
  </div>
</template>

<script>
// import { Cell } from 'vant';
export default {
  data() {
    return {
      menus:[
        {
          class: 'yemian',
          id: '首页',
          path: '/first',
        },
        {
          class: 'guanyu',
          id: '关于中奥',
          path: '/aboutZa',
        },
        {
          class: 'tuandui',
          id: '专家团队',
          path: '/expertTeam',
        },
        {
          class: 'consult',
          id: '新闻资讯',
          path: '/newsCenter',
        },
        {
          class: 'zhaopin',
          id: '招贤纳士',
          path: '/recruit',
        },
        {
          class: 'lianxi',
          id: '联系我们',
          path: '/contactDetail',
        },
        // {
        //   class: 'liuyan',
        //   id: '在线留言',
        //   path: '/onlineMessage',
        // },
      ]
    }
  },

  
  // components: {
  //   [Cell.name]: Cell,
  // }
  

}
</script>

<style lang="scss" scoped>
@import '../../styles/common/px2rem.scss';
  .menu1 {
    z-index: 1001;//headerLogo组件的logo部分为997
    height: 100%;
    width: px2rem(500);
    // position: relative;
    opacity: 0.95;
    display: flex;
    position: fixed;
    top: 0;
    // .mask {
    //   background: rgba($color: #000000, $alpha: 0.3);
    //   height: 100%;
    //   width: 100%;
    //   position: fixed;
    //   top: 0;
    //   left: 0;
    // }
    .off {
      position: absolute;
      top: px2rem(40);
      right: px2rem(32);
      height: px2rem(90);
      width: px2rem(90);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1001;
      img {
        height: px2rem(70);
        width: px2rem(70);
      }
    }
    .menu-list {
      z-index: 1001; // mask 为1000
      height: 100%;
      background: #111111;
      width: px2rem(500);
      display: flex;
      flex-direction: column;
      position: absolute;
      padding-top: px2rem(233);
      box-sizing: border-box;
      right: 0;
      li {
        display: flex;
        // justify-content: space-between;
        align-items: center;
        font-size: px2rem(28);
        color: #ffffff;
        height: px2rem(83);
        border-bottom: px2rem(1) solid #747474;
        position: relative;
        .img {
          display: block;
          width: px2rem(30);
          height: px2rem(30);
          background-size: 100%;
          margin: 0 px2rem(18) 0 px2rem(49)
        }
        .back {
          width: px2rem(18);
          height: px2rem(30);
          background-size: 100%;
          position: absolute;
          right: px2rem(33);
        }
        &.yemian {
          .img {
            background-image: url('./images/yemian.png');
            background-repeat: no-repeat;
          }
        }
        &.guanyu {
          .img {
            background-image: url('./images/guanyu.png');
            background-repeat: no-repeat;
          }
        }
        &.tuandui {

          .img {
            margin-top: px2rem(5);
            background-image: url('./images/tuandui.png');
            background-repeat: no-repeat;
          }
        }
        &.consult {
          .img {
            background-image: url('./images/consult.png');
            background-repeat: no-repeat;
          }
        }
        &.zhaopin {
          .img {
            background-image: url('./images/zhaopin.png');
            background-repeat: no-repeat;
          }
        }
        &.lianxi {
          .img {
            background-image: url('./images/lianxi.png');
            background-repeat: no-repeat;
          }
        }
        // &.liuyan {
        //   .img {
        //     background-image: url('./images/liuyan.png');
        //     background-repeat: no-repeat;
        //   }
        // }
      }
    }
  }
</style>
