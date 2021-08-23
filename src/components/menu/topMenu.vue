<!-- src/menu/topMenu.vue -->
<template>
  <div class="top-menu flex-between-center flex vab-layout-header fixed-header">
    <div class="top-menu-left flex">
      <img class="logo" :src="logoPath" />
      <p class="name">{{ name }}</p>
    </div>
    <div class="top-menu-right flex">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <img class="user-avatar" src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" />
          <i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <a href="javaScript:;" @click="navActive('/index')">
            <el-dropdown-item>首页</el-dropdown-item>
          </a>
          <a href="javaScript:;" @click="navActive('/personal')">
            <el-dropdown-item>个人中心</el-dropdown-item>
          </a>
          <a href="javaScript:;" @click="navActive('/login')">
            <el-dropdown-item divided>退出登录</el-dropdown-item>
          </a>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  name: 'topMenu',
  props: ['logoPath', 'name'],
  methods: {
    navActive(e) {
      let tag
      switch (e) {
        // case '/personal':
        //   tag = { name: '个人中心', path: '/personal' }
        //   this.$store.commit('getActiveTag', tag)
        //   this.$router.push(tag.path)
        //   break
        case '/index':
          tag = { name: '首页', path: '/index' }
          this.$store.commit('getActiveTag', tag)
          this.$router.push(tag.path)
          console.log(123)
          break
        case '/login':
          this.$router.push('/login')
          console.log(123)
          break
      }
    },
  },
}
</script>
<style lang="scss" scoped>
$topMenuWidth: 80px;
$logoWidth: 4rem;
$bg-color: #409eff;
$name-color: #fff;
$name-size: 18px;
.top-menu {
  height: $topMenuWidth;
  text-align: left;
  background-color: $bg-color;
  padding: 1rem 2rem;
  .top-menu-left,
  .top-menu-right {
    align-items: center;
    position: relative;
    .logo {
      width: $logoWidth;
      display: inline-block;
      margin-right: 1rem;
    }
    .name {
      display: inline-block;
      vertical-align: bottom;
      color: $name-color;
      font-size: $name-size;
    }
  }
  .top-menu-right {
    align-items: center;
    position: relative;
    margin-right: 1rem;
    .user-avatar {
      cursor: pointer;
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 0.6rem;
    }
    .el-icon-caret-bottom {
      cursor: pointer;
      position: absolute;
      right: -20px;
      bottom: 5px;
      font-size: 12px;
    }
  }
}
</style>
