<template>
    <aside>
        <a-menu
            :style="{ width: '220px', height: '100%' }"
            :default-selected-keys="['1']"
        >
            <div class="title">
                <div class="content">
                    <img
                        src="@/assets/logo.svg"
                        alt="Room logo"
                        width="28px"
                        height="28px"
                    />
                    琴房管理系统
                </div>
            </div>
            <!-- TODO: 项目排列优化-->
            <template 
                v-for="(item) in menuItem"
            >
                <a-sub-menu
                    v-if="item.children"
                    :key="item.key"
                >
                    <template #icon>
                        <component :is="item.icon" />
                    </template>
                    
                    <template #title>{{ item.name }}</template>
                    <a-menu-item
                        v-for="(child_name, child_key) in item.children"
                        :key="`${item.key}_${child_key}`"
                    >
                        {{ child_name }}
                    </a-menu-item>
                </a-sub-menu>

                <a-menu-item
                    v-else
                    :key="item.key"
                >
                    <template #icon>
                        <component :is="item.icon" />
                    </template>
                    {{ item.name }}
                </a-menu-item>
            </template>
        </a-menu>
    </aside>

    <footer>
        <!-- TODO: 账号插入 -->
        <div class="head-portrait">
            小华
        </div>
        <div class="name">
            <p>纯正的威士忌</p>
            <p>@李小华</p>
        </div>
        <div class="message">
            <a-badge :count="9">
                <a-avatar :size="32">
                    <span>
                        <icon-notification />
                    </span>
                </a-avatar>
            </a-badge>
        </div>
    </footer>
</template>

<script lang=ts setup>
import { menuItem } from './config'
import { IconNotification } from '@arco-design/web-vue/es/icon'
</script>

<style scoped lang=scss>
aside {
    width: 220px;
    height: 100vh;
    
    .title {
        display: flex;
        align-items: center;
        height: 60px;
        margin: 5px;
        font-size: 20px;
        font-weight: 500;
        color: #1d2129;

        .content {
            display: flex;

            img {
                margin-right: 8px;
            }
        }
    }
}

footer {
    position: fixed;
    bottom: 20px;
    display: flex;
    align-items: center;
    width: 220px;

    // background-color: #1d2129;

    .head-portrait{
        width: 32px;
        height: 32px;
        margin: 0 6px 0 12px;
        font-size: 12px;
        font-weight: 400px;
        line-height: 32px;
        color: #fff;
        text-align: center;
        background-color: #307AF2;
        border-radius: 50%;
    }
    
    .name {
        flex-grow: 2;
        flex-wrap: nowrap;
        width: 72px;
        margin-left: 0;
        font-size: 12px;
        line-height: 16px;
        color: #4e5969;

        p {
            margin: 0 10px 0 0;
        }
    }

    .message {
        flex-grow: 1;
    }

}
</style>