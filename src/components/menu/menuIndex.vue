<template>
  <div id="menu-index">
    <el-container>
      <el-header>
        <TopMenu :logoPath="logoPath" :name="name"></TopMenu>
      </el-header>
      <el-container id="left-container">
        <LeftMenu :isCollapse="isCollapse"></LeftMenu>
      </el-container>
      <el-container class="right-container flex-column" :class="isCollapse ? 'right-container-margin-left' : ''">
        <div class="nav-tag-bar" :class="isCollapse ? 'menu-show-btn-left' : ''">
          <div class="menu-show-btn flex">
            <el-button size="small " @click="switchMenufn"><i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i></el-button>
            <Breadcrumb></Breadcrumb>
          </div>
          <div class="menu-show-btn flex">
            <Tags></Tags>
          </div>
        </div>
        <div class="right-container-content">
          <router-view />
        </div>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import LeftMenu from './leftMenu'
import TopMenu from './topMenu'
import Breadcrumb from './breadcrumb'
import Tags from './tags'
export default {
  name: 'MenuIndex',
  components: { LeftMenu, TopMenu, Breadcrumb, Tags },
  data() {
    return {
      logoPath: require('@/assets/ycyw-yyclfs.png'),
      name: 'vue-element-admin-lz',
      isCollapse: false,
      screenWidth: 1920
    }
  },
  mounted() {
    this.screenWidth = document.body.clientWidth //这样一刷新页面 依旧可以先获取获取此时的屏幕宽
    // header头部监听
    let that = this
    window.addEventListener('resize', function() {
      return (() => {
        window.screenWidth = document.body.clientWidth
        that.screenWidth = window.screenWidth
        if (that.screenWidth <= 992) {
          that.isCollapse = true
        } else {
          that.isCollapse = false
        }
      })()
    })
    // 若屏幕宽度变化 就实时派发
    // this.$EventBus.$emit('screenWidth', {
    //   Width: that.screenWidth,
    // })
  },
  methods: {
    switchMenufn() {
      this.isCollapse = !this.isCollapse
      console.log('切换', this.isCollapse)
    }
  }
}
</script>
<style lang="scss">
#menu-index {
  .el-header {
    height: 80px !important;
    padding: 0px;
  }
  .right-container-margin-left {
    margin-left: 65px !important;
    transition: all 0.3s ease-in-out;
  }
  .right-container {
    .nav-tag-bar {
      box-shadow: 0 1px 4px rgba(0, 21, 41, 0.2);
      .menu-show-btn {
        width: 100%;
        border-bottom: 1px solid #f6f6f6;
        padding: 0.5rem 2rem;
        box-sizing: border-box;
        flex-wrap: nowrap;
        align-items: center;
        // padding-bottom: 10px;
      }
    }
    .menu-show-btn-left {
      left: 65px !important;
      transition: all 0.3s ease-in-out;
    }
    .content-box {
      width: 100%;
    }
  }
}
</style>
