import { defineStore } from 'pinia'

import CryptoJS from 'crypto-js'
import type { RoleWithBandId } from '@/apis/auth/types'

interface GlobalState {
  keySpec: CryptoJS.lib.WordArray | null
  utoken: string | null
  roles: Array<RoleWithBandId>
  utokenLifetime: number
  lifetime: number
  key: number
}

export const useGlobalStore = defineStore('global', {
    // TODO 迁移 localStorage
    state: (): GlobalState => {
        return {
            keySpec: null,
            utoken: null,
            roles: [],
            utokenLifetime: -1,
            lifetime: -1,
            key: -1
            // TODO 通过 utokenLifetime 实现 utoken 刷新
            // TODO 通过 lifetime 实现 key 刷新
        }
    },
    actions: {}
})
