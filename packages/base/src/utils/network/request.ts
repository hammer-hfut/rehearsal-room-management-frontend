import axios from 'axios'
import router from '@/router'
import generateAuthToken from './auth'
import { useGlobalStore } from '@/pinia/global'

export const BASE = 'http://localhost:16458'
export const HTTPS_BASE = 'https://localhost:8443'

const REQUEST_TIME_OUT = 10000

const request = axios.create({
    baseURL: BASE,
    timeout: REQUEST_TIME_OUT
})
const tokenlessUrls = [ '/auth/login', '/captcha/img', '/captcha/verify' ]

const globalStore = useGlobalStore()

request.defaults.withCredentials = true

request.interceptors.request.use(
    async (config) => {
        const url = config.url
        if (url) {
            if (!tokenlessUrls.includes(url))
                config.headers.Authorization = generateAuthToken(url)
        } else {
            throw new Error('请求异常')
        }
        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)

request.interceptors.response.use(
    (resp) => {
    // 用户未登录,跳转到登录页面
        if (resp.status === 403) {
            globalStore.$reset()
            router.push({
                path: '/login',
                query: { redirect: router.currentRoute.value.fullPath }
            })
            return Promise.reject(null)
        } else if (Math.floor(resp.status / 100) === 2) {
            // 请求成功
            console.log(resp.data)
            return Promise.resolve(resp)
        } else {
            // 请求失败
            return Promise.reject(resp)
        }
    },
    (err) => {
        return Promise.reject(err)
    }
)

export default request
