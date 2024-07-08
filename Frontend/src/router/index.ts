import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomePage from 'src/pages/HomePage.vue';
import MainLayout from 'src/layouts/MainLayout.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: HomePage }
    ]
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
