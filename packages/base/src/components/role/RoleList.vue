<template>
    <div class="role-list-container">
        <div class="list-title">角色列表</div>
        <div class="role-list">
            <div
                v-for="roleGroup in roleStore.$state.roleGroups as RoleGroup[]"
                :key="roleGroup.id"
                class="role-group"
            >
                <div
                    class="role-group-item"
                    :class="{
                        'active-template': roleGroup.id == chosenGroup
                    }"
                    @click="chosenGroup = roleGroup.id"
                >
                    <div class="title">
                        <a-space size="large">
                            <icon-folder :style="{ fontSize: '18px' }" />
                        </a-space>
                        {{ roleGroup.name }}
                    </div>
                    <a-space size="large">
                        <icon-more :style="{ fontSize: '18px' }" />
                    </a-space>
                </div>
                <div v-if="roleGroup.id == chosenGroup" class="roles">
                    <div
                        v-for="([key, role]) in roleStore.$state.roles"
                        :key="key"
                        class="role-item"
                    >
                        <role-list-item
                            v-if="role.roleGroup?.id == roleGroup.id"
                            :role="role"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import RoleListItem from './RoleListItem.vue'
import { requestGetAllRoles } from '../../apis/role/index'
import { useRoleStore } from '../../pinia/role'
import { ref, onMounted } from 'vue'
import { IconFolder, IconMore } from '@arco-design/web-vue/es/icon'
import { RoleGroup } from '../../apis/role/types'

const roleStore = useRoleStore()

const chosenGroup = ref(-1)

const init = async () => {
    const res = await requestGetAllRoles()
    roleStore.updateByResponse(res)
}

onMounted(() => {
    init()
})

</script>

<style lang="scss" scoped>
.role-list-container {
    display: flex;
    flex-direction: column;
    min-width: 200px;
    padding: 0 20px;
    background-color: white;

    .list-title {
        margin: 10px 0;
        font-size: 18px;
        font-weight: bold;
    }

    .role-list {
        display: flex;
        flex-direction: column;

        .role-group-item {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            height: 36px;
            padding: 0 8px;
            margin: 1.5px 0;
            font-weight: bold;
            border-radius: 8px;

            &:hover {
                background-color: #b6d7ff;
                transition: background-color .2s ease;
            }

            .title {
                display: flex;
                align-items: center;
            }
        }

        .roles {
            padding-left: 20px;
        }

        .active-template {
            color: rgb(45 91 227);
            background-color: white;
            box-shadow: 0 0 6px 0 rgb(154 163 180);

            &:hover {
                background-color: #8ea5ea !important;
            }
        }
    }
}
</style>
