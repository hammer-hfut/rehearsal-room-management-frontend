import type { Role } from '@/apis/auth/types'
import { defineStore } from 'pinia'
import type { GetAllRolesResponseElement, RoleGroup } from '../apis/role/types'
import type { Response } from '../apis/types'

export interface RoleState {
  roles: Map<number, Role>
  roleGroups: Array<RoleGroup>
}

export const useRoleStore = defineStore('role', {
    state: (): RoleState => {
        return {
            roles: new Map<number, Role>(),
            roleGroups: []
        }
    },
    actions: {
        updateRole(role: Role) {
            this.roles.set(role.id, role)
        },
        addRoleGroup(roleGroup: RoleGroup) {
            if (!this.roleGroups.includes(roleGroup)) {
                this.roleGroups.push(roleGroup)
            }
        },
        updateByResponse(response: Response<Array<GetAllRolesResponseElement>>) {
            response.data.forEach((item) => {
                if (item.roles) {
                    item.roles.forEach((role) => {
                        this.$state.roles.set(role.id, role)
                    })
                }
            })
            this.$state.roleGroups = response.data.map((item) => item.roleGroup)
        }
    }
})
