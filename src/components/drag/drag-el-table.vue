<template>
  <div class="drag-el-table">
    <el-table :data="newTableData" border row-key="id" align="left" style="width: 100%">
      <el-table-column
        v-for="(item, index) in col"
        :key="`col_${index}`"
        row-key="id"
        :sortable="dropCol[index].label === '日期' || dropCol[index].label === '姓名'"
        :label="item.label"
        :prop="dropCol[index].prop"
        :class-name="dropCol[index].label !== '地址' ? 'allow' : ''"
        show-overflow-tooltip
      >
        <template slot-scope="scope">
          <span v-if="dropCol[index].label === '操作'">
            <el-tag :type="scope.row[dropCol[index].prop] === '家' ? 'primary' : 'success'" disable-transitions>{{ scope.row[dropCol[index].prop] }}</el-tag>
          </span>
          <span v-else>{{ scope.row[dropCol[index].prop] }}</span>
        </template>
      </el-table-column>
    </el-table>
    <!-- <el-table border :data="newTableData" style="width: 100%">
      <el-table-column
        :prop="dropCol[0].prop"
        :label="col[0].label"
        sortable
        width="180"
        column-key="date"
        class-name="allow"
        :show-overflow-tooltip="dropCol[1].label == '地址'"
        :filters="[
          { text: '2016-05-01', value: '2016-05-01' },
          { text: '2016-05-02', value: '2016-05-02' },
          { text: '2016-05-03', value: '2016-05-03' },
          { text: '2016-05-04', value: '2016-05-04' }
        ]"
        :filter-method="filterHandler"
      >
      </el-table-column>
      <el-table-column :prop="dropCol[1].prop" :label="col[1].label" width="180" class-name="allow" :show-overflow-tooltip="dropCol[1].label == '地址'"> </el-table-column>
      <el-table-column :prop="dropCol[2].prop" :label="col[2].label" :show-overflow-tooltip="dropCol[2].label == '地址'"> </el-table-column>
      <el-table-column
        :prop="dropCol[3].prop"
        :label="col[3].label"
        width="150"
        class-name="allow"
        :show-overflow-tooltip="dropCol[3].label == '地址'"
        :filters="[
          { text: '家', value: '家' },
          { text: '公司', value: '公司' }
        ]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag :type="scope.row[dropCol[3].prop] === '家' ? 'primary' : 'success'" disable-transitions>{{ scope.row[dropCol[3].prop] }}</el-tag>
        </template>
      </el-table-column>
    </el-table> -->
  </div>
</template>

<script>
import Sortable from 'sortablejs'
export default {
  components: {
    // Sortable,
  },
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
        },
        {
          label: '操作',
          prop: 'tag'
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
        },
        {
          label: '操作',
          prop: 'tag'
        }
      ],
      tableData: [
        {
          id: '1',
          date: '2016-05-01',
          name: '王小虎1',
          address: '上海市普陀区金沙江路 100 弄',
          tag: '家'
        },
        {
          id: '2',
          date: '2016-05-02',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 200 弄',
          tag: '公司'
        },
        {
          id: '3',
          date: '2016-05-03',
          name: '王小虎3',
          address: '上海市普陀区金沙江路 300 弄',
          tag: '家'
        },
        {
          id: '4',
          date: '2016-05-04',
          name: '王小虎4',
          address: '上海市普陀区金沙江路 400 弄',
          tag: '公司'
        }
      ]
    }
  },
  mounted() {
    this.rowDrop()
    this.columnDrop()
    // this.filters = [...new Set(this.tableData.map((item) => item.tag))]
  },
  computed: {
    newTableData() {
      return this.tableData
    }
  },
  methods: {
    // filterTag(value, row) {
    //   return row.tag === value
    // },
    // formatter(row, column) {
    //   return row.address
    // },
    filterTag(value, row) {
      return row.tag === value
    },
    filterHandler(value, row, column) {
      const property = column['property']
      return row[property] === value
    },
    //行拖拽
    rowDrop() {
      // 此时找到的元素是要拖拽元素的父容器
      const tbody = document.querySelector('.drag-el-table .el-table__body-wrapper tbody')
      const _this = this
      Sortable.create(tbody, {
        handle: '.allow', //允许拖拽区域
        onEnd({ newIndex, oldIndex }) {
          console.log('拖拽行')
          //newIndex 新位置下标  oldIndex 原来所在位置下标
          // const currRow = _this.tableData.splice(oldIndex, 1)[0] //被拖拽行
          const currRow = _this.tableData[oldIndex] //拖拽行
          _this.tableData.splice(oldIndex, 1) //删除拖拽行
          _this.tableData.splice(newIndex, 0, currRow) //重新放置拖拽行
        }
      })
    },
    //列拖拽
    columnDrop() {
      const wrapperTr = document.querySelector('.drag-el-table .el-table__header-wrapper tr')
      this.sortable = Sortable.create(wrapperTr, {
        animation: 180,
        delay: 0,
        onEnd: evt => {
          console.log('拖拽列')
          const oldItem = this.dropCol[evt.oldIndex] //拖拽列
          this.dropCol.splice(evt.oldIndex, 1) //删除拖拽列
          this.dropCol.splice(evt.newIndex, 0, oldItem) //重新放置拖拽列
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.drag-el-table {
  width: 100%;
  min-height: 30rem;
}
</style>
