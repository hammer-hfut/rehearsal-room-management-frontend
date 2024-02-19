<template>
    <aside>
        <a-menu
            v-model:selected-keys="menuKey"
            :style="{ width: '220px', height: '100%' }"
            :default-selected-keys="[$route.path]"
            level-index="0"
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

            <sub-menu-item :menu-items="iframeRoutesInfo" />
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

<script lang=ts>
import { IconNotification } from '@arco-design/web-vue/es/icon'
import { computed, ref } from 'vue'
import { defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import SubMenuItem from './subMenuItem.vue'
import { watch } from 'vue'

export default defineComponent({
    components: {
        IconNotification,
        SubMenuItem
    },
    setup() {

        const router = useRouter()
        const route =  useRoute()

        const  menuKey =  ref([ route.path ])

        watch(menuKey, (v) => {
            router.push(v[0])
        }, { immediate: true })

        // 获取子项目路由
        const iframeRoutesInfo = computed(() => router.options.routes[0]?.children)
        return {
            menuKey,
            iframeRoutesInfo
        }
    }
})

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