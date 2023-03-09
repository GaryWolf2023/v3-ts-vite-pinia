import Layout from '@/layout/index.vue'
export const asyncRouter = [
    {
        path: '/',
        component: Layout,
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
        path: '/echarts',
        component: Layout,
        children: [
            {
                path: '/',
                name: 'echarts',
                meta: {title: 'echarts', icon: ''},
                component: () => import('@/views/home/index.vue')
            }
        ]
    },
    {
        path: '/role',
        component: Layout,
        children: [
            {
                path: '/',
                name: 'role',
                meta: {title: '权限管理', icon: ''},
                component: () => import('@/views/home/index.vue'),
                children: [
                    {
                        path: 'apiroles',
                        name: 'echarts',
                        meta: {title: 'echarts', icon: ''},
                        component: () => import('@/views/role/apirole/index.vue')
                    },
                    {
                        path: 'menuroles',
                        name: 'echarts',
                        meta: {title: 'echarts', icon: ''},
                        component: () => import('@/views/role/menurole/index.vue')
                    }
                ]
            }
        ]
    }
]