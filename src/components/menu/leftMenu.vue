<!-- src/menu/leftMenu.vue -->
<template>
  <div id="left-menu" class="vab-side-bar">
    <el-menu v-if="routesInfo" router :default-active="$route.path == '/index' ? '/' : $route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <MenuItem :route="routesInfo"> </MenuItem>
    </el-menu>
  </div>
</template>
<script>
import MenuItem from './menuItem'
import 'element-ui/lib/theme-chalk/index.css'
export default {
  name: 'LeftMenu',
  components: { MenuItem },
  props: ['isCollapse', 'screenWidth'],
  data() {
    return {
      //   isCollapse: false,
      // screenWidth: 1920,
    }
  },
  created() {
    //初始化，刷新时，把当前所在路由导航菜单存入tags数组，并激活当前tag标签
    if (this.$route.path !== '/index') {
      let newList = { name: this.$route.meta.title, path: this.$route.path }
      this.$store.commit('getTagsList', newList)
      this.$store.commit('getActiveTag', newList)
    }
  },
  mounted() {
    console.log('路径', this.$route.path)
    console.log('路由信息', this.$router.options.routes)
    // this.screenWidth = document.body.clientWidth //这样一刷新页面 依旧可以先获取获取此时的屏幕宽
    // // header头部监听
    // let that = this
    // window.addEventListener('resize', function () {
    //   return (() => {
    //     window.screenWidth = document.body.clientWidth
    //     that.screenWidth = window.screenWidth
    //   })()
    // })
    // // 若屏幕宽度变化 就实时派发
    // this.$EventBus.$emit('screenWidth', {
    //   Width: that.screenWidth,
    // })
  },
  // 代码位置：src/menu/leftMenu.vue
  computed: {
    routesInfo: function() {
      return this.$router.options.routes.filter(e => e.hidden !== true) //去除隐藏的菜单 hidden = true
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
    // selectEvent(key, keyPath) {
    //   console.log('当前菜单信息：', key, keyPath)
    // }
  }
}
</script>
<style lang="scss">
// 使左边的菜单外层的元素高度充满屏幕
#left-container {
  position: absolute;
  top: 80px;
  bottom: 0px;
  // 使菜单高度充满屏幕
  #left-menu {
    height: 100%;
  }
  .el-menu-vertical-demo {
    height: 100%;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
    background: #f0f8ff;
  }
  .el-menu {
    background: #dff0ff;
  }
  .el-menu-item.is-active {
    background: #c0dfff;
  }
  .el-menu-item:hover {
    background: #c0dfff;
  }
}
</style>
