export default{
    path:'/movie',
    component: () => import( '@/views/Movie'),
    //二级路由
    children:[
        {
            path:'/city',
            component: () => import( '@/components/city'),
        },
        {
            path:'/noeplaying',
            component: () => import( '@/components/noeplaying'),
        },
        {
            path:'/comingsoon',
            component: () => import( '@/components/comingsoon'),
        },
        {
            path:'/search',
            component: () => import( '@/components/search'),
        },
    ]
}