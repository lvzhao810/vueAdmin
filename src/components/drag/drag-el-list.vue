<template>
  <div class="drag-el-list">
    <div class="el-col el-col-24">
      <el-card class="el-col el-col-24 box-card" style="width:100%">
        <div slot="header" class="header flex-between-center">
          <div class="header-left flex">
            <i data-v-79aac9d9="" aria-hidden="true" class="el-icon-aim"></i>
            <span>Sortable control</span>
          </div>
        </div>
        <div class="panel-body">
          <div class="checkbox">
            <el-checkbox v-model="editable">启用拖放</el-checkbox>
          </div>
          <el-button size="small" @click="orderList">按原始顺序排序</el-button>
        </div>
      </el-card>
    </div>
    <div class="el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-md-12 el-col-lg-12 el-col-xl-12" style="padding-left: 0.4rem; padding-right: 0.4rem;">
      <draggable element="span" v-model="list" v-bind="dragOptions" ghost-class="ghost" :move="onMove" @start="isDragging = true" @end="isDragging = false">
        <transition-group name="flip-list" class="list-group" tag="ul" :style="list.length == 0 ? 'border: 1px solid #ddd;' : 'border: 0;'">
          <div class="list-group-item" v-for="(element, index) in list" @click="clickfn($event, index)" :key="element.order">
            <i :class="element.fixed ? 'el-icon-s-help' : 'el-icon-help'" :title="element.fixed ? '固定' : '拖拽'" @click="element.fixed = !element.fixed" aria-hidden="true"></i>
            {{ element.name }}
            <span class="delete-list"><i @click="deleteList(index)" class="el-icon-delete"></i></span>
            <span class="badge">{{ element.order }}</span>
          </div>
        </transition-group>
      </draggable>
    </div>
    <div class="el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-md-12 el-col-lg-12 el-col-xl-12" style="padding-left: 0.4rem; padding-right: 0.4rem;">
      <draggable element="span" v-model="list2" v-bind="dragOptions" :move="onMove" @start="isDragging = true" @end="isDragging = false">
        <transition-group name="no" class="list-group" tag="ul" :style="list2.length == 0 ? 'border: 1px solid #ddd;' : 'border: 0;'">
          <div class="list-group-item" v-for="element in list2" :key="element.order">
            <i :class="element.fixed ? 'el-icon-s-help' : 'el-icon-help'" :title="element.fixed ? '固定' : '拖拽'" @click="element.fixed = !element.fixed" aria-hidden="true"></i>
            {{ element.name }}
            <span class="badge">{{ element.order }}</span>
          </div>
        </transition-group>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
const message = ['vue.draggable', 'draggable', 'component', 'for', 'vue.js 2.0', 'based', 'on', 'Sortablejs']

export default {
  name: 'hello',
  components: {
    draggable
  },
  data() {
    return {
      list: message.map((name, index) => {
        return { name, order: index + 1, fixed: false }
      }),
      list2: [],
      editable: true,
      isDragging: false,
      delayedDragging: false
    }
  },
  methods: {
    orderList() {
      this.list = this.list.sort((one, two) => {
        return one.order - two.order
      })
      this.list2 = this.list2.sort((one, two) => {
        return one.order - two.order
      })
    },
    onMove({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element
      const draggedElement = draggedContext.element
      return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
    },
    clickfn(e) {
      console.log(e)
    },
    deleteList(index) {
      let currentList = this.list[index]
      this.list.splice(index, 1)
      this.list2.push(currentList)
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: 'description',
        disabled: !this.editable,
        ghostClass: 'ghost'
      }
    }
  },
  watch: {
    isDragging(newValue) {
      if (newValue) {
        this.delayedDragging = true
        return
      }
      this.$nextTick(() => {
        this.delayedDragging = false
      })
    }
  }
}
</script>

<style lang="scss">
.drag-el-list {
  width: 100%;
  min-height: 30rem;
  .box-card {
    .header {
      .header-left {
        i {
          margin-right: 0.5rem;
        }
      }
    }
    .panel-body {
      .checkbox {
        margin-bottom: 1rem;
      }
    }
  }
  .list-group {
    padding-left: 0;
    margin-bottom: 1rem;
    min-height: 2.5rem;
    border-radius: 4px;
    .list-group-item {
      position: relative;
      display: block;
      padding: 10px 15px;
      margin-bottom: -1px;
      background-color: #fff;
      border: 1px solid #ddd;
      cursor: move;
      // &:hover,
      // &:active {
      //   background: #dff0ff;
      //   transition: all 1s;
      // }
      &:first-child {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }
      &:last-child {
        margin-bottom: 0;
        border-bottom-right-radius: 4px;
        border-bottom-left-radius: 4px;
      }
    }
    .sortable-chosen {
      background: #a8d5fc;
    }
    .ghost {
      background-color: #30b08f;
      border-color: #4ab7bd;
      color: #fff;
      > .badge {
        background-color: #a8d5fc;
      }
    }
    .list-group-item > .badge {
      float: right;
      // display: inline-block;
      min-width: 10px;
      padding: 3px 7px;
      font-size: 12px;
      font-weight: bold;
      line-height: 1;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      background-color: #777;
      border-radius: 10px;
    }
    .delete-list {
      float: right;
      margin-left: 0.5rem;
      i {
        color: #f56c6c;
      }
    }
  }
}
.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.list-group {
  min-height: 2.5rem;
}

.list-group-item {
  cursor: move;
}

.list-group-item i {
  cursor: pointer;
}
</style>
