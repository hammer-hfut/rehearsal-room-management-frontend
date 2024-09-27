import { defineStore } from 'pinia'

import CryptoJS from 'crypto-js'
import type { RoleWithBandId } from '@/apis/auth/types'

interface GlobalState {
  keySpec: CryptoJS.lib.WordArray | null
  utoken: string | null
  roles: Array<RoleWithBandId>
  lifetime: number
}

export const useGlobalStore = defineStore('global', {
    state: (): GlobalState => {
        return {
            keySpec: null,
            utoken: null,
            roles: [],
            lifetime: -1
            // TODO lifetime token 刷新
        }
    },
    actions: {}
})
