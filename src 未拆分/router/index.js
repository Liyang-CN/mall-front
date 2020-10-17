import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: () => import('../pages/login.vue'),
      name: '登录'
    },
    {
      path: '/register',
      component: () => import('../pages/register.vue'),
      name: '注册'
    },
    {
      path: '/index',
      component: () => import('../pages/index.vue'),
      name: '登录',
      children: [
        {
          path: 'home',
          component: () => import('../pages/home.vue')
        },
        {
          path: 'classify',
          component: () => import('../pages/classify.vue'),
          name: '分类'
        },
        {
          path: 'shopcart',
          component: () => import('../pages/shopcart.vue'),
          name: '购物车'
        },
        {
          path: 'mine',
          component: () => import('../pages/mine.vue'),
          name: '个人中心'
        },
        {
          path:'',
          component:()=>import('../pages/home.vue')
        }
      ]
    },
    {
      path:'/shopDetail',
      component:()=>import('../pages/shopDetail.vue'),
      name:'商品详情'
    },
    {
      path:'/classifyDetail',
      component:()=>import('../pages/classifyDetail.vue'),
      name:'分类详情'
    },
    {
      path:'*',
      component:()=>import('../pages/login.vue'),
      name:'登录'
    }
  ]
})
