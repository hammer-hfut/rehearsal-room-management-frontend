import CryptoJS from 'crypto-js'

const options = {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
}

const aesEncrypt = (
    plainText: string,
    keySpec: string | CryptoJS.lib.WordArray
) => {
    const keys = typeof keySpec === 'string' ? generateKeySpec(keySpec) : keySpec
    const cipherText = CryptoJS.AES.encrypt(plainText, keys, options)
    return cipherText.toString()
}

const aesDecrypt = (
    cipherText: string,
    keySpec: string | CryptoJS.lib.WordArray
) => {
    const keys =
    typeof keySpec === 'string' ? CryptoJS.enc.Utf8.parse(keySpec) : keySpec
    const plainText = CryptoJS.AES.decrypt(cipherText, keys, options)
    return plainText.toString()
}

const generateKeySpec = (key: string) => {
    key = key.padStart(16, 'X')
    return CryptoJS.enc.Utf8.parse(key)
}

export { aesEncrypt, aesDecrypt, generateKeySpec }
