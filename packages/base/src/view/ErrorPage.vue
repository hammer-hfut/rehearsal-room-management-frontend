<template>
    <div class="error-page-container">
        <div class="error-title">404!</div>
        <div class="s-h32"></div>
        <div class="error-message">你到异世界啦!!!!!!</div>
        <div class="error-foot">而且没被卡车创</div>
        <div class="s-h32"></div>
        <a-button type="primary" @click="backToEarth"> 点我回到地球</a-button>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const route = useRouter()

const backToEarth = () => route.push('/')
</script>

<style lang="scss" scoped>
.error-page-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;

    .error-title {
        font-size: 48px;
        text-align: center;
    }

    .error-message {
        font-size: 20px;
        text-align: center;
    }

    .error-foot {
        font-size: 10px;
        color: lightgray;
        text-align: center;
    }

    .s-h32 {
        height: 32px;
    }
}
</style>
