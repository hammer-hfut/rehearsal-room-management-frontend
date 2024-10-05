export interface LoginData {
  username: string
  password: string
  timestamp: number
}

export interface LoginResponse {
  utoken: string
  lifetime: number
  utokenLifetime: number
  timestamp: number
  user: {
    realname: string
    basicRoles: Array<RoleWithBandId>
  }
}

export interface RefreshKeyResponse {
  rand: number
  lifetime: number
}

export interface RoleWithBandId {
  role: Role
  bandId: number
}

export interface Role {
  id: number
  name: string
  remark: string
  editable: boolean
  upperRole?: Role
  roleGroup?: RoleGroup
  children: Array<Role>
  userRoleBands: Array<UserRoleBand>
  users: Array<User>
}

interface RoleGroup {
  id: number
  name: string
}

interface UserRoleBand {
  id: number
  user: User
  role: Role
  band: Band
}

interface User {
  id: number
  username: string
  userRoleBands: Array<UserRoleBand>
  joinedBands: Array<Band>
  roles: Array<Role>
}

interface Band {}
