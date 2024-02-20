<template>
    <div ref="mContainer" class="main-container">
        <router-view />
    </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
const mContainer= ref()

const setClientShow = (
    width: string |  number,
    height : string | number
) => {
    nextTick(() => {
        let containerStyle = mContainer.value.style
        containerStyle.width = width + 'px'
        containerStyle.height = height + 'px'
    })
}

const router = useRouter()

onMounted(() => {
    // let containerStyle = mContainer.value.style
    // containerStyle.height = window.innerHeight + 'px'
    // containerStyle.width = window.innerWidth + 'px'
    setClientShow(window.innerWidth, window.innerHeight)
})

// 基础消息处理
const receiveMsg = ({ data } : any) => {
    if(data.type === 'clientHeight') {
        const { width, height } = data.data
        setClientShow(width, height)
    } else if(data.type === 'router') {
        router.push(data.data)
    }
}
onMounted(() => {
    window.addEventListener('message', receiveMsg)
})
</script>

<style lang="scss" scoped>
.main-container {
    min-width: 568px;
    min-height: 568px;
}
</style>
