import { aesEncrypt } from '../crypto/aes'
import { useGlobalStore } from '@/pinia/global'

const globalStore = useGlobalStore()
const generateAuthToken = (url: string) => {
    const utoken = globalStore.$state.utoken
    const keySpec = globalStore.$state.keySpec
    console.log('utoken', utoken)
    console.log('keySpec', keySpec)

    if (utoken === null || keySpec === null) {
        throw new Error('登录信息异常')
    }
    const urlToken = aesEncrypt(url, keySpec)
    return `Bearer ${utoken}${urlToken}`
}

export default generateAuthToken
