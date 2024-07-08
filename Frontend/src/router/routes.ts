import { RouteRecordRaw } from 'vue-router';
import MainLayout from 'layouts/MainLayout.vue';
import HomePage from 'pages/HomePage.vue';
import LoginPage from 'pages/LoginPage.vue';
import ChecklistsPage from 'pages/ChecklistsPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: HomePage },
      { path: 'login', component: LoginPage },
      { path: 'checklists', component: ChecklistsPage, meta: { requiresAuth: true } }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
