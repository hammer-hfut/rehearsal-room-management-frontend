import { createRouter, createWebHistory } from 'vue-router'
const TemplateVue = () => import('../components/template.vue')

const itemA = {
    origin:
    // process.env.NODE_ENV === 'production' 
    // TODO: 
    import.meta.env.PROD
        ? ''  // TODO: 线上地址
        : 'http://192.168.31.205:8089/',
    pathName: '/itemA/'
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URl),
    routes: [
        {
            path: '/',
            name: 'Test',
            component: TemplateVue,
            meta: {
                ...itemA,
                name: '测试',
                title: 'test',
                auth: true
            }
        }
    ]
})

export default router
