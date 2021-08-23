<template>
  <div class="breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <!-- <el-breadcrumb-item :to="{path:'/'}">首页</el-breadcrumb-item> -->
      <span @click="navActive" class="el-breadcrumb__item"><span role="link" class="el-breadcrumb__inner is-link">首页</span><i class="el-breadcrumb__separator el-icon-arrow-right"></i></span>
      <el-breadcrumb-item v-for="(item,index) in getRoute" :key="index">{{ item.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    getRoute() {
      return this.$route.matched
    },
  },
  mounted() {
    console.log('路径', this.$route)
  },
  methods: {
    navActive() {
      let tag = { name: '首页', path: '/index' }
      this.$store.commit('getActiveTag', tag)
      this.$router.push(tag.path)
    },
  },
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  margin-left: 1rem;
}
</style>