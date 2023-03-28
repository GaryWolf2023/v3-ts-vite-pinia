import Layout from '@/layout/index.vue'
export const asyncRouter = [
    {
        path: '/',
        component: () => import('@/layout/index.vue'),
        redirect: '/home',
        children: [
            {
                path: 'home',
                meta: { title: '首页', icon: '' },
                component: () => import('@/views/home/index.vue')
            }
        ]
    },
    {
        path: '/echarts',
        component: () => import('@/layout/index.vue'),
        redirect: '/echarts/pie-echarts',
        children: [
            {
                path: 'pie-echarts',
                meta: { title: '饼图', icon: '' },
                component: () => import('@/views/echarts/pie.vue'),
            },
            {
                path: 'line-echarts',
                meta: { title: '线性图', icon: '' },
                component: () => import('@/views/echarts/pie.vue'),
            }
        ]
    },
    {
        path: '/role',
        meta: { title: '权限管理', icon: '' },
        component: () => import('@/layout/index.vue'),
        children: [
            {
                path: 'apiroles',
                meta: { title: 'api管理', icon: '' },
                component: () => import('@/views/role/apirole/apirole.vue')
            },
            {
                path: 'menuroles',
                meta: { title: '菜单权限', icon: '' },
                component: () => import('@/views/role/menurole/menurole.vue')
            },
            {
                path: 'pageroles',
                meta: { title: '页面权限', icon: '' },
                component: () => import('@/views/role/pagerole/pagerole.vue')
            }
        ]
    }
]