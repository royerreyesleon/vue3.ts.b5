import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const router = createRouter({
    // history: createWebHistory(import.meta.env.BASE_URL),
    history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue'),
      children: [
        {
          path: '/',
          redirect: 'users/index'
        },
        {
          path: 'users',
          name: 'users',
          redirect: 'users/index',
          children: [
            {
              path: 'index',
              name: 'user-index',
              component: () =>
                import(/* webpackChunkName: "user-index" */ '../views/users/IndexView.vue')
            },
            {
              path: 'create',
              name: 'user-create',
              component: () =>
                import(/* webpackChunkName: "user-create" */ '../views/users/CreateView.vue')
            },
            {
              path: 'detail/:id',
              name: 'user-detail',
              component: () =>
                import(/* webpackChunkName: "user-detail" */ '../views/users/DetailView.vue')
            },
            {
              path: 'update/:id',
              name: 'user-update',
              component: () =>
                import(/* webpackChunkName: "user-update" */ '../views/users/UpdateView.vue')
            }
          ]
        },
        {
          path: 'page1',
          name: 'page1',
          component: () => import(/* webpackChunkName: "page1" */ '../views/Page1View.vue')
        },
        {
          path: 'page2',
          name: 'page2',
          component: () => import(/* webpackChunkName: "page2" */ '../views/Page2View.vue')
        },
        {
          path: 'page3',
          name: 'page3',
          component: () => import(/* webpackChunkName: "page3" */ '../views/Page3View.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '../views/LoginPage.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import(/* webpackChunkName: "not-found" */ '../views/NotFoundView.vue')
    }
  ]
})

export default router
