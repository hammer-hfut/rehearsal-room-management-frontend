import CryptoJS from 'crypto-js'
export const md5Encrypt = (plainText: string) => {
    return CryptoJS.MD5(plainText).toString()
}
