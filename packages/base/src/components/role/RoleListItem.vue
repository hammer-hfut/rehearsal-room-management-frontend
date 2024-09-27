<template>
    <div class="role-list-item-container">
        {{ props.role.name }}
    </div>
</template>

<script lang="ts" setup>
import { Role } from '../../apis/auth/types'
const props = defineProps<{ role: Role }>()
</script>

<style lang="scss" scoped>
.role-list-item-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 36px;
    padding-left: 8px;
    margin: 1.5px 0;
    font-weight: bold;
    border-radius: 8px;

    &:hover {
        cursor: pointer;
        background-color: #b6d7ff;
        transition: background-color .2s ease;
    }
}
</style>
