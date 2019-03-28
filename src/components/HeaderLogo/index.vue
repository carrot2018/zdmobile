<template>
  <div class="header">
    <div 
    @click="closeMenu" 
    @touchmove="noMove" 
    v-if="maskOut" 
    class="mask" 
    ref="mask" ></div>
    <transition
    mode="out-in"
    enter-active-class="animated slideInRight"
    leave-active-class="animated slideOutRight"
    :duration="{enter:400, leave: 400}">
      <Menu class="menu1" v-if="show"></Menu>
    </transition>
    <div class="Logo">
      <div @click="goHome" class="header-left">
        <img src="http://zhongao-web.oss-cn-hangzhou.aliyuncs.com/199e1f905d0d43f39588ac6f254ac905.png" alt="">
      </div>
      <div @click="popOut" class="header-right">
        <img src="./images/bar.png" alt="">
      </div>
    </div>
    <!-- <transition name="fade">
      <div @click="closeMenu" v-if="hide" class="off">
      <img src="../Menu/images/off.png" alt="">
    </div>
    </transition> -->
    
    <div @click="closeMenu" v-if="hide" class="off">
      <img src="../Menu/images/off.png" alt="">
    </div>

    
  </div>
</template>

<script>
import Menu from '../Menu';
export default {

  components: {
    Menu,
  },

  data() {
    return {
      show: false,
      hide: false,
      // maskHeight: 0,
      maskOut: false
    }
  },

  methods: {
   

    // 防止mask touchmove事件穿透
    noMove(e) {
      e.preventDefault();
      e.stopPropagation();
    },
 
    // 弹出菜单
    popOut() {
      if(this.show === false) {
        this.maskOut = true;
        this.show = true;
        this.hide = true;
        
       

      } else {
        this.show = false;
        this.hide = false;
        this.maskOut = false;

      }
    },

    // 关闭菜单
    closeMenu() {
      this.show = false;
      this.hide = false;
      this.maskOut = false;

    },

    goHome() {
      this.$router.push('/first')
    }
  },

  watch: {
    // 监听路由变化收起菜单栏
    $route: {
      handler: function(val, oldVal){
        this.show = false;
        this.hide = false;
      },
      // 深度观察监听
      deep: true
    }
  },

}
</script>

<style lang="scss" scoped>
@import '../../styles/common/px2rem.scss';

.mask {
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.3);
  bottom: 0;
  left: 0;
  position: fixed;
  z-index: 1000;
  // pointer-events: none;
}
.menu1 {
  position: fixed;
  right: 0;
  top: 0;
}
.header {
  position: absolute;
  width: 100%;
  // height: 100%;
  top: 0;
  height: px2rem(120);
  
  // box-sizing: border-box;
  display: flex;
  // align-items: center;
  // justify-content: space-between;
  .Logo {
    z-index: 997;
    position: absolute;
    padding: 0 px2rem(40) 0 px2rem(40);
    box-sizing: border-box;
    width: 100%;
    height: px2rem(120);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header-left {
    width: px2rem(218);
    height: px2rem(56);
    img {
      width: 100%;
    }
  }
  .header-right {
    z-index: 1002;
    width: px2rem(70);
    height: px2rem(70);
    img {
      width: 100%;
    }
  }
  .off {
    position: fixed;
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
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>

