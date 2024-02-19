<template>
    <div class="container">
        <iframe
            ref="content"
            class="main-iframe"
            :src="src"
            name="content"
            @load="postMsg"
        ></iframe>
    </div>
</template>

<script lang=ts>
import { nextTick } from 'vue'
import { computed } from 'vue'
import { defineComponent, ref, watch, type Ref } from 'vue'
import { useRouter } from 'vue-router'

type MessageData = {
    type: string,  // 区分发送信息类型
    data: any, // 发送数据
    [propName: string]: any
}

const useFramePostMessage = (iFrame: Ref<HTMLIFrameElement | null>) => {
    const postIframeMessage = (
        message: MessageData, 
        targetOrigin: any = '*'
    ) => {
        iFrame.value?.contentWindow?.postMessage(message, targetOrigin)
    }
    return {
        postIframeMessage
    }
}

const useFrameSrc = (iFrame: Ref<HTMLIFrameElement | null>) => {
    const router = useRouter()
    
    const { postIframeMessage } = useFramePostMessage(iFrame)

    let src = ref()
    const setSrc = () => {
        const { path, name, meta: { origin, pathName } } = router.currentRoute.value
        if(src.value === `${origin}${pathName}`) {
            nextTick(() => {
                postIframeMessage({
                    type: 'router',
                    data: { path, name }
                }, origin)
            })
        } else {
            src.value =  `${origin}${pathName}`
        }
    }

    const clientHeight = computed(() => iFrame.value?.clientHeight)
    const postHeight = () => {
        nextTick(() => {
            postIframeMessage({
                type: 'clientHeight',
                data: clientHeight.value
            })
        })
    }
    
    return {
        src,
        setSrc,
        postHeight,
        clientHeight
    }
}

export default defineComponent({
    setup() {
        const content = ref(null)
        const { setSrc, postHeight, clientHeight,...useFrameSrcInfo } =useFrameSrc(content)
        const router = useRouter()

        watch(() => router.currentRoute.value.path, () => {
            setSrc()
        }, {
            immediate: true
        })

        watch(() => clientHeight, () => {
            postHeight()
        },{
            immediate: true
        })

        // iframe 回调初始化
        const postMsg = () => {
            setSrc(),
            postHeight()
        }

        return {
            content,
            postMsg,
            ...useFrameSrcInfo
        }
    }
})

</script>

<style lang="scss" scope>
.container {
    flex: 1;
    overflow: hidden;

    .main-iframe {
        width: calc(100% - 20px * 2);
        height: calc(100% - 20px * 2);
        margin: 20px;
        border: 0;
    }
}

</style>
