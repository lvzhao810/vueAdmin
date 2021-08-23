<template>
  <div class="Message">
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
        <message v-if="index == 0" />
        <messageBox v-if="index == 1" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import message from '@/components/message/message'
import messageBox from '@/components/message/messageBox'
export default {
  components: { message, messageBox },
  data() {
    return {
      editableTabsValue: '1',
      editableTabs: [
        {
          title: 'Message消息提示',
          name: '1',
          content: 'Tab 1 content'
        },
        {
          title: 'MessageBox弹框',
          name: '2',
          content: 'Tab 2 content'
        }
      ],
      tabIndex: 1
    }
  },
  methods: {}
}
</script>
