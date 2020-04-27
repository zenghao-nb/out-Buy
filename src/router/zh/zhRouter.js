export default [
    {
        path: '/shouchang',
        name: 'Shoucang',
        component: () => import(/* webpackChunkName: "about" */ '../../views/zh/shoucang.vue')
    }
]