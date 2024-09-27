<template>
    <div class="my-roles-container">
        <role-list />
        <div class="pad"></div>
        <role-tree />
    </div>
</template>

<script lang="ts" setup>
import RoleList from '../components/role/RoleList.vue'
import RoleTree from '../components/role/RoleTree.vue'
</script>

<style lang="scss" scoped>
.my-roles-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: rgb(247 248 250);

    .pad {
        width: 20px;
    }
}
</style>
