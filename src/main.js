// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueTouch from 'vue-touch'
import infiniteScroll from 'vue-infinite-scroll'
// import wx from 'weixin-js-sdk'
Vue.config.productionTip = false

// Vue.use(wx)
Vue.use(VueTouch, {name: 'v-touch'})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  directives: {infiniteScroll}
})
