<template>
  <div class="Tables">
    <el-tabs v-model="editableTabsValue" type="border-card">
      <el-tab-pane v-for="(item, index) in editableTabs" :key="index" :label="item.title" :name="item.name">
        <dragElTable v-if="index == 0" />
        <treeElTable v-if="index == 1" />
        <showElTable v-if="index == 2" />
        <editElTable v-if="index == 3" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import dragElTable from '@/components/table/drag/drag-el-table'
import treeElTable from '@/components/table/tree/tree-el-table'
import showElTable from '@/components/table/tree/show-el-table'
import editElTable from '@/components/table/edit/edit-el-table'
export default {
  components: { dragElTable, treeElTable, showElTable, editElTable },
  data() {
    return {
      editableTabsValue: '1',
      editableTabs: [
        {
          title: '拖拽Table',
          name: '1',
          content: 'Tab 1 content'
        },
        {
          title: '树Table',
          name: '2',
          content: 'Tab 2 content'
        },
        {
          title: '展开Table-row',
          name: '3',
          content: 'Tab 3 content'
        },
        {
          title: '编辑Table',
          name: '4',
          content: 'Tab 4 content'
        }
      ]
    }
  },
  methods: {}
}
</script>
