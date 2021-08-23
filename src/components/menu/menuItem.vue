<template>
  <div class="router-item" v-if="route">
    <!-- <el-menu v-if="route" :default-active="$route.path" class="el-menu-vertical-demo" :collapse="false"> -->
    <!--  一级菜单 -->
    <!--  循环路由数据  -->
    <!--  判断当前路由route是否包含子菜单  -->
    <component v-for="(routeItem, index) in route" :key="index" @click="tagsItem(routeItem)" :index="getPath(routeItem.path)"
      :is="routeItem.meta && routeItem.meta['hasSubMenu'] && routeItem.children && routeItem.children.length > 0 ? 'el-submenu' : 'el-menu-item'">
      <template v-if="routeItem.meta && routeItem.meta['hasSubMenu'] && routeItem.children && routeItem.children.length > 0" slot="title">
        <i v-if="routeItem.meta" :title="routeItem.meta.title" :class="routeItem.meta.icon"></i>
        <span v-if="routeItem.meta" slot="title">{{ routeItem.meta.title }} </span>
      </template>

      <template v-else>
        <i v-if="routeItem.meta" :title="routeItem.meta.title" :class="routeItem.meta.icon"></i>
        <span v-if="routeItem.meta">{{ routeItem.meta.title }} </span>
      </template>

      <MenuItem :route="routeItem.children" :basepath="getPath(routeItem.path)">
      </MenuItem>
    </component>

    <!-- </el-menu> -->
  </div>
</template>
<script>
import path from 'path'
export default {
  name: 'MenuItem',
  props: ['route', 'basepath'],
  data() {
    return {
      tagsList: [],
      newList: [],
      tagsPath: '',
      saveOff: true,
    }
  },

  mounted() {
    // console.log('传递的路由信息', this.route)
  },
  methods: {
    // routepath 为当前菜单的path值
    // getpath: 拼接 当前菜单的上一级菜单的path 和 当前菜单的path
    getPath(routePath) {
      return path.resolve(this.basepath, routePath)
    },
    tagsItem(e) {
      console.log('获取当前导航菜单', e)
      if (e && e.name == 'index') {
        this.tagsPath = '/'
      } else {
        this.tagsPath = this.basepath + '/' + e.path
      }
      this.tagsList = this.$store.state.tagsList
      this.newList = { name: e.meta.title, path: this.tagsPath } //当前的激活菜单
      this.saveOff = true
      this.tagsList.forEach((item) => {
        if (item.name == e.meta.title) {
          //当前的激活菜单是否已经存在tag激活标签，存在则不存入tags标签数组
          this.saveOff = false
        }
      })
      if (this.saveOff) {
        //当前菜单未打开过，不存在tag激活标签，则存入tags标签数组
        this.$store.commit('getTagsList', this.newList)
      }
      // 更新tag激活标签
      this.$store.commit('getActiveTag', this.newList)
      // console.log('33', this.$store.state.activeTag)
    },
  },
}
</script>
<style lang="scss" scoped>
.el-menu--collapse > .router-item {
  .el-menu-item > span {
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
    display: inline-block;
  }
  .el-submenu__title > span {
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
    display: inline-block;
  }
  // 深度选择器
  // ::v-deep  /deep/
  /deep/ .el-submenu > .el-submenu__title {
    > i.el-submenu__icon-arrow.el-icon-arrow-right {
      display: none !important;
    }
  }
}
</style>
