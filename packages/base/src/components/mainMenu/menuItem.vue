<template>
    <a-menu-item
        v-for="item in menuItems"
        :key="item.path"
    >
        <template #icon>
            <component :is="item.meta!.icon" />
        </template>
        {{ item.meta!.name }}
    </a-menu-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

// TODO: 支持嵌套
export default defineComponent({
    props: {
        menuItems: {
            type: Array as PropType<RouteRecordRaw[]>,
            required: true,
            default: () => []
        }
    }
})

</script>