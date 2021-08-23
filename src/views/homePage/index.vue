<template>
  <div class="home">
    <div class="el-col el-col-24" style="padding-left: 1rem; padding-right: 1rem;">
      <el-card class="el-col el-col-24 box-card" style="width:100%">
        <div class="header flex" style="padding: 0 10px">
          <div class="header-left flex">
            <img src="@/assets/xj-tile.png" alt="" />
          </div>
          <div class="header-content flex-column">
            <h3>{{ nowTime }} admin，愿你天黑有灯，下雨有伞。</h3>
            <p>云破日出，你是那道光束！！！</p>
          </div>
          <div class="header-footer flex">
            <el-tag>赚钱最重要</el-tag>
          </div>
        </div>
      </el-card>
    </div>

    <div class="el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-md-12 el-col-lg-12 el-col-xl-12" style="padding-left: 1rem; padding-right: 1rem;">
      <el-card class="el-card is-hover-shadow box-card">
        <div slot="header" class="header flex-between-center">
          <div class="header-left flex">
            <i data-v-79aac9d9="" aria-hidden="true" class="el-icon-s-promotion"></i>
            <span>中国地图</span>
          </div>
          <el-tag>我爱你中国，亲爱的母亲</el-tag>
        </div>
        <chinaMap />
      </el-card>
    </div>

    <div class="el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-md-12 el-col-lg-12 el-col-xl-12" style="padding-left: 1rem; padding-right: 1rem;">
      <el-card class="el-card is-hover-shadow box-card">
        <div slot="header" class="header flex-between-center">
          <div class="header-left flex">
            <i data-v-79aac9d9="" aria-hidden="true" class="el-icon-arrow-right"></i>
            <span>表格树行展示</span>
          </div>
          <el-tag>点 &gt;，展示更多</el-tag>
        </div>
        <treeElTable />
      </el-card>
    </div>

    <div class="el-col el-col-24" style="padding-left: 1rem; padding-right: 1rem;">
      <el-card class="el-col el-col-24 box-card">
        <div slot="header" class="header flex-between-center">
          <div class="header-left flex">
            <i data-v-79aac9d9="" aria-hidden="true" class="el-icon-aim"></i>
            <span>拖拽</span>
          </div>
          <el-tag>拖拽，拖你咋地</el-tag>
        </div>
        <dragElTable />
      </el-card>
    </div>
  </div>
</template>
<script>
import chinaMap from '@/components/echarts-china/chinaMap'
import dragElTable from '@/components/table/drag/drag-el-table'
import treeElTable from '@/components/table/tree/tree-el-table'
import commonJs from '../../utils/common'
export default {
  components: { chinaMap, dragElTable, treeElTable },
  data() {
    return {
      nowTime: ''
    }
  },
  mounted() {
    this.nowTime = commonJs.getTimeState()
    console.log(this.nowTime)
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  .box-card {
    // width: 100%;
    margin-bottom: 2rem;
    // padding: 0 1rem;
    .header {
      flex-wrap: wrap;
      align-items: center;
      .header-left {
        align-items: center;
        margin-right: 2rem;
        i {
          margin-right: 0.5rem;
        }
        img {
          width: 4.5rem;
          height: 4.5rem;
          border-radius: 50%;
        }
        span {
          white-space: nowrap;
        }
      }
      .header-content {
        flex: auto;
        // width: calc(100% - 16rem);
        // min-width: 16rem;
        h3 {
          margin: 0.5rem 0 0 0;
        }
      }
      .header-footer {
        justify-content: flex-end;
        flex: 1;
        min-width: 8rem;
        margin-left: 2rem;
        text-align: right;
      }
    }
  }
}
</style>
