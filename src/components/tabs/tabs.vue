<template>
  <div class="Tabs">
    <!-- <div style="margin-bottom: 20px;">
      <el-button size="small" @click="addTab(editableTabsValue)">
        add tab
      </el-button>
    </div> -->
    <!-- <el-tabs v-model="editableTabsValue" type="border-card" closable @tab-remove="removeTab">
      <el-tab-pane v-for="(item, index) in editableTabs" :key="index" :label="item.title" :name="item.name">
        {{ item.content }}
      </el-tab-pane>
    </el-tabs> -->
    <el-tabs v-model="editableTabsValue" type="border-card">
      <el-tab-pane v-for="(item, index) in editableTabs" :key="index" :label="item.title" :name="item.name">
        <chinaMap v-if="index == 0" />
        <dragElTable v-if="index == 1" />
        <treeElTable v-if="index == 2" />
        <showElTable v-if="index == 3" />
        <message v-if="index == 4" />
        <messageBox v-if="index == 5" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import chinaMap from '@/components/echarts-china/chinaMap'
import dragElTable from '@/components/table/drag/drag-el-table'
import treeElTable from '@/components/table/tree/tree-el-table'
import showElTable from '@/components/table/tree/show-el-table'
import message from '@/components/message/message'
import messageBox from '@/components/message/messageBox'
export default {
  components: { chinaMap, dragElTable, treeElTable, showElTable, message, messageBox },
  data() {
    return {
      editableTabsValue: '1',
      editableTabs: [
        {
          title: '疫情Map',
          name: '1',
          content: 'Tab 1 content'
        },
        {
          title: '拖拽Table',
          name: '2',
          content: 'Tab 2 content'
        },
        {
          title: '树Table',
          name: '3',
          content: 'Tab 3 content'
        },
        {
          title: '展开Table-row',
          name: '4',
          content: 'Tab 4 content'
        },
        {
          title: 'Message消息提示',
          name: '5',
          content: 'Tab 5 content'
        },
        {
          title: 'MessageBox弹框',
          name: '6',
          content: 'Tab 6 content'
        }
      ],
      tabIndex: 5
    }
  },
  methods: {
    // addTab() {
    //   let newTabName = ++this.tabIndex + ''
    //   this.editableTabs.push({
    //     title: 'New Tab',
    //     name: newTabName,
    //     content: 'New Tab content'
    //   })
    //   this.editableTabsValue = newTabName
    // },
    // removeTab(targetName) {
    //   let tabs = this.editableTabs
    //   let activeName = this.editableTabsValue
    //   if (activeName === targetName) {
    //     tabs.forEach((tab, index) => {
    //       if (tab.name === targetName) {
    //         let nextTab = tabs[index + 1] || tabs[index - 1]
    //         if (nextTab) {
    //           activeName = nextTab.name
    //         }
    //       }
    //     })
    //   }
    //   this.editableTabsValue = activeName
    //   this.editableTabs = tabs.filter(tab => tab.name !== targetName)
    // }
  }
}
</script>
