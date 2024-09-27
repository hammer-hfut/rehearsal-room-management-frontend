<template>
    <div class="login-container">
        <div class="content">
            <span class="filler"></span>
            <login-form />
        </div>
    </div>
</template>

<script lang="ts" setup>
import loginForm from '../components/login/LoginForm.vue'
</script>
<style lang="scss" scoped>
.login-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: #f7f8fa;
}

.content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;

    .filler {
        flex: 2;
    }
}
</style>
