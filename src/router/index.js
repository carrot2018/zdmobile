import Vue from 'vue'
import Router from 'vue-router'
// import { resolve } from 'dns';

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   component: () => import('../views/Home.vue'),
    //   children: [
    //     {
    //       path: '',
    //       redirect: '/first'
    //     },
    //     {
    //       // 首页
    //       path: 'first',
    //       name: 'first',
    //       component: () => import('../views/First.vue')
    //     },
    //     { 
    //       // 中奥业态
    //       path: 'zastate',
    //       name: 'zastate',
    //       component: () => import('../views/Zastate.vue')
    //     },
    //     { 
    //       // 最新菜品
    //       path: 'newDish',
    //       name: 'newDish',
    //       component: () => import('../views/NewDish.vue')
    //     },
    //     {
    //       // 合作伙伴
    //       path: 'cooperate',
    //       name: 'cooperate',
    //       component: () => import('../views/Cooperate.vue')
    //     },
    //     { 
    //       // 联系我们
    //       path: 'contactUs',
    //       name: 'contactUs',
    //       component: () => import('../views/ContactUs.vue')
    //     },
    //     {
    //       // 新闻首页
    //       path: 'news',
    //       name: 'news',
    //       component: () => import('../views/News.vue')
    //     },
        
    //   ]
    // },
    // {
    //   path: '/newsCenter',
    //   component: () => import('../views/NewsCenter.vue'),
    //   children: [
    //     {
    //       path: '',
    //       redirect: '/newsCenter/industryNews'
    //     },
    //     {
    //       path: 'industryNews',
    //       name: 'industryNews',
    //       component: () => import('../components/IndustryNews/index.vue')
    //     },
    //     {
    //       path: 'companyNews',
    //       name: 'companyNews',
    //       component: () => import('../components/companyNews/index.vue')
    //     }
    //   ]
    // },
    // {
    //   path: '/aboutZa',
    //   component: () => import('../views/AboutZa.vue'),
    //   children: [
    //     {
    //       path: '',
    //       redirect: '/aboutZa/zaIntroduce'
    //     },
    //     {
    //       path: 'zaIntroduce',
    //       name: 'zaIntroduce',
    //       component: () => import('../components/About/ZaIntroduce/index.vue')
    //     },
    //     {
    //       path: 'chairmanMsg',
    //       name: 'chairmanMsg',
    //       component: () => import('../components/About/ChairmanMsg/index.vue')
    //     },
    //     {
    //       path: 'corporateCulture',
    //       name: 'corporateCulture',
    //       component: () => import('../components/About/CorporateCulture/index.vue')
    //     }
    //   ]
    // },
    // {
    //   path: '/expertTeam',
    //   component: () => import('../views/ExpertTeam.vue'),
    //   children: [
    //     {
    //       path: '',
    //       redirect: '/expertTeam/culinaryMaster'
    //     },
    //     {
    //       path: 'culinaryMaster',
    //       name: 'culinaryMaster',
    //       component: () => import('../components/ExpertTeam/CulinaryMaster/index.vue')
    //     },
    //     {
    //       path: 'agriculturalExpert',
    //       name: 'agriculturalExpert',
    //       component: () => import('../components/ExpertTeam/AgriculturalExpert/index.vue')
    //     },
    //     {
    //       path: 'foodHygiene',
    //       name: 'foodHygiene',
    //       component: () => import('../components/ExpertTeam/FoodHygiene/index.vue')
    //     }
    //   ]
    // },
    // {
    //   path: '/contactDetail',
    //   name: 'contactDetail',
    //   component: () => import('../views/ContactDetail.vue')
    // },
    // {
    //   path: '/recruit',
    //   name: 'recruit',
    //   component: () => import('../views/Recruit.vue')
    // },
    // {
    //   path: '/onlineMessage',
    //   name: 'onlineMessage',
    //   component: () => import('../views/OnlineMessage.vue')
    // },
    // {
    //   path: '/newsDetail',
    //   name: 'newsDetail',
    //   component: () => import('../views/NewsDetail.vue')
    // }() => import('../views/Home.vue'),
    {
      path: '/',
      component: resolve => require(['@/views/Home.vue'], resolve),
      children: [
        {
          path: '',
          redirect: '/first'
        },
        {
          // 首页
          path: 'first',
          name: 'first',
          component: resolve => require(['@/views/First.vue'], resolve),
        },
        { 
          // 中奥业态
          path: 'zastate',
          name: 'zastate',
          component: resolve => require(['@/views/ZaState.vue'], resolve),
        },
        { 
          // 最新菜品
          path: 'newDish',
          name: 'newDish',
          component: resolve => require(['@/views/NewDish.vue'], resolve),
        },
        {
          // 合作伙伴
          path: 'cooperate',
          name: 'cooperate',
          component: resolve => require(['@/views/Cooperate.vue'], resolve),
        },
        { 
          // 联系我们
          path: 'contactUs',
          name: 'contactUs',
          component: resolve => require(['@/views/ContactUs.vue'], resolve),
        },
        {
          // 新闻首页
          path: 'news',
          name: 'news',
          component: resolve => require(['@/views/News.vue'], resolve),
        },
        
      ]
    },
    {
      path: '/newsCenter',
      component: resolve => require(['@/views/NewsCenter.vue'], resolve),
      children: [
        {
          path: '',
          redirect: '/newsCenter/industryNews'
        },
        {
          path: 'industryNews',
          name: 'industryNews',
          component: resolve => require(['@/components/IndustryNews'], resolve),
        },
        {
          path: 'companyNews',
          name: 'companyNews',
          component: resolve => require(['@/components/CompanyNews'], resolve),
        }
      ]
    },
    {
      path: '/aboutZa',
      component: resolve => require(['@/views/AboutZa.vue'], resolve),
      children: [
        {
          path: '',
          redirect: '/aboutZa/zaIntroduce'
        },
        {
          path: 'zaIntroduce',
          name: 'zaIntroduce',
          component: resolve => require(['@/components/About/ZaIntroduce'], resolve),
        },
        {
          path: 'chairmanMsg',
          name: 'chairmanMsg',
          component: resolve => require(['@/components/About/ChairmanMsg'], resolve),
        },
        {
          path: 'corporateCulture',
          name: 'corporateCulture',
          component: resolve => require(['@/components/About/CorporateCulture'], resolve),
        }
      ]
    },
    {
      path: '/expertTeam',
      component: resolve => require(['@/views/ExpertTeam.vue'], resolve),
      children: [
        {
          path: '',
          redirect: '/expertTeam/culinaryMaster'
        },
        {
          path: 'culinaryMaster',
          name: 'culinaryMaster',
          component: resolve => require(['@/components/ExpertTeam/CulinaryMaster'], resolve),
        },
        {
          path: 'agriculturalExpert',
          name: 'agriculturalExpert',
          component: resolve => require(['@/components/ExpertTeam/AgriculturalExpert'], resolve),
        },
        {
          path: 'foodHygiene',
          name: 'foodHygiene',
          component: resolve => require(['@/components/ExpertTeam/FoodHygiene'], resolve),
        }
      ]
    },
    {
      path: '/contactDetail',
      name: 'contactDetail',
      component: resolve => require(['@/views/ContactDetail.vue'], resolve),
    },
    {
      path: '/recruit',
      name: 'recruit',
      component: resolve => require(['@/views/Recruit.vue'], resolve),
    },
    {
      path: '/onlineMessage',
      name: 'onlineMessage',
      component: resolve => require(['@/views/OnlineMessage.vue'], resolve),
    },
    {
      path: '/newsDetail',
      name: 'newsDetail',
      component: resolve => require(['@/views/NewsDetail.vue'], resolve),
    }
  ],

  // 路由跳转回到顶部
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { x: 0, y: 0 }
  }
})
