<template>
  <div class="tags flex">
    <el-tag :key="index" class="button-new-tag" :class="getTagItem.name == tag.name ? 'el-tag-active' : ''" @click="navActive(tag)" v-for="(tag, index) in getTagsdata"
      :closable="tag.name == '首页' ? false : true" :disable-transitions="false" @close="handleClose(tag, index)">
      {{ tag.name }}
    </el-tag>
    <!-- <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="medium" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm"> </el-input> -->
    <!-- <el-button v-else class="button-new-tag" size="medium" @click="showInput">+ New Tag</el-button> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      //   inputVisible: false,
      //   inputValue: '',
      //   tagsList: [],
      //   tagItem: {},
      activeTag: false,
    }
  },
  computed: {
    getTagsdata() {
      return this.$store.state.tagsList
    },
    getTagItem() {
      return this.$store.state.activeTag
    },
  },
  updated() {
    console.log('tags标签：', this.getTagsdata)
  },
  methods: {
    handleClose(tag, index) {
      if (this.getTagsdata.length === 1) {
        // 如果只有一个标签则不能关闭
        return
      }
      this.getTagsdata.splice(this.getTagsdata.indexOf(tag), 1)
      //   this.$store.commit('getTagsList', this.getTagsdata)
      if (this.$route.path !== tag.path) {
        // 如果关闭的标签不是当前路由的话，不做路由跳转
        return
      } else {
        if (index === this.getTagsdata.length - 1) {
          // 关闭最后一个标签,则路由跳转至最后一个
          this.$store.commit('getActiveTag', this.getTagsdata[index])
          this.$router.push(this.getTagsdata[index].path)
        } else {
          // 当关闭标签为第一个，路由跳转至下一个标签页
          if (index === 0) {
            this.$store.commit('getActiveTag', this.getTagsdata[0])
            this.$router.push(this.getTagsdata[0].path)
          } else {
            //   关闭标签既不是第一个也不是最后一个，则跳至下一个
            this.$store.commit('getActiveTag', this.getTagsdata[index - 1])
            this.$router.push(this.getTagsdata[index - 1].path)
          }
        }
      }
    },
    navActive(tag) {
      console.log(tag)
      if (this.getTagItem.name !== tag.name) {
        //不是当前激活标签，才重新存入激活标签
        this.$store.commit('getActiveTag', tag)
        this.$router.push(tag.path)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.tags {
  // margin-left: 0.8rem;
  flex-wrap: nowrap;
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    background-color: transparent;
    color: inherit;
    &:hover {
      background-color: #ecf5ff;
      color: #409eff;
    }
  }
  .el-tag-active {
    background-color: #ecf5ff;
    color: #409eff;
  }
}
</style>
