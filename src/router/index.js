import Vue from 'vue';
import Router from "vue-router";

// 菜单
import MenuIndex from '@/components/menu/menuIndex.vue';

const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)


/* Router Modules */
import componentsRouter from './modules/components'


const routes = [
    // 首页(仪表盘、快速入口)
    {

        path: '/',
        name: 'index',
        component: MenuIndex,
        redirect: '/index',
        meta: {
            title: '首页',    // 菜单标题
            icon: 'el-icon-s-home',  // 图标
            hasSubMenu: false, // 是否包含子菜单，false 没有子菜单；true 有子菜单

        },
        children:[
            {
                path: '/index',
                component: () => import ('@/views/homePage/index.vue')
            }
        ]
    },
    // 登录
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/login/login.vue'),
      hidden: true,//是否显示菜单
      meta: {
            title: '登录',    // 菜单标题
            icon: 'el-icon-thumb',  // 图标
            hasSubMenu: false,   // 是否包含子菜单

        },
    },
    // 注册
    {
      path: '/register',
      name: 'register',
      component: () => import('@/components/login/register.vue'),
      hidden: true,//是否显示菜单
      meta: {
            title: '注册',    // 菜单标题
            icon: 'el-icon-postcard',  // 图标
            hasSubMenu: false,   // 是否包含子菜单
        },
    },

    componentsRouter,

]


const router = new Router({
    routes,
    mode: "history"
})

export default router
