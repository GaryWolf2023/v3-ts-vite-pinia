export const asyncRouter = [
    {
        path: '/',
        component: ()=>import('@/layout/index.vue'),
        redirect: 'home',
        children: [
            {
                path: 'home',
                name: 'home',
                meta: {title: '首页', icon: ''},
                component: () => import('@/views/home/index.vue')
            }
        ]
    },
    {
        path: '/',
        component: ()=>import('@/layout/index.vue'),
        redirect: 'home',
        children: [
            {
                path: 'home',
                name: 'home',
                meta: {title: '首页', icon: ''},
                component: () => import('@/views/home/index.vue')
            }
        ]
    },
    {
        path: '/',
        component: ()=>import('@/layout/index.vue'),
        redirect: 'home',
        children: [
            {
                path: 'home',
                name: 'home',
                meta: {title: '首页', icon: ''},
                component: () => import('@/views/home/index.vue')
            }
        ]
    },
    {
        path: '/',
        component: ()=>import('@/layout/index.vue'),
        redirect: 'home',
        children: [
            {
                path: 'home',
                name: 'home',
                meta: {title: '首页', icon: ''},
                component: () => import('@/views/home/index.vue')
            }
        ]
    },
]