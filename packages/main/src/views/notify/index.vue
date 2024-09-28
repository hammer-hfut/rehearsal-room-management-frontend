<template>
    <section>
        <div class="main-notice my-white">
            <a-button @click="handleClickInfo">Info</a-button>
        </div>
        <device />
        <!-- <div class="info-message my-white"></div> -->
    </section>
</template>

<script lang=ts setup>
import { Modal } from '@arco-design/web-vue'
import Device from '../device/index.vue'

const handleClickInfo = () => {
    Modal.info({
        title: 'Info Notification',
        content: 'This is an info description which directly indicates a neutral informative change or action.'
    })
}
</script>

<style scoped lang=scss>
section {
    height: 100%;
}

.main-notice {
    width: 200px;
    height: 100%;
}
</style>