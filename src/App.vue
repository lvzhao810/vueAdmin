<template>
  <div id="app">
    <router-view />
    <!-- <MenuIndex /> -->
  </div>
</template>
<script>
// import MenuIndex from '@/components/menu/menuIndex.vue'
export default {
  // components: { MenuIndex },
  data() {
    return {}
  }
}
</script>
<style lang="scss">
@import '@/assets/scss/index.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  box-sizing: border-box;
}
html,
body,
#app {
  height: 100%;
}
body {
  margin: 0;
}

a,
a:focus,
a:hover {
  cursor: pointer;
  color: inherit;
  text-decoration: none;
}
// 在进度条插件样式
#nprogress .bar {
  // background: #66b1ff !important; // 自定义颜色
  height: 2px !important; // 自定义高度
}
//修改表格内容区内边距
.el-card__body {
  padding: 10px !important;
}
.flex {
  display: flex !important;
}
.flex-column {
  display: flex !important;
  flex-direction: column !important;
}
.flex-center-center {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}
.flex-between-center {
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
}
.flex-column-center-center {
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
}
.flex-column-between-center {
  display: flex !important;
  flex-direction: column !important;
  justify-content: space-between !important;
  align-items: center !important;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.right-container {
  // margin-top: 40px;
  margin-left: 200px;
  transition: all 0.3s ease-in-out;
  padding: 0;
  .menu-show-btn {
    width: 100%;
    border-bottom: 1px solid #ddd;
    display: flex;
    padding-bottom: 1rem;
  }
  .right-container-content {
    width: 100%;
    padding: 1rem;
    text-align: initial;
    margin-top: 7rem;
  }
}
.vab-side-bar {
  position: fixed;
  top: 80px;
  bottom: 0;
  left: 0;
  z-index: 1000;
  // width: 266px;
  height: calc(100vh - 80px);
  overflow: hidden;
  background: #282c34;
  // box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), border 0s, color 0.1s, font-size 0s;
}
.fixed-header {
  left: 0;
  // width: calc(100% - 65px);
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
}

.nav-tag-bar {
  left: 200px;
  // width: calc(100% - 65px);
  position: fixed;
  top: 80px;
  right: 0;
  z-index: 1000;
  background: #fff;
  transition: all 0.3s ease-in-out;
}
</style>
