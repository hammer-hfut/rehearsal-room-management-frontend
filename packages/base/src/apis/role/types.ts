import type { Role } from '../auth/types'

export interface GetAllRolesResponseElement {
  roleGroup: RoleGroup
  roles: Array<Role> | null
}

export interface RoleGroup {
  id: number
  name: string
}
