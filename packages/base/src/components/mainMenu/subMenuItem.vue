<template>
    <menu-item :menu-items="noChildren" />
    <a-sub-menu 
        v-for="item in hasChildren"
        :key="item.path"
    >
        <template #icon>
            <component :is="item.meta!.icon" />
        </template>
        <template #title>{{ item.meta!.name }}</template>
        <menu-item :menu-items="item.children" />
    </a-sub-menu>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'
import type { PropType } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import MenuItem from './menuItem.vue'

export default defineComponent({
    name: 'SubMenu',
    components: {
        MenuItem
    },
    props: {
        menuItems: {
            type: Array as PropType<RouteRecordRaw[]>,
            required: true,
            default: () => []
        }
    },
    setup(props) {
        const { menuItems } = props
        const groups = menuItems.reduce((groups, menu) => {
            if(menu.children) {
                groups['hasChildren'].push(menu)
            } else {
                groups['noChildren'].push(menu)
            }
            
            return groups
        }, {
            hasChildren: [] as RouteRecordRaw[],
            noChildren: [] as RouteRecordRaw[]
        })

        return {
            ...toRefs(groups)
        }
    }
})

</script>