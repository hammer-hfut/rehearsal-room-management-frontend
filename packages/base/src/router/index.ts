import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import {
    IconFile
} from '@arco-design/web-vue/es/icon'
import {
    BuildingFour,
    Speaker,
    People,
    AllApplication
} from '@icon-park/vue-next'

const MainVue = () => import('../view/main.vue')
const TemplateVue = () => import('../view/templateFrame/index.vue')

const main = {
    origin:
    import.meta.env.PROD
        ? ''  // TODO: 线上地址
        : 'http://localhost:8089',
    pathName: '/main/'
}

// 创建公共meta信息
const createMeta = (
    name: string,  
    title: string,
    icon?: any,
    auth?: boolean
) => {
    return {
        ...main,
        name,
        title,
        icon,
        auth
    }
}

const menuRouter: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Main',
        redirect: '/notify',
        component: MainVue,
        children: [
            {
                path: '/notify',
                name: 'Notify',
                meta: createMeta('公告', '公告', IconFile),
                component: TemplateVue
            },
            {
                path: '/appointment',
                name: 'Appointment',
                meta: createMeta('琴房预约', '琴房预约', BuildingFour),
                component: TemplateVue
            },
            {
                path: '/device',
                name: 'Device',
                meta: createMeta('设备管理', '设备管理', Speaker),
                component: TemplateVue
            },
            {
                path: '/band',
                name: 'Band',
                meta: createMeta('乐队管理', '乐队管理', People),
                component: TemplateVue,
                children: [
                    {
                        path: '/band/members',
                        name: 'Members',
                        meta: createMeta('乐队成员管理', '乐队成员管理'),
                        component: TemplateVue
                    }
                ]
            },
            {
                path: '/system',
                name: 'System',
                meta: createMeta('系统管理', '系统管理', AllApplication),
                redirect: '/system/users',
                children: [
                    {
                        path: '/system/user',
                        name: 'User',
                        meta: createMeta('用户管理', '用户管理'),
                        component: TemplateVue
                    },
                    {
                        path: '/system/role',
                        name: 'Role',
                        meta: createMeta('角色管理', '角色管理'),
                        component: TemplateVue
                    },
                    {
                        path: '/system/location',
                        name: 'Location',
                        meta: createMeta('琴房地点管理', '琴房地点管理'),
                        component: TemplateVue
                    },
                    {
                        path: '/system/log',
                        name: 'Log',
                        meta: createMeta('操作日志', '操作日志'),
                        component: TemplateVue
                    }
                ]
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URl),
    routes: [
        ...menuRouter,
        {
            path: '/login',
            name: 'Login',
            component: () => import('../view/login/index.vue'),
            meta: { title: '登录' }
        }
    ]
})

export default router