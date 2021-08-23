import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';//引入element-ui框架
import 'element-ui/lib/theme-chalk/index.css';//引入element-ui框架样式
// 注：vue中想使用地图，echarts 5.0以上版本官方移除了地图数据和map文件夹，得安装5.0以下的版本。
// import * as echarts from 'echarts';//引入echarts数据可视化工具
import echarts from 'echarts';
// echarts挂载在Vue原型上
Vue.prototype.$echarts = echarts;

import axios from 'axios';
Vue.prototype.axios = axios.create({
  // baseURL:"http://music.couchpotato.fun"
})

// 全局引入 在main.js中引入nprogress插件和样式，

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
// 在 request 拦截器中，展示进度条 NProgress.start();
// axios请求拦截
// axios.interceptors.request.use(config => {
//   // console.log(config)
//   NProgress.start()
//   // 为请求头对象，添加token验证的Authorization字段
//   config.headers.Authorization = window.sessionStorage.getItem('token')
//   // 最后必须return config
//   return config
// })
// // 在 response 拦截器中，隐藏进度条 NProgress.done();
// axios.interceptors.response.use(config => {
//   NProgress.done()
//   return config
// })

//在路由跳转前用NProgress.start()标记下进度条开始
NProgress.configure({ showSpinner: false })
NProgress.configure({ easing: 'linear'})    //动画方向
NProgress.configure({ speed : 200})          //动画速度，单位毫秒ms

router.beforeEach((to, from, next) => {
 NProgress.start()
 next()
})

//在路由跳转后用NProgress.done()标记下结束
router.afterEach(() => {
 NProgress.done()
})


Vue.prototype.$bus = new Vue();

Vue.use(ElementUI);

import messages from '@/utils/message';
Vue.prototype.$Message = messages;//全局挂载message消息提醒

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
