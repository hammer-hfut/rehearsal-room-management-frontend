import { createRouter, createWebHistory } from 'vue-router'

const itemA = {
    origin:
    // process.env.NODE_ENV === 'production' 
    // TODO: 
    import.meta.env.PROD
        ? ''
        : 'http://192.168.31.205:5173/'
}

// const router = createRouter({
//     history: createWebHistory(import.meta.env.BASE_URL)
//     // routes: [
//     //     {
//     //         path: '/',
//     //         name: 'home',
//     //         component: HomeView
//     //     },
//     //     {
//     //         path: '/about',
//     //         name: 'about',
//     //         // route level code-splitting
//     //         // this generates a separate chunk (About.[hash].js) for this route
//     //         // which is lazy-loaded when the route is visited.
//     //         component: () => import('../views/AboutView.vue')
//     //     }
//     // ]
// })

// export default router
