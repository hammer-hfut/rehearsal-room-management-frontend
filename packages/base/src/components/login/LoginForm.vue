<template>
    <div class="login-form-container">
        <div class="title-container">
            <Logo :size="44" />
            <div class="title">琴房管理系统</div>
        </div>
        <div class="form-container">
            <div class="form-content">
                <div class="form-title-container">
                    <div class="form-title">密码登录</div>
                </div>
                <a-input
                    v-model="formData.username"
                    class="form-item"
                    placeholder="请输入用户名"
                />
                <a-input-password
                    v-model="formData.password"
                    class="form-item"
                    placeholder="请输入密码"
                    :default-visibility="false"
                />
            </div>
            <a-button
                class="login-button"
                type="primary"
                @click="doLogin"
            >
                登录
            </a-button>
        </div>
        <div class="footer-container"></div>
    </div>
</template>

<script lang="ts" setup>
import Logo from '../AppLogo.vue' 
import { reactive } from 'vue'
import { useGlobalStore } from '../../pinia/global'
import { requestTestToken } from '../../apis/auth/index'
import { md5Encrypt } from '../../utils/crypto/md5'
import { useRouter } from 'vue-router'
import { login, refreshKey } from '../../core/auth'
import { LoginData } from '../../apis/auth/types'

const router = useRouter()
const globalStore = useGlobalStore()
const formData = reactive({
    username: 's114514',
    password: '123456'
})
const doLogin = async () => {
    if (!isFormFinished()) throw new Error('登录信息不完整')

    const loginData: LoginData = {
        username: formData.username,
        timestamp: new Date().getTime(),
        password: md5Encrypt(formData.password)
    }
    await login(loginData)

    // HACK Debug only 测调试 token 有效性
    await testToken() 
    await testRefreshToken()
    router.push({ path: 'roles' })
}

const isFormFinished = () => formData.username !== '' && formData.password !== ''

const testToken = async () => {
    const keySpec = globalStore.$state.keySpec
    if (!keySpec) throw new Error('没有 Token 啊！')
    try {
        requestTestToken()
    } catch (error) {
        console.error(`Caught an error: ${error}`)
        throw error
    }
}

const testRefreshToken = async () => {
    const refreshResult = await refreshKey()
    console.log(refreshResult ? '刷新成功！' : '刷新失败！')
    testToken()

}
</script>

<style lang="scss" scoped>
.login-form-container {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 430px;
    min-height: 500px;
    padding: 40px;
    background-color: white;
    border-radius: 4px;
    box-shadow: 0 0 24px 0 rgb(228 235 248);

    .title-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        .title {
            margin-left: 12px;
            font-size: 28px;
        }
    }

    .form-container {
        display: flex;
        flex: 3;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 90%;
        margin-top: 20px;

        .form-content {
            display: flex;
            flex: 1;
            flex-direction: column;
            justify-content: center;
            width: 100%;
        }

        .login-button {
            width: 100%;
            height: 36px;
            margin-top: 32px;
            margin-bottom: 32px;
        }
    }

    .error-message {
        min-height: 14px;
        color: red;
    }

    .footer-container {
        flex: 2;
    }

    .form-title-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin-bottom: 32px;

        .form-title {
            padding: 8px 0;
            font-size: 16px;
            color: #165dff;
            border-bottom: 2.5px solid #165dff;
        }
    }

    .form-item {
        height: 36px;
        margin-bottom: 32px;
    }
}
</style>
