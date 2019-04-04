<template>
  <div id="app">
    <transition
      mode="out-in"
      :enter-active-class="animatedIn"
      :leave-active-class="animatedOut"
      :duration="{enter:800, leave:300}">
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      animatedIn:"animated fadeIn",
      animatedOut:"animated fadeOut"
    }
  },

  created() {
   function fullScreen(element) { 
    if(element.requestFullScreen) { 
    element.requestFullScreen(); 
    } else if(element.webkitRequestFullScreen ) { 
      element.webkitRequestFullScreen(); 
      } else if(element.mozRequestFullScreen) { 
      element.mozRequestFullScreen(); 
    } 
  }

  },
}
</script>


<style lang="scss">
@import './styles/base.scss';
</style>


