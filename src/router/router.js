import Main from '@/views/Main.vue';

export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        {
            path: 'home',
            title: 'Главная',
            name: 'home_index',
            component: () => import('@/views/home.vue')
        },
        {
            path: 'blog/:id',
            title: 'Блог',
            name: 'blog_post',
            component: () => import('@/views/blog/blog_post.vue')
        }
    ]
};

// Отлдельный массив для вывода пунктов меню
export const menuRouter = [
    {
        path: '/blog',
        icon: 'social-buffer',
        name: 'blog',
        title: 'Блог',
        component: Main,
        children: [
            {
                path: 'all',
                title: 'Все посты блога',
                name: 'blog_all',
                component: () => import('@/views/blog/all.vue')
            },
            {
                path: 'new',
                title: 'Новый пост в блоге',
                name: 'blog_new',
                component: () => import('@/views/blog/new.vue')
            },
            {
                path: 'edit',
                title: 'Редактирование поста',
                name: 'blog_edit',
                component: () => import('@/views/blog/edit.vue')
            }
        ]
    },
];

// общий массив рутов
export const routers = [
    otherRouter,
    ...menuRouter,
];
