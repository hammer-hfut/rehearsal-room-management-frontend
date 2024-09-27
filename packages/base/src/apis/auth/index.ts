import request from '@/utils/network/request'
import type { LoginData, LoginResponse } from './types'
import type { Response } from '../types'

export const requestLogin = (
    data: LoginData
): Promise<Response<LoginResponse>> => {
    return request({
        url: '/auth/login',
        method: 'POST',
        data
    })
}

export const requestCaptchaImg = (): Promise<Response<string>> => {
    return request({
        url: '/captcha/img',
        method: 'GET'
    })
}

export const requestTestToken = (): Promise<Response<string>> => {
    return request({
        url: '/auth/token',
        method: 'GET'
    })
}
