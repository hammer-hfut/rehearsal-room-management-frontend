import {
    IconFile
} from '@arco-design/web-vue/es/icon'

import {
    BuildingFour,
    Speaker,
    People,
    AllApplication
} from '@icon-park/vue-next'

const menuItem = [
    {
        key: '1',
        name: '公告',
        icon: IconFile
    },
    {   
        key: '2',
        name: '琴房预约',
        icon: BuildingFour
    },
    {
        key: '3',
        name: '设备管理',
        icon: Speaker
    },
    {
        key: '4',
        name: '乐队管理',
        icon: People,
        children: [ '乐队成员管理' ]
    },
    {
        key: '5',
        name: '系统管理',
        icon: AllApplication,
        children: [ '用户管理', '角色管理', '琴房地点管理', '操作日志' ]
    }
]

export { menuItem }