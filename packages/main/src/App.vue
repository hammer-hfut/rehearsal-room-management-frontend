<template>
    <div ref="mContainer" class="main-container">
        <notice />
    </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'
import Notice from './views/notice/index.vue'
const mContainer= ref()

onMounted(() => {
    mContainer.value.style.height = window.innerHeight + 'px'
})
const receiveMsg = ({ data } : any) => {
    if(data.type === 'clientHeight') {
        nextTick(() => {
            mContainer.value.style.height = data.data + 'px'
        })
    }
}
onMounted(() => {
    window.addEventListener('message', receiveMsg)
})
</script>

<style lang="scss" scoped>
.main-container {
    min-height: 568px;
}
</style>
