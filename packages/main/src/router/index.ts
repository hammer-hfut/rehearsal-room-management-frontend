import { createRouter, createWebHistory } from 'vue-router'

// TODO: 自动读取路径路由

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/notify'
        },
        {
            path: '/notify',
            name: 'Notify',
            component: () => import('../views/notify/index.vue')
        },
        {
            path: '/device',
            name: 'Device',
            component: () => import('../views/device/index.vue')
        },
        {
            path: '/appointment',
            name: 'Appointment',
            component: () => import('../views/appointment/index.vue')
        },
        {
            path: '/system',
            name: 'System',
            redirect: '/system/user',
            children: [
                {
                    path: '/system/user',
                    name: 'User',
                    component: () => import('../views/system/user/index.vue')
                },
                {
                    path: '/system/role',
                    name: 'Role',
                    component: () => import('../views/system/role/index.vue')
                },
                {
                    path: '/system/log',
                    name: 'Log',
                    component: () => import('../views/system/log/index.vue')
                },
                {
                    path: '/system/location',
                    name: 'Location',
                    component: () => import('../views/system/location/index.vue')
                }
            ]
        }
    ]
})

export default router
