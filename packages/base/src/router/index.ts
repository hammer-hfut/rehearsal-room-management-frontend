import { createRouter, createWebHistory } from 'vue-router'
const TemplateVue = () => import('../view/template.vue')

const main = {
    origin:
    // process.env.NODE_ENV === 'production' 
    // TODO: 
    import.meta.env.PROD
        ? ''  // TODO: 线上地址
        : 'http://192.168.31.205:8089',
    pathName: '/main/'
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URl),
    routes: [
        {
            path: '/',
            name: 'Test',
            component: TemplateVue,
            meta: {
                ...main,
                name: '测试',
                title: 'test',
                auth: true
            }
        }
    ]
})

export default router
