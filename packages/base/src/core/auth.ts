import { requestLogin, requestRefreshToken } from '@/apis/auth'
import type { LoginResponse, RefreshKeyResponse } from '@/apis/auth/types'
import type { Response } from '@/apis/types'
import type { LoginData } from '../apis/auth/types'
import { useGlobalStore } from '@/pinia/global'
import { generateKeySpec } from '@/utils/crypto/aes'

// 虽然是 core 但是还是有要改的
// 对于需要刷新 key 的情况，有特定的 Errcode，详见后端
// 403 就说明 utoken 过期了

const login = async (loginData: LoginData) => {
    const globalStore = useGlobalStore()
    let res:Response<LoginResponse>
    try {
        res = await requestLogin(loginData)
    } catch (error) {
        console.error(`Caught an error: ${error}`)
        throw error
    }
    if (res === undefined || res === null) throw new Error('登录异常')

    const key = res.data.timestamp + loginData.timestamp
    const keySpec = generateKeySpec(key.toString())

    // TODO 迁移 localStorage
    globalStore.$patch({
        keySpec: keySpec,
        utoken: res.data.utoken,
        roles: res.data.user.basicRoles,
        key: key,
        lifetime: res.data.lifetime,
        utokenLifetime: res.data.utokenLifetime
    })
}

/**
 * 全自动刷新 key
 * @returns 是否成功刷新
 */
// TODO 临近过期自动刷新
const refreshKey = async () => {
    const globalStore = useGlobalStore()
    const utoken = globalStore.$state.utoken
    let key = globalStore.$state.key
    if (utoken === null || key === -1) {
        console.log('utoken 信息为空')
        return false
    }
    let res :Response<RefreshKeyResponse>
    try {
        res = await requestRefreshToken(key)
    } catch (error) {
        console.log('刷新异常', error)
        return false
    }

    const lifetime = res.data.lifetime
    const rand = res.data.rand
    
    key += ((key % rand)%2 === 0)? -rand : rand
    const keySpec = generateKeySpec(key.toString())

    // TODO 迁移 localStorage
    globalStore.$patch({
        key: key,
        keySpec: keySpec,
        lifetime: lifetime
    })
    return true
}

/**
 * 获取 utoken 过期的时间
 * @returns key 过期的绝对时间
 */
const utokenExpireTime = ()  => {
    const globalStore = useGlobalStore()
    const now = Date.now()
    const lifetime = globalStore.$state.utokenLifetime
    return new Date(now + lifetime)}

const isUtokenExpired = () => {
    const now = Date.now()
    const lifetime = utokenExpireTime().getTime()
    return now > lifetime
}
/**
 * 获取 key 过期的时间
 * @returns key 过期的绝对时间
 */
const keyExpireTime = ()  => {
    const globalStore = useGlobalStore()
    const now = Date.now()
    const lifetime = globalStore.$state.lifetime
    return new Date(now + lifetime)}

const isKeyExpired = () => {
    const now = Date.now()
    const lifetime = keyExpireTime().getTime()
    return now > lifetime
}

export { login, refreshKey,utokenExpireTime, isUtokenExpired, keyExpireTime, isKeyExpired  }