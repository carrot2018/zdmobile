<template>
<!-- 首页 -->
  <div class="home">
    <div class="mask" @click="getOut" v-show="mask"></div>
    <transition
    mode="out-in"
    enter-active-class="animated slideInRight"
    leave-active-class="animated slideOutRight"
    :duration="{enter:400, leave: 400}">
      <Menu class="menu1" v-if="show"></Menu>
    </transition>
    <!-- <Menu class="menu1" v-if="show"></Menu> -->
    
    <div @click="popOut" class="icon">
      <img v-if="chekout" src="../images/on.png" alt="">
      <img v-if="!chekout" src="../images/off.png" alt="">
    </div>

     <v-touch 
     class="touch" 
     v-on:swipeup="flag && onSwipeUp()"
     v-on:swipedown="flag && onSwipeDown()">
     <transition
      mode="out-in"
      :enter-active-class="animatedIn"
      :leave-active-class="animatedOut"
      :duration="{enter:800, leave:300}">
      
      <router-view></router-view>
      
      </transition>
     </v-touch>
    
    <div @click="flag && routerChange()" class="goDown"></div>
    
  </div>

</template>

<script>
import { Popup } from 'vant';
import Menu from '../components/Menu';
export default ({
  name: 'Home',

  components: {
    Menu,
    [Popup.name]: Popup,

  },

  data() {
    return {
      show: false,
      mask: false,
      chekout: true,
      flag: true, // 用于控制点击切换页面后延时内是否可以点击（1.3s）
      timerID: null, // 定时器
      animatedIn:"animated fadeInUp",
      animatedOut:"animated fadeOutUp",
    }
  },

  methods: {
    // 点击菜单图标弹出或收起菜单
    popOut() {
      if(this.show === false) {
        this.show = true;
        this.chekout = false;
        this.mask = true;
      } else {
        this.show = false;
        this.chekout = true;
        this.mask = false;
      }
    },

    getOut() {
      this.show = false;
      this.mask = false;
      this.chekout = true;
    },

    routerChange() {
      
      // 点击切换页面（防止点击过快设置了1000ms的延迟）
      let that = this
      if(this.flag){
        if(this.$route.path==='/first'){
         this.$router.push('zastate')
        } else if (this.$route.path==='/zastate'){
          this.$router.push('newDish')
        } else if (this.$route.path==='/newDish') {
          this.$router.push('news')
        } else if (this.$route.path==='/news') {
          this.$router.push('cooperate')
        } else if (this.$route.path==='/cooperate') {
          this.$router.push('contactUs')
        } else if (this.$route.path==='/contactUs') {
          this.$router.push('first')
        }
      }
      // 每次点击之后flag为false，1300ms后变为true（也就是可以点击）
      this.flag = false;
      this.timerID = setTimeout(function () {
        that.flag = true
      },1000)
    },
    
    // 清除点击事件的延时器
    destroyed () {
      clearTimeout(this.timerID)
    },

    // 上拉切换路由
    onSwipeUp() {
      this.animatedIn="animated fadeInUp";
      this.animatedOut="animated fadeOutUp";
      let that = this
      if(this.flag){
      if(this.$route.path==='/first'){
         this.$router.push('zastate')
        } else if (this.$route.path==='/zastate'){
          this.$router.push('newDish')
        } else if (this.$route.path==='/newDish') {
          this.$router.push('news')
        } else if (this.$route.path==='/news') {
          this.$router.push('cooperate')
        } else if (this.$route.path==='/cooperate') {
          this.$router.push('contactUs')
        } else if (this.$route.path==='/contactUs') {
          this.$router.push('first')
        }
      }
      this.flag = false;
      this.timerID = setTimeout(function () {
        that.flag = true
      },1000)
    },

    // 下拉切换路由
    onSwipeDown() {
      this.animatedIn="animated fadeInDown";
      this.animatedOut="animated fadeOutDown";
      let that = this
      if(this.flag){
      if(this.$route.path==='/first'){
          this.$router.push('contactUs')
        } else if (this.$route.path==='/contactUs'){
           this.$router.push('cooperate')
        } else if (this.$route.path==='/cooperate') {
          this.$router.push('news')
        } else if (this.$route.path==='/news') {
          this.$router.push('newDish')
        } else if (this.$route.path==='/newDish') {
          this.$router.push('zastate')
        } else if (this.$route.path==='/zastate') {
          this.$router.push('first')
        }
      }
      this.flag = false;
      this.timerID = setTimeout(function () {
        that.flag = true
      },1000)
    }
  },

  created() {
    
  },
  

  mounted() {
    this.destroyed ()
  },

  updated() {
   
  },
  watch: {

    // 监听路由变化收起菜单栏
    $route: {
      handler: function(val, oldVal){
        this.show = false;
        this.chekout = true;
        this.mask = false;
      },
      // 深度观察监听
      deep: true
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../styles/common/px2rem.scss';
.mask {
  background: rgba($color: #000000, $alpha: 0.3);
  height: 100%;
  width: 100%; 
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  /deep/ body {
    overflow: hidden;
    height: 100%;
  }
}
  .home {
    background: #999;
    height: 100%;
    position: relative;
    display: flex;
    
    .touch {
      height: 100%;
      width: 100%;
    }
    .icon {
      z-index: 1002;
      position: absolute;
      height: px2rem(90);
      width: px2rem(90);
      display: flex;
      justify-content: center;
      align-items: center;
      top: px2rem(40);
      right: px2rem(32);
      img {
        height: px2rem(70);
        width: px2rem(70);
      }
    }
    .menu {
      height: 100%;
      width: 100%;
      position: fixed;
      right: 0;
      background: #111111;
      opacity: 0.95;
    }
    .menu1 {
      position: fixed;
      right: 0;
    }
    .goDown {
      position: fixed;
      bottom: 4.5%;
      // left:  px2rem(358);
      left: 50%;
      transform: translate(-50%, 0);
      height: px2rem(34);
      width: px2rem(34);
      background-image: url('../images/down.png');
      background-size: 100%;
      background-repeat: no-repeat;
    }
  }
</style>
