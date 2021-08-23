<template>
  <div class="drags">
    <el-tabs v-model="editableTabsValue" type="border-card">
      <el-tab-pane v-for="(item, index) in editableTabs" :key="index" :label="item.title" :name="item.name">
        <dragElList v-if="index == 0" />
        <dragElTable v-if="index == 1" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import dragElTable from '@/components/drag/drag-el-table'
import dragElList from '@/components/drag/drag-el-list'

export default {
  components: { dragElTable, dragElList },
  data() {
    return {
      editableTabsValue: '1',
      editableTabs: [
        {
          title: 'dragList-拖拽列表',
          name: '1',
          content: 'Tab 1 content'
        },
        {
          title: 'dragTable-拖拽表格',
          name: '2',
          content: 'Tab 2 content'
        }
      ],
      tabIndex: 1
    }
  },
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped></style>
