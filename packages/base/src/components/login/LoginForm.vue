<!--
 * @author prixii
 * @date 2024-04-21 10
 -->

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
import { requestLogin } from '../../apis/auth'
import { LoginResponse, type LoginData } from '../../apis/auth/types'
import { Response } from '../../apis/types'
import { generateKeySpec } from '../../utils/crypto/aes'
import { useGlobalStore } from '../../pinia/global'
import { requestTestToken } from '../../apis/auth/index'
import { md5Encrypt } from '../../utils/crypto/md5'
import { useRouter } from 'vue-router'

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
    let res:Response<LoginResponse>
    try {
        res = await requestLogin(loginData)
    } catch (error) {
        console.error(`Caught an error: ${error}`)
        throw error
    }
    if (res === undefined || res === null) throw new Error('登录异常')

    const timestamp = res.data.timestamp + loginData.timestamp
    const keySpec = generateKeySpec(timestamp.toString())
    globalStore.$patch({
        keySpec: keySpec,
        utoken: res.data.utoken,
        roles: res.data.user.basicRoles
    })

    testToken() // HACK Debug only 测调试 token 有效性

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
 
}
</style>
