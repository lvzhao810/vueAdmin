<template>
  <div class="tree-el-table">
    <el-table border :data="tableData" style="width: 100%" row-key="id" lazy :load="load" :tree-props="{ children: 'children', hasChildren: 'hasChildren' }">
      <!-- <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip> </el-table-column> -->
      <el-table-column
        v-for="(item, index) in col"
        :key="`col_${index}`"
        show-overflow-tooltip
        :sortable="dropCol[index].label === '日期'"
        :prop="dropCol[index].prop"
        :label="item.label"
      ></el-table-column>
    </el-table>
  </div>
</template>
<script>
import Sortable from 'sortablejs'
export default {
  data() {
    return {
      col: [
        {
          label: '日期',
          prop: 'date'
        },
        {
          label: '姓名',
          prop: 'name'
        },
        {
          label: '地址',
          prop: 'address'
        }
      ],
      dropCol: [
        {
          label: '日期',
          prop: 'date'
        },
        {
          label: '姓名',
          prop: 'name'
        },
        {
          label: '地址',
          prop: 'address'
        }
      ],
      tableData: [
        {
          id: 1,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          hasChildren: true
        },
        {
          id: 2,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          id: 3,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          hasChildren: true
        },
        {
          id: 4,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  mounted() {
    // this.rowDrop()
    // this.columnDrop()
  },
  methods: {
    load(tree, treeNode, resolve) {
      switch(tree.id){
        case 1:
          setTimeout(() => {
            resolve([
              {
                id: 11,
                date: '2016-05-11',
                name: '王小虎11',
                address: '上海市普陀区金沙江路 1519 弄'
              },
              {
                id: 12,
                date: '2016-05-12',
                name: '王小虎12',
                address: '上海市普陀区金沙江路 1519 弄'
              }
            ])
          }, 100);
          break;
        case 3:
          setTimeout(() => {
            resolve([
              {
                id: 31,
                date: '2016-05-31',
                name: '王小虎31',
                address: '上海市普陀区金沙江路 1519 弄'
              },
              {
                id: 32,
                date: '2016-05-32',
                name: '王小虎32',
                address: '上海市普陀区金沙江路 1519 弄'
              }
            ])
          }, 100);
          break;
      }

    },
    //行拖拽
    rowDrop() {
      const tbody = document.querySelector('.tree-el-table .el-table__body-wrapper tbody')
      const _this = this
      Sortable.create(tbody, {
        onEnd({ newIndex, oldIndex }) {
          const currRow = _this.tableData.splice(oldIndex, 1)[0]
          _this.tableData.splice(newIndex, 0, currRow)
        }
      })
    },
    //列拖拽
    columnDrop() {
      const wrapperTr = document.querySelector('.tree-el-table .el-table__header-wrapper tr')
      this.sortable = Sortable.create(wrapperTr, {
        animation: 180,
        delay: 0,
        onEnd: evt => {
          const oldItem = this.dropCol[evt.oldIndex]
          this.dropCol.splice(evt.oldIndex, 1)
          this.dropCol.splice(evt.newIndex, 0, oldItem)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.tree-el-table {
  min-height: 30rem;
  overflow: auto;
}
</style>
