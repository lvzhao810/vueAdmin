import MenuIndex from '@/components/menu/menuIndex.vue';

const componentsRouter = {
    path: '/components',
    name: 'components',
    component: MenuIndex,
    redirect: '@/views/components-demo/tabsPage',
    meta: {
        title: '组件',    // 菜单标题
        icon: 'el-icon-menu',  // 图标
        hasSubMenu: true,   // 是否包含子菜单
    },
    children: [
    // Tabs标签页
        {
            path: 'tabsPage',
            name: 'tabsPage',
            meta: {
                title: 'Tabs',    // 菜单标题,
                hasSubMenu: false    // 是否包含子菜单
            },
            component: () => import ('@/views/components-demo/tabsPage.vue')
        },
    //Tables多种表格
        {
            path: 'tablesPage',
            name: 'tablesPage',
            meta: {
                title: 'Tables',    // 菜单标题,
                hasSubMenu: false    // 是否包含子菜单
            },
            component: () => import ('@/views/components-demo/tablesPage.vue')
        },
        //Message多种表格
        {
            path: 'MessagePage',
            name: 'MessagePage',
            meta: {
                title: 'Message',    // 菜单标题,
                hasSubMenu: false    // 是否包含子菜单
            },
            component: () => import ('@/views/components-demo/MessagePage.vue')
        },
        //Drags多种拖拽场景
        {
            path: 'drags',
            name: 'drags',
            meta: {
                title: 'Drags',    // 菜单标题,
                hasSubMenu: false    // 是否包含子菜单
            },
            component: () => import ('@/views/components-demo/dragPage.vue')
        },
  ]
}


export default componentsRouter