<template>
  <div class="edit-table">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="日期" width="180">
        <template slot-scope="scope">
          <input type="text" v-model="scope.row.date" v-show="scope.row.iseditor" class="el-input__inner" />
          <span v-show="!scope.row.iseditor">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
        <template slot-scope="scope">
          <input type="text" v-model="scope.row.name" v-show="scope.row.iseditor" class="el-input__inner" />
          <span v-show="!scope.row.iseditor">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="address" show-overflow-tooltip label="地址">
        <template slot-scope="scope">
          <input type="text" v-model="scope.row.address" v-show="scope.row.iseditor" class="el-input__inner" />
          <span v-show="!scope.row.iseditor">{{ scope.row.address }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button v-if="!scope.row.iseditor" size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button v-if="!scope.row.iseditor" type="danger" size="small" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          <el-button v-else type="primary" size="small" @click="handleSave(scope.row)">保存</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          iseditor: false
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          iseditor: false
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          iseditor: false
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          iseditor: false
        }
      ]
    }
  },
  methods: {
    handleEdit(index, row) {
      row.iseditor = true
      console.log(index, row)
    },
    handleDelete(index, row) {
      row.iseditor = false
      console.log(index, row)
      this.$confirm('此操作将永久删除该行, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          setTimeout(() => {
            this.tableData.splice(index, 1) //删除行
            this.$Message.success('删除成功!')
          }, 300)
        })
        .catch(() => {
          this.$Message.info('已取消删除')
        })
    },
    handleSave(row, index) {
      row.iseditor = false
      console.log(index, row)
      // this.$message({
      //   showClose: true,
      //   message: '保存成功',
      //   type: 'success'
      // })
      this.$Message.success('保存成功')
    }
  }
}
</script>
<style lang="scss" scoped>
.edit-table {
  width: 100%;
  min-height: 30rem;
  padding: 10px;
}
</style>
