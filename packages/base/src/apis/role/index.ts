import request from '@/utils/network/request'
import type { GetAllRolesResponseElement } from './types'
import type { Response } from '../types'

export const requestGetAllRoles = (): Promise<
  Response<Array<GetAllRolesResponseElement>>
> => {
    return request({
        url: '/role',
        method: 'GET'
    })
}

export const requestGetOneRole = (id: number) => {
    return request({
        url: `/role/${id}`,
        method: 'GET'
    })
}
