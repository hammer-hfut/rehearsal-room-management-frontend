import request from '@/utils/network/request'
import type { LoginData, LoginResponse, RefreshKeyResponse } from './types'
import type { Response } from '../types'

const requestLogin = (
    data: LoginData
): Promise<Response<LoginResponse>> => {
    return request({
        url: '/auth/login',
        method: 'POST',
        data
    })
}

const requestRefreshToken = (key: number): Promise<Response<RefreshKeyResponse>> => {
    return request({
        url: `/auth/refresh/${key}`,
        method: 'PUT'
    })
}

const requestTestToken = (): Promise<Response<string>> => {
    return request({
        url: '/auth/token',
        method: 'GET'
    })
}

export { requestLogin, requestRefreshToken, requestTestToken }